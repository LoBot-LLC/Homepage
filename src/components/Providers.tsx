"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import en, { type Dict } from "@/i18n/en";
import es from "@/i18n/es";
import vi from "@/i18n/vi";

export type Lang = "en" | "es" | "vi";
export type ThemePref = "light" | "dark" | "system";

const dictionaries: Record<Lang, Dict> = { en, es, vi };
export const LOCALES: Record<Lang, string> = { en: "en-US", es: "es-ES", vi: "vi-VN" };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
  theme: ThemePref;
  setTheme: (t: ThemePref) => void;
};

const AppContext = createContext<Ctx | null>(null);

function applyTheme(pref: ThemePref) {
  const dark =
    pref === "dark" || (pref === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
}

export function Providers({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setThemeState] = useState<ThemePref>("system");

  useEffect(() => {
    // Restore browser-only preferences after hydration so server and client markup match.
    const storedLang = localStorage.getItem("lobot-lang") as Lang | null;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (storedLang && storedLang in dictionaries) setLangState(storedLang);
    const storedTheme = localStorage.getItem("lobot-theme") as ThemePref | null;
    if (storedTheme === "light" || storedTheme === "dark" || storedTheme === "system") setThemeState(storedTheme);
  }, []);

  useEffect(() => {
    applyTheme(theme);
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("lobot-lang", l);
  }, []);

  const setTheme = useCallback((t: ThemePref) => {
    setThemeState(t);
    localStorage.setItem("lobot-theme", t);
  }, []);

  return (
    <AppContext.Provider value={{ lang, setLang, t: dictionaries[lang], theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside <Providers>");
  return ctx;
}
