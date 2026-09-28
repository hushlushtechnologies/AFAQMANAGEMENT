 "use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, ShieldCheck, Search, Users, TrendingUp, LucideIcon } from "lucide-react";

const valueProps: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Eye, title: "Clearer Perspective", description: "Provide the insight you need to evaluate opportunities with confidence" },
  { icon: ShieldCheck, title: "Risk Aware Approach", description: "Evaluating potential risks to support informed decisions" },
  { icon: Search, title: "In Depth Research", description: "Understanding markets, trends and opportunities" },
  { icon: Users, title: "Strategic Connection", description: "Connecting investors with trusted business and entrepreneurs" },
  { icon: TrendingUp, title: "Long Term Value", description: "Focusing on sustainable growth and lasting value creation" },
];

const zigzagIndents = ["lg:ml-16", "lg:ml-8", "lg:ml-0", "lg:ml-8", "lg:ml-16"];

const criteria = [
  {
    number: "01",
    title: "Market Potential",
    description: "Assessing demand, industry outlook, and market positioning",
    image: "/images/services/investment-services/market-potential.jpg",
    featured: false,
  },
  {
    number: "02",
    title: "Business Model",
    description: "Understanding the business model and value creation strategy",
    image: "/images/services/investment-services/business-model.png",
    featured: true,
    size: "lg",
  },
  {
    number: "03",
    title: "Financial Outlook",
    description: "Reviewing financial metrics, projections, and key assumptions.",
    image: "/images/services/investment-services/financial-outlook.png",
    featured: false,
  },
  {
    number: "04",
    title: "Risk Consideration",
    description: "Identifying potential risks and mitigation factors",
    image: "/images/services/investment-services/risk-consideration.png",
    featured: false,
  },
  {
    number: "05",
    title: "Growth Potential",
    description: "Evaluating scalability, expansion possibilities, and future growth",
    image: "/images/services/investment-services/growth-potential.png",
    featured: false,
     size: "sm",
  },
  {
    number: "06",
    title: "Strategic Fit",
    description: "Assessing alignment with investor goals and objectives",
    image: "/images/services/investment-services/strategic-fit.png",
    featured: false,
  },
];

const NODE_GAP = 48; // px between a card's left edge and the connector dot/line

export default function InvestmentOverview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const measure = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const containerBox = container.getBoundingClientRect();
    const next = cardRefs.current
      .map((el) => {
        if (!el) return null;
        const box = el.getBoundingClientRect();
        return {
          x: box.left - containerBox.left - NODE_GAP,
          y: box.top + box.height / 2 - containerBox.top,
        };
      })
      .filter((p): p is { x: number; y: number } => p !== null);
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

  const pathD =
    points.length > 1 ? points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") : "";

  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:gap-10">
        {/* left — copy + image */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="border-l-2 border-primary pl-4"
          >
            <span className="text-sm font-semibold text-primary">Investment Overview</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading mt-6 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
          >
            Opportunity is
            <br />
            Only the Beginning
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 space-y-4 border-l-2 border-primary/50 pl-4"
          >
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              At Afaq Al Khaleej Management Consultancy, we connect investors
              with carefully evaluated business and investment opportunities
              across the UAE and beyond
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Our role is to provide clarity, insight, and guidance so you
              can explore opportunities with confidence and make informed
              investment decisions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mt-10 w-full pb-16"
          >
            <div className="relative h-[320px] w-full overflow-hidden rounded-[2rem] sm:h-[380px]">
              <Image
                src="/images/services/investment-services/opportunity-hero.png"
                alt="Investor looking toward rising growth chart"
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-2 left-6 w-56 rounded-2xl border border-border bg-gradient-card p-5 shadow-xl sm:left-10">
              <span className="text-xs font-medium text-foreground">Investment Growth</span>
              <div className="mt-1 flex items-end justify-between gap-3">
                <span className="text-2xl font-bold text-primary">4 - 6% ROI</span>
                <div className="relative h-14 w-20 shrink-0">
                  <Image
                    src="/images/investment-growth-chart.png"
                    alt="Investment growth chart"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* right — zigzag value props */}
        <div ref={containerRef} className="relative space-y-6 lg:pl-10">
          {pathD && (
            <svg className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible lg:block">
              <path d={pathD} stroke="#EBB811" strokeWidth="1.5" fill="none" opacity="0.6" />
              {points.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r={5} fill="#EBB811" />
              ))}
            </svg>
          )}

          {valueProps.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onAnimationComplete={measure}
              className={`relative max-w-sm rounded-2xl border border-accent-blue bg-card p-5 ${zigzagIndents[i]}`}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent-blue text-accent-blue">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* evaluation criteria grid */}
    <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 items-center gap-0 px-6 sm:grid-cols-3">
        {criteria.slice(0, 3).map((item, i) => (
          <CriteriaCard key={item.title} item={item} delay={i * 0.1} />
        ))}
      </div>
      <div className="mx-auto mt-6 grid max-w-7xl grid-cols-1 items-center gap-0 px-6 sm:grid-cols-3">
        {criteria.slice(3, 6).map((item, i) => (
          <CriteriaCard key={item.title} item={item} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}

 function CriteriaCard({ item, delay }: { item: (typeof criteria)[number]; delay: number }) {
  const aspect = item.size === "lg" ? "aspect-[3/5]" : item.size === "sm" ? "aspect-[3/3.4]" : "aspect-[3/4]";
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`flex w-full flex-col overflow-hidden rounded-2xl border ${aspect} ${
        item.featured
          ? "border-primary/50 bg-surface shadow-[0_0_40px_rgba(235,184,17,0.15)]"
          : "border-border bg-card"
      }`}
    >
      <div className="p-6">
        <span className="text-xl font-bold text-foreground">{item.number}</span>
        <h3 className="mt-2 text-lg font-semibold text-primary">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
      </div>
      <div className="relative w-full flex-1">
        <Image src={item.image} alt={item.title} fill unoptimized className="object-cover" />
      </div>
    </motion.div>
  );
}