"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const sections = [
  {
    id: "disclaimer",
    title: "Important Disclaimer",
    content: "This website is provided for informational purposes only and does not constitute financial, legal, tax, or investment advice. The information contained herein is not intended to be a substitute for professional advice from qualified advisors.\n\nCoigne Capital Partners does not warrant the accuracy, completeness, or timeliness of any information on this website. Past performance is not indicative of future results. All investments carry risk, including potential loss of principal.\n\nBefore making any financial or business decisions, you should consult with qualified professionals including financial advisors, lawyers, accountants, and tax specialists who understand your specific circumstances.",
  },
  {
    id: "regulatory",
    title: "Regulatory Compliance & Licensing",
    content: "Coigne Capital Partners operates in compliance with applicable Canadian federal and provincial securities laws, including:\n\n\u2022 Securities Act (Ontario, Quebec, and other provinces)\n\u2022 National Instrument 31-103 (Registration Requirements, Exemptions and Ongoing Registrant Obligations)\n\u2022 Autorit\u00e9 des march\u00e9s financiers (AMF) regulations in Quebec\n\u2022 Financial and Consumer Services Regulation (FCNR) in New Brunswick\n\u2022 Personal Information Protection and Electronic Documents Act (PIPEDA)\n\u2022 Quebec Law 25 (Bill 64) - An Act to modernize legislative provisions as regards the protection of personal information\n\nCoigne Capital Partners is committed to maintaining all required registrations and complying with ongoing regulatory obligations. Clients should verify our current regulatory status with relevant authorities.",
  },
  {
    id: "conflicts",
    title: "Conflicts of Interest",
    content: "Coigne Capital Partners maintains policies and procedures designed to identify and manage conflicts of interest. We disclose material conflicts to clients and implement measures to ensure conflicts do not compromise our duty to act in clients\u2019 best interests.\n\nPotential conflicts may include:\n\u2022 Compensation arrangements with service providers\n\u2022 Cross-selling of services\n\u2022 Relationships with financial institutions and investment providers\n\u2022 Personal trading activities of employees\n\nClients are encouraged to discuss any concerns regarding potential conflicts with our compliance team.",
  },
  {
    id: "privacy",
    title: "Privacy & Personal Information Protection",
    content: "Coigne Capital Partners collects, uses, and protects personal information in accordance with PIPEDA and Quebec Law 25. We collect only information necessary to provide services and comply with legal obligations.\n\nYour personal information is:\n\u2022 Protected by appropriate security measures\n\u2022 Used only for stated purposes\n\u2022 Not shared with third parties without consent, except as required by law\n\u2022 Retained only as long as necessary\n\u2022 Subject to your right of access and correction\n\nFor detailed information about our privacy practices, please contact our Privacy Officer at privacy@coignecapital.ca",
  },
  {
    id: "terms",
    title: "Terms of Service",
    content: "By accessing and using this website, you agree to comply with these terms. Coigne Capital Partners reserves the right to modify these terms at any time. Your continued use constitutes acceptance of modifications.\n\nThis website and its contents are provided \"as is\" without warranties of any kind. We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of this website.\n\nYou agree not to:\n\u2022 Reproduce or distribute content without permission\n\u2022 Use automated tools to access the website\n\u2022 Attempt to gain unauthorized access\n\u2022 Engage in any unlawful activity\n\u2022 Violate intellectual property rights",
  },
  {
    id: "suitability",
    title: "Suitability & Know Your Client",
    content: "Before providing recommendations or advice, Coigne Capital Partners conducts a thorough Know Your Client (KYC) process to understand your:\n\u2022 Financial situation and objectives\n\u2022 Investment experience and knowledge\n\u2022 Risk tolerance and capacity\n\u2022 Time horizon\n\u2022 Liquidity needs\n\nRecommendations are made only when we have determined they are suitable for your circumstances. You have the right to decline recommendations or request alternative approaches.",
  },
  {
    id: "fees",
    title: "Fees & Compensation Disclosure",
    content: "Coigne Capital Partners\u2019 compensation structure includes:\n\u2022 Professional service fees (consulting, advisory, structuring)\n\u2022 Transaction-based fees for specific engagements\n\u2022 Referral fees from service providers (disclosed to clients)\n\u2022 Asset-based fees where applicable\n\nAll fees are disclosed in writing before engagement. We maintain transparent billing practices and provide detailed invoices. Clients have the right to understand our complete fee structure and ask questions about any charges.",
  },
  {
    id: "custody",
    title: "Custody & Fund Handling",
    content: "Coigne Capital Partners does not hold client funds or securities in custody. Any funds or securities are held by qualified custodians or financial institutions. We maintain appropriate safeguards and documentation for all client assets.\n\nClients retain full ownership and control of their assets. We recommend maintaining direct relationships with custodians and regularly reviewing account statements.",
  },
  {
    id: "complaints",
    title: "Complaints & Dispute Resolution",
    content: "Coigne Capital Partners maintains a formal complaints procedure. Clients may file complaints regarding our services or conduct.\n\nTo file a complaint:\n1. Contact our Compliance Officer in writing\n2. Provide detailed information about the complaint\n3. Include relevant documentation\n4. Specify the resolution sought\n\nWe will acknowledge receipt within 5 business days and investigate thoroughly. Our goal is to resolve complaints fairly and promptly.\n\nFor unresolved complaints, clients may contact:\n\u2022 Autorit\u00e9 des march\u00e9s financiers (AMF) - Quebec\n\u2022 Ontario Securities Commission (OSC) - Ontario\n\u2022 Ombudsman for Banking Services and Investments (OBSI)",
  },
  {
    id: "limitations",
    title: "Limitation of Liability",
    content: "To the maximum extent permitted by law, Coigne Capital Partners\u2019 liability is limited to the fees paid for the specific service giving rise to the claim, or $100,000, whichever is less.\n\nThis limitation does not apply to:\n\u2022 Gross negligence or willful misconduct\n\u2022 Breach of fiduciary duty\n\u2022 Violations of securities laws\n\u2022 Fraud or misrepresentation\n\u2022 Claims that cannot be limited by law",
  },
  {
    id: "jurisdiction",
    title: "Jurisdiction & Governing Law",
    content: "These disclosures and any engagement with Coigne Capital Partners are governed by the laws of Quebec and Canada, without regard to conflicts of law principles.\n\nAny disputes shall be resolved through:\n1. Good faith negotiation\n2. Mediation (if agreed by parties)\n3. Arbitration or litigation in Quebec courts\n\nBy engaging with Coigne Capital Partners, you consent to the jurisdiction of Quebec courts.",
  },
  {
    id: "contact",
    title: "Contact Information & Regulatory Authorities",
    content: "For questions about these disclosures or our services:\n\nCoigne Capital Partners\nEmail: compliance@coignecapital.ca\nPhone: +1 (438) 800-8514\nAddress: Contact us for office locations\n\nRegulatory Authorities:\n\u2022 Autorit\u00e9 des march\u00e9s financiers (AMF): www.lautorite.qc.ca\n\u2022 Ontario Securities Commission (OSC): www.osc.gov.on.ca\n\u2022 Financial and Consumer Services Commission (FCNC): www.fcnb.ca\n\u2022 OBSI: www.obsi.ca",
  },
];

