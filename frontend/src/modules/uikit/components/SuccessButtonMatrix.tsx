"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const SIZES = [
  { key: "lg", label: "Large (56px)" },
  { key: "default", label: "Medium (44px)" },
  { key: "sm", label: "Small (40px)" },
  { key: "xs", label: "Extra Small (36px)" },
] as const;

const STATES = [
  { key: "default", label: "Default", props: {} },
  { key: "hover", label: "Hover", props: { state: "hover" } },
  { key: "active", label: "Pressed", props: { state: "active" } },
  { key: "disabled", label: "Disabled", props: { disabled: true } },
] as const;

export function SuccessButtonMatrix() {
  return (
    <div className="space-y-32 mt-16 pb-32 max-w-6xl">
      {/* Header */}
      <div className="px-8 space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-success-600 text-white uppercase tracking-widest text-[10px]">Button System</Badge>
          <span className="text-sm font-medium text-neutral-400 dark:text-neutral-500 italic">Success Variant</span>
        </div>
        <h2 className="text-5xl font-black tracking-tighter text-neutral-900 uppercase">Positive Action</h2>
        <p className="text-neutral-500 max-w-2xl text-lg">
          Variante para acciones exitosas, confirmaciones o flujos positivos.
        </p>
      </div>

      <div className="space-y-24 px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="flex items-center gap-3 border-l-4 border-success-600 pl-4">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">Variantes y Estados</h4>
          </div>

          {/* Table Container */}
          <div className="w-fit bg-white p-10 rounded-[48px] border border-neutral-100 shadow-sm">
            <table className="w-full border-separate border-spacing-x-8 border-spacing-y-12">
              <thead>
                <tr>
                  <th className="text-left py-4 px-2"></th>
                  {SIZES.map((s) => (
                    <th key={s.key} className="text-center text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 py-4 px-2">
                      {s.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {STATES.map((state) => (
                  <tr key={state.key}>
                    <td className="text-left text-xs font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-widest pr-8 border-b border-neutral-200/50 dark:border-neutral-800 pb-2">
                      {state.label}
                    </td>
                    {SIZES.map((size) => (
                      <td key={`${state.key}-${size.key}`} className="text-center py-2">
                        <Button
                          variant="success"
                          size={size.key}
                          {...state.props}
                        >
                          <ChevronLeft className={cn(size.key === 'sm' || size.key === 'xs' ? "w-4 h-4" : "w-6 h-6")} />
                          Label
                          <ShoppingBag className={cn(size.key === 'sm' || size.key === 'xs' ? "w-4 h-4" : "w-6 h-6")} />
                        </Button>
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






