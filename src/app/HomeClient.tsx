"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Users,
  TrendingUp,
  Shield,
  Layers,
  Globe,
  Cog,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { IMAGES } from "@/data/images";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const homeServices = [
  {
    icon: Building2,
    slug: "holding-company-ownership-design",
    title: "Holding Company & Ownership Design",
    description:
      "Developing clear, efficient cross-border ownership structures with well-defined decision rights.",
  },
  {
    icon: Users,
    slug: "shareholder-family-governance",
    title: "Shareholder & Family Governance",
    description:
      "Establishing roles, voting frameworks, continuity plans, and dispute-prevention mechanisms.",
  },
  {
    icon: TrendingUp,
    slug: "capital-planning-financial-strategy",
    title: "Capital Planning and Financial Strategy",
    description:
      "Structuring strategies for liquidity events, reinvestment, distributions, and long-term stakeholder cohesion.",
  },
  {
    icon: Shield,
    slug: "risk-governance",
    title: "Risk Governance",
    description:
      "Implementing practical safeguards to manage challenges such as residency changes, disputes, and banking constraints.",
  },
  {
    icon: Layers,
    slug: "cross-functional-execution",
    title: "Cross-Functional Execution",
    description:
      "Integrating legal, tax, insurance, and banking inputs into a unified, actionable plan.",
  },
  {
    icon: Globe,
    slug: "market-entry-expansion",
    title: "Market Entry & Expansion",
    description:
      "Leveraging government and private-sector networks to support expansion across the Americas.",
  },
  {
    icon: Cog,
    slug: "operational-modernization",
    title: "Operational Modernization",
    description:
      "Deploying digital systems and tailored software to reduce friction, strengthen controls, and enhance visibility.",
  },
];

