"use client";

import React from "react";
import { Notification } from "@/components/ui/Notification";
import { Badge } from "@/components/ui/Badge";

const STATES = [
  {
    key: "Info",
    title: "Info Notification",
    message: "Esta es una notificación de información para el usuario."
  },
  {
    key: "Success",
    title: "Success Notification",
    message: "¡Operación completada con éxito! Los cambios se han guardado."
  },
  {
    key: "Error",
    title: "Error Notification",
    message: "Ha ocurrido un error al procesar tu solicitud. Inténtalo de nuevo."
  },
  {
    key: "Warning",
    title: "Warning Notification",
    message: "Atención: Tu sesión expirará pronto por inactividad."
  },
] as const;

export function NotificationMatrix() {
  return (
    <div className="space-y-24 mt-16 pb-16 max-w-7xl">
      {/* Header */}
      <div className="px-8 space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-primary-600 text-white uppercase tracking-widest text-[10px]">Feedback System</Badge>
        </div>
        <h2 className="text-4xl font-black tracking-tighter text-primary-500 dark:text-primary-700 uppercase">Notificaciones</h2>
        <p className="text-neutral-900 max-w-2xl text-lg">
          Sistema de notificaciones para retroalimentación inmediata del sistema. Soportan múltiples estados semánticos y acciones integradas.
        </p>
      </div>

      <div className="space-y-24 px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="flex items-center gap-3 border-l-4 border-black dark:border-white pl-4">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">Variantes de Estado</h4>
          </div>

          {/* Grid Container */}
          <div className="bg-neutral-100 p-10 rounded-[48px] border border-neutral-200 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {STATES.map((state) => (
                <div key={state.key} className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                    State: {state.key}
                  </h4>
                  <Notification
                    state={state.key}
                    title={state.title}
                    message={state.message}
                    time="Hace 2 segundos"
                    className="shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






