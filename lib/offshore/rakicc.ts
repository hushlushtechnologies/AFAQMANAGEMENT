import type { FreezoneData } from "@/lib/freezones/types";

// TODO(client): the setup cost/timing figures here match the Dubai Offshore page
// (RAK ICC AED 10,000–14,000, 3–7 days) — confirm before launch.
// Note: supplied copy said "no personal or corporate income tax" — updated for
// UAE corporate tax (2023).

export const rakicc: FreezoneData = {
  slug: "rakicc",
  category: "Offshore",
  name: "RAK ICC",
  shortName: "RAK ICC",
  hero: {
    eyebrow: "Ras Al Khaimah International Corporate Centre",
    title: "RAK ICC Offshore",
    highlight: "Company Formation",
    subtitle: "International companies with no minimum capital, one shareholder and one director — incorporated through a registered agent.",
    intro:
      "RAK ICC regulates international companies that work much like traditional offshore companies. Incorporation is handled through a registered agent — usually a licensed firm of accountants or lawyers — who also provides the registered office. Afaq Al Khaleej guides you through RAK offshore company formation from structure to bank account.",
    chips: ["No minimum capital", "1 shareholder & 1 director", "Corporate shareholders allowed", "No personal presence before the authority"],
    image: "/images/investment-opportunities/regionally-focused.png",
  },
  stats: [
    { value: "AED 0", label: "Minimum capital" },
    { value: "1", label: "Minimum shareholder & director" },
    { value: "90 days", label: "Pre-incorporation name reservation" },
    { value: "3–7 days", label: "Typical incorporation" },
  ],

  about: {
    heading: "Salient Features of a RAK ICC International Company",
    body:
      "A RAK ICC international company has limited liability status and can be owned and run by a single person — with full flexibility on share classes, corporate shareholders and directors.",
    location: { name: "RAK ICC", area: "Ras Al Khaimah, UAE", image: "/images/investment-opportunities/strong-leadership.png" },
    features: [
      { icon: "licence", title: "Limited Liability", text: "Company names end in \"Limited\" or \"Incorporated\"." },
      { icon: "ownership", title: "One Shareholder Minimum", text: "No limit on the number of shareholders." },
      { icon: "services", title: "One Director Minimum", text: "One person can hold the director and shareholder roles." },
      { icon: "multiple", title: "Corporate Directors & Shareholders", text: "Companies can act as directors and shareholders." },
      { icon: "bank", title: "No Minimum Capital", text: "No minimum share capital requirement." },
      { icon: "activities", title: "Different Share Classes", text: "Issue shares of different classes to suit your structure." },
    ],
  },

  features: {
    placement: "early",
    eyebrow: "At a Glance",
    heading: "How RAK ICC Works",
    items: [
      { status: "yes", text: "No personal appearance before the authorities — documents are signed before the registered agent" },
      { status: "yes", text: "Shareholders can choose the applicable law" },
      { status: "yes", text: "International trade is allowed" },
      { status: "yes", text: "Company name can be reserved for up to 90 days before incorporation" },
      { status: "yes", text: "Foreign names and characters allowed, subject to approval" },
      { status: "partial", text: "Accounts must be maintained annually, but filing audited accounts isn't mandatory" },
      { status: "partial", text: "An approved registered agent is required, inside or outside the zone but within the UAE" },
      { status: "no", text: "Not entitled to UAE residence visas" },
    ],
  },

  prosCons: {
    eyebrow: "What It Allows",
    heading: "What a RAK ICC Company Can and Can't Do",
    prosTitle: "A RAK ICC company can…",
    consTitle: "A RAK ICC company cannot…",
    pros: [
      "Work with legal consultants, lawyers, accountants and auditors in the UAE",
      "Hold a bank account in the UAE",
      "Become a shareholder in new or existing UAE companies",
      "Hold shareholder and director meetings in the UAE",
    ],
    cons: [
      "Do business with persons inside the zone",
      "Carry out banking business",
      "Operate as an insurer, re-insurer, insurance broker or agent",
      "Conduct any activity prohibited by the authorities",
    ],
  },

  activities: {
    eyebrow: "Common Uses",
    heading: "What Can a RAK ICC Company Be Used For?",
    intro: "RAK ICC international companies are well suited to cross-border and holding structures.",
    groups: [
      { icon: "trading", title: "International Trading", text: "Trade with clients and suppliers outside the UAE.", tags: ["Import / export", "Cross-border invoicing"] },
      { icon: "ownership", title: "Holding Company", text: "Hold investments in the UAE or abroad under one structure.", tags: ["UAE investments", "Foreign investments"] },
      { icon: "office", title: "Property Holding", text: "Hold properties abroad and certain properties in the UAE.", tags: ["Foreign property", "Approved UAE projects"] },
    ],
  },

  cost: {
    heading: "RAK ICC Company Setup Cost",
    intro:
      "A RAK ICC company typically costs around AED 10,000–14,000 in the first year including government fees, with incorporation in 3–7 working days. Renewals cost less because name reservation and incorporation fees fall away.",
    notes: ["Registered agent fees", "Number of shareholders", "Corporate vs individual shareholders", "Bank account support"],
  },

  process: {
    heading: "How to Set Up a RAK ICC Company",
    intro: "Every RAK ICC company is incorporated through a registered agent — we coordinate each step for you.",
    steps: [
      { title: "Plan your structure", text: "Confirm shareholders, directors, share classes and how the company will be used." },
      { title: "Reserve the company name", text: "Reserve your name for up to 90 days before incorporation, ending in \"Limited\" or \"Incorporated\"." },
      { title: "KYC & signing", text: "Submit KYC documents and sign before the registered agent — no appearance before the authority needed." },
      { title: "Incorporation", text: "The authority approves and issues your incorporation documents." },
      { title: "Bank account", text: "We prepare your compliance file and introduce suitable UAE banks." },
    ],
  },

  tax: {
    heading: "Tax & Compliance for RAK ICC Companies",
    paragraphs: [
      "RAK ICC companies are within the scope of UAE corporate tax and generally must register with the Federal Tax Authority. A non-resident company earning no UAE-sourced income typically has no corporate tax to pay — we assess your position as part of setup.",
    ],
    cards: [
      { value: "9%", title: "Corporate Tax", text: "On taxable profits above AED 375,000, depending on UAE-sourced income." },
      { value: "0%", title: "Personal Income Tax", text: "No personal income tax in the UAE." },
      { value: "Records", title: "Annual Accounts", text: "Accounts must be maintained annually; filing audited accounts isn't mandatory." },
      { value: "No ESR", title: "Economic Substance", text: "ESR filings were removed for financial years ending after 31 December 2022." },
    ],
    tags: ["Corporate tax registration", "Accounting services"],
  },

  included: [
    "Free consultation & structure planning",
    "Name reservation",
    "Registered agent coordination",
    "KYC preparation & signing",
    "Corporate tax assessment",
    "Bank account application support",
  ],

  faqs: [
    { question: "What is RAK ICC?", answer: "The Ras Al Khaimah International Corporate Centre is the UAE authority that registers international (offshore-style) companies, incorporated through approved registered agents." },
    { question: "How many shareholders and directors do I need?", answer: "At least one shareholder and one director — and the same person can hold both roles. Corporate shareholders and directors are allowed." },
    { question: "Is there a minimum capital for a RAK ICC company?", answer: "No. There's no minimum capital requirement, and you can issue different classes of shares." },
    { question: "Do I need to visit the UAE to set up a RAK ICC company?", answer: "You don't need to appear before the authorities, but documents must be signed before the registered agent." },
    { question: "Can a RAK ICC company get UAE residence visas?", answer: "No. RAK ICC international companies aren't entitled to UAE residence visas. For visas, consider a free zone or mainland company." },
    { question: "Does a RAK ICC company pay tax?", answer: "There's no personal income tax. RAK ICC companies fall within UAE corporate tax scope — those without UAE-sourced income typically pay none, but registration obligations apply." },
  ],
};
