"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/data/services";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663201658479/eFrBxfDfdGjOmCXT.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-base/95 backdrop-blur-md border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src={LOGO_URL} alt="Coigne Capital" width={160} height={64} className="h-16 w-auto" priority />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-sm font-body text-ivory/80 hover:text-gold transition-colors"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-surface border border-edge rounded-lg shadow-2xl overflow-hidden"
                  >
                    <div className="p-2">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-start gap-3 px-3 py-2.5 rounded-md hover:bg-gold/10 transition-colors group"
                        >
                          <service.icon className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                          <span className="font-body text-sm text-ivory/80 group-hover:text-ivory">{service.title}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-edge p-3">
                      <Link
                        href="/#services"
                        onClick={() => setServicesOpen(false)}
                        className="block text-center font-body text-xs text-gold hover:text-gold-hover transition-colors"
                      >
                        View All Services
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/case-studies" className="text-sm font-body text-ivory/80 hover:text-gold transition-colors">Case Studies</Link>
            <Link href="/blog" className="text-sm font-body text-ivory/80 hover:text-gold transition-colors">Blog</Link>
            <Link href="/team" className="text-sm font-body text-ivory/80 hover:text-gold transition-colors">Team</Link>
            <Link href="/#about" className="text-sm font-body text-ivory/80 hover:text-gold transition-colors">About</Link>
            <Link href="/#contact" className="text-sm font-body text-ivory/80 hover:text-gold transition-colors">Contact</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/#contact">
              <Button className="bg-gold hover:bg-gold-hover text-obsidian font-body font-medium px-6">
                Schedule Consultation
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden text-ivory"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 space-y-1"
          >
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full py-3 text-sm font-body text-ivory/80 hover:text-gold transition-colors"
                aria-expanded={mobileServicesOpen}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 pb-2 space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block py-2 text-sm font-body text-ivory/60 hover:text-gold transition-colors"
                          onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/case-studies" className="block py-3 text-sm font-body text-ivory/80 hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
            <Link href="/blog" className="block py-3 text-sm font-body text-ivory/80 hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link href="/team" className="block py-3 text-sm font-body text-ivory/80 hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>Team</Link>
            <Link href="/#about" className="block py-3 text-sm font-body text-ivory/80 hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/#contact" className="block py-3 text-sm font-body text-ivory/80 hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-gold hover:bg-gold-hover text-obsidian font-body font-medium mt-2">
                Schedule Consultation
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
