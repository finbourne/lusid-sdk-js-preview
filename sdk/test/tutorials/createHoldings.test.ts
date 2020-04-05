// Test specific libraries
import mlog from 'mocha-logger';
import uuidv4 from 'uuid/v4';
import moment, { Moment } from 'moment';
import assert, { AssertionError } from 'assert';

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
  UpsertPortfolioTransactionsResponse,
  InstrumentDefinition,
  InstrumentIdValue,
  UpsertInstrumentsResponse,
  VersionedResourceListOfPortfolioHolding
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

const upsertTransactions = (
    {
      portfolioObject,
      instrumentsObject,
      units
    }: {
      portfolioObject: Portfolio,
      instrumentsObject: UpsertInstrumentsResponse,
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
            transactionPrice: Object.assign(
              new TransactionPrice(),
              {
                price: 0.0
              }
            ),
            totalConsideration: Object.assign(
              new CurrencyAndAmount(),
              {
                currency: portfolioObject.baseCurrency
              }
            ),
            source: "Client"
          }
        ),

        // Initial transaction on day_t1

        Object.assign(
          new TransactionRequest(),
          {
            transactionId: uuidv4(),
            type: "Buy",
            instrumentIdentifiers: {
              "Instrument/default/LusidInstrumentId": Object.entries( instrumentsObject.values )[ 0 ][ 1 ].lusidInstrumentId
            },
            transactionDate: moment([2018, 2, 5, 0, 0, 0]).utc(),
            settlementDate: moment([2018, 2, 5, 0, 0, 0]).utc(),
            units: 100.0,
            transactionPrice: Object.assign(
              new TransactionPrice(),
              {
                price: 101.0
              }
            ),
            totalConsideration: Object.assign(
              new CurrencyAndAmount(),
              {
                amount: 101.0 * 100.0,
                currency: portfolioObject.baseCurrency
              }
            ),
            source: "Broker"
          }
        ),

        Object.assign(
          new TransactionRequest(),
          {
            transactionId: uuidv4(),
            type: "Buy",
            instrumentIdentifiers: {
              "Instrument/default/LusidInstrumentId": Object.entries( instrumentsObject.values )[ 1 ][ 1 ].lusidInstrumentId
            },
            transactionDate: moment([2018, 2, 5, 0, 0, 0]).utc(),
            settlementDate: moment([2018, 2, 5, 0, 0, 0]).utc(),
            units: 100.0,
            transactionPrice: Object.assign(
              new TransactionPrice(),
              {
                price: 102.0
              }
            ),
            totalConsideration: Object.assign(
              new CurrencyAndAmount(),
              {
                amount: 102.0 * 100.0,
                currency: portfolioObject.baseCurrency
              }
            ),
            source: "Broker"
          }
        ),

        Object.assign(
          new TransactionRequest(),
          {
            transactionId: uuidv4(),
            type: "Buy",
            instrumentIdentifiers: {
              "Instrument/default/LusidInstrumentId": Object.entries( instrumentsObject.values )[ 2 ][ 1 ].lusidInstrumentId
            },
            transactionDate: moment([2018, 2, 5, 0, 0, 0]).utc(),
            settlementDate: moment([2018, 2, 5, 0, 0, 0]).utc(),
            units: 100.0,
            transactionPrice: Object.assign(
              new TransactionPrice(),
              {
                price: 103.0
              }
            ),
            totalConsideration: Object.assign(
              new CurrencyAndAmount(),
              {
                amount: 103.0 * 100.0,
                currency: portfolioObject.baseCurrency
              }
            ),
            source: "Broker"
          }
        ),

        // Transaction on day_t1 + 5

        Object.assign(
          new TransactionRequest(),
          {
            transactionId: uuidv4(),
            type: "Buy",
            instrumentIdentifiers: {
              "Instrument/default/LusidInstrumentId": Object.entries( instrumentsObject.values )[ 1 ][ 1 ].lusidInstrumentId
            },
            transactionDate: moment([2018, 2, 5, 0, 0, 0]).add( 5, "day" ).utc(),
            settlementDate: moment([2018, 2, 5, 0, 0, 0]).add( 5, "day" ).utc(),
            units: 100.0,
            transactionPrice: Object.assign(
              new TransactionPrice(),
              {
                price: 104.0
              }
            ),
            totalConsideration: Object.assign(
              new CurrencyAndAmount(),
              {
                amount: 104.0 * 100.0,
                currency: portfolioObject.baseCurrency
              }
            ),
            source: "Broker"
          }
        ),

        Object.assign(
          new TransactionRequest(),
          {
            transactionId: uuidv4(),
            type: "Buy",
            instrumentIdentifiers: {
              "Instrument/default/LusidInstrumentId": Object.entries( instrumentsObject.values )[ 3 ][ 1 ].lusidInstrumentId
            },
            transactionDate: moment([2018, 2, 5, 0, 0, 0]).add( 5, "day" ).utc(),
            settlementDate: moment([2018, 2, 5, 0, 0, 0]).add( 5, "day" ).utc(),
            units: 100.0,
            transactionPrice: Object.assign(
              new TransactionPrice(),
              {
                price: 105.0
              }
            ),
            totalConsideration: Object.assign(
              new CurrencyAndAmount(),
              {
                amount: 105.0 * 100.0,
                currency: portfolioObject.baseCurrency
              }
            ),
            source: "Broker"
          }
        ),

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

