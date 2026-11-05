"use client";

import Link from "next/link";
import { useApp } from "../Providers";
import { ArrowRight, LoBotMark, TecnoLogo } from "../Icons";
import { EmailCopyChip } from "../CopyEmail";
import { NumberBadge, Section, SectionHeader } from "../ui";

const problemIcons = ["📉", "🔒", "🗂️", "🐢"];
const solutionIcons = ["🔭", "🧠", "🎯", "🌍"];
const aiIcons = ["🔎", "🧩", "💡", "📈"];

export function HomeContent() {
  const { t } = useApp();
  const h = t.home;

  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-400/25 via-sky-300/20 to-teal-300/25 blur-3xl dark:from-brand-600/25 dark:via-indigo-500/10 dark:to-teal-500/15" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-16 pb-24 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:px-8 lg:pt-24">
          <div className="animate-fade-up">
            <span className="eyebrow">{h.hero.badge}</span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              {h.hero.title1}{" "}
              <span className="text-gradient">{h.hero.title2}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {h.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products/tecnoindicator" className="btn-primary">
                {h.hero.primary} <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#contact" className="btn-secondary">
                {h.hero.secondary}
              </a>
            </div>
            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {[
                ["10Y", h.hero.stat1],
                ["8×", h.hero.stat2],
                ["MIT", h.hero.stat3],
              ].map(([k, v]) => (
                <div key={k} className="border-l-2 border-brand-400 pl-3">
                  <dt className="text-2xl font-bold text-slate-900 dark:text-white">
                    {k}
                  </dt>
                  <dd className="text-xs text-slate-500 dark:text-slate-400">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-500/30 to-teal-400/30 blur-2xl" />
            <div className="relative rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
              <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-[#0a2a30] py-10">
                <LoBotMark className="h-32 w-32 text-white" />
              </div>
              <svg
                viewBox="0 0 300 80"
                className="mt-5 w-full"
                aria-hidden="true"
              >
                <path
                  d="M0 60 L40 52 L80 58 L120 38 L160 44 L200 24 L240 30 L300 12"
                  fill="none"
                  stroke="#2dd4bf"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M0 66 L40 62 L80 66 L120 52 L160 58 L200 44 L240 48 L300 34"
                  fill="none"
                  stroke="#5e97ec"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* PROBLEM */}
      <Section id="problem" className="bg-slate-50 dark:bg-white/[0.015]">
        <SectionHeader
          eyebrow={h.problem.eyebrow}
          title={h.problem.title}
          subtitle={h.problem.subtitle}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {h.problem.items.map((it, i) => (
            <div key={it.title} className="card card-hover">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-2xl dark:bg-rose-500/10">
                {problemIcons[i]}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                {it.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* SOLUTION */}
      <Section id="solution">
        <SectionHeader
          eyebrow={h.solution.eyebrow}
          title={h.solution.title}
          subtitle={h.solution.subtitle}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {h.solution.items.map((it, i) => (
            <div key={it.title} className="card card-hover flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-2xl dark:bg-brand-500/10">
                {solutionIcons[i]}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {it.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ECOSYSTEM */}
      <Section id="ecosystem" className="bg-slate-50 dark:bg-white/[0.015]">
        <SectionHeader
          eyebrow={h.ecosystem.eyebrow}
          title={h.ecosystem.title}
          subtitle={h.ecosystem.subtitle}
        />
        <div className="mx-auto mt-14 max-w-4xl space-y-6">
          {h.ecosystem.products.map((p) => (
            <Link
              key={p.name}
              href="/products/tecnoindicator"
              data-testid="ecosystem-tecnoindicator"
              className="card card-hover block ring-1 ring-teal-400/40 sm:p-8"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <TecnoLogo className="h-14 w-14 shrink-0 drop-shadow-[0_0_18px_rgba(45,212,191,0.35)]" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {p.name}
                    </h3>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
                      {t.common.live}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-semibold tracking-wide text-brand-600 uppercase dark:text-brand-300">
                    {p.tag}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
                    {p.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-300">
                    {t.common.learnMore} <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* AI CORE */}
      <Section id="ai-core">
        <SectionHeader
          eyebrow={h.ai.eyebrow}
          title={h.ai.title}
          subtitle={h.ai.subtitle}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {h.ai.features.map((f, i) => (
            <div key={f.title} className="card card-hover">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-2xl dark:bg-teal-400/10">
                {aiIcons[i]}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-[#0a2a30] p-8 text-white dark:border-white/10">
          <h3 className="text-center text-sm font-semibold tracking-widest text-brand-200 uppercase">
            {h.ai.flowTitle}
          </h3>
          <ol className="mt-8 grid gap-6 md:grid-cols-4">
            {h.ai.steps.map((s, i) => (
              <li
                key={s.title}
                className="relative flex flex-col items-center text-center"
              >
                <NumberBadge n={i + 1} />
                <p className="mt-3 font-semibold">{s.title}</p>
                <p className="mt-1 text-sm text-slate-300">{s.desc}</p>
                {i < h.ai.steps.length - 1 && (
                  <ArrowRight className="absolute top-2.5 -right-5 hidden h-5 w-5 text-teal-300 md:block" />
                )}
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-col items-center gap-3 border-t border-white/10 pt-6">
            <p className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase">
              {h.ai.poweredBy}
            </p>
            <ul
              className="flex flex-wrap justify-center gap-2"
              data-testid="powered-by"
            >
              {[
                "Kilo Gateway",
                "TinyFish",
                "Playwright MCP",
                "DuckDuckGo HTTP Search",
                "Next.js route handlers",
              ].map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section id="contact" className="pt-0">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-cyan-700 px-6 py-16 text-center shadow-2xl sm:px-12">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <h2 className="relative text-3xl font-bold text-white sm:text-4xl">
            {h.cta.title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-lg text-brand-50">
            {h.cta.subtitle}
          </p>
          <p className="relative mt-8 text-sm font-semibold tracking-wide text-white/80 uppercase">
            {h.cta.contact}
          </p>
          <div className="relative mt-3 flex justify-center">
            <EmailCopyChip />
          </div>
          <p className="relative mt-3 text-xs text-white/70">{h.cta.hint}</p>
        </div>
      </Section>
    </>
  );
}
