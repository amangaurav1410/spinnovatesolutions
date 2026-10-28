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
  Layers,
} from "lucide-react";
import { Badge } from "@/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/ui/Card";

export function Pillars() {
  const pillars = [
    {
      icon: <Network className="h-6 w-6 text-blue-500" />,
      title: "API & Middleware Fabrics",
      badge: "Core Architecture",
      description:
        "Unified REST, GraphQL, and event-driven API gateways connecting disparate applications with guaranteed sub-second delivery.",
      features: [
        "MuleSoft, Boomi & custom connectors",
        "OAuth2, mTLS & JWT security governance",
        "Dead-letter queues & automated retries",
        "OpenAPI specs & developer portals",
      ],
      link: "/services#api-middleware",
      accent: "from-blue-500/20 to-transparent",
    },
    {
      icon: <Cloud className="h-6 w-6 text-cyan-500" />,
      title: "Cloud Migration & DevOps",
      badge: "Multi-Cloud",
      description:
        "Modernize monolithic hosting with resilient Kubernetes clusters, multi-region AWS/Azure environments, and GitOps CI/CD.",
      features: [
        "Zero-downtime database cutovers",
        "Infrastructure as Code via Terraform",
        "Automated CI/CD deployment pipelines",
        "24/7 Datadog & Prometheus APM",
      ],
      link: "/services#cloud-devops",
      accent: "from-cyan-500/20 to-transparent",
    },
    {
      icon: <Cpu className="h-6 w-6 text-indigo-500" />,
      title: "ERP, CRM & Legacy Modernization",
      badge: "Strangler Pattern",
      description:
        "Safely deconstruct mainframe, AS/400, and legacy databases into scalable microservices without halting ongoing business.",
      features: [
        "Real-time SAP S/4HANA & Salesforce sync",
        "Legacy SQL Server/Oracle to Cloud Spanner",
        "Decoupled asynchronous message buses",
        "Continuous automated regression audits",
      ],
      link: "/services#legacy-modernization",
      accent: "from-indigo-500/20 to-transparent",
    },
    {
      icon: <Database className="h-6 w-6 text-emerald-500" />,
      title: "Real-Time Data Pipelines & BI",
      badge: "Streaming & AI",
      description:
        "Petabyte-scale event streaming and automated dbt transformations delivering live operational intelligence and AI-ready feeds.",
      features: [
        "Apache Kafka & Confluent cluster streaming",
        "Snowflake & BigQuery lakehouse modeling",
        "Instant PowerBI & Looker semantic layer",
        "HIPAA & GDPR strict data masking",
      ],
      link: "/services#data-pipelines",
      accent: "from-emerald-500/20 to-transparent",
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="blue" size="md">
            Core Integration Pillars
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Architected for Complexity. Engineered for Speed.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Every enterprise ecosystem is unique. We provide full-lifecycle
            engineering across the four pillars of modern digital connectivity.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <Card
              key={idx}
              hoverEffect
              className="relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Subtle top corner gradient accent */}
              <div
                className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${pillar.accent} rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`}
              />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                    {pillar.icon}
                  </div>
                  <Badge variant="default" size="sm">
                    {pillar.badge}
                  </Badge>
                </div>

                <CardTitle className="text-2xl mb-3">{pillar.title}</CardTitle>
                <CardDescription className="text-base mb-6 leading-relaxed">
                  {pillar.description}
                </CardDescription>

                <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 mb-6">
                  {pillar.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href={pillar.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all"
                >
                  Explore Architectural Specifications
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

