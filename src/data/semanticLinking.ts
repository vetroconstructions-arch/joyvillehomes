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
        description: "Projects and localities positioned within Pune's primary technology growth corridor.",
        entities: ["hinjewadi", "bavdhan", "joyville-vyomora-hinjewadi", "joyville-sensorium-hinjewadi"],
        wikidataUri: "https://www.wikidata.org/wiki/Q104840845"
    },
    {
        category: "Integrated Township Excellence",
        description: "Large-scale gated communities offering self-contained ecosystems and massive green belts.",
        entities: ["hadapsar", "joyville-hadapsar-annexe-pune", "joyville-celestia-hadapsar"],
        wikidataUri: "https://www.wikidata.org/wiki/Q16950284"
    },
    {
        category: "Manufacturing & Industrial Anchors",
        description: "Regions driven by proximity to Pune's global manufacturing and logistics hubs.",
        entities: ["hadapsar", "purandar", "joyville-hadapsar-annexe-pune"],
        wikidataUri: "https://www.wikidata.org/wiki/Q7300405"
    }
];

export function getRelatedEntities(currentSlug: string): SemanticLink[] {
    return SEMANTIC_MESH.filter(link => link.entities.includes(currentSlug));
}
