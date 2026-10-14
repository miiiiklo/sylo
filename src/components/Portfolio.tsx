import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, Play, X } from "lucide-react";

import {
  portfolio,
  portfolioFilters,
  type PortfolioItem,
} from "@/data/portfolio";

import { SectionHeading } from "./primitives";
import { PortfolioVisual } from "./PortfolioVisual";
import { PORTFOLIO_FILTER_EVENT } from "@/lib/scroll";

type LightboxState =
  | { type: "video"; item: PortfolioItem }
  | { type: "image"; item: PortfolioItem }
  | null;

export function Portfolio() {
  const [filter, setFilter] = useState<string>("vse");
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const items = portfolio.filter(
    (p) => filter === "vse" || p.category === filter,
  );

  const featuredItem =
    filter === "vse"
      ? items.find((item) => item.featured)
      : undefined;

  const regularItems = items.filter(
    (item) => item.id !== featuredItem?.id,
  );

  useEffect(() => {
    const handleFilterRequest = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;

      if (detail) {
        setFilter(detail);
      }
    };

    window.addEventListener(PORTFOLIO_FILTER_EVENT, handleFilterRequest);

    return () =>
      window.removeEventListener(PORTFOLIO_FILTER_EVENT, handleFilterRequest);
  }, []);

  const closeLightbox = () => {
    setLightbox(null);
  };

  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox]);

  const openItem = (item: PortfolioItem) => {
    if (item.video) {
      setLightbox({ type: "video", item });
    } else if (item.image) {
      setLightbox({ type: "image", item });
    }
  };

  return (
    <>
      <section
        id="portfolio"
        className="relative py-16 sm:py-24 lg:py-32"
      >
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
                  type="button"
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

          {/* Featured project */}
          <AnimatePresence mode="popLayout">
            {featuredItem && (
              <motion.article
                key={featuredItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-8 overflow-hidden rounded-3xl border border-border bg-card sm:mt-12"
              >
                <div className="grid lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
                  {/* Video */}
                  <button
                    type="button"
                    onClick={() => openItem(featuredItem)}
                    disabled={!featuredItem.video && !featuredItem.image}
                    aria-label={`Odpri ${featuredItem.title}`}
                    className="group relative block aspect-[16/10] w-full overflow-hidden bg-black text-left lg:aspect-auto lg:min-h-[520px]"
                  >
                    {featuredItem.video ? (
                      <video
                        src={featuredItem.video}
                        muted
                        loop
                        autoPlay
                        playsInline
                        preload="metadata"
                        aria-label={featuredItem.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    ) : featuredItem.image ? (
                      <img
                        src={featuredItem.image}
                        alt={featuredItem.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <PortfolioVisual variant={featuredItem.variant} />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                    {(featuredItem.video || featuredItem.image) && (
                      <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/40 text-primary-bright backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:bg-black/55">
                        {featuredItem.video ? (
                          <Play size={15} fill="currentColor" />
                        ) : (
                          <Maximize2 size={15} />
                        )}
                      </span>
                    )}

                    <span className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 font-display text-[10px] tracking-[0.2em] text-white/80 uppercase backdrop-blur-md">
                      Dobrodelni projekt
                    </span>
                  </button>

                  {/* Description */}
                  <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                    <p className="font-display text-[10px] tracking-[0.28em] text-primary-bright uppercase">
                      {featuredItem.categoryLabel}
                    </p>

                    <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-chrome sm:text-3xl lg:text-4xl">
                      {featuredItem.title}
                    </h3>

                    {featuredItem.description && (
                      <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                        {featuredItem.description}
                      </p>
                    )}

                    {featuredItem.details &&
                      featuredItem.details.length > 0 && (
                        <div className="mt-8 border-t border-border pt-6">
                          <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                            {featuredItem.details.map((detail) => (
                              <div key={detail.label}>
                                <p className="font-display text-[9px] tracking-[0.22em] text-muted-foreground uppercase">
                                  {detail.label}
                                </p>

                                <p className="mt-1.5 text-sm font-medium text-foreground">
                                  {detail.value}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                </div>
              </motion.article>
            )}
          </AnimatePresence>

          {/* Regular portfolio */}
          <motion.div
            layout
            className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-5 md:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {regularItems.map((item) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group relative overflow-hidden rounded-3xl border border-border bg-card transition-colors duration-500 hover:border-white/20 ${
                    item.wide ? "md:col-span-2" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => openItem(item)}
                    disabled={!item.video && !item.image}
                    aria-label={
                      item.video || item.image
                        ? `Odpri ${item.title}`
                        : item.title
                    }
                    className={`relative block aspect-[16/10] w-full overflow-hidden text-left ${
                      item.video || item.image
                        ? "cursor-pointer"
                        : "cursor-default"
                    }`}
                  >
                    {item.video ? (
                      <video
                        src={item.video}
                        muted
                        loop
                        autoPlay
                        playsInline
                        preload="metadata"
                        aria-label={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    ) : item.image ? (
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

                    {(item.video || item.image) && (
                      <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/40 text-primary-bright backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:bg-black/55">
                        {item.video ? (
                          <Play size={14} fill="currentColor" />
                        ) : (
                          <Maximize2 size={14} />
                        )}
                      </span>
                    )}
                  </button>

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

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeLightbox();
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full max-w-6xl"
            >
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Zapri"
                className="absolute -right-1 -top-14 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-primary/40 hover:bg-primary/10 sm:-right-3 sm:-top-3"
              >
                <X size={20} />
              </button>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#050509] shadow-2xl shadow-black/60">
                {lightbox.type === "video" && lightbox.item.video ? (
                  <video
                    src={lightbox.item.video}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[82vh] w-full bg-black object-contain"
                  />
                ) : lightbox.type === "image" && lightbox.item.image ? (
                  <img
                    src={lightbox.item.image}
                    alt={lightbox.item.title}
                    className="max-h-[82vh] w-full bg-black object-contain"
                  />
                ) : null}
              </div>

              <div className="mt-4 flex items-center justify-between gap-4 px-1">
                <div>
                  <p className="font-display text-[10px] tracking-[0.28em] text-primary-bright uppercase">
                    {lightbox.item.categoryLabel}
                  </p>

                  <h3 className="mt-1 font-display text-lg font-semibold text-white sm:text-xl">
                    {lightbox.item.title}
                  </h3>
                </div>

                <p className="hidden text-xs text-white/40 sm:block">
                  ESC za zaprtje
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Portfolio;