import AboutHero from "@/components/sections/about/AboutHero";
import OurStory from "@/components/sections/about/OurStory";
import ServicesExpertise from "@/components/sections/about/ServicesExpertise";
import VisionMission from "@/components/sections/about/VisionMission";
import WhoWeAre from "@/components/sections/about/WhoWeAre";
import WhyPartner from "@/components/sections/shared/WhyPartner";
import ClosingCta from "@/components/shared/ClosingCta";
import GroupCompanies from "@/components/shared/GroupCompanies";
import React from "react";

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
