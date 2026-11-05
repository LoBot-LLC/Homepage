import { getPost } from "@/lib/blog";

export const dynamic = "force-dynamic";

export async function GET(_req: Request, ctx: RouteContext<"/api/blog/[slug]">) {
  const { slug } = await ctx.params;
  const post = await getPost(slug);
  if (!post) return Response.json({ error: "Not found" }, { status: 404 });
  return Response.json({ post });
}
