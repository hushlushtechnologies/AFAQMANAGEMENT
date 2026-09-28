"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

type StatItem = {
  icon: LucideIcon;
  title: string;
  description?: string;
};

type SplitFeatureSectionProps = {
  eyebrow: string;
  heading: React.ReactNode;
  paragraphs: string[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: { src: string; alt: string; width: number; height: number };
  imagePosition: "left" | "right";
  stats?: StatItem[];
  compactStats?: boolean;
};

export default function SplitFeatureSection({
  eyebrow,
  heading,
  paragraphs,
  primaryCta,
  secondaryCta,
  image,
  imagePosition,
  stats,
  compactStats = false,
}: SplitFeatureSectionProps) {
  const imageBlock = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center"
    >
      <div className="animate-float-slow">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          unoptimized
          className="h-auto w-full max-w-[540px]"
        />
      </div>
    </motion.div>
  );

  const textBlock = (
    <div>
      <motion.div
        initial={{ opacity: 0, x: imagePosition === "left" ? 24 : -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="border-l-2 border-accent-blue pl-4"
      >
        <span className="text-sm font-semibold text-accent-blue">{eyebrow}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="font-heading mt-5 text-3xl font-light leading-[1.2] text-background sm:text-4xl md:text-5xl"
      >
        {heading}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-5 space-y-3 border-l-2 border-accent-blue/50 pl-4"
      >
        {paragraphs.map((text) => (
          <p key={text} className="text-sm leading-relaxed text-background/75 md:text-base">
            {text}
          </p>
        ))}
      </motion.div>

      {(primaryCta || secondaryCta) && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-7 flex flex-wrap items-center gap-3"
        >
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
            >
              {primaryCta.label}
              <ArrowRight size={16} />
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="rounded-full bg-gradient-silver px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(180,180,180,0.5)]"
            >
              {secondaryCta.label}
            </Link>
          )}
        </motion.div>
      )}

      {stats && stats.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-7 flex flex-wrap gap-x-6 gap-y-4"
        >
          {stats.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              whileHover={{ y: -3 }}
              className={`flex gap-3 ${compactStats ? "items-center" : "items-start"}`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-background text-background">
                <Icon size={16} />
              </span>
              <div>
                <span className="block text-sm font-semibold text-background">{title}</span>
                {description && (
                  <span className="mt-1 block max-w-[220px] text-xs leading-relaxed text-background/70">
                    {description}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
      {imagePosition === "left" ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          <div className="lg:order-2">{imageBlock}</div>
          <div className="lg:order-1">{textBlock}</div>
        </>
      )}
    </div>
  );
}