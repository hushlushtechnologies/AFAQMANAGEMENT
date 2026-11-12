import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero + location reuse images (ajman-media-city / commercial-license) —
// replace with dedicated VAT images when available.

export const vatFaqs: FreezoneData = {
  slug: "vat-faqs",
  category: "Accounting & Tax",
  name: "Value Added Tax (VAT) FAQs – UAE",
  shortName: "VAT FAQs",
  hero: {
    eyebrow: "VAT Services · FAQs · UAE",
    title: "Value Added Tax (FAQs)",
    highlight: "Your UAE VAT Questions, Answered",
    subtitle: "Clear answers to the most common questions about VAT in the United Arab Emirates.",
    intro:
      "VAT has applied in the UAE since 1 January 2018. Here we answer the questions businesses ask most often, from rates and registration to records, real estate, financial services and tourist refunds. If your question isn't covered, our VAT consultants are happy to help.",
    chips: ["Rates & scope", "Registration", "Returns & records", "Special cases"],
    image: "/images/services/business-consultancy/market-research.png",
  },
  stats: [
    { value: "5%", label: "Standard rate" },
    { value: "1 Jan 2018", label: "VAT introduced" },
    { value: "28 days", label: "To file after period end" },
    { value: "5 years", label: "Minimum record retention" },
  ],

  about: {
    heading: "Why the UAE Introduced VAT",
    body:
      "The federal and emirate governments fund public services such as hospitals, roads, schools, parks, waste management and policing. VAT gives the country a new source of income to keep these services high-quality, and supports the vision of relying less on oil and other hydrocarbons for revenue.",
    location: { name: "Funding public services", area: "Reducing reliance on oil revenue", image: "/images/services/feasibility-studies/competitor-analysis.png" },
    features: [
      { icon: "tax", title: "5% Standard Rate", text: "One of the lowest VAT rates in the world." },
      { icon: "licence", title: "Zero-Rated Supplies", text: "Exports, international transport and more." },
      { icon: "bank", title: "Exempt Supplies", text: "Some financial services, residential rent, bare land." },
      { icon: "online", title: "Collected via EmaraTax", text: "Registration, returns and payments online." },
      { icon: "multiple", title: "Tax Groups", text: "Related businesses can register as a group." },
      { icon: "award", title: "Tourist Refunds", text: "Eligible visitors can reclaim VAT." },
    ],
  },

  tax: {
    eyebrow: "VAT at a Glance",
    heading: "How UAE VAT Works",
    paragraphs: [
      "Registered businesses collect VAT on their sales (output tax), recover VAT on eligible purchases (input tax) and pay the difference to the Federal Tax Authority.",
    ],
    cards: [
      { value: "5%", title: "Standard-Rated", text: "Most goods and services, including most food." },
      { value: "0%", title: "Zero-Rated", text: "Exports, international transport, certain education and healthcare, first supply of new residential buildings." },
      { value: "Exempt", title: "Exempt", text: "Certain financial services, residential rent after first supply, bare land, local passenger transport." },
      { value: "Out", title: "Out of Scope", text: "Certain government sovereign activities and non-business transactions." },
    ],
    tags: ["Federal Decree-Law No. 8 of 2017", "Federal Tax Authority", "EmaraTax"],
  },

  process: {
    heading: "The VAT Cycle for Registered Businesses",
    intro: "What businesses need to do on an ongoing basis.",
    steps: [
      { title: "Register", text: "Mandatory above AED 375,000 of taxable supplies and imports. Voluntary above AED 187,500." },
      { title: "Invoice correctly", text: "Issue tax invoices showing your TRN and the VAT charged." },
      { title: "Keep records", text: "Invoices, accounts and supporting documents, generally for at least 5 years." },
      { title: "File returns", text: "Usually quarterly, within 28 days of the end of each tax period." },
      { title: "Pay on time", text: "Settle net VAT due by the return deadline." },
    ],
  },

  cost: {
    heading: "Need Help With VAT?",
    intro:
      "From registration and returns to specific questions about your sector, we provide practical VAT support. Tell us what you need and we'll send a quote.",
    notes: ["Registration", "Return filing", "Advisory", "Health checks", "FTA queries"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Get Clear VAT Answers from",
    paragraph: "Practical VAT advice for your business, from first registration to complex questions on real estate, financial services and cross-border trade.",
    cards: [
      { title: "Plain-English Advice", text: "Clear answers without jargon." },
      { title: "Sector Experience", text: "Trading, real estate, services and more." },
      { title: "Full VAT Support", text: "Registration, returns, reviews and audits." },
    ],
    quoteTitle: "Ask a VAT",
    quoteText: "Send us your VAT question, and our consultants will get back to you.",
  },

  faqs: [
    { question: "When did VAT start in the UAE, and what is the rate?", answer: "VAT started on 1 January 2018. The standard rate is 5%, with some supplies zero-rated or exempt." },
    { question: "How does the government collect VAT?", answer: "Registered businesses charge VAT on their supplies, recover VAT on eligible purchases and pay the net amount to the FTA through EmaraTax." },
    { question: "Does VAT apply to all products and services?", answer: "Most goods and services are standard-rated at 5%. Some are zero-rated, such as exports, international transport and certain education and healthcare. Others are exempt, such as certain financial services, residential rent and bare land." },
    { question: "Who must register for VAT?", answer: "Businesses with taxable supplies and imports over AED 375,000 in the past 12 months, or expected in the next 30 days. Those above AED 187,500 can register voluntarily." },
    { question: "What are a business's main VAT responsibilities?", answer: "Registering when required, charging VAT correctly, issuing tax invoices, keeping records, filing returns and paying VAT on time." },
    { question: "When must VAT returns be filed?", answer: "Usually quarterly, though some businesses file monthly. Returns and payment are due within 28 days of the end of each tax period." },
    { question: "What records must businesses keep, and for how long?", answer: "Tax invoices, credit notes, import and export records, accounting books and other supporting documents, generally for at least 5 years. Real estate records must be kept longer." },
    { question: "Can customs duty be offset against VAT?", answer: "No. Customs duty and VAT are separate taxes and can't be offset against each other." },
    { question: "How is real estate treated?", answer: "The first supply of a new residential building within 3 years of completion is zero-rated. Later residential sales and leases are generally exempt. Commercial property is standard-rated, and bare land is exempt." },
    { question: "How are insurance and financial services treated?", answer: "Life insurance and margin-based financial services, such as interest, are generally exempt. Fee-based financial services and most general insurance are standard-rated." },
    { question: "How is Islamic finance treated?", answer: "Islamic finance products are treated the same way as the equivalent conventional products." },
    { question: "Are there margin schemes, bad debt relief and VAT grouping?", answer: "Yes. A profit margin scheme applies to certain used goods, bad debt relief is available if conditions are met, and related businesses can form a tax group." },
    { question: "Can UAE nationals claim VAT?", answer: "UAE nationals can claim a refund of VAT paid on building their new residence, subject to conditions." },
    { question: "Can businesses issue cash receipts instead of tax invoices?", answer: "Registered businesses must issue tax invoices. Simplified tax invoices are allowed in certain cases, such as retail sales below a set value." },
    { question: "Is there VAT that businesses can't recover?", answer: "Yes. Input VAT on entertainment for non-employees, motor vehicles available for personal use and some employee benefits generally can't be recovered." },
    { question: "Do non-residents need to register?", answer: "Non-resident businesses making taxable supplies in the UAE may need to register, unless the customer accounts for VAT under the reverse charge." },
    { question: "Is VAT paid on imports?", answer: "Yes. VAT is due on imports. Registered importers can usually account for it through the reverse charge mechanism in their return." },
    { question: "Do tourists pay VAT?", answer: "Yes, but eligible tourists can claim refunds on qualifying purchases through the UAE Tourist Refund Scheme when they leave." },
    { question: "Do businesses report by emirate?", answer: "Yes. VAT returns show sales broken down by emirate." },
  ],
};
