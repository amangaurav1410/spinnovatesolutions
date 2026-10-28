"use client";

import * as React from "react";
import {
  Search,
  Compass,
  GitMerge,
  Activity,
  CheckCircle2,
  FileText,
  ShieldAlert,
} from "lucide-react";
import { Badge } from "@/ui/Badge";
import { cn } from "@/lib/utils";

export function Workflow() {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    {
      id: 0,
      number: "01",
      title: "Discovery & Topology Audit",
      short: "Audit & Feasibility",
      icon: <Search className="h-5 w-5" />,
      description:
        "We dissect your existing infrastructure, data schemas, API contracts, and database bottlenecks. We map every legacy dependency and identify single points of failure.",
      deliverables: [
        "Comprehensive Systems Dependency Graph",
        "Data Silo & Latency Bottleneck Report",
        "Security & Regulatory Compliance Audit (SOC2/HIPAA)",
        "Zero-Downtime Migration Feasibility Strategy",
      ],
      tools: ["Datadog", "OpenAPI", "Wireshark", "Draw.io", "AWS Migration Hub"],
      timing: "Week 1 - 2",
    },
    {
      id: 1,
      number: "02",
      title: "Resilient Architecture & Contract Design",
      short: "Architecture Design",
      icon: <Compass className="h-5 w-5" />,
      description:
        "We draft standardized API schemas (OpenAPI/GraphQL), event payloads, idempotent retry policies, and dead-letter queue mechanics. Everything is verified before writing code.",
      deliverables: [
        "Enterprise API Gateway Blueprint",
        "Event-Driven Schema Registry (Avro/JSON Schema)",
        "Idempotency & Fault-Tolerance Matrix",
        "Automated Contract Testing Framework",
      ],
      tools: ["MuleSoft", "Kafka Schema Registry", "Postman", "Terraform", "Protobuf"],
      timing: "Week 3 - 4",
    },
    {
      id: 2,
      number: "03",
      title: "Secure Bridge & Parallel Cutover",
      short: "Build & Deploy",
      icon: <GitMerge className="h-5 w-5" />,
      description:
        "We build the middleware connectors and stream changes in real-time between systems using Change Data Capture (CDC). Legacy and cloud run in parallel until data parity is 100%.",
      deliverables: [
        "Microservices & Custom Gateway Connectors",
        "Bi-Directional Change Data Capture (CDC) Sync",
        "Automated Data Reconciliation Validator",
        "One-Click Zero-Downtime Traffic Switcher",
      ],
      tools: ["Debezium", "Go / Node.js", "Kubernetes", "AWS EventBridge", "Redis"],
      timing: "Week 5 - 8",
    },
    {
      id: 3,
      number: "04",
      title: "24/7 Observability & SLA Governance",
      short: "Continuous Ops",
      icon: <Activity className="h-5 w-5" />,
      description:
        "Post-cutover, we provide automated synthetic transactions, sub-second error alerts, and guaranteed 15-minute response times to guarantee 99.99% uptime.",
      deliverables: [
        "Distributed Distributed Tracing & APM Dashboard",
        "Automated Synthetic Health Probe Alerts",
        "Disaster Recovery & Failover Playbook",
        "24/7 SLA Engineering Response Coverage",
      ],
      tools: ["Datadog", "Grafana", "PagerDuty", "Prometheus", "OpenTelemetry"],
      timing: "Ongoing 24/7",
    },
  ];

  const current = steps[activeStep];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="cyan" size="md">
            Integration Lifecycle
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            How We Integrate Enterprise Systems
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A battle-tested 4-phase methodology designed to eliminate risk,
            guarantee zero downtime, and deliver measurable ROI.
          </p>
        </div>

        {/* Step Selector Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {steps.map((step) => {
            const isSelected = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={cn(
                  "flex items-center gap-3 p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer",
                  isSelected
                    ? "bg-white dark:bg-slate-850 border-blue-600 dark:border-blue-500 shadow-lg shadow-blue-500/10 -translate-y-0.5"
                    : "bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-500 hover:border-slate-300 dark:hover:border-slate-700"
                )}
              >
                <div
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black",
                    isSelected
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  )}
                >
                  {step.number}
                </div>
                <div className="truncate">
                  <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    Phase {step.number}
                  </div>
                  <div
                    className={cn(
                      "text-sm font-bold truncate",
                      isSelected
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-700 dark:text-slate-300"
                    )}
                  >
                    {step.short}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Step Details Panel */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-blue-600 dark:text-blue-400 font-mono">
                  {current.number}
                </span>
                <div>
                  <Badge variant="blue" size="sm">
                    {current.timing}
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
                    {current.title}
                  </h3>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {current.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <FileText className="h-4 w-4 text-blue-500" />
                  Key Architectural Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Tools Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 dark:bg-slate-850/70 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Phase Technology Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {current.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-700/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Zero Disruption Guarantee
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  All migrations feature automated parallel running and instant
                  rollback capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

