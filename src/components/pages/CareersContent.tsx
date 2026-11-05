"use client";

import { useApp } from "../Providers";
import { MailIcon } from "../Icons";
import { CopyButton } from "../CopyEmail";
import { NumberBadge, PageHero, Section, SectionHeader } from "../ui";
import { COMPANY_EMAIL } from "@/lib/site";

const believeIcons = ["🤝", "🎯", "🌐", "🧭", "⚖️", "🤖"];
const operateIcons = ["🕊️", "🔍", "⚡", "☀️", "🏅"];

function mailto(subject: string) {
  return `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export function CareersContent() {
  const { t } = useApp();
  const c = t.careers;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} subtitle={c.message}>
        <div className="mt-8 flex justify-center">
          <a href="#apply" className="btn-primary">{c.cta.title}</a>
        </div>
      </PageHero>

      <Section id="believe">
        <SectionHeader title={c.believe.title} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {c.believe.items.map((b, i) => (
            <div key={b.title} className="card card-hover">
              <span className="text-3xl">{believeIcons[i]}</span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="operate" className="bg-slate-50 dark:bg-white/[0.015]">
        <SectionHeader title={c.operate.title} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {c.operate.items.map((o, i) => (
            <div key={o.title} className="card card-hover text-center">
              <span className="text-3xl">{operateIcons[i]}</span>
              <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{o.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="roles">
        <SectionHeader title={c.roles.title} subtitle={c.roles.subtitle} />
        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {c.roles.items.map((r) => (
            <div key={r.title} className="card card-hover flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">{r.dept}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{c.roles.type}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{r.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{r.desc}</p>
                {r.tracks.length > 0 && (
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{c.roles.chooseOne}</span>
                    {r.tracks.map((tr) => (
                      <a key={tr} href={mailto(`Application: ${r.title} (${tr})`)} className="rounded-lg border border-slate-300 px-2.5 py-1 text-xs font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-600 dark:border-white/15 dark:text-slate-200 dark:hover:text-brand-300">
                        {tr}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a href={mailto(`Application: ${r.title}`)} className="btn-secondary shrink-0">{c.roles.apply}</a>
            </div>
          ))}
        </div>
      </Section>

      <Section id="hiring" className="bg-slate-50 dark:bg-white/[0.015]">
        <SectionHeader title={c.hiring.title} />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {c.hiring.steps.map((s, i) => (
            <div key={s.title} className="card">
              <NumberBadge n={i + 1} />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="apply">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-cyan-700 px-6 py-16 text-center shadow-2xl">
          <h2 className="text-4xl font-extrabold text-white">{c.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-50">{c.cta.subtitle}</p>
          <div className="mx-auto mt-8 flex max-w-xl flex-col items-stretch gap-3 rounded-2xl bg-white p-2 shadow-lg sm:flex-row sm:items-center dark:bg-slate-900">
            <span data-testid="careers-email" className="flex flex-1 items-center gap-2 px-3 py-2 font-mono text-sm font-semibold text-slate-800 select-all dark:text-slate-100">
              <MailIcon className="h-5 w-5 text-brand-500" /> {COMPANY_EMAIL}
            </span>
            <CopyButton />
            <a href={mailto("Application: [Role]")} className="btn-primary">{c.cta.button}</a>
          </div>
        </div>
      </Section>
    </>
  );
}
