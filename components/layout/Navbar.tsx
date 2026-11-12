"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { OPEN_NAV_MENU_EVENT } from "@/lib/navEvents";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { navLinks, type MegaLink, type MegaTab } from "@/lib/navigation";

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

function MegaPanel({
  tabs,
  onNavigate,
}: {
  tabs: MegaTab[];
  onNavigate: () => void;
}) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-10">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-card px-8 pb-10 pt-8 shadow-2xl shadow-black/50">
        {/* soft gold glow behind the tabs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-28 left-1/2 h-56 w-[70%] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        />

        <div
          role="tablist"
          className="relative flex border-b border-border"
        >
          {tabs.map((t, i) => {
            const Icon = t.icon;
            const isActive = i === active;
            return (
              <button
                key={t.label}
                type="button"
                role="tab"
                aria-selected={isActive}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`relative flex flex-1 items-center justify-center gap-2.5 px-3 pb-5 pt-1 text-[15px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                <Icon size={18} strokeWidth={1.75} />
                <span className="whitespace-nowrap">{t.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="mega-tab-indicator"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    className="absolute inset-x-0 -bottom-px h-[2px] bg-gradient-gold"
                  >
                    <span className="absolute left-1/2 top-1/2 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-background">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                  </motion.span>
                )}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab.label}
            role="tabpanel"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className={
              tab.groups?.length
                ? "relative mt-9 grid grid-cols-3 gap-x-10 px-3"
                : tab.display === "list"
                  ? `relative mt-9 grid grid-flow-col gap-x-10 gap-y-2.5 px-3 ${
                      tab.columns === 2 ? "grid-cols-2" : "grid-cols-3"
                    }`
                  : "relative mt-10 flex flex-wrap gap-5"
            }
            style={
              tab.display === "list" && !tab.groups?.length
                ? {
                    gridTemplateRows: `repeat(${Math.ceil(
                      tab.links.length / (tab.columns ?? 3),
                    )}, auto)`,
                  }
                : undefined
            }
          >
            {tab.groups?.map((g, gi) => (
              <div key={g.title || gi} className="flex flex-col gap-2.5">
                {g.title && (
                  <p className="mb-1 text-[15px] font-semibold text-muted-foreground/70">
                    {g.title}
                  </p>
                )}
                {g.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={onNavigate}
                    className="w-fit text-[15px] text-primary/90 transition-all duration-200 hover:translate-x-1 hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
            {tab.links.map((l) =>
              tab.display === "list" ? (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={onNavigate}
                  className="w-fit text-[15px] text-primary/90 transition-all duration-200 hover:translate-x-1 hover:text-foreground"
                >
                  {l.label}
                </Link>
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={onNavigate}
                  className={`rounded-full px-9 py-3.5 text-[15px] font-semibold text-background shadow-lg shadow-black/30 transition-transform duration-200 hover:scale-[1.04] ${
                    l.variant === "silver"
                      ? "bg-gradient-silver"
                      : "bg-gradient-gold"
                  }`}
                >
                  {l.label}
                </Link>
              ),
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function MegaListPanel({
  links,
  onNavigate,
}: {
  links: MegaLink[];
  onNavigate: () => void;
}) {
  return (
    <div className="mx-auto max-w-4xl px-6 lg:px-10">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-card px-14 py-12 shadow-2xl shadow-black/50">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/3 h-48 w-[60%] rounded-full bg-primary/10 blur-3xl"
        />
        <div
          className="relative grid grid-flow-col grid-cols-2 gap-x-16 gap-y-4"
          style={{ gridTemplateRows: `repeat(${Math.ceil(links.length / 2)}, auto)` }}
        >
          {links.map((l, i) => (
            <motion.div
              key={l.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.03 * i }}
            >
              <Link
                href={l.href}
                onClick={onNavigate}
                className="inline-block text-[16px] text-foreground transition-all duration-200 hover:translate-x-1 hover:text-primary"
              >
                {l.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NavGroup({ links }: { links: typeof navLinks }) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // small delay so the cursor can travel from the link down to the panel
  const openMenu = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(key);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  // other components (e.g. home page service cards) can open a menu via openNavMenu()
  useEffect(() => {
    const onOpen = (e: Event) => {
      if (!window.matchMedia("(min-width: 1024px)").matches) return;
      const label = (e as CustomEvent<string>).detail;
      if (closeTimer.current) clearTimeout(closeTimer.current);
      setOpenDropdown(label);
    };
    window.addEventListener(OPEN_NAV_MENU_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_NAV_MENU_EVENT, onOpen);
  }, []);

  // close an open menu on outside click or Escape
  const groupRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!openDropdown) return;
    const onPointer = (e: MouseEvent) => {
      if (!groupRef.current?.contains(e.target as Node)) setOpenDropdown(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [openDropdown]);

  return (
    <div ref={groupRef} className="flex items-center gap-8">
      {links.map((link) => {
        const hasChildren = !!link.children?.length;
        const isMega = !!link.mega?.length || !!link.megaList?.length;
        const hasMenu = hasChildren || isMega;
        const isOpen = openDropdown === link.label;
        const isActive = !isMega && pathname === link.href;

        const labelContent = (
          <>
            <RollText text={link.label} />
            {hasMenu && (
              <ChevronDown
                size={14}
                className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            )}
            <span
              className={`absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left bg-primary transition-transform duration-300 ${
                isActive || isOpen
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </>
        );
        const labelClass = `group relative flex items-center gap-1 pb-1.5 text-sm font-medium ${
          isActive || isOpen
            ? "text-primary"
            : "text-muted-foreground hover:text-primary"
        }`;

        return (
          <div
            key={link.label}
            // mega panels position against the sticky <header>, so the wrapper
            // must not be `relative` for them
            className={isMega ? "" : "relative"}
            onMouseEnter={() => hasMenu && openMenu(link.label)}
            onMouseLeave={() => hasMenu && scheduleClose()}
          >
            {isMega ? (
              <button
                type="button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={() => (isOpen ? setOpenDropdown(null) : openMenu(link.label))}
                className={labelClass}
              >
                {labelContent}
              </button>
            ) : (
              <Link href={link.href} className={labelClass}>
                {labelContent}
              </Link>
            )}

            {isMega && (
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="absolute inset-x-0 top-full pt-3"
                  >
                    {link.mega?.length ? (
                      <MegaPanel
                        tabs={link.mega}
                        onNavigate={() => setOpenDropdown(null)}
                      />
                    ) : (
                      <MegaListPanel
                        links={link.megaList!}
                        onNavigate={() => setOpenDropdown(null)}
                      />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            )}

            {hasChildren && (
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-3 min-w-[200px] rounded-lg border border-border bg-card p-2 shadow-xl"
                  >
                    {link.children!.map((child) => {
                      const isChildActive = pathname === child.href;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block rounded-md px-3 py-2 text-sm ${
                            isChildActive
                              ? "bg-surface text-primary"
                              : "text-muted-foreground hover:bg-surface hover:text-primary"
                          }`}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
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

function MobileMenu({
  open,
  onClose,
  initialExpanded = null,
}: {
  open: boolean;
  onClose: () => void;
  initialExpanded?: string | null;
}) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(initialExpanded);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* dimmed/blurred backdrop — click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/50 backdrop-blur-sm"
          />

          {/* slide-in drawer, right side only */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col overflow-y-auto bg-background px-6 pb-8 pt-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <Link href="/" onClick={onClose} className="flex items-center gap-2">
                <Image src="/images/logo.svg" alt="AFAQ" width={36} height={36} />
              </Link>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mt-10 flex flex-col">
              {navLinks.map((link, i) => {
                const isMega = !!link.mega?.length || !!link.megaList?.length;
                const isActive = !isMega && pathname === link.href;
                const hasChildren = !!link.children?.length || isMega;
                const isExpanded = expanded === link.label;

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 + i * 0.06 }}
                    className="border-b border-border"
                  >
                    <div className="flex items-center justify-between py-4">
                      {isMega ? (
                        <button
                          type="button"
                          onClick={() => setExpanded(isExpanded ? null : link.label)}
                          className={`text-left text-lg font-medium ${
                            isExpanded ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {link.label}
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={hasChildren ? undefined : onClose}
                          className={`text-lg font-medium ${
                            isActive ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                      {hasChildren && (
                        <button
                          onClick={() => setExpanded(isExpanded ? null : link.label)}
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
                            {isMega ? (
                              link.megaList?.length ? (
                              <div className="flex flex-col gap-1 pb-4 pl-4">
                                {link.megaList.map((l) => (
                                  <Link
                                    key={l.label}
                                    href={l.href}
                                    onClick={onClose}
                                    className="py-2.5 text-sm text-muted-foreground hover:text-primary"
                                  >
                                    {l.label}
                                  </Link>
                                ))}
                              </div>
                              ) : (
                              <div className="flex flex-col gap-5 pb-5 pl-1">
                                {link.mega!.map((tab) => {
                                  const Icon = tab.icon;
                                  return (
                                    <div key={tab.label}>
                                      <p className="flex items-center gap-2 text-sm font-semibold text-primary">
                                        <Icon size={16} strokeWidth={1.75} />
                                        {tab.label}
                                      </p>
                                      <div className="mt-1.5 flex flex-col border-l border-border pl-4">
                                        {tab.groups?.map((g, gi) => (
                                          <div key={g.title || gi} className="pb-1">
                                            {g.title && (
                                              <p className="pt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground/60">
                                                {g.title}
                                              </p>
                                            )}
                                            {g.links.map((l) => (
                                              <Link
                                                key={l.label}
                                                href={l.href}
                                                onClick={onClose}
                                                className="block py-2 text-sm text-muted-foreground hover:text-primary"
                                              >
                                                {l.label}
                                              </Link>
                                            ))}
                                          </div>
                                        ))}
                                        {tab.links.map((l) => (
                                          <Link
                                            key={l.label}
                                            href={l.href}
                                            onClick={onClose}
                                            className="py-2 text-sm text-muted-foreground hover:text-primary"
                                          >
                                            {l.label}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                              )
                            ) : (
                            <div className="flex flex-col gap-1 pb-4 pl-4">
                              {link.children!.map((child) => {
                                const isChildActive = pathname === child.href;
                                return (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={onClose}
                                    className={`rounded-md py-2.5 text-sm ${
                                      isChildActive
                                        ? "text-primary"
                                        : "text-muted-foreground hover:text-primary"
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                );
                              })}
                            </div>
                            )}
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
              className="mt-auto flex flex-col gap-3 pt-6"
            >
              {/* <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5">
                <Search size={16} className="text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search.."
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div> */}

              <Link
                href="/contact-us"
                onClick={onClose}
                className="flex w-full items-center justify-center rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-background"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileFocus, setMobileFocus] = useState<string | null>(null);
  const pathname = usePathname();

  // openNavMenu() on small screens opens the drawer with that section expanded
  useEffect(() => {
    const onOpen = (e: Event) => {
      if (window.matchMedia("(min-width: 1024px)").matches) return;
      setMobileFocus((e as CustomEvent<string>).detail);
      setMobileOpen(true);
    };
    window.addEventListener(OPEN_NAV_MENU_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_NAV_MENU_EVENT, onOpen);
  }, []);

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

        {/* Nav links */}
        <div className="hidden items-center lg:flex">
          <NavGroup links={navLinks} />
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

      <MobileMenu
        key={mobileFocus ?? "menu"}
        open={mobileOpen}
        initialExpanded={mobileFocus}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}