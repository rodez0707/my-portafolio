'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'TypeScript', angle: -90 },
    { name: 'Vite', angle: -30 },
    { name: 'CSS', angle: 30 },
    { name: 'React', angle: 90 },
    { name: 'HTML', angle: 150 },
    { name: 'Tailwind', angle: 210 },
];

const RING_RADIUS = 101;
const LABEL_RADIUS = 141;
const ROTATION_DURATION = 18;

const SkillRadar = () => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    return (
        <div className="relative w-[320px] h-[320px] flex items-center justify-center">
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{
                    duration: ROTATION_DURATION,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                <div
                    className="absolute rounded-full border border-white/20"
                    style={{ width: RING_RADIUS * 2, height: RING_RADIUS * 2 }}
                >
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-[#00B5DE]/60 rounded-full"
                            style={{
                                top: '50%',
                                left: '50%',
                                transform: `rotate(${i * 30}deg) translateY(-${RING_RADIUS}px) translate(-50%, -50%)`,
                            }}
                        />
                    ))}
                </div>

                {skills.map((skill) => {
                    const rad = (skill.angle * Math.PI) / 180;
                    const x = Math.cos(rad) * LABEL_RADIUS;
                    const y = Math.sin(rad) * LABEL_RADIUS;
                    const isHovered = hoveredSkill === skill.name;

                    return (
                        <motion.div
                            key={skill.name}
                            animate={{ rotate: -360 }}
                            transition={{
                                duration: ROTATION_DURATION,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                translateX: `calc(-50% + ${x}px)`,
                                translateY: `calc(-50% + ${y}px)`,
                            }}
                            onHoverStart={() => setHoveredSkill(skill.name)}
                            onHoverEnd={() => setHoveredSkill(null)}
                            whileHover={{ scale: 1.3 }}
                            className={`
                                px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap
                                backdrop-blur-sm cursor-default select-none
                                transition-colors duration-200
                                ${isHovered
                                    ? 'bg-[#00B5DE] text-[#0a0a0f] shadow-[0_0_20px_rgba(0,181,222,0.6)] border border-[#00B5DE]'
                                    : 'bg-[#00B5DE]/10 border border-[#00B5DE]/50 text-[#00B5DE] shadow-[0_0_10px_rgba(0,181,222,0.1)]'
                                }
                            `}
                        >
                            {skill.name}
                        </motion.div>
                    );
                })}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative z-10 w-[142px] h-[142px] rounded-full bg-[#00B5DE] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(0,181,222,0.45)]"
            >
                <span className="text-4xl font-black text-white leading-none">88%</span>
                <span className="text-[10px] uppercase tracking-widest text-white/80 font-bold mt-1">Frontend</span>
            </motion.div>
        </div>
    );
};

export default SkillRadar;
