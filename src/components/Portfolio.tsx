import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";
import { portfolio, portfolioFilters } from "@/data/portfolio";
import { SectionHeading } from "./primitives";
import { PortfolioVisual } from "./PortfolioVisual";


export function Portfolio() {
  const [filter, setFilter] = useState<string>("vse");
  const items = portfolio.filter(
    (p) => filter === "vse" || p.category === filter,
  );

  return (
    <section id="portfolio" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="Izbrana dela"
            subtitle="Ideje spremenjene v vizualno zgodbo."
          />
          <div className="flex flex-wrap gap-2">
            {portfolioFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-full border px-4 py-2.5 font-display text-[11px] tracking-[0.18em] uppercase transition-all duration-300 sm:px-5 ${
                  filter === f.id
                    ? "border-primary/50 bg-primary/15 text-chrome"
                    : "border-border text-muted-foreground hover:border-white/25 hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-card transition-colors duration-500 hover:border-white/20 ${
                  item.wide ? "md:col-span-2" : ""
                }`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <PortfolioVisual variant={item.variant} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050509] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/40 text-primary-bright opacity-0 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-100">
                    <Play size={14} />
                  </span>
                </div>
                <div className="flex items-end justify-between gap-4 p-5 sm:p-6">
                  <div className="min-w-0">
                    <p className="font-display text-[10px] tracking-[0.28em] text-primary-bright uppercase">
                      {item.categoryLabel}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-chrome sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Portfolio;
