import { date, jsonb, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export type BlogTranslation = { title: string; excerpt: string; body: string[] };
export type BlogTranslations = { en: BlogTranslation; es: BlogTranslation; vi: BlogTranslation };

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  author: text("author").notNull().default("LoBot LLC Team"),
  coverEmoji: text("cover_emoji").notNull().default("🚀"),
  publishedAt: date("published_at").notNull(),
  translations: jsonb("translations").$type<BlogTranslations>().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type BlogPost = typeof blogPosts.$inferSelect;
