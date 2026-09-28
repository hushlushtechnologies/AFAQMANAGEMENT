import ImageCardGrid from "@/components/shared/ImageCardGrid";

const expertiseAreas = [
  { title: "Business Strategy & Planning", description: "We help define your direction, set clear priorities and build strategies that create impact", image: "/images/services/business-consultancy/strategy-planning.png" },
  { title: "Market Research & Intelligence", description: "In depth market research and insights that help you understand opportunities and stay ahead", image: "/images/services/business-consultancy/market-research.png" },
  { title: "Growth & Expansion Strategy", description: "Practical strategies to enter new markets, expand operations and unlock sustainable growth", image: "/images/services/business-consultancy/growth-expansion.png" },
  { title: "Financial & Operational Strategy", description: "Strengthen financial performance and streamline operations for efficiency and profitability", image: "/images/services/business-consultancy/financial-operational.png" },
  { title: "Business Restructuring", description: "We help realign your business structure, processes and operations for a stronger future", image: "/images/services/business-consultancy/restructuring.png" },
  { title: "Risk Assessment", description: "Identify potential risks, evaluate impact and build strategies to manage uncertainty", image: "/images/services/business-consultancy/risk-assessment.png" },
  { title: "Corporate Structuring", description: "Build the right business structure to support governance, scalability, and long term success", image: "/images/services/business-consultancy/corporate-structuring.png" },
  { title: "Performance Improvement", description: "Enhance productivity, measure performance and drive continuous business improvement", image: "/images/services/business-consultancy/performance-improvement.png" },
];

export default function ConsultancyExpertise() {
  return (
    <ImageCardGrid
      eyebrow="Our Consultancy Expertise"
      heading={
        <>
          Expertise Across Every
          <br />
          Stage of Business
        </>
      }
      paragraph="We combine deep market understanding with practical consulting to help businesses strengthen, grow and achieve long term success"
      cards={expertiseAreas}
      closingText="Our expertise is built on experience, insight and a commitment to helping businesses in the UAE and beyond achieve sustainable growth"
      closingCtaLabel="Connect with Us"
      closingCtaHref="/contact-us"
    />
  );
}