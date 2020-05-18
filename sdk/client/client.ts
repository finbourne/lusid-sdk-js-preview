// Require the libraries
import localVarRequest from 'request';
import querystring from 'querystring';

// Import a list of the LUSID APIs
import { APIS } from '../api';

/*
The Api class exists to ensure that all the methods available on each of the
LUSID APIs show up when using code editors and interactive development
environments which have features such as IntelliSense.

It contains a property for each of the LUSID APIs.
*/
import {Api} from "../apis";

/*
To authenticate with a third party identity provider, a number of credentials
are required e.g. username, password, clientId, clientSecret etc.

Each credential may be sourced from a different location, the three locations
that you can use with the client are:

- An environment variable,
- A secrets.json file located in the client folder of the LUSID SDK
- A variable or raw string

The enum below is for use in identifying the source of each credential when
you create a client
*/
export enum Source {
  // Use an environment variable to populate the credential
  Environment,
  // Use a file called secrets.json file to populate the credential
  Secrets,
  // Use a raw value or variable to populate the credential
  Raw
}

// polyfill for Object.fromEntries until Typescript has ES2019 included
const _ObjectFromEntries = ( iter ): Object => {
  const obj = {};

  for (const pair of iter) {
    if (Object(pair) !== pair) {
      throw new TypeError('iterable for fromEntries should yield objects');
    }

    // Consistency with Map: contract is that entry has "0" and "1" keys, not
    // that it is an array or iterable.

    const { '0': key, '1': val } = pair;

    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: val,
    });
  }

  return obj;
}

/*
The LUSID API uses OAuth2.0 for authentication. The access token generated
through the OAuth2.0 flow expires after a given period of time. To ensure
uninterrupted access to LUSID we need to manage the refresh of this token.

The class below allows you to keep track of the current access token as well
as details regarding the token's expiry and last refresh
 */
class Oauth2 {
  // The access token to access the API
  public accessToken: string
  // The time that each token lasts before expiring in seconds
  public tokenExpiryDuration: number
  // The time till the token expires in seconds
  public tokenTimeTillExpiry: number
  // The time of the last refresh in seconds since 1970
  public tokenLastRefreshTime: number
  // The time that the last refresh check occured in seconds since 1970
  public tokenLastRefreshCheckTime: number

  // Constructor method to set each property
  constructor(
    accessToken: string | undefined,
    tokenExpiryTime: number,
    tokenTimeTillExpiry:number,
    tokenLastRefreshTime: number,
    tokenLastRefreshCheckTime: number
  ) {
    this.accessToken = accessToken
    this.tokenExpiryDuration = tokenExpiryTime
    this.tokenTimeTillExpiry = tokenTimeTillExpiry
    this.tokenLastRefreshTime = tokenLastRefreshTime
    this.tokenLastRefreshCheckTime = tokenLastRefreshCheckTime
  }
}

/*
To get connected with LUSID all you need to do is create a new client from
the Client class below. This class handles storage of the location of each
of the credentials, OAuth2.0 token refresh logic and is populated with every
one of LUSIDs APIs and their methods.
*/
interface configurationDefinition {
  tokenUrlDetails: string | null,
  usernameDetails: string | null,
  passwordDetails: string | null,
  clientIdDetails: string | null,
  clientSecretDetails: string | null,

  // The path to the secrets file which may be used to store credentials
  secretsFilePath: string,
}

export class Client {

  // Authentications object to hold the oauth2 details
  authentications: {[key: string]: Oauth2}
  // The base path for the client to call
  basePath: string
  // The available API endpoints
  api: Api

  // The credential access details
  private configuration: configurationDefinition = {
    tokenUrlDetails: null,
    usernameDetails: null,
    passwordDetails: null,
    clientIdDetails: null,
    clientSecretDetails: null,
    secretsFilePath: `${process.cwd()}/secrets.json`
  }

  secretsFileContent: Object

  private configurationMapping: Array<Array<Source|Array<string>>> = [
    [
      Source.Environment,
      [
        'FBN_TOKEN_URL',
        'FBN_USERNAME',
        'FBN_PASSWORD',
        'FBN_CLIENT_ID',
        'FBN_CLIENT_SECRET',
        'FBN_LUSID_API_URL'
      ]
    ],
    [
      Source.Secrets,
      [
        'tokenUrl',
        'username',
        'password',
        'clientId',
        'clientSecret',
        'apiUrl'
      ]
    ]
  ]

  // The refresh limit in seconds before token expiry to trigger a refresh
  private refreshLimit: number = 3580

