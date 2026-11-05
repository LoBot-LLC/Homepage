import type { Metadata } from "next";
import { ProductContent } from "@/components/pages/ProductContent";

export const metadata: Metadata = {
  title: "TecnoIndicator",
  description: "Real-time 10-year forecasts for global oil, water & electricity prices.",
};

export default function TecnoIndicatorPage() {
  return <ProductContent />;
}
