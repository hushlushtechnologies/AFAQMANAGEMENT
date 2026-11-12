import type { FreezoneData } from "@/lib/freezones/types";

export const independentReview: FreezoneData = {
  slug: "independent-review",
  category: "Accounting & Tax",
  name: "Independent Review Services in Dubai",
  shortName: "Independent Review",
  hero: {
    eyebrow: "Independent Review · Dubai",
    title: "Independent Review Services in Dubai",
    highlight: "A Closer Look at Everything",
    subtitle: "An independent examination of your financial records, accounts and transactions, with practical suggestions to strengthen your business.",
    intro:
      "Strong control functions take your business further. Afaq Al Khaleej's independent reviews draw on our audit and risk management expertise. We recommend practical improvements that help you manage risk, stay compliant and follow good practice, focused on strengthening your business, not just on process.",
    chips: ["Limited assurance", "Inquiry & analytics", "External evaluation", "Self-assessment support"],
    image: "/images/services/pro-government.png",
  },
  stats: [
    { value: "Limited", label: "Level of assurance" },
    { value: "ISRE 2400", label: "Review standard" },
    { value: "3 formats", label: "External · Self · Facilitated" },
    { value: "Faster", label: "Less intensive than an audit" },
  ],

  about: {
    heading: "What Is an Independent Review?",
    body:
      "A review engagement gives limited assurance that nothing has come to the accountant's attention suggesting the financial statements need material changes to conform with the reporting framework. It is less extensive than an audit, relying mainly on inquiry and analytical procedures, so it gives readers less assurance. The result is a limited-assurance conclusion, not an audit opinion on whether the statements present a true and fair view.",
    location: { name: "Independent, practical insight", area: "Full external, self-assessment or facilitated", image: "/images/services/afaq-investors.png" },
    features: [
      { icon: "activities", title: "Limited Assurance", text: "Credible comfort without a full audit." },
      { icon: "trading", title: "Analytical Insight", text: "Trends, ratios and expectations compared." },
      { icon: "licence", title: "Framework Conformity", text: "Checked against the reporting framework." },
      { icon: "bank", title: "Cost-Effective", text: "Less intensive than an audit." },
      { icon: "services", title: "Risk & Compliance", text: "Solutions that reduce risk and keep you compliant." },
      { icon: "award", title: "Better Practices", text: "Good-practice recommendations to perform better." },
    ],
  },

  activities: {
    eyebrow: "Review Approaches",
    heading: "Three Ways to Review",
    intro: "Choose the format that fits your needs.",
    groups: [
      { icon: "licence", title: "Full External Evaluation", text: "Our team independently reviews your financial statements and records from start to finish.", tags: ["Independent"] },
      { icon: "solo", title: "Self-Assessment", text: "Your team assesses itself using our framework and checklists, and we validate the results.", tags: ["Guided"] },
      { icon: "multiple", title: "Facilitated Review", text: "We lead workshops with your team to evaluate controls and practices together.", tags: ["Collaborative"] },
    ],
  },

  structures: {
    heading: "What the Review Involves",
    intro: "Mainly inquiry and analytical procedures, supported by key documents.",
    groups: [
      {
        title: "Inquiries & documents",
        items: [
          { title: "Accounting practices", text: "Inquiries into accounting principles and practices." },
          { title: "Recording procedures", text: "How transactions are recorded, classified and summarised." },
          { title: "Board decisions", text: "Actions taken at directors' and shareholders' meetings." },
          { title: "Subsequent events", text: "Events after the reporting date that may affect the statements." },
          { title: "Written representations", text: "Formal confirmations from management." },
        ],
      },
      {
        title: "Analytical procedures",
        items: [
          { title: "Period comparisons", text: "Current figures compared with prior periods and budgets." },
          { title: "Expectations", text: "Recorded amounts compared with what we'd expect." },
          { title: "Ratio analysis", text: "Relationships between key figures reviewed for anomalies." },
          { title: "Fraud indicators", text: "Unusual items that may point to fraud or error." },
        ],
      },
    ],
    notes: [
      "A review provides limited assurance only. Where your licensing authority, bank or corporate tax rules require audited statements, a full audit is needed.",
    ],
  },

  process: {
    heading: "How the Review Works",
    intro: "A focused process that's quicker and less intensive than an audit.",
    steps: [
      { title: "Agree terms", text: "Scope, framework and reporting needs agreed in writing." },
      { title: "Understand the business", text: "Your operations, accounting system and key risks." },
      { title: "Inquiry & analytics", text: "Questions to management and analytical procedures on the figures." },
      { title: "Evaluate", text: "Results assessed, with further work wherever something looks wrong." },
      { title: "Report", text: "A limited-assurance conclusion and practical recommendations." },
    ],
  },

  features: {
    eyebrow: "Review vs Audit",
    heading: "How a Review Differs from an Audit",
    items: [
      { status: "yes", text: "Limited assurance rather than reasonable assurance" },
      { status: "yes", text: "Mainly inquiry and analytics, not detailed testing" },
      { status: "yes", text: "Quicker and usually lower cost" },
      { status: "partial", text: "No opinion on whether the statements give a true and fair view" },
      { status: "no", text: "Not a substitute for a statutory audit where one is required" },
    ],
  },

  cost: {
    heading: "Independent Review Fees",
    intro:
      "Review fees are usually lower than audit fees and depend on your size and complexity. Tell us what you need and we'll send a written proposal.",
    notes: ["Revenue & volume", "Review format", "Number of entities", "Record readiness", "Reporting deadline"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Get an Independent View with",
    paragraph: "We keep things simple. You get timely, high-quality reviews from a qualified team, with reports that support your business's growth.",
    cards: [
      { title: "Audit & Risk Expertise", text: "Reviews grounded in audit and risk experience." },
      { title: "Practical Suggestions", text: "Focused on strengthening your business." },
      { title: "Timely Delivery", text: "Quicker turnaround than a full audit." },
    ],
    quoteTitle: "Request an independent",
    quoteText: "Tell us why you need a review and for which period, and we'll send a written proposal.",
  },

  included: [
    "Engagement letter",
    "Inquiries with management",
    "Analytical procedures",
    "Management representations",
    "Review report",
    "Recommendations",
  ],

  faqs: [
    { question: "What is an independent review?", answer: "A limited-assurance engagement in which an accountant uses inquiry and analytical procedures to conclude whether anything suggests the financial statements need material changes." },
    { question: "How is a review different from an audit?", answer: "An audit gives reasonable assurance and a true-and-fair opinion based on detailed testing. A review gives limited assurance based mainly on inquiry and analytics, so it's quicker and less costly." },
    { question: "Can a review replace my statutory audit?", answer: "No. Where law, your free zone or corporate tax rules require audited financial statements, you need a full audit." },
    { question: "When is a review useful?", answer: "For interim figures, internal governance, lender or investor comfort where an audit isn't required, or as a health check before an audit." },
    { question: "Which standard applies?", answer: "Review engagements on historical financial statements are generally performed under ISRE 2400 (Revised)." },
    { question: "What review formats do you offer?", answer: "A full external evaluation, a self-assessment we validate, or a facilitated review with your team." },
  ],
};
