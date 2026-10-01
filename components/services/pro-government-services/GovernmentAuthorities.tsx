 "use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Authority = {
  logo: string;
  title: string;
  description: string;
};

const leftAuthorities: Authority[] = [
  { logo: "/images/authorities/icp.png", title: "ICP", description: "Federal Authority for Identity, Citizenship, Customs & Port Security" },
  { logo: "/images/authorities/icp.png", title: "GDRFA", description: "General Directorate of Residency and Foreigners Affairs" },
  { logo: "/images/authorities/mohre.png", title: "MOHRE", description: "Ministry of Human Resource & Emiratisation" },
  { logo: "/images/authorities/fta.png", title: "Federal Tax Authority", description: "Tax Registrations, Filing & Corporate Compliance" },
  { logo: "/images/authorities/economic-departments.png", title: "Economic Departments", description: "Trade Licenses, Business Setup, Renewals & Approvals" },
];

const rightAuthorities: Authority[] = [
  { logo: "/images/authorities/rta.png", title: "RTA", description: "Roads & Transport Authority Services & Approvals" },
  { logo: "/images/authorities/municipalities.png", title: "Municipalities", description: "Trade Permits, Inspection, No Objection Certificates" },
  { logo: "/images/authorities/freezone.png", title: "Freezone Authorities", description: "Business Registration, Licenses, Visas, Corporate Services" },
  { logo: "/images/authorities/dubai-police.png", title: "Dubai Police & Authorities", description: "Police Clearance, NOCs & Related Services" },
  { logo: "/images/authorities/other.png", title: "Other Government Authorities", description: "MINA, Ministry of Health, EHS, Ports, Customs & More" },
];

// EDIT THESE to move cards around:
//   top → % vertical center within the diagram column (matches the artwork's dots)
//   x   → px horizontal offset AWAY from the hub (kept small enough to stay on screen)
const leftPositions = [
  { top: 15, x: 12 },
  { top: 33, x: 190 },
  { top: 50, x: 250 },
  { top: 65, x: 170 },
  { top: 85, x: 90 },
];
const rightPositions = [
  { top: 15, x: 12 },
  { top: 33, x: 190 },
  { top: 50, x: 250 },
  { top: 68, x: 170 },
  { top: 87, x: 90 },
];

