/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'tron-cyan': '#00e5ff',
                'tron-blue': '#0066ff',
                'tron-dark': '#0a0a0f',
                'tron-secondary': '#0d1117',
            },
            borderRadius: {
                'neumorphic': '16px',
            },
            boxShadow: {
                'neumorphic': '8px 8px 16px #050505, -8px -8px 16px #151515',
                'neumorphic-inset': 'inset 4px 4px 8px #050505, inset -4px -4px 8px #151515',
                'neon': '0 0 10px rgba(0, 229, 255, 0.3)',
                'neon-hover': '0 0 20px rgba(0, 229, 255, 0.5)',
            },
            animation: {
                'glow': 'slideGlow 2s infinite',
            },
            keyframes: {
                slideGlow: {
                    '0%': { left: '-100%' },
                    '100%': { left: '100%' },
                },
            },
        },
    },
    plugins: [],
}
