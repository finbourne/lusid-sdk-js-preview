// Require the LUSID client and libraries
import { client } from './clientBuilder'

describe('Collect Metatdata', () => {
  it('Should fetch the LUSID version information', (done) => {
    client.api.applicationMetadata.getLusidVersions()
      .then(() => done())
      .catch((err) => done(`Failed to fetch the LUSID version information. Error: ${err.toString()}`))
  })
})

export { };
