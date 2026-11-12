import type { FreezoneData } from "@/lib/freezones/types";

// TODO(client): confirm cost ranges (licence AED 10,000–25,000, first year
// AED 15,000–55,000), timings and the ~AED 1,500 cancellation fee before launch.

export const commercialLicense: FreezoneData = {
  slug: "commercial-license",
  category: "Business Licensing",
  name: "Commercial Licence in Dubai",
  shortName: "Commercial",
  hero: {
    eyebrow: "Commercial Licence · Dubai",
    title: "Commercial Licence in Dubai",
    highlight: "Buy, Sell, Import & Export",
    subtitle: "A DET permit that lets your business buy, sell, import or export goods — typically issued in 5–15 working days.",
    intro:
      "A commercial licence is issued by Dubai's Department of Economy and Tourism (DET) for trading businesses. It costs roughly AED 10,000 to AED 70,000 depending on your activities, jurisdiction and visa needs. Afaq Al Khaleej handles the full process — from activity selection to licence collection.",
    chips: ["Up to 10 allied activities", "Import & export goods", "Full profit repatriation", "Issued in 5–15 working days"],
    image: "/images/investment-opportunities/profitable-model.png",
  },
  stats: [
    { value: "AED 10–25K", label: "Licence fee" },
    { value: "5–15 days", label: "Once documents are ready" },
    { value: "10", label: "Allied activities per licence" },
    { value: "1 year", label: "Licence validity" },
  ],

  about: {
    heading: "Advantages of a Commercial Licence",
    body:
      "A commercial licence lets you trade legally, sign contracts, open a corporate bank account and sponsor visas — with the flexibility to cover several allied trading activities under one licence.",
    location: { name: "Dubai Mainland", area: "Licensed by DET", image: "/images/services/investment-services/business-model.png" },
    features: [
      { icon: "multiple", title: "Up to 10 Allied Activities", text: "Cover up to ten related commercial activities with a single licence." },
      { icon: "bank", title: "Full Repatriation", text: "Repatriate 100% of your capital and profits." },
      { icon: "visas", title: "Hire Foreign Staff", text: "Employ foreign workers in line with your office space and visa quota." },
      { icon: "trading", title: "Import & Export", text: "Import goods from abroad and export them overseas." },
      { icon: "licence", title: "Sign Contracts", text: "Trade legally and sign contracts in your company's name." },
      { icon: "ownership", title: "Sponsor Visas", text: "Sponsor investor and employee visas once licensed." },
    ],
  },

  structures: {
    heading: "Legal Structures for a Commercial Licence",
    intro: "Choose a structure based on shareholder count and liability preference.",
    groups: [
      {
        title: "Mainland Company Structures",
        items: [
          { title: "Limited Liability Company (LLC)", text: "The most common structure for trading companies, with liability limited to share capital." },
          { title: "Sole Proprietorship", text: "Owned by one individual, with unlimited personal liability." },
          { title: "Civil Company", text: "A partnership of professionals working together." },
          { title: "Branch Office", text: "An extension of an existing UAE or foreign company." },
        ],
      },
    ],
  },

  activities: {
    eyebrow: "Covered Activities",
    heading: "Activities Covered by a Commercial Licence",
    intro: "Some of the activities that require a commercial licence in Dubai:",
    lists: [
      {
        title: "Commercial Activities",
        items: [
          "Automobiles",
          "Computer systems & communication equipment",
          "Contracting",
          "Foodstuffs",
          "Furniture",
          "Medical & surgical equipment",
          "Readymade garments",
          "Software",
        ],
      },
    ],
  },

  cost: {
    heading: "Cost of a Commercial Licence in Dubai",
    intro:
      "The licence fee alone typically ranges from AED 10,000 to AED 25,000. Add office rent, MOA notarisation, an establishment card and one investor visa, and a mainland first year usually lands between AED 15,000 and AED 55,000.",
    licence: {
      title: "Typical first-year total",
      price: "AED 15,000–55,000",
      note: "Mainland setup with office and one investor visa",
      points: ["Commercial licence fee", "Office lease & Ejari", "MOA notarisation & Chamber registration", "Afaq fees agreed in writing"],
    },
    addOns: [
      { label: "Trade name reservation", price: "620 – 2,000" },
      { label: "Initial approval", price: "100 – 500" },
      { label: "Commercial licence fee", price: "10,000 – 25,000" },
      { label: "MOA notarisation", price: "1,000 – 2,000" },
      { label: "Chamber of Commerce registration", price: "620 – 1,200" },
      { label: "Office lease / Ejari (per year)", price: "15,000 – 40,000+" },
      { label: "Establishment card", price: "1,500 – 2,000" },
      { label: "Per investor visa", price: "3,500 – 7,000" },
      { label: "E-commerce activity add-on (if needed)", price: "5,000 – 10,000" },
    ],
    guidance: "There's no single fixed price — activities, jurisdiction, office location and visa count all change the total.",
  },

  process: {
    heading: "How to Get a Commercial Licence in Dubai",
    intro: "Most straightforward cases complete in 5 to 10 working days once your documents are ready.",
    cautionTitle: "No UAE residence visa yet?",
    caution: "Founders can often complete steps 1–7 through a Power of Attorney, then apply for their own investor visa once the licence is issued.",
    steps: [
      { title: "Select your activity", text: "Confirm it falls under the commercial category and check for external approvals." },
      { title: "Choose your legal structure", text: "LLC, sole proprietorship, civil company or branch office." },
      { title: "Reserve your trade name", text: "DET checks availability; reservation typically costs AED 620–2,000." },
      { title: "Apply for initial approval", text: "DET confirms no objection to your business concept — not the licence itself." },
      { title: "Draft & notarise MOA / AOA", text: "Required for any LLC with more than one shareholder." },
      { title: "Secure your office lease", text: "Register it through Ejari; free zones may allow a flexi-desk instead." },
      { title: "Submit documents & pay fees", text: "Licence fee, Chamber of Commerce registration and any activity charges." },
      { title: "Receive your licence", text: "Trade legally, sign contracts, open a bank account and sponsor visas." },
    ],
  },

  documents: {
    heading: "Documents Required for a Commercial Licence",
    image: "/images/services/feasibility-studies/competitor-analysis.png",
    intro:
      "You'll need an application form, passport copies, a tenancy contract, DET trade name approval, a notarised MOA, a business plan and proof of fee payment.",
    items: [
      "Application form with company name in English & Arabic",
      "Leasing contract for the registered office",
      "Trade name approval letter from DET",
      "Passport-size colour photos and passport copies of the applicants",
      "Notarised Memorandum of Association",
      "Letter of intent and complete business plan",
      "Share capital details",
      "NOC and any activity-specific approvals",
      "Payment proof for the licence",
    ],
    note: "Certain activities need additional NOCs or third-party approvals — we confirm your exact list before submission.",
  },

  infoBlock: {
    eyebrow: "Renewal & Cancellation",
    heading: "Renewal, Cancellation & Compliance",
    paragraphs: [
      "A commercial licence is valid for one year and renews annually by paying the renewal fee and updating your lease documentation. Late renewal triggers a daily fine, and an expired licence can block visa renewals, bank transactions and contract enforcement until it's reinstated.",
      "You can't convert a commercial licence directly into a professional or industrial licence — the existing licence must be cancelled and a new one issued under the new category.",
    ],
    stats: [
      { value: "1 year", label: "Licence validity" },
      { value: "~AED 1,500", label: "Typical cancellation fee" },
    ],
    listTitle: "Cancelling instead of renewing",
    list: [
      "Settle any outstanding fines",
      "Cancel visas tied to the company",
      "Pay the cancellation fee",
      "Complete deregistration with DET",
    ],
  },

  included: [
    "Free consultation & activity check",
    "Legal structure advice",
    "Trade name & initial approval",
    "MOA drafting & notarisation",
    "Office & Ejari support",
    "Renewal & cancellation support",
  ],

  faqs: [
    { question: "What is commercial trade?", answer: "Commercial trade is the buying and selling of goods and services — the key activity covered by a commercial licence in Dubai." },
    { question: "How can I get a commercial licence in the UAE?", answer: "Choose your activity and legal structure, reserve a trade name, get initial approval, draft your MOA, secure office space, submit documents, pay the fees and collect your licence." },
    { question: "What's the difference between a trade licence and a commercial licence?", answer: "'Trade licence' is the general term for any business licence. A commercial licence is a specific type, covering buying, selling, importing and exporting goods." },
    { question: "Can I hire foreign workers under a commercial licence?", answer: "Yes — the number of employee visas depends on your office space and the authorities' requirements." },
    { question: "Do I need a commercial licence for a healthcare company?", answer: "Trading medical and surgical equipment needs a commercial licence. Providing healthcare services needs a professional licence plus health authority approval." },
    { question: "How long is a commercial licence valid, and can it be extended?", answer: "It's valid for one year and can be renewed annually by paying the renewal fee and updating your lease documents." },
    { question: "How many activities can a commercial licence cover?", answer: "Up to ten allied commercial activities under a single licence." },
    { question: "Can I apply for a commercial licence at incorporation?", answer: "Yes. The commercial licence is issued as part of company formation once your trade name, initial approval, MOA and office are in place." },
    { question: "Who issues the commercial licence in Dubai?", answer: "Dubai's Department of Economy and Tourism (DET) issues mainland commercial licences. Free zone authorities issue their own." },
  ],
};
