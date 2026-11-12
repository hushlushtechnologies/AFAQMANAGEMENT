import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero + location reuse images (outsource-accounting / operational-audit) — replace when available.

export const businessSuccessionPlanning: FreezoneData = {
  slug: "business-succession-planning",
  category: "Accounting & Tax",
  name: "Business Succession Planning in UAE",
  shortName: "Business Succession Planning",
  hero: {
    eyebrow: "Advisory · Succession Planning · UAE",
    title: "Business Succession Planning in UAE",
    highlight: "Protect What You've Built",
    subtitle: "We align succession plans with your corporate strategy and build strong profiles for every key management role.",
    intro:
      "Handing over a business is a major step for you and the company, and it comes with real complexity. Afaq Al Khaleej plans the whole succession for you. We value the business and its assets, analyse financial and tax issues, and prepare your successor, so the transition is smooth and continuity is protected.",
    chips: ["Business valuation", "Successor planning", "Asset valuation", "Tax considerations"],
    image: "/images/investment-opportunities/leadership-silhouette.png",
  },
  stats: [
    { value: "4", label: "Core succession services" },
    { value: "8", label: "Key benefits" },
    { value: "FMV", label: "Fair market value of assets" },
    { value: "Continuity", label: "Of operations and brand" },
  ],

  about: {
    heading: "Why Succession Planning Matters",
    body:
      "Succession planning is vital, especially for owner-led and family businesses. Planning early means a smooth handover and limits disruption when the owner steps back, while making sure the right leaders are in place. It also deals with debts, tax and ownership transfer in a structured way, rather than in a rush when time is short.",
    location: { name: "Leadership for the long term", area: "Owner-led & family businesses", image: "/images/why-afaq/end-to-end-support.png" },
    features: [
      { icon: "services", title: "Business Continuity", text: "The company keeps running after the owner steps back." },
      { icon: "multiple", title: "Future Leaders", text: "Critical roles and internal talent identified early." },
      { icon: "award", title: "Clear Successor", text: "Expectations set well before the transition." },
      { icon: "bank", title: "Debt Management", text: "A plan for loans and credit lines." },
      { icon: "tax", title: "Tax Efficiency", text: "Ownership transfer structured with tax in mind." },
      { icon: "licence", title: "Brand Protection", text: "Leaders who understand the brand's promises." },
    ],
  },

  activities: {
    eyebrow: "Our Services",
    heading: "Business Succession Planning Services",
    intro: "Financial, tax and people planning brought together in one succession plan.",
    groups: [
      { icon: "trading", title: "Business Valuation", text: "An expert assessment of what your business is worth.", tags: ["Valuation"] },
      { icon: "multiple", title: "Succession Planning", text: "Develop and implement the plan, and brief your successor on the financial position.", tags: ["Plan"] },
      { icon: "office", title: "Asset Valuation", text: "Assets valued at fair market value.", tags: ["FMV"] },
      { icon: "tax", title: "Tax Services", text: "Corporate tax impact of disposals and transfers, with available reliefs assessed.", tags: ["Corporate tax"] },
    ],
    lists: [
      { title: "We also help with", items: ["Governance and family business structures", "Talent identification and development plans", "Debt and financing review", "Working alongside your legal advisers on wills and ownership"] },
    ],
  },

  process: {
    heading: "How We Plan Your Succession",
    intro: "A streamlined process to find, assess and develop future leaders while protecting value.",
    cautionTitle: "Legal aspects",
    caution: "Inheritance, wills and ownership transfers involve legal rules that vary by situation. We work with your legal advisers so the financial and legal sides fit together.",
    steps: [
      { title: "Understand your goals", text: "Your timeline, intentions and the future you want for the business." },
      { title: "Value the business", text: "Business and asset valuation, debts and tax position." },
      { title: "Identify successors", text: "Assess internal and external candidates and critical roles." },
      { title: "Develop the plan", text: "Training, governance, transfer structure and timeline." },
      { title: "Implement & review", text: "Support through the transition, with the plan updated as things change." },
    ],
  },

  features: {
    eyebrow: "Benefits",
    heading: "How Succession Planning Benefits Your Company",
    items: [
      { status: "yes", text: "The business continues after the owner departs" },
      { status: "yes", text: "Future leaders identified and developed" },
      { status: "yes", text: "A designated successor with clear expectations" },
      { status: "yes", text: "Training to close competency gaps" },
      { status: "yes", text: "A plan for outstanding debts" },
      { status: "yes", text: "Tax-aware transfer of ownership" },
      { status: "yes", text: "Brand identity maintained" },
      { status: "yes", text: "Knowledge handed over before key people leave" },
    ],
  },

  cost: {
    heading: "Succession Planning Fees",
    intro:
      "Fees depend on the size of the business, the valuation work needed and how complex the ownership structure is. Tell us about your business and we'll send a proposal.",
    notes: ["Business size", "Valuation scope", "Ownership structure", "Number of successors", "Tax analysis"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Plan Your Succession with",
    paragraph: "Strategic succession planning backed by advisory services, financial analysis and strong governance, so your business keeps going smoothly from one generation of leaders to the next.",
    cards: [
      { title: "Financial Clarity", text: "Valuations and tax impact understood." },
      { title: "People Focus", text: "Successors identified and prepared." },
      { title: "Continuity", text: "Critical operations protected." },
    ],
    quoteTitle: "Request a succession",
    quoteText: "Tell us about your business and plans, and we'll propose a succession planning engagement.",
  },

  included: [
    "Business valuation",
    "Asset valuation at FMV",
    "Successor assessment",
    "Tax impact analysis",
    "Succession plan & timeline",
    "Transition support",
  ],

  faqs: [
    { question: "What is business succession planning?", answer: "Planning how ownership and leadership of a business will pass to the next owner or leader, so the business carries on smoothly." },
    { question: "When should I start planning?", answer: "As early as possible. Planning years in advance gives time to develop successors and structure the transfer well." },
    { question: "Is there inheritance tax in the UAE?", answer: "The UAE has no inheritance tax, but transfers and disposals can have corporate tax consequences. Inheritance rules and wills also need legal advice." },
    { question: "Do you value the business?", answer: "Yes. We value the business and its assets at fair market value as part of the plan." },
    { question: "Can you help with family businesses?", answer: "Yes. We help with governance, successor development and ownership structures, working with your legal advisers." },
  ],
};
