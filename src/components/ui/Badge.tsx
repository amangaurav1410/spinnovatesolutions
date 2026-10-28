import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "blue" | "cyan" | "emerald" | "amber" | "outline";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700",
    blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    cyan: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    emerald:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    outline:
      "bg-transparent text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-700",
  }[variant];

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs font-medium rounded-full",
    md: "px-3 py-1 text-xs font-semibold rounded-full",
  }[size];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border leading-none transition-colors",
        variantStyles,
        sizeStyles,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

