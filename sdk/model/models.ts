import localVarRequest from 'request';

export * from './a2BBreakdown';
export * from './a2BCategory';
export * from './a2BDataRecord';
export * from './a2BMovementRecord';
export * from './accessControlledAction';
export * from './accessControlledResource';
export * from './accessMetadataValue';
export * from './accountingMethod';
export * from './actionId';
export * from './addBusinessDaysToDateRequest';
export * from './addBusinessDaysToDateResponse';
export * from './adjustHolding';
export * from './adjustHoldingRequest';
export * from './aggregateSpec';
export * from './aggregatedReturn';
export * from './aggregatedReturnsRequest';
export * from './aggregationContext';
export * from './aggregationMeasureFailureDetail';
export * from './aggregationOp';
export * from './aggregationOptions';
export * from './aggregationQuery';
export * from './aggregationType';
export * from './allocation';
export * from './allocationRequest';
export * from './allocationSetRequest';
export * from './annulQuotesResponse';
export * from './annulSingleStructuredDataResponse';
export * from './annulStructuredDataResponse';
export * from './assetClass';
export * from './basket';
export * from './basketAllOf';
export * from './basketIdentifier';
export * from './block';
export * from './blockRequest';
export * from './blockSetRequest';
export * from './bond';
export * from './bondAllOf';
export * from './bucketedCashFlowRequest';
export * from './bucketedCashFlowResponse';
export * from './calculationInfo';
export * from './calculationMethod';
export * from './calendar';
export * from './calendarDate';
export * from './capFloor';
export * from './capFloorAllOf';
export * from './cashLadderRecord';
export * from './cashPerpetual';
export * from './cashPerpetualAllOf';
export * from './cdsFlowConventions';
export * from './cdsIndex';
export * from './cdsIndexAllOf';
export * from './cdsProtectionDetailSpecification';
export * from './cdsRestructuringType';
export * from './cdsSeniority';
export * from './change';
export * from './completePortfolio';
export * from './completeRelation';
export * from './completeRelationship';
export * from './complexMarketData';
export * from './complexMarketDataId';
export * from './configurationRecipe';
export * from './configurationRecipeSnippet';
export * from './constituentsAdjustmentHeader';
export * from './contractForDifference';
export * from './contractForDifferenceAllOf';
export * from './corporateAction';
export * from './corporateActionSource';
export * from './corporateActionTransition';
export * from './corporateActionTransitionComponent';
export * from './corporateActionTransitionComponentRequest';
export * from './corporateActionTransitionRequest';
export * from './counterpartyAgreement';
export * from './counterpartyRiskInformation';
export * from './counterpartySignatory';
export * from './createCalendarRequest';
export * from './createCorporateActionSourceRequest';
export * from './createCutLabelDefinitionRequest';
export * from './createDataMapRequest';
export * from './createDataTypeRequest';
export * from './createDateRequest';
export * from './createDerivedPropertyDefinitionRequest';
export * from './createDerivedTransactionPortfolioRequest';
export * from './createPortfolioDetails';
export * from './createPortfolioGroupRequest';
export * from './createPropertyDefinitionRequest';
export * from './createRecipeRequest';
export * from './createReferencePortfolioRequest';
export * from './createRelationDefinitionRequest';
export * from './createRelationRequest';
export * from './createRelationshipDefinitionRequest';
export * from './createRelationshipRequest';
export * from './createSequenceRequest';
export * from './createTransactionPortfolioRequest';
export * from './createUnitDefinition';
export * from './creditDefaultSwap';
export * from './creditDefaultSwapAllOf';
export * from './creditRating';
export * from './creditSupportAnnex';
export * from './crossCurrencySwap';
export * from './crossCurrencySwapAllOf';
export * from './currencyAndAmount';
export * from './customEntityDefinition';
export * from './customEntityDefinitionRequest';
export * from './customEntityField';
export * from './customEntityFieldDefinition';
export * from './customEntityIdRequest';
export * from './customEntityIdResponse';
export * from './customEntityRequest';
export * from './customEntityResponse';
export * from './cutLabelDefinition';
export * from './cutLocalTime';
export * from './dataDefinition';
export * from './dataMapKey';
export * from './dataMapping';
export * from './dataType';
export * from './dataTypeValueRange';
export * from './dateAttributes';
export * from './dateRange';
export * from './dayOfWeek';
export * from './deleteInstrumentPropertiesResponse';
export * from './deleteInstrumentResponse';
export * from './deleteRelationRequest';
export * from './deleteRelationshipRequest';
export * from './deletedEntityResponse';
export * from './deliveryType';
export * from './discountFactorCurveData';
export * from './discountFactorCurveDataAllOf';
export * from './emptyModelOptions';
export * from './emptyModelOptionsAllOf';
export * from './equity';
export * from './equityAllOf';
export * from './equityAllOfIdentifiers';
export * from './equityOption';
export * from './equityOptionAllOf';
export * from './equitySwap';
export * from './equitySwapAllOf';
export * from './equityVolSurfaceData';
export * from './equityVolSurfaceDataAllOf';
export * from './errorDetail';
export * from './exchangeTradedOption';
export * from './exchangeTradedOptionAllOf';
export * from './exchangeTradedOptionContractDetails';
export * from './execution';
export * from './executionRequest';
export * from './executionSetRequest';
export * from './exoticInstrument';
export * from './exoticInstrumentAllOf';
export * from './expandedGroup';
export * from './feeCalculationDetails';
export * from './fieldSchema';
export * from './fileResponse';
export * from './fixedLeg';
export * from './fixedLegAllOf';
export * from './fixedLegAllOfOverrides';
export * from './floatingLeg';
export * from './floatingLegAllOf';
export * from './flowConventionName';
export * from './flowConventions';
export * from './forwardRateAgreement';
export * from './forwardRateAgreementAllOf';
export * from './fundingLeg';
export * from './fundingLegAllOf';
export * from './future';
export * from './futureAllOf';
export * from './futuresContractDetails';
export * from './fxForward';
export * from './fxForwardAllOf';
export * from './fxForwardCurveByQuoteReference';
export * from './fxForwardCurveByQuoteReferenceAllOf';
export * from './fxForwardCurveData';
export * from './fxForwardCurveDataAllOf';
export * from './fxForwardPipsCurveData';
export * from './fxForwardPipsCurveDataAllOf';
export * from './fxForwardTenorCurveData';
export * from './fxForwardTenorCurveDataAllOf';
export * from './fxForwardTenorPipsCurveData';
export * from './fxForwardTenorPipsCurveDataAllOf';
export * from './fxOption';
export * from './fxOptionAllOf';
export * from './fxSwap';
export * from './fxSwapAllOf';
export * from './fxVolSurfaceData';
export * from './getCdsFlowConventionsResponse';
export * from './getComplexMarketDataResponse';
export * from './getCounterpartyAgreementResponse';
export * from './getCreditSupportAnnexResponse';
export * from './getDataMapResponse';
export * from './getFlowConventionsResponse';
export * from './getIndexConventionResponse';
export * from './getInstrumentsResponse';
export * from './getQuotesResponse';
export * from './getRecipeResponse';
export * from './getReferencePortfolioConstituentsResponse';
export * from './getStructuredMarketDataResponse';
export * from './getStructuredResultDataResponse';
export * from './holdingAdjustment';
export * from './holdingContext';
export * from './holdingsAdjustment';
export * from './holdingsAdjustmentHeader';
export * from './iUnitDefinitionDto';
export * from './idSelectorDefinition';
export * from './identifierPartSchema';
export * from './indexConvention';
export * from './industryClassifier';
export * from './inlineValuationRequest';
export * from './inlineValuationsReconciliationRequest';
export * from './instrument';
export * from './instrumentCashFlow';
export * from './instrumentDefinition';
export * from './instrumentDefinitionFormat';
export * from './instrumentIdTypeDescriptor';
export * from './instrumentIdValue';
export * from './instrumentLeg';
export * from './instrumentLegAllOf';
export * from './instrumentMatch';
export * from './instrumentProperties';
export * from './instrumentSearchProperty';
export * from './instrumentType';
export * from './interestRateSwap';
export * from './interestRateSwapAllOf';
export * from './interestRateSwaption';
export * from './interestRateSwaptionAllOf';
export * from './irVolCubeData';
export * from './irVolCubeDataAllOf';
export * from './isBusinessDayResponse';
export * from './labelValueSet';
export * from './legDefinition';
export * from './legalEntity';
export * from './link';
export * from './listAggregationReconciliation';
export * from './listAggregationResponse';
export * from './lusidInstrument';
export * from './lusidProblemDetails';
export * from './lusidValidationProblemDetails';
export * from './marketContext';
export * from './marketContextSuppliers';
export * from './marketDataKeyRule';
export * from './marketDataType';
export * from './marketIdentifier';
export * from './marketOptions';
export * from './marketQuote';
export * from './metricValue';
export * from './modelOptions';
export * from './modelOptionsType';
export * from './modelSelection';
export * from './movementType';
export * from './multiplier';
export * from './nextValueInSequenceResponse';
export * from './opaqueMarketData';
export * from './opaqueMarketDataAllOf';
export * from './opaqueModelOptions';
export * from './opaqueModelOptionsAllOf';
export * from './operandType';
export * from './operator';
export * from './optionType';
export * from './order';
export * from './orderBySpec';
export * from './orderGraphBlock';
export * from './orderGraphSynopsis';
export * from './orderInstruction';
export * from './orderInstructionRequest';
export * from './orderInstructionSetRequest';
export * from './orderRequest';
export * from './orderSetRequest';
export * from './outputTransaction';
export * from './package';
export * from './packageRequest';
export * from './packageSetRequest';
export * from './pagedResourceListOfAllocation';
export * from './pagedResourceListOfBlock';
export * from './pagedResourceListOfCalendar';
export * from './pagedResourceListOfCorporateActionSource';
export * from './pagedResourceListOfCustomEntityResponse';
export * from './pagedResourceListOfCutLabelDefinition';
export * from './pagedResourceListOfExecution';
export * from './pagedResourceListOfInstrument';
export * from './pagedResourceListOfLegalEntity';
export * from './pagedResourceListOfOrder';
export * from './pagedResourceListOfOrderGraphBlock';
export * from './pagedResourceListOfOrderInstruction';
export * from './pagedResourceListOfPackage';
export * from './pagedResourceListOfParticipation';
export * from './pagedResourceListOfPerson';
export * from './pagedResourceListOfPlacement';
export * from './pagedResourceListOfPortfolioGroupSearchResult';
export * from './pagedResourceListOfPortfolioSearchResult';
export * from './pagedResourceListOfPropertyDefinitionSearchResult';
export * from './participation';
export * from './participationRequest';
export * from './participationSetRequest';
export * from './performanceReturn';
export * from './performanceReturnsMetric';
export * from './periodType';
export * from './perpetualEntityState';
export * from './perpetualProperty';
export * from './person';
export * from './placement';
export * from './placementRequest';
export * from './placementSetRequest';
export * from './portfolio';
export * from './portfolioCashFlow';
export * from './portfolioCashLadder';
export * from './portfolioDetails';
export * from './portfolioEntityId';
export * from './portfolioGroup';
export * from './portfolioGroupProperties';
export * from './portfolioGroupSearchResult';
export * from './portfolioHolding';
export * from './portfolioProperties';
export * from './portfolioReconciliationRequest';
export * from './portfolioSearchResult';
export * from './portfolioType';
export * from './portfoliosReconciliationRequest';
export * from './portfoliosReconciliationRequestPreview';
export * from './premium';
export * from './pricingContext';
export * from './pricingModel';
export * from './pricingOptions';
export * from './processedCommand';
export * from './property';
export * from './propertyDefinition';
export * from './propertyDefinitionSearchResult';
export * from './propertyDefinitionType';
export * from './propertyDomain';
export * from './propertyFilter';
export * from './propertyInterval';
export * from './propertyLifeTime';
export * from './propertySchema';
export * from './propertyType';
export * from './propertyValue';
export * from './quote';
export * from './quoteAccessMetadataRule';
export * from './quoteAccessMetadataRuleId';
export * from './quoteId';
export * from './quoteInstrumentIdType';
export * from './quoteSeriesId';
export * from './quoteType';
export * from './realisedGainLoss';
export * from './reconciliationBreak';
export * from './reconciliationLeftRightAddressKeyPair';
export * from './referencePortfolioConstituent';
export * from './referencePortfolioConstituentRequest';
export * from './referencePortfolioWeightType';
export * from './relatedEntity';
export * from './relation';
export * from './relationDefinition';
export * from './relationship';
export * from './relationshipDefinition';
export * from './repo';
export * from './repoAllOf';
export * from './resourceId';
export * from './resourceListOfA2BDataRecord';
export * from './resourceListOfA2BMovementRecord';
export * from './resourceListOfAccessControlledResource';
export * from './resourceListOfAccessMetadataValueOf';
export * from './resourceListOfAggregatedReturn';
export * from './resourceListOfAggregationQuery';
export * from './resourceListOfAllocation';
export * from './resourceListOfBlock';
export * from './resourceListOfCalendarDate';
export * from './resourceListOfChange';
export * from './resourceListOfConstituentsAdjustmentHeader';
export * from './resourceListOfCorporateAction';
export * from './resourceListOfDataType';
export * from './resourceListOfExecution';
export * from './resourceListOfFeeCalculationDetails';
export * from './resourceListOfGetCdsFlowConventionsResponse';
export * from './resourceListOfGetCounterpartyAgreementResponse';
export * from './resourceListOfGetCreditSupportAnnexResponse';
export * from './resourceListOfGetFlowConventionsResponse';
export * from './resourceListOfGetIndexConventionResponse';
export * from './resourceListOfGetRecipeResponse';
export * from './resourceListOfHoldingsAdjustmentHeader';
export * from './resourceListOfIUnitDefinitionDto';
export * from './resourceListOfInstrumentCashFlow';
export * from './resourceListOfInstrumentIdTypeDescriptor';
export * from './resourceListOfOrder';
export * from './resourceListOfOrderInstruction';
export * from './resourceListOfPackage';
export * from './resourceListOfParticipation';
export * from './resourceListOfPerformanceReturn';
export * from './resourceListOfPlacement';
export * from './resourceListOfPortfolio';
export * from './resourceListOfPortfolioCashFlow';
export * from './resourceListOfPortfolioCashLadder';
export * from './resourceListOfPortfolioGroup';
export * from './resourceListOfProcessedCommand';
export * from './resourceListOfProperty';
export * from './resourceListOfPropertyDefinition';
export * from './resourceListOfPropertyInterval';
export * from './resourceListOfQuote';
export * from './resourceListOfQuoteAccessMetadataRule';
export * from './resourceListOfReconciliationBreak';
export * from './resourceListOfRelation';
export * from './resourceListOfRelationship';
export * from './resourceListOfScopeDefinition';
export * from './resourceListOfString';
export * from './resourceListOfTransaction';
export * from './resourceListOfValueType';
export * from './resultDataKeyRule';
export * from './resultDataSchema';
export * from './schema';
export * from './scopeDefinition';
export * from './sequenceDefinition';
export * from './setPersonIdentifiersRequest';
export * from './setPersonPropertiesRequest';
export * from './sideConfigurationData';
export * from './sideConfigurationDataRequest';
export * from './simpleInstrument';
export * from './simpleInstrumentAllOf';
export * from './sortOrder';
export * from './stream';
export * from './structuredMarketData';
export * from './structuredMarketDataId';
export * from './structuredResultData';
export * from './structuredResultDataId';
export * from './targetTaxLot';
export * from './targetTaxLotRequest';
export * from './termDeposit';
export * from './termDepositAllOf';
export * from './tolerance';
export * from './toleranceEnum';
export * from './transaction';
export * from './transactionConfigurationData';
export * from './transactionConfigurationDataRequest';
export * from './transactionConfigurationMovementData';
export * from './transactionConfigurationMovementDataRequest';
export * from './transactionConfigurationTypeAlias';
export * from './transactionPrice';
export * from './transactionPriceType';
export * from './transactionPropertyMapping';
export * from './transactionPropertyMappingRequest';
export * from './transactionQueryMode';
export * from './transactionQueryParameters';
export * from './transactionRequest';
export * from './transactionRoles';
export * from './transactionSetConfigurationData';
export * from './transactionSetConfigurationDataRequest';
export * from './transactionStatus';
export * from './translateInstrumentDefinitionsRequest';
export * from './translateInstrumentDefinitionsResponse';
export * from './typedResourceId';
export * from './unitSchema';
export * from './unmatchedHoldingMethod';
export * from './updateCalendarRequest';
export * from './updateCutLabelDefinitionRequest';
export * from './updateDataTypeRequest';
export * from './updateInstrumentIdentifierRequest';
export * from './updatePortfolioGroupRequest';
export * from './updatePortfolioRequest';
export * from './updatePropertyDefinitionRequest';
export * from './updateRelationshipDefinitionRequest';
export * from './updateUnitRequest';
export * from './upsertCdsFlowConventionsRequest';
export * from './upsertComplexMarketDataRequest';
export * from './upsertCorporateActionRequest';
export * from './upsertCorporateActionsResponse';
export * from './upsertCounterpartyAgreementRequest';
export * from './upsertCreditSupportAnnexRequest';
export * from './upsertFlowConventionsRequest';
export * from './upsertIndexConventionRequest';
export * from './upsertInstrumentPropertiesResponse';
export * from './upsertInstrumentPropertyRequest';
export * from './upsertInstrumentsResponse';
export * from './upsertLegalEntityAccessMetadataRequest';
export * from './upsertLegalEntityRequest';
export * from './upsertPersonAccessMetadataRequest';
export * from './upsertPersonRequest';
export * from './upsertPortfolioAccessMetadataRequest';
export * from './upsertPortfolioGroupAccessMetadataRequest';
export * from './upsertPortfolioTransactionsResponse';
export * from './upsertQuoteAccessMetadataRuleRequest';
export * from './upsertQuoteRequest';
export * from './upsertQuotesResponse';
export * from './upsertRecipeRequest';
export * from './upsertReferencePortfolioConstituentsRequest';
export * from './upsertReferencePortfolioConstituentsResponse';
export * from './upsertReturnsResponse';
export * from './upsertSingleStructuredDataResponse';
export * from './upsertStructuredDataResponse';
export * from './upsertStructuredMarketDataRequest';
export * from './upsertStructuredResultDataRequest';
export * from './upsertTransactionPropertiesResponse';
export * from './user';
export * from './valuationRequest';
export * from './valuationSchedule';
export * from './valuationsReconciliationRequest';
export * from './valueType';
export * from './vendorLibrary';
export * from './vendorModelRule';
export * from './version';
export * from './versionSummaryDto';
export * from './versionedResourceListOfOutputTransaction';
export * from './versionedResourceListOfPortfolioHolding';
export * from './versionedResourceListOfTransaction';
export * from './versionedResourceListWithWarningsOfPortfolioHolding';
export * from './warning';
export * from './weekendMask';
export * from './weightedInstrument';
export * from './weightedInstruments';
export * from './yieldCurveData';
export * from './yieldCurveDataAllOf';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { A2BBreakdown } from './a2BBreakdown';
import { A2BCategory } from './a2BCategory';
import { A2BDataRecord } from './a2BDataRecord';
import { A2BMovementRecord } from './a2BMovementRecord';
import { AccessControlledAction } from './accessControlledAction';
import { AccessControlledResource } from './accessControlledResource';
import { AccessMetadataValue } from './accessMetadataValue';
import { AccountingMethod } from './accountingMethod';
import { ActionId } from './actionId';
import { AddBusinessDaysToDateRequest } from './addBusinessDaysToDateRequest';
import { AddBusinessDaysToDateResponse } from './addBusinessDaysToDateResponse';
import { AdjustHolding } from './adjustHolding';
import { AdjustHoldingRequest } from './adjustHoldingRequest';
import { AggregateSpec } from './aggregateSpec';
import { AggregatedReturn } from './aggregatedReturn';
import { AggregatedReturnsRequest } from './aggregatedReturnsRequest';
import { AggregationContext } from './aggregationContext';
import { AggregationMeasureFailureDetail } from './aggregationMeasureFailureDetail';
import { AggregationOp } from './aggregationOp';
import { AggregationOptions } from './aggregationOptions';
import { AggregationQuery } from './aggregationQuery';
import { AggregationType } from './aggregationType';
import { Allocation } from './allocation';
import { AllocationRequest } from './allocationRequest';
import { AllocationSetRequest } from './allocationSetRequest';
import { AnnulQuotesResponse } from './annulQuotesResponse';
import { AnnulSingleStructuredDataResponse } from './annulSingleStructuredDataResponse';
import { AnnulStructuredDataResponse } from './annulStructuredDataResponse';
import { AssetClass } from './assetClass';
import { Basket } from './basket';
import { BasketAllOf } from './basketAllOf';
import { BasketIdentifier } from './basketIdentifier';
import { Block } from './block';
import { BlockRequest } from './blockRequest';
import { BlockSetRequest } from './blockSetRequest';
import { Bond } from './bond';
import { BondAllOf } from './bondAllOf';
import { BucketedCashFlowRequest } from './bucketedCashFlowRequest';
import { BucketedCashFlowResponse } from './bucketedCashFlowResponse';
import { CalculationInfo } from './calculationInfo';
import { CalculationMethod } from './calculationMethod';
import { Calendar } from './calendar';
import { CalendarDate } from './calendarDate';
import { CapFloor } from './capFloor';
import { CapFloorAllOf } from './capFloorAllOf';
import { CashLadderRecord } from './cashLadderRecord';
import { CashPerpetual } from './cashPerpetual';
import { CashPerpetualAllOf } from './cashPerpetualAllOf';
import { CdsFlowConventions } from './cdsFlowConventions';
import { CdsIndex } from './cdsIndex';
import { CdsIndexAllOf } from './cdsIndexAllOf';
import { CdsProtectionDetailSpecification } from './cdsProtectionDetailSpecification';
import { CdsRestructuringType } from './cdsRestructuringType';
import { CdsSeniority } from './cdsSeniority';
import { Change } from './change';
import { CompletePortfolio } from './completePortfolio';
import { CompleteRelation } from './completeRelation';
import { CompleteRelationship } from './completeRelationship';
import { ComplexMarketData } from './complexMarketData';
import { ComplexMarketDataId } from './complexMarketDataId';
import { ConfigurationRecipe } from './configurationRecipe';
import { ConfigurationRecipeSnippet } from './configurationRecipeSnippet';
import { ConstituentsAdjustmentHeader } from './constituentsAdjustmentHeader';
import { ContractForDifference } from './contractForDifference';
import { ContractForDifferenceAllOf } from './contractForDifferenceAllOf';
import { CorporateAction } from './corporateAction';
import { CorporateActionSource } from './corporateActionSource';
import { CorporateActionTransition } from './corporateActionTransition';
import { CorporateActionTransitionComponent } from './corporateActionTransitionComponent';
import { CorporateActionTransitionComponentRequest } from './corporateActionTransitionComponentRequest';
import { CorporateActionTransitionRequest } from './corporateActionTransitionRequest';
import { CounterpartyAgreement } from './counterpartyAgreement';
import { CounterpartyRiskInformation } from './counterpartyRiskInformation';
import { CounterpartySignatory } from './counterpartySignatory';
import { CreateCalendarRequest } from './createCalendarRequest';
import { CreateCorporateActionSourceRequest } from './createCorporateActionSourceRequest';
import { CreateCutLabelDefinitionRequest } from './createCutLabelDefinitionRequest';
import { CreateDataMapRequest } from './createDataMapRequest';
import { CreateDataTypeRequest } from './createDataTypeRequest';
import { CreateDateRequest } from './createDateRequest';
import { CreateDerivedPropertyDefinitionRequest } from './createDerivedPropertyDefinitionRequest';
import { CreateDerivedTransactionPortfolioRequest } from './createDerivedTransactionPortfolioRequest';
import { CreatePortfolioDetails } from './createPortfolioDetails';
import { CreatePortfolioGroupRequest } from './createPortfolioGroupRequest';
import { CreatePropertyDefinitionRequest } from './createPropertyDefinitionRequest';
import { CreateRecipeRequest } from './createRecipeRequest';
import { CreateReferencePortfolioRequest } from './createReferencePortfolioRequest';
import { CreateRelationDefinitionRequest } from './createRelationDefinitionRequest';
import { CreateRelationRequest } from './createRelationRequest';
import { CreateRelationshipDefinitionRequest } from './createRelationshipDefinitionRequest';
import { CreateRelationshipRequest } from './createRelationshipRequest';
import { CreateSequenceRequest } from './createSequenceRequest';
import { CreateTransactionPortfolioRequest } from './createTransactionPortfolioRequest';
import { CreateUnitDefinition } from './createUnitDefinition';
import { CreditDefaultSwap } from './creditDefaultSwap';
import { CreditDefaultSwapAllOf } from './creditDefaultSwapAllOf';
import { CreditRating } from './creditRating';
import { CreditSupportAnnex } from './creditSupportAnnex';
import { CrossCurrencySwap } from './crossCurrencySwap';
import { CrossCurrencySwapAllOf } from './crossCurrencySwapAllOf';
import { CurrencyAndAmount } from './currencyAndAmount';
import { CustomEntityDefinition } from './customEntityDefinition';
import { CustomEntityDefinitionRequest } from './customEntityDefinitionRequest';
import { CustomEntityField } from './customEntityField';
import { CustomEntityFieldDefinition } from './customEntityFieldDefinition';
import { CustomEntityIdRequest } from './customEntityIdRequest';
import { CustomEntityIdResponse } from './customEntityIdResponse';
import { CustomEntityRequest } from './customEntityRequest';
import { CustomEntityResponse } from './customEntityResponse';
import { CutLabelDefinition } from './cutLabelDefinition';
import { CutLocalTime } from './cutLocalTime';
import { DataDefinition } from './dataDefinition';
import { DataMapKey } from './dataMapKey';
import { DataMapping } from './dataMapping';
import { DataType } from './dataType';
import { DataTypeValueRange } from './dataTypeValueRange';
import { DateAttributes } from './dateAttributes';
import { DateRange } from './dateRange';
import { DayOfWeek } from './dayOfWeek';
import { DeleteInstrumentPropertiesResponse } from './deleteInstrumentPropertiesResponse';
import { DeleteInstrumentResponse } from './deleteInstrumentResponse';
import { DeleteRelationRequest } from './deleteRelationRequest';
import { DeleteRelationshipRequest } from './deleteRelationshipRequest';
import { DeletedEntityResponse } from './deletedEntityResponse';
import { DeliveryType } from './deliveryType';
import { DiscountFactorCurveData } from './discountFactorCurveData';
import { DiscountFactorCurveDataAllOf } from './discountFactorCurveDataAllOf';
import { EmptyModelOptions } from './emptyModelOptions';
import { EmptyModelOptionsAllOf } from './emptyModelOptionsAllOf';
import { Equity } from './equity';
import { EquityAllOf } from './equityAllOf';
import { EquityAllOfIdentifiers } from './equityAllOfIdentifiers';
import { EquityOption } from './equityOption';
import { EquityOptionAllOf } from './equityOptionAllOf';
import { EquitySwap } from './equitySwap';
import { EquitySwapAllOf } from './equitySwapAllOf';
import { EquityVolSurfaceData } from './equityVolSurfaceData';
import { EquityVolSurfaceDataAllOf } from './equityVolSurfaceDataAllOf';
import { ErrorDetail } from './errorDetail';
import { ExchangeTradedOption } from './exchangeTradedOption';
import { ExchangeTradedOptionAllOf } from './exchangeTradedOptionAllOf';
import { ExchangeTradedOptionContractDetails } from './exchangeTradedOptionContractDetails';
import { Execution } from './execution';
import { ExecutionRequest } from './executionRequest';
import { ExecutionSetRequest } from './executionSetRequest';
import { ExoticInstrument } from './exoticInstrument';
import { ExoticInstrumentAllOf } from './exoticInstrumentAllOf';
import { ExpandedGroup } from './expandedGroup';
import { FeeCalculationDetails } from './feeCalculationDetails';
import { FieldSchema } from './fieldSchema';
import { FileResponse } from './fileResponse';
import { FixedLeg } from './fixedLeg';
import { FixedLegAllOf } from './fixedLegAllOf';
import { FixedLegAllOfOverrides } from './fixedLegAllOfOverrides';
import { FloatingLeg } from './floatingLeg';
import { FloatingLegAllOf } from './floatingLegAllOf';
import { FlowConventionName } from './flowConventionName';
import { FlowConventions } from './flowConventions';
import { ForwardRateAgreement } from './forwardRateAgreement';
import { ForwardRateAgreementAllOf } from './forwardRateAgreementAllOf';
import { FundingLeg } from './fundingLeg';
import { FundingLegAllOf } from './fundingLegAllOf';
import { Future } from './future';
import { FutureAllOf } from './futureAllOf';
import { FuturesContractDetails } from './futuresContractDetails';
import { FxForward } from './fxForward';
import { FxForwardAllOf } from './fxForwardAllOf';
import { FxForwardCurveByQuoteReference } from './fxForwardCurveByQuoteReference';
import { FxForwardCurveByQuoteReferenceAllOf } from './fxForwardCurveByQuoteReferenceAllOf';
import { FxForwardCurveData } from './fxForwardCurveData';
import { FxForwardCurveDataAllOf } from './fxForwardCurveDataAllOf';
import { FxForwardPipsCurveData } from './fxForwardPipsCurveData';
import { FxForwardPipsCurveDataAllOf } from './fxForwardPipsCurveDataAllOf';
import { FxForwardTenorCurveData } from './fxForwardTenorCurveData';
import { FxForwardTenorCurveDataAllOf } from './fxForwardTenorCurveDataAllOf';
import { FxForwardTenorPipsCurveData } from './fxForwardTenorPipsCurveData';
import { FxForwardTenorPipsCurveDataAllOf } from './fxForwardTenorPipsCurveDataAllOf';
import { FxOption } from './fxOption';
import { FxOptionAllOf } from './fxOptionAllOf';
import { FxSwap } from './fxSwap';
import { FxSwapAllOf } from './fxSwapAllOf';
import { FxVolSurfaceData } from './fxVolSurfaceData';
import { GetCdsFlowConventionsResponse } from './getCdsFlowConventionsResponse';
import { GetComplexMarketDataResponse } from './getComplexMarketDataResponse';
import { GetCounterpartyAgreementResponse } from './getCounterpartyAgreementResponse';
import { GetCreditSupportAnnexResponse } from './getCreditSupportAnnexResponse';
import { GetDataMapResponse } from './getDataMapResponse';
import { GetFlowConventionsResponse } from './getFlowConventionsResponse';
import { GetIndexConventionResponse } from './getIndexConventionResponse';
import { GetInstrumentsResponse } from './getInstrumentsResponse';
import { GetQuotesResponse } from './getQuotesResponse';
import { GetRecipeResponse } from './getRecipeResponse';
import { GetReferencePortfolioConstituentsResponse } from './getReferencePortfolioConstituentsResponse';
import { GetStructuredMarketDataResponse } from './getStructuredMarketDataResponse';
import { GetStructuredResultDataResponse } from './getStructuredResultDataResponse';
import { HoldingAdjustment } from './holdingAdjustment';
import { HoldingContext } from './holdingContext';
import { HoldingsAdjustment } from './holdingsAdjustment';
import { HoldingsAdjustmentHeader } from './holdingsAdjustmentHeader';
import { IUnitDefinitionDto } from './iUnitDefinitionDto';
import { IdSelectorDefinition } from './idSelectorDefinition';
import { IdentifierPartSchema } from './identifierPartSchema';
import { IndexConvention } from './indexConvention';
import { IndustryClassifier } from './industryClassifier';
import { InlineValuationRequest } from './inlineValuationRequest';
import { InlineValuationsReconciliationRequest } from './inlineValuationsReconciliationRequest';
import { Instrument } from './instrument';
import { InstrumentCashFlow } from './instrumentCashFlow';
import { InstrumentDefinition } from './instrumentDefinition';
import { InstrumentDefinitionFormat } from './instrumentDefinitionFormat';
import { InstrumentIdTypeDescriptor } from './instrumentIdTypeDescriptor';
import { InstrumentIdValue } from './instrumentIdValue';
import { InstrumentLeg } from './instrumentLeg';
import { InstrumentLegAllOf } from './instrumentLegAllOf';
import { InstrumentMatch } from './instrumentMatch';
import { InstrumentProperties } from './instrumentProperties';
import { InstrumentSearchProperty } from './instrumentSearchProperty';
import { InstrumentType } from './instrumentType';
import { InterestRateSwap } from './interestRateSwap';
import { InterestRateSwapAllOf } from './interestRateSwapAllOf';
import { InterestRateSwaption } from './interestRateSwaption';
import { InterestRateSwaptionAllOf } from './interestRateSwaptionAllOf';
import { IrVolCubeData } from './irVolCubeData';
import { IrVolCubeDataAllOf } from './irVolCubeDataAllOf';
import { IsBusinessDayResponse } from './isBusinessDayResponse';
import { LabelValueSet } from './labelValueSet';
import { LegDefinition } from './legDefinition';
import { LegalEntity } from './legalEntity';
import { Link } from './link';
import { ListAggregationReconciliation } from './listAggregationReconciliation';
import { ListAggregationResponse } from './listAggregationResponse';
import { LusidInstrument } from './lusidInstrument';
import { LusidProblemDetails } from './lusidProblemDetails';
import { LusidValidationProblemDetails } from './lusidValidationProblemDetails';
import { MarketContext } from './marketContext';
import { MarketContextSuppliers } from './marketContextSuppliers';
import { MarketDataKeyRule } from './marketDataKeyRule';
import { MarketDataType } from './marketDataType';
import { MarketIdentifier } from './marketIdentifier';
import { MarketOptions } from './marketOptions';
import { MarketQuote } from './marketQuote';
import { MetricValue } from './metricValue';
import { ModelOptions } from './modelOptions';
import { ModelOptionsType } from './modelOptionsType';
import { ModelSelection } from './modelSelection';
import { MovementType } from './movementType';
import { Multiplier } from './multiplier';
import { NextValueInSequenceResponse } from './nextValueInSequenceResponse';
import { OpaqueMarketData } from './opaqueMarketData';
import { OpaqueMarketDataAllOf } from './opaqueMarketDataAllOf';
import { OpaqueModelOptions } from './opaqueModelOptions';
import { OpaqueModelOptionsAllOf } from './opaqueModelOptionsAllOf';
import { OperandType } from './operandType';
import { Operator } from './operator';
import { OptionType } from './optionType';
import { Order } from './order';
import { OrderBySpec } from './orderBySpec';
import { OrderGraphBlock } from './orderGraphBlock';
import { OrderGraphSynopsis } from './orderGraphSynopsis';
import { OrderInstruction } from './orderInstruction';
import { OrderInstructionRequest } from './orderInstructionRequest';
import { OrderInstructionSetRequest } from './orderInstructionSetRequest';
import { OrderRequest } from './orderRequest';
import { OrderSetRequest } from './orderSetRequest';
import { OutputTransaction } from './outputTransaction';
import { Package } from './package';
import { PackageRequest } from './packageRequest';
import { PackageSetRequest } from './packageSetRequest';
import { PagedResourceListOfAllocation } from './pagedResourceListOfAllocation';
import { PagedResourceListOfBlock } from './pagedResourceListOfBlock';
import { PagedResourceListOfCalendar } from './pagedResourceListOfCalendar';
import { PagedResourceListOfCorporateActionSource } from './pagedResourceListOfCorporateActionSource';
import { PagedResourceListOfCustomEntityResponse } from './pagedResourceListOfCustomEntityResponse';
import { PagedResourceListOfCutLabelDefinition } from './pagedResourceListOfCutLabelDefinition';
import { PagedResourceListOfExecution } from './pagedResourceListOfExecution';
import { PagedResourceListOfInstrument } from './pagedResourceListOfInstrument';
import { PagedResourceListOfLegalEntity } from './pagedResourceListOfLegalEntity';
import { PagedResourceListOfOrder } from './pagedResourceListOfOrder';
import { PagedResourceListOfOrderGraphBlock } from './pagedResourceListOfOrderGraphBlock';
import { PagedResourceListOfOrderInstruction } from './pagedResourceListOfOrderInstruction';
import { PagedResourceListOfPackage } from './pagedResourceListOfPackage';
import { PagedResourceListOfParticipation } from './pagedResourceListOfParticipation';
import { PagedResourceListOfPerson } from './pagedResourceListOfPerson';
import { PagedResourceListOfPlacement } from './pagedResourceListOfPlacement';
import { PagedResourceListOfPortfolioGroupSearchResult } from './pagedResourceListOfPortfolioGroupSearchResult';
import { PagedResourceListOfPortfolioSearchResult } from './pagedResourceListOfPortfolioSearchResult';
import { PagedResourceListOfPropertyDefinitionSearchResult } from './pagedResourceListOfPropertyDefinitionSearchResult';
import { Participation } from './participation';
import { ParticipationRequest } from './participationRequest';
import { ParticipationSetRequest } from './participationSetRequest';
import { PerformanceReturn } from './performanceReturn';
import { PerformanceReturnsMetric } from './performanceReturnsMetric';
import { PeriodType } from './periodType';
import { PerpetualEntityState } from './perpetualEntityState';
import { PerpetualProperty } from './perpetualProperty';
import { Person } from './person';
import { Placement } from './placement';
import { PlacementRequest } from './placementRequest';
import { PlacementSetRequest } from './placementSetRequest';
import { Portfolio } from './portfolio';
import { PortfolioCashFlow } from './portfolioCashFlow';
import { PortfolioCashLadder } from './portfolioCashLadder';
import { PortfolioDetails } from './portfolioDetails';
import { PortfolioEntityId } from './portfolioEntityId';
import { PortfolioGroup } from './portfolioGroup';
import { PortfolioGroupProperties } from './portfolioGroupProperties';
import { PortfolioGroupSearchResult } from './portfolioGroupSearchResult';
import { PortfolioHolding } from './portfolioHolding';
import { PortfolioProperties } from './portfolioProperties';
import { PortfolioReconciliationRequest } from './portfolioReconciliationRequest';
import { PortfolioSearchResult } from './portfolioSearchResult';
import { PortfolioType } from './portfolioType';
import { PortfoliosReconciliationRequest } from './portfoliosReconciliationRequest';
import { PortfoliosReconciliationRequestPreview } from './portfoliosReconciliationRequestPreview';
import { Premium } from './premium';
import { PricingContext } from './pricingContext';
import { PricingModel } from './pricingModel';
import { PricingOptions } from './pricingOptions';
import { ProcessedCommand } from './processedCommand';
import { Property } from './property';
import { PropertyDefinition } from './propertyDefinition';
import { PropertyDefinitionSearchResult } from './propertyDefinitionSearchResult';
import { PropertyDefinitionType } from './propertyDefinitionType';
import { PropertyDomain } from './propertyDomain';
import { PropertyFilter } from './propertyFilter';
import { PropertyInterval } from './propertyInterval';
import { PropertyLifeTime } from './propertyLifeTime';
import { PropertySchema } from './propertySchema';
import { PropertyType } from './propertyType';
import { PropertyValue } from './propertyValue';
import { Quote } from './quote';
import { QuoteAccessMetadataRule } from './quoteAccessMetadataRule';
import { QuoteAccessMetadataRuleId } from './quoteAccessMetadataRuleId';
import { QuoteId } from './quoteId';
import { QuoteInstrumentIdType } from './quoteInstrumentIdType';
import { QuoteSeriesId } from './quoteSeriesId';
import { QuoteType } from './quoteType';
import { RealisedGainLoss } from './realisedGainLoss';
import { ReconciliationBreak } from './reconciliationBreak';
import { ReconciliationLeftRightAddressKeyPair } from './reconciliationLeftRightAddressKeyPair';
import { ReferencePortfolioConstituent } from './referencePortfolioConstituent';
import { ReferencePortfolioConstituentRequest } from './referencePortfolioConstituentRequest';
import { ReferencePortfolioWeightType } from './referencePortfolioWeightType';
import { RelatedEntity } from './relatedEntity';
import { Relation } from './relation';
import { RelationDefinition } from './relationDefinition';
import { Relationship } from './relationship';
import { RelationshipDefinition } from './relationshipDefinition';
import { Repo } from './repo';
import { RepoAllOf } from './repoAllOf';
import { ResourceId } from './resourceId';
import { ResourceListOfA2BDataRecord } from './resourceListOfA2BDataRecord';
import { ResourceListOfA2BMovementRecord } from './resourceListOfA2BMovementRecord';
import { ResourceListOfAccessControlledResource } from './resourceListOfAccessControlledResource';
import { ResourceListOfAccessMetadataValueOf } from './resourceListOfAccessMetadataValueOf';
import { ResourceListOfAggregatedReturn } from './resourceListOfAggregatedReturn';
import { ResourceListOfAggregationQuery } from './resourceListOfAggregationQuery';
import { ResourceListOfAllocation } from './resourceListOfAllocation';
import { ResourceListOfBlock } from './resourceListOfBlock';
import { ResourceListOfCalendarDate } from './resourceListOfCalendarDate';
import { ResourceListOfChange } from './resourceListOfChange';
import { ResourceListOfConstituentsAdjustmentHeader } from './resourceListOfConstituentsAdjustmentHeader';
import { ResourceListOfCorporateAction } from './resourceListOfCorporateAction';
import { ResourceListOfDataType } from './resourceListOfDataType';
import { ResourceListOfExecution } from './resourceListOfExecution';
import { ResourceListOfFeeCalculationDetails } from './resourceListOfFeeCalculationDetails';
import { ResourceListOfGetCdsFlowConventionsResponse } from './resourceListOfGetCdsFlowConventionsResponse';
import { ResourceListOfGetCounterpartyAgreementResponse } from './resourceListOfGetCounterpartyAgreementResponse';
import { ResourceListOfGetCreditSupportAnnexResponse } from './resourceListOfGetCreditSupportAnnexResponse';
import { ResourceListOfGetFlowConventionsResponse } from './resourceListOfGetFlowConventionsResponse';
import { ResourceListOfGetIndexConventionResponse } from './resourceListOfGetIndexConventionResponse';
import { ResourceListOfGetRecipeResponse } from './resourceListOfGetRecipeResponse';
import { ResourceListOfHoldingsAdjustmentHeader } from './resourceListOfHoldingsAdjustmentHeader';
import { ResourceListOfIUnitDefinitionDto } from './resourceListOfIUnitDefinitionDto';
import { ResourceListOfInstrumentCashFlow } from './resourceListOfInstrumentCashFlow';
import { ResourceListOfInstrumentIdTypeDescriptor } from './resourceListOfInstrumentIdTypeDescriptor';
import { ResourceListOfOrder } from './resourceListOfOrder';
import { ResourceListOfOrderInstruction } from './resourceListOfOrderInstruction';
import { ResourceListOfPackage } from './resourceListOfPackage';
import { ResourceListOfParticipation } from './resourceListOfParticipation';
import { ResourceListOfPerformanceReturn } from './resourceListOfPerformanceReturn';
import { ResourceListOfPlacement } from './resourceListOfPlacement';
import { ResourceListOfPortfolio } from './resourceListOfPortfolio';
import { ResourceListOfPortfolioCashFlow } from './resourceListOfPortfolioCashFlow';
import { ResourceListOfPortfolioCashLadder } from './resourceListOfPortfolioCashLadder';
import { ResourceListOfPortfolioGroup } from './resourceListOfPortfolioGroup';
import { ResourceListOfProcessedCommand } from './resourceListOfProcessedCommand';
import { ResourceListOfProperty } from './resourceListOfProperty';
import { ResourceListOfPropertyDefinition } from './resourceListOfPropertyDefinition';
import { ResourceListOfPropertyInterval } from './resourceListOfPropertyInterval';
import { ResourceListOfQuote } from './resourceListOfQuote';
import { ResourceListOfQuoteAccessMetadataRule } from './resourceListOfQuoteAccessMetadataRule';
import { ResourceListOfReconciliationBreak } from './resourceListOfReconciliationBreak';
import { ResourceListOfRelation } from './resourceListOfRelation';
import { ResourceListOfRelationship } from './resourceListOfRelationship';
import { ResourceListOfScopeDefinition } from './resourceListOfScopeDefinition';
import { ResourceListOfString } from './resourceListOfString';
import { ResourceListOfTransaction } from './resourceListOfTransaction';
import { ResourceListOfValueType } from './resourceListOfValueType';
import { ResultDataKeyRule } from './resultDataKeyRule';
import { ResultDataSchema } from './resultDataSchema';
import { Schema } from './schema';
import { ScopeDefinition } from './scopeDefinition';
import { SequenceDefinition } from './sequenceDefinition';
import { SetPersonIdentifiersRequest } from './setPersonIdentifiersRequest';
import { SetPersonPropertiesRequest } from './setPersonPropertiesRequest';
import { SideConfigurationData } from './sideConfigurationData';
import { SideConfigurationDataRequest } from './sideConfigurationDataRequest';
import { SimpleInstrument } from './simpleInstrument';
import { SimpleInstrumentAllOf } from './simpleInstrumentAllOf';
import { SortOrder } from './sortOrder';
import { Stream } from './stream';
import { StructuredMarketData } from './structuredMarketData';
import { StructuredMarketDataId } from './structuredMarketDataId';
import { StructuredResultData } from './structuredResultData';
import { StructuredResultDataId } from './structuredResultDataId';
import { TargetTaxLot } from './targetTaxLot';
import { TargetTaxLotRequest } from './targetTaxLotRequest';
import { TermDeposit } from './termDeposit';
import { TermDepositAllOf } from './termDepositAllOf';
import { Tolerance } from './tolerance';
import { ToleranceEnum } from './toleranceEnum';
import { Transaction } from './transaction';
import { TransactionConfigurationData } from './transactionConfigurationData';
import { TransactionConfigurationDataRequest } from './transactionConfigurationDataRequest';
import { TransactionConfigurationMovementData } from './transactionConfigurationMovementData';
import { TransactionConfigurationMovementDataRequest } from './transactionConfigurationMovementDataRequest';
import { TransactionConfigurationTypeAlias } from './transactionConfigurationTypeAlias';
import { TransactionPrice } from './transactionPrice';
import { TransactionPriceType } from './transactionPriceType';
import { TransactionPropertyMapping } from './transactionPropertyMapping';
import { TransactionPropertyMappingRequest } from './transactionPropertyMappingRequest';
import { TransactionQueryMode } from './transactionQueryMode';
import { TransactionQueryParameters } from './transactionQueryParameters';
import { TransactionRequest } from './transactionRequest';
import { TransactionRoles } from './transactionRoles';
import { TransactionSetConfigurationData } from './transactionSetConfigurationData';
import { TransactionSetConfigurationDataRequest } from './transactionSetConfigurationDataRequest';
import { TransactionStatus } from './transactionStatus';
import { TranslateInstrumentDefinitionsRequest } from './translateInstrumentDefinitionsRequest';
import { TranslateInstrumentDefinitionsResponse } from './translateInstrumentDefinitionsResponse';
import { TypedResourceId } from './typedResourceId';
import { UnitSchema } from './unitSchema';
import { UnmatchedHoldingMethod } from './unmatchedHoldingMethod';
import { UpdateCalendarRequest } from './updateCalendarRequest';
import { UpdateCutLabelDefinitionRequest } from './updateCutLabelDefinitionRequest';
import { UpdateDataTypeRequest } from './updateDataTypeRequest';
import { UpdateInstrumentIdentifierRequest } from './updateInstrumentIdentifierRequest';
import { UpdatePortfolioGroupRequest } from './updatePortfolioGroupRequest';
import { UpdatePortfolioRequest } from './updatePortfolioRequest';
import { UpdatePropertyDefinitionRequest } from './updatePropertyDefinitionRequest';
import { UpdateRelationshipDefinitionRequest } from './updateRelationshipDefinitionRequest';
import { UpdateUnitRequest } from './updateUnitRequest';
import { UpsertCdsFlowConventionsRequest } from './upsertCdsFlowConventionsRequest';
import { UpsertComplexMarketDataRequest } from './upsertComplexMarketDataRequest';
import { UpsertCorporateActionRequest } from './upsertCorporateActionRequest';
import { UpsertCorporateActionsResponse } from './upsertCorporateActionsResponse';
import { UpsertCounterpartyAgreementRequest } from './upsertCounterpartyAgreementRequest';
import { UpsertCreditSupportAnnexRequest } from './upsertCreditSupportAnnexRequest';
import { UpsertFlowConventionsRequest } from './upsertFlowConventionsRequest';
import { UpsertIndexConventionRequest } from './upsertIndexConventionRequest';
import { UpsertInstrumentPropertiesResponse } from './upsertInstrumentPropertiesResponse';
import { UpsertInstrumentPropertyRequest } from './upsertInstrumentPropertyRequest';
import { UpsertInstrumentsResponse } from './upsertInstrumentsResponse';
import { UpsertLegalEntityAccessMetadataRequest } from './upsertLegalEntityAccessMetadataRequest';
import { UpsertLegalEntityRequest } from './upsertLegalEntityRequest';
import { UpsertPersonAccessMetadataRequest } from './upsertPersonAccessMetadataRequest';
import { UpsertPersonRequest } from './upsertPersonRequest';
import { UpsertPortfolioAccessMetadataRequest } from './upsertPortfolioAccessMetadataRequest';
import { UpsertPortfolioGroupAccessMetadataRequest } from './upsertPortfolioGroupAccessMetadataRequest';
import { UpsertPortfolioTransactionsResponse } from './upsertPortfolioTransactionsResponse';
import { UpsertQuoteAccessMetadataRuleRequest } from './upsertQuoteAccessMetadataRuleRequest';
import { UpsertQuoteRequest } from './upsertQuoteRequest';
import { UpsertQuotesResponse } from './upsertQuotesResponse';
import { UpsertRecipeRequest } from './upsertRecipeRequest';
import { UpsertReferencePortfolioConstituentsRequest } from './upsertReferencePortfolioConstituentsRequest';
import { UpsertReferencePortfolioConstituentsResponse } from './upsertReferencePortfolioConstituentsResponse';
import { UpsertReturnsResponse } from './upsertReturnsResponse';
import { UpsertSingleStructuredDataResponse } from './upsertSingleStructuredDataResponse';
import { UpsertStructuredDataResponse } from './upsertStructuredDataResponse';
import { UpsertStructuredMarketDataRequest } from './upsertStructuredMarketDataRequest';
import { UpsertStructuredResultDataRequest } from './upsertStructuredResultDataRequest';
import { UpsertTransactionPropertiesResponse } from './upsertTransactionPropertiesResponse';
import { User } from './user';
import { ValuationRequest } from './valuationRequest';
import { ValuationSchedule } from './valuationSchedule';
import { ValuationsReconciliationRequest } from './valuationsReconciliationRequest';
import { ValueType } from './valueType';
import { VendorLibrary } from './vendorLibrary';
import { VendorModelRule } from './vendorModelRule';
import { Version } from './version';
import { VersionSummaryDto } from './versionSummaryDto';
import { VersionedResourceListOfOutputTransaction } from './versionedResourceListOfOutputTransaction';
import { VersionedResourceListOfPortfolioHolding } from './versionedResourceListOfPortfolioHolding';
import { VersionedResourceListOfTransaction } from './versionedResourceListOfTransaction';
import { VersionedResourceListWithWarningsOfPortfolioHolding } from './versionedResourceListWithWarningsOfPortfolioHolding';
import { Warning } from './warning';
import { WeekendMask } from './weekendMask';
import { WeightedInstrument } from './weightedInstrument';
import { WeightedInstruments } from './weightedInstruments';
import { YieldCurveData } from './yieldCurveData';
import { YieldCurveDataAllOf } from './yieldCurveDataAllOf';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AccountingMethod": AccountingMethod,
        "AggregateSpec.OpEnum": AggregateSpec.OpEnum,
        "AggregationOp": AggregationOp,
        "AggregationQuery.TypeEnum": AggregationQuery.TypeEnum,
        "AggregationType": AggregationType,
        "AssetClass": AssetClass,
        "Basket.InstrumentTypeEnum": Basket.InstrumentTypeEnum,
        "BasketAllOf.InstrumentTypeEnum": BasketAllOf.InstrumentTypeEnum,
        "Bond.InstrumentTypeEnum": Bond.InstrumentTypeEnum,
        "BondAllOf.InstrumentTypeEnum": BondAllOf.InstrumentTypeEnum,
        "CalculationInfo.CalculationMethodEnum": CalculationInfo.CalculationMethodEnum,
        "CalculationInfo.MultiplierEnum": CalculationInfo.MultiplierEnum,
        "CalculationMethod": CalculationMethod,
        "CapFloor.InstrumentTypeEnum": CapFloor.InstrumentTypeEnum,
        "CapFloorAllOf.InstrumentTypeEnum": CapFloorAllOf.InstrumentTypeEnum,
        "CashPerpetual.InstrumentTypeEnum": CashPerpetual.InstrumentTypeEnum,
        "CashPerpetualAllOf.InstrumentTypeEnum": CashPerpetualAllOf.InstrumentTypeEnum,
        "CdsIndex.InstrumentTypeEnum": CdsIndex.InstrumentTypeEnum,
        "CdsIndexAllOf.InstrumentTypeEnum": CdsIndexAllOf.InstrumentTypeEnum,
        "CdsProtectionDetailSpecification.SeniorityEnum": CdsProtectionDetailSpecification.SeniorityEnum,
        "CdsProtectionDetailSpecification.RestructuringTypeEnum": CdsProtectionDetailSpecification.RestructuringTypeEnum,
        "CdsRestructuringType": CdsRestructuringType,
        "CdsSeniority": CdsSeniority,
        "CompletePortfolio.TypeEnum": CompletePortfolio.TypeEnum,
        "ComplexMarketData.MarketDataTypeEnum": ComplexMarketData.MarketDataTypeEnum,
        "ContractForDifference.InstrumentTypeEnum": ContractForDifference.InstrumentTypeEnum,
        "ContractForDifferenceAllOf.InstrumentTypeEnum": ContractForDifferenceAllOf.InstrumentTypeEnum,
        "CreateDataTypeRequest.TypeValueRangeEnum": CreateDataTypeRequest.TypeValueRangeEnum,
        "CreateDataTypeRequest.ValueTypeEnum": CreateDataTypeRequest.ValueTypeEnum,
        "CreateDataTypeRequest.UnitSchemaEnum": CreateDataTypeRequest.UnitSchemaEnum,
        "CreateDerivedPropertyDefinitionRequest.DomainEnum": CreateDerivedPropertyDefinitionRequest.DomainEnum,
        "CreateDerivedTransactionPortfolioRequest.AccountingMethodEnum": CreateDerivedTransactionPortfolioRequest.AccountingMethodEnum,
        "CreatePropertyDefinitionRequest.DomainEnum": CreatePropertyDefinitionRequest.DomainEnum,
        "CreatePropertyDefinitionRequest.LifeTimeEnum": CreatePropertyDefinitionRequest.LifeTimeEnum,
        "CreateTransactionPortfolioRequest.AccountingMethodEnum": CreateTransactionPortfolioRequest.AccountingMethodEnum,
        "CreditDefaultSwap.InstrumentTypeEnum": CreditDefaultSwap.InstrumentTypeEnum,
        "CreditDefaultSwapAllOf.InstrumentTypeEnum": CreditDefaultSwapAllOf.InstrumentTypeEnum,
        "CrossCurrencySwap.InstrumentTypeEnum": CrossCurrencySwap.InstrumentTypeEnum,
        "CrossCurrencySwapAllOf.InstrumentTypeEnum": CrossCurrencySwapAllOf.InstrumentTypeEnum,
        "DataType.TypeValueRangeEnum": DataType.TypeValueRangeEnum,
        "DataType.ValueTypeEnum": DataType.ValueTypeEnum,
        "DataType.UnitSchemaEnum": DataType.UnitSchemaEnum,
        "DataTypeValueRange": DataTypeValueRange,
        "DayOfWeek": DayOfWeek,
        "DeliveryType": DeliveryType,
        "DiscountFactorCurveData.MarketDataTypeEnum": DiscountFactorCurveData.MarketDataTypeEnum,
        "DiscountFactorCurveDataAllOf.MarketDataTypeEnum": DiscountFactorCurveDataAllOf.MarketDataTypeEnum,
        "EmptyModelOptions.ModelOptionsTypeEnum": EmptyModelOptions.ModelOptionsTypeEnum,
        "EmptyModelOptionsAllOf.ModelOptionsTypeEnum": EmptyModelOptionsAllOf.ModelOptionsTypeEnum,
        "Equity.InstrumentTypeEnum": Equity.InstrumentTypeEnum,
        "EquityAllOf.InstrumentTypeEnum": EquityAllOf.InstrumentTypeEnum,
        "EquityOption.DeliveryTypeEnum": EquityOption.DeliveryTypeEnum,
        "EquityOption.OptionTypeEnum": EquityOption.OptionTypeEnum,
        "EquityOption.UnderlyingIdentifierEnum": EquityOption.UnderlyingIdentifierEnum,
        "EquityOption.InstrumentTypeEnum": EquityOption.InstrumentTypeEnum,
        "EquityOptionAllOf.DeliveryTypeEnum": EquityOptionAllOf.DeliveryTypeEnum,
        "EquityOptionAllOf.OptionTypeEnum": EquityOptionAllOf.OptionTypeEnum,
        "EquityOptionAllOf.UnderlyingIdentifierEnum": EquityOptionAllOf.UnderlyingIdentifierEnum,
        "EquityOptionAllOf.InstrumentTypeEnum": EquityOptionAllOf.InstrumentTypeEnum,
        "EquitySwap.InstrumentTypeEnum": EquitySwap.InstrumentTypeEnum,
        "EquitySwapAllOf.InstrumentTypeEnum": EquitySwapAllOf.InstrumentTypeEnum,
        "EquityVolSurfaceData.MarketDataTypeEnum": EquityVolSurfaceData.MarketDataTypeEnum,
        "EquityVolSurfaceDataAllOf.MarketDataTypeEnum": EquityVolSurfaceDataAllOf.MarketDataTypeEnum,
        "ExchangeTradedOption.InstrumentTypeEnum": ExchangeTradedOption.InstrumentTypeEnum,
        "ExchangeTradedOptionAllOf.InstrumentTypeEnum": ExchangeTradedOptionAllOf.InstrumentTypeEnum,
        "ExoticInstrument.InstrumentTypeEnum": ExoticInstrument.InstrumentTypeEnum,
        "ExoticInstrumentAllOf.InstrumentTypeEnum": ExoticInstrumentAllOf.InstrumentTypeEnum,
        "FieldSchema.TypeEnum": FieldSchema.TypeEnum,
        "FixedLeg.InstrumentTypeEnum": FixedLeg.InstrumentTypeEnum,
        "FixedLegAllOf.InstrumentTypeEnum": FixedLegAllOf.InstrumentTypeEnum,
        "FloatingLeg.InstrumentTypeEnum": FloatingLeg.InstrumentTypeEnum,
        "FloatingLegAllOf.InstrumentTypeEnum": FloatingLegAllOf.InstrumentTypeEnum,
        "ForwardRateAgreement.InstrumentTypeEnum": ForwardRateAgreement.InstrumentTypeEnum,
        "ForwardRateAgreementAllOf.InstrumentTypeEnum": ForwardRateAgreementAllOf.InstrumentTypeEnum,
        "FundingLeg.InstrumentTypeEnum": FundingLeg.InstrumentTypeEnum,
        "FundingLegAllOf.InstrumentTypeEnum": FundingLegAllOf.InstrumentTypeEnum,
        "Future.InstrumentTypeEnum": Future.InstrumentTypeEnum,
        "FutureAllOf.InstrumentTypeEnum": FutureAllOf.InstrumentTypeEnum,
        "FxForward.InstrumentTypeEnum": FxForward.InstrumentTypeEnum,
        "FxForwardAllOf.InstrumentTypeEnum": FxForwardAllOf.InstrumentTypeEnum,
        "FxForwardCurveByQuoteReference.MarketDataTypeEnum": FxForwardCurveByQuoteReference.MarketDataTypeEnum,
        "FxForwardCurveByQuoteReferenceAllOf.MarketDataTypeEnum": FxForwardCurveByQuoteReferenceAllOf.MarketDataTypeEnum,
        "FxForwardCurveData.MarketDataTypeEnum": FxForwardCurveData.MarketDataTypeEnum,
        "FxForwardCurveDataAllOf.MarketDataTypeEnum": FxForwardCurveDataAllOf.MarketDataTypeEnum,
        "FxForwardPipsCurveData.MarketDataTypeEnum": FxForwardPipsCurveData.MarketDataTypeEnum,
        "FxForwardPipsCurveDataAllOf.MarketDataTypeEnum": FxForwardPipsCurveDataAllOf.MarketDataTypeEnum,
        "FxForwardTenorCurveData.MarketDataTypeEnum": FxForwardTenorCurveData.MarketDataTypeEnum,
        "FxForwardTenorCurveDataAllOf.MarketDataTypeEnum": FxForwardTenorCurveDataAllOf.MarketDataTypeEnum,
        "FxForwardTenorPipsCurveData.MarketDataTypeEnum": FxForwardTenorPipsCurveData.MarketDataTypeEnum,
        "FxForwardTenorPipsCurveDataAllOf.MarketDataTypeEnum": FxForwardTenorPipsCurveDataAllOf.MarketDataTypeEnum,
        "FxOption.InstrumentTypeEnum": FxOption.InstrumentTypeEnum,
        "FxOptionAllOf.InstrumentTypeEnum": FxOptionAllOf.InstrumentTypeEnum,
        "FxSwap.InstrumentTypeEnum": FxSwap.InstrumentTypeEnum,
        "FxSwapAllOf.InstrumentTypeEnum": FxSwapAllOf.InstrumentTypeEnum,
        "FxVolSurfaceData.MarketDataTypeEnum": FxVolSurfaceData.MarketDataTypeEnum,
        "GetReferencePortfolioConstituentsResponse.WeightTypeEnum": GetReferencePortfolioConstituentsResponse.WeightTypeEnum,
        "GetReferencePortfolioConstituentsResponse.PeriodTypeEnum": GetReferencePortfolioConstituentsResponse.PeriodTypeEnum,
        "HoldingsAdjustment.UnmatchedHoldingMethodEnum": HoldingsAdjustment.UnmatchedHoldingMethodEnum,
        "HoldingsAdjustmentHeader.UnmatchedHoldingMethodEnum": HoldingsAdjustmentHeader.UnmatchedHoldingMethodEnum,
        "IUnitDefinitionDto.SchemaEnum": IUnitDefinitionDto.SchemaEnum,
        "Instrument.StateEnum": Instrument.StateEnum,
        "InstrumentLeg.InstrumentTypeEnum": InstrumentLeg.InstrumentTypeEnum,
        "InstrumentLegAllOf.InstrumentTypeEnum": InstrumentLegAllOf.InstrumentTypeEnum,
        "InstrumentType": InstrumentType,
        "InterestRateSwap.InstrumentTypeEnum": InterestRateSwap.InstrumentTypeEnum,
        "InterestRateSwapAllOf.InstrumentTypeEnum": InterestRateSwapAllOf.InstrumentTypeEnum,
        "InterestRateSwaption.InstrumentTypeEnum": InterestRateSwaption.InstrumentTypeEnum,
        "InterestRateSwaptionAllOf.InstrumentTypeEnum": InterestRateSwaptionAllOf.InstrumentTypeEnum,
        "IrVolCubeData.MarketDataTypeEnum": IrVolCubeData.MarketDataTypeEnum,
        "IrVolCubeDataAllOf.MarketDataTypeEnum": IrVolCubeDataAllOf.MarketDataTypeEnum,
        "LusidInstrument.InstrumentTypeEnum": LusidInstrument.InstrumentTypeEnum,
        "MarketDataKeyRule.QuoteTypeEnum": MarketDataKeyRule.QuoteTypeEnum,
        "MarketDataType": MarketDataType,
        "MarketIdentifier": MarketIdentifier,
        "MarketQuote.QuoteTypeEnum": MarketQuote.QuoteTypeEnum,
        "ModelOptions.ModelOptionsTypeEnum": ModelOptions.ModelOptionsTypeEnum,
        "ModelOptionsType": ModelOptionsType,
        "ModelSelection.LibraryEnum": ModelSelection.LibraryEnum,
        "ModelSelection.ModelEnum": ModelSelection.ModelEnum,
        "MovementType": MovementType,
        "Multiplier": Multiplier,
        "OpaqueMarketData.MarketDataTypeEnum": OpaqueMarketData.MarketDataTypeEnum,
        "OpaqueMarketDataAllOf.MarketDataTypeEnum": OpaqueMarketDataAllOf.MarketDataTypeEnum,
        "OpaqueModelOptions.ModelOptionsTypeEnum": OpaqueModelOptions.ModelOptionsTypeEnum,
        "OpaqueModelOptionsAllOf.ModelOptionsTypeEnum": OpaqueModelOptionsAllOf.ModelOptionsTypeEnum,
        "OperandType": OperandType,
        "Operator": Operator,
        "OptionType": OptionType,
        "OrderBySpec.SortOrderEnum": OrderBySpec.SortOrderEnum,
        "OutputTransaction.TransactionStatusEnum": OutputTransaction.TransactionStatusEnum,
        "PeriodType": PeriodType,
        "PerpetualEntityState": PerpetualEntityState,
        "Portfolio.TypeEnum": Portfolio.TypeEnum,
        "PortfolioSearchResult.TypeEnum": PortfolioSearchResult.TypeEnum,
        "PortfolioType": PortfolioType,
        "PricingModel": PricingModel,
        "PropertyDefinition.ValueTypeEnum": PropertyDefinition.ValueTypeEnum,
        "PropertyDefinition.TypeEnum": PropertyDefinition.TypeEnum,
        "PropertyDefinition.UnitSchemaEnum": PropertyDefinition.UnitSchemaEnum,
        "PropertyDefinition.DomainEnum": PropertyDefinition.DomainEnum,
        "PropertyDefinition.LifeTimeEnum": PropertyDefinition.LifeTimeEnum,
        "PropertyDefinition.PropertyDefinitionTypeEnum": PropertyDefinition.PropertyDefinitionTypeEnum,
        "PropertyDefinitionSearchResult.ValueTypeEnum": PropertyDefinitionSearchResult.ValueTypeEnum,
        "PropertyDefinitionSearchResult.TypeEnum": PropertyDefinitionSearchResult.TypeEnum,
        "PropertyDefinitionSearchResult.UnitSchemaEnum": PropertyDefinitionSearchResult.UnitSchemaEnum,
        "PropertyDefinitionSearchResult.DomainEnum": PropertyDefinitionSearchResult.DomainEnum,
        "PropertyDefinitionSearchResult.LifeTimeEnum": PropertyDefinitionSearchResult.LifeTimeEnum,
        "PropertyDefinitionSearchResult.PropertyDefinitionTypeEnum": PropertyDefinitionSearchResult.PropertyDefinitionTypeEnum,
        "PropertyDefinitionType": PropertyDefinitionType,
        "PropertyDomain": PropertyDomain,
        "PropertyFilter.OperatorEnum": PropertyFilter.OperatorEnum,
        "PropertyFilter.RightOperandTypeEnum": PropertyFilter.RightOperandTypeEnum,
        "PropertyLifeTime": PropertyLifeTime,
        "PropertyType": PropertyType,
        "QuoteInstrumentIdType": QuoteInstrumentIdType,
        "QuoteSeriesId.InstrumentIdTypeEnum": QuoteSeriesId.InstrumentIdTypeEnum,
        "QuoteSeriesId.QuoteTypeEnum": QuoteSeriesId.QuoteTypeEnum,
        "QuoteType": QuoteType,
        "ReferencePortfolioWeightType": ReferencePortfolioWeightType,
        "Repo.InstrumentTypeEnum": Repo.InstrumentTypeEnum,
        "RepoAllOf.InstrumentTypeEnum": RepoAllOf.InstrumentTypeEnum,
        "SimpleInstrument.AssetClassEnum": SimpleInstrument.AssetClassEnum,
        "SimpleInstrument.InstrumentTypeEnum": SimpleInstrument.InstrumentTypeEnum,
        "SimpleInstrumentAllOf.AssetClassEnum": SimpleInstrumentAllOf.AssetClassEnum,
        "SimpleInstrumentAllOf.InstrumentTypeEnum": SimpleInstrumentAllOf.InstrumentTypeEnum,
        "SortOrder": SortOrder,
        "TermDeposit.InstrumentTypeEnum": TermDeposit.InstrumentTypeEnum,
        "TermDepositAllOf.InstrumentTypeEnum": TermDepositAllOf.InstrumentTypeEnum,
        "Tolerance.TypeEnum": Tolerance.TypeEnum,
        "ToleranceEnum": ToleranceEnum,
        "TransactionConfigurationMovementData.MovementTypesEnum": TransactionConfigurationMovementData.MovementTypesEnum,
        "TransactionConfigurationMovementDataRequest.MovementTypesEnum": TransactionConfigurationMovementDataRequest.MovementTypesEnum,
        "TransactionConfigurationTypeAlias.TransactionRolesEnum": TransactionConfigurationTypeAlias.TransactionRolesEnum,
        "TransactionPrice.TypeEnum": TransactionPrice.TypeEnum,
        "TransactionPriceType": TransactionPriceType,
        "TransactionQueryMode": TransactionQueryMode,
        "TransactionQueryParameters.QueryModeEnum": TransactionQueryParameters.QueryModeEnum,
        "TransactionRoles": TransactionRoles,
        "TransactionStatus": TransactionStatus,
        "UnitSchema": UnitSchema,
        "UnmatchedHoldingMethod": UnmatchedHoldingMethod,
        "UpsertReferencePortfolioConstituentsRequest.WeightTypeEnum": UpsertReferencePortfolioConstituentsRequest.WeightTypeEnum,
        "UpsertReferencePortfolioConstituentsRequest.PeriodTypeEnum": UpsertReferencePortfolioConstituentsRequest.PeriodTypeEnum,
        "ValueType": ValueType,
        "VendorLibrary": VendorLibrary,
        "VendorModelRule.SupplierEnum": VendorModelRule.SupplierEnum,
        "YieldCurveData.MarketDataTypeEnum": YieldCurveData.MarketDataTypeEnum,
        "YieldCurveDataAllOf.MarketDataTypeEnum": YieldCurveDataAllOf.MarketDataTypeEnum,
}

