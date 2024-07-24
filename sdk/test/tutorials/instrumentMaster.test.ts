// Require the LUSID SDK and libraries
import {
  InstrumentDefinition,
  UpsertInstrumentsResponse,
  PropertyDefinition,
  CreatePropertyDefinitionRequest,
  UpsertInstrumentPropertiesResponse,
  UpsertInstrumentPropertyRequest,
  ResourceId,
  InstrumentIdValue,
  Property, PropertyValue
} from "../../api";
import { client } from './clientBuilder'

enum FileType {
  Json = "Json",
  Csv = "Csv",
}

const uuid4 = require('uuid/v4')
const csv = require('csvtojson')
let uniqueScope = 'Performance' + uuid4()
const debugHeaders = ['lusid-meta-requestid']

// Create a custom property using the LUSID model
let sectorDataTypeId = new ResourceId()
sectorDataTypeId.scope = "system"
sectorDataTypeId.code = "string"

// Create a property definition request to define a new property in LUSID
let sectorProp = new CreatePropertyDefinitionRequest()
sectorProp.domain = CreatePropertyDefinitionRequest.DomainEnum.Instrument
sectorProp.scope = uniqueScope
sectorProp.code = 'Sector'
sectorProp.valueRequired = true
sectorProp.displayName = 'Sector'
sectorProp.dataTypeId = sectorDataTypeId
sectorProp.lifeTime = CreatePropertyDefinitionRequest.LifeTimeEnum.TimeVariant

describe('Load Instrument Master', () => {
  it('Should upsert instruments into LUSID', (done) => {
    getInstrumentsFromFile('./instruments.json', FileType.Json)
      .then((instruments: InstrumentDefinition[]) => {
        upsertInstruments(instruments)
          .then(() => done())
          .catch((err) => done(`Failed to upsert instruments. Error: ${err.toString()}`))
      })
      .catch((err) => done(`Failed to get instruments to upsert. Error: ${err.toString()}`))
  })
})

describe('Create property definitions', () => {
  it('Should create a sector property in LUSID', (done) => {
    createProperty(sectorProp)
      .then(() => done())
      .catch((err) => done(`Failed to create the sector property. Error: ${err.toString()}`))
  })
})

describe('Add properties on instruments', () => {
  it('Should add the sector property on each instrument', (done) => {
    getPropertyRequestsFromFile('./instrument-properties.json', 'Sector', FileType.Json)
      .then((requests: UpsertInstrumentPropertyRequest[]) => {
        upsertInstrumentProperties(requests)
          .then(() => done())
          .catch((err) => done(`Failed to add sector property to instruments. Error: ${err.toString()}`))
      })
      .catch((err) => done(`Failed to get instruments to add properties to. Error: ${err.toString()}`))
  })
})

// Import your instruments from a CSV file
function loadFromCsv(filePath: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    // Use the csvtojson module to import a CSV file
    csv()
      .fromFile(filePath)
      // Produces an array of objects, one for each row (instrument) of the CSV
      .then((instruments: any[]) => resolve(instruments))
      .catch((err) => reject(err))
  })
}

// Import your instruments from a JSON file
function loadFromJson(filePath: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    try {
      let instruments = require(filePath)
      resolve(instruments)
    } catch (err) {
      reject(err)
    }
  })
}

// Upsert a set of instrument definitions into LUSID
function upsertInstruments(instruments: InstrumentDefinition[])
  : Promise<UpsertInstrumentsResponse> {
  return new Promise((resolve, reject) => {
    let body: { [instrumentName: string]: InstrumentDefinition } = {}

    // Add each instrument definition to a dictionary
    instruments.forEach(instrument => {
      body[instrument.name] = instrument
    });

    client.api.instruments.upsertInstruments(body, uniqueScope)
      .then((res: any) => {
        getLoggingInfo(res?.response?.rawHeaders,debugHeaders,'upsertInstruments')
        resolve(res.body)
      })
      .catch((err: any) => reject(err))
  })
}

