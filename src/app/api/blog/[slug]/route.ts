import { listPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

export async function GET() {
  const posts = await listPosts();
  return Response.json({ posts });
}
