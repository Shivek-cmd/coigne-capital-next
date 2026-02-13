"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";

const languages = [
  { code: "en", label: "English", short: "EN" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "es", label: "Español", short: "ES" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm font-body text-ivory/80 hover:text-gold transition-colors cursor-pointer"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4" />
        <span>{current.short}</span>
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-3 w-40 bg-surface border border-edge rounded-lg shadow-2xl overflow-hidden z-50"
          >
            <div className="p-1.5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    localStorage.setItem("i18nextLng", lang.code);
                    setOpen(false);
                  }}
                  className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-body transition-colors cursor-pointer ${
                    i18n.language === lang.code
                      ? "bg-gold/10 text-gold"
                      : "text-ivory/80 hover:bg-gold/10 hover:text-ivory"
                  }`}
                >
                  <span>{lang.label}</span>
                  <span className="text-xs text-ivory/40">{lang.short}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
