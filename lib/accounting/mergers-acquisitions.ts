import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero + location reuse images (external-audit / backlog-accounting) — replace when available.

export const mergersAcquisitions: FreezoneData = {
  slug: "mergers-acquisitions",
  category: "Accounting & Tax",
  name: "Mergers & Acquisitions Advisory in UAE",
  shortName: "Mergers & Acquisitions",
  hero: {
    eyebrow: "Advisory · M&A · UAE",
    title: "Mergers & Acquisitions Advisory in UAE",
    highlight: "Create Value with More Certainty",
    subtitle: "We help you get strategic value from deals faster and with more certainty, while keeping pace with changes in the market.",
    intro:
      "Mergers and acquisitions can restructure a business and add real value through scale, new markets, lower costs and higher shareholder value. Getting there needs careful valuation, due diligence, negotiation and integration. Afaq Al Khaleej supports buyers and sellers from first assessment to completion.",
    chips: ["Business valuation", "Due diligence", "Deal structuring", "Post-merger integration"],
    image: "/images/services/company-formation/business-consultancy.png",
  },
  stats: [
    { value: "4", label: "Main merger types" },
    { value: "6", label: "Key deal factors" },
    { value: "End-to-end", label: "Valuation to completion" },
    { value: "Tax-aware", label: "Structuring advice" },
  ],

  about: {
    heading: "Why Businesses Choose M&A",
    body:
      "Combining businesses often improves performance while reducing costs. Buying a competitor grows market share straight away (a horizontal merger). Buying a supplier or distributor removes margins and costs along the supply chain (a vertical merger). For many businesses, buying an existing company is faster and cheaper than growing organically.",
    location: { name: "Strategic moves, well planned", area: "Buy-side and sell-side support", image: "/images/investment-opportunities/strategy-chess-knight.png" },
    features: [
      { icon: "trading", title: "Faster Growth", text: "Buy rather than build from scratch." },
      { icon: "bank", title: "Lower Overheads", text: "Shared purchasing and operating costs." },
      { icon: "multiple", title: "Market Share", text: "Combine with competitors for scale." },
      { icon: "online", title: "New Markets", text: "Reach new regions and customers." },
      { icon: "services", title: "Supply Chain Savings", text: "Absorb supplier or distributor margins." },
      { icon: "award", title: "Shareholder Value", text: "A more competitive, cost-efficient company." },
    ],
  },

  activities: {
    eyebrow: "Types of M&A",
    heading: "Different Types of Mergers & Acquisitions",
    intro: "Each deal depends on its purpose and the relationship between the companies.",
    groups: [
      { icon: "multiple", title: "Horizontal Merger", text: "Companies in the same industry, often offering the same products, combine to gain market share and scale.", tags: ["Same industry"] },
      { icon: "services", title: "Vertical Merger", text: "Companies at different stages of the same supply chain combine to cut costs and improve efficiency.", tags: ["Supply chain"] },
      { icon: "online", title: "Market Extension Merger", text: "Companies selling the same products in different markets combine to reach a bigger customer base.", tags: ["New markets"] },
      { icon: "trading", title: "Product Extension Merger", text: "Companies selling related products in the same market combine to widen their offering.", tags: ["Product range"] },
    ],
  },

  structures: {
    heading: "Key Factors in an M&A Transaction",
    intro: "What buyers, sellers, stakeholders and advisers need to consider.",
    groups: [
      {
        title: "Deal considerations",
        items: [
          { title: "Strategic rationale", text: "Why the deal makes sense and how it creates value." },
          { title: "Synergies", text: "Realistic cost and revenue benefits." },
          { title: "Form of consideration", text: "Cash, shares or a mix of both." },
        ],
      },
      {
        title: "Technical considerations",
        items: [
          { title: "Tax treatment", text: "Corporate tax, VAT and available restructuring reliefs." },
          { title: "Accounting", text: "How the deal is recognised under IFRS." },
          { title: "Management integration", text: "People, systems and culture after completion." },
        ],
      },
    ],
    notes: ["Larger deals may need a merger control filing under UAE competition law. Check whether thresholds apply early in the process."],
  },

  process: {
    heading: "How We Support Your Deal",
    intro: "From valuation through negotiation to successful completion.",
    steps: [
      { title: "Strategy & target review", text: "Define objectives and assess targets or buyers." },
      { title: "Business valuation", text: "Independent valuation to support negotiation." },
      { title: "Due diligence", text: "Financial, tax and operational review to uncover risks." },
      { title: "Structuring & negotiation", text: "Tax-efficient structure and deal terms." },
      { title: "Completion & integration", text: "Regulatory steps, closing and post-deal integration." },
    ],
  },

  features: {
    eyebrow: "Benefits",
    heading: "What Good M&A Advice Delivers",
    items: [
      { status: "yes", text: "A clear view of value before you negotiate" },
      { status: "yes", text: "Risks identified before signing" },
      { status: "yes", text: "Tax-efficient deal structures" },
      { status: "yes", text: "Regulatory and tax issues handled" },
      { status: "yes", text: "A smoother integration after closing" },
    ],
  },

  cost: {
    heading: "M&A Advisory Fees",
    intro:
      "Fees depend on deal size, complexity and the scope of support. Tell us about your transaction and we'll send a proposal.",
    notes: ["Deal size", "Buy-side or sell-side", "Due diligence scope", "Valuation needs", "Integration support"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Make Successful Deals with",
    paragraph: "Dedicated specialists with market knowledge who support you through valuation, negotiation, regulation, tax and completion.",
    cards: [
      { title: "Financial Expertise", text: "Valuation and due diligence by accountants." },
      { title: "Tax & Regulatory Insight", text: "Structures that work under UAE rules." },
      { title: "Hands-On Support", text: "From first meeting to completion." },
    ],
    quoteTitle: "Discuss your",
    quoteText: "Tell us about the deal you're considering, and we'll set out how we can help.",
  },

  included: [
    "Target or buyer assessment",
    "Business valuation",
    "Financial & tax due diligence",
    "Deal structuring",
    "Negotiation support",
    "Integration planning",
  ],

  faqs: [
    { question: "What is the difference between a merger and an acquisition?", answer: "In a merger, two companies combine into one. In an acquisition, one company buys control of another." },
    { question: "Why do companies pursue M&A?", answer: "To grow faster, gain market share, enter new markets, reduce costs and increase shareholder value." },
    { question: "Is due diligence necessary?", answer: "Yes. Financial, tax and legal due diligence finds risks and liabilities before you commit." },
    { question: "Are there tax reliefs for restructuring?", answer: "UAE corporate tax offers business restructuring and group transfer reliefs if conditions are met. We assess whether they apply." },
    { question: "Do UAE deals need regulatory approval?", answer: "Some deals need merger control clearance under UAE competition law, and licensing authorities must approve ownership changes. Requirements depend on the deal." },
  ],
};
