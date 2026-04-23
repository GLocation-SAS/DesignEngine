"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  sizeVariant?: "L" | "M" | "S";
  aligned?: "left" | "right";
  error?: boolean;
  success?: boolean;
}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, label, hint, sizeVariant = "L", aligned = "left", error, success, disabled, checked: controlledChecked, onChange, ...props }, ref) => {
    const [internalChecked, setInternalChecked] = React.useState(false);
    const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;

    const sizeConfigs = {
      L: { track: "w-14 h-8", thumb: "w-[22px] h-[22px]", offset: "translate-x-6", text: "text-[12px]" },
      M: { track: "w-12 h-6", thumb: "w-4 h-4", offset: "translate-x-5.5", text: "text-[12px]" },
      S: { track: "w-10 h-5", thumb: "w-3 h-3", offset: "translate-x-4.5", text: "text-[12px]" },
    };

    const currentSize = sizeConfigs[sizeVariant];

    const getTrackStyles = () => {
      if (disabled) return isChecked ? "bg-[#a3a3a3] border-[#a3a3a3]" : "bg-white border-[#d1d1d1]";
      if (error) return isChecked ? "bg-[#fa003f] border-[#fa003f]" : "bg-white border-[#fa003f]";
      if (success) return isChecked ? "bg-[#1f7a6b] border-[#1f7a6b]" : "bg-white border-[#1f7a6b]";
      return isChecked ? "bg-[#5a3988] border-[#5a3988]" : "bg-white border-[#5a3988]";
    };

    const getThumbStyles = () => {
      if (disabled) return isChecked ? "bg-white" : "bg-[#d1d1d1]";
      if (error) return isChecked ? "bg-white" : "bg-[#fa003f]";
      if (success) return isChecked ? "bg-white" : "bg-[#1f7a6b]";
      return isChecked ? "bg-white" : "bg-[#5a3988]";
    };

    const handleToggle = () => {
      if (disabled) return;
      if (controlledChecked === undefined) {
        setInternalChecked(!isChecked);
      }
      onChange?.({ target: { checked: !isChecked } } as any);
    };

    return (
      <div 
        className={cn(
          "flex items-start gap-4 transition-all group cursor-pointer",
          aligned === "right" ? "flex-row-reverse justify-end text-right" : "flex-row justify-start text-left",
          className
        )}
        onClick={handleToggle}
      >
        {/* Hidden Input for Accessibility */}
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          disabled={disabled}
          ref={ref}
          {...props}
        />

        {/* Visual Toggle Track */}
        <div
          className={cn(
            "shrink-0 rounded-full border border-solid flex items-center p-1 transition-all duration-300 ease-in-out",
            currentSize.track,
            getTrackStyles()
          )}
        >
          {/* Visual Thumb */}
          <div
            className={cn(
              "rounded-full transition-all duration-300 ease-in-out transform shadow-sm",
              currentSize.thumb,
              getThumbStyles(),
              isChecked ? currentSize.offset : "translate-x-0"
            )}
          />
        </div>

        {/* Label & Hint Container */}
        {(label || hint) && (
          <div className="flex flex-col gap-1 py-1">
            {label && (
              <span className={cn(
                "font-['Montserrat'] font-medium leading-4 text-neutral-900 dark:text-neutral-100",
                currentSize.text,
                disabled && "text-neutral-400"
              )}>
                {label}
              </span>
            )}
            {hint && (
              <span className={cn(
                "font-['Montserrat'] font-normal leading-4 text-neutral-500",
                currentSize.text,
                disabled && "text-neutral-300"
              )}>
                {hint}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);

Toggle.displayName = "Toggle";
