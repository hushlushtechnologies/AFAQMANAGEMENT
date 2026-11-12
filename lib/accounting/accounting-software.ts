import type { FreezoneData } from "@/lib/freezones/types";

export const accountingSoftware: FreezoneData = {
  slug: "accounting-software",
  category: "Accounting & Tax",
  name: "Accounting Software Solutions in Dubai",
  shortName: "Accounting Software",
  hero: {
    eyebrow: "Advisory · Accounting Software · UAE",
    title: "Accounting Software in Dubai",
    highlight: "The Right System, Set Up Right",
    subtitle: "Manage workflows, customers and suppliers while staying VAT and corporate tax compliant.",
    intro:
      "Good accounting software cuts costs, improves efficiency and gives you a real-time view of your finances. Afaq Al Khaleej helps you choose the right package for your business, judged from both a technical and an accounting point of view. We then set it up properly and train your team to use it day to day.",
    chips: ["Software selection", "Setup & migration", "VAT-ready configuration", "Team training"],
    image: "/images/services/digital-business-solutions/ui-ux-design.png",
  },
  stats: [
    { value: "Cloud", label: "Access from anywhere" },
    { value: "Real-time", label: "Financial visibility" },
    { value: "VAT & CT", label: "Compliant configuration" },
    { value: "Trained", label: "Team ready to use it" },
  ],

  about: {
    heading: "What Is Accounting Software?",
    body:
      "Accounting software records your daily transactions and shows the financial health of your business. It replaces manual data entry with automated workflows, from invoicing and expense tracking to bank reconciliation and reporting. That saves time and prevents errors.",
    location: { name: "Your finances, anywhere", area: "Cloud and desktop solutions", image: "/images/services/digital-business-solutions/mobile-applications.png" },
    features: [
      { icon: "licence", title: "Daily Transactions", text: "Every sale, purchase and payment recorded." },
      { icon: "trading", title: "Reports", text: "Profit and loss, balance sheet and more." },
      { icon: "multiple", title: "Contacts", text: "Customer and vendor records in one place." },
      { icon: "services", title: "Purchase Orders", text: "Create and track POs." },
      { icon: "office", title: "Stock Levels", text: "Real-time inventory tracking." },
      { icon: "bank", title: "Billing & Balances", text: "Invoice customers and monitor accounts." },
    ],
  },

  activities: {
    eyebrow: "Features",
    heading: "Accounting Features That Power Your Business",
    intro: "From automatic invoices to cash flow visibility, the right software keeps your business running smoothly.",
    groups: [
      { icon: "trading", title: "Financial Control", text: "Organise financial data and get a real-time view of performance.", tags: ["Dashboards"] },
      { icon: "online", title: "Automated Invoicing", text: "Recurring invoices, reminders, online payments and tracking of unpaid invoices.", tags: ["Invoicing"] },
      { icon: "bank", title: "Expense Tracking", text: "Categorise expenses and schedule bill payments.", tags: ["Expenses"] },
      { icon: "activities", title: "Bank Connections", text: "Connect bank accounts and reconcile transactions automatically.", tags: ["Bank feeds"] },
      { icon: "tax", title: "VAT & Tax Compliance", text: "Calculate VAT automatically and produce the reports you need for returns.", tags: ["VAT", "Corporate tax"] },
      { icon: "multiple", title: "Accountant Collaboration", text: "Central data your accountant can access securely.", tags: ["Collaboration"] },
    ],
  },

  process: {
    heading: "How We Help You Go Digital",
    intro: "From choosing a package to a fully trained team.",
    steps: [
      { title: "Assess your needs", text: "Understand your transactions, inventory, users and reporting needs." },
      { title: "Recommend software", text: "Suggest suitable packages, weighing technical and accounting needs." },
      { title: "Set up & configure", text: "Chart of accounts, VAT settings, opening balances and integrations." },
      { title: "Migrate data", text: "Move customers, vendors, items and balances from your old system." },
      { title: "Train your team", text: "Hands-on training for day-to-day accounting and reporting." },
    ],
  },

  features: {
    eyebrow: "Benefits",
    heading: "Why Use Accounting Software?",
    items: [
      { status: "yes", text: "Saves time and reduces manual errors" },
      { status: "yes", text: "Daily, up-to-date view of transactions" },
      { status: "yes", text: "Profit and loss, balance sheet and cash flow on demand" },
      { status: "yes", text: "Comparisons with previous months and periods" },
      { status: "yes", text: "Automates repetitive accounting tasks" },
      { status: "yes", text: "24/7 cloud access from anywhere" },
    ],
  },

  cost: {
    heading: "Accounting Software Fees",
    intro:
      "Our fees cover selection, setup, migration and training. Software subscriptions are billed by the vendor. Tell us about your business and we'll send a quote.",
    notes: ["Number of users", "Inventory & modules", "Data migration", "Integrations", "Training sessions"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Digitise Your Accounts with",
    paragraph: "Accounting, audit and consulting under one roof. We choose and configure software with real accounting expertise, so your reports are accurate and decisions are based on real-time information.",
    cards: [
      { title: "Accounting-Led Advice", text: "Software chosen by accountants." },
      { title: "Compliant Setup", text: "Configured for UAE VAT and corporate tax." },
      { title: "Ongoing Support", text: "Help after go-live." },
    ],
    quoteTitle: "Request an accounting software",
    quoteText: "Tell us about your business and current system, and we'll recommend the right software and send a quote.",
  },

  included: [
    "Needs assessment",
    "Software recommendation",
    "Configuration & VAT setup",
    "Data migration",
    "User training",
    "Post go-live support",
  ],

  faqs: [
    { question: "Which accounting software do you work with?", answer: "We work with leading cloud and desktop packages and recommend one based on your size, industry and needs." },
    { question: "Can you migrate data from our current system?", answer: "Yes. We migrate customers, suppliers, items and opening balances, and check everything reconciles." },
    { question: "Will the software handle UAE VAT?", answer: "Yes. We configure tax codes and reports so VAT is calculated automatically and returns are easier to prepare." },
    { question: "Do you provide training?", answer: "Yes. We train your designated staff on day-to-day accounting and reporting." },
    { question: "Is cloud software secure?", answer: "Reputable cloud providers use strong security, and we help set up user permissions so access is controlled." },
  ],
};
