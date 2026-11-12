import type { Metadata } from "next";
import Faq from "@/components/sections/shared/Faq";
import ClosingCta from "@/components/shared/ClosingCta";
import MarqueeBanner from "@/components/ui/MarqueeBanner";
import DubaiSetupHero from "@/components/services/business-setup-dubai/DubaiSetupHero";
import SetupIntro from "@/components/services/business-setup-dubai/SetupIntro";
import Jurisdictions from "@/components/services/business-setup-dubai/Jurisdictions";
import ComparisonTable from "@/components/services/business-setup-dubai/ComparisonTable";
import WhyDubai from "@/components/services/business-setup-dubai/WhyDubai";
import SetupProcess from "@/components/services/business-setup-dubai/SetupProcess";
import AcrossUae from "@/components/services/business-setup-dubai/AcrossUae";
import SetupPackages from "@/components/services/business-setup-dubai/SetupPackages";
import WhyChooseAfaq from "@/components/services/business-setup-dubai/WhyChooseAfaq";
import { PACKAGE_PRICES, freeZones } from "@/components/services/business-setup-dubai/data";

export const metadata: Metadata = {
  title: "Business Setup in Dubai, UAE",
  description:
    "Set up your company in Dubai with Afaq Al Khaleej — free zone, mainland and offshore company formation, trade licences, visas, bank account support and PRO services.",
  alternates: {
    canonical: "/business-setup-in-dubai",
  },
  openGraph: {
    title: "Business Setup in Dubai | Afaq Al Khaleej Management Consultants",
    description:
      "Free zone, mainland and offshore company formation in Dubai — licensing, visas and approvals handled with expert guidance.",
    url: "/business-setup-in-dubai",
  },
};

const faqs = [
  {
    question: "How much does it cost to set up a business in Dubai in 2026?",
    answer: `Our starting package examples are ${PACKAGE_PRICES.offshore} for offshore, ${PACKAGE_PRICES.freezone} for a free zone and ${PACKAGE_PRICES.mainland} for mainland. These are starting figures, not a final quotation — your activity, workspace, visa needs and approvals all affect the total. Ask us for a written breakdown of first-year costs, renewals and any promotional conditions.`,
  },
  {
    question: "What is the difference between mainland, free zone and offshore in Dubai?",
    answer:
      "A mainland licence lets you operate within the activities and locations approved by the licensing authority. A free zone company operates within its zone's rules and usually offers full foreign ownership, with permissions needed for some work outside the zone. Offshore structures suit eligible international or holding activities and do not automatically provide residence visas.",
  },
  {
    question: "Is mainland or free zone better for my business?",
    answer:
      "It depends on your activity, where your customers are, your workspace and visa needs, and your budget. We compare both routes against your plans in a free consultation before recommending one.",
  },
  {
    question: "Can a foreigner own 100% of a company in Dubai?",
    answer:
      "Yes, for many activities. Full foreign ownership is available for many mainland activities and most free zone structures, though regulated or strategic-impact activities may need additional approvals.",
  },
  {
    question: "How long does it take to set up a business in Dubai?",
    answer:
      "Timelines depend on your documents, chosen activity, jurisdiction and the approvals required. Once we understand your requirements, we'll give you a realistic timeline for each step.",
  },
  {
    question: "What documents do I need to set up a business in Dubai?",
    answer:
      "Requirements vary by jurisdiction, activity and shareholders, but commonly include passport copies, proposed trade names, business activity details and supporting documents. We provide a tailored checklist for your setup.",
  },
  {
    question: "Do I need a physical office to set up a company in Dubai?",
    answer:
      "Not always. Many free zones offer flexi-desk packages, while mainland requirements depend on your activity and licensing authority. Workspace also affects how many visas you can apply for.",
  },
  {
    question: "Can I get a UAE residence visa by setting up a company in Dubai?",
    answer:
      "Mainland and free zone companies can apply for investor and employee visas, subject to eligibility, workspace and approvals. Offshore registration alone does not provide residence visa eligibility.",
  },
  {
    question: "Do free zone companies pay corporate tax?",
    answer:
      "A Qualifying Free Zone Person may benefit from 0% Corporate Tax on Qualifying Income when the conditions are met; other taxable income may be taxed at 9%. Free zone registration alone is not an automatic exemption, so tax obligations should be assessed separately.",
  },
  {
    question: "Can you help me open a corporate bank account in Dubai?",
    answer:
      "Yes. We assist with preparing the documents banks typically require and coordinate the account opening process once your licence is issued.",
  },
];

export default function BusinessSetupDubaiPage() {
  return (
    <main>
      <DubaiSetupHero />
      <MarqueeBanner items={freeZones} />
      <SetupIntro />
      <Jurisdictions />
      <ComparisonTable />
      <WhyDubai />
      <SetupProcess />
      <AcrossUae />
      <SetupPackages />
      <WhyChooseAfaq />
      <Faq faqs={faqs} />
      <ClosingCta />
    </main>
  );
}
