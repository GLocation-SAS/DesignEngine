import * as React from "react";
import { cn } from "@/lib/utils";
import { X, AlertCircle, CheckCircle2, AlertTriangle, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  description?: string;
  state?: "Error" | "Success" | "Warning" | "Info";
  sizeVariant?: "L" | "M" | "S";
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  children?: React.ReactNode;
}

export const Modal = ({
  className,
  isOpen = true,
  onClose,
  title,
  description,
  state,
  sizeVariant = "L",
  primaryActionLabel,
  secondaryActionLabel,
  onPrimaryAction,
  onSecondaryAction,
  children,
  ...props
}: ModalProps) => {
  if (!isOpen) return null;

  const stateConfigs = {
    Error: {
      icon: <AlertCircle size={40} className="text-error-500" />,
      bg: "bg-error-100",
      buttonVariant: "error" as const,
    },
    Success: {
      icon: <CheckCircle2 size={50} className="text-success-500" />,
      bg: "bg-success-100",
      buttonVariant: "success" as const,
    },
    Warning: {
      icon: <AlertTriangle size={40} className="text-warning-500" />,
      bg: "bg-warning-100",
      buttonVariant: "warning" as const,
    },
    Info: {
      icon: <Info size={40} className="text-info-500" />,
      bg: "bg-info-100",
      buttonVariant: "info" as const,
    },
  };

  const config = state ? stateConfigs[state] : null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div
        className={cn(
          "bg-white dark:bg-neutral-white rounded-[8px] shadow-[0px_8px_10px_-5px_rgba(0,0,0,0.04),0px_20px_25px_-5px_rgba(0,0,0,0.1)] flex flex-col p-10 relative overflow-hidden animate-in zoom-in-95 duration-200",
          sizeVariant === "L" ? "w-full max-w-[570px] min-h-[469px]" : sizeVariant === "M" ? "w-full max-w-[529px] min-h-[474px]" : "w-full max-w-[376px] h-auto",
          !state && "items-center md:items-start",
          state && "items-center justify-center text-center",
          sizeVariant !== "S" && "gap-[38px]",
          sizeVariant === "S" && "gap-6",
          className
        )}
        {...props}
      >
        {/* Close Button Header Area */}
        <div className="w-full flex justify-end absolute top-6 right-6 z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full hover:bg-neutral-100 transition-all w-8 h-8 flex items-center justify-center"
          >
            <X className="w-5 h-5 text-neutral-500" />
          </Button>
        </div>

        {/* State Icon (Optional) */}
        {config && (
          <div className={cn(
            "w-20 h-20 rounded-full flex items-center justify-center shrink-0 mt-10",
            config.bg
          )}>
            {config.icon}
          </div>
        )}

        {/* Content Area */}
        <div className={cn(
          "w-full flex flex-col",
          state ? "items-center" : "items-center md:items-start"
        )}>
          {title && (
            <h3 className={cn(
              "text-[20px] font-bold text-neutral-900 leading-[28px]",
              state ? "text-center mb-2" : "text-center md:text-left mb-6"
            )}>
              {title}
            </h3>
          )}
          
          {children ? (
            <div className="w-full">
              {children}
            </div>
          ) : (
            description && (
              <p className={cn(
                "text-[16px] text-neutral-900 leading-[24px]",
                state ? "text-center max-w-[420px] mx-auto" : "text-center md:text-left"
              )}>
                {description}
              </p>
            )
          )}
        </div>

        {/* Actions Area (Optional) */}
        {(primaryActionLabel || secondaryActionLabel) && (
          <div className={cn(
            "flex w-full shrink-0",
            sizeVariant === "S" ? "flex-col gap-4" : "flex-row justify-end gap-4",
            state && "justify-center"
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
            {primaryActionLabel && (
              <Button
                variant={config?.buttonVariant || "primary"}
                size="lg"
                className={cn(
                  sizeVariant === "S" ? "w-full order-1" : "flex-1"
                )}
                onClick={onPrimaryAction}
              >
                {primaryActionLabel}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
