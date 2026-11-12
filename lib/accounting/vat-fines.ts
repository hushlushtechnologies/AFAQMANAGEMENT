import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero + location reuse images (accounting-supervision / forensic-accounting) —
// replace with dedicated images when available.
// Penalty figures reflect Cabinet Decision No. 129 of 2025 (effective 14 April 2026) — review if rules change.

export const vatFines: FreezoneData = {
  slug: "vat-fines",
  category: "Accounting & Tax",
  name: "VAT Fines & Penalties in UAE",
  shortName: "VAT Fines",
  hero: {
    eyebrow: "VAT Services · Penalties · UAE",
    title: "VAT Fines & Penalties in UAE",
    highlight: "Know the Rules, Avoid the Fines",
    subtitle: "Understand the penalties for late registration, late filing, late payment, incorrect returns and poor record-keeping, and how to avoid or deal with them.",
    intro:
      "Breaking UAE VAT rules leads to administrative penalties imposed by the Federal Tax Authority (FTA). Every taxable business should know what triggers them. Afaq Al Khaleej helps you stay compliant, and if you've already been fined, we help you respond, correct errors and request a reconsideration where you're eligible.",
    chips: ["Late registration", "Late filing", "Late payment", "Record-keeping"],
    image: "/images/services/business-consultancy/risk-assessment.png",
  },
  stats: [
    { value: "AED 10,000", label: "Late VAT registration" },
    { value: "AED 1,000", label: "First late return" },
    { value: "14% p.a.", label: "Late payment, charged monthly" },
    { value: "14 Apr 2026", label: "New penalty rules in force" },
  ],

  about: {
    heading: "What Are VAT Fines?",
    body:
      "VAT fines are administrative penalties for failing to follow procedures under UAE tax law, from registering late to filing incorrect returns or keeping poor records. The UAE introduced 5% VAT on 1 January 2018. It's paid by the end consumer, but businesses must follow the systems and procedures that collect it. The penalty framework was revised by Cabinet Decision No. 129 of 2025, effective 14 April 2026.",
    location: { name: "Compliance first", area: "Prevention costs less than penalties", image: "/images/investment-opportunities/risk-aware.png" },
    features: [
      { icon: "licence", title: "Register on Time", text: "Within 30 days of passing the threshold." },
      { icon: "tax", title: "File on Time", text: "Returns due 28 days after each tax period." },
      { icon: "bank", title: "Pay on Time", text: "Unpaid VAT attracts 14% per year." },
      { icon: "activities", title: "File Accurately", text: "Errors may need a voluntary disclosure." },
      { icon: "services", title: "Keep Records", text: "Invoices, stock records, returns and accounts." },
      { icon: "ownership", title: "Respond to the FTA", text: "Penalties can be reconsidered in some cases." },
    ],
  },

  structures: {
    heading: "Common VAT Penalties in the UAE",
    intro: "Key penalties under the current framework. Always confirm the latest position with the FTA.",
    table: {
      title: "VAT penalties at a glance",
      columns: ["Violation", "Penalty"],
      rows: [
        ["Late VAT registration", "AED 10,000"],
        ["Late VAT return filing", "AED 1,000 first time; AED 2,000 for repeats within 24 months"],
        ["Late payment of VAT", "14% per annum, calculated monthly on the unpaid amount"],
        ["Incorrect return, voluntary disclosure", "Time-based penalty, lower when errors are corrected early"],
        ["Failure to keep required records", "Fixed penalties, higher for repeat violations"],
        ["Failure to display VAT-inclusive prices or issue tax invoices", "Fixed penalties per violation"],
      ],
    },
    groups: [
      {
        title: "Your basic VAT obligations",
        items: [
          { title: "Check purchase invoices", text: "Make sure suppliers charge VAT correctly and invoices show the right details." },
          { title: "Charge VAT on sales", text: "Apply the correct rate and deduct eligible input tax to find the amount payable." },
          { title: "Pay on time", text: "Settle VAT due by the deadline." },
          { title: "File returns on time", text: "Submit accurate returns within the deadline." },
          { title: "Keep records", text: "Invoices, stock records, returns and accounts to support every figure." },
        ],
      },
    ],
    notes: [
      "Record-keeping is also required under UAE company law and the Tax Procedures Law. Records generally have to be kept for at least 5 years, and longer for corporate tax.",
      "Penalties that accrued before 14 April 2026 may still follow the previous framework.",
    ],
  },

  activities: {
    eyebrow: "How We Help",
    heading: "Avoiding & Handling VAT Penalties",
    intro: "Prevention through good accounting, and a clear response if a penalty has already been issued.",
    groups: [
      { icon: "services", title: "Compliance Reviews", text: "VAT health checks to find errors before the FTA does.", tags: ["Health check"] },
      { icon: "tax", title: "Return Filing", text: "Accurate returns filed on time, every period.", tags: ["Returns"] },
      { icon: "activities", title: "Voluntary Disclosures", text: "Correct past errors early to limit penalties.", tags: ["Disclosure"] },
      { icon: "licence", title: "Reconsideration Requests", text: "Request a review or waiver of penalties where grounds exist.", tags: ["Reconsideration"] },
      { icon: "bank", title: "Bookkeeping & Records", text: "Proper invoices, stock records and accounts maintained.", tags: ["Records"] },
      { icon: "multiple", title: "Team Training", text: "Help your accountants keep up with VAT rule changes.", tags: ["Training"] },
    ],
  },

  process: {
    heading: "If You've Received a VAT Penalty",
    intro: "Act quickly. Deadlines apply to reconsideration requests.",
    steps: [
      { title: "Review the notice", text: "Check the violation, amount and legal basis." },
      { title: "Assess the facts", text: "Confirm whether the penalty is correct and whether grounds for reconsideration exist." },
      { title: "Correct the issue", text: "File the missing return, make a voluntary disclosure or pay what's due." },
      { title: "Request reconsideration", text: "Submit a reasoned request to the FTA within the deadline, where appropriate." },
      { title: "Prevent repeats", text: "Fix the underlying process so it doesn't happen again." },
    ],
  },

  features: {
    eyebrow: "Avoid These",
    heading: "Common Causes of VAT Fines",
    items: [
      { status: "warn", text: "Not monitoring turnover against the registration threshold" },
      { status: "warn", text: "Missing return deadlines, even for nil returns" },
      { status: "warn", text: "Underpaying VAT because of calculation errors" },
      { status: "warn", text: "Claiming input VAT without valid tax invoices" },
      { status: "warn", text: "Not correcting errors through voluntary disclosure" },
      { status: "warn", text: "Incomplete or missing records" },
    ],
  },

  cost: {
    heading: "VAT Penalty Support Fees",
    intro:
      "Fees depend on the number of penalties, periods involved and the work needed. Share your FTA notices and we'll send a quote.",
    notes: ["Number of penalties", "Periods affected", "Disclosures needed", "Reconsideration requests", "Ongoing compliance"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Stay Penalty-Free with",
    paragraph: "Tailored VAT support, timely advice on rule changes, and qualified professionals who understand both UAE tax law and how it works in practice.",
    cards: [
      { title: "Prevention First", text: "Processes that keep you compliant." },
      { title: "Clear Response", text: "A practical plan when a penalty arrives." },
      { title: "Up to Date", text: "Advice reflecting the latest penalty rules." },
    ],
    quoteTitle: "Get help with a VAT",
    quoteText: "Share your FTA notice or compliance concern, and we'll advise on the next steps.",
  },

  included: [
    "Penalty review",
    "Compliance assessment",
    "Voluntary disclosure",
    "Reconsideration request",
    "Process fixes",
    "Ongoing filing support",
  ],

  faqs: [
    { question: "What is the penalty for late VAT registration?", answer: "AED 10,000 if you don't register within 30 days of exceeding the mandatory threshold." },
    { question: "What is the penalty for filing a VAT return late?", answer: "AED 1,000 for the first late return and AED 2,000 for repeats within 24 months. It applies even if no VAT is owed." },
    { question: "How is the late payment penalty calculated?", answer: "Since 14 April 2026, at 14% per annum, calculated monthly on the unpaid tax. This replaced the old 2% plus 4% monthly structure." },
    { question: "Can VAT penalties be waived?", answer: "In some cases. You can ask the FTA to reconsider a penalty within the deadline if there are valid grounds. Waivers aren't guaranteed." },
    { question: "What if I find an error in a submitted return?", answer: "Correct it through a voluntary disclosure. Disclosing early generally means lower penalties than waiting for the FTA to find it." },
    { question: "Are healthcare, food and education exempt from VAT?", answer: "Not generally. Most food is standard-rated at 5%, while certain healthcare and education services are zero-rated. Exempt supplies are a separate category, including residential rent and some financial services." },
  ],
};
