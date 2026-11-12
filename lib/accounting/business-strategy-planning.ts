import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero + location reuse images (account-reconciliation / outsource-accounting) — replace when available.

export const businessStrategyPlanning: FreezoneData = {
  slug: "business-strategy-planning",
  category: "Accounting & Tax",
  name: "Business Strategy & Planning in UAE",
  shortName: "Business Strategy & Planning",
  hero: {
    eyebrow: "Advisory · Strategy & Planning · UAE",
    title: "Business Strategy & Planning in UAE",
    highlight: "A Clear Road Map to Your Goals",
    subtitle: "We help organisations build innovative strategies and operational excellence by aligning business models with financial insight.",
    intro:
      "Strategy and planning are critical whenever you set up a business or make a major change. Without them, important decisions can go badly wrong. Every change carries risk, so Afaq Al Khaleej maps out the tactics and strategies you need to reach your goals, drawing on experience across many industries.",
    chips: ["Financial forecasting", "Competitor analysis", "Business modelling", "Capital budgeting"],
    image: "/images/services/investment-services/strategic-fit.png",
  },
  stats: [
    { value: "6", label: "Core planning services" },
    { value: "Multi-industry", label: "Experience" },
    { value: "Data-led", label: "Forecasts & benchmarks" },
    { value: "Long-term", label: "Objectives and milestones" },
  ],

  about: {
    heading: "Why Strategy & Planning Matter",
    body:
      "Your major financial decisions for future growth depend on the plan and strategy you choose today. A strong business strategy sets long-term goals and the plan to reach them. It helps you understand where you stand, see where the market is heading, and move confidently from where you are to where you want to be.",
    location: { name: "From where you are to where you want to be", area: "For SMEs and growing groups", image: "/images/investment-opportunities/high-growth.png" },
    features: [
      { icon: "activities", title: "Understand Your Business", text: "Performance, customers, staff and sales trends." },
      { icon: "online", title: "New Opportunities", text: "Fresh ideas you might otherwise miss." },
      { icon: "trading", title: "Better Results", text: "Focused on long-term objectives." },
      { icon: "multiple", title: "Stronger Communication", text: "Everyone aligned on the plan." },
      { icon: "licence", title: "Clear Milestones", text: "Key steps to measure progress." },
      { icon: "award", title: "Confident Decisions", text: "Choices backed by financial insight." },
    ],
  },

  activities: {
    eyebrow: "Our Services",
    heading: "Business Strategy & Planning Services",
    intro: "A combination of analysis and planning tools, tailored to your business.",
    groups: [
      { icon: "trading", title: "Financial Forecasting", text: "Forecasts built on historical data, with projected statements to plan growth and manage cash flow.", tags: ["Forecasts"] },
      { icon: "multiple", title: "Competitor Analysis", text: "Research on key competitors to find opportunities to stay ahead and keep pace with industry trends.", tags: ["Competitors"] },
      { icon: "services", title: "Business Modelling", text: "A practical framework that focuses on profit and delivers quality at the right cost.", tags: ["Business model"] },
      { icon: "activities", title: "Benchmarking", text: "Technical and competitive comparison with leading peers to find areas to improve.", tags: ["Benchmarks"] },
      { icon: "licence", title: "Feasibility Studies", text: "Check whether you have the resources and technology for a venture, and assess the risks.", tags: ["Feasibility"], href: "/accounting/financial-feasibility" },
      { icon: "bank", title: "Capital Budgeting", text: "Evaluate long-term investments to choose those with the best returns.", tags: ["Investment"] },
    ],
  },

  process: {
    heading: "How We Build Your Strategy",
    intro: "From understanding your business to putting the plan into action.",
    steps: [
      { title: "Assess the current position", text: "Financial performance, operations and market position." },
      { title: "Analyse the market", text: "Competitors, benchmarks and industry trends." },
      { title: "Set objectives", text: "Clear long-term goals and measurable milestones." },
      { title: "Build the plan", text: "Strategies, forecasts and investment priorities." },
      { title: "Implement & review", text: "Support with putting changes in place and tracking progress." },
    ],
  },

  features: {
    eyebrow: "Benefits",
    heading: "What a Business Strategy Delivers",
    items: [
      { status: "yes", text: "A clear picture of your current performance" },
      { status: "yes", text: "New ideas and growth opportunities" },
      { status: "yes", text: "Focus on long-term objectives" },
      { status: "yes", text: "Better internal communication" },
      { status: "yes", text: "Milestones to measure progress" },
      { status: "yes", text: "Reduced risk when implementing change" },
    ],
  },

  cost: {
    heading: "Strategy & Planning Fees",
    intro:
      "Fees depend on the scope of work, the size of your business and the depth of analysis. Tell us your goals and we'll send a proposal.",
    notes: ["Scope of work", "Business size", "Market research depth", "Forecast period", "Implementation support"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Plan Your Next Move with",
    paragraph: "Experts who understand your business, compare it with competitors and set realistic long-term objectives. Then we help you implement the plan.",
    cards: [
      { title: "Financial Insight", text: "Strategy grounded in the numbers." },
      { title: "Market Awareness", text: "Competitor and benchmark analysis." },
      { title: "Implementation Support", text: "From plan to action." },
    ],
    quoteTitle: "Request a strategy",
    quoteText: "Tell us about your business and goals, and we'll propose a strategy and planning engagement.",
  },

  included: [
    "Current-state review",
    "Competitor & benchmark analysis",
    "Financial forecasts",
    "Business model review",
    "Strategic plan & milestones",
    "Implementation support",
  ],

  faqs: [
    { question: "What is business strategy and planning?", answer: "Setting long-term goals for your business and building the plan, forecasts and actions to reach them." },
    { question: "Who needs a business strategy?", answer: "Any business planning growth, entering new markets, launching products or going through major change, whatever its size." },
    { question: "What does financial forecasting involve?", answer: "Using historical data and assumptions to project future revenue, costs, profit and cash flow." },
    { question: "What is benchmarking?", answer: "Comparing your products, services and performance with leading competitors to find areas to improve." },
    { question: "Do you help implement the plan?", answer: "Yes. We support implementation and review progress against milestones." },
  ],
};
