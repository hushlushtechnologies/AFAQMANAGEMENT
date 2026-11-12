import type { FreezoneData } from "@/lib/freezones/types";

export const accountReconciliation: FreezoneData = {
  slug: "account-reconciliation",
  category: "Accounting & Tax",
  name: "Account Reconciliation Services in Dubai",
  shortName: "Account Reconciliation",
  hero: {
    eyebrow: "Account Reconciliation · Dubai",
    title: "Account Reconciliation Services in Dubai",
    highlight: "Balances You Can Trust",
    subtitle: "We match your books against bank, card, customer and supplier records so your financial statements are accurate.",
    intro:
      "Reconciliation checks that your financial statements are correct and gives you a complete view of where the business stands. Banks also rely on accurate balance sheets to assess creditworthiness. It's specialist work, so Afaq Al Khaleej handles it for you, in line with statutory requirements.",
    chips: ["Bank reconciliation", "Credit card reconciliation", "Debtor & creditor accounts", "Invoice matching"],
    image: "/images/services/investment-services/financial-outlook.png",
  },
  stats: [
    { value: "4", label: "Reconciliation types" },
    { value: "10+", label: "Industries served" },
    { value: "Major", label: "Accounting software supported" },
    { value: "Confidential", label: "Covered by written agreement" },
  ],

  about: {
    heading: "Why Account Reconciliation Matters",
    body:
      "Reconciliation compares the balances in your books with independent records such as bank statements, card statements and customer and supplier statements, then explains every difference. Most businesses are busy with their core work and reconciliation doesn't need a full-time employee, so outsourcing it is often the practical choice.",
    location: { name: "Your records, matched and explained", area: "On-site or remote support", image: "/images/services/investment-services/business-ventures.png" },
    features: [
      { icon: "bank", title: "Simplifies Bill Payment", text: "Know exactly what has been paid and what is still due." },
      { icon: "licence", title: "Keeps Accounts Correct", text: "Balances agree with independent statements." },
      { icon: "activities", title: "Eliminates Errors", text: "Duplicate, missing and mis-posted entries found and fixed." },
      { icon: "trading", title: "Saves Money", text: "Avoid overpayments, missed refunds and avoidable charges." },
      { icon: "ownership", title: "Flags Unauthorised Transactions", text: "Unexplained items are raised for your review." },
      { icon: "award", title: "Supports Creditworthiness", text: "Accurate balance sheets give banks confidence." },
    ],
  },

  activities: {
    eyebrow: "Our Services",
    heading: "What We Reconcile",
    intro: "We learn how your accounting system works, collect what we need from each department, make the required corrections and then recommend improvements that suit your business.",
    groups: [
      { icon: "bank", title: "Bank Reconciliation", text: "Business records matched and reconciled with bank statements.", tags: ["All bank accounts"] },
      { icon: "online", title: "Credit Card Reconciliation", text: "Card payments matched against statements and supporting receipts.", tags: ["Corporate cards"] },
      { icon: "multiple", title: "Debtor & Creditor Accounts", text: "Customer and supplier balances agreed with their statements.", tags: ["Receivables", "Payables"] },
      { icon: "licence", title: "Invoice Matching", text: "Invoices paid directly through the bank matched to entries in your books.", tags: ["Invoices"] },
    ],
    lists: [
      {
        title: "Industries we support",
        items: ["Food & beverage", "Travel & leisure", "E-commerce & retail", "Insurance", "Healthcare", "Finance", "Banking", "Investments", "Telecommunications", "Non-profit organisations"],
      },
    ],
  },

  process: {
    heading: "How We Reconcile Your Accounts",
    intro: "A clear four-step approach, with every unexplained item shared openly.",
    cautionTitle: "Unexplained items",
    caution: "Differences we can't explain from the records are listed for your team to investigate. We don't write them off without your approval.",
    steps: [
      { title: "Understand your system", text: "We review your accounting software, chart of accounts and how transactions are recorded." },
      { title: "Collect information", text: "Statements and supporting documents are gathered from the departments concerned." },
      { title: "Match & correct", text: "Balances are compared, differences investigated and agreed corrections posted." },
      { title: "Report & recommend", text: "You receive reconciliation reports and practical recommendations for your business." },
    ],
  },

  documents: {
    heading: "Records Needed for Reconciliation",
    image: "/images/services/investment-services/strategic-fit.png",
    intro: "Share these for each period we reconcile.",
    items: [
      "Bank statements for all accounts",
      "Credit card statements and receipts",
      "Customer and supplier statements",
      "Sales and purchase invoices",
      "Access to your accounting software or ledger exports",
      "Previous reconciliations, where available",
    ],
    note: "We agree a secure document-sharing method at the start. Never share personal banking passwords.",
  },

  features: {
    eyebrow: "Why Choose Us",
    heading: "What You Get with Afaq Al Khaleej",
    items: [
      { status: "yes", text: "Experience with QuickBooks, Xero, Zoho Books, Sage and other major software" },
      { status: "yes", text: "Qualified accountants with hands-on reconciliation experience" },
      { status: "yes", text: "Confidentiality written into our engagement agreement" },
      { status: "yes", text: "Agreed, controlled access to your data and systems" },
      { status: "yes", text: "Records organised in line with UAE accounting and tax requirements" },
      { status: "yes", text: "Cost-effective, with no need for a full-time employee" },
      { status: "yes", text: "Supporting documents for every reconciliation report" },
      { status: "yes", text: "Better control of your finances" },
    ],
  },

  cost: {
    heading: "Account Reconciliation Cost",
    intro:
      "Fees depend on how many accounts you have, how many transactions they carry and how far behind they are. Tell us what needs reconciling and we'll send a written quotation.",
    notes: ["Number of accounts", "Transaction volume", "Periods covered", "Record quality", "Frequency"],
  },

  tax: {
    eyebrow: "Related Services",
    heading: "Keep Your Books Reconciled All Year",
    paragraphs: ["Reconciliation works best as part of regular bookkeeping. Ask about combining it with our other accounting services."],
    cards: [
      { value: "Books", title: "Bookkeeping Services", text: "Day-to-day entries with monthly reconciliations built in." },
      { value: "Catch-up", title: "Backlog Accounting", text: "Bring overdue periods up to date before reconciling." },
      { value: "AP", title: "Outsource Accounting", text: "Payables processing with supplier statements agreed." },
    ],
    tags: ["Bookkeeping", "Backlog accounting", "Outsource accounting"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Get Your Accounts Reconciled with",
    paragraph: "Accurate, documented reconciliations that improve control of your finances and give you more confidence in your numbers, at a sensible cost.",
    cards: [
      { title: "Accurate Statements", text: "Balances agreed with independent records." },
      { title: "Secure & Confidential", text: "Data access and confidentiality agreed in writing." },
      { title: "Fully Documented", text: "Supporting schedules for every reconciliation." },
    ],
    quoteTitle: "Request a reconciliation",
    quoteText: "Tell us which accounts need reconciling and for which periods, and we'll send a written quote.",
  },

  included: [
    "Review of your accounting system",
    "Bank & card reconciliations",
    "Debtor & creditor reconciliations",
    "Invoice matching",
    "Agreed corrections",
    "Reconciliation reports & recommendations",
  ],

  faqs: [
    { question: "What is account reconciliation?", answer: "Comparing the balances in your books with independent records, such as bank, card, customer and supplier statements, and explaining every difference so your financial statements are accurate." },
    { question: "Why should I outsource reconciliation?", answer: "It's specialist work that doesn't need a full-time employee. Outsourcing gives you experienced accountants at a lower cost while your team focuses on core activities." },
    { question: "Which accounts do you reconcile?", answer: "Bank accounts, credit cards, customer (debtor) and supplier (creditor) accounts, and invoices paid directly through the bank." },
    { question: "How often should accounts be reconciled?", answer: "Bank and card accounts are usually reconciled monthly. Customer and supplier balances depend on your volume, typically monthly or quarterly." },
    { question: "Which accounting software do you work with?", answer: "QuickBooks, Xero, Zoho Books, Sage and other major packages. Tell us what you use." },
    { question: "How do you keep my data secure?", answer: "Confidentiality is written into our engagement agreement, and data access and document sharing are agreed with you before work begins." },
    { question: "Can reconciliation reveal fraud?", answer: "It helps identify unauthorised or unexplained transactions, which we report to you for investigation." },
    { question: "Which businesses benefit most?", answer: "Any business with regular bank, trading or card activity, including food & beverage, retail and e-commerce, travel, healthcare, finance, insurance, telecoms and non-profits." },
  ],
};
