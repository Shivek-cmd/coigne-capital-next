import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServices, getServiceBySlug } from "@/lib/directus";
import ServicePageClient from "./ServicePageClient";

export async function generateStaticParams() {
  const services = await getServices();
  if (!services) return [];

  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.full_description,
    openGraph: {
      title: `${service.title} | Coigne Capital`,
      description: service.short_description,
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

  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Convert Directus fields → frontend fields
  const serializedService = {
    slug: service.slug,
    iconName: service.icon,
    title: service.title,
    shortDescription: service.short_description,
    fullDescription: service.full_description,
    heroImage: service.hero_image,
    benefits: service.benefits,
    approach: service.approach,
    relatedServices: service.related_services,
    technologyPartner: service.technology_partner,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.full_description,
    provider: {
      "@type": "Organization",
      name: "Coigne Capital",
    },
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