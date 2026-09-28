"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import DualAccentBadge from "@/components/shared/DualAccentBadge";

type SetupCard = {
  eyebrow: string;
  title: string;
  paragraph: string;
  features: string[];
  image: string;
  accent: "blue" | "gold";
};

const cards: SetupCard[] = [
  {
    eyebrow: "For Mainland",
    title: "UAE Mainland",
    paragraph: "Ideal for businesses seeking broad access to the UAE market and flexibility to operate across multiple sectors and locations",
    features: [
      "Mainland Company Formation",
      "Commercial / Professional Activities",
      "Trade License Assistance",
      "Office & Ejari Support",
      "Employee Visa Assistance",
      "Government Approvals",
    ],
    image: "/images/services/company-formation/mainland.jpg",
    accent: "blue",
  },
  {
    eyebrow: "For Free Zone",
    title: "UAE Free Zone",
    paragraph: "Suitable for businesses looking for setup options within one of the UAE's specialized free zone ecosystems",
    features: [
      "Freezone Company Formation",
      "License Selection",
      "Establishment Documentation",
      "Visa Assistance",
      "Renewal Support",
    ],
    image: "/images/services/company-formation/freezone.jpg",
    accent: "gold",
  },
];

function SetupCardPanel({ card, delay }: { card: SetupCard; delay: number }) {
  const isBlue = card.accent === "blue";
  const accentText = isBlue ? "text-accent-blue" : "text-primary";
  const accentBorder = isBlue ? "border-accent-blue" : "border-primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay }}
      className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border sm:aspect-[4/5]"
    >
      <Image src={card.image} alt={card.title} fill unoptimized className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />

      <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">
        <div className={`border-l-2 ${accentBorder} pl-3`}>
          <span className={`text-sm font-semibold ${accentText}`}>{card.eyebrow}</span>
        </div>

        <h3 className="font-heading mt-3 text-2xl font-light text-foreground sm:text-3xl">{card.title}</h3>

        <p className={`mt-4 border-l-2 ${accentBorder}/50 pl-3 text-sm leading-relaxed text-muted-foreground`}>
          {card.paragraph}
        </p>

        <div className="mt-6 space-y-4">
          {card.features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${accentBorder} ${accentText}`}>
                <Check size={14} />
              </span>
              <span className="text-sm font-medium text-foreground sm:text-base">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function MainlandVsFreezone() {
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
          <span className="text-sm font-semibold text-primary">Choose your Business Setup</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
        >
          Mainland or Free Zone?
          <br />
          <span className="text-primary">We&apos;ll Help you Decide.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          Every business is unique. We help you choose the right jurisdiction
          and structure that aligns with your goals and operational needs.
        </motion.p>

        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <SetupCardPanel card={cards[0]} delay={0} />
        <SetupCardPanel card={cards[1]} delay={0.15} />

        <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <DualAccentBadge delay={0.4} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-14 flex max-w-7xl flex-col gap-6 rounded-2xl border border-border bg-card px-8 py-6 sm:mx-6 md:flex-row md:items-center md:justify-between lg:mx-auto"
      >
        <div className="flex items-center gap-4">
          <Image src="/images/logo.svg" alt="AFAQ" width={44} height={44} className="h-11 w-11 object-contain" />
          <span className="hidden h-9 w-px bg-border sm:block" />
          <p className="text-lg font-heading font-light text-foreground">Not Sure Which One?</p>
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