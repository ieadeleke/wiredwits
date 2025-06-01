import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

interface Block {
    id: number;
    x: number;
    width: number;
    height: number;
    color: string;
    textColor: string;
    label: string;
    delay: number;
    duration: number;
    finalY: number;
    isLanded: boolean;
}

interface StackHeights {
    [key: string]: number;
}

const FallingBlocks: React.FC = () => {
    const [blocks, setBlocks] = useState<Block[]>([]);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [stackHeights, setStackHeights] = useState<StackHeights>({});

    // Predefined block data similar to your image
    const blockTemplates = [
        { label: 'Accounts', color: '#2d4a3d', textColor: '#ffffff', width: 180, height: 50 },
        { label: 'Payments', color: '#b8d4c8', textColor: '#2d4a3d', width: 160, height: 50 },
        { label: 'Cards', color: '#e8c5a0', textColor: '#8b4513', width: 200, height: 50 },
        { label: 'Transactions', color: '#a8c8e8', textColor: '#1e3a5f', width: 170, height: 50 },
        { label: 'Reports', color: '#d4a8e8', textColor: '#4a1e5f', width: 140, height: 50 },
        { label: 'Settings', color: '#e8a8a8', textColor: '#5f1e1e', width: 150, height: 50 },
        { label: 'Dashboard', color: '#a8e8d4', textColor: '#1e5f4a', width: 190, height: 50 },
        { label: 'Users', color: '#e8d4a8', textColor: '#5f4a1e', width: 120, height: 50 },
    ];

    // Generate blocks with text labels
    useEffect(() => {
        const generateBlocks = (): void => {
            const blockCount = 8;
            const newBlocks: Block[] = [];

            for (let i = 0; i < blockCount; i++) {
                const template = blockTemplates[i % blockTemplates.length];
                newBlocks.push({
                    id: i,
                    x: Math.random() * 70, // Random horizontal position (0-70%)
                    width: template.width,
                    height: template.height,
                    color: template.color,
                    textColor: template.textColor,
                    label: template.label,
                    delay: Math.random() * 3 + i * 0.3, // Staggered delays
                    duration: Math.random() * 0.8 + 1.2,
                    finalY: 0,
                    isLanded: false,
                });
            }

            setBlocks(newBlocks);
            setStackHeights({});
        };

        generateBlocks();
    }, []);

    // Calculate final positions with stacking
    useEffect(() => {
        if (blocks.length === 0) return;

        const calculateStacking = (): void => {
            const containerWidth = 800;
            const gridSize = 80; // Larger grid for wider blocks
            const heights: StackHeights = {};

            // Sort blocks by their delay to simulate order of falling
            const sortedBlocks = [...blocks].sort((a, b) => a.delay - b.delay);

            const updatedBlocks = sortedBlocks.map(block => {
                const blockWidthInGrid = Math.ceil(block.width / gridSize);
                const gridX = Math.floor((block.x / 100) * containerWidth / gridSize);

                // Check all grid cells that this block will occupy
                let maxHeight = 0;
                for (let i = 0; i < blockWidthInGrid + 1; i++) {
                    const checkKey = `${gridX + i}`;
                    if (heights[checkKey]) {
                        maxHeight = Math.max(maxHeight, heights[checkKey]);
                    }
                }

                const finalY = maxHeight;

                // Update height for all occupied grid cells
                for (let i = 0; i < blockWidthInGrid + 1; i++) {
                    const key = `${gridX + i}`;
                    heights[key] = finalY + block.height + 8; // Add spacing
                }

                return {
                    ...block,
                    // finalY: finalY,
                    finalY: 0,
                };
            });

            setBlocks(updatedBlocks);
            setStackHeights(heights);
        };

        calculateStacking();
    }, [blocks.length]);

    // Start animation on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const resetAnimation = (): void => {
        setIsAnimating(false);
        setStackHeights({});

        // Regenerate blocks
        const blockCount = 8;
        const newBlocks: Block[] = [];

        for (let i = 0; i < blockCount; i++) {
            const template = blockTemplates[i % blockTemplates.length];
            newBlocks.push({
                id: i,
                x: Math.random() * 70,
                width: template.width,
                height: template.height,
                color: template.color,
                textColor: template.textColor,
                label: template.label,
                delay: Math.random() * 3 + i * 0.3,
                duration: Math.random() * 0.8 + 1.2,
                finalY: 0,
                isLanded: false,
            });
        }

        setBlocks(newBlocks);

        setTimeout(() => {
            setIsAnimating(true);
        }, 200);
    };

    return (
        <div className="h-[650px] hero-bg relative">
            <div className="py-8">
                <div className="md:w-[55%] z-40 relative py-32 md:py-28 px-5 md:px-0 mx-auto text-center">
                    <div className="py-3 px-4 text-center bg-[#EEECFD] w-max mx-auto mb-6 rounded-lg">
                        <h4 className="text-[#9747FF] font-medium text-sm">AI That Works for Everyone</h4>
                    </div>
                    <h1 className="text-3xl md:text-6xl [45px] w- [80%] mx-auto tracking-tighter font-bol mb-4 leading-[1.4] md:leading-[1.4] font-black">
                        Smarter Tools. Clearer Truth. Bigger Possibilities
                    </h1>
                    <p className="text-sm md:text-base text-[#111111b3] leading-loose md:leading-loose mb-7 md:w-[80%] mx-auto">
                        Explore AI made for everyday people, dreamers, and doers. From decoding the news to building your next big thing, this is just the beginning.
                    </p>
                    <div className="flex gap-4 mx-auto mb-10 w-max">
                        <Link href="/auth/signup" className="bg-[#9747FF] text-white py-5 px-10 rounded-lg text-sm font-medium">Get Started</Link>
                        <Link href="/contact-us" className="bg-white text-black py-5 px-10 rounded-lg text-sm font-medium">Contact Us</Link>
                    </div>
                </div>

                {/* Container for falling blocks */}
                <div
                    ref={containerRef}
                    className="absolute hidden z-30 w-full top-0 h-full rounded-xl"
                >
                    {blocks.map((block) => (
                        <div
                            key={block.id}
                            className={`absolute block transition-all cursor-pointer ${isAnimating ? 'animate-text-fall' : ''
                                }`}
                            style={{
                                left: `${block.x}%`,
                                bottom: isAnimating ? `${block.finalY}px` : 'auto',
                                top: isAnimating ? 'auto' : '-100px',
                                width: `${block.width}px`,
                                height: `${block.height}px`,
                                backgroundColor: block.color,
                                borderRadius: '12px',
                                boxShadow: `
                  0 4px 12px rgba(0,0,0,0.15),
                  0 2px 4px rgba(0,0,0,0.1)
                `,
                                transitionDelay: `${block.delay}s`,
                                transitionDuration: `${block.duration}s`,
                                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                                transform: isAnimating
                                    ? 'rotate(0deg) scale(1)'
                                    : `rotate(${(Math.random() - 0.5) * 20}deg) scale(0.9)`,
                                zIndex: Math.floor(block.finalY / 10),
                            }}
                        >
                            {/* Text content */}
                            <div
                                className="w-full h-full flex items-center justify-center px-4"
                                style={{ color: block.textColor }}
                            >
                                <span className="font-semibold text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                                    {block.label}
                                </span>
                            </div>

                            {/* Subtle highlight for depth */}
                            <div
                                className="absolute inset-0 rounded-xl pointer-events-none"
                                style={{
                                    background: `linear-gradient(135deg, 
                    rgba(255,255,255,0.2) 0%, 
                    transparent 50%, 
                    rgba(0,0,0,0.05) 100%)`
                                }}
                            />
                        </div>
                    ))}

                    {/* Ground indicator */}
                    <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 opacity-30"></div>
                </div>
            </div>

            <style jsx>{`
        @keyframes textFall {
          0% {
            transform: translateY(-60vh) rotate(45deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          85% {
            transform: translateY(0) rotate(-2deg) scale(1.02);
          }
          95% {
            transform: translateY(0) rotate(1deg) scale(0.99);
          }
          100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }

        .animate-text-fall {
          animation: textFall var(--duration, 2s) ease-out forwards;
        }

        .block {
          transition-property: bottom, transform, opacity;
        }

        .block:hover {
          transform: scale(1.05) rotate(2deg) !important;
          transition: transform 0.3s ease !important;
          z-index: 999 !important;
          box-shadow: 
            0 8px 25px rgba(0,0,0,0.2),
            0 4px 8px rgba(0,0,0,0.15) !important;
        }
      `}</style>
        </div>
    );
};

export default FallingBlocks;