/**
 * LUSID API
 * # Introduction  This page documents the [LUSID APIs](https://www.lusid.com/api/swagger), which allows authorised clients to query and update their data within the LUSID platform.  SDKs to interact with the LUSID APIs are available in the following languages and frameworks:  * [C#](https://github.com/finbourne/lusid-sdk-csharp) * [Java](https://github.com/finbourne/lusid-sdk-java) * [JavaScript](https://github.com/finbourne/lusid-sdk-js) * [Python](https://github.com/finbourne/lusid-sdk-python) * [Angular](https://github.com/finbourne/lusid-sdk-angular)  # Data Model  The LUSID API has a relatively lightweight but extremely powerful data model. One of the goals of LUSID was not to enforce on clients a single rigid data model but rather to provide a flexible foundation onto which clients can map their own data models.  The core entities in LUSID provide a minimal structure and set of relationships, and the data model can be extended using Properties.  The LUSID data model is exposed through the LUSID APIs.  The APIs provide access to both business objects and the meta data used to configure the systems behaviours.   The key business entities are: - * **Portfolios** A portfolio is a container for transactions and holdings (a **Transaction Portfolio**) or constituents (a **Reference Portfolio**). * **Derived Portfolios**. Derived Portfolios allow Portfolios to be created based on other Portfolios, by overriding or adding specific items. * **Holdings** A Holding is a quantity of an Instrument or a balance of cash within a Portfolio.  Holdings can only be adjusted via Transactions. * **Transactions** A Transaction is an economic event that occurs in a Portfolio, causing its holdings to change. * **Corporate Actions** A corporate action is a market event which occurs to an Instrument and thus applies to all portfolios which holding the instrument.  Examples are stock splits or mergers. * **Constituents** A constituent is a record in a Reference Portfolio containing an Instrument and an associated weight. * **Instruments**  An instrument represents a currency, tradable instrument or OTC contract that is attached to a transaction and a holding. * **Properties** All major entities allow additional user defined properties to be associated with them.   For example, a Portfolio manager may be associated with a portfolio.  Meta data includes: - * **Transaction Types** Transactions are booked with a specific transaction type.  The types are client defined and are used to map the Transaction to a series of movements which update the portfolio holdings.  * **Properties Types** Types of user defined properties used within the system.  ## Scope  All data in LUSID is segregated at the client level.  Entities in LUSID are identifiable by a unique code.  Every entity lives within a logical data partition known as a Scope.  Scope is an identity namespace allowing two entities with the same unique code to co-exist within individual address spaces.  For example, prices for equities from different vendors may be uploaded into different scopes such as `client/vendor1` and `client/vendor2`.  A portfolio may then be valued using either of the price sources by referencing the appropriate scope.  LUSID Clients cannot access scopes of other clients.  ## Instruments  LUSID has its own built-in instrument master which you can use to master your own instrument universe.  Every instrument must be created with one or more unique market identifiers, such as [FIGI](https://openfigi.com/). For any non-listed instruments (eg OTCs), you can upload an instrument against a custom ID of your choosing.  In addition, LUSID will allocate each instrument a unique \'LUSID instrument identifier\'. The LUSID instrument identifier is what is used when uploading transactions, holdings, prices, etc. The API exposes an `instrument/lookup` endpoint which can be used to lookup these LUSID identifiers using their market identifiers.  Cash can be referenced using the ISO currency code prefixed with \"`CCY_`\" e.g. `CCY_GBP`  ## Instrument Data  Instrument data can be uploaded to the system using the [Instrument Properties](#operation/UpsertInstrumentsProperties) endpoint.  | Field|Type|Description | | ---|---|--- | | Key|propertykey|The key of the property. This takes the format {domain}/{scope}/{code} e.g. \'Instrument/system/Name\' or \'Transaction/strategy/quantsignal\'. | | Value|string|The value of the property. | | EffectiveFrom|datetimeoffset|The effective datetime from which the property is valid. | | EffectiveUntil|datetimeoffset|The effective datetime until which the property is valid. If not supplied this will be valid indefinitely, or until the next \'effectiveFrom\' datetime of the property. |   ## Transaction Portfolios  Portfolios are the top-level entity containers within LUSID, containing transactions, corporate actions and holdings.    The transactions build up the portfolio holdings on which valuations, analytics profit & loss and risk can be calculated.  Properties can be associated with Portfolios to add in additional data.  Portfolio properties can be changed over time, for example to allow a Portfolio Manager to be linked with a Portfolio.  Additionally, portfolios can be securitised and held by other portfolios, allowing LUSID to perform \"drill-through\" into underlying fund holdings  ### Derived Portfolios  LUSID also allows for a portfolio to be composed of another portfolio via derived portfolios.  A derived portfolio can contain its own transactions and also inherits any transactions from its parent portfolio.  Any changes made to the parent portfolio are automatically reflected in derived portfolio.  Derived portfolios in conjunction with scopes are a powerful construct.  For example, to do pre-trade what-if analysis, a derived portfolio could be created a new namespace linked to the underlying live (parent) portfolio.  Analysis can then be undertaken on the derived portfolio without affecting the live portfolio.  ### Transactions  A transaction represents an economic activity against a Portfolio.  Transactions are processed according to a configuration. This will tell the LUSID engine how to interpret the transaction and correctly update the holdings. LUSID comes with a set of transaction types you can use out of the box, or you can configure your own set(s) of transactions.  For more details see the [LUSID Getting Started Guide for transaction configuration.](https://support.lusid.com/configuring-transaction-types)  | Field|Type|Description | | ---|---|--- | | TransactionId|string|The unique identifier of the transaction. | | Type|string|The type of the transaction, for example \'Buy\' or \'Sell\'. The transaction type must have been pre-configured using the System Configuration API. If not, this operation will succeed but you are not able to calculate holdings for the portfolio that include this transaction. | | InstrumentIdentifiers|map|A set of instrument identifiers that can resolve the transaction to a unique instrument. | | TransactionDate|dateorcutlabel|The date of the transaction. | | SettlementDate|dateorcutlabel|The settlement date of the transaction. | | Units|decimal|The number of units of the transacted instrument. | | TransactionPrice|transactionprice|The price of each instrument unit in the transaction currency. | | TotalConsideration|currencyandamount|The total value of the transaction in the settlement currency. | | ExchangeRate|decimal|The exchange rate between the transaction and settlement currency (settlement currency being represented by TotalConsideration.Currency). For example, if the transaction currency is USD and the settlement currency is GBP, this would be the appropriate USD/GBP rate. | | TransactionCurrency|currency|The transaction currency. | | Properties|map|A list of unique transaction properties and associated values to store for the transaction. Each property must be from the \'Transaction\' domain. | | CounterpartyId|string|The identifier for the counterparty of the transaction. | | Source|string|The source of the transaction. This is used to look up the appropriate transaction group set in the transaction type configuration. |   From these fields, the following values can be calculated  * **Transaction value in Transaction currency**: TotalConsideration / ExchangeRate  * **Transaction value in Portfolio currency**: Transaction value in Transaction currency * TradeToPortfolioRate  #### Example Transactions  ##### A Common Purchase Example Three example transactions are shown in the table below.   They represent a purchase of USD denominated IBM shares within a Sterling denominated portfolio.   * The first two transactions are for separate buy and fx trades    * Buying 500 IBM shares for $71,480.00    * A spot foreign exchange conversion to fund the IBM purchase. (Buy $71,480.00 for &#163;54,846.60)  * The third transaction is an alternate version of the above trades. Buying 500 IBM shares and settling directly in Sterling.  | Column |  Buy Trade | Fx Trade | Buy Trade with foreign Settlement | | ----- | ----- | ----- | ----- | | TransactionId | FBN00001 | FBN00002 | FBN00003 | | Type | Buy | FxBuy | Buy | | InstrumentIdentifiers | { \"figi\", \"BBG000BLNNH6\" } | { \"CCY\", \"CCY_USD\" } | { \"figi\", \"BBG000BLNNH6\" } | | TransactionDate | 2018-08-02 | 2018-08-02 | 2018-08-02 | | SettlementDate | 2018-08-06 | 2018-08-06 | 2018-08-06 | | Units | 500 | 71480 | 500 | | TransactionPrice | 142.96 | 1 | 142.96 | | TradeCurrency | USD | USD | USD | | ExchangeRate | 1 | 0.7673 | 0.7673 | | TotalConsideration.Amount | 71480.00 | 54846.60 | 54846.60 | | TotalConsideration.Currency | USD | GBP | GBP | | Trade/default/TradeToPortfolioRate&ast; | 0.7673 | 0.7673 | 0.7673 |  [&ast; This is a property field]  ##### A Forward FX Example  LUSID has a flexible transaction modelling system, meaning there are a number of different ways of modelling forward fx trades.  The default LUSID transaction types are FwdFxBuy and FwdFxSell. Using these transaction types, LUSID will generate two holdings for each Forward FX trade, one for each currency in the trade.  An example Forward Fx trade to sell GBP for USD in a JPY-denominated portfolio is shown below:  | Column | Forward \'Sell\' Trade | Notes | | ----- | ----- | ---- | | TransactionId | FBN00004 | | | Type | FwdFxSell | | | InstrumentIdentifiers | { \"Instrument/default/Currency\", \"GBP\" } | | | TransactionDate | 2018-08-02 | | | SettlementDate | 2019-02-06 | Six month forward | | Units | 10000.00 | Units of GBP | | TransactionPrice | 1 | | | TradeCurrency | GBP | Currency being sold | | ExchangeRate | 1.3142 | Agreed rate between GBP and USD | | TotalConsideration.Amount | 13142.00 | Amount in the settlement currency, USD | | TotalConsideration.Currency | USD | Settlement currency | | Trade/default/TradeToPortfolioRate | 142.88 | Rate between trade currency, GBP and portfolio base currency, JPY |  Please note that exactly the same economic behaviour could be modelled using the FwdFxBuy Transaction Type with the amounts and rates reversed.  ### Holdings  A holding represents a position in an instrument or cash on a given date.  | Field|Type|Description | | ---|---|--- | | InstrumentUid|string|The unqiue Lusid Instrument Id (LUID) of the instrument that the holding is in. | | SubHoldingKeys|map|The sub-holding properties which identify the holding. Each property will be from the \'Transaction\' domain. These are configured when a transaction portfolio is created. | | Properties|map|The properties which have been requested to be decorated onto the holding. These will be from the \'Instrument\' or \'Holding\' domain. | | HoldingType|string|The type of the holding e.g. Position, Balance, CashCommitment, Receivable, ForwardFX etc. | | Units|decimal|The total number of units of the holding. | | SettledUnits|decimal|The total number of settled units of the holding. | | Cost|currencyandamount|The total cost of the holding in the transaction currency. | | CostPortfolioCcy|currencyandamount|The total cost of the holding in the portfolio currency. | | Transaction|transaction|The transaction associated with an unsettled holding. | | Currency|currency|The holding currency. |   ## Corporate Actions  Corporate actions are represented within LUSID in terms of a set of instrument-specific \'transitions\'.  These transitions are used to specify the participants of the corporate action, and the effect that the corporate action will have on holdings in those participants.  ### Corporate Action  | Field|Type|Description | | ---|---|--- | | CorporateActionCode|code|The unique identifier of this corporate action | | Description|string|  | | AnnouncementDate|datetimeoffset|The announcement date of the corporate action | | ExDate|datetimeoffset|The ex date of the corporate action | | RecordDate|datetimeoffset|The record date of the corporate action | | PaymentDate|datetimeoffset|The payment date of the corporate action | | Transitions|corporateactiontransition[]|The transitions that result from this corporate action |   ### Transition | Field|Type|Description | | ---|---|--- | | InputTransition|corporateactiontransitioncomponent|Indicating the basis of the corporate action - which security and how many units | | OutputTransitions|corporateactiontransitioncomponent[]|What will be generated relative to the input transition |   ### Example Corporate Action Transitions  #### A Dividend Action Transition  In this example, for each share of IBM, 0.20 units (or 20 pence) of GBP are generated.  | Column |  Input Transition | Output Transition | | ----- | ----- | ----- | | Instrument Identifiers | { \"figi\" : \"BBG000BLNNH6\" } | { \"ccy\" : \"CCY_GBP\" } | | Units Factor | 1 | 0.20 | | Cost Factor | 1 | 0 |  #### A Split Action Transition  In this example, for each share of IBM, we end up with 2 units (2 shares) of IBM, with total value unchanged.  | Column |  Input Transition | Output Transition | | ----- | ----- | ----- | | Instrument Identifiers | { \"figi\" : \"BBG000BLNNH6\" } | { \"figi\" : \"BBG000BLNNH6\" } | | Units Factor | 1 | 2 | | Cost Factor | 1 | 1 |  #### A Spinoff Action Transition  In this example, for each share of IBM, we end up with 1 unit (1 share) of IBM and 3 units (3 shares) of Celestica, with 85% of the value remaining on the IBM share, and 5% in each Celestica share (15% total).  | Column |  Input Transition | Output Transition 1 | Output Transition 2 | | ----- | ----- | ----- | ----- | | Instrument Identifiers | { \"figi\" : \"BBG000BLNNH6\" } | { \"figi\" : \"BBG000BLNNH6\" } | { \"figi\" : \"BBG000HBGRF3\" } | | Units Factor | 1 | 1 | 3 | | Cost Factor | 1 | 0.85 | 0.15 |  ## Reference Portfolios Reference portfolios are portfolios that contain constituents with weights.  They are designed to represent entities such as indices and benchmarks.  ### Constituents | Field|Type|Description | | ---|---|--- | | InstrumentIdentifiers|map|Unique instrument identifiers | | InstrumentUid|string|LUSID\'s internal unique instrument identifier, resolved from the instrument identifiers | | Currency|decimal|  | | Weight|decimal|  | | FloatingWeight|decimal|  |   ## Portfolio Groups Portfolio groups allow the construction of a hierarchy from portfolios and groups.  Portfolio operations on the group are executed on an aggregated set of portfolios in the hierarchy.   For example:   * Global Portfolios _(group)_   * APAC _(group)_     * Hong Kong _(portfolio)_     * Japan _(portfolio)_   * Europe _(group)_     * France _(portfolio)_     * Germany _(portfolio)_   * UK _(portfolio)_   In this example **Global Portfolios** is a group that consists of an aggregate of **Hong Kong**, **Japan**, **France**, **Germany** and **UK** portfolios.  ## Properties  Properties are key-value pairs that can be applied to any entity within a domain (where a domain is `trade`, `portfolio`, `security` etc).  Properties must be defined before use with a `PropertyDefinition` and can then subsequently be added to entities.   ## Schema  A detailed description of the entities used by the API and parameters for endpoints which take a JSON document can be retrieved via the `schema` endpoint.  ## Meta data  The following headers are returned on all responses from LUSID  | Name | Purpose | | --- | --- | | lusid-meta-duration | Duration of the request | | lusid-meta-success | Whether or not LUSID considered the request to be successful | | lusid-meta-requestId | The unique identifier for the request | | lusid-schema-url | Url of the schema for the data being returned | | lusid-property-schema-url | Url of the schema for any properties |   # Error Codes  | Code|Name|Description | | ---|---|--- | | <a name=\"-10\">-10</a>|Server Configuration Error|  | | <a name=\"-1\">-1</a>|Unknown error|An unexpected error was encountered on our side. | | <a name=\"102\">102</a>|Version Not Found|  | | <a name=\"103\">103</a>|Api Rate Limit Violation|  | | <a name=\"104\">104</a>|Instrument Not Found|  | | <a name=\"105\">105</a>|Property Not Found|  | | <a name=\"106\">106</a>|Portfolio Recursion Depth|  | | <a name=\"108\">108</a>|Group Not Found|  | | <a name=\"109\">109</a>|Portfolio Not Found|  | | <a name=\"110\">110</a>|Property Schema Not Found|  | | <a name=\"111\">111</a>|Portfolio Ancestry Not Found|  | | <a name=\"112\">112</a>|Portfolio With Id Already Exists|  | | <a name=\"113\">113</a>|Orphaned Portfolio|  | | <a name=\"119\">119</a>|Missing Base Claims|  | | <a name=\"121\">121</a>|Property Not Defined|  | | <a name=\"122\">122</a>|Cannot Delete System Property|  | | <a name=\"123\">123</a>|Cannot Modify Immutable Property Field|  | | <a name=\"124\">124</a>|Property Already Exists|  | | <a name=\"125\">125</a>|Invalid Property Life Time|  | | <a name=\"126\">126</a>|Property Constraint Style Excludes Properties|  | | <a name=\"127\">127</a>|Cannot Modify Default Data Type|  | | <a name=\"128\">128</a>|Group Already Exists|  | | <a name=\"129\">129</a>|No Such Data Type|  | | <a name=\"130\">130</a>|Undefined Value For Data Type|  | | <a name=\"131\">131</a>|Unsupported Value Type Defined On Data Type|  | | <a name=\"132\">132</a>|Validation Error|  | | <a name=\"133\">133</a>|Loop Detected In Group Hierarchy|  | | <a name=\"134\">134</a>|Undefined Acceptable Values|  | | <a name=\"135\">135</a>|Sub Group Already Exists|  | | <a name=\"138\">138</a>|Price Source Not Found|  | | <a name=\"139\">139</a>|Analytic Store Not Found|  | | <a name=\"141\">141</a>|Analytic Store Already Exists|  | | <a name=\"143\">143</a>|Client Instrument Already Exists|  | | <a name=\"144\">144</a>|Duplicate In Parameter Set|  | | <a name=\"147\">147</a>|Results Not Found|  | | <a name=\"148\">148</a>|Order Field Not In Result Set|  | | <a name=\"149\">149</a>|Operation Failed|  | | <a name=\"150\">150</a>|Elastic Search Error|  | | <a name=\"151\">151</a>|Invalid Parameter Value|  | | <a name=\"153\">153</a>|Command Processing Failure|  | | <a name=\"154\">154</a>|Entity State Construction Failure|  | | <a name=\"155\">155</a>|Entity Timeline Does Not Exist|  | | <a name=\"156\">156</a>|Concurrency Conflict Failure|  | | <a name=\"157\">157</a>|Invalid Request|  | | <a name=\"158\">158</a>|Event Publish Unknown|  | | <a name=\"159\">159</a>|Event Query Failure|  | | <a name=\"160\">160</a>|Blob Did Not Exist|  | | <a name=\"162\">162</a>|Sub System Request Failure|  | | <a name=\"163\">163</a>|Sub System Configuration Failure|  | | <a name=\"165\">165</a>|Failed To Delete|  | | <a name=\"166\">166</a>|Upsert Client Instrument Failure|  | | <a name=\"167\">167</a>|Illegal As At Interval|  | | <a name=\"168\">168</a>|Illegal Bitemporal Query|  | | <a name=\"169\">169</a>|Invalid Alternate Id|  | | <a name=\"170\">170</a>|Cannot Add Source Portfolio Property Explicitly|  | | <a name=\"171\">171</a>|Entity Already Exists In Group|  | | <a name=\"173\">173</a>|Entity With Id Already Exists|  | | <a name=\"174\">174</a>|Derived Portfolio Details Do Not Exist|  | | <a name=\"176\">176</a>|Portfolio With Name Already Exists|  | | <a name=\"177\">177</a>|Invalid Transactions|  | | <a name=\"178\">178</a>|Reference Portfolio Not Found|  | | <a name=\"179\">179</a>|Duplicate Id|  | | <a name=\"180\">180</a>|Command Retrieval Failure|  | | <a name=\"181\">181</a>|Data Filter Application Failure|  | | <a name=\"182\">182</a>|Search Failed|  | | <a name=\"183\">183</a>|Movements Engine Configuration Key Failure|  | | <a name=\"184\">184</a>|Fx Rate Source Not Found|  | | <a name=\"185\">185</a>|Accrual Source Not Found|  | | <a name=\"186\">186</a>|Access Denied|  | | <a name=\"187\">187</a>|Invalid Identity Token|  | | <a name=\"188\">188</a>|Invalid Request Headers|  | | <a name=\"189\">189</a>|Price Not Found|  | | <a name=\"190\">190</a>|Invalid Sub Holding Keys Provided|  | | <a name=\"191\">191</a>|Duplicate Sub Holding Keys Provided|  | | <a name=\"192\">192</a>|Cut Definition Not Found|  | | <a name=\"193\">193</a>|Cut Definition Invalid|  | | <a name=\"194\">194</a>|Time Variant Property Deletion Date Unspecified|  | | <a name=\"195\">195</a>|Perpetual Property Deletion Date Specified|  | | <a name=\"196\">196</a>|Time Variant Property Upsert Date Unspecified|  | | <a name=\"197\">197</a>|Perpetual Property Upsert Date Specified|  | | <a name=\"200\">200</a>|Invalid Unit For Data Type|  | | <a name=\"201\">201</a>|Invalid Type For Data Type|  | | <a name=\"202\">202</a>|Invalid Value For Data Type|  | | <a name=\"203\">203</a>|Unit Not Defined For Data Type|  | | <a name=\"204\">204</a>|Units Not Supported On Data Type|  | | <a name=\"205\">205</a>|Cannot Specify Units On Data Type|  | | <a name=\"206\">206</a>|Unit Schema Inconsistent With Data Type|  | | <a name=\"207\">207</a>|Unit Definition Not Specified|  | | <a name=\"208\">208</a>|Duplicate Unit Definitions Specified|  | | <a name=\"209\">209</a>|Invalid Units Definition|  | | <a name=\"210\">210</a>|Invalid Instrument Identifier Unit|  | | <a name=\"211\">211</a>|Holdings Adjustment Does Not Exist|  | | <a name=\"212\">212</a>|Could Not Build Excel Url|  | | <a name=\"213\">213</a>|Could Not Get Excel Version|  | | <a name=\"214\">214</a>|Instrument By Code Not Found|  | | <a name=\"215\">215</a>|Entity Schema Does Not Exist|  | | <a name=\"216\">216</a>|Feature Not Supported On Portfolio Type|  | | <a name=\"217\">217</a>|Quote Not Found|  | | <a name=\"218\">218</a>|Invalid Quote Identifier|  | | <a name=\"219\">219</a>|Invalid Metric For Data Type|  | | <a name=\"220\">220</a>|Invalid Instrument Definition|  | | <a name=\"221\">221</a>|Instrument Upsert Failure|  | | <a name=\"222\">222</a>|Reference Portfolio Request Not Supported|  | | <a name=\"223\">223</a>|Transaction Portfolio Request Not Supported|  | | <a name=\"224\">224</a>|Invalid Property Value Assignment|  | | <a name=\"230\">230</a>|Transaction Type Not Found|  | | <a name=\"231\">231</a>|Transaction Type Duplication|  | | <a name=\"232\">232</a>|Portfolio Does Not Exist At Given Date|  | | <a name=\"233\">233</a>|Query Parser Failure|  | | <a name=\"234\">234</a>|Duplicate Constituent|  | | <a name=\"235\">235</a>|Unresolved Instrument Constituent|  | | <a name=\"236\">236</a>|Unresolved Instrument In Transition|  | | <a name=\"237\">237</a>|Missing Side Definitions|  | | <a name=\"299\">299</a>|Invalid Recipe|  | | <a name=\"300\">300</a>|Missing Recipe|  | | <a name=\"301\">301</a>|Dependencies|  | | <a name=\"304\">304</a>|Portfolio Preprocess Failure|  | | <a name=\"310\">310</a>|Valuation Engine Failure|  | | <a name=\"311\">311</a>|Task Factory Failure|  | | <a name=\"312\">312</a>|Task Evaluation Failure|  | | <a name=\"313\">313</a>|Task Generation Failure|  | | <a name=\"314\">314</a>|Engine Configuration Failure|  | | <a name=\"315\">315</a>|Model Specification Failure|  | | <a name=\"320\">320</a>|Market Data Key Failure|  | | <a name=\"321\">321</a>|Market Resolver Failure|  | | <a name=\"322\">322</a>|Market Data Failure|  | | <a name=\"330\">330</a>|Curve Failure|  | | <a name=\"331\">331</a>|Volatility Surface Failure|  | | <a name=\"332\">332</a>|Volatility Cube Failure|  | | <a name=\"350\">350</a>|Instrument Failure|  | | <a name=\"351\">351</a>|Cash Flows Failure|  | | <a name=\"352\">352</a>|Reference Data Failure|  | | <a name=\"360\">360</a>|Aggregation Failure|  | | <a name=\"361\">361</a>|Aggregation Measure Failure|  | | <a name=\"370\">370</a>|Result Retrieval Failure|  | | <a name=\"371\">371</a>|Result Processing Failure|  | | <a name=\"372\">372</a>|Vendor Result Processing Failure|  | | <a name=\"373\">373</a>|Vendor Result Mapping Failure|  | | <a name=\"374\">374</a>|Vendor Library Unauthorised|  | | <a name=\"375\">375</a>|Vendor Connectivity Error|  | | <a name=\"376\">376</a>|Vendor Interface Error|  | | <a name=\"377\">377</a>|Vendor Pricing Failure|  | | <a name=\"378\">378</a>|Vendor Translation Failure|  | | <a name=\"379\">379</a>|Vendor Key Mapping Failure|  | | <a name=\"380\">380</a>|Vendor Reflection Failure|  | | <a name=\"390\">390</a>|Attempt To Upsert Duplicate Quotes|  | | <a name=\"391\">391</a>|Corporate Action Source Does Not Exist|  | | <a name=\"392\">392</a>|Corporate Action Source Already Exists|  | | <a name=\"393\">393</a>|Instrument Identifier Already In Use|  | | <a name=\"394\">394</a>|Properties Not Found|  | | <a name=\"395\">395</a>|Batch Operation Aborted|  | | <a name=\"400\">400</a>|Invalid Iso4217 Currency Code|  | | <a name=\"401\">401</a>|Cannot Assign Instrument Identifier To Currency|  | | <a name=\"402\">402</a>|Cannot Assign Currency Identifier To Non Currency|  | | <a name=\"403\">403</a>|Currency Instrument Cannot Be Deleted|  | | <a name=\"404\">404</a>|Currency Instrument Cannot Have Economic Definition|  | | <a name=\"405\">405</a>|Currency Instrument Cannot Have Lookthrough Portfolio|  | | <a name=\"406\">406</a>|Cannot Create Currency Instrument With Multiple Identifiers|  | | <a name=\"407\">407</a>|Specified Currency Is Undefined|  | | <a name=\"410\">410</a>|Index Does Not Exist|  | | <a name=\"411\">411</a>|Sort Field Does Not Exist|  | | <a name=\"413\">413</a>|Negative Pagination Parameters|  | | <a name=\"414\">414</a>|Invalid Search Syntax|  | | <a name=\"415\">415</a>|Filter Execution Timeout|  | | <a name=\"420\">420</a>|Side Definition Inconsistent|  | | <a name=\"450\">450</a>|Invalid Quote Access Metadata Rule|  | | <a name=\"451\">451</a>|Access Metadata Not Found|  | | <a name=\"452\">452</a>|Invalid Access Metadata Identifier|  | | <a name=\"460\">460</a>|Standard Resource Not Found|  | | <a name=\"461\">461</a>|Standard Resource Conflict|  | | <a name=\"462\">462</a>|Calendar Not Found|  | | <a name=\"463\">463</a>|Date In A Calendar Not Found|  | | <a name=\"464\">464</a>|Invalid Date Source Data|  | | <a name=\"465\">465</a>|Invalid Timezone|  | | <a name=\"601\">601</a>|Person Identifier Already In Use|  | | <a name=\"602\">602</a>|Person Not Found|  | | <a name=\"603\">603</a>|Cannot Set Identifier|  | | <a name=\"617\">617</a>|Invalid Recipe Specification In Request|  | | <a name=\"618\">618</a>|Inline Recipe Deserialisation Failure|  | | <a name=\"619\">619</a>|Identifier Types Not Set For Entity|  | | <a name=\"620\">620</a>|Cannot Delete All Client Defined Identifiers|  | | <a name=\"650\">650</a>|The Order requested was not found.|  | | <a name=\"654\">654</a>|The Allocation requested was not found.|  | | <a name=\"655\">655</a>|Cannot build the fx forward target with the given holdings.|  | | <a name=\"656\">656</a>|Group does not contain expected entities.|  | | <a name=\"667\">667</a>|Relation definition already exists|  | | <a name=\"673\">673</a>|Missing entitlements for entities in Group|  | | <a name=\"674\">674</a>|Next Best Action not found|  | | <a name=\"676\">676</a>|Relation definition not defined|  | | <a name=\"677\">677</a>|Invalid entity identifier for relation|  | | <a name=\"681\">681</a>|Sorting by specified field not supported|One or more of the provided fields to order by were either invalid or not supported. | | <a name=\"682\">682</a>|Too many fields to sort by|The number of fields to sort the data by exceeds the number allowed by the endpoint | | <a name=\"684\">684</a>|Sequence Not Found|  | | <a name=\"685\">685</a>|Sequence Already Exists|  | | <a name=\"686\">686</a>|Non-cycling sequence has been exhausted|  | | <a name=\"687\">687</a>|Legal Entity Identifier Already In Use|  | | <a name=\"688\">688</a>|Legal Entity Not Found|  | | <a name=\"689\">689</a>|The supplied pagination token is invalid|  | | <a name=\"690\">690</a>|Property Type Is Not Supported|  | | <a name=\"691\">691</a>|Multiple Tax-lots For Currency Type Is Not Supported|  | | <a name=\"692\">692</a>|This endpoint does not support impersonation|  | | <a name=\"693\">693</a>|Entity type is not supported for Relationship|  | | <a name=\"694\">694</a>|Relationship Validation Failure|  | | <a name=\"695\">695</a>|Relationship Not Found|  | | <a name=\"697\">697</a>|Derived Property Formula No Longer Valid|  | | <a name=\"698\">698</a>|Story is not available|  | | <a name=\"703\">703</a>|Corporate Action Does Not Exist|  | 
 *
 * The version of the OpenAPI document: 0.11.3028-MARK
 * Contact: info@finbourne.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { AccessMetadataValue } from '../model/accessMetadataValue';
import { CreatePortfolioGroupRequest } from '../model/createPortfolioGroupRequest';
import { DeletedEntityResponse } from '../model/deletedEntityResponse';
import { ExpandedGroup } from '../model/expandedGroup';
import { LusidProblemDetails } from '../model/lusidProblemDetails';
import { LusidValidationProblemDetails } from '../model/lusidValidationProblemDetails';
import { PortfolioGroup } from '../model/portfolioGroup';
import { PortfolioGroupProperties } from '../model/portfolioGroupProperties';
import { Property } from '../model/property';
import { ResourceId } from '../model/resourceId';
import { ResourceListOfAccessMetadataValueOf } from '../model/resourceListOfAccessMetadataValueOf';
import { ResourceListOfPortfolioGroup } from '../model/resourceListOfPortfolioGroup';
import { ResourceListOfProcessedCommand } from '../model/resourceListOfProcessedCommand';
import { ResourceListOfPropertyInterval } from '../model/resourceListOfPropertyInterval';
import { ResourceListOfRelation } from '../model/resourceListOfRelation';
import { ResourceListOfRelationship } from '../model/resourceListOfRelationship';
import { TransactionQueryParameters } from '../model/transactionQueryParameters';
import { UpdatePortfolioGroupRequest } from '../model/updatePortfolioGroupRequest';
import { UpsertPortfolioGroupAccessMetadataRequest } from '../model/upsertPortfolioGroupAccessMetadataRequest';
import { VersionedResourceListOfOutputTransaction } from '../model/versionedResourceListOfOutputTransaction';
import { VersionedResourceListOfPortfolioHolding } from '../model/versionedResourceListOfPortfolioHolding';
import { VersionedResourceListOfTransaction } from '../model/versionedResourceListOfTransaction';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

let defaultBasePath = 'https://fbn-prd.lusid.com/api';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum PortfolioGroupsApiApiKeys {
}

export class PortfolioGroupsApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'oauth2': new OAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: PortfolioGroupsApiApiKeys, value: string) {
        (this.authentications as any)[PortfolioGroupsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.oauth2.accessToken = token;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Add a single portfolio to a portfolio group.
     * @summary [EARLY ACCESS] Add portfolio to group
     * @param scope The scope of the portfolio group to add a portfolio to.
     * @param code The code of the portfolio group to add a portfolio to. Together with the scope this uniquely identifies the portfolio group.
     * @param effectiveAt The effective datetime from which the portfolio will be added to the group.
     * @param resourceId The resource identifier of the portfolio to add to the portfolio group.
     */
    public async addPortfolioToGroup (scope: string, code: string, effectiveAt?: Date, resourceId?: ResourceId, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/portfolios'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling addPortfolioToGroup.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling addPortfolioToGroup.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "Date");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(resourceId, "ResourceId")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioGroup");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Add a portfolio group to a portfolio group as a sub group.
     * @summary [EARLY ACCESS] Add sub group to group
     * @param scope The scope of the portfolio group to add a portfolio group to.
     * @param code The code of the portfolio group to add a portfolio group to. Together with the scope this uniquely identifies the portfolio group.
     * @param effectiveAt The effective datetime from which the sub group will be added to the group.
     * @param resourceId The resource identifier of the portfolio group to add to the portfolio group as a sub group.
     */
    public async addSubGroupToGroup (scope: string, code: string, effectiveAt?: Date, resourceId?: ResourceId, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/subgroups'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling addSubGroupToGroup.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling addSubGroupToGroup.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "Date");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(resourceId, "ResourceId")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioGroup");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Build transactions for transaction portfolios in a portfolio group over a given interval of effective time.     When the specified portfolio in a portfolio group is a derived transaction portfolio, the returned set of transactions is the  union set of all transactions of the parent (and any grandparents etc.) and the specified derived transaction portfolio itself.
     * @summary [EARLY ACCESS] Build transactions for transaction portfolios in a portfolio group
     * @param scope The scope of the portfolio group.
     * @param code The code of the portfolio group. Together with the scope this uniquely identifies              the portfolio group.
     * @param transactionQueryParameters The query queryParameters which control how the output transactions are built.
     * @param asAt The asAt datetime at which to build the transactions. Defaults to return the latest              version of each transaction if not specified.
     * @param filter Expression to filter the result set.              For example, to filter on the Transaction Type, use \&quot;type eq \&#39;Buy\&#39;\&quot;              Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     * @param propertyKeys A list of property keys from the \&quot;Instrument\&quot; or \&quot;Transaction\&quot; domain to decorate onto              the transactions. These take the format {domain}/{scope}/{code} e.g. \&quot;Instrument/system/Name\&quot; or              \&quot;Transaction/strategy/quantsignal\&quot;.
     */
    public async buildTransactionsForPortfolioGroup (scope: string, code: string, transactionQueryParameters: TransactionQueryParameters, asAt?: Date, filter?: string, propertyKeys?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfOutputTransaction;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/transactions/$build'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling buildTransactionsForPortfolioGroup.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling buildTransactionsForPortfolioGroup.');
        }

        // verify required parameter 'transactionQueryParameters' is not null or undefined
        if (transactionQueryParameters === null || transactionQueryParameters === undefined) {
            throw new Error('Required parameter transactionQueryParameters was null or undefined when calling buildTransactionsForPortfolioGroup.');
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(transactionQueryParameters, "TransactionQueryParameters")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfOutputTransaction;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "VersionedResourceListOfOutputTransaction");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Create a portfolio group in a specific scope.
     * @summary [EARLY ACCESS] Create portfolio group
     * @param scope The scope that the portfolio group will be created in.
     * @param createPortfolioGroupRequest The definition and details of the portfolio group.
     */
    public async createPortfolioGroup (scope: string, createPortfolioGroupRequest?: CreatePortfolioGroupRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling createPortfolioGroup.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createPortfolioGroupRequest, "CreatePortfolioGroupRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioGroup");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Delete one or more properties from a single portfolio group. If the properties are time variant then an effective date time from which the properties  will be deleted must be specified. If the properties are perpetual then it is invalid to specify an effective date time for deletion.
     * @summary [EARLY ACCESS] Delete group properties
     * @param scope The scope of the group to delete properties from.
     * @param code The code of the group to delete properties from. Together with the scope this uniquely identifies the group.
     * @param requestBody The property keys of the properties to delete. These take the format              {domain}/{scope}/{code} e.g. \&quot;PortfolioGroup/Manager/Id\&quot;. Each property must be from the \&quot;PortfolioGroup\&quot; domain.
     * @param effectiveAt The effective datetime or cut label at which to delete the properties.
     */
    public async deleteGroupProperties (scope: string, code: string, requestBody: Array<string>, effectiveAt?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/properties/$delete'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling deleteGroupProperties.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deleteGroupProperties.');
        }

        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new Error('Required parameter requestBody was null or undefined when calling deleteGroupProperties.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(requestBody, "Array<string>")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "DeletedEntityResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Deletes the Portfolio Group Access Metadata entry that exactly matches the provided identifier parts.    It is important to always check to verify success (or failure).
     * @summary [EXPERIMENTAL] Delete a Portfolio Group Access Metadata entry
     * @param scope The scope of the Portfolio Group
     * @param code The Portfolio Group code
     * @param metadataKey Key of the Access Metadata entry to delete
     * @param effectiveAt The effective date to delete at, if this is not supplied, it will delete all data found
     */
    public async deleteKeyFromPortfolioGroupAccessMetadata (scope: string, code: string, metadataKey: string, effectiveAt?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/metadata/{metadataKey}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'metadataKey' + '}', encodeURIComponent(String(metadataKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling deleteKeyFromPortfolioGroupAccessMetadata.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deleteKeyFromPortfolioGroupAccessMetadata.');
        }

        // verify required parameter 'metadataKey' is not null or undefined
        if (metadataKey === null || metadataKey === undefined) {
            throw new Error('Required parameter metadataKey was null or undefined when calling deleteKeyFromPortfolioGroupAccessMetadata.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "DeletedEntityResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Remove a single portfolio from a portfolio group.
     * @summary [EARLY ACCESS] Delete portfolio from group
     * @param scope The scope of the portfolio group to remove the portfolio from.
     * @param code The code of the portfolio group to remove the portfolio from. Together with the scope this uniquely identifies the portfolio group.
     * @param portfolioScope The scope of the portfolio being removed from the portfolio group.
     * @param portfolioCode The code of the portfolio being removed from the portfolio group. Together with the scope this uniquely identifies the portfolio to remove.
     * @param effectiveAt The effective datetime from which the portfolio will be removed from the portfolio group.
     */
    public async deletePortfolioFromGroup (scope: string, code: string, portfolioScope: string, portfolioCode: string, effectiveAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/portfolios/{portfolioScope}/{portfolioCode}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'portfolioScope' + '}', encodeURIComponent(String(portfolioScope)))
            .replace('{' + 'portfolioCode' + '}', encodeURIComponent(String(portfolioCode)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling deletePortfolioFromGroup.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deletePortfolioFromGroup.');
        }

        // verify required parameter 'portfolioScope' is not null or undefined
        if (portfolioScope === null || portfolioScope === undefined) {
            throw new Error('Required parameter portfolioScope was null or undefined when calling deletePortfolioFromGroup.');
        }

        // verify required parameter 'portfolioCode' is not null or undefined
        if (portfolioCode === null || portfolioCode === undefined) {
            throw new Error('Required parameter portfolioCode was null or undefined when calling deletePortfolioFromGroup.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "Date");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioGroup");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Delete a single portfolio group. A portfolio group can be deleted while it still contains portfolios or sub groups.  In this case any portfolios or sub groups contained in this group will not be deleted, however they will no longer be grouped together by this portfolio group.  The deletion will be valid from the portfolio group\'s creation datetime, ie. the portfolio group will no longer exist at any effective datetime from the asAt datetime of deletion.
     * @summary [EARLY ACCESS] Delete portfolio group
     * @param scope The scope of the portfolio group to delete.
     * @param code The code of the portfolio group to delete. Together with the scope this uniquely identifies the portfolio group to delete.
     */
    public async deletePortfolioGroup (scope: string, code: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling deletePortfolioGroup.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deletePortfolioGroup.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: DeletedEntityResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "DeletedEntityResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Remove a single portfolio group (sub group) from a portfolio group.
     * @summary [EARLY ACCESS] Delete sub group from group
     * @param scope The scope of the portfolio group to remove the sub group from.
     * @param code The code of the portfolio group to remove the sub group from. Together with the scope this uniquely identifies the portfolio group.
     * @param subgroupScope The scope of the sub group to remove from the portfolio group.
     * @param subgroupCode The code of the sub group to remove from the portfolio group. Together with the scope this uniquely identifies the sub group.
     * @param effectiveAt The effective datetime from which the sub group will be removed from the portfolio group.
     */
    public async deleteSubGroupFromGroup (scope: string, code: string, subgroupScope: string, subgroupCode: string, effectiveAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/subgroups/{subgroupScope}/{subgroupCode}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'subgroupScope' + '}', encodeURIComponent(String(subgroupScope)))
            .replace('{' + 'subgroupCode' + '}', encodeURIComponent(String(subgroupCode)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling deleteSubGroupFromGroup.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling deleteSubGroupFromGroup.');
        }

        // verify required parameter 'subgroupScope' is not null or undefined
        if (subgroupScope === null || subgroupScope === undefined) {
            throw new Error('Required parameter subgroupScope was null or undefined when calling deleteSubGroupFromGroup.');
        }

        // verify required parameter 'subgroupCode' is not null or undefined
        if (subgroupCode === null || subgroupCode === undefined) {
            throw new Error('Required parameter subgroupCode was null or undefined when calling deleteSubGroupFromGroup.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "Date");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioGroup");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * List all the properties of a single portfolio group.
     * @summary [EARLY ACCESS] Get group properties
     * @param scope The scope of the group to list the properties for.
     * @param code The code of the group to list the properties for. Together with the scope this uniquely identifies the group.
     * @param effectiveAt The effective date time or cut label at which to list the group\&#39;s properties. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt date time at which to list the group\&#39;s properties. Defaults to return the latest version of each property if not specified.
     */
    public async getGroupProperties (scope: string, code: string, effectiveAt?: string, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioGroupProperties;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/properties'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getGroupProperties.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getGroupProperties.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PortfolioGroupProperties;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioGroupProperties");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get the holdings of transaction portfolios in specified portfolio group.
     * @summary [EARLY ACCESS] Get holdings for transaction portfolios in portfolio group
     * @param scope The scope of the portfolio group.
     * @param code The code of the portfolio group. Together with the scope this uniquely identifies              the portfolio group.
     * @param effectiveAt The effective datetime or cut label at which to retrieve the holdings of transaction              portfolios in the portfolio group. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to retrieve the holdings of transaction portfolios in the portfolio group. Defaults              to return the latest version of the holdings if not specified.
     * @param filter Expression to filter the result set. Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     * @param propertyKeys A list of property keys from the \&quot;Instrument\&quot; or \&quot;Holding\&quot; domain to decorate onto              the holdings. These take the format {domain}/{scope}/{code} e.g. \&quot;Instrument/system/Name\&quot; or \&quot;Holding/system/Cost\&quot;.
     * @param byTaxlots Whether or not to expand the holdings to return the underlying tax-lots. Defaults to              False.
     */
    public async getHoldingsForPortfolioGroup (scope: string, code: string, effectiveAt?: string, asAt?: Date, filter?: string, propertyKeys?: Array<string>, byTaxlots?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfPortfolioHolding;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/holdings'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getHoldingsForPortfolioGroup.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getHoldingsForPortfolioGroup.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
        }

        if (byTaxlots !== undefined) {
            localVarQueryParameters['byTaxlots'] = ObjectSerializer.serialize(byTaxlots, "boolean");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfPortfolioHolding;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "VersionedResourceListOfPortfolioHolding");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Retrieve the definition of a single portfolio group.
     * @summary [EARLY ACCESS] Get portfolio group
     * @param scope The scope of the portfolio group to retrieve the definition for.
     * @param code The code of the portfolio group to retrieve the definition for. Together with the scope              this uniquely identifies the portfolio group.
     * @param effectiveAt The effective datetime at which to retrieve the portfolio group definition. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to retrieve the portfolio group definition. Defaults to return              the latest version of the portfolio group definition if not specified.
     */
    public async getPortfolioGroup (scope: string, code: string, effectiveAt?: Date, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioGroup.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioGroup.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "Date");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioGroup");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get a specific Portfolio Group access metadata by specifying the corresponding identifier parts                No matching will be performed through this endpoint. To retrieve a rule, it is necessary to specify, exactly, the identifier of the rule
     * @summary [EXPERIMENTAL] Get an entry identified by a metadataKey in the Access Metadata of a Portfolio Group
     * @param scope The scope of the Portfolio Group
     * @param code The Portfolio Group code
     * @param metadataKey Key of the metadata entry to retrieve
     * @param effectiveAt The effectiveAt datetime at which to retrieve the access metadata
     * @param asAt The asAt datetime at which to retrieve the access metadata
     */
    public async getPortfolioGroupAccessMetadataByKey (scope: string, code: string, metadataKey: string, effectiveAt?: string, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Array<AccessMetadataValue>;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/metadata/{metadataKey}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'metadataKey' + '}', encodeURIComponent(String(metadataKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioGroupAccessMetadataByKey.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioGroupAccessMetadataByKey.');
        }

        // verify required parameter 'metadataKey' is not null or undefined
        if (metadataKey === null || metadataKey === undefined) {
            throw new Error('Required parameter metadataKey was null or undefined when calling getPortfolioGroupAccessMetadataByKey.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Array<AccessMetadataValue>;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "Array<AccessMetadataValue>");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Gets all the commands that modified a single portfolio group.
     * @summary [EARLY ACCESS] Get portfolio group commands
     * @param scope The scope of the portfolio group to retrieve the commands for.
     * @param code The code of the portfolio group to retrieve the commands for. Together with the scope this uniquely identifies the portfolio group.
     * @param fromAsAt The lower bound asAt datetime (inclusive) from which to retrieve commands. There is no lower bound if this is not specified.
     * @param toAsAt The upper bound asAt datetime (inclusive) from which to retrieve commands. There is no upper bound if this is not specified.
     * @param filter Expression to filter the result set.                For example, to filter on the User ID, use \&quot;userId.id eq \&#39;string\&#39;\&quot;              Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     */
    public async getPortfolioGroupCommands (scope: string, code: string, fromAsAt?: Date, toAsAt?: Date, filter?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfProcessedCommand;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/commands'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioGroupCommands.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioGroupCommands.');
        }

        if (fromAsAt !== undefined) {
            localVarQueryParameters['fromAsAt'] = ObjectSerializer.serialize(fromAsAt, "Date");
        }

        if (toAsAt !== undefined) {
            localVarQueryParameters['toAsAt'] = ObjectSerializer.serialize(toAsAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfProcessedCommand;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfProcessedCommand");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * List all the portfolios in a group, including all portfolios within sub groups in the group. Each portfolio will be decorated with all of its properties unless a property filter is specified.
     * @summary [EARLY ACCESS] Get portfolio group expansion
     * @param scope The scope of the portfolio group to expand.
     * @param code The code of the portfolio group to expand. Together with the scope this uniquely identifies the portfolio              group to expand.
     * @param effectiveAt The effective datetime at which to expand the portfolio group. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to expand the portfolio group. Defaults to return the latest version of each portfolio in the group if not specified.
     * @param propertyFilter The restricted list of property keys from the \&quot;Portfolio\&quot; domain which will be decorated onto each portfolio. These take the format {domain}/{scope}/{code} e.g. \&quot;Portfolio/Manager/Id\&quot;.
     */
    public async getPortfolioGroupExpansion (scope: string, code: string, effectiveAt?: Date, asAt?: Date, propertyFilter?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ExpandedGroup;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/expansion'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioGroupExpansion.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioGroupExpansion.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "Date");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (propertyFilter !== undefined) {
            localVarQueryParameters['propertyFilter'] = ObjectSerializer.serialize(propertyFilter, "Array<string>");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ExpandedGroup;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ExpandedGroup");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Pass the scope and Portfolio Group code parameters to retrieve the associated Access Metadata
     * @summary [EXPERIMENTAL] Get Access Metadata rules for Portfolio Group
     * @param scope The scope of the Portfolio Group
     * @param code The Portfolio Group code
     * @param effectiveAt The effectiveAt datetime at which to retrieve the Access Metadata
     * @param asAt The asAt datetime at which to retrieve the Access Metadata
     */
    public async getPortfolioGroupMetadata (scope: string, code: string, effectiveAt?: string, asAt?: Date, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: { [key: string]: Array<AccessMetadataValue>; };  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/metadata'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioGroupMetadata.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioGroupMetadata.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: { [key: string]: Array<AccessMetadataValue>; };  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "{ [key: string]: Array<AccessMetadataValue>; }");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * List the complete time series of a portfolio group property.
     * @summary [EXPERIMENTAL] Get the time series of a portfolio group property
     * @param scope The scope of the group.
     * @param code The code of the group. Together with the scope this uniquely identifies              the portfolio group.
     * @param propertyKey The property key of the property that will have its history shown. These must be in the format {domain}/{scope}/{code} e.g. \&quot;PortfolioGroup/Manager/Id\&quot;.              Each property must be from the \&quot;PortfolioGroup\&quot; domain.
     * @param portfolioGroupEffectiveAt The effective datetime used to resolve the portfolio group. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to list the portfolio group\&#39;s property history. Defaults to return the current datetime if not supplied.
     * @param filter Expression to filter the result set. Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     * @param page The pagination token to use to continue listing properties from a previous call to get property time series.              This value is returned from the previous call. If a pagination token is provided the filter, effectiveAt, and asAt fields              must not have changed since the original request.
     * @param limit When paginating, limit the number of returned results to this many.
     */
    public async getPortfolioGroupPropertyTimeSeries (scope: string, code: string, propertyKey?: string, portfolioGroupEffectiveAt?: string, asAt?: Date, filter?: string, page?: string, limit?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfPropertyInterval;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/properties/time-series'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioGroupPropertyTimeSeries.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioGroupPropertyTimeSeries.');
        }

        if (propertyKey !== undefined) {
            localVarQueryParameters['propertyKey'] = ObjectSerializer.serialize(propertyKey, "string");
        }

        if (portfolioGroupEffectiveAt !== undefined) {
            localVarQueryParameters['portfolioGroupEffectiveAt'] = ObjectSerializer.serialize(portfolioGroupEffectiveAt, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "string");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfPropertyInterval;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfPropertyInterval");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get relations for the specified Portfolio Group
     * @summary [EXPERIMENTAL] Get Relations for Portfolio Group
     * @param scope The scope of the portfolio group.
     * @param code The code of the portfolio group. Together with the scope this uniquely identifies              the portfolio group.
     * @param effectiveAt The effective datetime or cut label at which to retrieve relations. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to retrieve relations. Defaults to return the latest LUSID AsAt time if not specified.
     * @param filter Expression to filter the relations. Users should provide null or empty string for this field until further notice.
     * @param identifierTypes Identifiers types (as property keys) used for referencing Persons or Legal Entities. These take the format              {domain}/{scope}/{code} e.g. \&quot;Person/CompanyDetails/Role\&quot;. They must be from the \&quot;Person\&quot; or \&quot;LegalEntity\&quot; domain.              Only identifier types stated will be used to look up relevant entities in relations. If not applicable, provide an empty array.
     */
    public async getPortfolioGroupRelations (scope: string, code: string, effectiveAt?: string, asAt?: Date, filter?: string, identifierTypes?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfRelation;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/relations'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioGroupRelations.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioGroupRelations.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (identifierTypes !== undefined) {
            localVarQueryParameters['identifierTypes'] = ObjectSerializer.serialize(identifierTypes, "Array<string>");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfRelation;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfRelation");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get relationships for the specified Portfolio Group
     * @summary [EXPERIMENTAL] Get Relationships for Portfolio Group
     * @param scope The scope of the portfolio group.
     * @param code The code of the portfolio group. Together with the scope this uniquely identifies              the portfolio group.
     * @param effectiveAt The effective datetime or cut label at which to retrieve relationship. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to retrieve relationships. Defaults to return the latest LUSID AsAt time if not specified.
     * @param filter Expression to filter relationships. Users should provide null or empty string for this field until further notice.
     * @param identifierTypes Identifiers types (as property keys) used for referencing Persons or Legal Entities. These take the format              {domain}/{scope}/{code} e.g. \&quot;Person/CompanyDetails/Role\&quot;. They must be from the \&quot;Person\&quot; or \&quot;LegalEntity\&quot; domain.              Only identifier types stated will be used to look up relevant entities in relationships. If not applicable, provide an empty array.
     */
    public async getPortfolioGroupRelationships (scope: string, code: string, effectiveAt?: string, asAt?: Date, filter?: string, identifierTypes?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfRelationship;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/relationships'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getPortfolioGroupRelationships.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getPortfolioGroupRelationships.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (identifierTypes !== undefined) {
            localVarQueryParameters['identifierTypes'] = ObjectSerializer.serialize(identifierTypes, "Array<string>");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfRelationship;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfRelationship");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Get transactions for transaction portfolios in a portfolio group over a given interval of effective time.     When the specified portfolio in a portfolio group is a derived transaction portfolio, the returned set of transactions is the  union set of all transactions of the parent (and any grandparents etc.) and the specified derived transaction portfolio itself.
     * @summary [EARLY ACCESS] Get transactions for transaction portfolios in a portfolio group
     * @param scope The scope of the portfolio group.
     * @param code The code of the portfolio group. Together with the scope this uniquely identifies              the portfolio group.
     * @param fromTransactionDate The lower bound effective datetime or cut label (inclusive) from which to retrieve the transactions.              There is no lower bound if this is not specified.
     * @param toTransactionDate The upper bound effective datetime or cut label (inclusive) from which to retrieve transactions.              There is no upper bound if this is not specified.
     * @param asAt The asAt datetime at which to retrieve the transactions. Defaults to return the latest version              of each transaction if not specified.
     * @param filter Expression to filter the result set.               For example, to filter on the Transaction Type, use \&quot;type eq \&#39;Buy\&#39;\&quot;              Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     * @param propertyKeys A list of property keys from the \&quot;Instrument\&quot; or \&quot;Transaction\&quot; domain to decorate onto              the transactions. These take the format {domain}/{scope}/{code} e.g. \&quot;Instrument/system/Name\&quot; or              \&quot;Transaction/strategy/quantsignal\&quot;.
     */
    public async getTransactionsForPortfolioGroup (scope: string, code: string, fromTransactionDate?: string, toTransactionDate?: string, asAt?: Date, filter?: string, propertyKeys?: Array<string>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfTransaction;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/transactions'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling getTransactionsForPortfolioGroup.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling getTransactionsForPortfolioGroup.');
        }

        if (fromTransactionDate !== undefined) {
            localVarQueryParameters['fromTransactionDate'] = ObjectSerializer.serialize(fromTransactionDate, "string");
        }

        if (toTransactionDate !== undefined) {
            localVarQueryParameters['toTransactionDate'] = ObjectSerializer.serialize(toTransactionDate, "string");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (propertyKeys !== undefined) {
            localVarQueryParameters['propertyKeys'] = ObjectSerializer.serialize(propertyKeys, "Array<string>");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: VersionedResourceListOfTransaction;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "VersionedResourceListOfTransaction");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * List all the portfolio groups in a single scope.
     * @summary [EARLY ACCESS] List portfolio groups
     * @param scope The scope to list the portfolio groups in.
     * @param effectiveAt The effective datetime at which to list the portfolio groups. Defaults to the current LUSID system datetime if not specified.
     * @param asAt The asAt datetime at which to list the portfolio groups. Defaults to return the latest version of each portfolio group if not specified.
     * @param filter Expression to filter the result set.              For example, to filter on the Display Name, use \&quot;displayName eq \&#39;string\&#39;\&quot;              Read more about filtering results from LUSID here https://support.lusid.com/filtering-results-from-lusid.
     */
    public async listPortfolioGroups (scope: string, effectiveAt?: Date, asAt?: Date, filter?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfPortfolioGroup;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling listPortfolioGroups.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "Date");
        }

        if (asAt !== undefined) {
            localVarQueryParameters['asAt'] = ObjectSerializer.serialize(asAt, "Date");
        }

        if (filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(filter, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfPortfolioGroup;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfPortfolioGroup");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Update the definition of a single portfolio group. Not all elements within a portfolio group definition are modifiable  due to the potential implications for data already stored against the portfolio group.
     * @summary [EARLY ACCESS] Update portfolio group
     * @param scope The scope of the portfolio group to update the definition for.
     * @param code The code of the portfolio group to update the definition for. Together with the scope this uniquely identifies the portfolio group.
     * @param effectiveAt The effective datetime at which to update the definition.
     * @param updatePortfolioGroupRequest The updated portfolio group definition.
     */
    public async updatePortfolioGroup (scope: string, code: string, effectiveAt?: Date, updatePortfolioGroupRequest?: UpdatePortfolioGroupRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling updatePortfolioGroup.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling updatePortfolioGroup.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "Date");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updatePortfolioGroupRequest, "UpdatePortfolioGroupRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PortfolioGroup;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioGroup");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Update or insert one or more properties onto a single group. A property will be updated if it  already exists and inserted if it does not. All properties must be of the domain \'PortfolioGroup\'.                Properties have an <i>effectiveFrom</i> datetime for which the property is valid, and an <i>effectiveUntil</i>  datetime until which the property is valid. Not supplying an <i>effectiveUntil</i> datetime results in the property being  valid indefinitely, or until the next <i>effectiveFrom</i> datetime of the property.
     * @summary [EARLY ACCESS] Upsert group properties
     * @param scope The scope of the group to update or insert the properties onto.
     * @param code The code of the group to update or insert the properties onto. Together with the scope this uniquely identifies the group.
     * @param requestBody The properties to be updated or inserted onto the group. Each property in               the request must be keyed by its unique property key. This has the format {domain}/{scope}/{code} e.g. \&quot;PortfolioGroup/Manager/Id\&quot;.
     */
    public async upsertGroupProperties (scope: string, code: string, requestBody?: { [key: string]: Property; }, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PortfolioGroupProperties;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/properties/$upsert'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling upsertGroupProperties.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling upsertGroupProperties.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(requestBody, "{ [key: string]: Property; }")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: PortfolioGroupProperties;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PortfolioGroupProperties");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Update or insert one Portfolio Group Access Metadata Entry in a single scope. An item will be updated if it already exists  and inserted if it does not.                The response will return the successfully updated or inserted Portfolio Group Access Metadata rule or failure message if unsuccessful.                It is important to always check to verify success (or failure).                Multiple rules for a metadataKey can exist with different effective at dates, when resources are accessed the rule that is active for the current time will be fetched.
     * @summary [EXPERIMENTAL] Upsert a Portfolio Group Access Metadata entry associated with a specific metadataKey. This creates or updates the data in LUSID.
     * @param scope The scope of the Portfolio Group
     * @param code The Portfolio Group code
     * @param metadataKey Key of the access metadata entry to upsert
     * @param upsertPortfolioGroupAccessMetadataRequest The Portfolio Group Access Metadata rule to upsert
     * @param effectiveAt The date this rule will be effective from
     */
    public async upsertPortfolioGroupAccessMetadata (scope: string, code: string, metadataKey: string, upsertPortfolioGroupAccessMetadataRequest: UpsertPortfolioGroupAccessMetadataRequest, effectiveAt?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResourceListOfAccessMetadataValueOf;  }> {
        const localVarPath = this.basePath + '/api/portfoliogroups/{scope}/{code}/metadata/{metadataKey}'
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)))
            .replace('{' + 'metadataKey' + '}', encodeURIComponent(String(metadataKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['text/plain', 'application/json', 'text/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new Error('Required parameter scope was null or undefined when calling upsertPortfolioGroupAccessMetadata.');
        }

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling upsertPortfolioGroupAccessMetadata.');
        }

        // verify required parameter 'metadataKey' is not null or undefined
        if (metadataKey === null || metadataKey === undefined) {
            throw new Error('Required parameter metadataKey was null or undefined when calling upsertPortfolioGroupAccessMetadata.');
        }

        // verify required parameter 'upsertPortfolioGroupAccessMetadataRequest' is not null or undefined
        if (upsertPortfolioGroupAccessMetadataRequest === null || upsertPortfolioGroupAccessMetadataRequest === undefined) {
            throw new Error('Required parameter upsertPortfolioGroupAccessMetadataRequest was null or undefined when calling upsertPortfolioGroupAccessMetadata.');
        }

        if (effectiveAt !== undefined) {
            localVarQueryParameters['effectiveAt'] = ObjectSerializer.serialize(effectiveAt, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(upsertPortfolioGroupAccessMetadataRequest, "UpsertPortfolioGroupAccessMetadataRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.oauth2.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.oauth2.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ResourceListOfAccessMetadataValueOf;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ResourceListOfAccessMetadataValueOf");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
