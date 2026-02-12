import type { Metadata } from "next";
import ScheduleConsultationClient from "./ScheduleConsultationClient";

export const metadata: Metadata = {
  title: "Schedule a Consultation - Confidential Advisory",
  description:
    "Schedule a confidential consultation with Coigne Capital Partners to discuss your cross-border governance, capital structuring, and advisory needs.",
  openGraph: {
    title: "Schedule a Consultation | Coigne Capital",
    description:
      "Request a private discussion about your governance and cross-border advisory needs.",
  },
  alternates: {
    canonical: "/schedule-consultation",
  },
};

export default function ScheduleConsultationPage() {
  return <ScheduleConsultationClient />;
}