function AuthorityCard({ authority, accent }: { authority: Authority; accent: "blue" | "gold" }) {
  const border = accent === "blue" ? "border-accent-blue" : "border-primary";
  return (
    <div className={`relative w-full rounded-2xl border ${border} bg-card p-4`}>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-background">
          <Image src={authority.logo} alt={authority.title} width={22} height={22} unoptimized className="object-contain" />
        </span>
        <div>
          <h3 className="text-base font-semibold text-foreground">{authority.title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{authority.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function GovernmentAuthorities() {
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="font-heading text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
        >
          Navigating the UAE Business
          <br />
          Environment
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          We work closely with relevant government authorities to help you
          get things done accurately, efficiently and on time
        </motion.p>

        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      {/* desktop hub-and-spoke — only from xl up, so it always has room */}
      <div className="relative mx-auto mt-20 hidden max-w-7xl grid-cols-[1fr_140px_1fr] items-center gap-6 xl:grid">
        <svg
          viewBox="0 0 524 721"
          preserveAspectRatio="none"
          style={{ transform: "scale(0.5)", transformOrigin: "50% 50%" }}
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <path
            d="M386.001 5.33301C386.001 8.27853 388.388 10.6663 391.334 10.6663C394.28 10.6663 396.667 8.27853 396.667 5.33301C396.667 2.38749 394.28 -0.00032568 391.334 -0.00032568C388.388 -0.00032568 386.001 2.38749 386.001 5.33301ZM354.834 5.33301V4.33301H354.067L353.868 5.07419L354.834 5.33301ZM293.334 234.854L292.368 234.595L292.334 234.722V234.854H293.334ZM288.001 269.333C288.001 272.279 290.388 274.666 293.334 274.666C296.28 274.666 298.667 272.279 298.667 269.333C298.667 266.387 296.28 264 293.334 264C290.388 264 288.001 266.387 288.001 269.333ZM126.501 5.33301C126.501 8.27853 128.888 10.6663 131.834 10.6663C134.78 10.6663 137.167 8.27853 137.167 5.33301C137.167 2.38749 134.78 -0.00032568 131.834 -0.00032568C128.888 -0.00032568 126.501 2.38749 126.501 5.33301ZM168.334 5.33301L169.3 5.07419L169.101 4.33301H168.334V5.33301ZM229.834 234.854H230.834V234.722L230.8 234.595L229.834 234.854ZM224.501 269.333C224.501 272.279 226.888 274.666 229.834 274.666C232.78 274.666 235.167 272.279 235.167 269.333C235.167 266.387 232.78 264 229.834 264C226.888 264 224.501 266.387 224.501 269.333ZM386.001 715.333C386.001 718.279 388.388 720.666 391.334 720.666C394.28 720.666 396.667 718.279 396.667 715.333C396.667 712.388 394.28 710 391.334 710C388.388 710 386.001 712.388 386.001 715.333ZM354.834 715.333L353.868 715.592L354.067 716.333H354.834V715.333ZM293.334 485.812H292.334V485.944L292.368 486.071L293.334 485.812ZM288.001 451.333C288.001 454.279 290.388 456.666 293.334 456.666C296.28 456.666 298.667 454.279 298.667 451.333C298.667 448.387 296.28 446 293.334 446C290.388 446 288.001 448.387 288.001 451.333ZM126.501 715.333C126.501 718.279 128.888 720.666 131.834 720.666C134.78 720.666 137.167 718.279 137.167 715.333C137.167 712.388 134.78 710 131.834 710C128.888 710 126.501 712.388 126.501 715.333ZM168.334 715.333V716.333H169.101L169.3 715.592L168.334 715.333ZM229.834 485.812L230.8 486.071L230.834 485.944V485.812H229.834ZM224.501 451.333C224.501 454.279 226.888 456.666 229.834 456.666C232.78 456.666 235.167 454.279 235.167 451.333C235.167 448.387 232.78 446 229.834 446C226.888 446 224.501 448.387 224.501 451.333ZM448.501 187.333C448.501 190.279 450.888 192.666 453.834 192.666C456.78 192.666 459.167 190.279 459.167 187.333C459.167 184.387 456.78 182 453.834 182C450.888 182 448.501 184.387 448.501 187.333ZM424.834 187.333V186.333H424.42L424.127 186.626L424.834 187.333ZM315.501 291.333C315.501 294.279 317.888 296.666 320.834 296.666C323.78 296.666 326.167 294.279 326.167 291.333C326.167 288.387 323.78 286 320.834 286C317.888 286 315.501 288.387 315.501 291.333ZM64.0007 187.333C64.0007 190.279 66.3885 192.666 69.334 192.666C72.2795 192.666 74.6673 190.279 74.6673 187.333C74.6673 184.387 72.2795 182 69.334 182C66.3885 182 64.0007 184.387 64.0007 187.333ZM98.334 187.333L99.0411 186.626L98.7482 186.333H98.334V187.333ZM197.001 291.333C197.001 294.279 199.388 296.666 202.334 296.666C205.28 296.666 207.667 294.279 207.667 291.333C207.667 288.387 205.28 286 202.334 286C199.388 286 197.001 288.387 197.001 291.333ZM448.501 537.333C448.501 540.279 450.888 542.666 453.834 542.666C456.78 542.666 459.167 540.279 459.167 537.333C459.167 534.388 456.78 532 453.834 532C450.888 532 448.501 534.388 448.501 537.333ZM424.834 537.333L424.127 538.04L424.42 538.333H424.834V537.333ZM315.501 433.333C315.501 436.279 317.888 438.666 320.834 438.666C323.78 438.666 326.167 436.279 326.167 433.333C326.167 430.387 323.78 428 320.834 428C317.888 428 315.501 430.387 315.501 433.333ZM64.0007 537.333C64.0007 540.279 66.3885 542.666 69.334 542.666C72.2795 542.666 74.6673 540.279 74.6673 537.333C74.6673 534.388 72.2795 532 69.334 532C66.3885 532 64.0007 534.388 64.0007 537.333ZM98.334 537.333V538.333H98.7482L99.0411 538.04L98.334 537.333ZM197.001 433.333C197.001 436.279 199.388 438.666 202.334 438.666C205.28 438.666 207.667 436.279 207.667 433.333C207.667 430.387 205.28 428 202.334 428C199.388 428 197.001 430.387 197.001 433.333ZM512.501 362.333C512.501 365.279 514.888 367.666 517.834 367.666C520.779 367.666 523.167 365.279 523.167 362.333C523.167 359.387 520.779 357 517.834 357C514.888 357 512.501 359.387 512.501 362.333ZM348.501 362.333C348.501 365.279 350.888 367.666 353.834 367.666C356.78 367.666 359.167 365.279 359.167 362.333C359.167 359.387 356.78 357 353.834 357C350.888 357 348.501 359.387 348.501 362.333ZM0.000650883 362.333C0.000650883 365.279 2.38847 367.666 5.33398 367.666C8.2795 367.666 10.6673 365.279 10.6673 362.333C10.6673 359.387 8.2795 357 5.33398 357C2.38847 357 0.000650883 359.387 0.000650883 362.333ZM164.001 362.333C164.001 365.279 166.388 367.666 169.334 367.666C172.28 367.666 174.667 365.279 174.667 362.333C174.667 359.387 172.28 357 169.334 357C166.388 357 164.001 359.387 164.001 362.333ZM391.334 5.33301V4.33301H354.834V5.33301V6.33301H391.334V5.33301ZM354.834 5.33301L353.868 5.07419L292.368 234.595L293.334 234.854L294.3 235.113L355.8 5.59183L354.834 5.33301ZM293.334 234.854H292.334V269.333H293.334H294.334V234.854H293.334ZM131.834 5.33301V6.33301H168.334V5.33301V4.33301H131.834V5.33301ZM168.334 5.33301L167.368 5.59183L228.868 235.113L229.834 234.854L230.8 234.595L169.3 5.07419L168.334 5.33301ZM229.834 234.854H228.834V269.333H229.834H230.834V234.854H229.834ZM391.334 715.333V714.333H354.834V715.333V716.333H391.334V715.333ZM354.834 715.333L355.8 715.074L294.3 485.553L293.334 485.812L292.368 486.071L353.868 715.592L354.834 715.333ZM293.334 485.812H294.334V451.333H293.334H292.334V485.812H293.334ZM131.834 715.333V716.333H168.334V715.333V714.333H131.834V715.333ZM168.334 715.333L169.3 715.592L230.8 486.071L229.834 485.812L228.868 485.553L167.368 715.074L168.334 715.333ZM229.834 485.812H230.834V451.333H229.834H228.834V485.812H229.834ZM453.834 187.333V186.333H424.834V187.333V188.333H453.834V187.333ZM424.834 187.333L424.127 186.626L320.127 290.626L320.834 291.333L321.541 292.04L425.541 188.04L424.834 187.333ZM69.334 187.333V188.333H98.334V187.333V186.333H69.334V187.333ZM98.334 187.333L97.6269 188.04L201.627 292.04L202.334 291.333L203.041 290.626L99.0411 186.626L98.334 187.333ZM453.834 537.333V536.333H424.834V537.333V538.333H453.834V537.333ZM424.834 537.333L425.541 536.626L321.541 432.626L320.834 433.333L320.127 434.04L424.127 538.04L424.834 537.333ZM69.334 537.333V538.333H98.334V537.333V536.333H69.334V537.333ZM98.334 537.333L99.0411 538.04L203.041 434.04L202.334 433.333L201.627 432.626L97.6269 536.626L98.334 537.333ZM517.834 362.333V361.333H353.834V362.333V363.333H517.834V362.333ZM5.33398 362.333V363.333H169.334V362.333V361.333H5.33398V362.333Z"
            fill="#1D7BE0"
          />
        </svg>

        {/* left column — blue authorities */}
        <div className="relative z-10 h-[820px]">
          {leftAuthorities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ top: `${leftPositions[i].top}%`, right: `${leftPositions[i].x}px` }}
              className="absolute w-60 -translate-y-1/2"
            >
              <AuthorityCard authority={a} accent="blue" />
            </motion.div>
          ))}
        </div>

        {/* hub column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative z-10 flex justify-center"
        >
          <div
            className="h-28 w-28 rounded-full p-[3px]"
            style={{ background: "conic-gradient(#1D7BE0 0deg 180deg, #EBB811 180deg 360deg)" }}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
              <Image src="/images/authorities/logo.png" alt="AFAQ" width={56} height={56} />
            </div>
          </div>
        </motion.div>

        {/* right column — gold authorities */}
        <div className="relative z-10 h-[820px]">
          {rightAuthorities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ top: `${rightPositions[i].top}%`, left: `${rightPositions[i].x}px` }}
              className="absolute w-60 -translate-y-1/2"
            >
              <AuthorityCard authority={a} accent="gold" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* mobile/tablet fallback — simple stacked list, shown below xl */}
      <div className="mx-auto mt-14 flex max-w-2xl flex-col gap-4 px-6 xl:hidden">
        {[...leftAuthorities, ...rightAuthorities].map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 5) * 0.06 }}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-background">
                <Image src={a.logo} alt={a.title} width={28} height={28} unoptimized className="object-contain" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{a.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}