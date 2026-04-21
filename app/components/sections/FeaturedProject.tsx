import { type FC } from 'react'

/**
 * FeaturedProject section showing the main project "Botforge".
 */
export const FeaturedProject: FC = () => {
  return (
    <section id="featured" className="py-24 px-6 bg-tron-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-black mb-16 text-right">
          <span className="gradient-text">Proyecto Destacado</span>
        </h2>

        <div className="card neumorphic p-0 border-tron-cyan/20 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-tron-dark p-8 md:p-12 flex flex-col justify-center border-r border-tron-cyan/10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-12 h-[1px] bg-tron-cyan" />
                <span className="text-tron-cyan uppercase tracking-widest text-sm font-bold">Botforge</span>
              </div>

              <h3 className="text-3xl font-bold mb-6 text-white">
                BOTFORGE
              </h3>

              <p className="text-text-secondary leading-relaxed mb-8">
                Plataforma que utiliza la API de Binance y sus datos históricos para que los usuarios puedan simular estrategias de bots de trading y visualizar si su estrategia hubiera sido rentable en el periodo de tiempo establecido. Fue desarrollado en equipo.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['React', 'Binance API', 'Trabajo en equipo'].map((tag) => (
                  <span key={tag} className="glass px-4 py-1 text-xs font-bold text-tron-cyan border-tron-cyan/30">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="#" className="button-primary px-8">Ver demo</a>
                <a href="#" className="button-secondary px-8">GitHub</a>
              </div>
            </div>

            <div className="bg-[#050508] relative min-h-[300px] flex items-center justify-center overflow-hidden">
              {/* Decorative background grid/lines */}
              <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #00e5ff 1px, transparent 0)', backgroundSize: '24px 24px' }} />

              <div className="relative glass p-6 border-tron-cyan/20 glass-glow transform rotate-3 scale-90 md:scale-100">
                <div className="w-full aspect-video bg-tron-dark rounded-lg flex items-center justify-center border border-tron-cyan/10">
                  <span className="text-tron-cyan/40 text-4xl">📈</span>
                </div>
                <div className="mt-4 h-2 w-2/3 bg-tron-cyan/20 rounded-full" />
                <div className="mt-2 h-2 w-1/2 bg-tron-cyan/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
