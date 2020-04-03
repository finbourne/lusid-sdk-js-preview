import { Client, Source } from '../../client/client'

// export var client = new Client(
//   [Source.Environment, 'FBN_TOKEN_URL'],
//   [Source.Environment, 'FBN_USERNAME'],
//   [Source.Environment, 'FBN_PASSWORD'],
//   [Source.Environment, 'FBN_CLIENT_ID'],
//   [Source.Environment, 'FBN_CLIENT_SECRET'],
//   [Source.Environment, 'FBN_LUSID_API_URL'],
// )

export var client = new Client(
  [Source.Secrets, 'tokenUrl'],
  [Source.Secrets, 'username'],
  [Source.Secrets, 'password'],
  [Source.Secrets, 'clientId'],
  [Source.Secrets, 'clientSecret'],
  [Source.Secrets, 'apiUrl']
)