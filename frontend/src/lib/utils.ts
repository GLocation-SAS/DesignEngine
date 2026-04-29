import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Rutas bajo /public con prefijo base (GitHub Pages, subpath). No altera URLs absolutas (http/https/data). */
export function publicUrl(path: string): string {
  if (/^(https?:|data:)/i.test(path)) {
    return path;
  }
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
