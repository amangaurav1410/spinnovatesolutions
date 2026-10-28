import * as React from "react";
import type { Metadata } from "next";
import { Badge } from "@/ui/Badge";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Services & Capabilities | SP Innovate Solutions",
  description:
    "Comprehensive enterprise system integration, cloud architecture, legacy modernization, and real-time streaming data pipelines.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-grid-slate border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <Badge variant="blue" size="md">
            Enterprise Solutions Catalog
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight">
            Comprehensive Enterprise Integration & Cloud Engineering
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From modernizing aging monoliths to deploying sub-second event
            streaming fabrics and multi-cloud Kubernetes architectures.
          </p>
        </div>
      </section>

      {/* Services Deep Dive List */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <ServiceFaq />

      {/* Closing CTA */}
      <CtaBanner />
    </div>
  );
}