  private loadSecretsFile( secretsFilePath?: string ): object {

    try
    {
      this.secretsFileContent = require( !!secretsFilePath ? secretsFilePath : this.configuration.secretsFilePath ).api;

      // update the secretsFilePath at this point, since the above line has finished successfully
      this.configuration.secretsFilePath = !!secretsFilePath
        ? secretsFilePath
        : this.configuration.secretsFilePath

      return this.secretsFileContent;
    }
    catch( e )
    {
      if( e.code === 'MODULE_NOT_FOUND' )
      {
        if( !!secretsFilePath )
        {
          // a specific path was requested

          throw `Configuration file ${secretsFilePath} was not found`;
        }

        // no specific path requested, ergo it went with the default path
        // a secrets file not found is not necessarily a problem
        // this will reset the internal validation to an empty configuration

        return this.secretsFileContent = {};
      }

      // module was found but there's some other (random) error

      throw e;
    }

  }

  // Constructor method which takes the details on where to find the credentials
  constructor(
      {
        tokenUrlDetails,
        usernameDetails,
        passwordDetails,
        clientIdDetails,
        clientSecretDetails,
        apiUrlDetails,
        secretsFilePath,
      }: {
        tokenUrlDetails?: string,
        usernameDetails?: string,
        passwordDetails?: string,
        clientIdDetails?: string,
        clientSecretDetails?: string,
        apiUrlDetails?: string,
        secretsFilePath?: string
      } = {
        // empty object by default, thus triggering an auto failover
      }
    ) {

    // attempt to get disk config by default. if it doesn't exist it is still fine
    this.loadSecretsFile( secretsFilePath );

    // provide init + default to environment vars below
    this.configuration.tokenUrlDetails = !!tokenUrlDetails
      ? this.fetchConfigurationItem( Source.Raw, tokenUrlDetails, true )
      : this.fetchConfigurationItem( Source.Secrets, 'tokenUrl', false );

    this.configuration.usernameDetails = !!usernameDetails
      ? this.fetchConfigurationItem( Source.Raw, usernameDetails, true )
      : this.fetchConfigurationItem( Source.Secrets, 'username', false );

    this.configuration.passwordDetails = !!passwordDetails
      ? this.fetchConfigurationItem( Source.Raw, passwordDetails, true )
      : this.fetchConfigurationItem( Source.Secrets, 'password', false );

    this.configuration.clientIdDetails = !!clientIdDetails
      ? this.fetchConfigurationItem( Source.Raw, clientIdDetails, true )
      : this.fetchConfigurationItem( Source.Secrets, 'clientId', false );

    this.configuration.clientSecretDetails = !!clientSecretDetails
      ? this.fetchConfigurationItem( Source.Raw, clientSecretDetails, true )
      : this.fetchConfigurationItem( Source.Secrets, 'clientSecret', false );

    // initialize base path at this moment, since it is needed below
    this.basePath = !!apiUrlDetails
      ? this.fetchConfigurationItem( Source.Raw, apiUrlDetails, true )
      : this.fetchConfigurationItem( Source.Secrets, 'apiUrl', false );

    // Set the authentications to use oauth2
    this.authentications = {
      oauth2: new Oauth2(undefined, 0,0,0,0)
    }

    // Create a new instance of the API
    this.api = new Api()

    // Iterate over the API endpoints and add each to our client
    APIS.forEach((api: any) => {
      // Create a new instance of the api endpoint
      const apiInstance = new api(this.basePath)
      // Get the name of the API
      let apiName: string = apiInstance.constructor.name
      // Shorten the api name slightly by removing API at the end
      apiName = apiName.substring(0, apiName.length - 3)
      // Make the API endpoint camel case
      apiName = apiName[0].toLowerCase() + apiName.slice(1)
      // Add the endpoint to our client
      this.api[apiName] = apiInstance

      // For each function on the API
      for( const prop in this.api[apiName] ) {

        if(
          typeof this.api[apiName][prop] !== 'function'
          || ['setDefaultAuthentication', 'setApiKey'].includes( prop )
        ) {

          // Exclude two non-api specific functions or non
          continue;

        }

        // Wrap each method with token refresh logic
        this.api[apiName][prop] = this.apiFunctionWrapper(
          this.api[apiName][prop],
          this.api[apiName]
        );

      }

    })
  }

  /*
  The function below is a wrapper function which wraps the input function
  'apiFunction' with token refresh logic to ensure uninterrupted access to LUSID.
  */
  private apiFunctionWrapper(apiFunction, api ) {

    // Return a function, thus not immediately invoking

    return ( ...args ) => {

      // Return a promise to ensure that the function remains '.then()-able'
      return new Promise( (resolve, reject) => {

        // Trigger a token refresh
        this.refreshToken(
          this.authentications.oauth2,
        ).then( (oauth2Details: Oauth2) => {

          // Update the clients oauth2 details
          this.authentications.oauth2 = oauth2Details
          // Update the access token of the api being called
          api.authentications.oauth2.accessToken = this.authentications.oauth2.accessToken

          /*
          Resolve the promise with the function that was wrapped
          In this case api is the api that this function is a part of,
          this is required to ensure that the function is called
          in the right context. The second argument topLevelArguments
          is the arguments passed into the Wrapper
          */

          resolve( apiFunction.apply( api, args ) );

        })
        // Error handling
        .catch((err) => reject(err))
      })
    }
  }

