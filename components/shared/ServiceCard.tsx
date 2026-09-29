 "use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, LucideIcon } from "lucide-react";

type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
  href: string;
  icon?: LucideIcon;
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
  icon: Icon = ArrowUpRight,
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
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col px-6 pb-5 pt-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary">
          <Icon size={18} />
        </span>

        <h3 className="mt-3 text-lg font-semibold text-foreground md:text-xl">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {checklist && (
          <ul className="mt-6 space-y-5 flex flex-col gap-2.5">
            {checklist.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm text-muted-foreground"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/70 text-primary">
                  <Check size={11} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-4">
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
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}