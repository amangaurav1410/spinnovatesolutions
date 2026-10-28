"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";
import { Badge } from "@/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/ui/Card";
import { caseStudiesData } from "@/data/caseStudies";

export function FeaturedCases() {
  const featured = caseStudiesData.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 relative">
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
            <Card
              key={study.id}
              hoverEffect
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="blue" size="sm">
                    {study.industry}
                  </Badge>
                  <span className="text-xs text-slate-500 font-mono font-medium">
                    {study.duration}
                  </span>
                </div>

                <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">
                  {study.client}
                </div>
                <CardTitle className="text-xl mb-3 line-clamp-2">
                  {study.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 mb-6">
                  {study.summary}
                </CardDescription>

                {/* Key ROI Stats */}
                <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 mb-6">
                  {study.results.slice(0, 2).map((res, rIdx) => (
                    <div key={rIdx}>
                      <div className="text-lg font-black text-blue-600 dark:text-blue-400 font-mono">
                        {res.value}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {study.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href={`/case-studies#${study.id}`}
                  className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>Read Full Architecture Breakdown</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

