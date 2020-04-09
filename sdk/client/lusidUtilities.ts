// Test specific libraries
import uuidv4 from 'uuid/v4';
import moment, { Moment } from 'moment';

// Require the LUSID SDK and libraries
import {
  TransactionRequest,
  CurrencyAndAmount,
  TransactionPrice,
  TargetTaxLotRequest,
  AdjustHoldingRequest
} from "../model/models";

export const Transactions = {

  defineCashFundsInAdjustHoldingsRequest: (
    {
      currency,
      units
    }: {
      currency?: String,
      units?: Number
    } = {
      currency: "GBP",
      units: 100
    }
  ) :AdjustHoldingRequest => {

    return Object.assign(
      new AdjustHoldingRequest(),
      {
        instrumentIdentifiers: {
          "Instrument/default/Currency": currency
        },
        taxLots: [

          Object.assign(
            new TargetTaxLotRequest(),
            {
              units,
              price: null,
              cost: null,
              portfolioCost: null,
              purchaseDate: null,
              settlementDate: null,
            }
          )

        ]
      }
    );

  },

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
      transactionType,
    }: {
      lusidInstrumentId?: String,
      transactionDate?: Moment,
      settlementDate?: Moment,
      currency?: String,
      units?: number,
      price?: number,
      transactionType?: String
    } = {
      lusidInstrumentId: null,
      transactionDate: moment(),
      settlementDate: null,
      currency: "GBP",
      units: 100,
      price: 101,
      transactionType: "Buy"
    }
  ) :TransactionRequest => {

    return Object.assign(
      new TransactionRequest(),
      {
        transactionId: uuidv4(),
        type: !!transactionType ? transactionType : "Buy",
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

  defineAdjustHoldingsRequest: (
    {
      lusidInstrumentId,
      purchaseDate,
      settlementDate,
      currency,
      units,
      price,
      transactionType,
    }: {
      lusidInstrumentId?: String,
      purchaseDate?: Moment,
      settlementDate?: Moment,
      currency?: String,
      units?: number,
      price?: number,
      transactionType?: String
    } = {
      lusidInstrumentId: null,
      purchaseDate: null,
      settlementDate: null,
      currency: "GBP",
      units: 100,
      price: 101,
      transactionType: "Buy"
    }
  ) :AdjustHoldingRequest => {

    return Object.assign(
      new AdjustHoldingRequest(),
      {
        instrumentIdentifiers: {
          "Instrument/default/LusidInstrumentId": lusidInstrumentId
        },
        taxLots: [

          Object.assign(
            new TargetTaxLotRequest(),
            {
              units,
              price,
              cost: Object.assign(
                new CurrencyAndAmount(),
                {
                  amount: units * price,
                  currency: !!currency ? currency : "GBP"
                }
              ),
              portfolioCost: units * price,
              purchaseDate: !!purchaseDate ? purchaseDate : null,
              settlementDate: !!settlementDate ? settlementDate : null,
            }
          )

        ]
      }
    );

  },

}