import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: 'Pune Real Estate Market Data & Analytics | Joyville Homes',
    description: 'Open-source real estate market data, micro-market pricing, and analytical datasets for Pune 2026. Available for public research and institutional analysis.',
};

export default function DataHubPage() {
    const datasetSchema = {
        '@context': 'https://schema.org',
        '@type': 'Dataset',
        'name': 'Pune Micro-Market Real Estate Pricing 2026',
        'description': 'Comprehensive dataset detailing real estate pricing, configurations, Metro proximity, and rental yields across Hinjewadi, Bavdhan, and Hadapsar micro-markets in Pune.',
        'url': 'https://joyville-homes.com/data',
        'sameAs': 'https://joyville-homes.com/data/pune-micro-market-pricing-2026.csv',
        'keywords': [
            'Pune Real Estate',
            'Property Prices Pune',
            'Hinjewadi IT Park Pricing',
            'Rental Yields Pune'
        ],
        'creator': {
            '@type': 'Organization',
            'name': 'Joyville Homes Analytics'
        },
        'distribution': [
            {
                '@type': 'DataDownload',
                'encodingFormat': 'text/csv',
                'contentUrl': 'https://joyville-homes.com/data/pune-micro-market-pricing-2026.csv'
            }
        ],
        'temporalCoverage': '2025-01-01/2026-12-31',
        'spatialCoverage': {
            '@type': 'Place',
            'geo': {
                '@type': 'GeoShape',
                'box': '18.45 73.70 18.65 73.95'
            }
        }
    };

    return (
        <main className="min-h-[100dvh] bg-[#F9FAFB] pt-24 pb-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
            />
            
            <div className="max-w-5xl mx-auto px-6">
                <Breadcrumbs items={[{ label: 'Open Data Hub', href: '/data' }]} />
                
                <header className="mb-12 mt-8">
                    <h1 className="text-4xl md:text-5xl font-serif text-[#1D4F9C] mb-6">Open Data Hub</h1>
                    <p className="text-lg text-[#4B5563] max-w-3xl">
                        As part of our commitment to market transparency, Joyville Homes provides open-source access to our proprietary micro-market pricing algorithms and rental yield models. 
                    </p>
                </header>

                <section className="bg-white p-8 rounded border border-[#E5E7EB] shadow-sm mb-12">
                    <div className="flex items-start justify-between flex-wrap gap-4">
                        <div>
                            <h2 className="text-2xl font-serif text-[#1D4F9C] mb-2">Pune Micro-Market Pricing (2026)</h2>
                            <p className="text-[#4B5563] mb-4">Formats available: CSV</p>
                            <div className="flex gap-2 mb-6">
                                <span className="bg-[#E5E7EB] text-xs px-2 py-1 rounded">Real Estate</span>
                                <span className="bg-[#E5E7EB] text-xs px-2 py-1 rounded">Pricing</span>
                                <span className="bg-[#E5E7EB] text-xs px-2 py-1 rounded">Pune</span>
                            </div>
                        </div>
                        <a 
                            href="/data/pune-micro-market-pricing-2026.csv" 
                            download
                            className="bg-[#C5A059] text-white px-6 py-3 rounded text-sm font-medium hover:bg-[#B08D4D] transition-colors"
                        >
                            Download Dataset (CSV)
                        </a>
                    </div>
                    
                    <div className="prose prose-sm max-w-none text-[#4B5563]">
                        <h3>Dataset Dictionary</h3>
                        <ul>
                            <li><strong>MicroMarket:</strong> Geographical zone (Hinjewadi, Bavdhan, Hadapsar).</li>
                            <li><strong>Price_INR:</strong> Base pricing in Indian Rupees.</li>
                            <li><strong>MetroProximity_km:</strong> Distance to the nearest planned/operational Metro Line 3 station.</li>
                            <li><strong>RentalYield_Percent:</strong> Projected annualized rental yield.</li>
                        </ul>
                        <p className="text-xs text-gray-500 mt-6 border-t pt-4">
                            License: Open Data Commons Attribution License (ODC-By). You are free to share and adapt this dataset for academic or commercial research, provided you cite Joyville Homes as the source.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
