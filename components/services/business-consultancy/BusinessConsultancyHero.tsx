"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, Users, BarChart3, Handshake, LucideIcon } from "lucide-react";

const stats: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Globe2, title: "UAE Market Expertise", description: "Local knowledge, real advantage" },
  { icon: Users, title: "500+ Businesses Advised", description: "Across multiple industries and business stages" },
  { icon: BarChart3, title: "Data Driven Strategies", description: "Insights that lead to smarter decisions" },
  { icon: Handshake, title: "End to End Support", description: "From strategy to successful execution" },
];

export default function BusinessConsultancyHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/services/business-consultancy/hero-bg.png"
        alt="Abstract golden spiral representing strategic growth"
        fill
        priority
        unoptimized
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/40" />

      <div className="relative mx-auto max-w-3xl px-6 pb-16 pt-24 text-center lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block border-l-2 border-primary pl-4"
        >
          <span className="text-sm font-semibold text-primary">Business Consultancy</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-4xl font-light leading-[1.2] text-foreground sm:text-5xl md:text-6xl"
        >
          Strategy That
          <br />
          Moves Business Forward.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          We partner with businesses across the UAE to solve complex
          challenges, unlock new opportunities and build strategies that
          drive sustainable growth and long term value
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
          >
            Book a Consultation
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/services"
            className="rounded-full border-2 border-accent-blue px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-blue hover:shadow-[0_0_24px_rgba(29,123,224,0.45)]"
          >
            Explore More Service
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto mb-16 flex max-w-7xl flex-col gap-8 rounded-2xl border border-border bg-card px-8 py-6 sm:mx-6 sm:flex-row sm:flex-wrap sm:justify-between lg:mx-auto"
      >
        {stats.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
              <Icon size={18} />
            </span>
            <div>
              <span className="block text-base font-semibold text-foreground">{title}</span>
              <span className="mt-1 block max-w-[200px] text-sm leading-relaxed text-muted-foreground">
                {description}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}