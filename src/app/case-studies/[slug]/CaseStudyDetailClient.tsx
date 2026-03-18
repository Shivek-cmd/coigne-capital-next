"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  region: string;
  image: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  keyServices: string[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

interface CaseStudyDetailClientProps {
  study: CaseStudy;
}

export default function CaseStudyDetailClient({ study }: CaseStudyDetailClientProps) {
  return (
    <div className="min-h-screen bg-base">
      <section aria-label="Case study hero" className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={study.image} alt="" fill sizes="100vw" priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-base/90 via-base/75 to-base" />
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-accent text-xs text-gold uppercase tracking-wider px-3 py-1 bg-gold/10 rounded-full">{study.industry}</span>
              <span className="font-accent text-xs text-ivory/40 uppercase tracking-wider">{study.region}</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ivory leading-tight mb-4">{study.title}</h1>
            <p className="font-body text-lg text-gold/80 max-w-2xl">{study.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section aria-label="Key metrics" className="py-16 bg-base-alt border-y border-surface-alt">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {study.metrics.map((metric, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center p-6 bg-surface rounded-lg border border-edge">
                <p className="font-display text-3xl md:text-4xl font-semibold text-gold mb-2">{metric.value}</p>
                <p className="font-body text-sm text-ivory/50">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section aria-label="Case study details" className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.2em] text-gold uppercase block mb-4">The Challenge</motion.span>
              <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-6">What We Were Facing</motion.h2>
              <motion.p variants={fadeInUp} className="font-body text-lg text-ivory/70 leading-relaxed">{study.challenge}</motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.2em] text-gold uppercase block mb-4">Our Solution</motion.span>
              <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-6">How We Approached It</motion.h2>
              <motion.p variants={fadeInUp} className="font-body text-lg text-ivory/70 leading-relaxed">{study.solution}</motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.2em] text-gold uppercase block mb-4">The Outcome</motion.span>
              <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-6">Results Delivered</motion.h2>
              <motion.p variants={fadeInUp} className="font-body text-lg text-ivory/70 leading-relaxed">{study.outcome}</motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <section aria-label="Key services used" className="py-24 bg-base-alt border-t border-surface-alt">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.2em] text-gold uppercase block mb-4">Services Applied</motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-8">Key Services</motion.h2>
            <motion.ul variants={fadeInUp} className="space-y-4">
              {study.keyServices.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" aria-hidden="true" />
                  <span className="font-body text-ivory/70">{service}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      <section aria-label="Call to action" className="py-24 bg-base border-t border-surface-alt">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-6">Ready to Write Your Success Story?</h2>
          <p className="font-body text-lg text-ivory/60 max-w-2xl mx-auto mb-8">
            Schedule a confidential consultation to discuss how we can help with your cross-border governance challenges.
          </p>
          <Link href="/schedule-consultation">
            <Button size="lg" className="bg-gold hover:bg-gold-hover text-obsidian font-body font-medium px-8 py-6">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
