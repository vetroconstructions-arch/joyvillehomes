/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

async function generateBlog() {
    const topic = process.argv.slice(2).join(" ");
    if (!topic) {
        console.error("Please provide a topic. Example: npm run blog:generate \"Pune Metro Phase 3\"");
        process.exit(1);
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error("CRITICAL ERROR: GEMINI_API_KEY environment variable is not set. Please set it in .env.local or your system environment.");
        process.exit(1);
    }

    console.log(`🚀 Initializing Autonomous SEO Agent for topic: "${topic}"`);
    console.log("Connecting to Gemini API...");

    const prompt = `
You are an elite Real Estate SEO Copywriter for Joyville Homes Pune (Shapoorji Pallonji).
Write a highly optimized, beautifully structured markdown article about the following topic: "${topic}".

REQUIREMENTS:
1. Include YAML frontmatter at the very beginning with the following fields:
   - id: (unique string, e.g. "insights-005")
   - slug: (seo friendly url slug)
   - title: (catchy SEO title)
   - excerpt: (2-3 sentences for meta description)
   - date: (YYYY-MM-DD)
   - author: "AI Research Desk"
   - category: "Market Trends"
   - readTime: "4 Min Read"
   - image: "/images/desktop-poster.webp"
   - seoKeywords: [array of 5-10 high-value keywords]
   - topicID: ["pune-rental-market"]

2. The body must be written in Markdown. Use ## for headings.
3. Write 3-4 paragraphs of dense, semantic, high-quality real estate market analysis.
4. Focus on Hinjewadi, Hadapsar, Bavdhan, or general Pune real estate appreciation.
`;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                systemInstruction: { parts: [{ text: "You are an elite SEO writer. Output only the YAML frontmatter and the Markdown content. Do not wrap in markdown code blocks." }] }
            })
        });

        const data = await response.json();
        
        if (data.error) {
            console.error("API Error:", data.error.message);
            process.exit(1);
        }

        let content = data.candidates[0].content.parts[0].text;
        
        // Clean up potential markdown code block wrappers
        if (content.startsWith('```markdown')) content = content.replace('```markdown\n', '');
        if (content.endsWith('```\n')) content = content.slice(0, -4);
        if (content.endsWith('```')) content = content.slice(0, -3);

        // Extract slug from frontmatter to use as filename
        const slugMatch = content.match(/slug:\s*"?([^"\n]+)"?/);
        const slug = slugMatch ? slugMatch[1].trim() : `draft-${Date.now()}`;
        
        const filePath = path.join(__dirname, '../src/content/blogs', `${slug}.md`);
        fs.writeFileSync(filePath, content, 'utf-8');
        
        console.log(`✅ Successfully generated SEO article! Saved to: ${filePath}`);
        console.log("Run 'npm run blog:compile' to inject this into the architecture.");

    } catch (error) {
        console.error("Failed to generate blog:", error);
    }
}

generateBlog();
