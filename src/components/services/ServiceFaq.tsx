"use client";

import * as React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Badge } from "@/ui/Badge";
import { faqsData } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function ServiceFaq() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  const categories = [
    "All",
    "Strategy & Timing",
    "Security & Compliance",
    "Architecture & Technology",
    "Support & SLA",
  ];

  const filteredFaqs =
    selectedCategory === "All"
      ? faqsData
      : faqsData.filter((item) => item.category === selectedCategory);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="blue" size="md">
            Got Questions?
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Enterprise Integration FAQ
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Answers to common questions regarding timelines, SLAs, security
            governance, and legacy migration safety.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0);
              }}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer",
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 transition-transform duration-200",
                      isOpen && "rotate-180 bg-blue-500/10 text-blue-600 dark:text-blue-400"
                    )}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <div className="mt-3">
                      <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-900">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

