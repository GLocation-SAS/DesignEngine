"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { X, AlertCircle, CheckCircle2, AlertTriangle, Info as InfoIcon } from "lucide-react";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "error" | "warning" | "info";
  title: string;
  description?: string;
  onClose?: () => void;
}

export const Toast = ({
  className,
  variant = "info",
  title,
  description,
  onClose,
  ...props
}: ToastProps) => {
  const configs = {
    info: {
      bg: "bg-primary-50",
      iconBg: "bg-primary-500",
      borderColor: "border-primary-100",
      icon: <InfoIcon size={16} className="text-white" />,
      titleColor: "text-primary-900",
      descColor: "text-primary-700",
    },
    success: {
      bg: "bg-success-50",
      iconBg: "bg-success-500",
      borderColor: "border-success-100",
      icon: <CheckCircle2 size={16} className="text-white" />,
      titleColor: "text-success-900",
      descColor: "text-success-700",
    },
    error: {
      bg: "bg-error-50",
      iconBg: "bg-error-500",
      borderColor: "border-error-100",
      icon: <AlertCircle size={16} className="text-white" />,
      titleColor: "text-error-900",
      descColor: "text-error-700",
    },
    warning: {
      bg: "bg-warning-50",
      iconBg: "bg-warning-500",
      borderColor: "border-warning-100",
      icon: <AlertTriangle size={16} className="text-white" />,
      titleColor: "text-warning-900",
      descColor: "text-warning-700",
    },
  };

  const config = configs[variant];

  return (
    <div
      className={cn(
        "w-[420px] flex items-center gap-4 p-4 rounded-[20px] border shadow-lg transition-all",
        config.bg,
        config.borderColor,
        className
      )}
      {...props}
    >
      {/* Icon Circle */}
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm",
        config.iconBg
      )}>
        {config.icon}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-0.5 min-w-0">
        <h3 className={cn("text-[14px] font-bold leading-tight truncate", config.titleColor)}>
          {title}
        </h3>
        {description && (
          <p className={cn("text-[13px] leading-snug line-clamp-2", config.descColor)}>
            {description}
          </p>
        )}
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="shrink-0 p-1 rounded-full hover:bg-black/5 transition-colors text-neutral-500"
      >
        <X size={18} />
      </button>
    </div>
  );
};
