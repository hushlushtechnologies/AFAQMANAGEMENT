import type { FreezoneData } from "@/lib/freezones/types";

// TODO(client): confirm offshore cost ranges (RAK ICC AED 10,000–14,000, JAFZA
// AED 20,000–28,000, Ajman AED 8,000–12,000) and timings before launch.
// TODO(client): if Afaq is a registered agent with RAK ICC / JAFZA, say so in hero.intro.

export const dubaiOffshore: FreezoneData = {
  slug: "dubai",
  category: "Offshore",
  name: "Dubai Offshore",
  shortName: "Offshore",
  hero: {
    eyebrow: "Offshore Company Formation · Dubai, UAE",
    title: "Offshore Company Formation",
    highlight: "Dubai, UAE",
    subtitle: "100% ownership, privacy and asset protection — no office, no staff, setup in about a week.",
    intro:
      "Offshore company formation means registering a limited company in a UAE offshore jurisdiction such as RAK ICC or JAFZA to hold assets or do business internationally — not to trade inside the UAE. It suits foreign investors, holding companies, international traders and consultants with clients abroad. Registration usually takes about a week through a registered agent, from around AED 10,000, and Afaq Al Khaleej handles it end to end.",
    chips: ["100% foreign ownership", "No office or staff required", "Setup in about a week", "From around AED 10,000"],
    image: "/images/about/the-idea.jpg",
  },
  stats: [
    { value: "AED 10,000", label: "Setup from" },
    { value: "~1 week", label: "Typical incorporation" },
    { value: "3", label: "UAE offshore jurisdictions" },
    { value: "100+", label: "Double taxation agreements" },
  ],

  about: {
    heading: "What Is an Offshore Company in Dubai?",
    body:
      "An offshore company is a limited company registered in a UAE offshore jurisdiction — RAK ICC, JAFZA Offshore or Ajman Offshore — that conducts its business outside the UAE. It can hold overseas investments, own intellectual property, invoice international clients and open a UAE corporate bank account, with minimal running costs.",
    location: { name: "UAE Offshore", area: "RAK ICC · JAFZA Offshore · Ajman Offshore", image: "/images/services/investment-services/other-opportunities.png" },
    features: [
      { icon: "ownership", title: "Holding Companies", text: "Hold shares in UAE and foreign companies under one structure." },
      { icon: "trading", title: "International Traders", text: "Trade and invoice clients outside the UAE." },
      { icon: "services", title: "Consultants with Clients Abroad", text: "A UAE-based company for cross-border service work." },
      { icon: "bank", title: "Asset Protection & Privacy", text: "Protect business assets with shareholder details kept private." },
      { icon: "licence", title: "Intellectual Property", text: "Hold IP and collect royalties through a UAE company." },
      { icon: "office", title: "Dubai Property", text: "Own Dubai real estate — JAFZA Offshore anywhere permitted; RAK ICC in approved projects." },
    ],
  },

  prosCons: {
    placement: "early",
    eyebrow: "An Honest Comparison",
    heading: "What Can an Offshore Company Do — and What Can't It?",
    prosTitle: "An offshore company can…",
    consTitle: "An offshore company cannot…",
    pros: [
      "Trade internationally and invoice clients outside the UAE",
      "Open a UAE corporate bank account",
      "Hold shares in other companies (UAE and foreign)",
      "Own Dubai real estate (JAFZA Offshore; RAK ICC in approved projects)",
      "Hold intellectual property and collect royalties",
      "Keep shareholder details private",
    ],
    cons: [
      "Trade with customers inside the UAE",
      "Lease physical office space in the UAE",
      "Sponsor UAE residence visas for owners or staff",
      "Carry out banking, insurance or media activities",
      "Obtain a UAE trade licence for local business",
      "Avoid UAE corporate tax registration obligations",
    ],
    note: {
      title: "Need to do business inside the UAE?",
      text: "An offshore company can't trade in the UAE or provide a residence visa. If you need UAE market access, a free zone or mainland company is the better tool — we'll help you compare.",
    },
  },

  cost: {
    heading: "Offshore Company Setup Cost in 2026",
    intro:
      "Costs vary by jurisdiction and registered agent. Renewals cost less than year one because name reservation and incorporation fees fall away, and there's no minimum share capital in RAK ICC.",
    tiers: [
      {
        badge: "Most popular",
        name: "RAK ICC",
        price: "AED 10,000–14,000",
        tagline: "First year, incl. government fees · 3–7 days",
        points: ["Most cost-effective and fastest", "1 director minimum", "Records kept, no filed audit", "Best for holding + international trade"],
      },
      {
        badge: "Property & prestige",
        name: "JAFZA Offshore",
        price: "AED 20,000–28,000",
        tagline: "First year · 2–4 weeks",
        points: ["Can own property anywhere permitted in Dubai", "Strongest name recognition with banks", "2 directors minimum", "Audit required"],
      },
      {
        badge: "Budget",
        name: "Ajman Offshore",
        price: "AED 8,000–12,000",
        tagline: "First year · 3–7 days",
        points: ["Lowest-cost option", "1 director minimum", "Records kept", "Best for simple holding structures"],
      },
    ],
    extraTable: {
      title: "Jurisdiction comparison",
      columns: ["Compare", "RAK ICC", "JAFZA Offshore", "Ajman Offshore"],
      rows: [
        ["Setup cost (2026, from)", "AED 10,000–14,000", "AED 20,000–28,000", "AED 8,000–12,000"],
        ["Incorporation time", "3–7 days", "2–4 weeks", "3–7 days"],
        ["Minimum directors", "1", "2", "1"],
        ["Dubai property ownership", "Approved projects", "Yes, anywhere permitted", "No"],
        ["Audit requirement", "Records kept, no filed audit", "Audit required", "Records kept"],
        ["Best for", "Holding + international trade", "Property + prestige", "Low-cost holding"],
      ],
      footnote: "For non-UAE jurisdictions we also register BVI, Cayman Islands and Mauritius companies.",
    },
  },

  process: {
    heading: "How to Set Up an Offshore Company in Dubai — 5 Steps",
    intro: "Incorporation is handled through a registered agent. We advise on the right jurisdiction in your first call and manage every step.",
    steps: [
      { title: "Choose the jurisdiction", text: "RAK ICC, JAFZA or Ajman — based on cost, property plans and banking needs." },
      { title: "Reserve the company name", text: "Names must end in \"Limited\" or \"Ltd\" and avoid restricted words." },
      { title: "Prepare KYC documents", text: "Passport, proof of address, bank reference and CV for each shareholder, filed with the offshore authority." },
      { title: "Sign incorporation documents", text: "The MOA and Articles are drafted, and the certificate is issued after approval — 3–7 working days for RAK ICC." },
      { title: "Open the bank account", text: "We prepare the compliance file and introduce banks that accept offshore structures." },
    ],
  },

  documents: {
    heading: "What Documents Do You Need?",
    image: "/images/services/finance-management/finance-management.png",
    intro: "Documents are submitted through the registered agent in line with anti-money laundering and KYC rules. At least one shareholder is required.",
    items: [
      "Passport copy for each shareholder and director",
      "Proof of residential address (utility bill or bank statement, under 3 months)",
      "Bank or professional reference letter",
      "Short CV or business profile",
    ],
    note: "Corporate shareholders may also need their certificate of incorporation, MOA and a board resolution approving the new company.",
  },

  compare: {
    eyebrow: "Structure Comparison",
    heading: "Offshore vs Free Zone vs Mainland",
    intro: "Choosing between offshore, free zone and mainland depends on where you trade and whether you need visas.",
    columns: ["Compare", "Offshore", "Free Zone", "Mainland"],
    rows: [
      { cells: ["Trade inside the UAE", "No", "Within zone / via distributor", "Yes, anywhere"] },
      { cells: ["Residence visas", "No", "Yes", "Yes"] },
      { cells: ["Office required", "No", "Flexi-desk option", "Yes"] },
      { cells: ["Setup cost from", "AED 10,000", "AED 5,500", "AED 18,000"] },
      { cells: ["Typical use", "Holding, international business", "SMEs, e-commerce, consultants", "Local market, retail, contracting"] },
    ],
  },

  tax: {
    heading: "Tax, Compliance & Banking in 2026",
    paragraphs: [
      "Offshore companies are juridical persons and generally must register with the Federal Tax Authority. A company that's non-resident and earns no UAE-sourced income typically has no corporate tax to pay — but every case needs an assessment, which we include in setup. With ESR filings removed and the UAE's treaty network intact, offshore setup still makes sense for international structures.",
    ],
    cards: [
      { value: "9%", title: "Corporate Tax (2023)", text: "On profits above AED 375,000. Your liability depends on whether the company earns UAE-sourced income." },
      { value: "No ESR", title: "Economic Substance", text: "Cabinet Decision No. 98 of 2024 removed ESR filings for financial years ending after 31 December 2022. Record-keeping duties still apply." },
      { value: "100+", title: "Tax Treaties", text: "The UAE's network of double taxation agreements remains a key advantage." },
      { value: "2–4 wks", title: "Bank Account", text: "Banks apply enhanced due diligence. Digital banks decide in days; traditional banks take 2–4 weeks." },
    ],
    tags: ["Corporate tax registration", "Accounting services"],
  },

  included: [
    "Free consultation & jurisdiction advice",
    "Company name reservation",
    "KYC file preparation",
    "MOA & Articles drafting",
    "Corporate tax assessment",
    "Bank account application support",
  ],

  faqs: [
    { question: "How long does offshore company formation in Dubai take?", answer: "RAK ICC and Ajman Offshore companies are typically incorporated in 3–7 working days; JAFZA Offshore takes 2–4 weeks. Bank account opening follows separately." },
    { question: "Can I get a UAE residence visa with an offshore company?", answer: "No. Offshore companies can't sponsor UAE residence visas. If you need a visa, consider a free zone or mainland company." },
    { question: "Do I need to visit the UAE to incorporate?", answer: "Usually not — incorporation is handled remotely through the registered agent. Some banks may ask to meet you during account opening." },
    { question: "How do I change my registered agent?", answer: "You can transfer your offshore company to a new registered agent by following the jurisdiction's transfer process, which typically involves consent forms, updated KYC and the authority's approval. We can manage the transfer." },
    { question: "Can an offshore company own property in Dubai?", answer: "Yes — JAFZA Offshore companies can own property anywhere permitted in Dubai, and RAK ICC companies can own property in approved projects." },
    { question: "Is an offshore company in Dubai legal and recognised?", answer: "Yes. UAE offshore companies are registered under official jurisdictions — RAK ICC, JAFZA and Ajman — and must meet KYC, anti-money laundering and tax registration requirements." },
  ],
};
