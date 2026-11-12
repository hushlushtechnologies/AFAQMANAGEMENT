import type { FreezoneData } from "./types";

// TODO(client): the supplied content quotes both AED 5,500 and AED 5,510 as the
// starting price — confirm the correct current figure before launch.
// TODO: replace images with SRTIP photos when available.

export const srtip: FreezoneData = {
  slug: "srtip",
  name: "SRTIP Free Zone",
  shortName: "SRTIP",
  hero: {
    eyebrow: "Sharjah Research Technology & Innovation Park",
    title: "SRTIP Free Zone",
    highlight: "Company Setup in Sharjah",
    subtitle: "An innovation-focused free zone for technology, healthcare and sustainability businesses — packages from AED 5,500.",
    intro:
      "Located in University City, Sharjah, SRTIP is built for entrepreneurs and investors in research and development. Setting up here gives you access to laboratories, R&D facilities, modern meeting spaces and a community of academics, government partners and innovators.",
    chips: ["Packages from AED 5,500", "100% foreign ownership", "5 activities per licence", "Incentives for women entrepreneurs"],
    image: "/images/services/investment-services/technology.png",
  },
  stats: [
    { value: "AED 5,500", label: "Starting price" },
    { value: "5", label: "Activities per licence" },
    { value: "Unlimited", label: "Visas on innovation offices & plots" },
    { value: "100%", label: "Repatriation of profits & capital" },
  ],

  about: {
    heading: "What is SRTIP Free Zone?",
    body:
      "Sharjah Research Technology and Innovation Park (SRTIP) primarily serves businesses in technology, healthcare and sustainability. Companies here benefit from state-of-the-art infrastructure — including laboratories, R&D facilities and modern meeting spaces — and the chance to collaborate with academics, government bodies and fellow innovators.",
    location: { name: "University City", area: "Sharjah, UAE", image: "/images/services/digital-business-solutions/ai-head-watermark.png" },
    features: [],
  },

  features: {
    placement: "early",
    eyebrow: "Why SRTIP",
    heading: "Advantages of Business Setup in SRTIP",
    items: [
      { status: "yes", text: "Access to a community of innovators" },
      { status: "yes", text: "100% foreign ownership" },
      { status: "yes", text: "Large number of permitted activities" },
      { status: "yes", text: "5 business activities under 1 trade licence" },
      { status: "yes", text: "No minimum share capital requirement" },
      { status: "yes", text: "Low-tax business environment" },
      { status: "yes", text: "Access to laboratories and funding opportunities" },
      { status: "yes", text: "Dual licensing options" },
      { status: "yes", text: "Special incentives for women entrepreneurs" },
      { status: "yes", text: "State-of-the-art infrastructure" },
      { status: "yes", text: "Economical business setup costs" },
      { status: "yes", text: "100% repatriation of profits and capital" },
      { status: "yes", text: "Versatile office spaces" },
    ],
  },

  cost: {
    heading: "SRTIP Company Setup Cost",
    intro:
      "SRTIP packages start from AED 5,500. Your total depends on your business activity, office type, number of employees and visas — ask us for an itemised quote.",
    tiers: [
      {
        badge: "Starting price",
        name: "SRTIP Starter Package",
        price: "AED 5,500",
        tagline: "Starting package · confirm inclusions for your activity",
        points: ["Trade licence with up to 5 activities", "Trading, industrial or service licence", "100% foreign ownership"],
      },
      {
        badge: "Growing teams",
        name: "Licence with Office & Visas",
        tagline: "Visa quota depends on your office",
        points: ["Co-working: 5 visas per desk", "SME office: 10 visas per office", "Ecosystem office: 15+ visas"],
      },
      {
        badge: "Scale-ups",
        name: "Innovation Office or Plot",
        tagline: "For larger and R&D-heavy operations",
        points: ["Unlimited visa quota", "Shell & core or prime plot options", "Customisable workspace"],
      },
    ],
  },

  licenceTypes: {
    heading: "Business Structure Options",
    intro: "SRTIP allows the following legal structures for entrepreneurs and investors.",
    items: [
      { title: "FZE (Free Zone Establishment)", text: "A company owned by a single individual or corporate shareholder.", tags: ["Single shareholder"] },
      { title: "FZC (Free Zone Company)", text: "A company with two or more individual or corporate shareholders.", tags: ["Multiple shareholders"] },
      { title: "Branch", text: "A branch of an existing local or foreign company operating in SRTIP.", tags: ["Local company", "Foreign company"] },
    ],
    note: "SRTIP issues trading, industrial and service licences. The activity you choose determines the type of trade licence you need.",
  },

  activities: {
    heading: "List of Business Activities in SRTIP",
    intro:
      "SRTIP permits a wide range of activities related to technology, healthcare and academia. Choosing an activity in these fields gives you the best chance to connect with the park's community.",
    lists: [
      {
        title: "Technology, Healthcare & Sustainability",
        items: [
          "Environmental technology",
          "Waste management technology",
          "Transport & logistics",
          "Aerospace manufacturing",
          "Automotive manufacturing",
          "Design & engineering manufacturing",
          "Medical devices & wearables",
          "Hospital automation",
          "Insurtech",
          "Big data & analytics",
          "Artificial intelligence",
          "Drones",
          "Internet of Things",
        ],
      },
    ],
  },

  office: {
    heading: "Amenities & Workspaces at SRTIP",
    intro: "SRTIP offers workspaces for every stage — and your office choice sets your visa quota.",
    location: { name: "SRTIP", address: "University City, Sharjah, UAE" },
    options: [
      { title: "Co-working Space", text: "5 visas per desk, on-site parking and utilities included." },
      { title: "Hi-Tech Office", text: "3 visas per desk, with a designated desk in a co-working space." },
      { title: "SME Office", text: "10 visas per office, furnished workspace and modern meeting rooms." },
      { title: "Ecosystem Office", text: "15+ visas per office, fully furnished with a private working area." },
      { title: "Innovation Office", text: "Unlimited visa quota, shell & core fit-out and a customisable workspace." },
      { title: "Innovation Plot", text: "Unlimited visa quota, competitive leasing rates and a prime plot location." },
      { title: "Hi-Tech Office for Women Entrepreneurs", text: "Fast-tracked setup, exclusive areas and business support services." },
      { title: "Sharjah Open Innovation Lab", text: "Maker facilities including a wood shop, metal shop and laser studios." },
    ],
  },

  process: {
    heading: "Steps for Business Setup in SRTIP",
    intro: "Five steps take you from choosing an activity to an operating SRTIP company — we support you at each stage.",
    steps: [
      { title: "Pick a business activity", text: "Choose an activity aligned with SRTIP's innovation and sustainability focus." },
      { title: "Get a trade name", text: "Submit at least three names that follow UAE naming rules; we check them against the authority's database." },
      { title: "Apply for a trade licence", text: "Trading, industrial or service — with a business plan and shareholder and director details." },
      { title: "Apply for visas", text: "Your quota depends on your office. Visa applications start once the licence is issued." },
      { title: "Open a bank account", text: "Not every bank serves free zone companies — we help you prepare and apply to the right ones." },
    ],
  },

  otherZones: ["Meydan", "IFZA", "DMCC", "DIFC", "RAKEZ", "Sharjah Media City", "Sharjah Publishing City", "SAIF Zone", "Ajman Media City", "DWTC", "JAFZA", "Fujairah Creative City"],

  included: [
    "Free consultation & activity selection",
    "Trade name check & reservation",
    "Licence application",
    "Office & visa quota planning",
    "Visa & Emirates ID processing",
    "Bank account application support",
  ],

  faqs: [
    { question: "What is SRTIP Free Zone?", answer: "SRTIP (Sharjah Research Technology and Innovation Park) is a free zone in University City, Sharjah, focused on research and development in technology, healthcare and sustainability." },
    { question: "What is the full form of SRTIP?", answer: "Sharjah Research Technology and Innovation Park." },
    { question: "Where is SRTIP Free Zone?", answer: "SRTIP is located in University City, Sharjah, close to the emirate's universities and research institutions." },
    { question: "How much does an SRTIP free zone licence cost?", answer: "SRTIP packages start from AED 5,500. The total depends on your activity, office type, number of employees and visas — we provide an itemised quote." },
    { question: "Is SRTIP one of the cheapest free zones in the UAE?", answer: "SRTIP is among the more economical options, with packages from AED 5,500. The right choice depends on your activity, office and visa needs, so compare complete first-year and renewal costs." },
    { question: "What business can I start in SRTIP Free Zone?", answer: "Activities related to technology, healthcare, sustainability and academia — including AI, big data, drones, IoT, medical devices, insurtech, environmental technology and advanced manufacturing." },
    { question: "What are the benefits of a free zone in the UAE?", answer: "Typical benefits include 100% foreign ownership, full repatriation of profits and capital, a low-tax environment, fast setup and access to specialised infrastructure." },
    { question: "How do I start a business in a Sharjah free zone?", answer: "Choose your activity, reserve a trade name, apply for your trade licence, apply for visas once the licence is issued, and open a corporate bank account." },
    { question: "How long does it take to get a free zone licence in Sharjah?", answer: "Timelines depend on your activity, documents and approvals. Once we understand your requirements, we'll give you a realistic timeline for each stage." },
    { question: "How many free zones are there in Sharjah?", answer: "Sharjah has several free zones, including SRTIP, SAIF Zone (Sharjah Airport International Free Zone), Hamriyah Free Zone, SHAMS (Sharjah Media City) and Sharjah Publishing City." },
    { question: "How do I get a free zone visa in Sharjah?", answer: "After your trade licence is issued, you can apply for visas within the quota set by your office type — from 3 visas per hi-tech desk to an unlimited quota on innovation offices and plots." },
    { question: "How do I renew my Sharjah free zone licence?", answer: "Licences are renewed annually with the free zone authority, typically along with your office lease and any required documents. We can manage renewals for you." },
    { question: "How do I cancel my Sharjah free zone licence?", answer: "Cancellation involves clearing visas, settling outstanding fees and obtaining clearances before the authority deregisters the company. We can guide you through the process." },
  ],
};
