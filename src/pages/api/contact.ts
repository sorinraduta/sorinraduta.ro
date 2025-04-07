import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.json();
  const name = formData.name;
  const email = formData.email;
  const message = formData.message;

  if (!email || !message || !name) {
    return new Response("Missing fields", { status: 400 });
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
