import type { FreezoneData } from "./types";

// TODO(client): confirm the "from around AED 8,000" starting cost against UAQ
// FTZ's current packages before launch.
// Notes on supplied copy: corrected UAQ's location (northern / Arabian Gulf coast,
// not the eastern coast), removed "Sharjah International Airport" listed as a
// seaport, and updated "no corporate tax" to reflect UAE corporate tax (2023).

export const uaq: FreezoneData = {
  slug: "uaq",
  name: "UAQ Free Trade Zone",
  shortName: "UAQ",
  hero: {
    eyebrow: "Umm Al Quwain Free Trade Zone",
    title: "UAQ Free Zone",
    highlight: "Company Setup in Umm Al Quwain",
    subtitle: "A cost-effective, investor-friendly free zone for corporates, micro-businesses and SMEs — packages from around AED 8,000.",
    intro:
      "UAQ Free Trade Zone was established in 1987 and gained wider recognition after its restructuring in 2014. Close to highways connecting the Emirates and within reach of Dubai and Sharjah's airports and seaports, it attracts companies of all sizes from over 150 nationalities — with a transparent legal framework, a low cost of living and generous incentives for startups and SMEs.",
    chips: ["Packages from ~AED 8,000", "100% foreign ownership", "Remote setup, no visit needed", "Dual licensing"],
    image: "/images/services/investment-services/opportunity-hero.png",
  },
  stats: [
    { value: "~AED 8,000", label: "Starting packages" },
    { value: "150+", label: "Nationalities" },
    { value: "1987", label: "Established" },
    { value: "6", label: "Licence types" },
  ],

  about: {
    heading: "Why UAQ Free Zone?",
    body:
      "UAQ FTZ combines an open investment climate with easy access to trading partners in Asia and Africa. Whether you're starting a new business or expanding into new markets, it offers a progressive, secure environment across industry sectors — at a lower setup and operating cost than many other emirates.",
    location: { name: "Umm Al Quwain", area: "Northern coast of the UAE", image: "/images/about/who-we-are-building.png" },
    features: [
      { icon: "online", title: "Strategic Location", text: "An ideal base for reaching the Middle East, Africa and Asia, close to major transport hubs and international airports." },
      { icon: "tax", title: "Business-Friendly Policies", text: "Attractive incentives, full repatriation of capital and profits, and no currency restrictions." },
      { icon: "licence", title: "Cost-Effective", text: "Setup and operating costs are typically lower than in other emirates — ideal for startups and small businesses." },
      { icon: "services", title: "Access to Talent", text: "A skilled, diverse labour pool, supported by government training and workforce initiatives." },
      { icon: "office", title: "Infrastructure & Facilities", text: "Robust infrastructure and modern facilities across a wide range of sectors." },
      { icon: "ownership", title: "Full Ownership", text: "100% foreign ownership of your company, with no local partner required." },
    ],
  },

  cost: {
    heading: "Cost of Business Setup in UAQ Free Zone",
    intro:
      "Your cost depends on the licence type and the facilities you choose. Basic packages for small businesses and freelancers start from around AED 8,000 — one of the most cost-effective options in the UAE.",
    tiers: [
      {
        badge: "Starting price",
        name: "Basic Package",
        price: "~AED 8,000",
        tagline: "For small businesses and freelancers",
        points: ["Licence for your chosen activity", "Virtual office or shared desk options", "Remote setup — no visit needed"],
      },
      {
        badge: "Growing teams",
        name: "Package with Visas",
        tagline: "Visa quota depends on licence and office",
        points: ["Residence visas for owners and employees", "Office space sized to your visa needs", "Medical and Emirates ID quoted separately"],
      },
      {
        badge: "Trading & industry",
        name: "Trading or Industrial Setup",
        tagline: "For import / export and manufacturing",
        points: ["Commercial, general trading or industrial licence", "Logistics support", "Import and export duty benefits"],
      },
    ],
  },

  licenceTypes: {
    heading: "Types of Licences in UAQ Free Zone",
    intro: "A licence confirms the nature and legitimacy of your business. UAQ Free Zone offers six main options.",
    items: [
      { title: "Commercial Licence", text: "For trading activities — import, export and distribution of various goods." },
      { title: "General Trading Licence", text: "A popular choice that permits trade in a wide range of approved products." },
      { title: "E-commerce Licence", text: "For online businesses selling through websites and digital channels." },
      { title: "Service Licence", text: "For consultants and professionals offering services." },
      { title: "Freelance Permit", text: "For individuals in media, tech or creative fields pursuing independent careers." },
      { title: "Industrial Licence", text: "For manufacturing and processing businesses." },
    ],
  },

  office: {
    heading: "Flexible Workspace Options",
    intro:
      "You don't necessarily need a physical office in Umm Al Quwain. UAQ Free Zone offers flexible workspace solutions that suit remote businesses and freelancers — and your workspace affects how many visas you can apply for.",
    location: { name: "UAQ Free Trade Zone", address: "Umm Al Quwain, UAE" },
    options: [
      { title: "Virtual Office", text: "A business address without a dedicated physical space — ideal for remote companies." },
      { title: "Shared Desk", text: "A cost-effective desk in a shared environment for small teams and freelancers." },
      { title: "Co-working Space", text: "A flexible, collaborative workspace with access to shared facilities." },
    ],
  },

  features: {
    eyebrow: "Facilities",
    heading: "Best Facilities for Business Setup in UAQ Free Zone",
    items: [
      { status: "yes", text: "No currency restrictions" },
      { status: "yes", text: "No personal income tax; 0% corporate tax on qualifying income" },
      { status: "yes", text: "Complete repatriation of profit and capital" },
      { status: "yes", text: "Complete ownership of the company" },
      { status: "yes", text: "Import and export duty benefits" },
      { status: "yes", text: "Investor-friendly process with excellent customer support" },
      { status: "yes", text: "No physical presence needed — remote business setup" },
      { status: "yes", text: "Infrastructure that meets your future business needs" },
      { status: "yes", text: "Strategically located to connect with global markets" },
      { status: "yes", text: "Logistics support" },
      { status: "yes", text: "Highly versatile business environment" },
      { status: "yes", text: "Dual licensing — run multiple operations" },
    ],
  },

  process: {
    heading: "How to Set Up a Company in UAQ Free Zone",
    intro: "Starting a company in UAQ Free Zone is straightforward, and most setups can be completed remotely.",
    steps: [
      { title: "Choose your business activity", text: "Tell us what you'll do — we match it to the right activity and licence." },
      { title: "Select your licence & workspace", text: "Commercial, general trading, e-commerce, service, industrial or freelance — plus a workspace that fits your visa needs." },
      { title: "Submit your documents", text: "We prepare and submit your application and supporting documents." },
      { title: "Complete registration", text: "Receive your licence and company documents once registration is approved." },
      { title: "Visas & bank account", text: "Apply for residence visas and open your corporate bank account with our help." },
    ],
  },

  otherZones: ["Meydan", "IFZA", "DMCC", "DIFC", "RAKEZ", "SRTIP", "SHAMS", "SPC", "Ajman Media City", "JAFZA", "SAIF Zone", "Fujairah Creative City"],

  included: [
    "Free consultation & activity selection",
    "Licence & workspace guidance",
    "Application & document filing",
    "Visa & Emirates ID processing",
    "Bank account application support",
    "Accounting & tax registration",
  ],

  faqs: [
    { question: "How can I set up a company in UAQ Free Zone?", answer: "Choose your business activity, select a licence, submit the required documents and complete registration. Most setups can be done remotely, making it quick and hassle-free." },
    { question: "What types of licences are available in UAQ Free Zone?", answer: "Commercial, general trading, e-commerce, service and industrial licences, plus a freelance permit." },
    { question: "Why choose Umm Al Quwain Free Zone for business setup?", answer: "Low setup costs, full profit repatriation, no personal income tax, simplified procedures and a strategic location near major ports and airports, giving you access to regional and global markets." },
    { question: "What is the cost of setting up a business in UAQ Free Zone?", answer: "It depends on your licence type and facilities. Basic packages for small businesses or freelancers start from around AED 8,000." },
    { question: "Can I get a UAE residence visa with a UAQ Free Zone licence?", answer: "Yes. Business owners and employees can apply for UAE residence visas through their UAQ company. The number of visas depends on your licence type and office space." },
    { question: "Do I need a physical office in Umm Al Quwain?", answer: "Not necessarily. UAQ Free Zone offers virtual offices, shared desks and co-working spaces — ideal for remote businesses and freelancers." },
    { question: "Can I open a business bank account with a UAQ Free Zone company?", answer: "Yes. Once registered, you can apply for a corporate bank account with UAE banks using your company documents and identification. Approval remains the bank's decision." },
    { question: "Does a UAQ Free Zone company pay corporate tax?", answer: "There's no personal income tax. Free zone companies are within UAE corporate tax scope — qualifying free zone persons can benefit from 0% on qualifying income, and registration and filing obligations apply." },
  ],
};
