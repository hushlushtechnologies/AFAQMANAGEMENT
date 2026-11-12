import type { FreezoneData } from "@/lib/freezones/types";

export const internalAudit: FreezoneData = {
  slug: "internal-audit",
  category: "Accounting & Tax",
  name: "Internal Audit Services in Dubai",
  shortName: "Internal Audit",
  hero: {
    eyebrow: "Internal Audit · Dubai",
    title: "Internal Audit Services in Dubai",
    highlight: "Manage Risk, Improve Processes",
    subtitle: "Data-driven insight that strengthens your controls, governance and operations.",
    intro:
      "Afaq Al Khaleej's internal audit services help protect your organisation from its biggest strategic, operational and financial risks. Our auditors work independently with one objective: to improve how your organisation operates, by evaluating risk management, internal controls and governance.",
    chips: ["Risk assessment", "Internal controls", "Operational & IT audit", "Process mapping"],
    image: "/images/why-afaq/strategic-expertise.png",
  },
  stats: [
    { value: "6", label: "Key benefits" },
    { value: "9", label: "Internal audit services" },
    { value: "Board-level", label: "Reporting line" },
    { value: "Tailored", label: "Audit plan for you" },
  ],

  about: {
    heading: "What Is Internal Auditing?",
    body:
      "Internal audit evaluates your internal controls and identifies risks in financial reporting, bookkeeping and regulatory compliance. Internal auditors review how each department is managed and the strategies it follows, and pinpoint weaknesses in controls, procedures and financial systems. After analysis, they report their findings with practical recommendations for improving the business. Their reports go to the board or audit committee, which keeps their view independent of management.",
    location: { name: "Independent insight for your board", area: "Reporting to the board or audit committee", image: "/images/services/investment-services/market-potential.jpg" },
    features: [
      { icon: "activities", title: "Risk Management", text: "Risks identified, evaluated and mitigated." },
      { icon: "licence", title: "Governance & Compliance", text: "Legal and regulatory requirements met." },
      { icon: "trading", title: "Operational Efficiency", text: "Inefficiencies and waste removed from processes." },
      { icon: "ownership", title: "Fraud Protection", text: "Anti-fraud controls that safeguard your assets." },
      { icon: "bank", title: "Reliable Reporting", text: "Accurate, transparent financial information." },
      { icon: "award", title: "Strategic Insight", text: "Recommendations that drive performance and growth." },
    ],
  },

  structures: {
    heading: "Benefits of Internal Audit for Your Organisation",
    intro: "Here's what a strong internal audit function delivers.",
    groups: [
      {
        title: "Control & protection",
        items: [
          { title: "Enhanced risk management", text: "Risks in operations, processes and systems identified and evaluated, with mitigation strategies that help you adapt to change." },
          { title: "Improved governance & compliance", text: "Stronger controls and governance structures, with less exposure to penalties, legal issues and reputational damage." },
          { title: "Protection against fraud", text: "Fraud and misconduct detected and prevented, assets safeguarded, and suspected cases investigated with evidence gathered properly." },
        ],
      },
      {
        title: "Performance & insight",
        items: [
          { title: "Increased operational efficiency", text: "Process bottlenecks, duplication and waste identified, so resources are used where they add most value." },
          { title: "Reliable financial reporting", text: "Integrity of statements, records and transactions verified, building stakeholder confidence." },
          { title: "Strategic recommendations", text: "Insight into operations, risks and opportunities to support informed management decisions." },
        ],
      },
    ],
  },

  activities: {
    eyebrow: "Our Services",
    heading: "Our Internal Audit Services",
    intro: "From a fully outsourced internal audit function to targeted reviews, tailored to your goals, risks and challenges.",
    groups: [
      { icon: "services", title: "Outsourced Internal Audit Function", text: "A complete internal audit function, or support for your existing team, with a risk-based annual plan.", tags: ["Outsourced", "Co-sourced"] },
      { icon: "activities", title: "Risk Assessment", text: "Organisation-wide risk assessment built into the audit plan.", tags: ["Risk register"] },
      { icon: "licence", title: "Internal Control Documentation", text: "Controls documented, tested and improved.", tags: ["Policies", "Procedures"] },
      { icon: "trading", title: "Operational Audit", text: "Efficiency and effectiveness of operations reviewed.", tags: ["Efficiency"] },
      { icon: "online", title: "IT System Audit", text: "Access, data integrity and system controls assessed.", tags: ["IT controls"] },
      { icon: "multiple", title: "Process Mapping & Review", text: "Key processes mapped, analysed and improved, with a systematic approach to business improvement.", tags: ["Process maps", "Improvement"] },
    ],
  },

  process: {
    heading: "How We Run Your Internal Audit",
    intro: "A systematic, risk-based approach that delivers results within agreed timelines.",
    cautionTitle: "Independence matters",
    caution: "Internal auditors should report to the board or audit committee and shouldn't audit work they performed themselves. We agree reporting lines and scope with you at the start.",
    steps: [
      { title: "Understand your business", text: "We discuss your goals, risks and challenges with management and the board." },
      { title: "Risk-based plan", text: "We design an audit plan focused on your highest-risk areas." },
      { title: "Fieldwork", text: "We test controls, map processes, review data and interview staff." },
      { title: "Report", text: "Findings, risk ratings and actionable recommendations go to the board or audit committee." },
      { title: "Follow up", text: "We track management's actions until the issues are resolved." },
    ],
  },

  features: {
    eyebrow: "Advantages",
    heading: "What Internal Audit Achieves",
    items: [
      { status: "yes", text: "Reduces the risk of fraud" },
      { status: "yes", text: "Improves productivity" },
      { status: "yes", text: "Increases quality and integrity" },
      { status: "yes", text: "Supports compliance with laws and regulations" },
      { status: "yes", text: "Establishes effective checking methods" },
      { status: "yes", text: "Verifies that recorded assets exist and are undamaged" },
      { status: "yes", text: "Works alongside external auditors at year-end" },
      { status: "yes", text: "Improves MIS reporting and decision-making" },
    ],
  },

  cost: {
    heading: "Internal Audit Fees",
    intro:
      "Fees depend on the size of your organisation, the areas in scope and how often you need audits. Tell us about your business and we'll send a written proposal.",
    notes: ["Organisation size", "Areas in scope", "Audit frequency", "Locations", "IT complexity"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Strengthen Your Organisation with",
    paragraph: "A tailored approach, efficient delivery and strict confidentiality. Our experienced team helps you build a robust framework for risk management, compliance and operational excellence.",
    cards: [
      { title: "Customised Approach", text: "An audit plan designed around your goals and risks." },
      { title: "Efficient & Timely", text: "Clear processes and agreed timelines." },
      { title: "Trust & Confidentiality", text: "Information handled with the utmost confidentiality." },
    ],
    quoteTitle: "Request an internal audit",
    quoteText: "Tell us about your organisation and the areas you want reviewed, and we'll send a written proposal.",
  },

  included: [
    "Risk assessment",
    "Risk-based audit plan",
    "Control testing",
    "Process mapping",
    "Board-level audit report",
    "Follow-up on actions",
  ],

  faqs: [
    { question: "How does internal audit improve operational efficiency?", answer: "By identifying inefficiencies, control gaps and process weaknesses, then recommending improvements that streamline operations, reduce waste, improve decision-making and build a culture of continuous improvement." },
    { question: "Is internal audit mandatory for all companies in Dubai?", answer: "No. Most private companies aren't legally required to have one, although regulated sectors such as banks, insurers and listed companies usually are. Many businesses choose internal audit anyway for better control and governance." },
    { question: "How are objectivity and independence maintained?", answer: "Internal auditors report to the board or audit committee rather than to the managers whose work they review, and they don't audit work they performed themselves." },
    { question: "How is internal audit different from external audit?", answer: "Internal audit helps management and the board improve risk management, controls and operations throughout the year. External audit gives an independent opinion on the annual financial statements." },
    { question: "How long does an internal audit take?", answer: "It depends on scope, size and the number of areas reviewed. A focused review may take a few weeks, while an ongoing function runs to an annual plan." },
    { question: "How does internal audit help MIS reporting?", answer: "By checking that management information is accurate, complete and timely, and recommending improvements to how it's produced and used." },
    { question: "Are your internal audit reports confidential?", answer: "Yes. Reports are shared only with the board, audit committee and people you authorise." },
    { question: "What should I look for when choosing an internal audit firm?", answer: "Relevant industry experience, independence, a risk-based methodology, clear reporting and a commitment to confidentiality." },
  ],
};
