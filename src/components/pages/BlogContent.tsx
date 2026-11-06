"use client";

import Link from "next/link";
import { LOCALES, useApp, type Lang } from "../Providers";
import { ArrowLeft, ArrowRight, LoBotMark } from "../Icons";
import { PageHero, Section } from "../ui";
import type { PublicPost } from "@/lib/blog";

function formatDate(iso: string, lang: Lang) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString(LOCALES[lang], {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function readingTime(body: string[]) {
  const words = body.join(" ").split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function BlogList({ posts }: { posts: PublicPost[] }) {
  const { t, lang } = useApp();
  return (
    <>
      <PageHero eyebrow={t.blog.eyebrow} title={t.blog.title} subtitle={t.blog.subtitle} />
      <Section>
        {posts.length === 0 ? (
          <p className="text-center text-slate-500">{t.blog.empty}</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => {
              const tr = p.translations[lang] ?? p.translations.en;
              return (
                <Link key={p.slug} href={`/blog/${p.slug}`} data-testid="blog-card" className="card card-hover group flex flex-col overflow-hidden p-0">
                  <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-slate-900 via-[#0a2a30] to-brand-800">
                    <LoBotMark className="h-20 w-20 text-white opacity-90" />
                    <span className="absolute top-3 right-3 text-3xl">{p.coverEmoji}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      <time dateTime={p.publishedAt}>{formatDate(p.publishedAt, lang)}</time> · {readingTime(tr.body)} {t.blog.minRead}
                    </p>
                    <h2 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-300">{tr.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{tr.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-300">
                      {t.blog.readMore} <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </Section>
    </>
  );
}

export function BlogArticle({ post }: { post: PublicPost }) {
  const { t, lang } = useApp();
  const tr = post.translations[lang] ?? post.translations.en;
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:underline dark:text-brand-300">
        <ArrowLeft className="h-4 w-4" /> {t.blog.back}
      </Link>
      <div className="mt-8 flex h-56 items-center justify-center rounded-3xl bg-gradient-to-br from-slate-900 via-[#0a2a30] to-brand-800">
        <LoBotMark className="h-28 w-28 text-white" />
      </div>
      <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
        <time dateTime={post.publishedAt} data-testid="post-date">{formatDate(post.publishedAt, lang)}</time> · {t.blog.by} {post.author} · {readingTime(tr.body)} {t.blog.minRead}
      </p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">{tr.title}</h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{tr.excerpt}</p>
      <div className="mt-10 space-y-6 border-t border-slate-200 pt-10 text-base leading-8 text-slate-700 dark:border-white/10 dark:text-slate-300">
        {tr.body.map((para, i) => (
          <p key={i} className="whitespace-pre-line">{para}</p>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        <Link href="/careers" className="btn-primary">{t.nav.careers}</Link>
        <Link href="/careers#apply" className="btn-secondary">{t.careers.cta.title}</Link>
      </div>
    </article>
  );
}
