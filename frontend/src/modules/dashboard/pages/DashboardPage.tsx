"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout";
import { useAuth } from "@/context/AuthContext";

export function DashboardPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { user } = useAuth();


  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <main className="flex-1 overflow-y-auto bg-surface-50 dark:bg-surface-950">
        <h1 className="text-2xl font-bold text-surface-900 dark:text-white">
          ¡Hola, Mundo!
        </h1>
      </main>
    </div>
  );
}
