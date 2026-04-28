"use client";

import React from "react";
import { Tooltip } from "@/components/ui/Tooltip";
import { Button } from "@/components/ui/Button";
import { Info, Save, Trash2, Edit } from "lucide-react";

export function TooltipMatrix() {
  return (
    <div id="tooltips" className="space-y-12 px-8 max-w-7xl">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold tracking-tight text-neutral-900">Tooltips System</h3>
        <p className="text-neutral-500">
          Componente para mostrar información contextual breve. Admite múltiples posiciones y contenidos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Positions */}
        <div className="p-8 rounded-2xl bg-white border border-neutral-200 space-y-8">
          <div className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Posiciones</div>
          <div className="flex flex-wrap gap-12 items-center justify-center py-10">
            <Tooltip content="Tooltip en la parte superior" position="top">
              <Button variant="primary">Arriba</Button>
            </Tooltip>
            <Tooltip content="Tooltip en la parte inferior" position="bottom">
              <Button variant="primary">Abajo</Button>
            </Tooltip>
            <Tooltip content="Tooltip a la izquierda" position="left">
              <Button variant="primary">Izquierda</Button>
            </Tooltip>
            <Tooltip content="Tooltip a la derecha" position="right">
              <Button variant="primary">Derecha</Button>
            </Tooltip>
          </div>
        </div>

        {/* Use Cases */}
        <div className="p-8 rounded-2xl bg-white border border-neutral-200 space-y-8">
          <div className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Casos de Uso</div>
          <div className="flex flex-wrap gap-6 items-center">
            <Tooltip content="Guardar cambios actuales" position="top">
              <Button variant="ghost" size="icon"><Save className="w-5 h-5 text-success-500" /></Button>
            </Tooltip>
            <Tooltip content="Editar perfil de usuario" position="top">
              <Button variant="ghost" size="icon">
                <Edit className="w-5 h-5 text-primary-500" />
              </Button>
            </Tooltip>
            <Tooltip content="Eliminar registro permanentemente" position="top">
              <Button variant="ghost" size="icon">
                <Trash2 className="w-5 h-5 text-error-500" />
              </Button>
            </Tooltip>
            <Tooltip content="Más información sobre el sistema" position="right">
              <Button variant="ghost" size="icon">
                <Info className="w-5 h-5 text-neutral-400 cursor-help" />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
