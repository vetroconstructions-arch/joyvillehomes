import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const siteUrl = 'https://joyville-homes.com';

    const commonDisallow = [
        '/_next/',
        '/api/',
        '/admin/',
        '/cgi-bin/',
        // Targeted block for tracking/sorting/non-content parameters
        '/*?utm_*',
        '/*?fbclid=*',
        '/*?gclid=*',
        '/*?sort=*',
        '/*?filter=*',
        '/*?ref=*',
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
                userAgent: 'Google-InspectionTool',
                allow: '/',
                disallow: [], // Full access for visual/technical inspection (SGE/Rich Results)
            },
            // Secure SGE & AI Search presence (Gemini, ChatGPT, Claude)
            {
                userAgent: ['GPTBot', 'ChatGPT-User', 'anthropic-ai', 'ClaudeBot', 'Google-Extended', 'OAI-SearchBot', 'PerplexityBot', 'YouBot'], 
                allow: ['/', '/ai-manifest.json'],
            },
            // Block invasive/low-value scrapers
            {
                userAgent: ['CCBot', 'Omigili', 'FacebookBot', 'Twitterbot', 'GPTBot-Mobile'],
                disallow: ['/'],
            }
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl,
    };
}
