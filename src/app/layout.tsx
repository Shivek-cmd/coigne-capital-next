import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Space_Grotesk } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${cormorantGaramond.variable} ${outfit.variable} ${spaceGrotesk.variable} antialiased min-h-screen bg-[#0a0a0a]`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
