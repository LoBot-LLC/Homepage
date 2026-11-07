"use client";

import Image from "next/image";
import Link from "next/link";
import { LOCALES, useApp, type Lang } from "../Providers";
import { ArrowLeft, ArrowRight, LoBotMark } from "../Icons";
import { PageHero, Section } from "../ui";
import type { PublicPost } from "@/lib/blog";
import { TECNO_URL } from "@/lib/site";

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
  const words = body
    .filter((p) => !p.startsWith("__IMAGE__:"))
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function renderBodyBlock(block: string, index: number) {
  if (block.startsWith("__IMAGE__:")) {
    const payload = block.slice("__IMAGE__:".length);
    const [src = "", alt = "", caption = ""] = payload.split("|");
    return (
      <figure key={index} className="my-2 overflow-hidden rounded-2xl border border-slate-200/70 dark:border-white/10">
        <div className="relative aspect-[16/9] w-full bg-slate-100 dark:bg-white/5">
          <Image
            src={src.trim()}
            alt={alt.trim()}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
        {caption.trim() ? (
          <figcaption className="px-4 py-3 text-center text-sm text-slate-500 dark:text-slate-400">
            {caption.trim()}
          </figcaption>
        ) : null}
      </figure>
    );
  }
  return (
    <p key={index} className="whitespace-pre-line">
      {block}
    </p>
  );
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
                  <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-[#0a2a30] to-brand-800">
                    {p.coverImage ? (
                      <Image
                        src={p.coverImage}
                        alt=""
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                        sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                      />
                    ) : (
                      <>
                        <LoBotMark className="h-20 w-20 text-white opacity-90" />
                        <span className="absolute top-3 right-3 text-3xl">{p.coverEmoji}</span>
                      </>
                    )}
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
  const hasCustomCta = tr.body.some((b) => b === "__CTA__") || Boolean(tr.references?.length);
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:underline dark:text-brand-300">
        <ArrowLeft className="h-4 w-4" /> {t.blog.back}
      </Link>
      <div className="relative mt-8 flex h-56 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-[#0a2a30] to-brand-800">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={tr.title}
            fill
            className="object-cover"
            priority
            sizes="(min-width: 768px) 768px, 100vw"
          />
        ) : (
          <LoBotMark className="h-28 w-28 text-white" />
        )}
      </div>
      <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
        <time dateTime={post.publishedAt} data-testid="post-date">{formatDate(post.publishedAt, lang)}</time> · {t.blog.by} {post.author} · {readingTime(tr.body)} {t.blog.minRead}
      </p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">{tr.title}</h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{tr.excerpt}</p>
      <div className="mt-10 space-y-6 border-t border-slate-200 pt-10 text-base leading-8 text-slate-700 dark:border-white/10 dark:text-slate-300">
        {tr.body.map((para, i) => renderBodyBlock(para, i))}
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        {hasCustomCta ? (
          <>
            <a href={TECNO_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {t.blog.tryTecnoIndicator}
            </a>
            <Link href="/careers#apply" className="btn-secondary">
              {t.blog.applyNow}
            </Link>
          </>
        ) : (
          <>
            <Link href="/careers" className="btn-secondary">{t.nav.careers}</Link>
            <Link href="/careers#apply" className="btn-primary">{t.careers.cta.title}</Link>
          </>
        )}
      </div>
      {tr.references && tr.references.length > 0 ? (
        <section className="mt-14 border-t border-slate-200 pt-8 dark:border-white/10" aria-labelledby="references-heading">
          <h2 id="references-heading" className="text-2xl font-bold text-slate-900 dark:text-white">
            {t.blog.references}
          </h2>
          <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {tr.references.map((ref, i) => (
              <li key={i}>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-600 underline-offset-2 hover:underline dark:text-brand-300"
                >
                  {ref.label}
                </a>
                <span className="block break-all text-xs text-slate-500 dark:text-slate-500">{ref.url}</span>
              </li>
            ))}
          </ol>
        </section>
      ) : null}
    </article>
  );
}
