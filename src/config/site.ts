/**
 * Centralna konfiguracija znamke. Vse kontaktne podatke in povezave
 * spremeni samo tukaj.
 */
export const site = {
  name: "SYLO",
  tagline: "Video produkcija, fotografiranje in AI oglasi",
  /** Brez končnega "/" — uporabljeno za absolutne URL-je (npr. og:image). */
  url: "https://sylo-three.vercel.app",
  email: "syloagency@gmail.com",
  phone: "", // opcijsko: npr. "+386 40 000 000"
  location: "Slovenija",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/sylo.agency/" },
    { label: "TikTok", href: "https://www.tiktok.com/@syloproduction" },
  ],
  nav: [
    { label: "Domov", id: "domov" },
    { label: "O Nas", id: "o-nas" },
    { label: "Storitve", id: "storitve" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Proces", id: "proces" },
    { label: "Kontakt", id: "kontakt" },
  ],
} as const;