"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import Link from "next/link";
import { blogArticles } from "@/data/blog";

export default function BlogArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-[#FAFAF5] mb-4">Article Not Found</h1>
          <p className="font-body text-[#FAFAF5]/60 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" className="font-body text-[#C9A962] hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={article.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/blog" className="inline-flex items-center gap-2 font-body text-sm text-[#C9A962] hover:text-[#C9A962]/80 transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center gap-1.5 text-sm font-body text-[#FAFAF5]/50">
                <Calendar className="h-4 w-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5 text-sm font-body text-[#FAFAF5]/50">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1.5 text-sm font-accent text-[#C9A962]">
                <Tag className="h-4 w-4" />
                {article.category}
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[#FAFAF5] leading-tight mb-6">{article.title}</h1>
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-[#C9A962]" />
              <span className="font-body text-[#FAFAF5]/70">{article.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="prose prose-invert prose-lg max-w-none font-body text-[#FAFAF5]/80 leading-relaxed space-y-6">
            {article.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return <h2 key={index} className="font-display text-2xl md:text-3xl font-semibold text-[#FAFAF5] mt-12 mb-6">{paragraph.replace("## ", "")}</h2>;
              }
              if (paragraph.startsWith("### ")) {
                return <h3 key={index} className="font-display text-xl md:text-2xl font-semibold text-[#FAFAF5] mt-8 mb-4">{paragraph.replace("### ", "")}</h3>;
              }
              return <p key={index}>{paragraph}</p>;
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
