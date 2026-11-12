import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero + location reuse images (difc / professional-license) — replace when available.

export const vatComplianceAudit: FreezoneData = {
  slug: "vat-compliance-audit",
  category: "Accounting & Tax",
  name: "VAT Compliance Audit in UAE",
  shortName: "VAT Compliance Audit",
  hero: {
    eyebrow: "VAT Services · Compliance · UAE",
    title: "VAT Compliance Audit in Dubai",
    highlight: "Make Sure Your VAT Is Right",
    subtitle: "An independent review of your VAT returns, records and processes, so you catch errors before the FTA does.",
    intro:
      "VAT compliance adds work, and even straightforward businesses often miscalculate the VAT they owe or can recover. A VAT compliance audit checks your returns, invoices and bookkeeping against the law. It finds mistakes early, so you can correct them and avoid penalties from the Federal Tax Authority (FTA).",
    chips: ["Return reviews", "Input & output tax checks", "Record-keeping review", "Error correction"],
    image: "/images/services/business-consultancy/performance-improvement.png",
  },
  stats: [
    { value: "Returns", label: "Reviewed period by period" },
    { value: "Invoices", label: "Checked against the law" },
    { value: "Errors", label: "Found before the FTA does" },
    { value: "Action plan", label: "To fix every gap" },
  ],

  about: {
    heading: "Why VAT Mistakes Happen",
    body:
      "Errors usually come from bookkeeping. For example, an overstated sales invoice leads to more output VAT than is actually due. Others come from wrong VAT treatment, input VAT claimed without valid invoices, or returns filed late, incomplete or incorrect, all of which can lead to heavy penalties. A compliance audit gives management a clear picture of where you stand and what to fix.",
    location: { name: "A clear VAT picture", area: "For management and the FTA alike", image: "/images/services/business-consultancy/financial-operational.png" },
    features: [
      { icon: "ownership", title: "Prevent Fraud", text: "A detailed view of compliance reduces the risk of manipulation." },
      { icon: "bank", title: "Save Funds", text: "Avoid overpaying VAT and paying needless penalties." },
      { icon: "licence", title: "Fix Compliance Issues", text: "Address problems before they lead to fines." },
      { icon: "activities", title: "Accurate Returns", text: "Correct output and input tax every period." },
      { icon: "award", title: "Build Trust", text: "A clean record with the FTA and partners." },
      { icon: "services", title: "Clear Picture", text: "Management understands its VAT position." },
    ],
  },

  activities: {
    eyebrow: "Our Services",
    heading: "VAT Compliance Services We Offer",
    intro: "From one-off health checks to ongoing support.",
    groups: [
      { icon: "activities", title: "VAT Return Review", text: "Returns checked against your books and invoices before or after filing.", tags: ["Returns"] },
      { icon: "licence", title: "VAT Audit", text: "A thorough review of VAT treatment, invoices and records.", tags: ["Audit"] },
      { icon: "tax", title: "Filing Review", text: "Make sure nothing late, incomplete or incorrect is submitted.", tags: ["Filing"] },
      { icon: "services", title: "VAT Consultancy", text: "Advice on correct treatment for your transactions.", tags: ["Advisory"] },
      { icon: "bank", title: "Bookkeeping & Calculations", text: "Accurate records and VAT calculations every period.", tags: ["Bookkeeping"] },
      { icon: "multiple", title: "Registration & Deregistration", text: "Help with registering, amending or cancelling your VAT registration.", tags: ["Registration"] },
    ],
  },

  process: {
    heading: "How We Carry Out a VAT Compliance Audit",
    intro: "A structured review with individual attention at every step.",
    steps: [
      { title: "Collect data", text: "Gather returns, invoices, ledgers and contracts relevant to your business." },
      { title: "Analyse", text: "Review VAT treatment, calculations and supporting documents." },
      { title: "Report findings", text: "Set out errors, risks and their financial impact." },
      { title: "Plan corrections", text: "Agree fixes, including voluntary disclosures where needed." },
      { title: "Review regularly", text: "Periodic reviews to keep you compliant going forward." },
    ],
  },

  documents: {
    heading: "What We Review",
    image: "/images/services/company-formation/growth-focused-solutions.png",
    intro: "Typical records examined in a VAT compliance audit.",
    items: [
      "Filed VAT returns",
      "Sales and purchase tax invoices",
      "Credit and debit notes",
      "General ledger and VAT control accounts",
      "Import and export documents",
      "Key contracts and agreements",
    ],
  },

  features: {
    eyebrow: "Benefits",
    heading: "What a VAT Compliance Audit Gives You",
    items: [
      { status: "yes", text: "A clear picture of your current VAT obligations" },
      { status: "yes", text: "Errors found and fixed before an FTA audit" },
      { status: "yes", text: "Lower penalty risk through timely corrections" },
      { status: "yes", text: "Input VAT recovered correctly" },
      { status: "yes", text: "Stronger processes and records" },
      { status: "yes", text: "More trust from the FTA and business partners" },
    ],
  },

  cost: {
    heading: "VAT Compliance Audit Fees",
    intro:
      "Fees depend on the number of periods reviewed, your transaction volume and how complex your VAT position is. Tell us about your business and we'll send a quote.",
    notes: ["Periods reviewed", "Transaction volume", "Sectors & supplies", "Imports & exports", "Corrections needed"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Stay VAT Compliant with",
    paragraph: "A client-centred approach and a dedicated team, with in-depth analysis and practical solutions tailored to your business.",
    cards: [
      { title: "Individual Attention", text: "A dedicated consultant for your review." },
      { title: "Practical Fixes", text: "Clear actions, including disclosures." },
      { title: "Ongoing Reviews", text: "Regular checks to stay compliant." },
    ],
    quoteTitle: "Request a VAT compliance",
    quoteText: "Tell us how many periods you'd like reviewed, and we'll send a quote.",
  },

  included: [
    "Return-by-return review",
    "Invoice & record checks",
    "Input/output tax testing",
    "Findings report",
    "Correction plan",
    "Voluntary disclosure support",
  ],

  faqs: [
    { question: "What is a VAT compliance audit?", answer: "An independent review of your VAT returns, invoices, records and processes to check they meet UAE VAT law." },
    { question: "Is it the same as an FTA tax audit?", answer: "No. An FTA audit is carried out by the authority. A compliance audit is your own review to find and fix issues first." },
    { question: "What if errors are found?", answer: "We help you correct them, usually through a voluntary disclosure, which generally means lower penalties than if the FTA finds them." },
    { question: "How often should we have one?", answer: "At least annually, and before any expected FTA audit, major system change or business restructure." },
    { question: "Can a review cover past periods?", answer: "Yes. We can review any open periods that haven't been audited by the FTA." },
  ],
};
