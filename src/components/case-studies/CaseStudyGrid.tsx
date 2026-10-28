"use client";

import * as React from "react";
import {
  TrendingUp,
  Quote,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/ui/Badge";
import { caseStudiesData } from "@/data/caseStudies";
import { cn } from "@/lib/utils";

export function CaseStudyGrid() {
  const [selectedIndustry, setSelectedIndustry] = React.useState<string>("All");

  const industries = ["All", "FinTech", "E-commerce", "Logistics", "Healthcare", "SaaS"];

  const filtered =
    selectedIndustry === "All"
      ? caseStudiesData
      : caseStudiesData.filter((c) => c.industry === selectedIndustry);

  return (
    <div className="space-y-12">
      {/* Industry Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {industries.map((ind) => (
          <button
            key={ind}
            onClick={() => setSelectedIndustry(ind)}
            className={cn(
              "px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer",
              selectedIndustry === ind
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 -translate-y-0.5"
                : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-400"
            )}
          >
            {ind}
            {ind === "All" && ` (${caseStudiesData.length})`}
          </button>
        ))}
      </div>

      {/* Case Studies Detailed Cards with Imagery */}
      <div className="space-y-12">
        {filtered.map((study) => (
          <div
            key={study.id}
            id={study.id}
            className="scroll-mt-28 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg relative overflow-hidden"
          >
            {/* Top Case Study Header Image */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/95 text-slate-900 backdrop-blur-md shadow-xs">
                  {study.industry}
                </span>
                <span className="text-xs font-mono font-bold text-white px-3 py-1 rounded-md bg-slate-900/80 backdrop-blur-md">
                  Project Duration: {study.duration}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold">
                  Client: {study.client}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mt-1 leading-tight">
                  {study.title}
                </h3>
              </div>
            </div>

            {/* Content Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-8 sm:p-10">
              {/* Left Column: Challenge & Solution */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                  {study.summary}
                </p>

                {/* Challenge Block */}
                <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 text-slate-800 dark:text-slate-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-1.5">
                    The Challenge &amp; Operational Bottleneck
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution Block */}
                <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/40 text-slate-800 dark:text-slate-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-400 mb-1.5">
                    The SP Innovate Solution &amp; Architecture
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {study.solution}
                  </p>
                </div>

                {/* Client Quote */}
                <div className="pt-2 flex items-start gap-3">
                  <Quote className="h-6 w-6 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5 opacity-70" />
                  <div>
                    <p className="text-sm italic text-slate-700 dark:text-slate-300 font-medium">
                      "{study.impactQuote}"
                    </p>
                    <p className="text-xs font-bold text-slate-500 mt-1">
                      — {study.authorTitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: ROI Metrics & Tech Stack */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                    <TrendingUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    Verified ROI &amp; Performance Gains
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {study.results.map((res, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs"
                      >
                        <div className="text-2xl font-black text-blue-600 dark:text-blue-400 font-mono">
                          {res.value}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5 font-medium">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Technologies Deployed
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {study.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    Zero Unplanned Downtime During Cutover
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
