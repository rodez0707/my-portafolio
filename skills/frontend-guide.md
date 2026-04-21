# GUÍA DE CALIDAD: FRONTEND

## 🧹 PROGRAMACIÓN LIMPIA (Clean Code)

### Nombres que revelen intención (sin tautología)
```typescript
// ❌ MALO (tautología - decir lo mismo dos veces)
const userData = userData
const getUserInfo = () => {}
const listComponent = () => {}
const isValidTrue = isValid
const userObject = user

// ✅ BUENO
const user = user
const getUser = () => {}
const UserList = () => {}
const isValid = isValid
```

### Funciones con propósito único (una sola responsabilidad)
```typescript
// ❌ MALO (hace 3 cosas en una función)
function processUserAndValidateAndSaveToDatabase() {
  // validar
  // procesar
  // guardar
}

// ✅ BUENO (una función por propósito)
function validateUser(user: User): boolean { }
function processUserData(user: User): ProcessedUser { }
function saveUser(user: User): Promise<void> { }
```

### Evitar código duplicado (principio DRY)
```typescript
// ❌ MALO (lógica repetida)
function calculateUserDiscount(user: User) {
  return user.points * 0.1 + (user.isPremium ? 50 : 0)
}

function calculateAdminDiscount(admin: Admin) {
  return admin.points * 0.1 + (admin.isPremium ? 50 : 0)
}

// ✅ BUENO (extraer lógica común)
function calculateDiscount(entity: { points: number; isPremium: boolean }) {
  return entity.points * 0.1 + (entity.isPremium ? 50 : 0)
}
```

## 🏛 ARQUITECTURA OBLIGATORIA

### Separación de responsabilidades (capas)
```
┌─────────────────────────────────────────┐
│  COMPONENTE UI (Solo renderiza)         │
│  - No sabe de dónde vienen los datos    │
│  - Recibe props o usa hooks             │
│  - No tiene lógica de negocio           │
├─────────────────────────────────────────┤
│  HOOK (use*)                            │
│  - Obtiene datos con React Query        │
│  - Maneja estado servidor               │
│  - Expone isLoading, error, data        │
├─────────────────────────────────────────┤
│  STORE (Zustand)                        │
│  - SOLO para UI efímera                 │
│  - Modal abierto/cerrado                │
│  - Tema oscuro/claro                    │
│  - Sidebar expandido/colapsado          │
├─────────────────────────────────────────┤
│  VALIDACIÓN (Zod)                       │
│  - En lib/validations/                  │
│  - Esquemas reusables                   │
│  - Mismo esquema en cliente y servidor  │
└─────────────────────────────────────────┘
```

### Flujo de datos estándar
```
Usuario hace clic
    ↓
Componente UI llama al handler
    ↓
Handler valida con Zod (cliente)
    ↓
Si es válido, llama al hook
    ↓
Hook ejecuta mutation de React Query
    ↓
React Query maneja caché y revalidación
    ↓
UI se actualiza automáticamente
```

## 🔍 COHERENCIA (Consistencia en todo el código)

### Patrón estándar para componentes
```typescript
// TODOS los componentes DEBEN seguir este patrón
import { type FC, useState, useCallback, useMemo } from 'react'

// 1. Interfaz de props (siempre tipada)
interface ComponentNameProps {
  /** Descripción de la prop */
  propName: string
  /** Prop opcional */
  optionalProp?: number
  children?: React.ReactNode
}

// 2. Componente (export nombrado, no default)
export const ComponentName: FC<ComponentNameProps> = ({ 
  propName, 
  optionalProp,
  children 
}) => {
  // 3. Hooks al inicio (siempre en este orden)
  const [localState, setLocalState] = useState<string>('')
  const handleClick = useCallback(() => {
    // lógica
  }, [])
  
  const derivedValue = useMemo(() => {
    return expensiveComputation(propName)
  }, [propName])
  
  // 4. Handlers (funciones que responden a eventos)
  const onSubmit = async (data: FormData) => {
    // lógica del submit
  }
  
  // 5. Render (siempre al final)
  return (
    <div className="component-container">
      {children}
    </div>
  )
}
```

### Patrón para páginas (Server Component por defecto)
```typescript
// app/ruta/page.tsx
// ✅ Server Component por defecto (sin 'use client')

import { Suspense } from 'react'
import { ClientComponent } from '@/components/client-component'
import { LoadingSkeleton } from '@/components/ui/loading-skeleton'

// Tipado de parámetros de ruta
interface PageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ params, searchParams }: PageProps) {
  // 1. Obtener datos del servidor (DB, fetch, etc.)
  const { id } = await params
  const data = await fetchDataFromServer(id)
  
  // 2. Renderizar Client Component con datos
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <ClientComponent initialData={data} />
    </Suspense>
  )
}
```

