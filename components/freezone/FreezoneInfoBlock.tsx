"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { FreezoneData } from "@/lib/freezones/types";

export default function FreezoneInfoBlock({ data }: { data: FreezoneData }) {
  const b = data.infoBlock;
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
          <span className="text-sm font-semibold text-primary">{b.eyebrow}</span>
        </div>
        <h2 className="font-heading mt-5 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl">
          {b.heading}
        </h2>
        <div className="mt-5 space-y-4 border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {b.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        {b.stats && (
          <div className="mt-8 grid grid-cols-2 gap-4">
            {b.stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card px-5 py-4">
                <p className="text-shine font-heading text-3xl">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {b.list && (
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="self-center rounded-3xl border border-border bg-gradient-card p-8"
        >
          {b.listTitle && <p className="font-heading text-xl text-foreground">{b.listTitle}</p>}
          <ul className="mt-5 space-y-3.5">
            {b.list.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check size={12} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </section>
  );
}
