import type { FreezoneData } from "@/lib/freezones/types";

// TODO(client): confirm whether Afaq (or a team member) is an FTA-registered tax agent
// before adding that claim. Rates/deadlines below reflect rules as of late 2026 — review periodically.

export const corporateTaxRegistration: FreezoneData = {
  slug: "corporate-tax-registration",
  category: "Accounting & Tax",
  name: "Corporate Tax Registration in Dubai & UAE",
  shortName: "Corporate Tax Registration",
  hero: {
    eyebrow: "Corporate Tax · EmaraTax · UAE",
    title: "Corporate Tax Registration in Dubai",
    highlight: "Get Your TRN, Avoid the AED 10,000 Penalty",
    subtitle: "We register you on EmaraTax, secure your corporate tax TRN and keep your filings on track, so penalties never start.",
    intro:
      "Almost every UAE business must now register for corporate tax and hold a Tax Registration Number (TRN). That includes free zone companies on the 0% rate and small firms that may never owe tax. Afaq Al Khaleej's tax team handles your EmaraTax registration and helps you stay compliant with Federal Decree-Law No. 47 of 2022.",
    chips: ["EmaraTax registration", "Corporate tax TRN", "Free zone (QFZP) review", "Deadline & penalty check"],
    image: "/images/services/pro-government-services/corporate-tax.png",
  },
  stats: [
    { value: "9%", label: "On profit above AED 375,000" },
    { value: "0%", label: "Up to AED 375,000" },
    { value: "AED 10,000", label: "Late registration penalty" },
    { value: "3 months", label: "Deadline for new companies" },
  ],

  about: {
    heading: "What Is Corporate Tax Registration?",
    body:
      "Corporate tax is a federal direct tax on business profits, introduced by Federal Decree-Law No. 47 of 2022 for financial years starting on or after 1 June 2023. The Ministry of Finance sets policy and the Federal Tax Authority (FTA) runs the system. Registration is the first step: you apply on EmaraTax, the FTA's online portal, and receive a corporate tax TRN once approved. This is separate from your VAT TRN. Having one doesn't cover the other.",
    location: { name: "Mainland, free zone & offshore", area: "Almost every entity registers, even at 0%", image: "/images/services/investment-services/hero-bg.jpg" },
    features: [
      { icon: "licence", title: "Mandatory for Most", text: "Mainland, free zone and many foreign entities." },
      { icon: "tax", title: "Separate from VAT", text: "A corporate tax TRN is different from your VAT TRN." },
      { icon: "online", title: "Via EmaraTax", text: "Applications go through the FTA's online portal." },
      { icon: "activities", title: "Strict Deadlines", text: "Late registration costs AED 10,000." },
      { icon: "bank", title: "Applies at 0% Too", text: "Low-profit and QFZP businesses still register." },
      { icon: "services", title: "Filing Follows", text: "Once registered, you file every tax period." },
    ],
  },

  tax: {
    eyebrow: "Corporate Tax Rates",
    heading: "Corporate Tax Rates in the UAE",
    paragraphs: [
      "Most businesses only need three numbers: 0%, 9% and, for the largest multinational groups, 15%.",
      "Foreign tax credits can reduce UAE corporate tax where income has already been taxed abroad, subject to the law's conditions. If your group works across borders, it's worth modelling properly.",
    ],
    cards: [
      { value: "0%", title: "Profit up to AED 375,000", text: "Protects small businesses and startups." },
      { value: "9%", title: "Profit above AED 375,000", text: "The standard corporate tax rate." },
      { value: "0%*", title: "Small Business Relief", text: "Revenue ≤ AED 3M. Must be elected. Available for tax periods ending on or before 31 Dec 2026." },
      { value: "15%", title: "Large MNE Groups", text: "Revenue ≥ EUR 750M (about AED 3.15B). Domestic minimum top-up tax from 1 Jan 2025." },
    ],
    tags: ["Federal Decree-Law No. 47 of 2022", "Pillar Two DMTT", "Foreign tax credits"],
  },

  structures: {
    heading: "Rates, Free Zones & Exemptions",
    intro: "Free zone companies and exempt persons have their own rules, but most still need to register.",
    table: {
      title: "Corporate tax at a glance",
      columns: ["Taxable income / status", "Rate", "Notes"],
      rows: [
        ["Taxable profit up to AED 375,000", "0%", "Protects small businesses and startups"],
        ["Taxable profit above AED 375,000", "9%", "Standard rate"],
        ["Revenue at or below AED 3 million", "Effectively 0% (SBR)", "Elective; for tax periods ending on or before 31 Dec 2026"],
        ["Qualifying Free Zone Person: qualifying income", "0%", "Only if every QFZP condition is met"],
        ["Qualifying Free Zone Person: non-qualifying income", "9%", "De minimis: up to the lower of 5% of revenue or AED 5 million"],
        ["Large MNE groups", "15%", "Domestic minimum top-up tax from 1 Jan 2025"],
      ],
    },
    groups: [
      {
        title: "Exempt persons (may still need to apply or notify)",
        items: [
          { title: "Government & government-controlled entities", text: "For their sovereign and mandated activities." },
          { title: "Extractive & non-extractive natural resource businesses", text: "Where taxed at Emirate level and conditions are met." },
          { title: "Qualifying Public Benefit Entities", text: "Listed by Cabinet decision." },
          { title: "Qualifying investment funds & pension funds", text: "Meeting FTA conditions and applying." },
          { title: "Certain wholly owned UAE subsidiaries", text: "Of the exempt persons above." },
        ],
      },
      {
        title: "Free zone companies",
        items: [
          { title: "Registration is mandatory", text: "Even for a Qualifying Free Zone Person on 0%." },
          { title: "QFZP conditions", text: "Adequate substance, qualifying income, audited accounts, transfer pricing compliance and more." },
          { title: "Losing QFZP status", text: "Failing a condition can mean 9% on all income for several periods." },
        ],
      },
    ],
    notes: [
      "Most exemptions don't apply automatically. They usually need an application or notification. Check the FTA (tax.gov.ae) and Ministry of Finance (mof.gov.ae) for official wording.",
    ],
  },

  compare: {
    eyebrow: "Who Must Register",
    heading: "Who Must Register for Corporate Tax?",
    intro: "The law casts a wide net. Being under the profit threshold is not a reason to skip registration.",
    columns: ["Business type", "Register?", "Notes"],
    rows: [
      { cells: ["Mainland LLC / PJSC / PSC", "Yes", "Regardless of profit"] },
      { cells: ["Sole establishment / natural person", "If turnover > AED 1M", "Freelancers under AED 1M in a calendar year don't register"] },
      { cells: ["Free zone company", "Yes", "Mandatory even for a QFZP on 0%"] },
      { cells: ["Branch of a UAE company", "Via parent", "A domestic branch is part of its parent entity"] },
      { cells: ["Branch of a foreign company", "Yes, if a PE", "Registers for its UAE permanent establishment"] },
      { cells: ["Holding company", "Yes", "Like any other juridical person"] },
      { cells: ["Foreign company", "If managed in UAE", "Residency and PE rules decide"] },
      { cells: ["Government / public benefit entities", "Depends", "Many are exempt but may still need to register or notify"] },
    ],
    footnote: "Not sure which row you fall into? A short call with our team will confirm your status.",
  },

  process: {
    heading: "How to Register on EmaraTax",
    intro: "The steps look simple on paper. Mistakes happen in the detail.",
    cautionTitle: "Common errors we fix",
    caution: "Choosing the wrong first tax period, using an outdated trade licence, listing activities that don't match the licence, naming a signatory without valid proof of authorisation, and assuming a free zone entity doesn't need to register.",
    steps: [
      { title: "Prepare documents & confirm tax period", text: "Gather documents and confirm your financial year." },
      { title: "Log in to EmaraTax", text: "Sign in using UAE Pass or your EmaraTax account." },
      { title: "Create the taxable person profile", text: "Set up the entity on the portal." },
      { title: "Enter business details & activities", text: "Matching your trade licence exactly." },
      { title: "Add authorised signatory & upload documents", text: "With valid proof of authorisation." },
      { title: "Review & verify", text: "Check every detail before submitting." },
      { title: "Submit → FTA review → TRN issued", text: "Complete applications are usually approved within about 20 business days.", when: "~20 business days" },
    ],
  },

  documents: {
    heading: "Documents Required for Corporate Tax Registration",
    intro: "Have these ready before you start. The exact list can vary by entity type and free zone.",
    groups: [
      { title: "Legal entity (company)", items: ["Valid trade licence", "Memorandum / Articles of Association", "Certificate of incorporation (if applicable)", "Emirates ID & passports of owners", "Authorised signatory ID & proof of authorisation", "Registered address & contact details", "Business activity details", "Financial year / tax period details", "Bank details (IBAN)"] },
      { title: "Natural person (sole trader / freelancer)", items: ["Valid trade licence or permit", "Emirates ID & passport", "Representative's authorisation (if used)", "Address & contact details", "Business activity details", "Turnover & tax period details", "Bank details (IBAN)"] },
    ],
    note: "When in doubt, over-prepare. We review your documents before submission to avoid rejections.",
  },

  infoBlock: {
    eyebrow: "Deadlines & Penalties",
    heading: "Registration Deadlines and Penalties",
    paragraphs: [
      "Companies incorporated on or after 1 March 2024 must register within 3 months of incorporation. Existing companies had staggered deadlines throughout 2024 under FTA Decision No. 3 of 2024. If you missed yours, you're already late, so register now to limit further exposure.",
      "Penalty waiver: the FTA waives the AED 10,000 late-registration penalty if you file your first corporate tax return (or annual declaration, for exempt persons) within 7 months of the end of your first tax period, instead of the usual 9. Check whether this still applies to you.",
    ],
    listTitle: "Registration deadlines",
    list: [
      "New company (incorporated on/after 1 Mar 2024): within 3 months of incorporation",
      "Existing company (pre-2024 licence): FTA Decision No. 3 of 2024 deadlines, now passed",
      "Natural person with turnover over AED 1M: by 31 March of the following year",
      "Non-resident with a UAE permanent establishment: within 3 months of establishing it",
    ],
    stats: [
      { value: "AED 10,000", label: "Late registration" },
      { value: "AED 500–1,000/mo", label: "Late return filing" },
      { value: "14% p.a.", label: "Late payment, charged monthly" },
    ],
  },

  prosCons: {
    eyebrow: "DIY vs Consultant",
    heading: "Why Use a Corporate Tax Consultant?",
    prosTitle: "With Afaq Al Khaleej",
    consTitle: "Doing It Yourself",
    pros: [
      "A short call and a document handover",
      "Tax period set correctly the first time",
      "Deadlines confirmed, with reminders",
      "Free zone (QFZP) status assessed properly",
      "Waiver route and timeline managed",
      "Filing and ongoing support available",
    ],
    cons: [
      "Hours spent learning EmaraTax",
      "Risk of a wrong tax period that's costly to fix",
      "Working out your own deadlines",
      "QFZP rules easy to misread",
      "Penalty exposure is yours alone",
      "No help with filing afterwards",
    ],
    note: {
      title: "When DIY works",
      text: "For a simple mainland company with clean documents, DIY is doable. Once free zone status, branches, a tax group or backlog accounts are involved, a consultant usually pays for itself.",
    },
  },

  activities: {
    eyebrow: "Our Corporate Tax Services",
    heading: "Corporate Tax Services We Offer",
    intro: "Registration is where most clients start, but it's rarely where the work ends.",
    groups: [
      { icon: "licence", title: "Registration & TRN", text: "EmaraTax registration and corporate tax TRN.", tags: ["EmaraTax"] },
      { icon: "tax", title: "Corporate Tax Filing", text: "Accurate, on-time returns every tax period.", tags: ["Returns"] },
      { icon: "services", title: "Tax Deregistration", text: "When you close, sell or restructure an entity.", tags: ["Closure"] },
      { icon: "activities", title: "Assessment & Voluntary Disclosure", text: "Responding to FTA queries and correcting errors.", tags: ["FTA queries"] },
      { icon: "multiple", title: "Transfer Pricing", text: "Analysis and documentation for related-party transactions.", tags: ["TP"] },
      { icon: "award", title: "Free Zone QFZP Analysis", text: "Qualifying status reviews and structuring.", tags: ["QFZP"] },
    ],
    lists: [
      { title: "Also available", items: ["Compliance & record-keeping", "Tax planning & SBR elections", "Tax group formation", "FTA representation, amendments & reconsiderations", "Accounting & bookkeeping for clean filings"] },
    ],
  },

  features: {
    eyebrow: "Avoid These",
    heading: "Common Corporate Tax Registration Mistakes",
    items: [
      { status: "warn", text: "Assuming a free zone company is exempt from registration" },
      { status: "warn", text: "Thinking Small Business Relief means no registration" },
      { status: "warn", text: "Choosing the wrong first tax period" },
      { status: "warn", text: "Assuming a VAT TRN covers corporate tax" },
      { status: "warn", text: "Using an expired or mismatched trade licence" },
      { status: "warn", text: "Naming a signatory without proof of authorisation" },
      { status: "warn", text: "Missing the 3-month window for new companies" },
      { status: "warn", text: "Ignoring the penalty-waiver route" },
      { status: "warn", text: "Keeping no proper books until filing time" },
      { status: "warn", text: "Waiting for an FTA reminder that never comes" },
    ],
  },

  cost: {
    heading: "Corporate Tax Registration Cost",
    intro:
      "It depends on your setup. A single mainland entity with documents in order is at the low end. Free zone QFZP assessments, tax groups, multiple branches or backlog accounts add complexity. We quote a fixed fee after a short call, so you know the cost before you commit.",
    notes: ["Number of entities", "Tax group formation", "Free zone status", "State of your books", "Registration only or ongoing filing"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Register for Corporate Tax the Right Way with",
    paragraph: "One dedicated consultant, a fixed price agreed upfront, and support that continues after your TRN is issued, covering registration, filing and everything in between.",
    cards: [
      { title: "Dedicated Consultant", text: "One point of contact, not a call centre." },
      { title: "Fixed, Transparent Fee", text: "Quoted before we start. No hourly surprises." },
      { title: "Beyond the TRN", text: "Filing and ongoing compliance covered." },
    ],
    quoteTitle: "Request a corporate tax",
    quoteText: "Tell us about your entity and licence, and we'll confirm your deadline and send a fixed-fee quote.",
  },

  included: [
    "Eligibility & deadline check",
    "Tax period confirmation",
    "Document review",
    "EmaraTax application",
    "FTA query handling",
    "TRN certificate delivery",
  ],

  faqs: [
    { question: "What is UAE corporate tax?", answer: "A federal direct tax on business profits under Federal Decree-Law No. 47 of 2022. It's 0% on taxable income up to AED 375,000 and 9% above that." },
    { question: "When did UAE corporate tax come into effect?", answer: "For financial years starting on or after 1 June 2023." },
    { question: "Is corporate tax applicable to free zone companies?", answer: "Yes. Free zone companies must register and file. A Qualifying Free Zone Person can pay 0% on qualifying income if it meets all the conditions, and 9% on other income." },
    { question: "What is a Qualifying Free Zone Person (QFZP)?", answer: "A free zone entity that maintains adequate substance, earns qualifying income, keeps audited financial statements, complies with transfer pricing rules and meets the other conditions, so it can access the 0% rate." },
    { question: "How do I register for corporate tax?", answer: "Through the FTA's EmaraTax portal: create a taxable person profile, enter business details, add an authorised signatory, upload documents and submit for review." },
    { question: "What is the deadline for corporate tax registration?", answer: "New companies incorporated on or after 1 March 2024 must register within 3 months of incorporation. Natural persons register by 31 March after the year their turnover exceeds AED 1 million." },
    { question: "What is the deadline for filing corporate tax returns?", answer: "Within 9 months of the end of the tax period. For a calendar-year business, that's 30 September of the following year." },
    { question: "What is Small Business Relief?", answer: "An elective relief that treats resident businesses with revenue of AED 3 million or less as having no taxable income, for tax periods ending on or before 31 December 2026. You must still register and file." },
    { question: "Are individuals subject to corporate tax?", answer: "Only if their business turnover exceeds AED 1 million in a calendar year. Salary and personal investment income aren't subject to corporate tax." },
    { question: "What are the penalties for late registration?", answer: "AED 10,000. It may be waived if you file your first return within 7 months of the end of your first tax period." },
    { question: "What income is exempt from corporate tax?", answer: "Qualifying dividends and capital gains from participations, certain foreign permanent establishment income and income of exempt persons, all subject to conditions." },
  ],
};
