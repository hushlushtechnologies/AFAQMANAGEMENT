import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero reuses compliance-audit image — replace when available.
// Note: an older PRO page exists at /services/pro-government-services (hidden from nav) — consider consolidating.

export const proServices: FreezoneData = {
  slug: "pro-services",
  category: "Business Support",
  name: "PRO Services in Dubai & UAE",
  shortName: "PRO Services",
  hero: {
    eyebrow: "Business Support · Government Services · UAE",
    title: "PRO Services in Dubai",
    highlight: "Government Paperwork, Handled",
    subtitle: "Visas, licence renewals, labour and immigration processes, attestations and more, handled by experienced PRO professionals.",
    intro:
      "PRO stands for Public Relations Officer, the person who deals with government departments on your company's behalf. Every UAE business needs one. Afaq Al Khaleej's PRO team knows immigration, labour and licensing procedures, works in Arabic and English, and gets your paperwork done quickly and correctly.",
    chips: ["Visas & Emirates ID", "Licence renewals & amendments", "Labour & immigration", "Attestations & translations"],
    image: "/images/services/pro-government-services/hero-bg.jpg",
  },
  stats: [
    { value: "30+", label: "Government services covered" },
    { value: "Arabic & English", label: "Document handling" },
    { value: "Transparent", label: "Government fees with receipts" },
    { value: "Pick-up & drop", label: "Document collection" },
  ],

  about: {
    heading: "Why Outsource Your PRO Services?",
    body:
      "You can hire an in-house PRO or outsource to a specialist provider, which is usually more cost-effective. With a provider, you don't have to recruit, and you benefit from a team of professionals instead of one person. A good PRO also keeps up with changing rules, so your company avoids fines and late fees.",
    location: { name: "We deal with the authorities", area: "Licensing, immigration, labour, transport & more", image: "/images/services/pro-government-services/personal-vehicle.png" },
    features: [
      { icon: "bank", title: "Cost-Effective", text: "No full-time PRO salary or visa." },
      { icon: "multiple", title: "Team Expertise", text: "Several specialists instead of one person." },
      { icon: "licence", title: "Up to Date", text: "Current with changing rules and procedures." },
      { icon: "ownership", title: "Fewer Penalties", text: "Deadlines tracked, fines avoided." },
      { icon: "online", title: "Arabic Documents", text: "Handled by Arabic-speaking staff." },
      { icon: "services", title: "Full Follow-Up", text: "Until every approval is in hand." },
    ],
  },

  activities: {
    eyebrow: "Our PRO Services",
    heading: "What Our PRO Team Handles",
    intro: "A wide range of government services for companies and their people. This list isn't exhaustive.",
    groups: [
      { icon: "licence", title: "Company & Licensing", text: "New licences, renewals, amendments, adding or removing activities, share transfers and branch offices.", tags: ["Licensing"] },
      { icon: "multiple", title: "Visas & Immigration", text: "Investor, employment, residence and family visas, cancellations and Emirates ID.", tags: ["Visas"] },
      { icon: "services", title: "Labour Services", text: "Work permits, employment contracts and labour formalities with MoHRE.", tags: ["MoHRE"] },
      { icon: "online", title: "Documents & Attestation", text: "Legal translation, notarisation, attestation, powers of attorney and MOUs.", tags: ["Attestation"] },
      { icon: "trading", title: "Trade & Customs", text: "Chamber of Commerce registration, customs client codes and import/export licences.", tags: ["Trade"] },
      { icon: "office", title: "Property & Vehicles", text: "Ejari, office leases, PO boxes, company vehicle registration and driving licences.", tags: ["Ejari", "RTA"] },
    ],
    lists: [
      { title: "Also available", items: ["Health, life and property insurance", "Digital signature", "Bank account opening support", "Trademark registration", "New company formation"] },
    ],
  },

  process: {
    heading: "How Our PRO Service Works",
    intro: "Simple, transparent and handled end to end.",
    steps: [
      { title: "Tell us what you need", text: "Visa, renewal, amendment or any other government service." },
      { title: "Fee estimate", text: "We confirm government charges and our fee upfront." },
      { title: "Document collection", text: "We pick up documents at your convenience." },
      { title: "Submission & follow-up", text: "We deal with the authorities and follow up until approval." },
      { title: "Delivery", text: "Approvals, documents and government receipts returned to you." },
    ],
  },

  documents: {
    heading: "Authorities We Deal With",
    image: "/images/services/pro-government-services/visa-immigration.png",
    intro: "We act as your contact point with the relevant government bodies, including:",
    items: [
      "Department of Economy and Tourism (Dubai) and other economic departments",
      "Ministry of Human Resources and Emiratisation (MoHRE)",
      "GDRFA Dubai and ICP (residency and immigration)",
      "Free zone authorities",
      "Roads and Transport Authority (RTA)",
      "Dubai Chamber and other chambers of commerce",
      "Courts and notary public",
      "UAE and foreign embassies",
    ],
  },

  features: {
    eyebrow: "Why Choose Us",
    heading: "What You Can Expect",
    items: [
      { status: "yes", text: "Transparent pricing, with government fees confirmed in advance" },
      { status: "yes", text: "Receipts for all government payments" },
      { status: "yes", text: "Deadline tracking to avoid fines and late fees" },
      { status: "yes", text: "Document pick-up and drop-off" },
      { status: "yes", text: "Follow-up until every approval is received" },
    ],
  },

  cost: {
    heading: "PRO Services Cost",
    intro:
      "Choose individual transactions or a monthly or annual PRO package. Government fees are charged at cost with receipts. Tell us what you need and we'll send a quote.",
    notes: ["Per transaction or package", "Number of employees", "Visa volume", "Licence type", "Urgency"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Leave the Paperwork to",
    paragraph: "Experienced PRO professionals who know immigration, labour and licensing procedures, supported by our legal and business setup teams, keeping you on the right side of the law.",
    cards: [
      { title: "Experienced Team", text: "Immigration, labour and licensing know-how." },
      { title: "Full Transparency", text: "Fees upfront, receipts provided." },
      { title: "Convenience", text: "Documents collected and delivered." },
    ],
    quoteTitle: "Request a PRO services",
    quoteText: "Tell us which government services you need, and we'll send a quote or package proposal.",
  },

  included: [
    "Dedicated PRO contact",
    "Fee estimates upfront",
    "Document pick-up & drop",
    "Government submissions",
    "Follow-up to approval",
    "Receipts for all fees",
  ],

  faqs: [
    { question: "What is a PRO?", answer: "A Public Relations Officer handles government transactions for a company, such as visas, licences, labour and immigration processes." },
    { question: "Is outsourcing PRO services cheaper?", answer: "Usually, yes. You avoid a full-time salary and visa costs and get access to a team of specialists." },
    { question: "Can you handle employee visas?", answer: "Yes. Employment, investor, residence and family visas, Emirates ID, renewals and cancellations." },
    { question: "Do you show government fees separately?", answer: "Yes. We confirm government charges in advance and provide receipts." },
    { question: "Do you collect documents?", answer: "Yes. We can pick up and drop off documents at your convenience." },
  ],
};
