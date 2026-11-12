import type { FreezoneData } from "./types";

// TODO(client): confirm the AED 5,750 starting price, "licence in 24 hours" and
// the visa / medical / Emirates ID / liquidation fees against AMC's current terms.
// Note: the supplied copy said "no corporate or income taxes" — updated to reflect
// UAE corporate tax (in force since 2023). Dated economic stats were left out.

export const ajmanMediaCity: FreezoneData = {
  slug: "ajman-media-city",
  name: "Ajman Media City Free Zone",
  shortName: "Ajman Media City",
  hero: {
    eyebrow: "Ajman Media City Free Zone (AMC)",
    title: "Ajman Media City",
    highlight: "Free Zone Company Setup",
    subtitle: "An international hub for media and creative businesses — company setup from AED 5,750.",
    intro:
      "Ajman Media City Free Zone opened in 2018 under Emiri Decree No. 8 of 2015, issued by His Highness Sheikh Humaid bin Rashid Al Nuaimi, Ruler of Ajman. Today it attracts media-related businesses from around the world — and Afaq Al Khaleej can guide you through setup from activity selection to visas and banking.",
    chips: ["Prices from AED 5,750", "Business licence in 24 hours", "100% foreign ownership", "Fully online, no visit needed"],
    image: "/images/services/business-consultancy/market-research.png",
  },
  stats: [
    { value: "AED 5,750", label: "Starting price" },
    { value: "24 hrs", label: "Business licence issuance" },
    { value: "2018", label: "Year established" },
    { value: "30 min", label: "From Dubai International Airport" },
  ],

  about: {
    heading: "Why Choose Ajman Media City Free Zone?",
    body:
      "Ajman is the UAE's smallest emirate by land area but its fourth largest by population, with a growing economy and steadily rising investment. AMC aims to be the place where media outlets thrive, surrounded by creativity and talent — and Ajman continues to develop its residential and lifestyle offering, including mixed-use communities like Ajman One, for investors, entrepreneurs and their families. AMC is about 30 minutes from Dubai International Airport and around 45 minutes from Business Bay, where it also has an office.",
    location: { name: "Ajman Media City", area: "Ajman · office in Business Bay, Dubai", image: "/images/services/company-formation/digital-business-solutions.png" },
    features: [],
  },

  features: {
    placement: "early",
    eyebrow: "Advantages",
    heading: "Advantages of Company Formation in Ajman Media City",
    items: [
      { status: "yes", text: "Easy, simple company registration that can be done online" },
      { status: "yes", text: "No need to be physically present for incorporation" },
      { status: "yes", text: "100% foreign ownership allowed" },
      { status: "yes", text: "0% corporate tax on qualifying income; no personal income tax" },
      { status: "yes", text: "100% repatriation of capital and profits" },
      { status: "yes", text: "Business licence issued in 24 hours" },
      { status: "yes", text: "Multiple business activities under one licence" },
    ],
  },

  cost: {
    heading: "Cost of Business Setup in Ajman Media City",
    intro:
      "Licensing costs depend on your proposed business activities and the number of visas you need. As a rule of thumb, more activities mean a higher trade licence cost — and more visas mean a higher overall cost.",
    licence: {
      title: "Ajman Media City Licence",
      price: "AED 5,750",
      note: "Starting price · final cost depends on activities and visas",
      points: ["Multiple activities on one licence", "Licence issued in 24 hours", "100% foreign ownership", "Afaq fees agreed in writing"],
    },
    addOns: [
      { label: "Visa fees (per person)", price: "AED 1,945" },
      { label: "Medical fitness test", price: "AED 690" },
      { label: "Emirates ID", price: "AED 390" },
      { label: "Company liquidation (if needed)", price: "AED 1,800" },
    ],
    guidance: "Ask for an itemised quote covering your exact activities and visa count so you can compare like for like.",
  },

  structures: {
    heading: "Company Structures in Ajman Media City",
    intro: "Choose the structure that matches your ownership.",
    groups: [
      {
        title: "Structure Options",
        items: [
          { title: "Free Zone Establishment (FZE)", text: "A company with a single business owner." },
          { title: "Free Zone Company (FZC)", text: "A company with more than one owner." },
          { title: "Branch of a Foreign Company", text: "Owned by an overseas parent company." },
          { title: "Branch of a GCC Company", text: "Owned by a parent company registered in the GCC." },
        ],
      },
    ],
  },

  activities: {
    heading: "Activities Permitted in Ajman Media City",
    intro: "Some of the business activities you can undertake in AMC. This list is indicative, not comprehensive — tell us your plans and we'll confirm the right activities.",
    groups: [
      { icon: "online", title: "New Media", text: "Digital media and online content businesses.", tags: ["Digital media", "Video production", "Photography", "Web design"] },
      { icon: "media", title: "Music", text: "Recording and audio businesses.", tags: ["Sound recording", "Audio production", "Copyright management"] },
      { icon: "media", title: "Film", text: "Production and promotion.", tags: ["Audio-visual production", "Post-production", "Sound mixing", "Movie promotion"] },
      { icon: "services", title: "Consultancy", text: "Professional advisory services.", tags: ["Business", "Human resources", "Legal"] },
      { icon: "licence", title: "Publishing", text: "Online and print editions.", tags: ["Books", "Periodicals", "Journals", "Magazines", "Newspapers"] },
      { icon: "multiple", title: "Event Management", text: "Events, sports and exhibitions.", tags: ["Sports management", "Conferences", "Trade expos"] },
    ],
  },

  visas: {
    heading: "How to Get an Ajman Media City Visa",
    intro:
      "If you're outside the UAE at incorporation, you'll first need an entry visa. The process can be handled by your legal representative in the UAE through a Power of Attorney. The same process applies to employees.",
    stats: [
      { value: "AED 1,945", label: "Visa fees" },
      { value: "AED 690", label: "Medical fitness test" },
      { value: "AED 390", label: "Emirates ID" },
      { value: "POA", label: "Representative can apply for you" },
    ],
    types: [
      "Copy of trade licence",
      "Copy of establishment card",
      "Passport-size photos meeting UAE visa photo requirements",
      "Educational certificate attested by the UAE consulate in your country of residence",
    ],
    stepsTitle: "From entry visa to residence",
    steps: [
      { title: "Entry Visa", text: "Apply with the documents above to enter the UAE legally." },
      { title: "Enter the UAE", text: "Travel to the UAE on your entry visa." },
      { title: "Medical Test", text: "Complete your medical fitness test at a government-approved centre." },
      { title: "Investor Visa & Emirates ID", text: "Upgrade to your investor visa and receive your Emirates ID." },
    ],
  },

  process: {
    heading: "How to Set Up a Company in Ajman Media City",
    intro: "Fully online, with no need to visit for incorporation — we handle each stage for you.",
    steps: [
      { title: "Choose activities & structure", text: "Pick your media or creative activities and FZE, FZC or branch structure." },
      { title: "Submit documents online", text: "Application form, passport copy, photos, three name options and address proof for each owner." },
      { title: "Receive your licence", text: "Your business licence and company documents are issued — typically within 24 hours." },
      { title: "Visas & Emirates ID", text: "Entry visa, medical test, investor visa and Emirates ID for owners and staff." },
      { title: "Open a bank account", text: "Use your company documents to open a corporate bank account — we help prepare the application." },
    ],
  },

  documents: {
    heading: "Documents Required for Ajman Media City Setup",
    note: "Each business owner submits their own documents, so a separate investor visa can be issued to every partner.",
    groups: [
      {
        title: "Submitted by Each Owner",
        items: ["Completed application form", "Copy of passport", "Two passport photos (white background)", "Three company name options", "Proof of residential address in your country of residence", "Emirates ID copy, if a UAE resident", "Visa copy, if already in the UAE"],
      },
      {
        title: "Issued to You by AMC",
        items: ["Memorandum of Incorporation (single owner) or MOA & AOA (multiple owners)", "Share certificate (multiple owners)", "Certificate of Incorporation", "Company Registration", "Chamber of Commerce membership certificate", "Lease agreement & tenancy contract", "Certificate of Good Standing"],
      },
    ],
  },

  infoBlock: {
    eyebrow: "Closing a Company",
    heading: "Liquidation of an Ajman Media City Company",
    paragraphs: [
      "Companies sometimes need to cease operations — because the business objective has been met, due to financial constraints, or following the death of the owner. In these cases the company should be formally liquidated so it officially ceases to exist.",
      "Liquidation can be carried out by the owner or a legal representative with Power of Attorney. All company documents issued by AMC must be returned, and a police complaint must be filed for any documents that have been lost.",
    ],
    stats: [
      { value: "AED 1,800", label: "Liquidation fee" },
      { value: "~1 month", label: "Typical completion time" },
    ],
    listTitle: "On liquidation",
    list: [
      "All company visas are cancelled",
      "The establishment card is cancelled",
      "The lease agreement and tenancy contract are terminated",
      "The trade licence is invalidated",
      "Refundable deposits are returned",
    ],
  },

  otherZones: ["Meydan", "IFZA", "DMCC", "DIFC", "RAKEZ", "SRTIP", "SHAMS", "SPC", "DWTC", "JAFZA", "SAIF Zone", "Fujairah Creative City"],

  included: [
    "Free consultation & activity selection",
    "Online application & document filing",
    "Licence & company documents",
    "Entry visa, medical & Emirates ID",
    "Bank account application support",
    "Liquidation support if needed",
  ],

  faqs: [
    { question: "What is Ajman Media City Free Zone?", answer: "Ajman Media City Free Zone (AMC) is a free zone in Ajman, established in 2018 under Emiri Decree No. 8 of 2015, built as a hub for media, creative and related businesses." },
    { question: "How much does company setup in Ajman Media City cost?", answer: "Setup starts from AED 5,750. The total depends on your activities and the number of visas — visa fees are around AED 1,945 per person, plus a medical test (AED 690) and Emirates ID (AED 390)." },
    { question: "How long does it take to get a licence?", answer: "The business licence can be issued in around 24 hours once your application and documents are complete. Visas and bank account opening follow as separate steps." },
    { question: "Do I need to visit the UAE to set up an AMC company?", answer: "No. Incorporation can be completed online without being physically present. You'll need to be in the UAE later for the visa medical test and Emirates ID." },
    { question: "What activities can I licence in Ajman Media City?", answer: "New media, music, film, consultancy, publishing and event management activities, among others. Tell us your plans and we'll confirm the right activity codes." },
    { question: "Is an AMC company tax-free?", answer: "There's no personal income tax, and qualifying free zone persons can benefit from 0% corporate tax on qualifying income. Corporate tax registration and filing obligations still apply." },
    { question: "How do I close an Ajman Media City company?", answer: "The company is formally liquidated by the owner or a representative with Power of Attorney. AMC charges AED 1,800 and the process takes about a month; visas, the establishment card, lease and licence are cancelled." },
  ],
};
