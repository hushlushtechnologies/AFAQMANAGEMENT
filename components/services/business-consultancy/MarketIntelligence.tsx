"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, Landmark, Users, Coins, Clock, CalendarDays, Info, ChevronDown, MapPin } from "lucide-react";

const stats = [
  { icon: TrendingUp, label: "GDP Growth", value: "3.6%", bg: "bg-[#F3E4A9]", valueColor: "text-[#8a6d1f]" },
  { icon: Landmark, label: "Market Size", value: "AED 2.1T", bg: "bg-[#F4C9BC]", valueColor: "text-[#a13b2b]" },
  { icon: Users, label: "Population", value: "10.6M+", bg: "bg-[#D9D3F2]", valueColor: "text-[#4a3f8f]" },
  { icon: Coins, label: "FDI Inflow", value: "AED 163B", bg: "bg-[#C9EAC9]", valueColor: "text-[#2f7a3d]" },
];

const sectors = [
  { label: "Real Estate", value: 8.5, color: "bg-[#F4577E]" },
  { label: "Technology", value: 6.2, color: "bg-[#F3D98B]" },
  { label: "Healthcare", value: 5.1, color: "bg-[#4FB4E8]" },
  { label: "Logistics", value: 4.3, color: "bg-[#E0559B]" },
  { label: "Tourism", value: 3.6, color: "bg-[#7C6AE8]" },
];

const opportunities = [
  { title: "Digital Transformation", date: "02-04-24", dot: "bg-[#C9C2F2]" },
  { title: "Sustainable Solutions", date: "02-04-24", dot: "bg-[#F4C2B4]" },
  { title: "Healthcare innovations", date: "02-04-24", dot: "bg-[#C9C2F2]" },
  { title: "Smart Infrastructure", date: "02-04-24", dot: "bg-[#F4C2B4]" },
];

const emirates = [
  { name: "Ras Al Khaimah", top: "14%", left: "66%" },
  { name: "Umm Al Quwain", top: "24%", left: "64%" },
  { name: "Sharjah", top: "36%", left: "62%" },
  { name: "Dubai", top: "52%", left: "58%" },
  { name: "Fujairah", top: "68%", left: "72%" },
  { name: "Abu Dhabi", top: "86%", left: "44%" },
];

function useLiveClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function formatTime(d: Date) {
  let h = d.getHours();
  const m = d.getMinutes().toString().padStart(2, "0");
  const s = d.getSeconds().toString().padStart(2, "0");
  const ampm = h >= 12 ? "pm" : "am";
  h = h % 12 || 12;
  return `${h.toString().padStart(2, "0")}:${m}:${s} ${ampm}`;
}

function formatDate(d: Date) {
  const dd = d.getDate().toString().padStart(2, "0");
  const mm = (d.getMonth() + 1).toString().padStart(2, "0");
  return `${dd} - ${mm} - ${d.getFullYear()}`;
}

export default function MarketIntelligence() {
  const now = useLiveClock();

  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="inline-block border-l-2 border-primary pl-4"
        >
          <span className="text-sm font-semibold text-primary">Market Intelligence</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
        >
          Make Decisions with a better
          <br />
          <span className="text-primary">Understanding of the Market.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          We deliver deep market insights and data driven analysis that help
          you identify opportunities, understand risks, and make confident
          business decisions.
        </motion.p>

        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mx-auto mt-16 max-w-7xl rounded-[2rem] border border-border bg-surface p-4 sm:p-6 lg:p-8"
      >
        {/* greeting + stat cards */}
        <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/60 bg-background">
                <Image src="/images/logo-mark.svg" alt="AFAQ" width={28} height={28} className="h-7 w-7 object-contain" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Good Morning! Afaq</h3>
                <p className="text-sm text-muted-foreground">&ldquo;The future depends on what you do today&rdquo;</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-5">
              <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src="/images/services/business-consultancy/desert-moon.jpg"
                  alt="Desert dune under a night sky"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-primary" />
                  <span suppressHydrationWarning>{now ? formatTime(now) : "--:--:-- --"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays size={14} className="text-primary" />
                  <span suppressHydrationWarning>{now ? formatDate(now) : "-- - -- - ----"}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map(({ icon: Icon, label, value, bg, valueColor }) => (
              <div key={label} className={`flex w-40 flex-col items-center gap-2 rounded-2xl p-5 text-center ${bg}`}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-foreground/80">
                  <Icon size={18} />
                </span>
                <span className="text-sm font-medium text-foreground/80">{label}</span>
                <span className={`text-2xl font-bold ${valueColor}`}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* three panels */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* sector bar chart */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-base font-semibold text-foreground">
                Market Growth by Sector
                <Info size={14} className="text-primary" />
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                Today <ChevronDown size={14} />
              </span>
            </div>

            <div className="mt-6 space-y-5">
              {sectors.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-sm text-muted-foreground">{s.label}</span>
                  <div className="h-2.5 flex-1 rounded-full bg-background">
                    <div className={`h-2.5 rounded-full ${s.color}`} style={{ width: `${(s.value / 10) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-between pl-[92px] text-xs text-muted-foreground">
              {["0%", "2%", "4%", "6%", "8%", "10%"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>

          {/* opportunities */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-foreground">Top Opportunities</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                This Month <ChevronDown size={14} />
              </span>
            </div>

            <div className="mt-5 divide-y divide-border">
              {opportunities.map((o) => (
                <div key={o.title} className="flex items-center justify-between gap-3 py-4 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <span className={`h-8 w-8 shrink-0 rounded-full ${o.dot}`} />
                    <div>
                      <span className="block text-sm font-semibold text-foreground">{o.title}</span>
                      <span className="text-xs text-muted-foreground">{o.date}</span>
                    </div>
                  </div>
                  <span className="shrink-0 text-xs font-medium text-primary">In 2 Days</span>
                </div>
              ))}
            </div>
          </div>

          {/* emirates map */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-foreground">Market Potential by Emirates</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                This Month <ChevronDown size={14} />
              </span>
            </div>

            <div className="relative mt-4 h-64 w-full">
              <Image
                src="/images/services/business-consultancy/uae-map-outline.png"
                alt="Outline map of the UAE"
                fill
                unoptimized
                className="object-contain"
              />
              {emirates.map((e) => (
                <span
                  key={e.name}
                  style={{ top: e.top, left: e.left }}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
                >
                  <MapPin size={14} className="fill-primary text-primary" />
                  <span className="whitespace-nowrap text-[10px] text-muted-foreground">{e.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}