"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarClock, Check, FileText, RefreshCw, Scale, Users } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import SectionHeader from "@/components/shared/SectionHeader";
import type { FreezoneData } from "@/lib/freezones/types";
import { freezones } from "@/lib/freezones";
import { WHATSAPP_URL } from "./icons";

const goldBtn =
  "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]";

/** Links a zone name in the compare table to its page when one exists. */
function zoneHref(zoneName: string, currentSlug: string): string | null {
  const match = Object.values(freezones).find(
    (z) => z.slug !== currentSlug && zoneName.toLowerCase().startsWith(z.shortName.toLowerCase()),
  );
  return match ? `/freezone/${match.slug}` : null;
}

function OtherZones({ data }: { data: FreezoneData }) {
  if (!data.otherZones) return null;
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <SectionHeader
        eyebrow="Explore More"
        heading={
          <>
            Other UAE <span className="text-primary">Free Zones</span>
          </>
        }
        paragraph="Comparing options? We set up companies across the UAE's free zones and can help you choose the right fit."
      />
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-3 px-6 sm:grid-cols-3 lg:grid-cols-4">
        {data.otherZones.map((zone, i) => {
          const href = zoneHref(zone, data.slug) ?? "/contact-us";
          return (
            <motion.div
              key={zone}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
            >
              <Link
                href={href}
                className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-gradient-card px-5 py-4 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-primary/60 hover:text-primary"
              >
                {zone}
                <ArrowRight size={15} className="shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export function FreezoneCompare({ data }: { data: FreezoneData }) {
  const { compare } = data;
  if (!compare) return <OtherZones data={data} />;
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <SectionHeader eyebrow={compare.eyebrow ?? "Compare Free Zones"} heading={compare.heading} paragraph={compare.intro} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mx-auto mt-14 max-w-6xl px-6"
      >
        <div className="overflow-x-auto rounded-2xl border border-border bg-gradient-card">
          <table className={`w-full border-collapse text-left ${compare.columns.length > 3 ? "min-w-[820px]" : "min-w-[560px]"}`}>
            <thead>
              <tr className="border-b border-border">
                {compare.columns.map((c) => (
                  <th key={c} className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compare.rows.map((r) => {
                const href = r.current ? null : zoneHref(r.cells[0], data.slug);
                return (
                  <tr key={r.cells[0]} className={`border-b border-border/60 last:border-0 ${r.current ? "bg-primary/10" : ""}`}>
                    {r.cells.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`px-5 py-4 align-top text-sm ${
                          ci === 0
                            ? "font-semibold text-foreground"
                            : ci === 1
                              ? `font-heading text-base ${r.current ? "text-primary" : "text-muted-foreground"}`
                              : "text-muted-foreground"
                        }`}
                      >
                        {ci === 0 && href ? (
                          <Link href={href} className="inline-flex items-center gap-1.5 hover:text-primary">
                            {cell}
                            <ArrowRight size={13} className="text-primary" />
                          </Link>
                        ) : (
                          cell
                        )}
                        {ci === 0 && r.current && (
                          <span className="ml-2 rounded-full bg-gradient-gold px-2 py-0.5 text-[10px] font-bold uppercase text-background">
                            This page
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {compare.footnote && <p className="mt-4 text-xs leading-relaxed text-muted-foreground/80">{compare.footnote}</p>}
      </motion.div>

      <div className="mt-8 flex justify-center">
        <Link href="/contact-us" className={goldBtn}>
          Get a Free Comparison
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

export function FreezoneTax({ data }: { data: FreezoneData }) {
  const { tax, developments } = data;
  if (!tax && !developments) return null;
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      {tax && (
        <>
        <div className={`mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:gap-16 ${tax.calendar ? "lg:grid-cols-[1.3fr_1fr]" : ""}`}>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className={tax.calendar ? "" : "mx-auto max-w-3xl text-center"}
          >
            <div className={`border-l-2 border-primary pl-4 ${tax.calendar ? "" : "inline-block"}`}>
              <span className="text-sm font-semibold text-primary">{tax.eyebrow ?? "Tax & Accounting"}</span>
            </div>
            <h2 className="font-heading mt-5 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl">
              {tax.heading}
            </h2>
            <div className={`mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base ${tax.calendar ? "border-l-2 border-primary/40 pl-4" : ""}`}>
              {tax.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <Link
              href="/contact-us"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
            >
              Accounting & tax support
              <ArrowRight size={15} />
            </Link>
          </motion.div>

          {tax.calendar && (
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="self-center rounded-3xl border border-border bg-card p-8"
          >
            <p className="flex items-center gap-3 font-heading text-xl text-foreground">
              <CalendarClock size={20} className="text-primary" />
              Compliance calendar
            </p>
            <ol className="relative mt-6 space-y-5 border-l border-primary/40 pl-6">
              {tax.calendar.map((c) => (
                <li key={c.label} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                  <p className="text-sm font-semibold text-foreground">{c.label}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{c.when}</p>
                </li>
              ))}
            </ol>
          </motion.div>
          )}
        </div>

        {tax.cards && (
          <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
            {tax.cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-border bg-gradient-card p-6 transition-colors duration-300 hover:border-primary/50"
              >
                <p className="text-shine font-heading text-3xl">{c.value}</p>
                <h3 className="mt-3 text-base font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </motion.div>
            ))}
          </div>
        )}

        {tax.tags && (
          <div className="mt-8 flex flex-wrap justify-center gap-3 px-6">
            {tax.tags.map((t) => (
              <Link
                key={t}
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm text-primary transition-colors duration-200 hover:bg-primary hover:text-background"
              >
                {t}
                <ArrowRight size={13} />
              </Link>
            ))}
          </div>
        )}
        </>
      )}

      {developments && (
        <div className={tax ? "mt-24" : ""}>
          <SectionHeader eyebrow="Latest News" heading={developments.heading} />
          <div className="relative mx-auto mt-14 max-w-6xl px-6">
            <div aria-hidden className="absolute left-6 right-6 top-[22px] hidden h-px bg-gradient-gold opacity-40 md:block" />
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
              {developments.items.map((d, i) => (
                <motion.div
                  key={d.date + d.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                >
                  <span className="relative z-10 inline-flex h-11 items-center rounded-full border border-primary bg-background px-5 font-heading text-primary">
                    {d.date}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export function FreezoneSupport({ data }: { data: FreezoneData }) {
  const o = data.support;
  const defaultCards = [
    {
      icon: Scale,
      title: "We Compare Before You Pay",
      text:
        data.category === "Mainland"
          ? "Mainland against free zone options for your activity, visas and budget."
          : data.category === "Business Licensing"
            ? "Mainland, free zone and offshore licence options for your activity and budget."
          : data.category === "Offshore"
            ? "Offshore against free zone and mainland options for your goals and budget."
            : `${data.shortName} against other free zones for your activity, visas and budget.`,
    },
    { icon: FileText, title: "Clear Scope in Writing", text: "Know exactly which services are included and which need a separate quote." },
    {
      icon: Users,
      title: "Dedicated PRO Support",
      text: "Portal submissions, immigration and Emirates ID handled for you.",
      href: "/services/pro-government-services",
    },
  ];
  const cardIcons = [Scale, FileText, Users];
  const support = o?.cards
    ? o.cards.map((c, i) => ({ icon: cardIcons[i % cardIcons.length], title: c.title, text: c.text, href: undefined as string | undefined }))
    : defaultCards;

  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <SectionHeader
        eyebrow={o?.eyebrow ?? `${data.shortName} Company Setup Support`}
        heading={
          o?.heading ? (
            <>
              {o.heading} <span className="text-primary">Afaq Al Khaleej</span>
            </>
          ) : (
            <>
              Set Up Your {data.shortName} Company with <span className="text-primary">Afaq Al Khaleej</span>
            </>
          )
        }
        paragraph={o?.paragraph ?? "Help with activity selection, documents and package comparisons — with one team covering licence, visas, banking and tax."}
      />

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 px-6 md:grid-cols-3">
        {support.map(({ icon: Icon, title, text, href }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col items-center rounded-2xl bg-gradient-card px-6 py-10 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
              <Icon size={22} />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            {href && (
              <Link href={href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5">
                PRO services <ArrowRight size={14} />
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      {data.included && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto mt-10 max-w-6xl overflow-hidden rounded-3xl border border-primary/40 bg-gradient-card p-8 sm:mx-6 sm:p-10 lg:mx-auto"
        >
          <div aria-hidden className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <p className="font-heading text-2xl font-light text-foreground sm:text-3xl">
                {o?.quoteTitle ?? "Get your fixed"} <span className="text-primary">{data.shortName} quote</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {o?.quoteText ??
                  "Tell us your activity and visa count — we'll send an itemised quote for the licence, visas, establishment card and bank account, with no hidden fees."}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact-us" className={goldBtn}>
                  Request My Quote
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-background"
                >
                  <FaWhatsapp size={16} />
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Included with Afaq</p>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {data.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check size={12} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      {data.portalNote && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-10 flex max-w-6xl flex-col gap-6 rounded-2xl border border-primary/40 bg-card px-8 py-6 sm:mx-6 md:flex-row md:items-center md:justify-between lg:mx-auto"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
              <RefreshCw size={18} />
            </span>
            <p className="text-sm leading-relaxed text-foreground md:text-base">{data.portalNote}</p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-background"
          >
            <FaWhatsapp size={16} />
            Chat on WhatsApp
          </a>
        </motion.div>
      )}
    </section>
  );
}
