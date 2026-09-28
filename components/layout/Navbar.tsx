 "use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { navLinks } from "@/lib/navigation";

function RollText({ text }: { text: string }) {
  return (
    <span className="relative inline-block h-[1.2em] overflow-hidden align-middle">
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {text}
      </span>
      <span
        aria-hidden
        className="absolute left-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full"
      >
        {text}
      </span>
    </span>
  );
}

function NavGroup({ links }: { links: typeof navLinks }) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="flex items-center gap-8">
      {links.map((link) => {
        const isActive = pathname === link.href;
        const hasChildren = !!link.children?.length;

        return (
          <div
            key={link.href}
            className="relative"
            onMouseEnter={() => hasChildren && setOpenDropdown(link.href)}
            onMouseLeave={() => hasChildren && setOpenDropdown(null)}
          >
            <Link
              href={link.href}
              className={`group relative flex items-center gap-1 pb-1.5 text-sm font-medium ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              <RollText text={link.label} />
              {hasChildren && (
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    openDropdown === link.href ? "rotate-180" : ""
                  }`}
                />
              )}
              <span
                className={`absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left bg-primary transition-transform duration-300 ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>

            {hasChildren && (
              <AnimatePresence>
                {openDropdown === link.href && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-3 min-w-[200px] rounded-lg border border-border bg-card p-2 shadow-xl"
                  >
                    {link.children!.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ContactButton() {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(90px circle at ${x}px ${y}px, rgba(255,255,255,0.5), transparent 70%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  return (
    <Link
      href="/contact-us"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="group relative hidden overflow-hidden rounded-full bg-gradient-gold px-6 py-2.5 text-sm font-semibold text-background transition-transform duration-200 hover:scale-[1.03] lg:block"
    >
      <motion.span
        style={{ background }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span className="relative z-10">Contact Us</span>
    </Link>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-sm lg:hidden"
        >
          <div className="flex h-full flex-col overflow-y-auto px-6 pb-10 pt-6">
            <div className="flex items-center justify-between">
              <Link href="/" onClick={onClose} className="flex items-center gap-2">
                <Image src="/images/logo.svg" alt="AFAQ" width={36} height={36} />
                {/* <span className="font-heading text-base font-semibold tracking-wide text-primary">
                  AFAQ
                </span> */}
              </Link>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mt-10 flex flex-1 flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                const hasChildren = !!link.children?.length;
                const isExpanded = expanded === link.href;

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 + i * 0.06 }}
                    className="border-b border-border"
                  >
                    <div className="flex items-center justify-between py-4">
                      <Link
                        href={link.href}
                        onClick={hasChildren ? undefined : onClose}
                        className={`text-lg font-medium ${
                          isActive ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                      {hasChildren && (
                        <button
                          onClick={() => setExpanded(isExpanded ? null : link.href)}
                          aria-label={`Toggle ${link.label} submenu`}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground"
                        >
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {hasChildren && (
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1 pb-4 pl-4">
                              {link.children!.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={onClose}
                                  className="rounded-md py-2.5 text-sm text-muted-foreground hover:text-primary"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.3 }}
              className="mt-6"
            >
              <Link
                href="/contact-us"
                onClick={onClose}
                className="flex w-full items-center justify-center rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-background"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [group1, group2] = [navLinks.slice(0, 2), navLinks.slice(2)];
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="h-[3px] w-full bg-gradient-gold" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center gap-0.5">
          <Image
            src="/images/logo.svg"
            alt="AFAQ Al Khaleej Management Consultants"
            width={44}
            height={44}
            priority
          />
          <span className="text-shine text-[9px] font-medium tracking-[0.2em]">
            AL KHALEEJ MANAGEMENT CONSULTANTS
          </span>
        </Link>

        {/* Nav groups */}
        <div className="hidden items-center lg:flex">
          <div className="mx-8 h-8 w-px bg-border" />
          <NavGroup links={group1} />
          <div className="mx-10 h-8 w-px bg-border" />
          <NavGroup links={group2} />
        </div>

        <ContactButton />

        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="text-foreground lg:hidden"
        >
          <Menu size={26} />
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}