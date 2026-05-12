"use client";

import React from "react";
import { Input } from "@/components/ui/Input";
import { User, Mail } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const SIZES = [
  { key: "lg", label: "Large (56px)" },
  { key: "md", label: "Medium (44px)" },
  { key: "sm", label: "Small (40px)" },
  { key: "xs", label: "Extra Small (36px)" },
] as const;

const STATES = [
  { key: "Default", label: "Default", props: {} },
  { key: "Hover", label: "Hover", props: { state: "Hover" } },
  { key: "Focused", label: "Focused", props: { state: "Focused", defaultValue: "|" } },
  { key: "Filled", label: "Filled", props: { defaultValue: "Value text" } },
  { key: "Disabled", label: "Disabled", props: { disabled: true } },
  { key: "Error", label: "Error", props: { error: "This is an error message" } },
  { key: "Success", label: "Success", props: { success: true } },
] as const;

export function TextInputMatrix() {
  return (
    <div className="space-y-24 mt-16 pb-16 max-w-6xl">
      {/* Header */}
      <div className="px-8 space-y-4">
        <div className="flex items-center gap-3">
          <Badge className="bg-primary-300 text-primary-500 border-none font-black px-3 py-1 rounded-full uppercase tracking-widest text-[10px]">Form System</Badge>
        </div>
        <h2 className="text-4xl font-black tracking-tighter text-neutral-900 uppercase">Campos de texto</h2>
        <p className="text-neutral-900 max-w-2xl text-lg">
          Campos de entrada de texto fundamentales con soporte para múltiples tamaños, estados interactivos y composiciones con iconos.
        </p>
      </div>

      <div className="space-y-24 px-8">
        {SIZES.map((size) => (
          <div key={size.key} className="space-y-12">
            {/* Size Section Header */}
            <div className="flex items-center gap-3 border-l-4 border-black dark:border-white pl-4">
              <h4 className="text-sm font-black uppercase tracking-[0.3em] text-neutral-600">{size.label}</h4>
            </div>

            {/* Table Container */}
            <div className="w-fit bg-neutral-100/50 p-8 rounded-[48px] border border-neutral-200">
              <table className="w-full border-separate border-spacing-x-8 border-spacing-y-12">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-2"></th>
                    <th className="text-center text-[10px] font-bold uppercase tracking-widest text-neutral-600">Icon Left</th>
                    <th className="text-center text-[10px] font-bold uppercase tracking-widest text-neutral-600">No Icons</th>
                    <th className="text-center text-[10px] font-bold uppercase tracking-widest text-neutral-600">Icon Right</th>
                    <th className="text-center text-[10px] font-bold uppercase tracking-widest text-neutral-600">Both Icons</th>
                  </tr>
                </thead>
                <tbody>
                  {STATES.map((state) => (
                    <tr key={state.key}>
                      <td className="text-left text-xs font-black text-neutral-600 uppercase tracking-widest pr-8 border-b border-neutral-200/50 dark:border-neutral-800 pb-2 align-middle">
                        {state.label}
                      </td>
                      <td className="py-2">
                        <Input
                          label="Etiqueta*"
                          placeholder="Ejemplo"
                          sizeVariant={size.key}
                          iconLeft={<User className="w-5 h-5" />}
                          {...state.props}
                        />
                      </td>
                      <td className="py-2">
                        <Input
                          label="Etiqueta*"
                          placeholder="Solo texto"
                          sizeVariant={size.key}
                          {...state.props}
                        />
                      </td>
                      <td className="py-2">
                        <Input
                          label="Etiqueta*"
                          placeholder="Ejemplo"
                          sizeVariant={size.key}
                          iconRight={<Mail className="w-5 h-5" />}
                          {...state.props}
                        />
                      </td>
                      <td className="py-2">
                        <Input
                          label="Etiqueta*"
                          placeholder="Ejemplo completo"
                          sizeVariant={size.key}
                          iconLeft={<User className="w-5 h-5" />}
                          iconRight={<Mail className="w-5 h-5" />}
                          {...state.props}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}






