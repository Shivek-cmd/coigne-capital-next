import type { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies - Proven Results",
  description:
    "Real-world examples of how Coigne Capital helps clients navigate complex cross-border governance challenges across Canada, the US, and Latin America.",
  openGraph: {
    title: "Case Studies | Coigne Capital",
    description:
      "Real-world examples of how we help clients navigate complex cross-border governance challenges.",
  },
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
