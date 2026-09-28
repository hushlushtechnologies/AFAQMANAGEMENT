 "use client";

import ClosingCta from "@/components/shared/ClosingCta";
import { motion } from "framer-motion";

const sections = [
  {
    number: 1,
    title: "Information We Collect",
    body: "We may collect information such as your name, email address, phone number, company details, service interests, and any information you voluntarily provide through our contact or consultation forms.",
  },
  {
    number: 2,
    title: "How We Use Your Information",
    body: "We may use your information to respond to enquiries, provide requested services, arrange consultations, improve our website and services, and communicate relevant business or investment information.",
  },
  {
    number: 3,
    title: "Information Sharing",
    body: "We do not sell or rent your personal information. Information may be shared with trusted service providers or relevant partners where necessary to provide our services or comply with applicable legal requirements.",
  },
  {
    number: 4,
    title: "Data Security",
    body: "We take reasonable measures to protect personal information from unauthorized access, misuse, loss, or disclosure. However, no online system can guarantee complete security.",
  },
  {
    number: 5,
    title: "Cookies & Analytics",
    body: "Our website may use cookies and analytics technologies to understand website usage, improve performance, and enhance the user experience. You can manage cookies through your browser settings where applicable.",
  },
  {
    number: 6,
    title: "Third-Party Links",
    body: "Our website may contain links to external websites or services. Afaq Al Khaleej Management Consultancy is not responsible for the privacy practices or content of third-party websites.",
  },
  {
    number: 7,
    title: "Your Information",
    body: "You may contact us to request access to, correction of, or deletion of personal information we hold about you, subject to applicable legal and regulatory requirements.",
  },
  {
    number: 8,
    title: "Policy Updates",
    body: "We may update this Privacy Policy when necessary. Any changes will be published on this page with an updated revision date.",
  },
];

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          Your privacy matters to us. This policy explains how Afaq Al
          Khaleej Management Consultancy collects, uses, protects, and
          manages your personal information when you interact with our
          website and services.
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
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">9. Contact Us</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
            For questions about this Privacy Policy or how your information
            is handled, please contact:
          </p>

          <div className="mt-5 space-y-1 text-sm text-foreground/90 md:text-base">
            <p className="font-semibold text-foreground">Afaq Al Khaleej Management Consultancy</p>
            <p className="text-muted-foreground">Dubai, United Arab Emirates</p>
            <p className="text-muted-foreground">Email: info@afaqmanagement.com</p>
            <p className="text-muted-foreground">Phone: +971 52 709 4940</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="border-t border-border pt-10"
        >
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">Your Privacy Matters</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            We value your trust and are committed to handling your personal
            information responsibly.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            If you have any questions or privacy-related concerns, our team
            is here to assist you.
          </p>
        </motion.div>
      </div>

        <ClosingCta />
    </section>
  );
}