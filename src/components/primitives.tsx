import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      {eyebrow && (
        <Reveal>
          <p className="mb-5 font-display text-[11px] tracking-[0.35em] text-primary-bright uppercase">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl leading-[1.05] font-semibold uppercase sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="text-chrome">{title}</span>
        </h2>
      </Reveal>
      <Reveal delay={0.08}>
        <div
          aria-hidden
          className={`mt-5 h-px w-24 bg-gradient-to-r from-white/45 via-primary/50 to-transparent ${
            align === "center" ? "mx-auto" : ""
          }`}
        />
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
