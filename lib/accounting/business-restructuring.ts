import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero + location reuse images (difc, vat-assessment-appeals / auditing-services) — replace when available.

export const businessRestructuring: FreezoneData = {
  slug: "business-restructuring",
  category: "Accounting & Tax",
  name: "Business Restructuring Services in UAE",
  shortName: "Business Restructuring",
  hero: {
    eyebrow: "Advisory · Restructuring · UAE",
    title: "Business Restructuring Services in UAE",
    highlight: "Respond to Change, Restore Profitability",
    subtitle: "We help companies adapt to market changes, improve profitability, and find and act on new opportunities.",
    intro:
      "Is your business not where it should be financially, or facing a cash crunch? Whether it's underperforming divisions, repeated losses or a risk of insolvency, Afaq Al Khaleej takes a problem-solving approach. We review the business, advise management, and help put a more efficient and sustainable structure in place.",
    chips: ["Business review", "Turnaround strategy", "Interim management", "Tax-efficient structures"],
    image: "/images/services/business-consultancy/restructuring.png",
  },
  stats: [
    { value: "4-step", label: "Turnaround approach" },
    { value: "8", label: "Warning signs to watch" },
    { value: "5", label: "Key restructuring benefits" },
    { value: "Start-up to maturity", label: "Support at every stage" },
  ],

  about: {
    heading: "Why Businesses Restructure",
    body:
      "From start-up to maturity, businesses have to adapt to changing markets, customers and competition. Those that restructure at the right time keep growing, while those that wait often find their options have narrowed. Restructuring brings stability to both finances and operations, and can open the door to new investment.",
    location: { name: "A stronger, more agile business", area: "For SMEs and corporate groups", image: "/images/services/business-consultancy/growth-expansion.png" },
    features: [
      { icon: "bank", title: "Lower Costs", text: "Fewer entities and leaner admin and compliance." },
      { icon: "activities", title: "Reduced Risk", text: "Loss-making units ring-fenced in separate entities." },
      { icon: "trading", title: "Investment Ready", text: "Structures that attract outside investors." },
      { icon: "multiple", title: "Engaged Employees", text: "Options such as employee share schemes." },
      { icon: "tax", title: "Tax Efficiency", text: "Group structures that work under UAE tax law." },
      { icon: "award", title: "Renewed Growth", text: "A more dynamic, competitive business." },
    ],
  },

  process: {
    heading: "How We Turn Things Around",
    intro: "A structured approach to protect the business and avoid insolvency.",
    steps: [
      { title: "Review & diagnose", text: "A thorough analysis to find inefficiencies and areas that need improvement." },
      { title: "Develop the strategy", text: "A clear plan to fix the problems." },
      { title: "Redesign processes", text: "New procedures, systems and processes to solve complex issues." },
      { title: "Implement", text: "We help put the best outcome in place, and can take an interim management role if needed." },
      { title: "Monitor", text: "Track results and adjust as the business stabilises." },
    ],
  },

  features: {
    eyebrow: "Warning Signs",
    heading: "When Should You Consider Restructuring?",
    items: [
      { status: "warn", text: "Profit growth has stalled or losses keep recurring" },
      { status: "warn", text: "Heavy borrowing or excessive debt" },
      { status: "warn", text: "High staff turnover or low morale" },
      { status: "warn", text: "Employees overworked or under-used" },
      { status: "warn", text: "Outdated systems and processes" },
      { status: "warn", text: "Gaps in management" },
      { status: "warn", text: "Shifts in prices, demand or the market" },
      { status: "warn", text: "Labour issues affecting operations" },
    ],
  },

  activities: {
    eyebrow: "Our Services",
    heading: "Business Restructuring Services",
    intro: "Tailored to your circumstances, with a focus on long-term sustainability.",
    groups: [
      { icon: "activities", title: "Business Review", text: "Find underperforming areas and their root causes.", tags: ["Diagnosis"] },
      { icon: "services", title: "Operational Restructuring", text: "Processes, systems and organisation redesigned for efficiency.", tags: ["Operations"] },
      { icon: "bank", title: "Financial Restructuring", text: "Debt, cash flow and funding reorganised.", tags: ["Finance"] },
      { icon: "multiple", title: "Corporate Restructuring", text: "Group, subsidiary and holding structures redesigned.", tags: ["Structure"] },
      { icon: "tax", title: "Tax-Efficient Structuring", text: "Use of corporate tax reliefs such as restructuring and group transfer relief, where available.", tags: ["Corporate tax"] },
      { icon: "award", title: "Interim Management", text: "Hands-on leadership during the turnaround.", tags: ["Leadership"] },
    ],
  },

  cost: {
    heading: "Restructuring Fees",
    intro:
      "Fees depend on the size and complexity of the business and the depth of support needed. Tell us about your situation and we'll send a proposal.",
    notes: ["Business size", "Number of entities", "Financial position", "Interim management", "Tax structuring"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Restructure with Confidence with",
    paragraph: "Market conditions, customer trends and competition can all hurt a business. We tailor restructuring to your circumstances, find the real problems and put practical solutions in place.",
    cards: [
      { title: "Problem-Solving Approach", text: "Focused on root causes, not symptoms." },
      { title: "Financial Expertise", text: "Restructuring backed by accounting and tax insight." },
      { title: "Hands-On Support", text: "From diagnosis to implementation." },
    ],
    quoteTitle: "Discuss your",
    quoteText: "Tell us what's holding your business back, and we'll set out how restructuring could help.",
  },

  included: [
    "Business health review",
    "Turnaround strategy",
    "Process & system redesign",
    "Financial restructuring plan",
    "Tax structure review",
    "Implementation support",
  ],

  faqs: [
    { question: "What is business restructuring?", answer: "Reorganising a company's operations, finances or legal structure to improve efficiency, profitability and resilience." },
    { question: "When should a business restructure?", answer: "When profits stall, debt builds up, systems become outdated, management gaps appear or the market shifts. Acting early gives more options." },
    { question: "Can restructuring help avoid insolvency?", answer: "Often, yes. Acting early to fix inefficiencies and reorganise debt can stabilise a struggling business." },
    { question: "Are there tax benefits?", answer: "UAE corporate tax offers business restructuring and group transfer reliefs if conditions are met, and a better group structure can improve tax efficiency." },
    { question: "Can you manage the business during the turnaround?", answer: "Yes. Where needed, we can take an interim management role to guide implementation." },
  ],
};
