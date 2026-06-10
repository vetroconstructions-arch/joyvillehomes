import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        const title = searchParams.get('title') || 'Premium Real Estate in Pune';
        const price = searchParams.get('price') || 'Starting at ₹65 Lakhs';
        const project = searchParams.get('project') || 'Joyville by Shapoorji Pallonji';

        // Render the image using JSX
        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-end',
                        backgroundColor: '#1D4F9C',
                        padding: '80px',
                        position: 'relative',
                        fontFamily: 'sans-serif',
                    }}
                >
                    {/* Background Pattern Simulation */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '-20%',
                            right: '-10%',
                            width: '800px',
                            height: '800px',
                            backgroundColor: '#C5A059',
                            borderRadius: '50%',
                            opacity: 0.1,
                        }}
                    />

                    {/* Content */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            zIndex: 10,
                            gap: '20px',
                        }}
                    >
                        <span
                            style={{
                                color: '#C5A059',
                                fontSize: 32,
                                textTransform: 'uppercase',
                                letterSpacing: '4px',
                                fontWeight: 'bold',
                            }}
                        >
                            {project}
                        </span>
                        
                        <h1
                            style={{
                                fontSize: 80,
                                color: 'white',
                                margin: 0,
                                padding: 0,
                                lineHeight: 1.1,
                                maxWidth: '900px',
                                fontWeight: 800,
                            }}
                        >
                            {title}
                        </h1>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: '#C5A059',
                                padding: '20px 40px',
                                borderRadius: '8px',
                                marginTop: '40px',
                            }}
                        >
                            <span
                                style={{
                                    color: 'white',
                                    fontSize: 40,
                                    fontWeight: 'bold',
                                }}
                            >
                                {price}
                            </span>
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e) {
        return new Response(`Failed to generate image`, { status: 500 });
    }
}
