"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TriangleAlert, ArrowRight, Check, Globe, Landmark, Minus, ThumbsDown, ThumbsUp, X } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import type { FreezoneData } from "@/lib/freezones/types";

export function FreezoneBanking({ data }: { data: FreezoneData }) {
  const b = data.banking;
  if (!b) return null;
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="border-l-2 border-primary pl-4">
          <span className="text-sm font-semibold text-primary">Banking</span>
        </div>
        <h2 className="font-heading mt-5 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl">
          {b.heading}
        </h2>
        <div className="mt-5 space-y-4 border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {b.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <Link
          href="/contact-us"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
        >
          Get banking support
          <ArrowRight size={15} />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative self-center overflow-hidden rounded-3xl border border-primary/40 bg-gradient-card p-8"
      >
        <div aria-hidden className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-gold text-background">
            <Landmark size={20} />
          </span>
          <p className="font-heading text-xl text-foreground">Banking snapshot</p>
        </div>
        <dl className="relative mt-6">
          {b.snapshot.map((row) => (
            <div key={row.label} className="flex items-start justify-between gap-6 border-b border-border/60 py-3.5 last:border-0">
              <dt className="text-sm text-muted-foreground">{row.label}</dt>
              <dd className="text-right text-sm font-semibold text-foreground">{row.value}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}

const statusStyle = {
  yes: { icon: Check, cls: "bg-primary/15 text-primary" },
  partial: { icon: Minus, cls: "bg-accent-blue/15 text-accent-blue" },
  warn: { icon: TriangleAlert, cls: "bg-accent-orange/15 text-accent-orange" },
  no: { icon: X, cls: "bg-red-500/15 text-red-400" },
} as const;

export function FreezoneFeatures({ data, slot = "late" }: { data: FreezoneData; slot?: "early" | "late" }) {
  const { features, prosCons } = data;
  const showFeatures = !!features && (features.placement ?? "late") === slot;
  const showPros = !!prosCons && (prosCons.placement ?? "late") === slot;
  if (!showFeatures && !showPros) return null;
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      {showFeatures && features && (
        <>
          <SectionHeader eyebrow={features.eyebrow ?? "At a Glance"} heading={features.heading} />
          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-3 px-6 md:grid-cols-2">
            {features.items.map((f, i) => {
              const { icon: Icon, cls } = statusStyle[f.status];
              return (
                <motion.div
                  key={f.text}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card/70 px-5 py-3.5"
                >
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${cls}`}>
                    <Icon size={14} />
                  </span>
                  <span className="text-sm text-foreground">{f.text}</span>
                </motion.div>
              );
            })}
          </div>
        </>
      )}

      {showPros && prosCons && (
        <div className={showFeatures ? "mt-24" : ""}>
          <SectionHeader eyebrow={prosCons.eyebrow ?? "Pros & Cons"} heading={prosCons.heading} />
          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 lg:grid-cols-2">
            {[
              { title: prosCons.prosTitle ?? "What we like", items: prosCons.pros, Icon: prosCons.neutral ? Landmark : ThumbsUp, tone: "text-primary", border: "border-primary/40", dot: "bg-primary" },
              prosCons.neutral
                ? { title: prosCons.consTitle ?? "Alternatively", items: prosCons.cons, Icon: Globe, tone: "text-accent-blue", border: "border-accent-blue/40", dot: "bg-accent-blue" }
                : { title: prosCons.consTitle ?? "Watch out for", items: prosCons.cons, Icon: ThumbsDown, tone: "text-accent-orange", border: "border-accent-orange/40", dot: "bg-accent-orange" },
            ].map(({ title, items, Icon, tone, border, dot }, ci) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: ci * 0.12 }}
                className={`rounded-3xl border ${border} bg-gradient-card p-8`}
              >
                <p className={`flex items-center gap-3 font-heading text-xl ${tone}`}>
                  <Icon size={20} />
                  {title}
                </p>
                <ul className="mt-6 space-y-3.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground">
                      <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          {prosCons.note && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto mt-6 max-w-6xl overflow-hidden rounded-3xl border border-primary/40 bg-card p-8 sm:mx-6 lg:mx-auto"
            >
              <div aria-hidden className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
              <p className="relative font-heading text-xl text-primary">{prosCons.note.title}</p>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{prosCons.note.text}</p>
            </motion.div>
          )}
        </div>
      )}
    </section>
  );
}
