import * as React from "react";
import type { Metadata } from "next";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/layout/PageBanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technologies | SP Innovate Solutions — Our Tech Ecosystem",
  description: "Explore the enterprise-grade technology stack, cloud platforms, and integration tools that power SP Innovate Solutions.",
};

const techCategories = [
  {
    name: "Cloud Platforms & Infrastructure",
    color: "blue",
    technologies: [
      {
        name: "Amazon Web Services (AWS)",
        logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=120&auto=format&fit=crop&q=80",
        description: "EKS, Lambda, RDS Aurora, S3, CloudFront, EventBridge, SQS, API Gateway.",
        certified: true,
      },
      {
        name: "Microsoft Azure",
        logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=120&auto=format&fit=crop&q=80",
        description: "AKS, Azure Functions, Cosmos DB, Azure DevOps, Event Grid, Hybrid Arc.",
        certified: true,
      },
      {
        name: "Google Cloud Platform",
        logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=120&auto=format&fit=crop&q=80",
        description: "GKE, Cloud Run, BigQuery, Pub/Sub, Apigee, Cloud Spanner.",
        certified: true,
      },
    ],
  },
  {
    name: "Integration & Enterprise Middleware",
    color: "indigo",
    technologies: [
      {
        name: "MuleSoft Anypoint Platform",
        logo: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=120&auto=format&fit=crop&q=80",
        description: "Enterprise iPaaS, DataWeave transformations, API Manager, runtime fabric.",
        certified: true,
      },
      {
        name: "Apache Kafka & Confluent",
        logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=120&auto=format&fit=crop&q=80",
        description: "High-throughput event streaming, Kafka Connect CDC, Schema Registry.",
        certified: false,
      },
      {
        name: "Enterprise iPaaS (Workato / Boomi)",
        logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&auto=format&fit=crop&q=80",
        description: "Low-latency webhook hubs, custom connectors, automated business recipes.",
        certified: true,
      },
    ],
  },
  {
    name: "Enterprise CRM & ERP Systems",
    color: "emerald",
    technologies: [
      {
        name: "Salesforce Platform",
        logo: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=120&auto=format&fit=crop&q=80",
        description: "Sales, Service, Platform Events, Apex REST APIs, composite batch sync.",
        certified: true,
      },
      {
        name: "SAP ERP & S/4HANA",
        logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
        description: "IDocs, BAPIs, RFC connections, OData services, SAP BTP integrations.",
        certified: false,
      },
      {
        name: "Microsoft Dynamics 365",
        logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=120&auto=format&fit=crop&q=80",
        description: "Dataverse Web API, Power Platform pipelines, dual-write synchronization.",
        certified: true,
      },
    ],
  },
  {
    name: "Data Warehousing & Real-Time Analytics",
    color: "cyan",
    technologies: [
      {
        name: "Snowflake Data Cloud",
        logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=120&auto=format&fit=crop&q=80",
        description: "Multi-cluster shared data, Snowpipe streaming, secure data sharing.",
        certified: false,
      },
      {
        name: "Google BigQuery",
        logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=120&auto=format&fit=crop&q=80",
        description: "Serverless petabyte-scale data warehouse, BigQuery ML, real-time ingestion.",
        certified: true,
      },
      {
        name: "dbt (Data Build Tool)",
        logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=120&auto=format&fit=crop&q=80",
        description: "Modular SQL ELT pipelines, automated schema tests, data documentation.",
        certified: false,
      },
    ],
  },
  {
    name: "DevOps, SRE & Observability",
    color: "purple",
    technologies: [
      {
        name: "Kubernetes, Docker & Helm",
        logo: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=120&auto=format&fit=crop&q=80",
        description: "Declarative container orchestration, ingress controllers, autoscaling.",
        certified: true,
      },
      {
        name: "Terraform & OpenTofu",
        logo: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=120&auto=format&fit=crop&q=80",
        description: "Infrastructure as Code, state locking, reusable immutable module registries.",
        certified: true,
      },
      {
        name: "Datadog & OpenTelemetry",
        logo: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=120&auto=format&fit=crop&q=80",
        description: "Distributed tracing, synthetic monitoring, APM, automated alerting.",
        certified: false,
      },
    ],
  },
];

export default function TechnologiesPage() {
  return (
    <div>
      <PageBanner
        title="Our Enterprise Technology Ecosystem"
        subtitle="Platform-agnostic and cloud-native. We bridge best-in-breed frameworks, modern iPaaS fabrics, and legacy core systems."
        breadcrumbs={[{ label: "Technologies" }]}
        badge="Enterprise Tech Stack"
        accentColor="cyan"
        imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {techCategories.map((category) => (
          <div key={category.name}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">{category.name}</h2>
              <div className="flex-1 h-px bg-slate-200 dark:border-slate-800" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="glass-card card-3d rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0 border border-slate-200 dark:border-slate-700">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      {tech.certified && (
                        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 shadow-sm">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                          Certified Partner
                        </div>
                      )}
                    </div>
                    <h3 className="font-black text-slate-900 dark:text-white text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {tech.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Integration Consultation CTA */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
              Need a Custom System Connector?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Our architects design specialized adapters for proprietary on-premises software, AS400, mainframe cores, and modern REST/GraphQL APIs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25"
            >
              Request Stack Architecture Audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

