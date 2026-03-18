import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";
import { getAboutCapabilities } from "@/lib/directus";

export const metadata: Metadata = {
  title: "About Us - Global Expertise, Local Execution",
  description:
    "Coigne Capital Partners is a global advisory and consulting platform built to support founders, families, and internationally active businesses across Canada, the US, and Latin America.",
  openGraph: {
    title: "About Us | Coigne Capital",
    description:
      "A global advisory and consulting platform providing governance, financial structuring, and cross-border legal support.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default async function AboutPage() {
  const capabilities = await getAboutCapabilities();

  const serializedCapabilities = capabilities.map((c) => ({
    icon: c.icon,
    title: c.title,
    description: c.description,
  }));

  return <AboutPageClient capabilities={serializedCapabilities} />;
}
