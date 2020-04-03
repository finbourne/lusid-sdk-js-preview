import { Client, Source } from '../../client/client'

/*
  Read from Environment Variables
*/

// export var client = new Client(
//   [Source.Environment, 'FBN_TOKEN_URL'],
//   [Source.Environment, 'FBN_USERNAME'],
//   [Source.Environment, 'FBN_PASSWORD'],
//   [Source.Environment, 'FBN_CLIENT_ID'],
//   [Source.Environment, 'FBN_CLIENT_SECRET'],
//   [Source.Environment, 'FBN_LUSID_API_URL'],
// )

/*
  Read from secrets.json
*/

export var client = new Client()