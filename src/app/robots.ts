import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const siteUrl = 'https://www.joyville-homes.com';

    const commonDisallow = [
        '/_next/',
        '/api/',
        '/admin/',
        '/cgi-bin/',
        '/*?*', // Prevent duplicated content from UTM/Ad parameters
    ];

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: commonDisallow,
                crawlDelay: 2,
            },
            {
                userAgent: ['Googlebot', 'Googlebot-Image'],
                allow: '/',
                disallow: commonDisallow,
            },
            // Explicitly block invasive AI Scrapers
            {
                userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot', 'anthropic-ai', 'Google-Extended', 'Omigili', 'FacebookBot'],
                disallow: ['/'],
            }
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl,
    };
}
