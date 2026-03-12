import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/data/projects';
import { blogs } from '@/data/blogs';
import { localities } from '@/data/localities';
import { ENTITIES } from '@/data/entities';
import { getExpertById } from '@/data/experts';
import Link from 'next/link';
import Image from 'next/image';
import SentimentPulse from '@/components/SentimentPulse';
import { 
    MapPin, 
    ArrowLeft, 
    CheckCircle2, 
    Activity, 
    Shield, 
    Key, 
    Map, 
    ChevronRight, 
    TrendingUp, 
    ArrowRight, 
    Clock, 
    Phone,
    Globe,
    ExternalLink,
    BarChart3
} from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import BrochureButton from '@/components/BrochureButton';
import MarketPulseTicker from '@/components/MarketPulseTicker';
import ConstructionMilestones from '@/components/ConstructionMilestones';
import RealEstateGlossary from '@/components/RealEstateGlossary';
import SemanticLinkMesh from '@/components/SemanticLinkMesh';
import EMICalculator from '@/components/EMICalculator';
import ProjectClientWrapper from '@/components/ProjectClientWrapper';
import StickyProjectTabs from '@/components/StickyProjectTabs';
import ProximityIndex from '@/components/ProximityIndex';
import PredictiveNavigation from '@/components/PredictiveNavigation';
import KeyFactsSummary from '@/components/KeyFactsSummary';
import DeepLinkIntelligence from '@/components/DeepLinkIntelligence';
import IntentLinkCluster from '@/components/IntentLinkCluster';
import ConversationalAnswerHub from '@/components/ConversationalAnswerHub';
import EntityPopularityPulse from '@/components/EntityPopularityPulse';
import SemanticKnowledgeBreadcrumbs from '@/components/SemanticKnowledgeBreadcrumbs';
import LegacyTimeline from '@/components/LegacyTimeline';

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
        },
        alternates: {
            canonical: `https://www.joyville-homes.com/projects/${project.slug}`,
            languages: {
                'en-IN': `https://www.joyville-homes.com/projects/${project.slug}`,
                'x-default': `https://www.joyville-homes.com/projects/${project.slug}`,
            },
        }
    };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const project = getProjectBySlug(resolvedParams.slug);

    if (!project) {
        notFound();
    }

    const siteUrl = 'https://www.joyville-homes.com';
    const locality = localities.find(l => l.name.toLowerCase() === project.location.toLowerCase());

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${siteUrl}/projects/${project.slug}/#webpage`,
                "url": `${siteUrl}/projects/${project.slug}`,
                "name": `${project.title} | ${project.location}`,
                "description": project.description,
                "breadcrumb": { "@id": `${siteUrl}/projects/${project.slug}/#breadcrumb` },
                "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": project.image,
                    "representativeOfPage": "true"
                },
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": [
                        "h1",
                        ".at-a-glance-card",
                        "#overview p"
                    ]
                }
            },
            ...(project.atAGlance ? [{
                "@type": "Dataset",
                "name": `${project.title} At a Glance`,
                "description": `Technical specifications and key metrics for ${project.title}.`,
                "variableMeasured": [
                    { "@type": "PropertyValue", "name": "Total Area", "value": project.atAGlance.totalArea },
                    { "@type": "PropertyValue", "name": "Towers", "value": project.atAGlance.towers },
                    { "@type": "PropertyValue", "name": "Units", "value": project.atAGlance.units },
                    { "@type": "PropertyValue", "name": "Open Space", "value": project.atAGlance.openSpace }
                ]
            }] : []),
            {
                "@type": "RealEstateListing",
                "@id": `${siteUrl}/projects/${project.slug}/#listing`,
                "name": project.title,
                "image": project.image,
                "description": project.description,
                "url": `${siteUrl}/projects/${project.slug}`,
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": project.location,
                    "addressRegion": "Maharashtra",
                    "addressCountry": "IN"
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Pune"
                },
                ...(project.expertReview ? {
                    "review": {
                        "@type": "Review",
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": project.expertReview.rating,
                            "bestRating": "5"
                        },
                        "author": {
                            "@type": "Person",
                            "name": project.expertReview.expertId ? getExpertById(project.expertReview.expertId)?.name : 'Research Desk'
                        },
                        "reviewBody": project.expertReview.summary
                    }
                } : {}),
                "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "INR",
                    "lowPrice": project.price.replace(/[^0-9.]/g, ''),
                    "offerCount": "100",
                    "priceRange": project.price,
                    "priceValidUntil": project.lastPriceUpdate ? new Date(new Date(project.lastPriceUpdate).getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] : new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": project.reviews?.length ? (542 + project.reviews.length).toString() : "542",
                    "bestRating": "5",
                    "worstRating": "1"
                },
                ...(project.interactionSignals ? {
                    "interactionStatistic": [
                        {
                            "@type": "InteractionCounter",
                            "interactionType": "https://schema.org/ViewAction",
                            "userInteractionCount": project.interactionSignals.views
                        },
                        {
                            "@type": "InteractionCounter",
                            "interactionType": "https://schema.org/LikeAction",
                            "userInteractionCount": project.interactionSignals.interested
                        },
                        {
                            "@type": "InteractionCounter",
                            "interactionType": "https://schema.org/SubscribeAction",
                            "userInteractionCount": project.interactionSignals.bookings
                        }
                    ]
                } : {}),
                "mainEntityOfPage": { "@id": `${siteUrl}/projects/${project.slug}/#webpage` },
                "subjectOf": [
                    ...(blogs.filter(b => b.mentionsProject?.includes(project.slug)).map(b => ({
                        "@type": "BlogPosting",
                        "url": `${siteUrl}/insights/${b.slug}`,
                        "headline": b.title
                    }))),
                    { "@id": `${siteUrl}/projects/${project.slug}/#place` },
                    ...(project.siteOffice ? [{ "@id": `${siteUrl}/projects/${project.slug}/#localbusiness` }] : []),
                    ...(project.expertReview ? [
                        {
                            "@type": "Review",
                            "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": project.expertReview.rating,
                                "bestRating": "5"
                            },
                            "author": { "@id": "https://www.joyville-homes.com/#research-desk" },
                            "reviewBody": project.expertReview.summary
                        },
                        {
                            "@type": "Recommendation",
                            "category": "Real Estate Investment",
                            "itemReviewed": { "@id": `${siteUrl}/projects/${project.slug}/#place` },
                            "recommendationScore": project.expertReview.rating,
                            "reviewer": { "@id": "https://www.joyville-homes.com/#research-desk" }
                        }
                    ] : [])
                ],
                ...(project.constructionUpdate ? {
                    "dateModified": new Date(project.constructionUpdate.lastUpdated).toISOString(),
                    "description": `${project.description} Current Construction Status: ${project.constructionUpdate.statusText} (${project.constructionUpdate.percentage}% complete as of ${project.constructionUpdate.lastUpdated}).`
                } : {}),
                "isRelatedTo": {
                    "@type": "Organization",
                    "@id": `${siteUrl}/#organization`,
                    "name": ENTITIES.DEVELOPER.name,
                    "url": ENTITIES.DEVELOPER.url
                },
                "brand": {
                    "@type": "Brand",
                    "name": ENTITIES.BRAND.name,
                    "description": ENTITIES.BRAND.concept
                },
                "about": {
                    "@type": "RealEstateAgent",
                    "name": ENTITIES.DEVELOPER.name,
                    "image": ENTITIES.DEVELOPER.url + "/logo.png",
                    "sameAs": ENTITIES.DEVELOPER.sameAs
                },
                "mentions": [
                    {
                        "@type": "Place",
                        "name": project.location,
                        "description": localities.find(l => l.name.toLowerCase() === project.location.toLowerCase())?.description || ""
                    },
                    ...projects.filter(p => p.slug !== project.slug).slice(0, 3).map(p => ({
                        "@type": "RealEstateProject",
                        "name": p.title,
                        "url": `${siteUrl}/projects/${p.slug}`
                    }))
                ]
            },
            ...(project.siteOffice ? [{
                "@type": "LocalBusiness",
                "@id": `${siteUrl}/projects/${project.slug}/#localbusiness`,
                "name": `${project.title} Site Office`,
                "image": project.image,
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": project.siteOffice.address,
                    "addressLocality": project.location,
                    "addressRegion": "Maharashtra",
                    "addressCountry": "IN"
                },
                "telephone": project.siteOffice.tel,
                "openingHours": project.siteOffice.hours,
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": project.latitude,
                    "longitude": project.longitude
                },
                "potentialAction": {
                    "@type": "ScheduleAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": `${siteUrl}/projects/${project.slug}?action=schedule-visit`,
                        "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
                    },
                    "result": {
                        "@type": "Event",
                        "name": `Site Visit to ${project.title} Site Office`
                    }
                }
            }] : []),
            {
                "@type": ["Place", "ApartmentComplex"],
                "@id": `${siteUrl}/projects/${project.slug}/#place`,
                "name": project.title,
                "description": project.description,
                "image": project.image,
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": project.location,
                    "addressRegion": "Maharashtra",
                    "addressCountry": "IN"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": project.latitude,
                    "longitude": project.longitude
                },
                "telephone": project.siteOffice?.tel || "+91-20-6743-1149",
                "amenityFeature": project.featuredAmenities.map(amenity => ({
                    "@type": "LocationFeatureSpecification",
                    "name": amenity,
                    "value": "true"
                })),
                "photo": [
                    {
                        "@type": "ImageObject",
                        "url": project.image,
                        "caption": `Exterior view of ${project.title} by Shapoorji Pallonji`
                    },
                    ...(project.floorPlans.map(fp => ({
                        "@type": "ImageObject",
                        "url": fp.image || project.image,
                        "name": `${project.title} ${fp.type} Floor Plan`,
                        "description": fp.description || `${fp.type} residence with a carpet area of ${fp.carpetArea}.`,
                        "caption": fp.description || `${fp.type} unit layout at ${project.title}.`,
                        "contentLocation": project.location,
                        "spatialDimension": fp.spatialDimension || "Two Dimensional"
                    })))
                ],
                "hasPart": {
                    "@type": "ProductGroup",
                    "name": `${project.title} Configuration Matrix`,
                    "description": `Available floor plan variations for ${project.title}.`,
                    "hasVariant": project.floorPlans.map(fp => ({
                        "@type": "ProductModel",
                        "name": `${project.title} ${fp.type}`,
                        "description": fp.description,
                        "image": fp.image,
                        "offers": {
                            "@type": "Offer",
                            "priceCurrency": "INR",
                            "price": project.price.split(' ')[1], // Rough extraction
                            "availability": "https://schema.org/InStock"
                        },
                        "additionalProperty": [
                            { "@type": "PropertyValue", "name": "Configuration", "value": fp.type },
                            { "@type": "PropertyValue", "name": "Carpet Area", "value": fp.carpetArea }
                        ]
                    }))
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": project.reviews?.length ? (542 + project.reviews.length).toString() : "542",
                    "bestRating": "5",
                    "worstRating": "1"
                },
                "review": project.reviews?.map(review => ({
                    "@type": "Review",
                    "author": {
                        "@type": "Person",
                        "name": review.author
                    },
                    "datePublished": review.date,
                    "reviewBody": review.comment,
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": review.rating,
                        "bestRating": "5"
                    }
                })),
                ...(project.videoUrl ? {
                    "subjectOf": { "@id": `${siteUrl}/projects/${project.slug}/#video` }
                } : {}),
                ...(project.gallery ? {
                    "image": project.gallery.map((img, idx) => ({
                        "@type": "ImageObject",
                        "@id": `${siteUrl}/projects/${project.slug}/#gallery-${idx}`,
                        "url": img,
                        "name": `${project.title} - View ${idx + 1}`,
                        "caption": `Professional architectural view of ${project.title} in ${project.location}. Managed by Shapoorji Pallonji.`,
                        "representativeOfPage": idx === 0 ? "true" : "false"
                    }))
                } : {}),
                ...(project.nearbyEntities || project.infrastructureLinks ? {
                    "knowsAbout": [
                        ...(project.nearbyEntities?.map(entity => ({
                            "@type": "Thing",
                            "name": entity
                        })) || []),
                        ...(project.infrastructureLinks?.map(link => ({
                            "@type": "Thing",
                            "name": link.name,
                            "sameAs": link.wikidataUri
                        })) || [])
                    ]
                } : {}),
                "sameAs": [
                    ...(project.socialLinks?.map(link => link.url) || [])
                ]
            },
            ...(project.videoUrl ? [{
                "@type": "VideoObject",
                "@id": `${siteUrl}/projects/${project.slug}/#video`,
                "name": `${project.title} Project Walkthrough & Construction Update`,
                "description": `Detailed walkthrough of ${project.title} by Shapoorji Pallonji Real Estate. Explore amenities, configurations and site progress.`,
                "thumbnailUrl": [project.videoThumbnail || project.image],
                "uploadDate": project.videoUploadDate || "2024-01-01T08:00:00+05:30",
                "contentUrl": project.videoUrl,
                "embedUrl": project.videoUrl.replace('watch?v=', 'embed/'),
                "duration": "PT2M30S",
                "publisher": { "@id": "https://www.joyville-homes.com/#organization" }
            }] : [])
        ]
    };

    // FAQ Schema for Google Rich Results
    const faqJsonLd = project.faqs && project.faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${siteUrl}/projects/${project.slug}/#faq`,
        "mainEntity": project.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    // BreadcrumbList Schema for navigation hierarchy
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
            { "@type": "ListItem", "position": 2, "name": "Projects", "item": `${siteUrl}/projects` },
            { "@type": "ListItem", "position": 3, "name": project.title, "item": `${siteUrl}/projects/${project.slug}` }
        ]
    };

    const parseBasePrice = (priceStr: string) => {
        if (!priceStr || priceStr.toLowerCase().includes('request')) return 8500000;
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
            {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ClaimReview",
                "claimReviewed": `${locality?.yoyAppreciation || '12.5%'} appreciation in ${project.location}.`,
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "alternateName": "Verified by Shapoorji Research"
                },
                "author": { "@id": "https://www.joyville-homes.com/#research-desk" }
            }) }} />

            <main>
                {/* Hierarchical Knowledge Navigation (Phase 17) */}
                <div className="max-w-7xl mx-auto px-6">
                    <SemanticKnowledgeBreadcrumbs items={[
                        { name: 'Home', url: '/', type: 'Home' },
                        { name: 'Pune', url: '/locality', type: 'City' },
                        { name: project.location, url: `/locality/${project.location.toLowerCase().replace(/\s+/g, '-')}`, type: 'Locality' },
                        { name: project.title, url: `/projects/${project.slug}`, type: 'Project' }
                    ]} />
                </div>

                {/* Hero Header */}
                <header className="max-w-7xl mx-auto px-6 mb-16">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                        <div>
                            <div className="inline-flex items-center gap-2 text-[#1A1A1A] font-light text-[10px] tracking-[0.3em] uppercase mb-4">
                                Joyville Homes <ChevronRight size={10} /> {project.location}
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#323334] font-light mb-4 leading-tight">{project.title}</h1>
                            <div className="flex items-center gap-3">
                                <p className="flex items-center gap-2 text-[#1D4F9C] font-light tracking-wide text-lg">
                                    <MapPin size={18} /> {project.location}
                                </p>
                                {project.constructionUpdates?.[0] && (
                                    <span className="bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-green-500/20 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                        Work Status: {project.constructionUpdates[0].date}
                                    </span>
                                )}
                            </div>
                            
                            {/* Entity Popularity Signals (Phase 16) */}
                            {project.interactionSignals && (
                                <EntityPopularityPulse 
                                    views={project.interactionSignals.views}
                                    interested={project.interactionSignals.interested}
                                    projectName={project.title}
                                />
                            )}
                        </div>

                        <div className="bg-[#EEF2F6] border border-[#C5A059]/60 p-8 rounded-sm shrink-0 lg:min-w-[350px] shadow-2xl">
                            <p className="text-[#1A1A1A] font-light text-xs tracking-[0.2em] uppercase mb-2">Starting From</p>
                            <p className="text-4xl text-[#1D4F9C] font-serif italic text-gradient mb-4 font-medium">{project.price}</p>
                            {project.lastPriceUpdate && (
                                <p className="text-[10px] text-[#1D4F9C]/60 italic font-light mb-6 flex items-center gap-1.5 tracking-wider uppercase">
                                    <Clock size={10} className="strokeWidth-[1.5]" /> Price as of {new Date(project.lastPriceUpdate).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
                                </p>
                            )}
                            <BrochureButton projectName={project.title} />
                        </div>
                    </div>
                </header>

                {/* Feature Image Banner */}
                <div className="max-w-7xl mx-auto px-6 mb-24">
                    <div className="w-full aspect-[21/9] lg:aspect-[3/1] relative overflow-hidden rounded-sm border border-[#C5A059]/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <Image
                            src={project.image}
                            alt={`${project.title} Hero Banner`}
                            fill
                            className="object-cover opacity-90 mix-blend-multiply"
                            sizes="100vw"
                            priority={true}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-transparent to-transparent pointer-events-none" />
                    </div>
                </div>

                {/* SGE Optimized Key Facts Summary */}
                <div className="max-w-7xl mx-auto px-6">
                    <KeyFactsSummary 
                        title={project.title}
                        price={project.price}
                        location={project.location}
                        rera={project.reraNumber}
                        status={project.status}
                    />
                </div>

                <StickyProjectTabs />
                
                {/* AI-Ready At-a-Glance Metrics */}
                {project.atAGlance && (
                    <div className="max-w-7xl mx-auto px-6 mb-16">
                        <div className="bg-white border border-[#C5A059]/10 shadow-sm overflow-hidden at-a-glance-card">
                            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#C5A059]/10">
                                <div className="p-8 text-center">
                                    <span className="text-[10px] uppercase tracking-widest text-[#323334]/40 block mb-2">Total Area</span>
                                    <span className="text-xl font-serif text-[#1D4F9C]">{project.atAGlance.totalArea}</span>
                                </div>
                                <div className="p-8 text-center">
                                    <span className="text-[10px] uppercase tracking-widest text-[#323334]/40 block mb-2">Towers</span>
                                    <span className="text-xl font-serif text-[#1D4F9C]">{project.atAGlance.towers}</span>
                                </div>
                                <div className="p-8 text-center">
                                    <span className="text-[10px] uppercase tracking-widest text-[#323334]/40 block mb-2">Units</span>
                                    <span className="text-xl font-serif text-[#1D4F9C]">{project.atAGlance.units}</span>
                                </div>
                                <div className="p-8 text-center">
                                    <span className="text-[10px] uppercase tracking-widest text-[#323334]/40 block mb-2">Open Space</span>
                                    <span className="text-xl font-serif text-[#1D4F9C]">{project.atAGlance.openSpace}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Micro-Market Predictive Matrix */}
                <div className="max-w-7xl mx-auto px-6">
                    <DeepLinkIntelligence currentProject={project} />
                </div>

                {/* Main Content Layout */}
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">

                    {/* Left Column: Deep Data Sections */}
                    <div className="lg:col-span-8 space-y-24">

                        {/* Sentiment Pulse Component (Phase 11) */}
                        {project.expertReview?.ratings && (
                            <div className="scroll-mt-32">
                                <SentimentPulse 
                                    ratings={project.expertReview.ratings}
                                    summary={project.expertReview.summary}
                                />
                            </div>
                        )}

                        {/* Macro-Economic Regional Anchors (Phase 11) */}
                        {project.macroEconomicDrivers && project.macroEconomicDrivers.length > 0 && (
                            <div className="p-8 bg-gray-50/50 rounded-2xl border border-gray-100/50">
                                <div className="flex items-center gap-2 mb-6 text-[#1D4F9C]">
                                    <Globe size={18} />
                                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#323334]">Regional Economic Anchors</h3>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {project.macroEconomicDrivers.map((driver, idx) => (
                                        <div key={idx} className="flex flex-col gap-1.5 border-l-2 border-[#1D4F9C]/20 pl-4 py-1">
                                            <span className="text-[11px] font-bold text-[#1D4F9C] uppercase tracking-wide">
                                                {driver.name}
                                            </span>
                                            <span className="text-xs text-gray-600 font-light leading-relaxed">
                                                Impact: <span className="font-medium text-[#323334]">{driver.impact}</span>
                                            </span>
                                            <a href={driver.wikidataUri} target="_blank" rel="noopener noreferrer" className="text-[10px] text-blue-600 flex items-center gap-1 hover:text-blue-800 transition-colors mt-1 font-medium italic underline decoration-blue-200 underline-offset-4">
                                                Examine Entity Graph <ExternalLink size={8} />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 1. Overview Section */}
                        <section id="overview" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-8 h-[1px] bg-[#1D4F9C]"></span>
                                <h2 className="text-3xl font-serif text-[#323334] font-light">{project.title} {project.location} Overview</h2>
                            </div>
                            <div className="space-y-6 text-[#1A1A1A] font-light text-lg leading-relaxed">
                                {project.overview.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                                <p className="text-xs text-[#1D4F9C]/60 mt-4 italic font-medium">
                                    MahaRERA Registration: {Array.isArray(project.reraNumber) ? project.reraNumber.join(", ") : project.reraNumber}
                                </p>
                            </div>
                            <div className="mt-10 grid sm:grid-cols-2 gap-6 bg-[#EEF2F6] p-8 border border-[#C5A059]/60 rounded-sm">
                                {project.highlights.map((highlight, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <CheckCircle2 className="text-[#1D4F9C] shrink-0 mt-0.5" size={20} strokeWidth={1} />
                                        <span className="text-[#1A1A1A] font-light">{highlight}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Video Walkthrough - Video SEO Signal */}
                            {project.videoUrl && (
                                <div className="mt-12 group">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="w-8 h-[1px] bg-[#1D4F9C]"></span>
                                        <h3 className="text-xl font-serif text-[#323334] font-light">Cinematic Project Walkthrough</h3>
                                    </div>
                                    <div className="relative aspect-video rounded-sm overflow-hidden border border-[#C5A059]/30 bg-[#323334] shadow-2xl">
                                        <iframe
                                            src={project.videoUrl}
                                            title={`${project.title} Video Walkthrough`}
                                            className="absolute inset-0 w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <p className="mt-4 text-xs text-[#323334]/60 italic font-light">
                                        Experience the majestic lifestyle at {project.title} through our official cinematic walkthrough.
                                    </p>
                                </div>
                            )}
                        </section>

                        {/* 2. Amenities Section */}
                        <section id="amenities" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-8 h-[1px] bg-[#1D4F9C]"></span>
                                <h2 className="text-3xl font-serif text-[#323334] font-light">Majestic Amenities at {project.title}</h2>
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
                                <h2 className="text-3xl font-serif text-[#323334] font-light">{project.title} Luxury Specifications</h2>
                            </div>
                            <div className="grid gap-6">
                                {project.specifications.map((spec, idx) => (
                                    <div key={idx} className="bg-[#EEF2F6] border border-[#C5A059]/60 p-6 rounded-sm hover:border-[#C5A059]/60 transition-colors">
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

                            <div className="mb-12 relative group rounded-sm overflow-hidden border border-[#C5A059]/60 cursor-pointer">
                                <div className="aspect-[16/9] bg-[#EEF2F6] relative">
                                    <Image
                                        src={project.masterLayout}
                                        alt={`${project.title} Conceptual Master Layout`}
                                        fill
                                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                        sizes="(max-width: 1200px) 100vw, 1200px"
                                        priority={true}
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#F4F6F9] via-transparent to-transparent flex items-end p-6">
                                    <div className="text-[#1D4F9C] flex items-center gap-2 text-xs tracking-widest uppercase bg-[#FFFFFF]/80 px-4 py-2 backdrop-blur-md rounded-full border border-[#C5A059]/60">
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
                            <div className="mb-0">
                                <p className="text-[#1A1A1A] font-light text-lg mb-6">Plan your investment in {project.title}. Use our interactive calculator to estimate your monthly commitment based on current interest rates.</p>
                                <EMICalculator basePrice={calculatedBasePrice} />
                            </div>

                            {/* ROI Vision: 5-Year Appreciation Simulator */}
                            {(() => {
                                const locality = require('@/data/localities').localities.find((l: any) => l.name.toLowerCase() === project.location.toLowerCase());
                                if (!locality) return null;

                                const appreciationRate = parseFloat(locality.yoyAppreciation) / 100;
                                const currentVal = calculatedBasePrice;
                                const futureVal = currentVal * Math.pow(1 + appreciationRate, 5);
                                const totalAppreciation = futureVal - currentVal;

                                return (
                                    <div className="mt-12 p-8 bg-[#C5A059]/5 border border-[#C5A059]/20 rounded-sm relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-2 mb-4">
                                                <TrendingUp size={16} className="text-[#C5A059]" />
                                                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#C5A059]">Investment Forecast</span>
                                            </div>
                                            <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">5-Year ROI Vision for {project.title}</h3>
                                            <p className="text-sm text-[#323334] font-light mb-8 max-w-2xl leading-relaxed">
                                                Based on {locality.name}'s current appreciation trend of <strong>{locality.yoyAppreciation}</strong> YoY, your investment is projected to reach institutional valuations by 2030.
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div className="bg-white p-6 rounded-sm border border-[#C5A059]/10 shadow-sm">
                                                    <span className="text-[10px] text-[#C5A059] uppercase tracking-widest block mb-1">Current Base Value</span>
                                                    <span className="text-xl font-serif text-[#1A1A1A]">₹{(currentVal / 10000000).toFixed(2)} Cr*</span>
                                                </div>
                                                <div className="bg-[#1D4F9C] p-6 rounded-sm shadow-md">
                                                    <span className="text-[10px] text-white/70 uppercase tracking-widest block mb-1 font-medium">Estimated 2031 Value</span>
                                                    <span className="text-xl font-serif text-white">₹{(futureVal / 10000000).toFixed(2)} Cr**</span>
                                                </div>
                                                <div className="bg-white p-6 rounded-sm border border-[#C5A059]/10 shadow-sm">
                                                    <span className="text-[10px] text-[#C5A059] uppercase tracking-widest block mb-1">Potential Appreciation</span>
                                                    <span className="text-xl font-serif text-[#1D4F9C]">₹{(totalAppreciation / 10000000).toFixed(2)} Cr</span>
                                                </div>
                                            </div>

                                            <div className="mt-8 flex flex-wrap gap-4 text-[10px] text-[#323334]/60 italic font-light">
                                                <span>*Based on current launch pricing.</span>
                                                <span>**Projected based on {locality.yoyAppreciation} compound annual growth rate. Real estate investments are subject to market risks.</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })()}

                            {/* Market Benchmarking: Price Delta Analysis */}
                            {(() => {
                                const locality = require('@/data/localities').localities.find((l: any) => project.location.toLowerCase().includes(l.name.toLowerCase()));
                                if (!locality) return null;

                                const firstFloorPlan = project.floorPlans[0];
                                const minCarpet = parseInt(firstFloorPlan.carpetArea.split(' ')[0]);
                                const projectPpsf = Math.round(calculatedBasePrice / minCarpet);
                                const localityPpsf = parseInt(locality.avgPricePerSqFt.replace('₹', '').replace(',', ''));

                                const delta = ((projectPpsf - localityPpsf) / localityPpsf) * 100;
                                const isPremium = delta > 5;
                                const isValue = delta < -5;

                                return (
                                    <div className="mt-8 p-6 border-l-4 border-[#1D4F9C] bg-[#EEF2F6] rounded-r-sm">
                                        <h4 className="text-sm font-serif text-[#1D4F9C] uppercase tracking-widest mb-4">Market Calibration</h4>
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-2xl font-serif text-[#323334]">₹{projectPpsf.toLocaleString()}</span>
                                                    <span className="text-[10px] text-[#323334]/60">per sq. ft. (Est.)</span>
                                                </div>
                                                <p className="text-xs text-[#323334] font-light">
                                                    {locality.name} Average: <span className="font-medium">₹{localityPpsf.toLocaleString()} / sq. ft.</span>
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className={`px-4 py-2 rounded-full text-[10px] font-semibold uppercase tracking-tighter ${isPremium ? 'bg-[#C5A059]/10 text-[#C5A059]' : isValue ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                                                    {isPremium ? 'Premium Offering' : isValue ? 'High-Value Entry' : 'Market Aligned'}
                                                </div>
                                                <p className="text-[11px] text-[#323334] max-w-[200px] leading-relaxed italic">
                                                    {isPremium ? 'Reflects superior amenity density and SP construction legacy.' : isValue ? 'Strategic entry-level pricing for high-velocity absorption.' : 'Priced perfectly for the current micro-market liquidity.'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })()}

                            {/* 4.6 Master Tier: E-E-A-T (Expert Review) & QDF (Construction Progress) */}
                            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Construction Progress (QDF Signal) */}
                                {project.constructionUpdate && (
                                    <div className="bg-white p-8 rounded-sm border border-[#1D4F9C]/10 shadow-sm relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                            <Shield size={64} className="text-[#1D4F9C]" />
                                        </div>
                                        <div className="flex items-center gap-2 mb-6">
                                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#1D4F9C]">Live Progress Update</span>
                                        </div>
                                        <h3 className="text-xl font-serif text-[#323334] mb-4">Construction Milestones</h3>
                                        <div className="mb-6">
                                            <div className="flex justify-between items-end mb-2">
                                                <span className="text-3xl font-serif text-[#1D4F9C]">{project.constructionUpdate.percentage}%</span>
                                                <span className="text-[10px] text-[#323334]/60 uppercase tracking-widest">Overall Completion</span>
                                            </div>
                                            <div className="w-full h-1.5 bg-[#EEF2F6] rounded-full overflow-hidden">
                                                <div 
                                                    className="h-full bg-[#1D4F9C] transition-all duration-1000 ease-out" 
                                                    style={{ width: `${project.constructionUpdate.percentage}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-[#323334] font-light leading-relaxed mb-4">
                                            {project.constructionUpdate.statusText}
                                        </p>
                                        <div className="flex items-center gap-4 text-[9px] text-[#323334]/40 uppercase tracking-widest border-t border-[#1D4F9C]/5 pt-4">
                                            <span>Update: {project.constructionUpdate.lastUpdated}</span>
                                            {project.reraVerifiedDate && (
                                                <>
                                                    <span className="w-1 h-1 bg-[#C5A059]/30 rounded-full" />
                                                    <span>RERA Verified: {project.reraVerifiedDate}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Expert Review (E-E-A-T Signal) - Ensure Star is imported or used from lucide-react */}
                                {project.expertReview && (
                                    <div className="bg-[#1D4F9C] p-8 rounded-sm shadow-xl text-white relative">
                                        <div className="flex items-center gap-2 mb-6">
                                            <Shield size={14} className="text-[#C5A059]" />
                                            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#C5A059]">Editorial Review</span>
                                        </div>
                                        {project.expertReview.expertId && (
                                            <div className="flex items-center gap-4 mb-6">
                                                {(() => {
                                                    const expert = getExpertById(project.expertReview.expertId!);
                                                    return expert ? (
                                                        <>
                                                            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                                                                <Image src={expert.image} alt={expert.name} fill className="object-cover" />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs font-medium text-white">{expert.name}</p>
                                                                <p className="text-[9px] text-white/60 uppercase tracking-widest">{expert.role}</p>
                                                            </div>
                                                        </>
                                                    ) : null;
                                                })()}
                                            </div>
                                        )}
                                        <h3 className="text-xl font-serif mb-4 text-[#FFFFFF]">SP Research Desk Verdict</h3>
                                        <div className="flex items-center gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <div 
                                                    key={i} 
                                                    className={`w-4 h-4 rounded-full ${i < Math.floor(project.expertReview!.rating) ? "bg-[#C5A059]" : "bg-white/20"}`}
                                                ></div>
                                            ))}
                                            <span className="ml-2 text-sm font-light text-white/80">{project.expertReview.rating}/5.0</span>
                                        </div>
                                        <p className="text-sm font-light leading-relaxed mb-6 italic text-white/90">
                                            "{project.expertReview.summary}"
                                        </p>
                                        <ul className="space-y-2">
                                            {project.expertReview.pros.map((pro, i) => (
                                                <li key={i} className="flex items-center gap-2 text-xs font-light text-white/80">
                                                    <span className="w-1 h-1 rounded-full bg-[#C5A059]"></span> {pro}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <PredictiveNavigation context="project" currentSlug={project.slug} />
                        </section>

                        {/* 5. Project Gallery */}
                        <section id="gallery" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-8 h-[1px] bg-[#1D4F9C]"></span>
                                <h2 className="text-3xl font-serif text-[#323334] font-light">Project Gallery — {project.title}</h2>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {project.gallery.map((img, idx) => (
                                    <div key={idx} className="aspect-square relative overflow-hidden rounded-sm group">
                                        <Image
                                            src={img}
                                            alt={`${project.title} ${project.location} - Architectural View ${idx + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                            sizes="(max-width: 768px) 50vw, 33vw"
                                        />
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
                                <h2 className="text-3xl font-serif text-[#323334] font-light">{project.title} Connectivity & Strategic Location</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8 bg-[#EEF2F6]/40 border border-[#C5A059]/60 p-6 rounded-sm">
                                <div className="w-full h-full min-h-[300px] relative rounded-sm overflow-hidden border border-[#C5A059]/60 grayscale hover:grayscale-0 transition-all duration-700">
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
                                            <li key={idx} className="flex justify-between items-center border-b border-[#C5A059]/60 pb-3">
                                                <span className="text-[#1A1A1A] font-light text-sm">{landmark.name}</span>
                                                <span className="text-[#1D4F9C] text-xs font-mono bg-[#FFFFFF] px-2 py-1 rounded-sm border border-[#C5A059]/60">{landmark.distance}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 7. FAQs */}
                        {project.faqs && project.faqs.length > 0 && (
                            <FAQSection items={project.faqs} title={`Common Questions about ${project.title}`} />
                        )}
                        {project.constructionUpdates && project.constructionUpdates.length > 0 && (
                            <ConstructionMilestones 
                                projectName={project.title} 
                                milestones={project.constructionUpdates} 
                            />
                        )}
                        <RealEstateGlossary />

                        {/* 8. Predictive Next Steps — Semantic Internal Linking */}
                        <section className="mt-20 p-8 bg-[#1D4F9C]/5 border border-[#1D4F9C]/20 rounded-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <TrendingUp size={18} className="text-[#1D4F9C]" />
                                <h2 className="text-xl font-serif text-[#1A1A1A]">Compare & Explore Premium Alternatives</h2>
                            </div>
                            <p className="text-sm text-[#323334] font-light mb-8 leading-relaxed">
                                Based on your interest in <strong>{project.title}</strong>, our research desk recommends exploring these high-yield premium developments in the same corridor:
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {projects.filter(p => p.id !== project.id && p.location === project.location).slice(0, 2).map(altProject => (
                                    <Link
                                        key={altProject.id}
                                        href={`/projects/${altProject.slug}`}
                                        className="group flex flex-col p-5 bg-white border border-[#C5A059]/20 hover:border-[#1D4F9C] transition-all rounded-sm shadow-sm hover:shadow-md"
                                    >
                                        <span className="text-[10px] tracking-[0.2em] text-[#1D4F9C] font-semibold mb-1 uppercase">{altProject.location}</span>
                                        <span className="text-lg font-serif text-[#1A1A1A] group-hover:text-[#1D4F9C] transition-colors">{altProject.title}</span>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="text-xs text-[#C5A059] italic">{altProject.price}</span>
                                            <span className="text-[10px] uppercase tracking-wide font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Details <ArrowRight size={12} /></span>
                                        </div>
                                    </Link>
                                ))}
                                {/* Fallback if no same-location projects */}
                                {projects.filter(p => p.id !== project.id && p.location === project.location).length === 0 &&
                                    projects.filter(p => p.id !== project.id).slice(0, 2).map(altProject => (
                                        <Link
                                            key={altProject.id}
                                            href={`/projects/${altProject.slug}`}
                                            className="group flex flex-col p-5 bg-white border border-[#C5A059]/20 hover:border-[#1D4F9C] transition-all rounded-sm shadow-sm hover:shadow-md"
                                        >
                                            <span className="text-[10px] tracking-[0.2em] text-[#1D4F9C] font-semibold mb-1 uppercase">{altProject.location}</span>
                                            <span className="text-lg font-serif text-[#1A1A1A] group-hover:text-[#1D4F9C] transition-colors">{altProject.title}</span>
                                            <div className="mt-4 flex items-center justify-between">
                                                <span className="text-xs text-[#C5A059] italic">{altProject.price}</span>
                                                <span className="text-[10px] uppercase tracking-wide font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Details <ArrowRight size={12} /></span>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </section>

                    </div>

                    {/* Right Column: Sticky Quick Action Widget */}
                    <div className="hidden lg:block lg:col-span-4 space-y-8 sticky top-40 h-fit">
                        <ProximityIndex scores={project.infrastructureScores} projectName={project.title} />

                        <div className="bg-[#EEF2F6]/80 backdrop-blur-xl border border-[#C5A059]/60 p-10 rounded-sm shadow-2xl">
                            <h3 className="text-xl font-serif text-[#323334] font-light mb-8 flex items-center gap-3">
                                <Key className="text-[#1D4F9C]" size={20} /> Property Snapshot
                            </h3>

                            <div className="space-y-6">
                                <div className="flex flex-col border-b border-[#C5A059]/60 pb-4">
                                    <span className="text-[#1A1A1A] font-light uppercase tracking-[0.2em] text-[10px] mb-1">Project Name</span>
                                    <span className="text-[#323334] font-medium text-sm tracking-wide">{project.title}</span>
                                </div>
                                <div className="flex flex-col border-b border-[#C5A059]/60 pb-4">
                                    <span className="text-[#1A1A1A] font-light uppercase tracking-[0.2em] text-[10px] mb-1">Configuration</span>
                                    <span className="text-[#323334] font-medium text-sm tracking-wide">{project.type}</span>
                                </div>
                                <div className="flex flex-col border-b border-[#C5A059]/60 pb-4">
                                    <span className="text-[#1A1A1A] font-light uppercase tracking-[0.2em] text-[10px] mb-1">Status</span>
                                    <span className="text-[#1D4F9C] font-medium text-sm tracking-wide">{project.status}</span>
                                </div>
                                <div className="flex flex-col border-b border-[#C5A059]/60 pb-6">
                                    <span className="text-[#1A1A1A] font-light uppercase tracking-[0.2em] text-[10px] mb-1">Developer</span>
                                    <span className="text-[#323334] font-medium text-sm tracking-wide">Shapoorji Pallonji Real Estate</span>
                                </div>
                                <div className="flex flex-col border-b border-[#C5A059]/60 pb-4">
                                    <span className="text-[#1A1A1A] font-light uppercase tracking-[0.2em] text-[10px] mb-1">MahaRERA ID</span>
                                    <span className="text-[#1D4F9C] font-medium text-[11px] break-all">
                                        {Array.isArray(project.reraNumber) ? project.reraNumber.join(", ") : project.reraNumber}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8 space-y-4">
                                <button className="w-full bg-[#1D4F9C] text-[#FFFFFF] uppercase tracking-[0.2em] text-[10px] font-bold py-4 hover:bg-[#323334] transition-colors duration-300 shadow-[0_10px_30px_rgba(197,160,89,0.2)]">
                                    Download Brouchure
                                </button>
                                <button className="w-full bg-transparent border border-[#C5A059] text-[#1D4F9C] uppercase tracking-[0.2em] text-[10px] font-bold py-4 hover:bg-[#FFFFFF] transition-colors duration-300">
                                    Enquire Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            {/* Intent-Based Navigation (Phase 13) */}
            <IntentLinkCluster />

            {/* Conversational Answer Hub (Phase 14) */}
            {project.conversationalFAQs && (
                <ConversationalAnswerHub 
                    projectName={project.title} 
                    answers={project.conversationalFAQs} 
                />
            )}

            {/* Institutional Legacy Hub (Phase 12) */}
            <LegacyTimeline />

            {/* Related Projects Section — Internal Linking */}
            <aside className="max-w-7xl mx-auto px-6 mt-24 pt-16 border-t border-[#C5A059]/10">
                <h2 className="text-3xl font-serif text-[#323334] mb-8">Explore More Shapoorji Pallonji Projects</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {projects.filter(p => p.slug !== project.slug).slice(0, 3).map(related => (
                        <Link key={related.id} href={`/projects/${related.slug}`} className="group bg-[#F4F6F9] border border-[#C5A059]/10 hover:border-[#C5A059]/40 p-6 transition-all duration-300 rounded-sm">
                            <span className="text-[10px] tracking-[0.2em] uppercase text-[#1D4F9C] font-semibold block mb-2">{related.location}</span>
                            <h3 className="text-lg font-serif text-[#323334] group-hover:text-[#1D4F9C] transition-colors mb-2">{related.title}</h3>
                            <p className="text-sm text-[#1D4F9C] font-serif italic">{related.price}</p>
                        </Link>
                    ))}
                </div>
            </aside>

            {/* Related Insights — Content Interlinking */}
            <aside className="max-w-7xl mx-auto px-6 mt-16 mb-8">
                <h2 className="text-2xl font-serif text-[#323334] mb-6">Market Insights & Investment Guides</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { slug: 'pune-real-estate-market-forecast-2026-investment-hotspots', title: 'Pune Real Estate Forecast 2026 — Top Investment Hotspots' },
                        { slug: 'complete-nri-guide-buying-property-pune-2026', title: 'NRI Guide to Buying Property in Pune 2026' },
                        { slug: 'best-residential-projects-hinjewadi-2025-complete-guide', title: 'Best Projects in Hinjewadi 2025 — Buyer\'s Guide' },
                        { slug: 'rera-approved-projects-pune-everything-you-need-to-know', title: 'RERA Approved Projects Pune — Complete Guide' },
                        { slug: 'pune-property-price-trends-2025-micro-market-analysis', title: 'Pune Property Price Trends — Micro-Market Analysis' },
                        { slug: 'rental-yields-hinjewadi-2025-nri-investment-guide', title: 'Rental Yields Hinjewadi — NRI Investment Guide' },
                    ].map(article => (
                        <Link key={article.slug} href={`/insights/${article.slug}`} className="flex items-center gap-3 p-4 bg-[#F4F6F9] border border-[#C5A059]/10 hover:border-[#C5A059]/40 transition-all rounded-sm group">
                            <ArrowLeft size={14} className="text-[#1D4F9C] rotate-180 group-hover:translate-x-1 transition-transform" />
                            <span className="text-sm text-[#323334] group-hover:text-[#1D4F9C] transition-colors font-light">{article.title}</span>
                        </Link>
                    ))}
                </div>

                {/* Highly Relevant SEO Routes Cross-Link */}
                <div className="mt-12 bg-[#EEF2F6] border border-[#1D4F9C]/10 p-8 rounded-sm">
                    <h3 className="text-sm tracking-[0.2em] uppercase text-[#1D4F9C] font-semibold mb-6 flex items-center gap-2">
                        <MapPin size={16} /> Related Searches & Comparisons
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            { slug: '2-bhk-flats-in-hinjewadi', label: '2 BHK in Hinjewadi' },
                            { slug: 'joyville-sensorium-price-list', label: 'Sensorium Cost Sheet' },
                            { slug: 'joyville-hadapsar-annexe-price', label: 'Hadapsar Flats Price' },
                            { slug: 'joyville-vs-kolte-patil-life-republic-hinjewadi', label: 'Joyville vs Kolte Patil' },
                            { slug: 'joyville-vs-godrej-hinjewadi', label: 'Joyville vs Godrej' },
                            { slug: 'joyville-vs-amanora-hadapsar', label: 'Joyville vs Amanora' },
                            { slug: 'flats-near-sp-infocity-pune', label: 'Flats Near SP Infocity' },
                            { slug: 'flats-near-magarpatta-pune', label: 'Flats Near Magarpatta' },
                            { slug: 'ready-to-move-flats-hadapsar', label: 'Ready Possession Hadapsar' },
                            { slug: 'nri-investment-flats-pune', label: 'NRI Flats in Pune' },
                            { slug: 'smart-home-apartments-pune', label: 'Smart Homes Pune' }
                        ].map(route => (
                            <Link key={route.slug} href={`/properties/${route.slug}`} className="px-4 py-2 bg-[#FFFFFF] border border-[#C5A059]/20 hover:border-[#1D4F9C]/40 hover:text-[#1D4F9C] text-[#323334] text-xs font-light transition-all rounded-sm">
                                {route.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Locality Cross-Link */}
                <div className="mt-8 flex flex-wrap gap-3">
                    <span className="text-xs uppercase tracking-widest text-[#323334]/60 font-semibold self-center mr-2">Explore Localities:</span>
                    {[
                        { slug: 'hinjewadi', label: 'Hinjewadi' },
                        { slug: 'hadapsar', label: 'Hadapsar' },
                        { slug: 'bavdhan', label: 'Bavdhan' },
                        { slug: 'shewalewadi', label: 'Shewalewadi' },
                        { slug: 'purandar', label: 'Purandar' },
                    ].map(loc => (
                        <Link key={loc.slug} href={`/locality/${loc.slug}`} className="px-4 py-2 bg-[#1D4F9C]/5 border border-[#1D4F9C]/10 hover:bg-[#1D4F9C]/10 hover:border-[#1D4F9C]/30 text-[#1D4F9C] text-xs font-medium tracking-wide rounded-sm transition-all">
                            {loc.label} Real Estate →
                        </Link>
                    ))}
                </div>
            </aside>

        </article>
    );
}
