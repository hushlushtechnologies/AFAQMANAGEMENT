"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
  href: string;
  checklist?: string[];
  secondaryCta?: { label: string; href: string };
  className?: string;
  delay?: number;
};

export default function ServiceCard({
  image,
  title,
  description,
  href,
  checklist,
  secondaryCta,
  className = "",
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`group flex flex-col overflow-hidden rounded-3xl border border-border bg-card ${className}`}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="relative flex flex-1 flex-col px-6 pb-6 pt-8">
        {/* accent tick + icon badge, overlapping the image edge */}
        <div className="absolute -top-6 left-6 flex items-center gap-2">
          <span className="h-6 w-0.5 rounded-full bg-primary" />
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary bg-card text-primary">
            <ArrowUpRight size={16} />
          </span>
        </div>

        <h3 className="text-lg font-semibold text-foreground md:text-xl">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {checklist && (
          <ul className="mt-4 space-y-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/70 text-primary">
                  <Check size={11} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-3">
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(235,184,17,0.5)]"
            >
              {secondaryCta.label}
            </Link>
          )}
          <Link
            href={href}
            className="group/btn inline-flex items-center gap-1.5 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-background"
          >
            Discover More
            <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
