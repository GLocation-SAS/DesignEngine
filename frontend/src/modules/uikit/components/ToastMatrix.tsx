"use client";

import React from "react";
import { useToast } from "@/context/ToastContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function ToastMatrix() {
  const { show } = useToast();

  const handleShowToast = (variant: "success" | "error" | "warning" | "info") => {
    const titles = {
      success: "¡Éxito!",
      error: "Error del sistema",
      warning: "Advertencia",
      info: "Información"
    };

    const descriptions = {
      success: "La operación se ha completado correctamente.",
      error: "No se ha podido procesar la solicitud en este momento.",
      warning: "Tu sesión expirará en breve por inactividad.",
      info: "Hay una nueva actualización disponible."
    };

    show({
      title: titles[variant],
      description: descriptions[variant],
      variant,
      duration: 5000
    });
  };

  return (
    <div className="space-y-24 mt-16 pb-16 max-w-7xl">
      {/* Header */}
      <div className="px-8 space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-primary-600 text-white uppercase tracking-widest text-[10px]">Feedback System</Badge>
        </div>
        <h2 className="text-4xl font-black tracking-tighter text-primary-500 dark:text-primary-700 uppercase">Toasts System</h2>
        <p className="text-neutral-900 max-w-2xl text-lg">
          Sistema de notificaciones temporales flotantes gestionado mediante un hook global. Soporta múltiples estados semánticos y colas de mensajes.
        </p>
      </div>

      <div className="space-y-24 px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="flex items-center gap-3 border-l-4 border-black dark:border-white pl-4">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">Interactividad</h4>
          </div>

          {/* Buttons Grid Container */}
          <div className="bg-neutral-100 p-10 rounded-[48px] border border-neutral-200 ">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
              <Button onClick={() => handleShowToast("success")} variant="success">
                Toast de Éxito
              </Button>
              <Button onClick={() => handleShowToast("error")} variant="error">
                Toast de Error
              </Button>
              <Button onClick={() => handleShowToast("warning")} variant="warning">
                Toast de Advertencia
              </Button>
              <Button onClick={() => handleShowToast("info")} variant="info">
                Toast de Información
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {/* Section Header */}
          <div className="flex items-center gap-3 border-l-4 border-black dark:border-white pl-4">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">Ejemplos Rápidos</h4>
          </div>

          <div className="bg-neutral-100 p-10 rounded-[48px] border border-neutral-200 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase text-neutral-400">Sólo Título</p>
                <Button onClick={() => show({ title: "Acción realizada", duration: 3000 })} variant="neutral">
                  Toast de Título
                </Button>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase text-neutral-400">Larga Duración (10s)</p>
                <Button onClick={() => show({ title: "Persistente", description: "Este toast durará 10 segundos.", duration: 10000 })} variant="neutral">
                  Toast de 10s
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
