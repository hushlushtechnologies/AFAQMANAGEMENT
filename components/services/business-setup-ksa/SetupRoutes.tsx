"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const readyList = [
  "Proposed business activity",
  "Investor type and country of registration",
  "Proposed shareholders and ownership percentages",
  "Preferred structure, such as a subsidiary or branch",
  "Proposed trade name",
  "Parent company records, where applicable",
  "Financial statements, if your route requires them",
  "Proposed management and authorised signatories",
  "Any activity approvals already held",
];

const routes = [
  { id: "foreign", label: "Expanding a Foreign Company" },
  { id: "gcc-owned", label: "GCC-Owned Business" },
  { id: "gcc-national", label: "GCC National, New Business" },
] as const;

type RouteId = (typeof routes)[number]["id"];

function ForeignRoute() {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      <div>
        <h3 className="font-heading text-2xl font-light text-foreground">
          Expanding an existing company into Saudi Arabia
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          Under the updated Investment Law, foreign investors generally register
          with the Ministry of Investment (MISA) before starting investment
          activities. Once MISA confirms registration, eligible applicants move
          on to incorporation and commercial registration through the Saudi
          Business Center. Separate activity licences or approvals may also apply.
        </p>
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-accent-blue/40 bg-accent-blue/10 px-5 py-4">
          <Info size={18} className="mt-0.5 shrink-0 text-accent-blue" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Full foreign ownership is available for some activities; others need
            a local partner or extra approval. Check the conditions for your
            activity before choosing a shareholding structure.
          </p>
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-background/50 p-6">
        <p className="text-sm font-semibold text-primary">What to have ready for your assessment</p>
        <ul className="mt-4 space-y-3">
          {readyList.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-foreground">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Check size={12} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function GccOwnedRoute() {
  const options = [
    {
      title: "Branch Office",
      text: "An extension of a GCC corporation, legally established in Saudi Arabia. The branch is distinct from the parent business and has its own legal personality.",
    },
    {
      title: "Subsidiary",
      text: "A separate legal entity founded in Saudi Arabia, with its own independent board of directors and management.",
    },
  ];
  return (
    <div>
      <h3 className="font-heading text-2xl font-light text-foreground">
        Bringing a 100% GCC-owned business to Saudi Arabia
      </h3>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
        Businesses wholly owned by GCC nationals can grow into the Kingdom by
        establishing either a branch office or a subsidiary.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {options.map((o) => (
          <div key={o.title} className="rounded-2xl border border-border bg-background/50 p-6">
            <h4 className="text-lg font-semibold text-primary">{o.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GccNationalRoute() {
  const structures = ["Limited Liability Companies", "Joint Stock Companies", "Sole Proprietorships"];
  return (
    <div>
      <h3 className="font-heading text-2xl font-light text-foreground">
        A GCC national starting a new business in Saudi Arabia
      </h3>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
        GCC nationals enjoy the same rights as Saudi nationals when setting up
        in the Kingdom, with access to the same company structures.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {structures.map((s) => (
          <div key={s} className="flex items-center gap-3 rounded-2xl border border-border bg-background/50 px-5 py-5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
              <Check size={14} />
            </span>
            <span className="text-sm font-semibold text-foreground">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SetupRoutes() {
  const [active, setActive] = useState<RouteId>("foreign");

  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <SectionHeader
        eyebrow="Your Route In"
        heading={
          <>
            Establishing a Company <span className="text-primary">in Saudi Arabia</span>
          </>
        }
        paragraph="The right route depends on who owns the business and whether it already operates elsewhere."
      />

      <div className="mx-auto mt-12 max-w-6xl px-6">
        <div role="tablist" className="flex flex-wrap justify-center gap-3">
          {routes.map((r, i) => {
            const isActive = r.id === active;
            return (
              <button
                key={r.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(r.id)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  isActive ? "text-background" : "border border-border text-muted-foreground hover:border-primary/60 hover:text-primary"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="ksa-route-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    className="absolute inset-0 rounded-full bg-gradient-gold"
                  />
                )}
                <span className="relative">
                  {i + 1}. {r.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-gradient-card p-8 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              role="tabpanel"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {active === "foreign" && <ForeignRoute />}
              {active === "gcc-owned" && <GccOwnedRoute />}
              {active === "gcc-national" && <GccNationalRoute />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
