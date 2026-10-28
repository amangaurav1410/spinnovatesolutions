"use client";

import * as React from "react";
import { Shield, Zap, TrendingUp, Clock, CheckCircle } from "lucide-react";

export function Stats() {
  const stats = [
    {
      value: "99.99%",
      label: "Uptime SLA Guarantee",
      description: "Zero single point of failure multi-region deployments",
      icon: <Shield className="h-5 w-5 text-blue-500" />,
    },
    {
      value: "150+",
      label: "Enterprise Integrations",
      description: "Delivered for Fortune 500 & high-growth scale-ups",
      icon: <Zap className="h-5 w-5 text-amber-500" />,
    },
    {
      value: "40%",
      label: "Operational Efficiency Gain",
      description: "Reduction in manual sync overhead & reconciliation lag",
      icon: <TrendingUp className="h-5 w-5 text-emerald-500" />,
    },
    {
      value: "< 15ms",
      label: "Average API Latency",
      description: "Sub-second event streaming with Kafka & gRPC",
      icon: <Clock className="h-5 w-5 text-cyan-500" />,
    },
  ];

  return (
    <section className="py-14 border-y border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                  {stat.icon}
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  Verified
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 font-bold text-sm text-slate-800 dark:text-slate-200">
                {stat.label}
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

