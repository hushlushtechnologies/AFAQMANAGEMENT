import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero, location + documents reuse images (investigation-audit / financial-statement-audit / bookkeeping) —
// replace with dedicated VAT images when available.

export const vatRegistration: FreezoneData = {
  slug: "vat-registration",
  category: "Accounting & Tax",
  name: "VAT Registration in UAE",
  shortName: "VAT Registration",
  hero: {
    eyebrow: "VAT Services · EmaraTax · UAE",
    title: "VAT Registration & Consultants in Dubai",
    highlight: "Register Right, Recover More VAT",
    subtitle: "We help you register for VAT, get your TRN and file returns on time.",
    intro:
      "UAE VAT is a 5% consumption tax on most goods and services, ultimately paid by the final consumer. If you run a business in the Emirates, understanding your VAT obligations is a legal requirement that affects your operations, cash flow and bottom line. Afaq Al Khaleej's VAT consultants guide you through registration, compliance and filing.",
    chips: ["Mandatory & voluntary registration", "TRN & VAT certificate", "Input tax recovery", "Return filing"],
    image: "/images/services/digital-business-solutions/serving-customers-digitally.png",
  },
  stats: [
    { value: "5%", label: "Standard VAT rate" },
    { value: "AED 375K", label: "Mandatory threshold" },
    { value: "AED 187.5K", label: "Voluntary threshold" },
    { value: "2–3 weeks", label: "Typical approval time" },
  ],

  about: {
    heading: "Why VAT Registration Matters",
    body:
      "Registration is a legal requirement once your taxable supplies and imports exceed the mandatory threshold. It's also the only way to charge VAT legitimately and obtain a Tax Registration Number (TRN). Registered businesses can recover VAT paid on business purchases, and registration builds credibility with suppliers, government entities and larger clients. Operating above the threshold without registering is risky: the FTA can assess back-dated VAT plus penalties.",
    location: { name: "Mainland & free zone businesses", area: "Trading · Services · E-commerce · Real estate", image: "/images/services/investment-services.png" },
    features: [
      { icon: "licence", title: "Legal Compliance", text: "Required once you pass the mandatory threshold." },
      { icon: "tax", title: "Official TRN", text: "Identifies your business on every tax invoice." },
      { icon: "bank", title: "Input Tax Recovery", text: "Reclaim VAT paid on business expenses." },
      { icon: "award", title: "Credibility", text: "Many clients only work with VAT-registered suppliers." },
      { icon: "activities", title: "Avoid Back-Dated VAT", text: "Prevent assessments on untaxed past sales." },
      { icon: "trading", title: "Startup Advantage", text: "Voluntary registration recovers setup-cost VAT." },
    ],
  },

  structures: {
    heading: "VAT Registration Thresholds",
    intro: "Which threshold applies depends on your taxable supplies, imports and expenses.",
    table: {
      title: "When to register",
      columns: ["Registration type", "Threshold", "Notes"],
      rows: [
        ["Mandatory", "Taxable supplies & imports over AED 375,000", "In the past 12 months, or expected in the next 30 days"],
        ["Voluntary", "Taxable supplies, imports or expenses over AED 187,500", "Useful for startups with high initial costs"],
        ["Below AED 187,500", "Not eligible", "Registration not allowed"],
      ],
    },
    groups: [
      {
        title: "How input tax recovery works",
        items: [
          { title: "Charge output VAT", text: "Add 5% VAT to your taxable sales." },
          { title: "Recover input VAT", text: "Offset VAT paid on eligible business purchases, such as rent, equipment, professional services, utilities and inventory." },
          { title: "Pay the net amount", text: "Only the difference goes to the FTA. If input exceeds output, you can claim a refund or carry it forward." },
          { title: "Keep valid tax invoices", text: "Recovery depends on proper invoices and records." },
        ],
      },
    ],
    notes: [
      "Zero-rated supplies count towards the registration threshold. Exempt supplies don't.",
    ],
  },

  process: {
    heading: "VAT Registration Process (Step by Step)",
    intro: "Registration is done entirely online through the FTA's EmaraTax portal. Complete applications usually take 2–3 weeks.",
    cautionTitle: "Accuracy matters",
    caution: "Mismatches between your trade licence name, legal form and ownership details cause delays. Incorrect turnover figures or missing documents trigger FTA information requests that extend processing time.",
    steps: [
      { title: "Create an EmaraTax account", text: "Set up and verify your email and mobile number." },
      { title: "Select VAT registration", text: "Choose 'Register for VAT' from the available services." },
      { title: "Complete the application", text: "Applicant, contact, bank, business activity and turnover details." },
      { title: "Upload documents", text: "Trade licence, IDs and supporting financial information." },
      { title: "FTA review", text: "The FTA may request clarification on specific items." },
      { title: "Receive TRN & certificate", text: "Download your VAT registration certificate once approved.", when: "~2–3 weeks" },
    ],
  },

  documents: {
    heading: "Documents for VAT Registration",
    image: "/images/services/feasibility-studies/business-model.png",
    intro: "Have these ready for a smooth application.",
    items: [
      "Trade licence",
      "Emirates ID & passport of owners and authorised signatory",
      "Memorandum / Articles of Association",
      "Proof of authorisation for the signatory",
      "Bank account details (IBAN)",
      "Turnover records for the last 12 months (sales invoices, financial statements)",
      "Estimated turnover and expenses for the next 30 days",
      "Customs registration details, if importing or exporting",
    ],
  },

  activities: {
    eyebrow: "Our VAT Services",
    heading: "VAT Services We Offer",
    intro: "From eligibility checks to FTA audits, for trading companies, real estate developers, professional firms, free zone entities, e-commerce and cross-border businesses.",
    groups: [
      { icon: "licence", title: "VAT Registration", text: "Eligibility and threshold analysis, document review, application and FTA liaison.", tags: ["TRN"] },
      { icon: "tax", title: "VAT Return Filing", text: "Accurate, on-time returns every tax period.", tags: ["Returns"] },
      { icon: "services", title: "VAT Advisory", text: "Complex transactions such as real estate, cross-border supplies and group structures.", tags: ["Advisory"] },
      { icon: "activities", title: "Health Checks & Reviews", text: "Compliance reviews to find and fix issues early.", tags: ["Review"] },
      { icon: "multiple", title: "Tax Groups", text: "Tax group registration and restructuring.", tags: ["Groups"] },
      { icon: "ownership", title: "FTA Audits & Disputes", text: "Support during audits, reconsiderations and disputes.", tags: ["Audits"] },
    ],
    lists: [
      { title: "Also available", items: ["VAT deregistration", "Registration amendments", "Team training", "VAT refunds", "Corporate tax interaction advice"] },
    ],
  },

  features: {
    eyebrow: "Avoid These",
    heading: "Common VAT Registration Mistakes",
    items: [
      { status: "warn", text: "Not monitoring turnover against the threshold" },
      { status: "warn", text: "Misunderstanding which supplies count towards it" },
      { status: "warn", text: "Registering late and facing back-dated VAT" },
      { status: "warn", text: "Licence name or ownership details not matching" },
      { status: "warn", text: "Incorrect turnover figures in the application" },
      { status: "warn", text: "Claiming input VAT without valid tax invoices" },
    ],
  },

  cost: {
    heading: "VAT Registration Cost",
    intro:
      "Fees depend on your business structure and whether you need registration only or ongoing filing too. Tell us about your business and we'll send a fixed-fee quote.",
    notes: ["Mandatory or voluntary", "Number of entities", "Tax group", "Import/export activity", "Ongoing filing"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Handle Your VAT with",
    paragraph: "Technical VAT knowledge combined with practical FTA experience, plus advisers who understand how VAT and corporate tax interact.",
    cards: [
      { title: "Threshold Analysis", text: "We confirm when and how you should register." },
      { title: "Clean Applications", text: "Documents reviewed to avoid FTA queries." },
      { title: "Ongoing Compliance", text: "Returns, reviews and audits covered." },
    ],
    quoteTitle: "Request a VAT",
    quoteText: "Tell us your turnover and activities, and we'll confirm your registration position and send a quote.",
  },

  included: [
    "Eligibility & threshold check",
    "Document review",
    "EmaraTax application",
    "FTA query handling",
    "TRN & VAT certificate",
    "Post-registration guidance",
  ],

  faqs: [
    { question: "What is the standard VAT rate in the UAE?", answer: "5%. Some supplies are zero-rated, such as certain exports, international transport and some education and healthcare, and others are exempt, such as residential rent and certain financial services." },
    { question: "What is the mandatory VAT registration threshold?", answer: "AED 375,000 of taxable supplies and imports in the past 12 months, or expected in the next 30 days. You must apply within 30 days of exceeding it." },
    { question: "What is the voluntary VAT registration threshold?", answer: "AED 187,500 of taxable supplies, imports or taxable expenses." },
    { question: "How long does VAT registration take?", answer: "Usually 2–3 weeks for a complete application. Complex cases or FTA queries can take longer." },
    { question: "Do zero-rated supplies count towards the threshold?", answer: "Yes. Zero-rated supplies count. Exempt supplies don't." },
    { question: "How do I update my VAT registration details?", answer: "Through an amendment on EmaraTax. Changes to licence, address, signatories or activities should be updated promptly." },
    { question: "What is the difference between VAT and corporate tax?", answer: "VAT is a 5% tax on consumption, charged on sales. Corporate tax is a tax on business profits. They're separate, with separate registrations and TRNs." },
    { question: "What happens if I miss a VAT filing or payment deadline?", answer: "The FTA imposes administrative penalties for late filing and late payment. Returns are generally due within 28 days of the end of each tax period." },
    { question: "Can you help if I'm late or received an FTA notice?", answer: "Yes. We help with late registrations, voluntary disclosures, FTA queries and penalty matters." },
  ],
};
