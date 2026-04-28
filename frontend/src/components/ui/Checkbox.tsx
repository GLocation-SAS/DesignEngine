"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  sizeVariant?: "L" | "M" | "S";
  aligned?: "left" | "right";
  error?: boolean;
  success?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, hint, sizeVariant = "L", aligned = "left", error, success, disabled, checked: controlledChecked, onChange, ...props }, ref) => {
    const [internalChecked, setInternalChecked] = React.useState(false);
    const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;

    const sizeConfigs = {
      L: { box: "w-8 h-8", check: 18, text: "text-[14px]" },
      M: { box: "w-6 h-6", check: 14, text: "text-[14px]" },
      S: { box: "w-4 h-4", check: 10, text: "text-[14px]" },
    };

    const currentSize = sizeConfigs[sizeVariant];

    const getBoxStyles = () => {
      if (disabled) return "bg-neutral-200 border-neutral-200 cursor-not-allowed";
      if (error) return isChecked ? "bg-error-500 border-error-500" : "bg-white border-error-500";
      if (success) return isChecked ? "bg-success-500 border-success-500" : "bg-white border-success-500";
      return isChecked ? "bg-primary border-primary" : "bg-transparent border-primary";
    };

    const handleToggle = () => {
      if (disabled) return;
      if (controlledChecked === undefined) {
        setInternalChecked(!internalChecked);
      }
      onChange?.({ target: { checked: !isChecked } } as any);
    };

    return (
      <div
        className={cn(
          "flex items-start gap-3 transition-all group",
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

        {/* Visual Checkbox */}
        <div
          className={cn(
            "shrink-0 rounded-[4px] border border-solid flex items-center justify-center transition-all duration-200",
            currentSize.box,
            getBoxStyles()
          )}
        >
          {isChecked && (
            <Check
              size={currentSize.check}
              className="text-white animate-in zoom-in-50 duration-200"
              strokeWidth={3}
            />
          )}
        </div>

        {/* Label & Hint Container */}
        {(label || hint) && (
          <div className="flex flex-col gap-1 py-0.5">
            {label && (
              <span className={cn(
                "leading-4 text-neutral-900",
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

Checkbox.displayName = "Checkbox";
