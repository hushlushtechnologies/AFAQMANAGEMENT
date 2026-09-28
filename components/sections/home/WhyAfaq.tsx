"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { FaFacebookF } from "react-icons/fa6";
import FeatureCard from "../shared/FeatureCard";

const features = [
  {
    image: "/images/why-afaq/strategic-expertise.png",
    title: "Strategic Expertise",
    description: "Solutions designed around your business and investment objectives with a focus on outcomes that matter",
  },
  {
    image: "/images/why-afaq/uae-market-understanding.png",
    title: "UAE Market Understanding",
    description: "Deep knowledge of the UAE's business landscape, regulations and market dynamics that gives you a real advantage",
  },
  {
    image: "/images/why-afaq/end-to-end-support.png",
    title: "End to End Support",
    description: "From initial planning and set up to execution and ongoing support, we are with you at every step of the journey",
  },
  {
    image: "/images/why-afaq/transparent-approach.png",
    title: "Transparent Approach",
    description: "Clear communication, ethical practices and transparent processes that help you make confident decisions",
  },
  {
    image: "/images/why-afaq/multi-industry-networks.png",
    title: "Multi Industry Networks",
    description: "A strong ecosystem of partners and experts across multiple industries to support your diverse business needs",
  },
  {
    image: "/images/why-afaq/growth-focused-solutions.png",
    title: "Growth Focused Solutions",
    description: "Practical strategies and innovative solutions designed to drive sustainable growth and long term value",
  },
];

export default function WhyAfaq() {
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
          More Than Consultancy.
          <br />
          A Strategic <span className="text-primary">Partner for Growth.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground md:text-base"
        >
          We go beyond traditional advisory. Our approach is built on expertise,
          transparency and commitment to your long term success
        </motion.p>

        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <FeatureCard key={feature.title} {...feature} delay={i * 0.08} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-8 flex max-w-7xl flex-col gap-6 rounded-2xl border border-border bg-gradient-card px-8 py-6 sm:mx-6 md:flex-row md:items-center md:justify-between lg:mx-auto"
      >
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
            <Phone size={18} />
          </span>
          <span className="hidden h-8 w-px bg-border sm:block" />
          <p className="text-sm text-foreground md:text-base">
            We don&apos;t just provide services - we build partnerships that
            create lasting impact
          </p>
        </div>
        <Link
          href="/contact-us"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
        >
          Connect with Us
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}