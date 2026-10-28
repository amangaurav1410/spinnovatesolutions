import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SP Innovate Solutions | Enterprise System Integrations, Cloud & API Architecture",
  description:
    "SP Innovate Solutions unifies complex enterprise systems, legacy databases, and modern cloud architectures. Resilient API fabrics, real-time data pipelines, and zero-downtime migrations.",
  keywords: [
    "Enterprise Integration",
    "API Gateway",
    "Cloud Architecture",
    "MuleSoft Integration",
    "Legacy Modernization",
    "Kafka Data Streaming",
    "AWS DevOps",
    "Kubernetes",
    "SaaS Architecture",
  ],
  authors: [{ name: "SP Innovate Solutions Engineering Team" }],
  openGraph: {
    title: "SP Innovate Solutions | Enterprise System Integrations & Cloud Architecture",
    description:
      "Seamlessly bridge legacy architectures with next-generation cloud ecosystems, automated pipelines, and enterprise-grade APIs with zero downtime.",
    url: "https://spinnovatesolutions.com",
    siteName: "SP Innovate Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SP Innovate Solutions | Enterprise System Integrations",
    description:
      "Enterprise system integrations, cloud migration, and real-time streaming architectures with 99.99% uptime guarantees.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
