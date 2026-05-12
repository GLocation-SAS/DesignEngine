# DESIGN SYSTEM - DESIGNENGINE

Este documento es la fuente de verdad para los estilos, componentes y decisiones visuales del proyecto. Está directamente alineado con los tokens exportados desde Figma.

---

## 1. COLORES

Los valores expuestos provienen de los tokens base y semánticos, usando la estructura simplificada para frontend (`variables-colors.json`).

### Colores principales

| Token | Valor (500) | Uso |
|------|------|-----|
| primary | `#5A3988FF` | Acciones principales, botones primarios, enlaces destacados |
| secondary | `#1D8DE3FF` | Elementos secundarios, acciones de soporte, componentes menos prominentes |
| white | `#FFFFFFFF` | Fondo principal, color de texto invertido |
| black | `#18181BFF` | Texto principal (neutral-900), fondos oscuros |

*Nota: Se lista el valor 500 como color de base para `primary` y `secondary`. Las escalas completas van del 50 al 900.*

---

### Colores de estado

Las siguientes escalas se utilizan para dar retroalimentación visual al usuario en toda la interfaz.

| Nivel | Success | Warning | Error | Info |
|-------|---------|---------|-------|------|
| 50 | `#ECFDF5FF` | `#FFF9E6FF` | `#FFF1F2FF` | `#EFF6FFFF` |
| 100 | `#D1FAE5FF` | `#FFF0B8FF` | `#FFE4E8FF` | `#DBEAFEFF` |
| 200 | `#A7F3D0FF` | `#FFE27AFF` | `#FECDD5FF` | `#BFDBFEFF` |
| 300 | `#6EE7B7FF` | `#FFD13DFF` | `#FDA4B4FF` | `#93C5FDFF` |
| 400 | `#34D399FF` | `#F7B718FF` | `#FB7185FF` | `#60A5FAFF` |
| 500 | `#10B981FF` | `#D97706FF` | `#E11D48FF` | `#2563EBFF` |
| 600 | `#059669FF` | `#B85F05FF` | `#BE123CFF` | `#1D4ED8FF` |
| 700 | `#047857FF` | `#92400EFF` | `#9F1239FF` | `#1E40AFFF` |
| 800 | `#065F46FF` | `#78350FFF` | `#881337FF` | `#1E3A8AFF` |
| 900 | `#064E3BFF` | `#451A03FF` | `#4C0519FF` | `#172554FF` |

**Uso por tipo:**
- **success**: Mensajes de éxito, confirmaciones, estados positivos.
- **warning**: Alertas, acciones que requieren atención.
- **error**: Mensajes de error, acciones destructivas, validaciones fallidas.
- **info**: Información neutra, mensajes de estado, badges informativos.

*Nota: Los tonos claros (ej. 50/100) son ideales para fondos, los medios (200-400) para bordes, el 500 para el elemento principal, y los oscuros (700-900) para iconos o texto.*

---

### Escala neutral

Utilizada para fondos, bordes, divisiones, y textos de menor jerarquía.

| Token | Valor |
|------|------|
| 50 | `#FAFAFAFF` |
| 100 | `#F4F4F5FF` |
| 200 | `#E4E4E7FF` |
| 300 | `#D4D4D8FF` |
| 400 | `#A1A1AAFF` |
| 500 | `#71717AFF` |
| 600 | `#52525BFF` |
| 700 | `#3F3F46FF` |
| 800 | `#27272AFF` |
| 900 | `#18181BFF` |

---

### Uso de color

- **Primary**: Utilizar para el flujo principal de la aplicación. Botones de llamada a la acción (CTA) y elementos que guían al usuario.
- **Secondary**: Opciones alternativas o de menor prioridad visual frente a las primarias.
- **Neutrales**: Tonos del 50 al 200 para fondos de aplicación o tarjetas. Tonos del 300 al 500 para bordes y estados deshabilitados. Tonos del 600 al 900 para jerarquía tipográfica (textos secundarios y primarios).
- **Estados**: Exclusivos para retroalimentación al usuario. No usarlos como decoración (ej. no usar `error` solo porque se quiere un botón rojo sin que sea una acción destructiva).

---

## 2. TIPOGRAFÍA

### Fuentes

| Rol | Fuente | Uso |
|-----|--------|-----|
| Primaria | **Montserrat** | Encabezados (`h1`–`h6`), elementos UI, etiquetas, títulos |
| Secundaria | **Nunito** | Cuerpo de texto, párrafos, descripciones |

### Pesos disponibles

| Fuente | Pesos |
|--------|-------|
| Montserrat | 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold) |
| Nunito | 400 (Regular), 600 (SemiBold), 700 (Bold) |

### Variables CSS

| Variable | Valor |
|----------|-------|
| `--font-montserrat` | Fuente primaria (headings/UI) |
| `--font-nunito` | Fuente secundaria (body text) |

### Reglas de uso

