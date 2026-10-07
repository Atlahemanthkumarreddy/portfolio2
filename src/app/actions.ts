"use server";

import { getSupabase } from "@/lib/supabase";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "subject" | "message", string>>;
};

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function sendContactMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field, bots usually do.
  if (formData.get("company")) {
    return { status: "success", message: "Thanks! Your message has been sent." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // Same limits as the checks in supabase/schema.sql
  const errors: ContactState["errors"] = {};
  if (!name) errors.name = "Please enter your name.";
  else if (name.length > 100) errors.name = "Name must be 100 characters or less.";
  if (!EMAIL_RE.test(email) || email.length > 254) errors.email = "Please enter a valid email address.";
  if (subject.length > 150) errors.subject = "Subject must be 150 characters or less.";
  if (message.length < 10) errors.message = "Message must be at least 10 characters.";
  else if (message.length > 5000) errors.message = "Message must be 5000 characters or less.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors };
  }

  try {
    const { error } = await getSupabase()
      .from("contact_messages")
      .insert({ name, email, subject: subject || null, message });
    if (error) throw error;
  } catch (err) {
    console.error("Contact form insert failed:", err);
    return {
      status: "error",
      message: "Sorry, something went wrong sending your message. Please try again or email me directly.",
    };
  }

  return { status: "success", message: "Thanks! Your message has been sent. I'll get back to you soon." };
}
