 "use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Fingerprint, Users, Landmark, Receipt, Building2, Navigation, Building, MapPinned, ShieldAlert, MoreHorizontal, LucideIcon } from "lucide-react";

type Authority = {
  icon: LucideIcon;
  logo?: string;
  title: string;
  description: string;
};

const leftAuthorities: Authority[] = [
  { icon: Fingerprint, title: "ICP", description: "Federal Authority for Identity, Citizenship, Customs & Port Security" },
  { icon: Users, title: "GDRFA", description: "General Directorate of Residency and Foreigners Affairs" },
  { icon: Landmark, title: "MOHRE", description: "Ministry of Human Resource & Emiratisation" },
  { icon: Receipt, title: "Federal Tax Authority", description: "Tax Registrations, Filing & Corporate Compliance" },
  { icon: Building2, title: "Economic Departments", description: "Trade Licenses, Business Setup, Renewals & Approvals" },
];

const rightAuthorities: Authority[] = [
  { icon: Navigation, title: "RTA", description: "Roads & Transport Authority Services & Approvals" },
  { icon: Building, title: "Municipalities", description: "Trade Permits, Inspection, No Objection Certificates" },
  { icon: MapPinned, title: "Freezone Authorities", description: "Business Registration, Licenses, Visas, Corporate Services" },
  { icon: ShieldAlert, title: "Dubai Police & Authorities", description: "Police Clearance, NOCs & Related Services" },
  { icon: MoreHorizontal, title: "Other Government Authorities", description: "MINA, Ministry of Health, EHS, Ports, Customs & More" },
];

function AuthorityCard({
  authority,
  accent,
  cardRef,
}: {
  authority: Authority;
  accent: "blue" | "gold";
  cardRef: (el: HTMLDivElement | null) => void;
}) {
  const border = accent === "blue" ? "border-accent-blue" : "border-primary";
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: accent === "blue" ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`relative w-full max-w-sm rounded-2xl border ${border} bg-card p-5`}
    >
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-background">
          {authority.logo ? (
            <Image src={authority.logo} alt={authority.title} width={28} height={28} unoptimized className="object-contain" />
          ) : (
            <authority.icon size={18} className="text-foreground" />
          )}
        </span>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{authority.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{authority.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

type CardPoint = { x: number; y: number; side: "left" | "right" };
type HubPoint = { x: number; y: number; radius: number };

export default function GovernmentAuthorities() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const leftRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [points, setPoints] = useState<CardPoint[]>([]);
  const [hub, setHub] = useState<HubPoint>({ x: 0, y: 0, radius: 0 });
  const [size, setSize] = useState({ width: 0, height: 0 });

  const measure = useCallback(() => {
    const container = containerRef.current;
    const hubEl = hubRef.current;
    if (!container || !hubEl) return;
    const containerBox = container.getBoundingClientRect();
    const hubBox = hubEl.getBoundingClientRect();
    setHub({
      x: hubBox.left + hubBox.width / 2 - containerBox.left,
      y: hubBox.top + hubBox.height / 2 - containerBox.top,
      radius: hubBox.width / 2,
    });

    const next: CardPoint[] = [];
    leftRefs.current.forEach((el) => {
      if (!el) return;
      const box = el.getBoundingClientRect();
      next.push({ x: box.right - containerBox.left, y: box.top + box.height / 2 - containerBox.top, side: "left" });
    });
    rightRefs.current.forEach((el) => {
      if (!el) return;
      const box = el.getBoundingClientRect();
      next.push({ x: box.left - containerBox.left, y: box.top + box.height / 2 - containerBox.top, side: "right" });
    });
    setSize({ width: containerBox.width, height: containerBox.height });
    setPoints(next);
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="font-heading text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
        >
          Navigating the UAE Business
          <br />
          Environment
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          We work closely with relevant government authorities to help you
          get things done accurately, efficiently and on time
        </motion.p>

        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      {/* desktop hub-and-spoke */}
      <div
        ref={containerRef}
        className="relative mx-auto mt-20 hidden max-w-6xl grid-cols-[1fr_140px_1fr] items-center gap-6 lg:grid"
      >
        {size.width > 0 && (
          <svg width={size.width} height={size.height} className="pointer-events-none absolute inset-0">
            {points.map((p, i) => {
              const hubEdgeX = p.side === "left" ? hub.x - hub.radius : hub.x + hub.radius;
              const color = p.side === "left" ? "#1D7BE0" : "#EBB811";
              return (
                <g key={i}>
                  <path d={`M ${hubEdgeX} ${hub.y} L ${p.x} ${p.y}`} stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
                  <circle cx={p.x} cy={p.y} r={5} fill={color} />
                </g>
              );
            })}
          </svg>
        )}

        <div className="relative z-10 flex min-h-[820px] flex-col justify-between gap-6">
          {leftAuthorities.map((a, i) => (
            <AuthorityCard
              key={a.title}
              authority={a}
              accent="blue"
              cardRef={(el) => {
                leftRefs.current[i] = el;
              }}
            />
          ))}
        </div>

        <motion.div
          ref={hubRef}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative z-10 flex justify-center"
        >
          <div
            className="h-24 w-24 rounded-full p-[3px]"
            style={{ background: "conic-gradient(#1D7BE0 0deg 180deg, #EBB811 180deg 360deg)" }}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
              <Image src="/images/logo.svg" alt="AFAQ" width={48} height={48} />
            </div>
          </div>
        </motion.div>

        <div className="relative z-10 flex min-h-[820px] flex-col justify-between gap-6">
          {rightAuthorities.map((a, i) => (
            <AuthorityCard
              key={a.title}
              authority={a}
              accent="gold"
              cardRef={(el) => {
                rightRefs.current[i] = el;
              }}
            />
          ))}
        </div>
      </div>

      {/* mobile/tablet fallback — simple stacked list */}
      <div className="mx-auto mt-14 flex max-w-2xl flex-col gap-4 px-6 lg:hidden">
        {[...leftAuthorities, ...rightAuthorities].map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 5) * 0.06 }}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-background">
                {a.logo ? (
                  <Image src={a.logo} alt={a.title} width={28} height={28} unoptimized className="object-contain" />
                ) : (
                  <a.icon size={18} className="text-foreground" />
                )}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{a.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}