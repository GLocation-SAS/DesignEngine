import { type ClassValue, clsx } from "clsx";

/**
 * Utility to merge class names conditionally.
 * Combines clsx for conditional classes.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format a date to a human-readable string.
 */
export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

/**
 * Delay execution for a given number of milliseconds.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generate a random ID string.
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}
