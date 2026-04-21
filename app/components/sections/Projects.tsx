'use client';

import { type FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
    id: number;
    title: string;
    shortDesc: string;
    fullDesc: string;
    objectives: string[];
    time: string;
    tech: string[];
    category: string;
    screens: string[]; // Placeholder for images
}

const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'BOTFORGE',
        shortDesc: 'Una solución integral con panel de administración y pasarela de pagos.',
        fullDesc: 'Desarrollo de una interfaz de usuario avanzada para una plataforma de comercio electrónico de alta gama. El enfoque principal fue la optimización de la tasa de conversión y una navegación fluida.',
        objectives: [
            'Optimizar el rendimiento de carga en un 40%',
            'Implementar un sistema de filtros avanzado',
            'Crear un panel de control intuitivo para vendedores'
        ],
        time: '3 Meses',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        category: 'Web Design',
        screens: [
            '/image.png',
            '/image (2).png',
            '/5132234843981810842.jpg',
            '/video5132234843521812717.mp4',
            '/video5132234843521812718.mp4'
        ]
    },
    {
        id: 2,
        title: 'App de Gestión Energética',
        shortDesc: 'Visualización de datos en tiempo real para el sector industrial.',
        fullDesc: 'Dashboard interactivo que permite monitorear el consumo de energía en múltiples plantas industriales. Incluye gráficos dinámicos y alertas predictivas basadas en IA.',
        objectives: [
            'Integración de APIs en tiempo real',
            'Visualización de grandes volúmenes de datos',
            'Sistema de alertas personalizable'
        ],
        time: '5 Meses',
        tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
        category: 'Development',
        screens: ['#1', '#2', '#3', '#4']
    },
];

