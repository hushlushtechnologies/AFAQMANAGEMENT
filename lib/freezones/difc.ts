import type { FreezoneData } from "./types";

// TODO(client): confirm the USD 7,850 starting price and ~USD 1,500 Innovation
// Licence fee against DIFC's current published fees before launch.
// TODO: replace images with DIFC photos when available.

export const difc: FreezoneData = {
  slug: "difc",
  name: "DIFC Free Zone",
  shortName: "DIFC",
  hero: {
    eyebrow: "Dubai International Financial Centre",
    title: "DIFC Free Zone",
    highlight: "Business Setup in Dubai",
    subtitle: "The region's leading financial hub — company setup in DIFC with prices starting from USD 7,850.",
    intro:
      "DIFC is home to more than 6,000 companies across finance, wealth management, trading, insurance, retail and dining. Setting up here gives you access to a community of international professionals, modern infrastructure and a fast-growing technology scene — including over 700 firms on Innovation Licences.",
    chips: ["Prices from USD 7,850", "0% tax on qualifying income", "100% foreign ownership", "Common law legal system"],
    image: "/images/services/business-consultancy/financial-operational.png",
  },
  stats: [
    { value: "USD 7,850", label: "Starting price" },
    { value: "6,000+", label: "Companies in DIFC" },
    { value: "700+", label: "Firms on Innovation Licences" },
    { value: "~USD 1,500", label: "Innovation Licence per year" },
  ],

  about: {
    heading: "Benefits of Company Setup in DIFC",
    body:
      "DIFC offers 0% corporate tax for Qualifying Free Zone Persons on qualifying income (non-qualifying income is taxed at 9%) and access to the UAE's network of Double Taxation Avoidance Agreements. In some cases a manager must be appointed who holds a residence visa sponsored by the free zone authority — and to keep that visa valid, the manager needs to enter the UAE at least once every six months.",
    location: { name: "DIFC", area: "Dubai International Financial Centre", image: "/images/services/business-consultancy/restructuring.png" },
    features: [
      { icon: "tax", title: "0% Corporate Tax", text: "On qualifying income for Qualifying Free Zone Persons." },
      { icon: "bank", title: "Full Repatriation", text: "Repatriate 100% of your capital and profits." },
      { icon: "ownership", title: "100% Foreign Ownership", text: "No local partner or sponsor required." },
      { icon: "licence", title: "No Minimum Share Capital", text: "For special purpose companies." },
      { icon: "award", title: "Common Law Legal System", text: "An English-language common law framework with its own courts." },
      { icon: "services", title: "Independent Regulator", text: "Financial services are overseen by the Dubai Financial Services Authority (DFSA)." },
      { icon: "office", title: "Modern Infrastructure", text: "State-of-the-art offices and workspaces built for growth." },
      { icon: "online", title: "Transparent Operations", text: "A clear, well-defined operating and compliance environment." },
      { icon: "ecosystem", title: "International Stock Exchange", text: "Access to an exchange with a robust range of financial instruments." },
    ],
  },

  cost: {
    heading: "DIFC Company Setup Cost",
    intro:
      "DIFC company setup starts from USD 7,850. Your final cost depends on whether your activity is regulated, your legal structure, office choice and visa needs — ask us for an itemised quote.",
    tiers: [
      {
        badge: "Starting price",
        name: "DIFC Company Setup",
        price: "USD 7,850",
        tagline: "Starting price · confirm for your activity & structure",
        points: ["Commercial (non-financial) licence through the DIFC Authority", "Choice of legal structure", "Office from business centres to commercial space"],
      },
      {
        badge: "Tech & start-ups",
        name: "Innovation Licence",
        price: "~USD 1,500 / yr",
        tagline: "For eligible technology companies",
        points: ["Flexible co-working workspace options", "Join 700+ Innovation Licence firms", "Access to DIFC's tech and fintech community"],
      },
      {
        name: "DFSA-Regulated Firms",
        tagline: "Financial services authorised by the DFSA",
        points: ["Regulatory approval from the DFSA", "Costs depend on licence category", "We guide you through the application"],
      },
    ],
  },

  licenceTypes: {
    heading: "Legal Structure Options in DIFC",
    intro:
      "DIFC offers several company structures to match your licensing scope, ownership and compliance needs — private companies are among the most common.",
    items: [
      { title: "Company Limited by Shares (LTD)", text: "A private company with liability limited to shareholders' contributions — the most common DIFC structure." },
      { title: "Limited Liability Company (LLC)", text: "A separate legal entity with limited liability for its members." },
      { title: "Limited Liability Partnership (LLP)", text: "A partnership in which partners' liability is limited." },
      { title: "Limited Partnership (LP)", text: "General partners manage the business; limited partners invest with limited liability." },
      { title: "General Partnership", text: "Two or more partners sharing ownership, management and liability." },
      { title: "Branch of a Foreign Company", text: "Extend an existing overseas company into DIFC." },
      { title: "Representative Office", text: "A foreign company's representative presence for marketing and liaison activities." },
    ],
    note:
      "Regulated financial activities are licensed by the Dubai Financial Services Authority (DFSA); non-financial activities receive a commercial licence through the DIFC Authority.",
  },

  office: {
    heading: "Business Facilities at DIFC",
    intro:
      "DIFC offers state-of-the-art workspaces for both regulated and non-financial firms. Innovation Licence holders — especially technology companies — can also use flexible workspace options.",
    location: { name: "DIFC", address: "Dubai International Financial Centre, Dubai" },
    options: [
      { title: "Business Centres", text: "Serviced offices ready to move into, with shared facilities." },
      { title: "Co-working Spaces", text: "Flexi desks, dedicated desks and private offices for start-ups and small teams." },
      { title: "Commercial Offices", text: "Leased commercial space for established and growing firms." },
      { title: "Retail Spaces", text: "Retail and dining units within the DIFC district." },
    ],
  },

  process: {
    heading: "Steps for DIFC Company Registration",
    intro: "Three main stages take you from application to an operating DIFC company — we guide you through each one.",
    steps: [
      { title: "Get initial approval", text: "Apply to the DFSA for financial companies, or to the DIFC Authority for all other companies, with the application and preliminary documents." },
      { title: "Register the business", text: "Once approved, apply for your trade name and business licence, and secure office space." },
      { title: "Open a bank account", text: "Apply to banks that work with free zone companies — we help prepare a strong application." },
    ],
  },

  documents: {
    heading: "Documents Needed for Company Setup in DIFC",
    groups: [
      { title: "Individuals", items: ["Copies of passport, visa and Emirates ID", "Passport photo"] },
      {
        title: "Corporate Shareholders",
        items: ["Certificate of Incorporation", "Memorandum of Association", "Passport, visa and Emirates ID copies for the manager / owner", "Shareholder audit reports for the past three years", "Incumbency certificate"],
      },
      { title: "General (Everyone)", items: ["Business plan", "Three business name choices", "Organisational structure", "Anti-money laundering procedures"] },
    ],
  },

  otherZones: ["RAKEZ", "DMCC", "Sharjah Media City", "SRTIP Free Zone", "Ajman Media City", "Sharjah Publishing City", "DWTC", "JAFZA", "IFZA", "Meydan", "SAIF Zone", "Fujairah Creative City"],

  included: [
    "Free consultation & structure advice",
    "DFSA or DIFC Authority application",
    "Trade name & licence registration",
    "Office space guidance",
    "Visa & Emirates ID processing",
    "Bank account application support",
  ],

  faqs: [
    { question: "What is a DIFC business licence?", answer: "For regulated activities, a DIFC business licence is issued by the Dubai Financial Services Authority (DFSA). For non-financial activities, a commercial licence is issued through the DIFC Authority, allowing companies to legally operate in the free zone." },
    { question: "What is the cost of setting up a company in DIFC?", answer: "DIFC company setup starts from USD 7,850, and the Innovation Licence for eligible tech companies costs approximately USD 1,500 per year. Your total depends on your activity, legal structure, office and visas — we provide an itemised quote." },
    { question: "What business facilities are available in DIFC?", answer: "Business centres (serviced offices), co-working spaces with flexi desks, dedicated desks and private offices, commercial offices and retail spaces." },
    { question: "How long does it take to set up a company in DIFC?", answer: "Timelines depend on whether your activity is regulated. Non-financial companies move faster through the DIFC Authority, while DFSA-regulated firms go through a fuller authorisation process. We'll outline realistic timings after reviewing your plans." },
    { question: "How can I get a visa through DIFC?", answer: "Once your company is registered, visas are sponsored under the free zone authority. Where a resident manager is required, they must enter the UAE at least once every six months to keep the visa valid." },
    { question: "What types of business licences are available in DIFC?", answer: "Financial services licences regulated by the DFSA, commercial licences for non-financial activities through the DIFC Authority, and the Innovation Licence for eligible technology companies." },
    { question: "What amenities are offered in DIFC?", answer: "DIFC combines modern offices with retail, dining, hospitality and a professional community of international firms, alongside its own courts and an international stock exchange." },
    { question: "What is the cost of renewing a business licence in DIFC?", answer: "Renewal costs depend on your licence type, legal structure and office. We'll include year-two renewal costs in your quote so there are no surprises." },
    { question: "Can I make changes to my business in DIFC?", answer: "Yes. Changes such as activities, shareholders, directors or company name can be made through amendment applications with the relevant authority — we can handle these for you." },
    { question: "What company formation options are available in DIFC?", answer: "Companies limited by shares, LLCs, LLPs, limited partnerships, general partnerships, branches of foreign companies and representative offices." },
    { question: "How can I obtain a business licence in DIFC?", answer: "Get initial approval from the DFSA or DIFC Authority, register your trade name and licence, secure office space, then open your bank account. We guide you through each step." },
  ],
};
