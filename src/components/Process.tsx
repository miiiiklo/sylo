import { Reveal, SectionHeading } from "./primitives";

const steps = [
  { num: "01", title: "Ideja", text: "Poveš nam, kaj želiš ustvariti." },
  {
    num: "02",
    title: "Koncept",
    text: "Skupaj določimo vizualno smer in način izvedbe.",
  },
  {
    num: "03",
    title: "Produkcija",
    text: "Posnamemo, fotografiramo ali ustvarimo vsebino.",
  },
  {
    num: "04",
    title: "Končni rezultat",
    text: "Prejmeš pripravljen material za uporabo.",
  },
];

export function Process() {
  return (
    <section id="proces" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Proces" title="Od ideje do rezultata" />

        <div className="relative mt-10 sm:mt-14">
          {/* Povezovalna linija — na mobile/tablet vertikalno ob številkah, na desktopu horizontalno nad koraki. */}
          <div
            aria-hidden
            className="absolute top-12 left-[1.5rem] h-[calc(100%-4rem)] w-px bg-gradient-to-b from-primary/50 via-border to-transparent lg:top-6 lg:left-0 lg:h-px lg:w-full lg:bg-gradient-to-r lg:from-transparent lg:via-primary/40 lg:to-transparent"
          />
          <ol className="grid grid-cols-1 gap-7 sm:gap-9 lg:grid-cols-4 lg:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.08}>
                <li className="group grid grid-cols-[3rem_minmax(0,1fr)] items-start gap-4 lg:block">
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-primary/35 bg-background font-display text-xs tracking-widest text-primary-bright transition-all duration-500 group-hover:border-primary/70 lg:mb-6"
                    style={{ boxShadow: "0 0 22px -6px rgba(139,61,255,0.65)" }}
                  >
                    {s.num}
                  </span>
                  <div className="min-w-0 pt-2.5 lg:pt-0">
                    <h3 className="font-display text-base leading-tight font-semibold tracking-[0.06em] text-chrome uppercase sm:text-lg">
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                      {s.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Process;
