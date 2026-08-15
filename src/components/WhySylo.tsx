import { Lightbulb, Wand2, Eye, SlidersHorizontal } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

const features = [
  {
    num: "01",
    title: "Kreativnost",
    text: "Vsak projekt začne z idejo.",
    icon: Lightbulb,
  },
  {
    num: "02",
    title: "Sodobna tehnologija",
    text: "Uporabljamo sodobna orodja za produkcijo in AI.",
    icon: Wand2,
  },
  {
    num: "03",
    title: "Vizualna kakovost",
    text: "Vsak detajl šteje.",
    icon: Eye,
  },
  {
    num: "04",
    title: "Prilagodljiv pristop",
    text: "Projekt prilagodimo vašim potrebam in proračunu.",
    icon: SlidersHorizontal,
  },
];

export function WhySylo() {
  return (
    <section className="relative border-y border-border bg-surface/60 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Prednosti" title="Zakaj SYLO?" />
        <div className="mt-10 grid sm:mt-14 grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.num} delay={i * 0.07}>
              <div className="group relative h-full bg-card p-8 transition-colors duration-500 hover:bg-white/[0.035]">
                <div className="flex items-start justify-between">
                  <span
                    className="font-display text-5xl font-semibold text-primary/70 transition-all duration-500 group-hover:text-primary-bright"
                    style={{ textShadow: "0 0 28px rgba(139,61,255,0.55)" }}
                  >
                    {f.num}
                  </span>
                  <f.icon
                    size={18}
                    strokeWidth={1.7}
                    className="mt-1 text-muted-foreground transition-colors duration-500 group-hover:text-primary-bright"
                  />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhySylo;