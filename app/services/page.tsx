import ServicesHero from "@/components/sections/services/ServicesHero";
import SeekingInvestmentSplit from "@/components/sections/shared/SeekingInvestmentSplit";
import ClosingCta from "@/components/shared/ClosingCta";
import Services from "@/components/shared/Services";

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
