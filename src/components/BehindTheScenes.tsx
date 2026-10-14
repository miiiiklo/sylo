import { motion } from "framer-motion";
import { SectionHeading } from "./primitives";

const behindTheScenes = [
  {
    id: 1,
    image: "/behind-the-scenes/bts-1.jpg",
    alt: "SYLO behind the scenes",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    image: "/behind-the-scenes/bts-2.jpg",
    alt: "SYLO produkcija v ozadju",
    className: "",
  },
  {
    id: 3,
    image: "/behind-the-scenes/bts-3.jpg",
    alt: "SYLO snemanje",
    className: "",
  },
  {
    id: 4,
    image: "/behind-the-scenes/bts-4.jpg",
    alt: "SYLO ustvarjanje vsebine",
    className: "md:col-span-2",
  },
];

export function BehindTheScenes() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Behind the scenes"
          title="Poglej, kako nastajajo ideje."
          subtitle="Od prve ideje do končnega kadra. Utrinki iz snemanj, produkcije in trenutkov v ozadju naših projektov."
        />

        <div className="mt-10 grid auto-rows-[180px] grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 md:auto-rows-[190px] md:grid-cols-4 md:gap-5">
          {behindTheScenes.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card ${item.className}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 transition-colors duration-500 group-hover:ring-primary/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BehindTheScenes;