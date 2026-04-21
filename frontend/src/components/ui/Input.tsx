"use client";

import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-surface-700 dark:text-surface-300"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded-xl border bg-white px-4 py-2.5 text-sm transition-all duration-200",
            "placeholder:text-surface-400",
            "focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none",
            "dark:bg-surface-900 dark:text-surface-100 dark:placeholder:text-surface-500",
            error
              ? "border-danger-500 focus:border-danger-500 focus:ring-danger-500/20"
              : "border-surface-300 dark:border-surface-700",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs font-medium text-danger-500">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-xs text-surface-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
export type { InputProps };
