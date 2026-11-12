import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero + location reuse images (commercial-license / rakicc) — replace when available.

export const cfoServices: FreezoneData = {
  slug: "cfo-services",
  category: "Accounting & Tax",
  name: "Virtual CFO Services in Dubai",
  shortName: "CFO Services",
  hero: {
    eyebrow: "Virtual CFO · Outsourced CFO · UAE",
    title: "Virtual CFO Services in Dubai",
    highlight: "Senior Finance Leadership, Part-Time Cost",
    subtitle: "Get the financial insight you need to improve profit margins, cash flow, business volumes and revenue.",
    intro:
      "A virtual CFO, also called an outsourced or fractional CFO, is a highly qualified, experienced finance professional who does a CFO's job without being on your payroll. Most work happens remotely, with agreed hours on site. Afaq Al Khaleej's virtual CFO service gives you senior finance leadership for a fraction of the cost of a full-time hire.",
    chips: ["Budgeting & forecasting", "Cash flow management", "Bank facilities", "Management reporting"],
    image: "/images/investment-opportunities/strong-leadership.png",
  },
  stats: [
    { value: "Fraction", label: "Of a full-time CFO's cost" },
    { value: "Retainer", label: "Fixed monthly fee" },
    { value: "Agreed SLA", label: "Response times" },
    { value: "Day one", label: "When a CFO adds value" },
  ],

  about: {
    heading: "What Is a Virtual CFO?",
    body:
      "A virtual CFO can do everything a full-time CFO does. Because they're independent, they can also carry out tasks like management audits and sit on your management or advisory board. Full-time CFOs often end up doing work outside their role. With a virtual CFO, that work goes to less senior staff at lower cost, while the CFO focuses on strategy, controls and growth.",
    location: { name: "Your finance leader, on demand", area: "Remote support plus agreed site visits", image: "/images/investment-opportunities/profitable-model.png" },
    features: [
      { icon: "award", title: "Strategic Leadership", text: "Part of the senior team making key decisions." },
      { icon: "trading", title: "Cash Flow Control", text: "Tracking and management systems." },
      { icon: "bank", title: "Bank-Ready Finances", text: "Structured transactions and facilities." },
      { icon: "activities", title: "Risk Management", text: "Controls, policies and red-flag reporting." },
      { icon: "licence", title: "Management Reports", text: "Monthly financial and operational insight." },
      { icon: "multiple", title: "Team Guidance", text: "Your accounts team doing the right tasks at the right time." },
    ],
  },

  activities: {
    eyebrow: "Our CFO Services",
    heading: "What Our Virtual CFOs Do",
    intro: "The scope is set around your needs, and commonly includes:",
    groups: [
      { icon: "award", title: "Strategy & Budgeting", text: "Business strategy, action plans, and an annual budget reviewed continuously.", tags: ["Strategy", "Budget"] },
      { icon: "services", title: "Controls & SOPs", text: "Internal control processes, governance, policies and standard operating procedures.", tags: ["Governance"] },
      { icon: "licence", title: "MIS & Analysis", text: "Financial analysis, MIS reports, and pre- and post-costing.", tags: ["Reporting"] },
      { icon: "trading", title: "Cash & Working Capital", text: "Cash flow and capital management, plus a treasury dashboard.", tags: ["Treasury"] },
      { icon: "bank", title: "Banking Relationships", text: "Arranging bank facilities, working with lenders and monitoring covenants.", tags: ["Banking"] },
      { icon: "tax", title: "Tax & Contracts", text: "Guidance on UAE tax matters and reviews of customer and supplier contracts.", tags: ["Tax", "Contracts"] },
    ],
    lists: [
      { title: "Also commonly covered", items: ["Organisation structure review", "Accounting department oversight", "Audit coordination", "Cost analysis, including construction contracts", "Regular advice to CEOs and owners", "Red-flag reports with solutions"] },
    ],
  },

  process: {
    heading: "How the Virtual CFO Service Works",
    intro: "A flexible arrangement built around a clear scope and fixed fee.",
    steps: [
      { title: "Agree the scope", text: "Define the areas the CFO will cover, based on your needs." },
      { title: "Set visits & hours", text: "Fix the number of site visits or hours for tasks that need someone in person." },
      { title: "Ongoing advisory", text: "Advice by email and phone, with responses and decisions within an agreed SLA." },
      { title: "Monthly reporting", text: "Financial and operational reports, plus red-flag reports with solutions." },
      { title: "Fixed retainer", text: "A set monthly fee for the agreed scope. Success-based work like bank facilities is priced separately." },
    ],
  },

  features: {
    eyebrow: "When You Need One",
    heading: "When Does a Business Need a CFO?",
    items: [
      { status: "yes", text: "Ideally from day one, so finances are structured from the start" },
      { status: "yes", text: "When you're seeking bank finance and need to be 'bank ready'" },
      { status: "yes", text: "When owners feel alone with financial decisions" },
      { status: "yes", text: "When internal controls feel weak or unclear" },
      { status: "yes", text: "When the accounts team needs direction" },
      { status: "warn", text: "Waiting until there's a crisis makes recovery harder and more expensive" },
    ],
  },

  cost: {
    heading: "Virtual CFO Fees",
    intro:
      "A fixed monthly retainer covers the agreed tasks, site visits and advisory time. Success-based tasks, like arranging bank facilities, are priced separately and usually linked to the facility value.",
    notes: ["Scope of mandate", "Site visit hours", "Business complexity", "Reporting frequency", "Success-based tasks"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Strengthen Your Finance Function with",
    paragraph: "Experienced finance professionals for start-ups, SMEs and growing groups. A virtual CFO is a company resource with the same responsibility as an employed CFO. Only the contract is different.",
    cards: [
      { title: "Full Confidentiality", text: "Bound by professional ethics, with an NDA available." },
      { title: "Senior Expertise", text: "Experienced leadership without full-time cost." },
      { title: "Flexible Scope", text: "Expand or adjust as you grow." },
    ],
    quoteTitle: "Request a virtual CFO",
    quoteText: "Tell us about your business and finance challenges, and we'll propose a CFO scope and retainer.",
  },

  included: [
    "Agreed CFO scope",
    "Scheduled site visits",
    "Monthly management reports",
    "Budget & cash flow oversight",
    "Bank liaison",
    "Advisory within SLA",
  ],

  faqs: [
    { question: "What is a virtual CFO?", answer: "An experienced finance professional who does a CFO's job on an outsourced, part-time basis, mostly remotely with agreed site visits." },
    { question: "How is it different from a full-time CFO?", answer: "The responsibility is the same. Only the contract differs. You get senior expertise for a fraction of the cost." },
    { question: "How is my information kept confidential?", answer: "Our professionals follow professional codes of ethics, and we're happy to sign a non-disclosure agreement." },
    { question: "How are fees charged?", answer: "A fixed retainer for the agreed scope. Success-based tasks such as arranging bank facilities are priced separately." },
    { question: "When should I hire a CFO?", answer: "Ideally from day one. Many businesses wait until there's a crisis, when recovery is harder and more expensive." },
    { question: "Can a virtual CFO help with banks?", answer: "Yes. They structure your finances to be bank-ready, arrange facilities and monitor covenants." },
  ],
};
