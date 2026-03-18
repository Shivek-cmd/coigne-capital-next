import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { getServices } from "@/lib/directus";

export const metadata: Metadata = {
  title: "Cross-Border Governance & Advisory",
  description:
    "Coigne Capital helps founders, families, and international businesses design clear ownership structures, establish institutional-grade governance, and execute with confidence across Canada, the US, and Latin America.",
  openGraph: {
    title: "Coigne Capital | Cross-Border Governance & Advisory",
    description:
      "Cross-border governance, ownership design, and capital structure advisory for founders, families, and international businesses across the Americas.",
  },
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const services = await getServices();

  const serializedServices = services.map((s) => ({
    slug: s.slug,
    icon: s.icon,
    title: s.title,
    shortDescription: s.short_description,
  }));

  return <HomeClient services={serializedServices} />;
}
