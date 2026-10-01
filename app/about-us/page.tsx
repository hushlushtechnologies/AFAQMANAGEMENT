import AboutHero from "@/components/sections/about/AboutHero";
import OurStory from "@/components/sections/about/OurStory";
import ServicesExpertise from "@/components/sections/about/ServicesExpertise";
import VisionMission from "@/components/sections/about/VisionMission";
import WhoWeAre from "@/components/sections/about/WhoWeAre";
import WhyPartner from "@/components/sections/shared/WhyPartner";
import ClosingCta from "@/components/shared/ClosingCta";
import GroupCompanies from "@/components/shared/GroupCompanies";
import { Metadata } from "next";


 
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Afaq Al Khaleej Management Consultants — our story, vision, mission, and the business, investment, and PRO advisory services we provide across the UAE.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Afaq Al Khaleej Management Consultants",
    description:
      "Our story, vision, mission, and the business, investment, and PRO advisory services we provide across the UAE.",
    url: "/about",
  },
};


export default function page() {
  return (
    <main>
      <AboutHero />
      <WhoWeAre />
      <OurStory />
      <VisionMission />
      <ServicesExpertise />
      <GroupCompanies />
       <WhyPartner />
       <ClosingCta />
    </main>
  );
}
