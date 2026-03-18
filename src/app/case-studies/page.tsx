import type { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";
import { getCaseStudies } from "@/lib/directus";

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

export default async function CaseStudiesPage() {
  const studies = await getCaseStudies();

  const serializedStudies = studies.map((s) => ({
    id: s.id,
    slug: s.slug,
    title: s.title,
    subtitle: s.subtitle,
    industry: s.industry,
    region: s.region,
    image: s.image,
    challenge: s.challenge,
    solution: s.solution,
    outcome: s.outcome,
    metrics: s.metrics,
    keyServices: s.key_services,
  }));

  return <CaseStudiesClient caseStudies={serializedStudies} />;
}
