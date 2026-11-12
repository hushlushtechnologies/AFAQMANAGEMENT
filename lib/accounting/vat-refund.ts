import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero + location reuse images (accounting-services / mainland abu-dhabi) — replace when available.
// Source covered only tourist refunds; page expanded to business VAT refunds (Afaq's actual service).
// Tourist scheme specifics (thresholds, fees, cash limits) intentionally kept general — check current FTA rules.

export const vatRefund: FreezoneData = {
  slug: "vat-refund",
  category: "Accounting & Tax",
  name: "VAT Refund in UAE",
  shortName: "VAT Refund",
  hero: {
    eyebrow: "VAT Services · Refunds · UAE",
    title: "VAT Refund Services in UAE",
    highlight: "Reclaim the VAT You're Owed",
    subtitle: "Business refunds of excess input VAT, plus guidance on the special refund schemes for tourists, UAE nationals and foreign businesses.",
    intro:
      "When the VAT you pay on purchases is more than the VAT you collect on sales, you can claim the difference back from the Federal Tax Authority (FTA). Afaq Al Khaleej prepares and submits refund claims with the supporting evidence the FTA expects, and explains the other refund schemes available in the UAE.",
    chips: ["Excess input VAT refunds", "EmaraTax refund claims", "FTA query support", "Tourist refund guidance"],
    image: "/images/services/feasibility-studies/investing-business.png",
  },
  stats: [
    { value: "Excess credit", label: "Refundable to registered businesses" },
    { value: "EmaraTax", label: "Online refund application" },
    { value: "Evidence-led", label: "Claims supported by invoices" },
    { value: "4 schemes", label: "Business, tourist, national, foreign" },
  ],

  about: {
    heading: "Who Can Claim a VAT Refund?",
    body:
      "VAT-registered businesses whose recoverable input VAT is more than their output VAT can apply to the FTA for a refund of the excess, or carry it forward. Exporters, businesses with large capital purchases and new businesses often end up in this position. Separate refund schemes also exist for tourists, UAE nationals building new homes and certain foreign businesses.",
    location: { name: "Cash back into your business", area: "Refunds of excess recoverable VAT", image: "/images/services/feasibility-studies/entering-uae-market.png" },
    features: [
      { icon: "bank", title: "Business Refunds", text: "Excess input VAT reclaimed from the FTA." },
      { icon: "award", title: "Tourist Refunds", text: "Visitors reclaim VAT when leaving the UAE." },
      { icon: "ownership", title: "UAE Nationals", text: "Refunds on VAT paid on building a new home." },
      { icon: "multiple", title: "Foreign Businesses", text: "Eligible non-resident businesses can reclaim VAT." },
      { icon: "licence", title: "Strong Evidence", text: "Valid tax invoices behind every claim." },
      { icon: "trading", title: "Better Cash Flow", text: "Recovered VAT back in your business." },
    ],
  },

  process: {
    heading: "How a Business VAT Refund Works",
    intro: "Refund claims are submitted online through EmaraTax.",
    cautionTitle: "Get the evidence right",
    caution: "The FTA may ask for invoices, contracts, payment proof and reconciliations before approving a refund. Incomplete claims are delayed or rejected.",
    steps: [
      { title: "Confirm the excess credit", text: "Check your filed returns show recoverable VAT that's more than output VAT." },
      { title: "Reconcile & gather evidence", text: "Match input VAT to valid tax invoices and your books." },
      { title: "Submit the refund claim", text: "File the refund application through EmaraTax." },
      { title: "Respond to FTA queries", text: "Provide any further information the FTA requests." },
      { title: "Receive the refund", text: "Approved amounts are paid to your registered bank account." },
    ],
  },

  structures: {
    heading: "VAT Refund for Tourists",
    intro: "Tourists can reclaim VAT on eligible purchases under the Tax Refund for Tourists Scheme, using kiosks at airports and ports or digital options.",
    groups: [
      {
        title: "Main conditions",
        items: [
          { title: "Participating retailers", text: "Buy from retailers registered in the scheme." },
          { title: "Eligible goods", text: "Goods must not be excluded from the scheme." },
          { title: "Export within 90 days", text: "Goods must leave the UAE with you within 90 days of purchase." },
          { title: "Validate on departure", text: "Have your tax-free tags validated when leaving." },
        ],
      },
    ],
    notes: [
      "Minimum purchase amounts, admin fees and cash refund limits apply. Check the current FTA rules before you travel.",
      "Tourists usually claim directly at the airport. We can answer questions, but businesses are our main refund clients.",
    ],
  },

  activities: {
    eyebrow: "How We Help",
    heading: "Our VAT Refund Services",
    intro: "End-to-end support so your refund claim is complete and quick to process.",
    groups: [
      { icon: "activities", title: "Eligibility Review", text: "Confirm the refundable amount and spot any risks.", tags: ["Review"] },
      { icon: "licence", title: "Invoice Reconciliation", text: "Match input VAT to valid tax invoices.", tags: ["Evidence"] },
      { icon: "online", title: "Claim Preparation & Filing", text: "Prepare and submit the refund on EmaraTax.", tags: ["EmaraTax"] },
      { icon: "services", title: "FTA Query Handling", text: "Respond to information requests quickly.", tags: ["FTA"] },
      { icon: "ownership", title: "Special Schemes", text: "Guidance on refunds for UAE nationals and foreign businesses.", tags: ["Schemes"] },
      { icon: "tax", title: "Return Corrections", text: "Fix errors that block a refund, including voluntary disclosures.", tags: ["Corrections"] },
    ],
  },

  features: {
    eyebrow: "Avoid These",
    heading: "Common Reasons Refunds Are Delayed",
    items: [
      { status: "warn", text: "Input VAT claimed without valid tax invoices" },
      { status: "warn", text: "Figures that don't reconcile with the books" },
      { status: "warn", text: "Bank details not matching the registration" },
      { status: "warn", text: "Errors in earlier returns" },
      { status: "warn", text: "Slow responses to FTA queries" },
    ],
  },

  cost: {
    heading: "VAT Refund Service Fees",
    intro:
      "Fees depend on the refund amount, periods involved and the state of your records. Tell us about your claim and we'll send a quote.",
    notes: ["Refund amount", "Periods involved", "Record quality", "FTA queries", "Corrections needed"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Claim Your VAT Refund with",
    paragraph: "Accurate, well-documented claims that move through FTA review smoothly, from consultants who also handle your VAT registration, accounting and returns.",
    cards: [
      { title: "Complete Claims", text: "Evidence ready before submission." },
      { title: "Fewer Delays", text: "Common errors avoided." },
      { title: "Full VAT Support", text: "Refunds, returns and compliance." },
    ],
    quoteTitle: "Request a VAT refund",
    quoteText: "Tell us about your excess credit and periods, and we'll review your refund position.",
  },

  included: [
    "Refund eligibility check",
    "Invoice reconciliation",
    "Refund claim preparation",
    "EmaraTax submission",
    "FTA query support",
    "Refund tracking",
  ],

  faqs: [
    { question: "When can a business claim a VAT refund?", answer: "When your recoverable input VAT is more than your output VAT, leaving an excess credit. You can apply for a refund or carry it forward." },
    { question: "How do I apply for a VAT refund?", answer: "Through a refund application on EmaraTax, supported by invoices and reconciliations if the FTA asks for them." },
    { question: "How long does a VAT refund take?", answer: "The FTA reviews claims within set timeframes, which can be extended if it needs more information. Complete claims are processed fastest." },
    { question: "Can tourists get a VAT refund?", answer: "Yes. Under the Tax Refund for Tourists Scheme, on eligible goods bought from participating retailers and exported within 90 days. Conditions and limits apply." },
    { question: "Can UAE nationals claim VAT refunds?", answer: "Yes. UAE nationals can claim back VAT paid on building their new residence, subject to conditions." },
    { question: "Can foreign businesses reclaim UAE VAT?", answer: "Eligible foreign businesses not registered in the UAE may reclaim VAT under a dedicated refund scheme, subject to conditions." },
  ],
};
