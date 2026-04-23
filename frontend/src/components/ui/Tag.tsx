"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "hover" | "success" | "pause" | "error" | "informative" | "button";
  size?: "L" | "M" | "S";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onRemove?: () => void;
  label: string;
}

export function Tag({
  className,
  variant = "default",
  size = "L",
  iconLeft,
  iconRight,
  onRemove,
  label,
  ...props
}: TagProps) {
  
  const sizeConfigs = {
    L: "py-3 px-6 text-[12px] gap-2",
    M: "py-2 px-6 text-[12px] gap-2",
    S: "py-2 px-6 text-[12px] gap-2",
  };

  const variantConfigs = {
    default: "bg-[#efe8f7] text-[#5c3e91] border-transparent",
    hover: "bg-[#5a3988] text-white border-transparent",
    success: "bg-[#cfeae3] text-[#1f7a6b] border-transparent",
    pause: "bg-[#fef3c7] text-[#d97706] border-transparent",
    error: "bg-[#ffd1df] text-[#fa003f] border-transparent",
    informative: "bg-white text-[#5a3988] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.05),0px_10px_15px_0px_rgba(0,0,0,0.1)] border-transparent",
    button: "bg-white text-[#5a3988] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.05),0px_10px_15px_0px_rgba(0,0,0,0.1)] border-transparent",
  };

  // Icon Circle Background (Matches text color if not hover)
  const iconCircleBg = variant === "hover" ? "bg-white text-[#5a3988]" : {
    default: "bg-[#5c3e91] text-white",
    hover: "bg-white text-[#5a3988]",
    success: "bg-[#1f7a6b] text-white",
    pause: "bg-[#d97706] text-white",
    error: "bg-[#fa003f] text-white",
    informative: "bg-[#5a3988] text-white",
    button: "bg-[#5a3988] text-white",
  }[variant];

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full font-medium transition-all cursor-pointer whitespace-nowrap font-['Montserrat']",
        size === "L" ? "py-3" : "py-2",
        onRemove || iconRight ? "pl-6 pr-1.5" : "px-6",
        "gap-3", // Aumentado a 12px para mejor legibilidad como en el screenshot
        variantConfigs[variant],
        className
      )}
      {...props}
    >
      {/* Left Icon */}
      {iconLeft && (
        <div className="shrink-0 flex items-center justify-center w-6 h-6">
          {iconLeft}
        </div>
      )}

      {/* Label */}
      <span className="leading-4 text-[12px] font-medium">{label}</span>

      {/* Right Icon / Remove Button */}
      {onRemove || iconRight ? (
        <div 
          onClick={(e) => {
            if (onRemove) {
              e.stopPropagation();
              onRemove();
            }
          }}
          className={cn(
            "flex items-center justify-center rounded-full transition-opacity hover:opacity-80 shrink-0",
            "w-8 h-8", // 32px exactos
            iconCircleBg
          )}
        >
          {iconRight || <X size={14} strokeWidth={2.5} />}
        </div>
      ) : null}
    </div>
  );
}
