import type { FreezoneData } from "@/lib/freezones/types";

// TODO(client): confirm ADRA licence fees (AED 790–5,500), "940+ Instant Licence
// activities", AED 100 per extra activity and the cost ranges before launch.

export const abuDhabiMainland: FreezoneData = {
  slug: "abu-dhabi",
  category: "Mainland",
  name: "Abu Dhabi",
  shortName: "Abu Dhabi",
  hero: {
    eyebrow: "Abu Dhabi Company Formation · 2026",
    title: "Business Setup in Abu Dhabi",
    highlight: "Mainland or Free Zone",
    subtitle: "100% foreign ownership, licence fees from AED 790, and licensing that runs fully online through TAMM.",
    intro:
      "Start your company in the UAE capital and trade with its government and enterprise clients from day one. Afaq Al Khaleej guides you from choosing the right ADRA licence route to opening your corporate bank account.",
    chips: ["100% foreign ownership", "ADRA licences from AED 790", "Mainland, free zone or remote setup", "Licences issued in days"],
    image: "/images/services/feasibility-studies/entering-uae-market.png",
  },
  stats: [
    { value: "100%", label: "Foreign ownership" },
    { value: "AED 790", label: "ADRA licence fee from" },
    { value: "940+", label: "Activities on the Instant Licence" },
    { value: "9%", label: "Corporate tax above AED 375K" },
  ],

  about: {
    heading: "Why Set Up a Business in Abu Dhabi?",
    body:
      "Abu Dhabi is the UAE capital and its largest economy — home to ADNOC, Mubadala, ADQ and many federal ministries. If your clients are government bodies or large enterprises, it's the place to be.",
    location: { name: "The UAE Capital", area: "Federal ministries & sovereign funds", image: "/images/services/company-formation/pro-government-support.png" },
    features: [
      { icon: "award", title: "Government & Enterprise Contracts", text: "A mainland licence lets you bid for contracts across the emirate and the wider UAE." },
      { icon: "ownership", title: "100% Foreign Ownership", text: "Most commercial, professional and industrial activities no longer need an Emirati partner." },
      { icon: "tax", title: "Competitive Tax", text: "0% personal income tax; corporate tax is 0% up to AED 375,000 of taxable profit and 9% above." },
      { icon: "visas", title: "Set Up from Abroad", text: "The ADRA Virtual Licence lets investors outside the UAE register a company before they arrive." },
      { icon: "online", title: "Fully Digital Licensing", text: "Applications, renewals and amendments run through the TAMM government platform." },
      { icon: "trading", title: "World-Class Infrastructure", text: "Khalifa Port, Zayed International Airport and a 90-minute drive to Dubai." },
    ],
  },

  cost: {
    heading: "Business Setup Cost in Abu Dhabi",
    intro:
      "Official ADRA fees for the Instant and Virtual licences start at AED 790 and go up to AED 5,500 including six activities. A standard mainland LLC with a small office and one investor visa usually costs AED 20,000–35,000 in the first year.",
    licence: {
      title: "Typical first-year total",
      price: "AED 20,000–35,000",
      note: "Standard mainland LLC with office and one visa",
      points: ["Economic licence and initial approval", "Tawtheeq-registered office", "One investor visa and establishment card", "Afaq fees agreed in writing"],
    },
    addOns: [
      { label: "Trade name and initial approval", price: "500–1,500" },
      { label: "Economic licence fee (Instant or Virtual)", price: "790–5,500" },
      { label: "Memorandum of Association notarisation", price: "1,000–3,000" },
      { label: "Office rent, Tawtheeq-registered (per year)", price: "15,000+" },
      { label: "Abu Dhabi Chamber membership", price: "1,000–3,000" },
      { label: "Establishment card and immigration file", price: "1,500–2,500" },
      { label: "Investor visa (per person, 2 years)", price: "4,000–6,000" },
    ],
    guidance:
      "Extra activities cost AED 100 each on the Instant and Virtual licences. The Virtual Licence needs no office, which removes the biggest cost line. Renewals cost less than year one because your Memorandum, establishment card and bank account are already in place.",
    notes: ["Licence route", "Business activity", "Office size", "Number of visas"],
  },

  licenceTypes: {
    heading: "Abu Dhabi Business Licence Options in 2026",
    intro: "ADRA offers several licence routes — and picking the right one is the single biggest cost decision in your setup.",
    items: [
      { title: "Standard Economic Licence", text: "The full mainland licence for any activity, with a physical office and a visa quota.", tags: ["All activities", "Office required", "Visas by office size"] },
      { title: "Instant Licence", text: "Fast-tracked for UAE nationals, residents and GCC nationals. Documents can follow within one month.", tags: ["AED 790–5,500", "940 activities", "Lease required"] },
      { title: "Virtual Licence", text: "For foreign investors living outside the UAE — sole proprietorship or LLC, with just a passport and photo.", tags: ["AED 790–5,500", "No office", "Set up remotely"] },
      { title: "Freelancer Licence", text: "A home-based licence for UAE nationals and residents working on their own.", tags: ["Individuals", "Home-based"] },
      { title: "Tajer Abu Dhabi", text: "Small-scale trading and online selling for eligible Emirati and GCC owners.", tags: ["E-commerce", "Small trading"] },
      { title: "Dual Licence", text: "Lets an Abu Dhabi free zone company operate on the mainland too.", tags: ["Free zone + mainland"] },
    ],
    note:
      "Every licence also has an activity category — commercial, professional, industrial, tourism, agricultural or crafts. Some activities need approval from Abu Dhabi Municipality, the Department of Health or the Department of Culture and Tourism.",
  },

  activities: {
    eyebrow: "Abu Dhabi Free Zones",
    heading: "Free Zones in Abu Dhabi",
    intro:
      "Each free zone has its own regulator, packages and focus sectors. Pick the one that matches your activity — or explore our full Abu Dhabi free zones guide.",
    groups: [
      { icon: "bank", title: "ADGM", text: "Abu Dhabi Global Market — an international financial centre on Al Maryah Island with English common law, plus the Hub71 tech ecosystem.", tags: ["Financial services", "Holding companies", "Family offices"], href: "/freezone/abu-dhabi" },
      { icon: "trading", title: "KEZAD", text: "Khalifa Economic Zones Abu Dhabi — industrial and logistics zones next to Khalifa Port.", tags: ["Manufacturing", "Warehousing", "Trading"], href: "/freezone/abu-dhabi" },
      { icon: "ecosystem", title: "Masdar City Free Zone", text: "Technology, sustainability, R&D and start-ups, with flexible desk packages.", tags: ["Tech", "Sustainability", "Start-ups"], href: "/freezone/abu-dhabi" },
      { icon: "media", title: "twofour54", text: "Abu Dhabi's free zone for media, gaming, film and entertainment companies.", tags: ["Media", "Gaming", "Film"], href: "/freezone/abu-dhabi" },
      { icon: "ecommerce", title: "Abu Dhabi Airports Free Zone", text: "ADAFZ — logistics, trading and aviation businesses at Zayed International Airport.", tags: ["Logistics", "Aviation", "Trading"], href: "/freezone/abu-dhabi" },
    ],
  },

  structures: {
    heading: "Company Formation in Abu Dhabi: Legal Structures",
    intro: "Your legal form decides who can own the company, your personal liability and which licence routes are open to you.",
    groups: [
      {
        title: "Company Structures",
        items: [
          { title: "Limited Liability Company (LLC) · most popular", text: "1–50 shareholders, liability limited to capital — best for most trading, contracting and service businesses." },
          { title: "Sole Establishment", text: "One individual with unlimited liability — for small traders and professionals." },
          { title: "Civil Company", text: "Two or more professionals with unlimited, shared liability — consultancies, engineering and medical partnerships." },
        ],
      },
      {
        title: "Branch Structures",
        items: [
          { title: "Branch of a Foreign Company", text: "Owned by the parent, which is liable — for overseas firms entering Abu Dhabi." },
          { title: "Branch of a UAE or GCC Company", text: "Owned by the parent, which is liable — for companies from Dubai or other emirates expanding to the capital." },
        ],
      },
    ],
    notes: [
      "Our tip for foreign investors: a single-shareholder LLC is the most common choice — it combines full ownership with limited liability, and works on the Standard, Instant and Virtual licence routes.",
    ],
  },

  process: {
    heading: "How to Start a Business in Abu Dhabi: Step by Step",
    intro: "The official ADRA sequence, from choosing your activity to opening your bank account. Our PRO team handles TAMM, ADRA, Tawtheeq and the Chamber for you.",
    cautionTitle: "Licence in days",
    caution: "Instant licences can be issued within days; standard licences follow once documents and any external approvals are ready.",
    steps: [
      { title: "Choose your business activity", text: "Pick from the ADRA list and the licence route that suits it." },
      { title: "Select your legal form", text: "LLC, sole establishment, civil company or branch." },
      { title: "Reserve a trade name", text: "Register a unique name on TAMM that follows UAE naming rules." },
      { title: "Get initial approval", text: "ADRA confirms no objection to your activity and shareholders." },
      { title: "Secure your business location", text: "Lease an office or shop and register it on Tawtheeq (not needed for Virtual or Freelancer licences)." },
      { title: "Sign contractual agreements", text: "A Memorandum of Association for LLCs, or a Local Service Agent agreement where required." },
      { title: "Obtain additional approvals", text: "If needed — Abu Dhabi Municipality, Department of Health or Department of Culture and Tourism." },
      { title: "Pay fees & receive your licence", text: "Your economic licence is issued through TAMM once everything is in place." },
      { title: "Register, visas & bank account", text: "Chamber registration, establishment card, residence visas and your corporate bank account." },
    ],
  },

  documents: {
    heading: "Documents for Company Registration in Abu Dhabi",
    image: "/images/services/finance-management/management-reporting.png",
    items: [
      "Passport copies of shareholders and manager",
      "Passport-size photos",
      "UAE visa or entry stamp, or Emirates ID for residents",
      "NOC from current sponsor if employed in the UAE",
      "Three trade name options",
      "Tawtheeq-registered tenancy contract",
      "Memorandum of Association or Local Service Agent agreement",
      "External approvals where the activity needs them",
    ],
    note:
      "Branch or Virtual Licence? Branches need the parent company licence, board resolution and articles, attested by the UAE embassy and MOFA. The Virtual Licence needs only a passport and photo.",
  },

  compare: {
    eyebrow: "Mainland vs Free Zone",
    heading: "Where Should You Set Up in Abu Dhabi?",
    intro:
      "Choose the mainland if you sell to UAE customers or government; choose a free zone if you trade internationally or need a sector-specific regulator. The ADRA Dual Licence lets an Abu Dhabi free zone company also operate on the mainland.",
    columns: ["Compare", "Abu Dhabi mainland (ADRA)", "Abu Dhabi free zones"],
    rows: [
      { cells: ["Licensing body", "Abu Dhabi Registration Authority (ADRA)", "Each free zone authority"] },
      { cells: ["Where you can trade", "Anywhere in the UAE and abroad", "Inside the zone and abroad; mainland via Dual Licence or a distributor"] },
      { cells: ["Foreign ownership", "100% for most activities", "100%"] },
      { cells: ["Government contracts", "Yes", "Limited"] },
      { cells: ["Office", "Tawtheeq-registered tenancy (not needed for Virtual or Freelancer licences)", "Flexi-desk to warehouse, by package"] },
      { cells: ["Typical first-year cost", "AED 20,000–35,000 (LLC with office + one visa)", "AED 15,000–50,000+ depending on zone"] },
      { cells: ["Best for", "Trading, contracting, consultancy, F&B, government suppliers", "Finance (ADGM), industry & logistics (KEZAD), tech (Masdar), media (twofour54)"] },
    ],
  },

  tax: {
    heading: "After Your Licence: Visas, Banking & Tax",
    paragraphs: ["What every new Abu Dhabi company needs to plan for once the licence is issued."],
    cards: [
      { value: "Visas", title: "Residence Visas", text: "For investors, family and staff, with mainland quotas linked to your office size." },
      { value: "Bank", title: "Corporate Bank Account", text: "With UAE banks that onboard Abu Dhabi licences — we prepare the compliance file." },
      { value: "0% / 9%", title: "Corporate Tax", text: "0% up to AED 375,000 of taxable profit and 9% above. FTA registration is mandatory." },
      { value: "AED 375K", title: "VAT Registration", text: "Mandatory once taxable supplies exceed AED 375,000 a year; optional from AED 187,500." },
      { value: "7 years", title: "Accounting Records", text: "Keep records for at least seven years. Emiratisation targets apply to larger private companies." },
    ],
    tags: ["Corporate tax registration", "VAT registration", "Accounting services"],
  },

  included: [
    "Free consultation & licence route advice",
    "TAMM, ADRA & trade name filing",
    "MoA / LSA agreement & Tawtheeq",
    "External approvals & Chamber registration",
    "Visa & Emirates ID processing",
    "Bank account, VAT & corporate tax",
  ],

  faqs: [
    { question: "How much does it cost to set up a business in Abu Dhabi?", answer: "ADRA's Instant and Virtual licences cost AED 790–5,500 including six activities. A standard mainland LLC with a small office and one investor visa usually costs AED 20,000–35,000 in the first year." },
    { question: "Can a foreigner own 100% of a company in Abu Dhabi?", answer: "Yes. Most commercial, professional and industrial activities no longer need an Emirati partner, so foreign investors can own 100%." },
    { question: "How long does company formation in Abu Dhabi take?", answer: "Instant licences can be issued within days. Standard licences follow once documents, tenancy registration and any external approvals are ready." },
    { question: "Can I set up a business in Abu Dhabi without living in the UAE?", answer: "Yes. The ADRA Virtual Licence lets foreign investors living abroad register a sole proprietorship or LLC with just a passport and photo." },
    { question: "Do I need an office for an Abu Dhabi trade licence?", answer: "Standard licences need a Tawtheeq-registered office, and your office size affects your visa quota. Virtual and Freelancer licences don't need an office." },
    { question: "Should I choose the mainland or a free zone in Abu Dhabi?", answer: "Choose the mainland to sell to UAE customers or government; choose a free zone to trade internationally or work under a sector-specific regulator. The Dual Licence lets a free zone company also operate on the mainland." },
    { question: "What business can I start in Abu Dhabi?", answer: "Commercial, professional, industrial, tourism, agricultural and crafts activities — with 940+ activities available on the Instant Licence alone. Some need external approvals." },
    { question: "How many visas can I get with an Abu Dhabi licence?", answer: "Mainland visa quotas are linked to your office size. Free zone quotas depend on the zone and package." },
    { question: "Do Abu Dhabi companies pay corporate tax?", answer: "Yes — 0% on taxable profit up to AED 375,000 and 9% above, with mandatory FTA registration. There's no personal income tax." },
    { question: "Why use a business setup consultant in Abu Dhabi?", answer: "Choosing the right licence route is the biggest cost decision. We compare Standard, Instant, Virtual and free zone options for your activity and handle TAMM, ADRA, Tawtheeq, the Chamber and immigration for you." },
  ],
};
