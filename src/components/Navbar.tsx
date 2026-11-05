"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useApp, type Lang, type ThemePref } from "./Providers";
import { ChevronDown, CloseIcon, GlobeIcon, LoBotLogo, MenuIcon, MonitorIcon, MoonIcon, SunIcon, TecnoLogo } from "./Icons";

function useOutsideClose(open: boolean, close: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);
  return ref;
}

function Dropdown({
  label,
  button,
  children,
  align = "left",
  testId,
}: {
  label: string;
  button: ReactNode;
  children: (close: () => void) => ReactNode;
  align?: "left" | "right";
  testId?: string;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const ref = useOutsideClose(open, close);
  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        aria-haspopup="menu"
        data-testid={testId}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
      >
        {button}
      </button>
      {open && (
        <div
          role="menu"
          className={`animate-fade-up absolute top-full z-50 mt-2 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl dark:border-white/10 dark:bg-slate-900 ${align === "right" ? "right-0" : "left-0"}`}
        >
          {children(close)}
        </div>
      )}
    </div>
  );
}

const LANGS: { code: Lang; short: string; name: string }[] = [
  { code: "en", short: "EN", name: "English" },
  { code: "es", short: "ESP", name: "Español" },
  { code: "vi", short: "VI", name: "Tiếng Việt" },
];

export function Navbar() {
  const { t, lang, setLang, theme, setTheme } = useApp();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the menu after any navigation, including browser back/forward.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMobileOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const themes: { value: ThemePref; label: string; icon: ReactNode }[] = [
    { value: "light", label: t.nav.light, icon: <SunIcon className="h-4 w-4" /> },
    { value: "dark", label: t.nav.dark, icon: <MoonIcon className="h-4 w-4" /> },
    { value: "system", label: t.nav.system, icon: <MonitorIcon className="h-4 w-4" /> },
  ];
  const currentTheme = themes.find((x) => x.value === theme) ?? themes[2];
  const currentLang = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  const linkCls = (href: string) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-slate-100 dark:hover:bg-white/10 ${
      pathname.startsWith(href) ? "text-brand-600 dark:text-brand-300" : "text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
    }`;

  const productsMenu = (close: () => void) => (
    <div className="w-80 p-1">
      <p className="px-3 pt-2 pb-1 text-xs font-medium text-slate-500 dark:text-slate-400">{t.nav.productsHint}</p>
      <Link
        href="/products/tecnoindicator"
        onClick={close}
        role="menuitem"
        data-testid="nav-tecnoindicator"
        className="flex items-start gap-3 rounded-lg p-3 transition hover:bg-slate-100 dark:hover:bg-white/5"
      >
        <TecnoLogo className="h-10 w-10 shrink-0" />
        <span>
          <span className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
            TecnoIndicator
            <span className="rounded-full bg-teal-100 px-2 py-0.5 text-[10px] font-bold text-teal-700 uppercase dark:bg-teal-400/15 dark:text-teal-300">
              {t.nav.flagship}
            </span>
          </span>
          <span className="mt-0.5 block text-xs text-slate-500 dark:text-slate-400">{t.product.tagline}</span>
        </span>
      </Link>
      <p className="border-t border-slate-100 px-3 pt-2 pb-1 text-xs text-slate-400 dark:border-white/5">{t.nav.moreSoon}</p>
    </div>
  );

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition ${
        scrolled ? "border-slate-200 bg-white/85 backdrop-blur-lg dark:border-white/10 dark:bg-[#05070d]/85" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="LoBot LLC home" data-testid="brand">
          <LoBotLogo />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <Dropdown label={t.nav.products} testId="nav-products" button={<>{t.nav.products}<ChevronDown className="h-4 w-4" /></>}>
            {productsMenu}
          </Dropdown>
          <Link href="/about" className={linkCls("/about")}>{t.nav.about}</Link>
          <Link href="/blog" className={linkCls("/blog")}>{t.nav.blog}</Link>
          <Link href="/careers" className={linkCls("/careers")}>{t.nav.careers}</Link>
        </div>

        <div className="flex items-center gap-1">
          <Dropdown label={t.nav.theme} align="right" testId="theme-toggle" button={currentTheme.icon}>
            {(close) => (
              <div className="w-40">
                {themes.map((th) => (
                  <button
                    key={th.value}
                    role="menuitemradio"
                    aria-checked={theme === th.value}
                    onClick={() => { setTheme(th.value); close(); }}
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition hover:bg-slate-100 dark:hover:bg-white/5 ${
                      theme === th.value ? "font-semibold text-brand-600 dark:text-brand-300" : "text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {th.icon}{th.label}
                  </button>
                ))}
              </div>
            )}
          </Dropdown>
          <Dropdown label={t.nav.language} align="right" testId="lang-toggle" button={<><GlobeIcon className="h-4 w-4" /><span className="text-xs font-bold">{currentLang.short}</span><ChevronDown className="h-3 w-3" /></>}>
            {(close) => (
              <div className="w-44">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    role="menuitemradio"
                    aria-checked={lang === l.code}
                    data-testid={`lang-${l.code}`}
                    onClick={() => { setLang(l.code); close(); }}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition hover:bg-slate-100 dark:hover:bg-white/5 ${
                      lang === l.code ? "font-semibold text-brand-600 dark:text-brand-300" : "text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <span>{l.name}</span>
                    <span className="text-xs text-slate-400">{l.short}</span>
                  </button>
                ))}
              </div>
            )}
          </Dropdown>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden dark:text-slate-300 dark:hover:bg-white/10"
            aria-label={t.nav.menu}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 lg:hidden dark:border-white/10 dark:bg-[#05070d]">
          <p className="pt-3 pb-1 text-xs font-semibold tracking-wide text-slate-500 uppercase">{t.nav.products}</p>
          {productsMenu(() => setMobileOpen(false))}
          <div className="mt-2 flex flex-col">
            <Link href="/about" className={linkCls("/about")}>{t.nav.about}</Link>
            <Link href="/blog" className={linkCls("/blog")}>{t.nav.blog}</Link>
            <Link href="/careers" className={linkCls("/careers")}>{t.nav.careers}</Link>
          </div>
        </div>
      )}
    </header>
  );
}
