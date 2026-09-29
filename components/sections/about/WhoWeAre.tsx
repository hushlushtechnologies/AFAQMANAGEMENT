 "use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Users, Lightbulb, Building2, Handshake } from "lucide-react";
import MarqueeBanner from "@/components/ui/MarqueeBanner";

const paragraphs = [
  "Afaq Al Khaleej Management is a UAE based investment and business consultancy built to connect investors, entrepreneurs, and businesses with opportunities that support meaningful and sustainable growth.",
  "With expertise across investment advisory, business consultancy, company formation, feasibility studies, PRO and government services, and digital business solutions, we help clients navigate opportunities and business decisions with greater clarity.",
  "Our approach goes beyond traditional consultancy. We bring together strategy, market understanding, business connections, and execution support to help turn ideas and opportunities into a structured path for growth across the UAE and wider GCC markets",
];

const audiences = [
  { icon: Users, title: "Investors", description: "Seeking promising opportunities" },
  { icon: Lightbulb, title: "Entrepreneurs", description: "Turning ideas into sustainable business" },
  { icon: Building2, title: "Established Business", description: "Planning expansion and achieving long term growth" },
  { icon: Handshake, title: "Strategic Partner", description: "Creating mutually valuable opportunities" },
];

const marqueeItems = [
  "Verified High ROI Opportunities",
  "Business Setup Experts",
  "UAE Market Intelligence",
  "UAE-Wide Business Support",
  "Trusted Investor Connections",
  "Feasibility & Market Analysis",
  "Smarter Investment Decisions",
  "Building Sustainable Growth",
];

export default function WhoWeAre() {
  return (
    <section className="relative my-16 lg:my-24">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border bg-card p-8 lg:p-14"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14">
          {/* left — copy */}
          <div>
            <div className="border-l-2 border-primary pl-4">
              <span className="text-sm font-semibold text-primary">Who We Are</span>
            </div>

            <h2 className="font-heading mt-5 text-3xl font-light leading-[1.15] text-foreground sm:text-4xl md:text-[2.75rem]">
              Connecting Ambition
              <br />
              With the <span className="text-primary">Right Opportunities</span>
            </h2>

            <div className="mt-4 h-0.5 w-16 bg-primary" />

            <div className="mt-6 space-y-4">
              {paragraphs.map((text) => (
                <p key={text} className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {text}
                </p>
              ))}
            </div>

            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
            >
              Explore Our Expertise
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* right — empty spacer, keeps the text column at grid width; image is absolute below */}
          <div className="hidden lg:block" />
        </div>

        {/* photo + floating chart card — absolutely pinned to the bottom-right of the card */}
        <div className="absolute bottom-0 right-8 hidden w-full max-w-md lg:right-0 lg:block">
          <div className="relative h-[420px] w-3/4 overflow-hidden rounded-2xl sm:h-[500px] lg:h-[510px]">
            <Image
              src="/images/about/who-we-are-building.png"
              alt="Modern office towers in the UAE"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-6 -left-4 w-60 rounded-2xl border border-border bg-gradient-card p-5 shadow-xl sm:-left-20"
          >
            <span className="text-xs font-medium text-foreground">Investment Growth</span>
            <div className="mt-1 flex items-end justify-between gap-3">
              <span className="text-2xl font-bold text-primary">4 - 6% ROI</span>
              <div className="relative h-14 w-20 shrink-0">
                <Image
                  src="/images/investment-growth-chart.png"
                  alt="Investment growth chart"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* mobile/tablet — image falls back into normal flow below the text, stacked */}
        <div className="relative mx-auto mt-10 w-full max-w-md lg:hidden">
          <div className="relative h-[320px] w-full overflow-hidden rounded-2xl sm:h-[380px]">
            <Image
              src="/images/about/who-we-are-building.png"
              alt="Modern office towers in the UAE"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-6 left-4 w-56 rounded-2xl border border-border bg-gradient-card p-5 shadow-xl sm:left-6"
          >
            <span className="text-xs font-medium text-foreground">Investment Growth</span>
            <div className="mt-1 flex items-end justify-between gap-3">
              <span className="text-2xl font-bold text-primary">4 - 6% ROI</span>
              <div className="relative h-14 w-20 shrink-0">
                <Image
                  src="/images/investment-growth-chart.png"
                  alt="Investment growth chart"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* audience stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-8 flex max-w-7xl flex-col gap-8 rounded-2xl border border-border bg-gradient-card px-8 py-6 sm:flex-row sm:flex-wrap sm:justify-between"
      >
        {audiences.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
              <Icon size={18} />
            </span>
            <div>
              <span className="block text-base font-semibold text-foreground">{title}</span>
              <span className="mt-1 block max-w-[180px] text-sm leading-relaxed text-muted-foreground">
                {description}
              </span>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="mt-10">
        <MarqueeBanner items={marqueeItems} rotate />
      </div>
    </section>
  );
}