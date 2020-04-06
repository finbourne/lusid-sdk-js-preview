// Test specific libraries
import mlog from 'mocha-logger';
import uuidv4 from 'uuid/v4';
import moment, { Moment } from 'moment';
import assert, { AssertionError } from 'assert';

// Require the LUSID SDK and libraries
import {
  CreateTransactionPortfolioRequest,
  CreatePropertyDefinitionRequest,
  Portfolio
} from "../../api";
import { client } from './clientBuilder'
import { Transactions } from '../../client/lusidTools'
import {
  PropertyDefinition,
  LusidProblemDetails,
  DeletedEntityResponse,
  ResourceId,
  PropertyValue,
  Property,
  PortfolioProperties,
  UpsertInstrumentsResponse,
  InstrumentDefinition,
  InstrumentIdValue,
  UpsertPortfolioTransactionsResponse,
  VersionedResourceListOfTransaction,
  TransactionRequest,
  PerpetualProperty,
  ResourceListOfScopeDefinition,
  ResourceListOfPortfolio
} from "../../model/models";

// Lusid method handling libraries
import { IncomingMessage } from "http";

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

const createTransactionPortfolio = (
  {
    scope
  }: {
    scope: string,
  }
) :Promise<{
  portfolio:Portfolio;
  createRequest:CreateTransactionPortfolioRequest}
> => {

  return new Promise((resolve, reject) => {

    const
      createRequest = Object.assign(
        new CreateTransactionPortfolioRequest(),
        {
          displayName: "UK Equities",
          code: "UKEQTY",
          baseCurrency: "GBP",
          created: moment([2018, 1, 1, 0, 0, 0]).utc()
        }
      );

    client.api.transactionPortfolios.createPortfolio(
      scope,
      createRequest
    )
    .then((res: {response: IncomingMessage; body: Portfolio}) => {
      resolve( { portfolio: res.body, createRequest } )
    })
    .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err))

  } );
}

const listPortfolios = (
  {
    scope
  }: {
    scope: string,
  }
) :Promise<{
  portfolios:ResourceListOfPortfolio
}> => {

  return new Promise((resolve, reject) => {

    let
      createdPortfolios = 0;

    const createPortfolio = () =>
    {
      const
        createRequest = Object.assign(
          new CreateTransactionPortfolioRequest(),
          {
            displayName: `Portfolio-${uuidv4()}`,
            code: `Code-${uuidv4()}`,
            baseCurrency: "GBP",
            created: moment([2018, 1, 1, 0, 0, 0]).utc()
          }
        );

      return client.api.transactionPortfolios.createPortfolio(
        scope,
        createRequest
      );
    }

    const createPortfolios = () => {

      createPortfolio().then( () => {

        if( ++createdPortfolios < 10 )
        {
          createPortfolios();

          return;
        }

        // 10 portfolios created

        client.api.portfolios.listPortfoliosForScope(
          scope
        )
        .then((res: {response: IncomingMessage; body: ResourceListOfPortfolio}) => {

          resolve( {
            portfolios: res.body
          } )

        })
        .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err))

      } );

    }

    createPortfolios();

  } );
}

const upsertInstruments = (
  identifiers: Object = {}
) :Promise<UpsertInstrumentsResponse> => {

  return new Promise( (resolve, reject) => {

    client.api.instruments.upsertInstruments(

      Object.keys( identifiers ).reduce( ( accumulator, currentValue ) => {

        accumulator[ currentValue ] = Object.assign(
          new InstrumentDefinition(),
          {
            name: identifiers[ currentValue ].Name,
            identifiers: {
              Figi: Object.assign(
                new InstrumentIdValue(),
                {
                  value: currentValue
                }
              )
            }
          }
        );

        return accumulator;

      }, {} )
    )
    .then((res: {response: IncomingMessage; body: UpsertInstrumentsResponse}) => {
      resolve( res.body )
    })
    .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err));

  } );

}

