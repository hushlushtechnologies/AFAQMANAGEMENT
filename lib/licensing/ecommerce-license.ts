import type { FreezoneData } from "@/lib/freezones/types";

// TODO(client): confirm all e-commerce route prices (free zone AED 5,750–12,900,
// mainland AED 12,000–20,000, e-Trader AED 1,070 + 300, Dubai CommerCity from
// AED 25,000) and visa package figures before launch.
// Note: supplied copy listed DMCC "from AED 20,000"; kept consistent with the DMCC
// page (AED 35,484 incl. flexi desk).

export const ecommerceLicense: FreezoneData = {
  slug: "ecommerce-license",
  category: "Business Licensing",
  name: "E-commerce Licence in Dubai",
  shortName: "E-commerce",
  hero: {
    eyebrow: "E-commerce Licence · Dubai & UAE · 2026",
    title: "E-commerce Licence in Dubai, UAE",
    highlight: "Sell Online, on Amazon.ae or noon",
    subtitle: "Sell online legally — through your own website, social media or marketplaces — with a licence from AED 5,750.",
    intro:
      "Free zone e-commerce licences start from AED 5,750 a year, mainland licences from Dubai's Department of Economy and Tourism (DET) suit businesses that also need a physical store, and residents can start from home with an e-Trader licence. Afaq Al Khaleej compares the options for your products and gets you licensed, banked and VAT-ready.",
    chips: ["Licences from AED 5,750", "100% foreign ownership", "Visa packages available", "Accepted by Amazon.ae and noon"],
    image: "/images/services/digital-business-solutions/selling-online.png",
  },
  stats: [
    { value: "AED 5,750", label: "Cheapest free zone licence" },
    { value: "AED 1,070", label: "e-Trader licence for residents" },
    { value: "1–5 days", label: "Typical licence issue time" },
    { value: "5% VAT", label: "Above AED 375K turnover" },
  ],

  about: {
    heading: "What Is an E-commerce Licence — and Who Needs One?",
    body:
      "An e-commerce licence is a trade licence whose activity covers selling goods or services electronically. UAE Federal Law No. 14 of 2023 on Trade Through Modern Technological Means requires anyone trading online in the UAE to hold a licence and follow consumer-protection, data and returns rules. You need one if you sell through any of these channels:",
    location: { name: "Federal Law 14 of 2023", area: "Online trade in the UAE needs a licence", image: "/images/services/digital-business-solutions/website-development.png" },
    features: [
      { icon: "online", title: "Your Own Website or App", text: "Sell physical products through your own online store or mobile app." },
      { icon: "ecommerce", title: "Amazon.ae, noon & Namshi", text: "List products on UAE marketplaces as a registered seller." },
      { icon: "media", title: "Instagram, TikTok & WhatsApp", text: "Take orders and payments through social media and messaging apps." },
      { icon: "trading", title: "Dropshipping & Subscriptions", text: "Run dropshipping, subscription boxes or sell digital products." },
      { icon: "services", title: "Online Services", text: "Offer courses, design, consulting or other services online." },
      { icon: "tax", title: "Selling Without a Licence?", text: "It can lead to fines, frozen marketplace accounts and problems opening a bank account or payment gateway." },
    ],
  },

  cost: {
    heading: "E-commerce Licence Cost in Dubai 2026",
    intro:
      "The licence fee depends on the route. Free zones publish fixed packages; mainland fees depend on your activities, office and visas. Here's what each route costs per year.",
    table: {
      columns: ["Route", "Licence cost (per year)", "Visa", "Office", "Best for"],
      rows: [
        { cells: ["Free zone, no visa", "AED 5,750–12,900", "None", "Flexi-desk included", "Residents, remote founders, marketplace sellers"] },
        { cells: ["Free zone with 1 visa", "AED 12,000–22,000 all-in", "1 investor visa", "Flexi-desk", "Founders who need UAE residence"] },
        { cells: ["Mainland (DET)", "AED 12,000–20,000 + office", "By office size", "Ejari or virtual office", "In-store sales or unrestricted UAE trade"] },
        { cells: ["e-Trader (DET)", "AED 1,070 + AED 300 Chamber", "None", "Home-based", "Dubai residents selling via social media"] },
        { cells: ["Dubai CommerCity", "From AED 25,000", "Packages", "Office or warehouse units", "Larger operators with logistics needs"] },
      ],
      footnote: "Free zones change their packages often — we confirm the current price before you pay.",
    },
    licence: {
      title: "Cheapest e-commerce licence",
      price: "AED 5,750",
      note: "Per year, free zone e-commerce licence with no visa (SPC Free Zone)",
      points: ["Up to 5 activity groups", "Instant licence issue", "Valid for online sales across the UAE", "Afaq fees agreed in writing"],
    },
    addOns: [
      { label: "Establishment card and immigration file", price: "1,500–2,500" },
      { label: "Investor visa, medical & Emirates ID (per person)", price: "3,500–5,500" },
      { label: "Corporate bank account opening", price: "0–2,000" },
      { label: "Payment gateway setup", price: "From 1,000" },
      { label: "VAT registration", price: "No government fee" },
    ],
    guidance:
      "Renewals cost less than year one, because one-off items like bank account opening and payment gateway setup aren't repeated.",
    notes: ["Free zone or mainland", "Number of activities", "Office or warehouse", "Number of visas"],
  },

  activities: {
    eyebrow: "Free Zone E-commerce Licence",
    heading: "Cheapest Free Zones for an E-commerce Licence",
    intro:
      "Published starting prices for e-commerce and online trading licences in 2026. Sharjah and Umm Al Quwain licences are valid for selling online across the UAE — choose a Dubai zone if you need a Dubai address for banking or branding.",
    groups: [
      { icon: "licence", title: "SPC Free Zone", text: "From AED 5,750 — instant licence, 20 minutes from Dubai.", tags: ["Lowest price", "Up to 5 activity groups"], href: "/freezone/spc" },
      { icon: "bank", title: "UAQ Free Trade Zone", text: "From AED 8,000 — some of the lowest-cost visa packages in the UAE.", tags: ["E-commerce + trading"], href: "/freezone/uaq" },
      { icon: "online", title: "Meydan Free Zone", text: "From AED 12,500 — Dubai address, flexi-desk and a licence in 24 hours.", tags: ["3 activity groups", "Dubai"], href: "/freezone/meydan" },
      { icon: "ecommerce", title: "IFZA", text: "From AED 12,900 — popular with Amazon sellers; a 1-visa package costs about AED 21,000 all-in.", tags: ["Up to 3 activities", "Dubai"], href: "/freezone/ifza" },
      { icon: "award", title: "DMCC", text: "From AED 35,484 incl. flexi desk — premium address and the strongest banking reputation.", tags: ["Trading + e-commerce", "Dubai"], href: "/freezone/dmcc" },
      { icon: "trading", title: "Dubai CommerCity", text: "From AED 25,000 — an e-commerce specialist zone with warehousing and last-mile logistics on site.", tags: ["E-commerce specialist", "Warehousing"], href: "/contact-us" },
    ],
  },

  compare: {
    eyebrow: "Free Zone vs Mainland",
    heading: "Mainland or Free Zone E-commerce Licence?",
    intro: "Most online-only sellers choose a free zone. Pick the mainland if you plan a store, pop-ups or B2B supply to local retailers.",
    columns: ["Compare", "Free zone (SPC, UAQ, Meydan, IFZA, DMCC)", "Mainland (DET)"],
    rows: [
      { cells: ["Sell online to UAE customers", "Yes", "Yes"] },
      { cells: ["Physical shop or showroom", "No (free zone premises only)", "Yes"] },
      { cells: ["Sell to UAE government", "No", "Yes"] },
      { cells: ["Ownership", "100% foreign", "100% foreign for e-commerce activities"] },
      { cells: ["Office", "Flexi-desk from the package", "Ejari office or virtual office"] },
      { cells: ["Licence cost", "From AED 5,750", "From AED 12,000 plus office"] },
      { cells: ["Visa quota", "Fixed packages (0–6 visas)", "Based on office size"] },
    ],
  },

  visas: {
    heading: "E-commerce Licence with Visa in Dubai",
    intro:
      "A free zone e-commerce licence can come with 0, 1, 2 or more visa allocations. Each visa adds roughly AED 3,500–5,500 for the entry permit, medical, Emirates ID and stamping, plus an establishment card for the company. Mainland licences get visas based on office size instead.",
    chips: ["Live in the UAE", "Sponsor your family", "Open personal bank accounts"],
    stats: [
      { value: "AED 12,500+", label: "No visa · Dubai FZ, first year" },
      { value: "AED 18,000+", label: "1 visa · Dubai FZ, first year" },
      { value: "AED 3,500+", label: "Per additional visa" },
      { value: "0–6", label: "Visas in free zone packages" },
    ],
    stepsTitle: "What each visa includes",
    steps: [
      { title: "Establishment Card", text: "The company's immigration file, needed before any visa." },
      { title: "Entry Permit", text: "Issued for the investor or employee." },
      { title: "Medical & Emirates ID", text: "Medical test and Emirates ID biometrics in the UAE." },
      { title: "Visa Stamping", text: "Residence visa issued — you can add more visas later." },
    ],
  },

  infoBlock: {
    eyebrow: "Sell on Amazon.ae & noon",
    heading: "Selling on Amazon.ae and noon with Your Licence",
    paragraphs: [
      "Both marketplaces ask for the same core documents. A free zone e-commerce licence from SPC, IFZA, Meydan or UAQ is accepted by both, and we prepare your seller-account file so approval isn't delayed.",
      "We also help you set up payment gateways such as Telr, PayTabs, Stripe and Network International.",
    ],
    listTitle: "What the marketplaces need",
    list: [
      "A UAE trade licence with an e-commerce or trading activity",
      "A UAE corporate bank account for payouts in your company's name",
      "A VAT registration number once taxable sales pass AED 375,000 a year",
      "For noon: a UAE address and the signatory's Emirates ID",
    ],
  },

  process: {
    heading: "How to Get an E-commerce Licence in Dubai",
    intro: "From choosing your activity code to launching your store — our PRO team handles the filings, visas and bank introductions.",
    cautionTitle: "1–5 working days",
    caution: "Most free zone e-commerce licences are issued in 1–5 working days; mainland licences take 5–10. Visas add 2–3 weeks.",
    steps: [
      { title: "Choose products & channels", text: "So we match the right activity: e-commerce, online trading, marketplace or digital content." },
      { title: "Pick the jurisdiction", text: "Free zone, mainland or e-Trader — based on cost, visas and whether you need a store." },
      { title: "Reserve the trade name", text: "A name that follows UAE naming rules, plus initial approval." },
      { title: "Submit documents & pay", text: "Free zones issue most e-commerce licences in 1–5 working days." },
      { title: "Visa & Emirates ID", text: "If visas are included in your package." },
      { title: "Bank account & payment gateway", text: "UAE banks and gateways such as Telr, PayTabs, Stripe or Network International." },
      { title: "Register for VAT & corporate tax", text: "VAT once turnover passes AED 375,000; corporate tax within the FTA deadline." },
      { title: "Launch your store", text: "Go live with returns and privacy policies that comply with the E-commerce Law." },
    ],
  },

  documents: {
    heading: "Documents Required for an E-commerce Licence",
    image: "/images/services/finance-management/better-expense-management.png",
    items: [
      "Passport copies of all shareholders",
      "UAE visa or entry stamp, and Emirates ID for residents",
      "Passport-size photos",
      "Two or three proposed trade names",
      "Short description of products and sales channels",
      "Website or store URL, if already live",
      "NOC from your employer (employees applying for an e-Trader licence)",
      "Completed licence application form",
    ],
    note: "Mainland licence? You'll also need an Ejari-registered tenancy contract (or a virtual office) and a Memorandum of Association. Free zone packages include the flexi-desk.",
  },

  tax: {
    heading: "Taxes & Compliance for Online Sellers",
    paragraphs: ["What every online store needs to plan for once the licence is issued."],
    cards: [
      { value: "5% VAT", title: "VAT Registration", text: "Register once taxable supplies exceed AED 375,000 a year (voluntary from AED 187,500). Exports outside the GCC are zero-rated." },
      { value: "0% / 9%", title: "Corporate Tax", text: "0% up to AED 375,000 of taxable profit and 9% above, with mandatory FTA registration. Small Business Relief applies below AED 3M revenue for periods ending by 31 Dec 2026." },
      { value: "Law 14", title: "E-commerce Law (2023)", text: "Show your licence number, prices, returns policy and contact details, and protect customer data." },
      { value: "7 years", title: "Accounting Records", text: "Keep accounting records for at least seven years." },
    ],
    tags: ["VAT registration", "Corporate tax registration", "Accounting services"],
  },

  included: [
    "Free consultation & route comparison",
    "Activity code & trade name",
    "Licence application & filing",
    "Visa & Emirates ID processing",
    "Bank account & payment gateway support",
    "Amazon.ae & noon seller-account file",
  ],

  faqs: [
    { question: "How much is an e-commerce licence in Dubai?", answer: "Free zone e-commerce licences start from AED 5,750 a year (SPC Free Zone) and AED 12,500–12,900 in Dubai zones such as Meydan and IFZA. A package with one visa usually costs AED 18,000–22,000 in the first year. Mainland DET licences cost AED 12,000–20,000 plus an office." },
    { question: "Do I need a licence to sell online in the UAE?", answer: "Yes. Federal Law No. 14 of 2023 requires anyone trading online in the UAE — through a website, marketplace or social media — to hold a licence." },
    { question: "What is an e-commerce licence?", answer: "A trade licence whose activity covers selling goods or services electronically, through your own store, marketplaces or social media." },
    { question: "What is the cheapest e-commerce licence in the UAE?", answer: "For residents selling via social media, the DET e-Trader licence (around AED 1,070 plus Chamber fees). For a company licence, SPC Free Zone starts from AED 5,750 a year." },
    { question: "Can I get an e-commerce licence with a visa?", answer: "Yes. Free zone packages come with 0, 1, 2 or more visas; each visa adds roughly AED 3,500–5,500. Mainland visa quotas depend on office size." },
    { question: "Can a foreigner own an e-commerce company in Dubai 100%?", answer: "Yes — free zone companies are 100% foreign-owned, and mainland e-commerce activities also allow 100% foreign ownership." },
    { question: "Can I sell on Amazon.ae or noon with a free zone licence?", answer: "Yes. Licences from SPC, IFZA, Meydan and UAQ are accepted by both, alongside a UAE corporate bank account and, once required, a VAT number." },
    { question: "How long does it take to get an e-commerce licence?", answer: "Most free zone e-commerce licences take 1–5 working days; mainland licences 5–10. Visas add 2–3 weeks." },
    { question: "Do online sellers pay VAT and corporate tax?", answer: "VAT registration is mandatory above AED 375,000 of taxable supplies a year. Corporate tax is 0% up to AED 375,000 of taxable profit and 9% above, with mandatory registration." },
    { question: "What are the four types of e-commerce?", answer: "Business-to-consumer (B2C), business-to-business (B2B), consumer-to-consumer (C2C) and consumer-to-business (C2B)." },
  ],
};
