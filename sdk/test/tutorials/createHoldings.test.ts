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
import { Transactions } from '../../client/lusidTools'
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
    }: {
      portfolioObject: Portfolio,
      instrumentsObject: UpsertInstrumentsResponse,
    }
  ) :Promise<UpsertPortfolioTransactionsResponse> => {

    return new Promise((resolve, reject) => {

      const transactionsToUpsert = [

        Transactions.defineCashFundsInRequest( {
          currency: portfolioObject.baseCurrency,
          transactionDate: moment([2018, 2, 5, 0, 0, 0]).utc(),
          settlementDate: moment([2018, 2, 5, 0, 0, 0]).utc(),
          units: 100000
        } ),

        // Transactions on first day

        Transactions.defineBuyRequest( {
          lusidInstrumentId: Object.entries( instrumentsObject.values )[ 0 ][ 1 ].lusidInstrumentId,
          currency: portfolioObject.baseCurrency,
          transactionDate: moment([2018, 2, 5, 0, 0, 0]).utc(),
          settlementDate: moment([2018, 2, 5, 0, 0, 0]).utc(),
          units: 100.0,
          price: 101.0
        } ),

        Transactions.defineBuyRequest( {
          lusidInstrumentId: Object.entries( instrumentsObject.values )[ 1 ][ 1 ].lusidInstrumentId,
          currency: portfolioObject.baseCurrency,
          transactionDate: moment([2018, 2, 5, 0, 0, 0]).utc(),
          settlementDate: moment([2018, 2, 5, 0, 0, 0]).utc(),
          units: 100.0,
          price: 102.0
        } ),

        Transactions.defineBuyRequest( {
          lusidInstrumentId: Object.entries( instrumentsObject.values )[ 2 ][ 1 ].lusidInstrumentId,
          currency: portfolioObject.baseCurrency,
          transactionDate: moment([2018, 2, 5, 0, 0, 0]).utc(),
          settlementDate: moment([2018, 2, 5, 0, 0, 0]).utc(),
          units: 100.0,
          price: 103.0
        } ),

        // Transactions on first day + 5

        Transactions.defineBuyRequest( {
          lusidInstrumentId: Object.entries( instrumentsObject.values )[ 1 ][ 1 ].lusidInstrumentId,
          currency: portfolioObject.baseCurrency,
          transactionDate: moment([2018, 2, 5, 0, 0, 0]).add( 5, "day" ).utc(),
          settlementDate: moment([2018, 2, 5, 0, 0, 0]).add( 5, "day" ).utc(),
          units: 100.0,
          price: 104.0
        } ),

        Transactions.defineBuyRequest( {
          lusidInstrumentId: Object.entries( instrumentsObject.values )[ 3 ][ 1 ].lusidInstrumentId,
          currency: portfolioObject.baseCurrency,
          transactionDate: moment([2018, 2, 5, 0, 0, 0]).add( 5, "day" ).utc(),
          settlementDate: moment([2018, 2, 5, 0, 0, 0]).add( 5, "day" ).utc(),
          units: 100.0,
          price: 105.0
        } ),

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
      this.instrumentIDs = [];

      Object.keys( res.values ).forEach( ( insertedInstrument ) => {

        mlog.log( `Upserted instrument ${insertedInstrument} -> ${res.values[ insertedInstrument ].lusidInstrumentId}`)

        this.instrumentIDs.push( res.values[ insertedInstrument ].lusidInstrumentId )

      } );

      done()

    })
    .catch((err) => { mlog.error(err.response.statusCode, err.response.statusMessage, err.response.body.detail ) } )
  })

  it('Should upsert transactions', (done) => {
    upsertTransactions( {
      portfolioObject: this.portfolioObject,
      instrumentsObject: this.instrumentsObject,
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

      // check the number of holdings returned
      assert.strictEqual( res.values.length, 5 );

      // Check the cash balance
      assert.strictEqual( res.values[ 4 ].instrumentUid, "CCY_GBP" );

      // Validate the holdings
      assert.strictEqual( res.values[ 4 ].holdingType, "B" );

      // First holding
      assert.strictEqual( res.values[ 0 ].holdingType, "P", "Incorrect holding type" );
      assert.strictEqual( res.values[ 0 ].instrumentUid, this.instrumentIDs[ 0 ], "Incorrect instrument id" );
      assert.strictEqual( res.values[ 0 ].units, 100.0, "Incorrect units" );
      assert.strictEqual( res.values[ 0 ].cost.amount, 10100.0, "Incorrect amount" );

      // Second holding. This should be the sum of 2 transactions done above
      assert.strictEqual( res.values[ 1 ].holdingType, "P", "Incorrect holding type" );
      assert.strictEqual( res.values[ 1 ].instrumentUid, this.instrumentIDs[ 1 ], "Incorrect instrument id" );
      assert.strictEqual( res.values[ 1 ].units, 200.0, "Incorrect units" );
      assert.strictEqual( res.values[ 1 ].cost.amount, 20600.0, "Incorrect amount" );

      // Third holding
      assert.strictEqual( res.values[ 2 ].holdingType, "P", "Incorrect holding type" );
      assert.strictEqual( res.values[ 2 ].instrumentUid, this.instrumentIDs[ 2 ], "Incorrect instrument id" );
      assert.strictEqual( res.values[ 2 ].units, 100.0, "Incorrect units" );
      assert.strictEqual( res.values[ 2 ].cost.amount, 10300.0, "Incorrect amount" );

      // Fourth holding
      assert.strictEqual( res.values[ 3 ].holdingType, "P", "Incorrect holding type" );
      assert.strictEqual( res.values[ 3 ].instrumentUid, this.instrumentIDs[ 3 ], "Incorrect instrument id" );
      assert.strictEqual( res.values[ 3 ].units, 100.0, "Incorrect units" );
      assert.strictEqual( res.values[ 3 ].cost.amount, 10500.0, "Incorrect amount" );

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
