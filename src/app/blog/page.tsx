import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog - Insights & Analysis",
  description:
    "Expert perspectives on cross-border governance, ownership design, and strategic advisory from the Coigne Capital team.",
  openGraph: {
    title: "Blog | Coigne Capital",
    description:
      "Expert perspectives on cross-border governance, ownership design, and strategic advisory.",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