export default function DisclosuresClient() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-base">
      <section className="py-16 md:py-24 bg-base border-b border-edge relative overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-20" aria-hidden="true" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.span variants={fadeInUp} className="font-accent text-sm tracking-[0.2em] text-gold uppercase block mb-4">
              Legal
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-6"
            >
              Legal Disclosures &amp; Compliance
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="font-body text-lg text-ivory/70 leading-relaxed"
            >
              Important information about Coigne Capital Partners&apos; services, regulatory compliance, and your rights as a client. Please read these disclosures carefully before engaging with our firm.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-base">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {sections.map((section) => (
              <motion.div
                key={section.id}
                variants={fadeInUp}
                className="border border-edge rounded-lg overflow-hidden hover:border-gold/30 transition-colors"
              >
                <button
                  onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                  className="w-full px-6 py-4 bg-surface hover:bg-surface-alt transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <h3 className="font-display text-lg font-semibold text-ivory text-left group-hover:text-gold transition-colors">
                    {section.title}
                  </h3>
                  <div className={`w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 ml-4 transition-transform ${expandedSection === section.id ? "rotate-45" : ""}`}>
                    <span className="text-gold font-bold text-sm">+</span>
                  </div>
                </button>

                {expandedSection === section.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-base border-t border-edge"
                  >
                    <p className="font-body text-ivory/70 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mt-12 pt-8 border-t border-edge"
          >
            <p className="font-body text-sm text-ivory/50">
              Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <p className="font-body text-sm text-ivory/50 mt-2">
              These disclosures are subject to change. Please review regularly for updates.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-base-deep border-t border-edge">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-display text-2xl md:text-3xl font-semibold text-ivory mb-4"
            >
              Questions About Our Compliance?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="font-body text-ivory/70 mb-8 max-w-2xl mx-auto"
            >
              Contact our Compliance Officer for clarification on any of these disclosures or our regulatory obligations.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-gold hover:bg-gold-hover text-obsidian font-body font-medium rounded-lg transition-colors"
              >
                Contact Compliance
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
