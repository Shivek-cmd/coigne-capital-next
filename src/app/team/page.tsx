import type { Metadata } from "next";
import TeamPageClient from "./TeamPageClient";

export const metadata: Metadata = {
  title: "Our Team - Leadership & Expertise",
  description:
    "Meet the Coigne Capital team — a multidisciplinary group bringing decades of experience in cross-border governance, finance, law, and technology across the Americas.",
  openGraph: {
    title: "Our Team | Coigne Capital",
    description:
      "A multidisciplinary team bringing decades of experience in cross-border governance, finance, law, and technology.",
  },
  alternates: {
    canonical: "/team",
  },
};

export default function TeamPage() {
  return <TeamPageClient />;
}
