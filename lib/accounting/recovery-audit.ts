import type { FreezoneData } from "@/lib/freezones/types";

export const recoveryAudit: FreezoneData = {
  slug: "recovery-audit",
  category: "Accounting & Tax",
  name: "Recovery Audit Services in UAE",
  shortName: "Recovery Audit",
  hero: {
    eyebrow: "Recovery Audit · UAE",
    title: "Recovery Audit Services in UAE",
    highlight: "Recover Cash, Boost Working Capital",
    subtitle: "We find overpayments and missed deductions in your past transactions, and help you recover them.",
    intro:
      "Overpayments, duplicate payments, pricing errors and missed allowances quietly eat into profit. Afaq Al Khaleej's recovery audits systematically review your payments and supporting records. We identify money paid in error, gather the evidence and help you recover it, then strengthen your controls so it doesn't happen again.",
    chips: ["Overpayments", "Duplicate payments", "Supplier statement audits", "Tax misapplication"],
    image: "/images/services/feasibility-studies/hero-bg.png",
  },
  stats: [
    { value: "7", label: "Recovery areas" },
    { value: "Evidence-backed", label: "Every claim documented" },
    { value: "Dedicated team", label: "For each client" },
    { value: "Prevention", label: "Controls improved after recovery" },
  ],

  about: {
    heading: "What Is a Recovery Audit?",
    body:
      "A recovery audit is a systematic review of past payments to suppliers. It finds excess payments, under-deductions and other disbursement errors, then works to recover the money. Our accountants and auditors collect your payment data and supporting documents, spot anomalies and build the evidence needed for each claim. Every business makes payment errors, and over time small mistakes add up to a real hit on profit.",
    location: { name: "Lost cash, found again", area: "Payments · Supplier statements · Records", image: "/images/services/digital-business-solutions/digital-marketing.png" },
    features: [
      { icon: "bank", title: "Recover Lost Cash", text: "Overpaid amounts identified and claimed back." },
      { icon: "trading", title: "Stronger Working Capital", text: "Recovered funds go back into the business." },
      { icon: "activities", title: "Hidden Risks Found", text: "Weaknesses in payment processes exposed." },
      { icon: "licence", title: "Documented Claims", text: "Every claim supported by clear evidence." },
      { icon: "ownership", title: "Future Prevention", text: "Better controls to stop repeat errors." },
      { icon: "multiple", title: "Supplier Clarity", text: "Statements reconciled with your partners." },
    ],
  },

  activities: {
    eyebrow: "What We Recover",
    heading: "Areas Covered by Our Recovery Audit",
    intro: "We look across your payment history for every type of disbursement error.",
    groups: [
      { icon: "bank", title: "Overpayments & Duplicate Payments", text: "Invoices paid twice, or paid above the agreed amount.", tags: ["Duplicates", "Overpayments"] },
      { icon: "online", title: "Currency & Pricing Errors", text: "Wrong exchange rates, prices or discounts applied.", tags: ["FX", "Pricing"] },
      { icon: "licence", title: "Unclaimed Credits & Cheques", text: "Credit notes, rebates and unclaimed cheques never applied.", tags: ["Credits", "Rebates"] },
      { icon: "tax", title: "Improper Application of Taxes", text: "VAT or other taxes charged or applied incorrectly.", tags: ["VAT"] },
      { icon: "multiple", title: "Supplier Statement Audits", text: "Your ledger compared with suppliers' records to find differences and funds owed to you.", tags: ["Reconciliation"] },
      { icon: "services", title: "Records Review", text: "Missed returns, unrecorded deposits and period-end payments that weren't properly accounted for.", tags: ["Returns", "Deposits"] },
    ],
  },

  process: {
    heading: "How the Recovery Audit Works",
    intro: "A careful, coordinated process, so supplier relationships stay professional.",
    steps: [
      { title: "Collect data", text: "Payment history, invoices, contracts and supplier statements gathered." },
      { title: "Analyse", text: "Transactions reviewed for anomalies such as duplicates, pricing errors and missed deductions." },
      { title: "Validate claims", text: "Each potential recovery examined and documented with evidence." },
      { title: "Recover", text: "Claims raised with suppliers in a professional, coordinated way." },
      { title: "Prevent", text: "Control improvements recommended to stop future overpayments." },
    ],
  },

  features: {
    eyebrow: "Why Choose Us",
    heading: "Our Approach to Recovery",
    items: [
      { status: "yes", text: "Experienced accountants and auditors" },
      { status: "yes", text: "A dedicated team for each client" },
      { status: "yes", text: "Every claim thoroughly examined and documented" },
      { status: "yes", text: "Professional, coordinated contact with suppliers" },
      { status: "yes", text: "Control improvements to prevent repeat errors" },
      { status: "yes", text: "Suitable for small, medium and large businesses" },
    ],
  },

  cost: {
    heading: "Recovery Audit Fees",
    intro:
      "Fees depend on your payment volumes, the period reviewed and the number of suppliers. Tell us about your business and we'll send a written proposal explaining how fees are structured.",
    notes: ["Payment volume", "Period reviewed", "Number of suppliers", "Systems & data access", "Currencies involved"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Recapture Lost Profit with",
    paragraph: "Whatever your size, we help you make sure resources are used well and money paid in error comes back to the business.",
    cards: [
      { title: "Systematic Review", text: "Every payment checked against its support." },
      { title: "Evidence-Backed Claims", text: "Recoveries supported by clear documentation." },
      { title: "Flexible Approach", text: "Scoped to your business and priorities." },
    ],
    quoteTitle: "Request a recovery",
    quoteText: "Tell us about your payment volumes and suppliers, and we'll send a written proposal for a recovery audit.",
  },

  included: [
    "Payment data analysis",
    "Supplier statement reconciliation",
    "Duplicate & overpayment detection",
    "Documented recovery claims",
    "Supplier recovery coordination",
    "Control recommendations",
  ],

  faqs: [
    { question: "What is a recovery audit?", answer: "A systematic review of past payments to find and recover overpayments, duplicate payments, missed deductions and other disbursement errors." },
    { question: "What kinds of errors do you find?", answer: "Duplicate payments, overpayments, currency and pricing errors, unapplied credits and rebates, unclaimed cheques and incorrect tax." },
    { question: "How far back can you review?", answer: "Usually several years, depending on your records, supplier contracts and any time limits on claims. We agree the period with you at the start." },
    { question: "Will it affect our supplier relationships?", answer: "We contact suppliers professionally and in coordination with you, with clear evidence for each claim." },
    { question: "Can you recover incorrectly applied VAT?", answer: "We identify where VAT was charged or applied incorrectly and help you correct it with suppliers, or through the proper process with the FTA where needed." },
    { question: "How do you prevent future overpayments?", answer: "We recommend improvements to your payment controls, such as duplicate checks, three-way matching and supplier statement reconciliation." },
  ],
};
