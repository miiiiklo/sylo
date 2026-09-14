import { motion } from "framer-motion";
import syloLogo from "@/assets/sylo-logo.png";
import { Mail } from "lucide-react";
import { site } from "@/config/site";

export function ComingSoon() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#050509] text-foreground">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
        {/* Header */}
        <header className="flex items-center justify-between">
          <img
            src={syloLogo}
            alt="SYLO"
            className="h-auto w-[110px] object-contain sm:w-[130px]"
          />

          <span className="font-display text-[10px] tracking-[0.28em] text-white/40 uppercase">
            Creative Studio
          </span>
        </header>

        {/* Main */}
        <div className="flex flex-1 items-center">
          <div className="w-full py-20 sm:py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-12 bg-gradient-to-r from-primary-bright to-transparent" />

                <span className="font-display text-[10px] tracking-[0.3em] text-primary-bright uppercase">
                  VIDEO • FOTO • AI
                </span>
              </div>

              <h1 className="font-display text-[clamp(3rem,9vw,8rem)] font-semibold leading-[0.88] tracking-[-0.06em]">
                <span className="block text-chrome">USTVARJAMO</span>

                <span className="block bg-gradient-to-r from-white via-white to-primary-bright bg-clip-text text-transparent">
                  NEKAJ DOBREGA.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                Naša nova spletna stran je trenutno v pripravi.
                <br />
                Kmalu bomo pokazali, kaj lahko ustvarimo.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-display text-[11px] tracking-[0.2em] text-primary-foreground uppercase transition-all duration-300 hover:bg-primary-bright hover:shadow-[0_0_40px_-8px_rgba(139,61,255,0.85)]"
                >
                  <Mail size={15} />
                  Kontaktiraj nas
                </a>

                <span className="px-2 text-xs tracking-[0.08em] text-white/30">
                  Kmalu na voljo
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/[0.08] pt-5">
          <div className="flex flex-col gap-3 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} SYLO. Vse pravice pridržane.
            </span>

            <span>Video produkcija • Fotografiranje • AI oglasi</span>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default ComingSoon;