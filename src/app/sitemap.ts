import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { blogs } from '@/data/blogs';

const SEO_ROUTES = [
    // IT Hub specific (High Volume)
    'flats-near-eon-it-park-kharadi',
    'property-near-sp-infocity-phursungi',
    'apartments-near-magarpatta-city-hadapsar',
    'residential-projects-near-hinjewadi-phase-1',
    // Locational specific
    '2-bhk-flats-in-hinjewadi-pune',
    '3-bhk-luxury-apartments-pune-west',
    'affordable-flats-in-shewalewadi-hadapsar',
    'na-bungalow-plots-near-purandar-airport',
    // Typology & Intent
    'ready-to-move-flats-in-hadapsar',
    'new-launch-projects-pune-2025',
    'luxury-apartments-with-golf-view-bavdhan',
    // Competitor Comparison
    'joyville-vs-kolte-patil-life-republic-hinjewadi',
    'joyville-vs-godrej-properties-pune'
];

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.joyville-homes.com';

    const LOCALITY_ROUTES = [
        'hinjewadi',
        'bavdhan',
        'hadapsar'
    ];

    const baseRoutes: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/location`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/amenities`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/insights`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/media`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => {
        // Higher priority for "New Launch" and "Pre-Launch" projects
        let priority = 0.85;
        if (project.status === "New Launch" || project.status === "Pre-Launch") {
            priority = 0.95;
        }

        return {
            url: `${baseUrl}/projects/${project.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: priority,
        };
    });

    const programmaticRoutes: MetadataRoute.Sitemap = SEO_ROUTES.map((slug) => ({
        url: `${baseUrl}/properties/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
        url: `${baseUrl}/insights/${blog.slug}`,
        lastModified: new Date(blog.date),
        changeFrequency: 'monthly',
        priority: 0.75,
    }));

    const localityRoutes: MetadataRoute.Sitemap = LOCALITY_ROUTES.map((slug) => ({
        url: `${baseUrl}/locality/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    return [...baseRoutes, ...projectRoutes, ...programmaticRoutes, ...blogRoutes, ...localityRoutes];
}
