// Test specific libraries
import mlog from 'mocha-logger';
import uuidv4 from 'uuid/v4';
import moment, { Moment } from 'moment';
import assert, { AssertionError } from 'assert';

// Require the LUSID SDK and libraries
import {
  CreateTransactionPortfolioRequest,
  UpsertPortfolioTransactionsResponse,
  Portfolio,
  TransactionRequest,
  VersionedResourceListOfTransaction
} from "../../api";
import { client } from './clientBuilder'
import { Transactions } from '../../client/lusidUtilities'
import {
  UpsertInstrumentsResponse,
  InstrumentDefinition,
  InstrumentIdValue,
  LusidProblemDetails,
  InstrumentEconomicDefinition,
  DeletedEntityResponse
} from "../../model/models";

// Lusid method handling libraries
import { IncomingMessage } from "http";

const createTransactionPortfolio = (
  {
    scope,
    referenceDate
  }: {
    scope: string,
    referenceDate: Moment
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
          created: referenceDate
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

const loadOneInstrument = (
  {
    referenceDate,
    lusidInstrumentId,
    portfolioObject
  }: {
    referenceDate: Moment,
    lusidInstrumentId: string,
    portfolioObject: Portfolio
  }
) :Promise<{
  transactions:VersionedResourceListOfTransaction,
  transactionDefinition: TransactionRequest
}> => {

  return new Promise((resolve, reject) => {

    const transactionsToUpsert = [

      Transactions.defineBuyRequest(
        {
          lusidInstrumentId,
          transactionDate: referenceDate,
          units: 100,
          price: 12.3
        }
      )

    ]

    client.api.transactionPortfolios.upsertTransactions(
      portfolioObject.id.scope,
      portfolioObject.id.code,
      transactionsToUpsert
    )
    .then((resUpsertTransactions: {response: IncomingMessage; body: UpsertPortfolioTransactionsResponse}) => {

      client.api.transactionPortfolios.getTransactions(
        portfolioObject.id.scope,
        portfolioObject.id.code,
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

  } );
}

const loadOTCInstrument = (
  {
    referenceDate,
    portfolioObject
  }: {
    referenceDate: Moment,
    portfolioObject: Portfolio
  }
) :Promise<{
  transactions:VersionedResourceListOfTransaction,
  transactionDefinition: TransactionRequest
}> => {

  return new Promise((resolve, reject) => {

    const
      swapDefinition = Object.assign(
        new InstrumentDefinition(),
        {
          name: "10mm 5Y Fixed",
          identifiers: {
            "ClientInternal": Object.assign(
              new InstrumentIdValue(),
              {
                value: "SW-1"
              }
            )
          },
          definition: Object.assign(
            new InstrumentEconomicDefinition(),
            {
              instrumentFormat: "CustomFormat",
              content: "<customFormat>upload in custom xml or JSON format</customFormat>"
            }
          )
        }
      );

    client.api.instruments.upsertInstruments(
      {
        request: swapDefinition
      }
    )
    .then((res: {response: IncomingMessage; body: UpsertInstrumentsResponse}) => {

      const
        swapID = res.body.values.request.lusidInstrumentId,
        transactionsToUpsert = [

          Transactions.defineBuyRequest( {
            lusidInstrumentId: swapID,
            transactionDate: referenceDate,
            units: 1.0,
            price: 0.0
          } )

        ];

      client.api.transactionPortfolios.upsertTransactions(
        portfolioObject.id.scope,
        portfolioObject.id.code,
        transactionsToUpsert
      )
      .then((resUpsertTransactions: {response: IncomingMessage; body: UpsertPortfolioTransactionsResponse}) => {

        client.api.transactionPortfolios.getTransactions(
          portfolioObject.id.scope,
          portfolioObject.id.code,
          referenceDate.format()
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

    })
    .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err));

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

const cancelTransactions = (
  {
    referenceDate,
    lusidInstrumentIds,
    portfolioObject
  }: {
    referenceDate: Moment,
    lusidInstrumentIds: Array<String>
    portfolioObject: Portfolio
  }
) :Promise<{
  transactions: VersionedResourceListOfTransaction
}> => {

  return new Promise( (resolve, reject) => {

    const
      transactionsToUpsert = [

        Transactions.defineBuyRequest( {
          lusidInstrumentId: lusidInstrumentIds[ 0 ],
          transactionType: "StockIn",
          transactionDate: referenceDate,
          units: 100,
          price: 101
        } ),

        Transactions.defineBuyRequest( {
          lusidInstrumentId: lusidInstrumentIds[ 1 ],
          transactionType: "StockIn",
          transactionDate: referenceDate,
          units: 100,
          price: 102
        } ),

        Transactions.defineBuyRequest( {
          lusidInstrumentId: lusidInstrumentIds[ 2 ],
          transactionType: "StockIn",
          transactionDate: referenceDate,
          units: 100,
          price: 103
        } ),

      ];

    client.api.transactionPortfolios.upsertTransactions(
      portfolioObject.id.scope,
      portfolioObject.id.code,
      transactionsToUpsert
    )
    .then((resUpsertTransactions: {response: IncomingMessage; body: UpsertPortfolioTransactionsResponse}) => {

      // transactions successfully upserted

      client.api.transactionPortfolios.getTransactions(
        portfolioObject.id.scope,
        portfolioObject.id.code,
        referenceDate.format()
      )
      .then((resTransactions: {response: IncomingMessage; body: VersionedResourceListOfTransaction}) => {

        // got the 3 transactions upserted above

        let
          transactionIDs = [];

        resTransactions.body.values.forEach( ( transaction ) => {

          transactionIDs.push( transaction.transactionId );

        } );

        client.api.transactionPortfolios.useQuerystring = true;
        client.api.transactionPortfolios.cancelTransactions(
          portfolioObject.id.scope,
          portfolioObject.id.code,
          transactionIDs
        )
        .then((resCancelTransactions: {response: IncomingMessage; body: DeletedEntityResponse}) => {

          // transactions cancelled successfully

          client.api.transactionPortfolios.getTransactions(
            portfolioObject.id.scope,
            portfolioObject.id.code,
            referenceDate.format()
          )
          .then((resTransactions: {response: IncomingMessage; body: VersionedResourceListOfTransaction}) => {

            // got all transactions given the reference date
            // should be a total of zero

            resolve(
              {
                transactions: resTransactions.body
              }
            );

          } )
          .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err))

        } )
        .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err))

      } )
      .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err))

    })
    .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err))

  } );

}

describe('Transactions', () => {

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
    .catch((err) => { mlog.error(err) } )
  })

  it('Should create a transaction portfolio', (done) => {

    this.referenceDate = moment([2018, 0, 1, 0, 0, 0]).utc();

    createTransactionPortfolio(
      {
        scope: uuidv4(),
        referenceDate: this.referenceDate
      }
    )
    .then((res) => {

      assert.strictEqual( res.portfolio.id.code, res.createRequest.code );

      mlog.log( `Created portfolio ${res.portfolio.displayName} with scope ${res.portfolio.id.scope} and code ${res.portfolio.id.code}` );

      this.portfolioObject = res.portfolio;

      mlog.log( `Request log @ ${res.portfolio.links.pop().href}` );

      done()

    })
    .catch((err) => { mlog.error(err) } )
  })

  it('Should load one instrument', (done) => {

    this.referenceDate = moment([2018, 1, 1, 0, 0, 0]).utc();

    loadOneInstrument(
      {
        referenceDate: this.referenceDate,
        lusidInstrumentId: this.instrumentIDs[ 0 ],
        portfolioObject: this.portfolioObject
      }
    )
    .then((res) => {

      // Validate that this test went well
      assert.strictEqual( res.transactions.values.length, 1 );
      assert.strictEqual( res.transactions.values[ 0 ].transactionId, res.transactionDefinition.transactionId );

      done()

    })
    .catch((err) => { mlog.error(err) } )
  })

  it('Should load over the counter (OTC) instrument transaction', (done) => {

    this.referenceDate = moment([2018, 2, 1, 0, 0, 0]).utc();

    loadOTCInstrument(
      {
        referenceDate: this.referenceDate,
        portfolioObject: this.portfolioObject
      }
    )
    .then((res) => {

      // Validate that this test went well
      assert.strictEqual( res.transactions.values.length, 1 );
      assert.strictEqual( res.transactions.values[ 0 ].transactionId, res.transactionDefinition.transactionId );

      done()

    })
    .catch((err) => { mlog.error(err) } )
  })

  it('Should cancel transactions', (done) => {

    this.referenceDate = moment([2018, 3, 1, 0, 0, 0]).utc();

    cancelTransactions(
      {
        referenceDate: this.referenceDate,
        lusidInstrumentIds: this.instrumentIDs,
        portfolioObject: this.portfolioObject
      }
    )
    .then((res) => {

      // Validate that this test went well
      assert.strictEqual( res.transactions.values.length, 0 );

      done()

    })
    .catch((err) => { console.log(err) } )
  })

})

export {};
