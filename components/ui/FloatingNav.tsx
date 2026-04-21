'use client';

import React, { useState, useEffect, useMemo } from 'react';

const FloatingNav = () => {
    const [activeSection, setActiveSection] = useState('hero');

    const navItems = useMemo(() => [
        { name: 'Inicio', href: '#hero', id: 'hero' },
        { name: 'Sobre mí', href: '#about', id: 'about' },
        { name: 'Stack', href: '#stack', id: 'stack' },
        { name: 'Proyectos', href: '#projects', id: 'projects' },
        { name: 'Contacto', href: '#contact', id: 'contact' },
    ], []);

    useEffect(() => {
        // Track which sections are currently visible
        const visibleSections = new Map<string, number>();

        const observerOptions = {
            root: null,
            rootMargin: '-10% 0px -85% 0px', // activates when top 15% of viewport is crossed
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Store the distance from top of viewport (lower = higher on screen)
                    visibleSections.set(entry.target.id, entry.boundingClientRect.top);
                } else {
                    visibleSections.delete(entry.target.id);
                }
            });

            if (visibleSections.size > 0) {
                // Pick the section whose top edge is closest to the top of the viewport
                const topmost = [...visibleSections.entries()].reduce((a, b) =>
                    Math.abs(a[1]) < Math.abs(b[1]) ? a : b
                );
                setActiveSection(topmost[0]);
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [navItems]);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);
        if (elem) {
            elem.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className="fixed bottom-[28px] left-1/2 -translate-x-1/2 z-50">
            <div className="bg-[#151515] border border-[#2F2F2F] rounded-[44px] px-6 sm:px-9 py-4 flex items-center gap-6 sm:gap-9 shadow-[4px_4px_8px_rgba(0,0,0,0.3),-1px_-1px_2px_rgba(255,255,255,0.05)]">
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                        <a
                            key={item.id}
                            href={item.href}
                            onClick={(e) => handleScrollTo(e, item.href)}
                            className={`relative text-[13px] sm:text-[15px] transition-all duration-200 ease-in-out hover:-translate-y-[2px] hover:text-[#00B5DE] ${isActive
                                ? 'text-white font-bold -translate-y-[2px]'
                                : 'text-[#b0b0b0] font-light'
                                }`}
                        >
                            {item.name}
                            {isActive && (
                                <span className="absolute bottom-[-7px] left-[10%] w-[80%] h-[2px] bg-[#00B5DE] rounded-full transition-all duration-300" />
                            )}
                        </a>
                    );
                })}
            </div>
        </nav>
    );
};

export default FloatingNav;
