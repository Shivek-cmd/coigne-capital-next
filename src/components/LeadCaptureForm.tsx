"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
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
            name: formData.name,
            email: formData.email,
            company: formData.company,
            message: formData.interest,
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
          Request a Confidential Consultation
        </h3>
        <p className="font-body text-ivory/60">
          Share your details and we&apos;ll arrange a private discussion about
          your governance needs.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" aria-label="Lead capture form">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="lead-name" className="sr-only">Full Name</label>
            <input
              id="lead-name"
              type="text"
              required
              placeholder="Full Name"
              autoComplete="name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full px-4 py-3 bg-surface-alt border border-edge rounded-lg text-ivory font-body focus:outline-none focus:border-gold/50 transition-colors placeholder:text-ivory/30"
            />
          </div>
          <div>
            <label htmlFor="lead-email" className="sr-only">Email Address</label>
            <input
              id="lead-email"
              type="email"
              required
              placeholder="Email Address"
              autoComplete="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full px-4 py-3 bg-surface-alt border border-edge rounded-lg text-ivory font-body focus:outline-none focus:border-gold/50 transition-colors placeholder:text-ivory/30"
            />
          </div>
        </div>
        <div>
          <label htmlFor="lead-company" className="sr-only">Company / Organization</label>
          <input
            id="lead-company"
            type="text"
            placeholder="Company / Organization"
            autoComplete="organization"
            value={formData.company}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, company: e.target.value }))
            }
            className="w-full px-4 py-3 bg-surface-alt border border-edge rounded-lg text-ivory font-body focus:outline-none focus:border-gold/50 transition-colors placeholder:text-ivory/30"
          />
        </div>
        <div>
          <label htmlFor="lead-interest" className="sr-only">Area of Interest</label>
          <select
            id="lead-interest"
            value={formData.interest}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, interest: e.target.value }))
            }
            className="w-full px-4 py-3 bg-surface-alt border border-edge rounded-lg text-ivory font-body focus:outline-none focus:border-gold/50 transition-colors"
          >
          <option value="">Select Area of Interest</option>
          <option value="holding-company">Holding Company & Ownership Design</option>
          <option value="governance">Shareholder & Family Governance</option>
          <option value="capital">Capital Planning & Financial Strategy</option>
          <option value="risk">Risk Governance</option>
          <option value="execution">Cross-Functional Execution</option>
          <option value="market-entry">Market Entry & Expansion</option>
          <option value="modernization">Operational Modernization</option>
          </select>
        </div>
        <Button
          type="submit"
          disabled={submitting}
          className="w-full bg-gold hover:bg-gold-hover text-obsidian font-body font-medium py-6"
        >
          {submitting ? "Submitting..." : "Request Consultation"}
          {!submitting && <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />}
        </Button>
      </form>
    </div>
  );
}
