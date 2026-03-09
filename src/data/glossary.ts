export interface GlossaryTerm {
    term: string;
    definition: string;
    slug: string;
    detailedDescription?: string;
}

export const glossaryTerms: GlossaryTerm[] = [
    {
        term: "RERA",
        slug: "rera-meaning",
        definition: "Real Estate (Regulation and Development) Act, 2016. It is designed to protect homebuyers and boost investments in the real estate industry.",
        detailedDescription: "The Real Estate (Regulation and Development) Act, 2016 is an Act of the Parliament of India which seeks to protect home-buyers as well as help boost investments in the real estate industry. State-level regulatory authorities (like MahaRERA in Maharashtra) oversee compliance and resolve disputes."
    },
    {
        term: "Carpet Area",
        slug: "carpet-area-definition",
        definition: "The net usable floor area of an apartment, excluding the area covered by the external walls, but including the area covered by internal partition walls.",
        detailedDescription: "As per RERA, carpet area is the actual usable area within the walls of the apartment. This excludes balconies, terraces, and external walls, but uniquely includes internal partition walls. This standardization prevents developers from charging based on inflated 'super built-up' areas."
    },
    {
        term: "Possession Date",
        slug: "possession-date",
        definition: "The legally binding date by which the developer must hand over the property to the buyer, as registered with RERA.",
        detailedDescription: "Under RERA, the possession date is a strict legal commitment. Developers must pay interest to the buyer for every month of delay beyond this date, ensuring transparency and accountability in construction timelines."
    },
    {
        term: "Rental Yield",
        slug: "rental-yield-pune",
        definition: "The annual rental income from a property expressed as a percentage of its total market value.",
        detailedDescription: "In Pune IT hubs like Hinjewadi, residential rental yields often range from 4.5% to 5.5%, significantly higher than the national urban average. It is a critical metric for NRI and secondary-income investors."
    },
    {
        term: "Stamp Duty",
        slug: "stamp-duty-pune",
        definition: "A tax levied by the state government on the transfer of property ownership.",
        detailedDescription: "In Maharashtra, stamp duty for residential property typically ranges from 5% to 7% of the agreement value, depending on the location and specific government incentives at the time of registration."
    }
];