const addTransactionToPortfolio = (
    {
      scope,
      lusidInstrumentId
    }: {
      scope: string,
      lusidInstrumentId: string
    }
  ) :Promise<{
    transactions: VersionedResourceListOfTransaction,
    transactionDefinition: TransactionRequest
  }> => {

    return new Promise((resolve, reject) => {

      const
        createRequest = Object.assign(
          new CreateTransactionPortfolioRequest(),
          {
            displayName: `Portfolio-${uuidv4()}`,
            code: `Code-${uuidv4()}`,
            baseCurrency: "GBP",
            created: moment([2018, 1, 1, 0, 0, 0]).utc()
          }
        );

      client.api.transactionPortfolios.createPortfolio(
        scope,
        createRequest
      )
      .then((res: {response: IncomingMessage; body: Portfolio}) => {

        const transactionsToUpsert = [

          Transactions.defineBuyRequest( {
            lusidInstrumentId,
            transactionDate: moment([2018, 2, 5, 0, 0, 0]).utc(),
            settlementDate: moment([2018, 2, 5, 0, 0, 0]).utc(),
            units: 100.0,
            price: 12.3
          } ),

        ]

        client.api.transactionPortfolios.upsertTransactions(
          res.body.id.scope,
          res.body.id.code,
          transactionsToUpsert
        )
        .then((resUpsert: {response: IncomingMessage; body: UpsertPortfolioTransactionsResponse}) => {

          client.api.transactionPortfolios.getTransactions(
            res.body.id.scope,
            res.body.id.code
          )
          .then((resTransactions: {response: IncomingMessage; body: VersionedResourceListOfTransaction}) => {

            resolve( {
              transactions: resTransactions.body,
              transactionDefinition: transactionsToUpsert[ 0 ]
            } )

          } )
          .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err))

        })
        .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err))

        // resolve( { portfolio: res.body, createRequest } )
      })
      .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err))

    } );
  }

const createPortfolioWithProperties = (
    {
      scope
    }: {
      scope: string,
    }
  ) :Promise<{
    portfolio:Portfolio;
    propertyDefinition:PropertyDefinition,
    portfolioProperties:PortfolioProperties,
    createRequest: CreateTransactionPortfolioRequest
  }> => {

    return new Promise((resolve, reject) => {

      const
        propertyDefinition = Object.assign(
          new CreatePropertyDefinitionRequest(),
          {
            domain: "Portfolio",
            scope,
            code: `fund-style-${uuidv4()}`,
            valueRequired: false,
            displayName: "Fund Style",
            lifeTime: "Perpetual",
            dataTypeId: Object.assign(
              new ResourceId(),
              {
                scope: "system",
                code: "string"
              }
            )
          }
        );

      client.api.propertyDefinitions.createPropertyDefinition(
        propertyDefinition
      )
      .then((resPropertyDefinition: {response: IncomingMessage; body: PropertyDefinition}) => {

        const
          property = Object.assign(
            new Property(),
            {
              key: resPropertyDefinition.body.key,
              value: Object.assign(
                new PropertyValue(),
                {
                  labelValue: "Active"
                }
              )
            }
          ),
          createRequest = Object.assign(
            new CreateTransactionPortfolioRequest(),
            {
              displayName: `Portfolio-${uuidv4()}`,
              code: `ID-${uuidv4()}`,
              baseCurrency: "GBP",
              properties: _ObjectFromEntries( [ [ resPropertyDefinition.body.key, property ] ] )
            }
          );

        client.api.transactionPortfolios.createPortfolio(
          scope,
          createRequest
        )
        .then((resCreatePortfolio: {response: IncomingMessage; body: Portfolio}) => {

          client.api.portfolios.getPortfolioProperties(
            resCreatePortfolio.body.id.scope,
            resCreatePortfolio.body.id.code
          )
          .then((resGetProperties: {response: IncomingMessage; body: PortfolioProperties}) => {

            resolve( {
              portfolio: resCreatePortfolio.body,
              propertyDefinition: resPropertyDefinition.body,
              portfolioProperties: resGetProperties.body,
              createRequest
            } );

          } )
          .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err))

        })
        .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err))

      })
      .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err))

    } );
  }

