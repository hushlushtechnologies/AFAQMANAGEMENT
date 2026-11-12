import type { Metadata } from "next";
import ClosingCta from "@/components/shared/ClosingCta";
import OffersHero from "@/components/services/offers/OffersHero";
import OffersIntro from "@/components/services/offers/OffersIntro";
import OffersGrid from "@/components/services/offers/OffersGrid";

export const metadata: Metadata = {
  title: "Business Setup Packages & Offers in Dubai",
  description:
    "Latest free zone and mainland business setup packages in Dubai from Afaq Al Khaleej — e-commerce, general trading, professional and commercial licences with visa options.",
  alternates: {
    canonical: "/offers",
  },
  openGraph: {
    title: "Business Setup Packages in Dubai | Afaq Al Khaleej Management Consultants",
    description:
      "Compare free zone and mainland company setup offers in Dubai — licences, visas and office solutions.",
    url: "/offers",
  },
};

export default function OffersPage() {
  return (
    <main>
      <OffersHero />
      <OffersIntro />
      <OffersGrid />
      <ClosingCta />
    </main>
  );
}
