// Wait, creating a sub-component is safer. Let me cancel this edit and write the file.
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/data/projects';
import { MapPin, ArrowLeft, CheckCircle2, Activity, Shield, Key, Map, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import BrochureButton from '@/components/BrochureButton';
import EMICalculator from '@/components/EMICalculator';
import ProjectClientWrapper from '@/components/ProjectClientWrapper';

// Pre-render all project routes at build time
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// Generate Dynamic SEO Metadata for Each Project
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const project = getProjectBySlug(resolvedParams.slug);

    if (!project) {
        return { title: 'Project Not Found | Joyville Pune' };
    }

    return {
        title: `${project.title} | ${project.type} in ${project.location} by Shapoorji Pallonji`,
        description: `Explore ${project.title} by Shapoorji Pallonji. Premium ${project.type} in ${project.location}. View floor plans, amenities, and request a brochure today.`,
        keywords: [
            project.title,
            "Shapoorji Pallonji Real Estate Pune",
            `${project.type} in ${project.location}`,
            `Buy flats in ${project.location}`,
            ...(project.seoKeywords || []),
            "Joyville Homes Projects",
            "Luxury Apartments Pune",
            "Booking Joyville Pune",
            "Joyville Pune price list download",
            "Shapoorji Pallonji Pune sales office number",
            "Joyville Pune possession date 2027",
            "Shapoorji Pallonji Joyville floor plans",
            "Buy 2 BHK in Pune Shapoorji Pallonji Joyville"
        ],
        openGraph: {
            title: `${project.title} | Shapoorji Pallonji Real Estate`,
            description: project.description,
            images: [{ url: project.image, width: 1200, height: 630 }],
        }
    };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const project = getProjectBySlug(resolvedParams.slug);

    if (!project) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "RealEstateListing",
        "name": project.title,
        "image": project.image,
        "description": project.description,
        "url": `https://localhost:3000/projects/${project.slug}`,
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "lowPrice": project.price.replace(/[^0-9.]/g, ''),
            "offerCount": "100"
        }
    };

    const parseBasePrice = (priceStr: string) => {
        if (!priceStr || priceStr.toLowerCase().includes('request')) return 8500000; // Default to 85 Lakhs
        const match = priceStr.match(/[\d.]+/);
        if (!match) return 8500000;
        const num = parseFloat(match[0]);
        if (priceStr.toLowerCase().includes('cr')) return Math.round(num * 10000000);
        if (priceStr.toLowerCase().includes('lakh') || priceStr.toLowerCase().includes('l')) return Math.round(num * 100000);
        return Math.round(num);
    };
    const calculatedBasePrice = parseBasePrice(project.price);

    return (
        <article className="min-h-screen bg-[#FFFFFF] pt-32 pb-24 text-[#323334] selection:bg-[#1D4F9C] selection:text-[#FFFFFF]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Breadcrumb Navigation */}
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <Link href="/projects" className="inline-flex items-center gap-2 text-[#1D4F9C] hover:text-[#323334] font-light text-xs tracking-widest uppercase transition-colors">
                    <ArrowLeft size={16} /> Back to Premium Portfolio
                </Link>
            </div>

            {/* Hero Header */}
            <header className="max-w-7xl mx-auto px-6 mb-16">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                    <div>
                        <div className="inline-flex items-center gap-2 text-[#1A1A1A] font-light text-[10px] tracking-[0.3em] uppercase mb-4">
                            Joyville Homes <ChevronRight size={10} /> {project.location}
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#323334] font-light mb-4 leading-tight">{project.title}</h1>
                        <p className="flex items-center gap-2 text-[#1D4F9C] font-light tracking-wide text-lg">
                            <MapPin size={18} /> {project.location}
                        </p>
                    </div>

                    <div className="bg-[#EEF2F6] border border-[#1D4F9C]/60 p-8 rounded-sm shrink-0 lg:min-w-[350px] shadow-2xl">
                        <p className="text-[#1A1A1A] font-light text-xs tracking-[0.2em] uppercase mb-2">Starting From</p>
                        <p className="text-4xl text-[#1D4F9C] font-serif italic text-gradient mb-6">{project.price}</p>
                        <BrochureButton projectName={project.title} />
                    </div>
                </div>
            </header>

            {/* Feature Image Banner */}
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <div className="w-full aspect-[21/9] lg:aspect-[3/1] relative overflow-hidden rounded-sm border border-[#1D4F9C]/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-80" style={{ backgroundImage: `url(${project.image})` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-transparent to-transparent pointer-events-none" />
                </div>
            </div>

            {/* Sticky Scrollspy Navigation (Desktop only) */}
            <div className="sticky top-20 z-40 bg-[#EEF2F6]/90 backdrop-blur-md border-y border-[#1D4F9C]/60 mb-16 hidden md:block shadow-xl">
                <div className="max-w-7xl mx-auto px-6 flex items-center gap-8 overflow-x-auto no-scrollbar">
                    {['Overview', 'Amenities', 'Specifications', 'Floor-Plans', 'Financing', 'Gallery', 'Location'].map((section) => (
                        <a key={section} href={`#${section.toLowerCase()}`} className="py-5 text-[#1A1A1A] hover:text-[#1D4F9C] tracking-[0.15em] uppercase text-[10px] font-medium whitespace-nowrap transition-colors border-b-2 border-transparent hover:border-[#1D4F9C]">
                            {section.replace('-', ' ')}
                        </a>
                    ))}
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">

                {/* Left Column: Deep Data Sections */}
                <div className="lg:col-span-8 space-y-24">

                    {/* 1. Overview Section */}
                    <section id="overview" className="scroll-mt-32">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-8 h-[1px] bg-[#1D4F9C]"></span>
                            <h2 className="text-3xl font-serif text-[#323334] font-light">{project.title} Overview</h2>
                        </div>
                        <div className="space-y-6 text-[#1A1A1A] font-light text-lg leading-relaxed mix-blend-plus-lighter">
                            {project.overview.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                        <div className="mt-10 grid sm:grid-cols-2 gap-6 bg-[#EEF2F6] p-8 border border-[#1D4F9C]/60 rounded-sm">
                            {project.highlights.map((highlight, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <CheckCircle2 className="text-[#1D4F9C] shrink-0 mt-0.5" size={20} strokeWidth={1} />
                                    <span className="text-[#1A1A1A] font-light">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 2. Amenities Section */}
                    <section id="amenities" className="scroll-mt-32">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-8 h-[1px] bg-[#1D4F9C]"></span>
                            <h2 className="text-3xl font-serif text-[#323334] font-light">Amenities at {project.title}</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-10">
                            {project.amenities.map((category, idx) => (
                                <div key={idx}>
                                    <h3 className="text-[#1D4F9C] font-medium tracking-widest uppercase text-[10px] mb-4 flex items-center gap-2">
                                        <Activity size={12} /> {category.category}
                                    </h3>
                                    <ul className="space-y-3">
                                        {category.items.map((item, itemIdx) => (
                                            <li key={itemIdx} className="text-[#1A1A1A] font-light text-sm flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-[#1D4F9C] before:rounded-full">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 3. Specifications Section */}
                    <section id="specifications" className="scroll-mt-32">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-8 h-[1px] bg-[#1D4F9C]"></span>
                            <h2 className="text-3xl font-serif text-[#323334] font-light">Luxury Specifications</h2>
                        </div>
                        <div className="grid gap-6">
                            {project.specifications.map((spec, idx) => (
                                <div key={idx} className="bg-[#EEF2F6] border border-[#1D4F9C]/60 p-6 rounded-sm hover:border-[#1D4F9C]/60 transition-colors">
                                    <h3 className="text-[#323334] font-serif text-xl mb-4">{spec.category}</h3>
                                    <ul className="space-y-2">
                                        {spec.items.map((item, itemIdx) => (
                                            <li key={itemIdx} className="text-[#1A1A1A] font-light text-sm flex items-start gap-3">
                                                <Shield className="text-[#1D4F9C] shrink-0 mt-0.5" size={14} /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4. Master Layout & Floor Plans */}
                    <section id="floor-plans" className="scroll-mt-32">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-8 h-[1px] bg-[#1D4F9C]"></span>
                            <h2 className="text-3xl font-serif text-[#323334] font-light">{project.title} Master Layout & Floor Plans</h2>
                        </div>

                        <div className="mb-12 relative group rounded-sm overflow-hidden border border-[#1D4F9C]/60 cursor-pointer">
                            <div className="aspect-[16/9] bg-[#EEF2F6] relative">
                                <div className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: `url(${project.masterLayout})` }} />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#F4F6F9] via-transparent to-transparent flex items-end p-6">
                                <div className="text-[#1D4F9C] flex items-center gap-2 text-xs tracking-widest uppercase bg-[#FFFFFF]/80 px-4 py-2 backdrop-blur-md rounded-full border border-[#1D4F9C]/60">
                                    <Map size={14} /> View Conceptual Master Layout
                                </div>
                            </div>
                        </div>

                        <ProjectClientWrapper floorPlans={project.floorPlans} projectName={project.title} />
                    </section>

                    {/* 4.5 Financial Tools (EMI Calculator) */}
                    <section id="financing" className="scroll-mt-32">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-8 h-[1px] bg-[#1D4F9C]"></span>
                            <h2 className="text-3xl font-serif text-[#323334] font-light">Affordability & Financing</h2>
                        </div>
                        <div className="mb-8">
                            <p className="text-[#1A1A1A] font-light text-lg mb-6">Plan your investment in {project.title}. Use our interactive calculator to estimate your monthly commitment based on current interest rates.</p>
                            <EMICalculator basePrice={calculatedBasePrice} />
                        </div>
                    </section>

                    {/* 5. Project Gallery */}
                    <section id="gallery" className="scroll-mt-32">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-8 h-[1px] bg-[#1D4F9C]"></span>
                            <h2 className="text-3xl font-serif text-[#323334] font-light">Project Gallery</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {project.gallery.map((img, idx) => (
                                <div key={idx} className="aspect-square relative overflow-hidden rounded-sm group">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" style={{ backgroundImage: `url(${img})` }} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                        <span className="text-[#1D4F9C] text-[10px] uppercase tracking-widest">Enlarge</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 6. Location & Connectivity */}
                    <section id="location" className="scroll-mt-32">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-8 h-[1px] bg-[#1D4F9C]"></span>
                            <h2 className="text-3xl font-serif text-[#323334] font-light">{project.location} Connectivity & Location</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 bg-[#EEF2F6]/40 border border-[#1D4F9C]/60 p-6 rounded-sm">
                            <div className="w-full h-full min-h-[300px] relative rounded-sm overflow-hidden border border-[#1D4F9C]/60 grayscale hover:grayscale-0 transition-all duration-700">
                                <iframe
                                    src={project.locationDetails.iframeSrc}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                            <div>
                                <h3 className="text-[#1D4F9C] font-medium tracking-widest uppercase text-[10px] mb-6">Nearby Landmarks</h3>
                                <ul className="space-y-4">
                                    {project.locationDetails.landmarks.map((landmark, idx) => (
                                        <li key={idx} className="flex justify-between items-center border-b border-[#1D4F9C]/60 pb-3">
                                            <span className="text-[#1A1A1A] font-light text-sm">{landmark.name}</span>
                                            <span className="text-[#1D4F9C] text-xs font-mono bg-[#FFFFFF] px-2 py-1 rounded-sm border border-[#1D4F9C]/60">{landmark.distance}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 7. FAQs */}
                    {project.faqs && project.faqs.length > 0 && (
                        <FAQSection faqs={project.faqs} projectName={project.title} />
                    )}

                </div>

                {/* Right Column: Sticky Quick Action Widget */}
                <div className="hidden lg:block lg:col-span-4">
                    <div className="bg-[#EEF2F6]/80 backdrop-blur-xl border border-[#1D4F9C]/60 p-10 sticky top-40 rounded-sm shadow-2xl">
                        <h3 className="text-xl font-serif text-[#323334] font-light mb-8 flex items-center gap-3">
                            <Key className="text-[#1D4F9C]" size={20} /> Property Snapshot
                        </h3>

                        <div className="space-y-6">
                            <div className="flex flex-col border-b border-[#1D4F9C]/60 pb-4">
                                <span className="text-[#1A1A1A] font-light uppercase tracking-[0.2em] text-[10px] mb-1">Project Name</span>
                                <span className="text-[#323334] font-medium text-sm tracking-wide">{project.title}</span>
                            </div>
                            <div className="flex flex-col border-b border-[#1D4F9C]/60 pb-4">
                                <span className="text-[#1A1A1A] font-light uppercase tracking-[0.2em] text-[10px] mb-1">Configuration</span>
                                <span className="text-[#323334] font-medium text-sm tracking-wide">{project.type}</span>
                            </div>
                            <div className="flex flex-col border-b border-[#1D4F9C]/60 pb-4">
                                <span className="text-[#1A1A1A] font-light uppercase tracking-[0.2em] text-[10px] mb-1">Status</span>
                                <span className="text-[#1D4F9C] font-medium text-sm tracking-wide">{project.status}</span>
                            </div>
                            <div className="flex flex-col border-b border-[#1D4F9C]/60 pb-6">
                                <span className="text-[#1A1A1A] font-light uppercase tracking-[0.2em] text-[10px] mb-1">Developer</span>
                                <span className="text-[#323334] font-medium text-sm tracking-wide">Shapoorji Pallonji Real Estate</span>
                            </div>
                        </div>

                        <div className="mt-8 space-y-4">
                            <button className="w-full bg-[#1D4F9C] text-[#FFFFFF] uppercase tracking-[0.2em] text-[10px] font-bold py-4 hover:bg-[#323334] transition-colors duration-300 shadow-[0_10px_30px_rgba(197,160,89,0.2)]">
                                Download Brouchure
                            </button>
                            <button className="w-full bg-transparent border border-[#1D4F9C] text-[#1D4F9C] uppercase tracking-[0.2em] text-[10px] font-bold py-4 hover:bg-[#FFFFFF] transition-colors duration-300">
                                Enquire Now
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </article>
    );
}
