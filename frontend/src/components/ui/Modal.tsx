import * as React from "react";
import { cn } from "@/lib/utils";
import { X, AlertCircle, CheckCircle2, AlertTriangle, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  onClose?: () => void;
  title: string;
  description: string;
  state?: "Error" | "Success" | "Warning" | "Info";
  sizeVariant?: "L" | "M" | "S";
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
}

export const Modal = ({
  className,
  isOpen = true,
  onClose,
  title,
  description,
  state = "Error",
  sizeVariant = "L",
  primaryActionLabel = "Reintentar",
  secondaryActionLabel = "Cancelar",
  onPrimaryAction,
  onSecondaryAction,
  ...props
}: ModalProps) => {
  if (!isOpen) return null;

  const stateConfigs = {
    Error: {
      icon: <AlertCircle size={40} className="text-[#FA003F]" />,
      bg: "bg-[#FFD1DF]",
      buttonVariant: "error" as const,
    },
    Success: {
      icon: <CheckCircle2 size={50} className="text-[#1F7A6B]" />,
      bg: "bg-[#CFEAE3]",
      buttonVariant: "success" as const,
    },
    Warning: {
      icon: <AlertTriangle size={40} className="text-[#D97706]" />,
      bg: "bg-[#FEF3C7]",
      buttonVariant: "warning" as const,
    },
    Info: {
      icon: <Info size={40} className="text-[#2563EB]" />,
      bg: "bg-[#DBEAFE]",
      buttonVariant: "info" as const,
    },
  };

  const config = stateConfigs[state];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div
        className={cn(
          "bg-white rounded-[8px] shadow-[0px_8px_10px_-5px_rgba(0,0,0,0.04),0px_20px_25px_-5px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center p-10 relative overflow-hidden",
          sizeVariant === "L" ? "w-[570px] h-[469px]" : sizeVariant === "M" ? "w-[529px] h-[474px]" : "w-[376px] h-auto",
          sizeVariant !== "S" && "gap-[38px]",
          sizeVariant === "S" && "gap-6",
          className
        )}
        {...props}
      >
        {/* Close Button Header Area */}
        <div className="w-full flex justify-end absolute top-10 right-10 z-10">
          <Button
            variant="neutral"
            size="icon"
            onClick={onClose}
            className="rounded-md transition-all"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* State Icon */}
        <div className={cn(
          "w-20 h-20 rounded-full flex items-center justify-center shrink-0 mt-10",
          config.bg
        )}>
          {config.icon}
        </div>

        {/* Content Area */}
        <div className="text-center flex flex-col items-center w-full">
          <h3 className="text-[20px] font-semibold text-[#141414] leading-[28px] font-['Montserrat'] mb-2">
            {title}
          </h3>
          <p className="text-[16px] text-[#141414] leading-[24px] font-['Montserrat'] max-w-[420px] mx-auto">
            {description}
          </p>
        </div>

        {/* Actions Area */}
        <div className={cn(
          "flex w-full shrink-0",
          sizeVariant === "S" ? "flex-col gap-4" : "flex-row justify-center gap-4"
        )}>
          {secondaryActionLabel && (
            <Button
              variant="neutral"
              size="lg"
              className={cn(
                sizeVariant === "S" ? "w-full order-2" : "flex-1"
              )}
              onClick={onSecondaryAction || onClose}
            >
              {secondaryActionLabel}
            </Button>
          )}
          <Button
            variant={config.buttonVariant}
            size="lg"
            className={cn(
              sizeVariant === "S" ? "w-full order-1" : "flex-1"
            )}
            onClick={onPrimaryAction}
          >
            {primaryActionLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};
