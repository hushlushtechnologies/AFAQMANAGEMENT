"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "The Idea",
    subtitle: "Opportunities need the right strategy",
    description:
      "We saw a gap between ambition and real opportunity — businesses needed guidance, investors needed clarity. The idea was simple: bridge the two with insight, trust, and purpose.",
    image: "/images/about/the-idea.jpg",
  },
  {
    title: "The Connection",
    subtitle: "Bringing the right people together.",
    description:
      "We created a platform where investors, entrepreneurs, businesses, and experts come together to explore, evaluate, and unlock meaningful opportunities",
    image: "/images/about/the-connection.jpg",
  },
  {
    title: "The Evolution",
    subtitle: "From consultancy to a business ecosystem",
    description:
      "Our capabilities grew into a diverse ecosystem of companies across the nation — spanning investment, real estate, technology, interiors, hospitality, events, automotive, and more — creating greater value, connection, and impact.",
    image: "/images/about/the-evolution.jpg",
  },
  {
    title: "The Future",
    subtitle: "Building what comes next.",
    description:
      "Our journey continues with one clear ambition — to strengthen the connection between capital, businesses, expertise, and opportunities across the UAE and the wider GCC",
    image: "/images/about/the-future.jpg",
  },
];

export default function OurStory() {
  return (
    <section id="our-story" className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="font-heading text-3xl font-light leading-[1.25] text-foreground sm:text-4xl md:text-5xl"
        >
          Every Opportunity Has a Story. Our
          <br />
          <span className="text-primary">Began with a Connection.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          Afaq Al Khaleej Management was founded on a simple belief: the
          right opportunity becomes more powerful when it is supported by
          the right strategy, connections, and expertise
        </motion.p>

        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-primary/50 hover:bg-surface hover:shadow-[0_0_40px_rgba(235,184,17,0.15)]"
          >
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <span className="mt-2 block text-sm font-semibold leading-snug text-primary">
                {step.subtitle}
              </span>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {step.description}
              </p>
            </div>

            <div className="relative h-36 w-full sm:h-44">
              <Image
                src={step.image}
                alt={step.title}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* closing CTA bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-14 flex max-w-7xl flex-col gap-6 rounded-2xl border border-border bg-gradient-card px-8 py-6 sm:mx-6 md:flex-row md:items-center md:justify-between lg:mx-auto"
      >
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.svg" alt="AFAQ" width={48} height={48} className="h-12 w-12 shrink-0 object-contain" />
            <span className="hidden h-9 w-px bg-primary sm:block" />
          </div>
          <p className="text-base font-heading font-light leading-tight text-foreground sm:text-lg">
            Ambition Meets Strategy.
            <br />
            <span className="text-primary">Opportunities</span> Drives Growth.
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