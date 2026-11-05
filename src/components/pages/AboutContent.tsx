"use client";

import { useApp } from "../Providers";
import { GithubIcon } from "../Icons";
import { PageHero, Section, SectionHeader } from "../ui";
import type { CommunityStats } from "@/lib/github";
import { GITHUB_ORG } from "@/lib/site";

const missionIcons = ["🏢", "🤖", "🔓", "📐"];
const cultureIcons = ["⚡", "🤖", "❤️", "🔍", "🤝", "🌏", "💡"];
const STACK = [
  { name: "TypeScript", color: "#3178c6" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "Next.js", color: "#888888" },
  { name: "React", color: "#61dafb" },
  { name: "Node.js", color: "#5fa04e" },
  { name: "Bun", color: "#f9f1e1" },
  { name: "Tailwind CSS", color: "#38bdf8" },
  { name: "PostgreSQL", color: "#4169e1" },
  { name: "Chart.js", color: "#ff6384" },
  { name: "npm", color: "#cb3837" },
  { name: "Vercel", color: "#999999" },
  { name: "HTML / CSS", color: "#e34f26" },
  { name: "JSON / YAML", color: "#cb171e" },
  { name: "Markdown", color: "#7c8590" },
];

export function AboutContent({ stats }: { stats: CommunityStats }) {
  const { t } = useApp();
  const a = t.about;
  const c = a.community;

  const statCards = [
    { value: `${stats.developers}+`, label: c.developers, note: c.developersNote },
    { value: stats.humans, label: c.humans },
    { value: stats.agents, label: c.agents },
    { value: `${stats.contributions}+`, label: c.contributions, note: c.contributionsNote },
    { value: stats.pulls, label: c.pulls },
    { value: stats.forks, label: c.forks },
  ];

  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.title} subtitle={a.subtitle} />

      <Section id="mission">
        <SectionHeader title={a.mission.title} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {a.mission.items.map((m, i) => (
            <div key={m.title} className="card card-hover">
              <span className="text-3xl">{missionIcons[i]}</span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{m.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="deliver" className="bg-slate-50 dark:bg-white/[0.015]">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader center={false} title={a.deliver.title} />
            <ul className="mt-8 space-y-3">
              {a.deliver.items.map((d) => (
                <li key={d} className="flex gap-3 text-slate-700 dark:text-slate-300">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-brand-500 to-teal-400" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader center={false} title={a.stack.title} subtitle={a.stack.subtitle} />
            <div className="mt-8 flex flex-wrap gap-2.5">
              {STACK.map((s) => (
                <span key={s.name} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="milestones">
        <SectionHeader title={a.milestones.title} />
        <ol className="relative mx-auto mt-12 max-w-3xl border-l-2 border-brand-200 pl-8 dark:border-brand-500/30">
          {a.milestones.items.map((m, i) => (
            <li key={m.title} className="relative mb-10 last:mb-0">
              <span className={`absolute top-1 -left-[41px] h-5 w-5 rounded-full border-4 border-white dark:border-[#05070d] ${i === a.milestones.items.length - 1 ? "animate-pulse bg-teal-400" : "bg-brand-500"}`} />
              <p className="text-sm font-bold tracking-wide text-brand-600 uppercase dark:text-brand-300">{m.date}</p>
              <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">{m.title}</h3>
              <p className="mt-1 text-slate-600 dark:text-slate-400">{m.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="community" className="bg-slate-50 dark:bg-white/[0.015]">
        <SectionHeader title={c.title} subtitle={c.subtitle} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {statCards.map((s) => (
            <div key={s.label} className="card text-center">
              <p className="text-gradient text-4xl font-extrabold">{s.value}</p>
              <p className="mt-2 font-semibold text-slate-900 dark:text-white">{s.label}</p>
              {s.note && <p className="text-xs text-slate-500 dark:text-slate-400">{s.note}</p>}
            </div>
          ))}
        </div>
        <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-slate-500 dark:text-slate-400">
          <GithubIcon className="h-4 w-4" />
          <a href={GITHUB_ORG} target="_blank" rel="noopener noreferrer" className="hover:underline">{c.source}</a>
          {stats.live ? <span className="h-2 w-2 rounded-full bg-emerald-500" title="live" /> : null}
        </p>
      </Section>

      <Section id="culture">
        <SectionHeader title={a.culture.title} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {a.culture.items.map((cu, i) => (
            <div key={cu.title} className={`card card-hover ${i === 6 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
              <span className="text-3xl">{cultureIcons[i]}</span>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{cu.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{cu.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
