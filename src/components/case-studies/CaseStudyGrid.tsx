"use client";

import * as React from "react";
import {
  TrendingUp,
  Clock,
  ArrowRight,
  Quote,
  ShieldCheck,
  CheckCircle2,
  Filter,
} from "lucide-react";
import { Badge } from "@/ui/Badge";
import { Card, CardTitle, CardDescription } from "@/ui/Card";
import { caseStudiesData, CaseStudy } from "@/data/caseStudies";
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
              "px-5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer",
              selectedIndustry === ind
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 -translate-y-0.5"
                : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
            )}
          >
            {ind}
            {ind === "All" && ` (${caseStudiesData.length})`}
          </button>
        ))}
      </div>

      {/* Case Studies Detailed Cards */}
      <div className="space-y-12">
        {filtered.map((study) => (
          <div
            key={study.id}
            id={study.id}
            className="scroll-mt-28 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-lg relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Challenge & Solution */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="blue" size="sm">
                    {study.industry}
                  </Badge>
                  <span className="text-xs font-mono text-slate-500">
                    Client: {study.client}
                  </span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-xs text-slate-500 font-mono">
                    Timeline: {study.duration}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                  {study.title}
                </h3>

                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {study.summary}
                </p>

                {/* Challenge Block */}
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-slate-800 dark:text-slate-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">
                    The Challenge & Bottleneck
                  </div>
                  <p className="text-sm leading-relaxed">{study.challenge}</p>
                </div>

                {/* Solution Block */}
                <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-slate-800 dark:text-slate-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-1">
                    The SP Innovate Solution & Architecture
                  </div>
                  <p className="text-sm leading-relaxed">{study.solution}</p>
                </div>

                {/* Client Quote */}
                <div className="pt-2 flex items-start gap-3">
                  <Quote className="h-6 w-6 text-blue-500 shrink-0 mt-0.5 opacity-60" />
                  <div>
                    <p className="text-sm italic text-slate-700 dark:text-slate-300">
                      "{study.impactQuote}"
                    </p>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      — {study.authorTitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: ROI Metrics & Tech Stack */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                    Verified ROI & Performance Gains
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {study.results.map((res, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                      >
                        <div className="text-2xl font-black text-blue-600 dark:text-blue-400 font-mono">
                          {res.value}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Technologies Deployed
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {study.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" />
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

