import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Building2,
  Calculator,
  ChartColumnIncreasing,
  FileText,
  Globe,
  Landmark,
  Receipt,
  UserCog,
} from "lucide-react";

export type MegaLink = {
  label: string;
  href: string;
  /** "silver" renders the pill with the silver gradient (e.g. offers) */
  variant?: "gold" | "silver";
};

export type MegaTab = {
  label: string;
  icon: LucideIcon;
  links: MegaLink[];
  /** "pills" = gradient buttons (default), "list" = column text links */
  display?: "pills" | "list";
  /** number of columns for "list" display (default 3) */
  columns?: 2 | 3;
  /** optional headed groups — each group renders as its own column */
  groups?: { title: string; links: MegaLink[] }[];
};

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
  /** When set, the item opens a full-width tabbed mega menu instead of a dropdown */
  mega?: MegaTab[];
  /** When set, the item opens a simple 2-column link panel (no tabs) */
  megaList?: MegaLink[];
};

// Detail pages for these services don't exist yet — every pill points to the
// contact page for now. Swap each href for its real route once the page is built.
export const ENQUIRE = "/contact-us";

export const businessSetupMenu: MegaTab[] = [
  {
    label: "Company Formation",
    icon: FileText,
    links: [
      { label: "Business Setup in Dubai", href: "/business-setup-in-dubai" },
      { label: "Business Setup in KSA", href: "/business-setup-in-ksa" },
      { label: "Get Offers!", href: "/offers", variant: "silver" },
    ],
  },
  {
    label: "Freezone",
    icon: Building2,
    display: "list",
    links: [],
    groups: [
      {
        title: "Dubai Freezones",
        links: [
          { label: "MEYDAN", href: "/freezone/meydan" },
          { label: "IFZA", href: "/freezone/ifza" },
          { label: "DMCC", href: "/freezone/dmcc" },
          { label: "DIFC", href: "/freezone/difc" },
        ],
      },
      {
        title: "Sharjah Freezones",
        links: [
          { label: "SRTIP", href: "/freezone/srtip" },
          { label: "SHAMS", href: "/freezone/shams" },
          { label: "SPC", href: "/freezone/spc" },
        ],
      },
      {
        title: "Other Freezones",
        links: [
          { label: "Ras Al Khaimah Freezone", href: "/freezone/rakez" },
          { label: "Ajman Freezone", href: "/freezone/ajman-media-city" },
          { label: "Umm Al Quwain Freezone", href: "/freezone/uaq" },
          { label: "Abu Dhabi Freezone", href: "/freezone/abu-dhabi" },
        ],
      },
    ],
  },
  {
    label: "Mainland",
    icon: Landmark,
    display: "list",
    columns: 2,
    links: [
      { label: "Dubai Mainland", href: "/mainland/dubai" },
      { label: "Sharjah Mainland", href: "/mainland/sharjah" },
      { label: "Abu Dhabi Mainland", href: "/mainland/abu-dhabi" },
      { label: "Ajman Mainland", href: "/mainland/ajman" },
      // { label: "RAK Mainland", href: ENQUIRE }, // hidden for now
      { label: "UAQ Mainland", href: "/mainland/uaq" },
      // { label: "Fujairah Mainland", href: ENQUIRE }, // hidden for now
    ],
  },
  {
    label: "Offshore",
    icon: Globe,
    display: "list",
    columns: 2,
    links: [
      { label: "Dubai Offshore", href: "/offshore/dubai" },
      { label: "RAKICC", href: "/offshore/rakicc" },
      { label: "BVI", href: "/offshore/bvi" },
      { label: "Cayman Islands", href: "/offshore/cayman-islands" },
      { label: "Mauritius", href: "/offshore/mauritius" },
    ],
  },
  {
    label: "Business Licensing",
    icon: BadgeCheck,
    display: "list",
    columns: 2,
    links: [
      { label: "Trade License", href: "/licensing/trade-license" },
      { label: "Ecommerce License", href: "/licensing/ecommerce-license" },
      { label: "General Trading License", href: "/licensing/general-trading-license" },
      { label: "Professional License", href: "/licensing/professional-license" },
      { label: "Commercial License", href: "/licensing/commercial-license" },
      { label: "Industrial License", href: "/licensing/industrial-license" },
    ],
  },
];