const getHoldings = (
    {
      portfolioObject,
      referenceDate
    }: {
      portfolioObject: Portfolio,
      referenceDate: Moment
    }
  ) :Promise<VersionedResourceListOfPortfolioHolding> => {

    return new Promise((resolve, reject) => {
      client.api.transactionPortfolios.getHoldings(
        portfolioObject.id.scope,
        portfolioObject.id.code,
        referenceDate.format()
      )
      .then((res: {response: IncomingMessage, body: VersionedResourceListOfPortfolioHolding}) => {
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

      mlog.log( `Created portfolio ${res.displayName}` );

      mlog.log( `Request log @ ${res.links.pop().href}` );

      done()

    })
    .catch((err) => {console.log(err);mlog.error(err.response.statusCode, err.response.statusMessage, err.response.body.detail ) } )
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

      Object.keys( res.values ).forEach( ( insertedInstrument ) => {

        mlog.log( `Upserted instrument ${insertedInstrument} -> ${res.values[ insertedInstrument ].lusidInstrumentId}`)

      } );

      mlog.log( `Request log @ ${res.links.pop().href}` );

      done()

    })
    .catch((err) =>mlog.error(err.response.statusCode, err.response.statusMessage, err.response.body.detail ) )
  })

  it('Should upsert transactions', (done) => {
    upsertTransactions( {
      portfolioObject: this.portfolioObject,
      instrumentsObject: this.instrumentsObject,
      units: 10000
    } ).then( ( res ) => {

      mlog.log( `Request log @ ${res.links.pop().href}` );

      done();
    } )
    .catch((err) => mlog.error(err.response.statusCode, err.response.statusMessage, err.response.body.detail ) )
  });

  it('Should get holdings', (done) => {
    getHoldings( {
      portfolioObject: this.portfolioObject,
      referenceDate: moment([2018, 2, 5, 0, 0, 0]).add( 10, "day" ).utc()
    } ).then( ( res ) => {

      res.values.sort( ( a, b ) => {

        return ( a.instrumentUid > b.instrumentUid ) ? 1 : -1

      } );

      // check the number of holdings returned
      assert.strictEqual( res.values.length, 5 );

      // Check the cash balance
      assert.strictEqual( res.values[ 0 ].instrumentUid, "CCY_GBP" );

      // Validate the holdings
      assert.strictEqual( res.values[ 0 ].holdingType, "B" );

      mlog.log( `Request log @ ${res.links.pop().href}` );

      done();
    } )
    .catch((err) => {

      if( err instanceof AssertionError )
      {
        throw err;
      }

      mlog.error(err.response.statusCode, err.response.statusMessage, err.response.body.detail )

    } )
  });

  // it('Should delete the portfolio', (done) => {

  //   deletePortfolio(
  //     this.portfolioObject.id.scope,
  //     this.portfolioObject.id.code
  //   ).then( ( res ) => {

  //     mlog.log( `Request log @ ${res.links.pop().href}` );

  //     done()
  //   } )
  //   .catch((err) => mlog.error(err.response.statusCode, err.response.statusMessage, err.response.body.detail ))
  // })
})

export {};
