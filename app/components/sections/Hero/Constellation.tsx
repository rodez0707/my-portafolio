'use client';

import { type FC } from 'react';
import { motion } from 'framer-motion';
import { QUALITIES, PATH_ORDER, Quality } from '@/app/constants/qualities';

const FIXED_PARTICLES = [...Array(15)].map((_, i) => ({
    id: i,
    left: `${(i * 7.7) % 100}%`,
    top: `${(i * 13.3) % 100}%`,
    duration: 4 + ((i * 1.1) % 4),
    delay: (i * 0.7) % 5,
}));

export const Constellation: FC = () => {
    const getPathD = () => {
        const points = PATH_ORDER.map((id: number) => {
            const q = QUALITIES.find((node: Quality) => node.id === id);
            return q ? `${q.x},${q.y}` : '';
        });
        return `M ${points.join(' L ')}`;
    };

    const pathD = getPathD();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="hidden lg:flex items-center justify-center p-8 relative"
        >
            <div className="relative w-full aspect-square max-w-[500px]">
                <svg viewBox="0 0 420 420" className="w-full h-full overflow-visible">
                    <path d={pathD} fill="none" stroke="#00B5DE" strokeWidth="1" strokeOpacity="0.15" />
                    <motion.path
                        d={pathD}
                        fill="none"
                        stroke="#00B5DE"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 1],
                            pathOffset: [0, 0, 1],
                            opacity: [0, 1, 1, 0]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        style={{ filter: 'drop-shadow(0 0 8px #00B5DE)' }}
                    />
                    {QUALITIES.map((q: Quality, i: number) => (
                        <motion.g key={q.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.1 }}>
                            <circle cx={q.x} cy={q.y} r="4" fill="#00B5DE" />
                            <motion.circle
                                cx={q.x}
                                cy={q.y}
                                r="8"
                                stroke="#00B5DE"
                                strokeWidth="1"
                                fill="none"
                                animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                            />
                            <text
                                x={q.x + (q.x > 210 ? 15 : -15)}
                                y={q.y + (q.y > 210 ? 15 : -15)}
                                textAnchor={q.x > 210 ? "start" : "end"}
                                fill="#FFFFFF"
                                fontSize="10"
                                fontWeight="600"
                                className="select-none pointer-events-none uppercase tracking-widest opacity-90"
                            >
                                {q.label}
                            </text>
                        </motion.g>
                    ))}
                </svg>

                {FIXED_PARTICLES.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute w-1 h-1 bg-[#00B5DE] rounded-full opacity-20"
                        style={{ left: p.left, top: p.top }}
                        animate={{ y: [0, -30, 0], opacity: [0.1, 0.4, 0.1] }}
                        transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
                    />
                ))}
            </div>
        </motion.div>
    );
};
