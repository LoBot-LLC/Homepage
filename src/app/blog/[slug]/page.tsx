import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/pages/BlogContent";
import { getPost } from "@/lib/blog";

export const dynamic = "force-dynamic";

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPost(slug);
  return post ? { title: post.translations.en.title, description: post.translations.en.excerpt } : { title: "Blog" };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = await getPost(slug);
  if (!post) notFound();
  return <BlogArticle post={post} />;
}
