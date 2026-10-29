import * as React from "react";
import type { Metadata } from "next";
import { Badge } from "@/ui/Badge";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { CtaBanner } from "@/components/home/CtaBanner";
import { PageBanner } from "@/components/layout/PageBanner";

export const metadata: Metadata = {
  title: "Services & Capabilities | SP Innovate Solutions",
  description:
    "Comprehensive enterprise system integration, cloud architecture, legacy modernization, and real-time streaming data pipelines.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      <PageBanner
        title="Comprehensive Enterprise Integration & Cloud Engineering"
        subtitle="From modernizing aging monoliths to deploying sub-second event streaming fabrics and multi-cloud Kubernetes architectures."
        breadcrumbs={[{ label: "Services" }]}
        badge="Enterprise Solutions Catalog"
        accentColor="indigo"
        imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=80"
      />

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

