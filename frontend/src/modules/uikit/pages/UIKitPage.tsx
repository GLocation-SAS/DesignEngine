"use client";

import React, { useState, useEffect } from "react";
import { ColorsSection } from "../components/ColorsSection";
import { TypographySection } from "../components/TypographySection";
import { SpacingSection } from "../components/SpacingSection";
import { ComponentsSection } from "../components/ComponentsSection";

import { EffectsSection } from "../components/EffectsSection";
import { ResourcesSection } from "../components/ResourcesSection";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Layout, Palette, Type, Box, Zap, ChevronRight, ChevronLeft, ShoppingBag, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Sidebar } from "@/components/layout/Sidebar";


const NAV_GROUPS = [
  {
    label: "Core Tokens",
    items: [
      { id: "colors", label: "Colors", icon: Palette },
      { id: "typography", label: "Typography", icon: Type },
      { id: "spacing", label: "Spacing", icon: Layout },
      { id: "effects", label: "Effects", icon: Zap },
    ],
  },
  {
    label: "Components",
    items: [
      { id: "buttons", label: "Buttons System", icon: Box },
      { id: "inputs", label: "Text Inputs", icon: Box },
      { id: "search", label: "Search Input", icon: Box },
      { id: "dropdowns", label: "Dropdowns", icon: Box },
      { id: "badges", label: "Badges", icon: Box },
      { id: "modals", label: "Modals", icon: Box },
      { id: "dialog-modals", label: "Dialog Modals", icon: Box },
      { id: "notifications", label: "Notifications", icon: Box },
      { id: "tags", label: "Tags System", icon: Box },
      { id: "checkboxes", label: "Checkboxes", icon: Box },
      { id: "radio", label: "Radio Buttons", icon: Box },
      { id: "toggles", label: "Toggles", icon: Box },
      { id: "breadcrumbs", label: "Breadcrumbs", icon: Box },
      { id: "pagination", label: "Pagination", icon: Box },
      { id: "tabs", label: "Tabs", icon: Box },
      { id: "avatars", label: "Avatars", icon: Box },
      { id: "tables", label: "Tables", icon: Box },
    ],
  },
  {
    label: "Assets",
    items: [
      { id: "resources", label: "Resources", icon: ShoppingBag },
    ],
  },
];

// Flat list of all observable IDs
const ALL_IDS = NAV_GROUPS.flatMap((g) => g.items.map((i) => i.id));

export default function UIKitPage() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("colors");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Final grouped structure for the Sidebar
  const sidebarGroups = [
    {
      label: "Core Tokens",
      icon: Palette,
      items: NAV_GROUPS[0].items.map(item => ({
        id: item.id,
        label: item.label,
        href: `#${item.id}`,
        icon: item.icon
      }))
    },
    {
      label: "Components",
      icon: Box,
      items: NAV_GROUPS[1].items.map(item => ({
        id: item.id,
        label: item.label,
        href: `#${item.id}`,
        icon: item.icon
      }))
    },
    {
      label: "Assets",
      icon: ShoppingBag,
      items: NAV_GROUPS[2].items.map(item => ({
        id: item.id,
        label: item.label,
        href: `#${item.id}`,
        icon: item.icon
      }))
    }
  ];

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
    <div className="flex min-h-screen bg-neutral-50 transition-colors duration-300">
      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-0 bottom-0 z-30 hidden lg:block">
        <Sidebar
          groups={sidebarGroups}
          activeId={activeSection}
          collapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          footer={
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-200/50 transition-all group",
                isSidebarCollapsed && "justify-center"
              )}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-neutral-900" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-900" />
              )}
              {!isSidebarCollapsed && (theme === "dark" ? "Light Mode" : "Dark Mode")}
            </button>
          }
        />
      </div>

      {/* Main Content */}
      <main className={cn(
        "flex-1 p-8 md:p-12 lg:p-16 space-y-24 pt-8 scroll-smooth transition-all duration-300",
        isSidebarCollapsed ? "lg:ml-[68px]" : "lg:ml-64"
      )}>
        <header className="space-y-4">
          <Badge variant="outline">UI Kit v1.0</Badge>
          <h1 className="text-5xl font-black tracking-tighter text-primary-500 leading-tight">
            Design Engine <span className="gradient-text">Core System</span>
          </h1>
          <p className="text-xl text-neutral-900 max-w-2xl leading-relaxed">
            La referencia definitiva para todos los elementos visuales, componentes y patrones de diseño utilizados en el ecosistema DesignEngine.
          </p>
        </header>



        <ColorsSection />
        <TypographySection />
        <SpacingSection />
        <ComponentsSection />
        <EffectsSection />
        <ResourcesSection />

        <footer className="pt-20 pb-8 border-t border-neutral-200 dark:border-neutral-800 text-center">
          <p className="text-sm text-neutral-400">
            &copy; {new Date().getFullYear()} DesignEngine System. Built with Antigravity.
          </p>
        </footer>
      </main>
    </div>
  );
}

