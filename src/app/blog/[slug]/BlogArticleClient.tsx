"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, User, Tag, Linkedin, Twitter, Facebook, LinkIcon, Check } from "lucide-react";
import type { BlogArticle } from "@/data/blog";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface BlogArticleClientProps {
  article: BlogArticle;
}

export default function BlogArticleClient({ article }: BlogArticleClientProps) {
  const [activeHeading, setActiveHeading] = useState("");
  const [copied, setCopied] = useState(false);

  const headings = useMemo(() => {
    const items: TOCItem[] = [];
    article.content.split("\n\n").forEach((block) => {
      if (block.startsWith("## ")) {
        const text = block.replace("## ", "");
        items.push({ id: text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, ""), text, level: 2 });
      } else if (block.startsWith("### ")) {
        const text = block.replace("### ", "");
        items.push({ id: text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, ""), text, level: 3 });
      }
    });
    return items;
  }, [article.content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveHeading(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = article.title;

  const handleCopyLink = useCallback(() => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [shareUrl]);

  return (
    <div className="min-h-screen bg-base">
      <section aria-label="Article header" className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={article.image} alt="" fill sizes="100vw" priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-base/90 via-base/75 to-base" />
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
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

      <div className="container mx-auto px-6">
        <div className="flex gap-12 py-16 md:py-24">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              {headings.length > 0 && (
                <nav aria-label="Table of contents" className="mb-10">
                  <h4 className="font-accent text-xs text-gold uppercase tracking-wider mb-4">In This Article</h4>
                  <ul className="space-y-2">
                    {headings.map((h) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className={`block font-body text-sm transition-colors duration-200 ${
                            h.level === 3 ? "pl-4" : ""
                          } ${
                            activeHeading === h.id
                              ? "text-gold"
                              : "text-ivory/40 hover:text-ivory/70"
                          }`}
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              <div>
                <h4 className="font-accent text-xs text-gold uppercase tracking-wider mb-4">Share This Article</h4>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="w-9 h-9 rounded-lg bg-surface border border-edge flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold/30 transition-colors cursor-pointer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Twitter"
                    className="w-9 h-9 rounded-lg bg-surface border border-edge flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold/30 transition-colors cursor-pointer"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                    className="w-9 h-9 rounded-lg bg-surface border border-edge flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold/30 transition-colors cursor-pointer"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <button
                    onClick={handleCopyLink}
                    aria-label="Copy link"
                    className="w-9 h-9 rounded-lg bg-surface border border-edge flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold/30 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="h-4 w-4 text-gold" /> : <LinkIcon className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>
          </aside>

          <article className="flex-1 min-w-0">
            <div className="lg:hidden mb-10 flex items-center gap-3">
              <span className="font-accent text-xs text-gold uppercase tracking-wider">Share</span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="w-8 h-8 rounded-lg bg-surface border border-edge flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold/30 transition-colors cursor-pointer"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
                className="w-8 h-8 rounded-lg bg-surface border border-edge flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold/30 transition-colors cursor-pointer"
              >
                <Twitter className="h-3.5 w-3.5" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="w-8 h-8 rounded-lg bg-surface border border-edge flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold/30 transition-colors cursor-pointer"
              >
                <Facebook className="h-3.5 w-3.5" />
              </a>
              <button
                onClick={handleCopyLink}
                aria-label="Copy link"
                className="w-8 h-8 rounded-lg bg-surface border border-edge flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold/30 transition-colors cursor-pointer"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-gold" /> : <LinkIcon className="h-3.5 w-3.5" />}
              </button>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="prose prose-invert prose-lg max-w-none font-body text-ivory/80 leading-relaxed space-y-6">
              {article.content.split("\n\n").map((block, index) => {
                if (block.startsWith("# ") && !block.startsWith("## ")) {
                  return null;
                }
                if (block.startsWith("## ")) {
                  const text = block.replace("## ", "");
                  const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");
                  return <h2 key={index} id={id} className="font-display text-2xl md:text-3xl font-semibold text-ivory mt-12 mb-6 scroll-mt-24">{text}</h2>;
                }
                if (block.startsWith("### ")) {
                  const text = block.replace("### ", "");
                  const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");
                  return <h3 key={index} id={id} className="font-display text-xl md:text-2xl font-semibold text-ivory mt-8 mb-4 scroll-mt-24">{text}</h3>;
                }
                if (block.startsWith("- ")) {
                  const items = block.split("\n").filter(line => line.startsWith("- "));
                  return (
                    <ul key={index} className="space-y-3 pl-0">
                      {items.map((item, i) => {
                        const itemText = item.replace(/^- /, "");
                        return (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" aria-hidden="true" />
                            <span dangerouslySetInnerHTML={{ __html: itemText.replace(/\*\*(.*?)\*\*/g, '<strong class="text-ivory font-semibold">$1</strong>') }} />
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
          </article>
        </div>
      </div>
    </div>
  );
}
