import type { Metadata } from "next";
import DisclosuresClient from "./DisclosuresClient";

export const metadata: Metadata = {
  title: "Legal Disclosures & Compliance",
  description:
    "Important information about Coigne Capital Partners' services, regulatory compliance, privacy practices, and your rights as a client.",
  openGraph: {
    title: "Legal Disclosures & Compliance | Coigne Capital",
    description:
      "Important information about Coigne Capital Partners' services, regulatory compliance, and your rights as a client.",
  },
  alternates: {
    canonical: "/disclosures",
  },
};

export default function DisclosuresPage() {
  return <DisclosuresClient />;
}
