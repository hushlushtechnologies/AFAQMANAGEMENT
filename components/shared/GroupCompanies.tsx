 "use client";

import { motion } from "framer-motion";
import CompanyCard from "./CompanyCard";
 

const companies = [
  {
    image: "/images/companies/afaq-management.jpg",
    logo: "/images/logo.svg",
    subBrand: "AL KHALEEJ MANAGEMENT CONSULTANTS",
    name: "Afaq Al Khaleej Management",
    category: "Investment & Business Consultancy",
    description: "Connecting investors, entrepreneurs and business with trusted opportunities and end to end business solutions across the UAE",
    accent: "gold" as const,
    href: "https://www.afaqmanagement.com/",
    isParent: true,
  },
  {
    image: "/images/companies/optimus-cars.jpg",
    logo: "/images/optimus-logos.png",
    subBrand: "Optimus Megatron",
    name: "Optimus Megatron Cars",
    category: "Luxury Automotive",
    description: "Offering a curated selection of luxury, premium, and high-performance vehicles for customers seeking quality, choice, and an exceptional automotive experience.",
    accent: "gold" as const,
    href: "https://www.optimusmegatroncars.com",
  },
  {
    image: "/images/companies/hushlush-events.jpg",
    logo: "/images/hushlush-logo.png",
    subBrand: "Events",
    name: "Hush Lush Events",
    category: "Events & Experience",
    description: "Creating memorable weddings, corporate events, private celebration, and premium experience with creativity and precision",
    accent: "gold" as const,
    href: "https://www.hushlushevents.com/",
  },
  {
    image: "/images/companies/hushlush-technologies.jpg",
    logo: "/images/hushlush-tech-logo.png",
    subBrand: "Technologies",
    name: "Hush Lush Technologies",
    category: "Technology & Digital Solutions",
    description: "Building digital experience, software solution, creative technology, branding and growth-focused digital ecosystem",
    accent: "gold" as const,
    href: "https://www.hushlushtechnologies.com/",
  },
  {
    image: "/images/companies/optimus-garage.jpg",
    logo: "/images/optimus-garage-logo.png",
    subBrand: "Optimus Megatron Garage",
    name: "Optimus Megatron Garage",
    category: "Automotive & Modification Place",
    description: "Premium automotive service covering vehicle care, maintenance, detailing and specialized automotive solution",
    accent: "gold" as const,
    href: "https://www.optimusmegatroncarsgarage.com/",
  },
  {
   image: "/images/companies/afaq-barakha.jpg",
    logo: "/images/afaq-properties.png",
    subBrand: "AL MANZIL PROPERTIES",
    name: "Afaq Al Manzil Properties",
    category: "Real Estate & Property Consultant",
    description: "Connecting buyers and investors with carefully selected residential and investment properties across the UAE",
    accent: "gold" as const,
    href: "https://www.afaqalmanzilproperties.com/",
  },
  {
     image: "/images/companies/afaq-properties.jpg",
   
    logo: "/images/afaq-barakha.png",
    subBrand: "AL BARAKHA INVESTMENT",
    name: "Afaq Al Barakha Investment",
    category: "Investment & Opportunities",
    description: "Connecting investors with selected investment opportunities through strategic insights, opportunity evaluation, and a growth-focused approach.",
    accent: "gold" as const,
    href: "https://www.afaqalbarakha.com/",
  },
  {
    image: "/images/companies/afaq-interiors.jpg",
    logo: "/images/afaq-interiors.png",
    subBrand: "AL MANZIL INTERIORS",
    name: "Afaq Al Manzil Interiors",
    category: "Interior Design & Fit-Out",
    description: "Transforming villas, apartments, and commercial spaces through thoughtful interior design, fit-out solutions, and functional spaces tailored to modern lifestyles.",
    accent: "gold" as const,
    href: "https://www.afaqalmanzilinteriors.com/",
  },
  {
    image: "/images/companies/hushlush-hospitality.jpg",
    logo: "/images/hushlush-hospitality-logo.png",
    subBrand: "Hospitality And General Trading FZE L.L.C",
    name: "Hush Lush Hospitality",
    category: "Hospitality & Lifestyle Products",
    description: "Delivering thoughtful hospitality and lifestyle experience build around quality, service and customer satisfaction",
    accent: "gold" as const,
    href: "https://www.hushlushs.com/",
  },
];

export default function GroupCompanies() {
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="inline-block border-l-2 border-primary pl-4"
        >
          <span className="text-sm font-semibold text-primary">Why Afaq Al Khaleej</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
        >
          One Group. Diverse Expertise.
          <br />
          Shared Vision.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          Afaq Al Khaleej Management is part of a growing UAE business ecosystem
          bringing together specialized companies across multiple industries.
          Together, we create integrated solutions and greater value for our clients
        </motion.p>

        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((company, i) => (
          <CompanyCard key={company.name} {...company} delay={(i % 3) * 0.1} />
        ))}
      </div>
    </section>
  );
}