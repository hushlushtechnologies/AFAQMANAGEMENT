import type { FreezoneData } from "@/lib/freezones/types";

export const corporateTaxDeregistration: FreezoneData = {
  slug: "corporate-tax-deregistration",
  category: "Accounting & Tax",
  name: "Corporate Tax Deregistration in UAE",
  shortName: "Corporate Tax Deregistration",
  hero: {
    eyebrow: "Corporate Tax · Deregistration · UAE",
    title: "Corporate Tax Deregistration in UAE",
    highlight: "Close Your Tax Obligations Correctly",
    subtitle: "Closing, selling or restructuring your business? We handle your EmaraTax deregistration so your corporate tax obligations end cleanly.",
    intro:
      "When a business ceases activity, is liquidated, merges or changes hands, its corporate tax registration has to be cancelled with the Federal Tax Authority (FTA). Deregistration must be applied for on time, and only after final returns are filed and all tax and penalties are paid. Afaq Al Khaleej manages the whole process for you.",
    chips: ["EmaraTax application", "Final tax return", "Penalty clearance", "Liquidation & restructuring"],
    image: "/images/services/investment-services/real-estate.png",
  },
  stats: [
    { value: "3 months", label: "Deadline to apply after cessation" },
    { value: "Final return", label: "Up to the cessation date" },
    { value: "All dues", label: "Tax & penalties paid first" },
    { value: "EmaraTax", label: "Online application" },
  ],

  about: {
    heading: "What Is Corporate Tax Deregistration?",
    body:
      "Deregistration cancels your corporate tax registration with the FTA once your business no longer needs it. You apply through EmaraTax, and the FTA reviews the application and may ask for more information. It's compulsory to avoid penalties, and the FTA only approves it once all returns are filed and all tax and administrative penalties are settled.",
    location: { name: "Mainland & free zone entities", area: "Any entity ceasing UAE business", image: "/images/services/business-consultancy/uae-map-skyline.png" },
    features: [
      { icon: "services", title: "Business Closure", text: "Strategic closure, bankruptcy or insolvency." },
      { icon: "multiple", title: "Mergers & Acquisitions", text: "Changes in legal structure or entity." },
      { icon: "licence", title: "Conversion", text: "Converting to a different legal form." },
      { icon: "ownership", title: "Transfer of Ownership", text: "New owners register, previous owners deregister." },
      { icon: "tax", title: "End of Filing Obligations", text: "No further returns once approved." },
      { icon: "activities", title: "Penalty Protection", text: "Avoid late-deregistration penalties." },
    ],
  },

  structures: {
    heading: "Deadlines & Conditions",
    intro: "Timing and clearance are what matter most.",
    groups: [
      {
        title: "Timeline",
        items: [
          { title: "Natural persons", text: "Apply within 3 months of the date business activity ceased." },
          { title: "Juridical persons", text: "Apply within 3 months of cessation, dissolution, liquidation or another reason for deregistering." },
          { title: "Effective date", text: "Once approved, deregistration takes effect from the cessation date or a date set by the FTA." },
        ],
      },
      {
        title: "Conditions before approval",
        items: [
          { title: "File all returns", text: "Including the final return for the period up to cessation." },
          { title: "Pay all corporate tax due", text: "Every outstanding liability settled." },
          { title: "Pay administrative penalties", text: "Any penalties under the law cleared." },
        ],
      },
    ],
    notes: [
      "Applying late can attract administrative penalties, and failing to follow FTA instructions during deregistration may lead to further penalties.",
      "VAT registration is separate. If you're VAT-registered, you need to deregister for VAT too.",
    ],
  },

  process: {
    heading: "The Corporate Tax Deregistration Process",
    intro: "Applications are made through EmaraTax. We prepare and submit everything for you.",
    steps: [
      { title: "Log in to EmaraTax", text: "Sign in with UAE Pass or your EmaraTax credentials." },
      { title: "Open the Corporate Tax tile", text: "Choose 'Actions', then deregistration, on the taxable person dashboard." },
      { title: "Complete the application", text: "Enter the date and reason for cessation, upload supporting documents and add buyer or transferee details if applicable." },
      { title: "Review & submit", text: "Check everything carefully. The FTA examines the application and may ask for more information." },
      { title: "Final return & confirmation", text: "File the final return and settle any dues. The FTA then confirms approval with a reference number." },
    ],
  },

  documents: {
    heading: "Documents Typically Required",
    image: "/images/uae-map.png",
    intro: "Supporting evidence for the cessation or change.",
    items: [
      "Trade licence cancellation or liquidation documents",
      "Board or shareholder resolution approving the closure",
      "Merger, sale or transfer agreement (if applicable)",
      "Buyer or transferee details (if applicable)",
      "Liquidator's report, where relevant",
      "Final financial statements up to cessation",
    ],
  },

  features: {
    eyebrow: "Effects",
    heading: "What Deregistration Means for Your Business",
    items: [
      { status: "yes", text: "No more corporate tax returns once approved" },
      { status: "yes", text: "Simpler compliance and lower costs for closed entities" },
      { status: "yes", text: "A clean exit for buyers and new owners" },
      { status: "partial", text: "The entity can no longer carry on taxable business activities" },
      { status: "warn", text: "Late or incomplete applications can attract penalties" },
    ],
  },

  cost: {
    heading: "Deregistration Cost",
    intro:
      "Fees depend on whether final returns are ready, the state of your books and any outstanding issues with the FTA. Tell us about your situation and we'll send a fixed-fee quote.",
    notes: ["Reason for deregistration", "Final return status", "Backlog accounts", "Outstanding FTA issues", "VAT deregistration too"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Deregister Smoothly with",
    paragraph: "Our tax team keeps up with every corporate tax update, so your deregistration is accurate, compliant and on time.",
    cards: [
      { title: "End-to-End Handling", text: "Final return, application and FTA queries." },
      { title: "Deadline Management", text: "Applied for within the 3-month window." },
      { title: "Clean Closure", text: "All dues cleared for FTA approval." },
    ],
    quoteTitle: "Request a deregistration",
    quoteText: "Tell us why and when your business is ceasing, and we'll send a fixed-fee quote.",
  },

  included: [
    "Eligibility & deadline check",
    "Final return preparation",
    "Dues & penalty reconciliation",
    "EmaraTax application",
    "FTA query handling",
    "Approval confirmation",
  ],

  faqs: [
    { question: "When must I deregister for corporate tax?", answer: "When your business ceases, is dissolved or liquidated, or otherwise no longer needs to be registered. You must apply within 3 months of that event." },
    { question: "Can I deregister without filing a final return?", answer: "No. All returns, including the final one up to the cessation date, must be filed and all tax and penalties paid before the FTA approves deregistration." },
    { question: "What happens if I sell my business?", answer: "Ownership changes may require the previous owner to deregister and the new owner to register, depending on how the sale is structured." },
    { question: "Is there a penalty for applying late?", answer: "Yes. Administrative penalties apply for failing to apply for deregistration on time. We help you apply within the deadline." },
    { question: "Does corporate tax deregistration cancel my VAT registration?", answer: "No. VAT and corporate tax are separate, so you need to deregister for VAT separately if you're registered." },
    { question: "How long does deregistration take?", answer: "It depends on the FTA's review and whether further information is requested. Complete applications with all dues cleared move fastest." },
  ],
};
