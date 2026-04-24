"use client";

import React, { useEffect, useRef, useState } from "react";

const colorScales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const colorPalettes = [
  { name: "Primary", key: "primary" },
  { name: "Secondary", key: "secondary" },
  { name: "Neutral", key: "neutral" },
  { name: "Success", key: "success" },
  { name: "Warning", key: "warning" },
  { name: "Error", key: "error" },
  { name: "Info", key: "info" },
];

function resolveColor(token: string): string {
  if (typeof window === "undefined") return "";
  const style = getComputedStyle(document.documentElement);
  const value = style.getPropertyValue(`--color-${token}`).trim();
  return value;
}

function ColorSwatch({ token, scale, paletteName }: { token: string; scale: number; paletteName: string }) {
  const [hex, setHex] = useState("");
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Resolve after mount so CSS vars are available
    const raw = resolveColor(token);
    setHex(raw.toUpperCase());
  }, [token]);

  const handleCopy = () => {
    const textToCopy = hex || `var(--color-${token})`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 1800);
    });
  };

  // Determine if text should be dark or light based on the scale
  const isLight = scale <= 200;

  return (
    <div className="group flex flex-col gap-2">
      {/* Swatch */}
      <div
        className="relative h-16 w-full rounded-xl transition-transform duration-150 group-hover:scale-105 overflow-hidden"
        style={{ backgroundColor: `var(--color-${token})` }}
      >
        {/* Copied overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${copied ? "opacity-100" : "opacity-0"
            }`}
          style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
        >
          <span className="text-white text-[10px] font-bold tracking-widest uppercase">✓ Copiado</span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-0.5 px-0.5">
        {/* Scale label */}
        <span className="text-[11px] font-bold text-neutral-700 leading-tight">
          {paletteName} {scale}
        </span>

        {/* Hex code — click to copy */}
        <button
          onClick={handleCopy}
          title="Click para copiar"
          className="text-left text-[10px] font-mono text-neutral-400 dark:text-neutral-900 hover:text-neutral-700 transition-colors duration-150 cursor-pointer truncate"
        >
          {hex || `--color-${token}`}
        </button>
      </div>
    </div>
  );
}

export function ColorsSection() {
  return (
    <section id="colors" className="space-y-16 mt-8 pb-8 max-w-7xl">
      {/* Header */}
      <div className="space-y-4">
        <h2 className="text-5xl font-black tracking-tighter text-primary-500 dark:text-primary-700 uppercase">
          Color System
        </h2>
        <p className="text-neutral-900 max-w-2xl text-lg">
          Paleta de colores basada en variables CSS con soporte para modo oscuro. Haz click en el código para copiarlo.
        </p>
      </div>

      <div className="space-y-16 ">
        {colorPalettes.map((palette) => (
          <div key={palette.key} className="space-y-6">
            {/* Palette header */}
            <div className="flex items-center gap-3 border-l-4 border-neutral-900 dark:border-white pl-4">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-900">
                {palette.name}
              </h3>
            </div>

            {/* Swatches container */}
            <div className="bg-neutral-100 p-8 rounded-[48px] border border-neutral-200">
              <div className="grid grid-cols-2 lg:grid-cols-10 gap-4">
                {colorScales.map((scale) => {
                  const token = `${palette.key}-${scale}`;
                  return (
                    <ColorSwatch
                      key={token}
                      token={token}
                      scale={scale}
                      paletteName={palette.name}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}





