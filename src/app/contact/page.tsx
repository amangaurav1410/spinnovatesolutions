import * as React from "react";
import type { Metadata } from "next";
import { Badge } from "@/ui/Badge";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { CalBooking } from "@/components/contact/CalBooking";
import { PageBanner } from "@/components/layout/PageBanner";

export const metadata: Metadata = {
  title: "Contact Us & Book Consultation | SP Innovate Solutions",
  description:
    "Schedule an architecture consultation or connect directly with SP Innovate Solutions senior integration engineers.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <PageBanner
        title="Let's Engineer Your Connected Enterprise"
        subtitle="Have a question about legacy migrations, custom API connectors, or streaming pipelines? All inquiries go directly to our architects at info@spinnovatesolutions.com."
        breadcrumbs={[{ label: "Contact" }]}
        badge="Direct Engineering Access"
        accentColor="blue"
        imageSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&auto=format&fit=crop&q=80"
      />

      {/* Main Form and Contact Details Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Comprehensive Consultation Form */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
                <div className="mb-6 space-y-1">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Submit Project Parameters
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    Fill out the scope details below for a customized architectural
                    assessment and budget estimate.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Right Column: Instant Scheduler + Direct Info Cards */}
            <div className="lg:col-span-5 space-y-8">
              {/* Architecture Consultation Image Card */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md h-44">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                  alt="Enterprise Architecture Session with Principal Engineers"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <div className="text-xs font-mono text-teal-300 font-bold uppercase">
                    30-Minute Zero-Obligation Audit
                  </div>
                  <div className="text-sm font-bold mt-0.5">
                    Speak directly with a Senior Integration Engineer
                  </div>
                </div>
              </div>

              {/* Instant Call Scheduler */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Option B: Instant Calendar Scheduling
                </h3>
                <CalBooking />
              </div>

              {/* Direct Info & Map */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Direct Communications & Headquarters
                </h3>
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

