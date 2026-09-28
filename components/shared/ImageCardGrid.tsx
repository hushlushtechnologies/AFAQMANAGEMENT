"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export type ImageCard = {
  title: string;
  description: string;
  image: string;
};

type ImageCardGridProps = {
  eyebrow: string;
  heading: React.ReactNode;
  paragraph: string;
  cards: ImageCard[];
  closingText: string;
  closingCtaLabel: string;
  closingCtaHref: string;
};

export default function ImageCardGrid({
  eyebrow,
  heading,
  paragraph,
  cards,
  closingText,
  closingCtaLabel,
  closingCtaHref,
}: ImageCardGridProps) {
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
          <span className="text-sm font-semibold text-primary">{eyebrow}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
        >
          {heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          {paragraph}
        </motion.p>

        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: "easeOut" }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="relative flex flex-1 flex-col bg-card px-6 pb-6 pt-8">
              <div className="absolute -top-6 left-6 flex items-center gap-2">
                <span className="h-6 w-0.5 rounded-full bg-primary" />
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary bg-card text-primary">
                  <ArrowUpRight size={16} />
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-14 flex max-w-7xl flex-col gap-6 rounded-2xl border border-border bg-card px-8 py-6 sm:mx-6 md:flex-row md:items-center md:justify-between lg:mx-auto"
      >
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
            <ArrowUpRight size={18} />
          </span>
          <span className="h-9 w-px bg-border" />
          <p className="text-base text-foreground">{closingText}</p>
        </div>
        <Link
          href={closingCtaHref}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
        >
          {closingCtaLabel}
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}