let typeMap: {[index: string]: any} = {
    "A2BBreakdown": A2BBreakdown,
    "A2BCategory": A2BCategory,
    "A2BDataRecord": A2BDataRecord,
    "A2BMovementRecord": A2BMovementRecord,
    "AccessControlledAction": AccessControlledAction,
    "AccessControlledResource": AccessControlledResource,
    "AccessMetadataValue": AccessMetadataValue,
    "ActionId": ActionId,
    "AddBusinessDaysToDateRequest": AddBusinessDaysToDateRequest,
    "AddBusinessDaysToDateResponse": AddBusinessDaysToDateResponse,
    "AdjustHolding": AdjustHolding,
    "AdjustHoldingRequest": AdjustHoldingRequest,
    "AggregateSpec": AggregateSpec,
    "AggregatedReturn": AggregatedReturn,
    "AggregatedReturnsRequest": AggregatedReturnsRequest,
    "AggregationContext": AggregationContext,
    "AggregationMeasureFailureDetail": AggregationMeasureFailureDetail,
    "AggregationOptions": AggregationOptions,
    "AggregationQuery": AggregationQuery,
    "Allocation": Allocation,
    "AllocationRequest": AllocationRequest,
    "AllocationSetRequest": AllocationSetRequest,
    "AnnulQuotesResponse": AnnulQuotesResponse,
    "AnnulSingleStructuredDataResponse": AnnulSingleStructuredDataResponse,
    "AnnulStructuredDataResponse": AnnulStructuredDataResponse,
    "Basket": Basket,
    "BasketAllOf": BasketAllOf,
    "BasketIdentifier": BasketIdentifier,
    "Block": Block,
    "BlockRequest": BlockRequest,
    "BlockSetRequest": BlockSetRequest,
    "Bond": Bond,
    "BondAllOf": BondAllOf,
    "BucketedCashFlowRequest": BucketedCashFlowRequest,
    "BucketedCashFlowResponse": BucketedCashFlowResponse,
    "CalculationInfo": CalculationInfo,
    "Calendar": Calendar,
    "CalendarDate": CalendarDate,
    "CapFloor": CapFloor,
    "CapFloorAllOf": CapFloorAllOf,
    "CashLadderRecord": CashLadderRecord,
    "CashPerpetual": CashPerpetual,
    "CashPerpetualAllOf": CashPerpetualAllOf,
    "CdsFlowConventions": CdsFlowConventions,
    "CdsIndex": CdsIndex,
    "CdsIndexAllOf": CdsIndexAllOf,
    "CdsProtectionDetailSpecification": CdsProtectionDetailSpecification,
    "Change": Change,
    "CompletePortfolio": CompletePortfolio,
    "CompleteRelation": CompleteRelation,
    "CompleteRelationship": CompleteRelationship,
    "ComplexMarketData": ComplexMarketData,
    "ComplexMarketDataId": ComplexMarketDataId,
    "ConfigurationRecipe": ConfigurationRecipe,
    "ConfigurationRecipeSnippet": ConfigurationRecipeSnippet,
    "ConstituentsAdjustmentHeader": ConstituentsAdjustmentHeader,
    "ContractForDifference": ContractForDifference,
    "ContractForDifferenceAllOf": ContractForDifferenceAllOf,
    "CorporateAction": CorporateAction,
    "CorporateActionSource": CorporateActionSource,
    "CorporateActionTransition": CorporateActionTransition,
    "CorporateActionTransitionComponent": CorporateActionTransitionComponent,
    "CorporateActionTransitionComponentRequest": CorporateActionTransitionComponentRequest,
    "CorporateActionTransitionRequest": CorporateActionTransitionRequest,
    "CounterpartyAgreement": CounterpartyAgreement,
    "CounterpartyRiskInformation": CounterpartyRiskInformation,
    "CounterpartySignatory": CounterpartySignatory,
    "CreateCalendarRequest": CreateCalendarRequest,
    "CreateCorporateActionSourceRequest": CreateCorporateActionSourceRequest,
    "CreateCutLabelDefinitionRequest": CreateCutLabelDefinitionRequest,
    "CreateDataMapRequest": CreateDataMapRequest,
    "CreateDataTypeRequest": CreateDataTypeRequest,
    "CreateDateRequest": CreateDateRequest,
    "CreateDerivedPropertyDefinitionRequest": CreateDerivedPropertyDefinitionRequest,
    "CreateDerivedTransactionPortfolioRequest": CreateDerivedTransactionPortfolioRequest,
    "CreatePortfolioDetails": CreatePortfolioDetails,
    "CreatePortfolioGroupRequest": CreatePortfolioGroupRequest,
    "CreatePropertyDefinitionRequest": CreatePropertyDefinitionRequest,
    "CreateRecipeRequest": CreateRecipeRequest,
    "CreateReferencePortfolioRequest": CreateReferencePortfolioRequest,
    "CreateRelationDefinitionRequest": CreateRelationDefinitionRequest,
    "CreateRelationRequest": CreateRelationRequest,
    "CreateRelationshipDefinitionRequest": CreateRelationshipDefinitionRequest,
    "CreateRelationshipRequest": CreateRelationshipRequest,
    "CreateSequenceRequest": CreateSequenceRequest,
    "CreateTransactionPortfolioRequest": CreateTransactionPortfolioRequest,
    "CreateUnitDefinition": CreateUnitDefinition,
    "CreditDefaultSwap": CreditDefaultSwap,
    "CreditDefaultSwapAllOf": CreditDefaultSwapAllOf,
    "CreditRating": CreditRating,
    "CreditSupportAnnex": CreditSupportAnnex,
    "CrossCurrencySwap": CrossCurrencySwap,
    "CrossCurrencySwapAllOf": CrossCurrencySwapAllOf,
    "CurrencyAndAmount": CurrencyAndAmount,
    "CustomEntityDefinition": CustomEntityDefinition,
    "CustomEntityDefinitionRequest": CustomEntityDefinitionRequest,
    "CustomEntityField": CustomEntityField,
    "CustomEntityFieldDefinition": CustomEntityFieldDefinition,
    "CustomEntityIdRequest": CustomEntityIdRequest,
    "CustomEntityIdResponse": CustomEntityIdResponse,
    "CustomEntityRequest": CustomEntityRequest,
    "CustomEntityResponse": CustomEntityResponse,
    "CutLabelDefinition": CutLabelDefinition,
    "CutLocalTime": CutLocalTime,
    "DataDefinition": DataDefinition,
    "DataMapKey": DataMapKey,
    "DataMapping": DataMapping,
    "DataType": DataType,
    "DateAttributes": DateAttributes,
    "DateRange": DateRange,
    "DeleteInstrumentPropertiesResponse": DeleteInstrumentPropertiesResponse,
    "DeleteInstrumentResponse": DeleteInstrumentResponse,
    "DeleteRelationRequest": DeleteRelationRequest,
    "DeleteRelationshipRequest": DeleteRelationshipRequest,
    "DeletedEntityResponse": DeletedEntityResponse,
    "DiscountFactorCurveData": DiscountFactorCurveData,
    "DiscountFactorCurveDataAllOf": DiscountFactorCurveDataAllOf,
    "EmptyModelOptions": EmptyModelOptions,
    "EmptyModelOptionsAllOf": EmptyModelOptionsAllOf,
    "Equity": Equity,
    "EquityAllOf": EquityAllOf,
    "EquityAllOfIdentifiers": EquityAllOfIdentifiers,
    "EquityOption": EquityOption,
    "EquityOptionAllOf": EquityOptionAllOf,
    "EquitySwap": EquitySwap,
    "EquitySwapAllOf": EquitySwapAllOf,
    "EquityVolSurfaceData": EquityVolSurfaceData,
    "EquityVolSurfaceDataAllOf": EquityVolSurfaceDataAllOf,
    "ErrorDetail": ErrorDetail,
    "ExchangeTradedOption": ExchangeTradedOption,
    "ExchangeTradedOptionAllOf": ExchangeTradedOptionAllOf,
    "ExchangeTradedOptionContractDetails": ExchangeTradedOptionContractDetails,
    "Execution": Execution,
    "ExecutionRequest": ExecutionRequest,
    "ExecutionSetRequest": ExecutionSetRequest,
    "ExoticInstrument": ExoticInstrument,
    "ExoticInstrumentAllOf": ExoticInstrumentAllOf,
    "ExpandedGroup": ExpandedGroup,
    "FeeCalculationDetails": FeeCalculationDetails,
    "FieldSchema": FieldSchema,
    "FileResponse": FileResponse,
    "FixedLeg": FixedLeg,
    "FixedLegAllOf": FixedLegAllOf,
    "FixedLegAllOfOverrides": FixedLegAllOfOverrides,
    "FloatingLeg": FloatingLeg,
    "FloatingLegAllOf": FloatingLegAllOf,
    "FlowConventionName": FlowConventionName,
    "FlowConventions": FlowConventions,
    "ForwardRateAgreement": ForwardRateAgreement,
    "ForwardRateAgreementAllOf": ForwardRateAgreementAllOf,
    "FundingLeg": FundingLeg,
    "FundingLegAllOf": FundingLegAllOf,
    "Future": Future,
    "FutureAllOf": FutureAllOf,
    "FuturesContractDetails": FuturesContractDetails,
    "FxForward": FxForward,
    "FxForwardAllOf": FxForwardAllOf,
    "FxForwardCurveByQuoteReference": FxForwardCurveByQuoteReference,
    "FxForwardCurveByQuoteReferenceAllOf": FxForwardCurveByQuoteReferenceAllOf,
    "FxForwardCurveData": FxForwardCurveData,
    "FxForwardCurveDataAllOf": FxForwardCurveDataAllOf,
    "FxForwardPipsCurveData": FxForwardPipsCurveData,
    "FxForwardPipsCurveDataAllOf": FxForwardPipsCurveDataAllOf,
    "FxForwardTenorCurveData": FxForwardTenorCurveData,
    "FxForwardTenorCurveDataAllOf": FxForwardTenorCurveDataAllOf,
    "FxForwardTenorPipsCurveData": FxForwardTenorPipsCurveData,
    "FxForwardTenorPipsCurveDataAllOf": FxForwardTenorPipsCurveDataAllOf,
    "FxOption": FxOption,
    "FxOptionAllOf": FxOptionAllOf,
    "FxSwap": FxSwap,
    "FxSwapAllOf": FxSwapAllOf,
    "FxVolSurfaceData": FxVolSurfaceData,
    "GetCdsFlowConventionsResponse": GetCdsFlowConventionsResponse,
    "GetComplexMarketDataResponse": GetComplexMarketDataResponse,
    "GetCounterpartyAgreementResponse": GetCounterpartyAgreementResponse,
    "GetCreditSupportAnnexResponse": GetCreditSupportAnnexResponse,
    "GetDataMapResponse": GetDataMapResponse,
    "GetFlowConventionsResponse": GetFlowConventionsResponse,
    "GetIndexConventionResponse": GetIndexConventionResponse,
    "GetInstrumentsResponse": GetInstrumentsResponse,
    "GetQuotesResponse": GetQuotesResponse,
    "GetRecipeResponse": GetRecipeResponse,
    "GetReferencePortfolioConstituentsResponse": GetReferencePortfolioConstituentsResponse,
    "GetStructuredMarketDataResponse": GetStructuredMarketDataResponse,
    "GetStructuredResultDataResponse": GetStructuredResultDataResponse,
    "HoldingAdjustment": HoldingAdjustment,
    "HoldingContext": HoldingContext,
    "HoldingsAdjustment": HoldingsAdjustment,
    "HoldingsAdjustmentHeader": HoldingsAdjustmentHeader,
    "IUnitDefinitionDto": IUnitDefinitionDto,
    "IdSelectorDefinition": IdSelectorDefinition,
    "IdentifierPartSchema": IdentifierPartSchema,
    "IndexConvention": IndexConvention,
    "IndustryClassifier": IndustryClassifier,
    "InlineValuationRequest": InlineValuationRequest,
    "InlineValuationsReconciliationRequest": InlineValuationsReconciliationRequest,
    "Instrument": Instrument,
    "InstrumentCashFlow": InstrumentCashFlow,
    "InstrumentDefinition": InstrumentDefinition,
    "InstrumentDefinitionFormat": InstrumentDefinitionFormat,
    "InstrumentIdTypeDescriptor": InstrumentIdTypeDescriptor,
    "InstrumentIdValue": InstrumentIdValue,
    "InstrumentLeg": InstrumentLeg,
    "InstrumentLegAllOf": InstrumentLegAllOf,
    "InstrumentMatch": InstrumentMatch,
    "InstrumentProperties": InstrumentProperties,
    "InstrumentSearchProperty": InstrumentSearchProperty,
    "InterestRateSwap": InterestRateSwap,
    "InterestRateSwapAllOf": InterestRateSwapAllOf,
    "InterestRateSwaption": InterestRateSwaption,
    "InterestRateSwaptionAllOf": InterestRateSwaptionAllOf,
    "IrVolCubeData": IrVolCubeData,
    "IrVolCubeDataAllOf": IrVolCubeDataAllOf,
    "IsBusinessDayResponse": IsBusinessDayResponse,
    "LabelValueSet": LabelValueSet,
    "LegDefinition": LegDefinition,
    "LegalEntity": LegalEntity,
    "Link": Link,
    "ListAggregationReconciliation": ListAggregationReconciliation,
    "ListAggregationResponse": ListAggregationResponse,
    "LusidInstrument": LusidInstrument,
    "LusidProblemDetails": LusidProblemDetails,
    "LusidValidationProblemDetails": LusidValidationProblemDetails,
    "MarketContext": MarketContext,
    "MarketContextSuppliers": MarketContextSuppliers,
    "MarketDataKeyRule": MarketDataKeyRule,
    "MarketOptions": MarketOptions,
    "MarketQuote": MarketQuote,
    "MetricValue": MetricValue,
    "ModelOptions": ModelOptions,
    "ModelSelection": ModelSelection,
    "NextValueInSequenceResponse": NextValueInSequenceResponse,
    "OpaqueMarketData": OpaqueMarketData,
    "OpaqueMarketDataAllOf": OpaqueMarketDataAllOf,
    "OpaqueModelOptions": OpaqueModelOptions,
    "OpaqueModelOptionsAllOf": OpaqueModelOptionsAllOf,
    "Order": Order,
    "OrderBySpec": OrderBySpec,
    "OrderGraphBlock": OrderGraphBlock,
    "OrderGraphSynopsis": OrderGraphSynopsis,
    "OrderInstruction": OrderInstruction,
    "OrderInstructionRequest": OrderInstructionRequest,
    "OrderInstructionSetRequest": OrderInstructionSetRequest,
    "OrderRequest": OrderRequest,
    "OrderSetRequest": OrderSetRequest,
    "OutputTransaction": OutputTransaction,
    "Package": Package,
    "PackageRequest": PackageRequest,
    "PackageSetRequest": PackageSetRequest,
    "PagedResourceListOfAllocation": PagedResourceListOfAllocation,
    "PagedResourceListOfBlock": PagedResourceListOfBlock,
    "PagedResourceListOfCalendar": PagedResourceListOfCalendar,
    "PagedResourceListOfCorporateActionSource": PagedResourceListOfCorporateActionSource,
    "PagedResourceListOfCustomEntityResponse": PagedResourceListOfCustomEntityResponse,
    "PagedResourceListOfCutLabelDefinition": PagedResourceListOfCutLabelDefinition,
    "PagedResourceListOfExecution": PagedResourceListOfExecution,
    "PagedResourceListOfInstrument": PagedResourceListOfInstrument,
    "PagedResourceListOfLegalEntity": PagedResourceListOfLegalEntity,
    "PagedResourceListOfOrder": PagedResourceListOfOrder,
    "PagedResourceListOfOrderGraphBlock": PagedResourceListOfOrderGraphBlock,
    "PagedResourceListOfOrderInstruction": PagedResourceListOfOrderInstruction,
    "PagedResourceListOfPackage": PagedResourceListOfPackage,
    "PagedResourceListOfParticipation": PagedResourceListOfParticipation,
    "PagedResourceListOfPerson": PagedResourceListOfPerson,
    "PagedResourceListOfPlacement": PagedResourceListOfPlacement,
    "PagedResourceListOfPortfolioGroupSearchResult": PagedResourceListOfPortfolioGroupSearchResult,
    "PagedResourceListOfPortfolioSearchResult": PagedResourceListOfPortfolioSearchResult,
    "PagedResourceListOfPropertyDefinitionSearchResult": PagedResourceListOfPropertyDefinitionSearchResult,
    "Participation": Participation,
    "ParticipationRequest": ParticipationRequest,
    "ParticipationSetRequest": ParticipationSetRequest,
    "PerformanceReturn": PerformanceReturn,
    "PerformanceReturnsMetric": PerformanceReturnsMetric,
    "PerpetualProperty": PerpetualProperty,
    "Person": Person,
    "Placement": Placement,
    "PlacementRequest": PlacementRequest,
    "PlacementSetRequest": PlacementSetRequest,
    "Portfolio": Portfolio,
    "PortfolioCashFlow": PortfolioCashFlow,
    "PortfolioCashLadder": PortfolioCashLadder,
    "PortfolioDetails": PortfolioDetails,
    "PortfolioEntityId": PortfolioEntityId,
    "PortfolioGroup": PortfolioGroup,
    "PortfolioGroupProperties": PortfolioGroupProperties,
    "PortfolioGroupSearchResult": PortfolioGroupSearchResult,
    "PortfolioHolding": PortfolioHolding,
    "PortfolioProperties": PortfolioProperties,
    "PortfolioReconciliationRequest": PortfolioReconciliationRequest,
    "PortfolioSearchResult": PortfolioSearchResult,
    "PortfoliosReconciliationRequest": PortfoliosReconciliationRequest,
    "PortfoliosReconciliationRequestPreview": PortfoliosReconciliationRequestPreview,
    "Premium": Premium,
    "PricingContext": PricingContext,
    "PricingOptions": PricingOptions,
    "ProcessedCommand": ProcessedCommand,
    "Property": Property,
    "PropertyDefinition": PropertyDefinition,
    "PropertyDefinitionSearchResult": PropertyDefinitionSearchResult,
    "PropertyFilter": PropertyFilter,
    "PropertyInterval": PropertyInterval,
    "PropertySchema": PropertySchema,
    "PropertyValue": PropertyValue,
    "Quote": Quote,
    "QuoteAccessMetadataRule": QuoteAccessMetadataRule,
    "QuoteAccessMetadataRuleId": QuoteAccessMetadataRuleId,
    "QuoteId": QuoteId,
    "QuoteSeriesId": QuoteSeriesId,
    "RealisedGainLoss": RealisedGainLoss,
    "ReconciliationBreak": ReconciliationBreak,
    "ReconciliationLeftRightAddressKeyPair": ReconciliationLeftRightAddressKeyPair,
    "ReferencePortfolioConstituent": ReferencePortfolioConstituent,
    "ReferencePortfolioConstituentRequest": ReferencePortfolioConstituentRequest,
    "RelatedEntity": RelatedEntity,
    "Relation": Relation,
    "RelationDefinition": RelationDefinition,
    "Relationship": Relationship,
    "RelationshipDefinition": RelationshipDefinition,
    "Repo": Repo,
    "RepoAllOf": RepoAllOf,
    "ResourceId": ResourceId,
    "ResourceListOfA2BDataRecord": ResourceListOfA2BDataRecord,
    "ResourceListOfA2BMovementRecord": ResourceListOfA2BMovementRecord,
    "ResourceListOfAccessControlledResource": ResourceListOfAccessControlledResource,
    "ResourceListOfAccessMetadataValueOf": ResourceListOfAccessMetadataValueOf,
    "ResourceListOfAggregatedReturn": ResourceListOfAggregatedReturn,
    "ResourceListOfAggregationQuery": ResourceListOfAggregationQuery,
    "ResourceListOfAllocation": ResourceListOfAllocation,
    "ResourceListOfBlock": ResourceListOfBlock,
    "ResourceListOfCalendarDate": ResourceListOfCalendarDate,
    "ResourceListOfChange": ResourceListOfChange,
    "ResourceListOfConstituentsAdjustmentHeader": ResourceListOfConstituentsAdjustmentHeader,
    "ResourceListOfCorporateAction": ResourceListOfCorporateAction,
    "ResourceListOfDataType": ResourceListOfDataType,
    "ResourceListOfExecution": ResourceListOfExecution,
    "ResourceListOfFeeCalculationDetails": ResourceListOfFeeCalculationDetails,
    "ResourceListOfGetCdsFlowConventionsResponse": ResourceListOfGetCdsFlowConventionsResponse,
    "ResourceListOfGetCounterpartyAgreementResponse": ResourceListOfGetCounterpartyAgreementResponse,
    "ResourceListOfGetCreditSupportAnnexResponse": ResourceListOfGetCreditSupportAnnexResponse,
    "ResourceListOfGetFlowConventionsResponse": ResourceListOfGetFlowConventionsResponse,
    "ResourceListOfGetIndexConventionResponse": ResourceListOfGetIndexConventionResponse,
    "ResourceListOfGetRecipeResponse": ResourceListOfGetRecipeResponse,
    "ResourceListOfHoldingsAdjustmentHeader": ResourceListOfHoldingsAdjustmentHeader,
    "ResourceListOfIUnitDefinitionDto": ResourceListOfIUnitDefinitionDto,
    "ResourceListOfInstrumentCashFlow": ResourceListOfInstrumentCashFlow,
    "ResourceListOfInstrumentIdTypeDescriptor": ResourceListOfInstrumentIdTypeDescriptor,
    "ResourceListOfOrder": ResourceListOfOrder,
    "ResourceListOfOrderInstruction": ResourceListOfOrderInstruction,
    "ResourceListOfPackage": ResourceListOfPackage,
    "ResourceListOfParticipation": ResourceListOfParticipation,
    "ResourceListOfPerformanceReturn": ResourceListOfPerformanceReturn,
    "ResourceListOfPlacement": ResourceListOfPlacement,
    "ResourceListOfPortfolio": ResourceListOfPortfolio,
    "ResourceListOfPortfolioCashFlow": ResourceListOfPortfolioCashFlow,
    "ResourceListOfPortfolioCashLadder": ResourceListOfPortfolioCashLadder,
    "ResourceListOfPortfolioGroup": ResourceListOfPortfolioGroup,
    "ResourceListOfProcessedCommand": ResourceListOfProcessedCommand,
    "ResourceListOfProperty": ResourceListOfProperty,
    "ResourceListOfPropertyDefinition": ResourceListOfPropertyDefinition,
    "ResourceListOfPropertyInterval": ResourceListOfPropertyInterval,
    "ResourceListOfQuote": ResourceListOfQuote,
    "ResourceListOfQuoteAccessMetadataRule": ResourceListOfQuoteAccessMetadataRule,
    "ResourceListOfReconciliationBreak": ResourceListOfReconciliationBreak,
    "ResourceListOfRelation": ResourceListOfRelation,
    "ResourceListOfRelationship": ResourceListOfRelationship,
    "ResourceListOfScopeDefinition": ResourceListOfScopeDefinition,
    "ResourceListOfString": ResourceListOfString,
    "ResourceListOfTransaction": ResourceListOfTransaction,
    "ResourceListOfValueType": ResourceListOfValueType,
    "ResultDataKeyRule": ResultDataKeyRule,
    "ResultDataSchema": ResultDataSchema,
    "Schema": Schema,
    "ScopeDefinition": ScopeDefinition,
    "SequenceDefinition": SequenceDefinition,
    "SetPersonIdentifiersRequest": SetPersonIdentifiersRequest,
    "SetPersonPropertiesRequest": SetPersonPropertiesRequest,
    "SideConfigurationData": SideConfigurationData,
    "SideConfigurationDataRequest": SideConfigurationDataRequest,
    "SimpleInstrument": SimpleInstrument,
    "SimpleInstrumentAllOf": SimpleInstrumentAllOf,
    "Stream": Stream,
    "StructuredMarketData": StructuredMarketData,
    "StructuredMarketDataId": StructuredMarketDataId,
    "StructuredResultData": StructuredResultData,
    "StructuredResultDataId": StructuredResultDataId,
    "TargetTaxLot": TargetTaxLot,
    "TargetTaxLotRequest": TargetTaxLotRequest,
    "TermDeposit": TermDeposit,
    "TermDepositAllOf": TermDepositAllOf,
    "Tolerance": Tolerance,
    "Transaction": Transaction,
    "TransactionConfigurationData": TransactionConfigurationData,
    "TransactionConfigurationDataRequest": TransactionConfigurationDataRequest,
    "TransactionConfigurationMovementData": TransactionConfigurationMovementData,
    "TransactionConfigurationMovementDataRequest": TransactionConfigurationMovementDataRequest,
    "TransactionConfigurationTypeAlias": TransactionConfigurationTypeAlias,
    "TransactionPrice": TransactionPrice,
    "TransactionPropertyMapping": TransactionPropertyMapping,
    "TransactionPropertyMappingRequest": TransactionPropertyMappingRequest,
    "TransactionQueryParameters": TransactionQueryParameters,
    "TransactionRequest": TransactionRequest,
    "TransactionSetConfigurationData": TransactionSetConfigurationData,
    "TransactionSetConfigurationDataRequest": TransactionSetConfigurationDataRequest,
    "TranslateInstrumentDefinitionsRequest": TranslateInstrumentDefinitionsRequest,
    "TranslateInstrumentDefinitionsResponse": TranslateInstrumentDefinitionsResponse,
    "TypedResourceId": TypedResourceId,
    "UpdateCalendarRequest": UpdateCalendarRequest,
    "UpdateCutLabelDefinitionRequest": UpdateCutLabelDefinitionRequest,
    "UpdateDataTypeRequest": UpdateDataTypeRequest,
    "UpdateInstrumentIdentifierRequest": UpdateInstrumentIdentifierRequest,
    "UpdatePortfolioGroupRequest": UpdatePortfolioGroupRequest,
    "UpdatePortfolioRequest": UpdatePortfolioRequest,
    "UpdatePropertyDefinitionRequest": UpdatePropertyDefinitionRequest,
    "UpdateRelationshipDefinitionRequest": UpdateRelationshipDefinitionRequest,
    "UpdateUnitRequest": UpdateUnitRequest,
    "UpsertCdsFlowConventionsRequest": UpsertCdsFlowConventionsRequest,
    "UpsertComplexMarketDataRequest": UpsertComplexMarketDataRequest,
    "UpsertCorporateActionRequest": UpsertCorporateActionRequest,
    "UpsertCorporateActionsResponse": UpsertCorporateActionsResponse,
    "UpsertCounterpartyAgreementRequest": UpsertCounterpartyAgreementRequest,
    "UpsertCreditSupportAnnexRequest": UpsertCreditSupportAnnexRequest,
    "UpsertFlowConventionsRequest": UpsertFlowConventionsRequest,
    "UpsertIndexConventionRequest": UpsertIndexConventionRequest,
    "UpsertInstrumentPropertiesResponse": UpsertInstrumentPropertiesResponse,
    "UpsertInstrumentPropertyRequest": UpsertInstrumentPropertyRequest,
    "UpsertInstrumentsResponse": UpsertInstrumentsResponse,
    "UpsertLegalEntityAccessMetadataRequest": UpsertLegalEntityAccessMetadataRequest,
    "UpsertLegalEntityRequest": UpsertLegalEntityRequest,
    "UpsertPersonAccessMetadataRequest": UpsertPersonAccessMetadataRequest,
    "UpsertPersonRequest": UpsertPersonRequest,
    "UpsertPortfolioAccessMetadataRequest": UpsertPortfolioAccessMetadataRequest,
    "UpsertPortfolioGroupAccessMetadataRequest": UpsertPortfolioGroupAccessMetadataRequest,
    "UpsertPortfolioTransactionsResponse": UpsertPortfolioTransactionsResponse,
    "UpsertQuoteAccessMetadataRuleRequest": UpsertQuoteAccessMetadataRuleRequest,
    "UpsertQuoteRequest": UpsertQuoteRequest,
    "UpsertQuotesResponse": UpsertQuotesResponse,
    "UpsertRecipeRequest": UpsertRecipeRequest,
    "UpsertReferencePortfolioConstituentsRequest": UpsertReferencePortfolioConstituentsRequest,
    "UpsertReferencePortfolioConstituentsResponse": UpsertReferencePortfolioConstituentsResponse,
    "UpsertReturnsResponse": UpsertReturnsResponse,
    "UpsertSingleStructuredDataResponse": UpsertSingleStructuredDataResponse,
    "UpsertStructuredDataResponse": UpsertStructuredDataResponse,
    "UpsertStructuredMarketDataRequest": UpsertStructuredMarketDataRequest,
    "UpsertStructuredResultDataRequest": UpsertStructuredResultDataRequest,
    "UpsertTransactionPropertiesResponse": UpsertTransactionPropertiesResponse,
    "User": User,
    "ValuationRequest": ValuationRequest,
    "ValuationSchedule": ValuationSchedule,
    "ValuationsReconciliationRequest": ValuationsReconciliationRequest,
    "VendorModelRule": VendorModelRule,
    "Version": Version,
    "VersionSummaryDto": VersionSummaryDto,
    "VersionedResourceListOfOutputTransaction": VersionedResourceListOfOutputTransaction,
    "VersionedResourceListOfPortfolioHolding": VersionedResourceListOfPortfolioHolding,
    "VersionedResourceListOfTransaction": VersionedResourceListOfTransaction,
    "VersionedResourceListWithWarningsOfPortfolioHolding": VersionedResourceListWithWarningsOfPortfolioHolding,
    "Warning": Warning,
    "WeekendMask": WeekendMask,
    "WeightedInstrument": WeightedInstrument,
    "WeightedInstruments": WeightedInstruments,
    "YieldCurveData": YieldCurveData,
    "YieldCurveDataAllOf": YieldCurveDataAllOf,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
