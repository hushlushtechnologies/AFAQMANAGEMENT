import type { FreezoneData } from "@/lib/freezones/types";

// Notes on supplied copy: dated population figures and the "best place to
// incorporate" claim were left out; constitutional documents corrected to
// Memorandum & Articles of Association.
// TODO(client): add Cayman setup pricing if you want a cost figure on this page.

export const caymanIslands: FreezoneData = {
  slug: "cayman-islands",
  category: "Offshore",
  name: "Cayman Islands",
  shortName: "Cayman",
  hero: {
    eyebrow: "Cayman Islands",
    title: "Cayman Islands Offshore",
    highlight: "Company Formation",
    subtitle: "A mature common-law jurisdiction with flexible, tax-exempt company structures — one shareholder and one director.",
    intro:
      "The Cayman Islands are a self-governing British Overseas Territory in the West Indies, with the UK responsible for foreign relations and defence. Its legal system closely resembles the UK courts, which makes it a respected choice for international companies — and Afaq Al Khaleej guides you through Cayman incorporation from structure to bank account.",
    chips: ["1 shareholder & 1 director", "Tax-exempt company option", "English common law", "No minimum share capital"],
    image: "/images/investment-opportunities/scalable-defensible.png",
  },
  stats: [
    { value: "1", label: "Minimum shareholder & director" },
    { value: "0", label: "Minimum share capital" },
    { value: "English", label: "Official language & common law" },
    { value: "Annual", label: "Simple return, no audit required" },
  ],

  about: {
    heading: "Why Set Up Your Company in the Cayman Islands?",
    body:
      "English is the official language and the legal system is based on English common law, so the framework is easy to understand. Company formation is governed by the Cayman Islands Companies Act. Foreigners can register companies, you only need a registered office and registered agent, and companies can do business outside the Cayman Islands with just a light annual return.",
    location: { name: "George Town", area: "Cayman Islands, British Overseas Territory", image: "/images/closing-cta/strategy-chess.png" },
    features: [
      { icon: "award", title: "Mature Legal System", text: "Courts and procedures closely modelled on the UK system." },
      { icon: "ownership", title: "Simple Structure", text: "One shareholder and one director minimum." },
      { icon: "bank", title: "No Minimum Capital", text: "Companies limited by shares have no minimum share capital requirement." },
      { icon: "online", title: "Global Business", text: "Companies can carry out business outside the Cayman Islands." },
      { icon: "licence", title: "Light Annual Filing", text: "An annual return is required, with no audit as part of the filing." },
      { icon: "tax", title: "Tax-Exempt Companies", text: "The popular Exempted Company combines tax exemption with a flexible structure." },
    ],
  },

  cost: {
    heading: "Cayman Islands Company Setup Cost",
    intro:
      "Costs depend on the company type, registered agent and any licences needed. Ask us for an itemised quote covering government fees, registered office and agent fees and annual renewal.",
    notes: ["Company type", "Registered office & agent", "Annual return & renewal", "CIMA licensing (if required)"],
  },

  activities: {
    eyebrow: "Company Options",
    heading: "Choosing Your Cayman Company",
    intro: "Most international clients choose an Exempted Company — but a ready-made shelf company is another option.",
    groups: [
      { icon: "tax", title: "Exempted Company", text: "The most popular Cayman company — exempt from taxes and highly flexible in its corporate structure.", tags: ["Most popular", "Tax-exempt", "Flexible structure"] },
      { icon: "licence", title: "Shelf Company", text: "An already-incorporated company you can purchase for a faster start.", tags: ["Ready-made", "Faster start"] },
    ],
  },

  process: {
    heading: "How to Set Up a Company in the Cayman Islands",
    intro: "We coordinate each stage with the registered agent and the Cayman Islands General Registry.",
    steps: [
      { title: "Choose the company type", text: "Usually an Exempted Company, for its tax exemption and flexible structure." },
      { title: "Select a name", text: "A unique name checked against the General Registry — names can be in English or Chinese." },
      { title: "Prepare the constitutional documents", text: "Memorandum and Articles of Association, including directors and share allocation." },
      { title: "Register your company", text: "Once registered and directors are entered in the register, you can open a bank account." },
      { title: "Secure additional approvals", text: "Financial services and similar activities need clearance from the Cayman Islands Monetary Authority (CIMA)." },
    ],
  },

  tax: {
    heading: "Tax & Compliance for Cayman Companies",
    paragraphs: [
      "Exempted Companies benefit from the Cayman Islands' tax-neutral regime and only need to file a light annual return. Regulated activities need CIMA clearance, and economic substance rules can apply to certain activities, so we review your plans before incorporation.",
    ],
    cards: [
      { value: "0%", title: "Corporate & Income Tax", text: "No corporate or income tax for Exempted Companies." },
      { value: "Annual", title: "Annual Return", text: "A simple annual return; no audit is required as part of the filing." },
      { value: "CIMA", title: "Regulated Activities", text: "Financial services need clearance from the Cayman Islands Monetary Authority." },
      { value: "Bank", title: "Corporate Account", text: "Opened after registration, once directors are entered in the register." },
    ],
  },

  included: [
    "Free consultation & structure advice",
    "Name search & reservation",
    "Registered office & agent coordination",
    "Memorandum & Articles preparation",
    "CIMA licence checks",
    "Bank account application support",
  ],

  faqs: [
    { question: "Can foreigners register a company in the Cayman Islands?", answer: "Yes. Foreign nationals can own and register Cayman Islands companies." },
    { question: "What is a Cayman Islands Exempted Company?", answer: "The most popular Cayman company type, used for business outside the Cayman Islands. It's exempt from taxes and has a flexible corporate structure." },
    { question: "How many shareholders and directors are needed?", answer: "A minimum of one shareholder and one director." },
    { question: "Is there a minimum share capital?", answer: "No — companies limited by shares have no minimum share capital requirement." },
    { question: "Does a Cayman company need an audit?", answer: "An annual return must be filed, but an audit isn't required as part of that filing. Regulated entities may have additional requirements." },
    { question: "Can I buy a ready-made Cayman company?", answer: "Yes. A shelf company — one that's already incorporated — can be a faster way to get started." },
  ],
};