### Patrón para hooks personalizados
```typescript
// hooks/use-custom-hook.ts
// Los hooks SIEMPRE empiezan con "use"

import { useQuery, useMutation } from '@tanstack/react-query'
import { useCallback } from 'react'

interface UseCustomHookOptions {
  enabled?: boolean
  onSuccess?: (data: any) => void
}

export function useCustomHook(options: UseCustomHookOptions = {}) {
  // 1. Configuración por defecto
  const { enabled = true, onSuccess } = options
  
  // 2. Query para obtener datos
  const { data, isLoading, error } = useQuery({
    queryKey: ['custom-key'],
    queryFn: fetchData,
    enabled,
  })
  
  // 3. Mutation para modificar datos
  const { mutate, isPending } = useMutation({
    mutationFn: updateData,
    onSuccess,
  })
  
  // 4. Funciones helper
  const handleUpdate = useCallback((newData: any) => {
    mutate(newData)
  }, [mutate])
  
  // 5. Retornar solo lo necesario
  return {
    data,
    isLoading,
    error,
    update: handleUpdate,
    isUpdating: isPending,
  }
}
```

## ⚡ OPTIMIZACIÓN OBLIGATORIA

### Reglas de rendimiento (aplicar siempre)
```typescript
// ✅ IMÁGENES: siempre con next/image
import Image from 'next/image'
<Image 
  src="/image.jpg" 
  alt="Descripción"
  width={800}
  height={600}
  loading="lazy"
  placeholder="blur"
/>

// ✅ LISTAS LARGAS: usar useMemo
const expensiveList = useMemo(() => {
  return items.map(item => heavyTransformation(item))
}, [items])

// ✅ FUNCIONES EN PROPS: usar useCallback
const handleClick = useCallback(() => {
  doSomething(id)
}, [id])

// ✅ VALORES DERIVADOS: usar useMemo
const totalPrice = useMemo(() => {
  return cart.items.reduce((sum, item) => sum + item.price, 0)
}, [cart.items])

// ✅ COMPONENTES PESADOS: lazy loading
const HeavyComponent = dynamic(() => import('@/components/heavy'), {
  loading: () => <div>Cargando...</div>,
  ssr: false // si no necesita SSR
})
```

### Evitar re-renderizados innecesarios
```typescript
// ❌ MALO: componente hijo se re-renderiza siempre
const Parent = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <ExpensiveChild /> {/* Se re-renderiza cada vez que cambia count */}
    </>
  )
}

// ✅ BUENO: memo para evitar re-renderizados
const ExpensiveChild = memo(() => {
  return <div>Componente pesado</div>
})
```

## 📝 DOCUMENTACIÓN DE TRAMOS

### ✅ Qué documentar OBLIGATORIAMENTE

#### 1. Funciones complejas (>10 líneas o lógica no trivial)
```typescript
/**
 * Calcula el precio final aplicando descuentos progresivos
 * 
 * @param items - Lista de productos en el carrito
 * @param userTier - Nivel del usuario ('bronze', 'silver', 'gold')
 * @param date - Fecha de la compra (para descuentos estacionales)
 * @returns Precio final después de todos los descuentos
 * 
 * @example
 * calculateFinalPrice([{price: 100}], 'gold', new Date('2024-12-25'))
 * // Retorna 76.5 (descuento 15% gold + 10% navidad)
 */
function calculateFinalPrice(
  items: CartItem[], 
  userTier: UserTier, 
  date: Date
): number {
  // 1. Descuento base por cantidad (5% cada 10 items)
  const quantityDiscount = Math.floor(items.length / 10) * 0.05
  
  // 2. Descuento por nivel de usuario
  const tierDiscount = TIER_DISCOUNTS[userTier] // gold = 15%
  
  // 3. Descuento estacional (navidad = 10%)
  const seasonalDiscount = isChristmasSeason(date) ? 0.10 : 0
  
  // 4. Descuento total (máximo 50%)
  const totalDiscount = Math.min(
    quantityDiscount + tierDiscount + seasonalDiscount, 
    0.50
  )
  
  const subtotal = items.reduce((sum, item) => sum + item.price, 0)
  return subtotal * (1 - totalDiscount)
}
```

