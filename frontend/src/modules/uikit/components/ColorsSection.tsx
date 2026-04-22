"use client";

import React from "react";
import { Card } from "@/components/ui/Card";

const colorScales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const colorPalettes = [
  { name: "Primary", key: "primary" },
  { name: "Secondary", key: "secondary" },
  { name: "Neutral", key: "neutral" },
  { name: "Success", key: "success" },
  { name: "Warning", key: "warning" },
  { name: "Error", key: "error" },
  { name: "Info", key: "info" },
];

export function ColorsSection() {
  const copyToClipboard = (token: string) => {
    navigator.clipboard.writeText(`var(--color-${token})`);
    // Ideally add a toast here
  };

  return (
    <section id="colors" className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Colors</h2>
        <p className="text-neutral-500 mt-2">
          The color system is based on CSS variables and supports both light and dark modes.
        </p>
      </div>

      <div className="space-y-12">
        {colorPalettes.map((palette) => (
          <div key={palette.key} className="space-y-4">
            <h3 className="text-xl font-semibold capitalize">{palette.name}</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
              {colorScales.map((scale) => {
                const token = `${palette.key}-${scale}`;
                return (
                  <div
                    key={token}
                    className="group cursor-pointer space-y-2"
                    onClick={() => copyToClipboard(token)}
                  >
                    <div
                      className="h-16 w-full rounded-md border border-neutral-200 transition-transform group-hover:scale-105"
                      style={{ backgroundColor: `var(--color-${token})` }}
                    />
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-neutral-900">{scale}</span>
                      <span className="text-[10px] text-neutral-400 group-hover:text-primary-500 transition-colors">
                        Click to copy
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
