"use client";

import React from "react";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";
import { Plus, Hash } from "lucide-react";

const SIZES = [
  { key: "L", label: "Large (Py-12)" },
  { key: "M", label: "Medium (Py-8)" },
  { key: "S", label: "Small (Py-8)" },
] as const;

const VARIANTS = [
  { key: "informative", label: "Informative" },
  { key: "default", label: "Default" },
  { key: "hover", label: "Hover" },
  { key: "success", label: "Success" },
  { key: "pause", label: "Pause" },
  { key: "error", label: "Error" },
  { key: "button", label: "Button" },
] as const;

export function TagMatrix() {
  return (
    <div className="space-y-32 mt-16 pb-32 max-w-6xl">
      {/* Header */}
      <div className="px-8 space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-black text-white dark:bg-white dark:text-black uppercase tracking-widest text-[10px]">Pill System</Badge>
          <span className="text-sm font-medium text-neutral-400 dark:text-neutral-500 italic">node-2130-12645</span>
        </div>
        <h2 className="text-5xl font-black tracking-tighter text-neutral-900 uppercase">Tags & Badges</h2>
        <p className="text-neutral-500 max-w-2xl text-lg">
          Sistema de etiquetas interactivas con estados semánticos, soporte para iconos y gestión de eliminación.
        </p>
      </div>

      <div className="space-y-24 px-8">
        {SIZES.map((size) => (
          <div key={size.key} className="space-y-12">
            {/* Size Section Header */}
            <div className="flex items-center gap-3 border-l-4 border-black dark:border-white pl-4">
              <h4 className="text-sm font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">{size.label}</h4>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-800">
              <table className="w-full border-separate border-spacing-x-8 border-spacing-y-10">
                <thead>
                  <tr>
                    <th className="text-left w-32 pb-4"></th>
                    <th className="text-center text-[10px] font-black uppercase tracking-widest text-neutral-400 dark:text-neutral-500">Basic</th>
                    <th className="text-center text-[10px] font-black uppercase tracking-widest text-neutral-400 dark:text-neutral-500">Icon Left</th>
                    <th className="text-center text-[10px] font-black uppercase tracking-widest text-neutral-400 dark:text-neutral-500">With Remove</th>
                    <th className="text-center text-[10px] font-black uppercase tracking-widest text-neutral-400 dark:text-neutral-500">Full</th>
                  </tr>
                </thead>
                <tbody>
                  {VARIANTS.map((variant) => (
                    <tr key={`${size.key}-${variant.key}`}>
                      <td className="text-left text-xs font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-widest pr-8 border-b border-neutral-200/50 dark:border-neutral-800 pb-2 align-middle">
                        {variant.label}
                      </td>
                      <td className="text-center">
                        <Tag label="Label" variant={variant.key as any} size={size.key} />
                      </td>
                      <td className="text-center">
                        <Tag label="Label" variant={variant.key as any} size={size.key} iconLeft={<Hash size={14} />} />
                      </td>
                      <td className="text-center">
                        <Tag label="Label" variant={variant.key as any} size={size.key} onRemove={() => {}} />
                      </td>
                      <td className="text-center">
                        <Tag label="Label" variant={variant.key as any} size={size.key} iconLeft={<Plus size={14} />} onRemove={() => {}} />
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






