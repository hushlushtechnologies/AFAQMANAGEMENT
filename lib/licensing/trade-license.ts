import type { FreezoneData } from "@/lib/freezones/types";

// TODO(client): confirm "up to 10 activities per licence", the home-based licence
// fee (AED 1,070 + AED 300 Chamber) and Instant Licence details before launch.
// Notes on supplied copy (corrected on the page):
// - Mainland companies no longer typically need a 51% local partner (2021 reforms).
// - Free zones aren't simply "exempt from corporate tax for a period" — qualifying
//   income can be taxed at 0%, other income at 9%.
// - DED is now the Department of Economy and Tourism (DET).

export const tradeLicense: FreezoneData = {
  slug: "trade-license",
  category: "Business Licensing",
  name: "Trade Licence in Dubai",
  shortName: "Trade Licence",
  hero: {
    eyebrow: "Trade Licence in Dubai · 2026 Guide",
    title: "Trade Licence in Dubai",
    highlight: "Your Legal Permit to Do Business",
    subtitle: "A trade licence is the legal permit that lets a person or company carry out a specific business activity in Dubai.",
    intro:
      "Getting a Dubai trade licence means choosing your business activity, picking mainland or free zone, registering a trade name, getting initial approval, securing premises and paying the fees. Licences are issued by Dubai's Department of Economy and Tourism (DET, formerly DED) or a free zone authority — and Afaq Al Khaleej helps you choose the right one and handles every step.",
    chips: ["Commercial, professional & industrial", "Mainland, free zone or offshore", "Instant licence options", "Renewal support"],
    image: "/images/services/pro-government-services/business-licensing.png",
  },
  stats: [
    { value: "5", label: "Main licence types" },
    { value: "3", label: "Jurisdiction options" },
    { value: "10", label: "Activities per licence" },
    { value: "AED 1,070", label: "Home-based licence from" },
  ],

  about: {
    heading: "Benefits of a Trade Licence in Dubai",
    body:
      "A trade licence is essential for any commercial activity in Dubai — trading, services or production. The licence type you need depends mainly on your core revenue-generating activity, and it unlocks Dubai's strategic location and world-class infrastructure for reaching global markets.",
    location: { name: "Dubai", area: "Licensed by DET or a free zone authority", image: "/images/services/pro-government-services/government-approvals.png" },
    features: [
      { icon: "tax", title: "Tax Advantages", text: "No personal income tax, 0% corporate tax on taxable profit up to AED 375,000, and 0% on qualifying free zone income." },
      { icon: "trading", title: "Domestic & Foreign Trade", text: "Access importing, manufacturing, local distribution and export opportunities." },
      { icon: "award", title: "Boost Credibility", text: "A licensed, compliant business earns more trust in local and international markets." },
      { icon: "visas", title: "Sponsorship", text: "Sponsor family members and staff, making it easier to relocate and build your team." },
      { icon: "online", title: "Ease of Setup", text: "Licensing is straightforward, with many companies operating within weeks." },
      { icon: "services", title: "Government Support", text: "Official licensing support, incentives and a transparent regulatory framework for SMEs." },
    ],
  },

  licenceTypes: {
    heading: "Types of Trade Licences in Dubai",
    intro: "The licence you need depends on your core activity.",
    items: [
      { title: "Professional Licence", text: "For individuals and companies providing professional services.", tags: ["Accountants", "Lawyers", "Consultants"] },
      { title: "Commercial Licence", text: "For businesses buying or selling products, including wholesale and retail trading.", tags: ["Wholesale", "Retail", "Trading"] },
      { title: "Industrial Licence", text: "For manufacturing and industrial production.", tags: ["Factories", "Assembly plants"] },
      { title: "E-commerce Licence", text: "For selling products and services online and running digital businesses, including home-based entrepreneurs.", tags: ["Online stores", "Digital platforms", "Home-based"] },
      { title: "General Trading Licence", text: "Trade in a wide range of goods under a single licence.", tags: ["Multiple product lines", "Import / export"] },
    ],
  },

  activities: {
    eyebrow: "Where You'll Operate",
    heading: "Mainland, Free Zone or Offshore Licence?",
    intro: "Where you set up determines the kind of licence you need — and where you can do business.",
    groups: [
      { icon: "online", title: "Mainland Licence", text: "Issued by DET. Trade directly with the local market anywhere in the UAE; 100% foreign ownership is available for most activities, and an LLC is a common legal form.", tags: ["UAE-wide trading", "Government contracts"], href: "/mainland/dubai" },
      { icon: "ownership", title: "Free Zone Licence", text: "Issued by each free zone authority, with 100% foreign ownership and fast, streamlined licensing — but limits on trading directly on the mainland.", tags: ["100% ownership", "Fast setup"], href: "/business-setup-in-dubai" },
      { icon: "bank", title: "Offshore Licence", text: "For companies doing business only outside the UAE — no physical office, with privacy and international tax planning benefits.", tags: ["International business", "Holding"], href: "/offshore/dubai" },
    ],
  },

  cost: {
    heading: "Dubai Trade Licence Options & Cost",
    intro:
      "Your trade licence cost depends on your activity, licence type, jurisdiction and any extra permits. Choose the licence route that fits your business — we'll give you an itemised quote.",
    tiers: [
      {
        badge: "Standard",
        name: "Normal Trade Licence",
        tagline: "For most mainland businesses",
        points: ["Memorandum of Association (electronic or paper)", "Lease agreement for your premises", "Full range of activities"],
      },
      {
        badge: "Fastest",
        name: "Instant Business Licence",
        tagline: "Issued within minutes for eligible activities",
        points: ["For LLCs and sole establishments", "Virtual office and MoA drafting", "Dubai Chamber membership & establishment card"],
      },
      {
        badge: "Home-based",
        name: "Home Business Licence",
        price: "AED 1,070",
        tagline: "Plus AED 300 Dubai Chamber membership",
        points: ["Single-establishment licence", "Includes knowledge & innovation fees", "Issued under your trade name"],
      },
    ],
  },

  process: {
    heading: "How to Get a Trade Licence in Dubai",
    intro:
      "Setting up a business in Dubai involves approvals from DET and other relevant authorities. We handle each step and keep your application moving.",
    steps: [
      { title: "Choose a company name", text: "A unique name that follows UAE naming rules and isn't used by an active company." },
      { title: "Set your legal structure", text: "Sole proprietorship, LLC, partnership, branch or free zone company." },
      { title: "Specify business activities", text: "List your main and supplementary activities — up to 10 per licence." },
      { title: "Apply for initial approval", text: "Complete the application and submit it to DET." },
      { title: "Secure your location", text: "Mainland licences need premises with an Ejari-attested tenancy contract." },
      { title: "Choose the licence type", text: "Normal, Instant or home-based — matched to your activities." },
      { title: "Add licence party details", text: "Addresses, nationalities, contact details, roles and ownership shares of all partners." },
      { title: "Submit your application", text: "Send the complete document package to DET." },
      { title: "Sign legal documents", text: "Partners e-sign the Memorandum of Association once registered on the portal." },
      { title: "Pay fees & receive licence", text: "Pay the licence and issuance fees and receive your final licence and documents." },
    ],
  },

  documents: {
    heading: "Documents Required for a Dubai Trade Licence",
    image: "/images/services/feasibility-studies/operational-assessment.png",
    items: [
      "Completed trade licence application, signed by every manager",
      "Memorandum of Association (we help draft it)",
      "Trade name approval from DET",
      "Passport copy and Emirates ID of each managing partner",
    ],
    note: "Keep all supporting documents complete and well-organised to avoid delays.",
  },

  infoBlock: {
    eyebrow: "Renewals",
    heading: "How to Renew a UAE Trade Licence",
    paragraphs: [
      "Start your renewal before your current licence expires to avoid penalties. Renewal fees depend on your business activity and licence type — and we can manage the whole renewal for you.",
    ],
    listTitle: "Renewal steps",
    list: [
      "Obtain any required approvals for your activity",
      "Check your operations, lease and permits are current and compliant",
      "Pay the renewal fees",
    ],
  },

  included: [
    "Free consultation & licence advice",
    "Trade name & initial approval",
    "MoA drafting & document review",
    "Premises & Ejari guidance",
    "Application & fee processing",
    "Annual renewal support",
  ],

  faqs: [
    { question: "What is a trade licence in Dubai?", answer: "An official permit issued by DET or a free zone authority that authorises a company to carry out named business activities in Dubai, such as trading, consultancy, manufacturing or tourism services." },
    { question: "How much does a trade licence cost in Dubai?", answer: "It varies with your activity, licence type, jurisdiction and any extra permits. A home-based licence starts from around AED 1,070 plus Chamber membership; other licences cost more. We provide an itemised quote." },
    { question: "How long does a Dubai trade licence take to issue?", answer: "Instant licences can be issued within minutes for eligible activities. Standard licences depend on approvals, premises and documents — often a matter of days to weeks." },
    { question: "Is a trade licence the same as a DED licence?", answer: "A DED licence is a mainland trade licence issued by Dubai's licensing authority — now the Department of Economy and Tourism (DET). Free zone licences are issued by each free zone authority." },
    { question: "Can a foreigner get 100% ownership with a Dubai trade licence?", answer: "Yes, for most activities. Since the 2021 reforms, mainland companies can be 100% foreign-owned for most activities, and free zone companies always allow 100% foreign ownership." },
    { question: "Do I need an office to get a mainland trade licence?", answer: "Yes — mainland licences need premises with an Ejari-registered tenancy contract, though flexi-desk and virtual office options exist for some activities and Instant Licences." },
    { question: "Do I have to register for corporate tax after getting a trade licence?", answer: "Yes. UAE companies must register with the Federal Tax Authority for corporate tax, even if no tax is payable." },
  ],
};
