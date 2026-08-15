import { Quote } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";

/**
 * TODO: zamenjaj s pravimi izjavami strank, ko bodo na voljo.
 * En pristen citat je boljši kot več izmišljenih.
 */
const testimonials = [
  {
    quote:
      "SYLO nam je v enem tednu pripravil celotno video kampanjo za družbena omrežja. Rezultat je presegel pričakovanja.",
    name: "Ime Priimek",
    role: "Ime podjetja / znamke",
  },
  {
    quote:
      "Profesionalen pristop od prve ideje do zaključka. Priporočam vsem, ki iščejo kvalitetno produkcijo.",
    name: "Ime Priimek",
    role: "Ime podjetja / znamke",
  },
  {
    quote:
      "AI oglas je bil pripravljen v rekordnem času in je izgledal veliko bolje, kot smo pričakovali za ta proračun.",
    name: "Ime Priimek",
    role: "Ime podjetja / znamke",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Mnenja strank"
          title="Kaj pravijo o nas."
          subtitle="Nekaj besed strank, s katerimi smo sodelovali."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7">
                <Quote
                  size={22}
                  className="text-primary-bright/70"
                  aria-hidden
                />
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <span className="block text-sm font-medium text-foreground">
                    {t.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {t.role}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;