"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button, Input, Checkbox } from "@/components/ui";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "El correo es obligatorio";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Formato no valido";
    }

    // Password validation
    if (!password) {
      newErrors.password = "La contraseña es obligatoria";
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      router.push("/users");
    }
  };

  return (
    <div className="mx-auto w-full max-w-[440px] space-y-10">
      {/* Logo */}
      <div className="flex justify-start">
        <Image
          src="/logos/lt-h.png"
          alt="QA Automatization"
          width={217}
          height={48}
          className="h-[48px] w-[217px] dark:hidden"
          priority
        />
        <Image
          src="/logos/lt-h-white.png"
          alt="QA Automatization"
          width={217}
          height={48}
          className="h-[48px] w-[217px] hidden dark:block"
          priority
        />
      </div>

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-[40px] font-bold tracking-tight text-primary">
          Bienvenido
        </h1>
        <p className="text-neutral-900">
          Ingresa tus credenciales para acceder a tu área de trabajo.
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

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-900">
              Contraseña
            </label>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="............"
              iconLeft={<Lock className="h-5 w-5" />}
              iconRight={
                showPassword ? (
                  <EyeOff
                    className="h-5 w-5 cursor-pointer text-neutral-900 hover:text-neutral-300 transition-colors"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <Eye
                    className="h-5 w-5 cursor-pointer text-neutral-900 hover:text-neutral-300 transition-colors"
                    onClick={() => setShowPassword(true)}
                  />
                )
              }
              className="w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Checkbox label="Recordar contraseña" id="remember" sizeVariant="S" className="text-[14px] font-medium" />
          <Link
            href="/forgot-password"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <Button variant="primary" size="lg" type="submit">
          Iniciar sesión
        </Button>

        {/* Divider */}
        <div className="relative flex items-center gap-4 py-2">
          <div className="h-px flex-1 bg-neutral-800"></div>
          <span className="text-sm font-medium tracking-wider text-neutral-900">o continua con</span>
          <div className="h-px flex-1 bg-neutral-800"></div>
        </div>

        {/* Social Login */}
        <Button variant="neutral" size="lg">
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          google
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
