import type { FreezoneData } from "./types";

// TODO(client): package prices are official SHAMS prices as supplied (23 Oct 2026,
// incl. VAT); visa and add-on figures are indicative ranges. Confirm before launch.
// TODO(client): if Afaq is a registered SHAMS partner, add that to hero.intro.
// Note: the supplied comparison listed SRTIP from AED 7,500+, but our SRTIP page
// uses AED 5,500 — kept consistent with the SRTIP page; confirm the right figure.

export const shams: FreezoneData = {
  slug: "shams",
  name: "SHAMS Free Zone",
  shortName: "SHAMS",
  hero: {
    eyebrow: "Sharjah Media City · 2026",
    title: "SHAMS Free Zone",
    highlight: "Company Setup in Sharjah",
    subtitle: "Company setup from AED 5,760, licence in 2–3 working days, and up to 5 activities on one LLC licence.",
    intro:
      "SHAMS — Sharjah Media City — is a UAE free zone built for media, creative and service businesses, and one of the most affordable ways to start a company in the UAE. Official packages start from AED 5,760 a year, the process is 100% digital, and you keep 100% foreign ownership. Afaq Al Khaleej handles the full setup, visas, bank account and tax registration end to end.",
    chips: ["Licence from AED 5,760", "100% foreign ownership", "Up to 5 activities, LLC without \"FZ\"", "2–3 working days, fully online"],
    image: "/images/services/investment-services/events-entertainment.png",
  },
  stats: [
    { value: "AED 5,760", label: "Media package, per year" },
    { value: "2–3 days", label: "100% digital setup" },
    { value: "5", label: "Activities on one licence" },
    { value: "Up to 50", label: "Visas per licence" },
  ],

  about: {
    heading: "Sharjah Media City (SHAMS): Quick Facts 2026",
    body:
      "SHAMS was established under Emiri Decree No. 10 of 2016 and has operated since 2017. It licenses media, creative, service, trading and holding companies, sits in Al Bataeh, Sharjah — about 30 minutes from Dubai — and runs every step of licensing online.",
    location: { name: "Al Bataeh, Sharjah", area: "About 30 minutes from Dubai", image: "/images/services/digital-business-solutions/branding-digital-identity.png" },
    features: [
      { icon: "licence", title: "Low Starting Cost", text: "Media package from AED 5,760 a year; standard package from AED 6,885. Zero-visa, flexi desk included." },
      { icon: "award", title: "LLC without the \"FZ\" Suffix", text: "Your company name reads like a mainland company — helpful with international clients and banks." },
      { icon: "activities", title: "Five Activities on One Licence", text: "Mix media, e-commerce and consultancy under a single licence." },
      { icon: "online", title: "2–3 Working Days, Fully Online", text: "Application, payment and licence issue all happen online — no visit needed for the licence." },
      { icon: "visas", title: "Visa Quota That Scales", text: "A shared desk starts with a small quota; office upgrades unlock up to 50 visas. No NOC needed." },
      { icon: "bank", title: "Banking Access: Medium", text: "Depends on activity, documents and shareholder profile. We prepare the compliance file before you apply." },
    ],
  },

  prosCons: {
    placement: "early",
    eyebrow: "Quick Verdict",
    heading: "Should You Choose SHAMS Free Zone?",
    prosTitle: "Choose SHAMS if…",
    consTitle: "Look elsewhere if…",
    pros: [
      "You run a media, creative, consulting or digital service business",
      "You want one of the lowest realistic UAE licence costs with a fast, fully online setup",
      "You value an LLC name without the \"FZ\" suffix for client-facing credibility",
      "You need room to scale visas later without re-incorporating",
    ],
    cons: [
      "Your activity is regulated (finance, insurance, health) — different approvals apply",
      "You must invoice UAE mainland clients directly — consider a Sharjah mainland company",
      "You need heavy logistics or warehousing — SAIF Zone fits better",
      "Your bank file needs a stronger jurisdiction — we assess this before you pay",
    ],
    note: {
      title: "Is SHAMS Free Zone in Dubai?",
      text: "No. SHAMS is in Sharjah, the emirate next to Dubai, about 25–35 minutes from Dubai International Airport. Many investors run their business from Dubai on a SHAMS licence — that works well for service, media and e-commerce activities, since a SHAMS company can serve clients across the UAE and internationally at a much lower licence cost than Dubai free zones.",
    },
  },

  cost: {
    heading: "SHAMS Free Zone Licence Cost in 2026",
    intro:
      "Official SHAMS package prices, inclusive of VAT. Visa, immigration and add-on figures are indicative ranges — request an itemised quote before payment.",
    tiers: [
      {
        badge: "Lowest",
        name: "Media Package",
        price: "AED 5,760",
        tagline: "Per year · official SHAMS price",
        points: ["Up to 5 media activities", "Licence issued as LLC, 100% ownership", "Flexi desk and lease agreement", "No NOC required"],
      },
      {
        badge: "Most flexible",
        name: "Standard Package",
        price: "AED 6,885",
        tagline: "Per year · or AED 573 × 12 on a UAE credit card",
        points: ["Any 5 business activities", "Service, trading, e-commerce or multi-sector", "Flexi desk and lease agreement", "No NOC required"],
      },
      {
        badge: "With one visa",
        name: "All-in with One Visa",
        price: "AED 14,000–16,000",
        tagline: "First year, indicative · licence + establishment card + e-channel + visa, medical & Emirates ID",
        points: ["One-visa package from ~AED 13,000–14,000 before stamping", "Multi-visa packages custom; up to 50 visas with office upgrades", "Up to 20% off multi-year licences"],
      },
    ],
    licence: {
      title: "SHAMS Free Zone Licence",
      price: "AED 5,760",
      note: "Media package per year, inclusive of VAT · standard package AED 6,885",
      points: ["Trade licence with up to 5 activities", "Registration and authority documents", "Shared desk and lease agreement", "Afaq fees agreed in writing"],
    },
    addOns: [
      { label: "Establishment card + e-channel registration", price: "2,000–2,500" },
      { label: "Investor or employee visa (per visa)", price: "3,000–5,500" },
      { label: "Medical, Emirates ID & insurance (per person)", price: "1,500–2,500" },
      { label: "Flexi desk or office upgrade (for more visas)", price: "Package dependent" },
      { label: "Renewal (year 2+)", price: "Similar to licence fee" },
    ],
    guidance:
      "Hidden costs to budget for: establishment card and immigration file, visa stamping and status change, office upgrades as your visa count grows, activity amendments, and renewal pricing that may exceed promotional year-one rates. We quote these up front so year two doesn't surprise you.",
    notes: ["External approvals for some activities", "Bank approval is the bank's decision", "No mainland trading or customs code", "Activity amendments cost extra"],
  },

  licenceTypes: {
    heading: "What Makes SHAMS Free Zone Different",
    intro:
      "Register an LLC without the \"FZ\" suffix, combine up to 5 activities on one licence, and have it issued online in 2–3 working days. Pick the licence that matches what you sell.",
    items: [
      { title: "Service Licence", text: "Consulting and professional services.", tags: ["Marketing agencies", "IT", "Consultants"] },
      { title: "Trading Licence", text: "Buying and selling goods.", tags: ["E-commerce", "General trading"] },
      { title: "Media Licence", text: "Content, production and publishing — the AED 5,760 media package.", tags: ["Studios", "Influencers", "Production houses"] },
      { title: "Freelancer Permit", text: "For individuals in media and creative fields working under their own name.", tags: ["Creators", "Designers"] },
      { title: "Industrial Licence", text: "Light manufacturing.", tags: ["Packaging", "Assembly"] },
      { title: "Holding Licence", text: "Owning shares and assets.", tags: ["Holding companies", "Investors"] },
    ],
  },

  documents: {
    heading: "Documents Required for SHAMS Company Formation",
    image: "/images/closing-cta/presenting-chart.png",
    intro:
      "No physical presence is needed for licensing; banks may ask for one meeting during account opening. There's no minimum share capital to pay up front.",
    items: [
      "Passport copy (6+ months validity) for each shareholder and director",
      "Passport-size photo",
      "Contact and address details",
      "Three trade name options",
      "Up to 5 selected activities",
      "UAE visa or entry stamp if resident (no NOC needed)",
    ],
    note: "Corporate shareholder? Add the parent's certificate of incorporation, memorandum and a board resolution approving the new company.",
  },

  process: {
    heading: "How to Set Up a Company in SHAMS: 5 Steps",
    intro: "Fully digital. We file the application, track approvals and handle visas and banking for you.",
    cautionTitle: "Licence in 2–3 days",
    caution:
      "SHAMS issues the licence in 2–3 working days after payment. Visas add about a week; bank account opening takes 1–4 weeks depending on the bank.",
    steps: [
      { title: "Choose activities & licence type", text: "Pick up to 5 activities. We map your business model to the right combination so you avoid amendment fees later." },
      { title: "Reserve the trade name", text: "Submit three name options. SHAMS allows the LLC suffix without \"FZ\" — worth using for international brands." },
      { title: "Submit KYC documents online", text: "Passport copy, photo and address details for each shareholder. No visit required for the licence." },
      { title: "Receive your licence", text: "Typically 2–3 working days after payment, followed by e-channel and establishment card for visas." },
      { title: "Visas & bank account", text: "Stamping, Emirates ID and medical take about a week. We prepare your bank compliance file and introduce suitable banks." },
    ],
  },

  compare: {
    heading: "SHAMS vs SAIF vs SPC vs SRTIP",
    intro: "Sharjah has four main free zones. Starting prices are each zone's published 2026 figure.",
    columns: ["Free zone", "Licence from", "Best for", "Setup speed", "Signature feature"],
    rows: [
      { cells: ["SHAMS", "AED 5,760", "Media, creative, services, e-commerce", "2–3 days, fully online", "LLC without FZ suffix; 5 activities"], current: true },
      { cells: ["SPC Free Zone", "AED 5,750", "Publishing, e-commerce, consultants", "Instant licence", "Publishing-focused free zone"] },
      { cells: ["SRTIP", "AED 5,500", "Tech, R&D", "3–7 days", "Innovation park with labs"] },
      { cells: ["SAIF Zone", "AED 12,000+", "Logistics, trading, airfreight", "3–7 days", "Next to Sharjah Airport"] },
    ],
  },

  tax: {
    heading: "Tax, Compliance & Banking for SHAMS Companies",
    paragraphs: [
      "SHAMS companies fall within UAE corporate tax scope like every free zone entity. We include corporate tax registration and a Qualifying Free Zone Person assessment in our setup support.",
    ],
    cards: [
      { value: "0% / 9%", title: "Corporate Tax", text: "A qualifying free zone person pays 0% on qualifying income and 9% on other taxable income above AED 375,000. FTA registration is mandatory even at 0%." },
      { value: "5% VAT", title: "VAT Registration", text: "Applies once UAE taxable supplies pass AED 375,000 a year." },
      { value: "No ESR", title: "Economic Substance", text: "ESR was cancelled for financial years ending after 31 December 2022 (Cabinet Decision No. 98 of 2024), so no ESR filings are due." },
      { value: "1–4 wks", title: "Bank Account", text: "Medium difficulty. Digital banks like Wio often decide within days for clean service businesses; traditional banks take 2–4 weeks. No free zone can guarantee approval." },
    ],
    tags: ["Corporate tax registration", "VAT registration", "Accounting services"],
  },

  included: [
    "Free consultation & activity mapping",
    "Trade name reservation",
    "Online licence application",
    "Establishment card & e-channel",
    "Visa & Emirates ID processing",
    "Corporate tax registration & QFZP assessment",
  ],

  faqs: [
    { question: "What is SHAMS Free Zone?", answer: "SHAMS (Sharjah Media City) is a UAE free zone established under Emiri Decree No. 10 of 2016 and operational since 2017. It licenses media, creative, service, trading and holding companies with 100% foreign ownership, and is among the lowest-cost free zones in the UAE." },
    { question: "How much does a SHAMS licence cost in 2026?", answer: "The official media package starts at AED 5,760 a year and the standard package at AED 6,885, both inclusive of VAT. With one visa, budget around AED 14,000–16,000 for the first year all-in." },
    { question: "Is SHAMS Free Zone in Dubai or Sharjah?", answer: "SHAMS is in Al Bataeh, Sharjah — about 30 minutes from Dubai. Many founders run service, media and e-commerce businesses from Dubai on a SHAMS licence." },
    { question: "How many visas can I get with a SHAMS licence?", answer: "A shared desk starts with a small quota, and office upgrades can unlock up to 50 visas per licence. No NOC is needed." },
    { question: "How many activities can I have on a SHAMS licence?", answer: "Up to 5 activities on one licence. The media package covers media activities; the standard package lets you combine any 5 business activities." },
    { question: "Is there a minimum share capital for SHAMS?", answer: "There's no minimum share capital to pay up front." },
    { question: "Does a SHAMS company pay corporate tax?", answer: "SHAMS companies are within UAE corporate tax scope. Qualifying free zone persons pay 0% on qualifying income and 9% on other taxable income above AED 375,000, and FTA registration is mandatory even at 0%." },
    { question: "How long does SHAMS company setup take?", answer: "The licence is typically issued in 2–3 working days after payment. Visas add about a week, and bank accounts 1–4 weeks." },
    { question: "Can I get an e-commerce licence from SHAMS?", answer: "Yes. E-commerce falls under the trading licence and can be combined with other activities on the standard package." },
    { question: "Can I pay the SHAMS licence in instalments?", answer: "Yes — the standard package can be paid as AED 573 × 12 on a UAE credit card." },
  ],
};
