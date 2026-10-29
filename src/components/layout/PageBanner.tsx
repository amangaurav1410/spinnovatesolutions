import * as React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  breadcrumbs?: Breadcrumb[];
  badge?: string;
  className?: string;
  accentColor?: "blue" | "indigo" | "emerald" | "purple" | "cyan";
}

export function PageBanner({
  title,
  subtitle,
  imageSrc,
  breadcrumbs = [],
  badge,
  className,
  accentColor = "blue",
}: PageBannerProps) {
  const accentMap = {
    blue: "from-blue-600 to-cyan-500",
    indigo: "from-indigo-600 to-blue-500",
    emerald: "from-emerald-600 to-teal-500",
    purple: "from-purple-600 to-indigo-500",
    cyan: "from-cyan-600 to-blue-500",
  };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        "bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30",
        "dark:from-slate-950 dark:via-blue-950/20 dark:to-indigo-950/10",
        className
      )}
    >
      {/* Background image with overlay */}
      {imageSrc && (
        <>
          <img
            src={imageSrc}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-10 dark:opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/40 dark:from-slate-950/90 dark:via-slate-950/70 dark:to-slate-950/50" />
        </>
      )}

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-slate opacity-60" />

      {/* Accent gradient top bar */}
      <div className={cn("absolute top-0 left-0 right-0 h-1 bg-gradient-to-r", accentMap[accentColor])} />

      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Breadcrumb */}
        {(breadcrumbs.length > 0) && (
          <nav className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 mb-6">
            <Link href="/" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
              <Home className="h-3 w-3" />
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="h-3 w-3 text-slate-400" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-blue-600 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-slate-700 dark:text-slate-200 font-semibold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/40">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            {badge}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight max-w-3xl">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Decorative line */}
        <div className={cn("mt-6 w-16 h-1 rounded-full bg-gradient-to-r", accentMap[accentColor])} />
      </div>
    </div>
  );
}
