"use client";

import Link from "next/link";
import { Mail, Lock, Eye, User, ChevronLeft } from "lucide-react";
import { Button, Input } from "@/components/ui";

export function RegisterForm() {
  return (
    <div className="mx-auto w-full max-w-[440px] space-y-8">
      {/* Back to Login */}
      <div className="flex justify-start">
        <Link
          href="/login"
          className="flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-primary transition-colors group"
        >
          <ChevronLeft className="h-4 w-4 text-primary group-hover:text-primary-600" />
          Volver al inicio de sesión
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-[40px] font-bold tracking-tight text-primary">
          Registrarse
        </h1>
        <p className="text-neutral-900 font-light">
          Ingresa tus datos para registrarte en la plataforma.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-900">
              Nombre
            </label>
            <Input
              type="text"
              placeholder="Escribe tu nombre aquí"
              iconLeft={<User className="h-5 w-5" />}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-900">
              Correo electrónico
            </label>
            <Input
              type="email"
              placeholder="Ejemplo@gmail.com"
              iconLeft={<Mail className="h-5 w-5" />}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-900">
              Contraseña
            </label>
            <Input
              type="password"
              placeholder="............"
              iconLeft={<Lock className="h-5 w-5" />}
              iconRight={<Eye className="h-5 w-5 cursor-pointer text-neutral-900 hover:text-neutral-300 transition-colors" />}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-900">
              Confirmar contraseña
            </label>
            <Input
              type="password"
              placeholder="............"
              iconLeft={<Lock className="h-5 w-5" />}
              iconRight={<Eye className="h-5 w-5 cursor-pointer text-neutral-900 hover:text-neutral-300 transition-colors" />}
              className="w-full"
            />
          </div>
        </div>

        <Button variant="primary" size="lg">
          Registrarse
        </Button>

        {/* Footer */}
        <p className="text-center text-md text-neutral-900 font-light">
          ¿Ya tienes una cuenta?{" "}
          <Link
            href="/login"
            className="font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Inicia sesión
          </Link>
        </p>
      </form>
    </div>
  );
}
