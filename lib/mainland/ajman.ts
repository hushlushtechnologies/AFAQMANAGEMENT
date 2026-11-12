import type { FreezoneData } from "@/lib/freezones/types";

// TODO(client): the supplied content is dated. Confirm before launch:
// - licence issuance "within 24 hours / next day"
// - "Ajman port handles ~1,000 vessels a year"
// - industrial licence ownership rules (supplied copy said 51% GCC — likely outdated
//   after the 2021 Commercial Companies Law reforms; kept out of the page)
// Left out as outdated/unverifiable: GDP & growth stats, airport under construction,
// "40 years tax-exempt via land lease", "all companies exempt from import/export
// duties", "free zones can only have LLC structures". Mainland licensing is by the
// Ajman Department of Economic Development (Ajman DED), not Ajman Municipality.

export const ajmanMainland: FreezoneData = {
  slug: "ajman",
  category: "Mainland",
  name: "Ajman",
  shortName: "Ajman",
  hero: {
    eyebrow: "Business Setup in Ajman",
    title: "Business Setup in Ajman",
    highlight: "Mainland & Free Zone",
    subtitle: "A cost-effective emirate 35 minutes from Dubai, with its own seaport and fast, single-window licensing.",
    intro:
      "Ajman is the UAE's smallest emirate, yet Ajman city is one of the country's most populated — and together with Sharjah and Dubai it forms a connected tri-city business area. Afaq Al Khaleej helps you decide between Ajman mainland and its free zones, choose the right licence and structure, and handle every document.",
    chips: ["35 minutes from Dubai", "Own seaport", "Fast licence issuance", "Mainland or free zone"],
    image: "/images/services/feasibility-studies/risk-opportunities.png",
  },
  stats: [
    { value: "35 min", label: "From Dubai" },
    { value: "2", label: "Free zones" },
    { value: "5", label: "Licence types" },
    { value: "7", label: "Company structures" },
  ],

  about: {
    heading: "Why Choose Ajman for Your Business?",
    body:
      "More than 90% of Ajman's residents live in Ajman city, which borders Sharjah and sits within easy reach of Dubai. The emirate is served by both Dubai International and Sharjah International airports, has its own port, and is known for affordable premises and investor-friendly government services.",
    location: { name: "Ajman", area: "35 minutes from Dubai · next to Sharjah", image: "/images/services/feasibility-studies/opening-new-branch.png" },
    features: [
      { icon: "online", title: "Tri-City Location", text: "Part of the connected Dubai–Sharjah–Ajman area, giving you access to a large customer base." },
      { icon: "trading", title: "Port & Airport Access", text: "Ajman's own port, with Dubai and Sharjah international airports close by." },
      { icon: "licence", title: "Single-Window Clearance", text: "Licensing and immigration services handled through a single government window." },
      { icon: "office", title: "Long-Term Land Leases", text: "Land available on a 20-year lease, extendable for another 20 years." },
      { icon: "bank", title: "Cost-Effective Setup", text: "One of the most affordable places in the UAE to start and run a business." },
      { icon: "ecosystem", title: "Growing Sectors", text: "Construction, automotive, agriculture, education, F&B, and health & beauty lead the economy." },
    ],
  },

  prosCons: {
    placement: "early",
    neutral: true,
    eyebrow: "Mainland or Free Zone?",
    heading: "Choosing Ajman for Your Business Setup",
    prosTitle: "Ajman Mainland suits you if…",
    consTitle: "An Ajman Free Zone suits you if…",
    pros: [
      "You sell directly to consumers (B2C) and need an accessible location",
      "You want to trade across the UAE market",
      "You need a retail outlet, workshop or service premises",
      "Your activity needs a mainland-only licence, such as general maintenance",
    ],
    cons: [
      "You mainly serve other businesses (B2B)",
      "You want 0% corporate tax on qualifying income",
      "You trade with other free zone companies",
      "You work in media, publishing or creative fields — consider Ajman Media City",
    ],
    note: {
      title: "There's no single best location — only the best fit",
      text: "Start by defining exactly what your business will do — one activity or several. Then we'll compare mainland and free zone options against your customers, premises and visa needs.",
    },
  },

  cost: {
    heading: "Cost of Business Setup in Ajman",
    intro:
      "Ajman is one of the most cost-effective places in the UAE to set up. Your total depends on your licence type, activities, premises and visas — ask us for an itemised quote with first-year and renewal costs.",
    notes: ["Licence type", "Number of activities", "Premises / office", "Number of visas", "External approvals"],
  },

  activities: {
    eyebrow: "Ajman Free Zones",
    heading: "Free Zones in Ajman",
    intro: "Ajman has two free zones, each suited to different types of business.",
    groups: [
      {
        icon: "trading",
        title: "Ajman Free Zone",
        text: "Launched in 1988, surrounded by two international airports and four seaports — with 100% foreign ownership, full repatriation, fast licensing, multiple activities on one licence and affordable office space.",
        tags: ["Trading", "Industrial", "Services", "Affordable offices"],
        href: "/contact-us",
      },
      {
        icon: "media",
        title: "Ajman Media City",
        text: "30 minutes from Dubai International Airport, with an office in Business Bay — for digital media, production, publishing, consultancy, events and more.",
        tags: ["Digital media", "Production", "Publishing", "Events"],
        href: "/freezone/ajman-media-city",
      },
    ],
  },

  licenceTypes: {
    heading: "Trade Licences for Business Setup in Ajman",
    intro: "Every company needs a trade licence to do business in the UAE. These are the main licence types issued in Ajman.",
    items: [
      { title: "Industrial Licence", text: "For manufacturing and industrial activities. Ownership requirements depend on the activity — we confirm the current rules." },
      { title: "Trading Licence", text: "For exporting, importing or re-exporting goods and services, including value-added trading in the UAE." },
      { title: "Professional / Service Licence", text: "For professionals serving consumers or businesses — auditors, accountants, engineers, or groups like a two-partner law firm." },
      { title: "E-commerce Licence", text: "For online selling — a fast-growing category, with strong demand thanks to Ajman's proximity to Dubai and Sharjah." },
      { title: "General Maintenance Licence", text: "For painting, plumbing, electrical and other maintenance services, in constant demand across the UAE." },
    ],
  },

  structures: {
    heading: "Company Structures in Ajman",
    intro: "The first step in company registration is choosing the right structure for your business.",
    groups: [
      {
        title: "Company Structures",
        items: [
          { title: "Sole Establishment", text: "Owned by one individual — the same as a sole proprietorship." },
          { title: "Limited Liability Company (LLC)", text: "The most common structure for trading and service businesses." },
          { title: "Private Joint Stock Company", text: "For larger businesses with private shareholders." },
          { title: "Public Joint Stock Company", text: "For companies offering shares to the public." },
        ],
      },
      {
        title: "Professional & Foreign Entities",
        items: [
          { title: "Professional / Civil Company", text: "For professionals such as doctors, lawyers and engineers." },
          { title: "Branch of a Foreign Company", text: "An extension of an overseas company in Ajman." },
          { title: "Representative Office", text: "A foreign company's representative presence for liaison and promotion." },
        ],
      },
    ],
    notes: [
      "Professionals — such as a doctor opening a clinic or a lawyer setting up a firm — don't need a local sponsor, but a Local Service Agent is required. We can put you in touch with the right agent.",
    ],
  },

  process: {
    heading: "How to Set Up a Company in Ajman Mainland",
    intro: "Ajman's single-window system keeps mainland setup simple. We handle the paperwork at each stage.",
    steps: [
      { title: "Submit your application", text: "File the application with the Ajman Department of Economic Development." },
      { title: "Location inspection", text: "The inspection unit verifies your selected business location." },
      { title: "Obtain approvals", text: "Secure approvals from the relevant government departments for your activity." },
      { title: "Submit for registration", text: "Submit your approvals for company registration." },
      { title: "Pay & receive your licence", text: "Pay the fees and receive your business licence — often very quickly." },
    ],
  },

  documents: {
    heading: "Documents Required for Company Formation in Ajman",
    image: "/images/services/finance-management/accounting-coordination.png",
    items: [
      "Copy of passport",
      "Two recent passport-size photos (white background)",
      "Proof of residential address in your country of residence",
      "Copy of Emirates ID, if a UAE resident",
      "Copy of visa, if already in the UAE",
    ],
    note: "These are needed for every business owner, so an investor visa can be issued to each partner separately.",
  },

  included: [
    "Free consultation & activity definition",
    "Mainland vs free zone comparison",
    "Licence & structure selection",
    "Application, inspection & approvals",
    "Local Service Agent introductions",
    "Visa, Emirates ID & bank support",
  ],

  faqs: [
    { question: "Is Ajman a good place to set up a business?", answer: "Yes — it's one of the most cost-effective emirates, 35 minutes from Dubai, with its own port, nearby airports and single-window government services." },
    { question: "Should I choose Ajman mainland or a free zone?", answer: "Mainland suits B2C businesses that need accessible premises and want to trade across the UAE. Free zones suit B2B companies and those trading with other free zone businesses." },
    { question: "What free zones are in Ajman?", answer: "Ajman Free Zone, launched in 1988 for trading, industrial and service businesses, and Ajman Media City Free Zone for media, creative and consultancy businesses." },
    { question: "What licences are available in Ajman?", answer: "Industrial, trading, professional / service, e-commerce and general maintenance licences." },
    { question: "Do I need a local sponsor in Ajman?", answer: "Many activities allow full foreign ownership. Professionals don't need a local sponsor but must appoint a Local Service Agent." },
    { question: "Do Ajman companies pay corporate tax?", answer: "Mainland companies pay 9% on taxable profit above AED 375,000 (0% below). Free zone companies can benefit from 0% on qualifying income if they meet the conditions." },
  ],
};
