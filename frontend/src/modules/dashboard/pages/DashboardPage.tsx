"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";

const DashboardPage = () => {
  const { isCollapsed: sidebarCollapsed, toggleSidebar } = useSidebar();

  return (
    <div className="flex min-h-screen bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300 font-nunito">
      <div className="fixed left-0 top-0 bottom-0 z-30 hidden lg:block">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={toggleSidebar}
        />
      </div>

      <main
        className={cn(
          "flex-1 min-h-screen transition-all duration-300",
          sidebarCollapsed ? "lg:ml-[96px]" : "lg:ml-[264px]"
        )}
      >
        <div className="flex flex-col gap-6 p-8 min-h-screen max-w-[1700px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
          <header className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white font-montserrat">Dashboard</h1>
            <p className="text-neutral-600 dark:text-neutral-400 font-medium">Bienvenido a DesignEngine. Aquí tienes un resumen de tu actividad.</p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for dashboard content */}
            <div className="h-64 rounded-3xl border-2 border-dashed border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-400">
              Próximamente: Estadísticas clave
            </div>
            <div className="h-64 rounded-3xl border-2 border-dashed border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-400">
              Próximamente: Actividad reciente
            </div>
            <div className="h-64 rounded-3xl border-2 border-dashed border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-400">
              Próximamente: Servicios activos
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
