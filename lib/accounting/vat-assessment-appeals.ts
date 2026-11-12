import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero + location reuse images (difc / mainland ajman) — replace when available.
// Source content was outdated (2016 GCC VAT agreement); this page is written fresh.
// Deadlines below reflect the Tax Procedures Law — review if procedures change.

export const vatAssessmentAppeals: FreezoneData = {
  slug: "vat-assessment-appeals",
  category: "Accounting & Tax",
  name: "VAT Assessment & Appeals in UAE",
  shortName: "VAT Assessment & Appeals",
  hero: {
    eyebrow: "VAT Services · Disputes · UAE",
    title: "VAT Assessment and Appeals",
    highlight: "Think Your Assessment Is Wrong?",
    subtitle: "Find out how to challenge a VAT assessment or penalty with the Federal Tax Authority, and how we can help.",
    intro:
      "If the Federal Tax Authority (FTA) issues a tax assessment or penalty you disagree with, you have the right to challenge it. The process has strict stages and deadlines. Afaq Al Khaleej helps you review the assessment, build your case and file reconsideration requests and objections on time.",
    chips: ["Tax assessments", "Reconsideration requests", "Tax Disputes Resolution Committee", "Penalty disputes"],
    image: "/images/services/business-consultancy/restructuring.png",
  },
  stats: [
    { value: "3 stages", label: "FTA → Committee → Court" },
    { value: "40 days", label: "Typical deadline per stage (business days)" },
    { value: "Evidence-led", label: "Requests built on documents" },
    { value: "VAT & CT", label: "Assessments covered" },
  ],

  about: {
    heading: "What Is a VAT Assessment?",
    body:
      "A tax assessment is a decision by the FTA setting the tax you owe. It may follow an audit, a review of your returns or a voluntary disclosure, or happen because a return wasn't filed. It often comes with administrative penalties. If you think it's wrong, because of a calculation error, a misread transaction or a penalty that doesn't apply, the law gives you a formal route to challenge it.",
    location: { name: "Your right to challenge", area: "Reconsideration, objection and appeal", image: "/images/services/feasibility-studies/risk-opportunities.png" },
    features: [
      { icon: "activities", title: "Tax Assessments", text: "Challenge tax the FTA says you owe." },
      { icon: "licence", title: "Penalty Decisions", text: "Dispute penalties that shouldn't apply." },
      { icon: "tax", title: "Refund Decisions", text: "Contest rejected or reduced refund claims." },
      { icon: "services", title: "Registration Decisions", text: "Challenge refused registrations or deregistrations." },
      { icon: "ownership", title: "Strict Deadlines", text: "Miss one and you may lose the right to appeal." },
      { icon: "award", title: "Evidence Matters", text: "Strong documents make a strong case." },
    ],
  },

  process: {
    heading: "How to Challenge an FTA Decision",
    intro: "Disputes follow a set sequence. Each stage has its own deadline, generally 40 business days.",
    cautionTitle: "Deadlines are strict",
    caution: "Requests filed late can be rejected. You may also need to pay the disputed tax before objecting to the Tax Disputes Resolution Committee. Get advice as soon as you receive a decision.",
    steps: [
      { title: "Review the decision", text: "Understand the basis of the assessment or penalty and gather your evidence." },
      { title: "Reconsideration request to the FTA", text: "Submit a reasoned request with supporting documents through EmaraTax.", when: "Within 40 business days" },
      { title: "FTA decision", text: "The FTA reviews your request and issues its decision." },
      { title: "Objection to the Tax Disputes Resolution Committee", text: "If you disagree with the FTA's decision, object to the independent committee.", when: "Within 40 business days" },
      { title: "Appeal to the Federal Court", text: "If still unresolved, the matter can go to the competent court.", when: "Within 40 business days" },
    ],
  },

  activities: {
    eyebrow: "How We Help",
    heading: "Our VAT Dispute Support",
    intro: "Practical support at every stage, from first review to formal objection.",
    groups: [
      { icon: "activities", title: "Assessment Review", text: "Check the FTA's calculations and position against your records.", tags: ["Review"] },
      { icon: "licence", title: "Evidence Preparation", text: "Organise invoices, contracts, ledgers and reconciliations.", tags: ["Evidence"] },
      { icon: "services", title: "Reconsideration Requests", text: "Draft and file reasoned requests on time.", tags: ["FTA"] },
      { icon: "multiple", title: "Committee Objections", text: "Support with objections to the Tax Disputes Resolution Committee, working with legal counsel where needed.", tags: ["TDRC"] },
      { icon: "tax", title: "Voluntary Disclosures", text: "Correct genuine errors to reduce penalties.", tags: ["Disclosure"] },
      { icon: "award", title: "Prevention", text: "Fix the processes that caused the issue.", tags: ["Compliance"] },
    ],
  },

  documents: {
    heading: "What You'll Need",
    image: "/images/services/business-consultancy/corporate-structuring.png",
    intro: "Gather these as soon as you receive an assessment.",
    items: [
      "The FTA assessment or penalty notice",
      "VAT returns for the periods concerned",
      "Sales and purchase tax invoices",
      "Contracts and agreements for disputed transactions",
      "Ledgers, reconciliations and supporting schedules",
      "Any previous correspondence with the FTA",
    ],
  },

  features: {
    eyebrow: "Common Grounds",
    heading: "Typical Reasons to Challenge an Assessment",
    items: [
      { status: "yes", text: "Calculation errors by the FTA" },
      { status: "yes", text: "Transactions wrongly classified (rate, exemption or zero-rating)" },
      { status: "yes", text: "Input VAT wrongly disallowed" },
      { status: "yes", text: "Penalties applied when conditions weren't met" },
      { status: "yes", text: "Supporting evidence not considered" },
      { status: "partial", text: "Each case depends on its facts and documents" },
    ],
  },

  cost: {
    heading: "Assessment & Appeal Support Fees",
    intro:
      "Fees depend on the amounts involved, the number of periods and the stage of the dispute. Share your FTA notice and we'll send a proposal.",
    notes: ["Amount in dispute", "Periods involved", "Dispute stage", "Volume of evidence", "Legal counsel needed"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Challenge FTA Decisions with",
    paragraph: "Careful review, well-documented requests and close attention to deadlines, so your case is heard properly.",
    cards: [
      { title: "Deadline Tracking", text: "Every stage filed on time." },
      { title: "Strong Evidence", text: "Cases built on clear documentation." },
      { title: "Practical Outcomes", text: "Disputes resolved, and repeats prevented." },
    ],
    quoteTitle: "Get help with a VAT",
    quoteText: "Share your FTA assessment or penalty notice, and we'll review it and advise on your options.",
  },

  included: [
    "Assessment review",
    "Evidence pack",
    "Reconsideration request",
    "FTA follow-up",
    "Committee objection support",
    "Compliance recommendations",
  ],

  faqs: [
    { question: "What is a VAT assessment?", answer: "A decision by the FTA setting the VAT you owe. It often follows an audit or review and may include penalties." },
    { question: "How do I challenge an FTA decision?", answer: "First submit a reconsideration request to the FTA. If you disagree with the outcome, object to the Tax Disputes Resolution Committee, and after that you can appeal to the court." },
    { question: "How long do I have to file a reconsideration request?", answer: "Generally 40 business days from being notified of the decision. Check the deadline on your notice, as late requests can be rejected." },
    { question: "Do I have to pay before appealing?", answer: "You may need to pay the disputed tax before objecting to the Tax Disputes Resolution Committee. Penalty treatment can differ, so get advice on your case." },
    { question: "Can penalties be challenged too?", answer: "Yes. Penalty decisions can be challenged through the same process if they've been wrongly applied." },
    { question: "Do you also handle corporate tax assessments?", answer: "Yes. The same dispute process under the Tax Procedures Law applies to corporate tax decisions." },
  ],
};
