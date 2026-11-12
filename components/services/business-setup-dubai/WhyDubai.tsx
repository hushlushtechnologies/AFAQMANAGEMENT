"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Calculator,
  Globe,
  KeyRound,
  Layers,
  LucideIcon,
  Percent,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const reasons: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Layers, title: "Flexible Setup Options", text: "Choose from a wide range of budgets, licence types, locations and premises." },
  { icon: Sparkles, title: "Attractive Business Benefits", text: "Compare licensing options, infrastructure and ongoing compliance for your planned business." },
  { icon: Users, title: "Diverse, Skilled Workforce", text: "Tap into a multicultural talent pool of professionals from around the world." },
  { icon: TrendingUp, title: "Thriving Business Climate", text: "A stable, growth-oriented environment for companies of every size." },
  { icon: Globe, title: "Strategic Location", text: "Reach key markets across Asia, Europe and Africa from a single hub." },
  { icon: Building2, title: "World-Class Infrastructure", text: "Modern facilities, advanced technology and seamless logistics." },
];

const advantages: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Percent, title: "Corporate Tax Conditions", text: "Qualifying Free Zone Persons may benefit from 0% Corporate Tax on Qualifying Income when conditions are met. Free zone or offshore registration alone is not an automatic exemption." },
  { icon: Calculator, title: "Compare Setup Costs", text: "Look at total first-year and renewal costs for your activity, licence, workspace and visas — and ask for an itemised written quote before choosing a package." },
  { icon: BadgeCheck, title: "Golden Visa Eligibility", text: "Each Golden Visa route has its own eligibility and documentation requirements. Confirm the criteria and approval process for your category before applying." },
  { icon: KeyRound, title: "100% Foreign Ownership", text: "Many mainland activities and free zone structures allow full foreign ownership. Check the conditions and any extra approvals for your activity." },
];

export default function WhyDubai() {
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <SectionHeader
        eyebrow="Why Dubai"
        heading={
          <>
            Why Set Up Your Business <span className="text-primary">in Dubai?</span>
          </>
        }
        paragraph="Looking for a dynamic hub for your next company? Dubai stands out for many reasons."
      />

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map(({ icon: Icon, title, text }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="group flex flex-col items-center rounded-2xl bg-gradient-card px-6 py-10 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
              <Icon size={22} />
            </span>
            <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </motion.div>
        ))}
      </div>

      {/* advantages */}
      <div className="mx-auto mt-24 grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <div className="border-l-2 border-primary pl-4">
            <span className="text-sm font-semibold text-primary">Advantages</span>
          </div>
          <h2 className="font-heading mt-5 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl">
            The Advantages of Setting Up <span className="text-primary">in Dubai</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            Often called the Silicon Valley of the Middle East, Dubai is home to
            entrepreneurs, startups, agencies and conglomerates alike. Streamlined
            processes and advanced digital services make it easy for international
            founders to register online, and more than 2,000 recognised economic
            activities are available for licensing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {advantages.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.12 }}
              className="rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-gold text-background">
                <Icon size={20} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
