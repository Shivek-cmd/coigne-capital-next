import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudies, getCaseStudyBySlug, getDirectusImageUrl } from "@/lib/directus";
import CaseStudyDetailClient from "./CaseStudyDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const studies = await getCaseStudies();
  return studies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | Case Study`,
    description: study.subtitle,
    openGraph: {
      title: `${study.title} | Coigne Capital Case Study`,
      description: study.subtitle,
      images: study.image ? [{ url: study.image, width: 800, height: 600 }] : [],
    },
    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) notFound();

  const serializedStudy = {
    id: study.id,
    slug: study.slug,
    title: study.title,
    subtitle: study.subtitle,
    industry: study.industry,
    region: study.region,
    image: getDirectusImageUrl(study.image),
    challenge: study.challenge,
    solution: study.solution,
    outcome: study.outcome,
    metrics: study.metrics,
    keyServices: study.key_services,
  };

  return <CaseStudyDetailClient study={serializedStudy} />;
}
