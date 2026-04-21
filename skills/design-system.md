# GUÍA DE DISEÑO: TRON LEGACY + NEUMORFISMO + GLASSMORFISMO

## 🎨 PALETA DE COLORES (MODO DARK OBLIGATORIO)

### Colores base
```css
/* Fondo principal */
--bg-dark: #0a0a0f
--bg-secondary: #0d1117
--bg-deep: #001a4a

/* Azules celestes (Tron Legacy) */
--cyan-primary: #00e5ff
--cyan-glow: #00b4d8
--blue-neon: #0066ff
--blue-deep: #001a4a

/* Textos */
--text-primary: #ffffff
--text-secondary: #b0b0b0
--text-accent: #00e5ff
```

### Gradientes obligatorios
```css
/* Gradiente principal (botones importantes) */
background: linear-gradient(135deg, #00e5ff, #0066ff);

/* Gradiente hover */
background: linear-gradient(45deg, #00b4d8, #004e92);

/* Gradiente fondos de sección */
background: linear-gradient(180deg, #0a0a0f, #001a4a);
```

## 🔮 EFECTO NEUMORFISMO

### Neumorfismo para tarjetas y contenedores
```css
.neumorphic {
  background: #0d1117;
  border-radius: 16px;
  box-shadow: 
    8px 8px 16px #050505,
    -8px -8px 16px #151515;
}
```

### Neumorfismo interno (inputs, elementos presionados)
```css
.neumorphic-inset {
  background: #0d1117;
  border-radius: 16px;
  box-shadow: 
    inset 4px 4px 8px #050505,
    inset -4px -4px 8px #151515;
}
```

## 🥛 EFECTO GLASSMORFISMO

### Glassmorfismo básico (headers, modales)
```css
.glass {
  background: rgba(13, 17, 23, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 229, 255, 0.2);
  border-radius: 16px;
}
```

### Glassmorfismo con glow (estilo Tron)
```css
.glass-glow {
  background: rgba(0, 229, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 229, 255, 0.3);
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.1);
}
```

## 🎯 BOTONES

### Botón primario
```css
.button-primary {
  background: linear-gradient(135deg, #00e5ff, #0066ff);
  border-radius: 12px;
  padding: 12px 24px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 229, 255, 0.3);
  border: none;
}

.button-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 229, 255, 0.5);
  background: linear-gradient(135deg, #00f0ff, #0077ff);
}
```

### Botón secundario (neumorfismo)
```css
.button-secondary {
  background: #0d1117;
  border-radius: 12px;
  padding: 12px 24px;
  color: #00e5ff;
  border: 1px solid rgba(0, 229, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 5px 5px 10px #050505, -5px -5px 10px #151515;
}

.button-secondary:hover {
  background: rgba(0, 229, 255, 0.1);
  box-shadow: 3px 3px 6px #050505, -3px -3px 6px #151515;
}
```

## 📦 TARJETAS Y GRIDS

### Grid container
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  padding: 24px;
}
```

### Tarjeta (neumorfismo + glass)
```css
.card {
  background: rgba(13, 17, 23, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(0, 229, 255, 0.15);
  transition: all 0.3s ease;
  box-shadow: 8px 8px 16px #050505, -8px -8px 16px #151515;
}

.card:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 229, 255, 0.4);
  box-shadow: 0 0 25px rgba(0, 229, 255, 0.2), 8px 8px 16px #050505, -8px -8px 16px #151515;
}
```

## ✨ EFECTOS VISUALES TRON

### Línea de luz animada (hover)
```css
.glow-line {
  position: relative;
  overflow: hidden;
}

.glow-line::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00e5ff, transparent);
  animation: slideGlow 2s infinite;
}

