import { Camera, Sparkles, Video, type LucideIcon } from "lucide-react";
import { services } from "@/data/services";
import { Reveal, SectionHeading } from "./primitives";
import { scrollToSection } from "@/lib/scroll";

const icons: Record<string, LucideIcon> = {
  video: Video,
  camera: Camera,
  sparkles: Sparkles,
};

export function Services() {
  return (
    <section id="storitve" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Storitve"
          title="Naše storitve"
          subtitle="Od klasične produkcije do vsebine, ustvarjene z umetno inteligenco."
        />

        <div className="mt-10 grid sm:mt-14 grid-cols-1 gap-5 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Video;
            return (
              <Reveal key={service.id} delay={i * 0.08}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_80px_-40px_rgba(139,61,255,0.7)]">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(139,61,255,0.28),transparent_65%)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-white/[0.04] text-primary-bright">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="mt-7 space-y-2.5">
                    {service.items.map((item) => (
                      <li
                        key={item.name}
                        className={`flex items-start justify-between gap-4 rounded-2xl border px-4 py-3.5 transition-colors ${
                          item.highlight
                            ? "border-primary/45 bg-primary/[0.09]"
                            : "border-border bg-white/[0.02]"
                        }`}
                      >
                        <span>
                          <span className="block text-sm text-foreground">
                            {item.name}
                          </span>
                          {item.note && (
                            <span className="mt-0.5 block text-xs text-muted-foreground">
                              {item.note}
                            </span>
                          )}
                          {item.highlight && (
                            <span className="mt-1.5 inline-block font-display text-[9px] tracking-[0.24em] text-primary-bright uppercase">
                              Najboljša izbira
                            </span>
                          )}
                        </span>
                        <span className="shrink-0 font-display text-lg whitespace-nowrap text-chrome">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => scrollToSection("kontakt")}
                    className="mt-7 w-full rounded-full border border-border bg-white/[0.03] py-3.5 font-display text-[11px] tracking-[0.2em] uppercase transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/15"
                  >
                    Povpraševanje
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
