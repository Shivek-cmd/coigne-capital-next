import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

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

export default function ContactPage() {
  return <ContactPageClient />;
}
