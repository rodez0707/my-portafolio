'use client';

import { type FC, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    whileHover?: any;
    onClick?: () => void;
}

export const GlassCard: FC<GlassCardProps> = ({ children, className = '', whileHover, onClick }) => {
    return (
        <motion.div
            layout
            whileHover={whileHover}
            onClick={onClick}
            className={`glass-glow p-6 transition-all duration-300 hover:border-[#00B5DE]/50 ${className}`}
        >
            {children}
        </motion.div>
    );
};
