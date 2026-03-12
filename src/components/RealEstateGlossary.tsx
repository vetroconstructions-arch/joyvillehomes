import React from 'react';

const glossaryTerms = [
    {
        term: "Carpet Area",
        definition: "The net usable floor area of an apartment, excluding the area covered by the external walls, areas under services shafts, exclusive balcony or verandah area and exclusive open terrace area.",
        url: "https://www.joyville-homes.com/pune-real-estate-guide#carpet-area"
    },
    {
        term: "RERA Registered",
        definition: "A project that has been registered with the Real Estate Regulatory Authority, ensuring transparency, financial discipline, and timely delivery.",
        url: "https://www.joyville-homes.com/pune-real-estate-guide#rera-registered"
    },
    {
        term: "Loading Factor",
        definition: "The difference between the super built-up area and the carpet area of a flat, representing the space used for common amenities like elevators, stairs, and lobbies.",
        url: "https://www.joyville-homes.com/pune-real-estate-guide#loading-factor"
    },
    {
        term: "BHK",
        definition: "An acronym for Bedroom, Hall, and Kitchen, used to define the configuration of a residential apartment.",
        url: "https://www.joyville-homes.com/pune-real-estate-guide#bhk"
    }
];

const RealEstateGlossary: React.FC = () => {
    const glossaryJsonLd = {
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        "@id": "https://www.joyville-homes.com/#real-estate-glossary",
        "name": "Shapoorji Pallonji Real Estate Glossary",
        "description": "Essential real estate terms for homebuyers in Pune, including Carpet Area, RERA, and more.",
        "hasDefinedTerm": glossaryTerms.map(term => ({
            "@type": "DefinedTerm",
            "name": term.term,
            "description": term.definition,
            "url": term.url
        }))
    };

    return (
        <section className="bg-white rounded-xl shadow-lg p-8 border border-neutral-100 my-12 overflow-hidden relative">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(glossaryJsonLd) }} />
            
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-[#1D4F9C] rounded-lg flex items-center justify-center text-white shadow-md">
                        <span className="font-serif text-xl font-bold">A-Z</span>
                    </div>
                    <div>
                        <h2 className="text-2xl font-serif text-[#1A1A1A]">Smart Homebuyer's Glossary</h2>
                        <p className="text-sm text-neutral-500 font-light">Demystifying real estate jargon for informed decisions.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {glossaryTerms.map((item, idx) => (
                        <div key={idx} className="group p-6 rounded-lg bg-[#F8FAFC] hover:bg-white border border-transparent hover:border-[#C5A059]/30 transition-all duration-300 shadow-sm hover:shadow-md">
                            <h3 className="text-lg font-bold text-[#1D4F9C] mb-2 group-hover:text-[#C5A059] transition-colors">{item.term}</h3>
                            <p className="text-sm text-[#323334] leading-relaxed font-light">{item.definition}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-100 flex justify-between items-center text-xs text-neutral-400">
                    <p>Proprietary Insights by Shapoorji Pallonji Research Desk</p>
                    <a href="/pune-real-estate-guide" className="text-[#1D4F9C] font-semibold hover:underline decoration-[#C5A059]">View Full Knowledge Base →</a>
                </div>
            </div>

            {/* Subtle Background Mark */}
            <div className="absolute -bottom-10 -right-10 text-[180px] font-serif font-black text-neutral-50/50 pointer-events-none select-none">
                J
            </div>
        </section>
    );
};

export default RealEstateGlossary;
