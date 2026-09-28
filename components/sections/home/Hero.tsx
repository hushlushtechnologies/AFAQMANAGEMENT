 "use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  Building2,
  TrendingUp,
  Handshake,
} from "lucide-react";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";

const socialLinks = [
  { icon: FaWhatsapp, href: "#", label: "WhatsApp" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
];

const stats = [
  { icon: Globe2, label: "UAE - Wide Reach" },
  { icon: Building2, label: "Multi Industries Expertise" },
  { icon: TrendingUp, label: "Growth Focused Approach" },
  { icon: Handshake, label: "End to End Support" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const statsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const statItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={sectionRef}
      className="relative mx-4 my-6 overflow-hidden rounded-[2.5rem] md:mx-8 md:my-10 lg:mx-12"
    >
      {/* base background — scroll parallax wrapper + continuous ambient zoom */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 animate-hero-zoom">
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* floating ambient glow — extra depth, decorative only */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 animate-float-slow rounded-full bg-primary/20 blur-[90px]" />

      {/* skyline illustration — one-time fade/scale reveal on mount */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[75%] grayscale-75"
      >
        <Image
          src="/images/hero-skyline.png"
          alt=""
          fill
          className="object-cover object-bottom blur-[2px]"
        />
      </motion.div>

      {/* left decorative column: line / socials / line */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="absolute left-[10%] top-20 z-10 hidden flex-col items-center gap-6 md:flex"
      >
        <div className="h-36 w-0.5 rounded-full bg-foreground" />
        <div className="flex flex-col gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground text-foreground transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-primary hover:text-primary hover:shadow-[0_0_14px_rgba(235,184,17,0.55)]"
            >
              <Icon size={14} />
            </Link>
          ))}
        </div>
        <div className="h-36 w-0.5 rounded-full bg-foreground" />
      </motion.div>

      {/* main content — staggered reveal */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl px-6 pb-20 pt-24 text-center md:pt-32"
      >
        <motion.h1
          variants={itemVariants}
          className="font-heading text-3xl font-light leading-[1.15] text-background sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Connecting Opportunities with Ambition Across the{" "}
          <span className="text-primary">UAE</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-2xl text-sm font-semibold text-card md:text-base"
        >
          Afaq Al Khaleej Management helps investors, entrepreneurs and
          business navigate the UAE market through investment advisory,
          business consultancy, company formation, feasibility studies, PRO
          services and digital solutions
        </motion.p>

    <motion.div
  variants={itemVariants}
  className="mt-8 flex w-full max-w-xs flex-col items-center justify-center gap-4 sm:max-w-none sm:w-auto sm:flex-row mx-auto"
>
  <Link
    href="/services"
    className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.55)] sm:w-auto"
  >
    Explore our Services
    <ArrowRight
      size={16}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>
  <Link
    href="/contact-us"
    className="flex w-full items-center justify-center rounded-full border-2 border-accent-blue px-7 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-blue hover:text-foreground hover:shadow-[0_0_24px_rgba(29,123,224,0.45)] sm:w-auto"
  >
    Book a Consultation
  </Link>
</motion.div>

        {/* stats bar — nested stagger + per-item hover */}
        <motion.div
          variants={statsContainerVariants}
          className="mx-auto mt-14 flex max-w-4xl flex-col gap-6 rounded-3xl border border-foreground bg-white/10 px-8 py-6 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between"
        >
          {stats.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={statItemVariants}
              whileHover={{ y: -4 }}
              className="group flex items-center gap-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/80 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-background group-hover:shadow-[0_0_16px_rgba(235,184,17,0.5)]">
                <Icon size={16} />
              </span>
              <span className="text-left text-xs font-medium text-background md:text-sm">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* bottom-left caption */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-[15%] z-10 hidden items-center gap-3 md:flex"
      >
        <span className="h-0.5 w-14 rounded-full bg-foreground" />
        <span className="text-xs font-medium text-foreground">
          Supporting Investors &amp; Business Across the UAE
        </span>
      </motion.div>
    </section>
  );
}