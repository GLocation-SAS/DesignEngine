"use client";

import React from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Badge } from "@/components/ui/Badge";

export function ThemeToggleMatrix() {
  return (
    <div className="space-y-16 mt-16 pb-16 max-w-6xl">
      {/* Header */}
      <div className="px-8 space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-primary-600 text-white uppercase tracking-widest text-[10px]">Theme System</Badge>
        </div>
        <h2 className="text-4xl font-black tracking-tighter text-neutral-900 uppercase">Theme Toggle</h2>
        <p className="text-neutral-500 max-w-2xl text-lg">
          Componente de cápsula interactiva para el cambio de tema (Light/Dark mode) con indicador deslizante y micro-animaciones.
        </p>
      </div>

      <div className="px-8">
        <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-800">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                 <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block border-b border-neutral-200 pb-2">
                    Preview
                 </span>
                 <div className="flex justify-center p-8 bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-100 shadow-sm">
                    <ThemeToggle className="max-w-[200px]" />
                 </div>
              </div>
              
              <div className="space-y-4">
                 <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block border-b border-neutral-200 pb-2">
                    Usage
                 </span>
                 <div className="space-y-2">
                    <p className="text-sm text-neutral-500">
                       • <strong>Diseño de Cápsula:</strong> Proporciona un área táctil amplia y clara.
                    </p>
                    <p className="text-sm text-neutral-500">
                       • <strong>Feedback Visual:</strong> Indicador deslizante con sombra sutil.
                    </p>
                    <p className="text-sm text-neutral-500">
                       • <strong>Responsivo:</strong> Se adapta al contenedor padre con soporte para estados colapsados.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
