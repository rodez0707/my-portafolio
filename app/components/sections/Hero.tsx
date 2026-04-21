'use client';

import { type FC } from 'react';
import { motion } from 'framer-motion';

/**
 * Hero section of the portfolio.
 * Two-column layout: text info on the left, constellation of qualities on the right.
 */

const QUALITIES = [
  { id: 1, label: 'Inteligencia', x: 250, y: 50 },
  { id: 2, label: 'Lealtad', x: 380, y: 150 },
  { id: 3, label: 'Resiliencia', x: 320, y: 300 },
  { id: 4, label: 'Creatividad', x: 150, y: 350 },
  { id: 5, label: 'Colaboración', x: 20, y: 250 },
  { id: 6, label: 'Metódico', x: 80, y: 100 },
  { id: 7, label: 'Responsabilidad', x: 200, y: 200 },
];

const PATH_ORDER = [1, 2, 3, 4, 5, 6, 1, 7, 3];

// Generate fixed random particles outside to satisfy React 19 purity rules
const FIXED_PARTICLES = [...Array(15)].map((_, i) => ({
  id: i,
  left: `${(i * 7.7) % 100}%`, // Pseudorandom stable values
  top: `${(i * 13.3) % 100}%`,
  duration: 4 + ((i * 1.1) % 4),
  delay: (i * 0.7) % 5,
}));



export const Hero: FC = () => {
  // Construct the SVG path string for the constellation lines
  const getPathD = () => {
    const points = PATH_ORDER.map(id => {
      const q = QUALITIES.find(node => node.id === id);
      return q ? `${q.x},${q.y}` : '';
    });
    return `M ${points.join(' L ')}`;
  };

  const pathD = getPathD();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center py-10 relative overflow-hidden"
    >


      <div className="container px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-[50%_50%] gap-16 items-center">

          {/* ── LEFT: Nombre + título ── */}
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

            {/* Row of Contact Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex gap-4 mt-8"
            >
              {[
                { slug: 'whatsapp', color: '#25D366', href: 'https://wa.me/584248110641' },
                { slug: 'github', color: '#ffffff', href: 'https://github.com/tu-usuario' },
                { slug: 'gmail', color: '#EA4335', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=lazaroleonelhernandez@gmail.com' }
              ].map((icon) => (
                <motion.a
                  key={icon.slug}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, translateY: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full glass-glow border border-white/10 flex items-center justify-center transition-all duration-300"
                  style={{
                    boxShadow: `0 0 15px ${icon.color}44`,
                  }}
                >
                  <img
                    src={`https://cdn.simpleicons.org/${icon.slug}/${icon.color.replace('#', '')}`}
                    alt={icon.slug}
                    className="w-6 h-6"
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Constellation Assembly ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="hidden lg:flex items-center justify-center p-8"
          >
            <div className="relative w-full aspect-square max-w-[500px]">
              <svg
                viewBox="0 0 420 420"
                className="w-full h-full overflow-visible"
              >
                {/* Static Background Lines (Faint) */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="#00B5DE"
                  strokeWidth="1"
                  strokeOpacity="0.15"
                />

                {/* Animated Glowing Path (Traveling Light) */}
                <motion.path
                  d={pathD}
                  fill="none"
                  stroke="#00B5DE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1, 1],
                    pathOffset: [0, 0, 1],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ filter: 'drop-shadow(0 0 8px #00B5DE)' }}
                />

                {/* Qualities Nodes */}
                {QUALITIES.map((q, i) => (
                  <motion.g
                    key={q.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    {/* Node Dot with pulse */}
                    <circle cx={q.x} cy={q.y} r="4" fill="#00B5DE" />
                    <motion.circle
                      cx={q.x}
                      cy={q.y}
                      r="8"
                      stroke="#00B5DE"
                      strokeWidth="1"
                      fill="none"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                    />

                    {/* Quality Label */}
                    <text
                      x={q.x + (q.x > 210 ? 15 : -15)}
                      y={q.y + (q.y > 210 ? 15 : -15)}
                      textAnchor={q.x > 210 ? "start" : "end"}
                      fill="#FFFFFF"
                      fontSize="10"
                      fontWeight="600"
                      className="select-none pointer-events-none uppercase tracking-widest opacity-90"
                    >
                      {q.label}
                    </text>
                  </motion.g>
                ))}
              </svg>

              {/* Decorative floating particles in the background */}
              {FIXED_PARTICLES.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute w-1 h-1 bg-[#00B5DE] rounded-full opacity-20"
                  style={{
                    left: p.left,
                    top: p.top,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.1, 0.4, 0.1],
                  }}
                  transition={{
                    duration: p.duration,
                    repeat: Infinity,
                    delay: p.delay,
                  }}
                />
              ))}

            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00B5DE]/40 to-transparent" />
    </section>
  );
};
