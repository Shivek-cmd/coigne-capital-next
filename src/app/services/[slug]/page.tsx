import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/data/services";
import ServicePageClient from "./ServicePageClient";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.fullDescription,
    openGraph: {
      title: `${service.title} | Coigne Capital`,
      description: service.shortDescription,
    },
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const { icon, ...serializedService } = service;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.fullDescription,
    provider: { "@type": "Organization", name: "Coigne Capital" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageClient service={serializedService} />
    </>
  );
}
