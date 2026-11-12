"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Calculator, Check } from "lucide-react";
import type { FreezoneData } from "@/lib/freezones/types";

type Cost = FreezoneData["cost"];

export default function FreezoneEstimator({ cost }: { cost: Cost }) {
  const est = cost.estimator;
  const [selected, setSelected] = useState(1);
  if (!est || !cost.tiers) return null;
  const option = est.options[selected] ?? est.options[0];
  const tier = cost.tiers[option.tier];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="mx-auto mt-14 max-w-6xl px-6"
    >
      <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-primary/40 bg-gradient-card lg:grid-cols-[1.1fr_1fr]">
        <div className="p-8 sm:p-10">
          <p className="flex items-center gap-3 font-heading text-2xl font-light text-foreground">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-gold text-background">
              <Calculator size={20} />
            </span>
            {est.title}
          </p>
          <p className="mt-6 text-sm font-semibold text-muted-foreground">{est.label}</p>
          <div role="radiogroup" className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {est.options.map((o, i) => {
              const active = i === selected;
              return (
                <button
                  key={o.label}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setSelected(i)}
                  className={`rounded-xl border px-4 py-3 text-left text-sm transition-all duration-200 ${
                    active
                      ? "border-primary bg-primary/15 font-semibold text-primary"
                      : "border-border text-foreground hover:border-primary/50"
                  }`}
                >
                  {o.label}
                </button>
              );
            })}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground/80">{est.note}</p>
        </div>

        <div className="relative border-t border-border bg-background/40 p-8 sm:p-10 lg:border-l lg:border-t-0">
          <div aria-hidden className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
          <AnimatePresence mode="wait">
            <motion.div
              key={option.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="relative"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Illustrative match</p>
              <p className="font-heading mt-2 text-3xl font-light text-foreground">{tier.name}</p>
              {tier.price && <p className="text-shine font-heading mt-2 text-4xl">{tier.price}</p>}
              <p className="mt-1 text-sm text-muted-foreground">{option.annual}</p>
              <ul className="mt-6 space-y-2.5">
                {tier.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact-us"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
              >
                Request My Written Quote
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
