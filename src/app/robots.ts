import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const siteUrl = 'https://joyville-homes.com';

    const commonDisallow = [
        '/_next/',
        '/api/',
        '/admin/',
        '/cgi-bin/',
        '/*?*', // Prevent duplicated content from UTM/Ad parameters
        '/*?filter=*',
        '/*?sort=*',
        '/*?search=*',
    ];

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: commonDisallow,
            },
            {
                userAgent: ['Googlebot', 'Googlebot-Image'],
                allow: '/',
                disallow: commonDisallow,
            },
            {
                userAgent: ['YandexBot', 'YandexImages', 'Baiduspider', 'Baiduspider-image', 'Sogou-Test-Spider', 'Sogou-Web-Spider'],
                allow: '/',
                disallow: commonDisallow,
            },
            {
                userAgent: 'Google-InspectionTool',
                allow: '/',
                disallow: [], // Full access for visual/technical inspection
            },
            // Block invasive scrapers, but ALLOW top-tier AI Search engines (ChatGPT, Claude, Gemini) for AGI/SGE Dominance
            {
                userAgent: ['CCBot', 'Omigili', 'FacebookBot', 'Twitterbot'],
                disallow: ['/'],
            },
            {
                userAgent: ['GPTBot', 'ChatGPT-User', 'anthropic-ai', 'Google-Extended'], 
                allow: '/',
            }
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl,
    };
}
