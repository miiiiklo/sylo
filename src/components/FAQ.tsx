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
      "Po potrditvi projekta se dogovorimo o ceni in načinu plačila. Plačilo se izvede po dogovoru, najpogosteje z bančnim nakazilom. Pri večjih projektih je možno tudi predplačilo, preostanek pa po končani izvedbi.",
  },
  {
    question: "Koliko popravkov je vključenih?",
    answer:
      "V ceno sta vključena do 2 kroga popravkov. Če so potrebne dodatne spremembe, se zanje predhodno dogovorimo glede na obseg dela.",
  },
  {
    question: "Ali lahko pošljem svoje reference ali ideje?",
    answer:
      "Seveda! Z veseljem upoštevamo vaše reference, ideje in želje. Tako lahko bolje razumemo vaš stil in pripravimo video, ki bo čim bolj ustrezal vašim pričakovanjem.",
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