/**
 * Cinematic placeholder vizuali za portfolio kartice.
 * Vsak "variant" je svoj abstrakten motiv (CSS + SVG, brez zunanjih slik).
 * Ko dobiš pravo sliko, jo samo dodaj v src/data/portfolio.ts (polje `image`).
 */
export function PortfolioVisual({ variant }: { variant: "a" | "b" | "c" | "d" }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.05]"
    >
      <div className="absolute inset-0 bg-[#07070c]" />
      {variant === "a" && <BrandFilm />}
      {variant === "b" && <ProductVisual />}
      {variant === "c" && <AiCampaign />}
      {variant === "d" && <SocialCampaign />}
      {/* filmski grain + subtilne scanline */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent_0_2px,rgba(255,255,255,0.02)_2px_3px)]" />
      <div className="grain absolute inset-0" />
      <div className="absolute inset-0 ring-1 ring-white/[0.06] ring-inset" />
    </div>
  );
}

/** Cinematic video frame — temna scena z močnim svetlobnim virom. */
function BrandFilm() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(60%_90%_at_18%_15%,rgba(255,255,255,0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_75%_80%,rgba(139,61,255,0.4),transparent_60%)] blur-[2px]" />
      <div className="absolute -top-1/3 left-[8%] h-[160%] w-[36%] rotate-[18deg] bg-gradient-to-b from-white/22 via-white/[0.06] to-transparent blur-md" />
      <div className="absolute -top-1/3 left-[26%] h-[160%] w-[14%] rotate-[18deg] bg-gradient-to-b from-primary-bright/40 to-transparent blur-lg" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#04040a] via-[#04040a]/70 to-transparent" />
      <div className="absolute inset-x-6 bottom-[26%] h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      {/* letterbox pasovi */}
      <div className="absolute inset-x-0 top-0 h-[7%] bg-black/70" />
      <div className="absolute inset-x-0 bottom-0 h-[7%] bg-black/70" />
    </>
  );
}

/** Produktni studio — chrome silhueta na temnem ozadju. */
function ProductVisual() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_120%,rgba(181,108,255,0.3),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_50%_28%,rgba(255,255,255,0.16),transparent_65%)]" />
      <div className="absolute top-[16%] left-1/2 h-[46%] w-[22%] -translate-x-1/2 rounded-[40%_40%_18%_18%] bg-gradient-to-b from-white/80 via-white/25 to-transparent blur-[0.5px]" />
      <div className="absolute top-[18%] left-[calc(50%+3%)] h-[42%] w-[5%] rounded-full bg-white/70 blur-[2px]" />
      <div className="absolute top-[62%] left-1/2 h-[16%] w-[30%] -translate-x-1/2 rounded-[50%] bg-primary/45 blur-xl" />
      <div className="absolute inset-x-[18%] top-[62%] h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#05050b] to-transparent" />
    </>
  );
}

/** AI vizual — futuristični 3D/mesh elementi. */
function AiCampaign() {
  return (
    <>
      <div className="absolute inset-0 bg-[conic-gradient(from_140deg_at_60%_45%,rgba(139,61,255,0.45),transparent_45%,rgba(255,255,255,0.12),transparent_75%)] blur-[3px]" />
      <div className="absolute top-1/2 left-1/2 aspect-square w-[58%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-[42%] border border-white/20" />
      <div className="absolute top-1/2 left-1/2 aspect-square w-[40%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-[46%] border border-primary/45 [animation-direction:reverse]" />
      <div className="absolute top-1/2 left-1/2 aspect-square w-[26%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(181,108,255,0.9),transparent_65%)] blur-lg" />
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 7 }, (_, i) => (
          <line
            key={i}
            x1="0"
            y1={6 + i * 8}
            x2="100"
            y2={2 + i * 9}
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="0.2"
          />
        ))}
      </svg>
    </>
  );
}

/** Social media reklama — vertikalni format, dinamični bloki. */
function SocialCampaign() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_30%_90%,rgba(139,61,255,0.38),transparent_62%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(45%_60%_at_82%_18%,rgba(255,255,255,0.14),transparent_65%)]" />
      <div className="absolute top-[14%] left-[10%] h-[72%] w-[17%] rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.1] to-transparent backdrop-blur-[1px]" />
      <div className="absolute top-[22%] left-[32%] h-[56%] w-[17%] rounded-2xl border border-primary/35 bg-gradient-to-b from-primary/25 to-transparent" />
      <div className="absolute top-[10%] left-[54%] h-[64%] w-[17%] rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent" />
      <div className="absolute inset-x-8 bottom-[18%] h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#05050b] to-transparent" />
    </>
  );
}

export default PortfolioVisual;
