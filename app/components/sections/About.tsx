import { type FC } from 'react'

/**
 * About section of the portfolio.
 * Describes Lazaro's professional background and goals.
 */
export const About: FC = () => {
  return (
    <section id="about" className="bg-tron-secondary py-24 px-6 relative">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="card neumorphic p-8 md:p-12 relative overflow-hidden border-tron-cyan/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-tron-cyan/5 blur-3xl -z-10" />

            <h2 className="text-3xl font-bold text-tron-cyan mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-tron-cyan" />
              Sobre mí
            </h2>

            <div className="space-y-6 text-text-secondary leading-loose">
              <p>
                Soy un desarrollador frontend junior con menos de un año de experiencia práctica,
                pero con una <span className="text-text-primary font-semibold">mentalidad meticulosa, creativa y colaborativa</span>.
                Mi enfoque va más allá de escribir código: me importa planificar, diseñar y ejecutar soluciones que realmente aporten valor.
              </p>

              <div className="glass p-6 border-tron-cyan/10">
                <p>
                  Aunque no soy muy de backend, estoy dispuesto e interesado en aprenderlo para convertirme en un profesional más completo.
                  También tengo experiencia con herramientas de diseño como <span className="text-tron-cyan">Figma, Photoshop e Illustrator</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-tron-cyan to-tron-blue rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative neumorphic w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-tron-cyan/20 flex items-center justify-center bg-tron-dark">
              <span className="text-6xl filter grayscale opacity-20">👤</span>
              <div className="absolute bottom-4 left-4 right-4 h-1 bg-tron-cyan/30 overflow-hidden rounded-full">
                <div className="bg-tron-cyan h-full w-2/3 shadow-[0_0_10px_#00e5ff]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
