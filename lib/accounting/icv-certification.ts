import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero + location reuse images (uaq / bvi) — replace when available.
// TODO(client): Afaq is not described as an MoIAT certifying body — confirm before claiming otherwise.

export const icvCertification: FreezoneData = {
  slug: "icv-certification",
  category: "Accounting & Tax",
  name: "ICV Certification in UAE",
  shortName: "ICV Certification",
  hero: {
    eyebrow: "In-Country Value · MoIAT · ADNOC",
    title: "ICV Certification in UAE",
    highlight: "Boost Your Score, Win More Tenders",
    subtitle: "Get certified for the value you add to the UAE economy, and compete for contracts with ADNOC and other major government and semi-government buyers.",
    intro:
      "In-Country Value (ICV) began as an ADNOC programme in 2018 and is now the UAE-wide National ICV Program, run by the Ministry of Industry and Advanced Technology (MoIAT). Your ICV score is a key factor in tender evaluation. Afaq Al Khaleej helps you prepare IFRS-compliant financials and the ICV template, and coordinates certification with an authorised certifying body.",
    chips: ["National ICV Program", "ICV template", "Certifying body coordination", "Score improvement"],
    image: "/images/investment-opportunities/sustainable-growth.png",
  },
  stats: [
    { value: "14 months", label: "Certificate validity" },
    { value: "IFRS", label: "Audited statements required" },
    { value: "≤ 2 years", label: "Maximum age of statements" },
    { value: "0–100%", label: "ICV score range" },
  ],

  about: {
    heading: "What Is ICV Certification?",
    body:
      "The ICV programme aims to diversify the UAE economy by keeping more spending in the country, localising goods and services, creating private-sector jobs for UAE nationals and growing local industry. Suppliers to ADNOC and other participating entities earn an ICV certificate that measures their contribution. Bidders without a certificate are generally scored as zero on ICV, which puts them at a real disadvantage in tenders.",
    location: { name: "Value that stays in the UAE", area: "For ADNOC and national programme tenders", image: "/images/investment-opportunities/market-relevant.png" },
    features: [
      { icon: "award", title: "Tender Advantage", text: "Your ICV score counts in tender evaluation." },
      { icon: "multiple", title: "Emirati Employment", text: "Hiring UAE nationals improves your score." },
      { icon: "trading", title: "Local Spending", text: "Buying from UAE suppliers adds value." },
      { icon: "bank", title: "Investment", text: "Assets and investment in the UAE count." },
      { icon: "office", title: "Local Manufacturing", text: "Goods made in the UAE add to your score." },
      { icon: "online", title: "Exports", text: "Exporting from the UAE adds value." },
    ],
  },

  structures: {
    heading: "How ICV Works",
    intro: "Your score is calculated from audited financial data using MoIAT's standard formula.",
    groups: [
      {
        title: "Main factors in the ICV score",
        items: [
          { title: "Goods manufactured in the UAE", text: "Local production adds directly to your score." },
          { title: "Third-party spend", text: "Procurement from UAE-based suppliers." },
          { title: "Emiratisation", text: "Employment of UAE nationals." },
          { title: "Investment", text: "Growth in UAE-based assets." },
          { title: "Revenue & exports", text: "Revenue generated and goods exported from the UAE." },
        ],
      },
      {
        title: "Key certificate rules",
        items: [
          { title: "IFRS audited statements", text: "Signed by a UAE-licensed auditor, and no more than 2 years old." },
          { title: "Stand-alone statements", text: "Needed for the specific legal entity being certified, for recent financial years." },
          { title: "New companies", text: "Businesses under 10 months old can use up to 9 months of management accounts." },
          { title: "14-month validity", text: "Runs from the date of the audited statements, not from when the certificate is issued." },
        ],
      },
    ],
    notes: ["Programme rules are updated periodically. Check the latest MoIAT guidance before certification."],
  },

  process: {
    heading: "How to Get Your ICV Certificate",
    intro: "Certification is issued through MoIAT's platform by an authorised certifying body.",
    steps: [
      { title: "Audited financial statements", text: "Prepare IFRS-compliant audited statements for the entity." },
      { title: "ICV template", text: "Complete MoIAT's supplier submission template, with every figure tied to your records." },
      { title: "Choose a certifying body", text: "Apply online and engage an authorised certifying body." },
      { title: "Verification", text: "The certifying body checks your data and supporting documents." },
      { title: "Certificate issued", text: "Your ICV score and certificate are issued, ready to submit with tenders." },
    ],
  },

  activities: {
    eyebrow: "How We Help",
    heading: "Our ICV Support Services",
    intro: "Preparation and coordination so your certification goes smoothly and your score reflects your real contribution.",
    groups: [
      { icon: "licence", title: "Audit Readiness", text: "Books and IFRS statements prepared for audit.", tags: ["IFRS"] },
      { icon: "tax", title: "ICV Template Preparation", text: "Accurate templates backed by supporting documents.", tags: ["Template"] },
      { icon: "services", title: "Certifying Body Coordination", text: "Liaison with an authorised certifying body.", tags: ["Coordination"] },
      { icon: "trading", title: "Score Improvement Advice", text: "Practical ways to raise your ICV score.", tags: ["Strategy"] },
      { icon: "activities", title: "Renewal Planning", text: "Timing aligned with your financial year and tender calendar.", tags: ["Renewal"] },
      { icon: "multiple", title: "Supplier & Payroll Data", text: "Local spend and Emiratisation data organised.", tags: ["Data"] },
    ],
  },

  features: {
    eyebrow: "Watch Out",
    heading: "Common ICV Certification Pitfalls",
    items: [
      { status: "warn", text: "Audited statements not IFRS-compliant or too old" },
      { status: "warn", text: "Group statements used instead of entity-level ones" },
      { status: "warn", text: "Template figures that don't tie back to the accounts" },
      { status: "warn", text: "Missing evidence for local supplier spend" },
      { status: "warn", text: "Certificate lapsing just before a key tender" },
    ],
  },

  cost: {
    heading: "ICV Support Fees",
    intro:
      "Fees depend on whether audited statements are ready, how complex your supplier and payroll data is, and the certifying body's charges. Tell us about your business and we'll send a quote.",
    notes: ["Audit status", "Entity size", "Supplier data", "Certifying body fees", "Score advisory"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Get ICV Certified with",
    paragraph: "From audit-ready financials to the ICV template and certifying body coordination, we make certification smooth and help you improve your score over time.",
    cards: [
      { title: "End-to-End Support", text: "Accounts, template and coordination." },
      { title: "Accurate Data", text: "Every figure traced to your records." },
      { title: "Score Strategy", text: "Advice to raise your ICV over time." },
    ],
    quoteTitle: "Request an ICV",
    quoteText: "Tell us your financial year-end and tender plans, and we'll send a quote for ICV support.",
  },

  included: [
    "Eligibility & timing review",
    "Audit readiness support",
    "ICV template preparation",
    "Supporting document pack",
    "Certifying body coordination",
    "Score improvement advice",
  ],

  faqs: [
    { question: "What is the National ICV Program?", answer: "A UAE-wide programme run by MoIAT that measures how much a supplier contributes to the UAE economy. It grew out of ADNOC's 2018 ICV programme." },
    { question: "Who needs an ICV certificate?", answer: "Suppliers bidding for contracts with ADNOC and other participating government and semi-government entities. Without one, your ICV score is generally treated as zero." },
    { question: "How long is an ICV certificate valid?", answer: "14 months from the date of the audited financial statements it's based on." },
    { question: "What financial statements are required?", answer: "IFRS-compliant audited statements signed by a UAE-licensed auditor, no more than 2 years old. Businesses under 10 months old can use up to 9 months of management accounts." },
    { question: "Who issues the certificate?", answer: "An authorised certifying body approved under the National ICV Program, through MoIAT's platform." },
    { question: "How can I improve my ICV score?", answer: "Increase local procurement, hire more UAE nationals, invest in UAE assets and grow local manufacturing and exports." },
  ],
};
