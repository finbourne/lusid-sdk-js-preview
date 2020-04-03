// Test specific libraries
import mlog from 'mocha-logger';

// Require the LUSID SDK and libraries
import {
  GetInstrumentsResponse,
  ResourceListOfInstrumentIdTypeDescriptor,
  InstrumentDefinition,
  InstrumentsApi,
  PortfolioHolding, Portfolio } from "../../api";

import { client } from './clientBuilder'
import { IncomingMessage } from "http";
import { LusidProblemDetails, IdentifierPartSchema } from "../../model/models";

const getHoldings = () => {
  return new Promise((resolve, reject) => {

    client.api.( 'Figi', [ 'Instrument/default/Figi' ] )
    .then((res: {response: IncomingMessage; body: GetInstrumentsResponse}) => {
      resolve( res.body )
    })
    .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err))

  } );
}

describe('Holdings', () => {
  it('Should get instruments', (done) => {
    getHoldings().then( ( instrumentsList ) => {

      console.log( instrumentsList );

      done();
    } )
    .catch((err) => mlog.error(err.response.statusCode, err.response.statusMessage))
  });
})

export {};
