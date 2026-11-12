import type { FreezoneData } from "./types";

// TODO(client): confirm the licence cost ranges per free zone, the ADGM "245%
// asset growth" figure and the "KEZAD formed in 2022" date before launch.
// Notes on supplied copy: ADGM is "Abu Dhabi Global Market" (not "General Market");
// setup steps 2 and 5 were rewritten as the supplied text didn't match the step.

export const abuDhabi: FreezoneData = {
  slug: "abu-dhabi",
  name: "Abu Dhabi Free Zones",
  shortName: "Abu Dhabi",
  hero: {
    eyebrow: "Abu Dhabi Free Zone Company Formation",
    title: "Abu Dhabi Free Zones",
    highlight: "Business Setup in the Capital",
    subtitle: "100% ownership, tax benefits and modern infrastructure — in the UAE's capital.",
    intro:
      "Abu Dhabi's free zones give entrepreneurs a strategic base with easy access to international markets — and they're growing fast with foreign founders and investors. Afaq Al Khaleej streamlines the whole process, from choosing the right zone and licence to opening your bank account.",
    chips: ["100% foreign ownership", "Licences in a few days", "Industry-specific ecosystems", "Licences from ~AED 6,000"],
    image: "/images/about-hero-map.png",
  },
  stats: [
    { value: "5", label: "Major free zones" },
    { value: "245%", label: "ADGM asset growth (mid-2025, YoY)" },
    { value: "AED 6,000+", label: "Licence costs from" },
    { value: "Days", label: "Typical licence issuance" },
  ],

  about: {
    heading: "Benefits of an Abu Dhabi Free Zone Licence",
    body:
      "As the UAE's capital, Abu Dhabi offers a strategic location with easy access to international markets. Its free zones are built around specific industries — from finance and fintech to renewable energy, media, aviation and logistics — so you can set up alongside the partners, suppliers and talent your business needs.",
    location: { name: "Abu Dhabi", area: "Capital of the UAE", image: "/images/services/investment-services/boardroom-meeting.png" },
    features: [
      { icon: "ownership", title: "100% Foreign Ownership", text: "Own your business completely, with no local sponsor — you're in charge of every decision." },
      { icon: "tax", title: "Tax Benefits", text: "Qualifying free zone companies pay 0% corporate tax on qualifying income, with no personal income tax; many zones also offer customs duty exemptions." },
      { icon: "bank", title: "Full Profit Repatriation", text: "Transfer profits and capital back to your home country at any time." },
      { icon: "online", title: "Faster Company Setup", text: "In many Abu Dhabi free zones, you can get your licence within a few days." },
      { icon: "office", title: "Modern Facilities", text: "Office space, flexi-desks and warehouses — and custom plots in certain zones." },
      { icon: "ecosystem", title: "Industry-Specific Ecosystems", text: "ADGM for finance, Masdar City for renewable energy, KEZAD for logistics and industry." },
    ],
  },

  activities: {
    eyebrow: "Free Zones in Abu Dhabi",
    heading: "List of Abu Dhabi Free Zones",
    intro: "Each free zone is built around specific industries. Choose the one that allows your activity and has the infrastructure to support it.",
    groups: [
      { icon: "media", title: "twofour54", text: "In central Abu Dhabi near the cultural district — production and post-production facilities, plus special permits for freelancers.", tags: ["Media", "Film", "Digital content", "Gaming", "Advertising"] },
      { icon: "bank", title: "ADGM", text: "Abu Dhabi Global Market on Al Maryah Island, expanding to Al Reem Island. Operates under English Common Law with prime offices in the central business district.", tags: ["Fintech", "Banking", "Legal", "Consulting"] },
      { icon: "trading", title: "KEZAD Group", text: "Khalifa Economic Zones Abu Dhabi manages free zones near Khalifa Port, including the Industrial City of Abu Dhabi (ICAD).", tags: ["Logistics", "Industrial", "Manufacturing", "Port access"] },
      { icon: "ecommerce", title: "Abu Dhabi Airports Free Zone", text: "Inside the international airport, with warehouses and offices to choose from.", tags: ["E-commerce", "Aviation", "Logistics", "Trading"] },
      { icon: "online", title: "Masdar City", text: "Close to the international airport — a hub for clean energy and innovation.", tags: ["Sustainability", "Renewable energy", "Technology"] },
    ],
  },

  cost: {
    heading: "Cost of Free Zone Business Setup in Abu Dhabi",
    intro: "Indicative licence cost ranges for Abu Dhabi's main free zones. Your final cost depends on your zone, activity, office and visas — ask us for an itemised quote.",
    table: {
      columns: ["Free zone", "Licence cost (AED)"],
      rows: [
        { cells: ["ADGM", "6,000 – 60,000"] },
        { cells: ["Masdar City", "7,000 – 20,000"] },
        { cells: ["KEZAD Group", "10,000 – 30,000"] },
        { cells: ["twofour54", "15,000 – 20,000"] },
        { cells: ["Abu Dhabi Airports Free Zone (ADAFZ)", "15,000 – 50,000"] },
      ],
      footnote: "Indicative ranges only — confirm current fees and inclusions in a written quote before you pay.",
    },
    notes: ["Office location", "Legal structure", "Business activity", "Number of employees", "Document attestations & notarisations"],
  },

  licenceTypes: {
    heading: "Types of Abu Dhabi Free Zone Licences",
    intro: "There are three main types of trade licence in Abu Dhabi's free zones.",
    items: [
      { title: "Commercial Licence", text: "Suitable for trading businesses — buying, selling, importing and exporting goods." },
      { title: "Industrial Licence", text: "Suitable for manufacturing and production companies." },
      { title: "Professional Licence", text: "Suitable for specialised service companies such as consultancies." },
    ],
  },

  process: {
    heading: "Steps for Abu Dhabi Free Zone Business Setup",
    intro: "When you work with Afaq Al Khaleej, here's how we take you from choosing a zone to an operating company.",
    steps: [
      { title: "Pick the right free zone", text: "One that allows your activity and has the right infrastructure — e.g. KEZAD for logistics, near Khalifa Port and Etihad Rail." },
      { title: "Choose a legal structure", text: "Decide between a free zone establishment, free zone company or branch — or compare mainland and offshore if they fit better." },
      { title: "Pick the licence type", text: "Commercial, industrial or professional — we prepare your application and paperwork." },
      { title: "Register a trade name", text: "Choose a relevant name that follows UAE naming rules." },
      { title: "Get initial approval", text: "Submit your application and documents to the free zone authority for initial approval." },
      { title: "Apply for the licence", text: "With initial approval in hand, we apply for your trade licence and keep the application on track." },
      { title: "Open a bank account", text: "We help you find a suitable bank and prepare your corporate account application." },
    ],
  },

  otherZones: ["Meydan", "IFZA", "DMCC", "DIFC", "RAKEZ", "SRTIP", "SHAMS", "SPC", "Ajman Media City", "UAQ", "JAFZA", "SAIF Zone"],

  included: [
    "Free consultation & free zone selection",
    "Legal structure & licence advice",
    "Trade name registration",
    "Initial approval & licence application",
    "Visa & Emirates ID processing",
    "Bank account application support",
  ],

  faqs: [
    { question: "Is there a free zone in Abu Dhabi?", answer: "Yes — several, including Masdar City, KEZAD, ADGM, Abu Dhabi Airports Free Zone and twofour54. Each has its own focus, benefits and licence requirements." },
    { question: "How much does it cost to set up a free zone company in Abu Dhabi?", answer: "Indicative licence costs range from around AED 6,000 to AED 60,000 depending on the zone, activity, office, legal structure and number of employees. We provide an itemised quote for your exact setup." },
    { question: "What is the difference between a free zone and mainland in Abu Dhabi?", answer: "Free zone companies offer 100% foreign ownership and zone-specific benefits but generally operate within the zone or internationally. Mainland companies can trade directly across the UAE market, subject to the relevant licensing rules." },
    { question: "Is ADGM a free zone or mainland?", answer: "ADGM (Abu Dhabi Global Market) is a financial free zone with its own English Common Law-based legal framework, courts and regulator." },
    { question: "Can I sell online in the UAE from a free zone company?", answer: "Yes, with the right e-commerce or trading licence. Selling to UAE mainland customers may need additional permissions depending on your activity — we'll confirm the right setup." },
  ],
};
