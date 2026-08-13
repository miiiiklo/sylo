import { motion } from "framer-motion";
import { Users, Sparkles, Cpu } from "lucide-react";

const values = [
  {
    number: "01",
    title: "KREATIVNOST",
    text: "Ideje, ki imajo namen.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "EKIPA",
    text: "Različne perspektive, en skupen cilj.",
    icon: Users,
  },
  {
    number: "03",
    title: "TEHNOLOGIJA",
    text: "Kreativnost podprta s sodobnimi orodji in AI.",
    icon: Cpu,
  },
];

export function AboutTeam() {
  return (
    <section
      id="o-nas"
      className="relative py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -top-6 left-0 h-px w-24 bg-gradient-to-r from-primary-bright to-transparent" />

          <p className="font-display text-[11px] tracking-[0.28em] text-primary-bright uppercase">
            O NAS
          </p>

          <h2 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-foreground sm:text-6xl lg:text-8xl">
            USTVARJAMO
            <br />
            <span className="bg-gradient-to-r from-white via-white to-primary-bright bg-clip-text text-transparent">
              KOT EKIPA.
            </span>
          </h2>

          <div className="mt-10 max-w-3xl">
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              SYLO je kreativna ekipa, združena okoli ene ideje – ustvarjati
              vsebino, ki pritegne pozornost.
            </p>

            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              Združujemo kreativnost, produkcijo, vizualno razmišljanje in
              sodobne AI tehnologije, da ideje spremenimo v prepričljive
              vizualne zgodbe. Vsak projekt gradimo skupaj – od prve ideje do
              končnega rezultata.
            </p>
          </div>

          <div className="mt-16 border-y border-white/[0.08]">
            <div className="grid md:grid-cols-3">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={value.number}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={[
                      "py-7 md:px-7 md:py-9",
                      index > 0
                        ? "border-t border-white/[0.08] md:border-l md:border-t-0"
                        : "",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-display text-xs tracking-[0.2em] text-primary-bright/70">
                        {value.number}
                      </span>

                      <Icon
                        size={16}
                        strokeWidth={1.7}
                        className="text-primary-bright"
                      />
                    </div>

                    <h3 className="mt-5 font-display text-sm font-semibold tracking-[0.12em] text-foreground">
                      {value.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {value.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutTeam;