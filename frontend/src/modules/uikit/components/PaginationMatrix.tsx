"use client";

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/Pagination";
import { Badge } from "@/components/ui/Badge";

export function PaginationMatrix() {
  return (
    <div className="space-y-32 mt-16 pb-32 max-w-6xl">
      {/* Header */}
      <div className="px-8 space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-indigo-600 text-white uppercase tracking-widest text-[10px]">Navigation Controls</Badge>
          <span className="text-sm font-medium text-neutral-400 dark:text-neutral-500 italic">node-2130-13282</span>
        </div>
        <h2 className="text-5xl font-black tracking-tighter text-neutral-900 uppercase">Pagination Architecture</h2>
        <p className="text-neutral-500 max-w-2xl text-lg">
          Sistema de navegación por páginas con estados circulares de alta precisión y controles direccionales.
        </p>
      </div>

      <div className="space-y-24 px-8">
        {/* Section: Pagination States */}
        <div className="space-y-12">
          <div className="flex items-center gap-3 border-l-4 border-black dark:border-white pl-4">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">Estados de Flujo</h4>
          </div>

          <div className="space-y-16 bg-neutral-50 dark:bg-neutral-100/50 p-12 rounded-[48px] border border-neutral-100 dark:border-neutral-800">
            {/* Start State */}
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest pb-2 block border-b w-full">Estado: Inicio (Página 1 seleccionada)</span>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" disabled />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">20</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            {/* Middle State */}
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest pb-2 block border-b w-full">Estado: Intermedio (Página 10 seleccionada)</span>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">9</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>10</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">11</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">20</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            {/* End State */}
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest pb-2 block border-b w-full">Estado: Final (Página 20 seleccionada)</span>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">17</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">18</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">19</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>20</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" disabled />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>

        {/* Section: Atomic Audit */}
        <div className="space-y-12">
          <div className="flex items-center gap-3 border-l-4 border-black dark:border-white pl-4">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">Auditoría de Átomos</h4>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-8 rounded-[32px] border border-neutral-100 dark:border-neutral-800 space-y-6 flex flex-col items-center">
              <Badge variant="outline" className="bg-white text-neutral-900 text-[10px]">Button Hover</Badge>
              <PaginationLink href="#" className="bg-[#e6dff5]">5</PaginationLink>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-8 rounded-[32px] border border-neutral-100 dark:border-neutral-800 space-y-6 flex flex-col items-center">
              <Badge variant="outline" className="bg-white text-neutral-900 text-[10px]">Button Selected</Badge>
              <PaginationLink href="#" isActive>10</PaginationLink>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-8 rounded-[32px] border border-neutral-100 dark:border-neutral-800 space-y-6 flex flex-col items-center">
              <Badge variant="outline" className="bg-white text-neutral-900 text-[10px]">Nav Disabled</Badge>
              <PaginationPrevious disabled href="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






