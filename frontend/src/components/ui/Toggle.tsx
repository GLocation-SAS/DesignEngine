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
      if (disabled) return isChecked ? "bg-neutral-400 border-neutral-400" : "bg-white border-neutral-200";
      if (error) return isChecked ? "bg-error-500 border-error-500" : "bg-white border-error-500";
      if (success) return isChecked ? "text-success-500 border-success-500" : "bg-white border-success-500";
      return isChecked ? "bg-primary border-primary" : "bg-white border-primary";
    };

    const getThumbStyles = () => {
      if (disabled) return isChecked ? "bg-white" : "bg-neutral-200";
      if (error) return isChecked ? "bg-white" : "bg-error-500";
      if (success) return isChecked ? "bg-white" : "text-success-500";
      return isChecked ? "bg-white" : "bg-primary";
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
          onChange={handleToggle}
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
                " font-medium leading-4 text-neutral-900",
                currentSize.text,
                disabled && "text-neutral-400"
              )}>
                {label}
              </span>
            )}
            {hint && (
              <span className={cn(
                " font-normal leading-4 text-neutral-500",
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
