'use client';

import { type FC } from 'react';

interface CarouselButtonProps {
    onClick: () => void;
    disabled: boolean;
    direction: 'prev' | 'next';
    className?: string;
}

export const CarouselButton: FC<CarouselButtonProps> = ({
    onClick,
    disabled,
    direction,
    className = ''
}) => {
    const isPrev = direction === 'prev';
    const ButtonClass = "w-12 h-12 rounded-full border border-white/10 items-center justify-center text-[#00e5ff] hover:bg-[#00e5ff]/10 disabled:opacity-20 disabled:pointer-events-none transition-all flex";

    return (
        <button onClick={onClick} disabled={disabled} className={`${ButtonClass} ${className}`}>
            {isPrev ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            )}
        </button>
    );
};

interface MobileCarouselControlsProps {
    onPrev: () => void;
    onNext: () => void;
    canPrev: boolean;
    canNext: boolean;
    className?: string;
}

export const MobileCarouselControls: FC<MobileCarouselControlsProps> = ({
    onPrev,
    onNext,
    canPrev,
    canNext,
    className = ''
}) => {
    const MobileButtonClass = "w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#00e5ff] disabled:opacity-20";

    return (
        <div className={`flex justify-center gap-8 mt-8 ${className}`}>
            <button onClick={onPrev} disabled={!canPrev} className={MobileButtonClass}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={onNext} disabled={!canNext} className={MobileButtonClass}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>
    );
};
