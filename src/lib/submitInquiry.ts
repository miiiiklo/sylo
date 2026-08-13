export type Inquiry = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

/**
 * Edino mesto za pošiljanje povpraševanja.
 * Trenutno samo simulira uspešno pošiljanje (brez backenda).
 * Kasneje tukaj zamenjaj implementacijo, npr.:
 *
 *   await fetch("/api/inquiry", { method: "POST", body: JSON.stringify(data) })
 *
 * ali storitev tipa Formspree / Resend / EmailJS.
 */
export async function submitInquiry(data: Inquiry): Promise<void> {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info("[SYLO] povpraševanje:", data);
  }
  await new Promise((resolve) => setTimeout(resolve, 900));
}
