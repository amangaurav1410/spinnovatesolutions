"use client";

import * as React from "react";
import Link from "next/link";
import { Calendar, Phone, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/ui/Button";
import { ConsultationModal } from "@/components/layout/ConsultationModal";

export function CtaBanner() {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-blue-500/30">
            {/* Background glowing blobs */}
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-cyan-200">
                <Zap className="h-3.5 w-3.5 text-cyan-300" />
                Guaranteed 24-Hour Architect Response
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Ready to Modernize Your Enterprise Infrastructure?
              </h2>

              <p className="text-base sm:text-lg text-blue-100 max-w-2xl leading-relaxed">
                Connect directly with our Principal Solutions Architects for a
                zero-obligation, 30-minute system audit. We'll map out your
                endpoints, detect bottlenecks, and draft an integration blueprint.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 border-none font-bold shadow-lg"
                >
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  Schedule Architecture Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/contact"
                  className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
                >
                  View Direct Contacts
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-medium text-blue-200 border-t border-white/15">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-cyan-300" />
                  Strict Enterprise NDA Signed Prior to Call
                </span>
                <span>•</span>
                <span>Direct Access to Senior Integration Engineers</span>
                <span>•</span>
                <span>Zero Obligation or Sales Pressure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

