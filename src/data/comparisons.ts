export interface ComparisonMetric {
    label: string;
    joyvilleValue: string | number;
    competitorAvg: string | number;
    unit?: string;
    sentiment: 'positive' | 'neutral' | 'negative';
}

export interface ProjectComparison {
    projectId: string;
    projectTitle: string;
    competitorGroup: string; // e.g. "Hinjewadi Parity Projects"
    metrics: ComparisonMetric[];
    summary: string;
}

export const comparisons: ProjectComparison[] = [
    {
        projectId: "p0",
        projectTitle: "Joyville Vyomora",
        competitorGroup: "Hinjewadi Phase 1 Premium",
        metrics: [
            { label: "Amenity Density", joyvilleValue: 60, competitorAvg: 35, unit: "features", sentiment: 'positive' },
            { label: "Construction Technology", joyvilleValue: "Pre-Cast", competitorAvg: "Masonry", sentiment: 'positive' },
            { label: "Open Space", joyvilleValue: 75, competitorAvg: 60, unit: "%", sentiment: 'positive' },
            { label: "Estimated Possession", joyvilleValue: 2027, competitorAvg: 2028, sentiment: 'positive' }
        ],
        summary: "Joyville Vyomora outperforms micro-market averages in amenity density and construction speed, leveraging Shapoorji Pallonji's global engineering legacy."
    },
    {
        projectId: "p1",
        projectTitle: "Joyville Sensorium",
        competitorGroup: "Pune West Luxury IT Corridor",
        metrics: [
            { label: "Biophilic Design", joyvilleValue: "Advanced", competitorAvg: "Standard", sentiment: 'positive' },
            { label: "Edge Certification", joyvilleValue: "Yes", competitorAvg: "No", sentiment: 'positive' },
            { label: "2BHK Carpet Area", joyvilleValue: 720, competitorAvg: 680, unit: "sq.ft", sentiment: 'positive' },
            { label: "Customer Trust Score", joyvilleValue: 4.9, competitorAvg: 4.2, unit: "/5", sentiment: 'positive' }
        ],
        summary: "As an Edge-certified green development, Sensorium provides superior air quality and larger carpet areas compared to Hinjewadi parity projects."
    },
    {
        projectId: "p2",
        projectTitle: "Joyville Hadapsar Annexe",
        competitorGroup: "Pune East Townships",
        metrics: [
            { label: "Township Size", joyvilleValue: 21, competitorAvg: 12, unit: "acres", sentiment: 'positive' },
            { label: "Clubhouse Size", joyvilleValue: 35000, competitorAvg: 15000, unit: "sq.ft", sentiment: 'positive' },
            { label: "Park Space", joyvilleValue: 8, competitorAvg: 3, unit: "acres", sentiment: 'positive' },
            { label: "Maintenance Efficiency", joyvilleValue: "High", competitorAvg: "Medium", sentiment: 'positive' }
        ],
        summary: "Hadapsar Annexe offers the largest integrated park and clubhouse ecosystem in the East Pune corridor, significantly exceeding industrial township standards."
    }
];
