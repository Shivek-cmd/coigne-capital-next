"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Globe, Shield, Users, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IMAGES } from "@/data/images";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const capabilities = [
  { icon: Shield, title: "Governance & Structuring", description: "Designing clear ownership structures and governance frameworks that work across jurisdictions." },
  { icon: Users, title: "Family & Shareholder Advisory", description: "Establishing roles, decision rights, and succession strategies for multi-generational enterprises." },
  { icon: Globe, title: "Cross-Border Execution", description: "Coordinating legal, tax, banking, and operational inputs into unified strategies across the Americas." },
  { icon: Cog, title: "Digital Infrastructure", description: "Through Synexum Labs, implementing practical systems that turn strategy into repeatable operations." },
];

export default function AboutPageClient() {
  return (
    <div className="min-h-screen bg-base">
      <section aria-label="About hero" className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.corporateGovernance} alt="" fill sizes="100vw" priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-base/90 via-base/75 to-base" />
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.3em] text-gold uppercase block mb-4">Who We Are</motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory leading-[1.1] mb-6">
              About <span className="text-gradient-gold">Coigne Capital Partners</span>
            </motion.h1>
            <motion.h2 variants={fadeInUp} className="font-display text-2xl md:text-3xl text-gold mb-8">Global Expertise, Local Execution</motion.h2>
          </motion.div>
        </div>
      </section>

      <section aria-label="About overview" className="py-24 md:py-32 bg-base relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="relative">
              <div className="relative rounded-lg overflow-hidden glow-gold aspect-[4/3]">
                <Image src={IMAGES.crossBorderMeeting} alt="Cross-border advisory team in strategic planning session" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-base/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/20 rounded-lg" aria-hidden="true" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="space-y-5 text-ivory/70 font-body leading-relaxed text-lg">
                <p>Coigne Capital Partners is a global advisory and consulting platform built to support founders, families, and internationally active businesses. Through our internal team and international partners, we provide access to deep expertise in governance, financial structuring, investment strategy, advanced risk management, and cross-border legal support across Canada, the United States, and Latin America.</p>
                <p>We help clients design the right structure, define decision rights, and execute with discipline. Rather than fragmenting advice across multiple advisors, we coordinate integrated strategies that bring clarity, alignment, and institutional-grade governance to complex cross-border challenges.</p>
                <p>To strengthen execution, we integrate digital infrastructure through Synexum Labs. In collaboration with our partner network, Synexum designs and implements practical systems that turn strategy into repeatable operations.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section aria-label="Core capabilities" className="py-24 md:py-32 bg-base-alt relative">
        <div className="absolute inset-0 hex-pattern opacity-20" aria-hidden="true" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-16">
            <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.2em] text-gold uppercase block mb-4">What We Bring</motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-6">Core Capabilities</motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-lg text-ivory/60 max-w-2xl mx-auto">
              Our integrated approach combines governance expertise, financial strategy, and digital infrastructure across the Americas.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
            {capabilities.map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="p-8 bg-surface rounded-lg border border-edge">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gold/10" aria-hidden="true">
                  <item.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-ivory mb-3">{item.title}</h3>
                <p className="font-body text-ivory/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section aria-label="Geographic reach" className="py-24 md:py-32 bg-base relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.2em] text-gold uppercase block mb-4">Geographic Reach</motion.span>
              <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-6">Pan-American Coverage</motion.h2>
              <motion.p variants={fadeInUp} className="font-body text-lg text-ivory/70 mb-8 leading-relaxed">
                Our platform connects governance expertise across the Americas, with deep relationships in key markets and regulatory environments.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-6">
                {[
                  { region: "Canada", description: "Corporate governance, family trusts, and cross-border tax optimization" },
                  { region: "United States", description: "Entity structuring, investment vehicles, and regulatory compliance" },
                  { region: "Latin America", description: "Market entry, local partnerships, and operational integration" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-surface rounded-lg border border-edge">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h4 className="font-display text-lg font-semibold text-ivory mb-1">{item.region}</h4>
                      <p className="font-body text-sm text-ivory/60">{item.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="relative">
              <div className="relative aspect-[4/3]">
                <Image src={IMAGES.globalExpansion} alt="Map showing Coigne Capital coverage across the Americas" fill sizes="(max-width: 1024px) 100vw, 50vw" className="rounded-lg object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-base/30 to-transparent rounded-lg" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section aria-label="Our team" className="py-24 md:py-32 bg-base-alt relative">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center max-w-3xl mx-auto">
            <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.2em] text-gold uppercase block mb-4">Our People</motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-6">A Multidisciplinary Team</motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-lg text-ivory/70 mb-10 leading-relaxed">
              Our team brings decades of experience across governance, finance, law, technology, and cross-border operations. We work alongside a trusted international partner network to deliver integrated solutions.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/team">
                <Button size="lg" className="bg-gold hover:bg-gold-hover text-obsidian font-body font-medium px-8 py-6 text-base">
                  Meet the Team
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/schedule-consultation">
                <Button size="lg" variant="outline" className="border-gold/30 text-ivory hover:bg-gold/10 hover:border-gold/50 font-body px-8 py-6 text-base">
                  Schedule a Consultation
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
