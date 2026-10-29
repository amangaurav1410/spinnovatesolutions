import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Tag, Share2 } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | SP Innovate Solutions Blog`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== slug && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Banner with 3D / Glass styling */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-950/95 backdrop-blur-[2px]" />
        <div className="absolute inset-0 flex flex-col justify-end pb-10 max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-6 group w-fit"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white mb-4 w-fit shadow-lg shadow-blue-500/30">
            {post.category}
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Author + Meta */}
        <div className="glass-panel p-6 rounded-2xl flex flex-wrap items-center gap-4 mb-8">
          <img
            src={post.author.avatarUrl}
            alt={post.author.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/30"
          />
          <div>
            <div className="font-bold text-slate-900 dark:text-white">{post.author.name}</div>
            <div className="text-sm text-slate-500">{post.author.role}</div>
          </div>
          <div className="ml-auto flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.publishedAt}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-medium">
          {post.excerpt}
        </p>

        {/* Content */}
        <div className="prose prose-slate dark:prose-invert prose-lg max-w-none">
          {post.content.split("\n").map((paragraph, idx) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-2xl font-black text-slate-900 dark:text-white mt-10 mb-4">
                  {paragraph.slice(3)}
                </h2>
              );
            }
            if (paragraph.startsWith("- **")) {
              return (
                <p key={idx} className="text-slate-700 dark:text-slate-300 leading-relaxed mb-2 pl-4 border-l-2 border-blue-500">
                  {paragraph}
                </p>
              );
            }
            if (paragraph.trim() === "") return null;
            return (
              <p key={idx} className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <Tag className="w-4 h-4 text-slate-400" />
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
            >
              {tag}
            </span>
          ))}
          <button
            type="button"
            className="ml-auto flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600 transition-colors"
          >
            <Share2 className="w-4 h-4" /> Share Article
          </button>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group">
                  <div className="glass-card card-3d rounded-xl overflow-hidden hover:shadow-xl transition-all h-full flex flex-col">
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={rp.coverImage}
                        alt={rp.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{rp.category}</span>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {rp.title}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-700 p-8 sm:p-10 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate opacity-20" />
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-3">Stay Ahead of Enterprise Tech</h3>
            <p className="text-blue-100 mb-6 max-w-lg mx-auto">
              Get expert integration guides, architecture deep-dives, and industry case studies delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@company.com"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md"
              />
              <button
                type="button"
                className="px-6 py-3 rounded-xl bg-white text-blue-700 font-bold hover:bg-blue-50 transition-colors shadow-md"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

