import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, AlertCircle, X, CheckCircle2 } from "lucide-react";

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  label?: string;
  notes?: string;
  hint?: string;
  iconLeft?: React.ReactNode;
  options?: DropdownOption[];
  value?: string;
  placeholder?: string;
  sizeVariant?: "L" | "M" | "S" | "XS";
  currentState?: "Default" | "Hover" | "Active" | "Active Hover" | "Active Selected" | "Collapsed" | "Disabled" | "Error Filled" | "Error Filled Hover" | "Success";
  hoveredOptionValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      className,
      label,
      notes,
      hint,
      iconLeft,
      options = [
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" },
        { label: "Option 4", value: "4" },
        { label: "Option 5", value: "5" },
      ],
      value,
      placeholder = "Seleccionar...",
      sizeVariant = "L",
      currentState = "Default",
      hoveredOptionValue,
      onChange,
      disabled,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(currentState.includes("Active"));
    const [selectedValue, setSelectedValue] = React.useState(value);
    const [isHovered, setIsHovered] = React.useState(false);
    
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      setIsOpen(currentState.includes("Active"));
    }, [currentState]);

    React.useEffect(() => {
      if (value !== undefined) setSelectedValue(value);
    }, [value]);

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          if (!currentState.includes("Active")) {
            setIsOpen(false);
          }
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [currentState]);

    const isActive = isOpen || currentState.includes("Active");
    const isError = currentState.includes("Error");
    const isSuccess = currentState === "Success";

    const effectiveState = React.useMemo(() => {
      if (disabled || currentState === "Disabled") return "Disabled";
      if (isActive) {
        if (selectedValue || currentState === "Active Selected") return "Active Selected";
        return isHovered ? "Active Hover" : "Active";
      }
      if (isError) return isHovered ? "Error Filled Hover" : "Error Filled";
      if (isSuccess) return "Success";
      if (selectedValue || currentState?.includes("Collapsed")) return isHovered ? "Collapsed Hover" : "Collapsed";
      return isHovered ? "Hover" : "Default";
    }, [disabled, currentState, isError, isSuccess, isActive, isHovered, selectedValue]);

    const displayValue = React.useMemo(() => {
      const currentVal = selectedValue || value;
      if (currentVal) {
        return options.find(opt => opt.value === currentVal)?.label || currentVal;
      }
      return placeholder;
    }, [selectedValue, value, options, placeholder]);

    const sizeConfigs = {
      L: "h-[65px] text-base",
      M: "h-[54px] text-sm",
      S: "h-[44px] text-sm",
      XS: "h-[40px] text-xs",
    };

    const stateStyles = {
      "Default": "bg-white border-[#E8E8E8] border-[2.5px] text-[#141414]",
      "Hover": "bg-white border-primary-default border-[2.5px] text-[#141414]",
      "Active": "bg-white border-[#5a3988] border-[2.5px] text-[#141414] shadow-[inset_0_0_13.1px_0_#CBB8E8]",
      "Active Hover": "bg-white border-[#5a3988] border-[2.5px] text-[#141414] shadow-[inset_0_0_13.1px_0_#CBB8E8]",
      "Active Selected": "bg-white border-[#5a3988] border-[2.5px] text-[#141414] shadow-[inset_0_0_13.1px_0_#CBB8E8]",
      "Collapsed": "bg-white border-[#4a3174] border-[2.5px] text-[#141414]",
      "Disabled": "bg-neutral-100 border-transparent border-[2.5px] text-neutral-400 cursor-not-allowed opacity-100",
      "Error Filled": "bg-white border-[#FA003F] border-2 text-[#141414] shadow-[inset_0_0_13.1px_1px_#FFA3BF]",
      "Error Filled Hover": "bg-white border-[#FA003F] border-2 text-[#141414] shadow-[inset_0_0_13.1px_0_#FFA3BF]",
      "Success": "bg-white border-success-500 border-[2.5px] text-[#141414] shadow-[inset_0_0_13.1px_1px_#9FD5CA]",
    };

    const iconColorStyles = {
      "Default": "text-neutral-600",
      "Hover": "text-primary-600",
      "Active": "text-primary-500",
      "Active Hover": "text-primary-500",
      "Active Selected": "text-primary-500",
      "Collapsed": "text-primary-700",
      "Disabled": "text-neutral-400",
      "Error Filled": "text-error-600",
      "Error Filled Hover": "text-error-600",
      "Success": "text-success-500",
    };

    const handleToggle = () => {
      if (effectiveState === "Disabled") return;
      setIsOpen(!isOpen);
    };

    const handleSelect = (val: string) => {
      setSelectedValue(val);
      setIsOpen(false);
      onChange?.(val);
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      setSelectedValue(undefined);
      onChange?.("");
    };

    return (
      <div
        className={cn(
          "flex flex-col gap-2 relative w-full",
          className
        )}
        ref={(node) => {
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
          containerRef.current = node;
        }}
        {...props}
      >
        {label && (
          <label className="text-sm font-bold text-neutral-900 dark:text-neutral-100 text-left px-1">
            {label}
          </label>
        )}

        <div
          onClick={handleToggle}
          onMouseEnter={() => !disabled && setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
            "flex items-center transition-all duration-200 rounded-full cursor-pointer px-6 gap-4",
            sizeConfigs[sizeVariant as keyof typeof sizeConfigs],
            stateStyles[effectiveState as keyof typeof stateStyles] || stateStyles["Default"]
          )}
        >
          {iconLeft && (
            <div className={cn("flex items-center justify-center shrink-0", iconColorStyles[effectiveState as keyof typeof iconColorStyles])}>
              {iconLeft}
            </div>
          )}

          {isActive && !selectedValue && effectiveState !== "Active Selected" && (
            <span className="animate-pulse absolute left-6 text-[#141414]">|</span>
          )}

          <span
            className={cn(
              "flex-1 text-left font-medium outline-none truncate select-none",
              effectiveState === "Disabled" ? "text-neutral-400" : "text-[#141414] dark:text-neutral-100",
              isActive && !selectedValue && effectiveState !== "Active Selected" && "opacity-0" 
            )}
          >
            {displayValue}
          </span>

          <div className={cn(
            "flex items-center gap-[5px] shrink-0 transition-colors",
            iconColorStyles[effectiveState as keyof typeof iconColorStyles] || iconColorStyles["Default"]
          )}>
            
            {/* Clear Button (X) */}
            {(selectedValue || currentState === "Active Selected" || currentState?.includes("Collapsed")) && !isError && !isSuccess && (
               <>
                 <X 
                   className="w-[18px] h-[18px] cursor-pointer hover:opacity-70 transition-opacity" 
                   onClick={handleClear} 
                 />
                 <div className="w-[1.5px] h-[14px] bg-current rounded-full opacity-30" />
               </>
            )}

            {isError && (
               <>
                 <AlertCircle className="w-5 h-5" />
                 <div className="w-[2px] h-[14px] bg-current rounded-full mx-1" />
               </>
            )}

            {isSuccess && (
               <>
                 <CheckCircle2 className="w-5 h-5" />
                 <div className="w-[2px] h-[14px] bg-current rounded-full mx-1" />
               </>
            )}

            {/* Chevron Icon */}
            <div className="flex items-center justify-center transition-transform duration-200">
              {isActive ? (
                <ChevronUp className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </div>
          </div>
        </div>

        {notes && (
          <p className="text-xs px-1 text-left text-neutral-500">
            {notes}
          </p>
        )}

        {isActive && (
          <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border-[2.5px] border-[#5a3988] rounded-[8px] z-[60] overflow-hidden p-0 shadow-2xl">
            <div className="flex flex-col max-h-[240px] overflow-y-auto">
              {options.map((opt) => {
                const isForceHovered = effectiveState === "Active Hover" && opt.value === hoveredOptionValue;
                const isSelected = selectedValue === opt.value;
                
                return (
                  <div
                    key={opt.value}
                    className={cn(
                      "w-full px-[16px] py-[12px] flex items-center justify-start cursor-pointer transition-colors duration-150",
                      isSelected
                        ? "bg-[#5a3988] text-white"
                        : isForceHovered
                        ? "bg-[#e6dff5] text-[#5a3988]"
                        : "bg-transparent text-[#141414] hover:bg-[#e6dff5] hover:text-[#5a3988]"
                    )}
                    onClick={() => handleSelect(opt.value)}
                  >
                    <span className="font-medium text-[14px] leading-5">{opt.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";
