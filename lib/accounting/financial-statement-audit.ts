import type { FreezoneData } from "@/lib/freezones/types";

// TODO(client): confirm auditor registration / partner audit firm (see auditing-services.ts).

export const financialStatementAudit: FreezoneData = {
  slug: "financial-statement-audit",
  category: "Accounting & Tax",
  name: "Financial Statement Audit in Dubai",
  shortName: "Financial Statement Audit",
  hero: {
    eyebrow: "Financial Statement Audit · UAE",
    title: "Financial Statement Audit Services in UAE",
    highlight: "Credibility for Your Reported Numbers",
    subtitle: "An independent audit of your annual financial statements, with a clear auditor's report.",
    intro:
      "Most UAE companies must file annual financial statements with an auditor's report. Mainland companies are required to by the Commercial Companies Law, and most free zones require it for licence renewal. Afaq Al Khaleej audits your financial statements so you can meet those requirements and give lenders, investors and suppliers confidence in your numbers.",
    chips: ["Risk-based planning", "Internal controls testing", "Substantive procedures", "Auditor's report"],
    image: "/images/services/feasibility-studies.png",
  },
  stats: [
    { value: "3 phases", label: "Plan · Test controls · Substantive" },
    { value: "7", label: "Key areas tested" },
    { value: "ISA", label: "Auditing standards" },
    { value: "True & fair", label: "Opinion on your statements" },
  ],

  about: {
    heading: "What Is a Financial Statement Audit?",
    body:
      "A financial statement audit is an independent examination of a company's financial statements and related disclosures. The auditor gives an opinion on whether they present a true and fair view of financial position and performance, and the auditor's report is issued with the statements to everyone who receives them. The aim is to add credibility to what management reports.",
    location: { name: "Trusted by lenders & investors", area: "Audited statements for every stakeholder", image: "/images/services/investment-services.png" },
    features: [
      { icon: "licence", title: "Regulatory Filing", text: "Meets company law and free zone requirements." },
      { icon: "bank", title: "Lender Requirements", text: "Banks ask for audited statements before lending." },
      { icon: "trading", title: "Supplier Credit", text: "Suppliers may review them before extending credit." },
      { icon: "multiple", title: "Listed Companies", text: "Public companies must file audited annual reports." },
      { icon: "award", title: "Investor Assurance", text: "Statements free from material misstatement." },
      { icon: "tax", title: "Tax Support", text: "A reliable base for corporate tax returns." },
    ],
  },

  activities: {
    eyebrow: "Our Approach",
    heading: "The Three Phases of a Financial Statement Audit",
    intro: "Every audit is tailored to your organisation, with the depth of work matched to the level of risk.",
    groups: [
      { icon: "activities", title: "1. Planning & Risk Assessment", text: "We get to know your business and its environment, then assess the risk of misstatement. Higher-risk areas get more rigorous procedures, and lower-risk areas need less extensive testing.", tags: ["Understanding", "Risk"] },
      { icon: "services", title: "2. Internal Controls Testing", text: "We test the controls that prevent errors and fraud, focusing on segregation of duties, authorisation and safeguarding of assets. Strong controls mean a shorter audit. Weak controls call for more detailed testing.", tags: ["Segregation", "Authorisation"] },
      { icon: "licence", title: "3. Substantive Procedures", text: "Based on the risk assessment, we test each line item in the financial statements and the disclosures in the notes.", tags: ["Line items", "Disclosures"] },
    ],
  },

  structures: {
    heading: "Substantive Procedures by Area",
    intro: "Typical procedures we perform, adapted to your business.",
    groups: [
      {
        title: "Audit objectives",
        items: [
          { title: "Express an opinion", text: "On the financial statements prepared by management." },
          { title: "Right framework", text: "Statements prepared under recognised accounting policies and statutory requirements." },
          { title: "Full disclosure", text: "All material matters disclosed in the report." },
        ],
      },
    ],
    table: {
      title: "Key procedures",
      columns: ["Area", "Procedures"],
      rows: [
        ["Cash", "Bank statements and reconciliations reviewed, petty cash and cash on hand counted, cashier interviewed, bank confirmations obtained"],
        ["Accounts receivable", "Closing balances checked, reconciliations reviewed, positive and negative confirmations sent, cut-off and year-end sales tested"],
        ["Inventory", "Physical stock count, supplier invoices examined, cut-off and receiving/shipping tested, third-party stock confirmed, overhead allocation tested"],
        ["Accounts payable", "Cut-off tested and balances confirmed"],
        ["Fixed assets", "Assets observed, purchases and disposals checked for authorisation, depreciation recalculated, impairment tested"],
        ["Revenue", "Sales invoices reviewed, customer confirmations sent, subsequent returns, discounts and unusual prices reviewed"],
        ["Expenses", "Bills and subsequent transactions evaluated"],
      ],
    },
  },

  features: {
    eyebrow: "Why It Matters",
    heading: "The Importance of a Financial Statement Audit",
    items: [
      { status: "yes", text: "Improves business processes by highlighting control weaknesses" },
      { status: "yes", text: "Gives investors a high level of assurance" },
      { status: "yes", text: "Confirms a true and fair view in all material respects" },
      { status: "yes", text: "Makes reports consistent and comparable across companies" },
      { status: "yes", text: "Supports lending and trade-credit decisions" },
      { status: "yes", text: "Meets legal and licensing requirements" },
    ],
  },

  process: {
    heading: "Our Audit Principles",
    intro: "The basic principles that guide every audit we perform.",
    cautionTitle: "Management's responsibility",
    caution: "Management is responsible for preparing the financial statements. The auditor's role is to give an independent opinion on them.",
    steps: [
      { title: "Integrity", text: "A fair and honest report." },
      { title: "Confidentiality", text: "Your information is never disclosed to third parties without authority." },
      { title: "Skill & competence", text: "A trained team with the right expertise." },
      { title: "Effective & timely", text: "Audits planned and carried out efficiently." },
      { title: "Standards", text: "Work performed under International Standards on Auditing." },
    ],
  },

  documents: {
    heading: "Documents Needed for the Audit",
    image: "/images/investment/pitch-folder.png",
    intro: "Prepare these to keep the audit on schedule.",
    items: [
      "Draft financial statements and trial balance",
      "General ledger and supporting schedules",
      "Bank statements and reconciliations",
      "Receivable, payable and inventory listings",
      "Fixed asset register",
      "Key contracts, loan and lease agreements",
      "Trade licence, MOA and previous audit report",
    ],
  },

  cost: {
    heading: "Financial Statement Audit Fees",
    intro:
      "Fees depend on your size, complexity and how ready your records are. Share your year-end, licensing authority and last year's figures, and we'll send a written proposal.",
    notes: ["Revenue & volume", "Inventory & assets", "Number of entities", "Record readiness", "Deadline"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Get Your Statements Audited with",
    paragraph: "A methodical, risk-based audit that adds credibility to your numbers, with full support throughout.",
    cards: [
      { title: "Tailored Procedures", text: "Audit work matched to your risks." },
      { title: "Clear Communication", text: "Findings and control points explained." },
      { title: "Confidential", text: "Your information is protected at every stage." },
    ],
    quoteTitle: "Request a financial statement",
    quoteText: "Tell us your year-end and licensing authority, and we'll send a written audit proposal.",
  },

  included: [
    "Planning & risk assessment",
    "Internal controls testing",
    "Substantive testing",
    "Third-party confirmations",
    "Auditor's report",
    "Management letter",
  ],

  faqs: [
    { question: "Is a financial statement audit mandatory in the UAE?", answer: "For most companies, yes. Mainland companies must appoint an auditor under the Commercial Companies Law, and most free zones require audited statements for licence renewal. Corporate tax rules also require audited statements for certain businesses." },
    { question: "What is the purpose of a financial statement audit?", answer: "To add credibility to the reported financial position and performance, so regulators, lenders, investors and suppliers can rely on them." },
    { question: "What does the auditor's opinion say?", answer: "Whether the financial statements present a true and fair view, in all material respects, under the applicable financial reporting framework." },
    { question: "Why are internal controls tested?", answer: "Strong controls reduce the risk of misstatement and the amount of detailed testing needed. Weak controls mean more extensive procedures." },
    { question: "What are substantive procedures?", answer: "Detailed tests of balances and transactions, such as confirmations, stock counts and invoice reviews, to gather evidence for each line item." },
    { question: "Who prepares the financial statements?", answer: "Management prepares them. The auditor examines them independently. If you need help preparing statements, our accounting team can assist, but a different, independent auditor must then audit them." },
  ],
};
