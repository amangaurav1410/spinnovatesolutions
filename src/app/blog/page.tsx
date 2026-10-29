import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { PageBanner } from "@/components/layout/PageBanner";

export const metadata: Metadata = {
  title: "Blog | SP Innovate Solutions — Enterprise Integration Insights",
  description: "Expert insights on enterprise system integrations, cloud architecture, API design, data pipelines, and legacy modernization from the SP Innovate Solutions engineering team.",
};

const categories = ["All", "API Architecture", "Cloud Architecture", "Data Engineering", "DevOps", "Legacy Modernization", "Enterprise Integration"];

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <div>
      <PageBanner
        title="Engineering Insights & Integration Intelligence"
        subtitle="Deep technical guides, architecture patterns, and lessons from real enterprise integration projects."
        breadcrumbs={[{ label: "Blog" }]}
        badge="Our Blog"
        accentColor="indigo"
        imageSrc="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&auto=format&fit=crop&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all ${
                cat === "All"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Featured Post */}
        {featured && (
          <div className="mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">Featured Article</div>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                <div className="relative overflow-hidden h-64 lg:h-auto min-h-[300px]">
                  <img
                    src={featured.coverImage}
                    alt={featured.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 dark:to-slate-900/20" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white">
                      {featured.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={featured.author.avatarUrl}
                      alt={featured.author.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/20"
                    />
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">{featured.author.name}</div>
                      <div className="text-xs text-slate-500">{featured.author.role}</div>
                    </div>
                    <div className="ml-auto flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{featured.publishedAt}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all">
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="h-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-slate-900/80 text-blue-700 dark:text-blue-300 border border-blue-200/60">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <img
                      src={post.author.avatarUrl}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">{post.author.name}</div>
                      <div className="text-xs text-slate-500 flex items-center gap-2">
                        <span>{post.publishedAt}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-500 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
