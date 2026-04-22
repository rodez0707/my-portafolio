'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChartToggle from '@/app/components/ui/ChartToggle';
import SkillRadar from '@/app/components/ui/SkillRadar';
import SkillBarChart from '@/app/components/ui/SkillBarChart';

const About = () => {
    const [activeView, setActiveView] = useState<'pie' | 'bar'>('pie');

    const skills_tags = ['React', 'Node.js', 'Tailwind', 'CSS'];

    return (
        <section id="about" className="min-h-screen flex items-center py-20 bg-[#0d1117] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00B5DE]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container px-6 mx-auto relative z-10">
                <div className="grid lg:grid-cols-[40%_60%] gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#0a0a0f] border border-[#2F2F2F] rounded-[32px] p-8 sm:p-10 shadow-[8px_8px_24px_rgba(0,0,0,0.5),-4px_-4px_12px_rgba(255,255,255,0.02)] flex flex-col items-center min-h-[500px]"
                    >
                        <div className="w-full flex justify-between items-center mb-12">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">Skills Analysis</h3>
                            <ChartToggle activeView={activeView} onToggle={setActiveView} />
                        </div>

                        <div className="flex-1 flex items-center justify-center w-full">
                            <AnimatePresence mode="wait">
                                {activeView === 'pie' ? (
                                    <motion.div
                                        key="pie"
                                        initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, rotate: 10 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <SkillRadar />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="bar"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full h-full flex items-center justify-center"
                                    >
                                        <SkillBarChart />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-black mb-2 flex items-center gap-4">
                            Frontend <span className="text-[#00B5DE]">Developer</span>
                        </h2>
                        <h3 className="text-xl md:text-2xl text-gray-400 font-medium mb-6">
                            UI Developer / UX Engineer
                        </h3>

                        <div className="w-[400px] h-[3px] bg-[#00B5DE] mb-8" />

                        <div className="space-y-6 text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
                            <p>
                                Desarrollador frontend con mentalidad meticulosa, creativa y colaborativa.
                                Mi enfoque va más allá de escribir código: me importa planificar, diseñar
                                y ejecutar soluciones que realmente aporten valor.
                            </p>
                            <p>
                                Aunque no me destaco en el área de backend, estoy dispuesto e interesado
                                en aprenderlo para convertirme en un profesional más completo.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {skills_tags.map((skill) => (
                                <div
                                    key={skill}
                                    className="bg-[#00B5DE]/5 border border-[#00B5DE]/30 text-gray-300 py-1.5 px-5 rounded-full text-center font-bold transition-all duration-300 hover:bg-[#00B5DE] hover:text-[#0a0a0f] hover:shadow-[0_0_20px_rgba(0,181,222,0.3)] cursor-default"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
