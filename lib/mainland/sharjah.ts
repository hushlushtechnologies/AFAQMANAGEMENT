import type { FreezoneData } from "@/lib/freezones/types";

// TODO(client): verify "about a third of UAE manufacturing happens in Sharjah"
// before launch.

export const sharjahMainland: FreezoneData = {
  slug: "sharjah",
  category: "Mainland",
  name: "Sharjah",
  shortName: "Sharjah",
  hero: {
    eyebrow: "Business Setup in Sharjah · 2026",
    title: "Business Setup in Sharjah",
    highlight: "Mainland & Free Zone",
    subtitle: "100% foreign ownership for most activities — expert mainland and free zone company formation in Sharjah.",
    intro:
      "Start with what you plan to sell, where your customers are and whether you need premises — those details decide whether a Sharjah mainland licence or a free zone package suits you best. Afaq Al Khaleej helps you shortlist activities, prepare documents and request a quote based on your workspace and visa needs, with separate figures for year one and renewal.",
    chips: ["100% foreign ownership (most activities)", "SEDD-licensed mainland", "Specialist free zones", "20 minutes from Dubai"],
    image: "/images/final-cta/business.jpg",
  },
  stats: [
    { value: "100%", label: "Foreign ownership (most activities)" },
    { value: "20 min", label: "From Dubai" },
    { value: "2 coasts", label: "Ports on the Arabian Gulf & Gulf of Oman" },
    { value: "~1/3", label: "Of UAE manufacturing" },
  ],

  about: {
    heading: "Benefits of Company Formation in Sharjah",
    body:
      "Sharjah combines a strategic logistics position, a strong industrial base and access to university talent — with mainland licences that cover the whole UAE market and specialist free zones for logistics, industry, media, publishing and innovation.",
    location: { name: "Sharjah", area: "About 20 minutes from Dubai", image: "/images/about-photo.jpg" },
    features: [
      { icon: "licence", title: "Compare Entry Costs", text: "Ask each authority for the licence fee and any registration or workspace charges." },
      { icon: "trading", title: "Strategic Logistics Position", text: "The only emirate with ports on both the Arabian Gulf and the Gulf of Oman, plus its own international airport." },
      { icon: "office", title: "Industrial Base", text: "Around a third of UAE manufacturing, with established supplier networks and lower industrial rents." },
      { icon: "services", title: "Talent Access", text: "University City — including the American University of Sharjah and University of Sharjah — supplies graduate talent." },
      { icon: "bank", title: "Budget for Premises", text: "Compare rental quotes for the location, size and facilities your business needs." },
      { icon: "online", title: "Full UAE Market Access", text: "A SEDD mainland licence lets you trade in every emirate and bid for government contracts." },
    ],
  },

  prosCons: {
    placement: "early",
    neutral: true,
    eyebrow: "Mainland vs Free Zone",
    heading: "Which Sharjah Setup Is Right for You?",
    prosTitle: "Sharjah Mainland · SEDD licensed",
    consTitle: "Sharjah Free Zone",
    pros: [
      "Trade anywhere in the UAE, including government contracts",
      "100% foreign ownership for most activities (since the 2021 Commercial Companies Law amendment)",
      "No limits on office location or visa-linked space",
      "Best for retail, restaurants, contracting and local services",
    ],
    cons: [
      "0% corporate tax on qualifying income",
      "Flexi-desk options — no physical office required",
      "Ask the authority for its current processing estimate",
      "Best for consultants, e-commerce, media, trading and publishing",
    ],
  },

  cost: {
    heading: "Cost of Business Setup in Sharjah (2026)",
    intro:
      "Costs are activity-specific, so request a quote for your exact setup. Ask which items are included, which are charged separately and what changes at renewal.",
    table: {
      columns: ["Setup type", "Quote to request", "Items to confirm"],
      rows: [
        { cells: ["Free zone licence (0 visa)", "Licence without residence visas", "Licence + registration"] },
        { cells: ["Free zone + 1 visa", "Licence and one visa", "Licence, visa, establishment card"] },
        { cells: ["Mainland LLC (SEDD)", "Mainland registration", "Trade licence, registration fees"] },
      ],
      footnote: "We provide separate figures for your first year and your renewal so there are no surprises.",
    },
  },

  activities: {
    eyebrow: "Sharjah Free Zones",
    heading: "Business Setup in Sharjah Free Zones",
    intro:
      "Sharjah runs several specialist free zones, each with different visa quotas, office requirements and activity lists — so choosing the right one matters more than the headline price.",
    groups: [
      { icon: "trading", title: "SAIF Zone", text: "At Sharjah Airport — fast licensing and strong logistics infrastructure.", tags: ["Logistics", "Trading", "Airport-adjacent"], href: "/contact-us" },
      { icon: "office", title: "Hamriyah Free Zone", text: "Its own seaport on the Arabian Gulf for heavy industry, manufacturing and ocean cargo.", tags: ["Industry", "Manufacturing", "Ocean cargo"], href: "/contact-us" },
      { icon: "licence", title: "SPC Free Zone", text: "Sharjah Publishing City — specialist licences for digital and content businesses.", tags: ["Publishing", "Media", "E-commerce"], href: "/freezone/spc" },
      { icon: "media", title: "SHAMS", text: "Sharjah Media City — affordable, fast setup for creative businesses.", tags: ["Media production", "Content agencies", "Creative"], href: "/freezone/shams" },
      { icon: "ecosystem", title: "SRTIP", text: "Sharjah's innovation ecosystem next to the American University of Sharjah, with labs, prototyping facilities and university talent.", tags: ["AI & deep tech", "Cleantech", "Agritech", "Health-tech", "Advanced manufacturing"], href: "/freezone/srtip" },
    ],
  },

  licenceTypes: {
    heading: "Sharjah Trade Licence Types",
    intro: "Choose the licence that matches what your business does.",
    items: [
      { title: "Commercial Licence", text: "Trading and buying / selling goods.", tags: ["General trading", "Retail", "Import / export"] },
      { title: "Professional Licence", text: "Services and consultancy.", tags: ["Consultants", "Agencies", "IT services"] },
      { title: "Industrial Licence", text: "Manufacturing and processing.", tags: ["Factories", "Food processing", "Fabrication"] },
      { title: "E-commerce Licence", text: "Online selling.", tags: ["Online stores", "Marketplace sellers"] },
    ],
  },

  process: {
    heading: "How to Set Up Your Business in Sharjah — 6 Steps",
    intro: "From choosing your activity to opening your bank account, we guide you through each stage.",
    steps: [
      { title: "Choose your activity", text: "We map your business to the right SEDD or free zone activity code and licence type." },
      { title: "Pick mainland or free zone", text: "Based on where you trade, your visa needs and budget." },
      { title: "Reserve your trade name", text: "Three name options submitted to SEDD or the free zone authority." },
      { title: "Prepare documents", text: "MOA, lease agreement and shareholder documents drafted and notarised." },
      { title: "Licence issued", text: "Timing depends on the activity, documents and any additional approvals." },
      { title: "Visas & bank account", text: "Establishment card, residence visas and corporate bank account support." },
    ],
  },

  documents: {
    heading: "Documents Required for Sharjah Company Setup",
    image: "/images/closing-cta/roundtable-meeting.png",
    items: [
      "Passport copies of all shareholders (plus visa / entry stamp copies where applicable)",
      "Memorandum of Association (MOA) — drafted and notarised",
      "Lease agreement or flexi-desk contract (Ejari equivalent)",
      "Trade name reservation certificate and initial approval from SEDD or the free zone",
      "NOC from your current UAE employer / sponsor, if you hold a UAE residence visa",
      "Bank reference or proof of address for compliance checks (zone-dependent)",
    ],
  },

  included: [
    "Free consultation & activity mapping",
    "Mainland vs free zone comparison",
    "Trade name & initial approval",
    "MOA drafting & notarisation",
    "Visa & Emirates ID processing",
    "Bank account application support",
  ],

  faqs: [
    { question: "Can foreigners own 100% of a Sharjah mainland company?", answer: "Yes, for most activities. Since the 2021 Commercial Companies Law amendment, many mainland activities allow 100% foreign ownership; some strategic activities have extra conditions." },
    { question: "Who licenses mainland companies in Sharjah?", answer: "The Sharjah Economic Development Department (SEDD) issues mainland trade licences." },
    { question: "Should I choose Sharjah mainland or a Sharjah free zone?", answer: "Choose mainland to trade directly across the UAE, open retail outlets or bid for government work. A free zone suits consultants, e-commerce, media, trading and publishing businesses that want flexi-desk options and 0% corporate tax on qualifying income." },
    { question: "How much does business setup in Sharjah cost?", answer: "Costs depend on your activity, workspace and visas. We provide an itemised quote with separate first-year and renewal figures for mainland or free zone options." },
    { question: "Which free zones are in Sharjah?", answer: "SAIF Zone, Hamriyah Free Zone, SPC Free Zone (Sharjah Publishing City), SHAMS (Sharjah Media City) and SRTIP, each focused on different industries." },
    { question: "How long does company setup in Sharjah take?", answer: "It depends on the activity, documents and any additional approvals. We'll confirm a realistic timeline with the relevant authority for your setup." },
  ],
};
