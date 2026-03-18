import type { Metadata } from "next";
import TeamPageClient from "./TeamPageClient";
import { getTeamMembers, getDirectusImageUrl } from "@/lib/directus";

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

export default async function TeamPage() {
  const members = await getTeamMembers();

  const serializedMembers = members.map((m) => ({
    id: m.id,
    name: m.name,
    title: m.title,
    bio: m.bio,
    expertise: m.expertise,
    regions: m.regions,
    image: getDirectusImageUrl(m.image),
  }));

  return <TeamPageClient teamMembers={serializedMembers} />;
}
