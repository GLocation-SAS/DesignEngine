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
      headerBg: "bg-[#f3f0ff]",
      iconBg: "bg-[#5a3988]",
      hoverBg: "hover:bg-[#5a3988]",
      borderColor: "border-[#5a3988]",
      shadow: "shadow-[0px_4px_10px_-2px_rgba(90,57,136,0.15),0px_3px_0px_0px_rgba(157,190,255,0.8)]",
      icon: <InfoIcon size={14} className="text-white shrink-0" />,
    },
    Success: {
      headerBg: "bg-[#eafaf6]",
      iconBg: "bg-[#1f7a6b]",
      hoverBg: "hover:bg-[#1f7a6b]",
      borderColor: "border-[#1f7a6b]",
      shadow: "shadow-[0px_4px_10px_-2px_rgba(31,122,107,0.15),0px_3px_0px_0px_rgba(140,190,35,0.6)]",
      icon: <CheckCircle2 size={14} className="text-white shrink-0" />,
    },
    Error: {
      headerBg: "bg-[#fff0f4]",
      iconBg: "bg-[#fa003f]",
      hoverBg: "hover:bg-[#fa003f]",
      borderColor: "border-[#fa003f]",
      shadow: "shadow-[0px_4px_10px_-2px_rgba(250,0,63,0.15),0px_3px_0px_0px_rgba(229,107,115,0.6)]",
      icon: <AlertCircle size={14} className="text-white shrink-0" />,
    },
    Warning: {
      headerBg: "bg-[#fffbeb]",
      iconBg: "bg-[#d97706]",
      hoverBg: "hover:bg-[#d97706]",
      borderColor: "border-[#d97706]",
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
          <span className="text-[14px] font-semibold text-[#141414] leading-[20px] font-['Montserrat']">
            {title}
          </span>
        </div>

        {/* Right side: Time and Close */}
        <div className="flex items-center gap-3">
          <span className="text-[12px] text-[#141414] font-['Montserrat'] leading-[16px]">
            {time}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className={cn(
              "w-6 h-6 p-0 rounded-md transition-all border-none flex items-center justify-center text-[#141414] hover:text-white",
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
        <p className="text-[14px] text-[#141414] leading-[20px] font-['Montserrat'] w-full line-clamp-2">
          {message}
        </p>
      </div>
    </div>
  );
};
