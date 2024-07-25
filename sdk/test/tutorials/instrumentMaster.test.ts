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
import { client } from './clientBuilder';

enum FileType {
  Json = "Json",
  Csv = "Csv",
}

const uuid4 = require('uuid/v4');
const csv = require('csvtojson');
let uniqueScope = 'Performance' + uuid4();
const debugHeaders = ['lusid-meta-requestid'];

// Create a custom property using the LUSID model
let sectorDataTypeId = new ResourceId();
sectorDataTypeId.scope = "system";
sectorDataTypeId.code = "string";

// Create a property definition request to define a new property in LUSID
let sectorProp = new CreatePropertyDefinitionRequest();
sectorProp.domain = CreatePropertyDefinitionRequest.DomainEnum.Instrument;
sectorProp.scope = uniqueScope;
sectorProp.code = 'Sector';
sectorProp.valueRequired = true;
sectorProp.displayName = 'Sector';
sectorProp.dataTypeId = sectorDataTypeId;
sectorProp.lifeTime = CreatePropertyDefinitionRequest.LifeTimeEnum.TimeVariant;

describe('Load Instrument Master', () => {
  it('Should upsert instruments into LUSID', async () => {
    try {
      const instruments = await getInstrumentsFromFile('./instruments.json', FileType.Json);
      await upsertInstruments(instruments);
    } catch (err) {
      throw new Error(`Failed to upsert instruments. Error: ${err.toString()}`);
    }
  });
});

describe('Create property definitions', () => {
  it('Should create a sector property in LUSID', async () => {
    try {
      await createProperty(sectorProp);
    } catch (err) {
      throw new Error(`Failed to create the sector property. Error: ${err.toString()}`);
    }
  });
});

describe('Add properties on instruments', () => {
  it('Should add the sector property on each instrument', async () => {
    try {
      const requests = await getPropertyRequestsFromFile('./instrument-properties.json', 'Sector', FileType.Json);
      await upsertInstrumentProperties(requests);
    } catch (err) {
      throw new Error(`Failed to add sector property to instruments. Error: ${err.toString()}`);
    }
  });
});

// Import your instruments from a CSV file
async function loadFromCsv(filePath: string): Promise<any[]> {
  try {
    const instruments = await csv().fromFile(filePath);
    return instruments;
  } catch (err) {
    throw new Error(`Failed to load instruments from CSV. Error: ${err.toString()}`);
  }
}

// Import your instruments from a JSON file
async function loadFromJson(filePath: string): Promise<any[]> {
  try {
    const instruments = require(filePath);
    return instruments;
  } catch (err) {
    throw new Error(`Failed to load instruments from JSON. Error: ${err.toString()}`);
  }
}

// Upsert a set of instrument definitions into LUSID
async function upsertInstruments(instruments: InstrumentDefinition[]): Promise<UpsertInstrumentsResponse> {
  const body: { [instrumentName: string]: InstrumentDefinition } = {};

  instruments.forEach(instrument => {
    body[instrument.name] = instrument;
  });

  try {
    const res = await client.api.instruments.upsertInstruments(body, uniqueScope);
    getLoggingInfo(res?.response?.rawHeaders, debugHeaders, 'upsertInstruments');
    return res.body;
  } catch (err) {
    throw new Error(`Failed to upsert instruments. Error: ${err.toString()}`);
  }
}

// Use your client to call LUSID and create a new property
async function createProperty(propertyDefintion: CreatePropertyDefinitionRequest): Promise<PropertyDefinition> {
  try {
    const res = await client.api.propertyDefinitions.createPropertyDefinition(propertyDefintion);
    getLoggingInfo(res?.response?.rawHeaders, debugHeaders, 'createPropertyDefinition');
    return res.body;
  } catch (err) {
    throw new Error(`Failed to create property. Error: ${err.toString()}`);
  }
}

// Construct a property that we can add to a LUSID instrument
function buildInstrumentProperty(key: string, value: string): Property {
  let instrumentProperty = new Property();
  instrumentProperty.key = key;

  let instrumentPropertyValue = new PropertyValue();
  instrumentPropertyValue.labelValue = value;
  instrumentProperty.value = instrumentPropertyValue;

  return instrumentProperty;
}

// Use your client to add a property to a particular instrument in LUSID
async function upsertInstrumentProperties(requests: UpsertInstrumentPropertyRequest[]): Promise<UpsertInstrumentPropertiesResponse> {
  try {
    const res = await client.api.instruments.upsertInstrumentsProperties(requests, uniqueScope);
    getLoggingInfo(res?.response?.rawHeaders, debugHeaders, 'upsertInstrumentProperties');
    return res.body;
  } catch (err) {
    throw new Error(`Failed to upsert instrument properties. Error: ${err.toString()}`);
  }
}

// Load our instrument definitions from a file
async function getInstrumentsFromFile(filePath: string, fileType: FileType): Promise<InstrumentDefinition[]> {
  let loadFunction;
  if (fileType == FileType.Json) {
    loadFunction = loadFromJson(filePath);
  } else {
    loadFunction = loadFromCsv(filePath);
  }

  const instruments = await loadFunction;
  return instruments.map((instrument: any) => {
    let definition = new InstrumentDefinition();

    let cusipIdentifier = new InstrumentIdValue();
    cusipIdentifier.value = instrument.CUSIP;

    let isinIdentifier = new InstrumentIdValue();
    isinIdentifier.value = instrument.ISIN;

    let tickerIdentifier = new InstrumentIdValue();
    tickerIdentifier.value = instrument.Ticker;

    let figiIdentifier = new InstrumentIdValue();
    figiIdentifier.value = instrument.Figi;

    definition.name = instrument.Name;
    definition.identifiers = {
      "Cusip": cusipIdentifier,
      "Isin": isinIdentifier,
      "Ticker": tickerIdentifier,
      "Figi": figiIdentifier
    };

    return definition;
  });
}

async function getPropertyRequestsFromFile(filePath: string, propertyName: string, fileType: FileType): Promise<UpsertInstrumentPropertyRequest[]> {
  const loadFunction = fileType === FileType.Json ? loadFromJson(filePath) : loadFromCsv(filePath);
  
  const properties = await loadFunction;
  return properties.map((property: any) => {
    let instrumentPropertyRequest = new UpsertInstrumentPropertyRequest();
    instrumentPropertyRequest.identifierType = "Figi";
    instrumentPropertyRequest.identifier = property.Figi;
    instrumentPropertyRequest.properties = [
      buildInstrumentProperty(
        `Instrument/${uniqueScope}/${propertyName}`,
        property[propertyName]
      )
    ];
    return instrumentPropertyRequest;
  });
}


function getLoggingInfo(headers: string[], keysToSearch: string[], functionCallName: string) {
  if (headers) {
    for (const key of keysToSearch) {
      const index = headers.findIndex((header) => header === key);
      if (index > -1) {
        console.log(`${functionCallName}: ${headers[index]}: ${headers[index + 1]}`);
      }
    }
  }
}

export {};
