"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import { IMAGES } from "@/data/images";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function CaseStudiesClient() {
  return (
    <div className="min-h-screen bg-base">
      <section aria-label="Case studies hero" className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.crossBorderMeeting} alt="" fill sizes="100vw" priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-base/90 via-base/75 to-base" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-accent text-sm tracking-[0.3em] text-gold uppercase block mb-4">
            Proven Results
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory mb-6">
            Case Studies
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-body text-lg text-ivory/70 max-w-2xl mx-auto">
            Real-world examples of how we help clients navigate complex cross-border governance challenges.
          </motion.p>
        </div>
      </section>

      <section aria-label="Case study list" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.article key={index} variants={fadeInUp}>
                <Link href={`/case-studies/${study.slug}`} className="group block bg-surface rounded-lg border border-edge overflow-hidden hover:border-gold/30 transition-all duration-300 h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={study.image} alt={study.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                    <span className="absolute top-4 left-4 font-accent text-xs px-3 py-1 bg-gold/90 text-obsidian rounded-full uppercase tracking-wider">{study.industry}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-accent text-xs text-ivory/40 uppercase tracking-wider">{study.region}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-ivory mb-3 group-hover:text-gold transition-colors">{study.title}</h3>
                    <p className="font-body text-sm text-ivory/60 mb-4 leading-relaxed">{study.subtitle}</p>
                    <div className="flex items-center gap-2 mb-5">
                      {study.metrics.slice(0, 2).map((metric, i) => (
                        <span key={i} className="text-xs font-body px-3 py-1 bg-gold/10 text-gold rounded-full">{metric.value} {metric.label}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 font-body text-sm text-gold group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section aria-label="Call to action" className="py-24 bg-base-alt border-t border-surface-alt">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-6">Ready to Write Your Success Story?</h2>
          <p className="font-body text-lg text-ivory/60 max-w-2xl mx-auto mb-8">
            Let us help you navigate your cross-border governance challenges with proven expertise and institutional-grade execution.
          </p>
          <Link href="/schedule-consultation">
            <Button size="lg" className="bg-gold hover:bg-gold-hover text-obsidian font-body font-medium px-8 py-6">
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
