// Test specific libraries
import mlog from 'mocha-logger';
import uuidv4 from 'uuid/v4';

// Require the LUSID SDK and libraries
import {
  CreateTransactionPortfolioRequest,
  Portfolio
} from "../../api";
import { client } from './clientBuilder'
import {
  LusidProblemDetails,
  DeletedEntityResponse
} from "../../model/models";

// Lusid method handling libraries
import { IncomingMessage } from "http";

const createTransactionPortfolio = (
  scope: string,
  ) :Promise<Portfolio> => {

    return new Promise((resolve, reject) => {

      const
        createRequest = Object.assign(
          new CreateTransactionPortfolioRequest(),
          {
            displayName: "UK Equities",
            code: "UKEQTY",
            baseCurrency: "GBP"
          }
        );

      client.api.transactionPortfolios.createPortfolio(
        scope,
        createRequest
      )
      .then((res: {response: IncomingMessage; body: Portfolio}) => {
        resolve( res.body )
      })
      .catch((err: {response: IncomingMessage; body: LusidProblemDetails}) => reject(err))

    } );
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
    })
  }

describe('Create portfolios', () => {
  it('Should create a transaction portfolio', (done) => {
    createTransactionPortfolio(uuidv4())
    .then((res) => {

      mlog.log( `Request log @ ${res.links.pop().href}` );

      this.portfolioData = res;

      done()

    })
    .catch((err) => console.log(err.response.statusCode, err.response.statusMessage))
  })

  it('Should delete the transaction portfolio', (done) => {

    deletePortfolio(
      this.portfolioData.id.scope,
      this.portfolioData.id.code
    ).then( ( res ) => {

      mlog.log( `Request log @ ${res.links.pop().href}` );

      done()
    } )
    .catch((err) => console.log(err.response.statusCode, err.response.statusMessage))
  })
})

export {};
