import type { FreezoneData } from "./types";

// TODO(client): confirm the AED 4,999 (0-visa) and AED 7,499 (1-visa) package
// prices and the AED 100,000 capital figure against RAKEZ's current terms.
// TODO(client): the supplied content says non-free zone companies need a UAE
// national partner — foreign ownership rules changed in 2021; verify before launch.
// TODO(client): if Afaq is an authorised RAKEZ channel partner, add that to hero.intro.

export const rakez: FreezoneData = {
  slug: "rakez",
  name: "RAKEZ Free Zone",
  shortName: "RAKEZ",
  hero: {
    eyebrow: "Ras Al Khaimah Economic Zone",
    title: "RAKEZ Free Zone",
    highlight: "Company Setup in Ras Al Khaimah",
    subtitle: "Business setup for startups, SMEs, manufacturers, traders and service providers — packages from AED 4,999.",
    intro:
      "Ras Al Khaimah Economic Zone (RAKEZ) is one of the UAE's major economic zones, with flexible licensing, office, warehouse and industrial facility options. Its business community spans companies from more than 100 countries across a wide range of sectors — and Afaq Al Khaleej helps you choose the right licence, structure and package.",
    chips: ["0-visa package from AED 4,999", "1-visa package from AED 7,499", "100% foreign ownership", "Free zone & non-free zone options"],
    image: "/images/services/feasibility-studies/expanding-new-market.png",
  },
  stats: [
    { value: "AED 4,999", label: "0-visa package" },
    { value: "AED 7,499", label: "1-visa package" },
    { value: "100+", label: "Countries in the business community" },
    { value: "5", label: "Specialised zones" },
  ],

  about: {
    heading: "What is RAKEZ?",
    body:
      "RAKEZ was established to consolidate the operations of the former RAK Investment Authority (RAKIA) and Ras Al Khaimah Free Trade Zone (RAK FTZ). Located in Ras Al Khaimah, it gives businesses access to UAE and international markets through its strategic location and established infrastructure, supporting companies across a wide range of industries.",
    location: { name: "Ras Al Khaimah", area: "Ras Al Khaimah Economic Zone, UAE", image: "/images/services/investment-services/property-investment.png" },
    features: [],
  },

  features: {
    placement: "early",
    eyebrow: "Why RAKEZ",
    heading: "Features of RAKEZ Free Zone",
    items: [
      { status: "yes", text: "100% foreign ownership for free zone companies" },
      { status: "yes", text: "Entity formation as free zone and non-free zone" },
      { status: "yes", text: "Quick and efficient business setup processes" },
      { status: "yes", text: "Ability to build on-site staff accommodation" },
      { status: "yes", text: "Wide range of business and industrial facilities and value-added services" },
      { status: "yes", text: "One-stop solution for all services" },
      { status: "yes", text: "Self-service customer portal" },
      { status: "yes", text: "Strong connectivity to major logistics hubs and multi-lane highways" },
      { status: "yes", text: "Easy access via an international network of regional offices" },
      { status: "yes", text: "Access to markets across the Middle East, Asia, North Africa and Europe" },
    ],
  },

  cost: {
    heading: "Cost of RAKEZ Licence",
    intro:
      "RAKEZ licence costs start at AED 4,999 for a 0-visa package and AED 7,499 for a 1-visa package. Your final cost depends on your business activity, licence type, visa requirements and any additional approvals or facilities.",
    tiers: [
      {
        badge: "Lowest entry",
        name: "0-Visa Package",
        price: "AED 4,999",
        tagline: "Starting package · no residence visa",
        points: ["Trade licence for your chosen activity", "100% foreign ownership", "Ideal if you don't need UAE residence through the company"],
      },
      {
        badge: "Most popular",
        name: "1-Visa Package",
        price: "AED 7,499",
        tagline: "Starting package · one visa allocation",
        points: ["Trade licence plus one visa allocation", "Visa processing, medical and Emirates ID quoted separately", "Room to add visas as you grow"],
      },
    ],
  },

  structures: {
    heading: "Business Structures in RAKEZ",
    intro: "A RAKEZ company can be set up as a free zone or non-free zone entity, depending on where and how you plan to operate.",
    groups: [
      {
        title: "Free Zone",
        items: [
          { title: "Free Zone Establishment (FZE)", text: "A company with a single shareholder." },
          { title: "Free Zone LLC (FZ-LLC)", text: "A company with 2–5 shareholders." },
          { title: "Branch", text: "A branch of a foreign company or a locally registered entity." },
        ],
      },
      {
        title: "Non-Free Zone",
        items: [
          { title: "Individual Establishment", text: "Owned by a sole owner." },
          { title: "Limited Liability Company (LLC)", text: "Two or more shareholders, up to 50." },
        ],
      },
    ],
    notes: [
      "FZE and FZ-LLC companies have a minimum capital requirement of AED 100,000, but evidence of the capital deposit is not mandatory.",
      "Non-free zone companies need sufficient capital to achieve the purpose of incorporation, divided into shares of equal value. The supplied guidance notes that non-free zone operations require a UAE national partner — we'll confirm the current rules for your activity.",
    ],
  },

  licenceTypes: {
    heading: "Licence Types in RAKEZ",
    intro:
      "RAKEZ offers licence categories across trading, manufacturing, professional services, education, e-commerce and media. The right licence depends on your business activity and the operations you plan to run.",
    items: [
      { title: "Commercial Licence", text: "For trading, importing, exporting and distributing goods." },
      { title: "General Trading Licence", text: "For trading in multiple product categories under one licence, subject to RAKEZ activity rules." },
      { title: "Industrial Licence", text: "For manufacturing, assembling, processing and packaging activities within RAKEZ." },
      { title: "Service Licence", text: "For consultancy, business support and other service-based activities." },
      { title: "Professional Licence", text: "For individuals and businesses offering specialised professional services." },
      { title: "Educational Licence", text: "For eligible education-related activities, including training, teaching and consultancy." },
      { title: "E-commerce Licence", text: "For selling products or services through online platforms and digital channels." },
      { title: "Media Licence", text: "For eligible media, production, marketing and related creative activities." },
    ],
  },

  office: {
    heading: "Specialised Zones in RAKEZ",
    intro:
      "RAKEZ's zones cater to trading, services, consultancy, manufacturing, industrial projects, logistics, schools, universities, institutes and academic consultancy.",
    location: { name: "RAKEZ", address: "Ras Al Khaimah, UAE" },
    options: [
      { title: "RAKEZ Business Zone", text: "For trading, services and consultancy businesses." },
      { title: "Al Hamra Industrial Zone", text: "Suitable for both light and heavy industry projects; open to free zone and non-free zone entities." },
      { title: "Al Ghail Industrial Zone", text: "A strong choice for large-scale industrial manufacturing; open to free zone and non-free zone entities." },
      { title: "Al Hulaila Industrial Zone", text: "Home to the heavier side of industrial manufacturing." },
      { title: "RAKEZ Academic Zone", text: "For schools, universities, institutes and academic consultancy." },
    ],
  },

  process: {
    heading: "Steps for Company Setup in RAKEZ",
    intro:
      "Choose the right activity and licence, prepare your documents, submit your application and complete incorporation — we support you at every stage.",
    steps: [
      { title: "Choose activity & package", text: "Your activity determines the licence and setup requirements; we help you compare packages." },
      { title: "Choose the legal structure", text: "Based on shareholders, activity and operations — we explain the requirements before you proceed." },
      { title: "Prepare documents", text: "Passport copies, photos, application forms and company documents; we review them before submission." },
      { title: "Submit the application", text: "We assist with the application and coordinate with RAKEZ on your behalf." },
      { title: "Receive licence & documents", text: "RAKEZ issues your trade licence and incorporation documents; your company is officially registered." },
      { title: "Visas & bank account", text: "Apply for residence visas for shareholders, employees and dependents, and start your bank account application." },
      { title: "Stay compliant", text: "Accounting, bookkeeping, VAT and corporate tax support to keep your records accurate and on time." },
    ],
  },

  documents: {
    heading: "Documents Required for RAKEZ Company Formation",
    note:
      "Requirements vary by activity, company structure, shareholder profile and RAKEZ approvals — confirm the latest list before submitting your application.",
    groups: [
      {
        title: "Individual Shareholders",
        items: ["Coloured passport copy", "Emirates ID copy (UAE residents)", "UAE visa copy and entry stamp, if applicable", "Original NOC for the General Manager, where required", "Business plan, where applicable"],
      },
      {
        title: "Corporate Shareholders",
        items: ["Shareholders' resolution approving the RAKEZ company and appointing the General Manager", "Trade licence or certificate of registration of the existing company", "Memorandum and Articles of Association (MOA / AOA)", "Certificate of Good Standing or Incumbency, where applicable"],
      },
    ],
  },

  otherZones: ["Meydan", "IFZA", "DMCC", "DIFC", "SRTIP", "SHAMS", "SPC", "Ajman Media City", "DWTC", "JAFZA", "SAIF Zone", "Fujairah Creative City"],

  included: [
    "Free consultation & package comparison",
    "Licence & structure selection",
    "Document review before submission",
    "Application coordination with RAKEZ",
    "Visa & Emirates ID processing",
    "Bank account, accounting & tax support",
  ],

  faqs: [
    { question: "What is RAKEZ?", answer: "Ras Al Khaimah Economic Zone (RAKEZ) is one of the UAE's major economic zones, formed by consolidating the former RAK Investment Authority (RAKIA) and RAK Free Trade Zone. It offers licensing, office, warehouse and industrial facilities for startups, SMEs, manufacturers, traders and service providers." },
    { question: "How much does a RAKEZ licence cost?", answer: "Packages start at AED 4,999 for a 0-visa package and AED 7,499 for a 1-visa package. The final cost depends on your activity, licence type, visas and any additional approvals or facilities." },
    { question: "What licence types are available in RAKEZ?", answer: "Commercial, general trading, industrial, service, professional, educational, e-commerce and media licences." },
    { question: "What's the difference between a free zone and non-free zone RAKEZ company?", answer: "Free zone entities (FZE, FZ-LLC or branch) operate under RAKEZ free zone rules with 100% foreign ownership. Non-free zone entities (individual establishment or LLC) follow different ownership and capital rules — we'll confirm the current requirements for your activity." },
    { question: "Is RAKEZ good for manufacturing and industrial businesses?", answer: "Yes. RAKEZ has dedicated industrial zones — Al Hamra for light and heavy industry, Al Ghail for large-scale manufacturing and Al Hulaila for heavier industrial manufacturing." },
    { question: "What documents do I need for RAKEZ company formation?", answer: "Individuals typically need a passport copy, Emirates ID and visa copies if resident, a GM NOC where required and a business plan where applicable. Corporate shareholders need a shareholders' resolution, trade licence or registration certificate, MOA/AOA and a good standing or incumbency certificate." },
    { question: "Is there a minimum capital requirement in RAKEZ?", answer: "FZE and FZ-LLC companies have a minimum capital of AED 100,000, but you don't need to show evidence of the deposit." },
  ],
};
