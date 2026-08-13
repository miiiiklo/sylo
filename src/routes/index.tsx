import { createFileRoute } from "@tanstack/react-router";
import { SyloPage } from "@/SyloPage";
import { site } from "@/config/site";
import { services } from "@/data/services";

const title = "SYLO — Video produkcija, fotografiranje in AI oglasi";
const description =
  "SYLO ustvarja video vsebine, profesionalne fotografije in AI oglase za znamke, podjetja in ustvarjalce.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: site.name,
      url: "/",
      description,
      inLanguage: "sl",
    },
    {
      "@type": ["Organization", "ProfessionalService"],
      name: site.name,
      url: "/",
      logo: "/favicon.png",
      description: site.tagline,
      email: site.email,
      areaServed: {
        "@type": "Country",
        name: site.location,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SYLO storitve",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: { "@type": "Organization", name: site.name },
          },
        })),
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "sl_SI" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  component: SyloPage,
});
