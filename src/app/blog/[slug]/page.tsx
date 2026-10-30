import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Tag, Share2, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | SP Innovate Solutions`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
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

  // Group content lines into paragraphs or clean blocks
  const paragraphs = post.content.split("\n\n").filter((p) => p.trim().length > 0);

  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD Schema Injection */}
      {post.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(post.schema) }}
        />
      )}

      {/* Hero Banner with 3D / Glass styling */}
      <div className="relative h-80 sm:h-96 md:h-[420px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-slate-950/80 to-slate-900/60 backdrop-blur-[2px]" />
        
        <div className="absolute inset-0 flex flex-col justify-end pb-12 max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold mb-6 group w-fit px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to All Insights
          </Link>
          
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/30">
              {post.category}
            </span>
            <span className="text-white/80 text-xs font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-md">
              Published Oct 30, 2026
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Author + Metadata Bar */}
        <div className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-primary font-bold text-lg">
              {post.author.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="font-bold text-foreground text-base">{post.author}</div>
              <div className="text-xs text-muted-foreground">{post.authorRole}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
            <span className="flex items-center gap-1.5 bg-muted/60 px-3 py-1.5 rounded-lg border border-border/50">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              {post.publishedAt}
            </span>
            <span className="flex items-center gap-1.5 bg-muted/60 px-3 py-1.5 rounded-lg border border-border/50">
              <Clock className="w-3.5 h-3.5 text-primary" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* TL;DR Callout Box */}
        {post.tldr && (
          <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border-2 border-primary/25 shadow-lg relative overflow-hidden">
            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Executive Summary / TL;DR</span>
            </div>
            <p className="text-base sm:text-lg text-foreground font-semibold leading-relaxed">
              {post.tldr}
            </p>
          </div>
        )}

        {/* Article Body Content */}
        <article className="prose prose-slate dark:prose-invert prose-lg max-w-none space-y-6 text-foreground/90 leading-relaxed">
          {paragraphs.map((p, idx) => {
            const trimmed = p.trim();
            
            // Subheadings
            if (trimmed.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-3">
                  {trimmed.replace(/^###\s+/, "")}
                </h3>
              );
            }
            if (trimmed.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-2xl sm:text-3xl font-extrabold text-foreground mt-10 mb-4 pb-2 border-b border-border/60">
                  {trimmed.replace(/^##\s+/, "")}
                </h2>
              );
            }

            // Bullet points
            if (trimmed.startsWith("- ") || trimmed.startsWith("• ")) {
              const items = trimmed.split("\n").filter((i) => i.trim().length > 0);
              return (
                <ul key={idx} className="space-y-2 my-4 pl-2">
                  {items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-base text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>{item.replace(/^[-•]\s+/, "")}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            // Detect heading without hashes (common in scraped blogs, e.g. "What Is the Difference...", "Where the two roles overlap")
            if (
              trimmed.length < 90 &&
              !trimmed.includes(".") &&
              !trimmed.includes(",") &&
              (trimmed.endsWith("?") || /^[A-Z]/.test(trimmed)) &&
              idx > 0 &&
              paragraphs[idx - 1].length > 100
            ) {
              return (
                <h2 key={idx} className="text-2xl sm:text-3xl font-extrabold text-foreground mt-10 mb-4 pb-2 border-b border-border/60">
                  {trimmed}
                </h2>
              );
            }

            return (
              <p key={idx} className="text-base sm:text-lg text-foreground/85 leading-relaxed font-normal">
                {trimmed}
              </p>
            );
          })}
        </article>

        {/* Tags & Share */}
        <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-border">
          <Tag className="w-4 h-4 text-muted-foreground" />
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3.5 py-1 rounded-full text-xs font-semibold bg-muted text-foreground border border-border"
            >
              {tag}
            </span>
          ))}
          <div className="ml-auto flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <Share2 className="w-4 h-4 text-primary" />
            <span>Share this article</span>
          </div>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-border">
            <h3 className="text-2xl font-black text-foreground mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                  <div className="glass-card card-3d rounded-2xl overflow-hidden hover:shadow-xl transition-all h-full flex flex-col border border-border">
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={rp.image}
                        alt={rp.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <span className="text-xs font-bold text-primary mb-1">{rp.category}</span>
                      <h4 className="text-sm font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                        {rp.title}
                      </h4>
                      <div className="mt-auto pt-3 flex items-center text-xs text-muted-foreground">
                        <span>{rp.readTime}</span>
                        <ChevronRight className="w-3.5 h-3.5 ml-auto text-primary" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-secondary p-8 sm:p-12 text-center text-primary-foreground shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Stay Ahead of Enterprise Tech in 2026</h3>
            <p className="text-sm sm:text-base text-primary-foreground/80 leading-relaxed">
              Get expert business analysis, system integration guides, and strategic IT blueprints delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <input
                type="email"
                placeholder="Enter your corporate email"
                className="flex-1 px-4 py-3 rounded-xl bg-background/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="button"
                className="px-6 py-3 rounded-xl bg-background text-foreground font-bold hover:bg-background/90 transition-colors shadow-md text-sm"
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