- Usar `font-family: var(--font-montserrat)` para toda jerarquía de encabezados y etiquetas de componentes.
- Usar `font-family: var(--font-nunito)` para párrafos, descripciones y cuerpo de texto.
- No usar fuentes externas al sistema sin validación en Figma.

---

## 3. ESPACIADO

Sistema métrico para márgenes, paddings y distancias entre elementos, extraído de los tokens primarios, permitiendo consistencia visual.

| Token | Valor | Equivalencia |
|------|------|-------------|
| 0 | 0 | 0px |
| 1 | 4 | 4px |
| 2 | 8 | 8px |
| 3 | 12 | 12px |
| 4 | 16 | 16px |
| 5 | 20 | 20px |
| 6 | 24 | 24px |
| 8 | 32 | 32px |
| 10 | 40 | 40px |
| 12 | 48 | 48px |

---

## 4. RADIOS, BORDES, OPACIDAD Y SOMBRAS

### Border Radius (Radios)

| Token | Valor |
|------|------|
| none | 0px |
| sm | 4px |
| md | 8px |
| lg | 12px |
| xl | 16px |
| full | 9999px |

### Border Width (Ancho de Borde)

| Token | Valor |
|------|------|
| 0 | 0px |
| 1 | 1px |
| 2 | 2px |
| 4 | 4px |

### Opacidad

| Token | Valor |
|------|------|
| 0 | 0 (0%) |
| 25 | 0.25 (25%) |
| 50 | 0.5 (50%) |
| 75 | 0.75 (75%) |
| 100 | 1 (100%) |

### Elevación (Sombras)

| Token | Valor |
|------|------|
| 0 | none |
| 1 | 0px 1px 2px 0px rgba(0, 0, 0, 0.1) |
| 2 | 0px 4px 8px 0px rgba(0, 0, 0, 0.12) |
| 3 | 0px 8px 16px 0px rgba(0, 0, 0, 0.14) |
| 4 | 0px 12px 24px 0px rgba(0, 0, 0, 0.16) |
| 5 | 0px 16px 32px 0px rgba(0, 0, 0, 0.18) |

---

## 5. COMPONENTES BASE

### Button

**Variantes:**
- `primary`: Fondo primary-500, texto white.
- `secondary`: Fondo secondary-500, texto white.
- `success`: Fondo success-500, texto white.
- `error`: Fondo error-500, texto white.
- `info`: Fondo info-500, texto white.
- `warning`: Fondo warning-500, texto white.
- `outline`: Borde primary-500 o secondary-500, fondo transparente.
- `ghost`: Sin fondo ni borde inicial, fondo sutil al interactuar.

**Estados:**
- `default`: Estado base.
- `hover`: Oscurecer el fondo ligeramente (ej. de 500 a 600).
- `active`: Clic presionado (ej. de 600 a 700).
- `disabled`: Fondo neutral-200, texto neutral-600. Inactivo.

**Reglas de uso:**
- Utilizar componentes predefinidos sin sobrescribir estilos inline.
- Solo puede haber un botón primary por sección principal.

### Relación con Figma

Este componente debe corresponder exactamente con su equivalente en Figma, incluyendo:

- proporciones
- spacing
- tipografía
- comportamiento visual
---

### Input

**Estados:**
- `default`: Borde neutral-300, fondo blanco.
- `focus`: Borde primary-500, sin outline de navegador.
- `error`: Borde error-500, texto de ayuda en error-500.
- `disabled`: Fondo neutral-100, texto neutral-600.

**Reglas de uso:**
- Deben incluir siempre una etiqueta visual clara.
- El ancho debe ser consistente con la cuadrícula de diseño.

---

### Card

**Variantes:**
- `default`: Contenedor básico.
- `interactive`: Tarjeta que actúa como enlace o botón.

**Estados (Interactive):**
- `hover`: Aumentar sutilmente la sombra o cambiar borde a primary-500.

**Reglas de uso:**
- Fondo blanco (`#FFFFFFFF`).
- Bordes redondeados según escala de radius de los tokens predefinidos (ej. `md` = 8px, `lg` = 12px).
- Usar tokens de espaciado para padding interno (ej. `4` = 16px).

---

## 6. PRINCIPIOS DE DISEÑO

- **Consistencia sobre creatividad**: Respetar los tokens establecidos en Figma por encima de invenciones espontáneas.
- **Reutilización sobre duplicación**: Emplear los componentes del Design System en lugar de construir UI de un solo uso.
- **Claridad sobre complejidad**: Las interfaces deben ser intuitivas y el uso de los colores debe guiar, no distraer al usuario.

---

## 7. RESTRICCIONES

- **No usar colores fuera del sistema**: Prohibido usar hex o rgb sueltos (ej. `color: #ff0000`). Utilizar siempre referencias a los tokens.
- **No usar estilos inline**: Todo debe gestionarse mediante clases utilitarias integradas con los tokens.
- **No crear componentes sin validación**: Si un patrón se repite, debe validarse su diseño en Figma antes de programarlo.
- **No modificar la escala de espaciado**: No añadir espacios intermedios (ej. un `14px` manual) si no existe en la tabla de espaciados.

