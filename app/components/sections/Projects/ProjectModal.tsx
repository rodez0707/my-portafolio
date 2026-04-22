'use client';

import { type FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/app/types/project';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export const ProjectModal: FC<ProjectModalProps> = ({ project, onClose }) => {
    const [screenIndex, setScreenIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginateScreen = (newDirection: number) => {
        setDirection(newDirection);
        const nextIndex = (screenIndex + newDirection + project.screens.length) % project.screens.length;
        setScreenIndex(nextIndex);
    };

    const screenVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0
        })
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-[#0a0a0f]/90 backdrop-blur-xl"
            />

            <motion.div
                layoutId={`card-${project.id}`}
                className="relative w-full max-w-6xl h-full lg:h-[80vh] bg-[#0d1117] border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-[0_0_80px_rgba(0,181,222,0.15)]"
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-[110] w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00B5DE]/10 transition-colors text-white"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* LEFT SIDE: Info */}
                <div className="w-full lg:w-[45%] p-8 md:p-12 overflow-y-auto custom-scrollbar border-b lg:border-b-0 lg:border-r border-white/5">
                    <div className="flex gap-2 mb-6">
                        <span className="px-4 py-1 bg-[#00B5DE]/10 text-[#00B5DE] text-xs font-bold uppercase tracking-widest rounded-full">
                            {project.category}
                        </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black mb-8 leading-tight">{project.title}</h3>

                    <div className="space-y-10">
                        <section>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00B5DE] mb-3">Descripción General</h4>
                            <p className="text-gray-400 leading-relaxed font-light text-base md:text-lg">{project.fullDesc}</p>
                        </section>

                        <div className="grid grid-cols-2 gap-8">
                            <section>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00B5DE] mb-3">Tiempo Estimado</h4>
                                <p className="text-white font-semibold text-lg">{project.time}</p>
                            </section>
                            <section>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00B5DE] mb-3">Tecnologías</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t: string) => (
                                        <span key={t} className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded-md">{t}</span>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <section>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00B5DE] mb-4">Objetivos Principales</h4>
                            <ul className="space-y-3">
                                {project.objectives.map((obj: string, i: number) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-400 group">
                                        <span className="w-5 h-5 rounded-full bg-[#00B5DE]/20 text-[#00B5DE] flex-shrink-0 flex items-center justify-center text-[10px] font-black mt-0.5">
                                            {i + 1}
                                        </span>
                                        {obj}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>

                {/* RIGHT SIDE: Visual Carousel */}
                <div className="w-full lg:w-[55%] bg-[#0a0a0f] relative flex flex-col group/carousel">
                    <div className="p-8 pb-4 flex justify-between items-center z-10">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00B5DE]">Pantallas del Proyecto</h4>
                    </div>

                    <div className="flex-1 relative flex items-center justify-center px-4 sm:px-12 pb-12 overflow-hidden">
                        <button
                            onClick={() => paginateScreen(-1)}
                            className="absolute left-4 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-[#00B5DE] hover:bg-[#00B5DE] hover:text-black transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 backdrop-blur-sm shadow-[0_0_15px_rgba(0,181,222,0.2)]"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                        </button>

                        <button
                            onClick={() => paginateScreen(1)}
                            className="absolute right-4 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-[#00B5DE] hover:bg-[#00B5DE] hover:text-black transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 backdrop-blur-sm shadow-[0_0_15px_rgba(0,181,222,0.2)]"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                        </button>

                        <div className="relative w-full h-full flex items-center justify-center">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={screenIndex}
                                    custom={direction}
                                    variants={screenVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    className="absolute inset-x-0 top-1/2 -translate-y-1/2 bottom-auto bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(0,181,222,0.1)]"
                                    style={{ height: '90%' }}
                                >
                                    <div className="absolute inset-0 bg-[#00B5DE]/5" />
                                    {project.screens[screenIndex].endsWith('.mp4') ? (
                                        <video
                                            src={project.screens[screenIndex]}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover relative z-10"
                                        />
                                    ) : project.screens[screenIndex].startsWith('/') ? (
                                        <img
                                            src={project.screens[screenIndex]}
                                            alt={project.title}
                                            className="w-full h-full object-cover relative z-10"
                                        />
                                    ) : (
                                        <span className="text-white/20 font-black text-6xl md:text-8xl italic select-none">
                                            {project.screens[screenIndex]}
                                        </span>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="absolute bottom-8 left-0 w-full flex justify-center gap-2">
                            {project.screens.map((_: string, i: number) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setDirection(i > screenIndex ? 1 : -1);
                                        setScreenIndex(i);
                                    }}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${i === screenIndex ? 'w-6 bg-[#00B5DE]' : 'w-2 bg-white/20'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
