import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Coigne Capital",
  description: "Privacy Policy for Coigne Capital Partners.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-base">
      <section className="py-32 md:py-40">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="font-accent text-sm tracking-[0.3em] text-gold uppercase block mb-4">Legal</span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-8">Privacy Policy</h1>
          <div className="space-y-8 font-body text-ivory/70 leading-relaxed">
            <p>Last updated: February 2026</p>

            <div>
              <h2 className="font-display text-2xl font-semibold text-ivory mb-4">1. Information We Collect</h2>
              <p>Coigne Capital Partners (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects information you provide directly, such as your name, email address, phone number, and company name when you submit a contact form, subscribe to our newsletter, or request a consultation. We also collect technical information automatically, including IP address, browser type, and usage data through cookies and analytics tools.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-ivory mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to respond to your inquiries and provide requested services, communicate with you about our advisory services, improve our website and user experience, comply with legal obligations and regulatory requirements, and send periodic updates about governance and advisory insights (with your consent).</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-ivory mb-4">3. Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting business, subject to confidentiality agreements. We may also disclose information when required by law or to protect our rights.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-ivory mb-4">4. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is 100% secure.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-ivory mb-4">5. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have rights regarding your personal data, including the right to access, correct, delete, or port your data. To exercise these rights, please contact us at contact@coignecapital.ca.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-ivory mb-4">6. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at contact@coignecapital.ca or +1 (438) 800-8514.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
