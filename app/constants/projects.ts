import { Project } from '../types/project';

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'BOTFORGE',
        shortDesc: 'Plataforma de backtesting para validar estrategias de trading algorítmico sin riesgo.',
        fullDesc: 'Desarrollo de una plataforma completa de backtesting que permite a los traders validar sus estrategias con datos históricos, eliminando la incertidumbre antes de operar en el mercado real con capital propio.',
        objectives: [
            'Implementar motor de backtesting de alta fidelidad',
            'Soportar múltiples pares de trading y timeframes',
            'Proveer métricas detalladas (Sharpe ratio, drawdown, win rate)',
            'Permitir validación visual de estrategias'
        ],
        time: '3 Meses',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        category: 'Web Design',
        screens: [
            '/image.png',
            '/image (2).png',
            '/5132234843981810842.jpg',
            '/video5132234843521812717.mp4',
            '/video5132234843521812718.mp4'
        ]
    },
    {
        id: 2,
        title: 'ALEXGYM',
        shortDesc: 'Sistema de gestión de inventario y mantenimiento para gimnasio de alta gama con alto volumen de máquinas.',
        fullDesc: 'Plataforma integral para la gestión del inventario de un gimnasio de alta gama con alto volumen de máquinas distribuidas por zonas. Permite el control de ubicaciones, monitoreo de estado (activa/dañada/mantenimiento) y registro histórico de cambios. Incluye generación de reportes automatizados y estadísticas detalladas para optimizar la disponibilidad del parque de máquinas.',
        objectives: [
            'Gestionar ubicaciones de máquinas separadas por zonas (cardio, pesas, funcional, etc.)',
            'Controlar estado de máquinas con opciones: activa, dañada, en mantenimiento',
            'Registrar historial de cambios de estado con fecha y responsable',
            'Generar reportes completos de máquinas dañadas y tiempos de reparación',
            'Visualizar estadísticas del estado del parque de máquinas (porcentaje de disponibilidad, máquinas más problemáticas)',
            'Optimizar la gestión de mantenimiento preventivo y correctivo'
        ],
        time: '4 Meses',
        tech: ['React-vite', 'TypeScript', 'CSS3', 'Bootstrap'],
        category: 'Web Design',
        screens: [
            '/Load-Page.png',
            '/5134479445430308256.jpg',
            '/video5134479444970309834.mp4',
            '/video5134479444970309835.mp4'
        ]
    },
];
