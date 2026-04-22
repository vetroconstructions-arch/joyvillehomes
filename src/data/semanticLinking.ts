/**
 * Semantic Link Registry (Phase 13)
 * Maps entities to shared Knowledge Graph traits for cross-linking.
 */

export interface SemanticLink {
    category: string;
    description: string;
    entities: string[]; // Slugs of projects or localities
    wikidataUri?: string;
}

export const SEMANTIC_MESH: SemanticLink[] = [
    {
        category: "IT Corridor Alpha",
        description: "Projects and localities positioned within Pune's primary technology growth corridor near Phase 1 and 2.",
        entities: ["hinjewadi", "bavdhan", "joyville-vyomora-hinjewadi", "joyville-sensorium-hinjewadi", "vanaha-pune"],
        wikidataUri: "https://www.wikidata.org/wiki/Q104840845"
    },
    {
        category: "Integrated Township Excellence",
        description: "Large-scale gated communities offering self-contained ecosystems and massive green belts.",
        entities: ["hadapsar", "joyville-hadapsar-annexe-pune", "joyville-celestia-hadapsar", "vanaha-pune", "wildernest-sp-kingstown-pune"],
        wikidataUri: "https://www.wikidata.org/wiki/Q16950284"
    },
    {
        category: "Manufacturing & Industrial Anchors",
        description: "Regions driven by proximity to Pune's global manufacturing and logistics hubs like SP Infocity.",
        entities: ["hadapsar", "purandar", "joyville-hadapsar-annexe-pune", "shapoorji-treetopia-pune"],
        wikidataUri: "https://www.wikidata.org/wiki/Q7300405"
    },
    {
        category: "Aviation Catalyst Growth",
        description: "High-alpha investment zones positioned near the upcoming Purandar International Airport corridor.",
        entities: ["purandar", "shapoorji-treetopia-pune", "wildernest-sp-kingstown-pune"],
        wikidataUri: "https://www.wikidata.org/wiki/Q30645638"
    },
    {
        category: "Golf & Resort Living",
        description: "Premium wellness-focused residences offering luxury views and adjacency to world-class golf infrastructure.",
        entities: ["bavdhan", "vanaha-golfland-pune", "vanaha-pune"],
        wikidataUri: "https://www.wikidata.org/wiki/Q110269430"
    },
    {
        category: "Vastu & Celestial Alignment",
        description: "Architectural designs optimized for spatial harmony, natural airflow, and Vastu-compliant layouts.",
        entities: ["hadapsar", "joyville-celestia-hadapsar", "joyville-skyluxe-hadapsar"],
        wikidataUri: "https://www.wikidata.org/wiki/Q762963"
    },
    {
        category: "Biophilic Wellness Hubs",
        description: "Residential projects prioritizing 75%+ open spaces, nature trails, and biophilic living principles.",
        entities: ["hinjewadi", "joyville-sensorium-hinjewadi", "wildernest-sp-kingstown-pune"],
        wikidataUri: "https://www.wikidata.org/wiki/Q2567222"
    }
];

export function getRelatedEntities(currentSlug: string): SemanticLink[] {
    return SEMANTIC_MESH.filter(link => link.entities.includes(currentSlug));
}
