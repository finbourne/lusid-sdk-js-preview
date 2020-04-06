// Test specific libraries
import uuidv4 from 'uuid/v4';
import moment, { Moment } from 'moment';

// Require the LUSID SDK and libraries
import {
  TransactionRequest,
  CurrencyAndAmount,
  TransactionPrice,
} from "../model/models";

export const Transactions = {

  defineCashFundsInRequest: (
    {
      transactionDate,
      settlementDate,
      currency,
      units
    }: {
      transactionDate?: Moment,
      settlementDate?: Moment,
      currency?: String,
      units?: Number
    } = {
      transactionDate: moment(),
      settlementDate: null,
      currency: "GBP",
      units: 100
    }
  ) :TransactionRequest => {

    return Object.assign(
      new TransactionRequest(),
      {
        transactionId: uuidv4(),
        type: "FundsIn",
        instrumentIdentifiers: {
          "Instrument/default/Currency": currency
        },
        transactionDate,
        settlementDate: !!settlementDate ? settlementDate : transactionDate,
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
            currency
          }
        ),
        source: "Client"
      }
    )

  },

  defineBuyRequest: (
    {
      lusidInstrumentId,
      transactionDate,
      settlementDate,
      currency,
      units,
      price,
    }: {
      lusidInstrumentId?: String,
      transactionDate?: Moment,
      settlementDate?: Moment,
      currency?: String,
      units?: number,
      price?: number
    } = {
      lusidInstrumentId: null,
      transactionDate: moment(),
      settlementDate: null,
      currency: "GBP",
      units: 100,
      price: 101
    }
  ) :TransactionRequest => {

    return Object.assign(
      new TransactionRequest(),
      {
        transactionId: uuidv4(),
        type: "Buy",
        instrumentIdentifiers: {
          "Instrument/default/LusidInstrumentId": lusidInstrumentId
        },
        transactionDate,
        settlementDate: !!settlementDate ? settlementDate : transactionDate,
        units,
        transactionPrice: Object.assign(
          new TransactionPrice(),
          {
            price
          }
        ),
        totalConsideration: Object.assign(
          new CurrencyAndAmount(),
          {
            amount: units * price,
            currency: !!currency ? currency : "GBP"
          }
        ),
        source: "Broker"
      }
    );

  },

}