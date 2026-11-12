import type { FreezoneData } from "@/lib/freezones/types";

// TODO(images): hero + location reuse images (backlog-accounting / corporate-tax-deregistration) — replace when available.
// TODO(client): confirm Afaq's liquidator approval status before claiming to be a registered/approved liquidator.
// Process reflects mainland Dubai (DET) practice; free zones and other emirates follow their own procedures.

export const liquidationServices: FreezoneData = {
  slug: "liquidation-services",
  category: "Accounting & Tax",
  name: "Company Liquidation in Dubai & UAE",
  shortName: "Liquidation Services",
  hero: {
    eyebrow: "Company Liquidation · Dubai · UAE",
    title: "Company Liquidation in Dubai",
    highlight: "Close Your Company Properly",
    subtitle: "Structured support to wind up your UAE company, from shareholder resolutions and creditor notices to tax deregistration and the final liquidation certificate.",
    intro:
      "Closing a UAE company means appointing an approved liquidator, notifying creditors, settling dues, cancelling visas and registrations, and getting a final liquidation certificate from the licensing authority. Afaq Al Khaleej guides you through every step, for mainland, free zone and offshore entities.",
    chips: ["Voluntary liquidation", "Creditor notice", "Visa & NOC clearance", "Final liquidation report"],
    image: "/images/investment-opportunities/opportunity-doorway.png",
  },
  stats: [
    { value: "45 days", label: "Typical creditor notice period" },
    { value: "2 types", label: "Voluntary & compulsory" },
    { value: "All entities", label: "Mainland, free zone, offshore" },
    { value: "Final certificate", label: "Company legally dissolved" },
  ],

  about: {
    heading: "Voluntary vs Compulsory Liquidation",
    body:
      "Owners can dissolve a company voluntarily, or it can be forced to close when it can't pay its debts. Common reasons for voluntary liquidation include the death of the owner without a succession plan, the business achieving its purpose, the original purpose no longer existing, a merger, or ongoing losses. Compulsory liquidation follows court proceedings under the UAE's bankruptcy and restructuring framework.",
    location: { name: "Mainland, free zone & offshore", area: "LLCs, branches, sole establishments, FZEs", image: "/images/uae-map.png" },
    features: [
      { icon: "services", title: "Voluntary Liquidation", text: "Decided by the owners or shareholders." },
      { icon: "licence", title: "Compulsory Liquidation", text: "Court-led, when debts can't be paid." },
      { icon: "multiple", title: "Mergers", text: "Entities closed as part of a restructure." },
      { icon: "ownership", title: "Succession Issues", text: "Closure after an owner's death." },
      { icon: "tax", title: "Tax Clearance", text: "VAT and corporate tax deregistration." },
      { icon: "award", title: "Clean Exit", text: "No lingering liabilities or penalties." },
    ],
  },

  process: {
    heading: "How to Liquidate an LLC in Dubai",
    intro: "Typical steps for a mainland company. Free zones and other emirates have their own variations.",
    cautionTitle: "Settle dues early",
    caution: "Paying creditors, clients and other third parties before deciding to close avoids delays. Remember to deregister for VAT and corporate tax as well. These are separate from closing the licence.",
    steps: [
      { title: "Shareholder resolution", text: "Shareholders resolve to dissolve the company and appoint an approved liquidator. The resolution is notarised." },
      { title: "Liquidator acceptance", text: "The liquidator formally accepts the appointment in writing." },
      { title: "Apply to the licensing authority", text: "Submit the liquidation application to the Department of Economy and Tourism (Dubai) or the relevant authority." },
      { title: "Publish the notice", text: "Publish the dissolution in local newspapers so creditors can make claims.", when: "45-day notice period" },
      { title: "Cancel visas & clear dues", text: "Cancel employee visas and settle utility, telecom and other bills, getting NOCs where required." },
      { title: "Liquidator's report", text: "The liquidator submits a final report confirming creditors are settled and no claims remain." },
      { title: "Final liquidation certificate", text: "The authority cancels the licence and the company legally ceases to exist." },
    ],
  },

  documents: {
    heading: "Documents Typically Required",
    image: "/images/services/investment-services/real-estate.png",
    intro: "The exact list depends on the authority and entity type.",
    items: [
      "Notarised shareholder resolution to dissolve and appoint a liquidator",
      "Liquidator's acceptance letter",
      "Trade licence and Memorandum of Association",
      "Newspaper publication of the dissolution notice",
      "Visa cancellation and labour clearance documents",
      "Utility and telecom NOCs",
      "Final liquidation (audit) report",
      "VAT and corporate tax deregistration confirmations",
    ],
  },

  activities: {
    eyebrow: "How We Help",
    heading: "Our Liquidation Support",
    intro: "End-to-end coordination so your company closes cleanly.",
    groups: [
      { icon: "licence", title: "Resolutions & Paperwork", text: "Drafting resolutions and preparing applications.", tags: ["Documents"] },
      { icon: "services", title: "Liquidator Coordination", text: "Working with an approved liquidator on the process.", tags: ["Liquidator"] },
      { icon: "bank", title: "Final Accounts & Report", text: "Closing accounts and the final liquidation report.", tags: ["Accounts"] },
      { icon: "tax", title: "Tax Deregistration", text: "VAT and corporate tax deregistration with the FTA.", tags: ["FTA"] },
      { icon: "multiple", title: "Visas & Clearances", text: "Visa cancellations and NOCs from authorities and utilities.", tags: ["Clearances"] },
      { icon: "award", title: "Free Zone & Offshore", text: "Closures for FZEs and offshore companies.", tags: ["All entities"] },
    ],
  },

  features: {
    eyebrow: "Avoid These",
    heading: "Common Liquidation Delays",
    items: [
      { status: "warn", text: "Unpaid creditors or open claims" },
      { status: "warn", text: "Visas not cancelled in time" },
      { status: "warn", text: "Outstanding utility or telecom bills" },
      { status: "warn", text: "Forgetting VAT and corporate tax deregistration" },
      { status: "warn", text: "Missing or unaudited final accounts" },
    ],
  },

  cost: {
    heading: "Company Liquidation Cost",
    intro:
      "Costs depend on the entity type, the authority, liquidator fees, government charges and the state of your accounts. Tell us about your company and we'll send a quote.",
    notes: ["Entity type", "Licensing authority", "Liquidator fees", "Outstanding dues", "Tax deregistration"],
  },

  support: {
    eyebrow: "Why Afaq Al Khaleej",
    heading: "Close Your Company Smoothly with",
    paragraph: "Experience with sole establishments, LLCs, partnerships, civil companies, free zone entities and offshore companies across the UAE.",
    cards: [
      { title: "Step-by-Step Guidance", text: "Clear timeline and checklist." },
      { title: "All Clearances Covered", text: "Visas, utilities and tax." },
      { title: "Clean Closure", text: "No lingering liabilities." },
    ],
    quoteTitle: "Request a liquidation",
    quoteText: "Tell us about your company and where it's licensed, and we'll send a quote and timeline.",
  },

  included: [
    "Liquidation plan & timeline",
    "Resolution drafting",
    "Authority application",
    "Creditor notice publication",
    "Final accounts & report",
    "Tax deregistration",
  ],

  faqs: [
    { question: "Who can liquidate a UAE company?", answer: "Only an approved liquidator can carry out a company liquidation. Liquidators are appointed by the shareholders' resolution." },
    { question: "How long does liquidation take?", answer: "Usually at least the 45-day creditor notice period plus processing time, often a few months in total depending on outstanding dues and clearances." },
    { question: "What's the difference between voluntary and compulsory liquidation?", answer: "Voluntary liquidation is decided by the owners. Compulsory liquidation follows court proceedings when a company can't pay its debts." },
    { question: "Do I need to deregister for VAT and corporate tax?", answer: "Yes. Tax deregistration with the FTA is separate from cancelling the trade licence and must be done within the required deadlines." },
    { question: "Can you liquidate free zone and offshore companies?", answer: "Yes. Free zone and offshore entities follow their authority's own procedures, and we help with each." },
    { question: "What happens to employee visas?", answer: "All company-sponsored visas must be cancelled and employees' dues settled before the licence can be cancelled." },
  ],
};
