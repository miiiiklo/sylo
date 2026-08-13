import { Reveal } from "./primitives";

export function BrandStatement() {
  return (
    <section className="relative border-y border-border bg-surface/60 py-16 sm:py-28 lg:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(139,61,255,0.1),transparent_70%)]"
      />
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl leading-[1.06] font-semibold uppercase sm:text-5xl lg:text-6xl">
            <span className="text-chrome">Od ideje do</span>{" "}
            <span className="bg-gradient-to-r from-primary-bright to-primary bg-clip-text text-transparent">
              končnega posnetka.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-2xl sm:mt-8 text-sm leading-relaxed text-muted-foreground sm:text-lg">
            SYLO združuje kreativnost, sodobno produkcijo in umetno inteligenco
            ter ustvarja vizualne vsebine, ki pritegnejo pozornost.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default BrandStatement;
