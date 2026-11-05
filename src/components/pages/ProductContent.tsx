"use client";

import { useApp } from "../Providers";
import { CheckIcon, CloseIcon, ExternalIcon, GithubIcon, TecnoLogo } from "../Icons";
import { Section, SectionHeader } from "../ui";
import { TECNO_GITHUB, TECNO_URL } from "@/lib/site";

const audienceIcons = ["🚚", "📦", "💼", "🏭", "📊", "🚀"];

function ActionButtons({ center = false }: { center?: boolean }) {
  const { t } = useApp();
  return (
    <div className={`flex flex-wrap items-center gap-3 ${center ? "justify-center" : ""}`}>
      <a href={TECNO_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" data-testid="try-now">
        {t.common.tryNow} <ExternalIcon className="h-4 w-4" />
      </a>
      <a
        href={TECNO_GITHUB}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.common.viewGithub}
        title={t.common.viewGithub}
        data-testid="tecno-github"
        className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-800 transition hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
      >
        <GithubIcon className="h-5 w-5" />
      </a>
    </div>
  );
}

export function ProductContent() {
  const { t } = useApp();
  const p = t.product;

  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden border-b border-slate-200 dark:border-white/10">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-teal-400/20 blur-3xl dark:bg-teal-500/15" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <div className="animate-fade-up flex justify-center">
            <TecnoLogo className="h-20 w-20 drop-shadow-[0_0_24px_rgba(45,212,191,0.45)]" />
          </div>
          <span className="eyebrow mt-6">{t.nav.flagship} · LoBot LLC</span>
          <h1 className="animate-fade-up mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">TecnoIndicator</h1>
          <p className="mt-4 text-xl font-medium text-teal-600 dark:text-teal-300">{p.tagline}</p>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">{p.intro}</p>
          <div className="mt-8">
            <ActionButtons center />
          </div>
        </div>
      </div>

      {/* PROBLEM */}
      <Section id="problem">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeader center={false} eyebrow="01" title={p.problem.title} subtitle={p.problem.lead} />
          </div>
          <ul className="space-y-4">
            {p.problem.items.map((it, i) => (
              <li key={i} className="card flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-sm font-bold text-rose-600 dark:bg-rose-500/10 dark:text-rose-300">{i + 1}</span>
                <p className="text-slate-700 dark:text-slate-300">{it}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* FEATURES */}
      <Section id="features" className="bg-slate-50 dark:bg-white/[0.015]">
        <SectionHeader eyebrow="02" title={p.features.title} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {p.features.items.map((f) => (
            <div key={f.title} className="card card-hover">
              <CheckIcon className="h-6 w-6 text-teal-500" />
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY BETTER */}
      <Section id="why">
        <SectionHeader eyebrow="03" title={p.better.title} subtitle={p.better.lead} />
        <div className="mt-12 overflow-x-auto rounded-2xl border border-slate-200 dark:border-white/10">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-slate-50 dark:bg-white/[0.03]">
              <tr>
                <th className="px-5 py-4 font-semibold text-slate-700 dark:text-slate-300">{p.better.headers.capability}</th>
                <th className="px-5 py-4 font-semibold text-teal-700 dark:text-teal-300">
                  <span className="inline-flex items-center gap-2"><TecnoLogo className="h-5 w-5" />{p.better.headers.us}</span>
                </th>
                <th className="px-5 py-4 font-semibold text-slate-500 dark:text-slate-400">{p.better.headers.them}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-white/10">
              {p.better.rows.map((r) => (
                <tr key={r.label} className="hover:bg-slate-50/60 dark:hover:bg-white/[0.02]">
                  <td className="px-5 py-4 font-medium text-slate-900 dark:text-white">{r.label}</td>
                  <td className="px-5 py-4 text-slate-700 dark:text-slate-200">
                    <span className="inline-flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />{r.us}</span>
                  </td>
                  <td className="px-5 py-4 text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-start gap-2"><CloseIcon className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />{r.them}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* AUDIENCE */}
      <Section id="audience" className="bg-slate-50 dark:bg-white/[0.015]">
        <SectionHeader eyebrow="04" title={p.audience.title} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {p.audience.items.map((a, i) => (
            <div key={a.title} className="card card-hover flex gap-4">
              <span className="text-3xl">{audienceIcons[i]}</span>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{a.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-3xl border border-teal-400/30 bg-gradient-to-br from-[#0a1a22] to-[#0f2a33] px-6 py-14 text-center shadow-2xl">
          <TecnoLogo className="mx-auto h-14 w-14" />
          <h2 className="mt-5 text-3xl font-bold text-white">{p.cta.title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">{p.cta.subtitle}</p>
          <div className="mt-8">
            <ActionButtons center />
          </div>
        </div>
      </Section>
    </>
  );
}