---

## 8. PRINCIPIO CLAVE

"El diseño se define en este documento. El código lo implementa."

---

## 9. TAMAÑOS Y PROPORCIONES DE COMPONENTES

Define dimensiones explícitas para garantizar consistencia visual y evitar variaciones arbitrarias.

> **Regla General Obligatoria:** Todos los componentes de interfaz deben utilizar el tamaño `md` (Medium) por defecto. Solo se aplicarán otros tamaños (`xs`, `sm`, `lg`) cuando el usuario lo solicite explícitamente o el contexto del diseño lo requiera de forma ineludible.

---

### 🔘 Button

#### Tamaños

| Tamaño | Altura | Padding horizontal | Padding vertical | Font size | Gap (icono–texto) |
|--------|--------|-------------------|-----------------|-----------|-------------------|
| `xs`   | 36px   | 16px (`px-4`)     | 8px (`py-2`)    | `text-sm` (14px) | 8px (`gap-2`) |
| `sm`   | 40px   | 20px (`px-5`)     | 10px (`py-2.5`) | `text-sm` (14px) | 8px (`gap-2`) |
| `md`   | 44px   | 20px (`px-5`)     | 10px (`py-2.5`) | `text-base` (16px) | 8px (`gap-2`) |
| `lg`   | 56px   | 24px (`px-6`)     | 12px (`py-3`)   | `text-lg` (18px)   | 8px (`gap-2`) |
| `icon` | 40px   | — (cuadrado)      | —               | —         | — |

> El tamaño `icon` produce un botón cuadrado de **40×40px** (`h-10 w-10`), pensado exclusivamente para botones de un solo icono sin texto.

#### Reglas

- La **altura es fija** (`h-[Xpx]`) y no depende del contenido. Nunca usar `auto` ni dejar que el contenido defina la altura.
- Los **iconos** deben tener un tamaño coherente con el texto del botón:
  - `xs` / `sm` → icono de **16px** (`size-4`)
  - `md` → icono de **18px** (`size-[18px]`) o **20px** (`size-5`)
  - `lg` → icono de **20px** (`size-5`) o **24px** (`size-6`)
- El **espaciado entre icono y texto** es siempre `gap-2` (**8px**), controlado por el CVA en todos los tamaños con texto.
- El botón ocupa el **100% del ancho** de su contenedor por defecto (`w-full`). Para ancho automático, usar la prop `fullWidth={false}` o sobreescribir con `w-auto` vía `className`.

---

### ⌨️ Input

#### Tamaños

| Tamaño | Altura | Font size |
|--------|--------|-----------|
| `xs`   | 36px   | `text-xs` (12px) |
| `sm`   | 40px   | `text-sm` (14px) |
| `md`   | 44px   | `text-sm` (14px) |
| `lg`   | 56px   | `text-base` (16px) |

#### Reglas

- La **altura es fija** (`h-[Xpx]`) e incluye el borde de 2.5px.
- El **padding horizontal** del contenedor es fijo a **24px** (`px-6`).
- El **espaciado interno** (gap) entre el texto, iconos y elementos de feedback es de **16px** (`gap-4`).
- El componente se adapta al ancho de su contenido o contenedor con `w-fit` de base, pero sus elementos internos usan `flex-1` para ocupar el espacio disponible.

---

### 🔽 Dropdown

#### Tamaños (Contenedor principal)

| Tamaño | Altura | Font size |
|--------|--------|-----------|
| `xs`   | 36px   | `text-xs` (12px) |
| `sm`   | 40px   | `text-sm` (14px) |
| `md`   | 44px   | `text-sm` (14px) |
| `lg`   | 56px   | `text-base` (16px) |

#### Reglas del selector

- La **altura es fija** e incluye un borde de **2.5px**.
- El **padding horizontal** es de **24px** (`px-6`).
- El **espaciado general interno** es de **16px** (`gap-4`), mientras que el grupo de iconos de la derecha (limpiar selección, error, flecha) mantiene un espaciado de **5px** (`gap-[5px]`).
- Los separadores de los iconos en el bloque derecho tienen un tamaño de **1.5px × 14px**.

#### Menú desplegable (Lista de opciones)

- **Separación** con el selector principal: **8px** (top: `calc(100% + 8px)`).
- **Border-radius**: **8px** (`rounded-[8px]`).
- **Grosor del borde**: **2.5px**.
- **Altura máxima del menú**: **240px** (`max-h-[240px]`) con scroll interno.
- **Opciones de la lista**: Padding de **16px horizontal** y **12px vertical** (`px-[16px] py-[12px]`) con fuente tamaño 14px (`text-[14px]`).

---

*Si no está en DESIGN.md, no existe en el diseño.*