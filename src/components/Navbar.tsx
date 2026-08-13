import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { SyloLogo } from "./SyloLogo";
import { scrollToSection } from "@/lib/scroll";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("domov");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = site.nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.01, 0.25, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
          scrolled ? "py-2.5" : "py-5"
        }`}
      >
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 -z-10 transition-all duration-500 ${
            scrolled
              ? "h-[64px] border-b border-border bg-background/70 backdrop-blur-xl"
              : "h-[88px] bg-transparent"
          }`}
        />
        <button
          onClick={() => go("domov")}
          aria-label="SYLO — na vrh"
          className="flex items-center rounded-full focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
        >
          <SyloLogo
            className={
              scrolled
                ? "h-9 w-9 transition-all duration-500 md:h-11 md:w-11"
                : "h-11 w-11 transition-all duration-500 md:h-14 md:w-14"
            }
            glow
          />
        </button>


        <nav className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`relative rounded-full px-4 py-2 text-[13px] tracking-wide transition-colors ${
                active === item.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {active === item.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-full border border-border bg-white/[0.04]"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => go("kontakt")}
            className="hidden rounded-full bg-primary px-5 py-2.5 font-display text-[11px] tracking-[0.18em] text-primary-foreground uppercase transition-all duration-300 hover:bg-primary-bright hover:shadow-[0_0_30px_-6px_rgba(139,61,255,0.75)] sm:block"
          >
            Pošlji povpraševanje
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Zapri meni" : "Odpri meni"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mx-4 overflow-hidden rounded-2xl border border-border bg-surface/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col p-2">
              {site.nav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className={`rounded-xl px-4 py-3 text-left text-sm ${
                    active === item.id
                      ? "bg-white/[0.05] text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => go("kontakt")}
                className="mt-2 rounded-xl bg-primary px-4 py-3 font-display text-[11px] tracking-[0.18em] text-primary-foreground uppercase"
              >
                Pošlji povpraševanje
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
