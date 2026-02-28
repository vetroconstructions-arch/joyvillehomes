import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { blogs } from '@/data/blogs';

const SEO_ROUTES = [
    '2-bhk-flats-in-hinjewadi',
    '3-bhk-luxury-apartments-pune-west',
    'townships-near-magarpatta-city',
    'na-bungalow-plots-near-purandar-airport'
];
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://joyville-hinjewadi.example.com';

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
            priority: 1.0, // Maximum priority for the Hub
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9, // High priority for Projects Hub
        },
        {
            url: `${baseUrl}/location`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8, // High priority for Spoke
        },
        {
            url: `${baseUrl}/amenities`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8, // High priority for Spoke
        },
        {
            url: `${baseUrl}/insights`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9, // High priority for Content Hub
        },
        {
            url: `${baseUrl}/media`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7, // PR and Media assets
        },
    ];

    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8, // Strong SEO linkage for individual projects
    }));

    const programmaticRoutes: MetadataRoute.Sitemap = SEO_ROUTES.map((slug) => ({
        url: `${baseUrl}/properties/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9, // Very high priority - specifically built for generic search
    }));

    const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
        url: `${baseUrl}/insights/${blog.slug}`,
        lastModified: new Date(blog.date),
        changeFrequency: 'monthly',
        priority: 0.7, // Educational content
    }));

    const localityRoutes: MetadataRoute.Sitemap = LOCALITY_ROUTES.map((slug) => ({
        url: `${baseUrl}/locality/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9, // High priority for localized search hubs
    }));

    return [...baseRoutes, ...projectRoutes, ...programmaticRoutes, ...blogRoutes, ...localityRoutes];
}
