import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { PageBanner } from "@/components/layout/PageBanner";
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Clock, 
  HelpCircle,
  Network,
  Cloud,
  Cpu,
  Database,
  FileSpreadsheet,
  ChevronRight
} from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return {
      title: "Service Not Found | SP Innovate Solutions",
    };
  }

  return {
    title: `${service.title} | SP Innovate Solutions`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | SP Innovate Solutions`,
      description: service.shortDesc,
      images: [{ url: service.image }],
    },
  };
}

const iconMap: Record<string, React.ElementType> = {
  Network,
  FileSpreadsheet,
  Cloud,
  Cpu,
  Database,
  Layers,
};

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.iconName] || Network;

  return (
    <div>
      {/* Banner */}
      <PageBanner
        title={service.title}
        subtitle={service.tagline}
        badge={service.badge}
        imageSrc={service.image}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Main Overview Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                <IconComponent className="w-4 h-4" />
                <span>Service Deep Dive</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Engineering Next-Generation Capability for <span className="text-primary">{service.title}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Metric Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-background to-secondary/10 border border-primary/20 shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-xs uppercase tracking-wider font-bold text-primary">Key Performance Metric</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground">
                  {service.metrics}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:scale-[1.02] transition-all"
                >
                  Schedule Solution Discovery
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-muted/60 text-foreground hover:bg-muted transition-all border border-border/50"
                >
                  View All Services
                </Link>
              </div>
            </div>

            {/* Right Media Card */}
            <div className="lg:col-span-5">
              <div className="relative group rounded-3xl overflow-hidden border border-border/80 shadow-2xl glass-card">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
                <div className="p-6 space-y-4 relative bg-background/90 backdrop-blur-md">
                  <h3 className="font-bold text-foreground text-lg flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                    Enterprise Guarantee
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    All architectural deliverables comply with rigorous ISO 27001, SOC2 Type II, and Australian Privacy Principles (APP).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Deliverables Grid */}
      <section className="py-20 bg-muted/30 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Core Capabilities */}
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Core Capabilities & Scope</h3>
              </div>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/90 font-medium text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guaranteed Deliverables */}
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Tangible Deliverables</h3>
              </div>
              <ul className="space-y-4">
                {service.deliverables.map((deliverable, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="text-foreground/90 font-medium text-sm leading-relaxed">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack Bar */}
          <div className="mt-12 p-8 rounded-2xl bg-card border border-border">
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
              Supported Platforms, Tools & Protocols
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl text-sm font-medium bg-muted text-foreground border border-border/80 hover:border-primary/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section (if available) */}
      {service.methodology && (
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                Execution Framework
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                How We Deliver Results
              </h2>
              <p className="text-muted-foreground">
                A battle-tested 4-stage engineering lifecycle designed to eliminate surprises and guarantee business outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.methodology.map((m, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/50 transition-all hover:-translate-y-1 relative shadow-sm group"
                >
                  <div className="text-4xl font-black text-primary/20 group-hover:text-primary/40 transition-colors mb-4">
                    {m.step}
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{m.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service FAQs */}
      {service.faqs && (
        <section className="py-20 bg-muted/20 border-t border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                <HelpCircle className="w-3.5 h-3.5" />
                Frequently Asked Questions
              </div>
              <h2 className="text-3xl font-extrabold text-foreground">
                Questions About {service.title}
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-3"
                >
                  <h3 className="font-bold text-foreground text-lg flex items-start gap-2">
                    <span className="text-primary font-mono text-sm mt-1">Q:</span>
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-background to-secondary/10 border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Ready to Accelerate Your Enterprise with {service.title}?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Speak directly with our senior integration architects and business analysts. Receive a comprehensive scope and timeline within 48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-primary text-primary-foreground shadow-xl shadow-primary/25 hover:bg-primary/90 hover:scale-[1.02] transition-all text-base"
            >
              Request a Technical Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold bg-background border border-border hover:bg-muted text-foreground transition-all text-base"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

