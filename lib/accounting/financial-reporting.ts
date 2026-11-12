import type { FreezoneData } from "@/lib/freezones/types";

export const financialReporting: FreezoneData = {
  slug: "financial-reporting",
  category: "Accounting & Tax",
  name: "Financial Reporting Services in Dubai",
  shortName: "Financial Reporting",
  hero: {
    eyebrow: "Accounting & Financial Reporting · Dubai",
    title: "Financial Reporting Services in Dubai",
    highlight: "IFRS-Based Statements You Can Act On",
    subtitle: "We keep your books and prepare financial statements that give you a true picture of the business.",
    intro:
      "Afaq Al Khaleej records your transactions on a regular schedule, reconciles your balances and prepares accrual-based financial statements in line with International Financial Reporting Standards (IFRS). The result is reliable information for management, investors, banks and tax filings.",
    chips: ["IFRS financial statements", "Weekly or monthly visits", "VAT-compliant records", "Reconciliations"],
    image: "/images/services/digital-business-solutions/growing-business.png",
  },
  stats: [
    { value: "IFRS", label: "Reporting framework" },
    { value: "Accrual", label: "Basis of accounting" },
    { value: "Weekly / Monthly", label: "Visit options" },
    { value: "4 steps", label: "Entries to statements" },
  ],

  about: {
    heading: "Why Keeping Proper Accounts Is Essential",
    body:
      "Tracking income and expenses shows how your operations are really performing. UAE company law requires businesses to keep proper books of account, and corporate tax adds its own requirements: taxable income starts from IFRS-based financial statements, and some businesses must have them audited. Good records also help investors judge your financial position, spot opportunities and cut unnecessary costs.",
    location: { name: "Your accounts, kept current", area: "On-site visits or remote support", image: "/images/services/digital-business-solutions/business-automation.png" },
    features: [
      { icon: "licence", title: "Legal Requirement", text: "Proper books of account kept as UAE law requires." },
      { icon: "tax", title: "Tax Ready", text: "Statements that form the starting point for corporate tax and support VAT." },
      { icon: "trading", title: "Investor Insight", text: "A clear view of financial position for investors and banks." },
      { icon: "activities", title: "Cost Control", text: "Spot and reduce unnecessary expenses." },
      { icon: "services", title: "Focus on Your Business", text: "We keep the records while you run operations." },
      { icon: "award", title: "Better Decisions", text: "Reliable figures for planning and investment." },
    ],
  },

  activities: {
    eyebrow: "Regular Accounting",
    heading: "Our Regular Accounting Services",
    intro: "We record your daily transactions in your accounting software on a set schedule, then analyse the results.",
    groups: [
      { icon: "online", title: "Weekly Visits", text: "We visit weekly to update your transactions on an accrual basis, with documentation that meets UAE VAT law.", tags: ["Accrual basis", "VAT-compliant"] },
      { icon: "bank", title: "Monthly Visits", text: "Your books are updated monthly on an accrual basis, with documentation that meets UAE VAT law.", tags: ["Monthly close"] },
      { icon: "activities", title: "Review of Accounting Transactions", text: "Many companies record transactions but can't easily check their accuracy or compliance. We review past entries so errors are corrected before they repeat.", tags: ["Accuracy", "Compliance"] },
      { icon: "multiple", title: "Account Reconciliation", text: "Bank, supplier, customer and intercompany balances reconciled to protect your data and reduce the risk of fraud.", tags: ["Bank", "Suppliers", "Customers", "Intercompany"], href: "/accounting/account-reconciliation" },
    ],
  },

  process: {
    heading: "From Transactions to Financial Statements",
    intro: "Every reporting cycle follows the same disciplined path to an accurate picture of your financial affairs.",
    steps: [
      { title: "Double-entry recording", text: "Each transaction is recorded on an accrual basis in your accounting software." },
      { title: "Ledger posting", text: "Entries are posted to the general ledger and subsidiary ledgers." },
      { title: "Trial balance", text: "A trial balance is prepared and checked after reconciliations and adjustments." },
      { title: "Financial statements", text: "IFRS-based statements of financial position, profit or loss and cash flows, with notes as required." },
    ],
  },

  structures: {
    heading: "Reports We Prepare",
    intro: "Statements and analysis that help management understand performance and plan ahead.",
    groups: [
      {
        title: "Financial statements",
        items: [
          { title: "Statement of financial position", text: "Assets, liabilities and equity at period end." },
          { title: "Statement of profit or loss", text: "Revenue, expenses and profit for the period." },
          { title: "Statement of cash flows", text: "How cash moved through operations, investing and financing." },
        ],
      },
      {
        title: "Management analysis",
        items: [
          { title: "Profitability review", text: "Where profit is made, and where it's lost." },
          { title: "Cash-flow insight", text: "Cash generated over the year, to plan future investment." },
          { title: "Period comparisons", text: "Performance trends across months and years." },
        ],
      },
    ],
    notes: [
      "Statements are prepared on an accrual basis under IFRS. Smaller businesses may be eligible to use IFRS for SMEs.",
      "Where an audit is required, by your licensing authority or for corporate tax, our statements are prepared ready for your auditor.",
    ],
  },

  features: {
    eyebrow: "Benefits",
    heading: "Why Outsource Accounting & Financial Reporting",
    items: [
      { status: "yes", text: "Improves efficiency and productivity" },
      { status: "yes", text: "Access to current accounting technology without large investment" },
      { status: "yes", text: "Experienced professionals at a lower cost" },
      { status: "yes", text: "No need to recruit and train accountants" },
      { status: "yes", text: "Removes additional staff costs" },
      { status: "yes", text: "Statutory record-keeping requirements met" },
    ],
  },

  documents: {
    heading: "What We Need From You",
    image: "/images/about/mission-target.png",
    intro: "Share these regularly so your books stay current.",
    items: [
      "Sales and purchase invoices",
      "Bank and card statements",
      "Expense receipts and petty-cash records",
      "Customer and supplier statements",
      "Intercompany agreements and balances",
      "Payroll summaries",
      "Fixed asset purchases and disposals",
    ],
  },

  cost: {
    heading: "Financial Reporting Cost",
    intro:
      "Fees depend on your transaction volume, visit frequency and reporting needs. Share an outline of your business and we'll send a written quotation.",
    notes: ["Transaction volume", "Visit frequency", "Number of entities", "Reporting frequency", "Audit requirements"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Keep Your Reporting on Track with",
    paragraph: "Accounting, reporting and wider business support under one roof. Your books are kept properly, your statements meet the required standards, and you get the insight to grow.",
    cards: [
      { title: "IFRS-Based Statements", text: "Prepared on an accrual basis to recognised standards." },
      { title: "Compliance Built In", text: "Records that meet UAE law, VAT and corporate tax needs." },
      { title: "Tailored Reporting", text: "Reports matched to how your business is managed." },
    ],
    quoteTitle: "Request a reporting",
    quoteText: "Tell us about your business, volumes and reporting needs, and we'll send a written quote.",
  },

  included: [
    "Weekly or monthly bookkeeping",
    "Review of past entries",
    "Bank & ledger reconciliations",
    "Trial balance",
    "IFRS financial statements",
    "Management analysis",
  ],

  faqs: [
    { question: "Is it mandatory to keep books of account in the UAE?", answer: "Yes. UAE company law requires businesses to keep proper books of account, and VAT and corporate tax rules add their own record-keeping and retention requirements." },
    { question: "Which standards do you follow?", answer: "We prepare accrual-based financial statements under International Financial Reporting Standards (IFRS). Eligible smaller businesses may use IFRS for SMEs." },
    { question: "How often will you update my accounts?", answer: "Weekly or monthly, depending on your volume. We can visit your office or work remotely." },
    { question: "What financial statements will I receive?", answer: "A statement of financial position, a statement of profit or loss and a statement of cash flows, with supporting notes and management analysis as agreed." },
    { question: "Are your financial statements audited?", answer: "No. We prepare them, and an independent auditor audits them where required. Our statements are prepared ready for that audit." },
    { question: "Why do financial statements matter for corporate tax?", answer: "UAE corporate tax uses accounting profit from your financial statements as the starting point for taxable income, so accurate, standards-based statements are essential." },
    { question: "Can you review mistakes in past records?", answer: "Yes. We review past accounting transactions for accuracy and compliance and correct errors before they repeat." },
    { question: "Which reconciliations do you perform?", answer: "Bank, supplier ledger, customer ledger and intercompany reconciliations, plus any other statements you need." },
  ],
};
