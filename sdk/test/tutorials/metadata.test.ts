// Require the LUSID client and libraries
import {client} from './clientBuilder'

describe('Collect Metatdata', () => {
  it('Should fetch the LUSID version information', (done) => {
    client.api.applicationMetadata.getLusidVersions()
    .then((result) => {
      console.log(result.body)
      done()
    })
    .catch((err) => {
      console.error(err.response.statusCode, err.response.statusMessage)
      done(new Error(JSON.stringify(err.response.body)))
    })
  })
})

export {};
