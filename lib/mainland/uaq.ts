import type { FreezoneData } from "@/lib/freezones/types";

// TODO(client): confirm "licence from AED 8,000", the AED 12,000–22,000 first-year
// range, "3–7 working days", "30–50% lower than Dubai" and the cost table before launch.

export const uaqMainland: FreezoneData = {
  slug: "uaq",
  category: "Mainland",
  name: "Umm Al Quwain",
  shortName: "UAQ",
  hero: {
    eyebrow: "UAQ Mainland",
    title: "Business Setup in Umm Al Quwain",
    highlight: "Mainland Company Formation",
    subtitle: "100% foreign ownership, some of the lowest licence costs in the UAE, and approvals that usually take days, not weeks.",
    intro:
      "Start your company in Umm Al Quwain and trade across all seven emirates from day one. Afaq Al Khaleej handles the whole process — from trade name to bank account — so you don't have to travel to UAQ.",
    chips: ["100% foreign ownership", "Mainland licence from AED 8,000", "Licence in 3–7 working days", "Trade across all 7 emirates"],
    image: "/images/services/finance-management/business-need.png",
  },
  stats: [
    { value: "100%", label: "Foreign ownership" },
    { value: "AED 8,000", label: "Mainland licence from" },
    { value: "3–7 days", label: "Typical licence issue" },
    { value: "7 emirates", label: "Trade across the UAE" },
  ],

  about: {
    heading: "Why Set Up a Business in Umm Al Quwain?",
    body:
      "Umm Al Quwain is the UAE's smallest emirate by population — and that's exactly why it works for new and growing businesses. Rents, licence fees and labour costs are lower than in Dubai or Sharjah, yet you're about 45 minutes from Dubai International Airport via Emirates Road (E311) and the Sheikh Mohammed bin Zayed corridor.",
    location: { name: "Between Ajman and Ras Al Khaimah", area: "45 min to Dubai International via E311", image: "/images/services/company-formation/business-setup-expertise.png" },
    features: [
      { icon: "licence", title: "Lower Setup & Running Costs", text: "Mainland licence fees are typically 30–50% below the equivalent Dubai licence, with much lower office and warehouse rents." },
      { icon: "ownership", title: "100% Foreign Ownership", text: "Since the 2021 Commercial Companies Law amendments, foreign investors can own 100% for most commercial and industrial activities." },
      { icon: "online", title: "Trade Across the Whole UAE", text: "A UAQ DED licence lets you sell, open branches and bid for government contracts in any emirate." },
      { icon: "award", title: "Fast, Uncomplicated Approvals", text: "A small, responsive authority — standard licences usually issue within 3–7 working days once documents are complete." },
      { icon: "visas", title: "Visas for You, Family & Staff", text: "Investor visas, employee quotas based on office size, and family sponsorship." },
      { icon: "office", title: "Affordable Industrial Space", text: "Budget warehouses and workshops in the Emirates Modern and New Industrial Areas." },
    ],
  },

  cost: {
    heading: "Cost of Business Setup in Umm Al Quwain",
    intro:
      "A UAQ mainland company usually costs AED 12,000–22,000 in the first year, including the trade licence, a small office and one investor visa. Exact fees depend on your activity, legal structure, office size and visa count.",
    licence: {
      title: "Typical first-year total",
      price: "AED 12,000–22,000",
      note: "UAQ mainland company, year one",
      points: ["DED trade licence and initial approval", "Small office or shop tenancy", "One investor visa and establishment card", "Afaq fees agreed in writing"],
    },
    addOns: [
      { label: "Trade name reservation and initial approval", price: "1,000–2,000" },
      { label: "DED trade licence (commercial or professional)", price: "5,000–12,000" },
      { label: "Memorandum of Association notarisation", price: "1,500–3,000" },
      { label: "Chamber of Commerce registration", price: "1,000–1,500" },
      { label: "Office or shop rent (per year)", price: "12,000+" },
      { label: "Establishment card and immigration file", price: "1,500–2,500" },
      { label: "Investor visa (per person, 2 years)", price: "3,500–5,000" },
    ],
    guidance:
      "Annual renewal costs less than year one, because the Memorandum, establishment card and bank account are already in place. Industrial licences and activities that need external approvals cost more.",
    notes: ["Business activity", "Legal structure", "Office size", "Number of visas"],
  },

  licenceTypes: {
    heading: "Types of Business Licences in UAQ Mainland",
    intro:
      "The UAQ DED issues four main licence categories. Your licence must match your activity, and some activities need extra approval from a federal or local body.",
    items: [
      { title: "Commercial Licence", text: "For buying, selling, importing and exporting goods.", tags: ["General trading", "Building materials", "Auto parts", "Electronics", "Food trading", "Retail"] },
      { title: "Professional Licence", text: "For services based on skill or knowledge.", tags: ["Consultancy", "IT services", "Marketing", "Engineering", "Accounting", "Training"] },
      { title: "Industrial Licence", text: "For manufacturing, assembly, processing and packaging. Requires a factory or warehouse in an approved industrial area, plus UAQ Municipality and Civil Defence clearance.", tags: ["Manufacturing", "Assembly", "Packaging"] },
      { title: "Tourism Licence", text: "For travel agencies, tour operators, holiday homes and hospitality, issued with the UAQ Department of Tourism and Archaeology.", tags: ["Travel agencies", "Holiday homes", "Hospitality"] },
    ],
    note:
      "Need an industrial or regulated activity? We handle the extra approvals — from UAQ Municipality and Civil Defence for factories to the Ministry of Health for clinics.",
  },

  structures: {
    heading: "Legal Structures for Company Formation in UAQ",
    intro: "Pick the structure that matches who owns the business and how much personal liability you're willing to carry.",
    groups: [
      {
        title: "Company Structures",
        items: [
          { title: "Limited Liability Company (LLC) · most popular", text: "1–50 shareholders, liability limited to share capital — for most trading, contracting and service businesses." },
          { title: "Sole Establishment", text: "One individual with unlimited liability — for professionals and small traders." },
          { title: "Civil Company", text: "Two or more professionals with unlimited, shared liability — law, engineering, medical and consulting partnerships." },
        ],
      },
      {
        title: "Branch Structures",
        items: [
          { title: "Branch of a Foreign Company", text: "Owned by the parent, which is liable — for overseas firms entering the UAE." },
          { title: "Branch of a UAE Company", text: "Owned by the parent, which is liable — for Dubai or Sharjah companies expanding to UAQ." },
        ],
      },
    ],
    notes: [
      "Our tip for foreign investors: a single-shareholder LLC is the most common choice, combining 100% ownership with limited liability.",
    ],
  },

  office: {
    heading: "Key Business Locations in UAQ Mainland",
    intro: "Where you set up depends on your activity — from industrial areas on Emirates Road to high-footfall retail streets.",
    location: { name: "Umm Al Quwain", address: "On Emirates Road (E311) · 45 min to Dubai International" },
    options: [
      { title: "Emirates Modern Industrial Area", text: "On Emirates Road — warehouses and workshops for trading, logistics, automotive and building materials." },
      { title: "UAQ New Industrial Area", text: "Factories and heavy-vehicle access for manufacturing and recycling." },
      { title: "King Faisal Road & UAQ City Centre", text: "Offices, showrooms, clinics and retail with the highest footfall in the emirate." },
      { title: "Al Salamah & Al Raas", text: "Residential districts suited to supermarkets, salons, pharmacies and local services." },
      { title: "UAQ Corniche & Al Khor", text: "Hospitality, restaurants, marine and tourism activities." },
    ],
  },

  process: {
    heading: "How to Start a Business in Umm Al Quwain: Step by Step",
    intro: "Nine clear steps from choosing your activity to opening your bank account. Our PRO team handles the government visits, so you don't have to travel to UAQ.",
    cautionTitle: "3–7 working days",
    caution: "Typical time to issue a standard commercial or professional licence once your documents are complete.",
    steps: [
      { title: "Choose activity & structure", text: "We match your activity to the UAQ DED list and confirm any external approvals." },
      { title: "Reserve a trade name", text: "Following UAE naming rules; approval takes 1–2 working days." },
      { title: "Obtain initial approval", text: "The DED confirms no objection to your activity and shareholders." },
      { title: "Sign the MoA", text: "Drafted by us and notarised in UAQ — required for LLCs and civil companies." },
      { title: "Lease an office or shop", text: "Submit the attested tenancy contract; budget offices available from around AED 12,000 a year." },
      { title: "Collect external approvals", text: "E.g. Municipality and Civil Defence for industrial units, or the Ministry of Health for clinics." },
      { title: "Pay fees & receive licence", text: "Standard licences are issued in 3–7 working days." },
      { title: "Chamber & establishment card", text: "Unlocks visa quotas through MOHRE and ICP." },
      { title: "Visas & bank account", text: "We prepare your bank file and introduce banks that accept UAQ mainland companies." },
    ],
  },

  documents: {
    heading: "Documents Required for Company Registration in UAQ",
    image: "/images/services/finance-management/support-for-sustainable-growth.png",
    items: [
      "Passport copies of all shareholders and the manager",
      "UAE visa copy or entry stamp (or visit visa)",
      "Emirates ID copy, if resident",
      "Passport-size photographs",
      "NOC from current sponsor, if on a UAE employment visa",
      "Three proposed trade names",
      "Tenancy contract for the office or shop",
      "Memorandum of Association (LLC and civil company)",
      "Approval letters from external authorities, where required",
      "Completed application form (we prepare it for you)",
    ],
    note:
      "Opening a branch? You'll also need the parent company licence, board resolution, Memorandum and Articles, attested by the UAE Embassy and the Ministry of Foreign Affairs.",
  },

  compare: {
    eyebrow: "Mainland vs Free Zone",
    heading: "Which UAQ Option Is Right for You?",
    intro:
      "Choose mainland if you need to serve UAE customers directly; choose the free zone if you trade internationally or run an online or consulting business from a flexi-desk.",
    columns: ["Compare", "UAQ Mainland", "UAQ Free Trade Zone"],
    rows: [
      { cells: ["Who issues the licence", "UAQ Department of Economic Development", "UAQ Free Trade Zone Authority"] },
      { cells: ["Where you can trade", "Anywhere in the UAE and internationally", "Inside the free zone and internationally; UAE market via a distributor"] },
      { cells: ["Foreign ownership", "100% for most activities", "100%"] },
      { cells: ["Government contracts", "Yes", "No"] },
      { cells: ["Office requirement", "Physical office or shop (tenancy contract)", "Flexi-desk or virtual office allowed"] },
      { cells: ["Typical first-year cost", "AED 12,000–22,000 including office", "From AED 8,000"] },
      { cells: ["Visa eligibility", "Based on office size", "Fixed packages (0–6 visas)"] },
      { cells: ["Best for", "Retail, F&B, contracting, logistics, manufacturing, local services", "E-commerce, consulting, trading abroad, start-ups"] },
    ],
    footnote: "Looking at the free zone instead? See our UAQ Free Zone guide in the Freezone menu.",
  },

  tax: {
    heading: "Taxes & Compliance for UAQ Mainland Companies",
    paragraphs: ["Five rules every new Umm Al Quwain company should plan for from day one."],
    cards: [
      { value: "0% / 9%", title: "Corporate Tax", text: "0% on the first AED 375,000 of taxable profit and 9% above. Businesses with revenue under AED 3 million can elect Small Business Relief for tax periods ending on or before 31 December 2026." },
      { value: "AED 375K", title: "VAT Registration", text: "Mandatory once taxable supplies exceed AED 375,000 a year; optional from AED 187,500." },
      { value: "FTA", title: "Corporate Tax Registration", text: "Required with the Federal Tax Authority within the deadline for your licence issue date, even if no tax is payable." },
      { value: "7 years", title: "Accounting Records", text: "Keep records for at least seven years — we provide bookkeeping, VAT and corporate tax filing." },
      { value: "50+", title: "Emiratisation", text: "Targets apply mainly to larger mainland companies, so most UAQ SMEs are exempt — we'll confirm what applies to you." },
    ],
    tags: ["Corporate tax registration", "VAT registration", "Accounting services"],
  },

  included: [
    "Free consultation & activity matching",
    "Trade name, initial approval & MoA",
    "Office or shop sourcing",
    "External approvals & Chamber registration",
    "Visa & Emirates ID processing",
    "Bank account, VAT & corporate tax",
  ],

  faqs: [
    { question: "How much does business setup in Umm Al Quwain cost?", answer: "A UAQ mainland company typically costs AED 12,000–22,000 in the first year, including the DED trade licence, a small office and one investor visa. The licence alone starts from about AED 8,000; industrial activities and extra visas increase the total." },
    { question: "Is Umm Al Quwain a free zone?", answer: "Umm Al Quwain has both a mainland, licensed by the UAQ Department of Economic Development, and a separate free zone — the UAQ Free Trade Zone." },
    { question: "Can a foreigner own 100% of a company in Umm Al Quwain?", answer: "Yes. Since the 2021 Commercial Companies Law amendments, foreign investors can own 100% of a UAQ mainland company for most commercial and industrial activities." },
    { question: "How long does it take to start a business in Umm Al Quwain?", answer: "Standard commercial and professional licences are usually issued within 3–7 working days once documents are complete. Visas and bank accounts follow." },
    { question: "Do I need a local sponsor for a UAQ mainland company?", answer: "Not for most activities — 100% foreign ownership is allowed. Some professional structures may need a Local Service Agent; we'll confirm for your activity." },
    { question: "Do I need an office to get a trade licence in UAQ mainland?", answer: "Yes, mainland companies need a physical office or shop with a tenancy contract. Budget-friendly options start from around AED 12,000 a year." },
    { question: "How many visas can I get with a UAQ mainland licence?", answer: "Investor visas plus employee visa quotas based on your office size, and you can sponsor family members." },
    { question: "Is a UAQ mainland company subject to corporate tax?", answer: "Yes — 0% on the first AED 375,000 of taxable profit and 9% above, with mandatory FTA registration. Eligible small businesses can elect Small Business Relief." },
    { question: "Can a UAQ company open a bank account in Dubai?", answer: "Yes. UAQ mainland companies can bank with UAE banks across the country, including in Dubai. We prepare the bank file and introduce suitable banks; approval is the bank's decision." },
    { question: "Can I set up in Umm Al Quwain without visiting the UAE?", answer: "Much of the process can be handled for you by our PRO team. You'll need to be in the UAE for visa medicals and biometrics, and some steps may require signatures in person or by Power of Attorney." },
  ],
};
