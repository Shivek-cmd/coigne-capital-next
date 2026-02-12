"use client";

import { motion } from "framer-motion";
import { Clock, Shield, Globe, CheckCircle } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const expectations = [
  { icon: Clock, title: "Responsive", description: "We respond within 24 hours to schedule your consultation." },
  { icon: Shield, title: "Confidential", description: "All discussions are held under strict confidentiality." },
  { icon: Globe, title: "Cross-Border Expertise", description: "Guidance spanning Canada, the US, and Latin America." },
  { icon: CheckCircle, title: "No Obligation", description: "An initial conversation to understand your needs with no commitment required." },
];

export default function ScheduleConsultationClient() {
  return (
    <div className="min-h-screen bg-base">
      <section aria-label="Consultation hero" className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-base-alt to-base" />
        <div className="absolute inset-0 hex-pattern opacity-20" aria-hidden="true" />
        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.3em] text-gold uppercase block mb-4">Private Advisory</motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory leading-[1.1] mb-6">
              Schedule a <span className="text-gradient-gold">Consultation</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-lg md:text-xl text-ivory/70 max-w-2xl leading-relaxed">
              Share your details and we&apos;ll arrange a private discussion about your cross-border governance, capital structuring, and advisory needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section aria-label="What to expect" className="py-24 md:py-32 bg-base-alt relative">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-4">What to Expect</motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-lg text-ivory/60 max-w-2xl mx-auto">
              Our consultations are designed to understand your unique situation and provide actionable guidance.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expectations.map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center p-6 bg-surface rounded-lg border border-edge">
                <div className="mx-auto mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gold/10" aria-hidden="true">
                  <item.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ivory mb-2">{item.title}</h3>
                <p className="font-body text-sm text-ivory/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section aria-label="Consultation form" className="py-24 md:py-32 bg-base relative">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-2xl mx-auto bg-surface rounded-lg border border-edge p-8 md:p-12">
            <LeadCaptureForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
