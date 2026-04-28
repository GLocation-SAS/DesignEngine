"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, User, ChevronLeft } from "lucide-react";
import { Button, Input, Modal } from "@/components/ui";
import { useToast } from "@/context/ToastContext";

export function RegisterForm() {
  const router = useRouter();
  const { show } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) newErrors.name = "El nombre es obligatorio";

    if (!formData.email) {
      newErrors.email = "El correo es obligatorio";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Formato no valido";
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria";
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsModalOpen(true);
    }
  };

  const handleConfirmRegistration = () => {
    // Logic to register user
    console.log("Registrando usuario:", formData);
    setIsModalOpen(false);
    show({
      title: "Registro exitoso",
      description: "Tu cuenta ha sido creada correctamente.",
      variant: "success",
    });
    router.push("/login");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-900">
              Nombre
            </label>
            <Input
              type="text"
              name="name"
              placeholder="Escribe tu nombre aquí"
              iconLeft={<User className="h-5 w-5" />}
              className="w-full"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-900">
              Correo electrónico
            </label>
            <Input
              type="email"
              name="email"
              placeholder="Ejemplo@gmail.com"
              iconLeft={<Mail className="h-5 w-5" />}
              className="w-full"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              success={formData.email !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-900">
              Contraseña
            </label>
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="............"
              iconLeft={<Lock className="h-5 w-5" />}
              iconRight={
                showPassword ? (
                  <EyeOff
                    className="h-5 w-5 cursor-pointer"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <Eye
                    className="h-5 w-5 cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  />
                )
              }
              className="w-full"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-900">
              Confirmar contraseña
            </label>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="............"
              iconLeft={<Lock className="h-5 w-5" />}
              iconRight={
                showConfirmPassword ? (
                  <EyeOff
                    className="h-5 w-5 cursor-pointer"
                    onClick={() => setShowConfirmPassword(false)}
                  />
                ) : (
                  <Eye
                    className="h-5 w-5 cursor-pointer"
                    onClick={() => setShowConfirmPassword(true)}
                  />
                )
              }
              className="w-full"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />
          </div>
        </div>

        <Button variant="primary" size="lg" type="submit">
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

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirmar Registro"
        description="¿Estás seguro que deseas registrarte con estos datos?"
        state="Info"
        sizeVariant="S"
        primaryActionLabel="Aceptar"
        secondaryActionLabel="Cancelar"
        onPrimaryAction={handleConfirmRegistration}
        onSecondaryAction={() => setIsModalOpen(false)}
      />
    </div>
  );
}
