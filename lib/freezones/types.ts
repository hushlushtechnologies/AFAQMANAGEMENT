// Shared shape for every free-zone page (Meydan, IFZA, DMCC, SRTIP, …).
// Optional blocks render only when a zone's data provides them.
// Icons are referenced by key so data stays serialisable.

export type FzIcon =
  | "ownership"
  | "licence"
  | "activities"
  | "online"
  | "visas"
  | "tax"
  | "trading"
  | "services"
  | "solo"
  | "ecommerce"
  | "media"
  | "multiple"
  | "bank"
  | "office"
  | "ecosystem"
  | "award";

export type FreezoneData = {
  slug: string;
  /** breadcrumb section label — defaults to "Freezone" (e.g. "Mainland") */
  category?: string;
  name: string; // "Meydan Free Zone"
  shortName: string; // "Meydan"
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    intro: string;
    chips: string[];
    image: string;
  };
  stats: { value: string; label: string }[];

  about?: {
    heading: string;
    body: string;
    location: { name: string; area: string; image: string };
    features: { icon: FzIcon; title: string; text: string }[];
    /** key–value "at a glance" facts shown under the intro text */
    facts?: { label: string; value: string }[];
  };

  cost: {
    heading: string;
    intro: string;
    source?: string;
    /** card-style tiers (Meydan) */
    tiers?: { name: string; badge?: string; price?: string; tagline: string; points: string[] }[];
    licence?: { title: string; price: string; note: string; points: string[] };
    otherCosts?: string[];
    guidance?: string;
    /** table-style pricing (IFZA) */
    table?: {
      columns: string[];
      rows: { cells: string[]; note?: string }[];
      footnote: string;
    };
    chart?: {
      title: string;
      bars: { label: string; value: number }[];
      aside?: { title: string; text: string };
    };
    /** a secondary plain table, e.g. "what should your quote explain?" */
    extraTable?: { title: string; columns: string[]; rows: string[][]; footnote?: string };
    included?: string[];
    includedTitle?: string;
    addOns?: { label: string; price: string }[];
    /** short fact chips shown under the cost blocks */
    notes?: string[];
    /** interactive package finder that highlights a tier */
    estimator?: {
      title: string;
      label: string;
      options: { label: string; tier: number; annual: string }[];
      note: string;
    };
  };

  licenceTypes?: {
    heading: string;
    intro: string;
    items: { title: string; text: string; tags?: string[] }[];
    note?: string;
  };

  /** company structure options, grouped (e.g. free zone / non-free zone) */
  structures?: {
    heading: string;
    intro: string;
    groups: { title: string; items: { title: string; text: string }[] }[];
    notes?: string[];
    table?: { title: string; columns: string[]; rows: string[][] };
  };

  activities?: {
    eyebrow?: string;
    heading: string;
    intro: string;
    groups?: { icon: FzIcon; title: string; text: string; tags: string[]; href?: string }[];
    lists?: { title: string; items: string[] }[];
    notAvailable?: string;
  };

  office?: {
    heading: string;
    intro: string;
    location: { name: string; address: string };
    options: { title: string; text: string }[];
  };

  visas?: {
    heading: string;
    intro: string;
    chips?: string[];
    stats?: { value: string; label: string }[];
    types?: string[];
    stepsTitle?: string;
    steps: { title: string; text: string }[];
  };

  documents?: {
    heading: string;
    /** image beside the flat document list */
    image?: string;
    intro?: string;
    items?: string[];
    groups?: { title: string; items: string[] }[];
    note?: string;
  };

  process: {
    heading: string;
    intro: string;
    caution?: string;
    cautionTitle?: string;
    steps: { title: string; text: string; when?: string }[];
  };

  banking?: {
    heading: string;
    paragraphs: string[];
    snapshot: { label: string; value: string }[];
  };

  features?: {
    /** "early" shows it right after the About section (default: late) */
    placement?: "early" | "late";
    eyebrow?: string;
    heading: string;
    items: { status: "yes" | "partial" | "warn" | "no"; text: string }[];
  };

  prosCons?: {
    /** "early" shows it right after the About section (default: late) */
    placement?: "early" | "late";
    heading: string;
    eyebrow?: string;
    prosTitle?: string;
    consTitle?: string;
    /** style both columns as positive options (e.g. mainland vs free zone) */
    neutral?: boolean;
    pros: string[];
    cons: string[];
    note?: { title: string; text: string };
  };

  compare?: {
    eyebrow?: string;
    heading: string;
    intro: string;
    columns: string[]; // first column is the zone name
    rows: { cells: string[]; current?: boolean }[];
    footnote?: string;
  };

  tax?: {
    eyebrow?: string;
    heading: string;
    paragraphs: string[];
    calendar?: { label: string; when: string }[];
    cards?: { value: string; title: string; text: string }[];
    tags?: string[];
  };

  developments?: { heading: string; items: { date: string; text: string }[] };

  /** generic text + checklist block (e.g. liquidation), shown after documents */
  infoBlock?: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    listTitle?: string;
    list?: string[];
    stats?: { value: string; label: string }[];
  };

  /** simple list of other zones, shown when there's no comparison table */
  otherZones?: string[];

  /** overrides for the support section copy (non-setup pages) */
  support?: {
    eyebrow?: string;
    heading?: string;
    paragraph?: string;
    cards?: { title: string; text: string }[];
    quoteTitle?: string;
    quoteText?: string;
  };

  /** "Included with Afaq" checklist shown in the support section */
  included?: string[];
  portalNote?: string;
  faqs: { question: string; answer: string }[];
};
