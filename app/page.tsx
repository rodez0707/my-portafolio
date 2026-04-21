import About from '@/components/sections/About';
import { Hero } from '@/app/components/sections/Hero';
import { Stack } from '@/app/components/sections/Stack';
import { Footer } from '@/app/components/sections/Footer';
import { Contact } from '@/app/components/sections/Contact';
import { Projects } from '@/app/components/sections/Projects';
// ... (rest of imports if any, but adding it at top is better)

const Button: React.FC<{ children: React.ReactNode; variant?: 'primary' | 'secondary'; className?: string }> = ({ children, variant = 'primary', className = "" }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-bold transition-all duration-300 active:scale-95 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-gradient-to-r from-[#00e5ff] to-[#0066ff] text-white shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]",
    secondary: "bg-[#0d1117] text-[#00e5ff] border border-[#00e5ff]/30 hover:bg-[#00e5ff]/10"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default function Home() {
  return (
    <main className="relative">
      {/* Sección 1: Hero */}
      <Hero />

      {/* Sección 2: Sobre Mí */}
      <About />

      {/* Sección 3: Stack */}
      <Stack />

      {/* Sección 4: Proyectos */}
      <Projects />

      {/* Sección 5: Contacto */}
      <Contact />

      {/* Footer footer-glow decoration */}
      <Footer />
    </main>
  );
}
