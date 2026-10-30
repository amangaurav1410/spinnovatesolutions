"use client";

import * as React from "react";
import Link from "next/link";
import {
  Network,
  Cloud,
  Cpu,
  Database,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/ui/Badge";
import { Card, CardTitle, CardDescription } from "@/ui/Card";

export function Pillars() {
  const pillars = [
    {
      icon: <Network className="h-6 w-6 text-blue-600" />,
      title: "Integration & Business Analysis",
      badge: "Flagship Primary Service",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      description:
        "End-to-end business process modeling, requirement engineering, and robust API & middleware architectures connecting complex systems.",
      features: [
        "Strategic requirements & BPMN 2.0 mapping",
        "MuleSoft, Boomi & custom connectors",
        "OAuth2, mTLS & JWT security governance",
        "Dead-letter queues & automated retries",
      ],
      link: "/services/integration-business-analyst",
      tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      icon: <Cloud className="h-6 w-6 text-teal-600" />,
      title: "Cloud Migration & DevOps",
      badge: "Multi-Cloud",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      description:
        "Modernize monolithic hosting with resilient Kubernetes clusters, multi-region AWS/Azure environments, and GitOps CI/CD.",
      features: [
        "Zero-downtime database cutovers",
        "Infrastructure as Code via Terraform",
        "Automated CI/CD deployment pipelines",
        "24/7 Datadog & Prometheus APM",
      ],
      link: "/services/cloud-devops",
      tagColor: "bg-teal-50 text-teal-700 border-teal-200",
    },
    {
      icon: <Cpu className="h-6 w-6 text-indigo-600" />,
      title: "ERP, CRM & Legacy Modernization",
      badge: "Strangler Pattern",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      description:
        "Safely deconstruct mainframe, AS/400, and legacy databases into scalable microservices without halting ongoing business.",
      features: [
        "Real-time SAP S/4HANA & Salesforce sync",
        "Legacy SQL Server/Oracle to Cloud Spanner",
        "Decoupled asynchronous message buses",
        "Continuous automated regression audits",
      ],
      link: "/services/legacy-modernization",
      tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    {
      icon: <Database className="h-6 w-6 text-emerald-600" />,
      title: "Real-Time Data Pipelines & BI",
      badge: "Streaming & AI",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      description:
        "Petabyte-scale event streaming and automated dbt transformations delivering live operational intelligence and AI-ready feeds.",
      features: [
        "Apache Kafka & Confluent cluster streaming",
        "Snowflake & BigQuery lakehouse modeling",
        "Instant PowerBI & Looker semantic layer",
        "HIPAA & GDPR strict data masking",
      ],
      link: "/services/data-pipelines",
      tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="blue" size="md">
            Core Integration Pillars
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Architected for Complexity. Engineered for Speed.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Every enterprise ecosystem is unique. We provide full-lifecycle
            engineering across the four pillars of modern digital connectivity.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Visual Imagery Banner */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-black/30" />
                  
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 backdrop-blur-md shadow-xs">
                      {pillar.badge}
                    </span>
                    <div className="p-2 rounded-xl bg-white/95 text-slate-900 shadow-xs">
                      {pillar.icon}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800 mb-6">
                    {pillar.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium"
                      >
                        <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                <Link
                  href={pillar.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all"
                >
                  Explore Architectural Specifications
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
