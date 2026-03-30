import React from 'react';

const glossaryTerms = [
    {
        term: "Carpet Area",
        definition: "The net usable floor area of an apartment, excluding walls, balcony areas, and service shafts. Regulated by RERA for transparency.",
        url: "https://joyville-homes.com/pune-real-estate-guide#carpet-area"
    },
    {
        term: "RERA ID (MahaRERA)",
        definition: "A unique registration number issued by the Maharashtra Real Estate Regulatory Authority, ensuring the project's legal compliance and financial discipline.",
        url: "https://joyville-homes.com/pune-real-estate-guide#maharera"
    },
    {
        term: "Loading Factor",
        definition: "The ratio between the super built-up area and carpet area, used to account for common spaces like lobbies, elevators, and clubhouse amenities.",
        url: "https://joyville-homes.com/pune-real-estate-guide#loading-factor"
    },
    {
        term: "BHK Configuration",
        definition: "Stands for Bedroom, Hall, and Kitchen. Joyville Hinjewadi and Hadapsar projects offer 1, 2, and 3 BHK configurations optimized for urban living.",
        url: "https://joyville-homes.com/pune-real-estate-guide#bhk"
    },
    {
        term: "Occupancy Certificate (OC)",
        definition: "A document issued by the local municipal body (PMC/PCMC/PMRDA) certifying that a building is safe for occupation and meets all sanctioned building norms.",
        url: "https://joyville-homes.com/pune-real-estate-guide#oc"
    },
    {
        term: "Stamp Duty & Registration",
        definition: "A tax paid to the state government for property transactions. In Pune, this is typically 7% of the agreement value (including LBT and Metro Cess).",
        url: "https://joyville-homes.com/pune-real-estate-guide#stamp-duty"
    },
    {
        term: "Floor Space Index (FSI)",
        definition: "The ratio of the total built-up area to the total area of the plot. Pune's UDCPR rules dictate the permissible FSI for residential developments.",
        url: "https://joyville-homes.com/pune-real-estate-guide#fsi"
    },
    {
        term: "Transferable Development Rights (TDR)",
        definition: "A certificate from the municipal authority that allows developers to build above the standard FSI, often used to create additional floors in IT corridors like Hinjewadi.",
        url: "https://joyville-homes.com/pune-real-estate-guide#tdr"
    },
    {
        term: "Ready Reckoner Rate",
        definition: "The minimum property valuation rate set by the government, used as the benchmark for calculating stamp duty and registration fees.",
        url: "https://joyville-homes.com/pune-real-estate-guide#ready-reckoner"
    },
    {
        term: "Commencement Certificate (CC)",
        definition: "A legal document issued by the planning authority allowing the developer to begin the construction of the building after verifying layout plans.",
        url: "https://joyville-homes.com/pune-real-estate-guide#cc"
    },
    {
        term: "Ready-to-Move-In (RTMI)",
        definition: "Properties that have received the OC and are ready for immediate possession, typically attracting higher demand due to immediate tax benefits under Section 24.",
        url: "https://joyville-homes.com/pune-real-estate-guide#rtmi"
    },
    {
        term: "PMRDA",
        definition: "Pune Metropolitan Region Development Authority. The governing body responsible for planning and development in Pune's growth corridors, including Hinjewadi.",
        url: "https://joyville-homes.com/pune-real-estate-guide#pmrda"
    },
    {
        term: "Biophilic Design",
        definition: "An architectural approach that connects residents with nature. Features like forest trails in Joyville Sensorium and Vanaha utilize this to enhance mental well-being.",
        url: "https://joyville-homes.com/pune-real-estate-guide#biophilic"
    },
    {
        term: "Pune Metro Line 3",
        definition: "The 23km elevated metro corridor connecting Hinjewadi Phase 3 to Shivajinagar, set to drastically reduce commute times and boost property values in Phase 1.",
        url: "https://joyville-homes.com/pune-real-estate-guide#metro-line-3"
    },
    {
        term: "SP Infocity",
        definition: "A premier IT/ITES SEZ in Phursungi, Hadapsar, developed by Shapoorji Pallonji, creating massive rental demand for nearby Joyville Hadapsar Annexe.",
        url: "https://joyville-homes.com/pune-real-estate-guide#sp-infocity"
    },
    {
        term: "Rental Yield",
        definition: "The annual rental income from a property as a percentage of its cost. Hinjewadi currently offers one of Pune's highest yields at 3.5% to 4.8%.",
        url: "https://joyville-homes.com/pune-real-estate-guide#rental-yield"
    },
    {
        term: "Knowledge Economy",
        definition: "Refers to the sector of the economy based on intellectual capital. Pune's West and East corridors are the primary hubs of India's knowledge economy.",
        url: "https://joyville-homes.com/pune-real-estate-guide#knowledge-economy"
    },
    {
        term: "7/12 Extract",
        definition: "An official document maintained by the revenue department that identifies the ownership, land survey number, and area of a property in Maharashtra.",
        url: "https://joyville-homes.com/pune-real-estate-guide#7-12-extract"
    },
    {
        term: "Maintenance Charges",
        definition: "Fees collected by the housing society for the upkeep of common amenities, security, and cleaning. Joyville manages these via professional service teams.",
        url: "https://joyville-homes.com/pune-real-estate-guide#maintenance"
    },
    {
        term: "GST on Construction",
        definition: "The Goods and Services Tax applicable on under-construction properties. Affordable housing (under ₹45L) attracts 1%, while others attract 5% without ITC.",
        url: "https://joyville-homes.com/pune-real-estate-guide#gst"
    }
];

const RealEstateGlossary: React.FC = () => {
    const glossaryJsonLd = {
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        "@id": "https://joyville-homes.com/#real-estate-glossary",
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
                        <h2 className="text-2xl font-serif text-[#1A1A1A]">Smart Homebuyer&apos;s Glossary</h2>
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
