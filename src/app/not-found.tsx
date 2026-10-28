import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Network, Compass } from "lucide-react";
import { Button } from "@/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shadow-xl">
          <Network className="h-10 w-10 animate-pulse" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Error 404 · Endpoint Unreachable
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            The requested routing path does not exist or has been relocated to a
            different microservice endpoint.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button variant="glow" href="/" size="md" className="w-full sm:w-auto">
            <Home className="h-4 w-4 mr-2" />
            Return to Home
          </Button>
          <Button
            variant="outline"
            href="/services"
            size="md"
            className="w-full sm:w-auto"
          >
            <Compass className="h-4 w-4 mr-2" />
            View Services
          </Button>
        </div>
      </div>
    </div>
  );
}

