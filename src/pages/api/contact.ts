import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.json();
  const name = formData.name;
  const email = formData.email;
  const message = formData.message;
  const captchaToken = formData.captchaToken;

  if (!email || !message || !name || !captchaToken) {
    return new Response("Missing fields", { status: 400 });
  }

  const secret = import.meta.env.TURNSTILE_SECRET_KEY;
  const captchaRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret,
        response: captchaToken,
      }),
    }
  );

  const captchaJson = await captchaRes.json();

  if (!captchaJson.success) {
    return new Response(JSON.stringify({ error: "CAPTCHA failed" }), {
      status: 400,
    });
  }

  const { error } = await resend.emails.send({
    from: "resend@contact.sorinraduta.ro",
    to: ["sorinradutaa@gmail.com"],
    subject: `Contact Form Submission - ${name}`,
    text: `${email} - ${message}`,
  });

  if (error) {
    console.error(error);
    return new Response("Error sending email", { status: 500 });
  }

  return new Response("OK", { status: 200 });
};

export const prerender = false;
