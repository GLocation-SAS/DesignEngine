"use client";

import React from "react";
import { Input } from "@/components/ui/Input";
import { Search, X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const SIZES = [
  { key: "L", label: "Large (65px)", sizeVariant: "lg" as const },
  { key: "M", label: "Medium (54px)", sizeVariant: "md" as const },
  { key: "S", label: "Small (44px)", sizeVariant: "sm" as const },
  { key: "XS", label: "Extra Small (40px)", sizeVariant: "xs" as const },
] as const;

const STATES = [
  { key: "Default", label: "Default", props: {} },
  { key: "Hover", label: "Hover", props: { state: "Hover" } },
  { key: "Focused", label: "Focused", props: { state: "Focused", defaultValue: "Valor de búsqueda|" } },
  { key: "Filled", label: "Filled", props: { defaultValue: "Valor de búsqueda" } },
  { key: "Disabled", label: "Disabled", props: { disabled: true } },
  { key: "Error", label: "Error", props: { error: "This is an error message", defaultValue: "Búsqueda errónea" } },
  { key: "Success", label: "Success", props: { success: true, defaultValue: "Búsqueda exitosa" } },
] as const;

export function SearchInputMatrix() {
  const getRightIcon = (stateKey: string) => {
    // Figma design shows X + separator + Search icon when filled/focused
    const showClearBtn = ["Focused", "Filled", "Error", "Success"].includes(stateKey);

    const handleClear = (e: React.MouseEvent) => {
      // Find the closest input and clear its value
      const container = e.currentTarget.closest('.relative');
      const input = container?.querySelector('input');
      if (input) {
        input.value = '';
        input.focus();
      }
    };

    return (
      <div className="flex items-center gap-2">
        {showClearBtn && (
          <>
            <X
              className="w-5 h-5 cursor-pointer hover:text-primary-700 transition-colors"
              onClick={handleClear}
            />
            <div className="w-[1px] h-4 bg-neutral-300 dark:bg-neutral-700" />
          </>
        )}
        <Search className="w-5 h-5" />
      </div>
    );
  };

  return (
    <div className="space-y-24 mt-16 pb-16 max-w-7xl">
      {/* Header */}
      <div className="px-8 space-y-4">
        <div className="flex items-center gap-3">
          <Badge className="bg-primary-300 text-primary-500 border-none font-black px-3 py-1 rounded-full uppercase tracking-widest text-[10px]">Form System</Badge>
        </div>
        <h2 className="text-4xl font-black tracking-tighter text-neutral-900 uppercase">Buscador</h2>
        <p className="text-neutral-900 max-w-2xl text-lg">
          Componente de búsqueda especializado con acciones compuestas (limpiar selección) y estados dinámicos.
        </p>
      </div>

      <div className="space-y-24 px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="flex items-center gap-3 border-l-4 border-black dark:border-white pl-4">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-neutral-600">Variantes y Estados</h4>
          </div>

          {/* Table Container */}
          <div className="w-fit bg-neutral-100/50 p-8 rounded-[48px] border border-neutral-200">
            <table className="w-full border-separate border-spacing-x-8 border-spacing-y-12">
              <thead>
                <tr>
                  <th className="text-left py-4 px-2"></th>
                  {SIZES.map((s) => (
                    <th key={s.key} className="text-center text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 py-4 px-2 whitespace-nowrap">
                      {s.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {STATES.map((state) => (
                  <tr key={state.key}>
                    <td className="text-left text-xs font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-widest pr-8 border-b border-neutral-200/50 dark:border-neutral-800 pb-2 align-middle">
                      {state.label}
                    </td>
                    {SIZES.map((size) => (
                      <td key={`${state.key}-${size.key}`} className="text-center py-2 min-w-[250px]">
                        <Input
                          label="Búsqueda"
                          placeholder="Buscar elementos..."
                          notes="Ingresa un término de búsqueda"
                          sizeVariant={size.sizeVariant}
                          iconRight={getRightIcon(state.key)}
                          {...state.props}
                          {...(state.key === "Disabled" && { placeholder: "Búsqueda deshabilitada" })}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}






