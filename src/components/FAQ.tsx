import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { SectionHeading } from "./primitives";

const faqs = [
  {
    question: "Kako poteka plačilo?",
    answer:
      "Po dogovoru o obsegu projekta pošljemo predračun. Plačilo je možno v celoti ali po delih ob zaključku posameznih faz.",
  },
  {
    question: "Koliko popravkov je vključenih?",
    answer:
      "V ceno sta vključena 2 kroga popravkov. Dodatni popravki se zaračunajo po dogovoru glede na obseg dela.",
  },
  {
    question: "Ali lahko pošljem svoje reference ali ideje?",
    answer:
      "Seveda — v povpraševanju lahko priložiš primere, ki so ti všeč, da lažje ujamemo tvojo vizijo že v prvem konceptu.",
  },
  {
    question: "Kako hitro dobim material?",
    answer:
      "Odvisno od storitve: AI produkcija je pripravljena v 24–48 urah, fotografije v 2–3 dneh, video produkcija pa v 3–5 delovnih dneh.",
  },
];

export function FAQ() {
  return (
    <section className="relative border-y border-border bg-surface/60 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pogosta vprašanja"
          title="Vse, kar te zanima."
          align="left"
        />

        <Accordion type="single" collapsible className="mt-10 sm:mt-14">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${i}`}
              className="border-border"
            >
              <AccordionTrigger className="font-display text-sm tracking-[0.02em] text-foreground sm:text-base [&:hover]:no-underline [&:hover]:text-primary-bright">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ;