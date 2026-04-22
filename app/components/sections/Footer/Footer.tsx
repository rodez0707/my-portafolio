'use client';

import { type FC } from 'react';
import { motion } from 'framer-motion';

/**
 * Professional footer skeletal structure.
 */
export const Footer: FC = () => {
    const currentYear = new Date().getFullYear();

    const sections = [
        {
            title: 'Navegación',
            links: [
                { name: 'Inicio', href: '#hero' },
                { name: 'Sobre mí', href: '#about' },
                { name: 'Stack', href: '#stack' },
                { name: 'Proyectos', href: '#projects' },
            ]
        },
        {
            title: 'Legal',
            links: [
                { name: 'Privacidad', href: '#' },
                { name: 'Términos', href: '#' },
            ]
        },
        {
            title: 'Redes',
            links: [
                { name: 'GitHub', href: '#' },
                { name: 'LinkedIn', href: '#' },
                { name: 'Instagram', href: '#' },
            ]
        }
    ];

    return (
        <footer className="relative bg-[#0a0a0f] pt-20 pb-10 border-t border-white/5 overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00B5DE]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-6 mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Section */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col">
                            <span className="text-2xl font-light tracking-tight text-white/90">Lazaro. L</span>
                            <span className="text-2xl font-black text-[#00B5DE] uppercase tracking-tighter -mt-2">Hernandez. R</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            Frontend Developer & UI Engineer enfocado en crear experiencias interactivas de alto impacto visual y funcional.
                        </p>
                    </div>

                    {/* Links Sections mapping */}
                    {sections.map((section) => (
                        <div key={section.title} className="flex flex-col gap-6">
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#00B5DE]">
                                {section.title}
                            </h4>
                            <ul className="flex flex-col gap-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center group"
                                        >
                                            <span className="w-0 group-hover:w-2 h-[1px] bg-[#00B5DE] mr-0 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-600 text-xs font-medium">
                        &copy; {currentYear} Lazaro Hernandez. Diseñado y Desarrollado con 💙
                    </p>

                    {/* Placeholder buttons for language or back to top */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="bg-white/5 hover:bg-[#00B5DE]/10 text-gray-400 hover:text-[#00B5DE] px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border border-white/5 hover:border-[#00B5DE]/30 flex items-center gap-2"
                        >
                            <span>Back to top</span>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
