import type { FreezoneData } from "@/lib/freezones/types";

// TODO(client): confirm the AED 15,000–30,000 cost range before launch.
// Notes on supplied copy: "no corporate or personal income taxes" updated for UAE
// corporate tax (2023); DED is now the Department of Economy and Tourism (DET).

export const professionalLicense: FreezoneData = {
  slug: "professional-license",
  category: "Business Licensing",
  name: "Professional Licence in Dubai",
  shortName: "Professional",
  hero: {
    eyebrow: "Professional Service Licence · Dubai",
    title: "Professional Licence in Dubai",
    highlight: "For Skill-Based Services",
    subtitle: "For professionals offering specialised services — consultants, engineers, doctors, lawyers, designers and more — with 100% foreign ownership.",
    intro:
      "A professional licence is granted to individuals and firms offering professional services in the UAE — from architects and interior designers to web and UI/UX designers. When several professionals offer services together, such as two lawyers opening a law firm, the company is set up as a civil company. Afaq Al Khaleej handles the paperwork and helps you choose the right location.",
    chips: ["100% foreign ownership", "Local Service Agent, no shares", "Full control of your business", "Licences from ~AED 15,000"],
    image: "/images/services/finance-management/cfo-advisory.png",
  },
  stats: [
    { value: "100%", label: "Foreign ownership" },
    { value: "AED 15–30K", label: "Typical licence cost" },
    { value: "20+", label: "Common professions" },
    { value: "1 year", label: "Renewal cycle" },
  ],

  about: {
    heading: "Advantages of a Professional Licence in Dubai",
    body:
      "Unlike some other mainland companies, professional licence holders can keep 100% foreign ownership. You only need a Local Service Agent to represent your company before government agencies — they hold no shares and have no say in management, so you keep full control.",
    location: { name: "Dubai Mainland", area: "Licensed by DET", image: "/images/services/business-consultancy/performance-improvement.png" },
    features: [
      { icon: "ownership", title: "100% Foreign Ownership", text: "Own your professional firm outright." },
      { icon: "tax", title: "Competitive Tax", text: "No personal income tax; corporate tax at 0% up to AED 375,000 of taxable profit and 9% above." },
      { icon: "bank", title: "Full Repatriation", text: "Repatriate 100% of your capital and profits." },
      { icon: "licence", title: "Easy Renewal", text: "A straightforward annual renewal process." },
      { icon: "award", title: "Stable Environment", text: "A stable, business-friendly environment with ease of doing business." },
      { icon: "online", title: "Access to a Wide Market", text: "Serve clients across Dubai, the UAE and beyond." },
    ],
  },

  prosCons: {
    placement: "early",
    neutral: true,
    eyebrow: "Local Service Agent",
    heading: "How the Local Service Agent Works",
    prosTitle: "What an LSA does",
    consTitle: "What an LSA doesn't do",
    pros: [
      "Legally represents your company before government agencies",
      "Can be a UAE national or a company 100% owned by UAE nationals",
      "Is named in your company's official records at registration",
    ],
    cons: [
      "Own any shares in your company",
      "Have any say in how your company is managed",
      "Limit your control over the business",
    ],
    note: {
      title: "You stay in full control",
      text: "The LSA is a representative, not a partner — your professional firm stays 100% yours. We can introduce you to a suitable Local Service Agent.",
    },
  },

  activities: {
    eyebrow: "Covered Activities",
    heading: "Activities Covered Under a Dubai Professional Licence",
    intro: "A professional is someone trained to offer a specialised service. Common activities that need a professional licence include:",
    lists: [
      {
        title: "Professional Services",
        items: [
          "Accountants, auditors & financial advisors",
          "Accounting & auditing companies",
          "Advertising & entertainment",
          "Architectural consultants",
          "Beauty salons",
          "Business consultants",
          "Carpentry & artisan activities",
          "Computer graphic design",
          "Consultancy services",
          "Document clearing",
          "Health & medical services",
          "IT services",
          "Internet & web design",
          "Lawyers & legal advisors",
          "Management consultancy",
          "Medical representatives",
          "Printing & publishing",
          "Teachers & educational professionals",
          "Technical services",
          "Security services",
        ],
      },
    ],
  },

  office: {
    heading: "Choosing Your Office Location",
    intro:
      "Pick your premises before you register — the address becomes your company's registered office in government records, alongside your Local Service Agent's details. There's always a best fit for your business.",
    location: { name: "Registered office", address: "Required for every Dubai professional licence" },
    options: [
      { title: "Business District", text: "Ideal if your clients are other companies — close to Dubai's commercial hubs." },
      { title: "Near Residential Areas", text: "Ideal if your clients are individuals — easy for customers to reach you." },
    ],
  },

  cost: {
    heading: "Cost of a Professional Licence in Dubai",
    intro:
      "A professional licence typically costs around AED 15,000 to AED 30,000. The final figure depends on your activity, office location, and fees such as initial approval and innovation fees — ask us for a precise, itemised quote.",
    licence: {
      title: "Typical professional licence",
      price: "AED 15,000–30,000",
      note: "Varies by activity, office location and government fees",
      points: ["Professional activity licence", "100% foreign ownership", "Local Service Agent arrangement", "Afaq fees agreed in writing"],
    },
    included: [
      "Trade name & initial approval",
      "Licence and innovation fees",
      "Ejari-registered office",
      "Local Service Agent agreement",
      "Professional certificate checks",
      "External approvals, if required",
    ],
    includedTitle: "What goes into the cost",
  },

  process: {
    heading: "How to Get a Professional Licence in Dubai",
    intro: "We handle the paperwork and advise on any clearances your profession needs from government agencies.",
    steps: [
      { title: "Choose your activity", text: "Confirm the professional activity that matches your services and qualifications." },
      { title: "Pick your office location", text: "Business district for B2B clients, or near residential areas for individual clients." },
      { title: "Appoint a Local Service Agent", text: "A UAE national or UAE-owned company, recorded in your company's official records." },
      { title: "Trade name & initial approval", text: "Reserve your name and get DET's initial approval." },
      { title: "Submit documents & receive licence", text: "Submit your certificates, Ejari and LSA documents, pay the fees and collect your licence." },
    ],
  },

  documents: {
    heading: "Documents Required for a Professional Licence",
    image: "/images/services/finance-management/improved-receivables-oversight.png",
    items: [
      "Copy of passport",
      "Copy of visa (stamped pages, or the separate visa document)",
      "Emirates ID, if already a UAE resident",
      "Copies of educational and professional certificates",
      "Two passport-size photographs",
      "Copy of the Local Service Agent's Jinsiyya or Muwatana",
      "Copy of Ejari or registered tenancy contract for your office",
    ],
    note: "If you're in the UAE on a work or residence visa, you'll also need a No Objection Certificate from your sponsor.",
  },

  infoBlock: {
    eyebrow: "Renewals",
    heading: "Renewing Your Professional Licence",
    paragraphs: [
      "Your professional licence must be renewed every year. If your profession relies on time-bound credentials, get re-certified so they're still valid at renewal.",
      "You can apply for renewal one month before expiry. Renewing after expiry can incur late penalties, and you can't continue trading until the licence is renewed.",
    ],
    stats: [
      { value: "1 year", label: "Licence validity" },
      { value: "1 month", label: "Apply before expiry" },
    ],
    listTitle: "Before you renew",
    list: [
      "Check your professional credentials are still valid",
      "Confirm your office tenancy is current",
      "Apply up to one month before expiry",
      "Pay renewal fees to avoid late penalties",
    ],
  },

  included: [
    "Free consultation & activity advice",
    "Office location guidance",
    "Local Service Agent introductions",
    "Trade name & initial approval",
    "Document checks & submission",
    "Annual renewal support",
  ],

  faqs: [
    { question: "What is a professional licence in Dubai?", answer: "A licence for individuals and companies offering skill- or knowledge-based services, such as consultants, engineers, doctors, lawyers, designers and IT professionals." },
    { question: "Can a foreigner own 100% of a professional company?", answer: "Yes. Professional licence holders can keep 100% foreign ownership, with a Local Service Agent to represent the company before government agencies." },
    { question: "What does a Local Service Agent do?", answer: "They represent your company before government agencies. They own no shares and have no say in management, so you keep full control." },
    { question: "How much does a professional licence cost?", answer: "Typically AED 15,000–30,000, depending on your activity, office location and government fees such as initial approval and innovation fees." },
    { question: "What is a civil company?", answer: "A company formed by two or more professionals offering services together — for example, two lawyers opening a law firm." },
    { question: "How often do I renew a professional licence?", answer: "Every year. You can apply one month before expiry; renewing late can bring penalties and you can't trade until it's renewed." },
  ],
};
