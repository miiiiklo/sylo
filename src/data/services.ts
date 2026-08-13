export type ServiceItem = {
  name: string;
  note?: string;
  price: string;
  highlight?: boolean;
};

export type Service = {
  id: string;
  icon: "video" | "camera" | "sparkles";
  title: string;
  description: string;
  items: ServiceItem[];
};

/** Vse storitve in cene so definirane samo tukaj. */
export const services: Service[] = [
  {
    id: "video",
    icon: "video",
    title: "Video produkcija",
    description:
      "Profesionalni video posnetki za oglase, družbena omrežja, promocijo in predstavitev vaše znamke.",
    items: [
      { name: "Video reklama", note: "15–60 sekund", price: "60 €" },
      { name: "Daljši video", note: "Več kot 60 sekund", price: "Po dogovoru" },
    ],
  },
  {
    id: "foto",
    icon: "camera",
    title: "Fotografiranje",
    description:
      "Kakovostne fotografije za promocijo, družbena omrežja, izdelke in osebno predstavitev.",
    items: [
      { name: "Fotografiranje", price: "10 €" },
      { name: "Fotografiranje + obdelava fotografije", price: "20 €" },
      {
        name: "Paket – 5 profesionalno obdelanih fotografij",
        price: "80 €",
        highlight: true,
      },
    ],
  },
  {
    id: "ai",
    icon: "sparkles",
    title: "AI oglasi",
    description:
      "Kreativne reklamne vsebine, ustvarjene s pomočjo sodobnih AI tehnologij.",
    items: [
      { name: "AI reklamna fotografija", price: "40 €" },
      { name: "AI video reklama", price: "100 €" },
      { name: "AI video daljši od 15 sekund", price: "Po dogovoru" },
    ],
  },
];

/** Možnosti v kontaktnem obrazcu. */
export const inquiryOptions = [
  "Video produkcija",
  "Fotografiranje",
  "AI reklamna fotografija",
  "AI video reklama",
  "Drugo",
] as const;
