import type { FreezoneData } from "@/lib/freezones/types";

export const accountantSecondment: FreezoneData = {
  slug: "accountant-secondment",
  category: "Accounting & Tax",
  name: "Accountant Secondment Services in Dubai",
  shortName: "Accountant Secondment",
  hero: {
    eyebrow: "Accountant Secondment · UAE",
    title: "Accountant Secondment Services in Dubai",
    highlight: "Extra Hands, No Permanent Hire",
    subtitle: "Skilled accountants who join your team for day-to-day work, special projects and peak periods.",
    intro:
      "Need more accounting capacity without adding permanent headcount? Afaq Al Khaleej places qualified accountants within your finance team for as long as you need them. They help keep your work accurate, compliant and on schedule, and you pay only for the agreed period.",
    chips: ["Day-to-day support", "Special projects", "Peak periods", "Staff cover"],
    image: "/images/services/feasibility-studies/launching-new-business.png",
  },
  stats: [
    { value: "1 or more", label: "Accountants placed" },
    { value: "Short-term", label: "Flexible, extendable contracts" },
    { value: "In-team", label: "Works alongside your staff" },
    { value: "Handover", label: "Documented on exit" },
  ],

  about: {
    heading: "What Is an Accountant Secondment?",
    body:
      "A secondment is a temporary placement of a professional, or a team, in another organisation to meet a specific business need. With an accounting secondment, one or more accountants join your existing team and work on your projects. They stay employed by us while working as part of your department.",
    location: { name: "Working as one team", area: "On-site with your finance department", image: "/images/investment-opportunities/partner-mindset.png" },
    features: [
      { icon: "services", title: "Niche Expertise", text: "Specialist skills for complex, short-term projects." },
      { icon: "multiple", title: "Knowledge Transfer", text: "Your team learns new skills and fresh approaches." },
      { icon: "bank", title: "Cost-Effective", text: "Pay only for the contract period, with no long-term hiring." },
      { icon: "activities", title: "Peak Periods", text: "Extra support through year-end, audits and busy seasons." },
      { icon: "online", title: "Flexibility", text: "Scale up for intensive projects, then scale back." },
      { icon: "solo", title: "Staff Cover", text: "Immediate cover for resignations, leave or internal transitions." },
    ],
  },

  compare: {
    eyebrow: "Secondment vs Outsourcing",
    heading: "How Secondment Differs from Outsourcing",
    intro: "Both bring in outside accountants, but they work very differently.",
    columns: ["", "Secondment", "Outsourcing"],
    rows: [
      { cells: ["What it is", "Temporary placement of an accountant within your team", "An external firm handles accounting functions for you"] },
      { cells: ["Employer", "The accountant stays employed by the seconding firm", "The accountant is employed by the outsourcing firm"] },
      { cells: ["Day-to-day management", "Managed by you, with the employer still involved", "Managed fully by the outsourcing firm"] },
      { cells: ["Purpose", "Short-term needs or shared expertise", "Lower costs and greater efficiency"] },
      { cells: ["Duration", "Usually short-term (a few months)", "Short- or long-term"] },
      { cells: ["Salary", "Paid by the seconding firm", "Paid by the outsourcing firm"] },
      { cells: ["Working style", "Part of your team, usually on site", "Often separate, sometimes off site"] },
    ],
    footnote: "Prefer to hand the work over entirely? See our outsource accounting services.",
  },

  activities: {
    eyebrow: "Our Services",
    heading: "What a Seconded Accountant Can Do",
    intro: "Placements are matched to the skills your team needs.",
    groups: [
      { icon: "licence", title: "General Accounting Support", text: "Day-to-day work including bookkeeping, invoice handling, reconciliations and payroll.", tags: ["Bookkeeping", "Reconciliations", "Payroll"] },
      { icon: "trading", title: "Special Project Management", text: "Reviewing internal controls, supporting audits, implementing new financial standards and preparing analytical reports.", tags: ["Controls", "New standards"] },
      { icon: "award", title: "Advisory", text: "Budgeting, forecasting, management reporting, interim finance leadership and financial analysis.", tags: ["Budgets", "Forecasts", "Interim leadership"] },
      { icon: "activities", title: "Audit Support", text: "Preparing for internal and external audits, re-checking internal controls and managing risk.", tags: ["Audit prep", "Risk"] },
      { icon: "online", title: "ERP & System Implementation", text: "Hands-on support when you move to a new accounting or ERP system.", tags: ["ERP", "Migration"] },
      { icon: "tax", title: "Tax Support", text: "Help with VAT and corporate tax workpapers and record-keeping alongside your team.", tags: ["VAT", "Corporate tax"] },
    ],
  },

  process: {
    heading: "How an Accountant Secondment Works",
    intro: "Three clear stages, from understanding your needs to a documented handover.",
    cautionTitle: "Placement arrangements",
    caution: "Before placement we confirm the employment and work-permit arrangements required under UAE labour rules, and agree confidentiality and system-access terms with you.",
    steps: [
      { title: "Assess your needs", text: "We review the skills, number of people and duration you need, assign suitable professionals and sign a contract setting out expectations, fees and deliverables." },
      { title: "Onboard & integrate", text: "The secondee joins your finance team with access to your systems and works directly with your accountants. We remain responsible for their salary and the agreed deliverables." },
      { title: "Handover & exit", text: "Before the contract ends, the secondee completes a formal handover and documents all processes for your team. Contracts can be extended if you need more support." },
    ],
  },

  features: {
    eyebrow: "When to Use It",
    heading: "Situations Where Secondment Works Best",
    items: [
      { status: "yes", text: "Year-end close and audit preparation" },
      { status: "yes", text: "Cover for maternity, sick leave or resignations" },
      { status: "yes", text: "New ERP or accounting system rollouts" },
      { status: "yes", text: "Corporate tax and VAT readiness projects" },
      { status: "yes", text: "Mergers, restructuring or other internal transitions" },
      { status: "yes", text: "Clearing backlogs during busy periods" },
    ],
  },

  cost: {
    heading: "Accountant Secondment Cost",
    intro:
      "Fees depend on the seniority and number of accountants, and how long you need them. Tell us about your requirement and we'll send a written proposal.",
    notes: ["Seniority & skills", "Number of accountants", "Duration", "Hours & location", "Scope of deliverables"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Strengthen Your Finance Team with",
    paragraph: "Whatever your size or industry, our accountants can support your finance department with payroll, tax, ERP implementation, audit preparation and more, across the UAE.",
    cards: [
      { title: "Matched Skills", text: "Professionals chosen for your specific need." },
      { title: "Seamless Integration", text: "They work as part of your team, in your systems." },
      { title: "Documented Handover", text: "Processes recorded so knowledge stays with you." },
    ],
    quoteTitle: "Request a secondment",
    quoteText: "Tell us the skills, team size and duration you need, and we'll send a written proposal.",
  },

  included: [
    "Needs assessment",
    "Matched accounting professional(s)",
    "Signed secondment contract",
    "Onboarding into your team",
    "Salary & employment handled by us",
    "Formal handover documentation",
  ],

  faqs: [
    { question: "What is a secondment in accounting?", answer: "A temporary placement of an accountant within your business to support specific needs or projects. The accountant stays employed by the seconding firm but works as part of your team." },
    { question: "Who needs an accountant secondment?", answer: "Businesses facing peak workloads, short-term projects, staff absences, system changes or audits, or those wanting specialist skills without a permanent hire." },
    { question: "How long can a secondment last?", answer: "Usually a few months, matched to your need. Contracts can be extended if you need more support." },
    { question: "How is secondment different from outsourcing?", answer: "A seconded accountant works inside your team under your day-to-day direction. With outsourcing, an external firm does the work separately and manages it fully." },
    { question: "Who pays the accountant's salary?", answer: "We do. You pay us the agreed fee for the secondment period." },
    { question: "Will my data be kept confidential?", answer: "Yes. Confidentiality and system-access terms are agreed in the secondment contract before work begins." },
    { question: "Do you provide secondment services across the UAE?", answer: "Yes. We place accountants with businesses of all sizes and industries across the UAE." },
  ],
};
