"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

export default function ContactPageClient() {
  return (
    <div className="min-h-screen bg-base">
      <section aria-label="Contact hero" className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-base-alt to-base" />
        <div className="absolute inset-0 hex-pattern opacity-20" aria-hidden="true" />
        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.3em] text-gold uppercase block mb-4">Get in Touch</motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory leading-[1.1] mb-6">
              Start a <span className="text-gradient-gold">Conversation</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-lg md:text-xl text-ivory/70 max-w-2xl leading-relaxed">
              Whether you&apos;re navigating cross-border governance challenges or planning for the next generation, we&apos;re here to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section aria-label="Contact details and form" className="py-24 md:py-32 bg-base relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
              <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-8">How to Reach Us</motion.h2>
              <motion.div variants={fadeInUp} className="space-y-6 mb-10">
                <a href="mailto:contact@coignecapital.ca" aria-label="Email us at contact@coignecapital.ca" className="flex items-center gap-4 p-5 bg-surface rounded-lg border border-edge hover:border-gold/30 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors" aria-hidden="true">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <span className="font-accent text-xs text-ivory/50 uppercase tracking-wider">Email</span>
                    <p className="font-body text-ivory">contact@coignecapital.ca</p>
                  </div>
                </a>
                <a href="tel:+14388008514" aria-label="Call us at +1 438 800 8514" className="flex items-center gap-4 p-5 bg-surface rounded-lg border border-edge hover:border-gold/30 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors" aria-hidden="true">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <span className="font-accent text-xs text-ivory/50 uppercase tracking-wider">Phone</span>
                    <p className="font-body text-ivory">+1 (438) 800-8514</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-5 bg-surface rounded-lg border border-edge">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center" aria-hidden="true">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <span className="font-accent text-xs text-ivory/50 uppercase tracking-wider">Regions</span>
                    <p className="font-body text-ivory">Canada &middot; United States &middot; Latin America</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="font-display text-xl font-semibold text-ivory mb-4">Follow Us</h3>
                <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/company/coigne-capital" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-11 h-11 rounded-lg bg-surface border border-edge flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold/30 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://twitter.com/coignecapital" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-11 h-11 rounded-lg bg-surface border border-edge flex items-center justify-center text-ivory/50 hover:text-gold hover:border-gold/30 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-10 p-6 bg-surface rounded-lg border border-edge">
                <h3 className="font-display text-xl font-semibold text-ivory mb-3">Need a Consultation?</h3>
                <p className="font-body text-ivory/60 mb-4">For a more detailed discussion about your specific governance and advisory needs, schedule a dedicated consultation.</p>
                <Link href="/schedule-consultation">
                  <Button className="bg-gold hover:bg-gold-hover text-obsidian font-body font-medium">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="bg-surface rounded-lg border border-edge p-8">
              <h2 className="font-display text-2xl font-semibold text-ivory mb-6">Send Us a Message</h2>
              <form className="space-y-6" aria-label="Contact form">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-first-name" className="font-accent text-xs text-ivory/50 uppercase tracking-wider block mb-2">First Name</label>
                    <input id="contact-first-name" type="text" autoComplete="given-name" className="w-full px-4 py-3 bg-surface-alt border border-edge rounded-lg text-ivory font-body focus:outline-none focus:border-gold/50 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="contact-last-name" className="font-accent text-xs text-ivory/50 uppercase tracking-wider block mb-2">Last Name</label>
                    <input id="contact-last-name" type="text" autoComplete="family-name" className="w-full px-4 py-3 bg-surface-alt border border-edge rounded-lg text-ivory font-body focus:outline-none focus:border-gold/50 transition-colors" placeholder="Smith" />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email" className="font-accent text-xs text-ivory/50 uppercase tracking-wider block mb-2">Email</label>
                  <input id="contact-email" type="email" autoComplete="email" className="w-full px-4 py-3 bg-surface-alt border border-edge rounded-lg text-ivory font-body focus:outline-none focus:border-gold/50 transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="contact-company" className="font-accent text-xs text-ivory/50 uppercase tracking-wider block mb-2">Company / Organization</label>
                  <input id="contact-company" type="text" autoComplete="organization" className="w-full px-4 py-3 bg-surface-alt border border-edge rounded-lg text-ivory font-body focus:outline-none focus:border-gold/50 transition-colors" placeholder="Your Company" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="font-accent text-xs text-ivory/50 uppercase tracking-wider block mb-2">How Can We Help?</label>
                  <textarea id="contact-message" rows={5} className="w-full px-4 py-3 bg-surface-alt border border-edge rounded-lg text-ivory font-body focus:outline-none focus:border-gold/50 transition-colors resize-none" placeholder="Tell us about your cross-border governance needs..." />
                </div>
                <Button type="submit" className="w-full bg-gold hover:bg-gold-hover text-obsidian font-body font-medium py-6">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
