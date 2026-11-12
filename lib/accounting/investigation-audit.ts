import type { FreezoneData } from "@/lib/freezones/types";

export const investigationAudit: FreezoneData = {
  slug: "investigation-audit",
  category: "Accounting & Tax",
  name: "Investigation Audit Services in Dubai",
  shortName: "Investigation Audit",
  hero: {
    eyebrow: "Investigation Audit · Dubai",
    title: "Investigation Audit Services in Dubai",
    highlight: "A Fresh Pair of Eyes on Your Accounts",
    subtitle: "Thorough investigations that follow the money, establish the facts and protect your business.",
    intro:
      "When fraud, money laundering or other unusual activity is suspected, your accounts, financial statements and business processes need a thorough investigation. Afaq Al Khaleej's investigation audits trace the movement of money and assets to gather evidence. That evidence identifies those responsible, measures the damage and supports any legal action that follows.",
    chips: ["Fraud investigation", "Whistleblower allegations", "Asset tracing", "Damage quantification"],
    image: "/images/services/business-consultancy/hero-bg.png",
  },
  stats: [
    { value: "8", label: "Types of irregularity" },
    { value: "6", label: "Investigation objectives" },
    { value: "Evidence-led", label: "Findings that hold up" },
    { value: "Confidential", label: "Discreet from day one" },
  ],

  about: {
    heading: "What Is an Investigation Audit?",
    body:
      "An investigation audit is a detailed examination carried out when an entity is suspected of fraud, money laundering, terrorist financing or other irregular activity. Rigorous procedures follow funds and assets to gather evidence. Once those involved are identified and enough evidence is collected, the findings can support disciplinary, civil or criminal proceedings, working with your legal advisers.",
    location: { name: "Following the money", area: "Funds and assets traced to source", image: "/images/services/digital-business-solutions/serving-customers-digitally.png" },
    features: [
      { icon: "activities", title: "Identify Those Involved", text: "Evidence that points to the individuals responsible." },
      { icon: "trading", title: "Assess the Damage", text: "The scale of the problem evaluated." },
      { icon: "bank", title: "Quantify Losses", text: "Financial impact measured precisely." },
      { icon: "licence", title: "Pinpoint the Activity", text: "The transactions in question isolated." },
      { icon: "ownership", title: "Prevent Further Harm", text: "Controls to stop it happening again." },
      { icon: "multiple", title: "Trace Assets", text: "Funds and assets followed to where they ended up." },
    ],
  },

  activities: {
    eyebrow: "What We Investigate",
    heading: "Services to Counter Fraudulent Activity",
    intro: "Each investigation is tailored to the allegation and the evidence available.",
    groups: [
      { icon: "services", title: "Corporate Irregularities", text: "Unusual transactions, adjustments or decisions that don't add up.", tags: ["Irregularities"] },
      { icon: "multiple", title: "Whistleblower Allegations", text: "Independent investigation of concerns raised by staff or third parties.", tags: ["Whistleblowing"] },
      { icon: "ownership", title: "Asset Misappropriation", text: "Theft or misuse of cash, stock or other company assets.", tags: ["Theft", "Misuse"] },
      { icon: "licence", title: "Regulatory Violations & Suspicious Transactions", text: "Breaches of regulations, and transactions that may indicate money laundering.", tags: ["AML", "Regulatory"] },
      { icon: "trading", title: "Financial Reporting Fraud", text: "Deliberate misstatement of results or financial position.", tags: ["Misstatement"] },
      { icon: "bank", title: "Bribery, Corruption & Conflicts", text: "Improper payments and undisclosed business relationships.", tags: ["Bribery", "Conflicts"] },
    ],
  },

  process: {
    heading: "How an Investigation Works",
    intro: "A careful, evidence-led approach handled with complete discretion.",
    cautionTitle: "Protect the evidence & your obligations",
    caution: "Preserve records and devices, limit who knows about the investigation and take legal advice early. Where money laundering is suspected, regulated businesses may have to file a suspicious transaction report with the UAE Financial Intelligence Unit, and must not tip off the people involved.",
    steps: [
      { title: "Confidential briefing", text: "We understand the allegation, the people involved and what's at stake." },
      { title: "Plan & preserve", text: "Scope agreed, and relevant records and data secured." },
      { title: "Investigate", text: "Transactions traced, documents examined and, where appropriate, interviews held." },
      { title: "Quantify & report", text: "Losses measured and findings documented in a clear report." },
      { title: "Support action", text: "Help with legal proceedings, recovery and stronger controls." },
    ],
  },

  features: {
    eyebrow: "Warning Signs",
    heading: "When to Consider an Investigation",
    items: [
      { status: "warn", text: "A whistleblower raises a concern" },
      { status: "warn", text: "Unexplained cash or stock losses" },
      { status: "warn", text: "Payments to unknown or related suppliers" },
      { status: "warn", text: "Results that don't match operating reality" },
      { status: "warn", text: "Unusual transactions with high-risk parties" },
      { status: "warn", text: "Regulator or bank inquiries" },
    ],
  },

  cost: {
    heading: "Investigation Fees",
    intro:
      "Every investigation is scoped individually. After a confidential briefing we send a written proposal with the scope, approach and fees.",
    notes: ["Nature of allegation", "Periods covered", "Volume of records", "People & entities involved", "Reporting needs"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Get to the Truth with",
    paragraph: "Discreet, thorough and evidence-based investigations that give you the facts and a clear path forward.",
    cards: [
      { title: "Discretion", text: "Sensitive matters handled confidentially." },
      { title: "Evidence-Based", text: "Findings documented to stand up to scrutiny." },
      { title: "Prevention", text: "Recommendations to stop it happening again." },
    ],
    quoteTitle: "Book a confidential",
    quoteText: "Tell us what you suspect, and we'll arrange a confidential briefing and a scoped proposal.",
  },

  included: [
    "Confidential briefing",
    "Evidence preservation",
    "Transaction & asset tracing",
    "Loss quantification",
    "Investigation report",
    "Control recommendations",
  ],

  faqs: [
    { question: "What is an investigation audit?", answer: "A detailed examination of accounts, transactions and processes when fraud, money laundering or other irregular activity is suspected. It traces funds and assets to gather evidence." },
    { question: "How is it different from a regular audit?", answer: "A regular audit tests samples to form an opinion on financial statements. An investigation targets a specific suspicion and examines every relevant transaction in depth." },
    { question: "Can the findings be used in court?", answer: "Investigation findings can support disciplinary, civil or criminal proceedings. We work alongside your legal advisers so evidence is gathered and documented properly." },
    { question: "What if money laundering is suspected?", answer: "Regulated businesses may be required to report suspicious transactions to the UAE Financial Intelligence Unit and must not alert the people involved. Take legal advice promptly." },
    { question: "Is the investigation confidential?", answer: "Yes. Investigations are handled discreetly, with access to information limited to those who need it." },
    { question: "How is this related to forensic accounting?", answer: "Investigation audits use forensic accounting techniques. See our forensic accounting service for litigation support and wider forensic work." },
  ],
};
