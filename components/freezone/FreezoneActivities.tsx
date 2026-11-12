"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Ban } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import type { FreezoneData } from "@/lib/freezones/types";
import { fzIcons } from "./icons";

export default function FreezoneActivities({ data }: { data: FreezoneData }) {
  const { activities } = data;
  if (!activities) return null;
  // service pages (accounting, tax, support) get service-oriented CTA copy
  const isService = data.category === "Accounting & Tax" || data.category === "Business Support";
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <SectionHeader eyebrow={activities.eyebrow ?? `${data.name} Activities`} heading={activities.heading} paragraph={activities.intro} />

      {activities.groups && (
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.groups.map((g, i) => {
            const Icon = fzIcons[g.icon];
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-7 transition-colors duration-300 hover:border-primary/50"
              >
                <span className="pointer-events-none absolute -right-1 -top-3 font-heading text-7xl font-light text-primary/10 transition-colors duration-300 group-hover:text-primary/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-background">
                  <Icon size={21} />
                </span>
                <h3 className="relative mt-5 text-lg font-semibold text-foreground">{g.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{g.text}</p>
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {g.tags.map((t) => (
                    <span key={t} className="rounded-full border border-primary/40 px-3 py-1 text-xs text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                {g.href && (
                  <Link
                    href={g.href}
                    className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
                  >
                    {g.href === "/contact-us" ? `Ask about ${g.title}` : g.href.startsWith("/freezone/") ? `${g.title} details` : `Explore ${g.title}`}
                    <ArrowRight size={15} />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      )}

      {activities.lists && (
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-6 lg:grid-cols-2">
          {activities.lists.map((list, li) => (
            <motion.div
              key={list.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: li * 0.12 }}
              className="rounded-3xl border border-border bg-gradient-card p-8"
            >
              <p className="font-heading text-xl text-foreground">{list.title}</p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {list.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    className="rounded-full border border-primary/30 bg-background/40 px-3.5 py-1.5 text-sm text-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {activities.notAvailable && (
        <div className="mx-auto mt-6 flex max-w-7xl items-start gap-3 px-6">
          <div className="flex w-full items-start gap-3 rounded-2xl border border-accent-orange/40 bg-accent-orange/10 px-6 py-4">
            <Ban size={18} className="mt-0.5 shrink-0 text-accent-orange" />
            <p className="text-sm leading-relaxed text-muted-foreground">{activities.notAvailable}</p>
          </div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-12 flex max-w-6xl flex-col gap-6 rounded-2xl border border-border bg-card px-8 py-6 sm:mx-6 md:flex-row md:items-center md:justify-between lg:mx-auto"
      >
        <div>
          <p className="font-heading text-xl font-light text-foreground">
            {isService ? "Not sure which services you need?" : "Not sure which activity codes you need?"}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {isService
              ? "Tell us about your business and current records — we'll recommend the right scope."
              : "Describe your products, services and customers — we'll check the proposed activity selection before you commit."}
          </p>
        </div>
        <Link
          href="/contact-us"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
        >
          {isService ? "Get a Free Review" : "Check My Activities"}
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}
