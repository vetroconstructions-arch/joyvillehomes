import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { blogs } from '@/data/blogs';
import { localities } from '@/data/localities';
import { experts } from '@/data/experts';
import { TOPIC_HUBS } from '@/data/TopicIntelligence';
import { NRI_REGIONS } from '@/data/GlobalNRI';
import { SEO_ROUTES } from './properties/[seoSlug]/page';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://joyville-homes.com';

    // Phase 16.8: Use genuinely recent dates per-route instead of a single date
    const getGeneralLastMod = () => {
        const projectDates = projects.map(p => p.lastDataAudit ? new Date(p.lastDataAudit).getTime() : 0);
        const blogDates = blogs.map(b => new Date(b.date).getTime());
        return new Date(Math.max(...projectDates, ...blogDates, new Date('2024-03-25').getTime()));
    };

    const generalLastMod = getGeneralLastMod();
    const today = new Date(); // Dynamic freshness signal for hub pages

    const baseRoutes: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}`,
            lastModified: today, // Homepage always fresh
            changeFrequency: 'always',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: today,
            changeFrequency: 'daily',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/location`,
            lastModified: generalLastMod,
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/amenities`,
            lastModified: generalLastMod,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/insights`,
            lastModified: today, // Content hub always fresh
            changeFrequency: 'always',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/media`,
            lastModified: generalLastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/press-research`,
            lastModified: today,
            changeFrequency: 'daily',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/locality/compare`,
            lastModified: today,
            changeFrequency: 'daily',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/pune-real-estate-guide`,
            lastModified: generalLastMod,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/pune-real-estate-market`,
            lastModified: today,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/insights/joyville-vs-competitors`,
            lastModified: today,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/flats-in-pune`,
            lastModified: today, // High-intent directory — always fresh
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/glossary`,
            lastModified: generalLastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/insights/matchmaker`,
            lastModified: today,
            changeFrequency: 'always',
            priority: 1.0,
        },
    ];

    // Phase 16.8: Per-project lastModified using lastDataAudit for genuine freshness
    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => {
        const lastMod = project.lastDataAudit ? new Date(project.lastDataAudit) : generalLastMod;
        return {
            url: `${baseUrl}/projects/${project.slug}`,
            lastModified: lastMod,
            changeFrequency: 'daily',
            priority: 1.0,
        };
    });

    // Phase 16.8: PSEO routes use today's date since they're dynamically generated
    const programmaticRoutes: MetadataRoute.Sitemap = SEO_ROUTES.map((route) => ({
        url: `${baseUrl}/properties/${route.slug}`,
        lastModified: today,
        changeFrequency: 'always',
        priority: 1.0,
    }));

    // Blog routes use actual publication dates for genuine freshness
    const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => {
        const isClusterGuide = blog.category === 'Master Guides' || blog.category === 'Project Clusters';
        return {
            url: `${baseUrl}/insights/${blog.slug}`,
            lastModified: new Date(blog.date),
            changeFrequency: isClusterGuide ? 'always' : 'monthly',
            priority: isClusterGuide ? 0.95 : 0.8,
        };
    });

    const localityRoutes: MetadataRoute.Sitemap = localities.map((loc) => ({
        url: `${baseUrl}/locality/${loc.slug}`,
        lastModified: today,
        changeFrequency: 'weekly', 
        priority: 0.9,
    }));

    const authorRoutes: MetadataRoute.Sitemap = experts.map(expert => ({
        url: `${baseUrl}/insights/author/${expert.id}`,
        lastModified: today, // Freshness signal for experts
        changeFrequency: 'weekly',
        priority: 0.85,
    }));

    const topicRoutes: MetadataRoute.Sitemap = TOPIC_HUBS.map(topic => ({
        url: `${baseUrl}/insights/topic/${topic.id}`,
        lastModified: today,
        changeFrequency: 'daily',
        priority: 0.9,
    }));

    const regionalNRIRoutes: MetadataRoute.Sitemap = NRI_REGIONS.map(region => ({
        url: `${baseUrl}/insights/nri/region/${region.id}`,
        lastModified: today,
        changeFrequency: 'weekly',
        priority: 0.85,
    }));

    const projectInsiderRoutes: MetadataRoute.Sitemap = projects.map(project => ({
        url: `${baseUrl}/projects/${project.slug}/insider`,
        lastModified: today,
        changeFrequency: 'daily',
        priority: 0.9,
    }));

    return [...baseRoutes, ...projectRoutes, ...blogRoutes, ...localityRoutes, ...programmaticRoutes, ...authorRoutes, ...topicRoutes, ...regionalNRIRoutes, ...projectInsiderRoutes];
}
