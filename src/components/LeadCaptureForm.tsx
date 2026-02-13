"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL;
    if (directusUrl) {
      try {
        await fetch(`${directusUrl}/items/form_submissions`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "lead_capture",
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
          }),
        });
      } catch {
        // fallback silently
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-gold mx-auto mb-4" />
        <h3 className="font-display text-2xl font-semibold text-ivory mb-2">
          Thank You
        </h3>
        <p className="font-body text-ivory/60">
          We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-ivory mb-3">
          Ready to Explore Your Options?
        </h3>
        <p className="font-body text-ivory/60">
          Share your details and we&apos;ll connect with you to discuss your
          governance and capital structure needs.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" aria-label="Lead capture form">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="lead-first-name" className="font-accent text-xs text-ivory/50 uppercase tracking-wider block mb-2">First Name</label>
            <input
              id="lead-first-name"
              type="text"
              required
              placeholder="John"
              autoComplete="given-name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, firstName: e.target.value }))
              }
              className="w-full px-4 py-3 bg-surface-alt border border-edge rounded-lg text-ivory font-body focus:outline-none focus:border-gold/50 transition-colors placeholder:text-ivory/30"
            />
          </div>
          <div>
            <label htmlFor="lead-last-name" className="font-accent text-xs text-ivory/50 uppercase tracking-wider block mb-2">Last Name</label>
            <input
              id="lead-last-name"
              type="text"
              required
              placeholder="Smith"
              autoComplete="family-name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, lastName: e.target.value }))
              }
              className="w-full px-4 py-3 bg-surface-alt border border-edge rounded-lg text-ivory font-body focus:outline-none focus:border-gold/50 transition-colors placeholder:text-ivory/30"
            />
          </div>
        </div>
        <div>
          <label htmlFor="lead-email" className="font-accent text-xs text-ivory/50 uppercase tracking-wider block mb-2">Email Address</label>
          <input
            id="lead-email"
            type="email"
            required
            placeholder="john@example.com"
            autoComplete="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="w-full px-4 py-3 bg-surface-alt border border-edge rounded-lg text-ivory font-body focus:outline-none focus:border-gold/50 transition-colors placeholder:text-ivory/30"
          />
        </div>
        <div>
          <label htmlFor="lead-company" className="font-accent text-xs text-ivory/50 uppercase tracking-wider block mb-2">Company / Organization</label>
          <input
            id="lead-company"
            type="text"
            placeholder="Your Company"
            autoComplete="organization"
            value={formData.company}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, company: e.target.value }))
            }
            className="w-full px-4 py-3 bg-surface-alt border border-edge rounded-lg text-ivory font-body focus:outline-none focus:border-gold/50 transition-colors placeholder:text-ivory/30"
          />
        </div>
        <div>
          <label htmlFor="lead-phone" className="font-accent text-xs text-ivory/50 uppercase tracking-wider block mb-2">Phone Number (Optional)</label>
          <input
            id="lead-phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
            }
            className="w-full px-4 py-3 bg-surface-alt border border-edge rounded-lg text-ivory font-body focus:outline-none focus:border-gold/50 transition-colors placeholder:text-ivory/30"
          />
        </div>
        <Button
          type="submit"
          disabled={submitting}
          className="w-full bg-gold hover:bg-gold-hover text-obsidian font-body font-medium py-6"
        >
          {submitting ? "Submitting..." : "Get Started"}
          {!submitting && <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />}
        </Button>
        <p className="text-center text-xs font-body text-ivory/40 mt-3">
          We respect your privacy. Your information is secure and will only be used to contact you about your inquiry.
        </p>
      </form>
    </div>
  );
}
