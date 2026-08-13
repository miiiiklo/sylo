import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { site } from "@/config/site";
import { inquiryOptions } from "@/data/services";
import { Reveal } from "./primitives";
import { submitInquiry, type Inquiry } from "@/lib/submitInquiry";

type Errors = Partial<Record<keyof Inquiry, string>>;
type Status = "idle" | "loading" | "success" | "error";

const empty: Inquiry = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<Inquiry>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (key: keyof Inquiry, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Vnesi svoje ime.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      e.email = "Vnesi veljaven e-mail naslov.";
    if (form.phone.trim() && form.phone.trim().replace(/\D/g, "").length < 6)
      e.phone = "Vnesi veljavno telefonsko številko.";
    if (!form.service) e.service = "Izberi storitev.";
    if (form.message.trim().length < 10)
      e.message = "Opiši svojo idejo (vsaj 10 znakov).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (status === "loading") return;
    if (!validate()) return;
    setStatus("loading");
    try {
      await submitInquiry(form);
      setStatus("success");
      setForm(empty);
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-2xl border border-border bg-white/[0.03] px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/60 focus:bg-white/[0.05]";

  return (
    <section id="kontakt" className="relative py-16 sm:py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_15%_20%,rgba(139,61,255,0.14),transparent_65%)]"
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="mb-5 font-display text-[11px] tracking-[0.35em] text-primary-bright uppercase">
              Kontakt
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display text-3xl leading-[1.05] font-semibold uppercase sm:text-5xl">
              <span className="text-chrome">Ustvarimo nekaj dobrega.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Ne glede na to, ali potrebuješ video, fotografije ali AI oglas,
              nam pošlji svoje ideje.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <a
              href={`mailto:${site.email}`}
              className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-sm transition-colors hover:border-primary/45"
            >
              <Mail size={16} className="text-primary-bright" />
              {site.email}
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs text-muted-foreground">
                  Ime
                </label>
                <input
                  id="name"
                  className={field}
                  placeholder="Tvoje ime"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <FieldError text={errors.name} />}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs text-muted-foreground">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  className={field}
                  placeholder="ime@primer.si"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <FieldError text={errors.email} />}
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-xs text-muted-foreground">
                  Telefon
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={field}
                  placeholder="Neobvezno"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && <FieldError text={errors.phone} />}
              </div>
              <div>
                <label htmlFor="service" className="mb-2 block text-xs text-muted-foreground">
                  Izberi storitev
                </label>
                <select
                  id="service"
                  className={`${field} appearance-none`}
                  value={form.service}
                  onChange={(e) => set("service", e.target.value)}
                  aria-invalid={Boolean(errors.service)}
                >
                  <option value="">Izberi …</option>
                  {inquiryOptions.map((o) => (
                    <option key={o} value={o} className="bg-card">
                      {o}
                    </option>
                  ))}
                </select>
                {errors.service && <FieldError text={errors.service} />}
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="mb-2 block text-xs text-muted-foreground">
                Sporočilo
              </label>
              <textarea
                id="message"
                rows={5}
                className={`${field} resize-none`}
                placeholder="Opiši svoj projekt …"
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <FieldError text={errors.message} />}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-display text-[11px] tracking-[0.2em] text-primary-foreground uppercase transition-all duration-300 hover:bg-primary-bright hover:shadow-[0_0_40px_-8px_rgba(139,61,255,0.85)] disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={15} className="animate-spin" /> Pošiljanje …
                </>
              ) : (
                <>
                  Pošlji povpraševanje <Send size={14} />
                </>
              )}
            </button>

            <div aria-live="polite" className="mt-4">
              {status === "success" && (
                <p className="flex items-start gap-2 rounded-2xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm text-foreground">
                  <CheckCircle2 size={16} className="mt-0.5 text-primary-bright" />
                  Povpraševanje je pripravljeno. Kmalu se ti oglasimo na{" "}
                  {site.email}.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-start gap-2 rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-foreground">
                  <AlertCircle size={16} className="mt-0.5 text-destructive" />
                  Pošiljanje ni uspelo. Poskusi znova ali nam piši na{" "}
                  {site.email}.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function FieldError({ text }: { text: string }) {
  return <p className="mt-2 text-xs text-destructive">{text}</p>;
}

export default Contact;
