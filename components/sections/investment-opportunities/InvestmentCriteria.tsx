"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Crown, Target, ShieldCheck, MapPin, Handshake, Users, Trophy, LucideIcon } from "lucide-react";

type Criterion = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
};

const criteria: Criterion[] = [
  {
    icon: TrendingUp,
    title: "High Growth",
    description: "Strong market potential with the ability to scale rapidly and profitably",
    image: "/images/investment-opportunities/high-growth.png",
  },
  {
    icon: DollarSign,
    title: "Profitable Model",
    description: "Proven or clearly defined business model with sustainable unit economics",
    image: "/images/investment-opportunities/profitable-model.png",
  },
  {
    icon: Crown,
    title: "Strong Leadership",
    description: "Visionary founders with integrity, passion and the capacity to execute and grow",
    image: "/images/investment-opportunities/strong-leadership.png",
  },
  {
    icon: Target,
    title: "Market Relevant",
    description: "Solving real problems with products or services that customers value and need",
    image: "/images/investment-opportunities/market-relevant.png",
  },
  {
    icon: ShieldCheck,
    title: "Scalable & Defensible",
    description: "Businesses with strong moats, competitive advantages and high barriers to entry",
    image: "/images/investment-opportunities/scalable-defensible.png",
  },
  {
    icon: MapPin,
    title: "Regionally Focused",
    description: "UAE and GCC focused businesses with potential to expand regionally and globally",
    image: "/images/investment-opportunities/regionally-focused.png",
  },
];

const closingPoints = [
  { icon: Handshake, label: "Aligned Interests Long Term Partnership" },
  { icon: Users, label: "Shared Vision. Shared Success" },
  { icon: Trophy, label: "Building Value. Creating Legacy" },
];

export default function InvestmentCriteria() {
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="inline-block border-l-2 border-primary pl-4"
        >
          <span className="text-sm font-semibold text-primary">What We Invest In</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
        >
          We Invest in Businesses
          <br />
          That <span className="text-primary">Build the Future</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          Afaq Al Khaleej Management invests in high potential businesses
          across the UAE and the GCC with strong fundamentals, scalable
          models, and ambitious founders
        </motion.p>

        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {criteria.map(({ icon: Icon, title, description, image }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: "easeOut" }}
            className="group relative h-56 overflow-hidden rounded-2xl border border-border"
          >
            <Image
              src={image}
              alt={title}
              fill
              unoptimized
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />

            <div className="relative z-10 flex h-full flex-col justify-between p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary text-primary">
                <Icon size={18} />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* closing points bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-8 flex max-w-7xl flex-col gap-8 rounded-2xl border border-border bg-card px-8 py-6 sm:mx-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-14 lg:mx-auto"
      >
        {closingPoints.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
              <Icon size={18} />
            </span>
            <span className="max-w-[220px] text-sm font-medium leading-snug text-foreground">{label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}