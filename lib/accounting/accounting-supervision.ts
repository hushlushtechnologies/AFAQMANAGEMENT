import type { FreezoneData } from "@/lib/freezones/types";

export const accountingSupervision: FreezoneData = {
  slug: "accounting-supervision",
  category: "Accounting & Tax",
  name: "Accounting Supervision Services in Dubai",
  shortName: "Accounting Supervision",
  hero: {
    eyebrow: "Accounting Supervision · Dubai",
    title: "Accounting Supervision Services in Dubai",
    highlight: "Independent Eyes on Your Books",
    subtitle: "Regular, independent checks that your bookkeeping and financial reporting are accurate and honest.",
    intro:
      "Fraud can be carefully planned and well hidden. Statements may show strong sales and profits while the real picture behind them is very different. Afaq Al Khaleej visits your business regularly to check that daily entries, bookkeeping and financial reporting are done honestly and correctly, so you can protect what you've built.",
    chips: ["Weekly or monthly visits", "Sales & inventory checks", "Asset & expense verification", "Fraud-risk review"],
    image: "/images/services/business-consultancy/risk-assessment.png",
  },
  stats: [
    { value: "12", label: "Areas checked" },
    { value: "Weekly / Monthly", label: "Visit frequency" },
    { value: "Independent", label: "Third-party review" },
    { value: "Owner-focused", label: "Findings reported to you" },
  ],

  about: {
    heading: "Why Your Accounts Need Supervision",
    body:
      "If you suspect fraud or errors in your bookkeeping or financial reporting, or simply want peace of mind, regular supervision is one of the best precautions you can take. Even a trusted team member could manipulate the books for personal gain, and undetected fraud can lead to heavy losses or worse. As a third party, we have no stake in the numbers, so our review is objective.",
    location: { name: "Inventory, assets & premises checked", area: "Regular on-site visits", image: "/images/services/digital-business-solutions/starting-new-business.png" },
    features: [
      { icon: "activities", title: "Fraud Deterrence", text: "Regular independent checks discourage manipulation." },
      { icon: "trading", title: "Verified Sales", text: "Recorded sales traced to cash, customers and invoices." },
      { icon: "office", title: "Inventory Checked", text: "Counts, condition and valuation verified." },
      { icon: "licence", title: "Proper Authorisation", text: "Asset purchases, sales and expenses checked for approval." },
      { icon: "bank", title: "Reconciled Balances", text: "Bank, customer and supplier accounts kept accurate and on time." },
      { icon: "ownership", title: "Objective Judgement", text: "An independent third-party view of your records." },
    ],
  },

  activities: {
    eyebrow: "Our Services",
    heading: "What Our Accounting Supervision Covers",
    intro: "We visit weekly or monthly, depending on how many transactions you have, and check every key area of your accounts.",
    groups: [
      { icon: "trading", title: "Sales Verification", text: "Sales in the ledger are checked against cash received or receivable, customer identity and invoices.", tags: ["Sales ledger", "Invoices"] },
      { icon: "multiple", title: "Sales Incentive Analysis", text: "We analyse which departments drive sales and review commissions and bonuses, which can tempt staff to overstate sales.", tags: ["Commissions", "Bonuses"] },
      { icon: "office", title: "Inventory Valuation", text: "We count and inspect stock for damage and confirm it is valued at the lower of cost and net realisable value.", tags: ["Stock count", "NRV"] },
      { icon: "licence", title: "Accounting Standards Review", text: "We check that revenue and expenses follow the accrual basis and prudence, and that the right framework (IFRS) is applied correctly.", tags: ["Accrual basis", "IFRS"] },
      { icon: "bank", title: "Assets & Depreciation", text: "We confirm significant asset damage is reported, depreciation is correct and asset transactions are documented and authorised.", tags: ["Fixed assets"] },
      { icon: "ownership", title: "Controls & Culture", text: "We verify original documents, observe the premises and assess whether management promotes honesty and integrity.", tags: ["Document checks", "Integrity"] },
    ],
    lists: [
      {
        title: "We also check that",
        items: [
          "Bank, customer and supplier accounts are reconciled accurately and on time",
          "Utility bills and other expenses are paid and authorised",
          "Income receivables agree with contracts and other records",
          "Documents such as bank statements are genuine",
        ],
      },
    ],
  },

  process: {
    heading: "How Supervision Works",
    intro: "A steady routine of visits, checks and reports, so issues surface early.",
    cautionTitle: "Supervision is not a statutory audit",
    caution: "Accounting supervision is an ongoing management review. Where your licensing authority or corporate tax rules require audited financial statements, a separate independent audit is still needed.",
    steps: [
      { title: "Understand your business", text: "We learn your operations, systems, staff and key risk areas." },
      { title: "Agree scope & frequency", text: "Weekly or monthly visits, with the areas to review agreed in writing." },
      { title: "Visit & test", text: "On site we verify sales, inventory, assets, expenses, reconciliations and documents." },
      { title: "Report to owners", text: "Findings and red flags go directly to the owner or board, with clear recommendations." },
    ],
  },

  features: {
    eyebrow: "Warning Signs",
    heading: "When Supervision Is Especially Valuable",
    items: [
      { status: "warn", text: "Strong reported profits but weak cash" },
      { status: "warn", text: "One person controls recording, payments and banking" },
      { status: "warn", text: "Sales-linked bonuses or commissions" },
      { status: "warn", text: "Stock that's hard to count or easily damaged" },
      { status: "warn", text: "Owners who are rarely on site" },
      { status: "warn", text: "Rapid growth with limited internal controls" },
    ],
  },

  documents: {
    heading: "What We Review on Each Visit",
    image: "/images/services/company-formation/growth-focused-solutions.png",
    intro: "Have these available so each visit runs smoothly.",
    items: [
      "Sales ledger, invoices and receipts",
      "Inventory records and access for counts",
      "Fixed asset register and purchase or sale documents",
      "Bank statements and reconciliations",
      "Customer and supplier ledgers",
      "Utility bills and expense approvals",
      "Contracts supporting income",
      "Commission and bonus calculations",
    ],
  },

  cost: {
    heading: "Accounting Supervision Cost",
    intro:
      "Fees depend on visit frequency and how much there is to review. Tell us about your business and transaction volume, and we'll send a written quotation.",
    notes: ["Visit frequency", "Transaction volume", "Inventory complexity", "Number of locations", "Reporting needs"],
  },

  tax: {
    eyebrow: "Also From Afaq",
    heading: "Related Accounting Services",
    paragraphs: ["Combine supervision with our other accounting services for complete coverage."],
    cards: [
      { value: "01", title: "Accounting Services", text: "Full accounting and financial reporting for your business." },
      { value: "02", title: "Accounts Payable Outsourcing", text: "Payables processing, from invoice to payment." },
      { value: "03", title: "Bookkeeping Services", text: "Day-to-day transactions recorded and reconciled." },
    ],
    tags: ["Accounting", "Outsource accounting", "Bookkeeping"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Protect Your Business with",
    paragraph: "An experienced, independent team that leaves no stone unturned to make sure your bookkeeping and financial reporting are done honestly.",
    cards: [
      { title: "Independent Review", text: "Third-party judgement with no stake in the figures." },
      { title: "Thorough Checks", text: "Sales, stock, assets, expenses and controls covered." },
      { title: "Direct to Owners", text: "Findings reported to you, not just to the finance team." },
    ],
    quoteTitle: "Request a supervision",
    quoteText: "Tell us about your business and concerns, and we'll send a written quote for regular accounting supervision.",
  },

  included: [
    "Weekly or monthly visits",
    "Sales & receivables verification",
    "Inventory counts & valuation",
    "Asset & depreciation review",
    "Reconciliation & expense checks",
    "Findings report to owners",
  ],

  faqs: [
    { question: "What is accounting supervision?", answer: "An ongoing, independent review of your bookkeeping and financial reporting, with regular visits to check that transactions are recorded accurately and honestly." },
    { question: "How is it different from an audit?", answer: "An audit gives a formal opinion on annual financial statements. Supervision is a continuing management review that catches errors and fraud risks during the year. It doesn't replace a statutory audit where one is required." },
    { question: "How often will you visit?", answer: "Weekly or monthly, depending on the volume of your transactions." },
    { question: "What do you check?", answer: "Sales, receivables, inventory, fixed assets and depreciation, expenses, reconciliations, original documents, accounting standards and the control environment." },
    { question: "Can you detect fraud?", answer: "Regular independent checks greatly reduce the opportunity for fraud and help identify red flags. If we find signs of fraud, we can recommend a detailed forensic review." },
    { question: "Who receives your findings?", answer: "Findings go directly to the owner, partners or board, as agreed in our engagement." },
    { question: "Can you supervise if we keep our own books?", answer: "Yes. Supervision is designed for businesses with in-house accountants or another bookkeeping provider." },
  ],
};
