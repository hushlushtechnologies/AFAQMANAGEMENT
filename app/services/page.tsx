import ServicesHero from "@/components/sections/services/ServicesHero";
import SeekingInvestmentSplit from "@/components/sections/shared/SeekingInvestmentSplit";
import ClosingCta from "@/components/shared/ClosingCta";
import Services from "@/components/shared/Services";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Afaq Al Khaleej Management Consultants' full range of services — investment advisory, business consultancy, company formation, PRO & government services, feasibility studies, and digital business solutions across the UAE.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | Afaq Al Khaleej Management Consultants",
    description:
      "Investment advisory, business consultancy, company formation, PRO & government services, feasibility studies, and digital business solutions across the UAE.",
    url: "/services",
  },
};


export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <div id="all-services">
        <Services />
      </div>
      <SeekingInvestmentSplit />
      <ClosingCta />
    </main>
  );
}
