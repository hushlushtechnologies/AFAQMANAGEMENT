import type { FreezoneData } from "@/lib/freezones/types";
import { accountingServices } from "./accounting-services";
import { bookkeepingServices } from "./bookkeeping-services";
import { backlogAccounting } from "./backlog-accounting";
import { outsourceAccounting } from "./outsource-accounting";
import { accountReconciliation } from "./account-reconciliation";
import { payrollServices } from "./payroll-services";
import { forensicAccounting } from "./forensic-accounting";
import { financialReporting } from "./financial-reporting";
import { accountingSupervision } from "./accounting-supervision";
import { accountantSecondment } from "./accountant-secondment";
import { auditingServices } from "./auditing-services";
import { externalAudit } from "./external-audit";
import { internalAudit } from "./internal-audit";
import { financialStatementAudit } from "./financial-statement-audit";
import { ifrsCompliance } from "./ifrs-compliance";
import { riskManagement } from "./risk-management";
import { operationalAudit } from "./operational-audit";
import { complianceAudit } from "./compliance-audit";
import { financialControlAudit } from "./financial-control-audit";
import { independentReview } from "./independent-review";
import { investigationAudit } from "./investigation-audit";
import { informationSystemAudit } from "./information-system-audit";
import { recoveryAudit } from "./recovery-audit";
import { corporateTaxRegistration } from "./corporate-tax-registration";
import { corporateTaxDeregistration } from "./corporate-tax-deregistration";
import { transferPricing } from "./transfer-pricing";
import { vatRegistration } from "./vat-registration";
import { vatFines } from "./vat-fines";
import { vatFaqs } from "./vat-faqs";
import { vatAssessmentAppeals } from "./vat-assessment-appeals";
import { vatComplianceAudit } from "./vat-compliance-audit";
import { vatReturnsFiling } from "./vat-returns-filing";
import { vatTraining } from "./vat-training";
import { vatRefund } from "./vat-refund";
import { amlCompliance } from "./aml-compliance";
import { cfoServices } from "./cfo-services";
import { icvCertification } from "./icv-certification";
import { liquidationServices } from "./liquidation-services";
import { accountingSoftware } from "./accounting-software";
import { mergersAcquisitions } from "./mergers-acquisitions";
import { financialFeasibility } from "./financial-feasibility";
import { businessStrategyPlanning } from "./business-strategy-planning";
import { businessSuccessionPlanning } from "./business-succession-planning";
import { businessRestructuring } from "./business-restructuring";

// Accounting & tax pages reuse the shared page template.
export const accountingPages: Record<string, FreezoneData> = {
  "accounting-services": accountingServices,
  "bookkeeping-services": bookkeepingServices,
  "backlog-accounting": backlogAccounting,
  "outsource-accounting": outsourceAccounting,
  "account-reconciliation": accountReconciliation,
  "payroll-services": payrollServices,
  "forensic-accounting": forensicAccounting,
  "financial-reporting": financialReporting,
  "accounting-supervision": accountingSupervision,
  "accountant-secondment": accountantSecondment,
  "auditing-services": auditingServices,
  "external-audit": externalAudit,
  "internal-audit": internalAudit,
  "financial-statement-audit": financialStatementAudit,
  "ifrs-compliance": ifrsCompliance,
  "risk-management": riskManagement,
  "operational-audit": operationalAudit,
  "compliance-audit": complianceAudit,
  "financial-control-audit": financialControlAudit,
  "independent-review": independentReview,
  "investigation-audit": investigationAudit,
  "information-system-audit": informationSystemAudit,
  "recovery-audit": recoveryAudit,
  "corporate-tax-registration": corporateTaxRegistration,
  "corporate-tax-deregistration": corporateTaxDeregistration,
  "transfer-pricing": transferPricing,
  "vat-registration": vatRegistration,
  "vat-fines": vatFines,
  "vat-faqs": vatFaqs,
  "vat-assessment-appeals": vatAssessmentAppeals,
  "vat-compliance-audit": vatComplianceAudit,
  "vat-returns-filing": vatReturnsFiling,
  "vat-training": vatTraining,
  "vat-refund": vatRefund,
  "aml-compliance": amlCompliance,
  "cfo-services": cfoServices,
  "icv-certification": icvCertification,
  "liquidation-services": liquidationServices,
  "accounting-software": accountingSoftware,
  "mergers-acquisitions": mergersAcquisitions,
  "financial-feasibility": financialFeasibility,
  "business-strategy-planning": businessStrategyPlanning,
  "business-succession-planning": businessSuccessionPlanning,
  "business-restructuring": businessRestructuring,
};
