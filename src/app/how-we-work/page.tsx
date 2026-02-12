import type { Metadata } from "next";
import HowWeWorkClient from "./HowWeWorkClient";

export const metadata: Metadata = {
  title: "How We Work - Our Structured Approach",
  description:
    "Learn about Coigne Capital Partners' structured approach to cross-border governance: Design, Define, Execute, and Sustain. Institutional-grade execution at every stage.",
  openGraph: {
    title: "How We Work | Coigne Capital",
    description:
      "Our structured approach ensures clarity, alignment, and institutional-grade execution at every stage.",
  },
  alternates: {
    canonical: "/how-we-work",
  },
};

export default function HowWeWorkPage() {
  return <HowWeWorkClient />;
}
