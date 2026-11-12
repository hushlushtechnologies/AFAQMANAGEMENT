import type { FreezoneData } from "@/lib/freezones/types";

export const riskManagement: FreezoneData = {
  slug: "risk-management",
  category: "Accounting & Tax",
  name: "Risk Management Services in Dubai",
  shortName: "Risk Management",
  hero: {
    eyebrow: "Risk Advisory · Dubai",
    title: "Risk Management Services in Dubai",
    highlight: "Identify, Manage & Reduce Business Risk",
    subtitle: "Practical risk frameworks that protect your business and support its objectives.",
    intro:
      "Risk management looks at the culture, systems and processes of your business to find problems and fix them before they cause loss, damage or harm. Afaq Al Khaleej leads risk projects across every part of your organisation, from first assessment to a fully working framework, built into your management, processes and technology.",
    chips: ["Risk strategy", "Risk assessment", "Fraud investigation", "Data analytics"],
    image: "/images/services/feasibility-studies/launching-new-product.png",
  },
  stats: [
    { value: "4", label: "Core risk services" },
    { value: "Enterprise-wide", label: "Coverage" },
    { value: "Data-led", label: "Analytics-driven insight" },
    { value: "All levels", label: "Shared ownership of risk" },
  ],

  about: {
    heading: "What Is Risk Management?",
    body:
      "Good risk management helps you make better decisions, support business objectives and prevent losses. Directors can't run it alone. When every level of your team takes part, responsibility for business risk is shared, and the approach becomes thorough and practical. Risk management works best when it is built into how the organisation is managed, its processes and its technology.",
    location: { name: "Risk owned across the organisation", area: "From the board to the front line", image: "/images/why-afaq/uae-market-understanding.png" },
    features: [
      { icon: "activities", title: "Better Decisions", text: "Clear visibility of risks behind every choice." },
      { icon: "award", title: "Objectives Protected", text: "Risks aligned with business goals." },
      { icon: "ownership", title: "Loss Prevention", text: "Threats addressed before they cause damage." },
      { icon: "multiple", title: "Shared Responsibility", text: "Accountability across every level of your team." },
      { icon: "online", title: "Integrated with Technology", text: "Risk built into systems and processes." },
      { icon: "trading", title: "Focus on Growth", text: "Less firefighting, more time for value creation." },
    ],
  },

  activities: {
    eyebrow: "Our Services",
    heading: "Our Risk Management Services",
    intro: "From strategy to investigation, matched to the risks your business faces.",
    groups: [
      { icon: "services", title: "Tailored Risk Strategy", text: "We develop and implement a risk strategy, framework and appetite that fit your business, drawing on recognised frameworks such as ISO 31000 and COSO ERM.", tags: ["Framework", "Risk appetite"] },
      { icon: "activities", title: "Risk Assessment", text: "We identify, rate and prioritise strategic, operational, financial and compliance risks in a clear risk register.", tags: ["Risk register", "Heat map"] },
      { icon: "licence", title: "Evaluating & Implementing Solutions", text: "We design controls and mitigation plans, then help you put them in place and test that they work.", tags: ["Controls", "Mitigation"] },
      { icon: "ownership", title: "Fraud Investigations", text: "Suspected fraud examined, losses quantified and controls strengthened to prevent it recurring.", tags: ["Fraud", "Investigation"], href: "/accounting/forensic-accounting" },
      { icon: "trading", title: "Data Analytics", text: "Combining information management, business and accounting skills, we interrogate the numbers that matter and report on them from a risk perspective.", tags: ["Analytics", "Exception reporting"] },
    ],
  },

  process: {
    heading: "How We Build Your Risk Framework",
    intro: "We look at where you've been, where you stand today and, most importantly, where you want to be.",
    steps: [
      { title: "Understand context", text: "Your objectives, culture, systems and processes." },
      { title: "Identify & assess", text: "Risks identified across the business and rated by likelihood and impact." },
      { title: "Treat", text: "Controls and mitigation plans agreed and implemented." },
      { title: "Monitor", text: "Key risk indicators and data analytics track how risks change." },
      { title: "Report & improve", text: "Regular reporting to management and the board, with the framework refined over time." },
    ],
  },

  features: {
    eyebrow: "Results",
    heading: "What a Working Risk Framework Delivers",
    items: [
      { status: "yes", text: "More time and energy for improvement and growth" },
      { status: "yes", text: "Fewer surprises and unexpected losses" },
      { status: "yes", text: "Stronger governance and board oversight" },
      { status: "yes", text: "Better-protected assets and reputation" },
      { status: "yes", text: "Compliance with regulatory expectations" },
      { status: "yes", text: "Data-based insight into emerging risks" },
    ],
  },

  cost: {
    heading: "Risk Management Fees",
    intro:
      "Fees depend on your organisation's size and the scope of the project. Tell us what you need and we'll send a written proposal.",
    notes: ["Organisation size", "Scope of project", "Number of locations", "Data availability", "Ongoing support"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Manage Risk with Confidence with",
    paragraph: "An efficient team that leads risk projects across every part of your organisation, combining business understanding with data analytics.",
    cards: [
      { title: "Tailored Frameworks", text: "Built around your objectives and culture." },
      { title: "Data-Driven", text: "Analytics that surface the risks that matter." },
      { title: "End-to-End", text: "From assessment through to implementation." },
    ],
    quoteTitle: "Request a risk",
    quoteText: "Tell us about your business and concerns, and we'll send a written proposal for risk management support.",
  },

  included: [
    "Risk strategy & framework",
    "Risk register",
    "Control design",
    "Implementation support",
    "Key risk indicators",
    "Board reporting",
  ],

  faqs: [
    { question: "What is risk management?", answer: "Identifying, assessing and managing the risks that could stop your business reaching its objectives, and putting controls in place to reduce them." },
    { question: "Why involve the whole team?", answer: "Directors can't manage every risk alone. When all levels take part, responsibility is shared and risks are spotted earlier." },
    { question: "Which frameworks do you use?", answer: "We draw on recognised frameworks such as ISO 31000 and COSO ERM, adapted to your business size and needs." },
    { question: "How does data analytics help?", answer: "By analysing large volumes of transactions and operational data, we can spot unusual patterns, control failures and emerging risks that manual reviews might miss." },
    { question: "Do you investigate fraud?", answer: "Yes. We investigate suspected fraud, quantify losses and recommend stronger controls. Larger cases can be handled by our forensic accounting team." },
    { question: "How is risk management different from internal audit?", answer: "Management owns and manages risk day to day. Internal audit independently checks whether risk management and controls are working." },
  ],
};
