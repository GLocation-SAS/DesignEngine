import * as React from "react";
import { cn } from "@/lib/utils";
import { X, AlertCircle, CheckCircle2, AlertTriangle, Info as InfoIcon } from "lucide-react";
import { Button } from "./Button";

export interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: "Info" | "Success" | "Error" | "Warning";
  title: string;
  message: string;
  time?: string;
  onClose?: () => void;
}

export const Notification = ({
  className,
  state = "Info",
  title,
  message,
  time = "Hace x segundos",
  onClose,
  ...props
}: NotificationProps) => {
  const configs = {
    Info: {
      headerBg: "bg-primary-50",
      iconBg: "bg-primary-500",
      hoverBg: "hover:bg-primary-500",
      borderColor: "border-primary-500",
      shadow: "shadow-[0px_4px_10px_-2px_rgba(90,57,136,0.15),0px_3px_0px_0px_rgba(157,190,255,0.8)]",
      icon: <InfoIcon size={14} className="text-white shrink-0" />,
    },
    Success: {
      headerBg: "bg-success-50",
      iconBg: "bg-success-500",
      hoverBg: "hover:bg-success-500",
      borderColor: "border-success-500",
      shadow: "shadow-[0px_4px_10px_-2px_rgba(31,122,107,0.15),0px_3px_0px_0px_rgba(140,190,35,0.6)]",
      icon: <CheckCircle2 size={14} className="text-white shrink-0" />,
    },
    Error: {
      headerBg: "bg-error-50",
      iconBg: "bg-error-500",
      hoverBg: "hover:bg-error-500",
      borderColor: "border-error-500",
      shadow: "shadow-[0px_4px_10px_-2px_rgba(250,0,63,0.15),0px_3px_0px_0px_rgba(229,107,115,0.6)]",
      icon: <AlertCircle size={14} className="text-white shrink-0" />,
    },
    Warning: {
      headerBg: "bg-warning-50",
      iconBg: "bg-warning-500",
      hoverBg: "hover:bg-warning-500",
      borderColor: "border-warning-500",
      shadow: "shadow-[0px_4px_10px_-2px_rgba(217,119,6,0.15),0px_3px_0px_0px_rgba(253,170,41,0.6)]",
      icon: <AlertTriangle size={14} className="text-white shrink-0" />,
    },
  };

  const config = configs[state];

  return (
    <div
      className={cn(
        "w-[384px] h-[121px] flex flex-col relative rounded-[8px] overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Header */}
      <div className={cn(
        "flex items-center justify-between px-4 h-[49px] border-t border-l border-r rounded-t-[8px] shrink-0",
        config.headerBg,
        config.borderColor
      )}>
        <div className="flex items-center gap-3">
          {/* Icon Circle */}
          <div className={cn(
            "w-6 h-6 rounded-full flex items-center justify-center shrink-0 shadow-sm",
            config.iconBg
          )}>
            {config.icon}
          </div>
          {/* Title */}
          <span className="text-[14px] font-semibold text-neutral-900 leading-[20px]">
            {title}
          </span>
        </div>

        {/* Right side: Time and Close */}
        <div className="flex items-center gap-3">
          <span className="text-[12px] text-neutral-900 leading-[16px]">
            {time}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className={cn(
              "w-6 h-6 p-0 rounded-md transition-all border-none flex items-center justify-center text-neutral-900 hover:text-white",
              config.hoverBg
            )}
          >
            <X size={14} />
          </Button>
        </div>
      </div>

      {/* Body */}
      <div className={cn(
        "bg-white px-4 h-[72px] border-b border-l border-r rounded-b-[8px] flex items-center shrink-0",
        config.borderColor,
        config.shadow
      )}>
        <p className="text-[14px] text-neutral-900 leading-[20px]  w-full line-clamp-2">
          {message}
        </p>
      </div>
    </div>
  );
};
