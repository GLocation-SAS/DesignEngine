"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, ChevronLeft } from "lucide-react";
import { Button, Input } from "@/components/ui";
import { useToast } from "@/context/ToastContext";

export function ForgotPasswordForm() {
  const { show } = useToast();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ email?: string }>({});

  const validate = () => {
    const newErrors: { email?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "El correo es obligatorio";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Formato no valido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Logic to send recovery email
      console.log("Recuperar contraseña para:", email);
      show({
        title: "Correo enviado",
        description: "Se han enviado las instrucciones a tu correo electrónico.",
        variant: "success",
      });
    }
  };

  return (
    <div className="mx-auto w-full max-w-[440px] space-y-8">
      {/* Back to Login */}
      <div className="flex justify-start">
        <Link
          href="/login"
          className="flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-primary transition-colors"
        >
          <ChevronLeft className="h-4 w-4 text-primary" />
          Volver al inicio de sesión
        </Link>
      </div>

      {/* Header */}
      <div className="">
        <h1 className="text-[40px] font-bold tracking-tight text-primary">
          Recuperar contraseña
        </h1>
        <p className="text-neutral-900">
          Ingresa tu correo electrónico y te enviaremos las instrucciones para restablecer tu contraseña.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-900">
              Correo electrónico
            </label>
            <Input
              type="email"
              placeholder="Ejemplo@gmail.com"
              iconLeft={<Mail className="h-5 w-5" />}
              className="w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              success={email !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
            />
          </div>
        </div>

        <Button variant="primary" size="lg" type="submit">
          Recuperar contraseña
        </Button>

        {/* Footer */}
        <p className="text-center text-md text-neutral-900 font-light">
          ¿No tienes una cuenta?{" "}
          <Link
            href="/register"
            className="font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Regístrate
          </Link>
        </p>
      </form>
    </div>
  );
}
