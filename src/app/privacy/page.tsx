import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock } from "lucide-react";
import { Badge } from "@/ui/Badge";

export const metadata: Metadata = {
  title: "Privacy Policy | SP Innovate Solutions",
  description:
    "Privacy and data protection policies for SP Innovate Solutions enterprise integration services.",
};

export default function PrivacyPage() {
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
            Legal & Compliance
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            Enterprise Privacy & Data Protection Policy
          </h1>
          <p className="text-xs font-mono text-slate-500">
            Last Updated: October 2026 · SOC 2 Type II Certified Practice
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              1. Commitment to Data Confidentiality
            </h2>
            <p>
              SP Innovate Solutions Inc. ("SP Innovate", "we", "our") provides
              enterprise-grade system integrations, cloud infrastructure, and
              consulting services to corporate clients worldwide. Because our
              solutions interface with core enterprise databases, ERPs, and
              APIs, confidentiality, integrity, and availability of client data
              form the foundation of our engineering ethos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              2. Data We Process
            </h2>
            <p>
              When clients engage SP Innovate Solutions, data access is strictly
              governed by explicit, bilateral Non-Disclosure Agreements (NDAs)
              and Master Services Agreements (MSAs). We do not sell, rent, or
              monetize client telemetry, database records, or personal data.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>
                <strong>Architectural Metadata:</strong> Schema definitions, API
                specifications, and network topologies necessary to build custom
                connectors.
              </li>
              <li>
                <strong>Contact Information:</strong> Names, work emails,
                corporate phone numbers, and job titles provided via consultation
                requests.
              </li>
              <li>
                <strong>Telemetry & Logs:</strong> Synthetic health check data
                and APM metrics strictly utilized for SLA monitoring.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              3. Regulatory Compliance & Encryption Standards
            </h2>
            <p>
              All integration pipelines deployed by SP Innovate follow Zero-Trust
              principles:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>In-Transit Encryption:</strong> TLS 1.3 and mutual TLS
                (mTLS) with cryptographic certificate rotation.
              </li>
              <li>
                <strong>At-Rest Encryption:</strong> AES-256 with
                customer-controlled Key Management Service (KMS) keys.
              </li>
              <li>
                <strong>Certifications:</strong> Architectures are engineered to
                satisfy SOC 2 Type II, ISO 27001, HIPAA, and GDPR obligations.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              4. Contact Our Data Protection Officer
            </h2>
            <p>
              For formal compliance inquiries or Data Processing Addendum (DPA)
              requests, please reach out directly to our security compliance team
              at{" "}
              <a
                href="mailto:security@spinnovate.com"
                className="text-blue-600 dark:text-blue-400 font-bold underline"
              >
                security@spinnovate.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

