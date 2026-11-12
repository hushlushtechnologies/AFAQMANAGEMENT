import type { Metadata } from "next";
import Faq from "@/components/sections/shared/Faq";
import ClosingCta from "@/components/shared/ClosingCta";
import MarqueeBanner from "@/components/ui/MarqueeBanner";
import KsaSetupHero from "@/components/services/business-setup-ksa/KsaSetupHero";
import KsaIntro from "@/components/services/business-setup-ksa/KsaIntro";
import KsaAdvantages from "@/components/services/business-setup-ksa/KsaAdvantages";
import RegistrationSteps from "@/components/services/business-setup-ksa/RegistrationSteps";
import LegalEntities from "@/components/services/business-setup-ksa/LegalEntities";
import SetupRoutes from "@/components/services/business-setup-ksa/SetupRoutes";
import DocumentsAndCosts from "@/components/services/business-setup-ksa/DocumentsAndCosts";
import WhyAfaqKsa from "@/components/services/business-setup-ksa/WhyAfaqKsa";

export const metadata: Metadata = {
  title: "Business Setup in Saudi Arabia (KSA)",
  description:
    "Plan your company formation in Saudi Arabia with Afaq Al Khaleej — MISA investment registration, commercial registration, legal structuring, documents and bank account support.",
  alternates: {
    canonical: "/business-setup-in-ksa",
  },
  openGraph: {
    title: "Business Setup in Saudi Arabia | Afaq Al Khaleej Management Consultants",
    description:
      "Company formation in KSA — choose the right structure, prepare documents and confirm which registrations and approvals apply.",
    url: "/business-setup-in-ksa",
  },
};

const ribbon = [
  "MISA Investment Registration",
  "Commercial Registration (CR)",
  "Saudi Business Center",
  "Articles of Association",
  "National Address",
  "Chamber of Commerce",
  "Corporate Bank Account",
  "GCC Branch & Subsidiary Setup",
];

const faqs = [
  {
    question: "How can I prepare for Saudi company registration?",
    answer:
      "Confirm your business activity and investor route first, then check which documents need authentication and whether any approvals are needed before filing. Our registration steps and document checklist will help you prepare for your assessment.",
  },
  {
    question: "Can foreign investors fully own a company in Saudi Arabia?",
    answer:
      "Full foreign ownership is available for some activities. Others require a local partner or additional approvals, so check the conditions for your proposed activity before choosing a shareholding structure.",
  },
  {
    question: "What are the requirements to set up a Saudi company?",
    answer:
      "Requirements depend on your activity, investor profile and legal structure. Foreign investors generally register with the Ministry of Investment (MISA) first, then complete incorporation and commercial registration through the Saudi Business Center, followed by post-incorporation registrations.",
  },
  {
    question: "Can a non-resident apply to establish a company in Saudi Arabia?",
    answer:
      "Yes, foreign investors can establish companies in Saudi Arabia through the applicable investor route. The documents, authentication and approvals required depend on your activity and whether you already operate a company abroad.",
  },
  {
    question: "How do I check whether my business activity is restricted?",
    answer:
      "Ownership and approval requirements vary by activity. We review your proposed activity against current Ministry of Investment guidance as part of your setup assessment.",
  },
  {
    question: "Do I need to travel to Saudi Arabia to complete the setup?",
    answer:
      "It depends on your route, your bank's identity checks and the authorities involved. Many preparation steps can be handled remotely — we'll tell you if and when an in-person visit is needed.",
  },
  {
    question: "How long does it take to set up a business in Saudi Arabia?",
    answer:
      "Timelines depend on your investor route, document authentication, activity approvals and the authorities involved. After your assessment, we'll outline a realistic timeline for each step.",
  },
  {
    question: "How much does it cost to start a Saudi company?",
    answer:
      "Costs vary with your structure, location, workforce size and activity. Typical items include investment registration, sector licences, commercial registration, gazette publication, Chamber of Commerce fees and bank requirements. We provide an itemised estimate separating government charges, third-party expenses and advisory fees.",
  },
  {
    question: "What services does Afaq Al Khaleej provide for Saudi company setup?",
    answer:
      "We help with your setup assessment, choosing a company structure, preparing and authenticating documents, investment and commercial registration, national address, post-incorporation registrations and corporate bank account support.",
  },
];

export default function BusinessSetupKsaPage() {
  return (
    <main>
      <KsaSetupHero />
      <MarqueeBanner items={ribbon} />
      <KsaIntro />
      <KsaAdvantages />
      <RegistrationSteps />
      <LegalEntities />
      <SetupRoutes />
      <DocumentsAndCosts />
      <WhyAfaqKsa />
      <Faq faqs={faqs} />
      <ClosingCta />
    </main>
  );
}
