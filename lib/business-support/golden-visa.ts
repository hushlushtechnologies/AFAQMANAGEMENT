import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero + location reuse images (payroll / corporate-tax-registration) — replace when available.
// Eligibility rules, fees and processing times change — reviewed against public sources Nov 2026; recheck with ICP/GDRFA periodically.
// TODO(client): add Afaq's own service fee if they want pricing shown (A&A's fees/approval-rate claims removed).

export const goldenVisa: FreezoneData = {
  slug: "golden-visa",
  category: "Business Support",
  name: "UAE Golden Visa",
  shortName: "Golden Visa",
  hero: {
    eyebrow: "Business Support · Residency · UAE",
    title: "UAE Golden Visa",
    highlight: "5 & 10-Year Residency Without a Sponsor",
    subtitle: "Long-term, renewable residency for investors, entrepreneurs, skilled professionals, outstanding students and other talents, with family sponsorship included.",
    intro:
      "The UAE Golden Visa is a long-term residence visa introduced in 2019 and expanded in 2022. It lets eligible foreign nationals live, work and study in the UAE for 5 or 10 years without an employer or local sponsor. Afaq Al Khaleej assesses your eligibility, prepares your documents and manages your application from start to Emirates ID.",
    chips: ["Property investors", "Skilled professionals", "Entrepreneurs", "Family sponsorship"],
    image: "/images/services/pro-government-services/visa-immigration.png",
  },
  stats: [
    { value: "5 or 10 yrs", label: "Renewable residency" },
    { value: "AED 2M", label: "Investor threshold" },
    { value: "AED 30K", label: "Basic monthly salary (professionals)" },
    { value: "No sponsor", label: "Required" },
  ],

  about: {
    heading: "What Is the UAE Golden Visa?",
    body:
      "Standard UAE residence visas depend on an employer or family sponsor and need regular renewal. The Golden Visa offers long-term security instead. It's managed federally by the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP), and in Dubai by the General Directorate of Residency and Foreigners Affairs (GDRFA). Holders can sponsor their families and aren't bound by the usual six-month absence rule.",
    location: { name: "Make the UAE your long-term home", area: "Investors, talents & their families", image: "/images/services/investment-services/hero-bg.jpg" },
    features: [
      { icon: "award", title: "Long-Term Residency", text: "5 or 10 years, renewable." },
      { icon: "ownership", title: "No Sponsor Needed", text: "Live and work independently." },
      { icon: "multiple", title: "Family Sponsorship", text: "Sponsor your spouse and children." },
      { icon: "online", title: "Freedom to Travel", text: "Exempt from the six-month absence rule." },
      { icon: "services", title: "Domestic Workers", text: "Sponsor domestic staff." },
      { icon: "tax", title: "No Personal Income Tax", text: "On salaries in the UAE." },
    ],
  },

  activities: {
    eyebrow: "Eligibility",
    heading: "Who Is Eligible for the Golden Visa?",
    intro: "The main routes. Each has specific financial or merit-based requirements, so check the latest criteria with us before applying.",
    groups: [
      { icon: "office", title: "Real Estate Investors", text: "Property worth AED 2 million or more. Off-plan and mortgaged property can qualify under conditions, and multiple properties can be combined.", tags: ["10 years"] },
      { icon: "bank", title: "Public & Business Investors", text: "AED 2 million or more in an approved investment fund, or in company capital, with conditions on ownership of the funds.", tags: ["10 years"] },
      { icon: "trading", title: "Entrepreneurs", text: "An innovative project worth at least AED 500,000 confirmed by an auditor, or approval from an accredited business incubator. Other entrepreneur routes also exist.", tags: ["5 or 10 years"] },
      { icon: "multiple", title: "Skilled Professionals", text: "Basic monthly salary of AED 30,000 or more, a bachelor's degree, a valid UAE employment contract and an eligible occupation level.", tags: ["10 years"] },
      { icon: "licence", title: "Outstanding Students & Graduates", text: "High-achieving school students and university graduates who meet the academic criteria.", tags: ["5 or 10 years"] },
      { icon: "award", title: "Exceptional Talents & Others", text: "Scientists, doctors, creative professionals, elite athletes, humanitarian pioneers and frontline heroes, usually by nomination or endorsement.", tags: ["Nomination"] },
    ],
  },

  process: {
    heading: "How to Apply for the Golden Visa",
    intro: "Applications are made through the ICP or GDRFA Dubai, depending on the emirate.",
    steps: [
      { title: "Eligibility assessment", text: "We review your profile and confirm the best category." },
      { title: "Documents & attestation", text: "Passport, proof of investment or employment, attested certificates and more." },
      { title: "Application submission", text: "Filed through ICP or GDRFA, including nomination requests where relevant." },
      { title: "Medical test & biometrics", text: "Completed at approved UAE centres." },
      { title: "Visa & Emirates ID", text: "Golden Visa issued and Emirates ID delivered." },
    ],
  },

  documents: {
    heading: "Documents Typically Required",
    image: "/images/services/company-formation/growth-focused-solutions.png",
    intro: "Core documents plus category-specific proof.",
    items: [
      "Valid passport",
      "Passport-sized photo",
      "Title deed, investment proof or employment contract and salary certificate",
      "Attested educational certificates (where required)",
      "Bank statements",
      "Medical fitness certificate",
      "Valid UAE health insurance",
      "Existing Emirates ID and visa (if applicable)",
    ],
  },

  compare: {
    eyebrow: "Golden vs Standard",
    heading: "Golden Visa vs Standard Residence Visa",
    intro: "Why many residents choose the Golden Visa.",
    columns: ["Feature", "Golden Visa", "Standard visa"],
    rows: [
      { cells: ["Validity", "5 or 10 years", "Usually 2–3 years"] },
      { cells: ["Sponsor", "Not required", "Employer or family sponsor"] },
      { cells: ["Time outside the UAE", "Exempt from the six-month rule", "Visa may lapse after six months abroad"] },
      { cells: ["Family sponsorship", "Spouse and children", "Subject to salary and conditions"] },
      { cells: ["Renewal", "Direct, while eligible", "Depends on sponsor"] },
    ],
    footnote: "You must keep meeting your category's conditions. For example, investors need to keep the qualifying investment.",
  },

  features: {
    eyebrow: "Avoid These",
    heading: "Common Reasons Applications Are Delayed or Rejected",
    items: [
      { status: "warn", text: "Incomplete or unattested documents" },
      { status: "warn", text: "Investment or salary below the threshold" },
      { status: "warn", text: "Salary counted using allowances instead of basic pay" },
      { status: "warn", text: "Mismatched information across documents" },
      { status: "warn", text: "Medical or security issues" },
    ],
  },

  cost: {
    heading: "Golden Visa Cost",
    intro:
      "Total costs include government fees, medical tests, Emirates ID and insurance, and vary by category, emirate and number of family members. Tell us your situation and we'll send a full cost estimate.",
    notes: ["Category", "Emirate", "Inside or outside UAE", "Family members", "Attestation needs"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Get Your Golden Visa with",
    paragraph: "End-to-end support from eligibility to Emirates ID, with transparent pricing and a team that knows the requirements of each category.",
    cards: [
      { title: "Right Category", text: "Eligibility checked before you apply." },
      { title: "Complete Documents", text: "Attestation and paperwork handled." },
      { title: "Family Included", text: "Dependants added smoothly." },
    ],
    quoteTitle: "Check your Golden Visa",
    quoteText: "Tell us about your investment, salary or achievements, and we'll confirm your eligibility and costs.",
  },

  included: [
    "Eligibility assessment",
    "Document checklist & attestation",
    "Application submission",
    "Medical & biometrics coordination",
    "Family sponsorship",
    "Emirates ID delivery",
  ],

  faqs: [
    { question: "Who qualifies for the UAE Golden Visa?", answer: "Investors (AED 2M+ property or funds), entrepreneurs, skilled professionals with a basic salary of AED 30,000+, outstanding students and graduates, and exceptional talents, subject to each category's conditions." },
    { question: "How long is the Golden Visa valid?", answer: "5 or 10 years depending on the category, and it's renewable as long as you remain eligible." },
    { question: "Can I sponsor my family?", answer: "Yes. Golden Visa holders can sponsor their spouse and children, and domestic workers." },
    { question: "Can off-plan or mortgaged property qualify?", answer: "Yes, under conditions set by the authorities, such as approved developers or banks." },
    { question: "Is the AED 30,000 salary based on total pay?", answer: "No. It's the basic monthly salary, not including allowances." },
    { question: "Can I stay outside the UAE for long periods?", answer: "Golden Visa holders are exempt from the standard rule that cancels residency after six months abroad." },
    { question: "Does the Golden Visa lead to citizenship?", answer: "No. It's a long-term residence visa, not citizenship." },
    { question: "What happens if I sell the qualifying property?", answer: "You may no longer meet the investor criteria, which can affect the visa. Get advice before selling." },
  ],
};
