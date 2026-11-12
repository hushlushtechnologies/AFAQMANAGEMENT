import type { FreezoneData } from "@/lib/freezones/types";

// TODO(client): confirm how legal services are delivered (in-house licensed legal consultants vs partner law firm).
// Court litigation in the UAE requires licensed advocates — copy avoids claiming in-house litigation until confirmed.
// TODO(images): hero + location reuse images (financial-statement-audit / mainland dubai) — replace when available.

export const legalServices: FreezoneData = {
  slug: "legal-services",
  category: "Business Support",
  name: "Legal Services in UAE",
  shortName: "Legal Services",
  hero: {
    eyebrow: "Business Support · Legal · UAE",
    title: "Legal Services in UAE",
    highlight: "Practical Legal Support for Your Business",
    subtitle: "Contract drafting, legal advice, IP protection and document attestation, all under one roof with your business setup and accounting.",
    intro:
      "Afaq Al Khaleej is a one-stop shop for your business needs. Alongside business setup, consulting and accounting, we provide legal support: drafting and reviewing agreements, resolutions and powers of attorney, and advice on compliance, intellectual property, labour and immigration matters.",
    chips: ["Contract drafting", "Legal advisory", "IP registration", "Attestations"],
    image: "/images/services/feasibility-studies.png",
  },
  stats: [
    { value: "4", label: "Core legal service areas" },
    { value: "UAE & worldwide", label: "IP protection" },
    { value: "Multilingual", label: "Team" },
    { value: "One-stop", label: "Legal, setup & accounting" },
  ],

  about: {
    heading: "Legal Support for UAE Businesses",
    body:
      "Our legal support team helps with both strategic transactions and day-to-day issues. We work closely with each client so the solution fits their legal and business needs. Where a matter needs court representation, we coordinate with licensed UAE advocates.",
    location: { name: "Legal & business, connected", area: "Mainland, free zone & offshore companies", image: "/images/services/business-consultancy/corporate-structuring.png" },
    features: [
      { icon: "licence", title: "Agreements & MOUs", text: "Drafted and reviewed to protect your interests." },
      { icon: "multiple", title: "Employment Contracts", text: "Compliant with UAE labour law." },
      { icon: "services", title: "Legal Opinions", text: "Clear advice on the laws that affect you." },
      { icon: "award", title: "Intellectual Property", text: "Trademarks, patents and copyright." },
      { icon: "online", title: "Attestations", text: "Documents legalised for use abroad." },
      { icon: "ownership", title: "Corporate Structuring", text: "Incorporation, restructuring and re-domiciliation." },
    ],
  },

  activities: {
    eyebrow: "Our Legal Services",
    heading: "How We Can Help",
    intro: "Legal support across your business's most common needs.",
    groups: [
      { icon: "services", title: "Legal Advisory & Consultation", text: "Advice on UAE laws, legal opinions and review of documents and agreements.", tags: ["Advisory"] },
      { icon: "licence", title: "Drafting & Vetting", text: "Agreements, MOUs, resolutions, powers of attorney and employment contracts.", tags: ["Contracts"] },
      { icon: "ownership", title: "Corporate Matters", text: "Corporate structuring, restructuring, incorporation and re-domiciliation of foreign entities.", tags: ["Corporate"] },
      { icon: "award", title: "IP Consultation & Registration", text: "Registering trademarks, patents and copyright in the UAE and worldwide, plus brand management advice.", tags: ["Trademark", "Patent"], href: "/business-support/trademark-registration" },
      { icon: "multiple", title: "Labour & Immigration", text: "Advice on employment and immigration matters.", tags: ["Labour law"] },
      { icon: "online", title: "Attestation & Legalisation", text: "Embassy, ministry and chamber attestation of personal and company documents for use abroad.", tags: ["Attestation"] },
    ],
  },

  process: {
    heading: "How We Work",
    intro: "Clear, practical legal support from first contact to final document.",
    steps: [
      { title: "Understand your needs", text: "We discuss your situation and objectives." },
      { title: "Advise", text: "Clear guidance on the legal position and your options." },
      { title: "Draft or review", text: "Documents prepared or vetted to protect your interests." },
      { title: "Finalise", text: "Execution, notarisation or attestation as required." },
      { title: "Ongoing support", text: "Help as your business and legal needs change." },
    ],
  },

  documents: {
    heading: "Documents We Help Attest",
    image: "/images/services/business-consultancy/market-research.png",
    intro: "Personal and company documents for use outside the UAE.",
    items: [
      "Passports and IDs",
      "Powers of attorney",
      "Application forms",
      "Company documents such as licences, MOAs and resolutions",
      "Educational and personal certificates",
    ],
  },

  features: {
    eyebrow: "Why It Matters",
    heading: "Benefits of Proper Legal Support",
    items: [
      { status: "yes", text: "Contracts that protect your interests" },
      { status: "yes", text: "Compliance with UAE laws and regulations" },
      { status: "yes", text: "Protected brands and intellectual property" },
      { status: "yes", text: "Fewer disputes through clear documentation" },
      { status: "yes", text: "Documents accepted abroad first time" },
    ],
  },

  cost: {
    heading: "Legal Services Fees",
    intro:
      "Fees depend on the type of document or advice and its complexity. Tell us what you need and we'll send a quote.",
    notes: ["Type of document", "Complexity", "Languages", "Attestation steps", "Ongoing support"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Get Legal Support from",
    paragraph: "A progressive approach and modern tools, combined with our business setup and accounting expertise, so your legal, corporate and financial matters fit together.",
    cards: [
      { title: "One-Stop Shop", text: "Legal, setup and accounting together." },
      { title: "Multilingual Team", text: "Clear communication in your language." },
      { title: "Practical Advice", text: "Solutions that fit your business." },
    ],
    quoteTitle: "Request a legal",
    quoteText: "Tell us what you need drafted, reviewed or advised on, and we'll send a quote.",
  },

  included: [
    "Initial consultation",
    "Legal advice",
    "Drafting & review",
    "Attestation coordination",
    "IP registration support",
    "Follow-up support",
  ],

  faqs: [
    { question: "What legal services do you offer?", answer: "Legal advice, contract drafting and review, corporate structuring support, IP registration, labour and immigration advice, and document attestation." },
    { question: "Can you draft employment contracts?", answer: "Yes. We draft and review employment contracts in line with UAE labour law." },
    { question: "Do you handle court cases?", answer: "Court representation in the UAE requires licensed advocates. We coordinate with licensed lawyers where litigation is needed." },
    { question: "Can you register trademarks outside the UAE?", answer: "Yes. We can help protect your trademarks, patents and copyright in the UAE and worldwide." },
    { question: "What is document attestation?", answer: "Legalising documents through notaries, ministries, chambers and embassies so they're recognised in another country." },
  ],
};
