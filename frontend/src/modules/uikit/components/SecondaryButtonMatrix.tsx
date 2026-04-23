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
];

const STATES = [
  { key: "default", label: "Default", props: {} },
  { 
    key: "hover", 
    label: "Hover", 
    props: { 
      className: "!bg-[#254e66] !text-white !border-[#254e66] shadow-[inset_0px_0px_13.1px_0px_#bfdbfe]" 
    } 
  },
  { 
    key: "active", 
    label: "Pressed", 
    props: { 
      className: "!bg-[#1d3d51] !text-white !border-[#1d3d51]" 
    } 
  },
  { key: "disabled", label: "Disabled", props: { disabled: true } },
];

export function SecondaryButtonMatrix() {
  return (
    <div className="space-y-10 p-10 bg-white dark:bg-neutral-900 rounded-[40px] border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <Badge variant="surface" className="bg-secondary-50 text-secondary-600">Secondary Button</Badge>
          <h3 className="text-2xl font-black tracking-tight text-neutral-900 dark:text-white">Component Instance: node-2130-11431</h3>
        </div>
      </div>

      <div className="overflow-x-auto pb-4">
        <table className="w-full border-separate border-spacing-x-8 border-spacing-y-12">
          <thead>
            <tr>
              <th className="text-left py-4 px-2"></th>
              {SIZES.map((s) => (
                <th key={s.key} className="text-center text-xs font-bold uppercase tracking-widest text-neutral-400 py-4 px-2">
                  {s.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {STATES.map((state) => (
              <tr key={state.key}>
                <td className="text-left text-sm font-black text-neutral-500 pr-8">
                  {state.label}
                </td>
                {SIZES.map((size) => (
                  <td key={`${state.key}-${size.key}`} className="text-center py-2">
                    <Button
                      variant="secondary"
                      size={size.key as any}
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
  );
}
