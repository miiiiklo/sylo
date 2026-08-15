import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./primitives";
import { goToPortfolioFilter } from "@/lib/scroll";

export function AIShowcase() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/60 py-16 sm:py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_80%_20%,rgba(139,61,255,0.16),transparent_65%)]"
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:gap-14 sm:px-8 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="mb-5 font-display text-[11px] tracking-[0.35em] text-primary-bright uppercase">
              AI produkcija
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display text-3xl leading-[1.05] font-semibold uppercase sm:text-5xl lg:text-6xl">
              <span className="text-chrome">Ustvarjeno</span>{" "}
              <span className="bg-gradient-to-r from-primary-bright to-primary bg-clip-text text-transparent">
                drugače.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              Ko običajna produkcija ni dovolj, uporabimo moč umetne inteligence
              in ustvarimo vizual, ki ga je težko spregledati.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <button
              onClick={() => goToPortfolioFilter("ai")}
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-display text-[11px] tracking-[0.2em] text-primary-foreground uppercase transition-all duration-300 hover:bg-primary-bright hover:shadow-[0_0_40px_-8px_rgba(139,61,255,0.85)]"
            >
              Poglej AI primere
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div
            aria-hidden
            className="relative aspect-square w-full overflow-hidden rounded-[2rem] border border-border bg-[#050509]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(181,108,255,0.42),transparent_58%)] blur-2xl" />
            <div className="absolute inset-[18%] rounded-full bg-[conic-gradient(from_120deg,rgba(255,255,255,0.14),rgba(139,61,255,0.55),rgba(255,255,255,0.08),transparent_70%)] blur-[6px]" />
            <div className="absolute inset-[26%] animate-spin-slow rounded-[45%] border border-white/15" />
            <div className="absolute inset-[34%] animate-drift rounded-[42%] bg-gradient-to-br from-white/25 via-primary/30 to-transparent blur-[1px]" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent_0_3px,rgba(255,255,255,0.025)_3px_4px)]" />
            <div className="grain absolute inset-0" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AIShowcase;