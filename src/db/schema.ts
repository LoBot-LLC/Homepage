import { date, jsonb, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export type BlogReference = { label: string; url: string };

export type BlogTranslation = {
  title: string;
  excerpt: string;
  body: string[];
  /** Optional references section rendered at the end of the article. */
  references?: BlogReference[];
};
export type BlogTranslations = { en: BlogTranslation; es: BlogTranslation; vi: BlogTranslation };

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  author: text("author").notNull().default("LoBot LLC Team"),
  coverEmoji: text("cover_emoji").notNull().default("🚀"),
  /** Optional cover image path/URL; takes precedence over the emoji cover when set. */
  coverImage: text("cover_image"),
  publishedAt: date("published_at").notNull(),
  translations: jsonb("translations").$type<BlogTranslations>().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type BlogPost = typeof blogPosts.$inferSelect;
