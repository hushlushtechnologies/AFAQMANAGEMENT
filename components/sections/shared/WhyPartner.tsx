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

// EDIT THESE to move cards around:
//   top → % vertical center within the diagram column (kept inside 0–100 now,
//          so nothing spills into the section above/below)
//   x   → px horizontal offset AWAY from the hub
const bluePositions = [
  { top: 7, x: 80 },
  { top: 50, x: 200 },
  { top: 92, x: 90 },
];
const goldPositions = [
  { top: 12, x: 80 },
  { top: 50, x: 200 },
  { top: 92, x: 90 },
];

function InfoCard({ card, accent }: { card: Card; accent: "blue" | "gold" }) {
  const Icon = card.icon;
  const border = accent === "blue" ? "border-accent-blue" : "border-primary";
  const iconColor = accent === "blue" ? "text-accent-blue" : "text-primary";

  return (
    <div className={`w-full max-w-[340px] rounded-2xl border ${border} bg-card p-5`}>
      <div className="flex items-center gap-4">
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
 <div className="h-20 w-20 rounded-full p-[2px]">
    <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
       <Image src="/images/logo.svg" alt="AFAQ" width={64} height={64} />
    </div>
  </div>
);

export default function WhyPartner() {
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:mt-28 lg:mb-40">
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
      <div className="relative mx-auto mt-20 hidden max-w-6xl grid-cols-[1fr_140px_1fr] items-center gap-6 lg:grid">
        {/* designer-provided connector-line artwork, shrunk to half size around the hub's center */}
        <svg
          viewBox="0 0 525 371"
          preserveAspectRatio="none"
          style={{ transform: "scale(0.5)", transformOrigin: "50% 50%" }}
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <path
            d="M56.9997 5.3335C56.9997 8.27901 59.3875 10.6668 62.333 10.6668C65.2785 10.6668 67.6663 8.27901 67.6663 5.3335C67.6663 2.38798 65.2785 0.000162601 62.333 0.000162601C59.3875 0.000162601 56.9997 2.38798 56.9997 5.3335ZM131.833 5.3335L132.699 4.8335L132.41 4.3335H131.833V5.3335ZM193.761 121.833C193.761 124.779 196.149 127.167 199.094 127.167C202.04 127.167 204.428 124.779 204.428 121.833C204.428 118.888 202.04 116.5 199.094 116.5C196.149 116.5 193.761 118.888 193.761 121.833ZM457.261 5.3335C457.261 8.27901 459.649 10.6668 462.595 10.6668C465.54 10.6668 467.928 8.27901 467.928 5.3335C467.928 2.38798 465.54 0.000162601 462.595 0.000162601C459.649 0.000162601 457.261 2.38798 457.261 5.3335ZM393.095 5.3335V4.3335H392.517L392.229 4.8335L393.095 5.3335ZM320.5 121.833C320.5 124.779 322.888 127.167 325.833 127.167C328.779 127.167 331.167 124.779 331.167 121.833C331.167 118.888 328.779 116.5 325.833 116.5C322.888 116.5 320.5 118.888 320.5 121.833ZM57.4997 365.333C57.4997 368.279 59.8875 370.667 62.833 370.667C65.7785 370.667 68.1663 368.279 68.1663 365.333C68.1663 362.388 65.7785 360 62.833 360C59.8875 360 57.4997 362.388 57.4997 365.333ZM132.333 365.333V366.333H132.91L133.199 365.833L132.333 365.333ZM194.261 248.833C194.261 251.779 196.649 254.167 199.594 254.167C202.54 254.167 204.928 251.779 204.928 248.833C204.928 245.888 202.54 243.5 199.594 243.5C196.649 243.5 194.261 245.888 194.261 248.833ZM456.761 365.333C456.761 368.279 459.149 370.667 462.095 370.667C465.04 370.667 467.428 368.279 467.428 365.333C467.428 362.388 465.04 360 462.095 360C459.149 360 456.761 362.388 456.761 365.333ZM392.595 365.333L391.729 365.833L392.017 366.333H392.595V365.333ZM320 248.833C320 251.779 322.388 254.167 325.333 254.167C328.279 254.167 330.667 251.779 330.667 248.833C330.667 245.888 328.279 243.5 325.333 243.5C322.388 243.5 320 245.888 320 248.833ZM170 185.333C170 188.279 172.387 190.667 175.333 190.667C178.279 190.667 180.666 188.279 180.666 185.333C180.666 182.388 178.279 180 175.333 180C172.387 180 170 182.388 170 185.333ZM-0.00032568 185.333C-0.00032568 188.279 2.38749 190.667 5.33301 190.667C8.27853 190.667 10.6663 188.279 10.6663 185.333C10.6663 182.388 8.27853 180 5.33301 180C2.38749 180 -0.00032568 182.388 -0.00032568 185.333ZM344.261 185.333C344.261 188.279 346.649 190.667 349.595 190.667C352.54 190.667 354.928 188.279 354.928 185.333C354.928 182.388 352.54 180 349.595 180C346.649 180 344.261 182.388 344.261 185.333ZM514.261 185.333C514.261 188.279 516.649 190.667 519.595 190.667C522.54 190.667 524.928 188.279 524.928 185.333C524.928 182.388 522.54 180 519.595 180C516.649 180 514.261 182.388 514.261 185.333ZM337.967 185.65H336.967C336.967 226.694 303.694 259.967 262.65 259.967V260.967V261.967C304.799 261.967 338.967 227.799 338.967 185.65H337.967ZM262.65 260.967V259.967C221.606 259.967 188.333 226.694 188.333 185.65H187.333H186.333C186.333 227.799 220.501 261.967 262.65 261.967V260.967ZM187.333 185.65H188.333C188.333 144.606 221.606 111.333 262.65 111.333V110.333V109.333C220.501 109.333 186.333 143.502 186.333 185.65H187.333ZM262.65 110.333V111.333C303.694 111.333 336.967 144.606 336.967 185.65H337.967H338.967C338.967 143.502 304.799 109.333 262.65 109.333V110.333ZM62.333 5.3335V6.3335H131.833V5.3335V4.3335H62.333V5.3335ZM131.833 5.3335L130.967 5.8335L198.228 122.333L199.094 121.833L199.96 121.333L132.699 4.8335L131.833 5.3335ZM462.595 5.3335V4.3335H393.095V5.3335V6.3335H462.595V5.3335ZM393.095 5.3335L392.229 4.8335L324.967 121.333L325.833 121.833L326.699 122.333L393.961 5.8335L393.095 5.3335ZM62.833 365.333V366.333H132.333V365.333V364.333H62.833V365.333ZM132.333 365.333L133.199 365.833L200.46 249.333L199.594 248.833L198.728 248.333L131.467 364.833L132.333 365.333ZM462.095 365.333V364.333H392.595V365.333V366.333H462.095V365.333ZM392.595 365.333L393.461 364.833L326.199 248.333L325.333 248.833L324.467 249.333L391.729 365.833L392.595 365.333ZM175.333 185.333V184.333H5.33301V185.333V186.333H175.333V185.333ZM349.595 185.333V186.333H519.595V185.333V184.333H349.595V185.333Z"
            fill="#EBB811"
          />
        </svg>

        {/* left column — blue cards */}
        <div className="relative z-10 h-[760px]">
          {blueCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{ top: `${bluePositions[i].top}%`, right: `${bluePositions[i].x}px` }}
              className="absolute w-full max-w-[340px] -translate-y-1/2"
            >
              <InfoCard card={card} accent="blue" />
            </motion.div>
          ))}
        </div>

        {/* hub column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative z-10 flex justify-center"
        >
          <Hub />
        </motion.div>

        {/* right column — gold cards */}
        <div className="relative z-10 h-[760px]">
          {goldCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{ top: `${goldPositions[i].top}%`, left: `${goldPositions[i].x}px` }}
              className="absolute w-full max-w-[340px] -translate-y-1/2"
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