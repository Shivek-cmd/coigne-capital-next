import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import { getSiteSettings } from "@/lib/directus";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description:
    "Contact Coigne Capital Partners for cross-border governance advisory, capital structuring, and strategic consulting across Canada, the United States, and Latin America.",
  openGraph: {
    title: "Contact Us | Coigne Capital",
    description:
      "Get in touch with our team for cross-border governance and capital advisory services.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default async function ContactPage() {
  const siteSettings = await getSiteSettings();

  const contactInfo = siteSettings ? {
    email: siteSettings.email,
    phone: siteSettings.phone,
    address: siteSettings.address,
    linkedin_url: siteSettings.linkedin_url,
    twitter_url: siteSettings.twitter_url,
  } : null;

  return <ContactPageClient contactInfo={contactInfo} />;
}
