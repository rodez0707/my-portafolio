'use client';

import { type FC } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/app/components/ui/GlassCard';
import { Tech } from '@/app/types/tech';

export const TechCard: FC<Tech> = ({ name, slug }) => (
    <GlassCard
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center justify-center gap-4 cursor-default h-full min-h-[160px] group"
    >
        <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center p-3 group-hover:bg-[#00B5DE]/10 transition-colors">
            <img
                src={`https://cdn.simpleicons.org/${slug}/00B5DE`}
                alt={name}
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,181,222,0.3)]"
            />
        </div>
        <span className="font-semibold text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">
            {name}
        </span>
    </GlassCard>
);
