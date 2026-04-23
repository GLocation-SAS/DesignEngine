import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:bg-semantic-background-disabled-surface disabled:text-semantic-text-disabled-default disabled:border-transparent active:scale-95",
  {
    variants: {
      variant: {
        primary: "bg-semantic-background-primary-default text-semantic-text-on-color hover:bg-semantic-background-primary-hover active:bg-semantic-background-primary-pressed hover:shadow-[inset_0px_2px_13.1px_0px_var(--color-primary-300)]",
        secondary: "bg-white dark:bg-neutral-900 text-semantic-background-secondary-default border-2 border-semantic-background-secondary-default hover:bg-semantic-background-secondary-hover hover:text-white hover:border-semantic-background-secondary-hover hover:shadow-[inset_0px_0px_13.1px_0px_theme(colors.info.200)] active:bg-semantic-background-secondary-pressed active:text-white active:border-semantic-background-secondary-pressed",
        success: "bg-semantic-background-success-default text-white hover:bg-semantic-background-success-hover active:bg-semantic-background-success-pressed hover:shadow-[inset_0px_0px_13.1px_1px_theme(colors.success.200)]",
        error: "bg-semantic-background-error-default text-white hover:bg-semantic-background-error-hover active:bg-semantic-background-error-pressed hover:shadow-[inset_0px_0px_13.1px_1px_theme(colors.error.200)]",
        info: "bg-semantic-background-info-default text-white hover:bg-semantic-background-info-hover active:bg-semantic-background-info-pressed hover:shadow-[inset_0px_0px_13.1px_1px_theme(colors.info.200)]",
        warning: "bg-semantic-background-warning-default text-white hover:bg-semantic-background-warning-hover active:bg-semantic-background-warning-pressed hover:shadow-[inset_0px_0px_13.1px_0px_theme(colors.warning.200)]",
        neutral: "bg-white dark:bg-neutral-900 text-semantic-text-disabled-default border-2 border-neutral-100 hover:bg-semantic-background-neutral-hover hover:text-white hover:border-semantic-background-neutral-hover active:bg-semantic-background-neutral-Pressed active:text-white active:border-semantic-background-neutral-Pressed",
        outline: "border-2 border-primary-500 bg-transparent text-primary-500 hover:bg-primary-50 active:bg-primary-100",
        ghost: "bg-transparent hover:bg-neutral-100 text-neutral-700",
        glass: "glass bg-white/10 backdrop-blur-md border border-white/20 text-neutral-900 hover:bg-white/20 shadow-glow",
      },
      size: {
        default: "h-11 px-4 py-2 gap-2 text-base",
        sm: "h-10 px-3 py-1.5 gap-1.5 text-sm",
        lg: "h-14 px-5 py-2.5 gap-2 text-base",
        xs: "h-9 px-3 py-1 gap-1.5 text-sm",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
