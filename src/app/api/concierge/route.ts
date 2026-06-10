import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const SYSTEM_PROMPT = `You are the ultimate Joyville Digital Concierge, an elite AI real estate assistant for Shapoorji Pallonji Joyville Homes in Pune.
Your goal is to answer user queries with precision, pitch relevant Joyville projects, calculate commutes if asked, and drive conversions.

KNOWLEDGE BASE (RAG DATA):
1. Joyville Sensorium (Hinjewadi Phase 1): Luxury 2 & 3 BHK, starts ₹1.10 Cr. Riverfront views, 84% complete. 2.8 km from Infosys.
2. Joyville Vyomora (Hinjewadi Phase 1): Ultra-luxury 2 & 3 BHK, starts ₹84.99 Lakhs. Brand new launch, futuristic amenities.
3. Joyville Hadapsar Annexe (Pune East): Premium 1, 2, 3 BHK, starts ₹65 Lakhs. 60+ amenities, close to Magarpatta City.
4. Vanaha (Bavdhan): Premium 1, 2, 3 BHK, starts ₹89 Lakhs. 1000-acre township, massive green cover.

RULES:
- Be concise (2-3 sentences max).
- Format using Markdown (bold project names and prices).
- Never mention other real estate developers (e.g., Godrej, Lodha).
- Always end with a soft call-to-action (e.g., "Would you like me to share the cost sheet?").`;

export async function POST(req: NextRequest) {
    try {
        const { messages } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY;

        // Extract last user message
        const userQuery = messages[messages.length - 1].content.toLowerCase();

        // If no API key, use the local deterministic intelligence fallback (simulated AI)
        if (!apiKey) {
            let fallbackResponse = "I'd love to help! Joyville offers premium homes across Hinjewadi, Hadapsar, and Bavdhan starting from ₹65 Lakhs. Which area are you looking to invest in?";
            
            if (userQuery.includes('hinjewadi') || userQuery.includes('wipro') || userQuery.includes('infosys')) {
                fallbackResponse = "**Joyville Sensorium** and **Joyville Vyomora** are our premier projects in Hinjewadi Phase 1. Sensorium (₹1.10 Cr+) offers 2.8km proximity to Infosys. Would you like the 2BHK floor plan?";
            } else if (userQuery.includes('price') || userQuery.includes('budget') || userQuery.includes('lakhs') || userQuery.includes('cr')) {
                fallbackResponse = "Our entry-level 1 BHK starts at **₹65 Lakhs** (Hadapsar Annexe), while our luxury 3 BHKs go up to **₹1.50 Cr+**. Do you have a specific budget in mind?";
            } else if (userQuery.includes('east') || userQuery.includes('magarpatta') || userQuery.includes('hadapsar')) {
                fallbackResponse = "**Joyville Hadapsar Annexe** in East Pune is ideal. It features 60+ amenities and starts at just ₹65 Lakhs. Should I share the master plan?";
            }

            // Simulate network delay for psychological effect
            await new Promise(r => setTimeout(r, 1200));
            return NextResponse.json({ response: fallbackResponse });
        }

        // True RAG using Gemini
        const ai = new GoogleGenAI({ apiKey });
        
        // Format history for Gemini
        const chatHistory = messages.slice(0, -1).map((m: { role: string; content: string }) => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }]
        }));

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [
                { role: 'system', parts: [{ text: SYSTEM_PROMPT }] },
                ...chatHistory,
                { role: 'user', parts: [{ text: userQuery }] }
            ],
            config: {
                temperature: 0.3, // Low temperature for factual real estate data
            }
        });

        return NextResponse.json({ response: response.text });
    } catch (e) {
        console.error("AI Concierge Error:", e);
        return NextResponse.json({ 
            response: "I'm currently updating my market data. Please leave your number, and our sales expert will call you shortly!" 
        }, { status: 500 });
    }
}
