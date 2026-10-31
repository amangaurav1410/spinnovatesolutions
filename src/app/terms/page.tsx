import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileCheck } from "lucide-react";
import { Badge } from "@/ui/Badge";

export const metadata: Metadata = {
  title: "Terms of Service | SP Innovate Solutions",
  description:
    "Terms of service, engineering deliverables, and engagement terms for SP Innovate Solutions clients.",
};

export default function TermsPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline mb-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="space-y-3">
          <Badge variant="blue" size="md">
            Legal Terms
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            Enterprise Master Terms of Service
          </h1>
          <p className="text-xs font-mono text-slate-500">
            Effective Date: October 2026 · SP Innovate Solutions Inc.
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              1. Engagement & Statements of Work (SOW)
            </h2>
            <p>
              These Terms of Service govern all architectural assessments,
              engineering services, and consultation deliverables provided by SP
              Innovate Solutions. Specific project scopes, milestones, and
              financial terms are detailed in mutually executed Statements of
              Work (SOW).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              2. Intellectual Property & Code Ownership
            </h2>
            <p>
              Unless explicitly negotiated otherwise in writing:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Client Deliverables:</strong> All custom code, OpenAPI
                specifications, schema mappings, and Terraform configurations
                created specifically for your project become the exclusive
                property of the client upon final milestone payment.
              </li>
              <li>
                <strong>Zero Vendor Lock-In:</strong> We deliver fully
                documented, automated repositories that your internal engineering
                teams can independently maintain and scale.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              3. Service Level Agreements (SLAs) & Uptime
            </h2>
            <p>
              Uptime guarantees and incident response times (such as our 99.99%
              production availability and 15-minute critical severity SLA) are
              formalized in our dedicated Enterprise Support Addendums.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              4. Governing Law
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with
              the laws of New South Wales, Australia, without regard to its conflict
              of law principles.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

