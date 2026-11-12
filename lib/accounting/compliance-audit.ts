import type { FreezoneData } from "@/lib/freezones/types";

export const complianceAudit: FreezoneData = {
  slug: "compliance-audit",
  category: "Accounting & Tax",
  name: "Compliance Audit Services in Dubai",
  shortName: "Compliance Audit",
  hero: {
    eyebrow: "Compliance Audit · Dubai",
    title: "Compliance Audit Services in Dubai",
    highlight: "How Well Do You Follow the Rules?",
    subtitle: "An independent check that your business meets the laws, regulations and contracts that apply to it, and where it could do better.",
    intro:
      "A compliance audit checks that your business follows the laws and regulations of your industry and keeps its contractual commitments. Afaq Al Khaleej carries out compliance audits to international auditing standards, with strict quality control and technology-assisted methods, tailored to the rules that apply to your sector.",
    chips: ["Regulatory compliance", "AML & financial crime", "Contract compliance", "Policy frameworks"],
    image: "/images/services/pro-government-services/hero-bg.jpg",
  },
  stats: [
    { value: "8", label: "Scope areas" },
    { value: "Sector-specific", label: "Rules reviewed" },
    { value: "Local & global", label: "Laws interpreted" },
    { value: "Holistic", label: "Controls-based approach" },
  ],

  about: {
    heading: "What Is a Compliance Audit?",
    body:
      "A compliance audit confirms that your day-to-day activities follow the rules, and banks or government bodies often ask for a compliance report. What's reviewed depends on your business. A financial institution might be audited on personal data, disaster recovery and data backup, while a healthcare provider might be reviewed on patient information, consent and health regulations. The UAE also has strict financial-compliance and anti-money-laundering (AML) rules that apply to businesses of every size.",
    location: { name: "Rules matched to your sector", area: "Financial · Healthcare · Trading · Services", image: "/images/services/company-formation/freezone.jpg" },
    features: [
      { icon: "licence", title: "Regulatory Adherence", text: "Industry laws and regulations checked." },
      { icon: "multiple", title: "Contract Compliance", text: "Contractual obligations reviewed." },
      { icon: "ownership", title: "AML Readiness", text: "Anti-money-laundering controls assessed." },
      { icon: "online", title: "Data Protection", text: "Personal data handling and backups reviewed." },
      { icon: "bank", title: "Lender & Regulator Reports", text: "Compliance reports for banks and authorities." },
      { icon: "award", title: "Reduced Penalties", text: "Gaps fixed before regulators find them." },
    ],
  },

  activities: {
    eyebrow: "Scope",
    heading: "Scope of a Compliance Audit in the UAE",
    intro: "Every business is different, but the laws and regulatory requirements apply to all of them.",
    groups: [
      { icon: "services", title: "Compliance Framework", text: "We create a compliance framework, or review the one you have.", tags: ["Framework"] },
      { icon: "licence", title: "Policies, Roles & Responsibilities", text: "We review existing policies and procedures, create new ones, and define roles and responsibilities.", tags: ["Policies", "Ownership"] },
      { icon: "multiple", title: "Laws & Regulations", text: "We help you interpret local and international laws and understand regulatory requirements.", tags: ["Interpretation"] },
      { icon: "activities", title: "Risk Assessment", text: "We identify compliance risks and help you mitigate them.", tags: ["Risk"], href: "/accounting/risk-management" },
      { icon: "ownership", title: "Compliance Management Review", text: "We review and test how compliance is monitored and controlled.", tags: ["Monitoring"] },
      { icon: "award", title: "Post-Compliance Support", text: "We review and support your compliance system after implementation.", tags: ["Ongoing"] },
    ],
  },

  process: {
    heading: "How We Conduct a Compliance Audit",
    intro: "A systematic approach covering financial, non-financial, ethical, environmental and regulatory areas.",
    steps: [
      { title: "Identify obligations", text: "Map the laws, regulations and contracts that apply to your business." },
      { title: "Review controls", text: "Assess the policies, procedures and internal controls that support compliance." },
      { title: "Test", text: "Check samples of activity against each requirement." },
      { title: "Report gaps", text: "Rate non-compliance by risk and recommend specific fixes." },
      { title: "Support & follow up", text: "Help you implement improvements and confirm they work." },
    ],
  },

  features: {
    eyebrow: "Why Afaq",
    heading: "Our Approach to Compliance Auditing",
    items: [
      { status: "yes", text: "Systematic: financial, non-financial, ethical, environmental and regulatory areas" },
      { status: "yes", text: "Holistic: built around your internal control system" },
      { status: "yes", text: "Aligned with your vision and objectives" },
      { status: "yes", text: "Simple, practical and sustainable results" },
      { status: "yes", text: "International auditing standards and strict quality control" },
      { status: "yes", text: "Technology-assisted methods for efficient reporting" },
    ],
  },

  tax: {
    eyebrow: "Benefits",
    heading: "What Regular Compliance Audits Deliver",
    paragraphs: ["Non-compliance can lead to fines, licence problems and reputational damage. Regular compliance audits help you avoid them while strengthening your business."],
    cards: [
      { value: "Controls", title: "Stronger Internal Controls", text: "Weak points identified and fixed." },
      { value: "Assets", title: "Asset Protection", text: "Less exposure to loss and misuse." },
      { value: "Brand", title: "Brand Reputation", text: "Trust from customers, banks and regulators." },
      { value: "Profit", title: "Revenue & Profitability", text: "Fewer penalties and disruptions." },
    ],
    tags: ["AML compliance", "UBO registration", "Corporate tax", "VAT"],
  },

  cost: {
    heading: "Compliance Audit Fees",
    intro:
      "Fees depend on your sector, the regulations in scope and the size of your organisation. Tell us what you need and we'll send a written proposal.",
    notes: ["Sector & regulator", "Regulations in scope", "Organisation size", "Locations", "Ongoing support"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Stay Compliant with",
    paragraph: "We go beyond a checklist, looking at your whole control environment so compliance supports your long-term success.",
    cards: [
      { title: "Sector Knowledge", text: "Reviews tailored to your industry's rules." },
      { title: "Up to Date", text: "We track regulatory and statutory changes." },
      { title: "Practical Fixes", text: "Clear actions that are easy to put in place." },
    ],
    quoteTitle: "Request a compliance",
    quoteText: "Tell us your sector and regulators, and we'll send a written proposal for a compliance audit.",
  },

  included: [
    "Obligations mapping",
    "Policy & procedure review",
    "Compliance testing",
    "Risk-rated findings",
    "Remediation plan",
    "Follow-up review",
  ],

  faqs: [
    { question: "What is a compliance audit?", answer: "A review of whether your business follows the laws, regulations and contractual obligations that apply to it, with recommendations to close any gaps." },
    { question: "Who asks for a compliance audit report?", answer: "Banks, regulators, government bodies and business partners often ask for one. Many companies also commission them voluntarily." },
    { question: "Does it differ by industry?", answer: "Yes. A financial institution focuses on areas like data protection and disaster recovery, while a healthcare provider focuses on patient information and health regulations." },
    { question: "Do AML rules apply to my business?", answer: "UAE anti-money-laundering rules apply widely, with extra obligations for regulated sectors such as financial services, real estate, precious metals dealers and corporate service providers. We can assess which obligations apply to you." },
    { question: "How is a compliance audit different from a financial audit?", answer: "A financial audit gives an opinion on the financial statements. A compliance audit checks adherence to laws, regulations, policies and contracts." },
    { question: "How often should we do one?", answer: "At least once a year, and whenever regulations change or your business enters a new activity or market." },
  ],
};
