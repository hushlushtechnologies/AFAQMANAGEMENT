"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Building2, CircleAlert, FileCheck, Globe, ShieldCheck, User } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import type { FreezoneData } from "@/lib/freezones/types";

const goldBtn =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]";

const groupIcons = [User, Globe, Building2];

export function FreezoneDocuments({ data }: { data: FreezoneData }) {
  const { documents } = data;
  if (!documents) return null;

  // grouped layout (e.g. resident / non-resident / corporate)
  if (documents.groups) {
    return (
      <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
        <SectionHeader eyebrow={`${data.name} Documents`} heading={documents.heading} paragraph={documents.note} />
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-6 lg:grid-cols-3">
          {documents.groups.map((g, gi) => {
            const Icon = groupIcons[gi % groupIcons.length];
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: gi * 0.12 }}
                className="rounded-3xl border border-border bg-gradient-card p-7 transition-colors duration-300 hover:border-primary/50"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-gold text-background">
                    <Icon size={19} />
                  </span>
                  <h3 className="text-base font-semibold leading-snug text-foreground">{g.title}</h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                      <FileCheck size={16} className="mt-0.5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>
    );
  }

  // flat list with image
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
          <Image
            src={documents.image ?? "/images/services/pro-government-services/document-legal.png"}
            alt={`Preparing documents for ${data.name} company formation`}
            fill
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-primary/40 bg-card px-5 py-4 shadow-xl sm:left-10">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-background">
            <ShieldCheck size={18} />
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">Checked before filing</p>
            <p className="text-xs text-muted-foreground">We review your documents before submission</p>
          </div>
        </div>
      </motion.div>

      <div className="pt-6 lg:pt-0">
        <div className="border-l-2 border-primary pl-4">
          <span className="text-sm font-semibold text-primary">{data.name} Documents</span>
        </div>
        <h2 className="font-heading mt-5 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl">
          {documents.heading}
        </h2>
        {documents.intro && (
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{documents.intro}</p>
        )}
        <ul className="mt-7 space-y-3">
          {documents.items?.map((d, i) => (
            <motion.li
              key={d}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="flex items-start gap-3 rounded-xl border border-border bg-card/60 px-4 py-3"
            >
              <FileCheck size={18} className="mt-0.5 shrink-0 text-primary" />
              <span className="text-sm text-foreground">{d}</span>
            </motion.li>
          ))}
        </ul>
        {documents.note && (
          <p className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            <CircleAlert size={16} className="mt-0.5 shrink-0 text-accent-blue" />
            {documents.note}
          </p>
        )}
      </div>
    </section>
  );
}

export function FreezoneProcess({ data }: { data: FreezoneData }) {
  const { process } = data;
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <SectionHeader eyebrow={`Company Formation in ${data.name}`} heading={process.heading} paragraph={process.intro} />

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 transition-colors duration-300 hover:border-primary/50"
          >
            <span className="pointer-events-none absolute -right-2 -top-4 font-heading text-7xl font-light text-primary/10 transition-colors duration-300 group-hover:text-primary/20">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="relative flex items-center gap-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Step {i + 1}</p>
              {s.when && (
                <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] font-semibold text-primary">{s.when}</span>
              )}
            </div>
            <h3 className="relative mt-2 text-lg font-semibold leading-snug text-foreground">{s.title}</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className={`mx-auto mt-10 flex max-w-6xl flex-col gap-6 rounded-2xl px-8 py-6 sm:mx-6 md:flex-row md:items-center md:justify-between lg:mx-auto ${
          process.caution ? "border border-accent-blue/40 bg-accent-blue/10" : "border border-border bg-card"
        }`}
      >
        {process.caution ? (
          <div className="flex items-start gap-3">
            <CircleAlert size={20} className="mt-0.5 shrink-0 text-accent-blue" />
            <div>
              <p className="text-sm font-semibold text-foreground">{process.cautionTitle ?? "Confirm each stage"}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{process.caution}</p>
            </div>
          </div>
        ) : (
          <p className="font-heading text-xl font-light text-foreground">Ready to start your {data.shortName} company?</p>
        )}
        <Link href="/contact-us" className={goldBtn}>
          Start My {data.shortName} Company
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}
