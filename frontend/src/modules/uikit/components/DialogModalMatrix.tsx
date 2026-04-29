import React, { useState } from "react";
import { DialogModal } from "@/components/ui/DialogModal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { User, Mail, Lock, IdCard } from "lucide-react";

export function DialogModalMatrix() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-12 px-8 mt-12" id="dialog-modals">
      {/* Section Header */}
      <div className="flex items-center gap-3 border-l-4 border-black dark:border-white pl-4">
        <h4 className="text-sm font-black uppercase tracking-[0.3em] text-neutral-600 dark:text-neutral-500">DialogModal (Composición)</h4>
      </div>

      <div className="bg-neutral-100 p-10 rounded-[48px] border border-neutral-200">
        <div className="flex flex-col gap-6 max-w-md">
          <p className="text-neutral-600 text-sm">
            A diferencia de los modales de estado, el <strong>DialogModal</strong> permite composición completa para formularios y flujos complejos.
          </p>
          <Button
            variant="primary"
            size="lg"
            className="w-fit"
            onClick={() => setIsOpen(true)}
          >
            Crear Nuevo Usuario
          </Button>
        </div>
      </div>

      <DialogModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Crear nuevo usuario"
        sizeVariant="L"
        footer={
          <>
            <Button variant="neutral" onClick={() => setIsOpen(false)} className="flex-1">
              Cancelar
            </Button>
            <Button variant="primary" onClick={() => setIsOpen(false)} className="flex-1">
              Guardar Usuario
            </Button>
          </>
        }
      >
        <div className="space-y-6">
          <p className="text-neutral-600 text-sm">
            Completa la información para registrar un nuevo administrador en el sistema.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 w-[310px] mx-auto md:w-full">
            <Input
              label="Nombre completo"
              placeholder="Ej. Juan Pérez"
              iconLeft={<User className="w-4 h-4" />}
              sizeVariant="md"
            />
            <Input
              label="Correo electrónico"
              type="email"
              placeholder="juan@ejemplo.com"
              iconLeft={<Mail className="w-4 h-4" />}
              sizeVariant="md"
            />
            <Input
              label="Cédula"
              type="text"
              placeholder="1234567890"
              iconLeft={<IdCard className="w-4 h-4" />}
              sizeVariant="md"
            />
            <Input
              label="Contraseña"
              type="password"
              placeholder="••••••••"
              iconLeft={<Lock className="w-4 h-4" />}
              sizeVariant="md"
            />
          </div>

        </div>
      </DialogModal>
    </div>
  );
}
