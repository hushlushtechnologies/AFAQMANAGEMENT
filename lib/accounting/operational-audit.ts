import type { FreezoneData } from "@/lib/freezones/types";

export const operationalAudit: FreezoneData = {
  slug: "operational-audit",
  category: "Accounting & Tax",
  name: "Operational Audit Services in Dubai",
  shortName: "Operational Audit",
  hero: {
    eyebrow: "Operational Audit · Dubai",
    title: "Operational Audit Services in Dubai",
    highlight: "Is Your Business Running as Well as It Can?",
    subtitle: "A close look at how you really do business, and how to do it better.",
    intro:
      "An operational audit is a systematic review of the economy, efficiency and effectiveness of your operations. A financial audit reports on the numbers. An operational audit looks at the day-to-day processes behind them. Afaq Al Khaleej provides monthly, quarterly and annual operational audits that strengthen controls, cut costs and remove irregularities.",
    chips: ["Economy · Efficiency · Effectiveness", "Process walkthroughs", "Control gaps", "Follow-up audits"],
    image: "/images/why-afaq/end-to-end-support.png",
  },
  stats: [
    { value: "3 Es", label: "Economy, efficiency, effectiveness" },
    { value: "8 steps", label: "From understanding to follow-up" },
    { value: "Monthly–Annual", label: "Audit frequency" },
    { value: "Process owners", label: "Who the report serves" },
  ],

  about: {
    heading: "What Is an Operational Audit?",
    body:
      "Operational audits are carried out by your own internal audit function or outsourced to specialists. They find weaknesses in procedures and set out a practical strategy to fix them, so management can act. An operational audit isn't legally required, but it often pays for itself through lower costs and better use of resources. The report goes to management and, above all, to the process owners and line managers, with each process reviewed separately.",
    location: { name: "Process by process", area: "Findings for each process owner", image: "/images/why-afaq/growth-focused-solutions.png" },
    features: [
      { icon: "services", title: "Stronger Controls", text: "Gaps in internal controls identified and closed." },
      { icon: "bank", title: "Lower Costs", text: "Waste and duplication removed from operations." },
      { icon: "activities", title: "Fewer Irregularities", text: "Anomalies in procedures caught early." },
      { icon: "trading", title: "Higher Productivity", text: "Labour and resources used more efficiently." },
      { icon: "award", title: "Practical Strategy", text: "Clear actions for management to take." },
      { icon: "multiple", title: "Responsible Operations", text: "Less waste, with wider benefits for the business and community." },
    ],
  },

  activities: {
    eyebrow: "Objectives",
    heading: "What an Operational Audit Sets Out to Achieve",
    intro: "Each audit is shaped around your processes and priorities.",
    groups: [
      { icon: "licence", title: "Policy & Procedure Review", text: "Evaluation of your policies and procedures for sales, purchasing and other key processes.", tags: ["Sales", "Purchasing"] },
      { icon: "trading", title: "Optimum Profitability", text: "Improved profitability through lower costs and less waste.", tags: ["Cost reduction"] },
      { icon: "ownership", title: "Effective Control System", text: "Proper segregation of duties, authorisation of processes and safeguarding of fixed assets.", tags: ["Segregation", "Authorisation"] },
      { icon: "activities", title: "Performance Analysis", text: "Analysis of productivity and labour efficiency.", tags: ["Productivity"] },
      { icon: "multiple", title: "Corporate Responsibility", text: "Operations that limit waste and wider costs while increasing benefits to stakeholders.", tags: ["CSR"] },
    ],
  },

  process: {
    heading: "How We Carry Out an Operational Audit",
    intro: "A structured approach, followed by a follow-up review to make sure improvements stick.",
    steps: [
      { title: "Understand the business", text: "Your business environment and operational structure." },
      { title: "Review policies", text: "Existing policies and procedures for each operating process." },
      { title: "Walkthroughs", text: "Each procedure followed through in practice to verify how it really works." },
      { title: "Analyse gaps", text: "Loopholes, anomalies and inefficiencies evaluated." },
      { title: "Report", text: "Observations, recommendations and actions to close control gaps and improve workflow." },
      { title: "Discuss with management", text: "Responsibilities clarified with management and process owners, and questions resolved." },
      { title: "Follow-up audit", text: "We check that the recommendations have worked." },
    ],
  },

  features: {
    eyebrow: "Operational vs Financial Audit",
    heading: "How It Differs from a Financial Audit",
    items: [
      { status: "yes", text: "Focuses on day-to-day operations, not the annual accounts" },
      { status: "yes", text: "Measures economy, efficiency and effectiveness" },
      { status: "yes", text: "Reports to management and process owners" },
      { status: "yes", text: "Forward-looking, with improvement recommendations" },
      { status: "partial", text: "Optional, not a legal requirement" },
      { status: "yes", text: "Can run monthly, quarterly or annually" },
    ],
  },

  cost: {
    heading: "Operational Audit Fees",
    intro:
      "Fees depend on the number of processes reviewed and how often you want audits. Tell us about your operations and we'll send a written proposal.",
    notes: ["Processes in scope", "Audit frequency", "Locations", "Organisation size", "Follow-up reviews"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Improve Your Operations with",
    paragraph: "Clear findings, practical recommendations and follow-up that makes sure improvements last.",
    cards: [
      { title: "Process Focused", text: "Each process reviewed with its owner." },
      { title: "Actionable Reports", text: "Specific actions, not general advice." },
      { title: "Follow-Up Included", text: "We check that changes have worked." },
    ],
    quoteTitle: "Request an operational",
    quoteText: "Tell us which processes you want reviewed, and we'll send a written proposal.",
  },

  included: [
    "Business & process understanding",
    "Policy review",
    "Walkthrough testing",
    "Gap analysis",
    "Report with action plan",
    "Follow-up audit",
  ],

  faqs: [
    { question: "What is an operational audit?", answer: "A systematic review of how efficiently, effectively and economically an organisation's operations run, with recommendations for improvement." },
    { question: "How is it different from a financial audit?", answer: "A financial audit gives an opinion on the financial statements. An operational audit examines day-to-day processes and how to improve them." },
    { question: "Is an operational audit mandatory?", answer: "No. It's voluntary, but it often more than pays for itself through lower costs and better controls." },
    { question: "Who performs it?", answer: "Your internal audit function, or an outsourced team like ours." },
    { question: "Who receives the report?", answer: "Management, and especially the process owners and line managers responsible for each area." },
    { question: "How often should we have one?", answer: "We offer monthly, quarterly and annual audits, depending on how fast your operations change and your risk level." },
  ],
};
