import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/AboutContent";
import { getCommunityStats } from "@/lib/github";

export const metadata: Metadata = { title: "About company" };
export const revalidate = 3600;

export default async function AboutPage() {
  const stats = await getCommunityStats();
  return <AboutContent stats={stats} />;
}
