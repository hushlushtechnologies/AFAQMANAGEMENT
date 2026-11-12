import type { FreezoneData } from "@/lib/freezones/types";

// TODO(client): confirm how Afaq delivers statutory audits — as a registered audit firm
// (and with which free zones / Ministry of Economy) or through a partner audit firm.
// Copy below avoids claiming registration until confirmed.

export const auditingServices: FreezoneData = {
  slug: "auditing-services",
  category: "Accounting & Tax",
  name: "Auditing Services in Dubai",
  shortName: "Auditing",
  hero: {
    eyebrow: "Audit & Assurance · Dubai",
    title: "Auditing Services in Dubai",
    highlight: "Accurate Audits, Full Compliance",
    subtitle: "Independent audits that build trust in your financial information and keep you compliant.",
    intro:
      "An audit makes your financial information more trustworthy for investors, lenders and other stakeholders. Afaq Al Khaleej provides audit services to companies of every size across the UAE, combining local knowledge with professionalism, ethics, quality and diligence. You also get practical insight to improve your operations.",
    chips: ["Statutory & external audit", "Internal audit", "Free zone audit reports", "VAT & corporate tax checks"],
    image: "/images/services/business-consultancy.png",
  },
  stats: [
    { value: "8", label: "Types of audit" },
    { value: "ISA", label: "International Standards on Auditing" },
    { value: "IFRS", label: "Financial reporting framework" },
    { value: "Mainland & FZ", label: "Companies supported" },
  ],

  about: {
    heading: "Why Your Business Needs an Audit in the UAE",
    body:
      "An audit is an impartial, external assessment of the financial statements prepared by management. Many UAE free zones require audited accounts for licence renewal, corporate tax rules require them for some businesses, and banks, investors and partners often ask for them too. Beyond compliance, an audit gives you confidence in your numbers and a clear view of your risks.",
    location: { name: "Independent view of your numbers", area: "Mainland & free zone companies", image: "/images/services/business-consultancy/growth-expansion.png" },
    features: [
      { icon: "licence", title: "Compliance", text: "Meet legal, regulatory and free zone requirements." },
      { icon: "activities", title: "Financial Accuracy", text: "Confidence that your statements are reliable." },
      { icon: "ownership", title: "Fraud Detection", text: "Help uncover misappropriation and irregularities." },
      { icon: "services", title: "Internal Controls", text: "Weaknesses identified, with improvements recommended." },
      { icon: "trading", title: "Stakeholder Confidence", text: "Transparency for investors, lenders and customers." },
      { icon: "award", title: "Better Decisions", text: "Reliable insight for planning and strategy." },
    ],
  },

  features: {
    placement: "early",
    eyebrow: "More Reasons to Audit",
    heading: "What an Audit Does for Your Business",
    items: [
      { status: "yes", text: "Assesses operational, financial and strategic risks" },
      { status: "yes", text: "Evaluates department and process performance" },
      { status: "yes", text: "Checks compliance with contracts and agreements" },
      { status: "yes", text: "Supports due diligence for mergers and acquisitions" },
      { status: "yes", text: "Meets requirements of banks, insurers and authorities" },
      { status: "yes", text: "Strengthens corporate governance" },
      { status: "yes", text: "Encourages continuous improvement" },
      { status: "yes", text: "Meets industry-specific audit requirements" },
    ],
  },

  activities: {
    eyebrow: "Our Audit Services",
    heading: "Comprehensive Audit Services in Dubai",
    intro: "From statutory audits to targeted reviews, matched to what your business, regulators and stakeholders need.",
    groups: [
      { icon: "licence", title: "External & Statutory Audit", text: "An independent audit of your annual financial statements under International Standards on Auditing, giving an opinion on whether they present a true and fair view.", tags: ["ISA", "Licence renewal"] },
      { icon: "services", title: "Internal Audit", text: "Commissioned by owners or the board to monitor and improve effectiveness, check compliance, validate financial information, verify processes and shape risk policies.", tags: ["Controls", "Governance"] },
      { icon: "tax", title: "Tax Audit", text: "A review of VAT and corporate tax records, returns and supporting documents for FTA compliance.", tags: ["VAT", "Corporate tax"] },
      { icon: "activities", title: "Risk Management Audit", text: "Identifies key risks and checks that controls to manage them are working.", tags: ["Risk"] },
      { icon: "trading", title: "Operational Audit", text: "Reviews the efficiency and effectiveness of operations and processes.", tags: ["Efficiency"] },
      { icon: "ownership", title: "Compliance, Financial Control & Independent Review", text: "Checks adherence to laws, policies and financial controls, or gives a limited-assurance review where a full audit isn't required.", tags: ["Compliance", "Review"] },
    ],
  },

  cost: {
    heading: "Audit Fees",
    intro:
      "Audit fees depend on the size and complexity of your business and how ready your records are. Share your licensing authority, year-end and last year's figures, and we'll send a written proposal.",
    notes: ["Revenue & transaction volume", "Licensing authority", "Number of entities", "Record readiness", "Reporting deadline"],
  },

  process: {
    heading: "How an Audit Works: Step by Step",
    intro: "A structured process, agreed with you upfront, that keeps the auditor independent and the timeline predictable.",
    steps: [
      { title: "Agree scope", text: "We discuss your requirements, reporting framework and timetable, and agree the audit scope." },
      { title: "Document preparation", text: "You provide the previous audit report, financial statements, ledgers, bank statements, receipts and, where relevant, board minutes and company regulations." },
      { title: "Fieldwork", text: "We test records, gather evidence, note observations and confirm balances with third parties such as banks." },
      { title: "Report preparation", text: "Findings are drafted into the audit report and a management letter on controls and risks." },
      { title: "Closing meeting", text: "We discuss the findings and recommendations with management and issue the final report." },
    ],
  },

  documents: {
    heading: "Documents Needed to Start an Audit",
    image: "/images/about/vision-ring.png",
    intro: "Have these ready to keep the audit on schedule.",
    items: [
      "Bank statements",
      "Bank confirmations for balances and transactions",
      "Sales and purchase invoices",
      "Trade licence, MOA and AOA",
      "VAT and corporate tax registration certificates",
      "Expense details",
      "KYC documents of shareholders and managers",
      "Previous year's audited financial statements, if any",
    ],
  },

  infoBlock: {
    eyebrow: "What We Examine",
    heading: "Areas Covered by the Audit",
    paragraphs: [
      "Auditors collect evidence and record their observations during the examination. These form the basis of the audit opinion and the recommendations given to business owners.",
      "Financial statements should be prepared under International Financial Reporting Standards, taking into account any specific requirements of your free zone or licensing authority.",
    ],
    listTitle: "The audit covers",
    list: [
      "Accuracy of financial statements and records against applicable standards",
      "Indicators of fraud, money laundering and creative accounting",
      "Compliance with VAT and corporate tax rules",
      "Proper maintenance of books and records",
    ],
  },

  tax: {
    eyebrow: "Additional Services",
    heading: "Support Beyond the Audit",
    paragraphs: ["We can also help with the work around your audit, and with growing your business."],
    cards: [
      { value: "01", title: "VAT-Compliant Accounting", text: "Books kept ready for audit and tax filing." },
      { value: "02", title: "Feasibility Study & Business Plan", text: "Insight to help your business succeed." },
      { value: "03", title: "Legal & Corporate Structuring", text: "Optimise structure for long-term success." },
      { value: "04", title: "PRO & Bank Account Assistance", text: "Government and banking support handled for you." },
    ],
    tags: ["Agreement drafting", "Trademark registration", "PRO services", "Bank account opening"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Audit with Confidence with",
    paragraph: "Guided by integrity, transparency, customer care and teamwork, we work with your team to understand the scope, review your records and communicate findings clearly.",
    cards: [
      { title: "Integrity & Objectivity", text: "Independent, unbiased assessment of your financial information." },
      { title: "Proactive Insight", text: "Risks highlighted and improvements recommended." },
      { title: "Up to Date", text: "We track regulatory changes so you don't have to." },
    ],
    quoteTitle: "Request an audit",
    quoteText: "Tell us your licensing authority, year-end and reporting needs, and we'll send a written audit proposal and timetable.",
  },

  included: [
    "Scope & timetable agreed upfront",
    "Audit under ISA",
    "Third-party confirmations",
    "Audit report",
    "Management letter",
    "Closing meeting with management",
  ],

  faqs: [
    { question: "Is a statutory audit mandatory in the UAE?", answer: "Many companies must have their financial statements audited, depending on their legal form and licensing authority. Most free zones require audited accounts for licence renewal, and corporate tax rules require audited statements for certain businesses. The audit must follow International Standards on Auditing and be carried out by an independent, registered auditor." },
    { question: "How confidential are my audit reports?", answer: "Audit files and reports are confidential. They're shared only with you and with the parties you authorise or the law requires, such as your licensing authority." },
    { question: "How long does an audit take?", answer: "It depends on your size, transaction volume and how ready your records are. Smaller companies with organised books can often be completed within a few weeks. We agree a timetable at the start." },
    { question: "Will an audit help with my tax filing?", answer: "Yes. Audited statements give a reliable starting point for corporate tax returns, and some businesses are required to have them." },
    { question: "How is an internal audit different from an external audit?", answer: "An internal audit is commissioned by owners or the board to improve controls and operations. An external audit is an independent examination that gives an opinion on the financial statements for shareholders, authorities and other stakeholders." },
    { question: "What are the three main types of audit?", answer: "External (statutory) audits, internal audits and tax or compliance audits." },
    { question: "What is the main purpose of auditing?", answer: "To give an independent opinion on whether financial statements present a true and fair view, increasing confidence for everyone who relies on them." },
    { question: "What should I look for when choosing an auditor?", answer: "Proper registration with the relevant authorities, independence, experience in your industry and licensing authority, clear fees and realistic timelines." },
    { question: "Can you help with accounting and tax as well?", answer: "Yes. We provide accounting, bookkeeping, VAT and corporate tax services, but where we keep your books, the statutory audit must be done by an independent auditor to preserve independence." },
  ],
};
