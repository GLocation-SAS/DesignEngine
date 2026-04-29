"use client";

import React from "react";
import { RadioButton } from "@/components/ui/RadioButton";
import { Badge } from "@/components/ui/Badge";

const SIZES = [
  { key: "L", label: "Large (32px)" },
  { key: "M", label: "Medium (24px)" },
  { key: "S", label: "Small (20px)" },
] as const;

const COMPOSITIONS = [
  { id: "full", label: "Completo (Label + Hint)", props: { label: "Opción Principal", hint: "Recomendado para la mayoría" } },
  { id: "label", label: "Solo Label", props: { label: "Opción Secundaria" } },
  { id: "hint", label: "Solo Hint", props: { hint: "Información adicional" } },
  { id: "minimal", label: "Solo Circle", props: {} },
] as const;

const STATES = [
  { key: "default", label: "Default", props: {} },
  { key: "selected", label: "Selected", props: { checked: true } },
  { key: "error", label: "Error", props: { error: true, checked: true } },
  { key: "disabled", label: "Disabled", props: { disabled: true, checked: true } },
] as const;

export function RadioButtonMatrix() {
  return (
    <div className="space-y-24 mt-16 pb-16 max-w-7xl">
      {/* Header */}
      <div className="px-8 space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-black text-white uppercase tracking-widest text-[10px]">Form Controls</Badge>
        </div>
        <h2 className="text-4xl font-black tracking-tighter text-primary-500 dark:text-primary-700 uppercase">RadioButton</h2>
        <p className="text-neutral-500 max-w-2xl text-lg">
          Sistema de selección única con organización vertical por tamaño y auditoría de composiciones flexibles.
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
                <div className={`${combo.id === 'full' ? 'w-full' : 'overflow-x-auto'} bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-800`}>
                  <div className={combo.id === 'full' ? 'grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 items-start' : 'flex gap-20 min-w-max items-start'}>
                    {STATES.map((state) => (
                      <div key={`${size.key}-${combo.id}-${state.key}`} className={`space-y-6 ${combo.id === 'full' ? 'w-full' : 'w-[200px]'}`}>
                        <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block border-b border-neutral-200 dark:border-neutral-800 pb-2 text-center">
                          {state.label}
                        </span>
                        <div className="flex justify-center">
                          <RadioButton
                            sizeVariant={size.key}
                            {...combo.props}
                            {...state.props}
                          />
                        </div>
                      </div>
                    ))}

                    {/* Aligned Right variation */}
                    {combo.id === "full" && (
                      <div className={`space-y-6 ${combo.id === 'full' ? 'w-full md:col-span-2 mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800' : 'w-[220px] ml-12 border-l border-neutral-200 dark:border-neutral-800 pl-12'}`}>
                        <span className="text-[10px] font-bold text-primary-500 uppercase tracking-widest block border-b border-primary-200 pb-2 text-center">
                          Aligned Right
                        </span>
                        <div className="flex justify-center">
                          <RadioButton
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






