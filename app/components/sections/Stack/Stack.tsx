'use client';

import { type FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TECHS } from '@/app/constants/techs';
import { useCarousel } from '@/app/hooks/useCarousel';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { CarouselButton, MobileCarouselControls } from '@/app/components/ui/CarouselControls';
import { TechCard } from './TechCard';
import { Tech } from '@/app/types/tech';

const PAGE_SIZE = 8;

const slideVariants = {
    enter: (dir: number) => ({
        x: dir > 0 ? 100 : -100,
        opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
        x: dir > 0 ? -100 : 100,
        opacity: 0,
    }),
};

export const Stack: FC = () => {
    const {
        page,
        direction,
        totalPages,
        paginate,
        goToPage,
        currentItemsRange,
        canPrev,
        canNext
    } = useCarousel({ totalItems: TECHS.length, pageSize: PAGE_SIZE });

    const currentTechs = TECHS.slice(currentItemsRange[0], currentItemsRange[1]);

    return (
        <section id="stack" className="min-h-screen flex items-center py-24 relative overflow-hidden">
            <div className="container px-6 mx-auto relative z-10">

                <SectionHeader
                    title="Tecnologías"
                    subtitle="Herramientas que utilizo para dar vida a los productos"
                />

                {/* Carousel Control Container */}
                <div className="relative group max-w-6xl mx-auto flex items-center gap-2 sm:gap-8">
                    <CarouselButton
                        direction="prev"
                        onClick={() => paginate(-1)}
                        disabled={!canPrev}
                        className="hidden sm:flex"
                    />

                    <div className="flex-1 min-h-[360px]">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={page}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                            >
                                {currentTechs.map((tech: Tech) => (
                                    <TechCard key={tech.slug} {...tech} />
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <CarouselButton
                        direction="next"
                        onClick={() => paginate(1)}
                        disabled={!canNext}
                        className="hidden sm:flex"
                    />
                </div>

                <MobileCarouselControls
                    onPrev={() => paginate(-1)}
                    onNext={() => paginate(1)}
                    canPrev={canPrev}
                    canNext={canNext}
                    className="sm:hidden"
                />

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goToPage(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${i === page ? 'w-8 bg-[#00e5ff]' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
