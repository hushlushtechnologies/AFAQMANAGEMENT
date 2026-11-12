import type { FreezoneData } from "./types";

// TODO(client): all DMCC figures are as supplied with the page content (2026).
// Confirm package prices, fees and package perks (instalments, renewal price
// freeze, resident rates) against DMCC's current published terms before launch.
// TODO(client): verify "26,000+ companies", "11% of Dubai FDI" and award claims.

export const dmcc: FreezoneData = {
  slug: "dmcc",
  name: "DMCC Free Zone",
  shortName: "DMCC",
  hero: {
    eyebrow: "DMCC Business Setup · 2026 Prices",
    title: "DMCC Free Zone",
    highlight: "Business Setup in Dubai",
    subtitle:
      "Company formation in JLT from about AED 42,000 all-in with one visa — licence in around 10 working days, 100% online.",
    intro:
      "DMCC (Dubai Multi Commodities Centre) is Dubai's flagship free zone in Jumeirah Lakes Towers, home to more than 26,000 companies. It's the jurisdiction banks, commodity counterparties and international partners recognise first — a practical choice for investors, founders, SMEs, e-commerce owners, expanding companies and high-net-worth individuals who want a credible Dubai address with clear pricing.",
    chips: ["Licence + flexi desk from AED 35,484", "100% foreign ownership, 0% personal tax", "1,000+ activities, 6 per licence", "Strong bank acceptance"],
    image: "/images/services/finance-management/clear-financial-visibility.png",
  },
  stats: [
    { value: "AED 42k+", label: "Year-one cost with one visa" },
    { value: "~10 days", label: "Licence after documents" },
    { value: "26,000+", label: "Companies across 87 JLT towers" },
    { value: "#1", label: "fDi Global Free Zone of the Year" },
  ],

  about: {
    heading: "What is DMCC Free Zone? Quick Facts 2026",
    body:
      "DMCC is a Government of Dubai authority established in 2002 and governed by Law No. 3 of 2020, serving as the free zone authority for Jumeirah Lakes Towers and Uptown Dubai. It licenses trading, services, industrial and holding companies, runs dedicated centres for gold, diamonds, tea, coffee, crypto, gaming and AI, and handles the whole setup through its online portal. Recognised as Global Free Zone of the Year by the Financial Times' fDi Magazine, DMCC accounts for around 11% of Dubai's annual foreign direct investment.",
    location: { name: "JLT & Uptown Dubai", area: "On the Sheikh Zayed Road metro line", image: "/images/about/the-connection.jpg" },
    features: [
      { icon: "award", title: "Global Free Zone of the Year", text: "Awarded by fDi Magazine year after year, including 2023." },
      { icon: "bank", title: "Strongest Banking Profile", text: "UAE and international banks treat a DMCC licence as low-risk, so account opening is typically faster than with budget free zones." },
      { icon: "tax", title: "0% Tax on Qualifying Income", text: "Qualifying free zone persons pay 0% corporate tax on qualifying income, 0% personal income tax and no customs duty inside the zone." },
      { icon: "activities", title: "1,000+ Activities, 6 per Licence", text: "Commodities, general trading, consulting, tech, crypto, F&B, logistics and holding — up to 6 activities per licence, more at AED 1,500 each." },
      { icon: "ownership", title: "100% Ownership & Repatriation", text: "Full foreign ownership of an FZCO or branch, no local sponsor, and unrestricted repatriation of capital and profits." },
      { icon: "office", title: "Office for Every Stage", text: "Across 87 towers: flexi desk (up to 3 visas), serviced office (4–5 visas) or leased space at 1 visa per 9 sqm." },
      { icon: "ecosystem", title: "Commodity & Sector Ecosystems", text: "Dubai Gold & Commodities Exchange, Dubai Diamond Exchange, Tea and Coffee Centres, plus Crypto, Gaming and AI Centres." },
    ],
  },

  prosCons: {
    placement: "early",
    eyebrow: "Quick Verdict",
    heading: "Should You Choose DMCC Free Zone?",
    prosTitle: "Choose DMCC if…",
    consTitle: "Look elsewhere if…",
    pros: [
      "You trade commodities — gold, diamonds, tea, coffee, metals or energy — and need counterparties to recognise your licence, or you buy, sell, import, export and distribute goods internationally",
      "Bank account speed and credibility matter more than the lowest licence fee",
      "You want a prime JLT address, a visa quota that grows with your office, and sector ecosystems",
      "You're building a holding company, SPV, family office or digital-asset business alongside crypto, gaming or AI ventures",
    ],
    cons: [
      "Your budget is under AED 20,000 — Meydan or IFZA start far lower",
      "You must invoice UAE mainland clients directly or open a retail outlet — consider a Dubai mainland company",
      "You need heavy warehousing or port access — JAFZA or Dubai South fit better",
      "You run a regulated financial business needing a DFSA licence — look at DIFC",
    ],
    note: {
      title: "DMCC vs cheaper free zones",
      text: "A DMCC company costs roughly three times a Meydan or SHAMS licence in year one. You're paying for a Government of Dubai regulator, a physical JLT address, the strongest bank acceptance in the UAE and an ecosystem of 26,000 companies. For commodity traders, holding structures and anyone who's had a bank application rejected elsewhere, that premium usually pays for itself.",
    },
  },

  cost: {
    heading: "How Much Does a DMCC Company Cost in 2026?",
    intro:
      "Year-one estimates for the most common DMCC setups, based on DMCC's published fees. DMCC registration starts from one shareholder, with an initial application fee of about AED 1,035. Figures exclude our professional fees, which we quote separately and fix in writing — and since DMCC can change charges without notice, we re-confirm every figure before you pay.",
    tiers: [
      {
        badge: "Lowest entry",
        name: "Solo Founder",
        price: "AED 42,000–46,000",
        tagline: "Year one · licence + flexi desk + 1 investor visa",
        points: ["Entry-level package licence & flexi desk (from AED 35,484)", "Establishment card, visa, medical and Emirates ID", "Individual shareholders only", "0% instalments possible via DMCC's bank partner"],
      },
      {
        badge: "Most popular",
        name: "Start-up with a Small Team",
        price: "AED 48,000–58,000",
        tagline: "Year one · licence + flexi desk or co-working + 1–3 visas",
        points: ["Start-up package with one visa built in (from AED 43,780)", "Flexi desk eligible for up to 3 visas", "Corporate shareholders allowed", "Multi-year pricing cuts yearly cost ~20–25%"],
      },
      {
        badge: "Established company",
        name: "Established Company",
        price: "AED 60,000–120,000+",
        tagline: "Year one · serviced or leased office + 4–10 visas",
        points: ["Fast-track corporate package (from AED 40,145) plus office rent", "Serviced office 4–5 visas; leased space 1 visa per 9 sqm", "Renewal price freeze and free changes in the first 3 months", "Branch or subsidiary of a foreign parent"],
      },
      {
        badge: "Sector centres",
        name: "Crypto, Gaming or AI Centre",
        price: "AED 31,000–38,000",
        tagline: "Year one · centre licence + co-working + 1 visa",
        points: ["Centre packages at AED 31,000 incl. VAT", "Half-price renewal in year two", "Health & fitness and tech incubator options cost less", "Special rates for JLT residents and Uptown owners"],
      },
    ],
    licence: {
      title: "What you're paying for",
      price: "AED 35,484",
      note: "Lowest DMCC entry point in 2026: licence plus flexi desk, before visas. Standalone licence renewal is about AED 20,000 a year plus your office.",
      points: ["Trade licence with up to 6 activities", "Registration, articles and share certificates", "Flexi desk lease in a JLT business centre", "Afaq fees agreed in writing"],
    },
    addOns: [
      { label: "Office: flexi desk / serviced / leased (per year)", price: "16,000 / 35,000+ / by size" },
      { label: "Establishment card (per year)", price: "~1,800" },
      { label: "Residence visa, medical & Emirates ID (per person, 2 yrs)", price: "4,500–6,000" },
      { label: "Extra activities beyond 6 / general trading licence", price: "1,500 each / 50,000+" },
      { label: "Annual audit (DMCC-approved auditor)", price: "5,000–10,000" },
      { label: "Renewal (year 2+)", price: "Licence + office" },
    ],
    guidance:
      "Hidden costs to budget for: the establishment card and immigration file, visa status changes, office upgrades as your headcount grows, external approvals for regulated activities, the mandatory annual audit, and renewal pricing that differs from promotional year-one rates. We quote year two before you sign year one.",
    notes: ["Office size sets your visa quota", "Some activities need external approvals", "Share capital AED 50,000 declared, no deposit", "Charges can change without notice"],
  },

  licenceTypes: {
    heading: "Which DMCC Licence Do You Need?",
    intro:
      "DMCC issues trading, service and industrial licences to a Free Zone Company (FZCO — replacing the DMCC suffix since January 2025), a branch of a UAE or foreign company, or a subsidiary. Activities from different groups can be combined on one licence where compatible.",
    items: [
      { title: "Trading Licence", text: "For buying, selling, importing, exporting, distributing and trading goods.", tags: ["Gold & precious metals", "Diamonds", "Tea & coffee", "Electronics"] },
      { title: "Service Licence", text: "For professional services such as consulting, IT, marketing, management and advisory work.", tags: ["Consultants", "Tech & software", "Agencies"] },
      { title: "Industrial Licence", text: "Light manufacturing, assembly and packaging inside the zone.", tags: ["Jewellery making", "Food processing"] },
      { title: "Holding, SPV & Family Office", text: "Hold shares, property and assets, with DMCC Foundations available for succession planning.", tags: ["Holding FZCO", "SPV", "Single family office"] },
      { title: "Crypto, Gaming & AI", text: "The DMCC Crypto Centre licenses proprietary trading, blockchain, Web3, gaming and AI businesses (VARA approval where required).", tags: ["Web3", "E-sports", "AI start-ups"] },
      { title: "Branch or Subsidiary", text: "Extend an existing UAE or foreign company into DMCC. No share capital for a branch; parent company documents must be attested.", tags: ["Foreign branch", "UAE branch"] },
    ],
    note:
      "DMCC requires at least one shareholder. Unlike zones that issue a separate Free Zone Establishment (FZE) for solo owners, DMCC uses one structure: an FZCO with one or more individual or corporate shareholders.",
  },

  documents: {
    heading: "Documents Required for DMCC Company Formation",
    image: "/images/closing-cta/data-overview.png",
    intro:
      "DMCC runs stronger KYC than budget free zones. Everything is uploaded to the DMCC portal — no visit to Dubai is needed for the licence. Share capital of AED 50,000 is declared in the articles, not deposited, and Ultimate Beneficial Owners must be disclosed.",
    items: [
      "Passport copy (6+ months validity) for each shareholder, director and manager",
      "Passport-size photo, plus UAE entry stamp or visa page if resident",
      "Proof of residential address (utility bill or bank statement, under 3 months)",
      "Short CV or business profile, summary business plan and beneficial-owner information",
      "Three trade name options ending in FZCO",
      "Selected activities (up to 6 included) and chosen office package",
    ],
    note:
      "Corporate shareholder or branch? Add the parent's certificate of incorporation, memorandum and articles, certificate of incumbency or good standing, and a board resolution approving the DMCC entity — all attested and legalised for the UAE.",
  },

  process: {
    heading: "How to Set Up a Company in DMCC: 6 Steps",
    intro:
      "Fully digital through the DMCC portal. We prepare the application, answer DMCC's compliance queries and handle office, visas, banking and tax — so you deal with one team.",
    cautionTitle: "Licence in about 10 working days",
    caution:
      "Setup can take as little as 10 working days when documents and approvals are complete; the licence follows once the office lease is signed and fees are paid. Visas add 1–2 weeks; bank accounts 1–4 weeks.",
    steps: [
      { title: "Choose activities, structure & package", text: "We confirm compatible activity codes, FZCO vs branch, and the package with the best year-one and renewal price." },
      { title: "Reserve the trade name & apply online", text: "Three name options checked against DMCC rules; application, KYC and business plan submitted on the portal (initial fee ~AED 1,035)." },
      { title: "Provisional approval & legal documents", text: "Provisional approval is valid 90 days (180 on the corporate package). We prepare the articles and resolutions for e-signature." },
      { title: "Sign the office lease", text: "Flexi desk, serviced office or leased unit. Your office fixes the visa quota: 3 / 4–5 / 1 per 9 sqm." },
      { title: "Pay fees & receive the e-licence", text: "Licence, certificate of registration and share certificates issued digitally, then the establishment card to unlock visas." },
      { title: "Visas, bank account & tax registration", text: "Entry permit, medical, Emirates ID and stamping in 1–2 weeks; bank compliance file; corporate tax registration." },
    ],
  },

  compare: {
    heading: "DMCC vs IFZA vs Meydan vs JAFZA vs DIFC",
    intro:
      "DMCC, Meydan and IFZA figures are each zone's published 2026 starting price; JAFZA and DIFC are indicative ranges. DMCC's figure includes a flexi desk.",
    columns: ["Free zone", "From (AED)", "Best for", "Bank acceptance", "Signature feature"],
    rows: [
      { cells: ["DMCC", "35,484", "Commodities, trading, holding, crypto", "Highest", "JLT address; 87 towers; sector exchanges"], current: true },
      { cells: ["Meydan", "12,500", "Start-ups, e-commerce, consultants", "Medium", "Multi-activity licences, remote setup"] },
      { cells: ["IFZA", "12,900", "Services, trading, multi-activity", "Medium", "No physical office needed"] },
      { cells: ["JAFZA", "15,000+", "Logistics, manufacturing, re-export", "High", "Jebel Ali port and warehousing"] },
      { cells: ["DIFC", "45,000+", "Finance, fintech, family offices", "Highest", "DFSA-regulated financial centre"] },
    ],
  },

  tax: {
    heading: "Tax, Compliance & Banking for DMCC Companies",
    paragraphs: [
      "DMCC is a designated zone for VAT and a qualifying free zone for corporate tax. Every DMCC company must register with the Federal Tax Authority, keep audited accounts and file an annual return.",
    ],
    cards: [
      { value: "0% / 9%", title: "Corporate Tax", text: "Qualifying free zone persons pay 0% on qualifying income (trade with other free zone companies, exports, DGCX commodity trading) and 9% on other taxable income above AED 375,000. Registration is mandatory." },
      { value: "5% VAT", title: "VAT & Designated Zone", text: "Register once taxable supplies exceed AED 375,000. Goods moved between designated zones can be outside VAT scope; services follow normal rules." },
      { value: "Audit", title: "Annual Audited Accounts", text: "Audited statements from a DMCC-approved auditor are filed each year at renewal. We arrange the audit alongside your bookkeeping." },
      { value: "1–4 wks", title: "Bank Account", text: "The easiest of any UAE free zone. Digital banks like Wio often open within days; ENBD, Mashreq, ADCB and FAB typically 2–4 weeks. Approval remains the bank's decision." },
    ],
    tags: ["Corporate tax registration", "VAT registration", "Accounting & audit"],
  },

  included: [
    "Free consultation & activity mapping",
    "DMCC portal application & compliance queries",
    "Licence, office lease & establishment card",
    "Visa & Emirates ID processing",
    "Bank compliance file",
    "Corporate tax & VAT registration",
  ],

  faqs: [
    { question: "How much does it cost to set up a company in DMCC?", answer: "In 2026 a solo founder should budget about AED 42,000–46,000 for year one: licence and flexi desk on DMCC's entry-level package (from AED 35,484) plus establishment card, one residence visa, medical and Emirates ID. A start-up with a small team typically lands at AED 48,000–58,000, and an established company with a serviced office and several visas at AED 60,000 and up — all before professional fees." },
    { question: "What is DMCC Free Zone?", answer: "DMCC (Dubai Multi Commodities Centre) is a Government of Dubai free zone authority established in 2002, covering Jumeirah Lakes Towers and Uptown Dubai. It licenses trading, service, industrial and holding companies and runs specialist centres for commodities, crypto, gaming and AI." },
    { question: "How long does DMCC company formation take?", answer: "The licence can be issued in around 10 working days once documents and approvals are complete. Visas add 1–2 weeks, and bank accounts typically 1–4 weeks." },
    { question: "How many visas can a DMCC company get?", answer: "Your office sets the quota: up to 3 visas on a flexi desk, 4–5 on a serviced office, and 1 visa per 9 sqm of leased space." },
    { question: "Can a DMCC company trade with the UAE mainland?", answer: "DMCC suits businesses serving international clients. Invoicing mainland customers directly or running a retail outlet generally needs mainland permissions or a mainland company — we can advise on the right route for your activity." },
    { question: "Does DMCC require minimum share capital?", answer: "Share capital of AED 50,000 is declared in the articles of association, but it doesn't need to be deposited. Branches of existing companies don't require share capital." },
    { question: "Is a DMCC company subject to UAE corporate tax?", answer: "Yes. Every DMCC company must register for corporate tax. Qualifying free zone persons pay 0% on qualifying income and 9% on other taxable income above AED 375,000, and audited accounts are required." },
    { question: "What is the difference between DMCC and IFZA or Meydan?", answer: "IFZA and Meydan are budget options starting around AED 12,500–12,900. DMCC costs more but offers a Government of Dubai regulator, a physical JLT address, sector exchanges and the strongest bank acceptance — valuable for commodity traders and holding structures." },
    { question: "Do I need to visit Dubai to set up a DMCC company?", answer: "No visit is needed for the licence — everything is uploaded to the DMCC portal. You'll need to be in the UAE later for the visa medical and Emirates ID biometrics." },
    { question: "Which activities can I licence in DMCC?", answer: "More than 1,000 activities across trading, services, industrial, holding, crypto, gaming and AI. Up to 6 compatible activities are included per licence, with extras at AED 1,500 each." },
  ],
};
