import type { FreezoneData } from "@/lib/freezones/types";

// TODO(client): confirm before launch — costs (free zone from AED 12,500, mainland
// AED 25,000+, renewal ~AED 15,000), the AED 300,000 mainland capital statement,
// activity code 4690018, "licence in under an hour in some zones", and the 2024
// Dubai trade statistics (AED 83.12bn, 24.5% of GDP, 70,500 new Chamber members).

export const generalTradingLicense: FreezoneData = {
  slug: "general-trading-license",
  category: "Business Licensing",
  name: "General Trading Licence in Dubai",
  shortName: "General Trading",
  hero: {
    eyebrow: "General Trading Licence · Dubai, UAE",
    title: "General Trading Licence",
    highlight: "Trade Many Products Under One Licence",
    subtitle: "Import, export, re-export and sell goods across different categories — from electronics to clothing to packaged food — with one licence.",
    intro:
      "Wholesale and retail trade is Dubai's biggest economic sector, reaching AED 83.12 billion in the first nine months of 2024 — about 24.5% of GDP — and trading led the more than 70,500 new companies that joined the Dubai Chamber that year. Afaq Al Khaleej handles your general trading setup, from activity selection to visas and banking.",
    chips: ["Trade unrelated product lines", "100% foreign ownership", "Mainland or free zone", "Free zone from AED 12,500"],
    image: "/images/investment-opportunities/hero-handshake.png",
  },
  stats: [
    { value: "AED 12,500", label: "Free zone licence from" },
    { value: "~AED 25,000", label: "Typical year-one budget" },
    { value: "~1 week", label: "Approval for a clean application" },
    { value: "24.5%", label: "Of Dubai's GDP from trade" },
  ],

  about: {
    heading: "What Is a General Trading Licence?",
    body:
      "A general trading licence is a commercial licence that lets one company trade many kinds of goods — think of a supermarket or an import-export firm selling food, toys and homeware at once. A normal trade licence ties you to one product group; a general trading licence removes that limit, so you can deal in almost any legal product under one roof. On the mainland, the activity code is 4690018.",
    location: { name: "Dubai", area: "Between Europe, Asia and Africa", image: "/images/investment/growth-chart.png" },
    features: [
      { icon: "multiple", title: "Trade Many Products", text: "One licence, many product lines — no separate licence for each." },
      { icon: "ownership", title: "100% Foreign Ownership", text: "In free zones and most mainland trading activities." },
      { icon: "bank", title: "Full Profit Repatriation", text: "No forex limits, with the dirham pegged to the US dollar." },
      { icon: "tax", title: "Low Taxes", text: "No personal income tax and a competitive corporate tax environment." },
      { icon: "visas", title: "Easy Visas", text: "Sponsor staff and, once you meet the income rules, your spouse and children." },
      { icon: "award", title: "Path to the Golden Visa", text: "A trading business can support a 10-year Golden Visa if you meet the criteria." },
    ],
  },

  prosCons: {
    placement: "early",
    eyebrow: "What You Can Trade",
    heading: "What Does a General Trading Licence Cover?",
    prosTitle: "Most physical goods, such as…",
    consTitle: "Needs a special permit on top",
    pros: [
      "Electronics, mobile accessories and computer parts",
      "Clothing, footwear and textiles",
      "Furniture and homeware",
      "Packaged food, perfumes and cosmetics",
      "Toys, pet supplies and stationery",
    ],
    cons: [
      "Alcohol and tobacco",
      "Medicines and medical products",
      "Cars and vehicles",
      "Chemicals",
      "Firearms and weapons",
    ],
    note: {
      title: "Planning to store stock?",
      text: "If you'll store or move frozen food, fresh produce or bulk stock, you'll also need proper warehouse space — we factor this into your setup.",
    },
  },

  cost: {
    heading: "General Trading Licence Cost in Dubai",
    intro:
      "Costs depend on your jurisdiction, visas and office. A general trading licence costs more upfront than a single-activity licence because it covers far more — for most multi-product traders, that trade-off pays off fast.",
    tiers: [
      { badge: "Free zone", name: "Free Zone Licence", price: "From AED 12,500", tagline: "Depending on visas and package", points: ["100% ownership", "Flexi-desk options", "Fast setup"] },
      { badge: "Mainland", name: "Mainland Licence", price: "AED 25,000+", tagline: "Once office and fees are added", points: ["Sell directly to the UAE market", "Ejari office required", "AED 300,000 capital stated in MoA (no deposit)"] },
      { badge: "Planning", name: "Year-One Budget", price: "~AED 25,000", tagline: "Typical for most traders", points: ["Licence, office and fees", "Visas extra", "Itemised quote from us"] },
      { badge: "Ongoing", name: "Annual Renewal", price: "~AED 15,000", tagline: "Approximate renewal cost per year", points: ["Licence renewal", "Office lease renewal", "Visa renewals extra"] },
    ],
  },

  compare: {
    eyebrow: "Mainland vs Free Zone",
    heading: "Mainland or Free Zone: Which Should You Pick?",
    intro:
      "Pick the mainland to sell straight to the local market or open a shop. Pick a free zone to trade across borders, sell online or run the business from abroad — Dubai has more than 30 free zones to choose from.",
    columns: ["Factor", "Mainland (DET)", "Free Zone (e.g. IFZA, Meydan, RAKEZ)"],
    rows: [
      { cells: ["Ownership", "100% in most trading activities", "100%, always"] },
      { cells: ["Sell to the UAE market", "Yes, directly to anyone", "Through a mainland distributor"] },
      { cells: ["Setup speed", "About a week", "As fast as 60 minutes in some zones"] },
      { cells: ["Office", "Needed (from year two for instant licences)", "Optional flexi-desk in many zones"] },
      { cells: ["Minimum capital", "AED 300,000 stated in MoA (no deposit)", "Usually none stated"] },
      { cells: ["Best for", "Local retail, government contracts, shops", "Import-export, e-commerce, overseas founders"] },
    ],
  },

  process: {
    heading: "How to Get a General Trading Licence in Dubai",
    intro: "Six steps — and a well-prepared file moves quickly.",
    cautionTitle: "Expert tip",
    caution:
      "\"General trading\" doesn't mean anything goes. Regulated goods and the customs import-export code trip up new traders most — sort both out before you sign your first supplier contract.",
    steps: [
      { title: "Pick activities & name", text: "List the product groups you'll trade and reserve a name that follows UAE naming rules." },
      { title: "Choose mainland or free zone", text: "This sets your authority (DET or a free zone) and your legal structure, usually an LLC." },
      { title: "Get initial approval", text: "Submit your details and IDs for the authority's first sign-off." },
      { title: "Collect & submit documents", text: "Passports, visa and Emirates ID copies, the MoA and any extra papers required." },
      { title: "Office & customs", text: "An Ejari tenancy contract if you need an office, plus a Dubai Customs import-export code." },
      { title: "Pay & collect your licence", text: "Pay the fees and receive your trade licence, MoA and share certificate." },
    ],
  },

  documents: {
    heading: "Documents for a General Trading Licence",
    note: "Corporate documents may need UAE Embassy and Ministry of Foreign Affairs (MOFA) attestation.",
    groups: [
      {
        title: "Individual Shareholders",
        items: ["Passport copy (6+ months validity)", "Residence visa copy, if in the UAE", "Emirates ID copy, if applicable", "Two passport photos (white background)", "NOC from your current sponsor, if a UAE resident"],
      },
      {
        title: "Corporate Shareholders",
        items: ["Attested Certificate of Incorporation", "Memorandum & Articles of Association", "Certificate of Good Standing or Incumbency", "Board resolution and power of attorney"],
      },
      {
        title: "Additional Requirements",
        items: ["Trade name reservation certificate", "Completed application form", "Business plan listing product categories", "Ejari tenancy (mainland) or flexi-desk agreement (free zone)"],
      },
    ],
  },

  tax: {
    heading: "Tax & Planning Points for Traders",
    paragraphs: [
      "Corporate tax now applies in the UAE at 9% on profits above AED 375,000, with different treatment for qualifying free zone income — it's worth a quick conversation before you choose a jurisdiction.",
    ],
    cards: [
      { value: "0%", title: "Personal Income Tax", text: "No personal income tax for owners or staff." },
      { value: "9%", title: "Corporate Tax", text: "On profits above AED 375,000; qualifying free zone income can be taxed at 0%." },
      { value: "USD peg", title: "Stable Currency", text: "The dirham is pegged to the US dollar, with no forex limits on repatriation." },
      { value: "10 yrs", title: "Golden Visa", text: "A trading business can support a 10-year Golden Visa if you meet the criteria." },
    ],
    tags: ["Corporate tax registration", "VAT registration", "Accounting services"],
  },

  included: [
    "Free consultation & jurisdiction advice",
    "Name reservation & activity selection",
    "Document checks & submissions",
    "Customs import-export code",
    "Visa & Emirates ID processing",
    "Corporate bank account support",
  ],

  faqs: [
    { question: "What is a general trading licence in Dubai used for?", answer: "It lets one company import, export, re-export and sell many different products under a single licence — across categories like electronics, clothing and food — without opening a separate licence for each." },
    { question: "How much does a general trading licence in Dubai cost?", answer: "From about AED 12,500 in a free zone to AED 25,000 or more on the mainland. Most traders budget around AED 25,000 in year one and around AED 15,000 for annual renewal." },
    { question: "How long does it take to get the licence?", answer: "A clean application can be approved in about a week, and some free zones issue licences in under an hour." },
    { question: "Should I choose mainland or free zone?", answer: "Mainland if you want to sell directly to the local market or open a shop; free zone if you trade across borders, sell online or run the business from abroad." },
    { question: "What can I not trade with this licence?", answer: "Alcohol, tobacco, medicines, cars, chemicals and weapons need special permits on top of your licence." },
    { question: "Do I need to live in Dubai to open a trading company?", answer: "No. Many free zones let you set up remotely; you'll need to visit for visa medicals and biometrics if you want UAE residence." },
    { question: "Is there a minimum capital requirement?", answer: "Mainland LLCs state AED 300,000 of share capital in the MoA, but you don't have to deposit it. Free zones usually don't state a minimum." },
    { question: "Can I trade online with a general trading licence?", answer: "Yes, if your licence includes the relevant e-commerce or online trading activity — we confirm the right activity combination for your sales channels." },
    { question: "How many activities can one licence cover?", answer: "A general trading licence covers trading across many product categories under one activity; limits on additional activities depend on the authority." },
    { question: "Do I need an office?", answer: "Mainland companies need an Ejari-registered office (from year two for instant licences). Many free zones offer flexi-desks." },
    { question: "What's the difference between a trade licence and a general trading licence?", answer: "A normal trade licence limits you to one product group. A general trading licence lets you trade in many unrelated product categories." },
    { question: "Can I get a Golden Visa with a general trading licence?", answer: "A trading business can support a 10-year Golden Visa if you meet the investment or income criteria." },
  ],
};
