export interface NRIRegion {
    id: string;
    name: string;
    slug: string;
    currencyLabel: string;
    exchangeRateSource: string;
    investmentAdvantage: string[];
    taxNotes: string;
    legalProcess: string[];
    marketSentiment: string;
    relatedProjects: string[]; // Slugs
}

export const NRI_REGIONS: NRIRegion[] = [
    {
        id: 'nri-uae-dubai',
        name: 'UAE & Middle East (Dubai/Abu Dhabi)',
        slug: 'pune-real-estate-investment-guide-uae-nri',
        currencyLabel: 'UAE Dirham Region',
        exchangeRateSource: 'Google Finance API Cross-Rate',
        investmentAdvantage: [
            "0% Personal Income Tax in origin country allows for maximum capital allocation in Indian properties.",
            "Historical regional currency stability against INR provides a 'Buffer of Safety' for property entry.",
            "Proximity to Pune (3.5hr flight) allows for easier physical asset monitoring and maintenance."
        ],
        taxNotes: "Rental income in India is subject to TDS for NRIs. However, Double Taxation Avoidance Agreements (DTAA) between UAE and India ensure you are not taxed twice.",
        legalProcess: [
            "Property can be purchased using NRE or NRO accounts.",
            "Power of Attorney (PoA) is highly recommended for middle-east based buyers to handle registration locally.",
            "Digital KYC and remote E-Registration are now fully operational for Joyville projects."
        ],
        marketSentiment: "High demand from Hinjewadi-origin tech professionals now based in DIFC and Dubai Internet City.",
        relatedProjects: ['joyville-sensorium-hinjewadi', 'joyville-hadapsar-annexe-pune']
    },
    {
        id: 'nri-usa-tech',
        name: 'USA & North America (Silicon Valley/Huntsville)',
        slug: 'pune-investment-strategy-usa-based-nri',
        currencyLabel: 'US Dollar Region',
        exchangeRateSource: 'Live Multi-Currency Matrix',
        investmentAdvantage: [
            "Local currency strength against INR currently offers a ~15-20% 'Yield Discount' vs. historical entry points.",
            "Higher disposable income in US tech sectors allows for diversifying into 3 BHK 'Legacy Assets' earlier in life.",
            "Favorable tax treatment on long-term capital gains for residential property in India."
        ],
        taxNotes: "US-based NRIs must report global income in their local jurisdiction. Joyville provides FEMA-compliant investment reports to simplify your filing.",
        legalProcess: [
            "FEMA regulations allow 100% repatriation of the principal amount and capital gains (subject to tax).",
            "Passport and OCI card are mandatory for paperless transactions.",
            "Mortgage availability through Joyville partners for US-citizens of Indian origin."
        ],
        marketSentiment: "Strong focus on 'Reversed Brain Drain' assets—purchasing homes for future retirement or parent care in Pune West.",
        relatedProjects: ['joyville-sensorium-hinjewadi', 'joyville-vyomora-hinjewadi']
    },
    {
        id: 'nri-uk-europe',
        name: 'UK & Europe (London/Berlin)',
        slug: 'pune-property-market-insights-uk-europe-nri',
        currencyLabel: 'UK Pound Region',
        exchangeRateSource: 'Bank of England Reference Rate',
        investmentAdvantage: [
            "Pune's emerging 'Science & Tech' corridor is modeled after European innovation hubs, ensuring long-term liquid assets.",
            "Diversification away from stagnant European real estate markets into 8% inflation-shielded Indian assets.",
            "Direct flight connectivity expansion between London and Pune/Mumbai."
        ],
        taxNotes: "UK/India DTAA provides relief on tax paid in India against your local tax liability on foreign income.",
        legalProcess: [
            "PAN Card application process is fully outsourced for our UK clients to ensure zero-physical-visit compliance.",
            "All agreements are available in digital-signed formats compatible with UK legal standards."
        ],
        marketSentiment: "Increasing interest from second-generation NRIs looking for high-yield 'Managed Townships' like Hadapsar Annexe.",
        relatedProjects: ['joyville-hadapsar-annexe-pune', 'joyville-sensorium-hinjewadi']
    }
];

export function getNRIRegionById(id: string): NRIRegion | undefined {
    return NRI_REGIONS.find(r => r.id === id);
}

export function getNRIRegionBySlug(slug: string): NRIRegion | undefined {
    return NRI_REGIONS.find(r => r.slug === slug);
}
