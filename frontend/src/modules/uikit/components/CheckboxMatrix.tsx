"use client";

import React from "react";
import { Checkbox } from "@/components/ui/Checkbox";
import { Badge } from "@/components/ui/Badge";

const SIZES = [
  { key: "L", label: "Large (32px)" },
  { key: "M", label: "Medium (24px)" },
  { key: "S", label: "Small (16px)" },
] as const;

const COMPOSITIONS = [
  { id: "full", label: "Completo (Label + Hint)", props: { label: "Aceptar términos", hint: "Debes leer el contrato" } },
  { id: "label", label: "Solo Label", props: { label: "Suscribirse al newsletter" } },
  { id: "hint", label: "Solo Hint", props: { hint: "Selección opcional" } },
  { id: "minimal", label: "Solo Box", props: {} },
] as const;

const STATES = [
  { key: "default", label: "Default" },
  { key: "selected", label: "Selected", props: { checked: true } },
  { key: "error", label: "Error", props: { error: true, checked: true } },
  { key: "disabled", label: "Disabled", props: { disabled: true, checked: true } },
] as const;

export function CheckboxMatrix() {
  return (
    <div className="space-y-32 mt-16 pb-32 max-w-6xl">
      {/* Header */}
      <div className="px-8 space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-primary-600 text-white uppercase tracking-widest text-[10px]">Form Controls</Badge>
          <span className="text-sm font-medium text-neutral-400 dark:text-neutral-500 italic">node-2130-12731</span>
        </div>
        <h2 className="text-5xl font-black tracking-tighter text-neutral-900 uppercase">Checkbox Architecture</h2>
        <p className="text-neutral-500 max-w-2xl text-lg">
          Organización vertical por tamaño, detallando todas las combinaciones de composición y estados.
        </p>
      </div>

      {SIZES.map((size) => (
        <div key={size.key} className="space-y-16">
          {/* Size Section Header */}
          <div className="sticky top-20 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl py-6 px-8 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-4">
               <span className="text-4xl font-black text-neutral-900 uppercase tracking-tighter">{size.label}</span>
               <Badge variant="outline" className="bg-primary-50 text-primary-600 border-none font-bold">Size: {size.key}</Badge>
            </div>
          </div>

          <div className="space-y-24 px-8">
            {COMPOSITIONS.map((combo) => (
              <div key={`${size.key}-${combo.id}`} className="space-y-8">
                {/* Combination Label */}
                <div className="flex items-center gap-3 border-l-4 border-black dark:border-white pl-4">
                  <h4 className="text-sm font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">{combo.label}</h4>
                </div>

                {/* States for this specific combination */}
                <div className="overflow-x-auto bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-800">
                  <div className="flex gap-20 min-w-max items-start">
                    {STATES.map((state) => (
                      <div key={`${size.key}-${combo.id}-${state.key}`} className="space-y-6 w-[200px]">
                        <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block border-b border-neutral-200 dark:border-neutral-800 pb-2 text-center">
                          {state.label}
                        </span>
                        <div className="flex justify-center">
                          <Checkbox 
                            sizeVariant={size.key}
                            {...combo.props}
                            {...state.props}
                          />
                        </div>
                      </div>
                    ))}
                    
                    {/* Aligned Right variation for the full one */}
                    {combo.id === "full" && (
                      <div className="space-y-6 w-[220px] ml-12 border-l border-neutral-200 dark:border-neutral-800 pl-12">
                        <span className="text-[10px] font-bold text-primary-500 uppercase tracking-widest block border-b border-primary-200 pb-2 text-center">
                          Aligned Right
                        </span>
                        <div className="flex justify-center">
                          <Checkbox 
                            sizeVariant={size.key}
                            aligned="right"
                            {...combo.props}
                            checked
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}






