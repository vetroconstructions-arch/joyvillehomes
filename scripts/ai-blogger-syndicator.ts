/* eslint-disable @typescript-eslint/no-explicit-any */
import { SEO_ROUTES } from '../src/data/seo-routes';
import { getSemanticContentForSlug } from '../src/data/semantic-content';

const DEV_TO_API_URL = 'https://dev.to/api/articles';
const DEV_TO_API_KEY = process.env.DEV_TO_API_KEY || 'demo_key'; // Fallback for dry runs
const SITE_URL = 'https://joyville-homes.com';

/**
 * AI Article Generator Engine
 * In a fully mapped environment, this would call the Google Gemini API directly.
 * Here, we synthesize a highly articulate SEO article using our massive semantic blocks.
 */
function generateSeoArticle(route: any, blocks: any[]) {
    console.log(`🤖 AI Engine synthesizing article for topic: ${route.title}`);

    let markdownBody = `---
title: "The 2026 Real Estate Master Guide: ${route.title}"
published: false
tags: ["realestate", "pune", "investment", "architecture"]
---

# The 2026 Real Estate Master Guide: ${route.title}

As Pune undergoes a massive infrastructure overhaul, the real estate landscape is shifting at an unprecedented pace. This briefing covers the economic and architectural drivers transforming the micro-market.

`;

    blocks.forEach((block: any) => {
        markdownBody += `## ${block.title}\n\n`;
        block.content.forEach((paragraph: string) => {
            markdownBody += `${paragraph}\n\n`;
        });
    });

    markdownBody += `## The Ultimate Investment Decision\n\n`;
    markdownBody += `For a comprehensive list of properties matching these criteria, including highly vetted structural data and pricing algorithms, view the complete **[${route.title} Market Report](${SITE_URL}/properties/${route.slug})**.\n\n`;
    
    markdownBody += `*This is an automated market intelligence briefing synthesized by the Joyville Homes Pune Analytics Engine.*`;

    return markdownBody;
}

async function syndicateToDevTo(markdown: string) {
    if (DEV_TO_API_KEY === 'demo_key') {
        console.log(`⚠️ DEV_TO_API_KEY not found in environment. Running in DRY-RUN mode.`);
        console.log(`[DRY RUN] Article generated successfully. Length: ${markdown.length} characters.`);
        return;
    }

    try {
        console.log(`📡 Syndicating article to Dev.to API (Domain Authority: 94)...`);
        
        const response = await fetch(DEV_TO_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': DEV_TO_API_KEY
            },
            body: JSON.stringify({
                article: {
                    title: markdown.split('\n')[1].replace('title: ', '').replace(/"/g, ''),
                    body_markdown: markdown,
                    published: true
                }
            })
        });

        if (response.ok) {
            const data: any = await response.json();
            console.log(`✅ [SUCCESS] Article syndicated! High-DA Backlink established at: ${data.url}`);
        } else {
            console.log(`❌ [ERROR] Dev.to API Rejected payload. Status: ${response.status}`);
        }
    } catch (error: any) {
        console.log(`❌ [FATAL ERROR] API connection failed: ${error.message}`);
    }
}

async function executeSyndicator() {
    console.log(`====================================================`);
    console.log(`🧠 STARTING AI AUTONOMOUS CONTENT SYNDICATOR 🧠`);
    console.log(`====================================================`);

    // Select a random route to generate fresh backlinks every week
    const randomRoute = SEO_ROUTES[Math.floor(Math.random() * SEO_ROUTES.length)];
    const blocks = getSemanticContentForSlug(randomRoute.slug);

    const articleMarkdown = generateSeoArticle(randomRoute, blocks);
    
    await syndicateToDevTo(articleMarkdown);
    
    console.log(`\n🎉 AI Content Syndication sweep complete. Passive DA 94+ backlink injected.`);
}

executeSyndicator().catch(console.error);
