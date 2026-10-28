"use client";

import * as React from "react";
import {
  Network,
  Cloud,
  Cpu,
  Database,
  Layers,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import { Card, CardTitle, CardDescription } from "@/ui/Card";
import { ServiceItem } from "@/data/services";
import { ConsultationModal } from "@/components/layout/ConsultationModal";

const iconMap: Record<string, React.ReactNode> = {
  Network: <Network className="h-6 w-6 text-blue-500" />,
  Cloud: <Cloud className="h-6 w-6 text-cyan-500" />,
  Cpu: <Cpu className="h-6 w-6 text-indigo-500" />,
  Database: <Database className="h-6 w-6 text-emerald-500" />,
  Layers: <Layers className="h-6 w-6 text-purple-500" />,
};

export function ServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <div
        id={service.id}
        className="scroll-mt-28 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-8 lg:p-10 shadow-lg relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main content col */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                {iconMap[service.iconName] || (
                  <Network className="h-6 w-6 text-blue-500" />
                )}
              </div>
              <div>
                <Badge variant="blue" size="sm">
                  {service.badge}
                </Badge>
                <div className="text-xs text-slate-500 font-mono mt-0.5">
                  Service Category 0{index + 1}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                {service.tagline}
              </p>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Core Capabilities & Architecture Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar info */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Performance Benchmark
              </div>
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-700 dark:text-blue-300">
                {service.metrics}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Deliverables Included
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {service.deliverables.map((item, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Tech Stack Ecosystem
              </div>
              <div className="flex flex-wrap gap-1.5">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="glow"
                size="md"
                onClick={() => setModalOpen(true)}
                className="w-full justify-center"
              >
                Request Quote & Scope
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={service.title}
      />
    </>
  );
}

