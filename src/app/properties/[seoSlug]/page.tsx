import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navigation';

// Define the supported SEO Slugs based on our strategy matrix
const SEO_ROUTES = [
    {
        slug: '2-bhk-flats-in-hinjewadi',
        title: 'Premium 2 BHK Flats in Hinjewadi | Joyville Homes',
        description: 'Explore the best 2 BHK luxury flats and apartments in Hinjewadi by Shapoorji Pallonji. Discover premium amenities and IT park connectivity.',
        h1: 'Premium 2 BHK Flats in Hinjewadi',
        keywords: ['2 BHK flats in Hinjewadi', 'Buy 2 BHK Hinjewadi', 'Joyville Hinjewadi 2 BHK', 'Shapoorji Pallonji Pune'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: '2 BHK' }
    },
    {
        slug: '3-bhk-luxury-apartments-pune-west',
        title: '3 BHK Luxury Apartments in Pune West | Shapoorji Pallonji',
        description: 'Discover spacious 3 BHK luxury residences in Pune West (Hinjewadi, Bavdhan). Premium townships with 150 years legacy.',
        h1: '3 BHK Luxury Apartments in Pune West',
        keywords: ['3 BHK luxury apartments Pune West', '3 BHK Bavdhan', '3 BHK Hinjewadi', 'Premium flats Pune'],
        filters: { locationMatch: 'Pune', typeMatch: '3 BHK' }
    },
    {
        slug: 'townships-near-magarpatta-city',
        title: 'Township Projects near Magarpatta City | East Pune',
        description: 'Find premium flats and township projects near Magarpatta City and SP Infocity in East Pune by Shapoorji Pallonji.',
        h1: 'Premium Township Projects Near Magarpatta City',
        keywords: ['Flats near Magarpatta', 'Townships East Pune', 'Joyville Hadapsar Annexe', 'Properties in Shewalewadi'],
        filters: { locationMatch: 'Shewalewadi|Hadapsar', typeMatch: '' }
    },
    {
        slug: 'na-bungalow-plots-near-purandar-airport',
        title: 'NA Bungalow Plots Near Purandar Airport | Treetopia',
        description: 'Invest in premium NA Bungalow Plots near the upcoming Purandar Airport in Pune. Clear title properties by Shapoorji Pallonji.',
        h1: 'Premium NA Bungalow Plots Near Upcoming Purandar Airport',
        keywords: ['NA Bungalow Plots Pune', 'Plots near Purandar Airport', 'Shapoorji Treetopia', 'Land investment Pune'],
        filters: { locationMatch: 'Jadhavwadi|Purandar', typeMatch: 'Plots' }
    }
];

export async function generateStaticParams() {
    return SEO_ROUTES.map((route) => ({
        seoSlug: route.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ seoSlug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const routeData = SEO_ROUTES.find(r => r.slug === resolvedParams.seoSlug);

    if (!routeData) {
        return { title: 'Properties | Joyville Pune' };
    }

    return {
        title: routeData.title,
        description: routeData.description,
        keywords: routeData.keywords,
        openGraph: {
            title: routeData.title,
            description: routeData.description,
        },
        alternates: {
            canonical: `https://localhost:3000/properties/${routeData.slug}`
        }
    };
}

export default async function ProgrammaticSEOPage({ params }: { params: Promise<{ seoSlug: string }> }) {
    const resolvedParams = await params;
    const routeData = SEO_ROUTES.find(r => r.slug === resolvedParams.seoSlug);

    if (!routeData) {
        notFound();
    }

    // Filter projects based on the programmatic route logic
    const matchedProjects = projects.filter(project => {
        const matchesLocation = routeData.filters.locationMatch ? new RegExp(routeData.filters.locationMatch, 'i').test(project.location) : true;
        const matchesType = routeData.filters.typeMatch ? new RegExp(routeData.filters.typeMatch, 'i').test(project.type) : true;
        return matchesLocation && matchesType;
    });

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": routeData.h1,
        "description": routeData.description,
        "itemListElement": matchedProjects.map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "RealEstateListing",
                "name": project.title,
                "url": `https://localhost:3000/projects/${project.slug}`,
                "image": project.image
            }
        }))
    };

    return (
        <main className="min-h-screen bg-[#EEF2F6] pt-32 pb-24 text-[#323334]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <header className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#1D4F9C] font-semibold block mb-4">Shapoorji Pallonji Curated Collection</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#323334] font-light mb-6">{routeData.h1}</h1>
                <p className="text-[#323334] text-lg max-w-3xl mx-auto font-light leading-relaxed">
                    {routeData.description} Explore our portfolio of premium properties crafted with a 150-year legacy of trust and engineering excellence.
                </p>
            </header>

            <section className="max-w-7xl mx-auto px-6">
                {matchedProjects.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {matchedProjects.map(project => (
                            <Link href={`/projects/${project.slug}`} key={project.id} className="group flex flex-col bg-[#FFFFFF] rounded-sm overflow-hidden border border-[#1D4F9C]/20 hover:border-[#1D4F9C]/50 transition-all duration-500 shadow-lg hover:shadow-2xl">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute top-4 right-4 bg-[#FFFFFF]/90 backdrop-blur-md px-3 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase text-[#1D4F9C]">
                                        {project.status}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-[#1D4F9C] text-xs font-medium tracking-wider uppercase mb-3">
                                        <MapPin size={14} /> {project.location}
                                    </div>
                                    <h2 className="text-2xl font-serif text-[#323334] mb-3">{project.title}</h2>
                                    <p className="text-[#1D4F9C] font-serif italic text-xl mb-4">{project.price}</p>

                                    <p className="text-[#323334] font-light text-sm line-clamp-2 mb-6 border-b border-[#1D4F9C]/10 pb-6">
                                        {project.type}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between text-[#323334] group-hover:text-[#1D4F9C] transition-colors">
                                        <span className="text-[10px] tracking-[0.2em] font-bold uppercase">View Project</span>
                                        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-[#FFFFFF] border border-[#1D4F9C]/20 rounded-sm">
                        <p className="text-[#323334] text-lg font-light">New inventory coming soon for this specific requirement.</p>
                        <Link href="/projects" className="inline-block mt-6 text-[#1D4F9C] border-b border-[#1D4F9C] pb-1 uppercase tracking-widest text-xs font-bold hover:text-[#323334] hover:border-[#323334] transition-colors">
                            View All Projects
                        </Link>
                    </div>
                )}
            </section>

            <footer className="py-20 bg-[#FFFFFF] border-t border-[#1D4F9C]/30 text-center">
                <div className="text-3xl font-serif text-[#1D4F9C] font-light tracking-widest mb-4">JOYVILLE <span className="text-[10px] font-sans tracking-[0.4em] text-[#323334] uppercase ml-2">Pune</span></div>
                <p className="text-[#323334]/40 text-[9px] tracking-[0.3em] uppercase font-medium">MahaRERA: P52100000000 | A Shapoorji Pallonji Real Estate Project</p>
            </footer>
        </main>
    );
}
