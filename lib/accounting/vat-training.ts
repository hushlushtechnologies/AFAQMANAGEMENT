import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero + location reuse images (rakez / mainland ajman) — replace when available.

export const vatTraining: FreezoneData = {
  slug: "vat-training",
  category: "Accounting & Tax",
  name: "VAT Training in Dubai",
  shortName: "VAT Training",
  hero: {
    eyebrow: "VAT Services · Training · UAE",
    title: "VAT Training in Dubai",
    highlight: "Learn UAE VAT from the Experts",
    subtitle: "Practical, industry-focused VAT training for finance teams, business owners and professionals.",
    intro:
      "VAT management gets complicated without the right knowledge, and mistakes lead to violations and penalties. Afaq Al Khaleej offers specialist VAT training for businesses and individuals. Sessions are tailored to your industry, built on a needs analysis and focused on real-world procedures, controls and return filing.",
    chips: ["Corporate in-house training", "Individual courses", "Industry-specific", "Return filing workshops"],
    image: "/images/services/feasibility-studies/opening-new-branch.png",
  },
  stats: [
    { value: "13", label: "Core topics" },
    { value: "Tailored", label: "To your industry" },
    { value: "Practical", label: "Hands-on calculations" },
    { value: "Teams & individuals", label: "Training formats" },
  ],

  about: {
    heading: "Why VAT Training Matters",
    body:
      "Good VAT training helps your team understand why VAT processes and calculations matter, and what controls are needed to file accurate returns. Well-trained staff prevent costly errors and reduce penalty risk. They also make sure your VAT policies are applied consistently across the organisation.",
    location: { name: "Training for your team", area: "In-house or classroom sessions", image: "/images/services/feasibility-studies/expanding-new-market.png" },
    features: [
      { icon: "services", title: "Customised Programmes", text: "Built around your business needs." },
      { icon: "licence", title: "Clear VAT Profile", text: "Understand your organisation's VAT position." },
      { icon: "bank", title: "Avoid Costly Violations", text: "Save on penalties and legal costs." },
      { icon: "activities", title: "Streamlined VAT Management", text: "Better processes and controls." },
      { icon: "multiple", title: "Right People, Right Skills", text: "Policies applied properly." },
      { icon: "award", title: "Career Development", text: "Practical VAT expertise for professionals." },
    ],
  },

  activities: {
    eyebrow: "Learning Outcomes",
    heading: "What Participants Will Learn",
    intro: "By the end of the training, participants will be able to:",
    groups: [
      { icon: "licence", title: "VAT Fundamentals", text: "Understand VAT, its principles and how it works in the UAE.", tags: ["Theory"] },
      { icon: "services", title: "VAT Procedures", text: "Follow registration, invoicing and filing procedures correctly.", tags: ["Procedures"] },
      { icon: "tax", title: "Calculations & Documentation", text: "Apply accounting principles, keep proper records and calculate VAT.", tags: ["Practice"] },
      { icon: "activities", title: "Audit Readiness", text: "Prepare for and pass an FTA VAT audit.", tags: ["Audit"] },
      { icon: "ownership", title: "Risk Awareness", text: "Spot the risks of poor VAT management and how to reconcile VAT balances.", tags: ["Risk"] },
      { icon: "multiple", title: "Industry Differences", text: "Explore how VAT applies across sectors, and the challenges of implementing it.", tags: ["Sectors"] },
    ],
    lists: [
      {
        title: "Typical course topics",
        items: [
          "Introduction to VAT",
          "Impact of VAT on business",
          "GCC VAT framework",
          "Key concepts",
          "Input and output VAT",
          "Tax invoices",
          "Record-keeping",
          "Common errors",
          "Fines and penalties",
          "Advanced VAT topics",
          "VAT implementation process",
          "Cash flow considerations",
          "VAT and excise tax",
        ],
      },
    ],
  },

  process: {
    heading: "How Our Training Works",
    intro: "Every programme starts with understanding your needs.",
    steps: [
      { title: "Training needs analysis", text: "We assess your team's current knowledge and your business's VAT profile." },
      { title: "Design the programme", text: "Topics and examples tailored to your industry." },
      { title: "Deliver the sessions", text: "Well-organised, practical classes with real calculations." },
      { title: "Practise & review", text: "Case studies and exercises on returns and invoices." },
      { title: "Follow-up support", text: "Answers to questions as your team puts it into practice." },
    ],
  },

  features: {
    eyebrow: "Who It's For",
    heading: "Who Should Attend",
    items: [
      { status: "yes", text: "Accountants and finance teams" },
      { status: "yes", text: "Business owners and managers" },
      { status: "yes", text: "Tax and compliance staff" },
      { status: "yes", text: "Sales and procurement teams who issue or receive invoices" },
      { status: "yes", text: "Professionals building a career in UAE tax" },
    ],
  },

  cost: {
    heading: "VAT Training Fees",
    intro:
      "Fees depend on the format, duration, number of participants and level of customisation. Tell us your needs and we'll send a proposal.",
    notes: ["In-house or classroom", "Number of participants", "Duration", "Customisation", "Follow-up support"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Train Your Team with",
    paragraph: "Experienced trainers who combine VAT theory with real implementation experience in the UAE, offering cost-effective training for individuals and organisations.",
    cards: [
      { title: "Industry-Focused", text: "Examples from your sector." },
      { title: "Practical Approach", text: "Real calculations and returns." },
      { title: "Tailored Content", text: "Built from a needs analysis." },
    ],
    quoteTitle: "Request a VAT training",
    quoteText: "Tell us about your team and goals, and we'll send a training proposal.",
  },

  included: [
    "Training needs analysis",
    "Customised materials",
    "Practical workshops",
    "Case studies",
    "Q&A sessions",
    "Follow-up support",
  ],

  faqs: [
    { question: "Who is the VAT training for?", answer: "Finance teams, business owners, managers, compliance staff and individual professionals who want to understand UAE VAT." },
    { question: "Can training be customised for our company?", answer: "Yes. We run a needs analysis and tailor the content and examples to your industry and processes." },
    { question: "Is the training in-house or in a classroom?", answer: "Both options are available. In-house training suits teams, while individual courses suit professionals." },
    { question: "Does the training cover VAT return filing?", answer: "Yes. Participants learn the controls and procedures needed to prepare and file accurate returns." },
    { question: "Is excise tax covered?", answer: "An overview of VAT and excise tax is included. Detailed excise training can be arranged on request." },
  ],
};
