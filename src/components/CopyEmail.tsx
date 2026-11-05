"use client";

import { useState } from "react";
import { useApp } from "./Providers";
import { CheckIcon, CopyIcon, MailIcon } from "./Icons";
import { COMPANY_EMAIL } from "@/lib/site";

export async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to legacy path */
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

function useCopy() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    const ok = await copyText(COMPANY_EMAIL);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  return { copied, copy };
}

/** Clicking the email itself copies it to the clipboard. */
export function EmailCopyChip({ className = "" }: { className?: string }) {
  const { t } = useApp();
  const { copied, copy } = useCopy();
  return (
    <button
      type="button"
      onClick={copy}
      data-testid="email-copy-chip"
      title={t.common.copyEmail}
      className={`group relative inline-flex items-center gap-3 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-mono text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 ${className}`}
    >
      <MailIcon className="h-5 w-5" />
      <span>{COMPANY_EMAIL}</span>
      {copied ? <CheckIcon className="h-4 w-4 text-emerald-300" /> : <CopyIcon className="h-4 w-4 opacity-70 group-hover:opacity-100" />}
      <span aria-live="polite" className="sr-only">{copied ? t.common.emailCopied : ""}</span>
      {copied && (
        <span className="absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-slate-900 px-2 py-1 text-xs font-sans text-white shadow">
          {t.common.copied}
        </span>
      )}
    </button>
  );
}

/** A standalone copy button (used next to a mailto link). */
export function CopyButton({ className = "" }: { className?: string }) {
  const { t } = useApp();
  const { copied, copy } = useCopy();
  return (
    <button type="button" onClick={copy} data-testid="copy-button" className={`btn-secondary ${className}`} aria-label={t.common.copyEmail}>
      {copied ? <CheckIcon className="h-4 w-4 text-emerald-500" /> : <CopyIcon className="h-4 w-4" />}
      {copied ? t.common.copied : t.common.copy}
    </button>
  );
}
