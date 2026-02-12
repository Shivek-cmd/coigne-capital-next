import type { Metadata } from "next";
import HomeClient from "./HomeClient";

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

export default function Home() {
  return <HomeClient />;
}
