"use client";

import { useEffect } from "react";
import i18n from "@/i18n/config";

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const saved = localStorage.getItem("i18nextLng");
    if (saved && ["en", "fr", "es"].includes(saved) && i18n.language !== saved) {
      i18n.changeLanguage(saved);
    }
  }, []);

  return <>{children}</>;
}
