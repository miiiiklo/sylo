import { Instagram, Facebook, Music2, type LucideIcon } from "lucide-react";
import { site } from "@/config/site";
import { SyloLogo } from "./SyloLogo";
import { scrollToSection } from "@/lib/scroll";

const socialIcons: Record<string, LucideIcon> = {
  Instagram,
  TikTok: Music2,
  Facebook,
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/70 pt-14 pb-10 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(139,61,255,0.12),transparent_70%)]"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <SyloLogo className="h-11 w-11" glow />
              <span className="font-display text-lg tracking-[0.3em] text-chrome">
                SYLO
              </span>
            </div>
            <p className="mt-8 font-display text-4xl leading-[1] font-semibold uppercase sm:text-6xl lg:text-7xl">
              <span className="text-chrome">Video. Foto.</span>{" "}
              <span className="bg-gradient-to-r from-primary-bright to-primary bg-clip-text text-transparent">
                AI.
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <nav aria-label="Footer navigacija">
              <p className="mb-4 font-display text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
                Navigacija
              </p>
              <ul className="space-y-2.5">
                {site.nav.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="mb-4 font-display text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
                Sledi nam
              </p>
              <ul className="space-y-2.5">
                {site.socials.map((s) => {
                  const Icon = socialIcons[s.label];
                  return (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {Icon && <Icon size={14} />}
                        {s.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <p className="mb-4 font-display text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
                Kontakt
              </p>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center sm:mt-16 justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SYLO. Vse pravice pridržane.
          </p>
          <p className="text-xs text-muted-foreground">
            Video produkcija • Fotografiranje • AI oglasi
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;