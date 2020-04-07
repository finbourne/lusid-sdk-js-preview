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
  LusidProblemDetails
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

    this.referenceDate = moment([2018, 1, 1, 0, 0, 0]).utc();

    createTransactionPortfolio(
      {
        scope: uuidv4(),
        referenceDate: this.referenceDate
      }
    )
    .then((res) => {

      assert.strictEqual( res.portfolio.id.code, res.createRequest.code );

      mlog.log( `Created portfolio ${res.portfolio.displayName}` );

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

})

export {};
