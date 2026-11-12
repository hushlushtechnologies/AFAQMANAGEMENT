"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Calculator, Check, LifeBuoy, type LucideIcon } from "lucide-react";
import MarqueeBanner from "@/components/ui/MarqueeBanner";
import { openNavMenu } from "@/lib/navEvents";

const marqueeItems = [
  "Business Setup Experts",
  "Free Zone, Mainland & Offshore",
  "Accounting & Bookkeeping",
  "Audit & Assurance",
  "VAT & Corporate Tax",
  "Golden Visa & PRO Support",
  "UAE-Wide Business Support",
  "Building Sustainable Growth",
];

type ParentService = {
  /** must match the nav label in lib/navigation.ts */
  menu: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  highlights: string[];
};

const services: ParentService[] = [
  {
    menu: "Business Setup",
    title: "Business Setup",
    description:
      "Company formation in Dubai and KSA, across UAE free zones, mainland and offshore jurisdictions, with the right business licence for your activity.",
    image: "/images/services/company-formation.png",
    icon: Building2,
    highlights: ["Company Formation", "Free Zones", "Mainland", "Offshore", "Business Licensing"],
  },
  {
    menu: "Accounting & Tax",
    title: "Accounting & Tax",
    description:
      "Bookkeeping, accounting, auditing, VAT and corporate tax, plus advisory services such as CFO support, AML compliance and business restructuring.",
    image: "/images/services/investment-services.png",
    icon: Calculator,
    highlights: ["Accounting", "Auditing", "TAX Services", "Other Services"],
  },
  {
    menu: "Business Support",
    title: "Business Support",
    description:
      "Legal services, bank account opening, Golden Visa, UAE foundations, trademark registration and PRO services to keep your business running smoothly.",
    image: "/images/services/afaq-investors.png",
    icon: LifeBuoy,
    highlights: ["Legal Services", "Bank Accounts", "Golden Visa", "Trademarks", "PRO Services"],
  },
];

export default function ParentServices() {
  return (
    <section className="my-16 lg:my-28">
      <MarqueeBanner items={marqueeItems} rotate />

      <div className="mx-auto mt-16 max-w-3xl px-6 text-center">
        <h2 className="font-heading text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl">
          Everything You Need to <span className="text-primary">Build,</span>
          <br />
          <span className="text-primary">Run &amp; Grow</span> in the UAE
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground md:text-base">
          From setting up your company to accounting, tax and everyday business support, Afaq Al Khaleej
          provides end-to-end solutions tailored to your goals.
        </p>
        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.menu}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary">
                  <Icon size={18} />
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground md:text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>

                <ul className="mt-5 flex flex-col gap-2.5">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/70 text-primary">
                        <Check size={11} />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <button
                    type="button"
                    onClick={() => openNavMenu(s.menu)}
                    className="group/btn inline-flex items-center gap-1.5 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-background"
                  >
                    Explore {s.title}
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
