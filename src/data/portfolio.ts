export type PortfolioCategory = "video" | "foto" | "ai";

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  /** Kasneje dodaj pot do dejanske slike, npr. import iz src/assets. */
  image?: string;
  /** Vizualni ključ za placeholder gradient (a | b | c | d). */
  variant: "a" | "b" | "c" | "d";
  /** Nastavi na true za širšo kartico v gridu. */
  wide?: boolean;
};

export const portfolioFilters = [
  { id: "vse", label: "Vse" },
  { id: "video", label: "Video" },
  { id: "foto", label: "Foto" },
  { id: "ai", label: "AI" },
] as const;

export const portfolio: PortfolioItem[] = [
  {
    id: "brand-film",
    title: "Nič",
    category: "video",
    categoryLabel: "Video produkcija",
    variant: "a",
    wide: true,
  },
  {
    id: "product-visual",
    title: "Nič",
    category: "foto",
    categoryLabel: "Fotografiranje",
    variant: "b",
  },
  {
    id: "ai-campaign",
    title: "Nič",
    category: "ai",
    categoryLabel: "AI produkcija",
    variant: "c",
  },
  {
    id: "social-campaign",
    title: "Nič",
    category: "video",
    categoryLabel: "Video produkcija",
    variant: "d",
    wide: true,
  },
];
