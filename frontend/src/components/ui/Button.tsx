import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:bg-semantic-background-disabled-surface disabled:text-semantic-text-disabled-default disabled:border-transparent active:scale-95",
  {
    variants: {
      variant: {
        primary: "bg-[#5A3988] text-white hover:bg-[#5C3E91] active:bg-[#4A3174] hover:shadow-[inset_0px_2px_13.1px_0px_#B091DB]",
        secondary: "bg-white text-secondary-500 border-2 border-secondary-500 hover:bg-secondary-600 hover:text-white hover:border-transparent hover:shadow-[inset_0px_0px_13.1px_1px_#BFDBFE] active:bg-secondary-700 active:text-white active:border-transparent dark:bg-transparent dark:text-secondary-400 dark:border-secondary-400 dark:hover:bg-secondary-500 dark:active:bg-secondary-600",
        success: "bg-semantic-background-success-default text-white hover:bg-[#19635B] active:bg-[#134C45] hover:shadow-[inset_0px_0px_13.1px_1px_#9FD5CA]",
        error: "bg-semantic-background-error-default text-white hover:bg-[#D10035] active:bg-[#A8002A] hover:shadow-[inset_0px_0px_13.1px_1px_#FFA3BF]",
        info: "bg-semantic-background-info-default text-white hover:bg-[#1D4ED8] active:bg-[#1E40AF] hover:shadow-[inset_0px_0px_13.1px_1px_#BFDBFE]",
        warning: "bg-semantic-background-warning-default text-white hover:bg-[#B45309] active:bg-[#92400E] hover:shadow-[inset_0px_0px_13.1px_0px_#FDE68A]",
        neutral: "bg-white dark:bg-neutral-900 text-[#a3a3a3] border-2 border-[#e8e8e8] hover:bg-[#5b5b5b] hover:text-white hover:border-[#5b5b5b] active:bg-[#383838] active:text-white active:border-[#383838]",
        outline: "border-2 border-primary-500 bg-transparent text-primary-500 hover:bg-primary-50 active:bg-primary-100",
        ghost: "bg-transparent hover:bg-neutral-100 text-neutral-700",
        glass: "glass bg-white/10 backdrop-blur-md border border-white/20 text-neutral-900 hover:bg-white/20 shadow-glow",
      },
      size: {
        default: "h-11 px-4 py-2 gap-2 text-base",
        sm: "h-10 px-3 py-1.5 gap-1.5 text-sm",
        lg: "h-14 px-5 py-2.5 gap-2 text-lg",
        xs: "h-9 px-3 py-1 gap-1.5 text-sm",
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
      { variant: "primary", state: "hover", className: "!bg-[#5C3E91] !shadow-[inset_0px_2px_13.1px_0px_#B091DB]" },
      { variant: "primary", state: "active", className: "!bg-[#4A3174]" },
      // Secondary States
      { variant: "secondary", state: "hover", className: "!bg-secondary-600 !text-white !border-transparent !shadow-[inset_0px_0px_13.1px_1px_#BFDBFE]" },
      { variant: "secondary", state: "active", className: "!bg-secondary-700 !text-white !border-transparent" },
      // Success States
      { variant: "success", state: "hover", className: "!bg-[#19635B] !shadow-[inset_0px_0px_13.1px_1px_#9FD5CA]" },
      { variant: "success", state: "active", className: "!bg-[#134C45]" },
      // Error States
      { variant: "error", state: "hover", className: "!bg-[#D10035] !shadow-[inset_0px_0px_13.1px_1px_#FFA3BF]" },
      { variant: "error", state: "active", className: "!bg-[#A8002A]" },
      // Info States
      { variant: "info", state: "hover", className: "!bg-[#1D4ED8] !shadow-[inset_0px_0px_13.1px_1px_#BFDBFE]" },
      { variant: "info", state: "active", className: "!bg-[#1E40AF]" },
      // Warning States
      { variant: "warning", state: "hover", className: "!bg-[#B45309] !shadow-[inset_0px_0px_13.1px_0px_#FDE68A]" },
      { variant: "warning", state: "active", className: "!bg-[#92400E]" },
      // Neutral States
      { variant: "neutral", state: "hover", className: "!bg-[#5b5b5b] !text-white !border-[#5b5b5b]" },
      { variant: "neutral", state: "active", className: "!bg-[#383838] !text-white !border-[#383838]" },
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
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, state, ...props }, ref) => {
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
