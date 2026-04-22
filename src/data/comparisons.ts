export interface ComparisonData {
    id: string;
    joyvilleProject: string;
    competitorProject: string;
    developer: string;
    metrics: {
        label: string;
        joyville: string;
        competitor: string;
        winner: 'joyville' | 'competitor' | 'neutral';
    }[];
    summary: string;
}

export const comparisons: ComparisonData[] = [
    {
        id: 'sensorium-vs-life-republic',
        joyvilleProject: 'Joyville Sensorium',
        competitorProject: 'Life Republic',
        developer: 'Kolte Patil',
        metrics: [
            { label: 'Construction Tech', joyville: 'Mivan Monolithic', competitor: 'Traditional RCC', winner: 'joyville' },
            { label: 'Open Space', joyville: '75% Biophilic', competitor: '45-50%', winner: 'joyville' },
            { label: 'Metro Proximity', joyville: '800m (Phase 1)', competitor: '3.5km (Phase 2)', winner: 'joyville' },
            { label: 'Legacy Trust', joyville: '160 Years', competitor: '30 Years', winner: 'joyville' }
        ],
        summary: "While Life Republic is a large township, Joyville Sensorium offers superior construction quality (Mivan) and much closer proximity to the Hinjewadi IT Lifeline and Metro Line 3."
    },
    {
        id: 'hadapsar-vs-amanora',
        joyvilleProject: 'Joyville Hadapsar Annexe',
        competitorProject: 'Amanora Trendsetter',
        developer: 'Amanora',
        metrics: [
            { label: 'Acreage', joyville: '21 Acres', competitor: '400 Acres (Township)', winner: 'competitor' },
            { label: 'Value for Money', joyville: 'Premium Luxury @ 7k/sqft', competitor: '9k/sqft+', winner: 'joyville' },
            { label: 'Privacy', joyville: 'High (Lower Density)', competitor: 'Moderate (High Density)', winner: 'joyville' },
            { label: 'Connectivity', joyville: 'On Highway', competitor: 'Internal Road', winner: 'joyville' }
        ],
        summary: "Amanora offers a larger ecosystem, but Joyville Hadapsar Annexe provides a more focused, lower-density luxury experience with better price-to-value appreciation potential."
    }
];
