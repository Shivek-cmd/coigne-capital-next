"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, TrendingUp, Globe, Building2, Users, Shield, Cog } from "lucide-react";
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

const industryIcons: Record<string, React.ElementType> = {
  "Family Office & Wealth Management": Users,
  "Technology & Software Services": Globe,
  "Manufacturing & Distribution": Cog,
  "Real Estate": Building2,
  "Technology": Globe,
  "Consumer Goods": TrendingUp,
  "default": Shield,
};

export default function CaseStudiesClient() {
  return (
    <div className="min-h-screen bg-base">
      <section aria-label="Case studies hero" className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.crossBorderMeeting} alt="" fill sizes="100vw" priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-base/80 via-base/60 to-base" />
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-12">
            {caseStudies.map((study, index) => {
              const IconComponent = industryIcons[study.industry] || Building2;
              return (
                <motion.article key={index} variants={fadeInUp} className="bg-surface rounded-lg border border-edge overflow-hidden hover:border-gold/20 transition-all duration-300">
                  <div className="grid lg:grid-cols-[1fr_2fr] gap-0">
                    <div className="p-8 bg-gradient-to-br from-gold/10 to-transparent flex flex-col justify-between">
                      <div>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gold/20 mb-4" aria-hidden="true">
                          <IconComponent className="h-6 w-6 text-gold" />
                        </div>
                        <h3 className="font-display text-2xl font-semibold text-ivory mb-2">{study.title}</h3>
                        <p className="font-body text-sm text-gold mb-4">{study.subtitle}</p>
                        <div className="flex gap-4 text-xs font-accent text-ivory/40 uppercase tracking-wider">
                          <span>{study.industry}</span>
                          <span aria-hidden="true">·</span>
                          <span>{study.region}</span>
                        </div>
                      </div>
                      <div className="mt-8 grid grid-cols-2 gap-4">
                        {study.metrics.map((metric, i) => (
                          <div key={i} className="text-center p-3 bg-base/50 rounded-lg">
                            <p className="font-display text-2xl font-semibold text-gold">{metric.value}</p>
                            <p className="font-body text-xs text-ivory/50 mt-1">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-accent text-xs text-gold uppercase tracking-wider mb-2">Challenge</h4>
                          <p className="font-body text-ivory/70 leading-relaxed">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-accent text-xs text-gold uppercase tracking-wider mb-2">Solution</h4>
                          <p className="font-body text-ivory/70 leading-relaxed">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-accent text-xs text-gold uppercase tracking-wider mb-2">Outcome</h4>
                          <p className="font-body text-ivory/70 leading-relaxed">{study.outcome}</p>
                        </div>
                        <div>
                          <h4 className="font-accent text-xs text-ivory/40 uppercase tracking-wider mb-2">Key Services</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.keyServices.map((service, i) => (
                              <span key={i} className="text-xs font-body px-3 py-1 bg-gold/10 text-gold rounded-full">{service}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section aria-label="Call to action" className="py-24 bg-base-alt border-t border-surface-alt">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-6">Ready to Write Your Success Story?</h2>
          <p className="font-body text-lg text-ivory/60 max-w-2xl mx-auto mb-8">
            Let us help you navigate your cross-border governance challenges with proven expertise and institutional-grade execution.
          </p>
          <Link href="/#contact">
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
