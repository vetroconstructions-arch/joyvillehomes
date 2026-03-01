import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { blogs } from '@/data/blogs';

const SEO_ROUTES = [
    // High-volume locational pages
    '2-bhk-flats-in-hinjewadi',
    '3-bhk-luxury-apartments-pune-west',
    'townships-near-magarpatta-city',
    'na-bungalow-plots-near-purandar-airport',
    // Typology pages
    '3-bhk-flats-in-hinjewadi',
    '1-bhk-flats-in-hadapsar',
    'flats-in-bavdhan-pune',
    'ready-to-move-flats-hadapsar',
    // Comparison landing pages
    'joyville-vs-kolte-patil-life-republic-hinjewadi',
    'joyville-vs-godrej-hinjewadi',
    // Luxury & new launch pages
    'luxury-apartments-hinjewadi-phase-1',
    'new-launch-projects-hinjewadi-2025'
];

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://joyvillehomes-6fmc-git-main-vetroconstructions-7870s-projects.vercel.app';

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

    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.85,
    }));

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
