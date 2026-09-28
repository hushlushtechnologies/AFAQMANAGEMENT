// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { MapPin, Compass, Layers, Users, Share2, Handshake, LucideIcon } from "lucide-react";

// type Card = {
//   icon: LucideIcon;
//   title: string;
//   description: string;
// };

// const blueCards: Card[] = [
//   {
//     icon: MapPin,
//     title: "Local Insight. Smarter Decisions.",
//     description:
//       "Our understanding of the UAE business environment helps clients navigate opportunities, market dynamics, company structures, government requirements, and growth decisions with greater clarity.",
//   },
//   {
//     icon: Compass,
//     title: "Strategic Thinking",
//     description:
//       "We look beyond immediate requirements to understand the bigger picture—your objectives, opportunity, market position, risks, and long-term ambitions.",
//   },
//   {
//     icon: Layers,
//     title: "End-to-End Expertise",
//     description:
//       "From investment advisory and feasibility to company formation, PRO services, consultancy, and digital solutions, our capabilities support multiple stages of your business journey.",
//   },
// ];

// const goldCards: Card[] = [
//   {
//     icon: Users,
//     title: "Trusted Connections",
//     description:
//       "Our business ecosystem helps create meaningful connections between investors, entrepreneurs, companies, strategic partners, and opportunities.",
//   },
//   {
//     icon: Share2,
//     title: "Integrated Business Ecosystem",
//     description:
//       "Our wider group gives Afaq access to knowledge and capabilities across investment, real estate, technology, interiors, events, hospitality, automotive, and other sectors.",
//   },
//   {
//     icon: Handshake,
//     title: "Long-Term Partnership",
//     description:
//       "We aim to build lasting relationships by supporting our clients not only when opportunities begin, but as their businesses evolve, expand, and pursue new possibilities.",
//   },
// ];

// function InfoCard({ card, accent }: { card: Card; accent: "blue" | "gold" }) {
//   const Icon = card.icon;
//   const border = accent === "blue" ? "border-accent-blue" : "border-primary";
//   const iconColor = accent === "blue" ? "text-accent-blue" : "text-primary";

//   return (
//     <div className={`w-full max-w-[340px] rounded-2xl border ${border} bg-card p-5`}>
//       <div className="flex items-start gap-4">
//         <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${border} ${iconColor}`}>
//           <Icon size={18} />
//         </span>
//         <div>
//           <h3 className="text-lg font-semibold leading-snug text-foreground">{card.title}</h3>
//           <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// const Hub = () => (
//   <div className="h-24 w-24 rounded-full border-2 border-primary p-[3px]">
//     <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
//       <Image src="/images/logo.svg" alt="AFAQ" width={48} height={48} />
//     </div>
//   </div>
// );

// type CardPoint = { x: number; y: number; color: string; side: "blue" | "gold" };
// type HubPoint = { x: number; y: number; radius: number };

// const STUB_LENGTH = 28;

// function buildPath(point: CardPoint, hub: HubPoint) {
//   const stubX = point.side === "blue" ? point.x + STUB_LENGTH : point.x - STUB_LENGTH;

//   const dx = hub.x - stubX;
//   const dy = hub.y - point.y;
//   const dist = Math.sqrt(dx * dx + dy * dy) || 1;
//   const ux = dx / dist;
//   const uy = dy / dist;

//   // stop the diagonal right at the hub's circular edge, not its center
//   const endX = hub.x - ux * hub.radius;
//   const endY = hub.y - uy * hub.radius;

//   return `M ${point.x} ${point.y} L ${stubX} ${point.y} L ${endX} ${endY}`;
// }

// export default function WhyPartner() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const hubRef = useRef<HTMLDivElement>(null);
//   const blueRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const goldRefs = useRef<(HTMLDivElement | null)[]>([]);

//   const [points, setPoints] = useState<CardPoint[]>([]);
//   const [hub, setHub] = useState<HubPoint>({ x: 0, y: 0, radius: 0 });
//   const [size, setSize] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     const measure = () => {
//       const container = containerRef.current;
//       const hubEl = hubRef.current;
//       if (!container || !hubEl) return;

//       const containerBox = container.getBoundingClientRect();
//       const hubBox = hubEl.getBoundingClientRect();

//       setHub({
//         x: hubBox.left + hubBox.width / 2 - containerBox.left,
//         y: hubBox.top + hubBox.height / 2 - containerBox.top,
//         radius: hubBox.width / 2,
//       });

//       const next: CardPoint[] = [];

//       blueRefs.current.forEach((el) => {
//         if (!el) return;
//         const box = el.getBoundingClientRect();
//         next.push({
//           x: box.right - containerBox.left,
//           y: box.top + box.height / 2 - containerBox.top,
//           color: "#1D7BE0",
//           side: "blue",
//         });
//       });

//       goldRefs.current.forEach((el) => {
//         if (!el) return;
//         const box = el.getBoundingClientRect();
//         next.push({
//           x: box.left - containerBox.left,
//           y: box.top + box.height / 2 - containerBox.top,
//           color: "#EBB811",
//           side: "gold",
//         });
//       });

