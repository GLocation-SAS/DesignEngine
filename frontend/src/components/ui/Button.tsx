import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:bg-semantic-background-disabled-surface disabled:text-semantic-text-disabled-default disabled:border-transparent active:scale-95 w-full",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-600 active:bg-primary-700 hover:shadow-[inset_0px_2px_13.1px_0px_#B091DB]",
        secondary: "bg-white text-secondary-500 border-2 border-secondary-500 hover:bg-secondary-600 hover:text-white hover:border-transparent hover:shadow-[inset_0px_0px_13.1px_1px_#BFDBFE] active:bg-secondary-700 active:text-white active:border-transparent dark:bg-transparent dark:text-secondary-400 dark:border-secondary-400 dark:hover:bg-secondary-500 dark:active:bg-secondary-600",
        success: "bg-semantic-background-success-default text-white hover:bg-success-600 active:bg-success-700 hover:shadow-[inset_0px_0px_13.1px_1px_#9FD5CA]",
        error: "bg-semantic-background-error-default text-white hover:bg-error-600 active:bg-error-700 hover:shadow-[inset_0px_0px_13.1px_1px_#FFA3BF]",
        info: "bg-semantic-background-info-default text-white hover:bg-info-600 active:bg-info-700 hover:shadow-[inset_0px_0px_13.1px_1px_#BFDBFE]",
        warning: "bg-semantic-background-warning-default text-white hover:bg-warning-700 active:bg-warning-800 hover:shadow-[inset_0px_0px_13.1px_0px_#FDE68A]",
        neutral: "bg-semantic-background-neutral-surface text-semantic-text-disabled-default border-2 border-semantic-background-neutral-muted hover:bg-semantic-background-neutral-hover hover:text-semantic-text-on-color hover:border-semantic-background-neutral-hover active:bg-semantic-background-neutral-Pressed active:text-semantic-text-on-color active:border-semantic-background-neutral-Pressed",
        outline: "border-2 border-primary-500 bg-transparent text-primary-500 hover:bg-primary-50 active:bg-primary-100",
        ghost: "bg-transparent hover:scale-110",
        glass: "glass bg-white/10 backdrop-blur-md border border-white/20 text-neutral-900 hover:bg-white/20 shadow-glow",
      },
      size: {
        default: "h-[44px] px-5 py-2.5 gap-2 text-base",
        sm: "h-[40px] px-5 py-2.5 gap-2 text-sm",
        lg: "h-[56px] px-6 py-3 gap-2 text-lg",
        xs: "h-[36px] px-4 py-2 gap-2 text-sm",
        icon: "h-10 w-10",
      },
      state: {
        default: "",
        hover: "",
        active: "",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    compoundVariants: [
      // Primary States
      { variant: "primary", state: "hover", className: "!bg-primary-600 !shadow-[inset_0px_2px_13.1px_0px_#B091DB]" },
      { variant: "primary", state: "active", className: "!bg-primary-700" },
      // Secondary States
      { variant: "secondary", state: "hover", className: "!bg-secondary-600 !text-white !border-transparent !shadow-[inset_0px_0px_13.1px_1px_#BFDBFE]" },
      { variant: "secondary", state: "active", className: "!bg-secondary-700 !text-white !border-transparent" },
      // Success States
      { variant: "success", state: "hover", className: "!bg-success-600 !shadow-[inset_0px_0px_13.1px_1px_#9FD5CA]" },
      { variant: "success", state: "active", className: "!bg-success-700" },
      // Error States
      { variant: "error", state: "hover", className: "!bg-error-600 !shadow-[inset_0px_0px_13.1px_1px_#FFA3BF]" },
      { variant: "error", state: "active", className: "!bg-error-700" },
      // Info States
      { variant: "info", state: "hover", className: "!bg-info-600 !shadow-[inset_0px_0px_13.1px_1px_#BFDBFE]" },
      { variant: "info", state: "active", className: "!bg-info-700" },
      // Warning States
      { variant: "warning", state: "hover", className: "!bg-warning-700 !shadow-[inset_0px_0px_13.1px_0px_#FDE68A]" },
      { variant: "warning", state: "active", className: "!bg-warning-700" },
      // Neutral States
      { variant: "neutral", state: "hover", className: "!bg-semantic-background-neutral-hover !text-semantic-text-on-color !border-semantic-background-neutral-hover" },
      { variant: "neutral", state: "active", className: "!bg-semantic-background-neutral-Pressed !text-semantic-text-on-color !border-semantic-background-neutral-Pressed" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "default",
      state: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, state, fullWidth, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, state, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
