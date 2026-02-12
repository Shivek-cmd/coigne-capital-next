import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663201658479/eFrBxfDfdGjOmCXT.png";

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 bg-base-deep border-t border-surface-alt" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Image src={LOGO_URL} alt="Coigne Capital" width={140} height={56} className="h-14 w-auto mb-4" />
            <p className="font-body text-sm text-ivory/50 leading-relaxed mb-6">
              Cross-border governance, ownership, and capital structure advisory for founders, families, and international businesses.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/coigne-capital" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-ivory/50 hover:text-gold hover:bg-gold/10 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://twitter.com/coignecapital" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-ivory/50 hover:text-gold hover:bg-gold/10 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-accent text-xs text-gold uppercase tracking-wider mb-4">Services</h3>
            <nav aria-label="Footer services" className="space-y-2.5">
              <Link href="/services/holding-company-ownership-design" className="block font-body text-sm text-ivory/50 hover:text-gold transition-colors">Holding Company & Ownership Design</Link>
              <Link href="/services/shareholder-family-governance" className="block font-body text-sm text-ivory/50 hover:text-gold transition-colors">Shareholder & Family Governance</Link>
              <Link href="/services/capital-planning-financial-strategy" className="block font-body text-sm text-ivory/50 hover:text-gold transition-colors">Capital Planning & Financial Strategy</Link>
              <Link href="/services/risk-governance" className="block font-body text-sm text-ivory/50 hover:text-gold transition-colors">Risk Governance</Link>
              <Link href="/services/cross-functional-execution" className="block font-body text-sm text-ivory/50 hover:text-gold transition-colors">Cross-Functional Execution</Link>
              <Link href="/services/market-entry-expansion" className="block font-body text-sm text-ivory/50 hover:text-gold transition-colors">Market Entry & Expansion</Link>
              <Link href="/services/operational-modernization" className="block font-body text-sm text-ivory/50 hover:text-gold transition-colors">Operational Modernization</Link>
            </nav>
          </div>

          <div>
            <h3 className="font-accent text-xs text-gold uppercase tracking-wider mb-4">Company</h3>
            <nav aria-label="Footer company links" className="space-y-2.5">
              <Link href="/about" className="block font-body text-sm text-ivory/50 hover:text-gold transition-colors">About Us</Link>
              <Link href="/team" className="block font-body text-sm text-ivory/50 hover:text-gold transition-colors">Our Team</Link>
              <Link href="/case-studies" className="block font-body text-sm text-ivory/50 hover:text-gold transition-colors">Case Studies</Link>
              <Link href="/blog" className="block font-body text-sm text-ivory/50 hover:text-gold transition-colors">Blog & Insights</Link>
              <Link href="/#approach" className="block font-body text-sm text-ivory/50 hover:text-gold transition-colors">Our Approach</Link>
              <Link href="/contact" className="block font-body text-sm text-ivory/50 hover:text-gold transition-colors">Contact Us</Link>
            </nav>
          </div>

          <div>
            <h3 className="font-accent text-xs text-gold uppercase tracking-wider mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:contact@coignecapital.ca" className="flex items-center gap-3 font-body text-sm text-ivory/50 hover:text-gold transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                contact@coignecapital.ca
              </a>
              <a href="tel:+14388008514" className="flex items-center gap-3 font-body text-sm text-ivory/50 hover:text-gold transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                +1 (438) 800-8514
              </a>
              <div className="flex items-start gap-3 font-body text-sm text-ivory/50">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Canada &middot; United States &middot; Latin America</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-surface-alt pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-ivory/30">
            &copy; {new Date().getFullYear()} Coigne Capital Partners. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="font-body text-xs text-ivory/30 hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="font-body text-xs text-ivory/30 hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
