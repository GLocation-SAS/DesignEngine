"use client";

import React, { useState } from "react";
import { Tabs, TabItem } from "@/components/ui/Tabs";
import { Badge } from "@/components/ui/Badge";

const TABS_EXAMPLE = [
  { id: "recent", label: "Recent" },
  { id: "pending", label: "Pending" },
  { id: "completed", label: "Completed" },
];

/**
 * TabsMatrix displays the different states and interactive usage of the Tabs component.
 */
export function TabsMatrix() {
  const [activeTab, setActiveTab] = useState("recent");

  return (
    <div className="space-y-24 mt-16 pb-16 max-w-7xl">
      {/* Header */}
      <div className="px-8 space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-indigo-600 text-white uppercase tracking-widest text-[10px]">Navigation</Badge>
        </div>
        <h2 className="text-4xl font-black tracking-tighter text-primary-500 dark:text-primary-700 uppercase">Tabs</h2>
        <p className="text-neutral-900 max-w-2xl text-lg">
          Sistema de navegación horizontal con estados de alta fidelidad, transiciones suaves y layout tipo pill.
        </p>
      </div>

      <div className="space-y-24 px-8">
        {/* Section: Interactive Example */}
        <div className="space-y-12">
          <div className="flex items-center gap-3 border-l-4 border-black dark:border-white pl-4">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">Ejemplo Interactivo</h4>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-12 rounded-[48px] border border-neutral-100 dark:border-neutral-800 flex flex-col items-center gap-8">
            <Tabs
              tabs={TABS_EXAMPLE}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />

            <div className="text-sm text-neutral-500 font-medium">
              Estado actual: <span className="text-primary-500 font-bold uppercase">{activeTab}</span>
            </div>
          </div>
        </div>

        {/* Section: Atomic States */}
        <div className="space-y-12">
          <div className="flex items-center gap-3 border-l-4 border-black dark:border-white pl-4">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">Auditoría de Estados</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-8 rounded-[32px] border border-neutral-100 dark:border-neutral-800 space-y-6 flex flex-col items-center">
              <Badge variant="outline" className="bg-white text-neutral-900 text-[10px]">Active</Badge>
              <TabItem label="Active Tab" isActive />
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-8 rounded-[32px] border border-neutral-100 dark:border-neutral-800 space-y-6 flex flex-col items-center">
              <Badge variant="outline" className="bg-white text-neutral-900 text-[10px]">Inactive</Badge>
              <TabItem label="Inactive Tab" />
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-8 rounded-[32px] border border-neutral-100 dark:border-neutral-800 space-y-6 flex flex-col items-center">
              <Badge variant="outline" className="bg-white text-neutral-900 text-[10px]">Hover</Badge>
              <TabItem label="Hover Tab" className="bg-semantic-background-neutral-hover text-semantic-text-neutral-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
