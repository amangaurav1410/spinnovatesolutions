import * as React from "react";
import type { Metadata } from "next";
import { Badge } from "@/ui/Badge";
import { CaseStudyGrid } from "@/components/case-studies/CaseStudyGrid";
import { CtaBanner } from "@/components/home/CtaBanner";
import { PageBanner } from "@/components/layout/PageBanner";

export const metadata: Metadata = {
  title: "Case Studies & ROI | SP Innovate Solutions",
  description:
    "Explore how SP Innovate Solutions engineered zero-downtime integrations, cloud migrations, and real-time streaming architectures for global enterprises.",
};

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col w-full">
      <PageBanner
        title="Proven Enterprise ROI & Architecture Deployments"
        subtitle="Real problems. Zero downtime. Measurable results. Discover how we helped leading organizations modernize their mission-critical stacks."
        breadcrumbs={[{ label: "Case Studies" }]}
        badge="Verified Customer Transformations"
        accentColor="emerald"
        imageSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&auto=format&fit=crop&q=80"
      />

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

