'use client';

import React from 'react';
import { localities } from '@/data/localities';

export default function MarketData() {
    // This component renders a Dataset schema for SEO
    const datasetSchema = {
        "@context": "https://schema.org",
        "@type": "Dataset",
        "name": "Pune Real Estate Locality Performance Matrix 2026",
        "description": "Granular data on ROI potential, infrastructure growth scores, and occupancy rates across Pune's high-growth corridors.",
        "url": "https://joyville-homes.com/pune-real-estate-market",
        "creator": {
            "@type": "Organization",
            "name": "Shapoorji Pallonji Premium Research Desk",
            "url": "https://joyville-homes.com"
        },
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "spatialCoverage": "Pune, Maharashtra, India",
        "variableMeasured": [
            {
                "@type": "PropertyValue",
                "name": "ROI Potential",
                "description": "Calculated score based on historical appreciation and project pipeline."
            },
            {
                "@type": "PropertyValue",
                "name": "Infrastructure Growth",
                "description": "Score based on upcoming metro, ring road, and IT park developments."
            }
        ],
        "dataset": localities.map(loc => ({
            "@type": "DataDownload",
            "name": `${loc.name} Performance Data`,
            "contentSize": "5KB",
            "encodingFormat": "application/json",
            "identifier": loc.slug,
            "additionalProperty": [
                { "@type": "PropertyValue", "name": "ROI", "value": loc.comparativeMetrics?.roiPotential },
                { "@type": "PropertyValue", "name": "Infra Growth", "value": loc.comparativeMetrics?.infraGrowth },
                { "@type": "PropertyValue", "name": "Avg Price", "value": loc.avgPricePerSqFt }
            ]
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
        />
    );
}
