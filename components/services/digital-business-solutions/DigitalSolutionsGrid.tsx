"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Globe,
  AppWindow,
  Smartphone,
  Code,
  Palette,
  Workflow,
  Megaphone,
  Sparkles,
} from "lucide-react";
import CategoryChecklistCard from "@/components/shared/CategoryChecklistCard";

const categories = [
  {
    icon: Globe,
    title: "Website Development",
    image: "/images/services/digital-business-solutions/website-development.png",
    description: "Modern, responsive websites designed to communicate your brand, showcase your services, and turn visitors into opportunities.",
    items: ["Corporate Websites", "Business Websites", "E-Commerce", "Landing Pages", "Website Redesign"],
    featured: false,
  },
  {
    icon: AppWindow,
    title: "Web Applications",
    image: "/images/services/digital-business-solutions/web-applications.png",
    description: "Custom web applications that simplify workflows, connect users, manage information, and support day-to-day operations.",
    items: ["Business Portals", "Customer Portals", "Booking Systems", "Management Platforms", "Custom Web Apps"],
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    image: "/images/services/digital-business-solutions/mobile-applications.png",
    description: "User-focused mobile experiences designed for businesses that need stronger accessibility, engagement, and digital services.",
    items: ["iOS Apps", "Android Apps", "Cross Platform Apps", "Customer Apps", "Business Apps"],
    featured: false,
  },
  {
    icon: Code,
    title: "Custom Software",
    image: "/images/services/digital-business-solutions/custom-software.png",
    description: "Custom digital systems designed to solve specific operational challenges and support more efficient business management.",
    items: ["Management Systems", "CRM Solutions", "Internal Tools", "Custom Platforms", "System Integrations"],
    featured: false,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    image: "/images/services/digital-business-solutions/ui-ux-design.png",
    description: "We combine business requirements with user needs to create intuitive, functional, and visually refined digital products.",
    items: ["UX Strategy", "User Research", "Wireframes", "UI Design", "Interactive Prototypes"],
    featured: true,
  },
  {
    icon: Workflow,
    title: "Business Automation",
    image: "/images/services/digital-business-solutions/business-automation.png",
    description: "Transform repetitive processes into structured digital workflows that help teams operate more efficiently.",
    items: ["Workflow Automation", "Process Digitization", "CRM Automation", "System Integration", "Operational Automation"],
    featured: false,
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    image: "/images/services/digital-business-solutions/digital-marketing.png",
    description: "Build visibility, reach the right audience, and create measurable digital campaigns around your business objectives.",
    items: ["Social Media", "Performance Marketing", "SEO", "Content Strategy", "Digital Campaigns"],
    featured: false,
  },
  {
    icon: Sparkles,
    title: "Branding & Digital Identity",
    image: "/images/services/digital-business-solutions/branding-digital-identity.png",
    description: "Create a consistent identity that strengthens how your business looks, communicates, and connects across digital channels.",
    items: ["Brand Identity", "Digital Guidelines", "Social Media Identity", "Marketing Creatives", "Digital Brand Assets"],
    featured: false,
  },
];

export default function DigitalSolutionsGrid() {
  return (
    <section className="bg-foreground py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="inline-block border-l-2 border-primary pl-4"
        >
          <span className="text-sm font-semibold text-primary">Our Digital Solutions</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-3xl font-light leading-[1.2] text-background sm:text-4xl md:text-5xl"
        >
          Everything Your Business Needs to
          <br />
          Move Digital.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-background/70 md:text-base"
        >
          From establishing your online presence to building powerful
          business platforms, Afaq provides digital solutions designed
          around how your business operates, connects, and grows.
        </motion.p>

        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      <div className="relative mx-auto mt-16 max-w-7xl px-6">
        {/* decorative AI head watermark, spans the middle column */}
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[34%] -translate-x-1/2 opacity-40 lg:block">
          <Image
            src="/images/services/digital-business-solutions/ai-head-watermark.png"
            alt=""
            fill
            unoptimized
            className="object-contain object-top"
          />
        </div>

        <div className="relative grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <CategoryChecklistCard
              key={category.title}
              icon={category.icon}
              image={category.image}
              title={category.title}
              items={category.items}
              featured={category.featured}
              delay={(i % 3) * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}