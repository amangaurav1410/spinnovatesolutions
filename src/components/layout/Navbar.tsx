"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Layers,
  Network,
  Cloud,
  Cpu,
  Database,
  ArrowRight,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/ui/Button";
import { ConsultationModal } from "./ConsultationModal";
import { servicesData } from "@/data/services";
import { cn } from "@/lib/utils";

const serviceIcons: Record<string, React.ReactNode> = {
  Network: <Network className="h-4 w-4 text-blue-500" />,
  Cloud: <Cloud className="h-4 w-4 text-cyan-500" />,
  Cpu: <Cpu className="h-4 w-4 text-indigo-500" />,
  Database: <Database className="h-4 w-4 text-emerald-500" />,
  Layers: <Layers className="h-4 w-4 text-purple-500" />,
};

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = React.useState(false);
  const [consultModalOpen, setConsultModalOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
    },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 text-white shadow-md shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow">
                <Network className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                  SP Innovate
                  <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-widest px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800">
                    Solutions
                  </span>
                </span>
                <span className="text-[10px] tracking-wider text-slate-500 uppercase font-medium">
                  Enterprise Integration & Cloud
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors",
                          isActive
                            ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/40"
                            : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                        )}
                      >
                        {link.name}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            servicesDropdownOpen ? "rotate-180" : ""
                          )}
                        />
                      </Link>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 w-[420px] pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="glass-dropdown rounded-2xl p-3 shadow-2xl">
                            <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                              Enterprise Offerings
                            </div>
                            <div className="space-y-1">
                              {servicesData.map((service) => (
                                <Link
                                  key={service.id}
                                  href={`/services#${service.id}`}
                                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group"
                                >
                                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group-hover:border-blue-500/40">
                                    {serviceIcons[service.iconName] || (
                                      <Network className="h-4 w-4 text-blue-500" />
                                    )}
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center gap-1.5">
                                      {service.title}
                                    </div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                      {service.shortDesc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 px-3 py-1 flex items-center justify-between text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                              <Link
                                href="/services"
                                className="flex items-center gap-1"
                              >
                                View All Services & Architecture FAQs
                                <ArrowRight className="h-3 w-3" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors",
                      isActive
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/40"
                        : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right actions: Theme Toggle + Book Consultation CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <Button
                variant="glow"
                size="md"
                onClick={() => setConsultModalOpen(true)}
              >
                <Calendar className="h-4 w-4 mr-1" />
                Book Consultation
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl animate-in slide-in-from-top-4 duration-300">
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between transition-colors",
                        isActive
                          ? "bg-blue-600/10 text-blue-600 dark:text-blue-400"
                          : "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                      )}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="h-4 w-4 opacity-50" />
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <Button
                  variant="glow"
                  size="lg"
                  className="w-full justify-center"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setConsultModalOpen(true);
                  }}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Architecture Consultation
                </Button>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <span>Enterprise NDA & SOC 2 Compliant</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Reusable Consultation Modal */}
      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
      />
    </>
  );
}

