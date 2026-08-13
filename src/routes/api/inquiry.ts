import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";

type Inquiry = {
    name: string;
    email: string;
    phone?: string;
    service: string;
    message: string;
};

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

export const Route = createFileRoute("/api/inquiry")({
    server: {
        handlers: {
            POST: async ({ request }) => {
                try {
                    const body = (await request.json()) as Partial<Inquiry>;

                    const name = body.name?.trim() ?? "";
                    const email = body.email?.trim() ?? "";
                    const phone = body.phone?.trim() ?? "";
                    const service = body.service?.trim() ?? "";
                    const message = body.message?.trim() ?? "";

                    if (name.length < 2) {
                        return Response.json(
                            { error: "Neveljavno ime." },
                            { status: 400 },
                        );
                    }

                    if (!isValidEmail(email)) {
                        return Response.json(
                            { error: "Neveljaven e-mail naslov." },
                            { status: 400 },
                        );
                    }

                    if (!service) {
                        return Response.json(
                            { error: "Storitev ni izbrana." },
                            { status: 400 },
                        );
                    }

                    if (message.length < 10) {
                        return Response.json(
                            { error: "Sporočilo je prekratko." },
                            { status: 400 },
                        );
                    }

                    const apiKey = process.env["RESEND_API_KEY"];

                    if (!apiKey) {
                        console.error("RESEND_API_KEY ni nastavljen.");
                        return Response.json(
                            { error: "E-poštni servis ni konfiguriran." },
                            { status: 500 },
                        );
                    }

                    const resend = new Resend(apiKey);

                    const safeName = escapeHtml(name);
                    const safeEmail = escapeHtml(email);
                    const safePhone = escapeHtml(phone || "Ni naveden");
                    const safeService = escapeHtml(service);
                    const safeMessage = escapeHtml(message).replaceAll(
                        "\n",
                        "<br />",
                    );

                    const { error } = await resend.emails.send({
                        from: "SYLO <onboarding@resend.dev>",
                        to: ["syloagency@gmail.com"],
                        replyTo: email,
                        subject: `Novo povpraševanje – ${service}`,
                        html: `
              <div style="font-family: Arial, sans-serif; max-width: 680px; margin: 0 auto; color: #111;">
                <h1 style="margin-bottom: 24px;">Novo povpraševanje – SYLO</h1>

                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; font-weight: 700; width: 140px;">Ime</td>
                    <td style="padding: 10px 0;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; font-weight: 700;">E-mail</td>
                    <td style="padding: 10px 0;">${safeEmail}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; font-weight: 700;">Telefon</td>
                    <td style="padding: 10px 0;">${safePhone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; font-weight: 700;">Storitev</td>
                    <td style="padding: 10px 0;">${safeService}</td>
                  </tr>
                </table>

                <div style="margin-top: 28px;">
                  <h2 style="font-size: 18px;">Sporočilo</h2>
                  <div style="padding: 16px; background: #f4f4f5; border-radius: 12px; line-height: 1.6;">
                    ${safeMessage}
                  </div>
                </div>
              </div>
            `,
                        text: [
                            "NOVO POVPRAŠEVANJE – SYLO",
                            "",
                            `Ime: ${name}`,
                            `E-mail: ${email}`,
                            `Telefon: ${phone || "Ni naveden"}`,
                            `Storitev: ${service}`,
                            "",
                            "Sporočilo:",
                            message,
                        ].join("\n"),
                    });

                    if (error) {
                        console.error("Resend napaka:", error);

                        return Response.json(
                            { error: "E-mail ni bilo mogoče poslati." },
                            { status: 500 },
                        );
                    }

                    return Response.json({ success: true });
                } catch (error) {
                    console.error("Inquiry endpoint napaka:", error);

                    return Response.json(
                        { error: "Prišlo je do nepričakovane napake." },
                        { status: 500 },
                    );
                }
            },
        },
    },
});
