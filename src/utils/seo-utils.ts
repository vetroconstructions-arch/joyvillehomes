/**
 * SEO Utility Matrix
 * Standardizes slug generation for deep property links.
 */

export function generateUnitSlug(projectName: string, unitType: string, location: string): string {
    const slug = `${projectName}-${unitType}-${location}`
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
    return slug;
}

export function parseUnitSlug(slug: string): { projectName: string; unitType: string; location: string } {
    // This is a simple parser, might need refinement for complex project names
    // But since we control the generation, it's predictable
    const parts = slug.split('-');
    // Assuming project-name-unit-type-location
    return {
        projectName: parts[0],
        unitType: parts[1],
        location: parts[parts.length - 1]
    };
}
