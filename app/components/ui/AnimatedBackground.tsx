'use client';

import React, { useEffect, useState } from 'react';

const AnimatedBackground: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const blobs = [
        { size: '400px', top: '10%', left: '15%', speedX: 0.1, speedY: 0.35, delay: '0s' },
        { size: '600px', top: '50%', left: '65%', speedX: -0.15, speedY: 0.45, delay: '-2s' },
    ];

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                .blob-animate {
                    animation: float 20s ease-in-out infinite;
                }
            `}</style>

            {blobs.map((blob, index) => (
                <div
                    key={index}
                    className="absolute rounded-full blob-animate"
                    style={{
                        width: blob.size,
                        height: blob.size,
                        top: blob.top,
                        left: blob.left,
                        backgroundColor: 'rgba(0, 181, 222, 0.13)',
                        filter: 'blur(150px)',
                        transform: `translate(${scrollY * blob.speedX}px, ${scrollY * blob.speedY}px)`,
                        animationDelay: blob.delay,
                        willChange: 'transform',
                        transition: 'transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
                    }}
                />
            ))}
        </div>
    );
};

export default AnimatedBackground;
