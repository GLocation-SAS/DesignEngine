"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  sizeVariant?: "L" | "M" | "S";
  aligned?: "left" | "right";
  error?: boolean;
  success?: boolean;
}

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ className, label, hint, sizeVariant = "L", aligned = "left", error, success, disabled, checked: controlledChecked, onChange, ...props }, ref) => {
    const [internalChecked, setInternalChecked] = React.useState(false);
    const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;

    const sizeConfigs = {
      L: { outer: "w-8 h-8", inner: "w-5 h-5", text: "text-[12px]" },
      M: { outer: "w-6 h-6", inner: "w-3.5 h-3.5", text: "text-[12px]" },
      S: { outer: "w-5 h-5", inner: "w-2.5 h-2.5", text: "text-[12px]" },
    };

    const currentSize = sizeConfigs[sizeVariant];

    const getBorderStyles = () => {
      if (disabled) return "border-neutral-200 cursor-not-allowed";
      if (error) return "border-error-500";
      if (success) return "border-success-500";
      return "border-primary-500";
    };

    const getInnerStyles = () => {
      if (disabled) return "bg-neutral-200";
      if (error) return "bg-error-500";
      if (success) return "bg-success-500";
      return "bg-primary";
    };

    const handleToggle = () => {
      if (disabled) return;
      if (controlledChecked === undefined) {
        setInternalChecked(true);
      }
      onChange?.({ target: { checked: true } } as any);
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
        <input
          type="radio"
          className="sr-only"
          checked={isChecked}
          onChange={handleToggle}
          disabled={disabled}
          ref={ref}
          {...props}
        />

        {/* Visual Radio Button */}
        <div
          className={cn(
            "shrink-0 rounded-full border-2 border-solid flex items-center justify-center transition-all duration-200",
            currentSize.outer,
            getBorderStyles(),
            isChecked ? "border-2" : "border"
          )}
        >
          {isChecked && (
            <div
              className={cn(
                "rounded-full animate-in zoom-in-50 duration-200",
                currentSize.inner,
                getInnerStyles()
              )}
            />
          )}
        </div>

        {/* Label & Hint Container */}
        {(label || hint) && (
          <div className="flex flex-col gap-1 py-1">
            {label && (
              <span className={cn(
                " font-medium leading-4 text-neutral-900 dark:text-neutral-100",
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

RadioButton.displayName = "RadioButton";
