import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { blogs } from '@/data/blogs';
import { localities } from '@/data/localities';
import { SEO_ROUTES } from './properties/[seoSlug]/page';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://joyville-homes.com';

    const baseRoutes: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: 'always', // Signalling constant updates to SGE
            priority: 1.0,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.95, // Tier 1 Hub
        },
        {
            url: `${baseUrl}/location`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/amenities`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/insights`,
            lastModified: new Date(),
            changeFrequency: 'always', // Content velocity signal
            priority: 1.0,
        },
        {
            url: `${baseUrl}/media`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/press-research`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/locality/compare`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/pune-real-estate-guide`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/pune-real-estate-market`,
            lastModified: new Date(), // Always fresh for Google
            changeFrequency: 'daily',
            priority: 1.0, // High-intent topical authority
        },
        {
            url: `${baseUrl}/insights/joyville-vs-competitors`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/flats-in-pune`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0, // High-intent transactional parent
        },
        {
            url: `${baseUrl}/glossary`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];

    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => {
        // Super Aggressive: Everything is Priority 1.0 for the crawl budget
        const priority = 1.0;

        // QDF Signal: Use the latest audit date or current date for maximum freshness pressure
        const lastMod = new Date();

        return {
            url: `${baseUrl}/projects/${project.slug}`,
            lastModified: lastMod,
            changeFrequency: 'always',
            priority: priority,
        };
    });

    const programmaticRoutes: MetadataRoute.Sitemap = SEO_ROUTES.map((route) => ({
        url: `${baseUrl}/properties/${route.slug}`,
        lastModified: new Date(),
        changeFrequency: 'always',
        priority: 1.0, // Uplifted for transactional dominance
    }));

    const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => {
        return {
            url: `${baseUrl}/insights/${blog.slug}`,
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1.0, // Uplifted for Discover velocity
        };
    });

    const localityRoutes: MetadataRoute.Sitemap = localities.map((loc) => ({
        url: `${baseUrl}/locality/${loc.slug}`,
        lastModified: new Date(),
        changeFrequency: 'always', 
        priority: 1.0,
    }));

    return [...baseRoutes, ...projectRoutes, ...programmaticRoutes, ...blogRoutes, ...localityRoutes];
}
