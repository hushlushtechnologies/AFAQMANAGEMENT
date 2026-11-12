import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero + location reuse images — replace with AML/compliance images when available.
// Legal framework: Federal Decree-Law No. 10 of 2025 (in force 14 Oct 2025) + Cabinet Resolution No. 134 of 2025.

export const amlCompliance: FreezoneData = {
  slug: "aml-compliance",
  category: "Accounting & Tax",
  name: "Anti-Money Laundering (AML) Compliance in UAE",
  shortName: "AML Compliance",
  hero: {
    eyebrow: "AML · goAML · UAE",
    title: "Anti-Money Laundering (AML) Compliance in UAE",
    highlight: "goAML Registration & AML Programmes",
    subtitle: "Practical AML support for UAE businesses, from goAML registration and risk assessments to policies, training and ongoing monitoring.",
    intro:
      "UAE AML rules apply to banks and also to designated non-financial businesses and professions (DNFBPs), such as real estate agents, precious metals dealers, corporate service providers, accountants and auditors. Afaq Al Khaleej helps you work out whether you're covered, register on goAML and build an AML programme that stands up to inspection.",
    chips: ["DNFBP assessment", "goAML registration", "Risk assessment", "Policies & training"],
    image: "/images/investment-opportunities/scalable-defensible.png",
  },
  stats: [
    { value: "FDL 10/2025", label: "Current AML law" },
    { value: "14 Oct 2025", label: "In force from" },
    { value: "goAML", label: "Mandatory reporting portal" },
    { value: "AED 5M", label: "Max administrative fine per violation" },
  ],

  about: {
    heading: "AML in the UAE: What's Changed",
    body:
      "The UAE's AML framework is now Federal Decree-Law No. 10 of 2025, in force since 14 October 2025, with implementing regulations under Cabinet Resolution No. 134 of 2025. It replaced the 2018 AML law and widened its scope. Most onshore DNFBPs are supervised by the Ministry of Economy, while lawyers and notaries fall under the Ministry of Justice. Every reporting entity must be registered on goAML, the UAE Financial Intelligence Unit's portal for reporting suspicious transactions.",
    location: { name: "Inspection-ready AML", area: "Mainland and free zone businesses", image: "/images/services/business-consultancy/strategy-planning.png" },
    features: [
      { icon: "licence", title: "goAML Registration", text: "Mandatory for reporting entities, including DNFBPs." },
      { icon: "activities", title: "Risk Assessment", text: "Business-wide and customer risk assessments." },
      { icon: "ownership", title: "Customer Due Diligence", text: "Identify customers and verify beneficial owners." },
      { icon: "services", title: "Compliance Officer", text: "A designated AML/MLRO officer for your programme." },
      { icon: "online", title: "Sanctions Screening", text: "Screening against UAE and UN sanctions lists." },
      { icon: "multiple", title: "Training & Records", text: "Regular staff training and proper record-keeping." },
    ],
  },

  compare: {
    eyebrow: "Who Must Comply",
    heading: "Businesses Covered as DNFBPs",
    intro: "If your business carries out any of these activities, AML obligations apply and you must register on goAML.",
    columns: ["Sector", "Examples", "Usual supervisor"],
    rows: [
      { cells: ["Real estate", "Brokers and agents in property sales and purchases", "Ministry of Economy"] },
      { cells: ["Precious metals & stones", "Gold, diamond and jewellery dealers", "Ministry of Economy"] },
      { cells: ["Corporate service providers", "Company formation, nominee and registered office services", "Ministry of Economy"] },
      { cells: ["Accountants & auditors", "Audit, accounting and tax service providers", "Ministry of Economy"] },
      { cells: ["Lawyers & notaries", "Legal professionals handling covered transactions", "Ministry of Justice"] },
      { cells: ["Other regulated sectors", "Financial institutions, virtual asset providers, gaming operators", "Sector regulators"] },
    ],
    footnote: "Not sure whether you're a DNFBP? We'll assess your activities and confirm your obligations.",
  },

  process: {
    heading: "How to Register on goAML",
    intro: "Registration is a two-stage online process, followed by putting your AML programme in place.",
    steps: [
      { title: "Confirm your status", text: "Check whether your licensed activities make you a DNFBP." },
      { title: "Gather documents", text: "Trade licence, owner IDs and compliance officer details." },
      { title: "Authenticate", text: "Complete the supervisory authentication step." },
      { title: "Register your organisation", text: "Complete the goAML organisation registration with your compliance officer." },
      { title: "Operate your programme", text: "Run due diligence, screening, monitoring and suspicious transaction reporting." },
    ],
  },

  activities: {
    eyebrow: "Our AML Services",
    heading: "AML Compliance Services We Offer",
    intro: "End-to-end support so your AML programme works in practice.",
    groups: [
      { icon: "activities", title: "DNFBP Status Assessment", text: "Confirm whether and how the AML law applies to you.", tags: ["Scoping"] },
      { icon: "licence", title: "goAML Registration", text: "Registration on goAML and related federal systems.", tags: ["goAML"] },
      { icon: "trading", title: "Risk Assessment", text: "Find gaps in your exposure to money laundering and sanctions risk.", tags: ["Risk"] },
      { icon: "services", title: "Policy Development", text: "AML policies, procedures and customer due diligence frameworks.", tags: ["Policies"] },
      { icon: "multiple", title: "Staff Training", text: "Train staff to spot and escalate suspicious activity.", tags: ["Training"] },
      { icon: "ownership", title: "Monitoring & Reporting", text: "Ongoing monitoring and timely escalation of suspicious transactions.", tags: ["STR/SAR"] },
    ],
    lists: [
      { title: "Also available", items: ["Independent AML audits", "Inspection readiness reviews", "Outsourced compliance support", "Sanctions screening setup"] },
    ],
  },

  features: {
    eyebrow: "Risks of Non-Compliance",
    heading: "What Happens If You Don't Comply",
    items: [
      { status: "warn", text: "Administrative fines of up to AED 5 million per violation" },
      { status: "warn", text: "Licence suspension or restrictions" },
      { status: "warn", text: "Criminal penalties in serious cases" },
      { status: "warn", text: "Supervisory inspections and enforcement action" },
      { status: "warn", text: "Clients, banks and partners checking your AML status" },
    ],
  },

  cost: {
    heading: "AML Compliance Fees",
    intro:
      "Fees depend on your sector, size and how much of your AML programme is already in place. Tell us about your business and we'll send a proposal.",
    notes: ["Sector & activities", "Business size", "Existing policies", "Training needs", "Ongoing support"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Build a Strong AML Programme with",
    paragraph: "Practical AML support aligned with the 2025 AML law: registration, policies, training and monitoring, so you're ready when the inspector calls.",
    cards: [
      { title: "Up to Date", text: "Aligned with the 2025 AML law and regulations." },
      { title: "Practical Programmes", text: "Policies your team can actually follow." },
      { title: "Inspection Ready", text: "Records and evidence organised." },
    ],
    quoteTitle: "Request an AML",
    quoteText: "Tell us about your business activities, and we'll assess your AML obligations and send a proposal.",
  },

  included: [
    "DNFBP assessment",
    "goAML registration",
    "Risk assessment",
    "AML policy & procedures",
    "Staff training",
    "Ongoing compliance support",
  ],

  faqs: [
    { question: "Which law governs AML in the UAE?", answer: "Federal Decree-Law No. 10 of 2025, in force from 14 October 2025, with its implementing regulations under Cabinet Resolution No. 134 of 2025. It replaced the 2018 AML law." },
    { question: "What is a DNFBP?", answer: "A designated non-financial business or profession, such as a real estate agent, precious metals dealer, corporate service provider, accountant, auditor or lawyer, that must follow AML rules." },
    { question: "Is goAML registration mandatory?", answer: "Yes, for reporting entities including DNFBPs. goAML is the channel for filing suspicious transaction and activity reports with the UAE Financial Intelligence Unit." },
    { question: "Who supervises DNFBPs?", answer: "Most onshore DNFBPs are supervised by the Ministry of Economy. Lawyers and notaries are supervised by the Ministry of Justice, and financial free zones have their own regulators." },
    { question: "What are the main AML obligations?", answer: "Risk assessment, customer due diligence including beneficial ownership, sanctions screening, a designated compliance officer, monitoring, record-keeping, staff training and suspicious transaction reporting." },
    { question: "What are the penalties for non-compliance?", answer: "Administrative fines of up to AED 5 million per violation, possible licence action and, in serious cases, criminal penalties." },
  ],
};
