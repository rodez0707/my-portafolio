'use client';

import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/app/types/project';

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project, onClick }) => {
    return (
        <motion.div
            layoutId={`card-${project.id}`}
            onClick={onClick}
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
    );
};
