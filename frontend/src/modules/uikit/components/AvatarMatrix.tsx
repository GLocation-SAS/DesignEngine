"use client";

import React from "react";
import { Avatar } from "@/components/ui";

export function AvatarMatrix() {
  return (
    <div id="avatars" className="scroll-mt-24 space-y-8 px-8 max-w-7xl">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-primary-500">Avatars</h3>
        <p className="text-neutral-500">
          Componente para representar usuarios mediante imágenes o iniciales como fallback.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Tamaños */}
        <div className="space-y-6">
          <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Tamaños (Sizes)</h4>
          <div className="flex items-end gap-6 p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-200/50 border border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-col items-center gap-2">
              <Avatar name="Small Avatar" size="sm" />
              <span className="text-[10px] text-neutral-400 font-medium">SM (32px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar name="Medium Avatar" size="md" />
              <span className="text-[10px] text-neutral-400 font-medium">MD (40px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar name="Large Avatar" size="lg" />
              <span className="text-[10px] text-neutral-400 font-medium">LG (48px)</span>
            </div>
          </div>
        </div>

        {/* Fallbacks */}
        <div className="space-y-6">
          <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Fallbacks (Iniciales)</h4>
          <div className="flex items-center gap-6 p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-200/50 border border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-col items-center gap-2">
              <Avatar name="Juan Pérez" size="md" />
              <span className="text-[10px] text-neutral-400 font-medium">Dos palabras</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar name="Antigravity" size="md" />
              <span className="text-[10px] text-neutral-400 font-medium">Una palabra</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar name="Design Engine System" size="md" />
              <span className="text-[10px] text-neutral-400 font-medium">Multi-palabra</span>
            </div>
          </div>
        </div>

        {/* Con Imagen */}
        <div className="space-y-6">
          <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Con Imagen (Image)</h4>
          <div className="flex items-center gap-6 p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-200/50 border border-neutral-200 dark:border-neutral-800">
            <Avatar 
              name="User Image" 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80" 
              size="lg" 
            />
            <div className="space-y-1">
              <p className="text-sm font-medium text-neutral-900">Usuario con foto</p>
              <p className="text-xs text-neutral-500">Muestra la imagen original recortada a círculo.</p>
            </div>
          </div>
        </div>

        {/* Composición */}
        <div className="space-y-6">
          <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Interacción</h4>
          <div className="flex items-center gap-6 p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-200/50 border border-neutral-200 dark:border-neutral-800">
             <div className="group cursor-pointer">
                <Avatar name="Hover Effect" size="lg" />
             </div>
             <div className="space-y-1">
              <p className="text-sm font-medium text-neutral-900">Micro-interacción</p>
              <p className="text-xs text-neutral-500">Hover y active states integrados.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
