"use client";

import * as React from "react";
import { Modal } from "@/ui/Modal";
import { Button } from "@/ui/Button";
import { CheckCircle2, Sparkles, Send } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function ConsultationModal({
  isOpen,
  onClose,
  defaultService = "Enterprise System & API Integration",
}: ConsultationModalProps) {
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    service: defaultService,
    timeline: "Within 30 Days",
    message: "",
  });

  React.useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      if (defaultService) {
        setFormData((prev) => ({ ...prev, service: defaultService }));
      }
    }
  }, [isOpen, defaultService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formType: 'consultation_modal',
          recipientEmail: 'info@spinnovatesolutions.com',
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={submitted ? "Consultation Requested!" : "Schedule Architecture Consultation"}
      description={
        submitted
          ? "Our principal integration architect will review your requirements and reach out within 24 hours."
          : "Connect with our senior enterprise integration engineers for a 30-minute system audit and feasibility roadmap."
      }
    >
      {submitted ? (
        <div className="py-6 text-center space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-slate-900 dark:text-white text-lg">
              Thank You, {formData.name || "Colleague"}!
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
              A calendar invite and preparation checklist have been dispatched to{" "}
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {formData.email || "your work email"}
              </span>.
            </p>
          </div>
          <div className="pt-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              Close Window
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Full Name *
              </label>
              <input
                required
                type="text"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Work Email *
              </label>
              <input
                required
                type="email"
                placeholder="jane@enterprise.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Company Name *
              </label>
              <input
                required
                type="text"
                placeholder="Acme Corp"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Primary Specialty Needed
              </label>
              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Enterprise System & API Integration">
                  Enterprise API & Middleware
                </option>
                <option value="Cloud Architecture & DevOps Automation">
                  Cloud Architecture & DevOps
                </option>
                <option value="Legacy Infrastructure Modernization">
                  Legacy Modernization
                </option>
                <option value="Real-Time Data Pipelines & BI Integration">
                  Data Pipelines & Lakehouse
                </option>
                <option value="Custom SaaS Engineering & Maintenance">
                  Custom SaaS Engineering
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Project Context / Systems to Connect
            </label>
            <textarea
              rows={3}
              placeholder="e.g., Unifying SAP ERP with Salesforce and AWS EventBridge; moving monolithic Oracle database to cloud-native..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="glow"
              size="lg"
              className="w-full"
              isLoading={isSubmitting}
            >
              <Send className="h-4 w-4 mr-2" />
              Request Architecture Call
            </Button>
            <p className="mt-2 text-center text-xs text-slate-500">
              🔒 Strict NDA guaranteed. Zero obligation or sales spam.
            </p>
          </div>
        </form>
      )}
    </Modal>
  );
}

