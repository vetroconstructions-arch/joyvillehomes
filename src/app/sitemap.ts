import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { blogs } from '@/data/blogs';
import { localities } from '@/data/localities';
import { SEO_ROUTES } from './properties/[seoSlug]/page';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.joyville-homes.com';

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
        {
            url: `${baseUrl}/press-research`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/locality/compare`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/pune-real-estate-guide`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/insights/joyville-vs-competitors`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/flats-in-pune`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/glossary`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];

    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => {
        // Higher priority for "New Launch" and "Pre-Launch" projects
        let priority = 0.85;
        if (project.status === "New Launch" || project.status === "Pre-Launch") {
            priority = 0.95;
        }

        // QDF Signal: Use the latest of price update or construction update
        const lastMod = project.lastPriceUpdate ? new Date(project.lastPriceUpdate) : 
                        project.constructionUpdate?.lastUpdated ? new Date(project.constructionUpdate.lastUpdated) : 
                        new Date();

        return {
            url: `${baseUrl}/projects/${project.slug}`,
            lastModified: lastMod,
            changeFrequency: 'weekly',
            priority: priority,
        };
    });

    const programmaticRoutes: MetadataRoute.Sitemap = SEO_ROUTES.map((route) => ({
        url: `${baseUrl}/properties/${route.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.95, 
    }));

    const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
        url: `${baseUrl}/insights/${blog.slug}`,
        lastModified: new Date(blog.date),
        changeFrequency: 'monthly',
        priority: 0.80,
    }));

    const localityRoutes: MetadataRoute.Sitemap = localities.map((loc) => ({
        url: `${baseUrl}/locality/${loc.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    return [...baseRoutes, ...projectRoutes, ...programmaticRoutes, ...blogRoutes, ...localityRoutes];
}
