import * as React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  notes?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  error?: boolean | string;
  success?: boolean;
  sizeVariant?: "L" | "M" | "S" | "XS";
  state?: "Default" | "Hover" | "Focused" | "Filled" | "Disabled" | "Error" | "Success";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      label,
      notes,
      iconLeft,
      iconRight,
      error,
      success,
      sizeVariant = "L",
      state: controlledState,
      disabled,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);

    const currentState = controlledState || (
      disabled ? "Disabled" :
        error ? "Error" :
          success ? "Success" :
            isFocused ? "Focused" :
              isHovered ? "Hover" :
                "Default"
    );

    const sizeConfigs = {
      L: "h-[65px] text-base",
      M: "h-[54px] text-sm",
      S: "h-[44px] text-sm",
      XS: "h-[40px] text-xs",
    };

    const stateStyles = {
      Default: "bg-surface-primary-default border-semantic-border-neutral-default border-[2.5px]",
      Hover: "bg-surface-primary-default border-semantic-border-primary-default border-[2.5px]",
      Focused: "bg-surface-primary-default border-semantic-border-primary-default border-[2.5px] shadow-[inset_0_0_3.1px_0_#CBB8E8] dark:shadow-[inset_0_0_13px_0_rgba(203,184,232,0.5)]",
      Filled: "bg-surface-primary-default border-semantic-border-primary-default border-[2.5px]",
      Disabled: "bg-semantic-background-disabled-surface border-transparent border-[2.5px] text-semantic-text-disabled-default cursor-not-allowed opacity-100",
      Error: "bg-surface-primary-default border-semantic-border-error-default border-[2.5px] shadow-[inset_0_0_13.1px_1px_#FFA3BF] dark:shadow-none",
      Success: "bg-surface-primary-default border-semantic-border-success-default border-[2.5px] shadow-[inset_0_0_13.1px_1px_#9FD5CA] dark:shadow-none",
    };

    const iconColorStyles = {
      Default: "text-neutral-600",
      Hover: "text-primary-600",
      Focused: "text-primary-500",
      Filled: "text-primary-500",
      Disabled: "text-neutral-400",
      Error: "text-error-600",
      Success: "text-success-500",
    };

    const hasRightFeedback = currentState === "Error" || (error && typeof error === "string") || currentState === "Success";

    return (
      <div className={cn("flex flex-col gap-2 w-fit", className)}>
        {label && (
          <label className="text-sm font-bold text-neutral-600 text-left px-1">
            {label}
          </label>
        )}

        <div
          className={cn(
            "relative flex items-center transition-all duration-200 rounded-full overflow-hidden px-6 gap-4",
            sizeConfigs[sizeVariant],
            stateStyles[currentState as keyof typeof stateStyles],
            (currentState === "Hover" || currentState === "Focused") && "border-semantic-border-primary-default"
          )}
          onMouseEnter={() => !disabled && setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {iconLeft && (
            <div className={cn("flex items-center justify-center shrink-0", iconColorStyles[currentState as keyof typeof iconColorStyles])}>
              {iconLeft}
            </div>
          )}

          <input
            type={type}
            className={cn(
              "flex-1 bg-transparent outline-none h-full w-full py-2 placeholder:text-neutral-600 text-neutral-600 font-medium",
              currentState === "Disabled" && "placeholder:text-neutral-600 text-neutral-600"
            )}
            ref={ref}
            disabled={disabled}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            {...props}
          />

          {iconRight ? (
            <div className={cn("flex items-center justify-center shrink-0", iconColorStyles[currentState as keyof typeof iconColorStyles])}>
              {iconRight}
            </div>
          ) : hasRightFeedback ? (
            <div className={cn("flex items-center justify-center shrink-0", iconColorStyles[currentState as keyof typeof iconColorStyles])}>
              {currentState === "Success" ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            </div>
          ) : null}
        </div>

        {(notes || (typeof error === "string")) && (
          <p className={cn(
            "text-xs px-1 text-left",
            error ? "text-semantic-text-error-default" : "text-neutral-600"
          )}>
            {typeof error === "string" ? error : notes}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
