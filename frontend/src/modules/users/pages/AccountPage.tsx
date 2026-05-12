"use client";

import { useState } from "react";
import Avatar from "@/components/ui/Avatar";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { Sidebar } from "@/components/layout/Sidebar";
import { useSidebar } from "@/context/SidebarContext";
import { useToast } from "@/context/ToastContext";
import { cn } from "@/lib/utils";
import {
  User,
  Mail,
  Phone,
  Lock,
  Camera,
  CheckCircle2,
  Shield,
  Eye,
  EyeOff,
  ImagePlus
} from "lucide-react";

export const AccountPage = () => {
  const { isCollapsed: sidebarCollapsed, toggleSidebar } = useSidebar();
  const { show: showToast } = useToast();
  
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const initialInfo = {
    name: "María Fernanda",
    surname: "López",
    email: "contratista@gmail.com",
    phone: "+57 310 000 0000"
  };

  const [personalInfo, setPersonalInfo] = useState(initialInfo);
  const [hasHadErrorInfo, setHasHadErrorInfo] = useState<Record<string, boolean>>({});
  const [hasHadErrorSecurity, setHasHadErrorSecurity] = useState<Record<string, boolean>>({});

  // Modal states
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isSecurityModalOpen, setIsSecurityModalOpen] = useState(false);

  const passwordRequirements = [
    { label: "Mínimo 8 caracteres", met: newPassword.length >= 8 },
    { label: "Al menos una mayúscula", met: /[A-Z]/.test(newPassword) },
    { label: "Al menos un número", met: /[0-9]/.test(newPassword) },
    { label: "Al menos un carácter especial (!@#$...)", met: /[^A-Za-z0-9]/.test(newPassword) },
  ];

  const isSecurityValid = 
    currentPassword.length > 0 && 
    newPassword.length > 0 && 
    confirmPassword === newPassword && 
    passwordRequirements.every(r => r.met);

  const hasInfoChanges = 
    personalInfo.name !== initialInfo.name ||
    personalInfo.surname !== initialInfo.surname ||
    personalInfo.email !== initialInfo.email ||
    personalInfo.phone !== initialInfo.phone;

  const isInfoValid = 
    hasInfoChanges &&
    personalInfo.name.trim().length > 2 && 
    personalInfo.surname.trim().length > 2 && 
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalInfo.email);

  const handleInfoChange = (field: keyof typeof initialInfo, value: string) => {
    setPersonalInfo(prev => ({ ...prev, [field]: value }));
    
    // Si el valor es inválido, marcamos que ha tenido error
    let isInvalid = false;
    if (field === 'name' || field === 'surname') isInvalid = value.trim().length <= 2;
    if (field === 'email') isInvalid = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (isInvalid) {
      setHasHadErrorInfo(prev => ({ ...prev, [field]: true }));
    }
  };

  const handleSecurityChange = (field: 'current' | 'new' | 'confirm', value: string) => {
    if (field === 'current') setCurrentPassword(value);
    if (field === 'new') setNewPassword(value);
    if (field === 'confirm') setConfirmPassword(value);

    // Lógica para marcar errores
    let isInvalid = false;
    if (field === 'current') isInvalid = value.length === 0;
    if (field === 'new') isInvalid = value.length < 8 || !/[A-Z]/.test(value) || !/[0-9]/.test(value) || !/[^A-Za-z0-9]/.test(value);
    if (field === 'confirm') isInvalid = value !== newPassword;

    if (isInvalid) {
      setHasHadErrorSecurity(prev => ({ ...prev, [field]: true }));
    }
  };

  const handleInfoSubmit = () => {
    setIsInfoModalOpen(false);
    showToast({
      title: "Perfil actualizado",
      description: "Tus datos personales se han guardado correctamente.",
      variant: "success"
    });
  };

  const handleSecuritySubmit = () => {
    setIsSecurityModalOpen(false);
    showToast({
      title: "Contraseña actualizada",
      description: "Tu contraseña ha sido cambiada con éxito.",
      variant: "success"
    });
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex min-h-screen bg-neutral-50 text-neutral-900 transition-colors duration-300 font-nunito">
      {/* Sidebar fixed */}
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={toggleSidebar}
      />

      <main className={cn(
        "flex-1 min-h-screen bg-neutral-50 transition-all duration-300 pt-14 lg:pt-0",
        sidebarCollapsed ? "lg:ml-[96px]" : "lg:ml-[264px]"
      )}>
        <div className="flex flex-col gap-8 p-8 md:p-10 max-w-[1700px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">

          {/* Header */}
          <header className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 font-montserrat">Configuración de cuenta</h1>
            <p className="text-neutral-600 font-medium">Gestiona tu identidad digital y parámetros de seguridad.</p>
          </header>

          <div className="grid grid-cols-1 gap-6">

            {/* User Hero Card */}
            <section>
              <Card className="max-w-none">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* XL Avatar */}
                    <div className="relative group">
                      <div className="rounded-full shadow-md overflow-hidden">
                        <Avatar name="María Fernanda López" size="xl" />
                      </div>
                      <div className={cn(
                        "absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110",
                        "bg-primary-700",
                        "dark:bg-primary-600"
                      )}>
                        <Camera className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* User Info Block */}
                    <div className="flex flex-col items-center md:items-start gap-1">
                      <h2 className="text-2xl font-bold text-neutral-900 font-montserrat">María Fernanda López Rodríguez</h2>
                      <p className="text-sm text-neutral-500 font-medium mb-1">contratista@gmail.com</p>
                      
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant="default" 
                          className="flex items-center gap-1.5 py-1.5 px-3"
                        >
                          <Shield className="w-3.5 h-3.5" />
                          Contratista
                        </Badge>
                        <Badge 
                          variant="success" 
                          className="flex items-center gap-1.5 py-1.5 px-3"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Activo
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <Button variant="neutral" size="md">
                      <ImagePlus className="w-4 h-4 mr-2" />
                      Subir foto
                    </Button>
                  </div>
                </div>
              </Card>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Personal Info */}
              <Card
                variant="horizontal"
                title="Información personal"
                description="Actualiza tus datos de contacto"
                icon={<User className="w-8 h-8 text-primary-500" />}
                className="h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="flex flex-col gap-6 pt-5 border-t border-neutral-100 flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-neutral-700 ml-1">Nombre</label>
                        <Input
                          value={personalInfo.name}
                          onChange={(e) => handleInfoChange('name', e.target.value)}
                          iconLeft={<User className="h-5 w-5" />}
                          sizeVariant="md"
                          className="w-full"
                          success={hasHadErrorInfo.name && personalInfo.name.trim().length > 2}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-neutral-700 ml-1">Apellido</label>
                        <Input
                          value={personalInfo.surname}
                          onChange={(e) => handleInfoChange('surname', e.target.value)}
                          iconLeft={<User className="h-5 w-5" />}
                          sizeVariant="md"
                          className="w-full"
                          success={hasHadErrorInfo.surname && personalInfo.surname.trim().length > 2}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-neutral-700 ml-1">Correo electrónico</label>
                      <Input
                        type="email"
                        value={personalInfo.email}
                        onChange={(e) => handleInfoChange('email', e.target.value)}
                        iconLeft={<Mail className="h-5 w-5" />}
                        sizeVariant="md"
                        className="w-full"
                        success={hasHadErrorInfo.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalInfo.email)}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-neutral-700 ml-1">Teléfono</label>
                      <Input
                        type="tel"
                        value={personalInfo.phone}
                        onChange={(e) => handleInfoChange('phone', e.target.value)}
                        iconLeft={<Phone className="h-5 w-5" />}
                        sizeVariant="md"
                        className="w-full"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-neutral-700 ml-1">Rol</label>
                      <Input
                        defaultValue="Contratista"
                        iconLeft={<Shield className="h-5 w-5" />}
                        sizeVariant="md"
                        className="w-full"
                        state="Disabled"
                        disabled
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-6 mt-auto">
                    <Button 
                      variant="primary" 
                      size="md" 
                      className="px-6"
                      onClick={() => setIsInfoModalOpen(true)}
                      disabled={!isInfoValid}
                    >
                      Guardar cambios
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Security */}
              <Card
                variant="horizontal"
                title="Seguridad"
                description="Cambia tu contraseña de acceso"
                icon={<Lock className="w-8 h-8 text-primary-500" />}
                className="h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="flex flex-col gap-6 pt-5 border-t border-neutral-100 flex-1">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-neutral-700 ml-1">Contraseña actual</label>
                      <Input
                        type={showCurrentPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={currentPassword}
                        onChange={(e) => handleSecurityChange('current', e.target.value)}
                        iconLeft={<Lock className="h-5 w-5" />}
                        iconRight={
                          <div onClick={() => setShowCurrentPassword(!showCurrentPassword)} className="cursor-pointer text-neutral-500 hover:text-neutral-700 p-1">
                            {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </div>
                        }
                        sizeVariant="md"
                        className="w-full"
                        success={hasHadErrorSecurity.current && currentPassword.length > 0}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-neutral-700 ml-1">Nueva contraseña</label>
                      <Input
                        type={showNewPassword ? "text" : "password"}
                        placeholder="Mín. 8 caracteres"
                        value={newPassword}
                        onChange={(e) => handleSecurityChange('new', e.target.value)}
                        iconLeft={<Lock className="h-5 w-5" />}
                        iconRight={
                          <div onClick={() => setShowNewPassword(!showNewPassword)} className="cursor-pointer text-neutral-500 hover:text-neutral-700 p-1">
                            {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </div>
                        }
                        sizeVariant="md"
                        className="w-full"
                        success={hasHadErrorSecurity.new && newPassword.length > 0 && passwordRequirements.every(r => r.met)}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-neutral-700 ml-1">Confirmar contraseña</label>
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => handleSecurityChange('confirm', e.target.value)}
                        iconLeft={<Lock className="h-5 w-5" />}
                        iconRight={
                          <div onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="cursor-pointer text-neutral-500 hover:text-neutral-700 p-1">
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </div>
                        }
                        sizeVariant="md"
                        className="w-full"
                        success={hasHadErrorSecurity.confirm && confirmPassword.length > 0 && confirmPassword === newPassword}
                        error={confirmPassword.length > 0 && confirmPassword !== newPassword ? "Las contraseñas no coinciden" : false}
                      />
                    </div>

                    <div className="rounded-xl bg-neutral-50 border border-neutral-100 p-4 flex flex-col gap-3">
                      <p className="text-xs font-bold text-neutral-500 mb-0.5 uppercase tracking-wider">Requisitos:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                        {passwordRequirements.map((req) => (
                          <div key={req.label} className="flex items-center gap-2.5">
                            <div className={cn(
                              "w-4 h-4 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                              req.met ? "bg-success-500 border-success-500" : "bg-neutral-200 border-neutral-300"
                            )}>
                              {req.met && <CheckCircle2 className="w-3 text-white" />}
                            </div>
                            <span className={cn(
                              "text-[11px] transition-colors duration-300 leading-tight",
                              req.met ? "text-success-600 font-bold" : "text-neutral-500 font-medium"
                            )}>
                              {req.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex pt-6 mt-auto">
                    <Button 
                      variant="primary" 
                      size="md" 
                      className="w-full"
                      onClick={() => setIsSecurityModalOpen(true)}
                      disabled={!isSecurityValid}
                    >
                      Actualizar contraseña
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </main>

      <Modal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        title="Confirmar cambios de perfil"
        description="¿Estás seguro de que deseas actualizar tu información personal? Los cambios se aplicarán de forma inmediata."
        state="Info"
        primaryActionLabel="Guardar cambios"
        secondaryActionLabel="Cancelar"
        onPrimaryAction={handleInfoSubmit}
      />

      <Modal
        isOpen={isSecurityModalOpen}
        onClose={() => setIsSecurityModalOpen(false)}
        title="Confirmar cambio de contraseña"
        description="Para garantizar la seguridad de tu cuenta, deberás iniciar sesión nuevamente con tu nueva contraseña una vez realizada la actualización."
        state="Warning"
        primaryActionLabel="Actualizar ahora"
        secondaryActionLabel="Volver"
        onPrimaryAction={handleSecuritySubmit}
      />
    </div>
  );
};
