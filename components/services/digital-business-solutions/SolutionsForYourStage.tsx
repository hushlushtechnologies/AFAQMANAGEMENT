import ImageCardGrid from "@/components/shared/ImageCardGrid";

const stages = [
  {
    title: "Starting a New Business",
    description: "Build your brand, establish credibility, and launch with a strong digital foundation",
    image: "/images/services/digital-business-solutions/starting-new-business.png",
  },
  {
    title: "Growing a Business",
    description: "Improve efficiency, manage customers better, and create room to scale",
    image: "/images/services/digital-business-solutions/growing-business.png",
  },
  {
    title: "Running Complex Operations",
    description: "Manage multiple functions, data and teams with custom digital systems",
    image: "/images/services/digital-business-solutions/running-complex-operations.png",
  },
  {
    title: "Selling Online",
    description: "Create a seamless online shopping experience that converts",
    image: "/images/services/digital-business-solutions/selling-online.png",
  },
  {
    title: "Serving Customers Digitally",
    description: "Offer better access, self service options and a superior customer experience",
    image: "/images/services/digital-business-solutions/serving-customers-digitally.png",
  },
  {
    title: "Scaling Operations",
    description: "Expand with confidence using automation, integration and data driven insights",
    image: "/images/services/digital-business-solutions/scaling-operations.png",
  },
];

export default function SolutionsForYourStage() {
  return (
    <ImageCardGrid
      eyebrow="Solutions Built Around your Business"
      heading={
        <>
          Not Every Business Needs
          <br />
          the Same Technology
        </>
      }
      paragraph="Different goals, different challenges. We design digital solutions that fit your business stage, operation, and growth plans"
      cards={stages}
      closingText="Tell us your goals, and we'll recommend the right digital solution to help you move forward with confidence"
      closingCtaLabel="Discuss your Project"
      closingCtaHref="/contact-us"
    />
  );
}