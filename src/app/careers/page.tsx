import * as React from "react";
import type { Metadata } from "next";
import { MapPin, Clock, ArrowRight, Heart, Globe, BookOpen, Coffee, ShieldCheck, Zap } from "lucide-react";
import { PageBanner } from "@/components/layout/PageBanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | SP Innovate Solutions — Join Our Engineering Team",
  description: "Join SP Innovate Solutions and architect the cloud integrations that power global enterprises. Remote-first, high-autonomy culture.",
};

const openRoles = [
  {
    title: "Principal Integration Architect",
    department: "Enterprise Architecture",
    location: "Remote / Hybrid (Bengaluru)",
    type: "Full-Time",
    level: "Staff / Principal",
    description: "Lead enterprise system integrations (SAP, Salesforce, MuleSoft, Kafka). Design mission-critical fault-tolerant bridges for global clients.",
    tags: ["Kafka", "MuleSoft", "AWS", "EDA", "System Design"],
  },
  {
    title: "Senior Cloud Infrastructure Engineer",
    department: "Cloud & DevOps",
    location: "Remote (Global)",
    type: "Full-Time",
    level: "Senior (5+ yrs)",
    description: "Architect multi-cloud topologies across AWS & Azure. Implement GitOps automation, Terraform modules, and EKS/AKS zero-trust security postures.",
    tags: ["AWS", "Terraform", "Kubernetes", "ArgoCD", "Docker"],
  },
  {
    title: "Real-Time Data Platform Engineer",
    department: "Data Engineering",
    location: "Remote",
    type: "Full-Time",
    level: "Mid-Senior (4+ yrs)",
    description: "Build streaming ETL workflows using Apache Spark, BigQuery, Snowflake, and dbt to process billions of telemetry records daily.",
    tags: ["Spark", "dbt", "BigQuery", "Snowflake", "Python"],
  },
  {
    title: "Full-Stack SaaS Platform Engineer",
    department: "Product Engineering",
    location: "Remote",
    type: "Full-Time",
    level: "Mid (3+ yrs)",
    description: "Craft modern, responsive client consoles and API monitoring interfaces using Next.js, TypeScript, Tailwind CSS, and Node.js microservices.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Node.js", "PostgreSQL"],
  },
];

const benefits = [
  { icon: Globe, title: "Remote-First Autonomy", description: "Work from anywhere in the world. Asynchronous workflows built around deep focus and trust." },
  { icon: Heart, title: "Comprehensive Wellness", description: "Premium health insurance, annual wellness allowances, and mental health resources." },
  { icon: BookOpen, title: "Continuous Learning Fund", description: "$2,500 annual budget for cloud certifications (AWS, GCP, Azure, CKA) and conferences." },
  { icon: Coffee, title: "Flexible Schedules", description: "Deliver results on your terms. No micromanagement, no artificial punch-cards." },
  { icon: Zap, title: "Modern Workstation Setup", description: "Top-tier MacBook Pro, 4K display stipend, and ergonomic home office allowance." },
  { icon: ShieldCheck, title: "Meaningful Equity", description: "Generous stock option plan so you directly share in the long-term enterprise value we create." },
];

export default function CareersPage() {
  return (
    <div>
      <PageBanner
        title="Engineer the Nervous System of Enterprise Tech"
        subtitle="We build high-throughput data bridges, cloud meshes, and mission-critical integration fabrics. Join our world-class engineering team."
        breadcrumbs={[{ label: "Careers" }]}
        badge="We are Hiring"
        accentColor="purple"
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=80"
      />

      {/* Perks / Benefits */}
      <div className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Why Top Engineers Thrive Here</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We empower engineers with ownership, cutting-edge tools, and high-impact enterprise challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="glass-card card-3d rounded-2xl p-6 border border-slate-200 dark:border-slate-800"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/60 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-black text-slate-900 dark:text-white mb-2 text-lg">{title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Roles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Open Architecture Positions</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Explore current engineering opportunities across cloud, distributed systems, and product.
            </p>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 w-fit">
            {openRoles.length} Open Positions Available
          </span>
        </div>

        <div className="space-y-4">
          {openRoles.map((role) => (
            <div
              key={role.title}
              className="glass-card card-3d group rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wide text-blue-600 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-full border border-blue-200/60 dark:border-blue-800/40">
                      {role.department}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200/60 dark:border-emerald-800/40">
                      {role.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2">
                    {role.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed max-w-3xl">
                    {role.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1.5 font-medium"><MapPin className="w-3.5 h-3.5 text-blue-500" />{role.location}</span>
                    <span className="flex items-center gap-1.5 font-medium"><Clock className="w-3.5 h-3.5 text-blue-500" />{role.level}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 group-hover:scale-105"
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* General Application Banner */}
        <div className="mt-14 glass-card rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 text-center relative overflow-hidden">
          <div className="max-w-xl mx-auto">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">Don&apos;t See Your Exact Stack?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm sm:text-base leading-relaxed">
              We are constantly seeking gifted architects and infrastructure developers. Send us your portfolio or GitHub profile.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:opacity-90 transition-all shadow-lg"
            >
              Submit Open Application <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