//       setSize({ width: containerBox.width, height: containerBox.height });
//       setPoints(next);
//     };

//     measure();
//     const ro = new ResizeObserver(measure);
//     if (containerRef.current) ro.observe(containerRef.current);
//     window.addEventListener("resize", measure);
//     return () => {
//       ro.disconnect();
//       window.removeEventListener("resize", measure);
//     };
//   }, []);

//   return (
//     <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-28">
//       <div className="mx-auto max-w-3xl px-6 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.7 }}
//           className="font-heading text-3xl font-light uppercase leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
//         >
//           Why Partner
//           <br />
//           With <span className="text-primary">Afaq</span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.6, delay: 0.15 }}
//           className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
//         >
//           The right business partner should bring more than expertise. At
//           Afaq Al Khaleej Management, we combine UAE market understanding,
//           strategic thinking, trusted connections, and execution support to
//           help investors and businesses move forward with greater clarity
//           and confidence.
//         </motion.p>

//         <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
//       </div>

//       {/* ===== Desktop: hub-and-spoke diagram ===== */}
//       <div
//         ref={containerRef}
//         className="relative mx-auto mt-20 hidden max-w-6xl grid-cols-[1fr_140px_1fr] items-center gap-6 lg:grid"
//       >
//         {size.width > 0 && (
//           <svg
//             width={size.width}
//             height={size.height}
//             className="pointer-events-none absolute inset-0"
//           >
//             {points.map((point, i) => (
//               <g key={i}>
//                 <path d={buildPath(point, hub)} stroke={point.color} strokeWidth={1.5} fill="none" opacity={0.7} />
//                 <circle cx={point.x} cy={point.y} r={4} fill={point.color} />
//               </g>
//             ))}
//           </svg>
//         )}

//         {/* left column — blue cards */}
//         <div className="relative z-10 flex min-h-[640px] flex-col justify-between gap-6">
//           {blueCards.map((card, i) => (
//             <motion.div
//               key={card.title}
//               ref={(el) => {
//                 blueRefs.current[i] = el;
//               }}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.5, delay: i * 0.12 }}
//               className="flex justify-end"
//             >
//               <InfoCard card={card} accent="blue" />
//             </motion.div>
//           ))}
//         </div>

//         {/* hub column */}
//         <motion.div
//           ref={hubRef}
//           initial={{ opacity: 0, scale: 0.6 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="relative z-10 flex justify-center"
//         >
//           <Hub />
//         </motion.div>

//         {/* right column — gold cards */}
//         <div className="relative z-10 flex min-h-[640px] flex-col justify-between gap-6">
//           {goldCards.map((card, i) => (
//             <motion.div
//               key={card.title}
//               ref={(el) => {
//                 goldRefs.current[i] = el;
//               }}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.5, delay: i * 0.12 }}
//               className="flex justify-start"
//             >
//               <InfoCard card={card} accent="gold" />
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ===== Mobile/tablet: simple stacked fallback ===== */}
//       <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-6 px-6 lg:hidden">
//         <Hub />
//         {[...blueCards.map((c) => ({ card: c, accent: "blue" as const })), ...goldCards.map((c) => ({ card: c, accent: "gold" as const }))].map(
//           ({ card, accent }, i) => (
//             <motion.div
//               key={card.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.5, delay: i * 0.08 }}
//               className="w-full"
//             >
//               <InfoCard card={card} accent={accent} />
//             </motion.div>
//           )
//         )}
//       </div>
//     </section>
//   );
// }













"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Compass, Layers, Users, Share2, Handshake, LucideIcon } from "lucide-react";

type Card = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const blueCards: Card[] = [
  {
    icon: MapPin,
    title: "Local Insight. Smarter Decisions.",
    description:
      "Our understanding of the UAE business environment helps clients navigate opportunities, market dynamics, company structures, government requirements, and growth decisions with greater clarity.",
  },
  {
    icon: Compass,
    title: "Strategic Thinking",
    description:
      "We look beyond immediate requirements to understand the bigger picture—your objectives, opportunity, market position, risks, and long-term ambitions.",
  },
  {
    icon: Layers,
    title: "End-to-End Expertise",
    description:
      "From investment advisory and feasibility to company formation, PRO services, consultancy, and digital solutions, our capabilities support multiple stages of your business journey.",
  },
];

const goldCards: Card[] = [
  {
    icon: Users,
    title: "Trusted Connections",
    description:
      "Our business ecosystem helps create meaningful connections between investors, entrepreneurs, companies, strategic partners, and opportunities.",
  },
  {
    icon: Share2,
    title: "Integrated Business Ecosystem",
    description:
      "Our wider group gives Afaq access to knowledge and capabilities across investment, real estate, technology, interiors, events, hospitality, automotive, and other sectors.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We aim to build lasting relationships by supporting our clients not only when opportunities begin, but as their businesses evolve, expand, and pursue new possibilities.",
  },
];

