"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { blogArticles } from "@/data/blog";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function BlogPageClient() {
  return (
    <div className="min-h-screen bg-base">
      <section aria-label="Blog hero" className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-20" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-base/90 to-base" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-accent text-sm tracking-[0.3em] text-gold uppercase block mb-4">
            Insights & Analysis
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory mb-6">
            The Coigne Capital Blog
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-body text-lg text-ivory/70 max-w-2xl mx-auto">
            Expert perspectives on cross-border governance, ownership design, and strategic advisory.
          </motion.p>
        </div>
      </section>

      <section aria-label="Blog articles" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link href={`/blog/${article.slug}`} className="group block bg-surface rounded-lg border border-edge overflow-hidden hover:border-gold/30 transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={article.image} alt={article.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                    {article.featured && (
                      <span className="absolute top-4 left-4 font-accent text-xs px-3 py-1 bg-gold text-obsidian rounded-full uppercase tracking-wider">Featured</span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="flex items-center gap-1.5 text-xs font-body text-ivory/40">
                        <Calendar className="h-3 w-3" aria-hidden="true" />
                        <time dateTime={article.date}>{article.date}</time>
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-body text-ivory/40">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {article.readTime} min read
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-ivory mb-3 group-hover:text-gold transition-colors">{article.title}</h3>
                    <p className="font-body text-sm text-ivory/60 mb-4 leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs font-accent text-gold">
                        <Tag className="h-3 w-3" aria-hidden="true" />
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm font-body text-gold opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                        Read <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {blogArticles.length === 0 && (
            <div className="text-center py-20">
              <h3 className="font-display text-2xl text-ivory/60 mb-4">No articles yet</h3>
              <p className="font-body text-ivory/40">Check back soon for insights and analysis.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