// Use your client to call LUSID and create a new property
function createProperty(
  propertyDefintion: CreatePropertyDefinitionRequest):
  Promise<PropertyDefinition> {
  return new Promise((resolve, reject) => {
    // Use your client to call create property definition
    client.api.propertyDefinitions.createPropertyDefinition(propertyDefintion)
      .then((res: any) => {
        getLoggingInfo(res?.response?.rawHeaders,debugHeaders,'createPropertyDefinition')
        resolve(res.body)
      })
      .catch((err: any) => reject(err))
  })
}

// Construct a property that we can add to a LUSID instrument
function buildInstrumentProperty(key: string, value: string): Property {
  // Initialize the property key (Instrument/Scope/PropertyName)
  let instrumentProperty = new Property()
  instrumentProperty.key = key

  // Initialize the property value
  let instrumentPropertyValue = new PropertyValue()
  instrumentPropertyValue.labelValue = value
  instrumentProperty.value = instrumentPropertyValue

  return instrumentProperty
}

// Use your client to add a property to a particular instrument in LUSID
function upsertInstrumentProperties(
  requests: UpsertInstrumentPropertyRequest[]):
  Promise<UpsertInstrumentPropertiesResponse> {
  return new Promise((resolve, reject) => {
    client.api.instruments.upsertInstrumentsProperties(requests, uniqueScope)
      .then((res: any) => {
        getLoggingInfo(res?.response?.rawHeaders,debugHeaders,'upsertInstrumentProperties')
        resolve(res.body)
      })
      .catch((err: any) => reject(err))
  })
}

// Load our instrument definitions from a file
function getInstrumentsFromFile(
  filePath: string,
  fileType: FileType):
  Promise<InstrumentDefinition[]> {
  // Read our set of instruments objects from a file
  if (fileType == FileType.Json) {
    var loadFunction = loadFromJson(filePath)
  } else {
    var loadFunction = loadFromCsv(filePath)
  }

  return loadFunction.then((instruments: any[]) => {
    // Use a map function to convert each instrument object into a LUSID model
    return instruments.map((instrument: any) => {
      let definition: InstrumentDefinition = new InstrumentDefinition()

      let cusipIdentifier = new InstrumentIdValue()
      cusipIdentifier.value = instrument.CUSIP

      let isinIdentifier = new InstrumentIdValue()
      isinIdentifier.value = instrument.ISIN

      let tickerIdentifier = new InstrumentIdValue()
      tickerIdentifier.value = instrument.Ticker

      let figiIdentifier = new InstrumentIdValue()
      figiIdentifier.value = instrument.Figi

      definition.name = instrument.Name
      definition.identifiers = {
        "Cusip": cusipIdentifier,
        "Isin": isinIdentifier,
        "Ticker": tickerIdentifier,
        "Figi": figiIdentifier
      }

      return definition
    })
  })
}

// Construct a set of requests that will allow us to add new properties to LUSID instruments
function getPropertyRequestsFromFile(
  filePath: string,
  propertyName: string,
  fileType: FileType):
  Promise<UpsertInstrumentPropertyRequest[]> {
  // Load our property values from file
  if (fileType == FileType.Json) {
    var loadFunction = loadFromJson(filePath)
  } else {
    var loadFunction = loadFromCsv(filePath)
  }

  // Create an upsert request for each property in the file
  return loadFunction.then((properties) => {
    return properties.map((property) => {
      let instrumentPropertyRequest = new UpsertInstrumentPropertyRequest()
      instrumentPropertyRequest.identifierType = "Figi"
      instrumentPropertyRequest.identifier = property.Figi
      instrumentPropertyRequest.properties = [
        buildInstrumentProperty(
          `Instrument/${uniqueScope}/${propertyName}`,
          property[propertyName]
        )
      ]
      return instrumentPropertyRequest
    })
  })
}

function getLoggingInfo(headers: string[], keysToSearch: string[], functionCallName: string)
{
  if(headers) {
    for(const key of keysToSearch) {
      const index = headers.findIndex((header)=> header===key)
      if(index > -1){
        console.log(`${functionCallName}: ${headers[index]}: ${headers[index+1]}`)
      }
    }
  }

}

export { };
