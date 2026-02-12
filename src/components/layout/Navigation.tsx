"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663201658479/eFrBxfDfdGjOmCXT.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
            <Link href="/#about" className="text-sm font-body text-ivory/80 hover:text-gold transition-colors">About</Link>
            <Link href="/#services" className="text-sm font-body text-ivory/80 hover:text-gold transition-colors">Services</Link>
            <Link href="/case-studies" className="text-sm font-body text-ivory/80 hover:text-gold transition-colors">Case Studies</Link>
            <Link href="/blog" className="text-sm font-body text-ivory/80 hover:text-gold transition-colors">Blog</Link>
            <Link href="/team" className="text-sm font-body text-ivory/80 hover:text-gold transition-colors">Team</Link>
            <Link href="/#approach" className="text-sm font-body text-ivory/80 hover:text-gold transition-colors">Approach</Link>
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
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            <Link href="/#about" className="block text-sm font-body text-ivory/80 hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/#services" className="block text-sm font-body text-ivory/80 hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/case-studies" className="block text-sm font-body text-ivory/80 hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
            <Link href="/blog" className="block text-sm font-body text-ivory/80 hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link href="/team" className="block text-sm font-body text-ivory/80 hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>Team</Link>
            <Link href="/#contact" className="block text-sm font-body text-ivory/80 hover:text-gold transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-gold hover:bg-gold-hover text-obsidian font-body font-medium">
                Schedule Consultation
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
