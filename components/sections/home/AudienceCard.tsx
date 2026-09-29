 "use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

type Feature = { icon: LucideIcon; title: string; description: string };

type AudienceCardProps = {
  eyebrow: string;
  heading: string;
  paragraph: string;
  features: Feature[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: string;
  accent: "blue" | "gold";
  delay?: number;
};

export default function AudienceCard({
  eyebrow,
  heading,
  paragraph,
  features,
  primaryCta,
  secondaryCta,
  image,
  accent,
  delay = 0,
}: AudienceCardProps) {
  const isBlue = accent === "blue";
  const accentText = isBlue ? "text-accent-blue" : "text-primary";
  const accentBorder = isBlue ? "border-accent-blue" : "border-primary";
  const primaryBtn = isBlue
    ? "bg-gradient-silver hover:shadow-[0_0_24px_rgba(180,180,180,0.5)]"
    : "bg-gradient-gold hover:shadow-[0_0_24px_rgba(235,184,17,0.5)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border sm:aspect-[4/5]"
    >
      <Image src={image} alt={heading} fill unoptimized className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />

      <div className="relative z-10 flex h-full flex-col p-6">
        <div className={`border-l-2 ${accentBorder} pl-3`}>
          <span className={`text-sm font-semibold ${accentText}`}>{eyebrow}</span>
        </div>

        <h3 className="font-heading mt-4 text-xl font-light leading-[1.2] text-foreground sm:text-2xl">
          {heading}
        </h3>

        <p className={`mt-4 border-l-2 ${accentBorder}/50 pl-3 text-sm leading-relaxed text-muted-foreground`}>
          {paragraph}
        </p>

        <div className="mt-5 space-y-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-foreground/30 text-foreground">
                <Icon size={15} />
              </span>
              <div>
                <span className="block text-sm font-semibold text-foreground sm:text-base">{title}</span>
                <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {description}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-2.5 pt-5">
          <Link
            href={primaryCta.href}
            className={`inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] ${primaryBtn}`}
          >
            {primaryCta.label}
            <ArrowRight size={16} />
          </Link>
          <Link
            href={secondaryCta.href}
            className={`inline-flex w-fit items-center gap-2 rounded-full border ${accentBorder} px-5 py-2.5 text-sm font-semibold ${accentText} transition-all duration-300 hover:bg-white/5`}
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}