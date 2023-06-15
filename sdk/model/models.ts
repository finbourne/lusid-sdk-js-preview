import localVarRequest from 'request';

export * from './a2BBreakdown';
export * from './a2BCategory';
export * from './a2BDataRecord';
export * from './a2BMovementRecord';
export * from './abor';
export * from './aborConfiguration';
export * from './aborConfigurationProperties';
export * from './aborConfigurationRequest';
export * from './aborProperties';
export * from './aborRequest';
export * from './accessControlledAction';
export * from './accessControlledResource';
export * from './accessMetadataOperation';
export * from './accessMetadataValue';
export * from './account';
export * from './accountProperties';
export * from './accountingMethod';
export * from './accountsUpsertResponse';
export * from './actionId';
export * from './actionResultOfPortfolio';
export * from './addBusinessDaysToDateRequest';
export * from './addBusinessDaysToDateResponse';
export * from './addressDefinition';
export * from './addressKeyDefinition';
export * from './addressKeyFilter';
export * from './addressKeyList';
export * from './addressKeyOptionDefinition';
export * from './adjustHolding';
export * from './adjustHoldingForDateRequest';
export * from './adjustHoldingRequest';
export * from './aggregateSpec';
export * from './aggregatedReturn';
export * from './aggregatedReturnsDispersionRequest';
export * from './aggregatedReturnsRequest';
export * from './aggregatedReturnsResponse';
export * from './aggregationContext';
export * from './aggregationMeasureFailureDetail';
export * from './aggregationOp';
export * from './aggregationOptions';
export * from './aggregationQuery';
export * from './aggregationType';
export * from './allocation';
export * from './allocationRequest';
export * from './allocationServiceRunResult';
export * from './allocationSetRequest';
export * from './amortisationEvent';
export * from './amortisationEventAllOf';
export * from './annulQuotesResponse';
export * from './annulSingleStructuredDataResponse';
export * from './annulStructuredDataResponse';
export * from './assetClass';
export * from './barrier';
export * from './basket';
export * from './basketAllOf';
export * from './basketIdentifier';
export * from './batchAdjustHoldingsResponse';
export * from './batchUpsertPortfolioTransactionsResponse';
export * from './batchUpsertPropertyDefinitionPropertiesResponse';
export * from './block';
export * from './blockRequest';
export * from './blockSetRequest';
export * from './bond';
export * from './bondAllOf';
export * from './bondDefaultEvent';
export * from './bondDefaultEventAllOf';
export * from './bucketedCashFlowRequest';
export * from './bucketedCashFlowResponse';
export * from './calculationInfo';
export * from './calendar';
export * from './calendarDate';
export * from './capFloor';
export * from './capFloorAllOf';
export * from './cashDependency';
export * from './cashDependencyAllOf';
export * from './cashDividendEvent';
export * from './cashDividendEventAllOf';
export * from './cashFlowEvent';
export * from './cashFlowEventAllOf';
export * from './cashFlowLineage';
export * from './cashFlowValue';
export * from './cashFlowValueAllOf';
export * from './cashFlowValueSet';
export * from './cashFlowValueSetAllOf';
export * from './cashLadderRecord';
export * from './cashPerpetual';
export * from './cashPerpetualAllOf';
export * from './cdsFlowConventions';
export * from './cdsIndex';
export * from './cdsIndexAllOf';
export * from './cdsProtectionDetailSpecification';
export * from './change';
export * from './changeHistory';
export * from './changeHistoryAction';
export * from './changeItem';
export * from './chartOfAccounts';
export * from './chartOfAccountsProperties';
export * from './chartOfAccountsRequest';
export * from './client';
export * from './closeEvent';
export * from './closeEventAllOf';
export * from './completePortfolio';
export * from './completeRelation';
export * from './completeRelationship';
export * from './complexBond';
export * from './complexBondAllOf';
export * from './complexMarketData';
export * from './complexMarketDataId';
export * from './complianceBreachedOrderInfo';
export * from './complianceRule';
export * from './complianceRuleResult';
export * from './complianceRuleUpsertRequest';
export * from './complianceRuleUpsertResponse';
export * from './complianceRunInfo';
export * from './complianceTemplate';
export * from './complianceTemplateParameter';
export * from './complianceTemplateVariation';
export * from './compositeDispersion';
export * from './compositeDispersionResponse';
export * from './compounding';
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
export * from './createAddressKeyDefinitionRequest';
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
export * from './createReconciliationRequest';
export * from './createReferencePortfolioRequest';
export * from './createRelationDefinitionRequest';
export * from './createRelationRequest';
export * from './createRelationshipDefinitionRequest';
export * from './createRelationshipRequest';
export * from './createSequenceRequest';
export * from './createTaxRuleSetRequest';
export * from './createTransactionPortfolioRequest';
export * from './createUnitDefinition';
export * from './creditDefaultSwap';
export * from './creditDefaultSwapAllOf';
export * from './creditRating';
export * from './creditSpreadCurveData';
export * from './creditSpreadCurveDataAllOf';
export * from './creditSupportAnnex';
export * from './criterionType';
export * from './currencyAndAmount';
export * from './curveOptions';
export * from './curveOptionsAllOf';
export * from './custodianAccount';
export * from './custodianAccountProperties';
export * from './custodianAccountRequest';
export * from './custodianAccountsUpsertResponse';
export * from './customEntityDefinition';
export * from './customEntityDefinitionRequest';
export * from './customEntityField';
export * from './customEntityFieldDefinition';
export * from './customEntityId';
export * from './customEntityRequest';
export * from './customEntityResponse';
export * from './cutLabelDefinition';
export * from './cutLocalTime';
export * from './dataDefinition';
export * from './dataMapKey';
export * from './dataMapping';
export * from './dataScope';
export * from './dataType';
export * from './dataTypeSummary';
export * from './dataTypeValueRange';
export * from './dateAttributes';
export * from './dateRange';
export * from './dateTimeComparisonType';
export * from './dayOfWeek';
export * from './decimalList';
export * from './deleteAccountsResponse';
export * from './deleteCustodianAccountsResponse';
export * from './deleteInstrumentPropertiesResponse';
export * from './deleteInstrumentResponse';
export * from './deleteInstrumentsResponse';
export * from './deleteModes';
export * from './deleteRelationRequest';
export * from './deleteRelationshipRequest';
export * from './deletedEntityResponse';
export * from './dependencySourceFilter';
export * from './describedAddressKey';
export * from './discountFactorCurveData';
export * from './discountFactorCurveDataAllOf';
export * from './discountingDependency';
export * from './discountingDependencyAllOf';
export * from './discountingMethod';
export * from './economicDependency';
export * from './economicDependencyType';
export * from './economicDependencyWithComplexMarketData';
export * from './economicDependencyWithQuote';
export * from './emptyModelOptions';
export * from './emptyModelOptionsAllOf';
export * from './entityIdentifier';
export * from './equity';
export * from './equityAllOf';
export * from './equityAllOfIdentifiers';
export * from './equityCurveByPricesData';
export * from './equityCurveByPricesDataAllOf';
export * from './equityCurveDependency';
export * from './equityCurveDependencyAllOf';
export * from './equityModelOptions';
export * from './equityModelOptionsAllOf';
export * from './equityOption';
export * from './equityOptionAllOf';
export * from './equitySwap';
export * from './equitySwapAllOf';
export * from './equityVolDependency';
export * from './equityVolDependencyAllOf';
export * from './equityVolSurfaceData';
export * from './equityVolSurfaceDataAllOf';
export * from './errorDetail';
export * from './eventDateRange';
export * from './exchangeTradedOption';
export * from './exchangeTradedOptionAllOf';
export * from './exchangeTradedOptionContractDetails';
export * from './execution';
export * from './executionRequest';
export * from './executionSetRequest';
export * from './exerciseEvent';
export * from './exerciseEventAllOf';
export * from './exoticInstrument';
export * from './exoticInstrumentAllOf';
export * from './expandedGroup';
export * from './feeRule';
export * from './feeRuleUpsertRequest';
export * from './feeRuleUpsertResponse';
export * from './fieldDefinition';
export * from './fieldSchema';
export * from './fieldValue';
export * from './fileResponse';
export * from './fixedLeg';
export * from './fixedLegAllOf';
export * from './fixedLegAllOfOverrides';
export * from './fixedSchedule';
export * from './fixedScheduleAllOf';
export * from './floatSchedule';
export * from './floatScheduleAllOf';
export * from './floatingLeg';
export * from './floatingLegAllOf';
export * from './flowConventionName';
export * from './flowConventions';
export * from './forwardRateAgreement';
export * from './forwardRateAgreementAllOf';
export * from './fundingLeg';
export * from './fundingLegAllOf';
export * from './fundingLegOptions';
export * from './fundingLegOptionsAllOf';
export * from './future';
export * from './futureAllOf';
export * from './futuresContractDetails';
export * from './fxDependency';
export * from './fxDependencyAllOf';
export * from './fxForward';
export * from './fxForwardAllOf';
export * from './fxForwardCurveByQuoteReference';
export * from './fxForwardCurveByQuoteReferenceAllOf';
export * from './fxForwardCurveData';
export * from './fxForwardCurveDataAllOf';
export * from './fxForwardModelOptions';
export * from './fxForwardModelOptionsAllOf';
export * from './fxForwardPipsCurveData';
export * from './fxForwardPipsCurveDataAllOf';
export * from './fxForwardTenorCurveData';
export * from './fxForwardTenorCurveDataAllOf';
export * from './fxForwardTenorPipsCurveData';
export * from './fxForwardTenorPipsCurveDataAllOf';
export * from './fxForwardsDependency';
export * from './fxForwardsDependencyAllOf';
export * from './fxOption';
export * from './fxOptionAllOf';
export * from './fxRateSchedule';
export * from './fxRateScheduleAllOf';
export * from './fxSwap';
export * from './fxSwapAllOf';
export * from './fxTenorConvention';
export * from './fxVolDependency';
export * from './fxVolDependencyAllOf';
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
export * from './getStructuredResultDataResponse';
export * from './getVirtualDocumentResponse';
export * from './groupedResultOfAddressKey';
export * from './holdingAdjustment';
export * from './holdingAdjustmentWithDate';
export * from './holdingContext';
export * from './holdingsAdjustment';
export * from './holdingsAdjustmentHeader';
export * from './iUnitDefinitionDto';
export * from './idSelectorDefinition';
export * from './identifierPartSchema';
export * from './indexConvention';
export * from './indexModelOptions';
export * from './indexModelOptionsAllOf';
export * from './indexProjectionDependency';
export * from './indexProjectionDependencyAllOf';
export * from './industryClassifier';
export * from './inflationLinkedBond';
export * from './inflationLinkedBondAllOf';
export * from './inflationSwap';
export * from './inflationSwapAllOf';
export * from './informationalErrorEvent';
export * from './informationalErrorEventAllOf';
export * from './informationalEvent';
export * from './informationalEventAllOf';
export * from './inlineValuationRequest';
export * from './inlineValuationsReconciliationRequest';
export * from './inputTransition';
export * from './instrument';
export * from './instrumentCapabilities';
export * from './instrumentCashFlow';
export * from './instrumentDefinition';
export * from './instrumentDefinitionFormat';
export * from './instrumentDeleteModes';
export * from './instrumentEvent';
export * from './instrumentEventHolder';
export * from './instrumentEventType';
export * from './instrumentIdTypeDescriptor';
export * from './instrumentIdValue';
export * from './instrumentLeg';
export * from './instrumentLegAllOf';
export * from './instrumentList';
export * from './instrumentMatch';
export * from './instrumentModels';
export * from './instrumentPaymentDiary';
export * from './instrumentPaymentDiaryLeg';
export * from './instrumentPaymentDiaryRow';
export * from './instrumentProperties';
export * from './instrumentSearchProperty';
export * from './instrumentType';
export * from './interestRateSwap';
export * from './interestRateSwapAllOf';
export * from './interestRateSwaption';
export * from './interestRateSwaptionAllOf';
export * from './irVolCubeData';
export * from './irVolCubeDataAllOf';
export * from './irVolDependency';
export * from './irVolDependencyAllOf';
export * from './isBusinessDayResponse';
export * from './jELines';
export * from './jELinesQueryParameters';
export * from './labelValueSet';
export * from './legDefinition';
export * from './legalEntity';
export * from './levelStep';
export * from './lifeCycleEventLineage';
export * from './lifeCycleEventValue';
export * from './lifeCycleEventValueAllOf';
export * from './link';
export * from './listAggregationReconciliation';
export * from './listAggregationResponse';
export * from './listComplexMarketDataWithMetaDataResponse';
export * from './loanPeriod';
export * from './lusidInstrument';
export * from './lusidProblemDetails';
export * from './lusidTradeTicket';
export * from './lusidUniqueId';
export * from './lusidValidationProblemDetails';
export * from './mappedString';
export * from './mapping';
export * from './mappingRule';
export * from './marketContext';
export * from './marketContextSuppliers';
export * from './marketDataKeyRule';
export * from './marketDataOptions';
export * from './marketDataOptionsType';
export * from './marketDataOverrides';
export * from './marketDataSpecificRule';
export * from './marketDataType';
export * from './marketObservableType';
export * from './marketOptions';
export * from './marketQuote';
export * from './matchCriterion';
export * from './metricValue';
export * from './modelOptions';
export * from './modelOptionsType';
export * from './modelSelection';
export * from './movementType';
export * from './nextValueInSequenceResponse';
export * from './numericComparisonType';
export * from './opaqueDependency';
export * from './opaqueDependencyAllOf';
export * from './opaqueMarketData';
export * from './opaqueMarketDataAllOf';
export * from './opaqueModelOptions';
export * from './opaqueModelOptionsAllOf';
export * from './openEvent';
export * from './openEventAllOf';
export * from './operandType';
export * from './operation';
export * from './operationType';
export * from './operator';
export * from './optionEntry';
export * from './optionalitySchedule';
export * from './optionalityScheduleAllOf';
export * from './order';
export * from './orderBySpec';
export * from './orderGraphBlock';
export * from './orderGraphBlockAllocationDetail';
export * from './orderGraphBlockAllocationSynopsis';
export * from './orderGraphBlockExecutionDetail';
export * from './orderGraphBlockExecutionSynopsis';
export * from './orderGraphBlockOrderDetail';
export * from './orderGraphBlockOrderSynopsis';
export * from './orderGraphBlockPlacementDetail';
export * from './orderGraphBlockPlacementSynopsis';
export * from './orderGraphPlacement';
export * from './orderGraphPlacementAllocationDetail';
export * from './orderGraphPlacementAllocationSynopsis';
export * from './orderGraphPlacementChildPlacementDetail';
export * from './orderGraphPlacementExecutionDetail';
export * from './orderGraphPlacementExecutionSynopsis';
export * from './orderGraphPlacementOrderDetail';
export * from './orderGraphPlacementOrderSynopsis';
export * from './orderGraphPlacementPlacementSynopsis';
export * from './orderInstruction';
export * from './orderInstructionRequest';
export * from './orderInstructionSetRequest';
export * from './orderRequest';
export * from './orderSetRequest';
export * from './otcConfirmation';
export * from './outputTransaction';
export * from './outputTransition';
export * from './package';
export * from './packageRequest';
export * from './packageSetRequest';
export * from './pagedResourceListOfAbor';
export * from './pagedResourceListOfAborConfiguration';
export * from './pagedResourceListOfAccount';
export * from './pagedResourceListOfAddressKeyDefinition';
export * from './pagedResourceListOfAllocation';
export * from './pagedResourceListOfBlock';
export * from './pagedResourceListOfCalendar';
export * from './pagedResourceListOfChartOfAccounts';
export * from './pagedResourceListOfComplianceTemplate';
export * from './pagedResourceListOfCorporateActionSource';
export * from './pagedResourceListOfCustodianAccount';
export * from './pagedResourceListOfCustomEntityDefinition';
export * from './pagedResourceListOfCustomEntityResponse';
export * from './pagedResourceListOfCutLabelDefinition';
export * from './pagedResourceListOfDataTypeSummary';
export * from './pagedResourceListOfExecution';
export * from './pagedResourceListOfInstrument';
export * from './pagedResourceListOfInstrumentEventHolder';
export * from './pagedResourceListOfLegalEntity';
export * from './pagedResourceListOfOrder';
export * from './pagedResourceListOfOrderGraphBlock';
export * from './pagedResourceListOfOrderGraphPlacement';
export * from './pagedResourceListOfOrderInstruction';
export * from './pagedResourceListOfPackage';
export * from './pagedResourceListOfParticipation';
export * from './pagedResourceListOfPerson';
export * from './pagedResourceListOfPlacement';
export * from './pagedResourceListOfPortfolioGroupSearchResult';
export * from './pagedResourceListOfPortfolioSearchResult';
export * from './pagedResourceListOfPropertyDefinitionSearchResult';
export * from './pagedResourceListOfReconciliation';
export * from './pagedResourceListOfReconciliationRun';
export * from './pagedResourceListOfReconciliationRunBreak';
export * from './pagedResourceListOfRelationshipDefinition';
export * from './pagedResourceListOfSequenceDefinition';
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
export * from './portfolioGroupIdList';
export * from './portfolioGroupProperties';
export * from './portfolioGroupSearchResult';
export * from './portfolioHolding';
export * from './portfolioIdList';
export * from './portfolioProperties';
export * from './portfolioReconciliationRequest';
export * from './portfolioResultDataKeyRule';
export * from './portfolioResultDataKeyRuleAllOf';
export * from './portfolioSearchResult';
export * from './portfolioTradeTicket';
export * from './portfolioType';
export * from './portfoliosReconciliationRequest';
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
export * from './propertyValueEquals';
export * from './propertyValueEqualsAllOf';
export * from './propertyValueIn';
export * from './propertyValueInAllOf';
export * from './queryBucketedCashFlowsRequest';
export * from './queryCashFlowsRequest';
export * from './queryInstrumentEventsRequest';
export * from './queryTradeTicketsRequest';
export * from './quote';
export * from './quoteAccessMetadataRule';
export * from './quoteAccessMetadataRuleId';
export * from './quoteDependency';
export * from './quoteDependencyAllOf';
export * from './quoteId';
export * from './quoteInstrumentIdType';
export * from './quoteSeriesId';
export * from './quoteType';
export * from './rawVendorEvent';
export * from './rawVendorEventAllOf';
export * from './realisedGainLoss';
export * from './reconcileDateTimeRule';
export * from './reconcileDateTimeRuleAllOf';
export * from './reconcileNumericRule';
export * from './reconcileNumericRuleAllOf';
export * from './reconcileStringRule';
export * from './reconcileStringRuleAllOf';
export * from './reconciledTransaction';
export * from './reconciliation';
export * from './reconciliationBreak';
export * from './reconciliationBreakId';
export * from './reconciliationConfiguration';
export * from './reconciliationId';
export * from './reconciliationLeftRightAddressKeyPair';
export * from './reconciliationLine';
export * from './reconciliationRequest';
export * from './reconciliationResponse';
export * from './reconciliationRule';
export * from './reconciliationRuleType';
export * from './reconciliationRun';
export * from './reconciliationRunBreak';
export * from './reconciliationRunId';
export * from './reconciliationSideConfiguration';
export * from './reconciliationTransactions';
export * from './referenceData';
export * from './referenceInstrument';
export * from './referenceInstrumentAllOf';
export * from './referenceListType';
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
export * from './resetEvent';
export * from './resetEventAllOf';
export * from './resourceId';
export * from './resourceListOfAccessControlledResource';
export * from './resourceListOfAccessMetadataValueOf';
export * from './resourceListOfAggregatedReturn';
export * from './resourceListOfAggregationQuery';
export * from './resourceListOfAllocation';
export * from './resourceListOfBlock';
export * from './resourceListOfCalendarDate';
export * from './resourceListOfChange';
export * from './resourceListOfChangeHistory';
export * from './resourceListOfComplianceBreachedOrderInfo';
export * from './resourceListOfComplianceRule';
export * from './resourceListOfComplianceRuleResult';
export * from './resourceListOfComplianceRunInfo';
export * from './resourceListOfConstituentsAdjustmentHeader';
export * from './resourceListOfCorporateAction';
export * from './resourceListOfDataType';
export * from './resourceListOfExecution';
export * from './resourceListOfFeeRule';
export * from './resourceListOfGetCdsFlowConventionsResponse';
export * from './resourceListOfGetCounterpartyAgreementResponse';
export * from './resourceListOfGetCreditSupportAnnexResponse';
export * from './resourceListOfGetFlowConventionsResponse';
export * from './resourceListOfGetIndexConventionResponse';
export * from './resourceListOfGetRecipeResponse';
export * from './resourceListOfHoldingsAdjustmentHeader';
export * from './resourceListOfIUnitDefinitionDto';
export * from './resourceListOfInstrumentCashFlow';
export * from './resourceListOfInstrumentEventHolder';
export * from './resourceListOfInstrumentIdTypeDescriptor';
export * from './resourceListOfLegalEntity';
export * from './resourceListOfListComplexMarketDataWithMetaDataResponse';
export * from './resourceListOfMapping';
export * from './resourceListOfOrder';
export * from './resourceListOfOrderInstruction';
export * from './resourceListOfPackage';
export * from './resourceListOfParticipation';
export * from './resourceListOfPerformanceReturn';
export * from './resourceListOfPerson';
export * from './resourceListOfPlacement';
export * from './resourceListOfPortfolio';
export * from './resourceListOfPortfolioCashFlow';
export * from './resourceListOfPortfolioCashLadder';
export * from './resourceListOfPortfolioGroup';
export * from './resourceListOfPortfolioTradeTicket';
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
export * from './resourceListOfSideDefinition';
export * from './resourceListOfString';
export * from './resourceListOfTaxRuleSet';
export * from './resourceListOfTransaction';
export * from './resourceListOfTransactionType';
export * from './resourceListOfValueType';
export * from './responseMetaData';
export * from './resultDataKeyRule';
export * from './resultDataKeyRuleAllOf';
export * from './resultDataSchema';
export * from './resultKeyRule';
export * from './resultKeyRuleType';
export * from './resultValue';
export * from './resultValue0D';
export * from './resultValue0DAllOf';
export * from './resultValueBool';
export * from './resultValueBoolAllOf';
export * from './resultValueCurrency';
export * from './resultValueCurrencyAllOf';
export * from './resultValueDateTimeOffset';
export * from './resultValueDateTimeOffsetAllOf';
export * from './resultValueDecimal';
export * from './resultValueDecimalAllOf';
export * from './resultValueDictionary';
export * from './resultValueDictionaryAllOf';
export * from './resultValueInt';
export * from './resultValueIntAllOf';
export * from './resultValueString';
export * from './resultValueStringAllOf';
export * from './resultValueType';
export * from './roundingConvention';
export * from './scalingMethodology';
export * from './schedule';
export * from './scheduleType';
export * from './schema';
export * from './scopeDefinition';
export * from './sequenceDefinition';
export * from './setLegalEntityIdentifiersRequest';
export * from './setLegalEntityPropertiesRequest';
export * from './setPersonIdentifiersRequest';
export * from './setPersonPropertiesRequest';
export * from './setTransactionConfigurationAlias';
export * from './setTransactionConfigurationSourceRequest';
export * from './sideConfigurationData';
export * from './sideConfigurationDataRequest';
export * from './sideDefinition';
export * from './sideDefinitionRequest';
export * from './sidesDefinitionRequest';
export * from './simpleCashFlowLoan';
export * from './simpleCashFlowLoanAllOf';
export * from './simpleInstrument';
export * from './simpleInstrumentAllOf';
export * from './sortOrder';
export * from './stepSchedule';
export * from './stepScheduleAllOf';
export * from './stockSplitEvent';
export * from './stockSplitEventAllOf';
export * from './stream';
export * from './stringComparisonType';
export * from './stringList';
export * from './structuredResultData';
export * from './structuredResultDataId';
export * from './subHoldingKeyValueEquals';
export * from './subHoldingKeyValueEqualsAllOf';
export * from './targetTaxLot';
export * from './targetTaxLotRequest';
export * from './taxRule';
export * from './taxRuleSet';
export * from './termDeposit';
export * from './termDepositAllOf';
export * from './touch';
export * from './tradeTicket';
export * from './tradeTicketType';
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
export * from './transactionReconciliationRequest';
export * from './transactionRequest';
export * from './transactionRoles';
export * from './transactionSetConfigurationData';
export * from './transactionSetConfigurationDataRequest';
export * from './transactionStatus';
export * from './transactionType';
export * from './transactionTypeAlias';
export * from './transactionTypeMovement';
export * from './transactionTypePropertyMapping';
export * from './transactionTypeRequest';
export * from './transactionsReconciliationsResponse';
export * from './transitionEvent';
export * from './transitionEventAllOf';
export * from './translateInstrumentDefinitionsRequest';
export * from './translateInstrumentDefinitionsResponse';
export * from './translateTradeTicketRequest';
export * from './translateTradeTicketsResponse';
export * from './triggerEvent';
export * from './triggerEventAllOf';
export * from './typedResourceId';
export * from './unitSchema';
export * from './unmatchedHoldingMethod';
export * from './updateCalendarRequest';
export * from './updateCustomEntityDefinitionRequest';
export * from './updateCutLabelDefinitionRequest';
export * from './updateDataTypeRequest';
export * from './updateDerivedPropertyDefinitionRequest';
export * from './updateInstrumentIdentifierRequest';
export * from './updatePortfolioGroupRequest';
export * from './updatePortfolioRequest';
export * from './updatePropertyDefinitionRequest';
export * from './updateReconciliationRequest';
export * from './updateRelationshipDefinitionRequest';
export * from './updateTaxRuleSetRequest';
export * from './updateUnitRequest';
export * from './upsertCdsFlowConventionsRequest';
export * from './upsertComplexMarketDataRequest';
export * from './upsertCorporateActionRequest';
export * from './upsertCorporateActionsResponse';
export * from './upsertCounterpartyAgreementRequest';
export * from './upsertCreditSupportAnnexRequest';
export * from './upsertCustomEntitiesResponse';
export * from './upsertCustomEntityAccessMetadataRequest';
export * from './upsertFlowConventionsRequest';
export * from './upsertIndexConventionRequest';
export * from './upsertInstrumentEventRequest';
export * from './upsertInstrumentEventsResponse';
export * from './upsertInstrumentPropertiesResponse';
export * from './upsertInstrumentPropertyRequest';
export * from './upsertInstrumentsResponse';
export * from './upsertLegalEntitiesResponse';
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
export * from './upsertReconciliationBreakRequest';
export * from './upsertReconciliationRunRequest';
export * from './upsertReferencePortfolioConstituentsRequest';
export * from './upsertReferencePortfolioConstituentsResponse';
export * from './upsertResultValuesDataRequest';
export * from './upsertReturnsResponse';
export * from './upsertSingleStructuredDataResponse';
export * from './upsertStructuredDataResponse';
export * from './upsertStructuredResultDataRequest';
export * from './upsertTransactionPropertiesResponse';
export * from './user';
export * from './valuationRequest';
export * from './valuationSchedule';
export * from './valuationsReconciliationRequest';
export * from './valueType';
export * from './vendorDependency';
export * from './vendorDependencyAllOf';
export * from './vendorLibrary';
export * from './vendorModelRule';
export * from './version';
export * from './versionSummaryDto';
export * from './versionedResourceListOfA2BDataRecord';
export * from './versionedResourceListOfA2BMovementRecord';
export * from './versionedResourceListOfJELines';
export * from './versionedResourceListOfOutputTransaction';
export * from './versionedResourceListOfPortfolioHolding';
export * from './versionedResourceListOfTransaction';
export * from './versionedResourceListWithWarningsOfPortfolioHolding';
export * from './virtualDocument';
export * from './virtualDocumentRow';
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
import { Abor } from './abor';
import { AborConfiguration } from './aborConfiguration';
import { AborConfigurationProperties } from './aborConfigurationProperties';
import { AborConfigurationRequest } from './aborConfigurationRequest';
import { AborProperties } from './aborProperties';
import { AborRequest } from './aborRequest';
import { AccessControlledAction } from './accessControlledAction';
import { AccessControlledResource } from './accessControlledResource';
import { AccessMetadataOperation } from './accessMetadataOperation';
import { AccessMetadataValue } from './accessMetadataValue';
import { Account } from './account';
import { AccountProperties } from './accountProperties';
import { AccountingMethod } from './accountingMethod';
import { AccountsUpsertResponse } from './accountsUpsertResponse';
import { ActionId } from './actionId';
import { ActionResultOfPortfolio } from './actionResultOfPortfolio';
import { AddBusinessDaysToDateRequest } from './addBusinessDaysToDateRequest';
import { AddBusinessDaysToDateResponse } from './addBusinessDaysToDateResponse';
import { AddressDefinition } from './addressDefinition';
import { AddressKeyDefinition } from './addressKeyDefinition';
import { AddressKeyFilter } from './addressKeyFilter';
import { AddressKeyList } from './addressKeyList';
import { AddressKeyOptionDefinition } from './addressKeyOptionDefinition';
import { AdjustHolding } from './adjustHolding';
import { AdjustHoldingForDateRequest } from './adjustHoldingForDateRequest';
import { AdjustHoldingRequest } from './adjustHoldingRequest';
import { AggregateSpec } from './aggregateSpec';
import { AggregatedReturn } from './aggregatedReturn';
import { AggregatedReturnsDispersionRequest } from './aggregatedReturnsDispersionRequest';
import { AggregatedReturnsRequest } from './aggregatedReturnsRequest';
import { AggregatedReturnsResponse } from './aggregatedReturnsResponse';
import { AggregationContext } from './aggregationContext';
import { AggregationMeasureFailureDetail } from './aggregationMeasureFailureDetail';
import { AggregationOp } from './aggregationOp';
import { AggregationOptions } from './aggregationOptions';
import { AggregationQuery } from './aggregationQuery';
import { AggregationType } from './aggregationType';
import { Allocation } from './allocation';
import { AllocationRequest } from './allocationRequest';
import { AllocationServiceRunResult } from './allocationServiceRunResult';
import { AllocationSetRequest } from './allocationSetRequest';
import { AmortisationEvent } from './amortisationEvent';
import { AmortisationEventAllOf } from './amortisationEventAllOf';
import { AnnulQuotesResponse } from './annulQuotesResponse';
import { AnnulSingleStructuredDataResponse } from './annulSingleStructuredDataResponse';
import { AnnulStructuredDataResponse } from './annulStructuredDataResponse';
import { AssetClass } from './assetClass';
import { Barrier } from './barrier';
import { Basket } from './basket';
import { BasketAllOf } from './basketAllOf';
import { BasketIdentifier } from './basketIdentifier';
import { BatchAdjustHoldingsResponse } from './batchAdjustHoldingsResponse';
import { BatchUpsertPortfolioTransactionsResponse } from './batchUpsertPortfolioTransactionsResponse';
import { BatchUpsertPropertyDefinitionPropertiesResponse } from './batchUpsertPropertyDefinitionPropertiesResponse';
import { Block } from './block';
import { BlockRequest } from './blockRequest';
import { BlockSetRequest } from './blockSetRequest';
import { Bond } from './bond';
import { BondAllOf } from './bondAllOf';
import { BondDefaultEvent } from './bondDefaultEvent';
import { BondDefaultEventAllOf } from './bondDefaultEventAllOf';
import { BucketedCashFlowRequest } from './bucketedCashFlowRequest';
import { BucketedCashFlowResponse } from './bucketedCashFlowResponse';
import { CalculationInfo } from './calculationInfo';
import { Calendar } from './calendar';
import { CalendarDate } from './calendarDate';
import { CapFloor } from './capFloor';
import { CapFloorAllOf } from './capFloorAllOf';
import { CashDependency } from './cashDependency';
import { CashDependencyAllOf } from './cashDependencyAllOf';
import { CashDividendEvent } from './cashDividendEvent';
import { CashDividendEventAllOf } from './cashDividendEventAllOf';
import { CashFlowEvent } from './cashFlowEvent';
import { CashFlowEventAllOf } from './cashFlowEventAllOf';
import { CashFlowLineage } from './cashFlowLineage';
import { CashFlowValue } from './cashFlowValue';
import { CashFlowValueAllOf } from './cashFlowValueAllOf';
import { CashFlowValueSet } from './cashFlowValueSet';
import { CashFlowValueSetAllOf } from './cashFlowValueSetAllOf';
import { CashLadderRecord } from './cashLadderRecord';
import { CashPerpetual } from './cashPerpetual';
import { CashPerpetualAllOf } from './cashPerpetualAllOf';
import { CdsFlowConventions } from './cdsFlowConventions';
import { CdsIndex } from './cdsIndex';
import { CdsIndexAllOf } from './cdsIndexAllOf';
import { CdsProtectionDetailSpecification } from './cdsProtectionDetailSpecification';
import { Change } from './change';
import { ChangeHistory } from './changeHistory';
import { ChangeHistoryAction } from './changeHistoryAction';
import { ChangeItem } from './changeItem';
import { ChartOfAccounts } from './chartOfAccounts';
import { ChartOfAccountsProperties } from './chartOfAccountsProperties';
import { ChartOfAccountsRequest } from './chartOfAccountsRequest';
import { Client } from './client';
import { CloseEvent } from './closeEvent';
import { CloseEventAllOf } from './closeEventAllOf';
import { CompletePortfolio } from './completePortfolio';
import { CompleteRelation } from './completeRelation';
import { CompleteRelationship } from './completeRelationship';
import { ComplexBond } from './complexBond';
import { ComplexBondAllOf } from './complexBondAllOf';
import { ComplexMarketData } from './complexMarketData';
import { ComplexMarketDataId } from './complexMarketDataId';
import { ComplianceBreachedOrderInfo } from './complianceBreachedOrderInfo';
import { ComplianceRule } from './complianceRule';
import { ComplianceRuleResult } from './complianceRuleResult';
import { ComplianceRuleUpsertRequest } from './complianceRuleUpsertRequest';
import { ComplianceRuleUpsertResponse } from './complianceRuleUpsertResponse';
import { ComplianceRunInfo } from './complianceRunInfo';
import { ComplianceTemplate } from './complianceTemplate';
import { ComplianceTemplateParameter } from './complianceTemplateParameter';
import { ComplianceTemplateVariation } from './complianceTemplateVariation';
import { CompositeDispersion } from './compositeDispersion';
import { CompositeDispersionResponse } from './compositeDispersionResponse';
import { Compounding } from './compounding';
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
import { CreateAddressKeyDefinitionRequest } from './createAddressKeyDefinitionRequest';
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
import { CreateReconciliationRequest } from './createReconciliationRequest';
import { CreateReferencePortfolioRequest } from './createReferencePortfolioRequest';
import { CreateRelationDefinitionRequest } from './createRelationDefinitionRequest';
import { CreateRelationRequest } from './createRelationRequest';
import { CreateRelationshipDefinitionRequest } from './createRelationshipDefinitionRequest';
import { CreateRelationshipRequest } from './createRelationshipRequest';
import { CreateSequenceRequest } from './createSequenceRequest';
import { CreateTaxRuleSetRequest } from './createTaxRuleSetRequest';
import { CreateTransactionPortfolioRequest } from './createTransactionPortfolioRequest';
import { CreateUnitDefinition } from './createUnitDefinition';
import { CreditDefaultSwap } from './creditDefaultSwap';
import { CreditDefaultSwapAllOf } from './creditDefaultSwapAllOf';
import { CreditRating } from './creditRating';
import { CreditSpreadCurveData } from './creditSpreadCurveData';
import { CreditSpreadCurveDataAllOf } from './creditSpreadCurveDataAllOf';
import { CreditSupportAnnex } from './creditSupportAnnex';
import { CriterionType } from './criterionType';
import { CurrencyAndAmount } from './currencyAndAmount';
import { CurveOptions } from './curveOptions';
import { CurveOptionsAllOf } from './curveOptionsAllOf';
import { CustodianAccount } from './custodianAccount';
import { CustodianAccountProperties } from './custodianAccountProperties';
import { CustodianAccountRequest } from './custodianAccountRequest';
import { CustodianAccountsUpsertResponse } from './custodianAccountsUpsertResponse';
import { CustomEntityDefinition } from './customEntityDefinition';
import { CustomEntityDefinitionRequest } from './customEntityDefinitionRequest';
import { CustomEntityField } from './customEntityField';
import { CustomEntityFieldDefinition } from './customEntityFieldDefinition';
import { CustomEntityId } from './customEntityId';
import { CustomEntityRequest } from './customEntityRequest';
import { CustomEntityResponse } from './customEntityResponse';
import { CutLabelDefinition } from './cutLabelDefinition';
import { CutLocalTime } from './cutLocalTime';
import { DataDefinition } from './dataDefinition';
import { DataMapKey } from './dataMapKey';
import { DataMapping } from './dataMapping';
import { DataScope } from './dataScope';
import { DataType } from './dataType';
import { DataTypeSummary } from './dataTypeSummary';
import { DataTypeValueRange } from './dataTypeValueRange';
import { DateAttributes } from './dateAttributes';
import { DateRange } from './dateRange';
import { DateTimeComparisonType } from './dateTimeComparisonType';
import { DayOfWeek } from './dayOfWeek';
import { DecimalList } from './decimalList';
import { DeleteAccountsResponse } from './deleteAccountsResponse';
import { DeleteCustodianAccountsResponse } from './deleteCustodianAccountsResponse';
import { DeleteInstrumentPropertiesResponse } from './deleteInstrumentPropertiesResponse';
import { DeleteInstrumentResponse } from './deleteInstrumentResponse';
import { DeleteInstrumentsResponse } from './deleteInstrumentsResponse';
import { DeleteModes } from './deleteModes';
import { DeleteRelationRequest } from './deleteRelationRequest';
import { DeleteRelationshipRequest } from './deleteRelationshipRequest';
import { DeletedEntityResponse } from './deletedEntityResponse';
import { DependencySourceFilter } from './dependencySourceFilter';
import { DescribedAddressKey } from './describedAddressKey';
import { DiscountFactorCurveData } from './discountFactorCurveData';
import { DiscountFactorCurveDataAllOf } from './discountFactorCurveDataAllOf';
import { DiscountingDependency } from './discountingDependency';
import { DiscountingDependencyAllOf } from './discountingDependencyAllOf';
import { DiscountingMethod } from './discountingMethod';
import { EconomicDependency } from './economicDependency';
import { EconomicDependencyType } from './economicDependencyType';
import { EconomicDependencyWithComplexMarketData } from './economicDependencyWithComplexMarketData';
import { EconomicDependencyWithQuote } from './economicDependencyWithQuote';
import { EmptyModelOptions } from './emptyModelOptions';
import { EmptyModelOptionsAllOf } from './emptyModelOptionsAllOf';
import { EntityIdentifier } from './entityIdentifier';
import { Equity } from './equity';
import { EquityAllOf } from './equityAllOf';
import { EquityAllOfIdentifiers } from './equityAllOfIdentifiers';
import { EquityCurveByPricesData } from './equityCurveByPricesData';
import { EquityCurveByPricesDataAllOf } from './equityCurveByPricesDataAllOf';
import { EquityCurveDependency } from './equityCurveDependency';
import { EquityCurveDependencyAllOf } from './equityCurveDependencyAllOf';
import { EquityModelOptions } from './equityModelOptions';
import { EquityModelOptionsAllOf } from './equityModelOptionsAllOf';
import { EquityOption } from './equityOption';
import { EquityOptionAllOf } from './equityOptionAllOf';
import { EquitySwap } from './equitySwap';
import { EquitySwapAllOf } from './equitySwapAllOf';
import { EquityVolDependency } from './equityVolDependency';
import { EquityVolDependencyAllOf } from './equityVolDependencyAllOf';
import { EquityVolSurfaceData } from './equityVolSurfaceData';
import { EquityVolSurfaceDataAllOf } from './equityVolSurfaceDataAllOf';
import { ErrorDetail } from './errorDetail';
import { EventDateRange } from './eventDateRange';
import { ExchangeTradedOption } from './exchangeTradedOption';
import { ExchangeTradedOptionAllOf } from './exchangeTradedOptionAllOf';
import { ExchangeTradedOptionContractDetails } from './exchangeTradedOptionContractDetails';
import { Execution } from './execution';
import { ExecutionRequest } from './executionRequest';
import { ExecutionSetRequest } from './executionSetRequest';
import { ExerciseEvent } from './exerciseEvent';
import { ExerciseEventAllOf } from './exerciseEventAllOf';
import { ExoticInstrument } from './exoticInstrument';
import { ExoticInstrumentAllOf } from './exoticInstrumentAllOf';
import { ExpandedGroup } from './expandedGroup';
import { FeeRule } from './feeRule';
import { FeeRuleUpsertRequest } from './feeRuleUpsertRequest';
import { FeeRuleUpsertResponse } from './feeRuleUpsertResponse';
import { FieldDefinition } from './fieldDefinition';
import { FieldSchema } from './fieldSchema';
import { FieldValue } from './fieldValue';
import { FileResponse } from './fileResponse';
import { FixedLeg } from './fixedLeg';
import { FixedLegAllOf } from './fixedLegAllOf';
import { FixedLegAllOfOverrides } from './fixedLegAllOfOverrides';
import { FixedSchedule } from './fixedSchedule';
import { FixedScheduleAllOf } from './fixedScheduleAllOf';
import { FloatSchedule } from './floatSchedule';
import { FloatScheduleAllOf } from './floatScheduleAllOf';
import { FloatingLeg } from './floatingLeg';
import { FloatingLegAllOf } from './floatingLegAllOf';
import { FlowConventionName } from './flowConventionName';
import { FlowConventions } from './flowConventions';
import { ForwardRateAgreement } from './forwardRateAgreement';
import { ForwardRateAgreementAllOf } from './forwardRateAgreementAllOf';
import { FundingLeg } from './fundingLeg';
import { FundingLegAllOf } from './fundingLegAllOf';
import { FundingLegOptions } from './fundingLegOptions';
import { FundingLegOptionsAllOf } from './fundingLegOptionsAllOf';
import { Future } from './future';
import { FutureAllOf } from './futureAllOf';
import { FuturesContractDetails } from './futuresContractDetails';
import { FxDependency } from './fxDependency';
import { FxDependencyAllOf } from './fxDependencyAllOf';
import { FxForward } from './fxForward';
import { FxForwardAllOf } from './fxForwardAllOf';
import { FxForwardCurveByQuoteReference } from './fxForwardCurveByQuoteReference';
import { FxForwardCurveByQuoteReferenceAllOf } from './fxForwardCurveByQuoteReferenceAllOf';
import { FxForwardCurveData } from './fxForwardCurveData';
import { FxForwardCurveDataAllOf } from './fxForwardCurveDataAllOf';
import { FxForwardModelOptions } from './fxForwardModelOptions';
import { FxForwardModelOptionsAllOf } from './fxForwardModelOptionsAllOf';
import { FxForwardPipsCurveData } from './fxForwardPipsCurveData';
import { FxForwardPipsCurveDataAllOf } from './fxForwardPipsCurveDataAllOf';
import { FxForwardTenorCurveData } from './fxForwardTenorCurveData';
import { FxForwardTenorCurveDataAllOf } from './fxForwardTenorCurveDataAllOf';
import { FxForwardTenorPipsCurveData } from './fxForwardTenorPipsCurveData';
import { FxForwardTenorPipsCurveDataAllOf } from './fxForwardTenorPipsCurveDataAllOf';
import { FxForwardsDependency } from './fxForwardsDependency';
import { FxForwardsDependencyAllOf } from './fxForwardsDependencyAllOf';
import { FxOption } from './fxOption';
import { FxOptionAllOf } from './fxOptionAllOf';
import { FxRateSchedule } from './fxRateSchedule';
import { FxRateScheduleAllOf } from './fxRateScheduleAllOf';
import { FxSwap } from './fxSwap';
import { FxSwapAllOf } from './fxSwapAllOf';
import { FxTenorConvention } from './fxTenorConvention';
import { FxVolDependency } from './fxVolDependency';
import { FxVolDependencyAllOf } from './fxVolDependencyAllOf';
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
import { GetStructuredResultDataResponse } from './getStructuredResultDataResponse';
import { GetVirtualDocumentResponse } from './getVirtualDocumentResponse';
import { GroupedResultOfAddressKey } from './groupedResultOfAddressKey';
import { HoldingAdjustment } from './holdingAdjustment';
import { HoldingAdjustmentWithDate } from './holdingAdjustmentWithDate';
import { HoldingContext } from './holdingContext';
import { HoldingsAdjustment } from './holdingsAdjustment';
import { HoldingsAdjustmentHeader } from './holdingsAdjustmentHeader';
import { IUnitDefinitionDto } from './iUnitDefinitionDto';
import { IdSelectorDefinition } from './idSelectorDefinition';
import { IdentifierPartSchema } from './identifierPartSchema';
import { IndexConvention } from './indexConvention';
import { IndexModelOptions } from './indexModelOptions';
import { IndexModelOptionsAllOf } from './indexModelOptionsAllOf';
import { IndexProjectionDependency } from './indexProjectionDependency';
import { IndexProjectionDependencyAllOf } from './indexProjectionDependencyAllOf';
import { IndustryClassifier } from './industryClassifier';
import { InflationLinkedBond } from './inflationLinkedBond';
import { InflationLinkedBondAllOf } from './inflationLinkedBondAllOf';
import { InflationSwap } from './inflationSwap';
import { InflationSwapAllOf } from './inflationSwapAllOf';
import { InformationalErrorEvent } from './informationalErrorEvent';
import { InformationalErrorEventAllOf } from './informationalErrorEventAllOf';
import { InformationalEvent } from './informationalEvent';
import { InformationalEventAllOf } from './informationalEventAllOf';
import { InlineValuationRequest } from './inlineValuationRequest';
import { InlineValuationsReconciliationRequest } from './inlineValuationsReconciliationRequest';
import { InputTransition } from './inputTransition';
import { Instrument } from './instrument';
import { InstrumentCapabilities } from './instrumentCapabilities';
import { InstrumentCashFlow } from './instrumentCashFlow';
import { InstrumentDefinition } from './instrumentDefinition';
import { InstrumentDefinitionFormat } from './instrumentDefinitionFormat';
import { InstrumentDeleteModes } from './instrumentDeleteModes';
import { InstrumentEvent } from './instrumentEvent';
import { InstrumentEventHolder } from './instrumentEventHolder';
import { InstrumentEventType } from './instrumentEventType';
import { InstrumentIdTypeDescriptor } from './instrumentIdTypeDescriptor';
import { InstrumentIdValue } from './instrumentIdValue';
import { InstrumentLeg } from './instrumentLeg';
import { InstrumentLegAllOf } from './instrumentLegAllOf';
import { InstrumentList } from './instrumentList';
import { InstrumentMatch } from './instrumentMatch';
import { InstrumentModels } from './instrumentModels';
import { InstrumentPaymentDiary } from './instrumentPaymentDiary';
import { InstrumentPaymentDiaryLeg } from './instrumentPaymentDiaryLeg';
import { InstrumentPaymentDiaryRow } from './instrumentPaymentDiaryRow';
import { InstrumentProperties } from './instrumentProperties';
import { InstrumentSearchProperty } from './instrumentSearchProperty';
import { InstrumentType } from './instrumentType';
import { InterestRateSwap } from './interestRateSwap';
import { InterestRateSwapAllOf } from './interestRateSwapAllOf';
import { InterestRateSwaption } from './interestRateSwaption';
import { InterestRateSwaptionAllOf } from './interestRateSwaptionAllOf';
import { IrVolCubeData } from './irVolCubeData';
import { IrVolCubeDataAllOf } from './irVolCubeDataAllOf';
import { IrVolDependency } from './irVolDependency';
import { IrVolDependencyAllOf } from './irVolDependencyAllOf';
import { IsBusinessDayResponse } from './isBusinessDayResponse';
import { JELines } from './jELines';
import { JELinesQueryParameters } from './jELinesQueryParameters';
import { LabelValueSet } from './labelValueSet';
import { LegDefinition } from './legDefinition';
import { LegalEntity } from './legalEntity';
import { LevelStep } from './levelStep';
import { LifeCycleEventLineage } from './lifeCycleEventLineage';
import { LifeCycleEventValue } from './lifeCycleEventValue';
import { LifeCycleEventValueAllOf } from './lifeCycleEventValueAllOf';
import { Link } from './link';
import { ListAggregationReconciliation } from './listAggregationReconciliation';
import { ListAggregationResponse } from './listAggregationResponse';
import { ListComplexMarketDataWithMetaDataResponse } from './listComplexMarketDataWithMetaDataResponse';
import { LoanPeriod } from './loanPeriod';
import { LusidInstrument } from './lusidInstrument';
import { LusidProblemDetails } from './lusidProblemDetails';
import { LusidTradeTicket } from './lusidTradeTicket';
import { LusidUniqueId } from './lusidUniqueId';
import { LusidValidationProblemDetails } from './lusidValidationProblemDetails';
import { MappedString } from './mappedString';
import { Mapping } from './mapping';
import { MappingRule } from './mappingRule';
import { MarketContext } from './marketContext';
import { MarketContextSuppliers } from './marketContextSuppliers';
import { MarketDataKeyRule } from './marketDataKeyRule';
import { MarketDataOptions } from './marketDataOptions';
import { MarketDataOptionsType } from './marketDataOptionsType';
import { MarketDataOverrides } from './marketDataOverrides';
import { MarketDataSpecificRule } from './marketDataSpecificRule';
import { MarketDataType } from './marketDataType';
import { MarketObservableType } from './marketObservableType';
import { MarketOptions } from './marketOptions';
import { MarketQuote } from './marketQuote';
import { MatchCriterion } from './matchCriterion';
import { MetricValue } from './metricValue';
import { ModelOptions } from './modelOptions';
import { ModelOptionsType } from './modelOptionsType';
import { ModelSelection } from './modelSelection';
import { MovementType } from './movementType';
import { NextValueInSequenceResponse } from './nextValueInSequenceResponse';
import { NumericComparisonType } from './numericComparisonType';
import { OpaqueDependency } from './opaqueDependency';
import { OpaqueDependencyAllOf } from './opaqueDependencyAllOf';
import { OpaqueMarketData } from './opaqueMarketData';
import { OpaqueMarketDataAllOf } from './opaqueMarketDataAllOf';
import { OpaqueModelOptions } from './opaqueModelOptions';
import { OpaqueModelOptionsAllOf } from './opaqueModelOptionsAllOf';
import { OpenEvent } from './openEvent';
import { OpenEventAllOf } from './openEventAllOf';
import { OperandType } from './operandType';
import { Operation } from './operation';
import { OperationType } from './operationType';
import { Operator } from './operator';
import { OptionEntry } from './optionEntry';
import { OptionalitySchedule } from './optionalitySchedule';
import { OptionalityScheduleAllOf } from './optionalityScheduleAllOf';
import { Order } from './order';
import { OrderBySpec } from './orderBySpec';
import { OrderGraphBlock } from './orderGraphBlock';
import { OrderGraphBlockAllocationDetail } from './orderGraphBlockAllocationDetail';
import { OrderGraphBlockAllocationSynopsis } from './orderGraphBlockAllocationSynopsis';
import { OrderGraphBlockExecutionDetail } from './orderGraphBlockExecutionDetail';
import { OrderGraphBlockExecutionSynopsis } from './orderGraphBlockExecutionSynopsis';
import { OrderGraphBlockOrderDetail } from './orderGraphBlockOrderDetail';
import { OrderGraphBlockOrderSynopsis } from './orderGraphBlockOrderSynopsis';
import { OrderGraphBlockPlacementDetail } from './orderGraphBlockPlacementDetail';
import { OrderGraphBlockPlacementSynopsis } from './orderGraphBlockPlacementSynopsis';
import { OrderGraphPlacement } from './orderGraphPlacement';
import { OrderGraphPlacementAllocationDetail } from './orderGraphPlacementAllocationDetail';
import { OrderGraphPlacementAllocationSynopsis } from './orderGraphPlacementAllocationSynopsis';
import { OrderGraphPlacementChildPlacementDetail } from './orderGraphPlacementChildPlacementDetail';
import { OrderGraphPlacementExecutionDetail } from './orderGraphPlacementExecutionDetail';
import { OrderGraphPlacementExecutionSynopsis } from './orderGraphPlacementExecutionSynopsis';
import { OrderGraphPlacementOrderDetail } from './orderGraphPlacementOrderDetail';
import { OrderGraphPlacementOrderSynopsis } from './orderGraphPlacementOrderSynopsis';
import { OrderGraphPlacementPlacementSynopsis } from './orderGraphPlacementPlacementSynopsis';
import { OrderInstruction } from './orderInstruction';
import { OrderInstructionRequest } from './orderInstructionRequest';
import { OrderInstructionSetRequest } from './orderInstructionSetRequest';
import { OrderRequest } from './orderRequest';
import { OrderSetRequest } from './orderSetRequest';
import { OtcConfirmation } from './otcConfirmation';
import { OutputTransaction } from './outputTransaction';
import { OutputTransition } from './outputTransition';
import { Package } from './package';
import { PackageRequest } from './packageRequest';
import { PackageSetRequest } from './packageSetRequest';
import { PagedResourceListOfAbor } from './pagedResourceListOfAbor';
import { PagedResourceListOfAborConfiguration } from './pagedResourceListOfAborConfiguration';
import { PagedResourceListOfAccount } from './pagedResourceListOfAccount';
import { PagedResourceListOfAddressKeyDefinition } from './pagedResourceListOfAddressKeyDefinition';
import { PagedResourceListOfAllocation } from './pagedResourceListOfAllocation';
import { PagedResourceListOfBlock } from './pagedResourceListOfBlock';
import { PagedResourceListOfCalendar } from './pagedResourceListOfCalendar';
import { PagedResourceListOfChartOfAccounts } from './pagedResourceListOfChartOfAccounts';
import { PagedResourceListOfComplianceTemplate } from './pagedResourceListOfComplianceTemplate';
import { PagedResourceListOfCorporateActionSource } from './pagedResourceListOfCorporateActionSource';
import { PagedResourceListOfCustodianAccount } from './pagedResourceListOfCustodianAccount';
import { PagedResourceListOfCustomEntityDefinition } from './pagedResourceListOfCustomEntityDefinition';
import { PagedResourceListOfCustomEntityResponse } from './pagedResourceListOfCustomEntityResponse';
import { PagedResourceListOfCutLabelDefinition } from './pagedResourceListOfCutLabelDefinition';
import { PagedResourceListOfDataTypeSummary } from './pagedResourceListOfDataTypeSummary';
import { PagedResourceListOfExecution } from './pagedResourceListOfExecution';
import { PagedResourceListOfInstrument } from './pagedResourceListOfInstrument';
import { PagedResourceListOfInstrumentEventHolder } from './pagedResourceListOfInstrumentEventHolder';
import { PagedResourceListOfLegalEntity } from './pagedResourceListOfLegalEntity';
import { PagedResourceListOfOrder } from './pagedResourceListOfOrder';
import { PagedResourceListOfOrderGraphBlock } from './pagedResourceListOfOrderGraphBlock';
import { PagedResourceListOfOrderGraphPlacement } from './pagedResourceListOfOrderGraphPlacement';
import { PagedResourceListOfOrderInstruction } from './pagedResourceListOfOrderInstruction';
import { PagedResourceListOfPackage } from './pagedResourceListOfPackage';
import { PagedResourceListOfParticipation } from './pagedResourceListOfParticipation';
import { PagedResourceListOfPerson } from './pagedResourceListOfPerson';
import { PagedResourceListOfPlacement } from './pagedResourceListOfPlacement';
import { PagedResourceListOfPortfolioGroupSearchResult } from './pagedResourceListOfPortfolioGroupSearchResult';
import { PagedResourceListOfPortfolioSearchResult } from './pagedResourceListOfPortfolioSearchResult';
import { PagedResourceListOfPropertyDefinitionSearchResult } from './pagedResourceListOfPropertyDefinitionSearchResult';
import { PagedResourceListOfReconciliation } from './pagedResourceListOfReconciliation';
import { PagedResourceListOfReconciliationRun } from './pagedResourceListOfReconciliationRun';
import { PagedResourceListOfReconciliationRunBreak } from './pagedResourceListOfReconciliationRunBreak';
import { PagedResourceListOfRelationshipDefinition } from './pagedResourceListOfRelationshipDefinition';
import { PagedResourceListOfSequenceDefinition } from './pagedResourceListOfSequenceDefinition';
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
import { PortfolioGroupIdList } from './portfolioGroupIdList';
import { PortfolioGroupProperties } from './portfolioGroupProperties';
import { PortfolioGroupSearchResult } from './portfolioGroupSearchResult';
import { PortfolioHolding } from './portfolioHolding';
import { PortfolioIdList } from './portfolioIdList';
import { PortfolioProperties } from './portfolioProperties';
import { PortfolioReconciliationRequest } from './portfolioReconciliationRequest';
import { PortfolioResultDataKeyRule } from './portfolioResultDataKeyRule';
import { PortfolioResultDataKeyRuleAllOf } from './portfolioResultDataKeyRuleAllOf';
import { PortfolioSearchResult } from './portfolioSearchResult';
import { PortfolioTradeTicket } from './portfolioTradeTicket';
import { PortfolioType } from './portfolioType';
import { PortfoliosReconciliationRequest } from './portfoliosReconciliationRequest';
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
import { PropertyValueEquals } from './propertyValueEquals';
import { PropertyValueEqualsAllOf } from './propertyValueEqualsAllOf';
import { PropertyValueIn } from './propertyValueIn';
import { PropertyValueInAllOf } from './propertyValueInAllOf';
import { QueryBucketedCashFlowsRequest } from './queryBucketedCashFlowsRequest';
import { QueryCashFlowsRequest } from './queryCashFlowsRequest';
import { QueryInstrumentEventsRequest } from './queryInstrumentEventsRequest';
import { QueryTradeTicketsRequest } from './queryTradeTicketsRequest';
import { Quote } from './quote';
import { QuoteAccessMetadataRule } from './quoteAccessMetadataRule';
import { QuoteAccessMetadataRuleId } from './quoteAccessMetadataRuleId';
import { QuoteDependency } from './quoteDependency';
import { QuoteDependencyAllOf } from './quoteDependencyAllOf';
import { QuoteId } from './quoteId';
import { QuoteInstrumentIdType } from './quoteInstrumentIdType';
import { QuoteSeriesId } from './quoteSeriesId';
import { QuoteType } from './quoteType';
import { RawVendorEvent } from './rawVendorEvent';
import { RawVendorEventAllOf } from './rawVendorEventAllOf';
import { RealisedGainLoss } from './realisedGainLoss';
import { ReconcileDateTimeRule } from './reconcileDateTimeRule';
import { ReconcileDateTimeRuleAllOf } from './reconcileDateTimeRuleAllOf';
import { ReconcileNumericRule } from './reconcileNumericRule';
import { ReconcileNumericRuleAllOf } from './reconcileNumericRuleAllOf';
import { ReconcileStringRule } from './reconcileStringRule';
import { ReconcileStringRuleAllOf } from './reconcileStringRuleAllOf';
import { ReconciledTransaction } from './reconciledTransaction';
import { Reconciliation } from './reconciliation';
import { ReconciliationBreak } from './reconciliationBreak';
import { ReconciliationBreakId } from './reconciliationBreakId';
import { ReconciliationConfiguration } from './reconciliationConfiguration';
import { ReconciliationId } from './reconciliationId';
import { ReconciliationLeftRightAddressKeyPair } from './reconciliationLeftRightAddressKeyPair';
import { ReconciliationLine } from './reconciliationLine';
import { ReconciliationRequest } from './reconciliationRequest';
import { ReconciliationResponse } from './reconciliationResponse';
import { ReconciliationRule } from './reconciliationRule';
import { ReconciliationRuleType } from './reconciliationRuleType';
import { ReconciliationRun } from './reconciliationRun';
import { ReconciliationRunBreak } from './reconciliationRunBreak';
import { ReconciliationRunId } from './reconciliationRunId';
import { ReconciliationSideConfiguration } from './reconciliationSideConfiguration';
import { ReconciliationTransactions } from './reconciliationTransactions';
import { ReferenceData } from './referenceData';
import { ReferenceInstrument } from './referenceInstrument';
import { ReferenceInstrumentAllOf } from './referenceInstrumentAllOf';
import { ReferenceListType } from './referenceListType';
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
import { ResetEvent } from './resetEvent';
import { ResetEventAllOf } from './resetEventAllOf';
import { ResourceId } from './resourceId';
import { ResourceListOfAccessControlledResource } from './resourceListOfAccessControlledResource';
import { ResourceListOfAccessMetadataValueOf } from './resourceListOfAccessMetadataValueOf';
import { ResourceListOfAggregatedReturn } from './resourceListOfAggregatedReturn';
import { ResourceListOfAggregationQuery } from './resourceListOfAggregationQuery';
import { ResourceListOfAllocation } from './resourceListOfAllocation';
import { ResourceListOfBlock } from './resourceListOfBlock';
import { ResourceListOfCalendarDate } from './resourceListOfCalendarDate';
import { ResourceListOfChange } from './resourceListOfChange';
import { ResourceListOfChangeHistory } from './resourceListOfChangeHistory';
import { ResourceListOfComplianceBreachedOrderInfo } from './resourceListOfComplianceBreachedOrderInfo';
import { ResourceListOfComplianceRule } from './resourceListOfComplianceRule';
import { ResourceListOfComplianceRuleResult } from './resourceListOfComplianceRuleResult';
import { ResourceListOfComplianceRunInfo } from './resourceListOfComplianceRunInfo';
import { ResourceListOfConstituentsAdjustmentHeader } from './resourceListOfConstituentsAdjustmentHeader';
import { ResourceListOfCorporateAction } from './resourceListOfCorporateAction';
import { ResourceListOfDataType } from './resourceListOfDataType';
import { ResourceListOfExecution } from './resourceListOfExecution';
import { ResourceListOfFeeRule } from './resourceListOfFeeRule';
import { ResourceListOfGetCdsFlowConventionsResponse } from './resourceListOfGetCdsFlowConventionsResponse';
import { ResourceListOfGetCounterpartyAgreementResponse } from './resourceListOfGetCounterpartyAgreementResponse';
import { ResourceListOfGetCreditSupportAnnexResponse } from './resourceListOfGetCreditSupportAnnexResponse';
import { ResourceListOfGetFlowConventionsResponse } from './resourceListOfGetFlowConventionsResponse';
import { ResourceListOfGetIndexConventionResponse } from './resourceListOfGetIndexConventionResponse';
import { ResourceListOfGetRecipeResponse } from './resourceListOfGetRecipeResponse';
import { ResourceListOfHoldingsAdjustmentHeader } from './resourceListOfHoldingsAdjustmentHeader';
import { ResourceListOfIUnitDefinitionDto } from './resourceListOfIUnitDefinitionDto';
import { ResourceListOfInstrumentCashFlow } from './resourceListOfInstrumentCashFlow';
import { ResourceListOfInstrumentEventHolder } from './resourceListOfInstrumentEventHolder';
import { ResourceListOfInstrumentIdTypeDescriptor } from './resourceListOfInstrumentIdTypeDescriptor';
import { ResourceListOfLegalEntity } from './resourceListOfLegalEntity';
import { ResourceListOfListComplexMarketDataWithMetaDataResponse } from './resourceListOfListComplexMarketDataWithMetaDataResponse';
import { ResourceListOfMapping } from './resourceListOfMapping';
import { ResourceListOfOrder } from './resourceListOfOrder';
import { ResourceListOfOrderInstruction } from './resourceListOfOrderInstruction';
import { ResourceListOfPackage } from './resourceListOfPackage';
import { ResourceListOfParticipation } from './resourceListOfParticipation';
import { ResourceListOfPerformanceReturn } from './resourceListOfPerformanceReturn';
import { ResourceListOfPerson } from './resourceListOfPerson';
import { ResourceListOfPlacement } from './resourceListOfPlacement';
import { ResourceListOfPortfolio } from './resourceListOfPortfolio';
import { ResourceListOfPortfolioCashFlow } from './resourceListOfPortfolioCashFlow';
import { ResourceListOfPortfolioCashLadder } from './resourceListOfPortfolioCashLadder';
import { ResourceListOfPortfolioGroup } from './resourceListOfPortfolioGroup';
import { ResourceListOfPortfolioTradeTicket } from './resourceListOfPortfolioTradeTicket';
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
import { ResourceListOfSideDefinition } from './resourceListOfSideDefinition';
import { ResourceListOfString } from './resourceListOfString';
import { ResourceListOfTaxRuleSet } from './resourceListOfTaxRuleSet';
import { ResourceListOfTransaction } from './resourceListOfTransaction';
import { ResourceListOfTransactionType } from './resourceListOfTransactionType';
import { ResourceListOfValueType } from './resourceListOfValueType';
import { ResponseMetaData } from './responseMetaData';
import { ResultDataKeyRule } from './resultDataKeyRule';
import { ResultDataKeyRuleAllOf } from './resultDataKeyRuleAllOf';
import { ResultDataSchema } from './resultDataSchema';
import { ResultKeyRule } from './resultKeyRule';
import { ResultKeyRuleType } from './resultKeyRuleType';
import { ResultValue } from './resultValue';
import { ResultValue0D } from './resultValue0D';
import { ResultValue0DAllOf } from './resultValue0DAllOf';
import { ResultValueBool } from './resultValueBool';
import { ResultValueBoolAllOf } from './resultValueBoolAllOf';
import { ResultValueCurrency } from './resultValueCurrency';
import { ResultValueCurrencyAllOf } from './resultValueCurrencyAllOf';
import { ResultValueDateTimeOffset } from './resultValueDateTimeOffset';
import { ResultValueDateTimeOffsetAllOf } from './resultValueDateTimeOffsetAllOf';
import { ResultValueDecimal } from './resultValueDecimal';
import { ResultValueDecimalAllOf } from './resultValueDecimalAllOf';
import { ResultValueDictionary } from './resultValueDictionary';
import { ResultValueDictionaryAllOf } from './resultValueDictionaryAllOf';
import { ResultValueInt } from './resultValueInt';
import { ResultValueIntAllOf } from './resultValueIntAllOf';
import { ResultValueString } from './resultValueString';
import { ResultValueStringAllOf } from './resultValueStringAllOf';
import { ResultValueType } from './resultValueType';
import { RoundingConvention } from './roundingConvention';
import { ScalingMethodology } from './scalingMethodology';
import { Schedule } from './schedule';
import { ScheduleType } from './scheduleType';
import { Schema } from './schema';
import { ScopeDefinition } from './scopeDefinition';
import { SequenceDefinition } from './sequenceDefinition';
import { SetLegalEntityIdentifiersRequest } from './setLegalEntityIdentifiersRequest';
import { SetLegalEntityPropertiesRequest } from './setLegalEntityPropertiesRequest';
import { SetPersonIdentifiersRequest } from './setPersonIdentifiersRequest';
import { SetPersonPropertiesRequest } from './setPersonPropertiesRequest';
import { SetTransactionConfigurationAlias } from './setTransactionConfigurationAlias';
import { SetTransactionConfigurationSourceRequest } from './setTransactionConfigurationSourceRequest';
import { SideConfigurationData } from './sideConfigurationData';
import { SideConfigurationDataRequest } from './sideConfigurationDataRequest';
import { SideDefinition } from './sideDefinition';
import { SideDefinitionRequest } from './sideDefinitionRequest';
import { SidesDefinitionRequest } from './sidesDefinitionRequest';
import { SimpleCashFlowLoan } from './simpleCashFlowLoan';
import { SimpleCashFlowLoanAllOf } from './simpleCashFlowLoanAllOf';
import { SimpleInstrument } from './simpleInstrument';
import { SimpleInstrumentAllOf } from './simpleInstrumentAllOf';
import { SortOrder } from './sortOrder';
import { StepSchedule } from './stepSchedule';
import { StepScheduleAllOf } from './stepScheduleAllOf';
import { StockSplitEvent } from './stockSplitEvent';
import { StockSplitEventAllOf } from './stockSplitEventAllOf';
import { Stream } from './stream';
import { StringComparisonType } from './stringComparisonType';
import { StringList } from './stringList';
import { StructuredResultData } from './structuredResultData';
import { StructuredResultDataId } from './structuredResultDataId';
import { SubHoldingKeyValueEquals } from './subHoldingKeyValueEquals';
import { SubHoldingKeyValueEqualsAllOf } from './subHoldingKeyValueEqualsAllOf';
import { TargetTaxLot } from './targetTaxLot';
import { TargetTaxLotRequest } from './targetTaxLotRequest';
import { TaxRule } from './taxRule';
import { TaxRuleSet } from './taxRuleSet';
import { TermDeposit } from './termDeposit';
import { TermDepositAllOf } from './termDepositAllOf';
import { Touch } from './touch';
import { TradeTicket } from './tradeTicket';
import { TradeTicketType } from './tradeTicketType';
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
import { TransactionReconciliationRequest } from './transactionReconciliationRequest';
import { TransactionRequest } from './transactionRequest';
import { TransactionRoles } from './transactionRoles';
import { TransactionSetConfigurationData } from './transactionSetConfigurationData';
import { TransactionSetConfigurationDataRequest } from './transactionSetConfigurationDataRequest';
import { TransactionStatus } from './transactionStatus';
import { TransactionType } from './transactionType';
import { TransactionTypeAlias } from './transactionTypeAlias';
import { TransactionTypeMovement } from './transactionTypeMovement';
import { TransactionTypePropertyMapping } from './transactionTypePropertyMapping';
import { TransactionTypeRequest } from './transactionTypeRequest';
import { TransactionsReconciliationsResponse } from './transactionsReconciliationsResponse';
import { TransitionEvent } from './transitionEvent';
import { TransitionEventAllOf } from './transitionEventAllOf';
import { TranslateInstrumentDefinitionsRequest } from './translateInstrumentDefinitionsRequest';
import { TranslateInstrumentDefinitionsResponse } from './translateInstrumentDefinitionsResponse';
import { TranslateTradeTicketRequest } from './translateTradeTicketRequest';
import { TranslateTradeTicketsResponse } from './translateTradeTicketsResponse';
import { TriggerEvent } from './triggerEvent';
import { TriggerEventAllOf } from './triggerEventAllOf';
import { TypedResourceId } from './typedResourceId';
import { UnitSchema } from './unitSchema';
import { UnmatchedHoldingMethod } from './unmatchedHoldingMethod';
import { UpdateCalendarRequest } from './updateCalendarRequest';
import { UpdateCustomEntityDefinitionRequest } from './updateCustomEntityDefinitionRequest';
import { UpdateCutLabelDefinitionRequest } from './updateCutLabelDefinitionRequest';
import { UpdateDataTypeRequest } from './updateDataTypeRequest';
import { UpdateDerivedPropertyDefinitionRequest } from './updateDerivedPropertyDefinitionRequest';
import { UpdateInstrumentIdentifierRequest } from './updateInstrumentIdentifierRequest';
import { UpdatePortfolioGroupRequest } from './updatePortfolioGroupRequest';
import { UpdatePortfolioRequest } from './updatePortfolioRequest';
import { UpdatePropertyDefinitionRequest } from './updatePropertyDefinitionRequest';
import { UpdateReconciliationRequest } from './updateReconciliationRequest';
import { UpdateRelationshipDefinitionRequest } from './updateRelationshipDefinitionRequest';
import { UpdateTaxRuleSetRequest } from './updateTaxRuleSetRequest';
import { UpdateUnitRequest } from './updateUnitRequest';
import { UpsertCdsFlowConventionsRequest } from './upsertCdsFlowConventionsRequest';
import { UpsertComplexMarketDataRequest } from './upsertComplexMarketDataRequest';
import { UpsertCorporateActionRequest } from './upsertCorporateActionRequest';
import { UpsertCorporateActionsResponse } from './upsertCorporateActionsResponse';
import { UpsertCounterpartyAgreementRequest } from './upsertCounterpartyAgreementRequest';
import { UpsertCreditSupportAnnexRequest } from './upsertCreditSupportAnnexRequest';
import { UpsertCustomEntitiesResponse } from './upsertCustomEntitiesResponse';
import { UpsertCustomEntityAccessMetadataRequest } from './upsertCustomEntityAccessMetadataRequest';
import { UpsertFlowConventionsRequest } from './upsertFlowConventionsRequest';
import { UpsertIndexConventionRequest } from './upsertIndexConventionRequest';
import { UpsertInstrumentEventRequest } from './upsertInstrumentEventRequest';
import { UpsertInstrumentEventsResponse } from './upsertInstrumentEventsResponse';
import { UpsertInstrumentPropertiesResponse } from './upsertInstrumentPropertiesResponse';
import { UpsertInstrumentPropertyRequest } from './upsertInstrumentPropertyRequest';
import { UpsertInstrumentsResponse } from './upsertInstrumentsResponse';
import { UpsertLegalEntitiesResponse } from './upsertLegalEntitiesResponse';
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
import { UpsertReconciliationBreakRequest } from './upsertReconciliationBreakRequest';
import { UpsertReconciliationRunRequest } from './upsertReconciliationRunRequest';
import { UpsertReferencePortfolioConstituentsRequest } from './upsertReferencePortfolioConstituentsRequest';
import { UpsertReferencePortfolioConstituentsResponse } from './upsertReferencePortfolioConstituentsResponse';
import { UpsertResultValuesDataRequest } from './upsertResultValuesDataRequest';
import { UpsertReturnsResponse } from './upsertReturnsResponse';
import { UpsertSingleStructuredDataResponse } from './upsertSingleStructuredDataResponse';
import { UpsertStructuredDataResponse } from './upsertStructuredDataResponse';
import { UpsertStructuredResultDataRequest } from './upsertStructuredResultDataRequest';
import { UpsertTransactionPropertiesResponse } from './upsertTransactionPropertiesResponse';
import { User } from './user';
import { ValuationRequest } from './valuationRequest';
import { ValuationSchedule } from './valuationSchedule';
import { ValuationsReconciliationRequest } from './valuationsReconciliationRequest';
import { ValueType } from './valueType';
import { VendorDependency } from './vendorDependency';
import { VendorDependencyAllOf } from './vendorDependencyAllOf';
import { VendorLibrary } from './vendorLibrary';
import { VendorModelRule } from './vendorModelRule';
import { Version } from './version';
import { VersionSummaryDto } from './versionSummaryDto';
import { VersionedResourceListOfA2BDataRecord } from './versionedResourceListOfA2BDataRecord';
import { VersionedResourceListOfA2BMovementRecord } from './versionedResourceListOfA2BMovementRecord';
import { VersionedResourceListOfJELines } from './versionedResourceListOfJELines';
import { VersionedResourceListOfOutputTransaction } from './versionedResourceListOfOutputTransaction';
import { VersionedResourceListOfPortfolioHolding } from './versionedResourceListOfPortfolioHolding';
import { VersionedResourceListOfTransaction } from './versionedResourceListOfTransaction';
import { VersionedResourceListWithWarningsOfPortfolioHolding } from './versionedResourceListWithWarningsOfPortfolioHolding';
import { VirtualDocument } from './virtualDocument';
import { VirtualDocumentRow } from './virtualDocumentRow';
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
        "AccessMetadataOperation.OpEnum": AccessMetadataOperation.OpEnum,
        "Account.StatusEnum": Account.StatusEnum,
        "AccountingMethod": AccountingMethod,
        "AddressDefinition.TypeEnum": AddressDefinition.TypeEnum,
        "AddressKeyList.ReferenceListTypeEnum": AddressKeyList.ReferenceListTypeEnum,
        "AggregateSpec.OpEnum": AggregateSpec.OpEnum,
        "AggregationOp": AggregationOp,
        "AggregationQuery.TypeEnum": AggregationQuery.TypeEnum,
        "AggregationQuery.FlattenedTypeEnum": AggregationQuery.FlattenedTypeEnum,
        "AggregationType": AggregationType,
        "AmortisationEvent.InstrumentEventTypeEnum": AmortisationEvent.InstrumentEventTypeEnum,
        "AmortisationEventAllOf.InstrumentEventTypeEnum": AmortisationEventAllOf.InstrumentEventTypeEnum,
        "AssetClass": AssetClass,
        "Basket.InstrumentTypeEnum": Basket.InstrumentTypeEnum,
        "BasketAllOf.InstrumentTypeEnum": BasketAllOf.InstrumentTypeEnum,
        "Bond.InstrumentTypeEnum": Bond.InstrumentTypeEnum,
        "BondAllOf.InstrumentTypeEnum": BondAllOf.InstrumentTypeEnum,
        "BondDefaultEvent.InstrumentEventTypeEnum": BondDefaultEvent.InstrumentEventTypeEnum,
        "BondDefaultEventAllOf.InstrumentEventTypeEnum": BondDefaultEventAllOf.InstrumentEventTypeEnum,
        "CapFloor.InstrumentTypeEnum": CapFloor.InstrumentTypeEnum,
        "CapFloorAllOf.InstrumentTypeEnum": CapFloorAllOf.InstrumentTypeEnum,
        "CashDependency.DependencyTypeEnum": CashDependency.DependencyTypeEnum,
        "CashDependencyAllOf.DependencyTypeEnum": CashDependencyAllOf.DependencyTypeEnum,
        "CashDividendEvent.InstrumentEventTypeEnum": CashDividendEvent.InstrumentEventTypeEnum,
        "CashDividendEventAllOf.InstrumentEventTypeEnum": CashDividendEventAllOf.InstrumentEventTypeEnum,
        "CashFlowEvent.InstrumentEventTypeEnum": CashFlowEvent.InstrumentEventTypeEnum,
        "CashFlowEventAllOf.InstrumentEventTypeEnum": CashFlowEventAllOf.InstrumentEventTypeEnum,
        "CashFlowValue.ResultValueTypeEnum": CashFlowValue.ResultValueTypeEnum,
        "CashFlowValueAllOf.ResultValueTypeEnum": CashFlowValueAllOf.ResultValueTypeEnum,
        "CashFlowValueSet.ResultValueTypeEnum": CashFlowValueSet.ResultValueTypeEnum,
        "CashFlowValueSetAllOf.ResultValueTypeEnum": CashFlowValueSetAllOf.ResultValueTypeEnum,
        "CashPerpetual.InstrumentTypeEnum": CashPerpetual.InstrumentTypeEnum,
        "CashPerpetualAllOf.InstrumentTypeEnum": CashPerpetualAllOf.InstrumentTypeEnum,
        "CdsIndex.InstrumentTypeEnum": CdsIndex.InstrumentTypeEnum,
        "CdsIndexAllOf.InstrumentTypeEnum": CdsIndexAllOf.InstrumentTypeEnum,
        "ChangeHistory.ActionEnum": ChangeHistory.ActionEnum,
        "ChangeHistoryAction": ChangeHistoryAction,
        "CloseEvent.InstrumentEventTypeEnum": CloseEvent.InstrumentEventTypeEnum,
        "CloseEventAllOf.InstrumentEventTypeEnum": CloseEventAllOf.InstrumentEventTypeEnum,
        "CompletePortfolio.TypeEnum": CompletePortfolio.TypeEnum,
        "ComplexBond.InstrumentTypeEnum": ComplexBond.InstrumentTypeEnum,
        "ComplexBondAllOf.InstrumentTypeEnum": ComplexBondAllOf.InstrumentTypeEnum,
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
        "CreditSpreadCurveData.MarketDataTypeEnum": CreditSpreadCurveData.MarketDataTypeEnum,
        "CreditSpreadCurveDataAllOf.MarketDataTypeEnum": CreditSpreadCurveDataAllOf.MarketDataTypeEnum,
        "CriterionType": CriterionType,
        "CurveOptions.MarketDataOptionsTypeEnum": CurveOptions.MarketDataOptionsTypeEnum,
        "CurveOptionsAllOf.MarketDataOptionsTypeEnum": CurveOptionsAllOf.MarketDataOptionsTypeEnum,
        "DataType.TypeValueRangeEnum": DataType.TypeValueRangeEnum,
        "DataType.ValueTypeEnum": DataType.ValueTypeEnum,
        "DataType.UnitSchemaEnum": DataType.UnitSchemaEnum,
        "DataTypeSummary.TypeValueRangeEnum": DataTypeSummary.TypeValueRangeEnum,
        "DataTypeSummary.ValueTypeEnum": DataTypeSummary.ValueTypeEnum,
        "DataTypeSummary.UnitSchemaEnum": DataTypeSummary.UnitSchemaEnum,
        "DataTypeValueRange": DataTypeValueRange,
        "DateTimeComparisonType": DateTimeComparisonType,
        "DayOfWeek": DayOfWeek,
        "DecimalList.ReferenceListTypeEnum": DecimalList.ReferenceListTypeEnum,
        "DeleteModes": DeleteModes,
        "DiscountFactorCurveData.MarketDataTypeEnum": DiscountFactorCurveData.MarketDataTypeEnum,
        "DiscountFactorCurveDataAllOf.MarketDataTypeEnum": DiscountFactorCurveDataAllOf.MarketDataTypeEnum,
        "DiscountingDependency.DependencyTypeEnum": DiscountingDependency.DependencyTypeEnum,
        "DiscountingDependencyAllOf.DependencyTypeEnum": DiscountingDependencyAllOf.DependencyTypeEnum,
        "DiscountingMethod": DiscountingMethod,
        "EconomicDependency.DependencyTypeEnum": EconomicDependency.DependencyTypeEnum,
        "EconomicDependencyType": EconomicDependencyType,
        "EmptyModelOptions.ModelOptionsTypeEnum": EmptyModelOptions.ModelOptionsTypeEnum,
        "EmptyModelOptionsAllOf.ModelOptionsTypeEnum": EmptyModelOptionsAllOf.ModelOptionsTypeEnum,
        "Equity.InstrumentTypeEnum": Equity.InstrumentTypeEnum,
        "EquityAllOf.InstrumentTypeEnum": EquityAllOf.InstrumentTypeEnum,
        "EquityCurveByPricesData.MarketDataTypeEnum": EquityCurveByPricesData.MarketDataTypeEnum,
        "EquityCurveByPricesDataAllOf.MarketDataTypeEnum": EquityCurveByPricesDataAllOf.MarketDataTypeEnum,
        "EquityCurveDependency.DependencyTypeEnum": EquityCurveDependency.DependencyTypeEnum,
        "EquityCurveDependencyAllOf.DependencyTypeEnum": EquityCurveDependencyAllOf.DependencyTypeEnum,
        "EquityModelOptions.ModelOptionsTypeEnum": EquityModelOptions.ModelOptionsTypeEnum,
        "EquityModelOptionsAllOf.ModelOptionsTypeEnum": EquityModelOptionsAllOf.ModelOptionsTypeEnum,
        "EquityOption.InstrumentTypeEnum": EquityOption.InstrumentTypeEnum,
        "EquityOptionAllOf.InstrumentTypeEnum": EquityOptionAllOf.InstrumentTypeEnum,
        "EquitySwap.InstrumentTypeEnum": EquitySwap.InstrumentTypeEnum,
        "EquitySwapAllOf.InstrumentTypeEnum": EquitySwapAllOf.InstrumentTypeEnum,
        "EquityVolDependency.DependencyTypeEnum": EquityVolDependency.DependencyTypeEnum,
        "EquityVolDependencyAllOf.DependencyTypeEnum": EquityVolDependencyAllOf.DependencyTypeEnum,
        "EquityVolSurfaceData.MarketDataTypeEnum": EquityVolSurfaceData.MarketDataTypeEnum,
        "EquityVolSurfaceDataAllOf.MarketDataTypeEnum": EquityVolSurfaceDataAllOf.MarketDataTypeEnum,
        "ExchangeTradedOption.InstrumentTypeEnum": ExchangeTradedOption.InstrumentTypeEnum,
        "ExchangeTradedOptionAllOf.InstrumentTypeEnum": ExchangeTradedOptionAllOf.InstrumentTypeEnum,
        "ExerciseEvent.InstrumentEventTypeEnum": ExerciseEvent.InstrumentEventTypeEnum,
        "ExerciseEventAllOf.InstrumentEventTypeEnum": ExerciseEventAllOf.InstrumentEventTypeEnum,
        "ExoticInstrument.InstrumentTypeEnum": ExoticInstrument.InstrumentTypeEnum,
        "ExoticInstrumentAllOf.InstrumentTypeEnum": ExoticInstrumentAllOf.InstrumentTypeEnum,
        "FieldSchema.TypeEnum": FieldSchema.TypeEnum,
        "FixedLeg.InstrumentTypeEnum": FixedLeg.InstrumentTypeEnum,
        "FixedLegAllOf.InstrumentTypeEnum": FixedLegAllOf.InstrumentTypeEnum,
        "FixedSchedule.ScheduleTypeEnum": FixedSchedule.ScheduleTypeEnum,
        "FixedScheduleAllOf.ScheduleTypeEnum": FixedScheduleAllOf.ScheduleTypeEnum,
        "FloatSchedule.ScheduleTypeEnum": FloatSchedule.ScheduleTypeEnum,
        "FloatScheduleAllOf.ScheduleTypeEnum": FloatScheduleAllOf.ScheduleTypeEnum,
        "FloatingLeg.InstrumentTypeEnum": FloatingLeg.InstrumentTypeEnum,
        "FloatingLegAllOf.InstrumentTypeEnum": FloatingLegAllOf.InstrumentTypeEnum,
        "ForwardRateAgreement.InstrumentTypeEnum": ForwardRateAgreement.InstrumentTypeEnum,
        "ForwardRateAgreementAllOf.InstrumentTypeEnum": ForwardRateAgreementAllOf.InstrumentTypeEnum,
        "FundingLeg.InstrumentTypeEnum": FundingLeg.InstrumentTypeEnum,
        "FundingLegAllOf.InstrumentTypeEnum": FundingLegAllOf.InstrumentTypeEnum,
        "FundingLegOptions.ModelOptionsTypeEnum": FundingLegOptions.ModelOptionsTypeEnum,
        "FundingLegOptionsAllOf.ModelOptionsTypeEnum": FundingLegOptionsAllOf.ModelOptionsTypeEnum,
        "Future.InstrumentTypeEnum": Future.InstrumentTypeEnum,
        "FutureAllOf.InstrumentTypeEnum": FutureAllOf.InstrumentTypeEnum,
        "FxDependency.DependencyTypeEnum": FxDependency.DependencyTypeEnum,
        "FxDependencyAllOf.DependencyTypeEnum": FxDependencyAllOf.DependencyTypeEnum,
        "FxForward.InstrumentTypeEnum": FxForward.InstrumentTypeEnum,
        "FxForwardAllOf.InstrumentTypeEnum": FxForwardAllOf.InstrumentTypeEnum,
        "FxForwardCurveByQuoteReference.MarketDataTypeEnum": FxForwardCurveByQuoteReference.MarketDataTypeEnum,
        "FxForwardCurveByQuoteReferenceAllOf.MarketDataTypeEnum": FxForwardCurveByQuoteReferenceAllOf.MarketDataTypeEnum,
        "FxForwardCurveData.MarketDataTypeEnum": FxForwardCurveData.MarketDataTypeEnum,
        "FxForwardCurveDataAllOf.MarketDataTypeEnum": FxForwardCurveDataAllOf.MarketDataTypeEnum,
        "FxForwardModelOptions.ForwardRateObservableTypeEnum": FxForwardModelOptions.ForwardRateObservableTypeEnum,
        "FxForwardModelOptions.DiscountingMethodEnum": FxForwardModelOptions.DiscountingMethodEnum,
        "FxForwardModelOptions.ModelOptionsTypeEnum": FxForwardModelOptions.ModelOptionsTypeEnum,
        "FxForwardModelOptionsAllOf.ForwardRateObservableTypeEnum": FxForwardModelOptionsAllOf.ForwardRateObservableTypeEnum,
        "FxForwardModelOptionsAllOf.DiscountingMethodEnum": FxForwardModelOptionsAllOf.DiscountingMethodEnum,
        "FxForwardModelOptionsAllOf.ModelOptionsTypeEnum": FxForwardModelOptionsAllOf.ModelOptionsTypeEnum,
        "FxForwardPipsCurveData.MarketDataTypeEnum": FxForwardPipsCurveData.MarketDataTypeEnum,
        "FxForwardPipsCurveDataAllOf.MarketDataTypeEnum": FxForwardPipsCurveDataAllOf.MarketDataTypeEnum,
        "FxForwardTenorCurveData.MarketDataTypeEnum": FxForwardTenorCurveData.MarketDataTypeEnum,
        "FxForwardTenorCurveDataAllOf.MarketDataTypeEnum": FxForwardTenorCurveDataAllOf.MarketDataTypeEnum,
        "FxForwardTenorPipsCurveData.MarketDataTypeEnum": FxForwardTenorPipsCurveData.MarketDataTypeEnum,
        "FxForwardTenorPipsCurveDataAllOf.MarketDataTypeEnum": FxForwardTenorPipsCurveDataAllOf.MarketDataTypeEnum,
        "FxForwardsDependency.DependencyTypeEnum": FxForwardsDependency.DependencyTypeEnum,
        "FxForwardsDependencyAllOf.DependencyTypeEnum": FxForwardsDependencyAllOf.DependencyTypeEnum,
        "FxOption.InstrumentTypeEnum": FxOption.InstrumentTypeEnum,
        "FxOptionAllOf.InstrumentTypeEnum": FxOptionAllOf.InstrumentTypeEnum,
        "FxRateSchedule.ScheduleTypeEnum": FxRateSchedule.ScheduleTypeEnum,
        "FxRateScheduleAllOf.ScheduleTypeEnum": FxRateScheduleAllOf.ScheduleTypeEnum,
        "FxSwap.InstrumentTypeEnum": FxSwap.InstrumentTypeEnum,
        "FxSwapAllOf.InstrumentTypeEnum": FxSwapAllOf.InstrumentTypeEnum,
        "FxVolDependency.DependencyTypeEnum": FxVolDependency.DependencyTypeEnum,
        "FxVolDependencyAllOf.DependencyTypeEnum": FxVolDependencyAllOf.DependencyTypeEnum,
        "FxVolSurfaceData.MarketDataTypeEnum": FxVolSurfaceData.MarketDataTypeEnum,
        "GetReferencePortfolioConstituentsResponse.WeightTypeEnum": GetReferencePortfolioConstituentsResponse.WeightTypeEnum,
        "GetReferencePortfolioConstituentsResponse.PeriodTypeEnum": GetReferencePortfolioConstituentsResponse.PeriodTypeEnum,
        "HoldingsAdjustment.UnmatchedHoldingMethodEnum": HoldingsAdjustment.UnmatchedHoldingMethodEnum,
        "HoldingsAdjustmentHeader.UnmatchedHoldingMethodEnum": HoldingsAdjustmentHeader.UnmatchedHoldingMethodEnum,
        "IUnitDefinitionDto.SchemaEnum": IUnitDefinitionDto.SchemaEnum,
        "IndexModelOptions.PortfolioScalingEnum": IndexModelOptions.PortfolioScalingEnum,
        "IndexModelOptions.ModelOptionsTypeEnum": IndexModelOptions.ModelOptionsTypeEnum,
        "IndexModelOptionsAllOf.PortfolioScalingEnum": IndexModelOptionsAllOf.PortfolioScalingEnum,
        "IndexModelOptionsAllOf.ModelOptionsTypeEnum": IndexModelOptionsAllOf.ModelOptionsTypeEnum,
        "IndexProjectionDependency.DependencyTypeEnum": IndexProjectionDependency.DependencyTypeEnum,
        "IndexProjectionDependencyAllOf.DependencyTypeEnum": IndexProjectionDependencyAllOf.DependencyTypeEnum,
        "InflationLinkedBond.InstrumentTypeEnum": InflationLinkedBond.InstrumentTypeEnum,
        "InflationLinkedBondAllOf.InstrumentTypeEnum": InflationLinkedBondAllOf.InstrumentTypeEnum,
        "InflationSwap.InstrumentTypeEnum": InflationSwap.InstrumentTypeEnum,
        "InflationSwapAllOf.InstrumentTypeEnum": InflationSwapAllOf.InstrumentTypeEnum,
        "InformationalErrorEvent.InstrumentEventTypeEnum": InformationalErrorEvent.InstrumentEventTypeEnum,
        "InformationalErrorEventAllOf.InstrumentEventTypeEnum": InformationalErrorEventAllOf.InstrumentEventTypeEnum,
        "InformationalEvent.InstrumentEventTypeEnum": InformationalEvent.InstrumentEventTypeEnum,
        "InformationalEventAllOf.InstrumentEventTypeEnum": InformationalEventAllOf.InstrumentEventTypeEnum,
        "Instrument.StateEnum": Instrument.StateEnum,
        "Instrument.AssetClassEnum": Instrument.AssetClassEnum,
        "InstrumentDeleteModes": InstrumentDeleteModes,
        "InstrumentEvent.InstrumentEventTypeEnum": InstrumentEvent.InstrumentEventTypeEnum,
        "InstrumentEventType": InstrumentEventType,
        "InstrumentLeg.InstrumentTypeEnum": InstrumentLeg.InstrumentTypeEnum,
        "InstrumentLegAllOf.InstrumentTypeEnum": InstrumentLegAllOf.InstrumentTypeEnum,
        "InstrumentList.ReferenceListTypeEnum": InstrumentList.ReferenceListTypeEnum,
        "InstrumentType": InstrumentType,
        "InterestRateSwap.InstrumentTypeEnum": InterestRateSwap.InstrumentTypeEnum,
        "InterestRateSwapAllOf.InstrumentTypeEnum": InterestRateSwapAllOf.InstrumentTypeEnum,
        "InterestRateSwaption.InstrumentTypeEnum": InterestRateSwaption.InstrumentTypeEnum,
        "InterestRateSwaptionAllOf.InstrumentTypeEnum": InterestRateSwaptionAllOf.InstrumentTypeEnum,
        "IrVolCubeData.MarketDataTypeEnum": IrVolCubeData.MarketDataTypeEnum,
        "IrVolCubeDataAllOf.MarketDataTypeEnum": IrVolCubeDataAllOf.MarketDataTypeEnum,
        "IrVolDependency.DependencyTypeEnum": IrVolDependency.DependencyTypeEnum,
        "IrVolDependencyAllOf.DependencyTypeEnum": IrVolDependencyAllOf.DependencyTypeEnum,
        "LifeCycleEventValue.ResultValueTypeEnum": LifeCycleEventValue.ResultValueTypeEnum,
        "LifeCycleEventValueAllOf.ResultValueTypeEnum": LifeCycleEventValueAllOf.ResultValueTypeEnum,
        "LusidInstrument.InstrumentTypeEnum": LusidInstrument.InstrumentTypeEnum,
        "LusidTradeTicket.TradeTicketTypeEnum": LusidTradeTicket.TradeTicketTypeEnum,
        "MarketDataKeyRule.QuoteTypeEnum": MarketDataKeyRule.QuoteTypeEnum,
        "MarketDataOptions.MarketDataOptionsTypeEnum": MarketDataOptions.MarketDataOptionsTypeEnum,
        "MarketDataOptionsType": MarketDataOptionsType,
        "MarketDataSpecificRule.QuoteTypeEnum": MarketDataSpecificRule.QuoteTypeEnum,
        "MarketDataType": MarketDataType,
        "MarketObservableType": MarketObservableType,
        "MarketQuote.QuoteTypeEnum": MarketQuote.QuoteTypeEnum,
        "MatchCriterion.CriterionTypeEnum": MatchCriterion.CriterionTypeEnum,
        "ModelOptions.ModelOptionsTypeEnum": ModelOptions.ModelOptionsTypeEnum,
        "ModelOptionsType": ModelOptionsType,
        "ModelSelection.LibraryEnum": ModelSelection.LibraryEnum,
        "ModelSelection.ModelEnum": ModelSelection.ModelEnum,
        "MovementType": MovementType,
        "NumericComparisonType": NumericComparisonType,
        "OpaqueDependency.DependencyTypeEnum": OpaqueDependency.DependencyTypeEnum,
        "OpaqueDependencyAllOf.DependencyTypeEnum": OpaqueDependencyAllOf.DependencyTypeEnum,
        "OpaqueMarketData.MarketDataTypeEnum": OpaqueMarketData.MarketDataTypeEnum,
        "OpaqueMarketDataAllOf.MarketDataTypeEnum": OpaqueMarketDataAllOf.MarketDataTypeEnum,
        "OpaqueModelOptions.ModelOptionsTypeEnum": OpaqueModelOptions.ModelOptionsTypeEnum,
        "OpaqueModelOptionsAllOf.ModelOptionsTypeEnum": OpaqueModelOptionsAllOf.ModelOptionsTypeEnum,
        "OpenEvent.InstrumentEventTypeEnum": OpenEvent.InstrumentEventTypeEnum,
        "OpenEventAllOf.InstrumentEventTypeEnum": OpenEventAllOf.InstrumentEventTypeEnum,
        "OperandType": OperandType,
        "OperationType": OperationType,
        "Operator": Operator,
        "OptionalitySchedule.ScheduleTypeEnum": OptionalitySchedule.ScheduleTypeEnum,
        "OptionalityScheduleAllOf.ScheduleTypeEnum": OptionalityScheduleAllOf.ScheduleTypeEnum,
        "OrderBySpec.SortOrderEnum": OrderBySpec.SortOrderEnum,
        "OutputTransaction.TransactionStatusEnum": OutputTransaction.TransactionStatusEnum,
        "PeriodType": PeriodType,
        "PerpetualEntityState": PerpetualEntityState,
        "Portfolio.TypeEnum": Portfolio.TypeEnum,
        "Portfolio.AccountingMethodEnum": Portfolio.AccountingMethodEnum,
        "PortfolioDetails.AccountingMethodEnum": PortfolioDetails.AccountingMethodEnum,
        "PortfolioGroupIdList.ReferenceListTypeEnum": PortfolioGroupIdList.ReferenceListTypeEnum,
        "PortfolioIdList.ReferenceListTypeEnum": PortfolioIdList.ReferenceListTypeEnum,
        "PortfolioResultDataKeyRule.ResultKeyRuleTypeEnum": PortfolioResultDataKeyRule.ResultKeyRuleTypeEnum,
        "PortfolioResultDataKeyRuleAllOf.ResultKeyRuleTypeEnum": PortfolioResultDataKeyRuleAllOf.ResultKeyRuleTypeEnum,
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
        "PropertyValueEquals.CriterionTypeEnum": PropertyValueEquals.CriterionTypeEnum,
        "PropertyValueEqualsAllOf.CriterionTypeEnum": PropertyValueEqualsAllOf.CriterionTypeEnum,
        "PropertyValueIn.CriterionTypeEnum": PropertyValueIn.CriterionTypeEnum,
        "PropertyValueInAllOf.CriterionTypeEnum": PropertyValueInAllOf.CriterionTypeEnum,
        "QuoteDependency.DependencyTypeEnum": QuoteDependency.DependencyTypeEnum,
        "QuoteDependencyAllOf.DependencyTypeEnum": QuoteDependencyAllOf.DependencyTypeEnum,
        "QuoteInstrumentIdType": QuoteInstrumentIdType,
        "QuoteSeriesId.InstrumentIdTypeEnum": QuoteSeriesId.InstrumentIdTypeEnum,
        "QuoteSeriesId.QuoteTypeEnum": QuoteSeriesId.QuoteTypeEnum,
        "QuoteType": QuoteType,
        "RawVendorEvent.InstrumentEventTypeEnum": RawVendorEvent.InstrumentEventTypeEnum,
        "RawVendorEventAllOf.InstrumentEventTypeEnum": RawVendorEventAllOf.InstrumentEventTypeEnum,
        "ReconcileDateTimeRule.ComparisonTypeEnum": ReconcileDateTimeRule.ComparisonTypeEnum,
        "ReconcileDateTimeRule.RuleTypeEnum": ReconcileDateTimeRule.RuleTypeEnum,
        "ReconcileDateTimeRuleAllOf.ComparisonTypeEnum": ReconcileDateTimeRuleAllOf.ComparisonTypeEnum,
        "ReconcileDateTimeRuleAllOf.RuleTypeEnum": ReconcileDateTimeRuleAllOf.RuleTypeEnum,
        "ReconcileNumericRule.ComparisonTypeEnum": ReconcileNumericRule.ComparisonTypeEnum,
        "ReconcileNumericRule.RuleTypeEnum": ReconcileNumericRule.RuleTypeEnum,
        "ReconcileNumericRuleAllOf.ComparisonTypeEnum": ReconcileNumericRuleAllOf.ComparisonTypeEnum,
        "ReconcileNumericRuleAllOf.RuleTypeEnum": ReconcileNumericRuleAllOf.RuleTypeEnum,
        "ReconcileStringRule.ComparisonTypeEnum": ReconcileStringRule.ComparisonTypeEnum,
        "ReconcileStringRule.RuleTypeEnum": ReconcileStringRule.RuleTypeEnum,
        "ReconcileStringRuleAllOf.ComparisonTypeEnum": ReconcileStringRuleAllOf.ComparisonTypeEnum,
        "ReconcileStringRuleAllOf.RuleTypeEnum": ReconcileStringRuleAllOf.RuleTypeEnum,
        "ReconciliationRule.RuleTypeEnum": ReconciliationRule.RuleTypeEnum,
        "ReconciliationRuleType": ReconciliationRuleType,
        "ReferenceInstrument.InstrumentTypeEnum": ReferenceInstrument.InstrumentTypeEnum,
        "ReferenceInstrumentAllOf.InstrumentTypeEnum": ReferenceInstrumentAllOf.InstrumentTypeEnum,
        "ReferenceListType": ReferenceListType,
        "ReferencePortfolioWeightType": ReferencePortfolioWeightType,
        "Repo.InstrumentTypeEnum": Repo.InstrumentTypeEnum,
        "RepoAllOf.InstrumentTypeEnum": RepoAllOf.InstrumentTypeEnum,
        "ResetEvent.InstrumentEventTypeEnum": ResetEvent.InstrumentEventTypeEnum,
        "ResetEventAllOf.InstrumentEventTypeEnum": ResetEventAllOf.InstrumentEventTypeEnum,
        "ResultDataKeyRule.ResultKeyRuleTypeEnum": ResultDataKeyRule.ResultKeyRuleTypeEnum,
        "ResultDataKeyRuleAllOf.ResultKeyRuleTypeEnum": ResultDataKeyRuleAllOf.ResultKeyRuleTypeEnum,
        "ResultKeyRule.ResultKeyRuleTypeEnum": ResultKeyRule.ResultKeyRuleTypeEnum,
        "ResultKeyRuleType": ResultKeyRuleType,
        "ResultValue.ResultValueTypeEnum": ResultValue.ResultValueTypeEnum,
        "ResultValue0D.ResultValueTypeEnum": ResultValue0D.ResultValueTypeEnum,
        "ResultValue0DAllOf.ResultValueTypeEnum": ResultValue0DAllOf.ResultValueTypeEnum,
        "ResultValueBool.ResultValueTypeEnum": ResultValueBool.ResultValueTypeEnum,
        "ResultValueBoolAllOf.ResultValueTypeEnum": ResultValueBoolAllOf.ResultValueTypeEnum,
        "ResultValueCurrency.ResultValueTypeEnum": ResultValueCurrency.ResultValueTypeEnum,
        "ResultValueCurrencyAllOf.ResultValueTypeEnum": ResultValueCurrencyAllOf.ResultValueTypeEnum,
        "ResultValueDateTimeOffset.ResultValueTypeEnum": ResultValueDateTimeOffset.ResultValueTypeEnum,
        "ResultValueDateTimeOffsetAllOf.ResultValueTypeEnum": ResultValueDateTimeOffsetAllOf.ResultValueTypeEnum,
        "ResultValueDecimal.ResultValueTypeEnum": ResultValueDecimal.ResultValueTypeEnum,
        "ResultValueDecimalAllOf.ResultValueTypeEnum": ResultValueDecimalAllOf.ResultValueTypeEnum,
        "ResultValueDictionary.ResultValueTypeEnum": ResultValueDictionary.ResultValueTypeEnum,
        "ResultValueDictionaryAllOf.ResultValueTypeEnum": ResultValueDictionaryAllOf.ResultValueTypeEnum,
        "ResultValueInt.ResultValueTypeEnum": ResultValueInt.ResultValueTypeEnum,
        "ResultValueIntAllOf.ResultValueTypeEnum": ResultValueIntAllOf.ResultValueTypeEnum,
        "ResultValueString.ResultValueTypeEnum": ResultValueString.ResultValueTypeEnum,
        "ResultValueStringAllOf.ResultValueTypeEnum": ResultValueStringAllOf.ResultValueTypeEnum,
        "ResultValueType": ResultValueType,
        "ScalingMethodology": ScalingMethodology,
        "Schedule.ScheduleTypeEnum": Schedule.ScheduleTypeEnum,
        "ScheduleType": ScheduleType,
        "SimpleCashFlowLoan.InstrumentTypeEnum": SimpleCashFlowLoan.InstrumentTypeEnum,
        "SimpleCashFlowLoanAllOf.InstrumentTypeEnum": SimpleCashFlowLoanAllOf.InstrumentTypeEnum,
        "SimpleInstrument.AssetClassEnum": SimpleInstrument.AssetClassEnum,
        "SimpleInstrument.InstrumentTypeEnum": SimpleInstrument.InstrumentTypeEnum,
        "SimpleInstrumentAllOf.AssetClassEnum": SimpleInstrumentAllOf.AssetClassEnum,
        "SimpleInstrumentAllOf.InstrumentTypeEnum": SimpleInstrumentAllOf.InstrumentTypeEnum,
        "SortOrder": SortOrder,
        "StepSchedule.ScheduleTypeEnum": StepSchedule.ScheduleTypeEnum,
        "StepScheduleAllOf.ScheduleTypeEnum": StepScheduleAllOf.ScheduleTypeEnum,
        "StockSplitEvent.InstrumentEventTypeEnum": StockSplitEvent.InstrumentEventTypeEnum,
        "StockSplitEventAllOf.InstrumentEventTypeEnum": StockSplitEventAllOf.InstrumentEventTypeEnum,
        "StringComparisonType": StringComparisonType,
        "StringList.ReferenceListTypeEnum": StringList.ReferenceListTypeEnum,
        "SubHoldingKeyValueEquals.CriterionTypeEnum": SubHoldingKeyValueEquals.CriterionTypeEnum,
        "SubHoldingKeyValueEqualsAllOf.CriterionTypeEnum": SubHoldingKeyValueEqualsAllOf.CriterionTypeEnum,
        "TermDeposit.InstrumentTypeEnum": TermDeposit.InstrumentTypeEnum,
        "TermDepositAllOf.InstrumentTypeEnum": TermDepositAllOf.InstrumentTypeEnum,
        "TradeTicket.TradeTicketTypeEnum": TradeTicket.TradeTicketTypeEnum,
        "TradeTicketType": TradeTicketType,
        "Transaction.TransactionStatusEnum": Transaction.TransactionStatusEnum,
        "TransactionConfigurationMovementData.MovementTypesEnum": TransactionConfigurationMovementData.MovementTypesEnum,
        "TransactionConfigurationMovementDataRequest.MovementTypesEnum": TransactionConfigurationMovementDataRequest.MovementTypesEnum,
        "TransactionConfigurationTypeAlias.TransactionRolesEnum": TransactionConfigurationTypeAlias.TransactionRolesEnum,
        "TransactionPrice.TypeEnum": TransactionPrice.TypeEnum,
        "TransactionPriceType": TransactionPriceType,
        "TransactionQueryMode": TransactionQueryMode,
        "TransactionQueryParameters.QueryModeEnum": TransactionQueryParameters.QueryModeEnum,
        "TransactionRoles": TransactionRoles,
        "TransactionStatus": TransactionStatus,
        "TransitionEvent.InstrumentEventTypeEnum": TransitionEvent.InstrumentEventTypeEnum,
        "TransitionEventAllOf.InstrumentEventTypeEnum": TransitionEventAllOf.InstrumentEventTypeEnum,
        "TriggerEvent.InstrumentEventTypeEnum": TriggerEvent.InstrumentEventTypeEnum,
        "TriggerEventAllOf.InstrumentEventTypeEnum": TriggerEventAllOf.InstrumentEventTypeEnum,
        "UnitSchema": UnitSchema,
        "UnmatchedHoldingMethod": UnmatchedHoldingMethod,
        "UpsertReferencePortfolioConstituentsRequest.WeightTypeEnum": UpsertReferencePortfolioConstituentsRequest.WeightTypeEnum,
        "UpsertReferencePortfolioConstituentsRequest.PeriodTypeEnum": UpsertReferencePortfolioConstituentsRequest.PeriodTypeEnum,
        "ValueType": ValueType,
        "VendorDependency.DependencyTypeEnum": VendorDependency.DependencyTypeEnum,
        "VendorDependencyAllOf.DependencyTypeEnum": VendorDependencyAllOf.DependencyTypeEnum,
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
    "Abor": Abor,
    "AborConfiguration": AborConfiguration,
    "AborConfigurationProperties": AborConfigurationProperties,
    "AborConfigurationRequest": AborConfigurationRequest,
    "AborProperties": AborProperties,
    "AborRequest": AborRequest,
    "AccessControlledAction": AccessControlledAction,
    "AccessControlledResource": AccessControlledResource,
    "AccessMetadataOperation": AccessMetadataOperation,
    "AccessMetadataValue": AccessMetadataValue,
    "Account": Account,
    "AccountProperties": AccountProperties,
    "AccountsUpsertResponse": AccountsUpsertResponse,
    "ActionId": ActionId,
    "ActionResultOfPortfolio": ActionResultOfPortfolio,
    "AddBusinessDaysToDateRequest": AddBusinessDaysToDateRequest,
    "AddBusinessDaysToDateResponse": AddBusinessDaysToDateResponse,
    "AddressDefinition": AddressDefinition,
    "AddressKeyDefinition": AddressKeyDefinition,
    "AddressKeyFilter": AddressKeyFilter,
    "AddressKeyList": AddressKeyList,
    "AddressKeyOptionDefinition": AddressKeyOptionDefinition,
    "AdjustHolding": AdjustHolding,
    "AdjustHoldingForDateRequest": AdjustHoldingForDateRequest,
    "AdjustHoldingRequest": AdjustHoldingRequest,
    "AggregateSpec": AggregateSpec,
    "AggregatedReturn": AggregatedReturn,
    "AggregatedReturnsDispersionRequest": AggregatedReturnsDispersionRequest,
    "AggregatedReturnsRequest": AggregatedReturnsRequest,
    "AggregatedReturnsResponse": AggregatedReturnsResponse,
    "AggregationContext": AggregationContext,
    "AggregationMeasureFailureDetail": AggregationMeasureFailureDetail,
    "AggregationOptions": AggregationOptions,
    "AggregationQuery": AggregationQuery,
    "Allocation": Allocation,
    "AllocationRequest": AllocationRequest,
    "AllocationServiceRunResult": AllocationServiceRunResult,
    "AllocationSetRequest": AllocationSetRequest,
    "AmortisationEvent": AmortisationEvent,
    "AmortisationEventAllOf": AmortisationEventAllOf,
    "AnnulQuotesResponse": AnnulQuotesResponse,
    "AnnulSingleStructuredDataResponse": AnnulSingleStructuredDataResponse,
    "AnnulStructuredDataResponse": AnnulStructuredDataResponse,
    "Barrier": Barrier,
    "Basket": Basket,
    "BasketAllOf": BasketAllOf,
    "BasketIdentifier": BasketIdentifier,
    "BatchAdjustHoldingsResponse": BatchAdjustHoldingsResponse,
    "BatchUpsertPortfolioTransactionsResponse": BatchUpsertPortfolioTransactionsResponse,
    "BatchUpsertPropertyDefinitionPropertiesResponse": BatchUpsertPropertyDefinitionPropertiesResponse,
    "Block": Block,
    "BlockRequest": BlockRequest,
    "BlockSetRequest": BlockSetRequest,
    "Bond": Bond,
    "BondAllOf": BondAllOf,
    "BondDefaultEvent": BondDefaultEvent,
    "BondDefaultEventAllOf": BondDefaultEventAllOf,
    "BucketedCashFlowRequest": BucketedCashFlowRequest,
    "BucketedCashFlowResponse": BucketedCashFlowResponse,
    "CalculationInfo": CalculationInfo,
    "Calendar": Calendar,
    "CalendarDate": CalendarDate,
    "CapFloor": CapFloor,
    "CapFloorAllOf": CapFloorAllOf,
    "CashDependency": CashDependency,
    "CashDependencyAllOf": CashDependencyAllOf,
    "CashDividendEvent": CashDividendEvent,
    "CashDividendEventAllOf": CashDividendEventAllOf,
    "CashFlowEvent": CashFlowEvent,
    "CashFlowEventAllOf": CashFlowEventAllOf,
    "CashFlowLineage": CashFlowLineage,
    "CashFlowValue": CashFlowValue,
    "CashFlowValueAllOf": CashFlowValueAllOf,
    "CashFlowValueSet": CashFlowValueSet,
    "CashFlowValueSetAllOf": CashFlowValueSetAllOf,
    "CashLadderRecord": CashLadderRecord,
    "CashPerpetual": CashPerpetual,
    "CashPerpetualAllOf": CashPerpetualAllOf,
    "CdsFlowConventions": CdsFlowConventions,
    "CdsIndex": CdsIndex,
    "CdsIndexAllOf": CdsIndexAllOf,
    "CdsProtectionDetailSpecification": CdsProtectionDetailSpecification,
    "Change": Change,
    "ChangeHistory": ChangeHistory,
    "ChangeItem": ChangeItem,
    "ChartOfAccounts": ChartOfAccounts,
    "ChartOfAccountsProperties": ChartOfAccountsProperties,
    "ChartOfAccountsRequest": ChartOfAccountsRequest,
    "Client": Client,
    "CloseEvent": CloseEvent,
    "CloseEventAllOf": CloseEventAllOf,
    "CompletePortfolio": CompletePortfolio,
    "CompleteRelation": CompleteRelation,
    "CompleteRelationship": CompleteRelationship,
    "ComplexBond": ComplexBond,
    "ComplexBondAllOf": ComplexBondAllOf,
    "ComplexMarketData": ComplexMarketData,
    "ComplexMarketDataId": ComplexMarketDataId,
    "ComplianceBreachedOrderInfo": ComplianceBreachedOrderInfo,
    "ComplianceRule": ComplianceRule,
    "ComplianceRuleResult": ComplianceRuleResult,
    "ComplianceRuleUpsertRequest": ComplianceRuleUpsertRequest,
    "ComplianceRuleUpsertResponse": ComplianceRuleUpsertResponse,
    "ComplianceRunInfo": ComplianceRunInfo,
    "ComplianceTemplate": ComplianceTemplate,
    "ComplianceTemplateParameter": ComplianceTemplateParameter,
    "ComplianceTemplateVariation": ComplianceTemplateVariation,
    "CompositeDispersion": CompositeDispersion,
    "CompositeDispersionResponse": CompositeDispersionResponse,
    "Compounding": Compounding,
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
    "CreateAddressKeyDefinitionRequest": CreateAddressKeyDefinitionRequest,
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
    "CreateReconciliationRequest": CreateReconciliationRequest,
    "CreateReferencePortfolioRequest": CreateReferencePortfolioRequest,
    "CreateRelationDefinitionRequest": CreateRelationDefinitionRequest,
    "CreateRelationRequest": CreateRelationRequest,
    "CreateRelationshipDefinitionRequest": CreateRelationshipDefinitionRequest,
    "CreateRelationshipRequest": CreateRelationshipRequest,
    "CreateSequenceRequest": CreateSequenceRequest,
    "CreateTaxRuleSetRequest": CreateTaxRuleSetRequest,
    "CreateTransactionPortfolioRequest": CreateTransactionPortfolioRequest,
    "CreateUnitDefinition": CreateUnitDefinition,
    "CreditDefaultSwap": CreditDefaultSwap,
    "CreditDefaultSwapAllOf": CreditDefaultSwapAllOf,
    "CreditRating": CreditRating,
    "CreditSpreadCurveData": CreditSpreadCurveData,
    "CreditSpreadCurveDataAllOf": CreditSpreadCurveDataAllOf,
    "CreditSupportAnnex": CreditSupportAnnex,
    "CurrencyAndAmount": CurrencyAndAmount,
    "CurveOptions": CurveOptions,
    "CurveOptionsAllOf": CurveOptionsAllOf,
    "CustodianAccount": CustodianAccount,
    "CustodianAccountProperties": CustodianAccountProperties,
    "CustodianAccountRequest": CustodianAccountRequest,
    "CustodianAccountsUpsertResponse": CustodianAccountsUpsertResponse,
    "CustomEntityDefinition": CustomEntityDefinition,
    "CustomEntityDefinitionRequest": CustomEntityDefinitionRequest,
    "CustomEntityField": CustomEntityField,
    "CustomEntityFieldDefinition": CustomEntityFieldDefinition,
    "CustomEntityId": CustomEntityId,
    "CustomEntityRequest": CustomEntityRequest,
    "CustomEntityResponse": CustomEntityResponse,
    "CutLabelDefinition": CutLabelDefinition,
    "CutLocalTime": CutLocalTime,
    "DataDefinition": DataDefinition,
    "DataMapKey": DataMapKey,
    "DataMapping": DataMapping,
    "DataScope": DataScope,
    "DataType": DataType,
    "DataTypeSummary": DataTypeSummary,
    "DateAttributes": DateAttributes,
    "DateRange": DateRange,
    "DecimalList": DecimalList,
    "DeleteAccountsResponse": DeleteAccountsResponse,
    "DeleteCustodianAccountsResponse": DeleteCustodianAccountsResponse,
    "DeleteInstrumentPropertiesResponse": DeleteInstrumentPropertiesResponse,
    "DeleteInstrumentResponse": DeleteInstrumentResponse,
    "DeleteInstrumentsResponse": DeleteInstrumentsResponse,
    "DeleteRelationRequest": DeleteRelationRequest,
    "DeleteRelationshipRequest": DeleteRelationshipRequest,
    "DeletedEntityResponse": DeletedEntityResponse,
    "DependencySourceFilter": DependencySourceFilter,
    "DescribedAddressKey": DescribedAddressKey,
    "DiscountFactorCurveData": DiscountFactorCurveData,
    "DiscountFactorCurveDataAllOf": DiscountFactorCurveDataAllOf,
    "DiscountingDependency": DiscountingDependency,
    "DiscountingDependencyAllOf": DiscountingDependencyAllOf,
    "EconomicDependency": EconomicDependency,
    "EconomicDependencyWithComplexMarketData": EconomicDependencyWithComplexMarketData,
    "EconomicDependencyWithQuote": EconomicDependencyWithQuote,
    "EmptyModelOptions": EmptyModelOptions,
    "EmptyModelOptionsAllOf": EmptyModelOptionsAllOf,
    "EntityIdentifier": EntityIdentifier,
    "Equity": Equity,
    "EquityAllOf": EquityAllOf,
    "EquityAllOfIdentifiers": EquityAllOfIdentifiers,
    "EquityCurveByPricesData": EquityCurveByPricesData,
    "EquityCurveByPricesDataAllOf": EquityCurveByPricesDataAllOf,
    "EquityCurveDependency": EquityCurveDependency,
    "EquityCurveDependencyAllOf": EquityCurveDependencyAllOf,
    "EquityModelOptions": EquityModelOptions,
    "EquityModelOptionsAllOf": EquityModelOptionsAllOf,
    "EquityOption": EquityOption,
    "EquityOptionAllOf": EquityOptionAllOf,
    "EquitySwap": EquitySwap,
    "EquitySwapAllOf": EquitySwapAllOf,
    "EquityVolDependency": EquityVolDependency,
    "EquityVolDependencyAllOf": EquityVolDependencyAllOf,
    "EquityVolSurfaceData": EquityVolSurfaceData,
    "EquityVolSurfaceDataAllOf": EquityVolSurfaceDataAllOf,
    "ErrorDetail": ErrorDetail,
    "EventDateRange": EventDateRange,
    "ExchangeTradedOption": ExchangeTradedOption,
    "ExchangeTradedOptionAllOf": ExchangeTradedOptionAllOf,
    "ExchangeTradedOptionContractDetails": ExchangeTradedOptionContractDetails,
    "Execution": Execution,
    "ExecutionRequest": ExecutionRequest,
    "ExecutionSetRequest": ExecutionSetRequest,
    "ExerciseEvent": ExerciseEvent,
    "ExerciseEventAllOf": ExerciseEventAllOf,
    "ExoticInstrument": ExoticInstrument,
    "ExoticInstrumentAllOf": ExoticInstrumentAllOf,
    "ExpandedGroup": ExpandedGroup,
    "FeeRule": FeeRule,
    "FeeRuleUpsertRequest": FeeRuleUpsertRequest,
    "FeeRuleUpsertResponse": FeeRuleUpsertResponse,
    "FieldDefinition": FieldDefinition,
    "FieldSchema": FieldSchema,
    "FieldValue": FieldValue,
    "FileResponse": FileResponse,
    "FixedLeg": FixedLeg,
    "FixedLegAllOf": FixedLegAllOf,
    "FixedLegAllOfOverrides": FixedLegAllOfOverrides,
    "FixedSchedule": FixedSchedule,
    "FixedScheduleAllOf": FixedScheduleAllOf,
    "FloatSchedule": FloatSchedule,
    "FloatScheduleAllOf": FloatScheduleAllOf,
    "FloatingLeg": FloatingLeg,
    "FloatingLegAllOf": FloatingLegAllOf,
    "FlowConventionName": FlowConventionName,
    "FlowConventions": FlowConventions,
    "ForwardRateAgreement": ForwardRateAgreement,
    "ForwardRateAgreementAllOf": ForwardRateAgreementAllOf,
    "FundingLeg": FundingLeg,
    "FundingLegAllOf": FundingLegAllOf,
    "FundingLegOptions": FundingLegOptions,
    "FundingLegOptionsAllOf": FundingLegOptionsAllOf,
    "Future": Future,
    "FutureAllOf": FutureAllOf,
    "FuturesContractDetails": FuturesContractDetails,
    "FxDependency": FxDependency,
    "FxDependencyAllOf": FxDependencyAllOf,
    "FxForward": FxForward,
    "FxForwardAllOf": FxForwardAllOf,
    "FxForwardCurveByQuoteReference": FxForwardCurveByQuoteReference,
    "FxForwardCurveByQuoteReferenceAllOf": FxForwardCurveByQuoteReferenceAllOf,
    "FxForwardCurveData": FxForwardCurveData,
    "FxForwardCurveDataAllOf": FxForwardCurveDataAllOf,
    "FxForwardModelOptions": FxForwardModelOptions,
    "FxForwardModelOptionsAllOf": FxForwardModelOptionsAllOf,
    "FxForwardPipsCurveData": FxForwardPipsCurveData,
    "FxForwardPipsCurveDataAllOf": FxForwardPipsCurveDataAllOf,
    "FxForwardTenorCurveData": FxForwardTenorCurveData,
    "FxForwardTenorCurveDataAllOf": FxForwardTenorCurveDataAllOf,
    "FxForwardTenorPipsCurveData": FxForwardTenorPipsCurveData,
    "FxForwardTenorPipsCurveDataAllOf": FxForwardTenorPipsCurveDataAllOf,
    "FxForwardsDependency": FxForwardsDependency,
    "FxForwardsDependencyAllOf": FxForwardsDependencyAllOf,
    "FxOption": FxOption,
    "FxOptionAllOf": FxOptionAllOf,
    "FxRateSchedule": FxRateSchedule,
    "FxRateScheduleAllOf": FxRateScheduleAllOf,
    "FxSwap": FxSwap,
    "FxSwapAllOf": FxSwapAllOf,
    "FxTenorConvention": FxTenorConvention,
    "FxVolDependency": FxVolDependency,
    "FxVolDependencyAllOf": FxVolDependencyAllOf,
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
    "GetStructuredResultDataResponse": GetStructuredResultDataResponse,
    "GetVirtualDocumentResponse": GetVirtualDocumentResponse,
    "GroupedResultOfAddressKey": GroupedResultOfAddressKey,
    "HoldingAdjustment": HoldingAdjustment,
    "HoldingAdjustmentWithDate": HoldingAdjustmentWithDate,
    "HoldingContext": HoldingContext,
    "HoldingsAdjustment": HoldingsAdjustment,
    "HoldingsAdjustmentHeader": HoldingsAdjustmentHeader,
    "IUnitDefinitionDto": IUnitDefinitionDto,
    "IdSelectorDefinition": IdSelectorDefinition,
    "IdentifierPartSchema": IdentifierPartSchema,
    "IndexConvention": IndexConvention,
    "IndexModelOptions": IndexModelOptions,
    "IndexModelOptionsAllOf": IndexModelOptionsAllOf,
    "IndexProjectionDependency": IndexProjectionDependency,
    "IndexProjectionDependencyAllOf": IndexProjectionDependencyAllOf,
    "IndustryClassifier": IndustryClassifier,
    "InflationLinkedBond": InflationLinkedBond,
    "InflationLinkedBondAllOf": InflationLinkedBondAllOf,
    "InflationSwap": InflationSwap,
    "InflationSwapAllOf": InflationSwapAllOf,
    "InformationalErrorEvent": InformationalErrorEvent,
    "InformationalErrorEventAllOf": InformationalErrorEventAllOf,
    "InformationalEvent": InformationalEvent,
    "InformationalEventAllOf": InformationalEventAllOf,
    "InlineValuationRequest": InlineValuationRequest,
    "InlineValuationsReconciliationRequest": InlineValuationsReconciliationRequest,
    "InputTransition": InputTransition,
    "Instrument": Instrument,
    "InstrumentCapabilities": InstrumentCapabilities,
    "InstrumentCashFlow": InstrumentCashFlow,
    "InstrumentDefinition": InstrumentDefinition,
    "InstrumentDefinitionFormat": InstrumentDefinitionFormat,
    "InstrumentEvent": InstrumentEvent,
    "InstrumentEventHolder": InstrumentEventHolder,
    "InstrumentIdTypeDescriptor": InstrumentIdTypeDescriptor,
    "InstrumentIdValue": InstrumentIdValue,
    "InstrumentLeg": InstrumentLeg,
    "InstrumentLegAllOf": InstrumentLegAllOf,
    "InstrumentList": InstrumentList,
    "InstrumentMatch": InstrumentMatch,
    "InstrumentModels": InstrumentModels,
    "InstrumentPaymentDiary": InstrumentPaymentDiary,
    "InstrumentPaymentDiaryLeg": InstrumentPaymentDiaryLeg,
    "InstrumentPaymentDiaryRow": InstrumentPaymentDiaryRow,
    "InstrumentProperties": InstrumentProperties,
    "InstrumentSearchProperty": InstrumentSearchProperty,
    "InterestRateSwap": InterestRateSwap,
    "InterestRateSwapAllOf": InterestRateSwapAllOf,
    "InterestRateSwaption": InterestRateSwaption,
    "InterestRateSwaptionAllOf": InterestRateSwaptionAllOf,
    "IrVolCubeData": IrVolCubeData,
    "IrVolCubeDataAllOf": IrVolCubeDataAllOf,
    "IrVolDependency": IrVolDependency,
    "IrVolDependencyAllOf": IrVolDependencyAllOf,
    "IsBusinessDayResponse": IsBusinessDayResponse,
    "JELines": JELines,
    "JELinesQueryParameters": JELinesQueryParameters,
    "LabelValueSet": LabelValueSet,
    "LegDefinition": LegDefinition,
    "LegalEntity": LegalEntity,
    "LevelStep": LevelStep,
    "LifeCycleEventLineage": LifeCycleEventLineage,
    "LifeCycleEventValue": LifeCycleEventValue,
    "LifeCycleEventValueAllOf": LifeCycleEventValueAllOf,
    "Link": Link,
    "ListAggregationReconciliation": ListAggregationReconciliation,
    "ListAggregationResponse": ListAggregationResponse,
    "ListComplexMarketDataWithMetaDataResponse": ListComplexMarketDataWithMetaDataResponse,
    "LoanPeriod": LoanPeriod,
    "LusidInstrument": LusidInstrument,
    "LusidProblemDetails": LusidProblemDetails,
    "LusidTradeTicket": LusidTradeTicket,
    "LusidUniqueId": LusidUniqueId,
    "LusidValidationProblemDetails": LusidValidationProblemDetails,
    "MappedString": MappedString,
    "Mapping": Mapping,
    "MappingRule": MappingRule,
    "MarketContext": MarketContext,
    "MarketContextSuppliers": MarketContextSuppliers,
    "MarketDataKeyRule": MarketDataKeyRule,
    "MarketDataOptions": MarketDataOptions,
    "MarketDataOverrides": MarketDataOverrides,
    "MarketDataSpecificRule": MarketDataSpecificRule,
    "MarketOptions": MarketOptions,
    "MarketQuote": MarketQuote,
    "MatchCriterion": MatchCriterion,
    "MetricValue": MetricValue,
    "ModelOptions": ModelOptions,
    "ModelSelection": ModelSelection,
    "NextValueInSequenceResponse": NextValueInSequenceResponse,
    "OpaqueDependency": OpaqueDependency,
    "OpaqueDependencyAllOf": OpaqueDependencyAllOf,
    "OpaqueMarketData": OpaqueMarketData,
    "OpaqueMarketDataAllOf": OpaqueMarketDataAllOf,
    "OpaqueModelOptions": OpaqueModelOptions,
    "OpaqueModelOptionsAllOf": OpaqueModelOptionsAllOf,
    "OpenEvent": OpenEvent,
    "OpenEventAllOf": OpenEventAllOf,
    "Operation": Operation,
    "OptionEntry": OptionEntry,
    "OptionalitySchedule": OptionalitySchedule,
    "OptionalityScheduleAllOf": OptionalityScheduleAllOf,
    "Order": Order,
    "OrderBySpec": OrderBySpec,
    "OrderGraphBlock": OrderGraphBlock,
    "OrderGraphBlockAllocationDetail": OrderGraphBlockAllocationDetail,
    "OrderGraphBlockAllocationSynopsis": OrderGraphBlockAllocationSynopsis,
    "OrderGraphBlockExecutionDetail": OrderGraphBlockExecutionDetail,
    "OrderGraphBlockExecutionSynopsis": OrderGraphBlockExecutionSynopsis,
    "OrderGraphBlockOrderDetail": OrderGraphBlockOrderDetail,
    "OrderGraphBlockOrderSynopsis": OrderGraphBlockOrderSynopsis,
    "OrderGraphBlockPlacementDetail": OrderGraphBlockPlacementDetail,
    "OrderGraphBlockPlacementSynopsis": OrderGraphBlockPlacementSynopsis,
    "OrderGraphPlacement": OrderGraphPlacement,
    "OrderGraphPlacementAllocationDetail": OrderGraphPlacementAllocationDetail,
    "OrderGraphPlacementAllocationSynopsis": OrderGraphPlacementAllocationSynopsis,
    "OrderGraphPlacementChildPlacementDetail": OrderGraphPlacementChildPlacementDetail,
    "OrderGraphPlacementExecutionDetail": OrderGraphPlacementExecutionDetail,
    "OrderGraphPlacementExecutionSynopsis": OrderGraphPlacementExecutionSynopsis,
    "OrderGraphPlacementOrderDetail": OrderGraphPlacementOrderDetail,
    "OrderGraphPlacementOrderSynopsis": OrderGraphPlacementOrderSynopsis,
    "OrderGraphPlacementPlacementSynopsis": OrderGraphPlacementPlacementSynopsis,
    "OrderInstruction": OrderInstruction,
    "OrderInstructionRequest": OrderInstructionRequest,
    "OrderInstructionSetRequest": OrderInstructionSetRequest,
    "OrderRequest": OrderRequest,
    "OrderSetRequest": OrderSetRequest,
    "OtcConfirmation": OtcConfirmation,
    "OutputTransaction": OutputTransaction,
    "OutputTransition": OutputTransition,
    "Package": Package,
    "PackageRequest": PackageRequest,
    "PackageSetRequest": PackageSetRequest,
    "PagedResourceListOfAbor": PagedResourceListOfAbor,
    "PagedResourceListOfAborConfiguration": PagedResourceListOfAborConfiguration,
    "PagedResourceListOfAccount": PagedResourceListOfAccount,
    "PagedResourceListOfAddressKeyDefinition": PagedResourceListOfAddressKeyDefinition,
    "PagedResourceListOfAllocation": PagedResourceListOfAllocation,
    "PagedResourceListOfBlock": PagedResourceListOfBlock,
    "PagedResourceListOfCalendar": PagedResourceListOfCalendar,
    "PagedResourceListOfChartOfAccounts": PagedResourceListOfChartOfAccounts,
    "PagedResourceListOfComplianceTemplate": PagedResourceListOfComplianceTemplate,
    "PagedResourceListOfCorporateActionSource": PagedResourceListOfCorporateActionSource,
    "PagedResourceListOfCustodianAccount": PagedResourceListOfCustodianAccount,
    "PagedResourceListOfCustomEntityDefinition": PagedResourceListOfCustomEntityDefinition,
    "PagedResourceListOfCustomEntityResponse": PagedResourceListOfCustomEntityResponse,
    "PagedResourceListOfCutLabelDefinition": PagedResourceListOfCutLabelDefinition,
    "PagedResourceListOfDataTypeSummary": PagedResourceListOfDataTypeSummary,
    "PagedResourceListOfExecution": PagedResourceListOfExecution,
    "PagedResourceListOfInstrument": PagedResourceListOfInstrument,
    "PagedResourceListOfInstrumentEventHolder": PagedResourceListOfInstrumentEventHolder,
    "PagedResourceListOfLegalEntity": PagedResourceListOfLegalEntity,
    "PagedResourceListOfOrder": PagedResourceListOfOrder,
    "PagedResourceListOfOrderGraphBlock": PagedResourceListOfOrderGraphBlock,
    "PagedResourceListOfOrderGraphPlacement": PagedResourceListOfOrderGraphPlacement,
    "PagedResourceListOfOrderInstruction": PagedResourceListOfOrderInstruction,
    "PagedResourceListOfPackage": PagedResourceListOfPackage,
    "PagedResourceListOfParticipation": PagedResourceListOfParticipation,
    "PagedResourceListOfPerson": PagedResourceListOfPerson,
    "PagedResourceListOfPlacement": PagedResourceListOfPlacement,
    "PagedResourceListOfPortfolioGroupSearchResult": PagedResourceListOfPortfolioGroupSearchResult,
    "PagedResourceListOfPortfolioSearchResult": PagedResourceListOfPortfolioSearchResult,
    "PagedResourceListOfPropertyDefinitionSearchResult": PagedResourceListOfPropertyDefinitionSearchResult,
    "PagedResourceListOfReconciliation": PagedResourceListOfReconciliation,
    "PagedResourceListOfReconciliationRun": PagedResourceListOfReconciliationRun,
    "PagedResourceListOfReconciliationRunBreak": PagedResourceListOfReconciliationRunBreak,
    "PagedResourceListOfRelationshipDefinition": PagedResourceListOfRelationshipDefinition,
    "PagedResourceListOfSequenceDefinition": PagedResourceListOfSequenceDefinition,
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
    "PortfolioGroupIdList": PortfolioGroupIdList,
    "PortfolioGroupProperties": PortfolioGroupProperties,
    "PortfolioGroupSearchResult": PortfolioGroupSearchResult,
    "PortfolioHolding": PortfolioHolding,
    "PortfolioIdList": PortfolioIdList,
    "PortfolioProperties": PortfolioProperties,
    "PortfolioReconciliationRequest": PortfolioReconciliationRequest,
    "PortfolioResultDataKeyRule": PortfolioResultDataKeyRule,
    "PortfolioResultDataKeyRuleAllOf": PortfolioResultDataKeyRuleAllOf,
    "PortfolioSearchResult": PortfolioSearchResult,
    "PortfolioTradeTicket": PortfolioTradeTicket,
    "PortfoliosReconciliationRequest": PortfoliosReconciliationRequest,
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
    "PropertyValueEquals": PropertyValueEquals,
    "PropertyValueEqualsAllOf": PropertyValueEqualsAllOf,
    "PropertyValueIn": PropertyValueIn,
    "PropertyValueInAllOf": PropertyValueInAllOf,
    "QueryBucketedCashFlowsRequest": QueryBucketedCashFlowsRequest,
    "QueryCashFlowsRequest": QueryCashFlowsRequest,
    "QueryInstrumentEventsRequest": QueryInstrumentEventsRequest,
    "QueryTradeTicketsRequest": QueryTradeTicketsRequest,
    "Quote": Quote,
    "QuoteAccessMetadataRule": QuoteAccessMetadataRule,
    "QuoteAccessMetadataRuleId": QuoteAccessMetadataRuleId,
    "QuoteDependency": QuoteDependency,
    "QuoteDependencyAllOf": QuoteDependencyAllOf,
    "QuoteId": QuoteId,
    "QuoteSeriesId": QuoteSeriesId,
    "RawVendorEvent": RawVendorEvent,
    "RawVendorEventAllOf": RawVendorEventAllOf,
    "RealisedGainLoss": RealisedGainLoss,
    "ReconcileDateTimeRule": ReconcileDateTimeRule,
    "ReconcileDateTimeRuleAllOf": ReconcileDateTimeRuleAllOf,
    "ReconcileNumericRule": ReconcileNumericRule,
    "ReconcileNumericRuleAllOf": ReconcileNumericRuleAllOf,
    "ReconcileStringRule": ReconcileStringRule,
    "ReconcileStringRuleAllOf": ReconcileStringRuleAllOf,
    "ReconciledTransaction": ReconciledTransaction,
    "Reconciliation": Reconciliation,
    "ReconciliationBreak": ReconciliationBreak,
    "ReconciliationBreakId": ReconciliationBreakId,
    "ReconciliationConfiguration": ReconciliationConfiguration,
    "ReconciliationId": ReconciliationId,
    "ReconciliationLeftRightAddressKeyPair": ReconciliationLeftRightAddressKeyPair,
    "ReconciliationLine": ReconciliationLine,
    "ReconciliationRequest": ReconciliationRequest,
    "ReconciliationResponse": ReconciliationResponse,
    "ReconciliationRule": ReconciliationRule,
    "ReconciliationRun": ReconciliationRun,
    "ReconciliationRunBreak": ReconciliationRunBreak,
    "ReconciliationRunId": ReconciliationRunId,
    "ReconciliationSideConfiguration": ReconciliationSideConfiguration,
    "ReconciliationTransactions": ReconciliationTransactions,
    "ReferenceData": ReferenceData,
    "ReferenceInstrument": ReferenceInstrument,
    "ReferenceInstrumentAllOf": ReferenceInstrumentAllOf,
    "ReferencePortfolioConstituent": ReferencePortfolioConstituent,
    "ReferencePortfolioConstituentRequest": ReferencePortfolioConstituentRequest,
    "RelatedEntity": RelatedEntity,
    "Relation": Relation,
    "RelationDefinition": RelationDefinition,
    "Relationship": Relationship,
    "RelationshipDefinition": RelationshipDefinition,
    "Repo": Repo,
    "RepoAllOf": RepoAllOf,
    "ResetEvent": ResetEvent,
    "ResetEventAllOf": ResetEventAllOf,
    "ResourceId": ResourceId,
    "ResourceListOfAccessControlledResource": ResourceListOfAccessControlledResource,
    "ResourceListOfAccessMetadataValueOf": ResourceListOfAccessMetadataValueOf,
    "ResourceListOfAggregatedReturn": ResourceListOfAggregatedReturn,
    "ResourceListOfAggregationQuery": ResourceListOfAggregationQuery,
    "ResourceListOfAllocation": ResourceListOfAllocation,
    "ResourceListOfBlock": ResourceListOfBlock,
    "ResourceListOfCalendarDate": ResourceListOfCalendarDate,
    "ResourceListOfChange": ResourceListOfChange,
    "ResourceListOfChangeHistory": ResourceListOfChangeHistory,
    "ResourceListOfComplianceBreachedOrderInfo": ResourceListOfComplianceBreachedOrderInfo,
    "ResourceListOfComplianceRule": ResourceListOfComplianceRule,
    "ResourceListOfComplianceRuleResult": ResourceListOfComplianceRuleResult,
    "ResourceListOfComplianceRunInfo": ResourceListOfComplianceRunInfo,
    "ResourceListOfConstituentsAdjustmentHeader": ResourceListOfConstituentsAdjustmentHeader,
    "ResourceListOfCorporateAction": ResourceListOfCorporateAction,
    "ResourceListOfDataType": ResourceListOfDataType,
    "ResourceListOfExecution": ResourceListOfExecution,
    "ResourceListOfFeeRule": ResourceListOfFeeRule,
    "ResourceListOfGetCdsFlowConventionsResponse": ResourceListOfGetCdsFlowConventionsResponse,
    "ResourceListOfGetCounterpartyAgreementResponse": ResourceListOfGetCounterpartyAgreementResponse,
    "ResourceListOfGetCreditSupportAnnexResponse": ResourceListOfGetCreditSupportAnnexResponse,
    "ResourceListOfGetFlowConventionsResponse": ResourceListOfGetFlowConventionsResponse,
    "ResourceListOfGetIndexConventionResponse": ResourceListOfGetIndexConventionResponse,
    "ResourceListOfGetRecipeResponse": ResourceListOfGetRecipeResponse,
    "ResourceListOfHoldingsAdjustmentHeader": ResourceListOfHoldingsAdjustmentHeader,
    "ResourceListOfIUnitDefinitionDto": ResourceListOfIUnitDefinitionDto,
    "ResourceListOfInstrumentCashFlow": ResourceListOfInstrumentCashFlow,
    "ResourceListOfInstrumentEventHolder": ResourceListOfInstrumentEventHolder,
    "ResourceListOfInstrumentIdTypeDescriptor": ResourceListOfInstrumentIdTypeDescriptor,
    "ResourceListOfLegalEntity": ResourceListOfLegalEntity,
    "ResourceListOfListComplexMarketDataWithMetaDataResponse": ResourceListOfListComplexMarketDataWithMetaDataResponse,
    "ResourceListOfMapping": ResourceListOfMapping,
    "ResourceListOfOrder": ResourceListOfOrder,
    "ResourceListOfOrderInstruction": ResourceListOfOrderInstruction,
    "ResourceListOfPackage": ResourceListOfPackage,
    "ResourceListOfParticipation": ResourceListOfParticipation,
    "ResourceListOfPerformanceReturn": ResourceListOfPerformanceReturn,
    "ResourceListOfPerson": ResourceListOfPerson,
    "ResourceListOfPlacement": ResourceListOfPlacement,
    "ResourceListOfPortfolio": ResourceListOfPortfolio,
    "ResourceListOfPortfolioCashFlow": ResourceListOfPortfolioCashFlow,
    "ResourceListOfPortfolioCashLadder": ResourceListOfPortfolioCashLadder,
    "ResourceListOfPortfolioGroup": ResourceListOfPortfolioGroup,
    "ResourceListOfPortfolioTradeTicket": ResourceListOfPortfolioTradeTicket,
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
    "ResourceListOfSideDefinition": ResourceListOfSideDefinition,
    "ResourceListOfString": ResourceListOfString,
    "ResourceListOfTaxRuleSet": ResourceListOfTaxRuleSet,
    "ResourceListOfTransaction": ResourceListOfTransaction,
    "ResourceListOfTransactionType": ResourceListOfTransactionType,
    "ResourceListOfValueType": ResourceListOfValueType,
    "ResponseMetaData": ResponseMetaData,
    "ResultDataKeyRule": ResultDataKeyRule,
    "ResultDataKeyRuleAllOf": ResultDataKeyRuleAllOf,
    "ResultDataSchema": ResultDataSchema,
    "ResultKeyRule": ResultKeyRule,
    "ResultValue": ResultValue,
    "ResultValue0D": ResultValue0D,
    "ResultValue0DAllOf": ResultValue0DAllOf,
    "ResultValueBool": ResultValueBool,
    "ResultValueBoolAllOf": ResultValueBoolAllOf,
    "ResultValueCurrency": ResultValueCurrency,
    "ResultValueCurrencyAllOf": ResultValueCurrencyAllOf,
    "ResultValueDateTimeOffset": ResultValueDateTimeOffset,
    "ResultValueDateTimeOffsetAllOf": ResultValueDateTimeOffsetAllOf,
    "ResultValueDecimal": ResultValueDecimal,
    "ResultValueDecimalAllOf": ResultValueDecimalAllOf,
    "ResultValueDictionary": ResultValueDictionary,
    "ResultValueDictionaryAllOf": ResultValueDictionaryAllOf,
    "ResultValueInt": ResultValueInt,
    "ResultValueIntAllOf": ResultValueIntAllOf,
    "ResultValueString": ResultValueString,
    "ResultValueStringAllOf": ResultValueStringAllOf,
    "RoundingConvention": RoundingConvention,
    "Schedule": Schedule,
    "Schema": Schema,
    "ScopeDefinition": ScopeDefinition,
    "SequenceDefinition": SequenceDefinition,
    "SetLegalEntityIdentifiersRequest": SetLegalEntityIdentifiersRequest,
    "SetLegalEntityPropertiesRequest": SetLegalEntityPropertiesRequest,
    "SetPersonIdentifiersRequest": SetPersonIdentifiersRequest,
    "SetPersonPropertiesRequest": SetPersonPropertiesRequest,
    "SetTransactionConfigurationAlias": SetTransactionConfigurationAlias,
    "SetTransactionConfigurationSourceRequest": SetTransactionConfigurationSourceRequest,
    "SideConfigurationData": SideConfigurationData,
    "SideConfigurationDataRequest": SideConfigurationDataRequest,
    "SideDefinition": SideDefinition,
    "SideDefinitionRequest": SideDefinitionRequest,
    "SidesDefinitionRequest": SidesDefinitionRequest,
    "SimpleCashFlowLoan": SimpleCashFlowLoan,
    "SimpleCashFlowLoanAllOf": SimpleCashFlowLoanAllOf,
    "SimpleInstrument": SimpleInstrument,
    "SimpleInstrumentAllOf": SimpleInstrumentAllOf,
    "StepSchedule": StepSchedule,
    "StepScheduleAllOf": StepScheduleAllOf,
    "StockSplitEvent": StockSplitEvent,
    "StockSplitEventAllOf": StockSplitEventAllOf,
    "Stream": Stream,
    "StringList": StringList,
    "StructuredResultData": StructuredResultData,
    "StructuredResultDataId": StructuredResultDataId,
    "SubHoldingKeyValueEquals": SubHoldingKeyValueEquals,
    "SubHoldingKeyValueEqualsAllOf": SubHoldingKeyValueEqualsAllOf,
    "TargetTaxLot": TargetTaxLot,
    "TargetTaxLotRequest": TargetTaxLotRequest,
    "TaxRule": TaxRule,
    "TaxRuleSet": TaxRuleSet,
    "TermDeposit": TermDeposit,
    "TermDepositAllOf": TermDepositAllOf,
    "Touch": Touch,
    "TradeTicket": TradeTicket,
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
    "TransactionReconciliationRequest": TransactionReconciliationRequest,
    "TransactionRequest": TransactionRequest,
    "TransactionSetConfigurationData": TransactionSetConfigurationData,
    "TransactionSetConfigurationDataRequest": TransactionSetConfigurationDataRequest,
    "TransactionType": TransactionType,
    "TransactionTypeAlias": TransactionTypeAlias,
    "TransactionTypeMovement": TransactionTypeMovement,
    "TransactionTypePropertyMapping": TransactionTypePropertyMapping,
    "TransactionTypeRequest": TransactionTypeRequest,
    "TransactionsReconciliationsResponse": TransactionsReconciliationsResponse,
    "TransitionEvent": TransitionEvent,
    "TransitionEventAllOf": TransitionEventAllOf,
    "TranslateInstrumentDefinitionsRequest": TranslateInstrumentDefinitionsRequest,
    "TranslateInstrumentDefinitionsResponse": TranslateInstrumentDefinitionsResponse,
    "TranslateTradeTicketRequest": TranslateTradeTicketRequest,
    "TranslateTradeTicketsResponse": TranslateTradeTicketsResponse,
    "TriggerEvent": TriggerEvent,
    "TriggerEventAllOf": TriggerEventAllOf,
    "TypedResourceId": TypedResourceId,
    "UpdateCalendarRequest": UpdateCalendarRequest,
    "UpdateCustomEntityDefinitionRequest": UpdateCustomEntityDefinitionRequest,
    "UpdateCutLabelDefinitionRequest": UpdateCutLabelDefinitionRequest,
    "UpdateDataTypeRequest": UpdateDataTypeRequest,
    "UpdateDerivedPropertyDefinitionRequest": UpdateDerivedPropertyDefinitionRequest,
    "UpdateInstrumentIdentifierRequest": UpdateInstrumentIdentifierRequest,
    "UpdatePortfolioGroupRequest": UpdatePortfolioGroupRequest,
    "UpdatePortfolioRequest": UpdatePortfolioRequest,
    "UpdatePropertyDefinitionRequest": UpdatePropertyDefinitionRequest,
    "UpdateReconciliationRequest": UpdateReconciliationRequest,
    "UpdateRelationshipDefinitionRequest": UpdateRelationshipDefinitionRequest,
    "UpdateTaxRuleSetRequest": UpdateTaxRuleSetRequest,
    "UpdateUnitRequest": UpdateUnitRequest,
    "UpsertCdsFlowConventionsRequest": UpsertCdsFlowConventionsRequest,
    "UpsertComplexMarketDataRequest": UpsertComplexMarketDataRequest,
    "UpsertCorporateActionRequest": UpsertCorporateActionRequest,
    "UpsertCorporateActionsResponse": UpsertCorporateActionsResponse,
    "UpsertCounterpartyAgreementRequest": UpsertCounterpartyAgreementRequest,
    "UpsertCreditSupportAnnexRequest": UpsertCreditSupportAnnexRequest,
    "UpsertCustomEntitiesResponse": UpsertCustomEntitiesResponse,
    "UpsertCustomEntityAccessMetadataRequest": UpsertCustomEntityAccessMetadataRequest,
    "UpsertFlowConventionsRequest": UpsertFlowConventionsRequest,
    "UpsertIndexConventionRequest": UpsertIndexConventionRequest,
    "UpsertInstrumentEventRequest": UpsertInstrumentEventRequest,
    "UpsertInstrumentEventsResponse": UpsertInstrumentEventsResponse,
    "UpsertInstrumentPropertiesResponse": UpsertInstrumentPropertiesResponse,
    "UpsertInstrumentPropertyRequest": UpsertInstrumentPropertyRequest,
    "UpsertInstrumentsResponse": UpsertInstrumentsResponse,
    "UpsertLegalEntitiesResponse": UpsertLegalEntitiesResponse,
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
    "UpsertReconciliationBreakRequest": UpsertReconciliationBreakRequest,
    "UpsertReconciliationRunRequest": UpsertReconciliationRunRequest,
    "UpsertReferencePortfolioConstituentsRequest": UpsertReferencePortfolioConstituentsRequest,
    "UpsertReferencePortfolioConstituentsResponse": UpsertReferencePortfolioConstituentsResponse,
    "UpsertResultValuesDataRequest": UpsertResultValuesDataRequest,
    "UpsertReturnsResponse": UpsertReturnsResponse,
    "UpsertSingleStructuredDataResponse": UpsertSingleStructuredDataResponse,
    "UpsertStructuredDataResponse": UpsertStructuredDataResponse,
    "UpsertStructuredResultDataRequest": UpsertStructuredResultDataRequest,
    "UpsertTransactionPropertiesResponse": UpsertTransactionPropertiesResponse,
    "User": User,
    "ValuationRequest": ValuationRequest,
    "ValuationSchedule": ValuationSchedule,
    "ValuationsReconciliationRequest": ValuationsReconciliationRequest,
    "VendorDependency": VendorDependency,
    "VendorDependencyAllOf": VendorDependencyAllOf,
    "VendorModelRule": VendorModelRule,
    "Version": Version,
    "VersionSummaryDto": VersionSummaryDto,
    "VersionedResourceListOfA2BDataRecord": VersionedResourceListOfA2BDataRecord,
    "VersionedResourceListOfA2BMovementRecord": VersionedResourceListOfA2BMovementRecord,
    "VersionedResourceListOfJELines": VersionedResourceListOfJELines,
    "VersionedResourceListOfOutputTransaction": VersionedResourceListOfOutputTransaction,
    "VersionedResourceListOfPortfolioHolding": VersionedResourceListOfPortfolioHolding,
    "VersionedResourceListOfTransaction": VersionedResourceListOfTransaction,
    "VersionedResourceListWithWarningsOfPortfolioHolding": VersionedResourceListWithWarningsOfPortfolioHolding,
    "VirtualDocument": VirtualDocument,
    "VirtualDocumentRow": VirtualDocumentRow,
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
