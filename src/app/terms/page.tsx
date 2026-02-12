import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Coigne Capital",
  description: "Terms of Service for Coigne Capital Partners.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-base">
      <section className="py-32 md:py-40">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="font-accent text-sm tracking-[0.3em] text-gold uppercase block mb-4">Legal</span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-8">Terms of Service</h1>
          <div className="space-y-8 font-body text-ivory/70 leading-relaxed">
            <p>Last updated: February 2026</p>

            <div>
              <h2 className="font-display text-2xl font-semibold text-ivory mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using the Coigne Capital Partners website (&quot;Site&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-ivory mb-4">2. Services Description</h2>
              <p>Coigne Capital Partners provides cross-border governance, ownership, and capital structure advisory services. The information provided on this Site is for general informational purposes only and does not constitute professional advice. For specific guidance, please contact us directly to schedule a consultation.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-ivory mb-4">3. Intellectual Property</h2>
              <p>All content on this Site, including text, graphics, logos, images, and software, is the property of Coigne Capital Partners and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on this Site without our express written permission.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-ivory mb-4">4. Limitation of Liability</h2>
              <p>Coigne Capital Partners shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Site or reliance on any information provided herein. Our advisory services are subject to separate engagement agreements.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-ivory mb-4">5. Governing Law</h2>
              <p>These Terms of Service are governed by and construed in accordance with the laws of the Province of Quebec, Canada, without regard to its conflict of law provisions.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-ivory mb-4">6. Contact Information</h2>
              <p>For questions regarding these Terms of Service, please contact us at contact@coignecapital.ca or +1 (438) 800-8514.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
