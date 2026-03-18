import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";
import { getBlogArticles } from "@/lib/directus";

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

export default async function BlogPage() {
  const articles = await getBlogArticles();

  const serializedArticles = articles.map((a) => ({
    id: a.id,
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    content: a.content,
    author: a.author,
    date: a.date_published,
    readTime: a.read_time,
    category: a.category,
    image: a.image,
    featured: a.featured,
  }));

  return <BlogPageClient articles={serializedArticles} />;
}
