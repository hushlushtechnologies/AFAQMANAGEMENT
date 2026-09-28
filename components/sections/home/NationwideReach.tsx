"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, Building2, ShieldCheck, LineChart } from "lucide-react";

const infoCards = [
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Consultancy, feasibility, digital solutions and strategic support for growing companies",
  },
  {
    icon: Building2,
    title: "Business Setup",
    description: "Support for mainland and freezone company formation and licensing",
  },
  {
    icon: ShieldCheck,
    title: "PRO & Government Services",
    description: "Assistance with visas, approvals, documentation licensing and corporate requirements",
  },
  {
    icon: LineChart,
    title: "Investment Advisory",
    description: "Strategic guidance for evaluating and pursuing opportunities across the UAE",
  },
];

// percentages are relative to the map image container — measured directly
// against the real exported map asset so each dot sits on the correct emirate
const emirates = [
  { name: "Ras Al Khaimah", top: "19%", left: "64%" },
  { name: "Umm Al Quwain", top: "27%", left: "63%" },
  { name: "Sharjah", top: "35%", left: "62%" },
  { name: "Dubai", top: "48%", left: "58%" },
  { name: "Fujairah", top: "69%", left: "73%" },
  { name: "Abu Dhabi", top: "73%", left: "42%" },
];

export default function NationwideReach() {
  return (
    <section className="  my-16  lg:my- py-10 bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        {/* left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="border-l-2 border-primary pl-4"
          >
            <span className="text-sm font-semibold text-primary">UAE - Wide Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading mt-6 text-3xl font-light leading-[1.2] sm:text-4xl md:text-5xl"
          >
            <span className="text-foreground">Local Knowledge</span>
            <br />
            <span className="text-primary">Nationwide Reach.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            From the UAE&apos;s leading commercial hubs to emerging business
            destinations, Afaq Al Khaleej Management supports investors,
            entrepreneurs, and companies with strategic guidance and business
            solutions across all seven emirates
          </motion.p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {infoCards.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-4 rounded-2xl border border-border bg-border p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                  <Icon size={16} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* right column — map + markers */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto aspect-[4/3] w-full max-w-2xl"
        >
          <Image
            src="/images/uae-map.png"
            alt="Map of the UAE"
            fill
            unoptimized
            className="object-contain"
          />

          {emirates.map((emirate, i) => (
            <motion.div
              key={emirate.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              style={{ top: emirate.top, left: emirate.left }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex flex-col items-center gap-1">
                <span className="whitespace-nowrap text-[10px] font-medium text-foreground sm:text-xs">
                  {emirate.name}
                </span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}