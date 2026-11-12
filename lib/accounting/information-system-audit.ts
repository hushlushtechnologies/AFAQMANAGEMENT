import type { FreezoneData } from "@/lib/freezones/types";

export const informationSystemAudit: FreezoneData = {
  slug: "information-system-audit",
  category: "Accounting & Tax",
  name: "Information System Audit Services in UAE",
  shortName: "Information System Audit",
  hero: {
    eyebrow: "IT & Information System Audit · UAE",
    title: "Information System Audit Services in UAE",
    highlight: "Are Your IT Controls Good Enough?",
    subtitle: "How well protected are you against internal and external threats? We review your IT controls, security and systems to find out.",
    intro:
      "Technology runs every business, so auditing IT infrastructure and security matters whatever your size or sector. Afaq Al Khaleej's information system audits assess your systems against recognised standards and frameworks. They give you a clear view of your current IT environment, improve transparency and help you fix weaknesses before they're exploited.",
    chips: ["IT general controls", "Data security", "Disaster recovery", "IT governance"],
    image: "/images/services/digital-business-solutions/custom-software.png",
  },
  stats: [
    { value: "CIA", label: "Confidentiality · Integrity · Availability" },
    { value: "4 steps", label: "Risk-based audit approach" },
    { value: "All platforms", label: "Technology covered" },
    { value: "Any sector", label: "Businesses served" },
  ],

  about: {
    heading: "Why an Information System Audit Matters",
    body:
      "An IT audit checks that the information your systems produce is reliable enough for decisions, and that the controls over your IT environment work. We assess your systems against recognised frameworks such as COBIT and ISO/IEC 27001. Our work can support your external auditors, strengthen your internal audit function or give independent advice to executive management. We identify the risks, assess how well your processes work and help you plan the fixes.",
    location: { name: "Your IT environment, reviewed", area: "Infrastructure · Applications · Data", image: "/images/services/digital-business.png" },
    features: [
      { icon: "ownership", title: "Reduced Risk", text: "Threats to confidentiality, integrity and availability addressed." },
      { icon: "licence", title: "Secure Data", text: "Weak designs strengthened to protect your data." },
      { icon: "trading", title: "System Evaluation", text: "Confirms you're investing in the right systems." },
      { icon: "services", title: "IT Governance", text: "Policies, laws and regulations followed across IT." },
      { icon: "online", title: "Reliable Information", text: "System outputs you can trust for decisions." },
      { icon: "bank", title: "Business Continuity", text: "Contingency and disaster recovery plans tested." },
    ],
  },

  activities: {
    eyebrow: "What We Review",
    heading: "Areas Covered by an IT Audit",
    intro: "Scope is tailored to your systems, sector and risk profile.",
    groups: [
      { icon: "ownership", title: "Access & Security Controls", text: "User access, passwords, privileged accounts and network security.", tags: ["Access", "Security"] },
      { icon: "online", title: "Application Controls", text: "Input, processing and output controls in key business systems.", tags: ["ERP", "Accounting"] },
      { icon: "licence", title: "Change Management", text: "How changes to programs and data are approved, tested and recorded.", tags: ["Change control"] },
      { icon: "bank", title: "Backup & Disaster Recovery", text: "Contingency plans, backups and recovery testing.", tags: ["Continuity"] },
      { icon: "services", title: "IT Governance & Policies", text: "Standardisation, IT policies and compliance with data protection law.", tags: ["Governance", "Data protection"] },
      { icon: "activities", title: "Process Control & Efficiency", text: "System process controls and how well systems support the business.", tags: ["Efficiency"] },
    ],
  },

  process: {
    heading: "Our Information System Audit Process",
    intro: "A risk-based approach led by professionals experienced in information system issues.",
    steps: [
      { title: "Measure vulnerability", text: "Assess how vulnerable each application is. The higher the risk of misuse, the deeper the audit." },
      { title: "Identify threat sources", text: "Identify who could pose a threat, from staff with system access such as data entry and IT administrators to external attackers." },
      { title: "Find high-risk points", text: "Locate the points and events where systems could be compromised, such as changes to data or program files." },
      { title: "Test for misuse", text: "Audit the high-risk points and the most vulnerable applications for signs of abuse." },
      { title: "Report & remediate", text: "Findings, risk ratings and remedial measures agreed with management." },
    ],
  },

  features: {
    eyebrow: "What You Gain",
    heading: "Benefits of Working with Afaq Al Khaleej",
    items: [
      { status: "yes", text: "Standardised IT processes" },
      { status: "yes", text: "Improved business efficiency" },
      { status: "yes", text: "Stronger system process controls" },
      { status: "yes", text: "Tested contingency and disaster recovery plans" },
      { status: "yes", text: "Information managed through the right systems" },
      { status: "yes", text: "Reliable data for decision-making" },
    ],
  },

  cost: {
    heading: "Information System Audit Fees",
    intro:
      "Fees depend on the systems in scope, the number of locations and how complex your IT environment is. Tell us what you need and we'll send a written proposal.",
    notes: ["Systems in scope", "Users & locations", "Cloud vs on-premise", "Regulatory needs", "Remediation support"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Secure Your Systems with",
    paragraph: "A qualified team that understands both technology and business risk, working across sectors and platforms to protect your sensitive data.",
    cards: [
      { title: "Framework-Based", text: "Assessed against recognised IT standards." },
      { title: "Risk-Focused", text: "Effort directed at your highest-risk systems." },
      { title: "Practical Remedies", text: "Clear actions to close the gaps." },
    ],
    quoteTitle: "Request an IT",
    quoteText: "Tell us about your systems and concerns, and we'll send a written proposal for an information system audit.",
  },

  included: [
    "IT risk assessment",
    "Access & security review",
    "Application controls testing",
    "Backup & DR review",
    "Risk-rated report",
    "Remediation plan",
  ],

  faqs: [
    { question: "What is an information system audit?", answer: "A review of your IT controls, security and systems to check that data is protected and that the information your systems produce is reliable." },
    { question: "Which frameworks do you use?", answer: "We draw on recognised frameworks such as COBIT and ISO/IEC 27001, adapted to your size and sector." },
    { question: "Is this the same as penetration testing?", answer: "No. An IT audit reviews controls, policies and processes. Penetration testing simulates attacks to find technical weaknesses. They complement each other." },
    { question: "Does it help our external audit?", answer: "Yes. External auditors rely on IT general controls, and a strong IT audit can make the financial audit smoother." },
    { question: "Does it cover data protection compliance?", answer: "We review how personal data is handled and protected, which supports your compliance with UAE data protection requirements." },
    { question: "How often should we have one?", answer: "At least once a year, and after major system changes, migrations or security incidents." },
  ],
};
