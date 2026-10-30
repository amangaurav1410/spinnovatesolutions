import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, Sparkles } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { PageBanner } from "@/components/layout/PageBanner";

export const metadata: Metadata = {
  title: "Blog & Strategic Insights | SP Innovate Solutions",
  description:
    "Expert perspectives on Business Analysis, Enterprise System Integration, AI workflows, and Modernized IT Services for forward-thinking organizations in 2026.",
};

const categories = [
  "All",
  "Business Analysis",
  "System Integration",
  "Data & Analytics",
  "Artificial Intelligence",
  "Digital Transformation",
  "Managed IT Services",
  "Workflow Automation",
];

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured) || blogPosts[0];
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);

  return (
    <div>
      <PageBanner
        title="Insights, Analysis & Technology Strategy"
        subtitle="Practical guides and strategic analyses on Business Analysis, Enterprise Integrations, AI adoption, and modern digital operating models in 2026."
        breadcrumbs={[{ label: "Blog" }]}
        badge="Executive Briefings"
        accentColor="indigo"
        imageSrc="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&auto=format&fit=crop&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold cursor-pointer transition-all ${
                cat === "All"
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Featured Post */}
        {featured && (
          <div className="mb-16">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Featured Article</span>
            </div>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-3xl overflow-hidden border border-border bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="relative overflow-hidden h-64 lg:h-auto min-h-[320px]">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground shadow-md">
                      {featured.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight group-hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base line-clamp-3">
                    {featured.tldr || featured.excerpt}
                  </p>
                  
                  <div className="pt-2 flex items-center justify-between border-t border-border/60">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                        {featured.author.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-foreground">{featured.author}</div>
                        <div className="text-[11px] text-muted-foreground">{featured.publishedAt}</div>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all pt-2">
                    Read Article &amp; Breakdown <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* All Other Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className="glass-card card-3d rounded-2xl overflow-hidden hover:shadow-xl transition-all h-full flex flex-col border border-border bg-card">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-background/90 text-foreground backdrop-blur-md border border-border/60">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col space-y-3">
                  <h3 className="text-lg font-bold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground/80">{post.author}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
