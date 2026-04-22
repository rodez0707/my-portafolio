'use client';

import React from 'react';
import { PieChart, BarChart3 } from 'lucide-react';

interface ChartToggleProps {
    activeView: 'pie' | 'bar';
    onToggle: (view: 'pie' | 'bar') => void;
}

const ChartToggle: React.FC<ChartToggleProps> = ({ activeView, onToggle }) => {
    return (
        <div className="flex gap-4">
            <button
                onClick={() => onToggle('pie')}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${activeView === 'pie'
                    ? 'bg-[#00B5DE] border-[#00B5DE] text-white shadow-[0_0_15px_rgba(0,181,222,0.4)]'
                    : 'bg-transparent border-[#2F2F2F] text-[#b0b0b0] hover:border-[#00B5DE]/50'
                    }`}
                aria-label="Vista de gráfico circular"
            >
                <PieChart size={24} />
            </button>
            <button
                onClick={() => onToggle('bar')}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${activeView === 'bar'
                    ? 'bg-[#00B5DE] border-[#00B5DE] text-white shadow-[0_0_15px_rgba(0,181,222,0.4)]'
                    : 'bg-transparent border-[#2F2F2F] text-[#b0b0b0] hover:border-[#00B5DE]/50'
                    }`}
                aria-label="Vista de gráfico de barras"
            >
                <BarChart3 size={24} />
            </button>
        </div>
    );
};

export default ChartToggle;
