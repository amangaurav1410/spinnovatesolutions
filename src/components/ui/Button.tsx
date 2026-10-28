"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glow";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isLoading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "px-3.5 py-1.5 text-xs font-semibold rounded-lg gap-1.5",
      md: "px-5 py-2.5 text-sm font-semibold rounded-xl gap-2",
      lg: "px-7 py-3.5 text-base font-semibold rounded-xl gap-2.5",
    }[size];

    const variantClasses = {
      primary:
        "bg-blue-600 hover:bg-blue-500 text-white shadow-sm shadow-blue-500/20 active:translate-y-0.5 transition-all duration-200 border border-blue-500/40",
      secondary:
        "bg-slate-800 hover:bg-slate-700 text-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white border border-slate-700/60 transition-all duration-200",
      outline:
        "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-all duration-200",
      ghost:
        "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-600 dark:text-slate-300 transition-all duration-200",
      glow:
        "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:opacity-95 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 active:translate-y-0.5 transition-all duration-200 border border-white/20",
    }[variant];

    const baseClasses = cn(
      "inline-flex items-center justify-center select-none font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
      sizeClasses,
      variantClasses,
      className
    );

    if (href) {
      return (
        <Link href={href} className={baseClasses}>
          {isLoading && (
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={baseClasses}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

