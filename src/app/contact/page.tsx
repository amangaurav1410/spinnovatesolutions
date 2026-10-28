import * as React from "react";
import type { Metadata } from "next";
import { Badge } from "@/ui/Badge";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { CalBooking } from "@/components/contact/CalBooking";

export const metadata: Metadata = {
  title: "Contact Us & Book Consultation | SP Innovate Solutions",
  description:
    "Schedule an architecture consultation or connect directly with SP Innovate Solutions senior integration engineers.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-grid-slate border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="blue" size="md">
            Direct Engineering Access
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight">
            Let's Engineer Your Connected Enterprise
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have a question about legacy migrations, custom API connectors, or
            streaming pipelines? Our Principal Architects respond within 24 hours.
          </p>
        </div>
      </section>

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

