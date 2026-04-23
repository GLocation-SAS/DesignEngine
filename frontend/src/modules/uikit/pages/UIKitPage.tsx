"use client";

import React, { useState, useEffect } from "react";
import { ColorsSection } from "../components/ColorsSection";
import { TypographySection } from "../components/TypographySection";
import { SpacingSection } from "../components/SpacingSection";
import { ComponentsSection } from "../components/ComponentsSection";

import { EffectsSection } from "../components/EffectsSection";
import { ResourcesSection } from "../components/ResourcesSection";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/Button";
import { Sun, Moon, Layout, Palette, Type, Box, Zap, ChevronRight, ChevronLeft, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";


const sections = [
  { id: "colors", label: "Colors", icon: Palette },
  { id: "typography", label: "Typography", icon: Type },
  { id: "spacing", label: "Spacing", icon: Layout },
  {
    id: "components",
    label: "Components",
    icon: Box,
    subItems: [
      { id: "buttons", label: "Buttons System" },
      { id: "inputs", label: "Inputs System" },
      { id: "search", label: "Search Input" },
      { id: "dropdowns", label: "Dropdowns" },
      { id: "badges", label: "Badges" },
      { id: "modals", label: "Modals" },
      { id: "notifications", label: "Notifications" },
      { id: "tags", label: "Tags System" },
      { id: "checkboxes", label: "Checkboxes" },
      { id: "radio", label: "Radio Buttons" },
      { id: "toggles", label: "Toggles / Switches" },
      { id: "breadcrumbs", label: "Breadcrumbs" },
      { id: "pagination", label: "Pagination" },
    ]
  },
  { id: "effects", label: "Effects", icon: Zap },
  { id: "resources", label: "Resources", icon: ShoppingBag },
];

export default function UIKitPage() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("colors");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-10% 0% -70% 0%" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
      section.subItems?.forEach((sub) => {
        const subElement = document.getElementById(sub.id);
        if (subElement) observer.observe(subElement);
      });
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen bg-neutral-50 dark:bg-neutral-50 transition-colors duration-300">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-16 bottom-0 w-64 border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-50 hidden lg:flex flex-col p-6 z-20 overflow-y-auto">
        <div className="space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4 px-2">Design System</p>
          <div className="space-y-1">
            {sections.map((section) => (
              <div key={section.id} className="space-y-1">
                <a
                  href={`#${section.id}`}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all group",
                    (activeSection === section.id || section.subItems?.some(s => s.id === activeSection))
                      ? "bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400"
                      : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  )}
                >
                  <section.icon className={cn(
                    "w-4 h-4",
                    (activeSection === section.id || section.subItems?.some(s => s.id === activeSection)) ? "text-primary-500" : "text-neutral-400 group-hover:text-neutral-600"
                  )} />
                  {section.label}
                  {activeSection === section.id && !section.subItems && <ChevronRight className="ml-auto w-4 h-4" />}
                </a>

                {/* Nested SubItems */}
                {section.subItems && (
                  <div className="pl-6 space-y-1 mt-1">
                    {section.subItems.map((sub) => (
                      <a
                        key={sub.id}
                        href={`#${sub.id}`}
                        className={cn(
                          "block px-3 py-1.5 rounded-md text-xs font-medium transition-all",
                          activeSection === sub.id
                            ? "text-primary-600 font-bold dark:text-primary-400"
                            : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                        )}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-neutral-100 dark:border-neutral-800">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-3"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 p-8 md:p-12 lg:p-16 space-y-32">
        <header className="space-y-4">
          <Badge variant="outline">UI Kit v1.0</Badge>
          <h1 className="text-5xl font-black tracking-tighter text-primary-500 leading-tight">
            Design Engine <span className="gradient-text">Core System</span>
          </h1>
          <p className="text-xl text-neutral-500 max-w-2xl leading-relaxed">
            The definitive reference for all visual elements, components, and design patterns used in the DesignEngine ecosystem.
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

