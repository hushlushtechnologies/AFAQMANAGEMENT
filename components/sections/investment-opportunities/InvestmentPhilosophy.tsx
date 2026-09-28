"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    number: "01",
    title: "Disciplined Approach",
    description:
      "We follow a structured evaluation process to assess businesses with clarity and objectivity",
    image: "/images/investment-opportunities/disciplined-approach.png",
  },
  {
    number: "02",
    title: "Risk Aware",
    description:
      "We understand risk and focus on opportunities with strong fundamentals and realistic growth potential",
    image: "/images/investment-opportunities/risk-aware.png",
  },
  {
    number: "03",
    title: "Partner Mindset",
    description:
      "We see ourselves as partners, not just investors — committed to your growth, not just financial returns",
    image: "/images/investment-opportunities/partner-mindset.png",
  },
  {
    number: "04",
    title: "Sustainable Growth",
    description:
      "We invest for the long term, focused on building sustainable businesses that create lasting value",
    image: "/images/investment-opportunities/sustainable-growth.png",
  },
];

function PhilosophyCard({
  card,
  delay,
}: {
  card: (typeof cards)[number];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div className="p-5">
        <span className="text-xl font-bold text-foreground">{card.number}</span>
        <h3 className="mt-2 text-lg font-semibold text-primary">
          {card.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {card.description}
        </p>
      </div>
      <div className="relative h-44 w-full sm:h-52">
        <Image
          src={card.image}
          alt={card.title}
          fill
          unoptimized
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}

export default function InvestmentPhilosophy() {
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8">
          {/* left — copy only */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              className="border-l-2 border-primary pl-4"
            >
              <span className="text-sm font-semibold text-primary">
                Our Investment Philosophy
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading mt-6 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
            >
              We Invest in <span className="text-primary">Potential,</span>
              <br />
              Not Just Ideas.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-muted-foreground md:text-base"
            >
              At Afaq Al Khaleej Management, we believe great businesses are
              built on insight, resilience, and execution. We invest in
              opportunities where we see the potential to create long term value
              and meaningful impact together
            </motion.p>
          </div>

          {/* right — staggered 2x2 cards, sitting on top of the full-width image behind them */}
          <div className="mt-4 lg:mt-0">
            <div className="relative z-10 grid grid-cols-2 gap-6">
              <div className="lg:mt-10">
                <PhilosophyCard card={cards[0]} delay={0} />
              </div>
              <div>
                <PhilosophyCard card={cards[1]} delay={0.1} />
              </div>
              <div className="col-span-2 grid grid-cols-2 gap-6 lg:mt-8">
                <PhilosophyCard card={cards[2]} delay={0.2} />
                <PhilosophyCard card={cards[3]} delay={0.3} />
              </div>
            </div>
          </div>
        </div>

        {/* feature image — spans the FULL width of the section starting at the same
            left edge as the heading text, ending underneath card 01, not confined
            to either grid column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden overflow-hidden rounded-[2rem] lg:absolute lg:left-0 lg:top-[320px] lg:z-0 lg:block lg:h-[460px] lg:w-[70%]"
        >
          <Image
            src="/images/investment-opportunities/potential-hero.png"
            alt="Growth and potential visualized as coins and plants"
            fill
            unoptimized
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* closing philosophy bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto mt-14 flex max-w-7xl flex-col gap-6 rounded-2xl border border-border bg-card px-8 py-6 sm:mx-6 md:flex-row md:items-center md:justify-between lg:mx-auto"
      >
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo.svg"
            alt="AFAQ"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
          />
          <span className="hidden h-9 w-px bg-border sm:block" />
          <p className="text-base font-heading font-light leading-tight text-foreground sm:text-lg">
            Our Philosophy is simple: Back the{" "}
            <span className="text-primary">right Business.</span>
            <br />
            Build{" "}
            <span className="text-primary">Lasting Value. Grow Together</span>
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
