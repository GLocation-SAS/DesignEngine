"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={cn(
      "relative flex h-11 w-full items-center rounded-full transition-all duration-300 p-1.5",
      "bg-neutral-100 dark:bg-neutral-100",
      className
    )}>
      {/* Sliding Indicator */}
      <div 
        className={cn(
          "absolute h-8 w-[calc(50%-6px)] rounded-full transition-all duration-300 ease-in-out shadow-sm bg-primary-500",
          !mounted ? "left-1.5 opacity-0" : (theme === "dark" ? "left-[calc(50%)]" : "left-1.5")
        )}
      />

      {/* Buttons */}
      <button
        onClick={() => setTheme("light")}
        className={cn(
          "relative z-10 flex flex-1 items-center justify-center transition-all duration-300",
          mounted && theme === "light" ? "text-white" : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-700"
        )}
        aria-label="Light mode"
      >
        <Sun className={cn("h-4 w-4 transition-transform", mounted && theme === "light" && "scale-110")} />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={cn(
          "relative z-10 flex flex-1 items-center justify-center transition-all duration-300",
          mounted && theme === "dark" ? "text-white" : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-700"
        )}
        aria-label="Dark mode"
      >
        <Moon className={cn("h-4 w-4 transition-transform", mounted && theme === "dark" && "scale-110")} />
      </button>
    </div>
  );
}
