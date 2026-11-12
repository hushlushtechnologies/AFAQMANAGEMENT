import type { FreezoneData } from "@/lib/freezones/types";

export const financialControlAudit: FreezoneData = {
  slug: "financial-control-audit",
  category: "Accounting & Tax",
  name: "Financial Control Audit Services in Dubai",
  shortName: "Financial Control Audit",
  hero: {
    eyebrow: "Financial Control Audit · UAE",
    title: "Financial Control Audit Services in Dubai",
    highlight: "Controls That Protect Your Finances",
    subtitle: "We assess whether your internal financial controls are well designed and working as they should.",
    intro:
      "Financial control is a critical part of any organisation's internal control and audit function. Afaq Al Khaleej's experienced internal auditors review how your books are kept, how transactions are recorded and reported, and how strong your controls are. We help you manage financial compliance, regulatory and internal financial risks.",
    chips: ["Transaction testing", "Authorisation & segregation", "Variance & break-even analysis", "Margin validation"],
    image: "/images/services/company-formation/hero-bg.jpg",
  },
  stats: [
    { value: "8", label: "Control checks" },
    { value: "4 stages", label: "Review to implementation" },
    { value: "IFRS", label: "Recording standards checked" },
    { value: "Internal", label: "Performed by internal auditors" },
  ],

  about: {
    heading: "What Is a Financial Control Audit?",
    body:
      "In a financial control audit, the auditor reviews how bookkeeping is done, how transactions are entered into the system, how financial results are reported, and whether internal controls are adequate and secure. It is carried out by internal auditors, not external auditors, to support management. It also checks that the entity makes the most of its resources and capacity.",
    location: { name: "Your financial controls, tested", area: "Recording · Reporting · Safeguarding", image: "/images/services/digital-business-solutions/web-applications.png" },
    features: [
      { icon: "activities", title: "Risk Identification", text: "Risk mitigation policies built around real exposures." },
      { icon: "trading", title: "Better Reporting & Performance", text: "Effective controls that improve reporting and results." },
      { icon: "services", title: "Planning Insight", text: "Insight on financial planning, control procedures and risk." },
      { icon: "licence", title: "Standards Adherence", text: "Accounting and reporting standards followed correctly." },
      { icon: "ownership", title: "Fraud Prevention", text: "Better resource management and fraud prevention." },
      { icon: "bank", title: "Capital & Credit", text: "Support for capital restructuring and credit ratings." },
    ],
  },

  structures: {
    heading: "Services Under a Financial Control Audit",
    intro: "Each audit is tailored to your business. These are the checks we typically perform.",
    groups: [
      {
        title: "Control testing",
        items: [
          { title: "Occurrence, completeness & accuracy", text: "Accounting transactions checked to confirm they're genuine, complete and correct." },
          { title: "Authorisation", text: "Transactions confirmed as properly approved." },
          { title: "Segregation of duties", text: "Recording, approval and custody kept separate." },
          { title: "Standards compliance", text: "Revenue and expenses recorded in line with IFRS." },
        ],
      },
      {
        title: "Financial analysis",
        items: [
          { title: "Cost reduction review", text: "We check that cost-saving measures are in place and find the best alternatives." },
          { title: "Variance & break-even analysis", text: "Actual results compared with budget, and the break-even point calculated." },
          { title: "Gross margin validation", text: "Gross profit margins tested for reasonableness." },
          { title: "Profitability analysis", text: "Opportunities to reach optimum profitability identified." },
        ],
      },
    ],
  },

  activities: {
    eyebrow: "Our Approach",
    heading: "How We Strengthen Your Financial Controls",
    intro: "A systematic approach that brings your organisation into line with effective internal controls.",
    groups: [
      { icon: "licence", title: "Review Existing Controls", text: "We test your financial data and reports to get a complete view of how well current controls work.", tags: ["Testing"] },
      { icon: "activities", title: "Identify Risks & Opportunities", text: "We pinpoint financial risks and opportunities for improvement.", tags: ["Risk"] },
      { icon: "online", title: "Integrate New Controls", text: "We introduce new controls covering fraud prevention, technology, procedures and policy.", tags: ["Fraud prevention", "Technology"] },
      { icon: "award", title: "Implement & Review", text: "We implement effective controls and set up continuous monitoring.", tags: ["Monitoring"] },
    ],
  },

  process: {
    heading: "The Financial Control Audit Process",
    intro: "Four clear stages from planning to report.",
    steps: [
      { title: "Planning", text: "Understand your systems, risks and key financial processes, and agree scope." },
      { title: "Financial audit tests", text: "Test controls and transactions for authorisation, accuracy and completeness." },
      { title: "Account analysis", text: "Analyse balances, variances, margins and cost trends." },
      { title: "Audit report", text: "Report findings and recommendations, and discuss them with management." },
    ],
  },

  features: {
    eyebrow: "Benefits",
    heading: "How a Financial Control Audit Benefits Your Organisation",
    items: [
      { status: "yes", text: "Risk identification and mitigation policies" },
      { status: "yes", text: "Improved financial reporting and performance" },
      { status: "yes", text: "Better resource management and efficiency" },
      { status: "yes", text: "Revenue protection and fraud prevention" },
      { status: "yes", text: "New financial risk management policies" },
      { status: "yes", text: "Integrated risk control and compliance initiatives" },
    ],
  },

  cost: {
    heading: "Financial Control Audit Fees",
    intro:
      "Fees depend on the size of your finance function and the processes in scope. Tell us about your business and we'll send a written proposal.",
    notes: ["Processes in scope", "Transaction volume", "Number of entities", "Systems used", "Implementation support"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Strengthen Your Controls with",
    paragraph: "Proactive updates, clear communication with management and a deep understanding of your business. We protect the integrity and transparency of your financials and the confidence of your shareholders and investors.",
    cards: [
      { title: "Experienced Auditors", text: "Internal audit specialists who understand finance." },
      { title: "Proactive Communication", text: "Management kept informed at every stage." },
      { title: "Integrity & Transparency", text: "Accurate financials your stakeholders can trust." },
    ],
    quoteTitle: "Request a financial control",
    quoteText: "Tell us about your finance function and concerns, and we'll send a written proposal.",
  },

  included: [
    "Control review",
    "Transaction testing",
    "Variance & margin analysis",
    "Risk & opportunity report",
    "New control design",
    "Implementation & monitoring",
  ],

  faqs: [
    { question: "What is a financial control audit?", answer: "A review of how your bookkeeping, transaction recording, financial reporting and internal controls work, and whether they're adequate and secure." },
    { question: "Who performs a financial control audit?", answer: "Internal auditors, either your own team or an outsourced provider like us, rather than the external statutory auditor." },
    { question: "What controls do you test?", answer: "Authorisation, segregation of duties, accuracy and completeness of transactions, and compliance with accounting standards." },
    { question: "Do you also look at profitability?", answer: "Yes. We perform variance, break-even, gross margin and cost-reduction analysis to find ways to improve profitability." },
    { question: "Will you help implement new controls?", answer: "Yes. We design new controls, help you put them in place and set up continuous monitoring." },
    { question: "How is it different from a financial statement audit?", answer: "A financial statement audit gives an external opinion on your annual accounts. A financial control audit is an internal review of how well your financial processes and controls work." },
  ],
};
