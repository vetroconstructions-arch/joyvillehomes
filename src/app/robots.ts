import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const siteUrl = 'https://www.joyville-homes.com';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/_next/',
                    '/api/',
                    '/admin/',
                    '/cgi-bin/',
                    '/*?*', // Prevent duplicated content from UTM/Ad parameters
                ],
                crawlDelay: 2, // Protects server from being hammered by secondary search engines
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
            },
            {
                userAgent: 'Googlebot-Image',
                allow: '/',
            },
            // Explicitly block invasive AI Scrapers to preserve Crawl Budget and Intellectual Property
            {
                userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot', 'anthropic-ai', 'Google-Extended', 'Omigili', 'FacebookBot'],
                disallow: ['/'],
            }
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl,
    };
}
