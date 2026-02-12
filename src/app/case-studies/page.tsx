"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Globe, Building2 } from "lucide-react";
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
  "Real Estate": Building2,
  "Technology": Globe,
  "Consumer Goods": TrendingUp,
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.crossBorderMeeting} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-accent text-sm tracking-[0.3em] text-[#C9A962] uppercase block mb-4">
            Proven Results
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-[#FAFAF5] mb-6">
            Case Studies
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-body text-lg text-[#FAFAF5]/70 max-w-2xl mx-auto">
            Real-world examples of how we help clients navigate complex cross-border governance challenges.
          </motion.p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-12">
            {caseStudies.map((study, index) => {
              const IconComponent = industryIcons[study.industry] || Building2;
              return (
                <motion.div key={index} variants={fadeInUp} className="bg-[#141414] rounded-lg border border-[#2a2a2a] overflow-hidden hover:border-[#C9A962]/20 transition-all duration-300">
                  <div className="grid lg:grid-cols-[1fr_2fr] gap-0">
                    <div className="p-8 bg-gradient-to-br from-[#C9A962]/10 to-transparent flex flex-col justify-between">
                      <div>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#C9A962]/20 mb-4">
                          <IconComponent className="h-6 w-6 text-[#C9A962]" />
                        </div>
                        <h3 className="font-display text-2xl font-semibold text-[#FAFAF5] mb-2">{study.title}</h3>
                        <p className="font-body text-sm text-[#C9A962] mb-4">{study.subtitle}</p>
                        <div className="flex gap-4 text-xs font-accent text-[#FAFAF5]/40 uppercase tracking-wider">
                          <span>{study.industry}</span>
                          <span>·</span>
                          <span>{study.region}</span>
                        </div>
                      </div>
                      <div className="mt-8 grid grid-cols-2 gap-4">
                        {study.metrics.map((metric, i) => (
                          <div key={i} className="text-center p-3 bg-[#0a0a0a]/50 rounded-lg">
                            <p className="font-display text-2xl font-semibold text-[#C9A962]">{metric.value}</p>
                            <p className="font-body text-xs text-[#FAFAF5]/50 mt-1">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-accent text-xs text-[#C9A962] uppercase tracking-wider mb-2">Challenge</h4>
                          <p className="font-body text-[#FAFAF5]/70 leading-relaxed">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-accent text-xs text-[#C9A962] uppercase tracking-wider mb-2">Solution</h4>
                          <p className="font-body text-[#FAFAF5]/70 leading-relaxed">{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-accent text-xs text-[#C9A962] uppercase tracking-wider mb-2">Outcome</h4>
                          <p className="font-body text-[#FAFAF5]/70 leading-relaxed">{study.outcome}</p>
                        </div>
                        <div>
                          <h4 className="font-accent text-xs text-[#FAFAF5]/40 uppercase tracking-wider mb-2">Key Services</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.keyServices.map((service, i) => (
                              <span key={i} className="text-xs font-body px-3 py-1 bg-[#C9A962]/10 text-[#C9A962] rounded-full">{service}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0d0d0d] border-t border-[#1a1a1a]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#FAFAF5] mb-6">Ready to Write Your Success Story?</h2>
          <p className="font-body text-lg text-[#FAFAF5]/60 max-w-2xl mx-auto mb-8">
            Let us help you navigate your cross-border governance challenges with proven expertise and institutional-grade execution.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-[#C9A962] hover:bg-[#B89952] text-[#121212] font-body font-medium px-8 py-6">
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
