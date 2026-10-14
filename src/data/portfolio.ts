import starwars from "@/assets/portfolio/videos/starwars.mp4";
import golf from "@/assets/portfolio/videos/golf.mp4";
import mcgregor from "@/assets/portfolio/videos/mcgregor.mp4";
import jakna from "@/assets/portfolio/videos/jakna-1.mov";

export type PortfolioCategory = "video" | "foto" | "ai";

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  /** Kasneje dodaj pot do dejanske slike, npr. import iz src/assets. */
  image?: string;
  video?: string;
  /** Vizualni ključ za placeholder gradient (a | b | c | d). */
  variant: "a" | "b" | "c" | "d";
  /** Nastavi na true za širšo kartico v gridu. */
  wide?: boolean;
  featured?: boolean;
  description?: string;
  details?: {
    label: string;
    value: string;
  }[];
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
    title: "Video, ki nosi zgodbo.",
    category: "video",
    categoryLabel: "Video produkcija",
    //video: starwars,
    variant: "a",
    featured: true,
    description:
      "Dobrodelni video projekt, ustvarjen z namenom predstaviti zgodbo, ljudi in sporočilo projekta skozi močno vizualno pripoved.",
    details: [
      {
        label: "Storitev",
        value: "Video produkcija",
      },
      {
        label: "Projekt",
        value: "Dobrodelni video",
      },
      {
        label: "Leto",
        value: "2026",
      },
    ],
  },
  {
    id: "jakna",
    title: "Jakna",
    category: "video",
    categoryLabel: "Video produkcija",
    video: jakna,
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
    id: "mcgregor",
    title: "Conor McGregor Edit",
    category: "video",
    categoryLabel: "Video produkcija",
    video: mcgregor,
    variant: "d",
    wide: true,
  },
];