#### 2. Decisiones técnicas importantes
```typescript
// lib/validations/user.schema.ts

// Decisión: Usamos Zod en lugar de Yup porque:
// - Zod tiene mejor integración con TypeScript
// - Es más rápido en tiempo de ejecución
// - La API es más limpia y predecible
// - Inferencia de tipos automática sin duplicación
export const UserSchema = z.object({
  email: z.string().email(),
  age: z.number().min(18).max(120)
})
```

#### 3. Lógica de negocio específica del dominio
```typescript
// lib/utils/credit-score.ts

/**
 * Calcula el score de crédito basado en reglas de negocio:
 * - Historial de pagos: 35% del score
 * - Utilización de crédito: 30% del score
 * - Antigüedad: 15% del score
 * - Mix de créditos: 10% del score
 * - Consultas recientes: 10% del score
 * 
 * Rango: 300 (mínimo) a 850 (máximo)
 * Aprobación requiere mínimo 650
 */
export function calculateCreditScore(profile: CreditProfile): number {
  // implementación
}
```

### ❌ Qué NO documentar (evitar tautología)

```typescript
// ❌ NO documentar esto (el nombre ya lo dice)
// Incrementa el contador
setCount(count + 1)

// ❌ NO documentar esto
// Renderiza el botón de submit
<button type="submit">Enviar</button>

// ❌ NO documentar el tipo que ya es obvio
// String con el nombre del usuario
const userName: string = "Juan"

// ❌ NO documentar lo que el código ya expresa claramente
// Si el usuario está activo, muestra el dashboard
if (user.isActive) {
  showDashboard()
}
```

## 🔬 VERIFICACIÓN DE CALIDAD (Checklist automático)

### Checklist de Programación Limpia
- [ ] ¿Los nombres de variables/funciones revelan su propósito?
- [ ] ¿No hay tautología evidente (userData, isValidTrue)?
- [ ] ¿Cada función hace una sola cosa?
- [ ] ¿No hay código duplicado?
- [ ] ¿Las funciones tienen menos de 20 líneas?

### Checklist de Arquitectura
- [ ] ¿Server Component por defecto (sin 'use client' innecesario)?
- [ ] ¿Los datos del servidor usan React Query, no useEffect directo?
- [ ] ¿Zustand se usa SOLO para UI efímera?
- [ ] ¿Zod valida TODOS los datos de entrada?
- [ ] ¿Los componentes de UI son puros (sin lógica de negocio)?

### Checklist de Coherencia
- [ ] ¿El patrón del componente sigue el estándar (Props → Hooks → Handlers → Render)?
- [ ] ¿Los hooks personalizados empiezan con "use"?
- [ ] ¿Los tipos están en archivos .types.ts o interfaces dentro del componente?
- [ ] ¿Los exports son nombrados (no default excepto páginas)?

### Checklist de Optimización
- [ ] ¿Las imágenes usan next/image?
- [ ] ¿useMemo para arrays/objetos derivados?
- [ ] ¿useCallback para funciones que van como props?
- [ ] ¿Los componentes pesados tienen lazy loading?
- [ ] ¿No hay re-renderizados innecesarios (React.memo donde toca)?

### Checklist de Documentación
- [ ] ¿Las funciones complejas (>10 líneas) tienen JSDoc?
- [ ] ¿Las decisiones técnicas están explicadas?
- [ ] ¿La lógica de negocio no trivial está documentada?
- [ ] ¿No hay documentación tautológica (obvia)?

## 🚨 RESPUESTA ESPERADA DEL AGENTE

Cuando pidas crear o modificar código, el agente DEBE:

1. **Escribir código que cumpla TODAS estas reglas**
2. **No explicar lo obvio** (no decir "voy a crear un componente")
3. **Añadir comentarios SOLO en casos no triviales** (funciones complejas, decisiones técnicas)
4. **Verificar el checklist antes de entregar código**
5. **Usar los patrones definidos** (estructura de componentes, hooks, etc.)
6. **No generar tautologías** (código redundante o nombres redundantes)

## 📦 Dependencias necesarias

Este proyecto requiere:
```json
{
  "dependencies": {
    "@tanstack/react-query": "^5.0.0",
    "zustand": "^4.5.0",
    "zod": "^3.22.0",
    "next": "15.x",
    "react": "^18.2.0"
  },
  "devDependencies": {
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "jest": "^29.0.0",
    "@playwright/test": "^1.40.0",
    "typescript": "^5.0.0"
  }
}
```
