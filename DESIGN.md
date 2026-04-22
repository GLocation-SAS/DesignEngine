# DESIGN SYSTEM - DESIGNENGINE

Este documento es la fuente de verdad para los estilos, componentes y decisiones visuales del proyecto. Está directamente alineado con los tokens exportados desde Figma.

---

## 1. COLORES

Los valores expuestos provienen de los tokens base y semánticos, usando la estructura simplificada para frontend (`variables-colors.json`).

### Colores principales

| Token | Valor (500) | Uso |
|------|------|-----|
| primary | `#5A3988FF` | Acciones principales, botones primarios, enlaces destacados |
| secondary | `#1F4459FF` | Elementos secundarios, acciones de soporte, componentes menos prominentes |
| white | `#FFFFFFFF` | Fondo principal, color de texto invertido |
| black | `#111827FF` | Texto principal, fondos oscuros |

*Nota: Se lista el valor 500 como color de base para `primary` y `secondary`. Las escalas completas van del 50 al 900.*

---

### Colores de estado

Las siguientes escalas se utilizan para dar retroalimentación visual al usuario en toda la interfaz.

| Nivel | Success | Warning | Error | Info |
|-------|---------|---------|-------|------|
| 50 | `#E8F6EFFF` | `#FFFBEBFF` | `#FFE8EFFF` | `#EFF6FFFF` |
| 100 | `#CFEAE3FF` | `#FEF3C7FF` | `#FFD1DFFF` | `#DBEAFEFF` |
| 200 | `#9FD5CAFF` | `#FDE68AFF` | `#FFA3BFFF` | `#BFDBFEFF` |
| 300 | `#6FBFAFFF` | `#FCD34DFF` | `#FF759FFF` | `#93C5FDFF` |
| 400 | `#1F7A6BFF` | `#D97706FF` | `#D10035FF` | `#1D4ED8FF` |
| 500 | `#1F7A6BFF` | `#D97706FF` | `#FA003FFF` | `#2563EBFF` |
| 600 | `#19635BFF` | `#D97706FF` | `#D10035FF` | `#2563EBFF` |
| 700 | `#134C45FF` | `#B45309FF` | `#A8002AFF` | `#1D4ED8FF` |
| 800 | `#0D3531FF` | `#92400EFF` | `#7F0020FF` | `#1E40AFFF` |
| 900 | `#071E1EFF` | `#78350FFF` | `#570015FF` | `#1E3A8AFF` |

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
| 50 | `#F5F5F5FF` |
| 100 | `#E8E8E8FF` |
| 200 | `#D1D1D1FF` |
| 300 | `#BABABAFF` |
| 400 | `#A3A3A3FF` |
| 500 | `#5B5B5BFF` |
| 600 | `#494949FF` |
| 700 | `#383838FF` |
| 800 | `#262626FF` |
| 900 | `#141414FF` |

---

### Uso de color

- **Primary**: Utilizar para el flujo principal de la aplicación. Botones de llamada a la acción (CTA) y elementos que guían al usuario.
- **Secondary**: Opciones alternativas o de menor prioridad visual frente a las primarias.
- **Neutrales**: Tonos del 50 al 200 para fondos de aplicación o tarjetas. Tonos del 300 al 500 para bordes y estados deshabilitados. Tonos del 600 al 900 para jerarquía tipográfica (textos secundarios y primarios).
- **Estados**: Exclusivos para retroalimentación al usuario. No usarlos como decoración (ej. no usar `error` solo porque se quiere un botón rojo sin que sea una acción destructiva).

---

## 2. TIPOGRAFÍA

*(Actualmente no definida en los archivos de tokens importados. Se mantendrá la configuración de la fuente base del sistema hasta que se integren los tokens tipográficos desde Figma).*

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
- `disabled`: Fondo neutral-200, texto neutral-400. Inactivo.

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
- `disabled`: Fondo neutral-100, texto neutral-400.

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

*Si no está en DESIGN.md, no existe en el diseño.*