import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero + location reuse images (outsource-accounting / accountant-secondment) — replace when available.
// TODO(client): confirm whether Afaq is a registered agent / corporate service provider in DIFC, ADGM or RAK ICC
// (registration in these jurisdictions generally runs through licensed service providers).
// Legal-protection wording deliberately hedged — outcomes depend on facts and the laws involved.

export const uaeFoundation: FreezoneData = {
  slug: "uae-foundation",
  category: "Business Support",
  name: "UAE Foundation Setup",
  shortName: "UAE Foundation",
  hero: {
    eyebrow: "Business Support · Wealth Structuring · UAE",
    title: "Set Up a UAE Foundation",
    highlight: "Preserve, Control & Transfer Your Wealth",
    subtitle: "A separate legal structure to hold, manage and pass on your assets, available in DIFC, ADGM and RAK ICC.",
    intro:
      "Building wealth takes decades, and protecting it deserves careful planning. A UAE foundation is a legal entity, separate from you, that holds assets for chosen beneficiaries under rules you set. It has no shareholders and offers strong privacy. Afaq Al Khaleej helps founders, investors and families choose the right jurisdiction and set up their foundation.",
    chips: ["Asset protection", "Succession planning", "DIFC · ADGM · RAK ICC", "Philanthropy"],
    image: "/images/investment-opportunities/potential-hero.png",
  },
  stats: [
    { value: "3", label: "Foundation jurisdictions" },
    { value: "0", label: "Shareholders" },
    { value: "Founder-led", label: "Rules set in the charter" },
    { value: "Weeks", label: "Typical setup time" },
  ],

  about: {
    heading: "What Is a UAE Foundation?",
    body:
      "A UAE foundation is a separate legal entity created by a founder to hold, manage and distribute assets for designated beneficiaries. The founder sets its purpose. A council manages the assets according to the founder's documented instructions. Beneficiaries benefit as set out in the charter. Because the foundation owns its assets in its own right, they're held separately from the founder's personal estate.",
    location: { name: "Your wealth, structured", area: "For founders, investors & families", image: "/images/investment-opportunities/partner-mindset.png" },
    features: [
      { icon: "ownership", title: "Asset Protection", text: "Assets held separately from your personal estate." },
      { icon: "multiple", title: "Succession Planning", text: "Controlled transfer of wealth to future generations." },
      { icon: "award", title: "Philanthropy", text: "Charitable giving within a recognised framework." },
      { icon: "services", title: "Founder Control", text: "You define beneficiaries, distributions and purpose." },
      { icon: "bank", title: "Holds Many Assets", text: "Property, shares, IP, cash and investments." },
      { icon: "licence", title: "Privacy", text: "Strong confidentiality provisions." },
    ],
  },

  activities: {
    eyebrow: "Why the UAE",
    heading: "Why Set Up a Foundation in the UAE?",
    intro: "Strong legal frameworks, international financial infrastructure and no personal income tax make the UAE a leading wealth hub.",
    groups: [
      { icon: "ownership", title: "Protection Under Pressure", text: "A foundation's separate legal personality can help protect assets from personal liabilities and disputes, and support your succession wishes.", tags: ["Ring-fencing"] },
      { icon: "services", title: "Complete Control", text: "You decide who benefits, how and when assets are distributed, and the long-term purpose.", tags: ["Charter"] },
      { icon: "bank", title: "One Structure for Your Portfolio", text: "Hold real estate, company shares, IP, cash and financial instruments in a single vehicle.", tags: ["Consolidation"] },
      { icon: "licence", title: "Privacy", text: "Confidentiality provisions protect founders from unwanted public disclosure of wealth.", tags: ["Confidential"] },
    ],
  },

  compare: {
    eyebrow: "Choose a Jurisdiction",
    heading: "DIFC, ADGM or RAK ICC?",
    intro: "Each jurisdiction has its own regulations and suits a different profile.",
    columns: ["Factor", "DIFC", "ADGM", "RAK ICC"],
    rows: [
      { cells: ["Legal framework", "DIFC common-law based legislation", "English common law applies directly", "RAK ICC Foundations Regulations"] },
      { cells: ["Best for", "Global investors and international portfolios", "Complex, multi-layered portfolios", "Cost-conscious asset holding"] },
      { cells: ["Cost level", "Premium", "Premium", "More affordable"] },
      { cells: ["Registration speed", "Moderate", "Moderate", "Generally faster"] },
      { cells: ["Privacy", "Strong", "Strong", "Strong"] },
    ],
    footnote: "Not sure which suits you? We'll match your assets and goals to the right jurisdiction.",
  },

  process: {
    heading: "How to Set Up a UAE Foundation",
    intro: "A clear five-step process, usually completed within a few weeks depending on the jurisdiction and how ready your documents are.",
    cautionTitle: "Source of wealth",
    caution: "Incomplete source-of-wealth documentation is the most common cause of delays. We review everything before submission.",
    steps: [
      { title: "Define the structure", text: "Purpose, founder, council members and beneficiaries." },
      { title: "Draft the documents", text: "The charter (purpose and governance) and by-laws (day-to-day operation)." },
      { title: "Submit the application", text: "File with the registrar, including IDs, proof of address and source-of-wealth documents." },
      { title: "Registrar approval", text: "The foundation is registered once the review is complete." },
      { title: "Open a bank account", text: "A dedicated account keeps foundation assets separate." },
    ],
  },

  documents: {
    heading: "Documents Required",
    image: "/images/investment/pitch-folder.png",
    intro: "Exact requirements vary by jurisdiction.",
    items: [
      "Completed registration application",
      "Foundation charter",
      "By-laws",
      "IDs for the founder, council members and beneficiaries",
      "Proof of address for key parties",
      "Source-of-wealth documents for the initial assets",
      "Bank account opening forms",
      "Registration fee payment",
    ],
  },

  features: {
    eyebrow: "Eligibility",
    heading: "Who Can Set Up a UAE Foundation?",
    items: [
      { status: "yes", text: "UAE residents and non-residents" },
      { status: "yes", text: "Individuals, families and companies" },
      { status: "yes", text: "Investors holding assets in several countries" },
      { status: "partial", text: "Age, minimum assets and office requirements vary by jurisdiction" },
    ],
  },

  cost: {
    heading: "UAE Foundation Setup Cost",
    intro:
      "Costs depend on the jurisdiction, registered office and agent fees, document drafting and ongoing compliance. Tell us about your assets and goals and we'll send a quote.",
    notes: ["Jurisdiction", "Registrar fees", "Registered agent & office", "Document drafting", "Annual renewal"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Structure Your Wealth with",
    paragraph: "End-to-end support: jurisdiction assessment, document preparation, registration, bank account opening and ongoing compliance.",
    cards: [
      { title: "Jurisdiction Assessment", text: "Matched to your assets and goals." },
      { title: "Document Preparation", text: "Charter, by-laws and application." },
      { title: "Ongoing Compliance", text: "Governance and renewal support." },
    ],
    quoteTitle: "Request a foundation",
    quoteText: "Tell us about your assets, family and objectives, and we'll recommend a jurisdiction and send a quote.",
  },

  included: [
    "Jurisdiction assessment",
    "Charter & by-laws drafting",
    "Application filing",
    "Registrar liaison",
    "Bank account support",
    "Post-registration compliance",
  ],

  faqs: [
    { question: "How long does it take to set up a UAE foundation?", answer: "Usually a few weeks, depending on the jurisdiction and how complete the documents are. RAK ICC is generally the fastest." },
    { question: "Can the founder also be a beneficiary?", answer: "Generally yes, subject to the jurisdiction's rules and how the charter is drafted." },
    { question: "What assets can a foundation hold?", answer: "Real estate, company shares, intellectual property, cash, bonds and other financial instruments." },
    { question: "Which jurisdiction is the most cost-effective?", answer: "RAK ICC is usually the most affordable. DIFC and ADGM are premium options with strong international recognition." },
    { question: "Does a foundation protect against forced heirship?", answer: "Foundation laws in these jurisdictions include provisions designed to protect founders' wishes, but outcomes depend on the facts and the laws involved. Take legal advice for your situation." },
    { question: "Can non-residents set up a UAE foundation?", answer: "Yes. Foundations are open to residents and non-residents." },
    { question: "Can the founder change the terms later?", answer: "Often, if the charter reserves the power to amend. This should be planned when the foundation is set up." },
  ],
};
