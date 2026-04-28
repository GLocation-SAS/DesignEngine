"use client";

import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/Badge";

const VARIANTS = [
  {
    key: "default",
    label: "Default",
    token: "primary-500",
    description: "Para indicadores principales."
  },
  {
    key: "secondary",
    label: "Secondary",
    token: "secondary-500",
    description: "Información de apoyo."
  },
  {
    key: "success",
    label: "Success",
    token: "success-500",
    description: "Estados positivos."
  },
  {
    key: "error",
    label: "Error",
    token: "error-500",
    description: "Alertas y errores."
  },
  {
    key: "warning",
    label: "Warning",
    token: "warning-500",
    description: "Advertencias."
  },
  {
    key: "info",
    label: "Info",
    token: "info-500",
    description: "Información neutral."
  },
  {
    key: "outline",
    label: "Outline",
    token: "neutral-300",
    description: "Categorías sutiles."
  },
] as const;

function resolveColor(token: string): string {
  if (typeof window === "undefined") return "";
  const style = getComputedStyle(document.documentElement);
  return style.getPropertyValue(`--color-${token}`).trim().toUpperCase();
}

export function BadgeMatrix() {
  const [colors, setColors] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateColors = () => {
      const newColors: Record<string, string> = {};
      VARIANTS.forEach(v => {
        newColors[v.token] = resolveColor(v.token);
      });
      setColors(newColors);
    };

    updateColors();
    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-16 mt-16 px-8 max-w-7xl">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-black text-white dark:bg-white dark:text-black uppercase tracking-widest text-[10px]">Indicators</Badge>
        </div>
        <h2 className="text-4xl font-black tracking-tighter text-primary-500 dark:text-primary-700 uppercase">Badges</h2>
        <p className="text-neutral-900 max-w-2xl text-lg">
          Sistema de indicadores visuales integrados con el sistema de color semántico para estados y categorías.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {VARIANTS.map((variant) => (
          <div
            key={variant.key}
            className="group relative bg-neutral-100 p-8 rounded-[32px] border border-neutral-200 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1"
          >
            <div className="flex flex-col h-full space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h4 className="text-sm font-black uppercase tracking-widest text-neutral-900">
                    {variant.label}
                  </h4>
                  <p className="text-[11px] text-neutral-600 leading-relaxed">
                    {variant.description}
                  </p>
                </div>
                <Badge variant={variant.key as any}>Status</Badge>
              </div>

              <div className="pt-6 border-t border-neutral-50 dark:border-neutral-800 mt-auto space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-600">Token</span>
                  <code className="text-[10px] font-mono text-primary-500">
                    --color-{variant.token}
                  </code>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-600">Hex</span>
                  <code className="text-[10px] font-mono text-neutral-500">
                    {colors[variant.token] || "Resolving..."}
                  </code>
                </div>
              </div>

              <div className="flex gap-2 items-center pt-2">
                <Badge variant={variant.key as any}>99+</Badge>
                <Badge variant={variant.key as any}>Label</Badge>
                <Badge variant={variant.key as any} className="px-1.5 h-5 flex items-center justify-center min-w-[20px]">1</Badge>
              </div>
            </div>
          </div>
        ))}

        {/* Card for full color range */}
        <div className="group relative bg-neutral-100 p-8 rounded-[32px] border border-neutral-200 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1 md:col-span-2 lg:col-span-3">
          <div className="flex flex-col space-y-8">
            <div className="space-y-1">
              <h4 className="text-sm font-black uppercase tracking-widest text-neutral-900">
                Rango completo de colores
              </h4>
              <p className="text-[11px] text-neutral-800 leading-relaxed max-w-xl">
                Se pueden crear variaciones personalizadas utilizando las escalas de color del sistema (50-900).
                Esto permite mayor flexibilidad para jerarquías visuales específicas tanto en fondos como en contornos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Background Variations */}
              <div className="space-y-4">
                <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-600">Variaciones de fondo</div>
                <div className="flex flex-wrap gap-2">
                  {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                    <Badge
                      key={shade}
                      variant="outline"
                      style={{ backgroundColor: `var(--color-primary-${shade})` }}
                      className={`border-none ${shade > 400 ? 'text-white' : 'text-primary-900'}`}
                    >
                      {shade}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Outline Variations */}
              <div className="space-y-4">
                <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-600">Variaciones de outline</div>
                <div className="flex flex-wrap gap-2">
                  {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                    <Badge
                      key={shade}
                      variant="outline"
                      style={{
                        borderColor: `var(--color-secondary-${shade})`,
                        color: `var(--color-secondary-${shade})`,
                        backgroundColor: 'transparent'
                      }}
                    >
                      {shade}
                    </Badge>
                  ))}
                </div>
              </div>

            </div>

            <div className="pt-6 border-t border-neutral-200/50 space-y-4">
              <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-600">Ejemplo de implementación</div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <code className="block text-[10px] font-mono text-primary-800 bg-neutral-300 p-4 rounded-xl border border-neutral-200 overflow-x-auto">
                  <div className="mb-2 text-neutral-600 italic">// Background</div>
                  {`<Badge variant="outline" className="bg-primary-500 text-white border-none">500</Badge>`}
                </code>
                <code className="block text-[10px] font-mono text-primary-800 bg-neutral-300 p-4 rounded-xl border border-neutral-200 overflow-x-auto">
                  <div className="mb-2 text-neutral-600 italic">// Outline</div>
                  {`<Badge variant="outline" className="border-primary-500 text-primary-500 bg-transparent">500</Badge>`}
                </code>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
