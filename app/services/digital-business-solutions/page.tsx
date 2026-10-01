import Faq from "@/components/sections/shared/Faq";
import SeekingInvestmentSplit from "@/components/sections/shared/SeekingInvestmentSplit";
import DigitalSolutionsGrid from "@/components/services/digital-business-solutions/DigitalSolutionsGrid";
import DigitalSolutionsHero from "@/components/services/digital-business-solutions/DigitalSolutionsHero";
import SolutionsForYourStage from "@/components/services/digital-business-solutions/SolutionsForYourStage";
import ClosingCta from "@/components/shared/ClosingCta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Business Solutions",
  description:
    "Afaq Al Khaleej Management Consultants delivers digital business solutions — websites, web and mobile apps, custom software, automation, and UI/UX design for businesses in the UAE.",
  alternates: {
    canonical: "/services/digital-business-solutions",
  },
  openGraph: {
    title: "Digital Business Solutions | Afaq Al Khaleej Management Consultants",
    description:
      "Websites, web applications, mobile apps, custom software, automation, system integrations, and UI/UX design for growing businesses in the UAE.",
    url: "/services/digital-business-solutions",
  },
};


export default function DigitalBusinessSolutionsPage() {
  return (
    <main>
      <DigitalSolutionsHero />
      <DigitalSolutionsGrid />
      <SolutionsForYourStage />
      <SeekingInvestmentSplit />
       <Faq
        faqs={[
          {
            question: "What digital business solutions does Afaq provide?",
            answer:
              "We provide solutions across website development, web applications, mobile apps, custom software, UI/UX design, business automation, system integrations, digital marketing, and branding & digital identity.",
          },
          {
            question: "Can you build a custom website or web application for my business?",
            answer:
              "Yes. We can design and develop digital platforms around your business requirements, whether you need a corporate website, e-commerce platform, customer portal, booking system, management platform, or custom web application.",
          },
          {
            question: "Does Afaq develop mobile applications?",
            answer:
              "Yes. We can support the design and development of mobile applications for customer-facing services, internal business operations, booking platforms, marketplaces, and other digital requirements across relevant mobile platforms.",
          },
          {
            question: "Can you develop custom software for our business operations?",
            answer:
              "Yes. If off-the-shelf software does not fit your requirements, we can explore custom solutions such as management systems, CRM solutions, internal tools, dashboards, business portals, and integrated platforms.",
          },
          {
            question: "Can Afaq automate our existing business processes?",
            answer:
              "Yes. We can assess repetitive or manual workflows and identify opportunities for digitization and automation, including workflow automation, CRM processes, system integrations, notifications, reporting, and operational workflows.",
          },
          {
            question: "Do you provide UI/UX design for existing digital products?",
            answer:
              "Yes. We can work on new or existing websites, applications, and software products through UX strategy, user flows, wireframes, interface design, prototypes, and experience improvements.",
          },
        ]}
      />
      <ClosingCta />
    </main>
  );
}
