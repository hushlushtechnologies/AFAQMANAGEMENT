import type { FreezoneData } from "@/lib/freezones/types";

export const ifrsCompliance: FreezoneData = {
  slug: "ifrs-compliance",
  category: "Accounting & Tax",
  name: "IFRS Compliance Services in Dubai",
  shortName: "IFRS Compliance",
  hero: {
    eyebrow: "IFRS Advisory · UAE",
    title: "IFRS Compliance Services in Dubai",
    highlight: "Reporting to Global Standards",
    subtitle: "We make sure your accounting and financial reporting follow International Financial Reporting Standards.",
    intro:
      "Keeping up with changing reporting requirements while staying focused on your core business is a real challenge. Afaq Al Khaleej is a reliable partner for the complexity and workload of IFRS. We provide tailored solutions based on your specific requirements and priorities.",
    chips: ["IFRS conversion", "Full IFRS & IFRS for SMEs", "Segment reporting (IFRS 8)", "Standard-specific advice"],
    image: "/images/services/company-formation.png",
  },
  stats: [
    { value: "IFRS", label: "Required for UAE reporting" },
    { value: "IFRS for SMEs", label: "Option for eligible businesses" },
    { value: "IFRS 18", label: "New presentation rules from 2027" },
    { value: "Tailored", label: "Solutions for your structure" },
  ],

  about: {
    heading: "What Is IFRS?",
    body:
      "International Financial Reporting Standards (IFRS) are the global accounting standards issued by the IASB, now required or permitted in most countries. In the UAE, companies prepare their financial statements under IFRS, and corporate tax uses IFRS-based accounting profit as the starting point for taxable income. Eligible smaller businesses may use IFRS for SMEs. Applying the standards correctly takes specialist knowledge, especially when your structure or transactions are complex.",
    location: { name: "One global reporting language", area: "Comparable across borders", image: "/images/why-afaq/multi-industry-networks.png" },
    features: [
      { icon: "licence", title: "Compliance", text: "Statements that meet UAE legal and regulatory needs." },
      { icon: "tax", title: "Corporate Tax Base", text: "IFRS profit is the starting point for taxable income." },
      { icon: "multiple", title: "Global Comparability", text: "Investors and lenders understand IFRS statements." },
      { icon: "bank", title: "Easier Financing", text: "Banks expect IFRS-compliant reporting." },
      { icon: "activities", title: "Fewer Audit Issues", text: "Correct treatment avoids audit adjustments." },
      { icon: "services", title: "Expert Support", text: "Complex issues resolved by specialists." },
    ],
  },

  activities: {
    eyebrow: "Our Services",
    heading: "IFRS Services We Provide",
    intro: "Support for full adoption or for specific standards, matched to your structure and priorities.",
    groups: [
      { icon: "online", title: "IFRS Conversion", text: "Move from local or management accounting to full IFRS or IFRS for SMEs, including opening balance adjustments.", tags: ["Transition", "IFRS 1"] },
      { icon: "licence", title: "IFRS Financial Statements", text: "Preparation of complete IFRS financial statements with notes and disclosures.", tags: ["Statements", "Disclosures"] },
      { icon: "trading", title: "Segment Reporting", text: "Operating segment identification and disclosure under IFRS 8.", tags: ["IFRS 8"] },
      { icon: "bank", title: "Standard-Specific Advice", text: "Revenue (IFRS 15), leases (IFRS 16), financial instruments (IFRS 9), impairment (IAS 36) and more.", tags: ["IFRS 15", "IFRS 16", "IFRS 9"] },
      { icon: "activities", title: "IFRS Gap Analysis", text: "A review of your current reporting against IFRS, with a clear action plan.", tags: ["Health check"] },
      { icon: "services", title: "New Standards Readiness", text: "Preparation for upcoming changes, such as IFRS 18 on presentation and disclosure from 2027.", tags: ["IFRS 18"] },
    ],
  },

  process: {
    heading: "How We Help You Comply",
    intro: "A structured approach that fits around your business.",
    steps: [
      { title: "Understand your reporting", text: "We review your business, structure, systems and current accounting policies." },
      { title: "Identify gaps", text: "Differences from IFRS are identified and their impact assessed." },
      { title: "Design solutions", text: "We agree accounting policies, adjustments and disclosures with you." },
      { title: "Implement", text: "Statements and supporting schedules are prepared or updated." },
      { title: "Support the audit", text: "We explain treatments to your auditors and help resolve queries." },
    ],
  },

  features: {
    eyebrow: "Common Challenges",
    heading: "Where Companies Need IFRS Help",
    items: [
      { status: "warn", text: "Revenue recognition on contracts and bundled sales" },
      { status: "warn", text: "Leases brought onto the balance sheet" },
      { status: "warn", text: "Expected credit losses on receivables" },
      { status: "warn", text: "Impairment of assets and goodwill" },
      { status: "warn", text: "Group consolidation and intercompany balances" },
      { status: "warn", text: "Segment disclosures for diversified businesses" },
    ],
  },

  cost: {
    heading: "IFRS Advisory Fees",
    intro:
      "Fees depend on the scope of work and how complex your transactions are. Tell us what you need and we'll send a written proposal.",
    notes: ["Scope of work", "Group structure", "Transaction complexity", "Number of standards", "Deadline"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Get IFRS Right with",
    paragraph: "Trust holds a business relationship together. We earn it through transparency, practical expertise and solutions built around your needs.",
    cards: [
      { title: "IFRS Expertise", text: "Experience with complex issues across many structures." },
      { title: "Tailor-Made", text: "Solutions shaped by your requirements and priorities." },
      { title: "Transparent", text: "Clear explanations of every treatment and adjustment." },
    ],
    quoteTitle: "Request an IFRS",
    quoteText: "Tell us about your reporting needs, and we'll send a written proposal for IFRS support.",
  },

  included: [
    "IFRS gap analysis",
    "Accounting policy design",
    "Adjustment schedules",
    "IFRS financial statements",
    "Disclosure notes",
    "Auditor liaison",
  ],

  faqs: [
    { question: "What is IFRS?", answer: "International Financial Reporting Standards, the global accounting standards issued by the International Accounting Standards Board (IASB) and used in most countries." },
    { question: "Is IFRS mandatory in the UAE?", answer: "UAE companies are generally expected to prepare financial statements under IFRS, and corporate tax rules rely on IFRS-based statements. Eligible smaller businesses may use IFRS for SMEs." },
    { question: "What is IFRS for SMEs?", answer: "A simplified version of IFRS for entities without public accountability. Under UAE corporate tax rules, businesses with revenue below AED 50 million may use it." },
    { question: "What is segment reporting?", answer: "Under IFRS 8, certain entities disclose financial information for each operating segment, such as product lines or regions, as reviewed by top management." },
    { question: "What is IFRS 18?", answer: "A new standard replacing IAS 1 that changes how the income statement is presented and adds new disclosures. It's effective for annual periods beginning on or after 1 January 2027." },
    { question: "Can you help us convert to IFRS?", answer: "Yes. We assess differences, agree accounting policies, calculate transition adjustments and prepare IFRS financial statements." },
  ],
};
