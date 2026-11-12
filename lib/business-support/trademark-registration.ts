import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero + location reuse images (recovery-audit / risk-management) — replace when available.

export const trademarkRegistration: FreezoneData = {
  slug: "trademark-registration",
  category: "Business Support",
  name: "Trademark Registration in Dubai & UAE",
  shortName: "Trademark Registration",
  hero: {
    eyebrow: "Business Support · Intellectual Property · UAE",
    title: "Trademark Registration in Dubai",
    highlight: "Protect Your Brand Across the UAE",
    subtitle: "Register your name, logo or slogan with the UAE Ministry of Economy, with protection across all seven emirates for 10 renewable years.",
    intro:
      "A trademark identifies your products or services. It can be words, a logo, an image or a combination of these. Registration gives you the exclusive right to use it in the UAE and helps customers recognise your brand. Afaq Al Khaleej handles the whole process, from searches and applications to objections and your registration certificate.",
    chips: ["Trademark search", "Application filing", "Publication & opposition", "Registration certificate"],
    image: "/images/services/digital-business-solutions/digital-marketing.png",
  },
  stats: [
    { value: "10 years", label: "Protection, renewable" },
    { value: "UAE-wide", label: "All seven emirates" },
    { value: "30 days", label: "Opposition period after publication" },
    { value: "®", label: "Symbol once registered" },
  ],

  about: {
    heading: "What Is a Trademark?",
    body:
      "A trademark is a sign that distinguishes your goods or services from others: a name, word, logo, image, slogan or a combination. In the UAE, trademarks are registered with the Ministry of Economy and protected nationwide for 10 years from the filing date, renewable for further 10-year periods. Once registered you can use the ® symbol, and nobody else may legally use your mark for the registered goods or services.",
    location: { name: "Your brand, legally yours", area: "Words, logos & combinations", image: "/images/services/feasibility-studies/launching-new-product.png" },
    features: [
      { icon: "ownership", title: "Exclusive Rights", text: "Only you can use the mark for its registered classes." },
      { icon: "award", title: "Brand Recognition", text: "Builds trust and recall with customers." },
      { icon: "licence", title: "Legal Protection", text: "Take action against copycats." },
      { icon: "trading", title: "Business Asset", text: "Can be licensed, sold or valued." },
      { icon: "online", title: "International Route", text: "A base for wider protection under the Madrid system." },
      { icon: "multiple", title: "Nationwide", text: "One registration covers all seven emirates." },
    ],
  },

  process: {
    heading: "How to Register a Trademark in the UAE",
    intro: "A multi-stage process with the Ministry of Economy.",
    steps: [
      { title: "Trademark search", text: "Check that no identical or similar mark is already registered or pending." },
      { title: "File the application", text: "Submit your mark, its classes and the list of goods or services, and pay the filing fee." },
      { title: "Examination", text: "The Ministry reviews the application and issues an approval or raises objections." },
      { title: "Publication & opposition", text: "The accepted mark is published so third parties can object.", when: "30 days" },
      { title: "Registration certificate", text: "If no one objects, pay the registration fee and receive your certificate." },
    ],
  },

  documents: {
    heading: "Documents Required",
    image: "/images/services/company-formation/feasibility-market-intelligence.png",
    intro: "Prepare these to file your application.",
    items: [
      "Clear sample of the trademark (logo, word mark or both)",
      "Trade licence (for companies)",
      "List of goods or services and their classes",
      "Emirates ID or passport of the applicant or signatory",
      "Power of attorney if filed through an agent",
      "Priority documents, if claiming priority from a foreign filing",
    ],
  },

  activities: {
    eyebrow: "How We Help",
    heading: "Our Trademark Services",
    intro: "Practical support that protects your brand from day one.",
    groups: [
      { icon: "activities", title: "Search & Clearance", text: "UAE searches to spot conflicting marks before you file.", tags: ["Search"] },
      { icon: "licence", title: "Classification", text: "Choosing the right classes and wording for your goods or services.", tags: ["Classes"] },
      { icon: "services", title: "Filing & Follow-Up", text: "Applications submitted and tracked through to registration.", tags: ["Filing"] },
      { icon: "multiple", title: "Arabic Translation Review", text: "Check how your mark reads and sounds in Arabic to avoid cultural pitfalls.", tags: ["Arabic"] },
      { icon: "ownership", title: "Objections & Oppositions", text: "Help responding to examiner objections or third-party oppositions, working with IP counsel where needed.", tags: ["Disputes"] },
      { icon: "award", title: "Renewals & Watch", text: "Renewal reminders and international filing advice.", tags: ["Renewal"] },
    ],
  },

  features: {
    eyebrow: "Avoid These",
    heading: "Common Trademark Mistakes",
    items: [
      { status: "warn", text: "Filing without a proper search" },
      { status: "warn", text: "Choosing the wrong classes or too narrow a description" },
      { status: "warn", text: "Ignoring how the mark translates into Arabic" },
      { status: "warn", text: "Using a mark too similar to a well-known brand" },
      { status: "warn", text: "Letting the registration lapse without renewal" },
    ],
  },

  cost: {
    heading: "Trademark Registration Cost",
    intro:
      "Costs depend on the number of classes, whether objections arise, and Ministry of Economy fees, which are set per class. Tell us about your brand and we'll send a quote.",
    notes: ["Number of classes", "Word or logo mark", "Search depth", "Objections or oppositions", "International filings"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Register Your Trademark with",
    paragraph: "Local know-how on searches, classification and Arabic translation, so your trademark strengthens your brand instead of causing problems later.",
    cards: [
      { title: "Clearance First", text: "Searches before you invest in a brand." },
      { title: "Local Insight", text: "Arabic and cultural review." },
      { title: "End-to-End Filing", text: "From application to certificate." },
    ],
    quoteTitle: "Request a trademark",
    quoteText: "Send us your brand name or logo and the goods or services it covers, and we'll check availability and send a quote.",
  },

  included: [
    "Availability search",
    "Class selection",
    "Application filing",
    "Examination follow-up",
    "Publication monitoring",
    "Registration certificate",
  ],

  faqs: [
    { question: "How long is a UAE trademark valid?", answer: "10 years from the filing date, renewable for further 10-year periods." },
    { question: "Who registers trademarks in the UAE?", answer: "The Ministry of Economy. One registration covers all seven emirates." },
    { question: "What's the difference between ™ and ®?", answer: "™ can be used on any mark you claim. ® should only be used once the trademark is registered." },
    { question: "Can foreign trademarks be protected in the UAE?", answer: "Yes. The UAE is party to the Madrid Protocol and the Paris Convention, which support international registration and protection of well-known marks." },
    { question: "What happens if someone objects?", answer: "Third parties can oppose within 30 days of publication. We help you respond, working with IP counsel where needed." },
    { question: "How long does registration take?", answer: "Usually a few months, depending on examination and whether any objections are raised." },
  ],
};
