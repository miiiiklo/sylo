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
      "????",
  },
  {
    question: "Koliko popravkov je vključenih?",
    answer:
      "????",
  },
  {
    question: "Ali lahko pošljem svoje reference ali ideje?",
    answer:
      "????,",
  },
  {
    question: "Kako hitro dobim material?",
    answer:
      "????",
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