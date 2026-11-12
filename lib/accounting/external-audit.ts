import type { FreezoneData } from "@/lib/freezones/types";

// TODO(client): confirm Afaq's auditor registration (Ministry of Economy / free zones)
// or partner audit firm before claiming to sign statutory audit reports.

export const externalAudit: FreezoneData = {
  slug: "external-audit",
  category: "Accounting & Tax",
  name: "External Audit Services in Dubai",
  shortName: "External Audit",
  hero: {
    eyebrow: "External Audit · Dubai",
    title: "External Audit Services in Dubai",
    highlight: "Independent Assurance on Your Statements",
    subtitle: "Independent audits carried out with integrity, helping you meet growing demands for disclosure and accountability.",
    intro:
      "An external audit, also called a financial or statutory audit, is an independent examination of the annual financial statements prepared by your management. Afaq Al Khaleej's audit team forms an opinion on whether those statements give a true and fair view, which matters to regulators, banks, shareholders and anyone else who relies on them.",
    chips: ["International Standards on Auditing", "IFAC Code of Ethics", "IFRS framework", "Reasonable assurance"],
    image: "/images/services/company-formation/business-consultancy.png",
  },
  stats: [
    { value: "ISA", label: "Audit standards followed" },
    { value: "IFRS", label: "Reporting framework" },
    { value: "Reasonable", label: "Level of assurance" },
    { value: "10", label: "Industries served" },
  ],

  about: {
    heading: "What Is an External Audit?",
    body:
      "The auditor gives reasonable assurance that your financial statements are prepared under the applicable framework, usually IFRS. Reasonable assurance is a high level of assurance, but not absolute, because every audit has inherent limits. The audit report goes to authorities, banks and shareholders, and to the public for listed companies. Audits are performed under International Standards on Auditing and the IFAC Code of Ethics, in line with UAE laws and regulations.",
    location: { name: "Assurance you can rely on", area: "Independent · Objective · Ethical", image: "/images/why-afaq/transparent-approach.png" },
    features: [
      { icon: "licence", title: "Accurate & Complete", text: "Statements and records free of material misstatement." },
      { icon: "services", title: "Right Framework", text: "Prepared under the applicable reporting framework." },
      { icon: "award", title: "True & Fair View", text: "A fair picture of your position and profitability." },
      { icon: "bank", title: "Lender Confidence", text: "Audited statements support financing and credit." },
      { icon: "multiple", title: "Business Credibility", text: "Partners and customers trust audited figures." },
      { icon: "ownership", title: "Independence", text: "An objective view, free of management influence." },
    ],
  },

  activities: {
    eyebrow: "Our Approach",
    heading: "How We Carry Out Your Audit",
    intro: "We assess audit risk, perform detailed procedures, gather evidence and form our opinion, applying professional scepticism and due care throughout.",
    groups: [
      { icon: "activities", title: "Risk Assessment", text: "We identify where material misstatement is most likely and focus our work there.", tags: ["Audit risk"] },
      { icon: "services", title: "Controls Review", text: "We assess internal controls, IT systems, purchasing, sales and other key processes for weaknesses that could allow fraud or error.", tags: ["Internal controls", "IT"] },
      { icon: "trading", title: "Sample Testing", text: "Statistically selected samples across departments and account classes are tested for completeness and accuracy.", tags: ["Sampling"] },
      { icon: "office", title: "Stock Counts & Asset Verification", text: "We attend stock counts and verify assets in the financial statements. Where judgement is needed, specialists can assess value and impairment.", tags: ["Inventory", "Impairment"] },
      { icon: "bank", title: "Third-Party Confirmations", text: "Balances are confirmed directly with banks, customers and suppliers.", tags: ["Confirmations"] },
      { icon: "licence", title: "Opinion & Reporting", text: "We issue the audit report and a management letter on any control weaknesses we find.", tags: ["Audit report", "Management letter"] },
    ],
    lists: [
      {
        title: "Industries we audit",
        items: ["Banks & financial institutions", "Healthcare", "Agriculture", "Tourism & transportation", "Hotels & hospitality", "Manufacturing", "Real estate & construction", "Information technology", "Trading & logistics", "Legal & professional services"],
      },
    ],
  },

  process: {
    heading: "The External Audit Process",
    intro: "A clear sequence from planning to the final report.",
    cautionTitle: "Reasonable, not absolute, assurance",
    caution: "Audits use sampling and judgement, so they can't detect every error or fraud. Management remains responsible for preparing the financial statements and maintaining internal controls.",
    steps: [
      { title: "Planning", text: "Understand your business, agree scope and timetable, and assess risks." },
      { title: "Controls & systems", text: "Evaluate internal controls and key processes." },
      { title: "Substantive testing", text: "Test samples, confirm balances, attend stock counts and verify assets." },
      { title: "Completion", text: "Review subsequent events, going concern and disclosures." },
      { title: "Reporting", text: "Issue the audit opinion and management letter, and discuss them with you." },
    ],
  },

  features: {
    eyebrow: "Why It Matters",
    heading: "Why the Right Auditor Matters",
    items: [
      { status: "yes", text: "Audited statements show your company's real worth" },
      { status: "yes", text: "Banks rely on them when assessing loans" },
      { status: "yes", text: "Partners and investors use them to decide whether to work with you" },
      { status: "yes", text: "Free zones and corporate tax rules may require them" },
      { status: "yes", text: "Control weaknesses are identified and reported" },
      { status: "yes", text: "A credible audit firm adds weight to your statements" },
    ],
  },

  cost: {
    heading: "External Audit Fees",
    intro:
      "Fees depend on your size, complexity and how ready your records are. Share your licensing authority, year-end and last year's figures, and we'll send a written proposal.",
    notes: ["Revenue & volume", "Industry", "Number of entities", "Stock & asset complexity", "Record readiness"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Trust Your Annual Audit to",
    paragraph: "A thorough review of every area of your business, carried out with integrity, objectivity and professionalism, so you can be reasonably assured your financial statements are free of material misstatement.",
    cards: [
      { title: "Standards-Based", text: "ISA procedures and the IFAC Code of Ethics." },
      { title: "Thorough Coverage", text: "Controls, processes, stock and assets examined." },
      { title: "Clear Reporting", text: "Opinion and recommendations explained to management." },
    ],
    quoteTitle: "Request an audit",
    quoteText: "Tell us your licensing authority, year-end and reporting deadline, and we'll send a written audit proposal.",
  },

  included: [
    "Audit planning & risk assessment",
    "Internal control evaluation",
    "Sample testing",
    "Stock count & asset verification",
    "Audit report",
    "Management letter",
  ],

  faqs: [
    { question: "What is an external audit?", answer: "An independent examination of your annual financial statements that results in an opinion on whether they give a true and fair view under the applicable framework." },
    { question: "Is an external audit the same as a statutory audit?", answer: "Generally, yes. A statutory audit is an external audit required by law or by your licensing authority." },
    { question: "Who uses the audit report?", answer: "Government and free zone authorities, banks, shareholders and investors, and the public for listed companies." },
    { question: "What does reasonable assurance mean?", answer: "A high, but not absolute, level of assurance. Audits rely on sampling and judgement, so they can't guarantee that every error has been found." },
    { question: "Which standards do you follow?", answer: "International Standards on Auditing (ISA) and the IFAC Code of Ethics, alongside UAE laws and regulations. Financial statements are assessed against IFRS or the applicable framework." },
    { question: "Will you attend our stock count?", answer: "Yes. Where stock is material we attend the count and verify assets, and bring in specialists where valuation needs expert judgement." },
    { question: "Can my bookkeeper also be my auditor?", answer: "No. Independence rules mean the firm that keeps your books shouldn't audit them. We can recommend the right arrangement for you." },
  ],
};
