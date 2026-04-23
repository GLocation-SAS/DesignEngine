import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-lg border bg-neutral-white dark:bg-neutral-100 shadow-sm transition-all text-neutral-900 dark:text-neutral-50",
  {
    variants: {
      variant: {
        default: "border-neutral-200 dark:border-neutral-200/40",
        glass: "glass bg-white/40 dark:bg-black/20 backdrop-blur-xl border-white/20 dark:border-white/10 shadow-glow",
        interactive: "border-neutral-200 dark:border-neutral-200/40 hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-2 dark:hover:shadow-primary-900/20 cursor-pointer active:scale-[0.98]",
      },
      padding: {
        none: "p-0",
        sm: "p-2",
        md: "p-4",
        lg: "p-6",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, padding, className }))}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card };
