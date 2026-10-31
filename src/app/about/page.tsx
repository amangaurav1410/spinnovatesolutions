import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  Target,
  Eye,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Lock,
  Cpu,
  Globe2,
} from "lucide-react";
import { Badge } from "@/ui/Badge";
import { Card, CardTitle, CardDescription } from "@/ui/Card";
import { teamData } from "@/data/team";
import { partnersData } from "@/data/partners";
import { CtaBanner } from "@/components/home/CtaBanner";
import { PageBanner } from "@/components/layout/PageBanner";

export const metadata: Metadata = {
  title: "About Us | SP Innovate Solutions",
  description:
    "Learn about SP Innovate Solutions, our mission, core engineering principles, leadership team, and enterprise technology partner ecosystem.",
};

export default function AboutPage() {
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description:
        "Established by principal integration architects in Sydney, Australia with a mission to solve brittle enterprise data silos.",
    },
    {
      year: "2020",
      title: "Cloud & Kubernetes Expansion",
      description:
        "Expanded multi-cloud migration practices across AWS and Azure, delivering zero-downtime cutovers for leading Australian enterprises.",
    },
    {
      year: "2022",
      title: "Security & Privacy Compliance",
      description:
        "Achieved comprehensive Australian Privacy Principles (APP), APRA CPS 234 and SOC 2 Type II accreditations, scaling to 75+ active enterprise clients.",
    },
    {
      year: "2024",
      title: "Real-Time Streaming & AI Pipelines",
      description:
        "Pioneered petabyte-scale Apache Kafka and Snowflake lakehouse streaming practices for real-time operational analytics across Australia.",
    },
    {
      year: "Present",
      title: "150+ Enterprise Integrations",
      description:
        "Operating as a premier Australian business integration partner with a verified 99.99% uptime track record.",
    },
  ];

  const coreValues = [
    {
      icon: <Lock className="h-6 w-6 text-blue-600" />,
      title: "Security-First Mindset",
      description:
        "We treat security not as an afterthought, but as the fundamental substrate. Zero-trust mTLS, field-level KMS encryption, and audit logs are built into every connector.",
    },
    {
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      title: "Zero-Downtime Guarantee",
      description:
        "Business cannot stop while engineering updates. We architect every migration with parallel verification and automated blue-green cutovers.",
    },
    {
      icon: <Cpu className="h-6 w-6 text-teal-600" />,
      title: "Scalability by Design",
      description:
        "We build systems engineered for tomorrow's 10x traffic spikes—relying on idempotent message queues, decoupled microservices, and auto-scaling clusters.",
    },
    {
      icon: <Eye className="h-6 w-6 text-emerald-600" />,
      title: "Radical Transparency",
      description:
        "No vendor lock-in. Full source code, complete OpenAPI documentation, and Terraform infrastructure files belong entirely to our clients.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white dark:bg-[#090d16]">
      <PageBanner
        title="Pioneering Resilient Digital Infrastructure for Global Enterprises"
        subtitle="SP Innovate Solutions was built to solve the hardest problem in modern IT: unifying legacy core systems with modern cloud technology with zero downtime."
        breadcrumbs={[{ label: "About Us" }]}
        badge="Our Purpose & Heritage"
        accentColor="blue"
        imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Headquarters & Engineering Lab Visual Spotlight */}
      <section className="py-12 bg-slate-50/60 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 h-80 sm:h-96">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="SP Innovate Solutions Engineering Headquarters in Sydney, Australia"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-slate-900 backdrop-blur-md">
                  Sydney, Australia HQ
                </span>
                <h3 className="text-2xl sm:text-3xl font-black mt-2">
                  Where Mission-Critical Architecture is Engineered
                </h3>
              </div>
              <div className="text-xs font-mono text-teal-300 bg-slate-900/80 px-3 py-1.5 rounded-lg backdrop-blur-md font-bold">
                150+ Enterprise Deployments Delivered Across Australia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="p-8 lg:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold uppercase text-xs tracking-wider">
                  <Target className="h-4 w-4" />
                  Our Mission
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  To eliminate enterprise data silos forever.
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                  We empower enterprises to innovate at the speed of modern
                  cloud startups without discarding the stable, decades-tested
                  systems that run their core business. We build the bridges
                  that make legacy assets modern, agile, and instantly accessible.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-500">
                Engineering Resilience · Zero Unplanned Downtime
              </div>
            </div>

            <div className="p-8 lg:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold uppercase text-xs tracking-wider">
                  <Globe2 className="h-4 w-4" />
                  Our Vision
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  A unified, real-time enterprise nervous system.
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                  We envision a corporate world where every business event—from
                  a customer checkout to an IoT logistics ping—flows instantly,
                  securely, and predictably to every system that needs it,
                  powering real-time decisions and automated actions.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-500">
                Event-Driven Architecture · Cloud Native Scale
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Principles */}
      <section className="py-16 lg:py-24 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="blue" size="md">
              Engineering Excellence
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Our Core Architectural Values
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              The non-negotiable principles that guide every line of code,
              infrastructure module, and security policy we produce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow space-y-3"
              >
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 w-fit">
                  {val.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="cyan" size="md">
              Milestone History
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              The Journey of SP Innovate Solutions
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              From an independent architecture consultancy to an internationally
              recognized enterprise system integration partner.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Center line */}
            <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? "sm:flex-row-reverse" : ""
                    } gap-6`}
                  >
                    {/* Node Dot */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-mono text-xs font-bold ring-4 ring-white dark:ring-slate-900 shadow-md z-10">
                      •
                    </div>

                    {/* Content Box */}
                    <div
                      className={`ml-12 sm:ml-0 sm:w-1/2 ${
                        isEven ? "sm:pr-10 sm:text-right" : "sm:pl-10"
                      }`}
                    >
                      <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                        <span className="text-xs font-black text-blue-600 dark:text-blue-400 font-mono">
                          {item.year}
                        </span>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Engineering Team with Real Photos */}
      <section className="py-16 lg:py-24 bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="blue" size="md">
              Leadership &amp; Engineering
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Meet the Architects Behind the Solutions
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Seasoned systems engineers, cloud certified leads, and security
              specialists bringing decades of collective enterprise experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <div className="text-sm font-bold">{member.name}</div>
                      <div className="text-xs text-teal-300 font-medium">
                        {member.role}
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800 mt-2 space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {member.specialty.map((spec) => (
                      <span
                        key={spec}
                        className="px-2 py-0.5 text-[10px] font-bold rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline pt-1"
                  >
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37z" />
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Ecosystem & Certified Partners */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="cyan" size="md">
              Technology Ecosystem
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Certified Enterprise Partner Network
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              We collaborate with and deploy the world's most trusted cloud,
              middleware, and data platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnersData.map((partner, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-2">
                    {partner.category}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {partner.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-bold text-teal-700 dark:text-teal-400 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-teal-600" />
                  Verified Engineering Practice
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CtaBanner />
    </div>
  );
}