@keyframes slideGlow {
  0% { left: -100%; }
  100% { left: 100%; }
}
```

### Sombra de neón
```css
.neon-glow {
  text-shadow: 0 0 5px #00e5ff, 0 0 10px #00e5ff;
  box-shadow: 0 0 10px rgba(0, 229, 255, 0.3);
}
```

## 📐 BORDES REDONDEADOS

```css
/* Estándares obligatorios */
.border-radius-sm { border-radius: 8px; }   /* badges, chips */
.border-radius-md { border-radius: 12px; }  /* botones, inputs */
.border-radius-lg { border-radius: 16px; }  /* tarjetas, modales */
.border-radius-full { border-radius: 9999px; } /* avatares */
```

## 🎨 TIPOGRAFÍA

```css
/* Textos principales */
color: #ffffff;

/* Textos secundarios */
color: #b0b0b0;

/* Textos con glow (títulos, acentos) */
color: #00e5ff;
text-shadow: 0 0 5px rgba(0, 229, 255, 0.5);

/* Links */
color: #00e5ff;
text-decoration: none;
transition: color 0.3s ease;

/* Links hover */
color: #00f0ff;
text-shadow: 0 0 5px rgba(0, 229, 255, 0.8);
```

## 📱 RESPONSIVE

```css
/* Mobile (por defecto) */
.container { padding: 16px; }
.card { padding: 16px; }
.grid-container { gap: 16px; }

/* Tablet (768px+) */
@media (min-width: 768px) {
  .container { padding: 24px; }
  .card { padding: 24px; }
  .grid-container { gap: 24px; }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .container { padding: 32px; }
  .grid-container { gap: 32px; }
}
```

## 🚀 CONFIGURACIÓN TAILWIND

### tailwind.config.ts (obligatorio)
```typescript
module.exports = {
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
}
```

## 💻 IMPLEMENTACIÓN EN COMPONENTES

### Ejemplo de tarjeta Tron
```tsx
<div className="bg-[#0d1117] rounded-neumorphic shadow-neumorphic border border-[rgba(0,229,255,0.15)] hover:shadow-neon transition-all p-6">
  <h2 className="text-tron-cyan text-shadow-glow text-xl font-bold">Título</h2>
  <p className="text-white mt-2">Descripción del proyecto</p>
  <button className="button-primary mt-4">Ver más</button>
</div>
```

### Ejemplo de header glassmorfismo
```tsx
<header className="glass fixed top-0 left-0 right-0 z-50 px-6 py-4">
  <nav className="flex justify-between items-center">
    <h1 className="text-tron-cyan text-xl font-bold">Mi Portafolio</h1>
    <div className="flex gap-4">
      <a href="#" className="text-white hover:text-tron-cyan transition-colors">Inicio</a>
      <a href="#" className="text-white hover:text-tron-cyan transition-colors">Proyectos</a>
      <a href="#" className="text-white hover:text-tron-cyan transition-colors">Contacto</a>
    </div>
  </nav>
</header>
```

## ✅ CHECKLIST DE DISEÑO

Cada componente DEBE verificar:
- [ ] ¿Fondo oscuro (#0a0a0f o #0d1117)?
- [ ] ¿Acentos en azul celeste (#00e5ff)?
- [ ] ¿Bordes redondeados (8px, 12px o 16px)?
- [ ] ¿Efecto neumorfismo en tarjetas?
- [ ] ¿Glassmorfismo en headers/modales?
- [ ] ¿Efecto glow/hover en interacciones?
- [ ] ¿Responsive (mobile/tablet/desktop)?
- [ ] ¿Imágenes optimizadas con next/image?
- [ ] ¿Transiciones suaves (0.3s ease)?

## 🚨 RESPUESTA ESPERADA

Cuando pidas crear componentes visuales, el agente DEBE:
1. Usar la paleta de colores Tron Legacy
2. Aplicar neumorfismo en tarjetas y botones
3. Aplicar glassmorfismo en elementos flotantes
4. Usar bordes redondeados según el estándar
5. Incluir efectos glow en hovers
6. Ser responsive (mobile first)
7. Usar Tailwind con la configuración extendida
