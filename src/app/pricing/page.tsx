import * as React from "react";
import type { Metadata } from "next";
import { CheckCircle2, Zap, Building2, Rocket, ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/layout/PageBanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | SP Innovate Solutions",
  description: "Transparent, results-driven pricing for enterprise integrations, cloud migrations, and custom software development.",
};

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "$4,999",
    period: "/month",
    description: "For growing companies starting their integration & automation journey.",
    color: "blue",
    features: [
      "Up to 3 API integrations",
      "Single cloud environment (AWS or Azure)",
      "Dedicated integration engineer (20h/mo)",
      "Monitoring & alerting dashboard",
      "99.5% uptime SLA",
      "Email & chat support (8x5)",
      "Monthly architecture review",
      "Basic CI/CD pipeline setup",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    icon: Rocket,
    price: "$12,999",
    period: "/month",
    description: "For scaling enterprises with complex multi-system integration needs.",
    color: "indigo",
    features: [
      "Up to 15 API integrations",
      "Multi-cloud environments (AWS + Azure)",
      "Dedicated team (2 engineers, 80h/mo)",
      "Real-time data pipeline setup",
      "99.9% uptime SLA with failover",
      "Priority support (16x7)",
      "Weekly architecture reviews",
      "Kafka / event streaming setup",
      "Custom connector development",
      "SOC 2 compliance advisory",
    ],
    cta: "Choose Growth",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "Custom",
    period: "",
    description: "For large organizations requiring full-scale digital & cloud transformation.",
    color: "emerald",
    features: [
      "Unlimited integrations",
      "Full multi-cloud strategy (AWS+Azure+GCP)",
      "Dedicated team (5+ engineers)",
      "Legacy modernization roadmap",
      "99.99% uptime SLA with DR",
      "24x7 on-call support & incident response",
      "Daily standups & dedicated PM",
      "ERP/CRM full integration suite (SAP, Salesforce)",
      "Custom microservices architecture",
      "Executive business reviews",
      "White-glove onboarding",
      "On-site workshops & training",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div>
      <PageBanner
        title="Transparent Pricing for Enterprise Results"
        subtitle="No hidden fees. No vendor lock-in. Just straightforward pricing aligned with your digital transformation trajectory."
        breadcrumbs={[{ label: "Pricing" }]}
        badge="Investment & Plans"
        accentColor="emerald"
        imageSrc="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&auto=format&fit=crop&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 flex flex-col card-3d ${
                  plan.popular
                    ? "border-2 border-blue-500 bg-gradient-to-b from-blue-50/70 to-white dark:from-blue-950/40 dark:to-slate-900 shadow-2xl shadow-blue-500/15 ring-2 ring-blue-500/20"
                    : "glass-card border border-slate-200 dark:border-slate-800"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                      plan.color === "blue"
                        ? "bg-blue-100 dark:bg-blue-950/60"
                        : plan.color === "indigo"
                        ? "bg-indigo-100 dark:bg-indigo-950/60"
                        : "bg-emerald-100 dark:bg-emerald-950/60"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        plan.color === "blue"
                          ? "text-blue-600"
                          : plan.color === "indigo"
                          ? "text-indigo-600"
                          : "text-emerald-600"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 dark:text-white text-lg">{plan.name}</h3>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-black text-slate-900 dark:text-white">{plan.price}</span>
                  <span className="text-slate-500 text-sm ml-1">{plan.period}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800 leading-relaxed">
                  {plan.description}
                </p>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          plan.color === "blue"
                            ? "text-blue-500"
                            : plan.color === "indigo"
                            ? "text-indigo-500"
                            : "text-emerald-500"
                        }`}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3.5 px-6 rounded-xl font-bold text-sm transition-all shadow-sm ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/25"
                      : "border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 bg-white dark:bg-slate-800/80"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-600 dark:text-slate-400">Everything you need to know about our billing and SLA terms</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Are there long-term locked contracts?",
                a: "No. Standard engagements operate on monthly rolling retainers. We earn your business continuously through real measurable ROI.",
              },
              {
                q: "What happens if we need extra integrations outside the tier?",
                a: "Additional integrations can be added as simple modular add-ons without requiring a full tier upgrade.",
              },
              {
                q: "Do you offer fixed-price project quotes?",
                a: "Yes! For targeted migrations, one-off system bridges, or architectural audits, we provide fixed-scope milestones.",
              },
              {
                q: "Where will all form inquiries & quotes be routed?",
                a: "All architecture inquiries and consultation requests are transmitted directly to our principal engineers at info@spinnovatesolutions.com with guaranteed 24-hour response times.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="glass-card rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6"
              >
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-base">{q}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:underline"
            >
              Have a custom enterprise RFP requirement? Let&apos;s talk
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