  private fetchConfigurationItem( sourceType: Source, itemName: string, failOnNotExistent: boolean = false ): string {

    const
      configurationObject = _ObjectFromEntries( this.configurationMapping );

    switch( sourceType )
    {
      case Source.Environment:

        if( !!process.env[ itemName ] )
        {
          return process.env[ itemName ];
        }

        if( failOnNotExistent )
        {
          throw `Environment variable ${itemName} has not been specified`;
        }

        // fallback to searching for the equivalent configuration in the secrets file
        this.fetchConfigurationItem(
          Source.Secrets,
          configurationObject[ Source.Secrets ][
            configurationObject[ sourceType ].indexOf( itemName )
          ],
          true
        );

      break;
      case Source.Raw:

        if( !!itemName )
        {
          return itemName;
        }

        throw `Raw value ${itemName} has not been specified`;

      break;
      case Source.Secrets:

        if( !!this.secretsFileContent[ itemName ] )
        {
          return this.secretsFileContent[ itemName ];
        }

        if( failOnNotExistent )
        {
          throw `Configuration item ${itemName} not found in secrets file`;
        }

        // fallback to searching for the equivalent configuration in the environment variables
        this.fetchConfigurationItem(
          Source.Environment,
          configurationObject[ Source.Environment ][
            configurationObject[ sourceType ].indexOf( itemName )
          ],
          true
        );

      break;
      default:

        throw `Source is not valid, must be one of ${Object.keys( Source ).join( ", " )}`;

    }

  }

  /*
  Gets the current time in seconds since 1970, used for token refresh calculations
  and to keep track of the last refresh
  */
  private getCurrentEpochTime() {
    return Math.floor(new Date().getTime() / 1000)
  }

  /*
  This function handles refreshing the token when required. It checks for a
  token refresh and if required it fetches the appropriate credentials, calls
  the identity provider and retrieves a new access token
  */
  private async refreshToken(
    oauth2: Oauth2,
  ): Promise<Oauth2> {

    return new Promise( (resolve, reject) => {

      // Check if the token needs a refresh
      if(
        this.checkTokenRefresh(oauth2, this.refreshLimit)
      ) {

        // Get a new access token using these credentials
        this.getAccessToken(
          this.configuration.tokenUrlDetails,
          this.configuration.usernameDetails,
          this.configuration.passwordDetails,
          this.configuration.clientIdDetails,
          this.configuration.clientSecretDetails
        )
        // Return the oauth object to avoid nested promises in return
        .then((oauthObject: Oauth2) => {
          // Resolve the promise
          resolve(oauthObject)
        })
        .catch((err) => reject(err))

        return;
      }

      // If no refresh required just return the oauth object

      resolve(oauth2);

    } );
  }

  /*
  This function checks if the access token supplied via an OAuth2.0 flow requires
  refreshing. It looks to see if the access token is undefined (meaning that
  it has never been set) or if it is close to expiring.

  If a refresh is required it returns true, else it returns false
  */
  private checkTokenRefresh(
    oauth2: Oauth2,
    refreshLimit: number
  ): boolean {

    // Check if an access token already exists, if not trigger refresh
    if (oauth2.accessToken === undefined) {
      // Call Okta to get access details
      return true
    }

    // If it does exist check that it has not expired
    var currentTime: number = this.getCurrentEpochTime()
    var difference: number = currentTime - oauth2.tokenLastRefreshTime
    oauth2.tokenTimeTillExpiry -= difference
    oauth2.tokenLastRefreshCheckTime = currentTime

    // If the token will expire in less than the refresh limit
    if (oauth2.tokenTimeTillExpiry < refreshLimit) {
      // Call Okta to get access details
      return true
    }
    // Else don't trigger a refresh
    return false
  }


  /*
  This function calls the identity provider to get an access token
  */
  private async getAccessToken(
    tokenUrl: string,
    username: string,
    password: string,
    clientId: string,
    clientSecret: string
  ): Promise<Oauth2> {

    // Returns a promise

    return new Promise((resolve, reject) => {

      // Set the headers for authentication with Okta - only x-www-form-urlencoded supported
      var headers = {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      }

      // Set the request body for authentication with Okta
      var requestBody = querystring.stringify({
          grant_type: "password",
          username: username,
          password: password,
          scope: "openid client groups",
          client_id: clientId,
          client_secret: clientSecret
        })

      // Make a POST request to Okta to get a LUSID access token
      let localVarRequestOptions: localVarRequest.Options = {
          method: 'POST',
          headers: headers,
          uri: tokenUrl,
          useQuerystring: false,
          json: true,
          body: requestBody
      };

      localVarRequest(localVarRequestOptions, (err, res, body) => {
        if (err) {
          reject (err)
        } else if (res.statusCode == 200) {
          let oAuth2 = new Oauth2(
            body.access_token,
            body.expires_in,
            body.expires_in,
            this.getCurrentEpochTime(),
            this.getCurrentEpochTime())
          resolve (oAuth2)
        } else {
          reject (body)
        }
      })
    })
  }

}
