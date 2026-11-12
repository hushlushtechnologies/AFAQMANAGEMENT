import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero + location reuse images from general-trading-license / bvi pages —
// replace with dedicated transfer-pricing images when available.

export const transferPricing: FreezoneData = {
  slug: "transfer-pricing",
  category: "Accounting & Tax",
  name: "Transfer Pricing Services in UAE",
  shortName: "Transfer Pricing",
  hero: {
    eyebrow: "Transfer Pricing · Corporate Tax · UAE",
    title: "Transfer Pricing Services in UAE",
    highlight: "Defensible Pricing for Related-Party Deals",
    subtitle: "Clear, accurate transfer pricing documentation for businesses with related-party transactions.",
    intro:
      "Under UAE corporate tax, every related-party transaction must follow the arm's length principle. Afaq Al Khaleej's tax professionals help you set defensible prices and prepare the documentation, benchmarking and group policies that support them, whether you're on the mainland, in a free zone or part of a multinational group.",
    chips: ["Arm's length principle", "Master File & Local File", "Benchmarking studies", "Disclosure form"],
    image: "/images/investment-opportunities/hero-handshake.png",
  },
  stats: [
    { value: "5", label: "OECD pricing methods" },
    { value: "AED 200M", label: "Local File revenue threshold" },
    { value: "AED 3.15B", label: "Group revenue threshold" },
    { value: "Mainland & FZ", label: "Rules apply to both" },
  ],

  about: {
    heading: "What Is Transfer Pricing?",
    body:
      "Transfer pricing is how related parties price goods, services, financing and intellectual property between themselves. Under corporate tax, those prices must match what independent companies would agree in similar circumstances. This is the arm's length principle. If your business has group transactions, inside the UAE or across borders, transfer pricing rules apply and you need proper documentation. The Federal Tax Authority treats transfer pricing as a key review area.",
    location: { name: "Group transactions, priced fairly", area: "Domestic & cross-border", image: "/images/investment-opportunities/regionally-focused.png" },
    features: [
      { icon: "activities", title: "Fewer Adjustments", text: "Supportable pricing avoids changes to taxable income." },
      { icon: "licence", title: "Deductions Protected", text: "Expenses less likely to be disallowed." },
      { icon: "ownership", title: "Lower Audit Risk", text: "Documentation ready for FTA reviews." },
      { icon: "multiple", title: "No Double Taxation", text: "Positions supported across countries." },
      { icon: "trading", title: "OECD-Aligned", text: "Meets international expectations for groups." },
      { icon: "bank", title: "Penalty Protection", text: "Reduced exposure to penalties and disputes." },
    ],
  },

  activities: {
    eyebrow: "Does It Apply to You?",
    heading: "When Transfer Pricing Rules Apply",
    intro: "Any transaction with a related party that affects taxable income must be documented and supported.",
    groups: [
      { icon: "services", title: "Management Fees", text: "Paying or charging management fees within your group.", tags: ["Services"] },
      { icon: "trading", title: "Goods", text: "Buying from or selling to a related entity.", tags: ["Goods"] },
      { icon: "bank", title: "Loans & Guarantees", text: "Giving or receiving intragroup loans, guarantees or cash pooling.", tags: ["Financing"] },
      { icon: "licence", title: "Royalties & IP", text: "Paying royalties or fees for intellectual property.", tags: ["IP"] },
      { icon: "multiple", title: "Cost Allocations", text: "Sharing HR, finance, IT or overhead costs across group companies.", tags: ["Cost sharing"] },
      { icon: "award", title: "HQ & Holding Structures", text: "Operating as a headquarters, holding company or shared service centre.", tags: ["Structure"] },
    ],
    lists: [
      { title: "A related party relationship may exist through", items: ["Direct or indirect ownership", "Shared management or control", "Significant influence over decisions", "Family relationships up to the fourth degree", "A permanent establishment of the same company"] },
    ],
  },

  structures: {
    heading: "Transfer Pricing Requirements & Methods",
    intro: "What the rules require, and the methods used to test pricing.",
    table: {
      title: "Requirements under UAE corporate tax",
      columns: ["Requirement", "What it means", "Why it matters"],
      rows: [
        ["Arm's length principle", "Pricing must reflect market value", "Incorrect pricing can increase tax liabilities"],
        ["Master File & Local File", "Documentation of group structure, functions and pricing", "Required for entities with revenue ≥ AED 200M or in groups ≥ AED 3.15B"],
        ["Related party disclosure form", "Annual disclosure of related-party transactions", "Filed with the corporate tax return when thresholds are met"],
        ["Evidence & records", "Contracts, benchmarking and economic analysis", "Supports your pricing during FTA reviews"],
      ],
    },
    groups: [
      {
        title: "Recognised pricing methods",
        items: [
          { title: "Comparable Uncontrolled Price (CUP)", text: "Royalties, financing and commodity pricing." },
          { title: "Resale Price Method", text: "Distributors that resell goods." },
          { title: "Cost Plus Method", text: "Service centres and support functions." },
          { title: "TNMM", text: "Routine distributors, manufacturers and service providers." },
          { title: "Profit Split Method", text: "Transactions with unique or shared intangibles." },
        ],
      },
      {
        title: "Transactions covered",
        items: [
          { title: "Goods", text: "Margins should match independent distributors." },
          { title: "Services", text: "You must show services were provided and were useful." },
          { title: "Financing", text: "Interest-free or low-interest loans attract scrutiny." },
          { title: "Intellectual property", text: "Royalties must reflect the value provided." },
          { title: "Cost sharing & restructuring", text: "Consistent allocation, with compensation for shifted functions." },
        ],
      },
    ],
  },

  tax: {
    eyebrow: "Specialist Areas",
    heading: "Loans & Management Remuneration",
    paragraphs: [
      "Related-party loans are closely reviewed, even interest-free or informal ones. Pay to related directors and senior managers must also be at arm's length to be deductible.",
    ],
    cards: [
      { value: "Rates", title: "Interest Rate Benchmarking", text: "Arm's length rates from comparable market data." },
      { value: "Loans", title: "Loan Agreements", text: "Intercompany and shareholder loan terms documented." },
      { value: "Guarantees", title: "Guarantees & Cash Pooling", text: "Arrangements reviewed and supported." },
      { value: "Pay", title: "Remuneration Benchmarking", text: "Shareholder-director, holding company and family business pay." },
    ],
    tags: ["Shareholder loans", "Director salaries", "Executive pay"],
  },

  process: {
    heading: "Our Transfer Pricing Services",
    intro: "Full support, from mapping transactions to your annual review.",
    steps: [
      { title: "Risk assessment", text: "Map all related-party transactions and identify exposure areas." },
      { title: "Benchmarking studies", text: "Market-based pricing for margins, interest, royalties and remuneration." },
      { title: "Policy development", text: "Clear internal pricing frameworks for goods, services, financing and pay." },
      { title: "Master File & Local File", text: "OECD-aligned documentation for qualifying businesses." },
      { title: "Disclosure filing", text: "Related party disclosure prepared and submitted with your return." },
      { title: "FTA support", text: "Representation and responses during FTA reviews." },
    ],
  },

  features: {
    eyebrow: "Watch Out",
    heading: "Common Transfer Pricing Issues in the UAE",
    items: [
      { status: "warn", text: "Management fees without proof of services" },
      { status: "warn", text: "Interest-free or undocumented intragroup and shareholder loans" },
      { status: "warn", text: "Domestic related-party transactions overlooked" },
      { status: "warn", text: "Benchmarking based on weak or outdated data" },
      { status: "warn", text: "Cost allocations without working papers" },
      { status: "warn", text: "Royalty payments not tied to value created" },
      { status: "warn", text: "Director and management pay not benchmarked" },
    ],
  },

  cost: {
    heading: "Transfer Pricing Fees",
    intro:
      "Fees depend on the number and complexity of your related-party transactions and the documentation you need. Tell us about your group and we'll send a written proposal.",
    notes: ["Number of transactions", "Entities & jurisdictions", "Master/Local File needed", "Benchmarking studies", "FTA review support"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Get Transfer Pricing Right with",
    paragraph: "UAE corporate tax and transfer pricing experience, benchmarks from trusted international data, and documentation aligned with OECD and FTA expectations, for SMEs and multinational groups alike.",
    cards: [
      { title: "End-to-End Support", text: "From transaction mapping to annual review." },
      { title: "Trusted Data", text: "Benchmarks from reliable international sources." },
      { title: "FTA-Ready", text: "Documentation aligned with FTA and OECD guidance." },
    ],
    quoteTitle: "Book a transfer pricing",
    quoteText: "Tell us about your group and related-party transactions, and we'll send a written proposal.",
  },

  included: [
    "Transaction mapping",
    "Risk assessment",
    "Benchmarking",
    "Transfer pricing policy",
    "Master & Local File",
    "Disclosure form filing",
  ],

  faqs: [
    { question: "What is transfer pricing?", answer: "How related parties price transactions between them, including goods, services, financing and IP. Under UAE corporate tax, these prices must follow the arm's length principle." },
    { question: "Do transfer pricing rules apply to free zone companies?", answer: "Yes. They apply to both mainland and free zone businesses, and compliance is one of the conditions for Qualifying Free Zone Person status." },
    { question: "Do domestic transactions count?", answer: "Yes. Transactions between related parties within the UAE are covered as well as cross-border ones." },
    { question: "Who must prepare a Master File and Local File?", answer: "Businesses with revenue of AED 200 million or more, or that belong to a multinational group with consolidated revenue of AED 3.15 billion or more." },
    { question: "What is the related party disclosure form?", answer: "An annual disclosure of related-party and connected-person transactions filed with the corporate tax return when the value thresholds are met." },
    { question: "Are interest-free shareholder loans a problem?", answer: "They can be. The FTA expects loan terms to be at arm's length, so interest-free or informal loans should be reviewed and documented." },
    { question: "Does director salary need benchmarking?", answer: "Pay to related-party directors and managers must be at arm's length. Benchmarking supports the deduction and reduces the risk of it being disallowed." },
  ],
};
