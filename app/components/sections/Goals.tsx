import { type FC } from 'react'

const GoalItem: FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start gap-3 group">
    <span className="text-tron-cyan group-hover:neon-glow transition-all">▹</span>
    <span className="text-text-secondary group-hover:text-text-primary transition-colors">{text}</span>
  </li>
)

/**
 * Goals section showing professional objectives and search criteria.
 */
export const Goals: FC = () => {
  const professionalGoals = [
    'Conseguir mi primer trabajo como frontend',
    'Conseguir clientes freelance',
    'Mostrar mis proyectos personales',
    'Aprender backend',
    'Explorar redes neuronales',
  ]

  const lookingFor = [
    'Trabajar por mi cuenta (freelance)',
    'Cualquier empresa que me dé oportunidad',
    'Proyectos desafiantes y creativos',
    'Equipos colaborativos',
  ]

  return (
    <section id="goals" className="py-24 px-6 bg-tron-dark">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-black mb-16 text-center italic">
          <span className="text-white">Mis</span> <span className="gradient-text">metas</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card neumorphic p-8 border-tron-cyan/10">
            <h3 className="text-2xl font-bold text-tron-cyan mb-8 border-b border-tron-cyan/20 pb-4">
              Objetivos profesionales
            </h3>
            <ul className="space-y-4">
              {professionalGoals.map((goal) => (
                <GoalItem key={goal} text={goal} />
              ))}
            </ul>
          </div>

          <div className="card neumorphic p-8 border-tron-cyan/10">
            <h3 className="text-2xl font-bold text-tron-cyan mb-8 border-b border-tron-cyan/20 pb-4">
              ¿Qué busco?
            </h3>
            <ul className="space-y-4">
              {lookingFor.map((goal) => (
                <GoalItem key={goal} text={goal} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
