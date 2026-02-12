"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { services, ICON_MAP } from "@/data/services";

interface SerializedService {
  slug: string;
  iconName: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  benefits: string[];
  approach: { title: string; description: string }[];
  relatedServices: string[];
  technologyPartner?: {
    name: string;
    description: string;
    link: string;
  };
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

interface ServicePageClientProps {
  service: SerializedService;
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
  const relatedServices = services.filter((s) => service.relatedServices.includes(s.slug));
  const IconComponent = ICON_MAP[service.iconName];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <section aria-label="Service hero" className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={service.heroImage} alt="" fill sizes="100vw" priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/#services" className="inline-flex items-center gap-2 font-body text-sm text-[#C9A962] hover:text-[#C9A962]/80 transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All Services
            </Link>
            <div className="flex items-center gap-4 mb-6">
              {IconComponent && (
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-[#C9A962]/20" aria-hidden="true">
                  <IconComponent className="h-7 w-7 text-[#C9A962]" />
                </div>
              )}
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-[#FAFAF5] leading-tight mb-6 max-w-3xl">{service.title}</h1>
            <p className="font-body text-lg text-[#FAFAF5]/70 max-w-2xl leading-relaxed">{service.fullDescription}</p>
          </motion.div>
        </div>
      </section>

      <section aria-label="Benefits and approach" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.2em] text-[#C9A962] uppercase block mb-4">Benefits</motion.span>
              <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-semibold text-[#FAFAF5] mb-8">Key Benefits</motion.h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.li key={index} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#C9A962] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <p className="font-body text-[#FAFAF5]/70 leading-relaxed">{benefit}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.2em] text-[#C9A962] uppercase block mb-4">Methodology</motion.span>
              <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-semibold text-[#FAFAF5] mb-8">Our Approach</motion.h2>
              <ol className="space-y-6">
                {service.approach.map((step, index) => (
                  <motion.li key={index} variants={fadeInUp} className="flex gap-4">
                    <span className="font-accent text-2xl font-semibold text-[#C9A962]/30" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-[#FAFAF5] mb-2">{step.title}</h4>
                      <p className="font-body text-sm text-[#FAFAF5]/60 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      {service.technologyPartner && (
        <section aria-label="Technology partner" className="py-24 bg-[#0d0d0d] border-t border-[#1a1a1a]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-accent text-sm tracking-[0.2em] text-[#C9A962] uppercase block mb-4">Technology Partner</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#FAFAF5] mb-4">{service.technologyPartner.name}</h2>
              <p className="font-body text-[#FAFAF5]/70 mb-8 leading-relaxed">{service.technologyPartner.description}</p>
              <a href={service.technologyPartner.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-body text-[#C9A962] hover:text-[#C9A962]/80 transition-colors">
                Visit {service.technologyPartner.name}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      )}

      {relatedServices.length > 0 && (
        <section aria-label="Related services" className="py-24 bg-[#0a0a0a] border-t border-[#1a1a1a]">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-3xl font-semibold text-[#FAFAF5] mb-8 text-center">Related Services</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relatedServices.map((related, index) => {
                const RelatedIcon = ICON_MAP[related.iconName];
                return (
                  <Link key={index} href={`/services/${related.slug}`} className="group p-6 bg-[#141414] rounded-lg border border-[#2a2a2a] hover:border-[#C9A962]/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      {RelatedIcon && (
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#C9A962]/10 group-hover:bg-[#C9A962]/20 transition-colors flex-shrink-0" aria-hidden="true">
                          <RelatedIcon className="h-5 w-5 text-[#C9A962]" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-display text-lg font-semibold text-[#FAFAF5] mb-2 group-hover:text-[#C9A962] transition-colors">{related.title}</h3>
                        <p className="font-body text-sm text-[#FAFAF5]/60">{related.shortDescription}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section aria-label="Get started" className="py-24 bg-[#0d0d0d] border-t border-[#1a1a1a]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#FAFAF5] mb-6">Ready to Get Started?</h2>
          <p className="font-body text-lg text-[#FAFAF5]/60 max-w-2xl mx-auto mb-8">
            Schedule a confidential consultation to discuss how we can help with your {service.title.toLowerCase()} needs.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-[#C9A962] hover:bg-[#B89952] text-[#121212] font-body font-medium px-8 py-6">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
