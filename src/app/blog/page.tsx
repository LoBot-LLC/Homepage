import type { Metadata } from "next";
import { BlogList } from "@/components/pages/BlogContent";
import { listPosts } from "@/lib/blog";

export const metadata: Metadata = { title: "Blog" };
export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await listPosts();
  return <BlogList posts={posts} />;
}
