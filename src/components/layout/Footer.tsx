import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

interface FooterService {
  slug: string;
  title: string;
}

interface FooterSiteSettings {
  logo_url: string;
  email: string;
  phone: string;
  address: string;
  company_description: string;
  linkedin_url: string;
  twitter_url: string;
}

interface FooterProps {
  services: FooterService[];
  siteSettings: FooterSiteSettings | null;
}

const FALLBACK_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663201658479/eFrBxfDfdGjOmCXT.png";

export default function Footer({ services, siteSettings }: FooterProps) {
  const logoUrl = siteSettings?.logo_url || FALLBACK_LOGO;
  const email = siteSettings?.email || "contact@coignecapital.ca";
  const phone = siteSettings?.phone || "+1 (438) 800-8514";
  const address = siteSettings?.address || "Canada · United States · Latin America";
  const description = siteSettings?.company_description || "Cross-border governance, ownership, and capital structure advisory for founders, families, and international businesses.";
  const linkedinUrl = siteSettings?.linkedin_url || "https://www.linkedin.com/company/coigne-capital";
  const twitterUrl = siteSettings?.twitter_url || "https://twitter.com/coignecapital";

  return (
    <footer className="pt-16 pb-8 bg-base-deep border-t border-surface-alt" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Image src={logoUrl} alt="Coigne Capital" width={140} height={56} className="h-14 w-auto mb-4" />
            <p className="font-body text-sm text-ivory/50 leading-relaxed mb-6">
              {description}
            </p>
            <div className="flex items-center gap-4">
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-ivory/50 hover:text-gold hover:bg-gold/10 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-ivory/50 hover:text-gold hover:bg-gold/10 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-accent text-xs text-gold uppercase tracking-wider mb-4">Services</h3>
            <nav aria-label="Footer services" className="space-y-2.5">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="block font-body text-sm text-ivory/50 hover:text-gold transition-colors">
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-accent text-xs text-gold uppercase tracking-wider mb-4">Company</h3>
            <nav aria-label="Footer company links" className="space-y-2.5">
              <Link href="/about" className="block font-body text-sm text-ivory/50 hover:text-gold transition-colors">About Us</Link>
              <Link href="/team" className="block font-body text-sm text-ivory/50 hover:text-gold transition-colors">Our Team</Link>
              <Link href="/case-studies" className="block font-body text-sm text-ivory/50 hover:text-gold transition-colors">Case Studies</Link>
              <Link href="/blog" className="block font-body text-sm text-ivory/50 hover:text-gold transition-colors">Blog & Insights</Link>
              <Link href="/how-we-work" className="block font-body text-sm text-ivory/50 hover:text-gold transition-colors">How We Work</Link>
              <Link href="/contact" className="block font-body text-sm text-ivory/50 hover:text-gold transition-colors">Contact Us</Link>
            </nav>
          </div>

          <div>
            <h3 className="font-accent text-xs text-gold uppercase tracking-wider mb-4">Contact</h3>
            <div className="space-y-3">
              <a href={`mailto:${email}`} className="flex items-center gap-3 font-body text-sm text-ivory/50 hover:text-gold transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                {email}
              </a>
              <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-3 font-body text-sm text-ivory/50 hover:text-gold transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                {phone}
              </a>
              <div className="flex items-start gap-3 font-body text-sm text-ivory/50">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>{address}</span>
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
            <Link href="/disclosures" className="font-body text-xs text-ivory/30 hover:text-gold transition-colors">Legal Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
