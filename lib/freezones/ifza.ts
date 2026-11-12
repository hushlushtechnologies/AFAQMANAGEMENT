import type { FreezoneData } from "./types";

// TODO(client): all IFZA prices below are IFZA list prices as supplied with the
// page content (Sept 2026). Confirm current rates before launch.
// TODO(client): IFZA sets up companies only through accredited partners. If
// Afaq is an accredited IFZA partner, say so in hero.intro and cost.intro.

export const ifza: FreezoneData = {
  slug: "ifza",
  name: "IFZA Free Zone",
  shortName: "IFZA",
  hero: {
    eyebrow: "IFZA · Dubai Silicon Oasis · 2026 Guide",
    title: "IFZA Free Zone",
    highlight: "Company Setup in Dubai",
    subtitle: "One of Dubai's most popular budget free zones — licences in 2–5 business days with no physical office required.",
    intro:
      "IFZA packages start from AED 12,900, and companies are set up through accredited partners. This guide covers 2026 costs, licence types, activities, visas, banking, the setup process and documents — and Afaq Al Khaleej can prepare a written, itemised quote for your exact configuration.",
    chips: ["Packages from AED 12,900", "Licence in 2–5 business days", "No physical office needed", "100% foreign ownership"],
    image: "/images/services/feasibility-studies/financial-analysis.png",
  },
  stats: [
    { value: "AED 12,900", label: "Starting price" },
    { value: "2–5 days", label: "Licence issuance" },
    { value: "Up to 15", label: "Visa allocations" },
    { value: "5,000+", label: "Companies registered" },
  ],

  cost: {
    heading: "IFZA Licence Cost 2026: Packages & Pricing",
    intro:
      "IFZA prices its licences by the number of visa allocations you need. Every package includes a flexi-desk (which meets the office requirement), a lease agreement for visa purposes and up to three business activities from the same group.",
    source: "IFZA published list rates — request a written quote for your exact configuration.",
    table: {
      columns: ["Package", "Licence fee", "Visas", "Office", "Year-1 total (est.)", "Renewal"],
      rows: [
        { cells: ["Zero Visa Package", "AED 12,900", "0", "Flexi desk", "AED 12,900", "AED 12,900"], note: "3-year saves ~15%, 5-year ~30%" },
        { cells: ["1 Visa Package", "AED 14,900", "1", "Flexi desk", "AED 28,790", "AED 24,400"], note: "2-year saves ~15%" },
        { cells: ["2 Visa Package", "AED 16,900", "2", "Flexi desk", "AED 36,380", "AED 27,400"] },
        { cells: ["3 Visa Package", "AED 18,900", "3", "Flexi desk", "AED 43,970", "AED 29,400"] },
      ],
      footnote:
        "Year-1 totals include licence, establishment card, e-channel registration, visa, medical and Emirates ID at IFZA list prices. Extra activities beyond three: AED 1,000 each. Multi-year licences carry 15–30% discounts. Figures are planning estimates — your Afaq quote is fixed and itemised.",
    },
    chart: {
      title: "IFZA year-one cost by package (list price, AED)",
      bars: [
        { label: "Zero visa", value: 12900 },
        { label: "1 visa", value: 28790 },
        { label: "2 visas", value: 36380 },
        { label: "3 visas", value: 43970 },
      ],
      aside: {
        title: "Fixed, itemised quote",
        text: "Ask us for a written breakdown of the exact package you need — licence, visas, establishment card and bank account.",
      },
    },
    included: [
      "Trade licence (professional, commercial, general trading or holding)",
      "Flexi-desk / shared workstation — meets the office requirement",
      "Up to 3 business activities from one group (7 max, AED 1,000 each extra)",
      "Lease agreement and establishment card eligibility",
      "100% foreign ownership, zero paid-up share capital",
      "Access to IFZA's banking team and partner banks",
    ],
    addOns: [
      { label: "Establishment card", price: "AED 2,000" },
      { label: "E-channel registration", price: "AED 2,200 + deposit" },
      { label: "Employment visa (2 years)", price: "AED 3,750" },
      { label: "Investor / partner visa (2 years)", price: "AED 4,750" },
      { label: "Medical (standard / VIP)", price: "AED 450 / 850" },
      { label: "Emirates ID typing", price: "AED 390" },
      { label: "In-country status change", price: "AED 1,600" },
      { label: "Dependent visa", price: "AED 4,500" },
    ],
  },

  licenceTypes: {
    heading: "IFZA Licence Types",
    intro:
      "IFZA issues one licence per company, matched to your activity group. You can hold up to seven activities on a single licence (three included), as long as they belong to compatible groups.",
    items: [
      { title: "Professional Licence", text: "Consultancy, IT services, marketing, design, management, education and other services. The most common IFZA licence for freelancers and consultancies." },
      { title: "Commercial (Trading) Licence", text: "Import, export, distribution and trading of specific goods. Ideal for e-commerce and product businesses; mainland sales go through a local distributor or a mainland branch permit." },
      { title: "General Trading Licence", text: "Trade across multiple unrelated product categories on one licence — a higher fee for maximum flexibility." },
      { title: "Holding Licence", text: "Hold shares in other UAE or foreign companies, property and assets. Often used for family and investment structures." },
      { title: "Industrial Licence", text: "Light manufacturing and assembly. IFZA has no warehouse or industrial facilities of its own, so most manufacturers choose another zone." },
      { title: "Dual Licence & Mainland Branch", text: "Under Resolution No. 11 of 2025, an IFZA company can open a Dubai mainland branch with an AED 5,000 permit, enabling onshore trading." },
    ],
  },

  activities: {
    heading: "IFZA Business Activities List",
    intro:
      "IFZA publishes more than 2,000 approved activities across professional, commercial, general trading and holding categories. The first three activities from one group are included; extras cost AED 1,000 each, up to seven per licence. Popular choices include:",
    lists: [
      {
        title: "Professional & Consultancy",
        items: ["Management consultancy", "IT consultancy", "Software development", "Digital marketing", "Web design", "Business consultancy", "HR consultancy", "Accounting & bookkeeping", "Education & training", "Media production", "Event management", "Real estate consultancy", "Engineering consultancy", "Interior design", "Photography"],
      },
      {
        title: "Commercial & Trading",
        items: ["E-commerce", "General trading", "Electronics trading", "Garments & textiles", "Cosmetics & perfumes", "Food & beverages trading", "Building materials", "Auto parts trading", "Furniture trading", "Medical equipment", "Jewellery trading", "Sports equipment", "Toys & gifts", "Machinery trading", "Import / export"],
      },
    ],
    notAvailable:
      "Not available at IFZA: crypto exchange or custody, banking and insurance, oil and gas, and activities that need a physical warehouse. Crypto consulting and advisory are possible. Send us your activity and we'll confirm eligibility and the right licence type.",
  },

  visas: {
    heading: "IFZA Visa Options & Costs",
    intro:
      "Standard packages come with 0–6 visa allocations; with a physical office upgrade the quota can rise to 15. Visas are valid for two years, and you don't need to be in the UAE until the medical and biometrics stage.",
    stats: [
      { value: "15", label: "Max visa quota (with office upgrade)" },
      { value: "21 days", label: "Typical visa processing" },
      { value: "AED 4,000", label: "Visa renewal every 2 years" },
      { value: "AED 4,500", label: "Dependent (family) visa" },
    ],
    types: [
      "Investor / partner visa — for shareholders; AED 4,750",
      "Employment visa — for staff, including yourself as manager; AED 3,750",
      "Dependent visa — spouse, children and parents sponsored by the resident",
      "Golden Visa route — eligible IFZA investors can apply separately",
    ],
    stepsTitle: "Visa process (3–4 weeks end to end)",
    steps: [
      { title: "Entry Permit", text: "Issued in 3–5 working days after the establishment card." },
      { title: "Status Change or Entry", text: "In-country change (AED 1,600) or enter the UAE on the permit." },
      { title: "Medical & Biometrics", text: "Standard AED 450 or VIP AED 850; Emirates ID typing AED 390." },
      { title: "Visa Stamping & Emirates ID", text: "Residence visa issued and Emirates ID card delivered." },
    ],
  },

  documents: {
    heading: "Documents Required for IFZA Company Formation",
    groups: [
      {
        title: "Individual Shareholder (UAE Resident)",
        items: ["Passport copy (6+ months validity)", "UAE residence visa & Emirates ID copy", "Passport-size photo (white background)", "NOC from current sponsor (if employed)", "Signed application forms"],
      },
      {
        title: "Non-Resident Shareholder",
        items: ["Passport copy (6+ months validity)", "Passport-size photo", "Proof of home address (utility bill / bank statement, <3 months)", "Entry stamp or visa copy if in the UAE", "Signed application forms (remote signing accepted)"],
      },
      {
        title: "Corporate Shareholder",
        items: ["Certificate of incorporation (attested)", "Memorandum & Articles of Association", "Board resolution appointing the manager", "Certificate of good standing / incumbency", "Passport copies of directors & UBOs"],
      },
    ],
  },

  process: {
    heading: "How to Set Up an IFZA Company: Step by Step",
    intro:
      "With documents ready, an IFZA licence is typically issued within 2–5 business days. You only need to be in Dubai for the visa medical and biometrics.",
    steps: [
      { when: "Day 0", title: "Consultation & activity selection", text: "We confirm your activities, licence type and visa count, and give you a fixed, itemised quote." },
      { when: "Day 1", title: "Trade-name reservation", text: "Three name options checked and reserved with IFZA." },
      { when: "Days 1–2", title: "Document collection", text: "Passport copies, photos, address proof and signed forms — remote signing accepted." },
      { when: "Day 2", title: "Submission & payment", text: "Your application is submitted through the IFZA partner portal." },
      { when: "Days 3–5", title: "Licence issuance", text: "Trade licence, certificate of incorporation, MOA and lease agreement issued." },
      { when: "Week 2", title: "Establishment card & e-channel", text: "Immigration establishment card and e-channel registration, needed for visas." },
      { when: "Weeks 2–4", title: "Visa processing", text: "Entry permit, medical, biometrics, residence visa and Emirates ID." },
      { when: "Weeks 3–8", title: "Bank account opening", text: "We prepare your file and introduce you to banks such as Wio, Mashreq or CBD." },
    ],
  },

  banking: {
    heading: "Bank Account Opening for IFZA Companies",
    paragraphs: [
      "Banking is the one area of IFZA setup that needs managing. IFZA has formal partnerships with Wio Bank and Mashreq, working relationships with CBD, and an in-house banking team. Realistic opening time is 2–6 weeks, with Wio fastest for solo founders and consultancies. High-risk sectors — crypto, precious metals, general trading with overseas suppliers — can face minimum balances of AED 25,000–100,000.",
      "We prepare a bank-ready file — business plan, invoices or contracts, source of funds and CV — before you apply, which is what shortens the timeline.",
    ],
    snapshot: [
      { label: "Difficulty", value: "Moderate" },
      { label: "Partner banks", value: "Wio Bank, Mashreq (+ CBD)" },
      { label: "Typical timeline", value: "2–6 weeks" },
      { label: "Fastest option", value: "Wio digital onboarding" },
      { label: "High-risk sectors", value: "AED 25k–100k minimum balance" },
    ],
  },

  features: {
    heading: "IFZA Features at a Glance",
    items: [
      { status: "yes", text: "100% foreign ownership — no local partner required" },
      { status: "yes", text: "No physical office required — flexi desk included" },
      { status: "yes", text: "No share capital requirement" },
      { status: "yes", text: "Remote setup — visit only for visa biometrics" },
      { status: "yes", text: "Online partner portal for licence and visa tracking" },
      { status: "yes", text: "Co-working space available at IFZA Business Park" },
      { status: "yes", text: "Dual licence / mainland branch allowed (AED 5,000 permit)" },
      { status: "yes", text: "Multiple shareholders — individual or corporate" },
      { status: "partial", text: "Mainland trading via distributor or branch only" },
      { status: "partial", text: "Crypto — consulting yes; exchange / custody no" },
      { status: "warn", text: "Financial statements mandatory at renewal since Sep 2025" },
      { status: "no", text: "No warehouse or industrial facilities" },
    ],
  },

  prosCons: {
    heading: "IFZA Pros & Cons: An Honest Assessment",
    pros: [
      "One of the lowest all-in Dubai free zone options",
      "No physical office requirement; virtual and flexi-desk options",
      "Fast licence issuance: 2–5 business days",
      "Up to 7 activities per licence (first 3 included, extras AED 1,000)",
      "Strong multi-year discounts: 15% (2-year) to 30% (5-year)",
      "Remote company setup — no need to visit Dubai initially",
      "No minimum capital requirement",
      "Improving banking: Wio Bank, Mashreq and CBD relationships",
      "AI-driven digital registration with Mastercard (August 2025)",
    ],
    cons: [
      "Partner-only model — you must use an accredited agent",
      "Younger brand than DMCC (Dubai presence since 2020), ~5,000 companies",
      "Limited crypto licensing — no exchange or custody activities",
      "Mandatory financial statements for renewals from September 2025",
      "Dubai Silicon Oasis is outside central Dubai — matters if clients visit often",
      "No warehouse or industrial facilities",
      "Direct communication can be slow in peak periods",
    ],
  },

  compare: {
    heading: "IFZA vs Other UAE Free Zones",
    intro:
      "Compare the activity, workspace and number of people you need, then compare complete first-year and renewal quotes.",
    columns: ["Free zone", "From (AED/yr)", "Visas per package", "Office required", "Best for"],
    rows: [
      { cells: ["IFZA (Dubai Silicon Oasis)", "12,900", "0–6 (up to 15)", "No — flexi desk", "Consultancies, freelancers, e-commerce, holding companies on a budget"], current: true },
      { cells: ["Meydan Free Zone", "12,500", "0–6", "No", "Multi-activity licences, remote founders"] },
      { cells: ["DMCC (JLT)", "~35,000+", "1–6+", "Flexi desk minimum", "Commodities, trading, prestige address"] },
      { cells: ["SHAMS (Sharjah)", "~5,750", "0–6", "No", "Media, creative, very low cost outside Dubai"] },
      { cells: ["RAKEZ (Ras Al Khaimah)", "~6,000", "0–6+", "No", "Industrial, warehousing, budget trading"] },
      { cells: ["Dubai South", "12,500", "0–6", "No", "Logistics, aviation, Expo City proximity"] },
    ],
    footnote: "Comparison prices are published starting rates for zero-visa packages and change frequently.",
  },

  tax: {
    heading: "Corporate Tax & Accounting for IFZA Companies",
    paragraphs: [
      "IFZA companies are subject to UAE Corporate Tax law. A Qualifying Free Zone Person pays 0% on qualifying income and 9% on non-qualifying income above AED 375,000; transacting mainly with UAE mainland customers can affect QFZP status. Every IFZA company must register for Corporate Tax within three months of incorporation and file annually.",
      "Since September 2025, IFZA also requires annual financial statements for licence renewal: simplified statements for small companies (revenue ≤ AED 3M), IFRS for SMEs for medium companies (AED 3M–50M) and full IFRS above AED 50M. Our accounting team can handle bookkeeping, VAT and Corporate Tax for your IFZA company.",
    ],
    calendar: [
      { label: "Corporate Tax registration", when: "Within 3 months of licence" },
      { label: "VAT registration", when: "When taxable supplies exceed AED 375,000" },
      { label: "Financial statements", when: "At each licence renewal (annual)" },
      { label: "Corporate Tax return", when: "Within 9 months of financial year end" },
      { label: "ESR / UBO declarations", when: "As applicable to your activity" },
    ],
  },

  // TODO(client): verify these news items before launch.
  developments: {
    heading: "Recent IFZA Developments",
    items: [
      { date: "Aug 2025", text: "AI-driven digital registration partnership with Mastercard; IFZA Panama launched." },
      { date: "Sep 2025", text: "Financial statements made mandatory for all licence renewals." },
      { date: "Oct 2025", text: "Representative office opened in China." },
      { date: "2025–26", text: "Scale360 accelerator with Plug and Play for AI and sustainability start-ups; mainland branch permit under Resolution 11/2025." },
    ],
  },

  included: [
    "Free consultation & activity check",
    "Trade-name reservation",
    "Licence, establishment card, e-channel",
    "Visa & Emirates ID processing",
    "Bank-ready file & introductions",
    "Corporate Tax registration",
  ],

  faqs: [
    { question: "How much does an IFZA licence cost in 2026?", answer: "IFZA's published packages start at AED 12,900 for a zero-visa licence, rising to AED 14,900, 16,900 and 18,900 for one, two and three visa allocations. Year-one totals with visas, establishment card, medical and Emirates ID are higher — ask us for an itemised quote." },
    { question: "Can I set up with IFZA directly, or do I need an agent?", answer: "IFZA sets up companies through accredited partners rather than directly, so you'll work with an agent for your application." },
    { question: "How long does IFZA company setup take?", answer: "With complete documents, the licence is typically issued in 2–5 business days. Visas take around 2–4 weeks more, and bank account opening usually 2–6 weeks." },
    { question: "Do I need a physical office for an IFZA licence?", answer: "No. Every package includes a flexi-desk, which meets the office requirement. You only need a physical office if you want to raise your visa quota above the standard allocation." },
    { question: "How many business activities can I have on one IFZA licence?", answer: "Three activities from one group are included, and you can add more at AED 1,000 each up to a maximum of seven, as long as they belong to compatible groups." },
    { question: "How many visas can I get with an IFZA company?", answer: "Standard packages offer 0–6 visa allocations. With a physical office upgrade, the quota can increase to 15." },
    { question: "Is it easy to open a bank account with an IFZA licence?", answer: "It's moderately difficult. IFZA works with Wio Bank, Mashreq and CBD, and a well-prepared file helps — typical timelines are 2–6 weeks. High-risk sectors may face higher minimum balances." },
    { question: "Can an IFZA company trade on the UAE mainland?", answer: "Not directly. Mainland sales go through a local distributor, or through a Dubai mainland branch, which IFZA companies can open with an AED 5,000 permit under Resolution No. 11 of 2025." },
    { question: "Does IFZA require an audit?", answer: "Since September 2025, annual financial statements are required for licence renewal — simplified for small companies, IFRS for SMEs for medium companies and full IFRS for large ones." },
    { question: "Is IFZA tax-free?", answer: "Not automatically. A Qualifying Free Zone Person pays 0% on qualifying income and 9% on non-qualifying income above AED 375,000. All IFZA companies must register for Corporate Tax and file annually." },
    { question: "Can I set up an IFZA company without visiting Dubai?", answer: "Yes. The company setup can be completed remotely; you only need to be in the UAE for the visa medical and biometrics." },
    { question: "What is the IFZA licence renewal cost?", answer: "Renewal starts at AED 12,900 for the zero-visa package, and from around AED 24,400 for a one-visa package including visa-related charges. Multi-year licences carry discounts." },
    { question: "Where is IFZA located?", answer: "IFZA is located in Dubai Silicon Oasis, with co-working space available at IFZA Business Park." },
    { question: "Does IFZA offer crypto licences?", answer: "Crypto consulting and advisory activities are possible, but crypto exchange and custody activities are not available at IFZA." },
  ],
};