function HeroSection() {
  return (
    <section aria-label="Hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src={IMAGES.governanceBoardroom} alt="" fill sizes="100vw" priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-base/70 via-base/50 to-base" />
      </div>
      <div className="absolute inset-0 hex-pattern opacity-30" />
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="font-accent text-sm tracking-[0.3em] text-gold uppercase">
              Cross-Border Advisory Platform
            </span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory leading-[1.1] mb-8">
            Design Governance with{" "}
            <span className="text-gradient-gold">Interlocking Precision</span>{" "}
            Across Borders
          </motion.h1>
          <motion.p variants={fadeInUp} className="font-body text-lg md:text-xl text-ivory/70 max-w-2xl mb-10 leading-relaxed">
            Coigne Capital helps founders, families, and international businesses design clear ownership structures, establish institutional-grade governance, and execute with confidence across Canada, the US, and Latin America.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
            <Link href="/#contact">
              <Button size="lg" className="bg-gold hover:bg-gold-hover text-obsidian font-body font-medium px-8 py-6 text-base">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/#services">
              <Button size="lg" variant="outline" className="border-gold/30 text-ivory hover:bg-gold/10 hover:border-gold/50 font-body px-8 py-6 text-base">
                Explore Our Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }} className="absolute bottom-10 left-1/2 -translate-x-1/2" aria-hidden="true">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center gap-2 text-gold/60">
          <span className="font-accent text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" aria-label="About Coigne Capital" className="py-24 md:py-32 bg-base relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="relative">
            <div className="relative rounded-lg overflow-hidden glow-gold aspect-[4/3]">
              <Image src={IMAGES.corporateGovernance} alt="Governance structure visualization showing cross-border advisory framework" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-base/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/20 rounded-lg" aria-hidden="true" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.2em] text-gold uppercase block mb-4">Who We Are</motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-6">Governance Built for Complexity</motion.h2>
            <motion.div variants={fadeInUp} className="space-y-5 text-ivory/70 font-body leading-relaxed">
              <p>Coigne Capital is a cross-border governance, ownership, and capital structure advisory platform serving founders, families, and international businesses across Canada, the US, and Latin America.</p>
              <p>Through our internal team and partner network spanning governance, financial, legal, insurance, and technology expertise, we help our clients design clear ownership structures, establish institutional-grade governance, and execute with confidence.</p>
              <p>Our name reflects our approach: like the coigne stone that locks an architectural structure together, we integrate every element of cross-border governance into a coherent, resilient framework.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" aria-label="Our services" className="py-24 md:py-32 bg-base-alt relative">
      <div className="absolute inset-0 hex-pattern opacity-20" aria-hidden="true" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-16">
          <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.2em] text-gold uppercase block mb-4">What We Do</motion.span>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-6">Comprehensive Advisory Services</motion.h2>
          <motion.p variants={fadeInUp} className="font-body text-lg text-ivory/60 max-w-2xl mx-auto">
            From ownership design to operational modernization, we provide end-to-end governance solutions across the Americas.
          </motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {homeServices.map((service, index) => (
            <motion.div key={index} variants={fadeInUp} role="listitem">
              <Link href={`/services/${service.slug}`} className="group relative p-8 bg-surface rounded-lg border border-edge hover:border-gold/30 transition-all duration-300 block h-full">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors" aria-hidden="true">
                  <service.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-ivory mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="font-body text-ivory/60 leading-relaxed">{service.description}</p>
                <div className="mt-4 flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                  <span className="font-body text-sm">Learn more</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function GeographicSection() {
  return (
    <section aria-label="Geographic coverage" className="py-24 md:py-32 bg-base relative overflow-hidden">
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
  );
}

function ApproachSection() {
  return (
    <section id="approach" aria-label="Our approach" className="py-24 md:py-32 bg-base-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-base-alt/95 via-base-alt/85 to-base-alt/90" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-16">
          <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.2em] text-gold uppercase block mb-4">Our Process</motion.span>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-6">How We Work</motion.h2>
          <motion.p variants={fadeInUp} className="font-body text-lg text-ivory/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Our structured approach ensures clarity, alignment, and institutional-grade execution at every stage.
          </motion.p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
            <div className="relative aspect-[4/3]">
              <Image src={IMAGES.crossBorderMeeting} alt="Cross-border advisory team in strategic planning session" fill sizes="(max-width: 1024px) 100vw, 50vw" className="rounded-lg object-cover" />
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-8">
            {[
              { number: "01", title: "Design", description: "We work with you to design the right structure. Through our internal team and partner network, we bring governance, financial, legal, and risk management expertise to create frameworks aligned with your strategic objectives across all jurisdictions." },
              { number: "02", title: "Define", description: "We define clear decision rights and governance frameworks. This includes roles, responsibilities, voting structures, and operational protocols that work consistently across Canada, the US, and Latin America." },
              { number: "03", title: "Execute", description: "We execute with discipline through our partner network and Synexum Labs digital infrastructure. Coordinated implementation across legal, tax, banking, insurance, and operations ensures institutional-grade governance from day one." },
              { number: "04", title: "Sustain", description: "We provide ongoing support and optimization. Your governance frameworks evolve with your business while maintaining clarity, control, and compliance across all jurisdictions through continuous partnership." },
            ].map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex gap-6">
                <span className="font-accent text-3xl font-semibold text-gold/30" aria-hidden="true">{step.number}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ivory mb-2">{step.title}</h3>
                  <p className="font-body text-ivory/60 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="mt-16 pt-16 border-t border-gold/20">
          <LeadCaptureForm />
        </motion.div>
      </div>
    </section>
  );
}

function FamilyLegacySection() {
  return (
    <section aria-label="Family legacy services" className="py-24 md:py-32 bg-base relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <Image src={IMAGES.familyOfficeConcept} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-base via-base/90 to-base/70" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-3xl">
          <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.2em] text-gold uppercase block mb-4">Family Legacy</motion.span>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-6">Protecting What Matters Most</motion.h2>
          <motion.p variants={fadeInUp} className="font-body text-lg text-ivory/70 mb-8 leading-relaxed">
            For families navigating the complexities of multi-generational wealth and cross-border operations, we provide the governance frameworks, succession strategies, and institutional infrastructure needed to preserve and grow your legacy.
          </motion.p>
          <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-6" role="list">
            {[
              "Integrated succession planning across jurisdictions",
              "Governance structures that align family and business interests",
              "Advanced insurance strategies for wealth preservation",
              "Technology-enabled transparency and decision-making",
              "Clear roles, responsibilities, and dispute prevention",
              "Scalable frameworks that evolve with your family",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3" role="listitem">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                <span className="font-body text-ivory/80">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section aria-label="Call to action" className="py-24 md:py-32 bg-base-alt relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" />
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center max-w-3xl mx-auto">
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-6">Ready to Build Resilient Governance?</motion.h2>
          <motion.p variants={fadeInUp} className="font-body text-lg text-ivory/70 mb-10 leading-relaxed">
            Let us help you design clear ownership structures, establish institutional-grade governance, and execute with confidence across the Americas.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="/#contact">
              <Button size="lg" className="bg-gold hover:bg-gold-hover text-obsidian font-body font-medium px-10 py-6 text-base">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" aria-label="Contact us" className="py-24 md:py-32 bg-base relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.2em] text-gold uppercase block mb-4">Get in Touch</motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-6">Start a Conversation</motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-lg text-ivory/70 mb-10 leading-relaxed">
              Whether you&apos;re navigating cross-border governance challenges or planning for the next generation, we&apos;re here to help.
            </motion.p>
            <motion.div variants={fadeInUp} className="space-y-6">
              <a href="mailto:contact@coignecapital.ca" aria-label="Email us at contact@coignecapital.ca" className="flex items-center gap-4 p-4 bg-surface rounded-lg border border-edge hover:border-gold/30 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors" aria-hidden="true">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <span className="font-accent text-xs text-ivory/50 uppercase tracking-wider">Email</span>
                  <p className="font-body text-ivory">contact@coignecapital.ca</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 bg-surface rounded-lg border border-edge">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center" aria-hidden="true">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <span className="font-accent text-xs text-ivory/50 uppercase tracking-wider">Regions</span>
                  <p className="font-body text-ivory">Canada &middot; United States &middot; Latin America</p>
                </div>
              </div>
              <a href="tel:+14388008514" aria-label="Call us at +1 438 800 8514" className="flex items-center gap-4 p-4 bg-surface rounded-lg border border-edge hover:border-gold/30 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors" aria-hidden="true">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <span className="font-accent text-xs text-ivory/50 uppercase tracking-wider">Phone</span>
                  <p className="font-body text-ivory">+1 (438) 800-8514</p>
                </div>
              </a>
            </motion.div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="bg-surface rounded-lg border border-edge p-8">
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
                <textarea id="contact-message" rows={4} className="w-full px-4 py-3 bg-surface-alt border border-edge rounded-lg text-ivory font-body focus:outline-none focus:border-gold/50 transition-colors resize-none" placeholder="Tell us about your cross-border governance needs..." />
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
  );
}

export default function HomeClient() {
  return (
    <div className="min-h-screen bg-base">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GeographicSection />
      <ApproachSection />
      <FamilyLegacySection />
      <CTASection />
      <ContactSection />
    </div>
  );
}
