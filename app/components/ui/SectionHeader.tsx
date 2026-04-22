'use client';

import { type FC } from 'react';

interface SectionHeaderProps {
    title: string;
    highlight?: string;
    subtitle: string;
    className?: string;
    center?: boolean;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
    title,
    highlight,
    subtitle,
    className = '',
    center = true
}) => {
    return (
        <div className={`mb-16 ${center ? 'text-center' : ''} ${className}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {title} {highlight && <span className="text-[#00B5DE]">{highlight}</span>}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
                {subtitle}
            </p>
        </div>
    );
};
