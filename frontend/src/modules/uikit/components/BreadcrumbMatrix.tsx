"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { ChevronRight, Slash } from "lucide-react";

export function BreadcrumbMatrix() {
  return (
    <div className="space-y-24 mt-16 pb-16 max-w-6xl">
      {/* Header */}
      <div className="px-8 space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-amber-600 text-white uppercase tracking-widest text-[10px]">Navigation Atoms</Badge>
        </div>
        <h2 className="text-4xl font-black tracking-tighter text-neutral-900 uppercase">Breadcrumb</h2>
        <p className="text-neutral-900 max-w-2xl text-lg">
          Sistema de navegación jerárquica con soporte para iconos, divisores personalizables y estados de página actual.
        </p>
      </div>

      <div className="space-y-24 px-8">
        {/* Section: Atomic Composition */}
        <div className="space-y-12">
          <div className="flex items-center gap-3 border-l-4 border-black dark:border-white pl-4">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">Variantes de Progresión</h4>
          </div>

          <div className="space-y-8 max-w-7xl p-12 rounded-[48px] border border-neutral-100 dark:border-neutral-800">
            {/* Level 1 */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest pb-2 block">1 Nivel (Inicio)</span>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage showHome>Página actual</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Level 2 */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest pb-2 block">2 Niveles</span>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#" showHome>Sección anterior</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Página actual</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Level 3 */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest pb-2 block">3 Niveles</span>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#" showHome>Sección anterior</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Sección anterior</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Página actual</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Level 5 (High Depth) */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest pb-2 block">Alta Profundidad (5 Niveles)</span>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#" showHome>Inicio</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Sección A</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Sección B</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Sección C</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Página actual de prueba larga</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>

        {/* Section: Separators */}
        <div className="space-y-12">
          <div className="flex items-center gap-3 border-l-4 border-black dark:border-white pl-4">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">Estilos de Divisor (Dividers)</h4>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="max-w-7xl p-8 rounded-[32px] border border-neutral-100 dark:border-neutral-800 space-y-4">
              <Badge variant="outline" className="bg-white text-neutral-900 text-[10px]">Standard Chevron</Badge>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem><BreadcrumbLink href="#">Nivel</BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem><BreadcrumbPage>Actual</BreadcrumbPage></BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="max-w-7xl p-8 rounded-[32px] border border-neutral-100 dark:border-neutral-800 space-y-4">
              <Badge variant="outline" className="bg-white text-neutral-900 text-[10px]">Slash Style</Badge>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem><BreadcrumbLink href="#">Nivel</BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator><Slash className="w-3 h-3 rotate-12" /></BreadcrumbSeparator>
                  <BreadcrumbItem><BreadcrumbPage>Actual</BreadcrumbPage></BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






