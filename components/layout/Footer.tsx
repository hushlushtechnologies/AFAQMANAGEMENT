 "use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Our Group", href: "/#group-companies" },
  { label: "Afaq Investment Opportunities", href: "/investment-opportunities" },
];

const serviceLinks = [
  { label: "Investment Services", href: "/services/investment-services" },
  { label: "Business Consultancy", href: "/services/business-consultancy" },
  { label: "PRO & Government Services", href: "/services/pro-government-services" },
  { label: "Company Formation", href: "/services/company-formation" },
  { label: "Digital Business Solutions", href: "/services/digital-business-solutions" },
  { label: "Investors & Opportunities", href: "/services/afaq-investors" },
];

const groupLinks = [
  { label: "Afaq Al Khaleej Management Consultant", href: "https://www.afaqmanagement.com/" },
  { label: "Afaq Al Manzil Properties", href: "https://www.afaqalmanzilproperties.com/" },
  { label: "Afaq Al Manzil Interiors", href: "https://www.afaqalmanzilinteriors.com/" },
  { label: "Afaq Al Barakha Investment", href: "https://www.afaqalbarakha.com/" },
  { label: "Hush Lush Technologies", href: "https://www.hushlushtechnologies.com/" },
  { label: "Hush Lush Events", href: "https://www.hushlushevents.com/" },
  { label: "Hush Lush Hospitality", href: "https://www.hushlushs.com/" },
  { label: "Optimus Megatron Garage", href: "https://www.optimusmegatroncarsgarage.com/" },
  { label: "Optimus Megatron Cars", href: "https://www.optimusmegatroncars.com" },
];

const socialLinks = [
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/971527094940" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/company/afaqalkhaleej" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/afaq_alkhaleej_uae" },
  { icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com/afaqalkhaleej" },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-muted-foreground">{title}</h4>
      <ul className="mt-5 space-y-3.5">
        {links.map((link) => {
          const isExternal = /^https?:\/\//.test(link.href);
          return (
            <li key={link.label}>
              {isExternal ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/90 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="text-sm text-foreground/90 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 pb-16 pt-4 lg:px-10"
      >
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          {/* logo + about + contact */}
          <div>
            <div className="flex flex-col items-center gap-0.5">
              <Image src="/images/logo.svg" alt="AFAQ" width={56} height={56} className="h-14 w-14 object-contain" />
              <span className="text-[9px] tracking-[0.2em] text-primary">
                AL KHALEEJ MANAGEMENT CONSULTANTS
              </span>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Connecting Investors with trusted opportunities and empowering
              businesses to grow, establish, and succeed across the UAE and
              Beyond
            </p>

            <div className="mt-5 h-px w-10 bg-primary" />

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                  <Phone size={15} />
                </span>
                <a href="tel:+971527094940" className="text-sm text-foreground/90 hover:text-primary">
                  +971 52 709 4940
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                  <Mail size={15} />
                </span>
                <a href="mailto:info@afaqmanagement.com" className="text-sm text-foreground/90 hover:text-primary">
                  info@afaqmanagement.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                  <MapPin size={15} />
                </span>
                <span className="text-sm leading-relaxed text-foreground/90">
                  Office No. 501 Al Zarouni Business center Al Barsha 1,
                  Sheikh Zayed Road, Dubai
                </span>
              </div>
            </div>
          </div>

          <FooterColumn title="Quick Links" links={quickLinks} />
          <FooterColumn title="Our Service" links={serviceLinks} />
          <FooterColumn title="Our Group of Companies" links={groupLinks} />
        </div>

        {/* social row */}
        <div className="mt-14 flex flex-col items-center gap-4 border-t border-border pt-10 sm:flex-row sm:justify-center sm:gap-6">
          <span className="text-sm font-semibold text-muted-foreground">Follow Us On</span>
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center gap-2 text-sm text-foreground/90 transition-colors hover:text-primary"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-background">
                <Icon size={14} />
              </span>
              {label}
            </a>
          ))}
        </div>
      </motion.div>

      {/* bottom bar */}
      <div className="bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-5 text-center sm:flex-row sm:justify-between sm:text-left lg:px-10">
          <p className="text-xs text-muted-foreground sm:text-sm">
            © 2026 Afaq Al Khaleej Management Consultant. All Rights Reserved.
            Designed by:{" "}
            <span className="font-semibold text-foreground">Hush Lush Technologies</span>
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground sm:text-sm">
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms-and-conditions" className="hover:text-primary">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}