function InfoCard({ card, accent }: { card: Card; accent: "blue" | "gold" }) {
  const Icon = card.icon;
  const border = accent === "blue" ? "border-accent-blue" : "border-primary";
  const iconColor = accent === "blue" ? "text-accent-blue" : "text-primary";

  return (
    <div className={`w-full max-w-[340px] rounded-2xl border ${border} bg-card p-5`}>
      <div className="flex items-start gap-4">
        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${border} ${iconColor}`}>
          <Icon size={18} />
        </span>
        <div>
          <h3 className="text-lg font-semibold leading-snug text-foreground">{card.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
        </div>
      </div>
    </div>
  );
}

const Hub = () => (
  <div className="h-24 w-24 rounded-full border-2 border-primary p-[3px]">
    <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
      <Image src="/images/logo.svg" alt="AFAQ" width={48} height={48} />
    </div>
  </div>
);

type CardPoint = { x: number; y: number; color: string; side: "blue" | "gold" };
type HubPoint = { x: number; y: number; radius: number };

function buildPath(point: CardPoint, hub: HubPoint) {
  // starts flush against the hub's rim (its left edge for blue, right edge for
  // gold), runs horizontal to a shared "spine" x, bends 90° to the card's row,
  // then horizontal again into the card's edge — every line on a side shares
  // the same hubEdgeX and midX, so they form one clean branching tree with no
  // diagonals and no crossing
  const hubEdgeX = point.side === "blue" ? hub.x - hub.radius : hub.x + hub.radius;
  const midX = (hubEdgeX + point.x) / 2;

  return `M ${hubEdgeX} ${hub.y} L ${midX} ${hub.y} L ${midX} ${point.y} L ${point.x} ${point.y}`;
}

export default function WhyPartner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const blueRefs = useRef<(HTMLDivElement | null)[]>([]);
  const goldRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [points, setPoints] = useState<CardPoint[]>([]);
  const [hub, setHub] = useState<HubPoint>({ x: 0, y: 0, radius: 0 });
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const measure = () => {
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

      blueRefs.current.forEach((el) => {
        if (!el) return;
        const box = el.getBoundingClientRect();
        next.push({
          x: box.right - containerBox.left,
          y: box.top + box.height / 2 - containerBox.top,
          color: "#1D7BE0",
          side: "blue",
        });
      });

      goldRefs.current.forEach((el) => {
        if (!el) return;
        const box = el.getBoundingClientRect();
        next.push({
          x: box.left - containerBox.left,
          y: box.top + box.height / 2 - containerBox.top,
          color: "#EBB811",
          side: "gold",
        });
      });

      setSize({ width: containerBox.width, height: containerBox.height });
      setPoints(next);
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="font-heading text-3xl font-light uppercase leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
        >
          Why Partner
          <br />
          With <span className="text-primary">Afaq</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          The right business partner should bring more than expertise. At
          Afaq Al Khaleej Management, we combine UAE market understanding,
          strategic thinking, trusted connections, and execution support to
          help investors and businesses move forward with greater clarity
          and confidence.
        </motion.p>

        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      {/* ===== Desktop: hub-and-spoke diagram ===== */}
      <div
        ref={containerRef}
        className="relative mx-auto mt-20 hidden max-w-6xl grid-cols-[1fr_140px_1fr] items-center gap-6 lg:grid"
      >
        {size.width > 0 && (
          <svg
            width={size.width}
            height={size.height}
            className="pointer-events-none absolute inset-0"
          >
            {points.map((point, i) => (
              <g key={i}>
                <path d={buildPath(point, hub)} stroke={point.color} strokeWidth={1.5} fill="none" opacity={0.7} />
                <circle cx={point.x} cy={point.y} r={4} fill={point.color} />
              </g>
            ))}
          </svg>
        )}

        {/* left column — blue cards */}
        <div className="relative z-10 flex min-h-[640px] flex-col justify-between gap-6">
          {blueCards.map((card, i) => (
            <motion.div
              key={card.title}
              ref={(el) => {
                blueRefs.current[i] = el;
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex justify-end"
            >
              <InfoCard card={card} accent="blue" />
            </motion.div>
          ))}
        </div>

        {/* hub column */}
        <motion.div
          ref={hubRef}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative z-10 flex justify-center"
        >
          <Hub />
        </motion.div>

        {/* right column — gold cards */}
        <div className="relative z-10 flex min-h-[640px] flex-col justify-between gap-6">
          {goldCards.map((card, i) => (
            <motion.div
              key={card.title}
              ref={(el) => {
                goldRefs.current[i] = el;
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex justify-start"
            >
              <InfoCard card={card} accent="gold" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== Mobile/tablet: simple stacked fallback ===== */}
      <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-6 px-6 lg:hidden">
        <Hub />
        {[...blueCards.map((c) => ({ card: c, accent: "blue" as const })), ...goldCards.map((c) => ({ card: c, accent: "gold" as const }))].map(
          ({ card, accent }, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="w-full"
            >
              <InfoCard card={card} accent={accent} />
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}