const addTransactionWithPropertiesToPortfolio = (
  {
    scope,
    lusidInstrumentId
  }: {
    scope: string,
    lusidInstrumentId: string
  }
) :Promise<{
  transactions: VersionedResourceListOfTransaction,
  transactionDefinition: TransactionRequest,
  propertyDefinition: PropertyDefinition
}> => {

  return new Promise((resolve, reject) => {

    const
      propertyDefinition = Object.assign(
        new CreatePropertyDefinitionRequest(),
        {
          domain: "Transaction",
          scope,
          code: `trader-id-${uuidv4()}`,
          valueRequired: false,
          displayName: "Trader ID",
          lifeTime: "Perpetual",
          dataTypeId: Object.assign(
            new ResourceId(),
            {
              scope: "system",
              code: "string"
            }
          )
        }
      );

    client.api.propertyDefinitions.createPropertyDefinition(
      propertyDefinition
    )
    .then((resPropertyDefinition: {response: IncomingMessage; body: PropertyDefinition}) => {

      const
        propertyValueAsString = Object.assign(
          new PropertyValue(),
          {
            labelValue: "A Trader"
          }
        ),
        createRequest = Object.assign(
          new CreateTransactionPortfolioRequest(),
          {
            displayName: `Portfolio-${uuidv4()}`,
            code: `ID-${uuidv4()}`,
            baseCurrency: "GBP",
            created: moment([2018, 1, 1, 0, 0, 0]).utc()
          }
        );

      client.api.transactionPortfolios.createPortfolio(
        scope,
        createRequest
      )
      .then((resCreatePortfolio: {response: IncomingMessage; body: Portfolio}) => {

        const transactionsToUpsert = [

          Object.assign(
            Transactions.defineBuyRequest( {
              lusidInstrumentId,
              transactionDate: moment([2018, 1, 1, 0, 0, 0]).utc(),
              units: 100.0,
              price: 12.3
            } ),
            {
              properties: _ObjectFromEntries( [ [ resPropertyDefinition.body.key, Object.assign(
              new PerpetualProperty(),
              {
                key: resPropertyDefinition.body.key,
                value: propertyValueAsString
              }
              ) ] ] )
            }
          )

        ];

        client.api.transactionPortfolios.upsertTransactions(
          resCreatePortfolio.body.id.scope,
          resCreatePortfolio.body.id.code,
          transactionsToUpsert
        )
        .then((resUpsertTransactions: {response: IncomingMessage; body: UpsertPortfolioTransactionsResponse}) => {

          client.api.transactionPortfolios.getTransactions(
            resCreatePortfolio.body.id.scope,
            resCreatePortfolio.body.id.code
          )
          .then((resTransactions: {response: IncomingMessage; body: VersionedResourceListOfTransaction}) => {

            resolve( {
              propertyDefinition: resPropertyDefinition.body,
              transactions: resTransactions.body,
              transactionDefinition: transactionsToUpsert[ 0 ]
            } )

          } )
          .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err))

        })
        .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err))


      })
      .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err))

    })
    .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err))

  } );
}

const deletePortfolio = (
    {
      scope,
      code
    }: {
      scope: string,
      code: string
    }
  ) :Promise<DeletedEntityResponse> => {

    return new Promise((resolve, reject) => {

      client.api.portfolios.deletePortfolio(
        scope,
        code
      )
      .then((res: {response: IncomingMessage, body: DeletedEntityResponse}) => {
        resolve( res.body )
      })
      .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err))

    } );

  }

const listScopes = (
) :Promise<ResourceListOfScopeDefinition> => {

  return new Promise((resolve, reject) => {

    client.api.scopes.listScopes(
    )
    .then((res: {response: IncomingMessage, body: ResourceListOfScopeDefinition}) => {
      resolve( res.body )
    })
    .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err))

  } );

}

