"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Globe, AppWindow, Smartphone, Code, LucideIcon } from "lucide-react";

const stats: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Globe, title: "Websites", description: "Build a powerful digital presence." },
  { icon: AppWindow, title: "Web Applications", description: "Turn complex processes into intuitive platforms." },
  { icon: Smartphone, title: "Mobile Apps", description: "Connect your business with customers anywhere." },
  { icon: Code, title: "Custom Software", description: "Technology designed around your operations." },
];

export default function DigitalSolutionsHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-16 lg:grid-cols-2 lg:gap-8 lg:pt-24">
        {/* left — copy, with watermark shield behind it */}
        <div className="relative">
          <Image
            src="/images/logo.svg"
            alt=""
            width={420}
            height={420}
            className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 opacity-[0.06] lg:block"
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative border-l-2 border-primary pl-4"
          >
            <span className="text-sm font-semibold text-primary">Digital Business Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading relative mt-6 text-4xl font-light leading-[1.15] text-foreground sm:text-5xl md:text-6xl"
          >
            Build <span className="text-primary">Smarter.</span>
            <br />
            Operate <span className="text-primary">Digitally.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-6 max-w-lg border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            Transform the way your business works with digital solutions
            built around your goals. From websites and applications to
            custom software, automation, UI/UX, and digital growth, Afaq
            helps turn business needs into practical digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
            >
              Discuss Your Project
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="rounded-full border-2 border-accent-blue px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-blue hover:shadow-[0_0_24px_rgba(29,123,224,0.45)]"
            >
              Explore More Services
            </Link>
          </motion.div>
        </div>

        {/* right — app mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="relative aspect-[6/5] w-full">
            <Image
              src="/images/services/digital-business-solutions/hero-phones.png"
              alt="Mobile app mockup showing a wedding planning app"
              fill
              unoptimized
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>

      {/* stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto mb-16 flex max-w-7xl flex-col gap-8 rounded-2xl border border-border bg-card px-8 py-6 sm:mx-6 sm:flex-row sm:flex-wrap sm:justify-between lg:mx-auto"
      >
        {stats.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
              <Icon size={18} />
            </span>
            <div>
              <span className="block text-base font-semibold text-foreground">{title}</span>
              <span className="mt-1 block max-w-[200px] text-sm leading-relaxed text-muted-foreground">
                {description}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}