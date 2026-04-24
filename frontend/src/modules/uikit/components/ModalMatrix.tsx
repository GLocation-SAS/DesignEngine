"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const STATES = [
  { key: "Error", label: "Error Modal", title: "Error al actualizar la contraseña", description: "No pudimos completar la actualización de tu contraseña. Por favor, verifica los datos ingresados e inténtalo nuevamente." },
  { key: "Success", label: "Success Modal", title: "Contraseña actualizada correctamente", description: "Tu contraseña ha sido actualizada con éxito. Ya puedes iniciar sesión con tus nuevas credenciales." },
  { key: "Warning", label: "Warning Modal", title: "Estás a punto de cambiar tu contraseña", description: "Recuerda que al cambiar tu contraseña se cerrarán todas las sesiones activas en otros dispositivos." },
  { key: "Info", label: "Info Modal", title: "Requisitos para la nueva contraseña", description: "Tu nueva contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número." },
] as const;

const SIZES = [
  { key: "L", label: "Large" },
  { key: "M", label: "Medium" },
  { key: "S", label: "Small" },
] as const;

export function ModalMatrix() {
  const [activeModal, setActiveModal] = useState<{ state: typeof STATES[number]["key"], size: typeof SIZES[number]["key"] } | null>(null);

  return (
    <div className="space-y-24 mt-16 pb-16 max-w-7xl" id="modals">
      {/* Header */}
      <div className="px-8 space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-black text-white dark:bg-white dark:text-black uppercase tracking-widest text-[10px]">Feedback System</Badge>
        </div>
        <h2 className="text-4xl font-black tracking-tighter text-primary-500 dark:text-primary-700 uppercase">Modales</h2>
        <p className="text-neutral-900 dark:text-primary-700 max-w-2xl text-lg">
          Modales de retroalimentación y confirmación. Soportan múltiples estados semánticos y tamaños adaptables.
        </p>
      </div>

      <div className="space-y-24 px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="flex items-center gap-3 border-l-4 border-black dark:border-white pl-4">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-neutral-600 dark:text-neutral-500">Variantes y Tamaños</h4>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto bg-neutral-100 p-10 rounded-[48px] border border-neutral-200">
            <table className="w-full border-separate border-spacing-x-8 border-spacing-y-8">
              <thead>
                <tr>
                  <th className="text-left py-4 px-2"></th>
                  {SIZES.map((s) => (
                    <th key={s.key} className="text-center text-[10px] font-bold uppercase tracking-widest text-neutral-600 py-4 px-2 whitespace-nowrap">
                      {s.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {STATES.map((state) => (
                  <tr key={state.key}>
                    <td className="text-left text-xs font-black text-neutral-600 uppercase tracking-widest pr-8 border-b border-neutral-200/50 dark:border-neutral-800 pb-2 align-middle">
                      {state.label}
                    </td>
                    {SIZES.map((size) => (
                      <td key={`${state.key}-${size.key}`} className="text-center py-2 align-top">
                        <Button
                          variant="neutral"
                          className="w-full"
                          onClick={() => setActiveModal({ state: state.key, size: size.key })}
                        >
                          Open {size.key}
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

      {/* Modal Instance */}
      {activeModal && (
        <Modal
          isOpen={!!activeModal}
          onClose={() => setActiveModal(null)}
          state={activeModal.state}
          sizeVariant={activeModal.size}
          title={STATES.find(s => s.key === activeModal.state)?.title || ""}
          description={STATES.find(s => s.key === activeModal.state)?.description || ""}
          primaryActionLabel="Reintentar"
          secondaryActionLabel={["Success", "Info"].includes(activeModal.state) ? undefined : "Cancelar"}
          onPrimaryAction={() => setActiveModal(null)}
        />
      )}
    </div>
  );
}






