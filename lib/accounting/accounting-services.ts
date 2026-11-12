import type { FreezoneData } from "@/lib/freezones/types";

// TODO(client): the AED 999 / 2,199 / 3,599 package examples and transaction
// limits came with the supplied content — confirm Afaq's own pricing before launch.

export const accountingServices: FreezoneData = {
  slug: "accounting-services",
  category: "Accounting & Tax",
  name: "Accounting Services in Dubai",
  shortName: "Accounting",
  hero: {
    eyebrow: "Accounting Services · Dubai & UAE",
    title: "Accounting Services in Dubai",
    highlight: "Bookkeeping, Reporting & Tax Support",
    subtitle: "Bookkeeping, financial reporting and tax-support services for UAE businesses — with packages from AED 999 a month.",
    intro:
      "Afaq Al Khaleej handles your day-to-day bookkeeping, monthly reports and year-end statements, so you can focus on running the business. We review your accounting basis and reporting requirements first — whether IFRS, IFRS for SMEs or a permitted cash basis — and agree a clear scope, timetable and price in writing.",
    chips: ["Packages from AED 999 / month", "IFRS-based reporting", "VAT & corporate tax support", "Scope agreed in writing"],
    image: "/images/services/finance-management/stronger-cash-flow-control.png",
  },
  stats: [
    { value: "AED 999", label: "Package example from, per month" },
    { value: "3", label: "Package tiers" },
    { value: "IFRS", label: "Financial reporting basis" },
    { value: "VAT & CT", label: "Tax support, quoted to scope" },
  ],

  about: {
    heading: "Why Outsource Your Accounting?",
    body:
      "Outsourcing gives you a full team of qualified accountants instead of a single in-house hire — without the salary, visa and training costs. We help organise your records for reporting, tax work and any required audit, based on complete information and an agreed scope.",
    location: { name: "Dubai & UAE", area: "Accounting support for every sector", image: "/images/services/feasibility-studies/investing-business.png" },
    features: [
      { icon: "online", title: "Streamline Operations", text: "Free up time for core activities, with bookkeeping, payroll and tax tasks agreed in your scope." },
      { icon: "services", title: "Access to Expertise", text: "A team of qualified accountants who stay current on UAE regulations." },
      { icon: "bank", title: "Cost Savings", text: "Skip the salary, visa and training costs of a full-time accountant — pay only for the work you need." },
      { icon: "award", title: "Focus on Growth", text: "Stop chasing invoices and reports, and spend your time on decisions that grow the business." },
      { icon: "ownership", title: "Data Security", text: "Access, storage, permissions and confidentiality agreed in writing before work begins." },
      { icon: "tax", title: "Stay Compliant", text: "We organise records and track your agreed reporting obligations and filings." },
    ],
  },

  cost: {
    heading: "How Much Do Accounting Services Cost in Dubai?",
    intro:
      "Cost depends mainly on how many transactions you record each month, how many legal entities you run, and which compliance services you need on top of bookkeeping. These package examples are indicative — we confirm transaction limits, contract term, software and VAT treatment in a written quote.",
    tiers: [
      {
        badge: "Basic",
        name: "Basic Plan",
        price: "AED 999 / mo",
        tagline: "Up to 10 monthly transactions",
        points: ["Day-to-day sales, purchase & general entries", "Monthly sales, receivables & payables reports", "Bank reconciliation", "Balance sheet & income statement"],
      },
      {
        badge: "Most popular",
        name: "Advanced Plan",
        price: "AED 2,199 / mo",
        tagline: "Up to 150 monthly transactions",
        points: ["Everything in Basic", "Cash flow statement", "VAT support scope agreed in your quote", "Suited to growing SMEs"],
      },
      {
        badge: "Premium",
        name: "Premium Plan",
        price: "AED 3,599 / mo",
        tagline: "Up to 400 monthly transactions",
        points: ["Everything in Advanced", "Fixed asset register", "Financial analysis", "For high-volume businesses"],
      },
    ],
    estimator: {
      title: "Accounting cost estimator",
      label: "Monthly transactions (sales, purchases, bank entries)",
      options: [
        { label: "Up to 10 (micro business)", tier: 0, annual: "≈ AED 11,988 per year, illustrative" },
        { label: "11 – 150 (growing SME)", tier: 1, annual: "≈ AED 26,388 per year, illustrative" },
        { label: "151 – 400 (established business)", tier: 2, annual: "≈ AED 43,188 per year, illustrative" },
        { label: "400+ (high volume)", tier: 2, annual: "Custom quote — volume above the Premium plan" },
      ],
      note:
        "Indicative only — not a quotation. VAT filing, corporate tax, payroll, backlog work, audit-ready statements and multi-entity consolidation are quoted separately unless expressly included.",
    },
    notes: ["Transaction volume", "Number of entities", "VAT & corporate tax", "Free zone vs mainland"],
  },

  activities: {
    eyebrow: "Our Core Services",
    heading: "Our Core Accounting Services",
    intro: "We agree the scope around your business, records and reporting obligations.",
    groups: [
      { icon: "licence", title: "Bookkeeping", text: "Bookkeeping and record preparation to support your reports and any required audit.", tags: ["Daily entries", "Records"] },
      { icon: "bank", title: "Accounts Payable", text: "Vendor invoices and payments managed end to end, on schedule and accurately recorded.", tags: ["Invoices", "Payments"] },
      { icon: "activities", title: "Financial Reporting", text: "Clear monthly and annual reports that show exactly where your business stands.", tags: ["Monthly", "Annual"] },
      { icon: "tax", title: "Tax Planning & Compliance", text: "Tax-planning and filing support based on your circumstances and an agreed scope.", tags: ["VAT", "Corporate tax"] },
      { icon: "services", title: "Accounting Supervision", text: "Oversight of your in-house accounting staff — reviewing entries and reports before filing.", tags: ["Review", "Quality control"] },
      { icon: "online", title: "Backlog Accounts", text: "Overdue books rebuilt from your incorporation date to the present.", tags: ["Catch-up", "Clean-up"] },
    ],
    lists: [
      {
        title: "Full range of accounting support",
        items: [
          "Bookkeeping",
          "Accounts payable outsourcing",
          "Accounting & financial reporting",
          "Tax planning & compliance",
          "Accounting supervision",
          "Backlog accounts",
          "Account reconciliation",
          "Payroll services",
          "Audit support",
          "Management accounting",
          "Compliance & regulatory reporting",
        ],
      },
    ],
  },

  process: {
    heading: "How We Work With You",
    intro: "We review the records available and agree scope, responsibilities and timetable before work begins.",
    steps: [
      { title: "Review your records", text: "We look at your current books, systems and reporting obligations." },
      { title: "Agree scope & price", text: "Transaction volume, reports, tax work and timetable confirmed in writing." },
      { title: "Set up your accounts", text: "Chart of accounts review and set-up, plus the right accounting software." },
      { title: "Monthly bookkeeping", text: "Daily, weekly or monthly entries, reconciliations and MIS reports." },
      { title: "Reports & filings", text: "Financial statements, VAT returns and corporate tax support as agreed." },
    ],
  },

  infoBlock: {
    eyebrow: "Bookkeeping",
    heading: "What Outsourced Bookkeeping Includes",
    paragraphs: [
      "Bookkeeping means collecting and managing all your financial transactions, so your records are accurate for compliance, decision-making and payroll. Record-keeping requirements depend on your entity and tax status — we confirm which accounting standards and simplifications apply.",
      "Where the Wages Protection System applies, payroll is processed in line with the wage-reporting and payment rules.",
    ],
    listTitle: "Our bookkeeping service covers",
    list: [
      "Preparation and maintenance of day-to-day transactions",
      "Chart of accounts review and set-up",
      "Data entry for daily transactions",
      "Daily, weekly, monthly or quarterly visits as needed",
      "Accounts payable and receivable processing",
      "Bank reconciliations",
      "VAT-compliant procedures and MIS reports",
    ],
  },

  tax: {
    eyebrow: "Compliance",
    heading: "Accounting for Startups & Growing Businesses",
    paragraphs: [
      "We help startups organise bookkeeping, financial statements and tax-support work around their needs. Corporate tax registration, returns and payment each have their own requirements, and deadlines depend on your tax period — so we agree the work and timetable after reviewing your circumstances.",
    ],
    cards: [
      { value: "9 months", title: "Corporate Tax Return", text: "Returns and payment are generally due nine months after the end of the relevant tax period." },
      { value: "FTA", title: "VAT Returns", text: "Filed for the tax period assigned to you by the Federal Tax Authority." },
      { value: "IFRS", title: "Accounting Standards", text: "IFRS, IFRS for SMEs or a permitted cash basis — confirmed for your business." },
      { value: "WPS", title: "Payroll", text: "Payroll processed in line with the Wages Protection System where it applies." },
    ],
    tags: ["VAT registration", "Corporate tax registration", "Payroll services"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Outsource Your Accounting to",
    paragraph: "Discuss the bookkeeping, reporting and tax-support work your business needs — we'll agree a clear scope before work begins.",
    cards: [
      { title: "Clear Scope in Writing", text: "Transaction limits, reports, tax work and price confirmed before we start." },
      { title: "Qualified Accountants", text: "A team that stays current on UAE accounting, VAT and corporate tax rules." },
      { title: "Records Ready for Tax & Audit", text: "Organised books that support VAT returns, corporate tax and any required audit." },
    ],
    quoteTitle: "Get your written",
    quoteText: "Tell us your monthly transactions, entities and the services you need — we'll send a written quote covering scope, billing term, software and any extras.",
  },

  included: [
    "Free review of your records",
    "Chart of accounts set-up",
    "Monthly bookkeeping & reconciliation",
    "Management & financial reports",
    "VAT & corporate tax support (as agreed)",
    "Year-end & audit-ready support",
  ],

  faqs: [
    { question: "How much do accounting services cost in Dubai?", answer: "Our package examples start at AED 999 a month for up to 10 transactions, AED 2,199 for up to 150 and AED 3,599 for up to 400. VAT, corporate tax, payroll and backlog work are quoted separately unless included." },
    { question: "What does a monthly accounting package include?", answer: "Day-to-day transaction entries, monthly sales, receivables and payables reports, bank reconciliation and financial statements — with higher plans adding cash flow statements, a fixed asset register and financial analysis." },
    { question: "Do you handle VAT and corporate tax?", answer: "Yes. VAT returns and corporate tax registration and filing are available, quoted to your scope and tax status." },
    { question: "Can you update backlog accounts?", answer: "Yes — we rebuild overdue books from your incorporation date to the present." },
    { question: "Which accounting standard will my books follow?", answer: "We confirm whether IFRS, IFRS for SMEs or a permitted cash basis is appropriate for your entity and tax status." },
    { question: "Is outsourcing cheaper than hiring an accountant?", answer: "Usually, yes — you avoid salary, visa and training costs and pay only for the work your business needs." },
    { question: "Do free zone companies need accounting?", answer: "Yes. Record-keeping, tax registration and in many zones audited financial statements are required — the exact obligations depend on your entity and zone." },
  ],
};
