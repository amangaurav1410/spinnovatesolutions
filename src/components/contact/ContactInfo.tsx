"use client";

import * as React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/ui/Badge";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Direct Phone */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 w-fit mb-3">
            <Phone className="h-5 w-5" />
          </div>
          <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
            Enterprise Sales & Support
          </div>
          <a
            href="tel:0401496796"
            className="text-base font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block mt-1"
          >
            0401496796
          </a>
          <p className="text-xs text-slate-500 mt-1">
            Australian Support & Strategic Advisory
          </p>
        </div>

        {/* Corporate Email */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 w-fit mb-3">
            <Mail className="h-5 w-5" />
          </div>
          <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
            Architect Inquiries
          </div>
          <a
            href="mailto:info@spinnovatesolutions.com"
            className="text-base font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors block mt-1 truncate"
          >
            info@spinnovatesolutions.com
          </a>
          <p className="text-xs text-slate-500 mt-1">
            Guaranteed 24-hr engineer reply
          </p>
        </div>
      </div>

      {/* Headquarters Address & Hours */}
      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
              Australian Headquarters
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
              SP Innovate Solutions
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Sydney, Australia
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0 mt-0.5">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
              Operating Hours
            </div>
            <div className="text-xs font-semibold text-slate-900 dark:text-white mt-1">
              Monday – Friday: 8:30 AM – 5:30 PM AEST
            </div>
            <p className="text-xs text-slate-500">
              Active Integration Monitoring & Critical Support: 24/7/365
            </p>
          </div>
        </div>
      </div>

      {/* Styled Interactive Map Location Preview */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-100 dark:bg-slate-950 shadow-sm relative group">
        <div className="h-48 w-full bg-gradient-to-tr from-slate-900 via-slate-850 to-blue-950 p-6 flex flex-col justify-between text-white relative">
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 bg-grid-slate opacity-20 pointer-events-none" />

          <div className="flex items-center justify-between relative z-10">
            <Badge variant="blue" size="sm">
              HQ Location
            </Badge>
            <span className="text-xs font-mono text-cyan-300">
              33.8688° S, 151.2093° E
            </span>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2">
              <span className="flex h-3 w-3 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-bold text-sm">
                Sydney Central Business District
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Sydney, NSW · Australia
            </p>
          </div>
        </div>

        <div className="p-3 bg-white dark:bg-slate-900 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
          <span>In-person consultations by appointment</span>
          <a
            href="https://maps.google.com/?q=Sydney+Australia"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 dark:text-blue-400 font-semibold inline-flex items-center gap-1 hover:underline"
          >
            Open in Google Maps
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

