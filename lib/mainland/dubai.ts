import type { FreezoneData } from "@/lib/freezones/types";

// TODO(client): confirm the mainland setup cost range (AED 15,000–50,000+) and
// flexi-desk from AED 5,000/yr before launch.
// Notes on supplied copy:
// - DED is now the Department of Economy and Tourism (DET); DTCM is also part of DET.
// - "0% import/export duties" corrected — standard UAE customs duty is 5% on most goods.
// - "National Media Council" is now the UAE Media Council.

export const dubaiMainland: FreezoneData = {
  slug: "dubai",
  category: "Mainland",
  name: "Dubai Mainland",
  shortName: "Dubai Mainland",
  hero: {
    eyebrow: "DET-Licensed Business Setup",
    title: "Dubai Mainland",
    highlight: "Company Setup",
    subtitle: "100% foreign ownership, a DET trade licence, visa processing and PRO support — trade anywhere in the UAE.",
    intro:
      "A Dubai mainland company is licensed by the Department of Economy and Tourism (DET, formerly DED) and can do business anywhere in the UAE — local markets, government contracts and international trade. Following the Commercial Companies Law reforms, foreign investors can own 100% of most mainland businesses without a local sponsor. Afaq Al Khaleej handles every step, from choosing your activity to opening your corporate bank account.",
    chips: ["100% foreign ownership", "Trade anywhere in the UAE", "Eligible for government contracts", "2,000+ business activities"],
    image: "/images/services/company-formation/mainland.jpg",
  },
  stats: [
    { value: "100%", label: "Foreign ownership (most activities)" },
    { value: "2,000+", label: "Approved business activities" },
    { value: "0%", label: "Personal income tax" },
    { value: "5", label: "Licence types" },
  ],

  about: {
    heading: "Why Set Up a Mainland Company in Dubai?",
    body:
      "Unlike free zone companies, a mainland company can operate across the whole UAE market without geographical restrictions — making it the natural choice for businesses selling to UAE customers, bidding for government work or opening physical outlets.",
    location: { name: "Dubai Mainland", area: "Licensed by DET Dubai", image: "/images/services/business-consultancy/corporate-structuring.png" },
    features: [
      { icon: "ownership", title: "100% Foreign Ownership", text: "Since the 2021 reforms, foreign nationals can own 100% of their mainland company in most sectors — no local sponsor required." },
      { icon: "online", title: "No Location Restrictions", text: "Operate anywhere in the UAE — Dubai, Abu Dhabi, Sharjah or any other emirate." },
      { icon: "award", title: "Government Contracts", text: "Mainland companies can bid for UAE government tenders and contracts — not open to free zone businesses." },
      { icon: "visas", title: "Employee Visas", text: "Visa allocation depends on your company, workspace and authority requirements, subject to eligibility and approval." },
      { icon: "bank", title: "Bank Account Support", text: "We help prepare your application; each bank applies its own checks and decides on approval and timing." },
      { icon: "tax", title: "No Currency Restrictions", text: "No foreign exchange controls — move funds freely and repatriate profits in full." },
      { icon: "activities", title: "2,000+ Business Activities", text: "Far greater flexibility in what you can legally operate compared with a single free zone's activity list." },
      { icon: "licence", title: "No Minimum Capital", text: "No mandatory minimum paid-up capital for most mainland structures." },
      { icon: "office", title: "Office Flexibility", text: "From private offices to co-working and flexi-desks — a registered address is required, but needn't be expensive." },
    ],
  },

  prosCons: {
    placement: "early",
    eyebrow: "Make the Right Choice",
    heading: "Mainland or Free Zone — Which Is Right for You?",
    prosTitle: "Choose mainland if you want to…",
    consTitle: "Choose a free zone if you want to…",
    neutral: true,
    pros: [
      "Sell directly to UAE consumers and businesses",
      "Bid for UAE government tenders and contracts",
      "Open a retail shop, restaurant or physical outlet",
      "Plan employee visa applications as your team grows",
      "Expand branches across all UAE emirates",
    ],
    cons: [
      "Focus on international trade and export",
      "Start with a lower initial investment",
      "Operate with a flexi-desk arrangement",
      "Benefit from 0% customs duties within the zone",
      "Run a remote or digital-first business",
    ],
    note: {
      title: "Not sure which option is right for you?",
      text: "We'll look at your business model, revenue goals and operational needs, then recommend the most cost-effective and compliant structure for your situation. The consultation is free, with no obligation.",
    },
  },

  compare: {
    eyebrow: "Mainland vs Free Zone",
    heading: "Mainland vs Free Zone: Side by Side",
    intro: "A detailed comparison to help you choose the right structure for your business goals.",
    columns: ["Feature", "Mainland Company", "Free Zone Company"],
    rows: [
      { cells: ["Foreign ownership", "100% (most activities)", "100%"] },
      { cells: ["Trade within the UAE", "Unrestricted", "Needs a mainland distributor or permit"] },
      { cells: ["Government contracts", "Eligible", "Not eligible"] },
      { cells: ["Office requirement", "Physical address required", "Flexi-desk options available"] },
      { cells: ["Visa quotas", "Subject to approval (company & workspace)", "Package-based"] },
      { cells: ["Customs duties", "Standard UAE rates", "Often 0% within the free zone"] },
      { cells: ["Corporate tax", "9% above AED 375,000", "0% on qualifying income; 9% otherwise"] },
      { cells: ["Bank account opening", "Subject to the bank's review", "Can be more complex"] },
      { cells: ["Business activities", "2,000+ options", "Limited to the zone's scope"] },
      { cells: ["Setup cost", "AED 15,000 – 50,000+", "AED 5,750 – 30,000+"] },
      { cells: ["Best for", "Local trading, services & government work", "Import/export & international business"] },
      { cells: ["Regulator", "DET Dubai", "The free zone authority"] },
      { cells: ["Branch offices", "Can open across the UAE", "Restricted to the free zone"] },
    ],
  },

  cost: {
    heading: "Mainland Company Setup Cost",
    intro:
      "Mainland setup typically ranges from AED 15,000 to AED 50,000+. Your final price depends on your business activity, office type and visa requirements — request a custom, itemised quote.",
    licence: {
      title: "Complete Mainland Package",
      price: "AED 15,000+",
      note: "Indicative starting range · final price depends on activity, office and visas",
      points: ["DET trade licence (1 year)", "Government fees", "Legal documentation", "PRO services", "1 investor visa", "Bank account assistance"],
    },
    included: [
      "Business activity consultation & DET codes",
      "Trade name search & reservation",
      "Initial approval application",
      "MoA / AoA drafting & notarisation",
      "Office sourcing & Ejari registration",
      "Trade licence application & follow-up",
      "External regulatory approvals",
      "Establishment card processing",
      "Investor & employee visa processing",
      "VAT, corporate tax & annual renewal support",
    ],
    includedTitle: "Our mainland setup services include",
  },

  licenceTypes: {
    heading: "Types of Mainland Business Licences in Dubai",
    intro: "The licence you need depends on your business activity. Choose from DET's approved categories to operate legally on the Dubai mainland.",
    items: [
      { title: "Commercial Licence", text: "For buying and selling goods, trading, import/export and general trading — the most widely issued licence type. Multiple activities on one licence; eligible for government supply contracts.", tags: ["General trading", "Retail shops", "Wholesale", "Import / export", "Construction materials"] },
      { title: "Professional Licence", text: "For skill- or knowledge-based services, with 100% foreign ownership and no local partner. Flexi-desk office options accepted.", tags: ["Management consultancy", "Accounting", "IT services", "Marketing agencies", "Interior design"] },
      { title: "Industrial Licence", text: "For manufacturing and production. Requires industrial or warehouse space and may need Ministry of Industry approval.", tags: ["Food production", "Packaging", "Garments", "Furniture"] },
      { title: "Tourism Licence", text: "For Dubai's travel and hospitality sector, issued with Department of Economy and Tourism approval — with access to Dubai's 17M+ annual visitors.", tags: ["Travel agencies", "Tour operators", "Hotel management", "MICE"] },
      { title: "E-commerce Licence", text: "For online selling and digital transactions within and outside the UAE, including UAE payment gateways and marketplaces.", tags: ["Online retail", "Dropshipping", "Marketplaces", "SaaS", "Digital downloads"] },
    ],
  },

  structures: {
    heading: "Business Structures for Dubai Mainland Companies",
    intro: "Your legal structure affects liability, ownership and operational flexibility. We help you choose the most suitable one.",
    groups: [
      {
        title: "Company Structures",
        items: [
          { title: "Limited Liability Company (LLC)", text: "The most popular structure — 1 to 50 shareholders, liability limited to share capital, up to 100% foreign ownership and no mandatory minimum capital." },
          { title: "Sole Proprietorship", text: "Owned and managed by one person with unlimited liability. Foreign nationals can own 100% in professional activities with a Local Service Agent." },
          { title: "Civil Company", text: "A partnership of two or more qualified professionals in the same field — e.g. clinics, law, engineering or accounting firms." },
        ],
      },
      {
        title: "Branch Structures",
        items: [
          { title: "Branch of a Foreign Company", text: "An extension of an overseas company, 100% foreign-owned. Activities must match the parent; a National Service Agent may be required in some cases." },
          { title: "Branch of a UAE Company", text: "Extends a UAE-registered company into Dubai or other emirates, with activities aligned to the parent's licence." },
        ],
      },
    ],
    table: {
      title: "Quick comparison — all business structures",
      columns: ["Structure", "Shareholders", "Foreign ownership", "Liability", "Best for"],
      rows: [
        ["LLC", "1 – 50", "Up to 100%", "Limited", "All business types"],
        ["Sole Proprietorship", "1 only", "100% (professional)", "Unlimited", "Freelancers, consultants"],
        ["Civil Company", "2 or more", "With LSA", "Unlimited", "Professionals, clinics"],
        ["Foreign Branch", "Parent company", "100%", "Parent liable", "International expansion"],
        ["UAE Branch", "Parent company", "Same as parent", "Parent liable", "UAE expansion"],
      ],
    },
  },

  office: {
    heading: "Secure Your Office Space",
    intro:
      "All mainland companies need a registered office address in Dubai, registered with Ejari — the Dubai Land Department's official tenancy system. Your office also affects your visa quota.",
    location: { name: "Ejari-registered office", address: "Required for every Dubai mainland company" },
    options: [
      { title: "Flexi-desk / Co-working · from AED 5,000/yr", text: "The most cost-effective option — ideal for professional service companies." },
      { title: "Shared Office · mid-range", text: "A dedicated desk with meeting room access included." },
      { title: "Private Office · premium", text: "Fully dedicated space — needed for higher visa quotas." },
      { title: "Warehouse / Commercial · industrial", text: "Required for industrial and manufacturing activities." },
    ],
  },

  process: {
    heading: "How to Set Up a Mainland Company in Dubai: 10 Steps",
    intro:
      "Processing time depends on your activity, legal structure, documents and required approvals. Licence issuance, visas and bank account opening each follow separate reviews.",
    steps: [
      { title: "Choose your business activity", text: "Pick from 2,000+ DET activities — we identify the exact activity codes and any extra approvals." },
      { title: "Choose your legal structure", text: "LLC, sole proprietorship, civil company or branch, based on activity, partners and ownership." },
      { title: "Reserve your trade name", text: "Must be unique and follow UAE naming rules — no offensive, religious, political or government names." },
      { title: "Apply for initial approval", text: "DET's green light on your activity and structure, with passport copies, trade name and activity details." },
      { title: "Secure your office space", text: "A registered, Ejari-registered office — from flexi-desks to private offices and warehouses." },
      { title: "Draft legal documents", text: "MoA / AoA and notarisation for an LLC, or board resolution and parent documents for a branch." },
      { title: "Submit & apply for trade licence", text: "We submit your complete document package to DET and handle all follow-ups." },
      { title: "Obtain external approvals", text: "If your activity needs them — e.g. DHA, KHDA, Dubai Municipality or RERA." },
      { title: "Pay fees & collect licence", text: "Pay government fees and receive your DET trade licence — your company is officially licensed." },
      { title: "Bank account & visas", text: "Open your corporate account and apply for investor (2-year or Golden Visa) and employee visas." },
    ],
  },

  documents: {
    heading: "Documents Required for Dubai Mainland Setup",
    note: "Requirements vary by structure and activity — we confirm your exact checklist before you submit.",
    groups: [
      { title: "Initial Approval", items: ["Passport copies of all shareholders", "Visa copies (if UAE residents)", "Proposed trade name", "Business activity details"] },
      { title: "Trade Licence Application", items: ["Initial approval certificate", "Trade name certificate", "Notarised MoA / AoA", "Ejari tenancy contract", "Shareholder photographs", "Activity-specific approvals (if required)", "NOC (if employed in the UAE)"] },
      { title: "Branch Office", items: ["Board resolution", "Certificate of incorporation", "Parent company MoA / AoA", "Power of Attorney"] },
    ],
  },

  infoBlock: {
    eyebrow: "If Required",
    heading: "External Approvals by Business Activity",
    paragraphs: [
      "Certain business activities need approval from additional government bodies before your licence is issued. We manage these external approvals as part of our PRO services.",
    ],
    listTitle: "Activity → approving authority",
    list: [
      "Healthcare — Dubai Health Authority (DHA)",
      "Education — KHDA",
      "Financial services — UAE Central Bank / SCA",
      "Food & beverage — Dubai Municipality",
      "Legal services — Ministry of Justice",
      "Security services — Dubai Police",
      "Media & advertising — UAE Media Council",
      "Real estate — RERA",
    ],
  },

  tax: {
    heading: "Tax Advantages for Mainland Companies",
    paragraphs: [
      "UAE mainland companies benefit from one of the world's most business-friendly tax environments. Corporate tax applies at 9% only on taxable income above AED 375,000, and there's no personal income tax.",
    ],
    cards: [
      { value: "0%", title: "Personal Income Tax", text: "No personal income tax for owners or employees." },
      { value: "9%", title: "Corporate Tax", text: "Only on taxable income above AED 375,000; 0% below that threshold." },
      { value: "5%", title: "Customs Duty", text: "Standard UAE customs duty applies to most imported goods." },
      { value: "0%", title: "Withholding Tax", text: "No withholding tax on dividends and royalties." },
    ],
    tags: ["Corporate tax registration", "VAT registration", "Accounting services"],
  },

  included: [
    "Free consultation & activity codes",
    "Trade name & initial approval",
    "MoA / AoA, Ejari & licence",
    "External approvals & PRO services",
    "Investor & employee visas",
    "Bank account, VAT & corporate tax",
  ],

  faqs: [
    { question: "What is a Dubai mainland company?", answer: "A business licensed by Dubai's Department of Economy and Tourism (DET, formerly DED) that can trade anywhere in the UAE, including with government entities and local customers." },
    { question: "Can foreigners own 100% of a Dubai mainland company?", answer: "Yes, for most business activities. Since the 2021 Commercial Companies Law reforms, many activities allow 100% foreign ownership without a local sponsor; some strategic activities have extra conditions." },
    { question: "How much does mainland company setup in Dubai cost?", answer: "Typically between AED 15,000 and AED 50,000+, depending on your activity, office type and visa requirements. We provide an itemised quote before you commit." },
    { question: "Do I need a physical office for a mainland company?", answer: "Yes — every mainland company needs an Ejari-registered office address, but options start with affordable flexi-desks and co-working spaces." },
    { question: "How long does mainland company setup take?", answer: "It depends on your activity, structure, documents and any external approvals. Licence issuance, visas and bank account opening each follow their own review." },
    { question: "Can a mainland company bid for government contracts?", answer: "Yes. Mainland-licensed companies can bid for UAE government tenders and contracts, which free zone companies generally cannot." },
    { question: "What's the difference between mainland and free zone?", answer: "Mainland companies can trade directly across the UAE and bid for government work but need a physical address; free zone companies often cost less and suit international trade, but need a distributor or permit to sell on the mainland." },
    { question: "Do mainland companies pay corporate tax?", answer: "Yes — 9% on taxable income above AED 375,000, with 0% below that threshold. There's no personal income tax." },
  ],
};
