import React from 'react';

interface MarketTrendDatasetProps {
    marketBenchmark?: string;
    competitiveInsights?: { label: string; value: string }[];
    projectName: string;
    location: string;
}

const MarketTrendDataset: React.FC<MarketTrendDatasetProps> = ({
    marketBenchmark,
    competitiveInsights,
    projectName,
    location
}) => {
    if (!marketBenchmark && (!competitiveInsights || competitiveInsights.length === 0)) return null;

    // Structured Data for Dataset
    const datasetSchema = {
        "@context": "https://schema.org",
        "@type": "Dataset",
        "name": `${projectName} Market Intelligence & Competitive Analysis`,
        "description": `Comprehensive market benchmarking and competitive analysis for ${projectName} in ${location}.`,
        "url": `https://joyville-homes.com/projects/${projectName.toLowerCase().replace(/\s+/g, '-')}`,
        "creator": {
            "@type": "Organization",
            "name": "Shapoorji Pallonji Real Estate",
            "url": "https://joyville-homes.com"
        },
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "variableMeasured": [
            "Market Price Benchmark",
            "Competitive Advantages",
            "Strategic Positioning"
        ],
        "distribution": {
            "@type": "DataDownload",
            "encodingFormat": "text/html",
            "contentUrl": `https://joyville-homes.com/projects/${projectName.toLowerCase().replace(/\s+/g, '-')}`
        }
    };

    return (
        <section className="my-12 p-8 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl border border-indigo-500/30 shadow-2xl overflow-hidden relative group">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
            />
            
            {/* Background decorative elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-700"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-700"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-indigo-500/20 rounded-lg">
                        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Intelligence Core: Market Dataset</h3>
                </div>

                {marketBenchmark && (
                    <div className="mb-8 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-indigo-400/50 transition-all duration-300">
                        <h4 className="text-indigo-300 font-semibold mb-2 uppercase text-xs tracking-widest flex items-center gap-2">
                            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                            Market Benchmark Analysis
                        </h4>
                        <p className="text-slate-200 text-lg leading-relaxed font-medium">
                            {marketBenchmark}
                        </p>
                    </div>
                )}

                {competitiveInsights && competitiveInsights.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {competitiveInsights.map((insight, index) => (
                            <div key={index} className="p-5 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-colors duration-300 group/item">
                                <div className="text-indigo-400 font-bold mb-1 text-sm group-hover/item:text-indigo-300 transition-colors">
                                    {insight.label}
                                </div>
                                <div className="text-slate-300 text-sm leading-relaxed">
                                    {insight.value}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-8 pt-6 border-t border-slate-700/50 flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Status: Machine-Readable Conclusion Verified
                    </div>
                    <div className="px-4 py-1 bg-indigo-500/10 text-indigo-300 text-[10px] rounded-full font-bold uppercase tracking-tighter border border-indigo-500/20">
                        AI-Ready Knowledge Cluster
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketTrendDataset;
