/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

const contentDir = path.join(__dirname, '../src/content/blogs');
const outputFile = path.join(__dirname, '../src/data/generated-blogs.ts');

function compileBlogs() {
    if (!fs.existsSync(contentDir)) {
        console.log('No content directory found. Creating it...');
        fs.mkdirSync(contentDir, { recursive: true });
    }

    const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
    const generatedBlogs = [];

    for (const file of files) {
        const rawContent = fs.readFileSync(path.join(contentDir, file), 'utf-8');
        const { data, content } = matter(rawContent);

        // Convert markdown to HTML
        const htmlContent = marked.parse(content);

        // We wrap the HTML in a string array because the existing BlogPost schema expects `content: string[]`
        // The frontend uses dangerouslySetInnerHTML, so an array with one large HTML string works perfectly.
        const blogObject = {
            id: data.id || file.replace('.md', ''),
            slug: data.slug || file.replace('.md', ''),
            title: data.title || "Untitled",
            excerpt: data.excerpt || "",
            content: [htmlContent],
            date: data.date || new Date().toISOString().split('T')[0],
            author: data.author || "AI Research Desk",
            category: data.category || "General",
            readTime: data.readTime || "5 Min Read",
            image: data.image || "/images/desktop-poster.webp",
            seoKeywords: data.seoKeywords || [],
            topicID: data.topicID || []
        };

        generatedBlogs.push(blogObject);
    }

    const tsOutput = `// AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY.
// Run 'npm run blog:compile' to regenerate from src/content/blogs/*.md

import { BlogPost } from './blogs';

export const generatedBlogs: BlogPost[] = ${JSON.stringify(generatedBlogs, null, 4)};
`;

    fs.writeFileSync(outputFile, tsOutput, 'utf-8');
    console.log(`Successfully compiled ${generatedBlogs.length} markdown blogs into TypeScript.`);
}

compileBlogs();
