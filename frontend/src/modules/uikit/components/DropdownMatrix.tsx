"use client";

import React from "react";
import { Dropdown } from "@/components/ui/Dropdown";
import { Badge } from "@/components/ui/Badge";
import { Globe, Mail, User } from "lucide-react";

const SIZES = [
  { key: "L", label: "Large (65px)" },
  { key: "M", label: "Medium (54px)" },
  { key: "S", label: "Small (44px)" },
  { key: "XS", label: "Extra Small (40px)" },
] as const;

const COMBINATIONS = [
  { id: "full-icon", label: "Icon + Label + Note", props: { iconLeft: <Globe className="w-5 h-5" />, label: "Ubicación", notes: "Selecciona una región" } },
  { id: "icon-label", label: "Icon + Label", props: { iconLeft: <User className="w-5 h-5" />, label: "Usuario" } },
  { id: "icon-note", label: "Icon + Note", props: { iconLeft: <Mail className="w-5 h-5" />, notes: "Solo notas" } },
  { id: "simple-full", label: "Simple (Label + Note)", props: { label: "Etiqueta", notes: "Notas de ayuda" } },
  { id: "minimal", label: "Solo Selector", props: { placeholder: "Seleccionar..." } },
] as const;

const STATES = [
  { key: "Default", label: "Default", props: { currentState: "Default" } },
  { key: "Hover", label: "Hover", props: { currentState: "Hover" } },
  { key: "Active", label: "Active (Open)", props: { currentState: "Active" } },
  { key: "Error", label: "Error", props: { currentState: "Error Filled", value: "1" } },
  { key: "Success", label: "Success", props: { currentState: "Success", value: "1" } },
  { key: "Disabled", label: "Disabled", props: { currentState: "Disabled" } },
] as const;

export function DropdownMatrix() {
  return (
    <div className="space-y-24 mt-16 pb-16 max-w-7xl">
      {/* Header */}
      <div className="px-8 space-y-4">
        <div className="flex items-center gap-3">
          <Badge className="bg-primary-300 text-primary-500 border-none font-black px-3 py-1 rounded-full uppercase tracking-widest text-[10px]">Form System</Badge>
        </div>
        <h2 className="text-4xl font-black tracking-tighter text-primary-500 dark:text-primary-700 uppercase">Dropdown Master</h2>
        <p className="text-neutral-900 max-w-2xl text-lg">
          Sistema de selección desplegable con soporte para múltiples jerarquías de información y estados dinámicos.
        </p>
      </div>

      <div className="space-y-24 px-8">
        {SIZES.map((size) => (
          <div key={size.key} className="space-y-12">
            {/* Size Section Header */}
            <div className="sticky top-20 z-50 bg-neutral-100/50 backdrop-blur-md py-6 px-8 border-b border-neutral-100 flex items-center justify-between shadow-sm rounded-t-3xl w-full md:w-50/100">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-semibold text-primary-500 dark:text-primary-600 tracking-tighter">{size.label}</span>
                <Badge className="bg-primary-300 text-primary-500 border-none font-black px-4 py-1 rounded-full text-xs uppercase tracking-widest">Size: {size.key}</Badge>
              </div>
            </div>

            <div className="space-y-24">
              {COMBINATIONS.map((combo) => (
                <div key={`${size.key}-${combo.id}`} className="space-y-8">
                  {/* Combination Title */}
                  <div className="flex items-center gap-3 border-l-4 border-black dark:white pl-4">
                    <h4 className="text-sm font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">{combo.label}</h4>
                  </div>

                  {/* Horizontal States container */}
                  <div className="w-full bg-neutral-100 p-6 md:p-10 rounded-[48px] border border-neutral-100 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
                      {STATES.map((state) => (
                        <div key={`${size.key}-${combo.id}-${state.key}`} className="space-y-6 w-full max-w-[320px] mx-auto">
                          <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block border-b border-neutral-200 dark:border-neutral-800 pb-2 text-center">
                            {state.label}
                          </span>
                          <div className={state.key === "Active" ? "h-[360px] relative z-50" : "relative"}>
                            <Dropdown
                              sizeVariant={size.key}
                              {...combo.props}
                              {...state.props}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}






