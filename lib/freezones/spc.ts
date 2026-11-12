import type { FreezoneData } from "./types";

// TODO(client): prices are SPC's published pay-as-you-go examples as supplied
// (Nov 2026). Confirm current figures before launch.

export const spc: FreezoneData = {
  slug: "spc",
  name: "SPC Free Zone",
  shortName: "SPC",
  hero: {
    eyebrow: "Sharjah Publishing City Free Zone",
    title: "SPC Free Zone",
    highlight: "Company Setup & Costs",
    subtitle: "A cost-effective route to setting up a company in Sharjah — licences advertised from AED 5,750.",
    intro:
      "Before choosing an SPC package, check three things: the work your company will do, the workspace it needs and how many people will need residence visas. Afaq Al Khaleej helps you compare these requirements and request an itemised SPC quote — because the AED 5,750 starting licence price is not a complete, visa-inclusive setup budget.",
    chips: ["Licence from AED 5,750", "2,000+ advertised activities", "Up to 5 activity groups", "Itemised package quote"],
    image: "/images/services/finance-management/informed-management-decisions.png",
  },
  stats: [
    { value: "AED 5,750", label: "One-year licence, zero visas" },
    { value: "2,000+", label: "Advertised activities" },
    { value: "5", label: "Activity groups at no extra cost" },
    { value: "AED 1,600", label: "Visa allocation" },
  ],

  about: {
    heading: "SPC Free Zone at a Glance",
    body:
      "SPC Free Zone — Sharjah Publishing City — lets you set up a company in Sharjah with flexible activity options. Compare the licence, workspace and visa requirements together, and confirm first-year inclusions, exclusions and renewal costs in writing before you pay.",
    location: { name: "Sharjah Publishing City", area: "Sharjah, UAE", image: "/images/services/feasibility-studies/market-research.png" },
    features: [],
    facts: [
      { label: "Emirate", value: "Sharjah" },
      { label: "Starting licence price", value: "AED 5,750 for a one-year licence with zero visas" },
      { label: "Visa budget", value: "Allocation, immigration and processing charged separately" },
      { label: "Setup timing", value: "Depends on activity, documents and approvals" },
      { label: "Activities", value: "2,000+ advertised options — confirm exact codes" },
      { label: "Workspace", value: "Check the facility included and any upgrade needed" },
      { label: "Bank account", value: "A separate application, subject to the bank's checks" },
    ],
  },

  prosCons: {
    placement: "early",
    eyebrow: "Choosing Your Activity",
    heading: "Which Business Activities Can an SPC Company Carry Out?",
    prosTitle: "Start with the work you'll do",
    consTitle: "Check the practical requirements",
    pros: [
      "List the products you'll sell and the services you'll invoice for",
      "Check the exact code in SPC's business activity directory rather than relying on a broad licence label",
      "SPC categories include trading, professional services, IT, e-commerce, administrative services and marketing",
      "Up to five activity groups are advertised at no additional cost — confirm your combination and any external approvals",
    ],
    cons: [
      "Will you store stock or need a warehouse? Confirm the facility before choosing a package",
      "Will you sell regulated products or services? Ask which extra approvals apply",
      "Will staff need residence visas? Check allocation and workspace conditions together",
      "Will you operate outside the free zone? Confirm the permissions for your activity and location",
    ],
  },

  cost: {
    heading: "SPC Free Zone Licence Cost & Visa Charges",
    intro:
      "Published individual price examples — not an all-inclusive quote. Not every item applies to every applicant, so ask which taxes, authority charges and service fees are included.",
    source: "Offers and eligibility can change — request a current written quote.",
    table: {
      columns: ["Published item", "Advertised price", "What to check"],
      rows: [
        { cells: ["One-year licence with zero visas", "From AED 5,750", "Activity eligibility and package inclusions"] },
        { cells: ["Visa allocation", "AED 1,600", "Allocation is separate from visa issuance"] },
        { cells: ["Establishment card", "AED 640", "Whether required and included in your quote"] },
        { cells: ["E-channel registration", "AED 2,280", "Applicable immigration registration costs"] },
        { cells: ["Investor visa with Emirates ID", "AED 2,530", "Eligibility and the exact processing scope"] },
        { cells: ["Change of status", "AED 700", "Whether it applies to your circumstances"] },
        { cells: ["Medical test", "AED 365", "Avoid double-counting where already bundled"] },
      ],
      footnote:
        "Avoid counting Emirates ID twice where it's already bundled. Get a personalised total before committing — especially if you need employee or dependent visas.",
    },
    extraTable: {
      title: "What should your SPC package quote explain?",
      columns: ["Budget item", "Ask the provider", "Why it matters"],
      rows: [
        ["Licence and activities", "Which codes and documents are included?", "The licence must cover your actual work"],
        ["Visa allocation and processing", "What's charged per company and per person?", "A quota is not an issued residence visa"],
        ["Medical, ID and insurance", "Which costs are bundled or separate?", "Avoid omissions and double-counting"],
        ["Workspace", "What access is included, and what costs extra?", "Match premises to your activity and staffing plan"],
        ["Professional support", "Which services are optional?", "Keep authority charges separate from assistance fees"],
        ["Renewal", "What will be payable next year?", "A promotional starting price may not be the renewal price"],
      ],
      footnote: "Compare like for like: use the same activity, visa count and workspace for each quote. A lower headline price can cover a different scope.",
    },
  },

  visas: {
    heading: "SPC Free Zone Visas: Allocation Is Only the First Step",
    intro:
      "A visa allocation lets a company apply for visas within its approved quota — it doesn't mean residence visas have been issued. Licence issuance, immigration processing and bank account opening follow separate checks, so ask for an estimated schedule based on your documents and activity.",
    chips: ["Allocation ≠ issued visa", "Each stage has its own checks", "A fast licence isn't a same-day setup"],
    steps: [
      { title: "Immigration File", text: "Establishment card and e-channel registration for the company." },
      { title: "Visa Application", text: "Entry permit or change of status, depending on where the applicant is." },
      { title: "Medical Screening", text: "Medical test for each applicant, booked and attended in the UAE." },
      { title: "Emirates ID & Residence", text: "Biometrics, Emirates ID and residence visa issuance." },
    ],
  },

  process: {
    heading: "How to Set Up Your SPC Free Zone Company",
    intro: "Five steps from planning to an operating company — we support you at each stage.",
    steps: [
      { title: "Confirm your activities", text: "Describe what you'll sell, who you'll serve and where the work happens; check codes and approvals." },
      { title: "Choose package & structure", text: "Agree shareholders, workspace and visa needs; get first-year and renewal costs with exclusions listed." },
      { title: "Prepare name & documents", text: "Use SPC's current checklist and keep names and personal details consistent." },
      { title: "Submit the application", text: "Complete the checks and payment steps; licence issuance is subject to the authority's approval." },
      { title: "Arrange next steps", text: "Process visas, prepare your bank application and set up accounting and tax compliance from day one." },
    ],
  },

  documents: {
    heading: "Documents to Prepare for Your SPC Application",
    note: "Requirements vary by company structure — confirm the current checklist before arranging translations or paying for attestation.",
    groups: [
      { title: "Individual Applicants", items: ["Passport and identity documents", "Photographs", "Contact details", "UAE visa or entry stamp, if applicable"] },
      { title: "Corporate Shareholders & Branches", items: ["Parent company documents", "Authorisations / board resolution", "Attested and legalised documents", "Identity documents for authorised signatories"] },
    ],
  },

  compare: {
    heading: "SPC, SHAMS or SAIF: What Should You Compare?",
    intro: "Use the same activity, visa count and workspace for each quote so you compare like for like.",
    columns: ["Decision", "SPC", "SHAMS", "SAIF Zone"],
    rows: [
      { cells: ["Activity", "Check the SPC activity code", "Check the SHAMS activity code", "Check the SAIF activity code"] },
      { cells: ["Price", "Request an itemised SPC quote", "Request a matching-scope quote", "Request a matching-scope quote"] },
      { cells: ["Workspace", "Confirm included access and upgrades", "Confirm the facility you need", "Confirm the facility you need"] },
      { cells: ["Visas", "Check quota and processing separately", "Check quota and processing separately", "Check quota and processing separately"] },
      { cells: ["Renewal", "Get the renewal scope in writing", "Get the renewal scope in writing", "Get the renewal scope in writing"] },
    ],
  },

  tax: {
    heading: "Tax, Compliance & Banking for SPC Companies",
    paragraphs: [
      "A free zone licence doesn't automatically make all company income tax-free. Corporate tax treatment depends on the applicable rules, your activities and whether you meet the free zone regime's conditions. Check registration, filing and record-keeping obligations, assess VAT separately, and plan accounting support from the start.",
      "A bank account is a separate application — the bank may ask about ownership, source of funds, customers, contracts and expected transactions. We help you prepare the supporting documents; approval and timing are the bank's decision.",
    ],
    tags: ["Corporate tax registration", "VAT registration", "Accounting services"],
  },

  included: [
    "Free consultation & activity check",
    "Itemised first-year and renewal quote",
    "Trade name & application filing",
    "Visa & Emirates ID processing",
    "Bank application documents",
    "Corporate tax & VAT registration",
  ],

  faqs: [
    { question: "What is SPC Free Zone?", answer: "SPC Free Zone, or Sharjah Publishing City Free Zone, is a free zone in Sharjah offering company setup across trading, professional services, IT, e-commerce, administrative services, marketing and publishing-related activities." },
    { question: "Does the AED 5,750 starting price include a residence visa?", answer: "No. AED 5,750 is the advertised price for a one-year licence with zero visas. Visa allocation, establishment card, e-channel, visa processing, medical and Emirates ID are charged separately." },
    { question: "How long does SPC company setup take?", answer: "It depends on your activity, documents and approvals. Licence issuance, immigration processing and bank account opening are separate stages — we'll give you an estimated schedule for each." },
    { question: "Can an SPC company operate outside the free zone?", answer: "It depends on your activity and location. Confirm the permissions required before you start operating outside the free zone." },
    { question: "How many visas can my SPC company apply for?", answer: "Your quota depends on your package and workspace. Allocation lets you apply within that quota — each visa still has to be processed and issued." },
    { question: "Does an SPC company automatically pay no corporate tax?", answer: "No. Corporate tax treatment depends on the applicable rules, your activities and whether you meet the qualifying free zone conditions. Registration and filing obligations still apply." },
    { question: "Is SPC Free Zone in Dubai?", answer: "No. SPC Free Zone is in Sharjah. Check its location against your customers, staff and premises needs." },
  ],
};
