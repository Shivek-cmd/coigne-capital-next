"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { IMAGES } from "@/data/images";
import LeadCaptureForm from "@/components/LeadCaptureForm";

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

const steps = [
  {
    number: "01",
    title: "Design",
    description: "We work with you to design the right structure. Through our internal team and partner network, we bring governance, financial, legal, and risk management expertise to create frameworks aligned with your strategic objectives across all jurisdictions.",
    details: [
      "Comprehensive assessment of current structures and objectives",
      "Cross-jurisdictional analysis across Canada, US, and Latin America",
      "Custom framework design aligned with stakeholder goals",
      "Integration of governance, legal, tax, and financial inputs",
    ],
  },
  {
    number: "02",
    title: "Define",
    description: "We define clear decision rights and governance frameworks. This includes roles, responsibilities, voting structures, and operational protocols that work consistently across Canada, the US, and Latin America.",
    details: [
      "Clear decision rights and authority matrices",
      "Voting structures and governance protocols",
      "Role definitions across family, board, and management",
      "Dispute prevention and resolution mechanisms",
    ],
  },
  {
    number: "03",
    title: "Execute",
    description: "We execute with discipline through our partner network and Synexum Labs digital infrastructure. Coordinated implementation across legal, tax, banking, insurance, and operations ensures institutional-grade governance from day one.",
    details: [
      "Coordinated implementation across all disciplines",
      "Digital infrastructure through Synexum Labs",
      "Banking, insurance, and operational setup",
      "Institutional-grade documentation and compliance",
    ],
  },
  {
    number: "04",
    title: "Sustain",
    description: "We provide ongoing support and optimization. Your governance frameworks evolve with your business while maintaining clarity, control, and compliance across all jurisdictions through continuous partnership.",
    details: [
      "Ongoing monitoring and optimization",
      "Adaptive frameworks that evolve with your business",
      "Continuous compliance across jurisdictions",
      "Long-term partnership and strategic support",
    ],
  },
];

const principles = [
  { title: "Clarity", description: "Every structure, role, and decision right is defined with precision — no ambiguity." },
  { title: "Alignment", description: "We ensure all stakeholders share a unified vision across jurisdictions and generations." },
  { title: "Discipline", description: "Institutional-grade execution with rigorous documentation and audit-ready processes." },
  { title: "Adaptability", description: "Frameworks designed to evolve with your business, family, and regulatory environment." },
];

export default function HowWeWorkClient() {
  return (
    <div className="min-h-screen bg-base">
      <section aria-label="How we work hero" className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.crossBorderMeeting} alt="" fill sizes="100vw" priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-base/90 via-base/75 to-base" />
        </div>
        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.3em] text-gold uppercase block mb-4">Our Process</motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory leading-[1.1] mb-6">
              How We <span className="text-gradient-gold">Work</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-lg md:text-xl text-ivory/70 max-w-2xl leading-relaxed">
              Our structured approach ensures clarity, alignment, and institutional-grade execution at every stage of your cross-border governance journey.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section aria-label="Guiding principles" className="py-24 md:py-32 bg-base-alt relative">
        <div className="absolute inset-0 hex-pattern opacity-20" aria-hidden="true" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-16">
            <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.2em] text-gold uppercase block mb-4">Our Foundation</motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-6">Guiding Principles</motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-lg text-ivory/60 max-w-2xl mx-auto">
              Everything we do is anchored in four core principles that drive consistent, institutional-grade results.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center p-8 bg-surface rounded-lg border border-edge">
                <span className="font-accent text-4xl font-semibold text-gold/20 block mb-4" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-xl font-semibold text-ivory mb-3">{principle.title}</h3>
                <p className="font-body text-sm text-ivory/60 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section aria-label="Process steps" className="py-24 md:py-32 bg-base relative">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-16">
            <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.2em] text-gold uppercase block mb-4">Step by Step</motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-6">Our Four-Phase Approach</motion.h2>
          </motion.div>
          <div className="space-y-16 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                <motion.div variants={fadeInUp} className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-accent text-5xl font-semibold text-gold/20" aria-hidden="true">{step.number}</span>
                    <h3 className="font-display text-3xl md:text-4xl font-semibold text-ivory">{step.title}</h3>
                  </div>
                  <p className="font-body text-ivory/70 leading-relaxed mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="font-body text-sm text-ivory/60">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div variants={fadeIn} className={`relative aspect-[4/3] ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="absolute inset-0 bg-surface rounded-lg border border-edge overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center p-8">
                        <span className="font-accent text-8xl font-semibold text-gold/10 block" aria-hidden="true">{step.number}</span>
                        <span className="font-display text-2xl font-semibold text-gold/40">{step.title}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Why this approach" className="py-24 md:py-32 bg-base-alt relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="relative">
              <div className="relative aspect-[4/3]">
                <Image src={IMAGES.governanceBoardroom} alt="Governance boardroom for strategic advisory sessions" fill sizes="(max-width: 1024px) 100vw, 50vw" className="rounded-lg object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-base/30 to-transparent rounded-lg" />
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.2em] text-gold uppercase block mb-4">Why It Works</motion.span>
              <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-6">Built for Complexity</motion.h2>
              <motion.div variants={fadeInUp} className="space-y-5 text-ivory/70 font-body leading-relaxed">
                <p>Cross-border governance is inherently complex. Multiple jurisdictions, evolving regulations, diverse stakeholder interests, and generational transitions all create layers of challenge that demand a structured, disciplined approach.</p>
                <p>Our four-phase methodology was developed through years of hands-on experience helping founders, families, and internationally active businesses navigate these complexities. Each phase builds on the previous one, creating a resilient governance foundation that can adapt to change.</p>
                <p>Rather than fragmenting advice across multiple advisors, we coordinate integrated strategies that bring clarity, alignment, and institutional-grade governance to every engagement.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section aria-label="Request consultation" className="py-24 md:py-32 bg-base relative">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-12">
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-6">Ready to Get Started?</motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-lg text-ivory/70 max-w-2xl mx-auto leading-relaxed">
              Share your details and we&apos;ll arrange a private discussion about your cross-border governance needs.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="max-w-2xl mx-auto bg-surface rounded-lg border border-edge p-8 md:p-12">
            <LeadCaptureForm />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mt-8">
            <p className="font-body text-ivory/40 text-sm">
              Or <Link href="/contact" className="text-gold hover:text-gold-hover transition-colors">contact us directly</Link> to start a conversation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
