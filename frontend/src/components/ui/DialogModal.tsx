import * as React from "react";
import { Modal, ModalProps } from "./Modal";
import { cn } from "@/lib/utils";

interface DialogModalProps extends Omit<ModalProps, "state" | "description" | "sizeVariant"> {
  footer?: React.ReactNode;
  sizeVariant?: "L" | "M" | "S" | "XL";
}

export const DialogModal = ({
  title,
  children,
  footer,
  className,
  sizeVariant = "L",
  ...props
}: DialogModalProps) => {
  // Size overrides for DialogModal as per requirements
  const sizeClasses = {
    S: "!max-w-[560px] !min-h-0",
    M: "!max-w-[590px] !min-h-0",
    L: "!max-w-[650px] !min-h-0",
    XL: "!max-w-[760px] !min-h-0",
  };

  const currentSizeClass = sizeClasses[sizeVariant];

  return (
    <Modal
      title={title}
      sizeVariant={sizeVariant === "XL" ? "L" : sizeVariant}
      className={cn("!justify-start", currentSizeClass, className)}
      {...props}
    >

      <div className="flex flex-col w-full">
        {/* Body */}
        <div className="w-full ">
          {children}
        </div>

        {/* Footer Slot (if provided) */}
        {footer && (
          <div className={cn(
            "mt-10 pt-6 border-t border-neutral-100 flex items-center w-full",
            sizeVariant === "S" ? "flex-col gap-4" : "flex-row justify-end gap-4"
          )}>
            {footer}
          </div>
        )}
      </div>
    </Modal>
  );
};

