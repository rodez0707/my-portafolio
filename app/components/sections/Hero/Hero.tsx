'use client';

import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Constellation } from '@/app/components/sections/Hero/Constellation';
import { ContactLinks } from '@/app/components/sections/Hero/ContactLinks';

export const Hero: FC = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center py-10 relative overflow-hidden">
            <div className="container px-6 mx-auto relative z-10">
                <div className="grid lg:grid-cols-[50%_50%] gap-16 items-center">
                    {/* LEFT: Intro */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="flex flex-col justify-center"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-[#00B5DE] text-sm font-semibold uppercase tracking-[0.3em] mb-6"
                        >
                            Portfolio
                        </motion.p>

                        <h1 className="leading-none mb-1">
                            <span className="block text-[clamp(2rem,4.5vw,4rem)] font-light text-white/90 tracking-tight">
                                Lazaro. L
                            </span>
                            <span className="block text-[clamp(2rem,4.5vw,4rem)] font-black text-[#00B5DE] tracking-tight leading-none uppercase">
                                Hernandez. R
                            </span>
                        </h1>

                        <div className="w-full max-w-[400px] h-[3px] bg-[#00B5DE] my-8" />

                        <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">
                            UI Developer <span className="text-white/60">/</span> UX Engineer
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="flex flex-wrap gap-4 mt-12"
                        >
                            <a
                                href="#about"
                                className="group relative overflow-hidden bg-[#00B5DE] text-[#0a0a0f] font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,181,222,0.4)]"
                            >
                                <span className="relative z-10 uppercase tracking-widest text-sm font-bold">Sobre mí</span>
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out" />
                            </a>
                            <a
                                href="#projects"
                                className="border border-[#00B5DE]/40 text-[#00B5DE] font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:bg-[#00B5DE]/10 hover:border-[#00B5DE] text-sm uppercase tracking-widest font-bold"
                            >
                                Proyectos
                            </a>
                        </motion.div>

                        <ContactLinks />
                    </motion.div>

                    {/* RIGHT: Constellation */}
                    <Constellation />
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00B5DE]/40 to-transparent" />
        </section>
    );
};
