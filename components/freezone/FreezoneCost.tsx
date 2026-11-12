"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, CircleAlert, Plus } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import FreezoneEstimator from "./FreezoneEstimator";
import type { FreezoneData } from "@/lib/freezones/types";

const goldBtn =
  "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]";

function CostTable({ table }: { table: NonNullable<FreezoneData["cost"]["table"]> }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
      className="mx-auto mt-14 max-w-7xl px-6"
    >
      <div className="overflow-x-auto rounded-2xl border border-border bg-gradient-card">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border">
              {table.columns.map((c) => (
                <th key={c} className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((r, ri) => (
              <tr key={r.cells[0]} className={`border-b border-border/60 last:border-0 ${ri === 0 ? "bg-primary/10" : ""}`}>
                {r.cells.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-5 py-4 align-top text-sm ${
                      ci === 0
                        ? "font-semibold text-foreground"
                        : ci === 1 || ci === table.columns.length - 2
                          ? "font-heading text-base text-primary"
                          : "text-muted-foreground"
                    }`}
                  >
                    {cell}
                    {ci === 0 && r.note && (
                      <span className="mt-1 block text-xs font-normal text-primary/80">{r.note}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground/80">{table.footnote}</p>
    </motion.div>
  );
}

function CostChart({ chart }: { chart: NonNullable<FreezoneData["cost"]["chart"]> }) {
  const max = Math.max(...chart.bars.map((b) => b.value));
  return (
    <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 px-6 lg:grid-cols-[1.6fr_1fr]">
      <div className="rounded-3xl border border-border bg-card p-8">
        <p className="text-sm font-semibold text-foreground">{chart.title}</p>
        <div className="mt-6 space-y-4">
          {chart.bars.map((b, i) => (
            <div key={b.label} className="grid grid-cols-[80px_1fr] items-center gap-4 sm:grid-cols-[96px_1fr]">
              <span className="text-xs text-muted-foreground sm:text-sm">{b.label}</span>
              <div className="relative h-9 overflow-hidden rounded-full bg-surface">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(b.value / max) * 100}%` }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1, delay: 0.15 * i, ease: "easeOut" }}
                  className="flex h-full items-center justify-end rounded-full bg-gradient-gold pr-3"
                >
                  <span className="text-xs font-bold text-background">{b.value.toLocaleString("en-US")}</span>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {chart.aside && (
        <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-primary/40 bg-gradient-card p-8">
          <div aria-hidden className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
          <p className="relative font-heading text-2xl font-light text-primary">{chart.aside.title}</p>
          <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{chart.aside.text}</p>
          <Link href="/contact-us" className={`relative mt-6 w-fit ${goldBtn}`}>
            Get My Fixed Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  );
}

export default function FreezoneCost({ data }: { data: FreezoneData }) {
  const { cost } = data;
  // a cost-driver list sits beside the licence card when there's no "included" list
  const addOnsBesideLicence = !!cost.licence && !!cost.addOns && !cost.included && !cost.otherCosts;
  // likewise, an "included" list sits beside the licence card when nothing else does
  const includedBesideLicence = !!cost.licence && !!cost.included && !cost.addOns && !cost.otherCosts;
  return (
    <section id="cost" className="mx-4 my-16 scroll-mt-28 md:mx-8 lg:mx-12 lg:my-24">
      <SectionHeader eyebrow={`${data.name} Cost`} heading={cost.heading} paragraph={cost.intro} />
      {cost.source && <p className="mt-3 text-center text-xs text-muted-foreground/70">{cost.source}</p>}

      {/* card-style tiers */}
      {cost.tiers && (
        <div
          className={`mx-auto mt-14 grid grid-cols-1 gap-5 px-6 sm:grid-cols-2 ${
            cost.tiers.length === 2
              ? "max-w-4xl"
              : cost.tiers.length === 3
                ? "max-w-6xl lg:grid-cols-3"
                : "max-w-7xl lg:grid-cols-4"
          }`}
        >
          {cost.tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`flex flex-col rounded-2xl p-[1.5px] ${i === 0 ? "bg-gradient-gold" : "bg-border"}`}
            >
              <div className="flex h-full flex-col rounded-[calc(1rem-1.5px)] bg-gradient-card p-6">
                {t.badge && (
                  <span className={`mb-3 w-fit rounded-full px-3 py-0.5 text-[11px] font-bold uppercase tracking-wide ${
                    i === 0 ? "bg-gradient-gold text-background" : "bg-primary/15 text-primary"
                  }`}>
                    {t.badge}
                  </span>
                )}
                <h3 className="font-heading text-xl text-foreground">{t.name}</h3>
                <p className={`mt-3 font-heading text-2xl ${t.price ? "text-primary" : "text-muted-foreground"}`}>
                  {t.price ?? "Request quote"}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{t.tagline}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-foreground">
                      <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact-us"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    i === 0
                      ? "bg-gradient-gold text-background hover:shadow-[0_0_24px_rgba(235,184,17,0.45)]"
                      : "border border-primary text-primary hover:bg-primary hover:text-background"
                  }`}
                >
                  {t.price ? "Start with this" : "Request quote"}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {cost.estimator && <FreezoneEstimator cost={cost} />}

      {/* table-style pricing */}
      {cost.table && <CostTable table={cost.table} />}
      {cost.chart && <CostChart chart={cost.chart} />}

      {cost.extraTable && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-14 max-w-7xl px-6"
        >
          <p className="font-heading text-2xl font-light text-foreground">{cost.extraTable.title}</p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  {cost.extraTable.columns.map((c) => (
                    <th key={c} className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cost.extraTable.rows.map((r) => (
                  <tr key={r[0]} className="border-b border-border/60 last:border-0">
                    {r.map((cell, ci) => (
                      <td key={ci} className={`px-5 py-4 align-top text-sm ${ci === 0 ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {cost.extraTable.footnote && (
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground/80">{cost.extraTable.footnote}</p>
          )}
        </motion.div>
      )}

      {/* included + add-ons */}
      {((cost.included && !includedBesideLicence) || (cost.addOns && !addOnsBesideLicence)) && (
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 px-6 lg:grid-cols-2">
          {cost.included && !includedBesideLicence && (
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-border bg-gradient-card p-8"
            >
              <p className="font-heading text-xl text-foreground">{cost.includedTitle ?? "Included in every package"}</p>
              <ul className="mt-5 space-y-3">
                {cost.included.map((item) => (
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
          {cost.addOns && !addOnsBesideLicence && (
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <p className="font-heading text-xl text-foreground">Typical add-on costs to budget</p>
              <ul className="mt-4">
                {cost.addOns.map((a) => (
                  <li key={a.label} className="flex items-center justify-between gap-4 border-b border-border/60 py-3 last:border-0">
                    <span className="flex items-center gap-2.5 text-sm text-foreground">
                      <Plus size={13} className="text-primary" />
                      {a.label}
                    </span>
                    <span className="shrink-0 font-heading text-sm text-primary">{a.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      )}

      {/* licence card + other costs */}
      {(cost.licence || cost.otherCosts) && (
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 px-6 lg:grid-cols-[1fr_1.2fr]">
          {cost.licence && (
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-card p-8"
            >
              <div aria-hidden className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
              <p className="relative text-sm font-semibold text-primary">{cost.licence.title}</p>
              <p className="relative mt-3 flex items-baseline gap-2">
                <span className="text-sm text-muted-foreground">From</span>
                <span className="text-shine font-heading text-5xl">{cost.licence.price}</span>
              </p>
              <p className="relative mt-2 text-xs text-muted-foreground">{cost.licence.note}</p>
              <ul className="relative mt-6 space-y-3">
                {cost.licence.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                      <Check size={12} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link href="/contact-us" className={`relative mt-8 ${goldBtn}`}>
                Get My Exact Quote
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          )}

          {includedBesideLicence && (
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <p className="font-heading text-xl text-foreground">{cost.includedTitle ?? "Included in every package"}</p>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {cost.included!.map((item) => (
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

          {addOnsBesideLicence && (
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <div className="flex items-center justify-between border-b border-border pb-4">
                <p className="font-heading text-xl text-foreground">Cost Drivers</p>
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Indicative (AED)</span>
              </div>
              <ul>
                {cost.addOns!.map((a) => (
                  <li key={a.label} className="flex items-center justify-between gap-4 border-b border-border/60 py-3.5 last:border-0">
                    <span className="text-sm text-foreground">{a.label}</span>
                    <span className="shrink-0 text-right font-heading text-sm text-primary">{a.price}</span>
                  </li>
                ))}
              </ul>
              {cost.guidance && (
                <div className="mt-5 flex items-start gap-3 rounded-xl border border-accent-blue/40 bg-accent-blue/10 px-4 py-3">
                  <CircleAlert size={18} className="mt-0.5 shrink-0 text-accent-blue" />
                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{cost.guidance}</p>
                </div>
              )}
            </motion.div>
          )}

          {cost.otherCosts && (
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <div className="flex items-center justify-between border-b border-border pb-4">
                <p className="font-heading text-xl text-foreground">Other Costs to Budget</p>
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">In your quote</span>
              </div>
              <ul>
                {cost.otherCosts.map((c) => (
                  <li key={c} className="flex items-center justify-between gap-4 border-b border-border/60 py-3.5 last:border-0">
                    <span className="text-sm text-foreground">{c}</span>
                    <span className="shrink-0 rounded-full bg-primary/15 px-3 py-0.5 text-xs font-semibold text-primary">Confirm</span>
                  </li>
                ))}
              </ul>
              {cost.guidance && (
                <div className="mt-5 flex items-start gap-3 rounded-xl border border-accent-blue/40 bg-accent-blue/10 px-4 py-3">
                  <CircleAlert size={18} className="mt-0.5 shrink-0 text-accent-blue" />
                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{cost.guidance}</p>
                </div>
              )}
            </motion.div>
          )}
        </div>
      )}

      {cost.notes && (
        <div className="mx-auto mt-8 flex max-w-7xl flex-wrap justify-center gap-3 px-6">
          {cost.notes.map((n) => (
            <span key={n} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm text-foreground">
              <Check size={14} className="text-primary" />
              {n}
            </span>
          ))}
        </div>
      )}

      {/* quote CTA when the page uses table pricing without a chart aside */}
      {cost.table && !cost.chart?.aside && (
        <div className="mt-10 flex justify-center">
          <Link href="/contact-us" className={goldBtn}>
            Get My Fixed Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </section>
  );
}
