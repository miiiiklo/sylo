import { ArrowRight } from "lucide-react";
import { Reveal } from "./primitives";
import { scrollToSection } from "@/lib/scroll";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-y border-border py-16 sm:py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_70%_at_50%_50%,rgba(139,61,255,0.18),transparent_65%)]"
      />
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl leading-[1.05] font-semibold uppercase sm:text-5xl lg:text-6xl">
            <span className="text-chrome">Imaš projekt v mislih?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Povej nam svojo idejo. Mi jo bomo pomagali spremeniti v vizualno
            zgodbo.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <button
            onClick={() => scrollToSection("kontakt")}
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-[11px] tracking-[0.2em] text-primary-foreground uppercase transition-all duration-300 hover:bg-primary-bright hover:shadow-[0_0_45px_-8px_rgba(139,61,255,0.9)]"
          >
            Pošlji povpraševanje
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

export default CTA;
