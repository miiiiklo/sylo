import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { SyloLogo } from "./SyloLogo";
import { scrollToSection } from "@/lib/scroll";
import { staggerChild, staggerParent } from "./primitives";

const particles = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 7.3 + 6) % 96}%`,
  delay: `${(i % 7) * 1.4}s`,
  duration: `${9 + (i % 5) * 2.5}s`,
  size: i % 3 === 0 ? 2 : 1,
}));

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="domov"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-20"
    >
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(139,61,255,0.28),transparent_60%)]" />
        <div className="absolute top-[-12%] left-[8%] h-[46vw] w-[46vw] animate-drift rounded-full bg-[radial-gradient(circle,rgba(139,61,255,0.34),transparent_65%)] blur-3xl" />
        <div className="absolute right-[-6%] bottom-[-18%] h-[42vw] w-[42vw] animate-drift-slow rounded-full bg-[radial-gradient(circle,rgba(181,108,255,0.22),transparent_65%)] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
        {!reduce &&
          particles.map((p, i) => (
            <span
              key={i}
              className="absolute bottom-24 rounded-full bg-primary-bright"
              style={{
                left: p.left,
                height: p.size,
                width: p.size,
                animation: `float-particle ${p.duration} linear ${p.delay} infinite`,
                boxShadow: "0 0 8px rgba(181,108,255,0.9)",
              }}
            />
          ))}
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:gap-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <motion.div variants={staggerParent} initial="hidden" animate="show">
          <motion.p
            variants={staggerChild}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-1.5 font-display text-[10px] tracking-[0.4em] text-primary-bright uppercase"
          >
            Video • Foto • AI
          </motion.p>

          <h1 className="font-display text-[11.5vw] leading-[0.95] tracking-[-0.01em] text-balance sm:leading-[0.92] font-semibold uppercase sm:text-6xl lg:text-[5.2rem]">
            <motion.span variants={staggerChild} className="block text-chrome">
              Ustvarjamo vsebino,
            </motion.span>
            <motion.span
              variants={staggerChild}
              className="block bg-gradient-to-r from-primary-bright via-white to-primary bg-clip-text text-transparent"
            >
              ki izstopa.
            </motion.span>
          </h1>

          <motion.p
            variants={staggerChild}
            className="mt-6 max-w-lg sm:mt-7 text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            Video produkcija, fotografija in AI oglasi za znamke, podjetja in
            ustvarjalce.
          </motion.p>

          <motion.div
            variants={staggerChild}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row"
          >
            <button
              onClick={() => scrollToSection("storitve")}
              className="group inline-flex items-center justify-center gap-2 w-full rounded-full bg-primary px-7 py-4 sm:w-auto font-display text-[11px] tracking-[0.2em] text-primary-foreground uppercase transition-all duration-300 hover:bg-primary-bright hover:shadow-[0_0_40px_-8px_rgba(139,61,255,0.85)]"
            >
              Poglej storitve
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="inline-flex items-center justify-center gap-2 w-full rounded-full border border-border bg-white/[0.03] px-7 py-4 sm:w-auto font-display text-[11px] tracking-[0.2em] uppercase backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-white/[0.06]"
            >
              Pošlji povpraševanje
            </button>
          </motion.div>
        </motion.div>

        {/* Abstract cinematic visual */}
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[520px]"
          aria-hidden
        >
          <div className="absolute inset-0 animate-spin-slow rounded-full border border-white/[0.07]" />
          <div className="absolute inset-[12%] animate-spin-slow rounded-full border border-primary/25 [animation-direction:reverse]" />
          <div className="absolute inset-[26%] rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(181,108,255,0.5),transparent_60%)] blur-2xl" />
          <div className="absolute inset-[30%] rounded-full border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent backdrop-blur-sm" />
          <div className="absolute inset-0 grid place-items-center">
            <SyloLogo className="h-[42%] w-[42%]" glow />
          </div>
          {/* chrome sweep arcs */}
          <div className="absolute inset-[6%] rounded-full bg-[conic-gradient(from_200deg,transparent_0deg,rgba(255,255,255,0.16)_40deg,transparent_90deg,rgba(139,61,255,0.35)_180deg,transparent_240deg)] blur-[2px]" />
        </motion.div>
      </div>

      <button
        onClick={() => scrollToSection("storitve")}
        aria-label="Pomakni se navzdol"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground md:block"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
}

export default Hero;