describe('Create portfolios', () => {

  it('Should create a transaction portfolio', (done) => {
    createTransactionPortfolio(
      {
        scope: uuidv4()
      }
    )
    .then((res) => {

      assert.strictEqual( res.portfolio.id.code, res.createRequest.code );

      mlog.log( `Created portfolio ${res.portfolio.displayName}` );

      this.portfolioObject = res.portfolio;

      mlog.log( `Request log @ ${res.portfolio.links.pop().href}` );

      done()

    })
    .catch((err) => {mlog.error(err.response.statusCode, err.response.statusMessage, err.response.body.detail ) } )
  })

  it('Should create a portfolio with properties', (done) => {
    createPortfolioWithProperties(
      {
        scope: uuidv4()
      }
    )
    .then((res) => {

      // Validate that this test went well
      assert.strictEqual( res.portfolio.id.code, res.createRequest.code );
      assert.strictEqual( Object.keys( res.portfolioProperties.properties ).length, 1 );
      assert.strictEqual( res.portfolioProperties.properties[ res.propertyDefinition.key ].value.labelValue, "Active" );

      mlog.log( `Created portfolio ${res.portfolio.displayName} with property ${res.propertyDefinition.key} having a value of ${res.portfolioProperties.properties[ res.propertyDefinition.key ].value.labelValue}` );

      mlog.log( `Request log @ ${res.portfolio.links.pop().href}` );

      done()

    })
    .catch((err) => {mlog.error(err.response.statusCode, err.response.statusMessage, err.response.body.detail ) } )
  })

  it('Should upsert instruments', (done) => {

    upsertInstruments(
      {
        "BBG000FD8G46": {
          Name: "HISCOX LTD"
        },
        "BBG000DW76R4": {
          Name: "ITV PLC"
        },
        "BBG000PQKVN8": {
          Name: "MONDI PLC"
        },
        "BBG000BDWPY0": {
          Name: "NEXT PLC"
        },
        "BBG000BF46Y8": {
          Name: "TESCO PLC"
        },
      }
    )
    .then((res) => {

      this.instrumentsObject = res;
      this.instrumentIDs = [];

      Object.keys( res.values ).forEach( ( insertedInstrument ) => {

        mlog.log( `Upserted instrument ${insertedInstrument} -> ${res.values[ insertedInstrument ].lusidInstrumentId}`)

        this.instrumentIDs.push( res.values[ insertedInstrument ].lusidInstrumentId )

      } );

      done()

    })
    .catch((err) => { mlog.error(err.response.statusCode, err.response.statusMessage, err.response.body.detail ) } )
  })

  it('Should add a transaction to the portfolio', (done) => {

    addTransactionToPortfolio(
      {
        scope: this.portfolioObject.id.scope,
        lusidInstrumentId: this.instrumentIDs[ 0 ]
      }
    )
    .then((res) => {

      // Validate that this test went well
      assert.strictEqual( res.transactions.values.length, 1 );
      assert.strictEqual( res.transactions.values[ 0 ].transactionId, res.transactionDefinition.transactionId );

      done()

    })
    .catch((err) => { mlog.error(err.response.statusCode, err.response.statusMessage, err.response.body.detail ) } )

  })

  it('Should add a transaction with properties to the portfolio', (done) => {

    addTransactionWithPropertiesToPortfolio(
      {
        scope: this.portfolioObject.id.scope,
        lusidInstrumentId: this.instrumentIDs[ 0 ]
      }
    )
    .then((res) => {

      // Validate that this test went well
      assert.strictEqual( res.transactions.values.length, 1 );
      assert.strictEqual( res.transactions.values[ 0 ].transactionId, res.transactionDefinition.transactionId );
      assert.strictEqual( res.transactions.values[ 0 ].properties[ res.propertyDefinition.key ].value.labelValue, "A Trader" );

      done()

    })
    .catch((err) => { mlog.error(err.response.statusCode, err.response.statusMessage, err.response.body.detail ) } )

  })

  it('Should list scopes', (done) => {

    listScopes(
    )
    .then((res) => {

      // Validate that this test went well
      assert.notStrictEqual( res.values.length, 0 );

      done()

    })
    .catch((err) => { mlog.error(err.response.statusCode, err.response.statusMessage, err.response.body.detail ) } )

  })

  it('Should list portfolios', (done) => {

    listPortfolios(
      {
        scope: uuidv4()
      }
    )
    .then((res) => {

      // Validate that this test went well
      assert.strictEqual( res.portfolios.values.length, 10 );

      done()

    })
    .catch((err) => { console.log(err); mlog.error(err.response.statusCode, err.response.statusMessage, err.response.body.detail ) } )

  })

  it('Should delete the transaction portfolio', (done) => {

    deletePortfolio(
      {
        scope: this.portfolioObject.id.scope,
        code: this.portfolioObject.id.code
      }
    ).then( ( res ) => {

      mlog.log( `Request log @ ${res.links.pop().href}` );

      done()
    } )
    .catch((err) => {mlog.error(err.response.statusCode, err.response.statusMessage, err.response.body.detail ) } )
  })
})

export {};
