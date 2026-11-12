"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Clock, MapPin, Users } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { ISSUE_TIME, offers, type Offer, type OfferCategory } from "./data";

type Filter = "all" | OfferCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All Offers" },
  { id: "freezone", label: "Free Zone Offers" },
  { id: "mainland", label: "Mainland Offers" },
];

function OfferCard({ offer }: { offer: Offer }) {
  const isMainland = offer.category === "mainland";
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-[0_18px_40px_-18px_rgba(235,184,17,0.35)]"
    >
      <div aria-hidden className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition-colors duration-500 group-hover:bg-primary/15" />

      <div className="relative flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
          <MapPin size={13} />
          {offer.zone}
        </span>
        <span
          className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
            isMainland ? "bg-accent-blue/15 text-accent-blue" : "bg-primary/15 text-primary"
          }`}
        >
          {isMainland ? "Mainland" : "Free Zone"}
        </span>
      </div>

      <h3 className="relative mt-4 min-h-[3.5rem] text-lg font-semibold leading-snug text-foreground">
        {offer.title}
      </h3>

      {offer.visas && (
        <span className="relative mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          <Users size={12} />
          {offer.visas}
        </span>
      )}

      <div className="relative mt-5 flex items-baseline gap-2">
        <span className="text-xs text-muted-foreground">From</span>
        <span className="font-heading text-3xl text-primary">{offer.price}*</span>
        {offer.priceNote && (
          <span className="text-xs font-semibold text-muted-foreground">{offer.priceNote}</span>
        )}
      </div>

      <p className="relative mt-3 flex items-center gap-2 text-xs text-muted-foreground">
        <Clock size={13} className="text-primary" />
        {ISSUE_TIME}
      </p>

      <div className="relative mt-auto pt-6">
        <Link
          href="/contact-us"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:bg-gradient-gold group-hover:text-background"
        >
          Start Your Business
          <ArrowRight size={15} />
        </Link>
      </div>
    </motion.article>
  );
}

export default function OffersGrid() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () => (filter === "all" ? offers : offers.filter((o) => o.category === filter)),
    [filter],
  );

  const counts = useMemo(
    () => ({
      all: offers.length,
      freezone: offers.filter((o) => o.category === "freezone").length,
      mainland: offers.filter((o) => o.category === "mainland").length,
    }),
    [],
  );

  return (
    <section id="packages" className="mx-4 my-16 scroll-mt-28 md:mx-8 lg:mx-12 lg:my-24">
      <SectionHeader
        eyebrow="Latest Offers"
        heading={
          <>
            Get the Best Packages on <span className="text-primary">Your Business Licence</span>
          </>
        }
        paragraph="Ground-level knowledge, expert advice and end-to-end support through every step of the process. Here are our latest offers and deals."
      />

      <div role="tablist" className="mt-12 flex flex-wrap justify-center gap-3 px-6">
        {filters.map((f) => {
          const isActive = f.id === filter;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setFilter(f.id)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                isActive
                  ? "text-background"
                  : "border border-border text-muted-foreground hover:border-primary/60 hover:text-primary"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="offers-filter-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  className="absolute inset-0 rounded-full bg-gradient-gold"
                />
              )}
              <span className="relative">
                {f.label}{" "}
                <span className={isActive ? "opacity-70" : "opacity-60"}>({counts[f.id]})</span>
              </span>
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((offer) => (
            <OfferCard key={`${offer.title}-${offer.zone}-${offer.price}`} offer={offer} />
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="mx-auto mt-8 max-w-7xl px-6 text-xs leading-relaxed text-muted-foreground/80">
        *Prices are starting package examples, subject to eligibility, activity
        approval and a current written quotation. Issue times depend on complete
        documentation and authority processing. Confirm inclusions, visa charges,
        additional fees and renewal costs before proceeding.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto mt-14 flex max-w-6xl flex-col gap-6 overflow-hidden rounded-2xl border border-primary/40 bg-card px-8 py-7 sm:mx-6 md:flex-row md:items-center md:justify-between lg:mx-auto"
      >
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
            <BadgeCheck size={18} />
          </span>
          <div>
            <p className="font-heading text-xl font-light text-foreground">
              Don&apos;t see the right package?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Tell us your activity and visa needs — we&apos;ll build a custom quote.
            </p>
          </div>
        </div>
        <Link
          href="/contact-us"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
        >
          Get a Custom Quote
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}
