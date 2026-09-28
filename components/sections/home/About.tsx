 "use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  Variants,
} from "framer-motion";
import { ArrowRight, Handshake, TrendingUp } from "lucide-react";

const paragraphs = [
  "Afaq Al Khaleej Management is a UAE-based investment and business consultancy helping investors, entrepreneurs and businesses make informed decisions and pursue sustainable growth.",
  "Our expertise spans investment advisory, business consultancy, company formation, feasibility studies, PRO and government services, and digital business solutions.",
  "With a strong understanding of the UAE business environment, we simplify complex process, identify opportunities and provide practical support from planning to execution.",
];

const headingLines = [
  { text: "Strategic Guidance for", accent: false },
  { text: "Business, Investors &", accent: true },
  { text: "Entrepreneurs", accent: false },
];

const headingContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const headingLine: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const paraContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
};

const paraItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);

  // scroll-linked parallax: image column drifts opposite to scroll direction
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-30px", "30px"]);

  // cursor-following 3D tilt on the photo group
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 20 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  function handleTiltMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = tiltRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 8);
    rotateX.set(-py * 8);
  }
  function handleTiltLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <section
      ref={sectionRef}
      className="mx-4 my-16 overflow-hidden md:mx-8 lg:mx-12 lg:my-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
        {/* left column — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center gap-3 border-l-2 border-primary pl-4"
          >
            {/* <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span> */}
            <span className="text-xs font-semibold text-primary sm:text-sm">
              About Afaq Al Khaleej Management
            </span>
          </motion.div>

          <motion.h2
            variants={headingContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="font-heading mt-6 text-3xl font-light leading-[1.15] text-foreground sm:text-4xl md:text-5xl"
          >
            {headingLines.map(({ text, accent }) => (
              <motion.span
                key={text}
                variants={headingLine}
                className={`block ${accent ? "text-primary" : ""}`}
              >
                {text}
              </motion.span>
            ))}
          </motion.h2>

          <motion.div
            variants={paraContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-6 space-y-4 border-l-2 border-primary/60 pl-4"
          >
            {paragraphs.map((text) => (
              <motion.p
                key={text}
                variants={paraItem}
                className="text-sm leading-relaxed text-muted-foreground md:text-base"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link
              href="/about-us"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
            >
              Discover Afaq Al Khaleej
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* right column — image + floating cards */}
 <motion.div
  style={{ y: imgY }}
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative mx-auto w-full max-w-[280px] pb-16 sm:max-w-sm sm:pb-20 md:max-w-md lg:mx-0 lg:ml-auto"
>
  <div
    ref={tiltRef}
    onMouseMove={handleTiltMove}
    onMouseLeave={handleTiltLeave}
    style={{ perspective: 1000 }}
  >
    <motion.div
      style={{ rotateX: springRotateX, rotateY: springRotateY }}
      className="group relative h-[320px] w-full overflow-hidden rounded-[2rem] sm:h-[400px] md:h-[480px] lg:h-[560px]"
    >
      <Image
        src="/images/about-photo.jpg"
        alt="Afaq Al Khaleej Management team meeting"
        fill
        unoptimized
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </motion.div>

    {/* card 1 — Trusted Partnership */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileHover={{ y: -4, scale: 1.04 }}
      className="absolute -left-3 top-[26%] flex w-20 flex-col items-center gap-1.5 rounded-xl border border-border bg-gradient-card px-2.5 py-2.5 text-center shadow-xl sm:-left-6 sm:w-32 sm:gap-2 sm:rounded-2xl sm:px-4 sm:py-4"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary text-primary sm:h-9 sm:w-9">
        <Handshake size={12} className="sm:hidden" />
        <Handshake size={16} className="hidden sm:block" />
      </span>
      <span className="text-[9px] font-semibold leading-tight text-foreground sm:text-xs">
        Trusted Partnership
      </span>
    </motion.div>

    {/* card 2 — Investment Growth */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.45 }}
      whileHover={{ y: -4, scale: 1.03 }}
      className="absolute -bottom-6 -left-3 w-44 rounded-xl border border-border bg-gradient-card p-3 shadow-xl sm:-bottom-8 sm:-left-6 sm:w-64 sm:rounded-2xl sm:p-5"
    >
      <span className="text-[9px] font-medium text-foreground sm:text-xs">
        Investment Growth
      </span>
      <div className="  flex items-end justify-between gap-2 sm:gap-3">
        <span className="whitespace-nowrap text-sm font-bold text-primary sm:text-2xl">
          4 - 6% ROI
        </span>
        <div className="relative h-10 w-14 shrink-0 sm:h-16 sm:w-24">
          <Image
            src="/images/investment-growth-chart.png"
            alt="Investment growth chart"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>

    {/* card 3 — Strategy Growth */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.6 }}
      whileHover={{ y: -4, scale: 1.04 }}
      className="absolute -bottom-3 -right-2 flex w-20 flex-col items-center gap-1.5 rounded-xl border border-border bg-gradient-card px-2.5 py-2.5 text-center shadow-xl sm:-bottom-4 sm:-right-4 sm:w-32 sm:gap-2 sm:rounded-2xl sm:px-4 sm:py-4"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary text-primary sm:h-9 sm:w-9">
        <TrendingUp size={12} className="sm:hidden" />
        <TrendingUp size={16} className="hidden sm:block" />
      </span>
      <span className="text-[9px] font-semibold leading-tight text-foreground sm:text-xs">
        Strategy Growth
      </span>
    </motion.div>
  </div>
</motion.div>
      </div>
    </section>
  );
}