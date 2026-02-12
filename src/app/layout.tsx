import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Space_Grotesk } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://coignecapital.ca";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-accent",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Coigne Capital | Cross-Border Governance & Advisory",
    template: "%s | Coigne Capital",
  },
  description:
    "Cross-border governance, ownership design, and capital structure advisory for founders, families, and international businesses across Canada, the US, and Latin America.",
  keywords: [
    "cross-border governance",
    "holding company design",
    "family governance",
    "capital planning",
    "risk governance",
    "market entry",
    "Latin America",
    "Canada",
    "advisory",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Coigne Capital",
    title: "Coigne Capital | Cross-Border Governance & Advisory",
    description:
      "Cross-border governance, ownership design, and capital structure advisory for founders, families, and international businesses across the Americas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coigne Capital | Cross-Border Governance & Advisory",
    description:
      "Cross-border governance, ownership design, and capital structure advisory for founders, families, and international businesses across the Americas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Coigne Capital",
    url: BASE_URL,
    description:
      "Cross-border governance, ownership design, and capital structure advisory for founders, families, and international businesses across the Americas.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-438-800-8514",
      email: "contact@coignecapital.ca",
      contactType: "customer service",
    },
    areaServed: [
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Mexico" },
    ],
  };

  return (
    <html lang="en" className="dark">
      <body
        className={`${cormorantGaramond.variable} ${outfit.variable} ${spaceGrotesk.variable} antialiased min-h-screen bg-[#0a0a0a]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#C9A962] focus:text-[#121212] focus:rounded-lg focus:font-body"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
