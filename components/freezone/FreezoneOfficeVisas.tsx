"use client";

import { motion } from "framer-motion";
import { Armchair, Building, Check, Laptop, MapPin } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import type { FreezoneData } from "@/lib/freezones/types";

const officeIcons = [Laptop, Armchair, Building];

export function FreezoneOffice({ data }: { data: FreezoneData }) {
  const office = data.office;
  if (!office) return null;
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="border-l-2 border-primary pl-4">
            <span className="text-sm font-semibold text-primary">{data.name} Office</span>
          </div>
          <h2 className="font-heading mt-5 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl">
            {office.heading}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">{office.intro}</p>
          <div className="mt-7 flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-background">
              <MapPin size={19} />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">{office.location.name}</p>
              <p className="text-xs text-muted-foreground">{office.location.address}</p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-4">
          {office.options.map((o, i) => {
            const Icon = officeIcons[i % officeIcons.length];
            return (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ x: 6 }}
                className="flex items-start gap-5 rounded-2xl border border-border bg-gradient-card p-6 transition-colors duration-300 hover:border-primary/50"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{o.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{o.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FreezoneVisas({ data }: { data: FreezoneData }) {
  const { visas } = data;
  if (!visas) return null;
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <SectionHeader eyebrow={`${data.name} Visa`} heading={visas.heading} paragraph={visas.intro} />

      {visas.chips && (
        <div className="mt-8 flex flex-wrap justify-center gap-3 px-6">
          {visas.chips.map((c) => (
            <span key={c} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm text-foreground">
              <Check size={14} className="text-primary" />
              {c}
            </span>
          ))}
        </div>
      )}

      {visas.stats && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mx-6 lg:mx-auto lg:grid-cols-4"
        >
          {visas.stats.map((s) => (
            <div key={s.label} className="bg-card px-6 py-6 text-center">
              <p className="text-shine font-heading text-3xl">{s.value}</p>
              <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
            </div>
          ))}
        </motion.div>
      )}

      {visas.types && (
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 px-6 md:grid-cols-2">
          {visas.types.map((t, i) => {
            const [title, ...rest] = t.split(" — ");
            return (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="flex items-start gap-3 rounded-2xl border border-border bg-gradient-card px-5 py-4"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                  <Check size={12} />
                </span>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{title}</span>
                  {rest.length > 0 && <> — {rest.join(" — ")}</>}
                </p>
              </motion.div>
            );
          })}
        </div>
      )}

      {visas.stepsTitle && (
        <p className="mx-auto mt-14 max-w-7xl px-6 text-center font-heading text-xl font-light text-foreground">
          {visas.stepsTitle}
        </p>
      )}

      <div className={`relative mx-auto max-w-7xl px-6 ${visas.stepsTitle ? "mt-8" : "mt-14"}`}>
        <div aria-hidden className="absolute left-6 right-6 top-7 hidden h-px bg-gradient-gold opacity-40 lg:block" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visas.steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative"
            >
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-primary bg-background font-heading text-lg text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FreezoneVisas;
