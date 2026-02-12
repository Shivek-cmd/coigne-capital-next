import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyDetailClient from "./CaseStudyDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | Case Study`,
    description: study.subtitle,
    openGraph: {
      title: `${study.title} | Coigne Capital Case Study`,
      description: study.subtitle,
      images: [{ url: study.image, width: 800, height: 600 }],
    },
    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return <CaseStudyDetailClient study={study} />;
}
