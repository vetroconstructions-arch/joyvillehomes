import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogs, getBlogBySlug } from '@/data/blogs';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Facebook, Twitter, Linkedin } from 'lucide-react';
import Navbar from '@/components/Navigation';

// Pre-render all blog routes at build time
export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const blog = getBlogBySlug(resolvedParams.slug);

    if (!blog) {
        return { title: 'Article Not Found | Joyville Insights' };
    }

    return {
        title: `${blog.title} | Market Insights Pune`,
        description: blog.excerpt,
        keywords: blog.seoKeywords,
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            type: 'article',
            publishedTime: new Date(blog.date).toISOString(),
            authors: [blog.author],
            section: blog.category,
            images: [{ url: blog.image }],
        },
        alternates: {
            canonical: `https://localhost:3000/insights/${blog.slug}`
        }
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const blog = getBlogBySlug(resolvedParams.slug);

    if (!blog) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": blog.title,
        "image": [blog.image],
        "datePublished": new Date(blog.date).toISOString(),
        "dateModified": new Date(blog.date).toISOString(),
        "author": [{
            "@type": "Person",
            "name": blog.author
        }],
        "publisher": {
            "@type": "Organization",
            "name": "Shapoorji Pallonji Real Estate",
            "logo": {
                "@type": "ImageObject",
                "url": "https://localhost:3000/logo.png"
            }
        },
        "description": blog.excerpt,
        "articleBody": blog.content.join(" ").replace(/<[^>]*>?/gm, '') // Strip HTML for schema
    };

    return (
        <article className="min-h-screen bg-[#EEF2F6] pt-32 pb-24 text-[#323334]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 mb-12">
                <Link href="/insights" className="inline-flex items-center gap-2 text-[#1D4F9C] hover:text-[#323334] font-light text-xs tracking-widest uppercase transition-colors mb-10">
                    <ArrowLeft size={16} /> Back to Insights
                </Link>

                <div className="mb-6 flex items-center gap-3 text-[#1D4F9C] text-[10px] uppercase tracking-[0.2em] font-bold">
                    <span>{blog.category}</span>
                    <span className="w-1 h-1 rounded-full bg-[#323334]/30" />
                    <span>{blog.readTime}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#323334] font-light leading-tight mb-8">
                    {blog.title}
                </h1>

                <div className="flex flex-wrap items-center justify-between border-y border-[#1D4F9C]/20 py-4 gap-6">
                    <div className="flex items-center gap-6 text-[#323334]/80 text-sm font-light">
                        <span className="flex items-center gap-2"><User size={16} className="text-[#1D4F9C]" /> {blog.author}</span>
                        <span className="flex items-center gap-2"><Calendar size={16} className="text-[#1D4F9C]" /> {blog.date}</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-xs uppercase tracking-widest font-semibold text-[#323334]/60">Share</span>
                        <div className="flex items-center gap-3 text-[#1D4F9C]">
                            <button className="hover:text-[#323334] transition-colors"><Linkedin size={18} /></button>
                            <button className="hover:text-[#323334] transition-colors"><Twitter size={18} /></button>
                            <button className="hover:text-[#323334] transition-colors"><Facebook size={18} /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 mb-16">
                <div className="relative aspect-[21/9] w-full bg-[#323334] rounded-sm overflow-hidden shadow-2xl">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover opacity-90 mix-blend-luminosity"
                        priority
                        sizes="(max-width: 1024px) 100vw, 1024px"
                    />
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6">
                <div className="prose prose-lg prose-headings:font-serif prose-headings:font-light prose-headings:text-[#323334] prose-p:font-light prose-p:text-[#323334]/90 prose-p:leading-relaxed prose-a:text-[#1D4F9C] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-a:decoration-[#1D4F9C] max-w-none">
                    {blog.content.map((paragraph, idx) => (
                        <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} className="mb-8" />
                    ))}
                </div>

                <div className="mt-16 pt-8 border-t border-[#1D4F9C]/20 bg-[#FFFFFF] p-8 rounded-sm shadow-sm">
                    <h3 className="text-xl font-serif text-[#1D4F9C] mb-4">Ready to Invest in Pune?</h3>
                    <p className="text-[#323334] font-light mb-6">Connect with our property consultants to discover premium Shapoorji Pallonji residences that match your investment goals.</p>
                    <Link href="/projects" className="inline-block bg-[#1D4F9C] text-[#FFFFFF] px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#323334] transition-colors">
                        Explore Portfolio
                    </Link>
                </div>
            </div>
        </article>
    );
}
