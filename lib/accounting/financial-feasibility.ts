import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero + location reuse images (account-reconciliation / accountant-secondment) — replace when available.

export const financialFeasibility: FreezoneData = {
  slug: "financial-feasibility",
  category: "Accounting & Tax",
  name: "Financial Feasibility Study in Dubai",
  shortName: "Financial Feasibility",
  hero: {
    eyebrow: "Advisory · Feasibility Studies · UAE",
    title: "Financial Feasibility Study in Dubai",
    highlight: "Know If It Works Before You Invest",
    subtitle: "Financial advice that unlocks commercial value and answers the key questions your business faces as markets change.",
    intro:
      "Before you invest in a new project or expand your business, you need an in-depth financial analysis. A feasibility study shows a project's practical requirements, its pros and cons, and whether it can be profitable. Afaq Al Khaleej combines market research with capital budgeting, including NPV analysis, to show whether your idea can become a successful business.",
    chips: ["Market research", "Financial projections", "NPV & capital budgeting", "Operational & resource review"],
    image: "/images/services/investment-services/financial-outlook.png",
  },
  stats: [
    { value: "4", label: "Feasibility dimensions" },
    { value: "NPV", label: "Investment appraisal" },
    { value: "Bank-ready", label: "Reports for investors & lenders" },
    { value: "Concept to launch", label: "Support" },
  ],

  about: {
    heading: "What Is a Financial Feasibility Study?",
    body:
      "A feasibility study tests whether a business idea can work in practice. It looks at the market, competitors, costs, revenue and the alternatives for developing the project. The financial core is capital budgeting: estimating cash coming in and going out over a period and discounting it to present value. A positive net present value (NPV) suggests a profitable investment. A negative NPV warns of long-term losses.",
    location: { name: "From concept to opening", area: "New ventures, expansions and investments", image: "/images/services/feasibility-studies/launching-new-business.png" },
    features: [
      { icon: "activities", title: "Identify Opportunities", text: "See the openings your market offers." },
      { icon: "services", title: "Narrow the Options", text: "Focus on the best alternatives." },
      { icon: "trading", title: "Estimate Returns", text: "Projected profit and possible losses." },
      { icon: "bank", title: "Attract Investment", text: "A credible case for investors and banks." },
      { icon: "award", title: "Better Decisions", text: "Evidence-based go or no-go decisions." },
      { icon: "multiple", title: "Team Focus", text: "Everyone aligned on clear objectives." },
    ],
  },

  activities: {
    eyebrow: "What We Assess",
    heading: "Our Feasibility Study Services",
    intro: "A complete view of your project's viability.",
    groups: [
      { icon: "online", title: "Market Research", text: "We gather and analyse data on customers, competitors and the market to shape your business plan.", tags: ["Market"] },
      { icon: "bank", title: "Financial Feasibility", text: "Start-up costs, cash flow, operating expenses and performance forecasts.", tags: ["Financials"] },
      { icon: "services", title: "Operational Feasibility", text: "How the proposed operation will work and whether it meets requirements.", tags: ["Operations"] },
      { icon: "multiple", title: "Resource Feasibility", text: "The time, people and other resources needed to deliver the project.", tags: ["Resources"] },
      { icon: "trading", title: "Cost-Factor Analysis", text: "Total investment costs, including purchase prices, leases and other expenses.", tags: ["Costs"] },
      { icon: "activities", title: "Capital Budgeting", text: "NPV analysis based on projected cash flows.", tags: ["NPV"] },
    ],
  },

  process: {
    heading: "How We Carry Out a Feasibility Study",
    intro: "A structured approach that turns your idea into a clear, evidence-based answer.",
    steps: [
      { title: "Define objectives", text: "Understand your goals, requirements and constraints." },
      { title: "Research the market", text: "Demand, competitors, pricing and trends." },
      { title: "Explore alternatives", text: "Different ways to reach your objectives." },
      { title: "Model the financials", text: "Costs, revenues, cash flows and NPV." },
      { title: "Report & recommend", text: "A clear feasibility report with recommendations." },
    ],
  },

  features: {
    eyebrow: "Why Outsource",
    heading: "Benefits of an Independent Feasibility Study",
    items: [
      { status: "yes", text: "In-depth insight into the project" },
      { status: "yes", text: "Accurate reports that help avoid financial losses" },
      { status: "yes", text: "No need to buy research tools or data" },
      { status: "yes", text: "An objective view, free of internal bias" },
      { status: "yes", text: "Faster delivery from experienced consultants" },
      { status: "yes", text: "Flaws spotted early, before money is committed" },
    ],
  },

  cost: {
    heading: "Feasibility Study Fees",
    intro:
      "Fees depend on the project's size, the depth of market research and the level of financial modelling. Tell us about your project and we'll send a proposal.",
    notes: ["Project size", "Market research depth", "Financial modelling", "Number of scenarios", "Report purpose"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Test Your Idea with",
    paragraph: "We help businesses go from concept to grand opening, supporting start-ups with business plans and market research, and helping SMEs plan expansion across the UAE and beyond.",
    cards: [
      { title: "Financial Rigour", text: "Projections and NPV by accountants." },
      { title: "Market Insight", text: "Research grounded in the UAE market." },
      { title: "Clear Answers", text: "A practical go or no-go view." },
    ],
    quoteTitle: "Request a feasibility",
    quoteText: "Tell us about your project or expansion, and we'll send a proposal for a feasibility study.",
  },

  included: [
    "Objectives workshop",
    "Market research",
    "Cost analysis",
    "Financial projections",
    "NPV analysis",
    "Feasibility report",
  ],

  faqs: [
    { question: "What is a financial feasibility study?", answer: "An assessment of whether a project is financially viable, covering start-up costs, cash flow, operating expenses, forecasts and investment returns." },
    { question: "What is NPV?", answer: "Net present value is the value today of a project's future cash inflows minus outflows. A positive NPV indicates a profitable investment." },
    { question: "When do I need a feasibility study?", answer: "Before launching a new business, entering a new market, expanding or making a major investment." },
    { question: "Can the report be used for bank or investor applications?", answer: "Yes. A well-prepared feasibility study and financial projections support financing and investment discussions." },
    { question: "How long does a feasibility study take?", answer: "It depends on scope. Focused studies take a few weeks, while larger projects with detailed market research take longer." },
  ],
};
