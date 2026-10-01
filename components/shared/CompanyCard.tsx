 "use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Accent = "gold" | "purple" | "orange";

const accentClasses: Record<Accent, { text: string; border: string; hoverBg: string }> = {
  gold: { text: "text-primary", border: "border-primary", hoverBg: "hover:bg-primary" },
  purple: { text: "text-accent-purple", border: "border-accent-purple", hoverBg: "hover:bg-accent-purple" },
  orange: { text: "text-accent-orange", border: "border-accent-orange", hoverBg: "hover:bg-accent-orange" },
};

type CompanyCardProps = {
  image: string;
  logo: string;
  subBrand: string;
  name: string;
  category: string;
  description: string;
  accent: Accent;
  href: string;
  delay?: number;
};

export default function CompanyCard({
  image,
  logo,
  subBrand,
  name,
  category,
  description,
  accent,
  href,
  delay = 0,
}: CompanyCardProps) {
  const colors = accentClasses[accent];
  const isExternal = /^https?:\/\//.test(href);
  const linkClassName = `group/btn mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border ${colors.border} px-5 py-2 text-sm font-semibold ${colors.text} transition-all duration-300 ${colors.hoverBg} hover:text-background`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border"
    >
      <Image
        src={image}
        alt={name}
        fill
        unoptimized
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/10" />

      {/* logo — anchored to the top of the image, independent of the text block */}
      <div className="absolute left-6 top-6 z-10">
        {/* <Image src={logo} alt="" width={40} height={40} unoptimized className="h-14 w-14 object-contain" /> */}
         <Image src={logo} alt="" width={140} height={48} unoptimized className="h-12 w-auto max-w-[140px] object-contain" />
        {/* <span className="text-[10px] leading-tight text-muted-foreground">{subBrand}</span> */}
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        <h3 className="text-lg font-semibold text-foreground md:text-xl">{name}</h3>
        <span className={`mt-1 text-sm font-semibold ${colors.text}`}>{category}</span>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>

        {isExternal ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className={linkClassName}>
            Visit Company
            <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </a>
        ) : (
          <Link href={href} className={linkClassName}>
            Visit Company
            <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}