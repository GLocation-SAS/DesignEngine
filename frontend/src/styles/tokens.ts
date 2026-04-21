/**
 * Design System Tokens
 * Centralized design tokens for consistent theming across the application.
 */

export const colors = {
  primary: {
    main: "#5c7cfa",
    light: "#748ffc",
    dark: "#4263eb",
    contrast: "#ffffff",
  },
  accent: {
    main: "#e64980",
    light: "#f06595",
    dark: "#c2255c",
    contrast: "#ffffff",
  },
  surface: {
    light: "#f8f9fc",
    main: "#ffffff",
    dark: "#0d1117",
    darkAlt: "#1a2038",
  },
  text: {
    primary: "#1a2038",
    secondary: "#5c6b8a",
    muted: "#a3adc4",
    inverse: "#f1f3f9",
  },
  status: {
    success: "#51cf66",
    warning: "#fcc419",
    danger: "#fa5252",
    info: "#5c7cfa",
  },
} as const;

export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
} as const;

export const borderRadius = {
  sm: "0.375rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.5rem",
  full: "9999px",
} as const;

export const transitions = {
  fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
  normal: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
  slow: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
} as const;
