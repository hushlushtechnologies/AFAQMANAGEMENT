"use client";

import ClosingCta from "@/components/shared/ClosingCta";
import { motion } from "framer-motion";

const sections = [
  {
    number: 1,
    title: "Website Use",
    body: "This website is provided for general information about our company, services, and business or investment opportunities. You agree to use the website only for lawful purposes.",
  },
  {
    number: 2,
    title: "Information & Content",
    body: "We aim to keep website information accurate and up to date. However, content may change and should not be considered professional, legal, financial, tax, or investment advice unless provided through a formal engagement.",
  },
  {
    number: 3,
    title: "Investment Information",
    body: "Any investment opportunities, projections, ROI figures, forecasts, or other financial information displayed on this website are for informational purposes only and do not guarantee future performance or returns.",
  },
  {
    number: 4,
    title: "Services",
    body: "The availability, scope, pricing, timelines, and terms of our consultancy, company formation, PRO, investment, and other services may vary depending on individual requirements and applicable UAE regulations.",
  },
  {
    number: 5,
    title: "Intellectual Property",
    body: "Website content, including text, branding, graphics, designs, and other materials, belongs to Afaq Al Khaleej Management Consultancy or its respective licensors and may not be reproduced without permission.",
  },
  {
    number: 6,
    title: "Third-Party Services",
    body: "Our website may contain links to third-party websites, platforms, or services. We are not responsible for their content, availability, policies, or practices.",
  },
  {
    number: 7,
    title: "Limitation of Liability",
    body: "To the extent permitted by applicable law, Afaq Al Khaleej Management Consultancy is not responsible for losses arising from reliance on general website information, third-party content, or circumstances beyond our reasonable control.",
  },
  {
    number: 8,
    title: "Privacy",
    body: "Personal information submitted through this website is handled in accordance with our Privacy Policy.",
  },
  {
    number: 9,
    title: "Changes to These Terms",
    body: "We may update these Terms & Conditions when necessary. Changes will become effective when the revised terms are published on this page.",
  },
  {
    number: 10,
    title: "Governing Law",
    body: "These Terms & Conditions are governed by the applicable laws of the United Arab Emirates and the laws and jurisdiction applicable to the company's establishment in the UAE.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary"
        >
          Legal Policy
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-4xl font-bold text-foreground sm:text-5xl"
        >
          Terms &amp; Condition
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          Welcome to the website of Afaq Al Khaleej Management Consultancy.
          By accessing or using this website, you agree to the following
          Terms &amp; Conditions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 text-sm font-semibold text-accent-blue"
        >
          Last Updated: 07/09/2026
        </motion.p>
      </div>

      <div className="mx-auto mt-16 max-w-4xl space-y-10 px-6">
        {sections.map((s, i) => (
          <motion.div
            key={s.number}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
          >
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">
              {s.number}. {s.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{s.body}</p>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">11. Contact Us</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
            For questions about these Terms &amp; Conditions, please contact:
          </p>

          <div className="mt-5 space-y-1 text-sm text-foreground/90 md:text-base">
            <p className="font-semibold text-foreground">Afaq Al Khaleej Management Consultancy</p>
            <p className="text-muted-foreground">Dubai, United Arab Emirates</p>
            <p className="text-muted-foreground">Email: info@afaqmanagement.com</p>
            <p className="text-muted-foreground">Phone: +971 52 709 4940</p>
          </div>
        </motion.div>
      </div>
      <ClosingCta/>
    </section>
  );
}