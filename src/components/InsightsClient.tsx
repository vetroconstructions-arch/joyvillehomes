"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { blogs } from "@/data/blogs";

export default function InsightsClient() {
  // Sorting blogs by date (newest first)
  const sortedBlogs = [...blogs].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Joyville Homes Pune - Real Estate Insights",
    "description": "Expert insights, market analysis, and construction updates for Shapoorji Pallonji Joyville projects in Pune.",
    "publisher": {
      "@type": "Organization",
      "name": "Joyville Homes by Shapoorji Pallonji",
      "logo": {
        "@type": "ImageObject",
        "url": "https://joyville-homes.com/logo.png"
      }
    },
    "blogPost": sortedBlogs.map(blog => ({
      "@type": "BlogPosting",
      "headline": blog.title,
      "datePublished": blog.date,
      "image": `https://joyville-homes.com${blog.image}`,
      "author": {
        "@type": "Person",
        "name": "Joyville Pune Research Team"
      },
      "url": `https://joyville-homes.com/insights/${blog.slug}`
    }))
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-32 pb-24 text-[#323334] selection:bg-[#1D4F9C] selection:text-[#FFFFFF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <header className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <div className="inline-flex items-center gap-4 text-[#1D4F9C] font-light text-xs tracking-[0.3em] uppercase mb-6">
          <span className="w-8 h-[1px] bg-[#1D4F9C]" /> Market Intelligence <span className="w-8 h-[1px] bg-[#1D4F9C]" />
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 text-[#323334] font-light">
          Real Estate <span className="text-[#1D4F9C] italic text-gradient">Insights</span>
        </h1>
        <p className="text-[#323334] text-lg max-w-3xl mx-auto font-light leading-relaxed">
          The definitive resource for Pune real estate market research, investment analysis, and construction milestones from the 150-year legacy of Shapoorji Pallonji.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {sortedBlogs.map((blog) => (
          <Link 
            key={blog.id} 
            href={`/insights/${blog.slug}`}
            className="group flex flex-col bg-[#FFFFFF] border border-[#C5A059]/30 shadow-lg hover:shadow-2xl overflow-hidden rounded-sm hover:border-[#C5A059]/80 transition-all duration-500"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-1.5 bg-[#1D4F9C] text-[#FFFFFF] text-[10px] uppercase tracking-[0.2em] font-bold shadow-lg shadow-[#1D4F9C]/30 rounded-sm">
                  {blog.category}
                </span>
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-[#323334]/60 text-[10px] uppercase tracking-widest font-medium mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-[#1D4F9C]" /> {blog.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <User size={12} className="text-[#1D4F9C]" /> Research Team
                </span>
              </div>

              <h2 className="text-2xl font-serif mb-6 text-[#323334] font-light leading-snug group-hover:text-[#1D4F9C] transition-colors">
                {blog.title}
              </h2>

              <p className="text-[#323334]/80 text-sm font-light leading-relaxed mb-8 line-clamp-3">
                {blog.excerpt}
              </p>

              <div className="mt-auto pt-6 border-t border-[#C5A059]/20 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#1D4F9C] font-semibold uppercase tracking-[0.2em] text-[10px]">
                  Read Analysis <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="flex items-center gap-1.5 text-[#323334]/40 text-[9px] uppercase tracking-[0.1em]">
                  <Tag size={10} /> {blog.readTime || '5 min read'}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
