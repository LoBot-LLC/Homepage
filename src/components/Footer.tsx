"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LOCALES, useApp } from "./Providers";
import { GithubIcon, LoBotLogo } from "./Icons";
import { GITHUB_ORG } from "@/lib/site";

export function Footer() {
  const { t, lang } = useApp();
  const [now, setNow] = useState<Date | null>(null);
  // Use the client's date only after hydration so the initial HTML matches.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setNow(new Date()), []);

  const year = (now ?? new Date()).getFullYear();
  const updated = now
    ? now.toLocaleDateString(LOCALES[lang], { month: "long", day: "numeric", year: "numeric" })
    : "";

  const linkCls = "text-sm text-slate-600 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300";

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-[#04060a]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div className="max-w-md">
            <Link href="/" aria-label="LoBot LLC home">
              <LoBotLogo />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{t.footer.description}</p>
            <div className="mt-5 flex gap-3">
              <a
                href={GITHUB_ORG}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LoBot LLC on GitHub"
                data-testid="footer-github"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition hover:border-brand-400 hover:text-brand-600 dark:border-white/15 dark:text-slate-300 dark:hover:text-white"
              >
                <GithubIcon />
              </a>
              <a
                href="https://lobotllc.vercel.app/"
                rel="noopener noreferrer"
                aria-label="LoBot LLC main website"
                data-testid="footer-website"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition hover:border-brand-400 hover:text-brand-600 dark:border-white/15 dark:text-slate-300 dark:hover:text-white"
              >
                <Image src="/favicon.svg" alt="LoBot LLC logo" width={32} height={32} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{t.footer.resources}</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/blog" className={linkCls}>{t.footer.blogs}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{t.footer.company}</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/about" className={linkCls}>{t.footer.about}</Link></li>
              <li><Link href="/careers" className={linkCls}>{t.footer.careers}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:text-slate-500">
          <p data-testid="copyright">© {year} {t.footer.rights}</p>
          <p data-testid="last-updated" suppressHydrationWarning>
            {t.footer.updated} {updated}
          </p>
        </div>
      </div>
    </footer>
  );
}
