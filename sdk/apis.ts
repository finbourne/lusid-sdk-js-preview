import {AborApi} from './api/aborApi';
import {AborConfigurationApi} from './api/aborConfigurationApi';
import {AddressKeyDefinitionApi} from './api/addressKeyDefinitionApi';
import {AggregatedReturnsApi} from './api/aggregatedReturnsApi';
import {AggregationApi} from './api/aggregationApi';
import {AllocationsApi} from './api/allocationsApi';
import {AmortisationRuleSetsApi} from './api/amortisationRuleSetsApi';
import {ApplicationMetadataApi} from './api/applicationMetadataApi';
import {BlocksApi} from './api/blocksApi';
import {CalendarsApi} from './api/calendarsApi';
import {ChartOfAccountsApi} from './api/chartOfAccountsApi';
import {ComplexMarketDataApi} from './api/complexMarketDataApi';
import {ComplianceApi} from './api/complianceApi';
import {ConfigurationRecipeApi} from './api/configurationRecipeApi';
import {ConventionsApi} from './api/conventionsApi';
import {CorporateActionSourcesApi} from './api/corporateActionSourcesApi';
import {CounterpartiesApi} from './api/counterpartiesApi';
import {CustomDataModelsApi} from './api/customDataModelsApi';
import {CustomEntitiesApi} from './api/customEntitiesApi';
import {CustomEntityDefinitionsApi} from './api/customEntityDefinitionsApi';
import {CustomEntityTypesApi} from './api/customEntityTypesApi';
import {CutLabelDefinitionsApi} from './api/cutLabelDefinitionsApi';
import {DataTypesApi} from './api/dataTypesApi';
import {DerivedTransactionPortfoliosApi} from './api/derivedTransactionPortfoliosApi';
import {EntitiesApi} from './api/entitiesApi';
import {ExecutionsApi} from './api/executionsApi';
import {FeeTypesApi} from './api/feeTypesApi';
import {FundConfigurationApi} from './api/fundConfigurationApi';
import {FundsApi} from './api/fundsApi';
import {GroupReconciliationsApi} from './api/groupReconciliationsApi';
import {IdentifierDefinitionsApi} from './api/identifierDefinitionsApi';
import {InstrumentEventTypesApi} from './api/instrumentEventTypesApi';
import {InstrumentEventsApi} from './api/instrumentEventsApi';
import {InstrumentsApi} from './api/instrumentsApi';
import {InvestorRecordsApi} from './api/investorRecordsApi';
import {LegacyComplianceApi} from './api/legacyComplianceApi';
import {LegalEntitiesApi} from './api/legalEntitiesApi';
import {OrderGraphApi} from './api/orderGraphApi';
import {OrderInstructionsApi} from './api/orderInstructionsApi';
import {OrderManagementApi} from './api/orderManagementApi';
import {OrdersApi} from './api/ordersApi';
import {PackagesApi} from './api/packagesApi';
import {ParticipationsApi} from './api/participationsApi';
import {PersonsApi} from './api/personsApi';
import {PlacementsApi} from './api/placementsApi';
import {PortfolioGroupsApi} from './api/portfolioGroupsApi';
import {PortfoliosApi} from './api/portfoliosApi';
import {PropertyDefinitionsApi} from './api/propertyDefinitionsApi';
import {QueryableKeysApi} from './api/queryableKeysApi';
import {QuotesApi} from './api/quotesApi';
import {ReconciliationsApi} from './api/reconciliationsApi';
import {ReferenceListsApi} from './api/referenceListsApi';
import {ReferencePortfolioApi} from './api/referencePortfolioApi';
import {RelationDefinitionsApi} from './api/relationDefinitionsApi';
import {RelationsApi} from './api/relationsApi';
import {RelationshipDefinitionsApi} from './api/relationshipDefinitionsApi';
import {RelationshipsApi} from './api/relationshipsApi';
import {SchemasApi} from './api/schemasApi';
import {ScopesApi} from './api/scopesApi';
import {ScriptedTranslationApi} from './api/scriptedTranslationApi';
import {SearchApi} from './api/searchApi';
import {SequencesApi} from './api/sequencesApi';
import {SimplePositionPortfoliosApi} from './api/simplePositionPortfoliosApi';
import {StagedModificationsApi} from './api/stagedModificationsApi';
import {StagingRuleSetApi} from './api/stagingRuleSetApi';
import {StructuredResultDataApi} from './api/structuredResultDataApi';
import {SystemConfigurationApi} from './api/systemConfigurationApi';
import {TaxRuleSetsApi} from './api/taxRuleSetsApi';
import {TimelinesApi} from './api/timelinesApi';
import {TransactionConfigurationApi} from './api/transactionConfigurationApi';
import {TransactionFeesApi} from './api/transactionFeesApi';
import {TransactionPortfoliosApi} from './api/transactionPortfoliosApi';
import {TranslationApi} from './api/translationApi';
import {WorkspaceApi} from './api/workspaceApi';

