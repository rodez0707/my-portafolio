import { type FC } from 'react'

/**
 * Floating bottom navbar component.
 * Provides navigation between sections with glassmorphism effect.
 */
export const Navbar: FC = () => {
    const navItems = [
        { name: 'Inicio', href: '#' },
        { name: 'Sobre mí', href: '#about' },
        { name: 'Stack', href: '#stack' },
        { name: 'Proyectos', href: '#featured' },
        { name: 'Metas', href: '#goals' },
        { name: 'Contacto', href: '#contact' },
    ]

    return (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-2xl">
            <div className="glass neumorphic py-3 px-6 flex justify-around items-center gap-2 border-tron-cyan/20">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-text-secondary hover:text-tron-cyan hover:neon-glow transition-all duration-300"
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </nav>
    )
}