export const Projects: FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [screenIndex, setScreenIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginateScreen = (newDirection: number) => {
        if (!selectedProject) return;
        setDirection(newDirection);
        const nextIndex = (screenIndex + newDirection + selectedProject.screens.length) % selectedProject.screens.length;
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
        <section id="projects" className="min-h-screen py-24 relative overflow-hidden">
            <div className="container px-6 mx-auto relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Proyectos <span className="text-[#00B5DE]">Destacados</span></h2>
                        <p className="text-gray-500 max-w-xl">Una selección de mis trabajos más recientes donde la técnica y el diseño se fusionan.</p>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {PROJECTS.map((project) => (
                        <motion.div
                            key={project.id}
                            layoutId={`card-${project.id}`}
                            onClick={() => {
                                setSelectedProject(project);
                                setScreenIndex(0);
                            }}
                            className="group relative overflow-hidden rounded-[32px] border border-white/5 bg-[#0a0a0f]/40 aspect-[16/10] cursor-pointer shadow-2xl"
                        >
                            {/* Project Preview Image */}
                            {project.screens[0].startsWith('/') && (
                                <img
                                    src={project.screens[0]}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/20 to-transparent z-10" />
                            <div className="absolute inset-0 bg-[#00B5DE]/5 group-hover:bg-[#00B5DE]/10 transition-all duration-700" />

                            {/* Decorative line patterns */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                                <div className="absolute top-0 right-0 w-full h-[1px] bg-[#00B5DE] translate-y-[20px] -rotate-12" />
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00B5DE] -translate-y-[40px] rotate-6" />
                            </div>

                            <div className="absolute bottom-0 left-0 p-8 md:p-10 z-20 w-full">
                                <div className="flex gap-2 mb-4">
                                    <span className="px-4 py-1 bg-[#00B5DE]/10 text-[#00B5DE] text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full border border-[#00B5DE]/20">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-[#00B5DE] transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm line-clamp-2 max-w-md group-hover:text-gray-300 transition-colors">{project.shortDesc}</p>

                                <div className="mt-6 flex items-center gap-2 text-[#00B5DE] font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    Ver Detalle
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Detail Overlay */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-[#0a0a0f]/90 backdrop-blur-xl"
                        />

                        <motion.div
                            layoutId={`card-${selectedProject.id}`}
                            className="relative w-full max-w-6xl h-full lg:h-[80vh] bg-[#0d1117] border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-[0_0_80px_rgba(0,181,222,0.15)]"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 z-[110] w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00B5DE]/10 transition-colors text-white"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>

                            {/* LEFT SIDE: Info (Scrollable) */}
                            <div className="w-full lg:w-[38%] p-6 md:p-10 overflow-y-auto custom-scrollbar border-b lg:border-b-0 lg:border-r border-white/5">
                                <div className="flex gap-2 mb-4">
                                    <span className="px-4 py-1 bg-[#00B5DE]/10 text-[#00B5DE] text-[10px] font-bold uppercase tracking-widest rounded-full">
                                        {selectedProject.category}
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-black mb-6 leading-tight">{selectedProject.title}</h3>

                                <div className="space-y-6">
                                    <section>
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00B5DE] mb-2">Descripción General</h4>
                                        <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">{selectedProject.fullDesc}</p>
                                    </section>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <section>
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00B5DE] mb-2">Tiempo Estimado</h4>
                                            <p className="text-white font-semibold text-base">{selectedProject.time}</p>
                                        </section>
                                        <section>
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00B5DE] mb-2">Tecnologías</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.tech.map(t => (
                                                    <span key={t} className="text-[10px] text-white/60 bg-white/5 px-2 py-1 rounded-md">{t}</span>
                                                ))}
                                            </div>
                                        </section>
                                    </div>

                                    <section>
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00B5DE] mb-3">Objetivos</h4>
                                        <ul className="space-y-2">
                                            {selectedProject.objectives.map((obj, i) => (
                                                <li key={i} className="flex gap-3 text-xs text-gray-400 group">
                                                    <span className="w-4 h-4 rounded-full bg-[#00B5DE]/20 text-[#00B5DE] flex-shrink-0 flex items-center justify-center text-[9px] font-black mt-0.5">
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
                            <div className="w-full lg:w-[62%] bg-[#0a0a0f] relative flex flex-col group/carousel">
                                <div className="p-6 pb-2 flex justify-between items-center z-10">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00B5DE]">Pantallas del Proyecto</h4>
                                </div>

                                <div className="flex-1 relative flex items-center justify-center px-4 sm:px-6 pb-6 overflow-hidden">
                                    {/* Navigation Arrows - Absolute Sides */}
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
                                                className="absolute inset-x-0 inset-y-0 bottom-10 bg-white/5 rounded-3xl border border-white/5 flex items-center justify-center overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-[#00B5DE]/5" />
                                                {selectedProject.screens[screenIndex].endsWith('.mp4') ? (
                                                    <video
                                                        src={selectedProject.screens[screenIndex]}
                                                        autoPlay
                                                        loop
                                                        muted
                                                        playsInline
                                                        className="w-full h-full object-contain relative z-10"
                                                    />
                                                ) : selectedProject.screens[screenIndex].startsWith('/') ? (
                                                    <img
                                                        src={selectedProject.screens[screenIndex]}
                                                        alt={selectedProject.title}
                                                        className="w-full h-full object-contain relative z-10"
                                                    />
                                                ) : (
                                                    <span className="text-white/20 font-black text-6xl md:text-8xl italic select-none">
                                                        {selectedProject.screens[screenIndex]}
                                                    </span>
                                                )}
                                                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00B5DE]/40 shadow-[0_0_15px_#00B5DE] animate-scan pointer-events-none z-20" />
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    {/* Carousel Indicators */}
                                    <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2">
                                        {selectedProject.screens.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => {
                                                    setDirection(i > screenIndex ? 1 : -1);
                                                    setScreenIndex(i);
                                                }}
                                                className={`h-1.5 rounded-full transition-all duration-300 ${i === screenIndex ? 'w-6 bg-[#00B5DE]' : 'w-2 bg-white/20'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
