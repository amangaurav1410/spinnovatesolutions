"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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
  Activity,
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
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-white dark:bg-[#090d16] bg-grid-slate">
        {/* Ambient Gradient Highlights */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline, Value Proposition, CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Top Badge with energetic blue/teal styling */}
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 shadow-xs">
                  <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                  Enterprise System Integrations &amp; Cloud Architecture
                </span>
              </div>

              {/* High-Converting Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Accelerate Growth Through{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                  Intelligent System
                </span>{" "}
                Integrations
              </h1>

              {/* Value Proposition Subtext */}
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
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
                  className="w-full sm:w-auto shadow-md shadow-blue-600/20"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book a Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/services"
                  className="w-full sm:w-auto bg-white/80 dark:bg-slate-900/80 hover:bg-slate-50 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>

              {/* Trust signals */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-bold text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span>99.99% Integration Uptime</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span>SOC 2 &amp; HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="h-4 w-4 text-amber-500" />
                  <span>Zero-Downtime Cutover</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Enterprise Integration Topology with Real Image & Live Overlays */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glow backlight */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-teal-400 opacity-20 blur-xl"></div>

                <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
                  {/* Hero Graphic / Image Banner */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                      alt="Enterprise Cloud Datacenter & API Network"
                      className="w-full h-full object-cover object-center opacity-85 transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    {/* Live Badge Overlay */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-slate-900 backdrop-blur-md shadow-sm">
                        <Activity className="h-3.5 w-3.5 text-teal-600" />
                        Live Multi-Region Mesh
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/90 text-white font-black shadow-xs">
                        HEALTHY · 99.999%
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="text-white text-sm font-black tracking-tight">
                        Global Integration Fabric
                      </div>
                      <div className="text-teal-300 text-xs font-mono">
                        Connected: SAP S/4HANA ⇄ Kafka ⇄ Snowflake
                      </div>
                    </div>
                  </div>

                  {/* Connected Enterprise Architecture Topology */}
                  <div className="p-5 sm:p-6 space-y-3.5 bg-white dark:bg-slate-900">
                    {/* Node 1: Legacy ERP & Databases */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                          <Cpu className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                            Enterprise Core &amp; ERP
                          </div>
                          <div className="text-[11px] text-slate-500">
                            SAP S/4HANA · Oracle DB · AS400
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-bold">
                        CDC Ingest
                      </span>
                    </div>

                    {/* Animated Connection Bridge Line */}
                    <div className="flex items-center justify-center gap-2 py-0.5">
                      <div className="h-3 w-0.5 bg-gradient-to-b from-indigo-500 to-teal-500 animate-pulse" />
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                        EventBridge &amp; Kafka Pipeline
                      </span>
                      <div className="h-3 w-0.5 bg-gradient-to-b from-indigo-500 to-teal-500 animate-pulse" />
                    </div>

                    {/* Node 2: SP Innovate Smart Integration Gateway */}
                    <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/50 to-teal-50/50 dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-teal-950/30 border border-blue-200 dark:border-blue-800/80">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Network className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          <span className="text-xs font-bold text-slate-900 dark:text-white">
                            SP Resilient API Gateway
                          </span>
                        </div>
                        <span className="text-[10px] font-bold text-teal-700 dark:text-teal-400 bg-teal-100/80 dark:bg-teal-950/80 px-2 py-0.5 rounded-full border border-teal-200 dark:border-teal-800">
                          Sub-15ms Latency
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                        <div className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                          <div className="text-[10px] text-slate-500 font-medium">Latency</div>
                          <div className="text-xs font-black text-emerald-600 dark:text-emerald-400 font-mono">
                            12.4ms
                          </div>
                        </div>
                        <div className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                          <div className="text-[10px] text-slate-500 font-medium">Throughput</div>
                          <div className="text-xs font-black text-blue-600 dark:text-blue-400 font-mono">
                            48.2k rps
                          </div>
                        </div>
                        <div className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                          <div className="text-[10px] text-slate-500 font-medium">Security</div>
                          <div className="text-xs font-black text-teal-600 dark:text-teal-400 font-mono">
                            mTLS/OAuth
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Node 3: Cloud Destinations */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <Cloud className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                            Multi-Cloud
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-500">
                          AWS, Azure, GCP Microservices
                        </p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <Database className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                            Lakehouse Sync
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-500">
                          Snowflake, BigQuery &amp; BI
                        </p>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1.5 font-medium">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        All 18 connectors active
                      </span>
                      <Link
                        href="/case-studies"
                        className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
                      >
                        See case study →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted-By Client & Ecosystem Partner Ticker */}
          <div className="mt-16 lg:mt-24 pt-8 border-t border-slate-200 dark:border-slate-800">
            <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-6">
              Empowering Enterprise Integrations Across Global Cloud Ecosystems
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/40 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-2xs hover:border-blue-400 transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
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
