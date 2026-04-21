'use client';

import React from 'react';
import { motion } from 'framer-motion';

const data = [
    { name: 'TS', level: 4, label: 'Experto' },
    { name: 'PHP', level: 3, label: 'Avanzado' },
    { name: 'CSS', level: 4, label: 'Experto' },
    { name: 'React', level: 4, label: 'Experto' },
    { name: 'HTML', level: 5, label: 'Maestro' },
    { name: 'Tailwind', level: 4, label: 'Experto' },
];

const Y_LABELS = ['Maestro', 'Experto', 'Avanzado', 'Intermedio', 'Novato'];
const MAX_LEVEL = 5;

// SVG viewport constants
const SVG_W = 400;
const SVG_H = 340;
const PAD_LEFT = 72;  // space for Y labels
const PAD_RIGHT = 8;
const PAD_TOP = 12;
const PAD_BOTTOM = 24; // space for X labels

const chartW = SVG_W - PAD_LEFT - PAD_RIGHT;
const chartH = SVG_H - PAD_TOP - PAD_BOTTOM;

const levelToY = (level: number) =>
    PAD_TOP + chartH - (level / MAX_LEVEL) * chartH;

const BAR_WIDTH = (chartW / data.length) * 0.45;

const SkillBarChart = () => {
    return (
        <div className="w-full max-w-[420px]">
            <svg
                viewBox={`0 0 ${SVG_W} ${SVG_H}`}
                className="w-full h-auto overflow-visible"
            >
                {/* ── Grid lines & Y labels ── */}
                {Array.from({ length: MAX_LEVEL + 1 }, (_, i) => i).map((lvl) => {
                    const y = levelToY(lvl);
                    const label = Y_LABELS[MAX_LEVEL - lvl] ?? '';
                    return (
                        <g key={lvl}>
                            {/* Grid line */}
                            <line
                                x1={PAD_LEFT} y1={y}
                                x2={SVG_W - PAD_RIGHT} y2={y}
                                stroke={lvl === 0 ? '#4a4a4a' : '#2F2F2F'}
                                strokeWidth={lvl === 0 ? 1.5 : 0.8}
                                strokeDasharray={lvl > 0 ? '3 3' : undefined}
                            />
                            {/* Y label */}
                            {lvl > 0 && (
                                <text
                                    x={PAD_LEFT - 6}
                                    y={y + 4}
                                    textAnchor="end"
                                    fontSize={9}
                                    fill="#555"
                                    fontFamily="inherit"
                                    letterSpacing="0.05em"
                                >
                                    {label.toUpperCase()}
                                </text>
                            )}
                        </g>
                    );
                })}

                {/* Left axis line */}
                <line
                    x1={PAD_LEFT} y1={PAD_TOP}
                    x2={PAD_LEFT} y2={PAD_TOP + chartH}
                    stroke="#4a4a4a" strokeWidth={1.5}
                />

                {/* ── Bars ── */}
                {data.map((item, i) => {
                    const slotW = chartW / data.length;
                    const cx = PAD_LEFT + slotW * i + slotW / 2;
                    const barH = (item.level / MAX_LEVEL) * chartH;
                    const barX = cx - BAR_WIDTH / 2;
                    const barY = levelToY(item.level);          // top of the bar
                    const baseY = levelToY(0);                   // bottom baseline

                    return (
                        <g key={item.name} className="group">
                            {/* Background track */}
                            <rect
                                x={barX}
                                y={PAD_TOP}
                                width={BAR_WIDTH}
                                height={chartH}
                                rx={3}
                                fill="#1a1a1a"
                            />

                            {/* Animated fill bar */}
                            <motion.rect
                                x={barX}
                                width={BAR_WIDTH}
                                rx={3}
                                fill="#00B5DE"
                                initial={{ y: baseY, height: 0 }}
                                animate={{ y: barY, height: barH }}
                                transition={{ duration: 1, ease: 'easeOut', delay: i * 0.1 }}
                                style={{
                                    filter: 'drop-shadow(0 0 6px rgba(0,181,222,0.5))',
                                }}
                            />

                            {/* X axis label */}
                            <text
                                x={cx}
                                y={PAD_TOP + chartH + 18}
                                textAnchor="middle"
                                fontSize={10}
                                fill="#b0b0b0"
                                fontWeight="bold"
                                fontFamily="inherit"
                            >
                                {item.name}
                            </text>

                            {/* Hover tooltip — visible via CSS group-hover */}
                            <g style={{ opacity: 0 }} className="group-hover:opacity-100 transition-opacity">
                                <rect
                                    x={cx - 28} y={barY - 22}
                                    width={56} height={18}
                                    rx={4}
                                    fill="#151515"
                                    stroke="#00B5DE"
                                    strokeWidth={0.8}
                                />
                                <text
                                    x={cx}
                                    y={barY - 10}
                                    textAnchor="middle"
                                    fontSize={8.5}
                                    fill="#00B5DE"
                                    fontWeight="bold"
                                    fontFamily="inherit"
                                >
                                    {item.label}
                                </text>
                            </g>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};

export default SkillBarChart;
