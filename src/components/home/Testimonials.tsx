"use client";

import * as React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { Badge } from "@/ui/Badge";
import { Card } from "@/ui/Card";
import { testimonialsData } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/60 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="blue" size="md">
            Customer Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Trusted by Enterprise Technology Leaders
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Hear directly from the Chief Technology Officers and VP of
            Engineering leaders who partnered with SP Innovate Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.slice(0, 3).map((item) => (
            <Card
              key={item.id}
              hoverEffect
              className="flex flex-col justify-between relative"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {item.highlightMetric}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 italic mb-6 leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-md">
                  {item.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-1">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

