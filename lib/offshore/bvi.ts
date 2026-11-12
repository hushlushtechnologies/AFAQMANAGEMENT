import type { FreezoneData } from "@/lib/freezones/types";

// Notes on supplied copy (corrected on the page):
// - A BVI bank account is opened AFTER incorporation, not before.
// - BVI companies are formed with a Memorandum & Articles of Association (not
//   "Articles of Incorporation" covering sole proprietorships / partnerships).
// - The regulator is the BVI Financial Services Commission (FSC).
// TODO(client): add BVI setup pricing if you want a cost figure on this page.

export const bvi: FreezoneData = {
  slug: "bvi",
  category: "Offshore",
  name: "BVI",
  shortName: "BVI",
  hero: {
    eyebrow: "British Virgin Islands",
    title: "BVI Offshore",
    highlight: "Company Formation",
    subtitle: "A simple, confidential company structure with one shareholder, one director and no corporate tax — able to do business worldwide.",
    intro:
      "The British Virgin Islands are a self-governing British Overseas Territory in the Caribbean, with the UK responsible for foreign relations and defence. English is the official language, which keeps documentation straightforward — and because BVI incorporation touches both local and international law, Afaq Al Khaleej manages the process carefully from start to finish.",
    chips: ["1 shareholder & 1 director", "0% corporate & capital gains tax", "Do business worldwide", "Strong confidentiality"],
    image: "/images/about/the-future.jpg",
  },
  stats: [
    { value: "1", label: "Minimum shareholder & director" },
    { value: "0%", label: "Corporate & capital gains tax" },
    { value: "2004", label: "BVI Business Companies Act" },
    { value: "English", label: "Official language" },
  ],

  about: {
    heading: "Why Open a Company in the British Virgin Islands?",
    body:
      "The BVI Business Companies Act (No. 16 of 2004), in force since 2005, is the main company law. It keeps things simple — minimal reporting and a basic structure needing just one shareholder and one director — and BVI companies can carry out business anywhere in the world.",
    location: { name: "British Virgin Islands", area: "British Overseas Territory, Caribbean", image: "/images/investment-opportunities/market-relevant.png" },
    features: [
      { icon: "ownership", title: "Simple Structure", text: "Just one shareholder and one director required." },
      { icon: "online", title: "Global Business", text: "BVI companies can trade and operate anywhere in the world." },
      { icon: "tax", title: "Tax-Neutral", text: "No corporate tax, income tax or capital gains tax on profits." },
      { icon: "bank", title: "Confidentiality", text: "Owners' and founders' names aren't easily accessible to the public." },
      { icon: "licence", title: "Minimal Reporting", text: "Streamlined reporting under the BVI Business Companies Act." },
      { icon: "services", title: "Open to Foreigners", text: "Foreign nationals can own and run BVI companies." },
    ],
  },

  cost: {
    heading: "BVI Company Setup Cost",
    intro:
      "BVI setup costs depend on your registered agent, company structure and any additional licences. Ask us for an itemised quote covering government fees, agent fees and annual renewal.",
    notes: ["Registered agent fees", "Government registration fees", "Annual renewal", "Additional licences (if needed)"],
  },

  process: {
    heading: "How to Set Up a Company in the British Virgin Islands",
    intro: "Incorporation runs through a licensed BVI registered agent. We coordinate each step for you.",
    steps: [
      { title: "Choose & reserve a name", text: "Pick a unique name and reserve it with the BVI Registry of Corporate Affairs." },
      { title: "Appoint a registered agent", text: "A licensed local registered agent handles filings and liaises with the Registry on your behalf." },
      { title: "Prepare the constitutional documents", text: "The Memorandum and Articles of Association set out the company's structure, shares and ownership." },
      { title: "Incorporate the company", text: "The registered agent files with the Registry, which issues your certificate of incorporation." },
      { title: "Approvals & bank account", text: "Check whether your activity needs a licence from the BVI Financial Services Commission, then open your corporate bank account." },
    ],
  },

  tax: {
    heading: "Tax & Compliance for BVI Companies",
    paragraphs: [
      "BVI companies benefit from a tax-neutral regime. Some activities — particularly in finance and investment — need clearance from the BVI Financial Services Commission, and economic substance rules can apply to certain relevant activities, so we review your plans before incorporation.",
    ],
    cards: [
      { value: "0%", title: "Corporate Tax", text: "No corporate tax on BVI company profits." },
      { value: "0%", title: "Income Tax", text: "No income tax for BVI companies." },
      { value: "0%", title: "Capital Gains Tax", text: "No capital gains tax on profits." },
      { value: "FSC", title: "Regulated Activities", text: "Finance and investment activities may need BVI Financial Services Commission approval." },
    ],
  },

  included: [
    "Free consultation & structure advice",
    "Name check & reservation",
    "Registered agent coordination",
    "Memorandum & Articles preparation",
    "Licence & approval checks",
    "Bank account application support",
  ],

  faqs: [
    { question: "What is a BVI company?", answer: "A company incorporated in the British Virgin Islands under the BVI Business Companies Act 2004, widely used for international business, holding and investment structures." },
    { question: "How many shareholders and directors does a BVI company need?", answer: "Just one shareholder and one director." },
    { question: "Do BVI companies pay tax?", answer: "BVI companies pay no corporate tax, income tax or capital gains tax on profits. Your home country's tax rules may still apply to you as an owner." },
    { question: "Can a BVI company do business anywhere?", answer: "Yes — BVI companies can carry out business anywhere in the world, subject to the rules of the countries they operate in." },
    { question: "Is ownership of a BVI company confidential?", answer: "Yes. Owners' and founders' names aren't easily accessible to the public, though beneficial ownership must be disclosed to the registered agent and authorities." },
    { question: "When do I open a bank account for a BVI company?", answer: "After incorporation. Once your company is registered, we help you prepare the application for a suitable bank." },
  ],
};
