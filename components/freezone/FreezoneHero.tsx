"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import type { FreezoneData } from "@/lib/freezones/types";
import { WHATSAPP_URL } from "./icons";

export default function FreezoneHero({ data }: { data: FreezoneData }) {
  const { hero, stats } = data;
  return (
    <section className="relative overflow-hidden">
      <Image src={hero.image} alt={data.name} fill priority unoptimized className="animate-hero-zoom object-cover" />
      <div className="absolute inset-0 bg-background/75" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 pb-12 pt-20 text-center lg:pt-28">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-border bg-background/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm"
        >
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={12} />
          <span>{data.category ?? "Freezone"}</span>
          <ChevronRight size={12} />
          <span className="text-primary">{data.shortName}</span>
        </motion.nav>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-4 text-4xl font-light leading-[1.2] text-foreground sm:text-5xl md:text-6xl"
        >
          {hero.title}
          <br />
          <span className="text-shine">{hero.highlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-base text-foreground/90 md:text-lg"
        >
          {hero.subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          {hero.intro}
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-7 flex flex-wrap justify-center gap-2.5"
        >
          {hero.chips.map((c) => (
            <li key={c} className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/50 px-4 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm sm:text-sm">
              <Check size={13} className="text-primary" />
              {c}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="#cost"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
          >
            Check Package Costs
            <ArrowRight size={16} />
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-accent-blue px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-blue hover:shadow-[0_0_24px_rgba(29,123,224,0.45)]"
          >
            <FaWhatsapp size={17} />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>

      {/* stats */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative mx-auto mb-6 grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mx-6 lg:mx-auto lg:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-card/90 px-6 py-6 text-center backdrop-blur-sm">
            <p className="text-shine font-heading text-3xl md:text-4xl">{s.value}</p>
            <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
