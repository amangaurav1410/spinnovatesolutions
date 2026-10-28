import * as React from "react";
import type { Metadata } from "next";
import { Badge } from "@/ui/Badge";
import { CaseStudyGrid } from "@/components/case-studies/CaseStudyGrid";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Case Studies & ROI | SP Innovate Solutions",
  description:
    "Explore how SP Innovate Solutions engineered zero-downtime integrations, cloud migrations, and real-time streaming architectures for global enterprises.",
};

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-grid-slate border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <Badge variant="emerald" size="md">
            Verified Customer Transformations
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight">
            Proven Enterprise ROI & Architecture Deployments
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Real problems. Zero downtime. Measurable results. Discover how we
            helped leading organizations modernize their mission-critical stacks.
          </p>
        </div>
      </section>

      {/* Filterable Portfolio Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudyGrid />
        </div>
      </section>

      {/* Closing CTA */}
      <CtaBanner />
    </div>
  );
}

