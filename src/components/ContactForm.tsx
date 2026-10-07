"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContactMessage, type ContactState } from "@/app/actions";

const initialState: ContactState = { status: "idle", message: "" };

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-stone-400 hover:border-stone-300 focus:border-accent focus:bg-card focus:ring-4 focus:ring-blue-100 aria-[invalid=true]:border-red-400 aria-[invalid=true]:ring-red-50";

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  const err = state.errors ?? {};

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-stone-200/60 sm:p-8"
    >
      <h3 className="text-xl font-semibold tracking-tight">Send me a message</h3>
      <p className="mt-1 text-sm text-muted">I usually reply within a day or two.</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={err.name}>
          <input
            id="name"
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={!!err.name}
            aria-describedby={err.name ? "name-error" : undefined}
            className={inputClass}
          />
        </Field>
        <Field label="Email" name="email" error={err.email}>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!err.email}
            aria-describedby={err.email ? "email-error" : undefined}
            className={inputClass}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Subject (optional)" name="subject" error={err.subject}>
          <input
            id="subject"
            name="subject"
            maxLength={150}
            placeholder="Job opportunity, project idea…"
            aria-invalid={!!err.subject}
            aria-describedby={err.subject ? "subject-error" : undefined}
            className={inputClass}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message" name="message" error={err.message}>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={5}
            placeholder="Hi Hemanth, …"
            aria-invalid={!!err.message}
            aria-describedby={err.message ? "message-error" : undefined}
            className={`${inputClass} resize-y`}
          />
        </Field>
      </div>

      {/* Honeypot field for bots, hidden from people and screen readers */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-lg shadow-stone-900/10 transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-blue-500/30 disabled:pointer-events-none disabled:opacity-60"
        >
          {pending ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-background/40 border-t-background" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </>
          )}
        </button>

        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${state.status === "success" ? "text-emerald-600" : "text-red-600"}`}
        >
          {state.status === "success" && "✓ "}
          {state.message}
        </p>
      </div>
    </form>
  );
}
