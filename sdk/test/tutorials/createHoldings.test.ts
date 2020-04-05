// Test specific libraries
import mlog from 'mocha-logger';
import uuidv4 from 'uuid/v4';
import moment from 'moment';

// Require the LUSID SDK and libraries
import {
  CreateTransactionPortfolioRequest,
  Portfolio
} from "../../api";
import { client } from './clientBuilder'
import {
  LusidProblemDetails,
  DeletedEntityResponse,
  TransactionRequest,
  CurrencyAndAmount,
  TransactionPrice,
  UpsertPortfolioTransactionsResponse
} from "../../model/models";

// Lusid method handling libraries
import { IncomingMessage } from "http";

//
// Functions block
//

const createTransactionPortfolio = (
    scope: string
  ) :Promise<Portfolio> => {

    return new Promise( (resolve, reject) => {

      client.api.transactionPortfolios.createPortfolio(
        scope,
        Object.assign(
          new CreateTransactionPortfolioRequest(),
          {
            displayName: `Portfolio-${uuidv4()}`,
            code: `ID-${uuidv4()}`,
            baseCurrency: "GBP",
            created: moment([2018, 0, 1, 0, 0, 0]).utc()
          }
        )
      )
      .then((res: {response: IncomingMessage; body: Portfolio}) => {
        resolve( res.body )
      })
      .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err));

    } );

  }

const upsertTransactions = (
    {
      portfolioObject,
      units
    }: {
      portfolioObject: Portfolio
      units: Number
    }
  ) :Promise<UpsertPortfolioTransactionsResponse> => {

    return new Promise((resolve, reject) => {

      const transactionsToUpsert = [

        // Starting Cash Position
        Object.assign(
          new TransactionRequest(),
          {
            transactionId: uuidv4(),
            type: "FundsIn",
            instrumentIdentifiers: {
              "Instrument/default/Currency": portfolioObject.baseCurrency
            },
            transactionDate: moment([2018, 2, 5, 0, 0, 0]).utc(),
            settlementDate: moment([2018, 2, 5, 0, 0, 0]).utc(),
            units,
            totalConsideration: Object.assign(
              new CurrencyAndAmount(),
              {
                currency: portfolioObject.baseCurrency
              }
            ),
            transactionPrice: Object.assign(
              new TransactionPrice(),
              {
                price: 0.0
              }
            ),
            transactionCurrency: portfolioObject.baseCurrency,
            source: "Client"
          }
        )

      ];

      client.api.transactionPortfolios.upsertTransactions(
        portfolioObject.id.scope,
        portfolioObject.id.code,
        transactionsToUpsert
      )
      .then((res: {response: IncomingMessage; body: UpsertPortfolioTransactionsResponse}) => {
        resolve( res.body )
      })
      .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err))

    });

  }

const deletePortfolio = (
  scope: string,
  code: string
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
    });

  }

//
// Unit Test block
//

describe('Holdings', () => {

  it('Should create a transaction portfolio', (done) => {
    createTransactionPortfolio(uuidv4())
    .then((res) => {

      this.portfolioObject = res;

      mlog.log( `Request log @ ${res.links.pop().href}` );

      done()

    })
    .catch((err) => {console.log(err);mlog.error(err.response.statusCode, err.response.statusMessage, err.response.body.detail ) } )
  })

  it('Should upsert transactions', (done) => {
    upsertTransactions( {
      portfolioObject: this.portfolioObject,
      units: 10000
    } ).then( ( res ) => {

      mlog.log( `Request log @ ${res.links.pop().href}` );

      done();
    } )
    .catch((err) => mlog.error(err.response.statusCode, err.response.statusMessage, err.response.body.detail ) )
  });

  it('Should delete the portfolio', (done) => {

    deletePortfolio(
      this.portfolioObject.id.scope,
      this.portfolioObject.id.code
    ).then( ( res ) => {

      mlog.log( `Request log @ ${res.links.pop().href}` );

      done()
    } )
    .catch((err) => mlog.error(err.response.statusCode, err.response.statusMessage, err.response.body.detail ))
  })
})

export {};
