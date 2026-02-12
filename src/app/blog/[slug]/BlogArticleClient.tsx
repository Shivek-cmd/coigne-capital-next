"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import Link from "next/link";
import type { BlogArticle } from "@/data/blog";

interface BlogArticleClientProps {
  article: BlogArticle;
}

export default function BlogArticleClient({ article }: BlogArticleClientProps) {
  return (
    <div className="min-h-screen bg-base">
      <section aria-label="Article header" className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={article.image} alt="" fill sizes="100vw" priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-base/80 via-base/60 to-base" />
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/blog" className="inline-flex items-center gap-2 font-body text-sm text-gold hover:text-gold/80 transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Blog
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center gap-1.5 text-sm font-body text-ivory/50">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <time dateTime={article.date}>{article.date}</time>
              </span>
              <span className="flex items-center gap-1.5 text-sm font-body text-ivory/50">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {article.readTime} min read
              </span>
              <span className="flex items-center gap-1.5 text-sm font-accent text-gold">
                <Tag className="h-4 w-4" aria-hidden="true" />
                {article.category}
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ivory leading-tight mb-6">{article.title}</h1>
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-gold" aria-hidden="true" />
              <span className="font-body text-ivory/70">{article.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <article className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="prose prose-invert prose-lg max-w-none font-body text-ivory/80 leading-relaxed space-y-6">
            {article.content.split("\n\n").map((block, index) => {
              if (block.startsWith("# ") && !block.startsWith("## ")) {
                return null;
              }
              if (block.startsWith("## ")) {
                return <h2 key={index} className="font-display text-2xl md:text-3xl font-semibold text-ivory mt-12 mb-6">{block.replace("## ", "")}</h2>;
              }
              if (block.startsWith("### ")) {
                return <h3 key={index} className="font-display text-xl md:text-2xl font-semibold text-ivory mt-8 mb-4">{block.replace("### ", "")}</h3>;
              }
              if (block.startsWith("- ")) {
                const items = block.split("\n").filter(line => line.startsWith("- "));
                return (
                  <ul key={index} className="space-y-3 pl-0">
                    {items.map((item, i) => {
                      const text = item.replace(/^- /, "");
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" aria-hidden="true" />
                          <span dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-ivory font-semibold">$1</strong>') }} />
                        </li>
                      );
                    })}
                  </ul>
                );
              }
              const html = block.replace(/\*\*(.*?)\*\*/g, '<strong class="text-ivory font-semibold">$1</strong>');
              return <p key={index} dangerouslySetInnerHTML={{ __html: html }} />;
            })}
          </motion.div>
        </div>
      </article>
    </div>
  );
}
