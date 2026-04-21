'use client';

import { type FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Tech {
  name: string;
  slug: string; // for simpleicons CDN
}

const techs: Tech[] = [
  { name: 'React', slug: 'react' },
  { name: 'Next.js', slug: 'nextdotjs' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'Tailwind CSS', slug: 'tailwindcss' },
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'Figma', slug: 'figma' },
  { name: 'Docker', slug: 'docker' },
  { name: 'HTML5', slug: 'html5' },
  { name: 'CSS3', slug: 'css3' },
  { name: 'JavaScript', slug: 'javascript' },
  { name: 'Git', slug: 'git' },
  { name: 'Vite', slug: 'vite' },
  { name: 'Prisma', slug: 'prisma' },
  { name: 'Firebase', slug: 'firebase' },
  { name: 'Adobe Photoshop', slug: 'adobephotoshop' },
];

const PAGE_SIZE = 8;
const TOTAL_PAGES = Math.ceil(techs.length / PAGE_SIZE);

const TechCard: FC<Tech> = ({ name, slug }) => (
  <motion.div
    layout
    whileHover={{ scale: 1.05 }}
    className="glass-glow p-6 transition-all duration-300 hover:border-[#00B5DE]/50 flex flex-col items-center justify-center gap-4 cursor-default h-full min-h-[160px] group"
  >
    <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center p-3 group-hover:bg-[#00B5DE]/10 transition-colors">
      <img
        src={`https://cdn.simpleicons.org/${slug}/00B5DE`}
        alt={name}
        className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,181,222,0.3)]"
      />
    </div>
    <span className="font-semibold text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">
      {name}
    </span>
  </motion.div>
);

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
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (dir: number) => {
    const newPage = page + dir;
    if (newPage >= 0 && newPage < TOTAL_PAGES) {
      setDirection(dir);
      setPage(newPage);
    }
  };

  const currentTechs = techs.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section id="stack" className="min-h-screen flex items-center py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto text-center relative z-10">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tecnologías</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Herramientas que utilizo para dar vida a los productos</p>
        </div>

        {/* Carousel Control Container */}
        <div className="relative group max-w-6xl mx-auto flex items-center gap-2 sm:gap-8">

          {/* Arrow Left */}
          <button
            onClick={() => paginate(-1)}
            disabled={page === 0}
            className="hidden sm:flex w-12 h-12 rounded-full border border-white/10 items-center justify-center text-[#00e5ff] hover:bg-[#00e5ff]/10 disabled:opacity-20 disabled:pointer-events-none transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* Cards Grid with Animation */}
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
                {currentTechs.map((tech) => (
                  <TechCard key={tech.slug} {...tech} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrow Right */}
          <button
            onClick={() => paginate(1)}
            disabled={page === TOTAL_PAGES - 1}
            className="hidden sm:flex w-12 h-12 rounded-full border border-white/10 items-center justify-center text-[#00e5ff] hover:bg-[#00e5ff]/10 disabled:opacity-20 disabled:pointer-events-none transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Mobile Arrows */}
        <div className="flex sm:hidden justify-center gap-8 mt-8">
          <button
            onClick={() => paginate(-1)}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#00e5ff] disabled:opacity-20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={() => paginate(1)}
            disabled={page === TOTAL_PAGES - 1}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#00e5ff] disabled:opacity-20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Pagination Dots (Google Style) */}
        <div className="flex justify-center gap-3 mt-12">
          {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > page ? 1 : -1);
                setPage(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${i === page ? 'w-8 bg-[#00e5ff]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
