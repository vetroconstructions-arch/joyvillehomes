import { Metadata } from 'next';
import { glossaryTerms } from '@/data/glossary';
import Navigation from '@/components/Navigation';
import SEOFooter from '@/components/SEOFooter';

export const metadata: Metadata = {
    title: "Real Estate Glossary — Official Terminology & Meaning | Joyville Pune",
    description: "Understand critical real estate terms like RERA, Carpet Area, and Rental Yield. Our expert-desk glossary provides technical definitions for Pune homebuyers.",
    keywords: ["real estate glossary Pune", "RERA meaning", "carpet area definition", "real estate terms India", "homebuying terminology", "property glossary 2026"],
    alternates: {
        canonical: "https://www.joyville-homes.com/glossary"
    }
};

export default function GlossaryPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        "@id": "https://www.joyville-homes.com/glossary",
        "name": "Joyville Real Estate Glossary",
        "description": "A comprehensive guide to real estate terminology for Pune investors and homebuyers.",
        "hasDefinedTerm": glossaryTerms.map(term => ({
            "@type": "DefinedTerm",
            "name": term.term,
            "description": term.definition,
            "url": `https://www.joyville-homes.com/glossary#${term.slug}`
        }))
    };

    return (
        <main className="min-h-screen bg-[#FFFFFF]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navigation />

            <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#C5A059] block mb-4">Educational Hub</span>
                    <h1 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6">Real Estate Glossary</h1>
                    <p className="text-[#323334] font-light max-w-2xl mx-auto text-lg leading-relaxed">
                        Demystifying the technical language of property investment. Our expert research desk provides standardized definitions for the modern Pune homebuyer.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {glossaryTerms.map((item) => (
                        <div key={item.slug} id={item.slug} className="group p-8 bg-[#EEF2F6] border border-[#C5A059]/10 rounded-sm hover:border-[#C5A059]/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-[#1D4F9C] flex items-center justify-center text-white font-serif italic text-lg shadow-md group-hover:scale-110 transition-transform">
                                    {item.term[0]}
                                </div>
                                <h2 className="text-xl font-serif text-[#1A1A1A]">{item.term}</h2>
                            </div>
                            <p className="text-sm font-medium text-[#1D4F9C] mb-4 leading-relaxed">{item.definition}</p>
                            <p className="text-xs text-[#323334] font-light leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                {item.detailedDescription}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-24 p-12 bg-[#1A1A1A] text-white rounded-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="relative z-10 text-center">
                        <h3 className="text-2xl font-serif mb-6">Ready to apply this knowledge?</h3>
                        <p className="text-white/60 mb-8 max-w-xl mx-auto font-light">
                            Explore our premium projects across Pune's high-growth corridors and experience 150 years of engineering excellence.
                        </p>
                        <a href="/projects" className="inline-block px-10 py-4 bg-[#C5A059] text-white text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#FFFFFF] hover:text-[#1A1A1A] transition-all duration-500">
                            Explore Portfolios
                        </a>
                    </div>
                </div>
            </div>

            <SEOFooter />
        </main>
    );
}
