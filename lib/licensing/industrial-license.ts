import type { FreezoneData } from "@/lib/freezones/types";

// Notes on supplied copy (corrected on the page):
// - "A local sponsor must own 51%" is outdated — since the 2021 Commercial Companies
//   Law reforms, most industrial activities allow 100% foreign ownership (some
//   strategic-impact activities have conditions).
// - DED is now DET in Dubai; the Industrial Register is maintained by the Ministry of
//   Industry and Advanced Technology (MoIAT).
// - Left out: "25% of workers must be Emirati in Abu Dhabi" (unverified).
// TODO(client): confirm the "3–4 weeks" timing and incentive wording before launch.

export const industrialLicense: FreezoneData = {
  slug: "industrial-license",
  category: "Business Licensing",
  name: "Industrial Licence in Dubai",
  shortName: "Industrial",
  hero: {
    eyebrow: "Industrial Manufacturing Licence · Dubai, UAE",
    title: "Industrial Manufacturing Licence",
    highlight: "For Manufacturing & Production",
    subtitle: "For businesses that manufacture, process, assemble or package — with the clearances, plans and approvals handled for you.",
    intro:
      "An industrial licence is needed when your activity is industrial in nature — manufacturing, processing or refining. A good rule of thumb: if it uses specialised plant equipment, it's probably industrial. Afaq Al Khaleej guides you through the clearances, project report and approvals needed before your licence can be issued.",
    chips: ["Manufacturing & processing", "100% ownership for most activities", "Government incentives available", "Licence in ~3–4 weeks"],
    image: "/images/services/investment-services/automobile.png",
  },
  stats: [
    { value: "~3–4 wks", label: "Once all approvals are in place" },
    { value: "6 months", label: "To start construction after approval" },
    { value: "26+", label: "Industrial activity types" },
    { value: "100%", label: "Ownership for most activities" },
  ],

  about: {
    heading: "What Is an Industrial Manufacturing Licence?",
    body:
      "Every business engaged in manufacturing or industrial activity needs an industrial licence, issued by the economic department of the emirate where the plant is located — for example DET in Dubai, or the economic development department in Ras Al Khaimah. Common examples of industrial activity include:",
    location: { name: "Industrial Area", area: "Plant, warehouse & office required", image: "/images/services/investment-services/technology-invest.png" },
    features: [
      { icon: "licence", title: "Paper Products", text: "Manufacturing of paper and paper-based products." },
      { icon: "trading", title: "Commercial Bakeries", text: "Production of bread on a commercial scale." },
      { icon: "ecosystem", title: "Chemicals", text: "Production or mixing of chemicals on a large scale." },
      { icon: "office", title: "Metal Casting", text: "Casting of iron, steel and other metals." },
      { icon: "services", title: "Machinery & Engines", text: "Forging and assembly of machines, equipment and engines." },
      { icon: "ecommerce", title: "Food Packaging", text: "Packaging of food products, including bottling of carbonated drinks." },
    ],
  },

  features: {
    placement: "early",
    eyebrow: "Before You Apply",
    heading: "Clearances Needed Before You Apply",
    items: [
      { status: "yes", text: "Certified firefighting equipment installed at the premises" },
      { status: "yes", text: "A detailed plan to protect workers' health and safety" },
      { status: "yes", text: "A power connection that supports your machinery's continuous operation" },
      { status: "yes", text: "UAE-standard electrical safety and failsafe protection equipment" },
      { status: "yes", text: "Municipality consent and an approved location plan" },
      { status: "yes", text: "Approvals from relevant ministries, such as the Interior, Environment and Health ministries" },
      { status: "partial", text: "In Dubai, a physical office and storage warehouse are mandatory — a virtual office isn't accepted" },
      { status: "partial", text: "Your business plan is reviewed thoroughly by technical authorities" },
    ],
  },

  cost: {
    heading: "Industrial Licence Cost",
    intro:
      "Industrial licence costs vary widely with the size of your plant, land and premises, machinery, approvals and workforce. We prepare an itemised estimate once we understand your project.",
    notes: ["Plant & land", "Machinery & equipment", "Approvals & clearances", "Office & warehouse", "Workforce & visas"],
  },

  structures: {
    heading: "Legal Structures for an Industrial Licence",
    intro: "Industrial companies can be set up under several mainland structures.",
    groups: [
      {
        title: "Mainland Company Structures",
        items: [
          { title: "Limited Liability Company (LLC)", text: "The most common structure for industrial businesses, with liability limited to share capital." },
          { title: "Sole Proprietorship", text: "Owned by one individual, with unlimited personal liability." },
          { title: "Civil Company", text: "A partnership of professionals." },
          { title: "Branch Office", text: "An extension of an existing UAE or foreign company." },
        ],
      },
    ],
    notes: [
      "Since the 2021 Commercial Companies Law reforms, most industrial activities allow 100% foreign ownership — some strategic-impact activities have additional conditions, which we confirm for your project.",
    ],
  },

  activities: {
    eyebrow: "Industrial Activities",
    heading: "Industrial Activities in the UAE",
    intro: "A more detailed list of activities that need an industrial licence:",
    lists: [
      {
        title: "Manufacturing & Processing",
        items: [
          "Raw materials processing",
          "Petroleum & metal extraction",
          "Fabric production & textiles",
          "Casting of iron & steel",
          "Appliances & machinery",
          "Bread & food products",
          "Paper products",
          "Metal casings, containers & boxes",
          "Structural steel & tool manufacturing",
          "Coatings, insulation & seals",
          "Waste collection & treatment",
          "Wood products & furniture",
          "Adhesives & paper slitting",
          "Glass & chinaware",
          "Agricultural equipment",
          "Lens cutting & glass repair",
          "Gold & precious stone cutting",
          "Light aircraft manufacturing & maintenance",
          "Meat processing",
          "Batteries",
          "Plastic home appliances",
          "Air conditioning assembly",
          "Advertising & decorative models",
          "Petroleum products",
          "Motor vehicles, motorcycles & spare parts",
          "Filling, segregating & packaging",
        ],
      },
    ],
  },

  process: {
    heading: "How to Get an Industrial Licence",
    intro:
      "All other permissions must be in place before you apply to the economic department. With everything in order, the licence can be granted in as little as 3–4 weeks.",
    cautionTitle: "Dubai requirement",
    caution: "In Dubai, both a physical office and a storage warehouse are mandatory — a virtual office can't be used instead.",
    steps: [
      { title: "Incorporate your company", text: "Choose your structure and set up the company that will hold the licence." },
      { title: "Secure premises & location plan", text: "Get your site, office and warehouse, and a location plan approved by the authorities." },
      { title: "Obtain clearances & approvals", text: "Municipality, civil defence and ministry approvals, plus Chamber of Commerce membership." },
      { title: "Submit your project report", text: "Apply with your detailed industrial report, financing plan and proof of funds." },
      { title: "Receive your licence", text: "The economic department issues your industrial licence once everything is approved." },
      { title: "Build & start operating", text: "Start construction within six months, then get permission to operate and join the Industrial Register." },
    ],
  },

  documents: {
    heading: "Requirements for an Industrial Licence",
    note: "Your report is reviewed by technical authorities, so it needs to be detailed and well-supported — our accountants help make sure the financials check out.",
    groups: [
      {
        title: "Industrial Project Report",
        items: [
          "Purpose of the new or expanded industrial operation",
          "Production tools with detailed technical information",
          "Estimated cost of production",
          "Financing plan — own funds or a financial institution",
          "Proof of funds (bank statement, letter of credit or bank guarantee)",
          "Planned number of employees",
        ],
      },
      {
        title: "Approvals & Registrations",
        items: [
          "Municipality consent",
          "Chamber of Commerce & Industry membership",
          "Approved location plan showing all units (cooling towers, power units, storage tanks)",
          "Fire safety certification",
          "Ministry approvals as required for your activity",
        ],
      },
      {
        title: "Ownership Documents",
        items: ["Emirates ID copies of all partners (or passport copies if not in the UAE)", "Company formation documents showing the owners"],
      },
    ],
  },

  tax: {
    eyebrow: "Incentives",
    heading: "Support for Industrial Businesses",
    paragraphs: [
      "The UAE actively supports manufacturing that adds value to the economy. Depending on your project and location, incentives can include subsidised land and utilities, R&D assistance and access to development financing.",
    ],
    cards: [
      { value: "Land", title: "Subsidised Industrial Land", text: "Land may be offered free or at reduced rates for projects that add value to the UAE economy." },
      { value: "Utilities", title: "Subsidised Electricity & Water", text: "Utilities provided at subsidised rates according to your plant's needs." },
      { value: "R&D", title: "Research Support", text: "Assistance with research and development for value-adding products." },
      { value: "Finance", title: "Development Financing", text: "Government-backed financing may be available, particularly for products new to the market." },
    ],
  },

  infoBlock: {
    eyebrow: "After Your Licence",
    heading: "Your Ongoing Obligations",
    paragraphs: [
      "Once your licence is approved, construction must start within six months. After construction, you'll receive permission to begin operating and should apply to join the Industrial Register.",
      "Plants outside a free zone also need municipality permission to build, and you must comply with industrial safety regulations and UAE Labour Law at all times.",
    ],
    listTitle: "Keep on top of",
    list: [
      "Notify the authorities immediately of any change to your industrial operations",
      "Keep accurate records of all workers",
      "Ensure workers are qualified to operate plant machinery",
      "Use imported raw materials only for their declared purpose",
      "Notify the authority when you appoint a director — they're responsible for compliance",
    ],
  },

  included: [
    "Free consultation & activity check",
    "Company incorporation",
    "Clearances & ministry approvals",
    "Project report & financial plan",
    "Industrial licence application",
    "Industrial Register & ongoing compliance",
  ],

  faqs: [
    { question: "What is an industrial licence in Dubai?", answer: "A licence for businesses carrying out industrial activities such as manufacturing, processing, assembly or packaging, issued by the economic department of the emirate where the plant is located." },
    { question: "How do I know if my activity is industrial?", answer: "If it involves specialised plant equipment — like manufacturing, refining, casting or large-scale food production — it's most likely industrial." },
    { question: "Can a foreigner own 100% of an industrial company?", answer: "For most industrial activities, yes, following the 2021 Commercial Companies Law reforms. Some strategic-impact activities have extra conditions — we'll confirm for your project." },
    { question: "How long does it take to get an industrial licence?", answer: "Once all other permissions are in place, the licence can be granted in as little as 3–4 weeks." },
    { question: "Do I need a physical office and warehouse?", answer: "In Dubai, yes — both a physical office and a storage warehouse are mandatory. A virtual office isn't accepted." },
    { question: "What happens after the licence is issued?", answer: "You must start construction within six months. After construction you receive permission to operate and should join the Industrial Register." },
    { question: "Are there incentives for industrial businesses?", answer: "Depending on your project, incentives can include subsidised land and utilities, R&D support and development financing for value-adding products." },
  ],
};
