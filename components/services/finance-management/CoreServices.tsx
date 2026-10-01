 "use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Finance Management",
    description: "Review financial performance, monitor cash flow, analyze profitability, and identify areas requiring attention.",
    image: "/images/services/finance-management/finance-management.png",
  },
  {
    number: "02",
    title: "CFO Advisory",
    description: "Support budgeting, cost control, financial planning, and business decisions with management-focused insights.",
    image: "/images/services/finance-management/cfo-advisory.png",
  },
  {
    number: "03",
    title: "Accounting Coordination",
    description: "Work alongside the client's accounting team to use accurate records, maintain organized processes, and improve financial visibility.",
    image: "/images/services/finance-management/accounting-coordination.png",
  },
  {
    number: "04",
    title: "Management Reporting",
    description: "Deliver clear monthly reports, highlight financial trends, and identify recommended actions for management review.",
    image: "/images/services/finance-management/management-reporting.png",
  },
];

function ServiceCard({ service, delay }: { service: (typeof services)[number]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative flex h-[480px] flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:z-10 hover:-translate-y-6 hover:border-primary/40 hover:bg-surface hover:shadow-[0_0_40px_rgba(235,184,17,0.15)]"
    >
      <div className="relative z-10">
        <span className="text-2xl font-bold text-foreground">{service.number}</span>
        <h3 className="mt-3 text-xl font-semibold text-primary">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2">
        <Image
          src={service.image}
          alt={service.title}
          fill
          unoptimized
          className="object-cover opacity-70"
          style={{
            maskImage: "linear-gradient(to top, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 40%, transparent 100%)",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function CoreServices() {
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl font-light leading-[1.2] text-foreground sm:text-5xl"
        >
          Our Core <span className="text-primary">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          We bring accounting information, financial analysis, and management
          decision-making together in one structured model — helping
          businesses gain visibility, maintain control, and plan with
          confidence.
        </motion.p>

        <div className="mx-auto mt-6 flex items-center justify-center gap-2">
          <span className="h-px w-10 bg-primary/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="h-px w-10 bg-primary/60" />
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} delay={i * 0.1} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-gradient-card px-8 py-6 sm:flex-row"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-background">
            <Image src="/images/logo.svg" alt="AFAQ" width={28} height={28} />
          </div>
          <div className="hidden h-10 w-px bg-border sm:block" />
          <p className="text-center text-lg font-light leading-snug text-foreground sm:text-left sm:text-xl">
            Your <span className="font-semibold text-primary">Accountant.</span>{" "}
            Our <span className="font-semibold text-primary">Financial</span>
            <br />
            Insight. Better Decisions.
          </p>
        </div>

        <Link
          href="/contact-us"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
        >
          Connect with Us
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}