export class Api {
    public abor:  AborApi
    public aborConfiguration:  AborConfigurationApi
    public addressKeyDefinition:  AddressKeyDefinitionApi
    public aggregatedReturns:  AggregatedReturnsApi
    public aggregation:  AggregationApi
    public allocations:  AllocationsApi
    public amortisationRuleSets:  AmortisationRuleSetsApi
    public applicationMetadata:  ApplicationMetadataApi
    public blocks:  BlocksApi
    public calendars:  CalendarsApi
    public chartOfAccounts:  ChartOfAccountsApi
    public complexMarketData:  ComplexMarketDataApi
    public compliance:  ComplianceApi
    public configurationRecipe:  ConfigurationRecipeApi
    public conventions:  ConventionsApi
    public corporateActionSources:  CorporateActionSourcesApi
    public counterparties:  CounterpartiesApi
    public customDataModels:  CustomDataModelsApi
    public customEntities:  CustomEntitiesApi
    public customEntityDefinitions:  CustomEntityDefinitionsApi
    public customEntityTypes:  CustomEntityTypesApi
    public cutLabelDefinitions:  CutLabelDefinitionsApi
    public dataTypes:  DataTypesApi
    public derivedTransactionPortfolios:  DerivedTransactionPortfoliosApi
    public entities:  EntitiesApi
    public executions:  ExecutionsApi
    public feeTypes:  FeeTypesApi
    public fundConfiguration:  FundConfigurationApi
    public funds:  FundsApi
    public groupReconciliations:  GroupReconciliationsApi
    public identifierDefinitions:  IdentifierDefinitionsApi
    public instrumentEventTypes:  InstrumentEventTypesApi
    public instrumentEvents:  InstrumentEventsApi
    public instruments:  InstrumentsApi
    public investorRecords:  InvestorRecordsApi
    public legacyCompliance:  LegacyComplianceApi
    public legalEntities:  LegalEntitiesApi
    public orderGraph:  OrderGraphApi
    public orderInstructions:  OrderInstructionsApi
    public orderManagement:  OrderManagementApi
    public orders:  OrdersApi
    public packages:  PackagesApi
    public participations:  ParticipationsApi
    public persons:  PersonsApi
    public placements:  PlacementsApi
    public portfolioGroups:  PortfolioGroupsApi
    public portfolios:  PortfoliosApi
    public propertyDefinitions:  PropertyDefinitionsApi
    public queryableKeys:  QueryableKeysApi
    public quotes:  QuotesApi
    public reconciliations:  ReconciliationsApi
    public referenceLists:  ReferenceListsApi
    public referencePortfolio:  ReferencePortfolioApi
    public relationDefinitions:  RelationDefinitionsApi
    public relations:  RelationsApi
    public relationshipDefinitions:  RelationshipDefinitionsApi
    public relationships:  RelationshipsApi
    public schemas:  SchemasApi
    public scopes:  ScopesApi
    public scriptedTranslation:  ScriptedTranslationApi
    public search:  SearchApi
    public sequences:  SequencesApi
    public simplePositionPortfolios:  SimplePositionPortfoliosApi
    public stagedModifications:  StagedModificationsApi
    public stagingRuleSet:  StagingRuleSetApi
    public structuredResultData:  StructuredResultDataApi
    public systemConfiguration:  SystemConfigurationApi
    public taxRuleSets:  TaxRuleSetsApi
    public timelines:  TimelinesApi
    public transactionConfiguration:  TransactionConfigurationApi
    public transactionFees:  TransactionFeesApi
    public transactionPortfolios:  TransactionPortfoliosApi
    public translation:  TranslationApi
    public workspace:  WorkspaceApi
}
