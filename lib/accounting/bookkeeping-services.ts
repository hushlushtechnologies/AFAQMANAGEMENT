import type { FreezoneData } from "@/lib/freezones/types";

export const bookkeepingServices: FreezoneData = {
  slug: "bookkeeping-services",
  category: "Accounting & Tax",
  name: "Bookkeeping Services in Dubai",
  shortName: "Bookkeeping",
  hero: {
    eyebrow: "Bookkeeping Support · Dubai",
    title: "Bookkeeping Services in Dubai",
    highlight: "Organised Books, Reconciled Balances",
    subtitle: "Keep sales, purchases, receipts and payments organised — with a scope and schedule matched to your records.",
    intro:
      "Afaq Al Khaleej helps UAE businesses maintain their books, reconcile balances and prepare agreed reports. Send us an outline of your transaction volume, entities, software and any unfinished periods, and we'll assess exactly the work you need.",
    chips: ["Sales & purchase entries", "Bank reconciliation", "Multi-currency records", "Daily to quarterly updates"],
    image: "/images/services/company-formation/feasibility-market-intelligence.png",
  },
  stats: [
    { value: "3 steps", label: "To organised books" },
    { value: "6", label: "Core scope areas" },
    { value: "Daily–Qtrly", label: "Update frequency" },
    { value: "Multi-FX", label: "Currency records handled" },
  ],

  about: {
    heading: "What Our Bookkeeping Support Covers",
    body:
      "Bookkeeping starts with recording and classifying day-to-day transactions. We agree the tasks, reporting frequency and responsibilities in writing before work begins — and flag missing information and unexplained differences, so you can see what still needs attention.",
    location: { name: "Your books, organised", area: "On-site or remote support", image: "/images/services/feasibility-studies/business-model.png" },
    features: [
      { icon: "licence", title: "Sales & Purchase Entries", text: "Day-to-day transactions recorded and classified consistently." },
      { icon: "ownership", title: "Customer & Supplier Balances", text: "Receivables and payables kept accurate and up to date." },
      { icon: "bank", title: "Petty Cash", text: "Petty-cash transactions recorded and supported." },
      { icon: "activities", title: "Bank Reconciliation", text: "Ledger entries matched to bank and card statements." },
      { icon: "services", title: "Ledger Maintenance", text: "A clean general ledger ready for reporting." },
      { icon: "online", title: "Multi-Currency Records", text: "Exchange differences and bank charges identified when matching entries." },
    ],
  },

  prosCons: {
    placement: "early",
    neutral: true,
    eyebrow: "Bookkeeping vs Accounting",
    heading: "Choosing the Right Support",
    prosTitle: "Bookkeeping",
    consTitle: "Accounting",
    pros: [
      "Records and organises day-to-day transactions",
      "Maintains ledgers, balances and petty cash",
      "Reconciles accounts with bank statements",
      "Produces agreed operational reports",
    ],
    cons: [
      "Uses bookkeeping records to prepare financial statements",
      "Adds analysis and wider financial reporting",
      "Supports tax filings and audit preparation",
      "Informs budgeting and business decisions",
    ],
    note: {
      title: "Need both?",
      text: "Many businesses do. We make sure each service's tasks and responsibilities are clear, so nothing is assumed to be covered twice — see our accounting services for the broader offering.",
    },
  },

  cost: {
    heading: "Bookkeeping Cost",
    intro:
      "Your fee depends on the work involved. Request a written quotation covering transaction limits, fees, software costs, reporting outputs and anything excluded — tax filing, payroll and audit work are quoted separately unless expressly included.",
    notes: ["Transaction volume", "Number of entities", "Record quality", "Software", "Backlog periods"],
  },

  activities: {
    eyebrow: "Working Together",
    heading: "How Outsourced Bookkeeping Works With Your Team",
    intro: "Agree who sends the records, who answers queries and who reviews the work — a clear split of responsibilities keeps bookkeeping manageable as you grow.",
    groups: [
      { icon: "services", title: "Experience & Expertise", text: "Know who works on your books, their relevant experience and who reviews the entries.", tags: ["Named team", "Reviewer"] },
      { icon: "bank", title: "Cost Savings", text: "Compare the fee with the work included, with any extra charges explained in writing.", tags: ["Written quote"] },
      { icon: "activities", title: "Efficiency & Accuracy", text: "Consistent coding, supporting documents and reconciliation checks catch omissions.", tags: ["Coding", "Checks"] },
      { icon: "ownership", title: "Data Security", text: "Agreed document sharing, system access and data handling — never personal banking passwords.", tags: ["Access control"] },
      { icon: "multiple", title: "Scalability", text: "Review the scope as transaction volumes, entities or reporting needs change.", tags: ["Grows with you"] },
      { icon: "award", title: "Focus on Your Business", text: "Less day-to-day recording for your team — with a regular contact to keep questions moving.", tags: ["More time"] },
    ],
    lists: [
      { title: "Starting scope checklist", items: ["Account review", "Data entry", "Financial charts", "Bank reconciliations", "VAT-compliant coding", "MIS reports"] },
    ],
  },

  process: {
    heading: "How We Organise and Maintain Your Books",
    intro: "Three clear stages — with outstanding items shared openly so your team can resolve them.",
    cautionTitle: "Separate responsibilities",
    caution: "Payment authorisation, tax submissions and independent audits are separate responsibilities that must be agreed explicitly.",
    steps: [
      { title: "Review the starting point", text: "Periods to cover, available records, chart of accounts, opening balances and any work already done." },
      { title: "Record & reconcile", text: "We enter agreed transactions, compare ledgers with statements and raise unmatched items." },
      { title: "Review outstanding items & reports", text: "We share agreed reports and open questions; your team provides explanations and approvals." },
    ],
  },

  documents: {
    heading: "Records to Include in Your Bookkeeping Scope",
    image: "/images/services/business-consultancy/strategy-planning.png",
    intro: "Useful starting records — and for stock or multiple currencies, include the relevant schedules and supporting details.",
    items: [
      "Sales and purchase invoices",
      "Expense receipts",
      "Bank and card statements",
      "Petty-cash records",
      "Customer and supplier balances",
      "Opening trial balance, where available",
      "Original invoices, payment evidence and currency details for foreign-currency transactions",
    ],
    note: "Agree how records will be provided and how often they'll be reviewed — on-site visits or remote working are confirmed for your engagement.",
  },

  features: {
    eyebrow: "Benefits",
    heading: "How Regular Bookkeeping Supports Your Business",
    items: [
      { status: "yes", text: "High accuracy for better business decisions" },
      { status: "yes", text: "Cost-effective compared with in-house staff" },
      { status: "yes", text: "Saves your team time every month" },
      { status: "yes", text: "Helps detect fraud and irregularities early" },
      { status: "yes", text: "Increases overall productivity" },
      { status: "yes", text: "Helps avoid penalties from missed obligations" },
      { status: "yes", text: "Regular reconciliation of statements" },
      { status: "yes", text: "Professional assistance when you need it" },
    ],
  },

  tax: {
    eyebrow: "Insights",
    heading: "Use Your Books to Review Cash, Balances & Outstanding Items",
    paragraphs: ["Well-kept books give you a clear picture of your business — and support the wider reporting, tax and audit work that follows."],
    cards: [
      { value: "Cash", title: "Manage Cash Flow", text: "See what's coming in and going out, and plan ahead." },
      { value: "On time", title: "Meet Payment Obligations", text: "Track what you owe and pay suppliers on schedule." },
      { value: "Reports", title: "Easier Financial Reporting", text: "Clean records make statements and filings faster." },
      { value: "Forecast", title: "Better Decisions", text: "Use reliable numbers for forecasting and stakeholder confidence." },
    ],
    tags: ["Accounting services", "Payroll services", "VAT registration"],
  },

  infoBlock: {
    eyebrow: "Getting Started",
    heading: "How to Start: Records, Access & a Written Quote",
    paragraphs: [
      "Tell us the periods you need covered, the approximate number of transactions, the entities involved and the software you use — and share a sample of your records, explaining any gaps.",
      "If records are overdue, we'll discuss backlog accounting support before setting a completion schedule.",
    ],
    listTitle: "We'll confirm with you",
    list: [
      "Your named contact and reporting frequency",
      "Document-sharing method and software permissions",
      "How opening balances and existing records transfer",
      "Transaction limits, fees, outputs and exclusions in writing",
    ],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Keep Your Books in Order with",
    paragraph: "Clear scope, consistent coding and open communication — so your records are always ready for reporting, tax and audit.",
    cards: [
      { title: "Clear Scope in Writing", text: "Tasks, reporting frequency and responsibilities agreed before work begins." },
      { title: "Outstanding Items Flagged", text: "Missing documents and unexplained differences raised for your team to resolve." },
      { title: "Ready for the Next Step", text: "Records that support financial statements, VAT, corporate tax and audits." },
    ],
    quoteTitle: "Request a scoped",
    quoteText: "Tell us about your records, transaction volume and reporting needs — we'll send a written bookkeeping quote with clear inclusions and exclusions.",
  },

  included: [
    "Review of your records & opening balances",
    "Chart of accounts set-up",
    "Transaction entry & classification",
    "Bank & card reconciliations",
    "Agreed MIS reports",
    "Outstanding items tracking",
  ],

  faqs: [
    { question: "What is a bookkeeping service?", answer: "A service that records, classifies and maintains your business's day-to-day financial transactions — sales, purchases, receipts and payments — so your books are accurate and up to date." },
    { question: "What bookkeeping services do you provide?", answer: "Chart of accounts set-up, ledger maintenance, sales and expense entries, petty cash recording, customer and supplier balances, bank reconciliation and agreed MIS reports." },
    { question: "What's the difference between a bookkeeper and an accountant?", answer: "A bookkeeper records and organises transactions; an accountant uses those records to prepare financial statements, analysis, tax filings and wider reporting. Many businesses need both." },
    { question: "How often will my books be updated?", answer: "We agree a frequency that suits your volume — daily, weekly, monthly or quarterly, on-site or remotely." },
    { question: "How do I send my documents?", answer: "We agree a secure document-sharing method and appropriate software access at the start. Never share personal banking passwords." },
    { question: "How is bookkeeping billed?", answer: "Fees depend on transaction volume, entities, record quality, software and any backlog. We provide a written quotation that explains inclusions, exclusions and any extra charges." },
    { question: "How does virtual bookkeeping work?", answer: "You share records digitally and grant agreed access to your accounting software; we record, reconcile and report remotely, raising queries with your named contact." },
    { question: "What is the basic purpose of bookkeeping?", answer: "To keep a complete, accurate record of financial transactions that supports decision-making, compliance, tax filings and audits." },
    { question: "Who uses bookkeeping services?", answer: "Startups, SMEs and growing companies across trading, services, real estate, healthcare, logistics and more — especially those without a full in-house finance team." },
  ],
};
