"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";
import { Button } from "@/ui/Button";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please provide a valid corporate email address"),
  phone: z.string().min(7, "Please provide a valid phone number"),
  company: z.string().min(2, "Company name is required"),
  serviceRequired: z.string().min(1, "Please select an integration service"),
  budget: z.string().min(1, "Please select an estimated budget"),
  timeline: z.string().min(1, "Please select a target timeline"),
  message: z
    .string()
    .min(10, "Please describe your systems and architecture goals (min 10 characters)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      serviceRequired: "Enterprise System & API Integration",
      budget: "$25,000 - $50,000",
      timeline: "Within 30 Days",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitting(false);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl border border-emerald-500/30 bg-emerald-500/5 text-center space-y-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white">
            Architecture Consultation Request Received!
          </h3>
          <p className="text-slate-600 dark:text-slate-300 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Thank you for reaching out. Our Principal Integration Architect has
            received your project parameters. We will review your legacy stack
            and contact you within 24 business hours.
          </p>
        </div>
        <div className="pt-2">
          <Button
            variant="outline"
            onClick={() => setSubmitted(false)}
            className="border-emerald-500/40 text-emerald-700 dark:text-emerald-400"
          >
            Submit Another Project Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            placeholder="Sarah Jenkins"
            {...register("fullName")}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Work Email */}
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
            Work Email *
          </label>
          <input
            type="email"
            placeholder="sarah@enterprise.com"
            {...register("email")}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            placeholder="+1 (555) 234-5678"
            {...register("phone")}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
            Company Name *
          </label>
          <input
            type="text"
            placeholder="Apex Technologies"
            {...register("company")}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.company && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.company.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Service Required */}
        <div className="sm:col-span-1">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
            Service Required *
          </label>
          <select
            {...register("serviceRequired")}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Enterprise System & API Integration">
              API & Middleware
            </option>
            <option value="Cloud Architecture & DevOps Automation">
              Cloud & DevOps
            </option>
            <option value="Legacy Infrastructure Modernization">
              Legacy Modernization
            </option>
            <option value="Real-Time Data Pipelines & BI Integration">
              Data Pipelines & BI
            </option>
            <option value="Custom SaaS Engineering & Maintenance">
              Custom SaaS Engineering
            </option>
          </select>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
            Project Budget *
          </label>
          <select
            {...register("budget")}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="$15,000 - $25,000">$15,000 - $25,000</option>
            <option value="$25,000 - $50,000">$25,000 - $50,000</option>
            <option value="$50,000 - $100,000">$50,000 - $100,000</option>
            <option value="$100,000+">$100,000+ (Enterprise)</option>
          </select>
        </div>

        {/* Timeline */}
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
            Target Timeline *
          </label>
          <select
            {...register("timeline")}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Immediate (< 2 Weeks)">Immediate (&lt; 2 Weeks)</option>
            <option value="Within 30 Days">Within 30 Days</option>
            <option value="1 - 3 Months">1 - 3 Months</option>
            <option value="Planning / RFP Phase">Planning / RFP Phase</option>
          </select>
        </div>
      </div>

      {/* Project Details */}
      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
          Project Scope, Systems & Legacy Endpoints *
        </label>
        <textarea
          rows={4}
          placeholder="Please describe your current systems (e.g. SAP ERP, Salesforce, legacy SQL Server, Kafka) and your key performance requirements..."
          {...register("message")}
          className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="glow"
          size="lg"
          className="w-full"
          isLoading={submitting}
        >
          <Send className="h-4 w-4 mr-2" />
          Submit Consultation Request
        </Button>
        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="h-4 w-4 text-emerald-500" />
          <span>Strict Non-Disclosure Agreement (NDA) Protected · 24h Response</span>
        </div>
      </div>
    </form>
  );
}

