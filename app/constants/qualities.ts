export interface Quality {
    id: number;
    label: string;
    x: number;
    y: number;
}

export const QUALITIES: Quality[] = [
    { id: 1, label: 'Inteligencia', x: 250, y: 50 },
    { id: 2, label: 'Lealtad', x: 380, y: 150 },
    { id: 3, label: 'Resiliencia', x: 320, y: 300 },
    { id: 4, label: 'Creatividad', x: 150, y: 350 },
    { id: 5, label: 'Colaboración', x: 20, y: 250 },
    { id: 6, label: 'Metódico', x: 80, y: 100 },
    { id: 7, label: 'Responsabilidad', x: 200, y: 200 },
];

export const PATH_ORDER = [1, 2, 3, 4, 5, 6, 1, 7, 3];
