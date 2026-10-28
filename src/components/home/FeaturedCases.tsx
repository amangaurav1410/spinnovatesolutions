"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Badge } from "@/ui/Badge";
import { caseStudiesData } from "@/data/caseStudies";

export function FeaturedCases() {
  const featured = caseStudiesData.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 relative bg-white dark:bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <Badge variant="emerald" size="md">
              Proven Enterprise ROI
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Real-World Implementation Case Studies
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Explore how global organizations replaced rigid legacy debt with
              scalable, zero-downtime integration fabrics.
            </p>
          </div>
          <div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Browse All Case Studies ({caseStudiesData.length})
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featured.map((study) => (
            <div
              key={study.id}
              className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Industry Case Study Imagery */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 backdrop-blur-md shadow-xs">
                      {study.industry}
                    </span>
                    <span className="text-xs font-mono font-bold text-white px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md">
                      {study.duration}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-bold uppercase tracking-wider">
                    {study.client}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 mb-6">
                    {study.summary}
                  </p>

                  {/* Key ROI Stats */}
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 mb-6">
                    {study.results.slice(0, 2).map((res, rIdx) => (
                      <div key={rIdx}>
                        <div className="text-lg font-black text-blue-600 dark:text-blue-400 font-mono">
                          {res.value}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1 font-medium">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {study.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 mt-2">
                <Link
                  href={`/case-studies#${study.id}`}
                  className="flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline pt-4"
                >
                  <span>Read Full Architecture Breakdown</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
