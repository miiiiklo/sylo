export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 72;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
}

export const PORTFOLIO_FILTER_EVENT = "sylo:portfolio-filter";

/**
 * Skoči na portfolio in hkrati prosi Portfolio komponento, naj nastavi
 * podan filter (npr. "ai"). Portfolio posluša ta event v svojem useEffect.
 */
export function goToPortfolioFilter(filter: string) {
  window.dispatchEvent(
    new CustomEvent(PORTFOLIO_FILTER_EVENT, { detail: filter }),
  );
  scrollToSection("portfolio");
}