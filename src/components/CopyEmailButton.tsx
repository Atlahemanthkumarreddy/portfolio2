"use client";

import { useState } from "react";

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. non-HTTPS); the address is still visible to copy by hand.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-full border border-white/40 px-5 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
    >
      {copied ? "Copied ✓" : "Copy email"}
    </button>
  );
}
