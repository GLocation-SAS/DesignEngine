import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:bg-neutral-200 disabled:text-neutral-400 active:scale-95",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-neutral-white hover:bg-primary-600 active:bg-primary-700",
        secondary: "bg-secondary-500 text-neutral-white hover:bg-secondary-600 active:bg-secondary-700",
        success: "bg-success-500 text-neutral-white hover:bg-success-600 active:bg-success-700",
        error: "bg-error-500 text-neutral-white hover:bg-error-600 active:bg-error-700",
        info: "bg-info-500 text-neutral-white hover:bg-info-600 active:bg-info-700",
        warning: "bg-warning-500 text-neutral-white hover:bg-warning-600 active:bg-warning-700",
        outline: "border-2 border-primary-500 bg-transparent text-primary-500 hover:bg-primary-50 active:bg-primary-100",
        ghost: "bg-transparent hover:bg-neutral-100 text-neutral-700",
        glass: "glass bg-white/10 backdrop-blur-md border border-white/20 text-neutral-900 hover:bg-white/20 shadow-glow",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8 text-base",
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