export const accountingTaxMenu: MegaTab[] = [
  {
    label: "Accounting",
    icon: Calculator,
    display: "list",
    links: [
      { label: "Accounting Services", href: "/accounting/accounting-services" },
      { label: "Bookkeeping Services", href: "/accounting/bookkeeping-services" },
      { label: "Updating of Backlog Accounts", href: "/accounting/backlog-accounting" },
      { label: "Outsource Accounting Services", href: "/accounting/outsource-accounting" },
      { label: "Account Reconciliation Services", href: "/accounting/account-reconciliation" },
      { label: "Payroll Services", href: "/accounting/payroll-services" },
      { label: "Forensic Accounting", href: "/accounting/forensic-accounting" },
      { label: "Financial Reporting", href: "/accounting/financial-reporting" },
      { label: "Accounting Supervision Services", href: "/accounting/accounting-supervision" },
      { label: "Accountant Secondment", href: "/accounting/accountant-secondment" },
    ],
  },
  {
    label: "Auditing",
    icon: ChartColumnIncreasing,
    display: "list",
    columns: 3,
    links: [
      { label: "Auditing Services", href: "/accounting/auditing-services" },
      { label: "External Audit", href: "/accounting/external-audit" },
      { label: "Internal Audit", href: "/accounting/internal-audit" },
      { label: "Financial Statement", href: "/accounting/financial-statement-audit" },
      { label: "IFRS Compliance", href: "/accounting/ifrs-compliance" },
      { label: "Risk Management", href: "/accounting/risk-management" },
      { label: "Operational Audit", href: "/accounting/operational-audit" },
      { label: "Compliance Audit", href: "/accounting/compliance-audit" },
      { label: "Financial Control Audit", href: "/accounting/financial-control-audit" },
      { label: "Independent Review", href: "/accounting/independent-review" },
      { label: "Investigation Audit", href: "/accounting/investigation-audit" },
      { label: "Information System Audit", href: "/accounting/information-system-audit" },
      { label: "Recovery Audit", href: "/accounting/recovery-audit" },
    ],
  },
  {
    label: "TAX Services",
    icon: Receipt,
    display: "list",
    links: [],
    groups: [
      {
        title: "Corporate Tax",
        links: [
          { label: "Corporate Tax Registration", href: "/accounting/corporate-tax-registration" },
          { label: "Corporate Tax Deregistration", href: "/accounting/corporate-tax-deregistration" },
          { label: "Corporate Tax Assessment", href: "/accounting/corporate-tax-registration" },
          { label: "Corporate Tax Filing", href: "/accounting/corporate-tax-registration" },
          { label: "Transfer Pricing", href: "/accounting/transfer-pricing" },
        ],
      },
      {
        title: "VAT Services",
        links: [
          { label: "VAT Registration", href: "/accounting/vat-registration" },
          { label: "VAT Consultants", href: "/accounting/vat-registration" },
          { label: "VAT Fines", href: "/accounting/vat-fines" },
          { label: "Value Added Tax (FAQs)", href: "/accounting/vat-faqs" },
          { label: "VAT Assessment and Appeals", href: "/accounting/vat-assessment-appeals" },
        ],
      },
      {
        // continuation of VAT Services (no heading, matches reference layout)
        title: "",
        links: [
          { label: "VAT Compliance Audit", href: "/accounting/vat-compliance-audit" },
          { label: "VAT Returns Filing", href: "/accounting/vat-returns-filing" },
          { label: "VAT Training", href: "/accounting/vat-training" },
          { label: "VAT Refund", href: "/accounting/vat-refund" },
        ],
      },
    ],
  },
  {
    label: "Other Services",
    icon: UserCog,
    display: "list",
    links: [],
    // untitled groups = plain columns (4 / 3 / 3, matching the reference layout)
    groups: [
      {
        title: "",
        links: [
          { label: "Anti-Money Laundering (AML)", href: "/accounting/aml-compliance" },
          { label: "CFO Services", href: "/accounting/cfo-services" },
          { label: "ICV Certification", href: "/accounting/icv-certification" },
          { label: "Liquidation Services", href: "/accounting/liquidation-services" },
        ],
      },
      {
        title: "",
        links: [
          { label: "Accounting Software", href: "/accounting/accounting-software" },
          { label: "Mergers & Acquisitions", href: "/accounting/mergers-acquisitions" },
          { label: "Financial Feasibility", href: "/accounting/financial-feasibility" },
        ],
      },
      {
        title: "",
        links: [
          { label: "Business Strategy & Planning", href: "/accounting/business-strategy-planning" },
          { label: "Business Succession Planning", href: "/accounting/business-succession-planning" },
          { label: "Business Restructuring", href: "/accounting/business-restructuring" },
        ],
      },
    ],
  },
];

export const businessSupportMenu: MegaLink[] = [
  { label: "Legal Services", href: "/business-support/legal-services" },
  { label: "Bank Account Opening", href: "/business-support/bank-account-opening" },
  { label: "Golden Visa", href: "/business-support/golden-visa" },
  { label: "UAE Foundation", href: "/business-support/uae-foundation" },
  { label: "Trademark Registration", href: "/business-support/trademark-registration" },
  // { label: "Virtual Receptionist", href: ENQUIRE }, // disabled for now
  { label: "PRO Services", href: "/business-support/pro-services" },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Business Setup", href: "/services", mega: businessSetupMenu },
  { label: "Accounting & Tax", href: "/services", mega: accountingTaxMenu },
  { label: "Business Support", href: "/services", megaList: businessSupportMenu },

  // Hidden for now — restore when needed.
  // {
  //   label: "Our Services",
  //   href: "/services",
  //   children: [
  //     { label: "Investment Services", href: "/services/investment-services" },
  //     { label: "Business Consultancy", href: "/services/business-consultancy" },
  //     { label: "PRO & Government Services", href: "/services/pro-government-services" },
  //     { label: "Company Formation", href: "/services/company-formation" },
  //     { label: "Feasibility Studies", href: "/services/feasibility-studies" },
  //     { label: "Digital Business Solutions", href: "/services/digital-business-solutions" },
  //     { label: "Finance Management", href: "/services/finance-management" },
  //   ],
  // },
  // { label: "Investment Opportunities", href: "/investment-opportunities" },
];
