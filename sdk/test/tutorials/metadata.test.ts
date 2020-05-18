// Test specific libraries
import mlog from 'mocha-logger';

// Require the LUSID client and libraries
import {client} from './clientBuilder'

describe('Collect Metatdata', () => {
  it('Should fetch the LUSID version information', (done) => {
    client.api.applicationMetadata.getLusidVersions()
    .then((result) => {

      mlog.log( `Got LUSID API v${result.body.apiVersion}, Build ${result.body.buildVersion}, Excel ${result.body.excelVersion}` );

      done()
    })
    .catch((err) => console.log(err.response.statusCode, err.response.statusMessage))
  })
})

export {};
