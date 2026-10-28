"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
  Network,
  Cloud,
  Database,
  Cpu,
  Zap,
} from "lucide-react";
import { Button } from "@/ui/Button";
import { Badge } from "@/ui/Badge";
import { ConsultationModal } from "@/components/layout/ConsultationModal";

export function Hero() {
  const [consultOpen, setConsultOpen] = React.useState(false);

  const partners = [
    { name: "Amazon Web Services", tech: "AWS Cloud" },
    { name: "Microsoft Azure", tech: "Azure Cloud" },
    { name: "Google Cloud Platform", tech: "Google Cloud" },
    { name: "MuleSoft", tech: "Anypoint Platform" },
    { name: "Salesforce", tech: "CRM Integration" },
    { name: "Apache Kafka", tech: "Event Streaming" },
    { name: "Snowflake", tech: "Data Lakehouse" },
    { name: "Datadog", tech: "24/7 APM" },
  ];

  return (
    <>
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-grid-slate">
        {/* Radial Glow Gradient */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline, Value Proposition, CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Top Badge */}
              <div className="inline-flex items-center gap-2">
                <Badge variant="blue" size="md">
                  <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                  Enterprise System Integrations & Cloud Architecture
                </Badge>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Accelerate Growth Through{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                  Intelligent System
                </span>{" "}
                Integrations
              </h1>

              {/* Subtext */}
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We bridge legacy systems with modern cloud ecosystems, resilient
                microservices, and automated data pipelines. Eliminate operational
                silos with enterprise-grade APIs engineered for zero downtime.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  variant="glow"
                  size="lg"
                  onClick={() => setConsultOpen(true)}
                  className="w-full sm:w-auto"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book a Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/services"
                  className="w-full sm:w-auto"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>

              {/* Trust signals */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-semibold text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>99.99% Integration Uptime</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-blue-500" />
                  <span>SOC 2 & HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="h-4 w-4 text-amber-500" />
                  <span>Zero-Downtime Cutover</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive System Integration Topology Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative glow backing */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20 blur-xl"></div>

                <div className="relative rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl">
                  {/* Card Header with Status */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="flex h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                        SP Unified Integration Bus
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                      LIVE · 0ms Loss
                    </span>
                  </div>

                  {/* Connected Enterprise Architecture Topology */}
                  <div className="py-6 space-y-4">
                    {/* Node 1: Legacy ERP & Databases */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
                          <Cpu className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-800 dark:text-slate-100">
                            Legacy ERP & Mainframe
                          </div>
                          <div className="text-[11px] text-slate-500">
                            SAP S/4HANA · Oracle DB · AS400
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">
                        CDC Ingest
                      </span>
                    </div>

                    {/* Animated Connection Bridge Line */}
                    <div className="flex items-center justify-center gap-2 py-1">
                      <div className="h-4 w-0.5 bg-gradient-to-b from-indigo-500 to-blue-500 animate-pulse" />
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                        EventBridge & Kafka Stream
                      </span>
                      <div className="h-4 w-0.5 bg-gradient-to-b from-indigo-500 to-blue-500 animate-pulse" />
                    </div>

                    {/* Node 2: SP Innovate Smart Integration Gateway */}
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-cyan-500/10 border border-blue-500/40 relative overflow-hidden">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Network className="h-4 w-4 text-blue-500" />
                          <span className="text-xs font-bold text-slate-900 dark:text-white">
                            SP Resilient API Gateway
                          </span>
                        </div>
                        <Badge variant="blue" size="sm">
                          99.999% SLA
                        </Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                        <div className="p-1.5 rounded-lg bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                          <div className="text-[10px] text-slate-500">Latency</div>
                          <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                            12.4ms
                          </div>
                        </div>
                        <div className="p-1.5 rounded-lg bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                          <div className="text-[10px] text-slate-500">Throughput</div>
                          <div className="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">
                            48.2k rps
                          </div>
                        </div>
                        <div className="p-1.5 rounded-lg bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                          <div className="text-[10px] text-slate-500">Security</div>
                          <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 font-mono">
                            mTLS/OAuth
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Animated Connection Bridge Line */}
                    <div className="flex items-center justify-center gap-2 py-1">
                      <div className="h-4 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 animate-pulse" />
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                        Zero-Latency Sync
                      </span>
                      <div className="h-4 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 animate-pulse" />
                    </div>

                    {/* Node 3: Cloud Destinations & SaaS */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                        <div className="flex items-center gap-2 mb-1">
                          <Cloud className="h-3.5 w-3.5 text-cyan-500" />
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                            Multi-Cloud
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500">
                          AWS, Azure, GCP Microservices
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                        <div className="flex items-center gap-2 mb-1">
                          <Database className="h-3.5 w-3.5 text-emerald-500" />
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                            Data Lakehouse
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500">
                          Snowflake, BigQuery & BI
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      All 18 connectors healthy
                    </span>
                    <Link
                      href="/case-studies"
                      className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                    >
                      See architecture case study →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted-By Client & Ecosystem Partner Ticker */}
          <div className="mt-16 lg:mt-24 pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
            <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-6">
              Empowering Enterprise Integrations Across Global Cloud Ecosystems
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-800/60 bg-white/40 dark:bg-slate-900/40 text-xs font-bold text-slate-700 dark:text-slate-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  {partner.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={consultOpen}
        onClose={() => setConsultOpen(false)}
      />
    </>
  );
}

