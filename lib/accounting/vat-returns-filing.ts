import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero + location reuse images (ifza / trade-license) — replace when available.
// Penalty figures reflect Cabinet Decision No. 129 of 2025 (effective 14 April 2026).

export const vatReturnsFiling: FreezoneData = {
  slug: "vat-returns-filing",
  category: "Accounting & Tax",
  name: "VAT Return Filing in UAE",
  shortName: "VAT Returns Filing",
  hero: {
    eyebrow: "VAT Services · VAT 201 · UAE",
    title: "VAT Return Filing Services in Dubai",
    highlight: "Accurate Returns, Filed on Time",
    subtitle: "Our VAT experts prepare and file your returns accurately and on time, every tax period.",
    intro:
      "A VAT return reports the VAT you collected on sales and the VAT you paid on purchases, and shows how much is payable to, or refundable by, the Federal Tax Authority (FTA). Afaq Al Khaleej takes care of your VAT returns from start to finish, so you can focus on your business with peace of mind.",
    chips: ["VAT 201 preparation", "Input tax review", "On-time filing", "Payment guidance"],
    image: "/images/services/feasibility-studies/financial-analysis.png",
  },
  stats: [
    { value: "28 days", label: "Deadline after each tax period" },
    { value: "Quarterly", label: "Most common tax period" },
    { value: "AED 1,000", label: "First late-filing penalty" },
    { value: "VAT 201", label: "Return form on EmaraTax" },
  ],

  about: {
    heading: "What Is VAT Return Filing?",
    body:
      "A VAT return states how much VAT you must pay, or can reclaim, for a tax period. Most businesses file quarterly, though some file monthly. Returns are submitted on the VAT 201 form through EmaraTax and are due within 28 days of the end of each period. Filing accurately and on time keeps your business compliant and avoids unnecessary penalties.",
    location: { name: "Every period, on time", area: "Quarterly or monthly returns", image: "/images/services/feasibility-studies/operational-assessment.png" },
    features: [
      { icon: "licence", title: "Legal Assurance", text: "Compliance protects your business." },
      { icon: "multiple", title: "Smooth Business Dealings", text: "Partners prefer compliant, VAT-registered suppliers." },
      { icon: "award", title: "Stronger Reputation", text: "A clean compliance record." },
      { icon: "bank", title: "Correct Input Recovery", text: "Reclaim all eligible VAT on purchases." },
      { icon: "tax", title: "Fewer Errors", text: "Expert review before submission." },
      { icon: "services", title: "Less Admin", text: "We handle the work each period." },
    ],
  },

  process: {
    heading: "How VAT Returns Are Filed",
    intro: "Returns are filed online on the VAT 201 form through the FTA's EmaraTax portal.",
    steps: [
      { title: "Log in to EmaraTax", text: "Open the VAT 201 return for the relevant tax period." },
      { title: "Enter sales & output VAT", text: "Standard-rated, zero-rated and exempt supplies, broken down by emirate." },
      { title: "Enter expenses & input VAT", text: "Recoverable VAT on eligible purchases and imports." },
      { title: "Review net VAT due", text: "Check the calculation and complete the declaration." },
      { title: "Submit", text: "The FTA confirms receipt by email.", when: "Within 28 days" },
      { title: "Pay", text: "Settle any VAT due through the payment options on EmaraTax by the deadline." },
    ],
  },

  structures: {
    heading: "VAT Penalties Linked to Returns",
    intro: "Key penalties under the current framework, in force since 14 April 2026.",
    table: {
      title: "Common penalties",
      columns: ["Violation", "Penalty"],
      rows: [
        ["Late VAT registration", "AED 10,000"],
        ["Late return filing", "AED 1,000 first time; AED 2,000 for repeats within 24 months"],
        ["Late payment of VAT", "14% per annum, calculated monthly on the unpaid amount"],
        ["Errors corrected by voluntary disclosure", "Time-based penalty, lower when errors are corrected early"],
      ],
    },
    groups: [
      {
        title: "Common return-filing mistakes",
        items: [
          { title: "Poor record-keeping", text: "Missing invoices and documents behind the figures." },
          { title: "Calculation errors", text: "Mistakes in VAT calculated or paid." },
          { title: "Invalid tax invoices", text: "Input VAT claimed without proper invoices." },
          { title: "Misreading the law", text: "Especially around input tax deductions." },
          { title: "Weak accounting setup", text: "Systems not configured for VAT." },
        ],
      },
    ],
    notes: ["See our VAT Fines page for more on penalties and how to deal with them."],
  },

  activities: {
    eyebrow: "Our VAT Return Services",
    heading: "How We Help With Your VAT Returns",
    intro: "Complete support every tax period, with full transparency.",
    groups: [
      { icon: "licence", title: "Document Compilation", text: "We gather everything needed for your return at the end of each period.", tags: ["Records"] },
      { icon: "tax", title: "Return Preparation", text: "Accurate VAT 201 returns, with input VAT recovered correctly.", tags: ["VAT 201"] },
      { icon: "activities", title: "Pre-Filing Review", text: "Every figure checked against your books before submission.", tags: ["Review"] },
      { icon: "online", title: "Timely Submission", text: "Filed before the deadline, every time.", tags: ["On time"] },
      { icon: "services", title: "FTA Representation", text: "Support with FTA queries about your returns.", tags: ["FTA"] },
      { icon: "bank", title: "Lawful Tax Efficiency", text: "Make sure you claim all the input VAT you're entitled to.", tags: ["Recovery"] },
    ],
  },

  cost: {
    heading: "VAT Return Filing Fees",
    intro:
      "Fees depend on your transaction volume, filing frequency and the state of your records. Tell us about your business and we'll send a fixed-fee quote.",
    notes: ["Transaction volume", "Monthly or quarterly", "Imports & exports", "Bookkeeping included", "Number of entities"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "File Your VAT Returns with",
    paragraph: "Qualified tax experts who keep up with changes in UAE VAT law, deal with your VAT transparently and reduce the burden on your business.",
    cards: [
      { title: "On-Time, Every Time", text: "Deadlines tracked for you." },
      { title: "Accurate Returns", text: "Reviewed before submission." },
      { title: "Up to Date", text: "Latest VAT rules applied." },
    ],
    quoteTitle: "Request a VAT filing",
    quoteText: "Tell us your filing frequency and volumes, and we'll send a fixed-fee quote.",
  },

  included: [
    "Document compilation",
    "Output & input VAT review",
    "VAT 201 preparation",
    "Pre-filing check",
    "EmaraTax submission",
    "Payment reminder",
  ],

  faqs: [
    { question: "How often do I file VAT returns?", answer: "Most businesses file quarterly. Some are assigned monthly periods by the FTA." },
    { question: "When is the VAT return due?", answer: "Within 28 days of the end of each tax period. Payment is due by the same deadline." },
    { question: "Which form is used?", answer: "The VAT 201 return, filed online through EmaraTax." },
    { question: "What if I file late?", answer: "AED 1,000 for the first late return and AED 2,000 for repeats within 24 months, plus 14% per annum on any unpaid VAT." },
    { question: "What if I find an error after filing?", answer: "Small errors may be corrected in a later return, within limits. Larger errors need a voluntary disclosure." },
    { question: "Do I file if I had no sales?", answer: "Yes. Registered businesses must file a return every period, even a nil return." },
  ],
};
