import ImageCardGrid from "@/components/shared/ImageCardGrid";

const sectors = [
  { title: "Technology", description: "Innovative tech businesses and scalable digital solutions shaping the future", image: "/images/services/investment-services/technology.png" },
  { title: "Interior & Fitout", description: "Interior design, fit-out, and turnkey solutions for residential and commercial spaces", image: "/images/services/investment-services/interior-fitout.png" },
  { title: "Hospitality", description: "Hotels, resorts, serviced apartments, and F&B ventures in high-demand destinations", image: "/images/services/investment-services/hospitality.png" },
  { title: "Events & Entertainment", description: "Event management, venues, and entertainment experiences that create lasting impact", image: "/images/services/investment-services/events-entertainment.png" },
  { title: "Real Estate", description: "Residential, commercial, mixed use, and development projects across prime locations in the UAE", image: "/images/services/investment-services/real-estate.png" },
  { title: "Business Ventures", description: "Diverse business opportunities across emerging and established industries", image: "/images/services/investment-services/business-ventures.png" },
  { title: "Automotive", description: "Automotive trading, service centers and mobility solutions with strong growth potential", image: "/images/services/investment-services/automotive.png" },
  { title: "Other Opportunities", description: "Special situations and unique investment opportunities tailored to investor goals", image: "/images/services/investment-services/other-opportunities.png" },
];

export default function SectorGrid() {
  return (
    <ImageCardGrid
      eyebrow="Explore by Sector"
      heading={
        <>
          Explore Opportunities
          <br />
          Across Key Sectors
        </>
      }
      paragraph="We work across high-growth industries in the UAE and beyond, connecting investors with opportunities that create long term value"
      cards={sectors}
      closingText="Looking for a Specific Investment Opportunity?"
      closingCtaLabel="Connect with Us"
      closingCtaHref="/contact-us"
    />
  );
}