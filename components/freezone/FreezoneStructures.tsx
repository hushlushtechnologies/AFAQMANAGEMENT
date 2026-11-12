"use client";

import { motion } from "framer-motion";
import { CircleAlert, Users } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import type { FreezoneData } from "@/lib/freezones/types";

export default function FreezoneStructures({ data }: { data: FreezoneData }) {
  const st = data.structures;
  if (!st) return null;
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <SectionHeader eyebrow="Company Structures" heading={st.heading} paragraph={st.intro} />

      <div className={`mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-6 ${st.groups.length > 1 ? "lg:grid-cols-2" : ""}`}>
        {st.groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: gi * 0.12 }}
            className={`rounded-3xl border bg-gradient-card p-8 ${gi === 0 ? "border-primary/40" : "border-border"}`}
          >
            <p className="font-heading text-2xl font-light text-foreground">{g.title}</p>
            <div className="mt-6 space-y-4">
              {g.items.map((item) => (
                <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-border bg-background/40 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                    <Users size={17} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {st.table && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-12 max-w-7xl px-6"
        >
          <p className="font-heading text-2xl font-light text-foreground">{st.table.title}</p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-border bg-gradient-card">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  {st.table.columns.map((c) => (
                    <th key={c} className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {st.table.rows.map((r) => (
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
        </motion.div>
      )}

      {st.notes && (
        <div className="mx-auto mt-6 max-w-7xl space-y-3 px-6">
          {st.notes.map((n) => (
            <div key={n} className="flex items-start gap-3 rounded-2xl border border-accent-blue/40 bg-accent-blue/10 px-6 py-4">
              <CircleAlert size={18} className="mt-0.5 shrink-0 text-accent-blue" />
              <p className="text-sm leading-relaxed text-muted-foreground">{n}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
