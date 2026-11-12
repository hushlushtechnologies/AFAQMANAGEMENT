import type { FreezoneData } from "@/lib/freezones/types";

// TODO(client): FAQ answers on tax status, members, registers and approved
// activities were written from general Mauritius rules — have them checked
// before launch. Add Mauritius pricing if you want a cost figure on this page.

export const mauritius: FreezoneData = {
  slug: "mauritius",
  category: "Offshore",
  name: "Mauritius",
  shortName: "Mauritius",
  hero: {
    eyebrow: "Mauritius Business Setup",
    title: "Mauritius Offshore",
    highlight: "Company Formation from the UAE",
    subtitle: "A secure, reliable investment destination with stable governance, transparency and incorporation in around 7–10 days.",
    intro:
      "Mauritius, an island nation in the Indian Ocean off the southeast coast of Africa, has built a strong reputation for stable governance, transparency, and economic and political freedom. It's an established platform for international investors — and because Mauritius incorporation involves international law, Afaq Al Khaleej manages the process with care from the UAE.",
    chips: ["Incorporation in ~7–10 days", "Authorised Company option", "Regulated by the FSC", "Company migration permitted"],
    image: "/images/investment-opportunities/sustainable-growth.png",
  },
  stats: [
    { value: "7–10 days", label: "Typical incorporation" },
    { value: "2001", label: "Companies Act" },
    { value: "FSC", label: "Financial Services Commission" },
    { value: "In & out", label: "Company migration permitted" },
  ],

  about: {
    heading: "Key Facts on Mauritius Business Setup",
    body:
      "The former Category 2 Global Business Company has been replaced by the Authorised Company. An Authorised Company is treated as non-resident for tax purposes provided its place of management is outside Mauritius, its business is principally conducted outside Mauritius, and it's controlled by a majority of shareholders who aren't Mauritian citizens.",
    location: { name: "Mauritius", area: "Indian Ocean, off the southeast coast of Africa", image: "/images/services/investment-services/risk-consideration.png" },
    features: [
      { icon: "award", title: "Stable Governance", text: "A secure, reliable jurisdiction known for ethics, transparency and political freedom." },
      { icon: "services", title: "Clear Regulators", text: "The Financial Services Commission and the Registrar of Companies." },
      { icon: "licence", title: "Established Legislation", text: "The Companies Act 2001 and the Financial Services Act 2007." },
      { icon: "online", title: "Fast Incorporation", text: "Around 7–10 days once the authorities receive complete documents." },
      { icon: "multiple", title: "Flexible Name Endings", text: "Names can end in Ltd, Limited, Corp, S.A. or Inc — subject to prior approval." },
      { icon: "trading", title: "Company Migration", text: "Companies can migrate into and out of Mauritius." },
    ],
  },

  activities: {
    eyebrow: "Company Options",
    heading: "Choosing Your Mauritius Company",
    intro: "International investors typically choose between two structures, depending on tax residency and treaty needs. Note that shelf companies aren't available in Mauritius.",
    groups: [
      { icon: "online", title: "Authorised Company", text: "Replaces the former Category 2 GBC. Non-resident for tax purposes when managed and operated outside Mauritius by a majority of non-Mauritian shareholders.", tags: ["Non-resident", "Business outside Mauritius"] },
      { icon: "bank", title: "Global Business Company (GBC)", text: "A Mauritius tax-resident company licensed by the Financial Services Commission, used for international business and structures that rely on Mauritius's treaty network.", tags: ["Tax resident", "FSC licensed", "Treaty access"] },
    ],
  },

  cost: {
    heading: "Mauritius Company Setup Cost",
    intro:
      "Costs depend on the company type, licensing requirements and management services. Ask us for an itemised quote covering registration, licence, registered office and annual fees.",
    notes: ["Company type", "FSC licence (if required)", "Registered office & management", "Annual fees & renewal"],
  },

  process: {
    heading: "How to Set Up a Mauritius Company",
    intro: "Incorporation typically takes around 7–10 days once the authorities have complete documents. We coordinate each step.",
    steps: [
      { title: "Choose the structure", text: "Authorised Company or Global Business Company, based on your tax and treaty needs." },
      { title: "Name approval", text: "Obtain prior approval for a name ending in Ltd, Limited, Corp, S.A. or Inc." },
      { title: "Prepare KYC & documents", text: "Shareholder and director identification, proof of address and a business plan." },
      { title: "Incorporation & licensing", text: "Registration with the Registrar of Companies and, where required, FSC licensing." },
      { title: "Bank account & compliance", text: "Open your corporate bank account and set up ongoing compliance." },
    ],
  },

  tax: {
    heading: "Tax Status & Compliance in Mauritius",
    paragraphs: [
      "Your tax position depends on the structure you choose. An Authorised Company is non-resident for tax purposes when its management and business are outside Mauritius, while a Global Business Company is tax resident and can access Mauritius's network of tax treaties. We assess the right option for your plans.",
    ],
    cards: [
      { value: "Non-resident", title: "Authorised Company", text: "Not tax resident when managed outside Mauritius by non-Mauritian majority shareholders." },
      { value: "Resident", title: "Global Business Company", text: "Tax resident in Mauritius, with access to its double taxation treaties." },
      { value: "FSC", title: "Regulator", text: "The Financial Services Commission oversees global business companies." },
      { value: "7–10 days", title: "Incorporation", text: "Once the authorities receive complete, correct documents." },
    ],
  },

  included: [
    "Free consultation & structure advice",
    "Name approval",
    "KYC & document preparation",
    "Registrar & FSC coordination",
    "Registered office liaison",
    "Bank account application support",
  ],

  faqs: [
    { question: "How long does it take to incorporate a company in Mauritius?", answer: "Around seven to ten days, provided the authorities receive proper documents. Shelf companies aren't available, but companies can migrate into and out of Mauritius." },
    { question: "What are the tax status options?", answer: "An Authorised Company is non-resident for tax purposes when it's managed and operated outside Mauritius. A Global Business Company is tax resident in Mauritius and can benefit from its tax treaty network." },
    { question: "Who can be members of a Mauritius company?", answer: "Companies need at least one shareholder and one director. Authorised Companies must be controlled by a majority of non-Mauritian shareholders; Global Business Companies have additional substance and local director requirements." },
    { question: "What documents are kept at the registered office?", answer: "Typically the company's constitution, registers of shareholders and directors, minutes of meetings and accounting records, as required by the Companies Act." },
    { question: "What information do the authorities require?", answer: "KYC on shareholders, directors and beneficial owners — such as passports and proof of address — plus details of the proposed business activities." },
    { question: "What activities are approved?", answer: "International business such as trading, investment holding and consultancy conducted outside Mauritius. Regulated activities like financial services need FSC licensing." },
    { question: "What are the advantages of a Mauritius company?", answer: "A stable, transparent jurisdiction with clear legislation, fast incorporation, flexible naming, company migration and — for resident companies — access to Mauritius's tax treaties." },
    { question: "How does Afaq Al Khaleej support Mauritius company setup?", answer: "We advise on the right structure, handle name approval and KYC, coordinate with the Registrar and FSC, and support your bank account application — all from the UAE." },
  ],
};
