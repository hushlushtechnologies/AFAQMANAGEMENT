import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero + location reuse images (financial-statement-audit, vat-registration / independent-review) — replace when available.
// Minimum balances, salary thresholds etc. vary by bank and change often — kept general on purpose.

export const bankAccountOpening: FreezoneData = {
  slug: "bank-account-opening",
  category: "Business Support",
  name: "Bank Account Opening in UAE",
  shortName: "Bank Account Opening",
  hero: {
    eyebrow: "Business Support · Banking · UAE",
    title: "Open a Bank Account in the UAE",
    highlight: "Corporate & Personal Accounts, Made Simpler",
    subtitle: "The UAE banking sector, supervised by the Central Bank of the UAE, offers world-class digital services for residents, expatriates and businesses.",
    intro:
      "Strict anti-money laundering (AML) and know-your-customer (KYC) checks mean opening a UAE bank account isn't always straightforward. Afaq Al Khaleej helps you choose the right bank, prepare a complete application and get through the bank's review, for corporate and personal accounts.",
    chips: ["Corporate accounts", "Personal accounts", "Bank selection", "KYC document preparation"],
    image: "/images/services/investment-services.png",
  },
  stats: [
    { value: "CBUAE", label: "Regulator" },
    { value: "Local & global", label: "Banks to choose from" },
    { value: "AML/KYC", label: "Strict compliance checks" },
    { value: "3 steps", label: "Choose, prepare, apply" },
  ],

  about: {
    heading: "Why Open a UAE Bank Account?",
    body:
      "A local account is essential for managing money in the UAE. International accounts often come with high cross-border fees and exchange-rate markups. For businesses, a corporate account is the gateway to UAE trade, payroll and growth. For employees and residents, it makes salaries, rent and utility bills easy to manage.",
    location: { name: "Banking for business & life", area: "Mainland, free zone & personal", image: "/images/services/afaq-investors.png" },
    features: [
      { icon: "multiple", title: "For Professionals", text: "Salaries are paid through the Wage Protection System (WPS)." },
      { icon: "bank", title: "For Businesses", text: "Collect revenue, pay suppliers and run payroll." },
      { icon: "office", title: "For Residents", text: "Pay rent and utility bills easily." },
      { icon: "online", title: "Digital Banking", text: "Modern apps and online services." },
      { icon: "trading", title: "Multi-Currency", text: "Hold AED and major currencies." },
      { icon: "award", title: "Islamic Options", text: "Shariah-compliant accounts available." },
    ],
  },

  compare: {
    eyebrow: "Account Types",
    heading: "Types of Bank Accounts in the UAE",
    intro: "Choose the account that fits your needs.",
    columns: ["Account type", "Best for", "Key features"],
    rows: [
      { cells: ["Corporate account", "Mainland & free zone businesses", "High-volume transactions, WPS payroll, trade finance"] },
      { cells: ["Call deposit", "SMEs & individuals", "Interest calculated daily, funds stay accessible"] },
      { cells: ["Current account", "Residents' daily banking", "Debit card, cheque book, multi-currency options"] },
      { cells: ["Salary (WPS) account", "Employees", "Often lower balance requirements when salary is credited"] },
      { cells: ["Savings & fixed deposits", "Savers", "Interest or profit-bearing, with fixed terms for deposits"] },
      { cells: ["Islamic accounts", "Shariah-conscious customers", "Profit-sharing instead of interest"] },
      { cells: ["Multi-currency", "Expats & investors", "AED, USD, EUR, GBP and more in one relationship"] },
    ],
  },

  structures: {
    heading: "Eligibility & Requirements",
    intro: "Requirements vary by bank and account type. These are the typical expectations.",
    groups: [
      {
        title: "Business accounts",
        items: [
          { title: "Trade licence", text: "Valid mainland or free zone licence." },
          { title: "Constitutional documents", text: "Memorandum and Articles of Association." },
          { title: "Identification", text: "Passports, visas and Emirates IDs of shareholders and signatories." },
          { title: "Physical presence", text: "Many banks prefer a physical office lease. Some don't accept flexi-desks." },
          { title: "Minimum balance", text: "Varies by bank and account tier." },
          { title: "AML & KYC", text: "Detailed checks on ownership, activities and source of funds." },
        ],
      },
      {
        title: "Individuals",
        items: [
          { title: "UAE residents", text: "Valid residence visa, Emirates ID, passport and proof of salary or employment." },
          { title: "Non-residents", text: "Usually limited to savings or deposit accounts, with higher balances and source-of-funds proof." },
          { title: "In-person signing", text: "Most banks require you to be in the UAE to sign." },
        ],
      },
    ],
    notes: ["Minimum balances, fees and eligibility change often. We confirm the current requirements of shortlisted banks for you."],
  },

  process: {
    heading: "How to Open a Bank Account",
    intro: "A structured approach makes the process smoother.",
    steps: [
      { title: "Choose the right bank", text: "Compare transaction fees, services, digital banking and other benefits." },
      { title: "Gather documents", text: "Prepare a complete KYC pack for the bank's compliance team." },
      { title: "Apply", text: "Submit in person or online, depending on the bank and account." },
      { title: "Bank interview & verification", text: "Expect questions on source of funds, expected turnover and business activities." },
      { title: "Account activation", text: "Receive account details, cards and online banking access." },
    ],
  },

  documents: {
    heading: "Documents for a Corporate Account",
    image: "/images/services/pro-government.png",
    intro: "Banks may ask for more depending on your business.",
    items: [
      "Trade licence and business profile",
      "Certificate of incorporation",
      "Memorandum & Articles of Association",
      "Shareholder and director passports, visas and Emirates IDs",
      "Ultimate beneficial owner (UBO) details, including CVs",
      "Board resolution naming authorised signatories",
      "Business plan, key contracts and client or supplier list",
      "Office lease (Ejari or free zone tenancy)",
    ],
  },

  activities: {
    eyebrow: "How We Help",
    heading: "Our Bank Account Opening Support",
    intro: "We make sure your paperwork is in order and the process runs as smoothly as possible.",
    groups: [
      { icon: "activities", title: "Bank Shortlisting", text: "Compare banks for your activity, nationality and needs.", tags: ["Selection"] },
      { icon: "licence", title: "KYC Pack Preparation", text: "A complete, consistent document set.", tags: ["Documents"] },
      { icon: "services", title: "Business Profile", text: "Clear descriptions of activities, turnover and counterparties.", tags: ["Profile"] },
      { icon: "multiple", title: "Interview Preparation", text: "Get ready for the bank's compliance questions.", tags: ["Interview"] },
      { icon: "bank", title: "Application Follow-Up", text: "Track progress and respond to bank queries.", tags: ["Follow-up"] },
      { icon: "online", title: "Personal Accounts", text: "Support for residents and non-residents.", tags: ["Personal"] },
    ],
    lists: [
      { title: "Popular banks in the UAE", items: ["First Abu Dhabi Bank (FAB)", "Emirates NBD", "Abu Dhabi Commercial Bank (ADCB)", "Dubai Islamic Bank (DIB)", "Mashreq", "HSBC", "Standard Chartered", "Citibank"] },
    ],
  },

  cost: {
    heading: "Bank Account Opening Support Fees",
    intro:
      "Our fee depends on the account type and complexity. Bank minimum balances and charges are set by the bank. Tell us about your business and we'll send a quote.",
    notes: ["Corporate or personal", "Business activity", "Shareholder structure", "Number of banks", "Urgency"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Open Your Account with",
    paragraph: "Banks can ask for extra information and in-person meetings. With your setup, accounting and documents handled by one team, your application is consistent and complete.",
    cards: [
      { title: "Right Bank, First Time", text: "Shortlisted for your profile." },
      { title: "Complete Paperwork", text: "Fewer back-and-forth queries." },
      { title: "Guided Process", text: "Support from application to activation." },
    ],
    quoteTitle: "Request bank account",
    quoteText: "Tell us about your company or personal needs, and we'll recommend banks and send a quote.",
  },

  included: [
    "Bank comparison",
    "Document checklist",
    "KYC pack review",
    "Business profile",
    "Interview preparation",
    "Application follow-up",
  ],

  faqs: [
    { question: "Why is opening a UAE bank account difficult?", answer: "Banks follow strict AML and KYC rules, so they need detailed information about ownership, activities and source of funds." },
    { question: "Can non-residents open a bank account?", answer: "Yes, usually limited to savings or deposit accounts, with higher minimum balances and source-of-funds documents." },
    { question: "Do I need to be in the UAE?", answer: "Most banks require you to be there in person to sign documents, especially for corporate accounts." },
    { question: "Do banks accept virtual offices?", answer: "Some banks prefer or require a physical office lease. We help you choose a bank that suits your setup." },
    { question: "How long does it take?", answer: "It varies by bank and how complex your profile is, from a few days to several weeks. A complete application helps." },
    { question: "Can you guarantee approval?", answer: "No. Approval is always the bank's decision. We make sure your application is complete and well presented." },
  ],
};
