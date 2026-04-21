"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type CardVariant = "default" | "glass" | "outlined" | "elevated";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hoverable?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const variantClasses: Record<CardVariant, string> = {
  default:
    "bg-white border border-surface-200 dark:bg-surface-900 dark:border-surface-800",
  glass:
    "glass",
  outlined:
    "border-2 border-surface-200 dark:border-surface-700 bg-transparent",
  elevated:
    "bg-white shadow-glass dark:bg-surface-900 border border-surface-100 dark:border-surface-800",
};

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      hoverable = false,
      padding = "md",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl transition-all duration-200",
          variantClasses[variant],
          paddingClasses[padding],
          hoverable &&
            "hover:shadow-glass-lg hover:-translate-y-0.5 cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
export type { CardProps, CardVariant };
