import type { FreezoneData } from "./types";

// TODO(client): confirm the AED 12,500 starting offer against Meydan's
// current published terms before launch.
// TODO: replace images with Meydan Grandstand photos when available.

export const meydan: FreezoneData = {
  slug: "meydan",
  name: "Meydan Free Zone",
  shortName: "Meydan",
  hero: {
    eyebrow: "Meydan Company Formation · 2026",
    title: "Meydan Free Zone",
    highlight: "Company Setup in Dubai",
    subtitle: "Compare licence inclusions, activities and visa options before you choose a package.",
    intro:
      "Planning a Meydan Free Zone company? Start with the work you'll do and whether you need UAE residence visas. Meydan's standard formation offer starts from AED 12,500 per year — a starting point, not your full relocation or operating budget. Afaq Al Khaleej helps you check your activities and prepares an itemised quote.",
    chips: ["Licence from AED 12,500", "100% foreign ownership", "2,500+ business activities", "Itemised package quote"],
    image: "/images/contact/hero-circle-bg.jpg",
  },
  stats: [
    { value: "AED 12,500", label: "Licence fee from, per year" },
    { value: "2,500+", label: "Business activities" },
    { value: "3", label: "Activity groups per licence" },
    { value: "0%", label: "Personal income tax" },
  ],
  about: {
    heading: "What is Meydan Free Zone?",
    body:
      "Meydan Free Zone is based at the Meydan Grandstand in Nad Al Sheba, Dubai. Before choosing a package, think about what customers will pay you for, where you'll work and whether you'll hire a team — those details tell you which licence and services you actually need.",
    location: { name: "Meydan Grandstand", area: "Nad Al Sheba, Dubai", image: "/images/final-cta/investors.jpg" },
    features: [
      { icon: "ownership", title: "100% Foreign Ownership", text: "Full ownership plus repatriation of profit and capital." },
      { icon: "licence", title: "One Licence from AED 12,500", text: "Check the selected workspace and package inclusions." },
      { icon: "activities", title: "Three Activity Groups", text: "Combine up to three groups from 2,500+ activities on one licence." },
      { icon: "online", title: "Fully Online Setup", text: "Confirm the checklist and processing stages before picking a start date." },
      { icon: "visas", title: "Visas for You & Your Team", text: "Confirm allocation, eligibility and included services for each person." },
      { icon: "tax", title: "Tax Planning", text: "Free zone status isn't a blanket corporate tax exemption — check your regime and obligations." },
    ],
  },
  cost: {
    heading: "Meydan Free Zone Cost 2026",
    intro:
      "The authority's starting offer is AED 12,500 per year. Residence visas, medical tests, Emirates ID and office upgrades are not included by default — confirm current terms before paying.",
    source: "Based on Meydan's published offer.",
    tiers: [
      { name: "0 Visa", price: "AED 12,500", tagline: "Starting annual offer · residence extra", points: ["Licence and company registration", "Confirm zero-visa suitability"] },
      { name: "1 Investor Visa", tagline: "Founders relocating to Dubai", points: ["Company and applicant charges quoted separately", "Check medical, ID and insurance costs"] },
      { name: "Investor + 1 Employee", tagline: "Founder + first hire", points: ["Licence, workspace and processing for two applicants", "Check each person's inclusions"] },
      { name: "Investor + 2 Employees", tagline: "A small founding team", points: ["Licence, workspace and processing for three applicants", "Confirm allocation for your team"] },
    ],
    licence: {
      title: "Meydan Free Zone Licence",
      price: "AED 12,500",
      note: "Starting annual offer · confirm the selected package",
      points: ["Up to 3 activity groups", "Confirm workspace access", "Confirm shareholder requirements", "Afaq fees provided in writing"],
    },
    otherCosts: [
      "Immigration (establishment) card",
      "Investor / employee / dependent visa",
      "Medical test, Emirates ID & medical insurance",
      "Change of status (if already in the UAE)",
      "Additional activities or shareholders",
    ],
    guidance:
      "Ask which activities and licence period the quote covers, what workspace access is included, which company and applicant charges apply, and what renews next year. Mark each item as included, extra or not applicable.",
  },
  activities: {
    heading: "Choose Your Meydan Business Activities",
    intro:
      "Write down what customers will pay you for. Selling, developing and advising on software, for example, can need different activity selections. Confirm exact codes and approvals before applying — the published offer allows up to three activity groups.",
    groups: [
      { icon: "trading", title: "Commercial / Trading", text: "Buying and selling goods, import and export, general trading.", tags: ["Trading", "Distribution"] },
      { icon: "services", title: "Professional / Services", text: "Consulting, IT, marketing, management and education services.", tags: ["Consultants", "Agencies", "IT firms"] },
      { icon: "solo", title: "Solo Founder", text: "Check the right activity and structure for the work you'll deliver.", tags: ["Freelancers", "Content creators"] },
      { icon: "ecommerce", title: "E-commerce", text: "Selling online through your own website or marketplaces like Amazon.ae and noon.", tags: ["Online stores", "Marketplace sellers"] },
      { icon: "media", title: "Media", text: "Media, advertising, production and events activities.", tags: ["Production", "PR & events"] },
      { icon: "multiple", title: "Multiple Activities", text: "Ask whether your activity groups can be combined and which approvals apply.", tags: ["Up to 3 groups"] },
    ],
  },
  office: {
    heading: "Office & Location Options",
    intro:
      "Check what your workspace agreement provides — an address, desk access, meeting rooms or a dedicated office. Tell us whether you'll hold stock, receive customers or employ a team, and confirm any permissions needed for work outside the free zone.",
    location: { name: "Meydan Grandstand", address: "Meydan Road, Nad Al Sheba, Dubai" },
    options: [
      { title: "Flexi-desk / Virtual Office", text: "Confirm the address and desk access your package includes, and whether it suits how you operate." },
      { title: "Dedicated Desk", text: "Ask about availability, access hours and the price of a fixed workstation." },
      { title: "Private Office", text: "Confirm available space, facilities, lease terms and the cost of an office upgrade." },
    ],
  },
  visas: {
    heading: "Meydan Free Zone Visas",
    intro:
      "A visa allocation is not an issued residence permit. Tell us whether you're applying as an owner or employee, whether you're inside the UAE and whether you already hold residence. We'll confirm how many applications your package supports and which charges are included.",
    chips: ["Check owner residence eligibility", "Price family applications separately", "Bank approval is a separate decision"],
    steps: [
      { title: "Company Immigration Services", text: "Confirm the company registrations needed before applying, and their renewal charges." },
      { title: "Applicant Permit & Status", text: "Confirm the permit route and whether a change-of-status service is needed." },
      { title: "Medical, ID & Insurance", text: "Check appointments, attendance and which charges are included for each person." },
      { title: "Residence Approval & Emirates ID", text: "Confirm residence processing and ID arrangements before relying on an expected date." },
    ],
  },
  documents: {
    heading: "Documents Required for Meydan Company Setup",
    image: "/images/services/pro-government-services/document-legal.png",
    items: [
      "Passport copy of every shareholder and manager",
      "Passport-size photo",
      "UAE visa or entry stamp, or Emirates ID for residents",
      "Up to three trade name options",
      "Selected business activities (up to three groups)",
      "Contact details and a short business description",
    ],
    note:
      "Corporate shareholder? Request the current company-document and attestation checklist before arranging signatures. Requirements vary by activity and shareholder structure.",
  },
  process: {
    heading: "How to Set Up a Company in Meydan Free Zone",
    intro:
      "Prepare identification and application details for everyone involved, and ask for the current checklist for your activity and shareholder structure. Licence issuance, residence processing and bank review are separate stages.",
    caution:
      "An advertised fast-track licence doesn't mean every stage finishes that day. Ask when processing starts and what happens if extra documents are requested.",
    steps: [
      { title: "Choose your activities", text: "Up to three activity groups that match your business." },
      { title: "Pick your package", text: "Compare licence period, workspace, visa allocation and full first-year and renewal costs." },
      { title: "Reserve the trade name", text: "Up to three options submitted online." },
      { title: "Submit documents and pay", text: "Review the final application, written scope and payment instructions." },
      { title: "Initial approval & licence", text: "Track the authority's review and respond to any requests." },
      { title: "Get the immigration card", text: "Confirm the applicable company immigration services and fees." },
      { title: "Visas & Emirates ID", text: "Follow the approved route, including appointments and residence processing." },
      { title: "Corporate bank account", text: "We help prepare the application; the bank makes its own decision." },
    ],
  },
  compare: {
    heading: "Compare Meydan with Other UAE Free Zones",
    intro:
      "Compare the activity, workspace and number of people you need, then compare complete first-year and renewal quotes. These are different authorities and packages — not interchangeable price lists.",
    columns: ["Free zone", "Pricing", "Consider"],
    rows: [
      { cells: ["Meydan Free Zone", "AED 12,500", "Dubai location; check activity and workspace fit"], current: true },
      { cells: ["IFZA", "Request quote", "Compare activity selection and package inclusions"] },
      { cells: ["DMCC", "Request quote", "Compare facilities, activities and membership requirements"] },
      { cells: ["SPC Free Zone (Sharjah)", "Request quote", "Sharjah location; compare the complete package"] },
    ],
  },
  portalNote:
    "Already have a Meydan company? Renewals and amendments are managed on the official Meydan portal — or hand them over to us and we'll manage renewals and visa updates for you.",
  faqs: [
    { question: "Is AED 12,500 the complete cost with a visa?", answer: "No. It's the authority's advertised starting annual offer. Get a separate written breakdown of residence-related services and other exclusions before comparing totals." },
    { question: "What is Meydan Free Zone?", answer: "Meydan Free Zone is a Dubai free zone based at the Meydan Grandstand in Nad Al Sheba, offering company formation with 100% foreign ownership and a wide choice of business activities." },
    { question: "How many activities can I have on a Meydan licence?", answer: "The published offer allows up to three activity groups, chosen from more than 2,500 activities. Confirm exact codes and any approvals before applying." },
    { question: "How long does Meydan company setup take?", answer: "Setup is fully online, but timing depends on your documents, activity approvals and the authority's review. Licence issuance, visas and banking are separate stages — we'll outline realistic timings for each." },
    { question: "Which workspace should I choose?", answer: "It depends on whether you need just an address, desk access or a private office, and whether you'll hold stock, meet customers or employ staff. Workspace can also affect visa allocation." },
    { question: "How much is a Meydan Free Zone visa?", answer: "Visa costs depend on the applicant, their status and the services included — immigration card, permit, medical, Emirates ID and insurance. We provide company and applicant charges separately in your quote." },
    { question: "Can I choose a zero-visa licence?", answer: "Yes, a zero-visa package is available. It suits founders who don't need UAE residence through the company — confirm it fits your plans before choosing." },
    { question: "Which free zones should I compare with Meydan?", answer: "IFZA, DMCC and SPC Free Zone are common comparisons. Compare complete first-year and renewal quotes for your activity, workspace and visa needs." },
    { question: "Is a corporate bank account guaranteed?", answer: "No. We help prepare the application, but each bank makes its own approval decision." },
    { question: "Does a free zone company automatically pay no corporate tax?", answer: "No. Free zone status is not a blanket exemption. A Qualifying Free Zone Person may benefit from 0% on Qualifying Income when conditions are met; check your company's regime and obligations." },
  ],
};
