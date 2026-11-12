"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, CircleAlert } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import type { FreezoneData } from "@/lib/freezones/types";

export default function FreezoneLicenceTypes({ data }: { data: FreezoneData }) {
  const lt = data.licenceTypes;
  if (!lt) return null;
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <SectionHeader eyebrow="Licence Types" heading={lt.heading} paragraph={lt.intro} />
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {lt.items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
            whileHover={{ y: -5 }}
            className="group rounded-2xl border border-border bg-gradient-card p-7 transition-colors duration-300 hover:border-primary/50"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
              <BadgeCheck size={19} />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            {item.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span key={t} className="rounded-full border border-primary/40 px-3 py-1 text-xs text-primary">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {lt.note && (
        <div className="mx-auto mt-6 max-w-7xl px-6">
          <div className="flex items-start gap-3 rounded-2xl border border-accent-blue/40 bg-accent-blue/10 px-6 py-4">
            <CircleAlert size={18} className="mt-0.5 shrink-0 text-accent-blue" />
            <p className="text-sm leading-relaxed text-muted-foreground">{lt.note}</p>
          </div>
        </div>
      )}

      {/* activity help CTA lives here when the page has no separate activities section */}
      {!data.activities && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-10 flex max-w-6xl flex-col gap-6 rounded-2xl border border-border bg-card px-8 py-6 sm:mx-6 md:flex-row md:items-center md:justify-between lg:mx-auto"
        >
          <div>
            <p className="font-heading text-xl font-light text-foreground">Not sure which activities to combine?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              We map your business model to compatible activity codes so you stay within the included activities and avoid approval delays.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
          >
            Check My Activities
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      )}
    </section>
  );
}
