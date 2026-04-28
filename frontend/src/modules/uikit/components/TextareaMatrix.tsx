import React from "react";
import { Textarea } from "@/components/ui/Textarea";
import { Badge } from "@/components/ui/Badge";

const STATES = [
  { key: "Default", label: "Default", props: {} },
  { key: "Hover", label: "Hover", props: { state: "Hover" } },
  { key: "Focused", label: "Focused", props: { state: "Focused", placeholder: "Escribiendo..." } },
  { key: "Filled", label: "Filled", props: { defaultValue: "Este es un texto ya ingresado en el campo de área de texto para demostrar cómo se ve el estado lleno." } },
  { key: "Disabled", label: "Disabled", props: { disabled: true, defaultValue: "Campo deshabilitado" } },
  { key: "Error", label: "Error", props: { error: "Este campo es obligatorio y tiene un error de validación." } },
  { key: "Success", label: "Success", props: { success: true, defaultValue: "Validación exitosa" } },
] as const;

export function TextareaMatrix() {
  return (
    <div className="space-y-24 mt-16 pb-16 max-w-6xl">
      {/* Header */}
      <div className="px-8 space-y-4">
        <div className="flex items-center gap-3">
          <Badge className="bg-primary-300 text-primary-500 border-none font-black px-3 py-1 rounded-full uppercase tracking-widest text-[10px]">Form System</Badge>
        </div>
        <h2 className="text-4xl font-black tracking-tighter text-primary-500 dark:text-primary-700 uppercase">Áreas de texto (Textarea)</h2>
        <p className="text-neutral-900 max-w-2xl text-lg">
          Componentes de entrada multilínea que mantienen la consistencia visual con el sistema de inputs, permitiendo capturar bloques de información más extensos.
        </p>
      </div>

      <div className="space-y-12 px-8">
        {/* Table Container */}
        <div className="w-full bg-neutral-100/50 p-8 rounded-[48px] border border-neutral-200">
          <table className="w-full border-separate border-spacing-x-8 border-spacing-y-12">
            <thead>
              <tr>
                <th className="text-left py-4 px-2 w-1/4">Estado</th>
                <th className="text-left text-[10px] font-bold uppercase tracking-widest text-neutral-600">Visualización</th>
              </tr>
            </thead>
            <tbody>
              {STATES.map((state) => (
                <tr key={state.key}>
                  <td className="text-left text-xs font-black text-neutral-600 uppercase tracking-widest pr-8 border-b border-neutral-200/50 dark:border-neutral-800 pb-2 align-top pt-4">
                    {state.label}
                  </td>
                  <td className="py-2">
                    <Textarea
                      label="Descripción del proyecto*"
                      placeholder="Ingrese una descripción detallada..."
                      {...state.props}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
