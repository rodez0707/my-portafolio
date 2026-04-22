'use client';

import { type FC, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/app/constants/projects';
import { Project } from '@/app/types/project';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="min-h-screen py-24 relative overflow-hidden">
            <div className="container px-6 mx-auto relative z-10">
                <SectionHeader
                    title="Proyectos"
                    highlight="Destacados"
                    subtitle="Una selección de mis trabajos más recientes donde la técnica y el diseño se fusionan."
                    center={false}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {PROJECTS.map((project: Project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};
