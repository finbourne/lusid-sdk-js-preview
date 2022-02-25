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

// Create a custom property using the LUSID model
let sectorDataTypeId = new ResourceId()
sectorDataTypeId.scope = "system"
sectorDataTypeId.code = "string"

// Create a property definition request to define a new property
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
  it('Should create a sector property', (done) => {
    createProperty(sectorProp)
      .then(() => done())
      .catch((err) => done(`Failed to create the sector property. Error: ${err.toString()}`))
  })
})

describe('Add properties on instruments', () => {
  it('Should add the sector property on each instrument', (done) => {
    getPropertiesFromFile('./instrument-properties.json', 'Sector', FileType.Json)
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
  // Returns a promise
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
  // Returns a promise
  return new Promise((resolve, reject) => {
    // Use the csvtojson module to import a CSV file
    try {
      let instruments = require(filePath)
      resolve(instruments)
    } catch (err) {
      reject(err)
    }
  })
}

function upsertInstruments(instruments: InstrumentDefinition[])
  : Promise<UpsertInstrumentsResponse> {
  return new Promise((resolve, reject) => {
    let body: { [instrumentName: string]: InstrumentDefinition } = {}

    instruments.forEach(instrument => {
      body[instrument.name] = instrument
    });

    client.api.instruments.upsertInstruments(body, uniqueScope)
      .then((res: any) => resolve(res.body))
      .catch((err: any) => reject(err))
  })
}

// Use your client to call LUSID and create a new property
function createProperty(
  propertyDefintion: CreatePropertyDefinitionRequest):
  Promise<PropertyDefinition> {
  // Return a promise
  return new Promise((resolve, reject) => {
    // Use your client to call create property definition
    client.api.propertyDefinitions.createPropertyDefinition(propertyDefintion)
      .then((res: any) => resolve(res.body))
      .catch((err: any) => reject(err))
  })
}

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

function upsertInstrumentProperties(
  requests: UpsertInstrumentPropertyRequest[]):
  Promise<UpsertInstrumentPropertiesResponse> {
  return new Promise((resolve, reject) => {
    client.api.instruments.upsertInstrumentsProperties(requests, uniqueScope)
      .then((res) => resolve(res.body))
      .catch((err: any) => reject(err))
  })
}

/**
 * Function to take an instrument object and convert it into a LUSID model
 * Inputs
 * instrument (dictionary) - Object with key-value attribute pairs describing the instrument
 * Returns
 * InstrumentDefinition (lusid.InstrumentDefinition) LUSID model for an instrument definition
 */
function getInstrumentsFromFile(
  filePath: string,
  fileType: FileType):
  Promise<InstrumentDefinition[]> {
  if (fileType == FileType.Json) {
    var loadFunction = loadFromJson(filePath)
  } else {
    var loadFunction = loadFromCsv(filePath)
  }

  return loadFunction.then((instruments: any[]) => {
    // Use a reduce function to convert each instrument object into a LUSID model
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

function getPropertiesFromFile(
  filePath: string,
  propertyName: string,
  fileType: FileType):
  Promise<UpsertInstrumentPropertyRequest[]> {
  if (fileType == FileType.Json) {
    var loadFunction = loadFromJson(filePath)
  } else {
    var loadFunction = loadFromCsv(filePath)
  }

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

export { };
