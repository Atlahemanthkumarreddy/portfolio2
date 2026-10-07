"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { certificates } from "@/data/portfolio";

type Certificate = (typeof certificates)[number];

export default function CertificateGallery() {
  const [open, setOpen] = useState<Certificate | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2">
        {certificates.map((cert, i) => (
          <Reveal key={cert.title} delay={(i % 2) * 120} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100">
              {cert.image ? (
                <button
                  type="button"
                  onClick={() => setOpen(cert)}
                  aria-label={`View ${cert.title} certificate`}
                  className="relative aspect-[4/3] overflow-hidden bg-stone-100"
                >
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate from ${cert.issuer}`}
                    fill
                    sizes="(min-width: 640px) 380px, 100vw"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-stone-900/0 transition-colors duration-300 group-hover:bg-stone-900/40">
                    <span className="translate-y-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-stone-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      View certificate ⤢
                    </span>
                  </span>
                </button>
              ) : (
                <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 bg-gradient-to-br from-stone-100 to-stone-200 text-stone-400">
                  <span className="text-4xl transition-transform duration-500 group-hover:scale-110">🏅</span>
                  <span className="text-sm">Certificate image coming soon</span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-medium transition-colors group-hover:text-accent">{cert.title}</h3>
                  <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-0.5 font-mono text-[11px] text-accent">
                    {cert.date}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-muted">{cert.issuer}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{cert.details}</p>
                {cert.verify && (
                  <a
                    href={cert.verify.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mt-4 self-start text-sm font-medium text-accent"
                  >
                    {cert.verify.label} ↗
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Full-size viewer. Esc, the close button or a click on the backdrop closes it. */}
      <dialog
        ref={dialogRef}
        onClose={() => setOpen(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(null);
        }}
        className="m-auto w-[min(92vw,1000px)] rounded-2xl bg-card p-0 shadow-2xl backdrop:bg-stone-950/70 backdrop:backdrop-blur-sm"
      >
        {open && (
          <div className="p-3 sm:p-4">
            <div className="mb-3 flex items-center justify-between gap-4 px-1">
              <div>
                <p className="font-medium">{open.title}</p>
                <p className="text-sm text-muted">
                  {open.issuer} · {open.date}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(null)}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-lg transition-colors hover:border-foreground hover:bg-stone-100"
              >
                ×
              </button>
            </div>
            <Image
              src={open.image}
              alt={`${open.title} certificate from ${open.issuer}`}
              width={1400}
              height={1000}
              sizes="(min-width: 1000px) 1000px, 92vw"
              className="h-auto max-h-[78vh] w-full rounded-lg object-contain"
            />
          </div>
        )}
      </dialog>
    </>
  );
}
