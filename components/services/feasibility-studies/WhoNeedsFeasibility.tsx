import ImageCardGrid from "@/components/shared/ImageCardGrid";

const scenarios = [
  {
    title: "Launching a New Business",
    description: "Understand market potential, customer demand, competition and financial visibility before entering the market",
    image: "/images/services/feasibility-studies/launching-new-business.png",
  },
  {
    title: "Investing into a Business",
    description: "Evaluate commercial and financial potential, risks and returns before making your investment decisions",
    image: "/images/services/feasibility-studies/investing-business.png",
  },
  {
    title: "Opening a New Branch",
    description: "Assess demand, market readiness, location, viability, and operating feasibility before expanding",
    image: "/images/services/feasibility-studies/opening-new-branch.png",
  },
  {
    title: "Entering the UAE Market",
    description: "Understand the local market landscape, regulations, competitors, and opportunity before you enter.",
    image: "/images/services/feasibility-studies/entering-uae-market.png",
  },
  {
    title: "Launching a New Product & Service",
    description: "Test the commercial potential, customer acceptance and financial impact before committing resources",
    image: "/images/services/feasibility-studies/launching-new-product.png",
  },
  {
    title: "Expanding into a New Market",
    description: "Evaluate new market potential, competitive dynamics, risks, and profitability before expansion",
    image: "/images/services/feasibility-studies/expanding-new-market.png",
  },
];

export default function WhoNeedsFeasibility() {
  return (
    <ImageCardGrid
      eyebrow="Who Needs Feasibility Studies"
      heading={
        <>
          Make the Decision Before
          <br />
          Making the Commitment.
        </>
      }
      paragraph="Feasibility studies help businesses and investors validate ideas, reduce risk, and make confident, data driven decisions"
      cards={scenarios}
      closingText="A feasibility study gives you the clarity you need to move forward with confidence or the insight to pivot early"
      closingCtaLabel="Request a Feasibility Study"
      closingCtaHref="/contact-us"
    />
  );
}