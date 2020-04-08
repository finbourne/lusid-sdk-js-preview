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
  DeletedEntityResponse,
  CutLocalTime,
  CutLabelDefinition,
  CreateCutLabelDefinitionRequest
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

const createCutLabels = (
  {
    portfolioObject,
    lusidInstrumentIds,
    referenceDate,
  }: {
    portfolioObject: Portfolio,
    lusidInstrumentIds: Array<string>,
    referenceDate: Moment
  }
) :Promise<{
    cutLabelDefinition: CutLabelDefinition
}> => {

  return new Promise( (resolve, reject) => {

    const _createCutLabel = (
        {
            hours,
            minutes,
            displayName,
            description,
            timeZone,
            codeDictionary
        }: {
            hours: number,
            minutes: number,
            displayName: string,
            description: string,
            timeZone: string,
            codeDictionary: Map<string,string>
        }
    ) :Promise<void|{response: IncomingMessage; body: CutLabelDefinition}> => {

        const
            cutLocalTime = Object.assign(
                new CutLocalTime(),
                {
                    hours,
                    minutes
                }
            ),
            cutLabelDefinition = Object.assign(
                new CreateCutLabelDefinitionRequest(),
                {
                    code: `${displayName}-${uuidv4()}`.substr( 0, 20 ),
                    description,
                    displayName,
                    cutLocalTime,
                    timeZone
                }
            );

        codeDictionary.set( displayName, cutLabelDefinition.description );

        return client.api.cutLabelDefinitions.createCutLabelDefinition(
            cutLabelDefinition
        )
        .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err));

    }

    let
        codeDictionary = new Map();

    _createCutLabel( {
        hours: 9,
        minutes: 0,
        displayName: "LondonOpen",
        description: "London Opening Time, 9am in UK",
        timeZone: "GB",
        codeDictionary
    } ).then( () => {

        _createCutLabel( {
            hours: 17,
            minutes: 0,
            displayName: "LondonClose",
            description: "London Closing Time, 5pm in UK",
            timeZone: "GB",
            codeDictionary
        } ).then( () => {

            _createCutLabel( {
                hours: 8,
                minutes: 0,
                displayName: "SingaporeOpen",
                description: "",
                timeZone: "Singapore",
                codeDictionary
            } ).then( () => {

                _createCutLabel( {
                    hours: 17,
                    minutes: 0,
                    displayName: "SingaporeClose",
                    description: "",
                    timeZone: "Singapore",
                    codeDictionary
                } ).then( () => {

                    _createCutLabel( {
                        hours: 9,
                        minutes: 0,
                        displayName: "NYOpen",
                        description: "",
                        timeZone: "America/New_York",
                        codeDictionary
                    } ).then( () => {

                        _createCutLabel( {
                            hours: 17,
                            minutes: 0,
                            displayName: "NYClose",
                            description: "",
                            timeZone: "America/New_York",
                            codeDictionary
                        } ).then( () => {

                        } );

                    } );

                } );

            } );

        } );

    } )

  } );

}

describe('Cut Labels', () => {

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

  it('Should create cut labels', (done) => {

    createCutLabels(
      {
        portfolioObject: this.portfolioObject,
        referenceDate: this.referenceDate,
        lusidInstrumentIds: this.instrumentIDs
      }
    )
    .then((res) => {

      done()

    })
    .catch((err) => { console.log(err);mlog.error(err) } )
  })

})

export {};
