"use client";

import React, { useState, useEffect } from "react";
import { ColorsSection } from "../components/ColorsSection";
import { TypographySection } from "../components/TypographySection";
import { SpacingSection } from "../components/SpacingSection";
import { ComponentsSection } from "../components/ComponentsSection";
import { EffectsSection } from "../components/EffectsSection";
import { ResourcesSection } from "../components/ResourcesSection";
import { useTheme } from "@/context/ThemeContext";
import { useSidebar } from "@/context/SidebarContext";
import { Sun, Moon, Layout, Palette, Type, Box, Zap, ChevronRight, ChevronLeft, ShoppingBag, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge, ThemeToggle } from "@/components/ui";
import { Sidebar } from "@/components/layout/Sidebar";

// Flat list of all observable IDs for scroll-spy
const ALL_IDS = [
  "colors", "typography", "spacing", "effects", 
  "buttons", "inputs", "textareas", "search", "dropdowns", 
  "badges", "modals", "dialog-modals", "notifications", 
  "tags", "checkboxes", "radio", "toggles", 
  "breadcrumbs", "pagination", "tabs", "avatars", 
  "tables", "tooltips", "toasts", "cards", 
  "resources"
];

export default function UIKitPage() {
  const { theme } = useTheme();
  const { isCollapsed: sidebarCollapsed, toggleSidebar } = useSidebar();
  const [activeSection, setActiveSection] = useState("colors");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: 0.1, rootMargin: "-10% 0% -60% 0%" }
    );

    ALL_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  return (
    <div className={cn("flex min-h-screen transition-colors duration-300 font-nunito", theme === "dark" ? "bg-neutral-950" : "bg-neutral-50")}>
      {/* Sidebar Navigation */}
      <Sidebar
        activeId={activeSection}
        collapsed={sidebarCollapsed}
        onToggle={toggleSidebar}
      />

      {/* Main Content */}
      <main className={cn(
        "flex-1 transition-all duration-300 pt-14 lg:pt-0",
        sidebarCollapsed ? "lg:ml-[96px]" : "lg:ml-[264px]"
      )}>
        <div className="flex flex-col gap-12 p-8 md:p-12 lg:p-16 min-h-screen max-w-[1700px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
          <header className="space-y-4">
            <h1 className="text-5xl font-black tracking-tighter text-neutral-900 dark:text-white leading-tight font-montserrat">
              Design Engine <span className="gradient-text">UI KIT</span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed font-medium">
              La referencia definitiva para todos los elementos visuales, componentes y patrones de diseño utilizados en el ecosistema.
            </p>
          </header>

          <div className="space-y-32">
            <ColorsSection />
            <TypographySection />
            <SpacingSection />
            <ComponentsSection />
            <EffectsSection />
            <ResourcesSection />
          </div>

          <footer className="pt-20 pb-8 border-t border-neutral-200 dark:border-neutral-800 text-center">
            <p className="text-sm text-neutral-400">
              &copy; {new Date().getFullYear()} DesignEngine System. Built with Antigravity.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
