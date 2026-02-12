"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { teamMembers } from "@/data/team";
import { IMAGES } from "@/data/images";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function TeamPageClient() {
  return (
    <div className="min-h-screen bg-base">
      <section aria-label="Team hero" className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.governanceBoardroom} alt="" fill sizes="100vw" priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-base/90 via-base/75 to-base" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-accent text-sm tracking-[0.3em] text-gold uppercase block mb-4">
            Our Team
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory mb-6">
            Leadership & Expertise
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="font-body text-lg text-ivory/70 max-w-2xl mx-auto">
            A multidisciplinary team bringing decades of experience in cross-border governance, finance, law, and technology.
          </motion.p>
        </div>
      </section>

      <section aria-label="Team members" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.article key={index} variants={fadeInUp} className="group bg-surface rounded-lg border border-edge overflow-hidden hover:border-gold/30 transition-all duration-300">
                <div className="grid sm:grid-cols-[200px_1fr] gap-0">
                  <div className="relative h-64 sm:h-full overflow-hidden">
                    <Image src={member.image} alt={`Portrait of ${member.name}, ${member.title}`} fill sizes="(max-width: 640px) 100vw, 200px" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface/50 to-transparent sm:bg-gradient-to-r" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-ivory mb-1">{member.name}</h3>
                    <p className="font-accent text-sm text-gold mb-4">{member.title}</p>
                    <p className="font-body text-sm text-ivory/60 mb-4 leading-relaxed">{member.bio}</p>
                    <div className="space-y-3">
                      <div>
                        <span className="font-accent text-xs text-ivory/40 uppercase tracking-wider">Expertise</span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {member.expertise.split(", ").map((skill, i) => (
                            <span key={i} className="text-xs font-body px-2 py-0.5 bg-gold/10 text-gold rounded">{skill}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="font-accent text-xs text-ivory/40 uppercase tracking-wider">Regions</span>
                        <p className="font-body text-sm text-ivory/60 mt-1">{member.regions.split(", ").join(" · ")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section aria-label="Work with us" className="py-24 bg-base-alt">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-6">Work With Our Team</h2>
          <p className="font-body text-lg text-ivory/60 max-w-2xl mx-auto mb-8">
            Ready to discuss your cross-border governance needs? Our team is here to help design clear structures and execute with confidence.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-gold hover:bg-gold-hover text-obsidian font-body font-medium px-8 py-6">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
