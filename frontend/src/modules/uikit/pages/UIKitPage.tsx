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
import { Input } from "@/components/ui/Input";
import { Sun, Moon, Layout, Palette, Type, Box, Zap, ChevronRight, ChevronLeft, ShoppingBag, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";


const NAV_GROUPS = [
  {
    label: "Core Tokens",
    items: [
      { id: "colors",     label: "Colors",      icon: Palette },
      { id: "typography", label: "Typography",   icon: Type },
      { id: "spacing",    label: "Spacing",      icon: Layout },
      { id: "effects",    label: "Effects",      icon: Zap },
    ],
  },
  {
    label: "Components",
    items: [
      { id: "buttons",       label: "Buttons System",  icon: Box },
      { id: "inputs",        label: "Text Inputs",     icon: Box },
      { id: "search",        label: "Search Input",    icon: Box },
      { id: "dropdowns",     label: "Dropdowns",       icon: Box },
      { id: "badges",        label: "Badges",          icon: Box },
      { id: "modals",        label: "Modals",          icon: Box },
      { id: "notifications", label: "Notifications",   icon: Box },
      { id: "tags",          label: "Tags System",     icon: Box },
      { id: "checkboxes",    label: "Checkboxes",      icon: Box },
      { id: "radio",         label: "Radio Buttons",   icon: Box },
      { id: "toggles",       label: "Toggles",         icon: Box },
      { id: "breadcrumbs",   label: "Breadcrumbs",     icon: Box },
      { id: "pagination",    label: "Pagination",      icon: Box },
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport
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
    <div className="flex min-h-screen bg-neutral-50 dark:bg-neutral-50 transition-colors duration-300">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 bottom-0 w-72 hidden lg:flex flex-col z-30 p-3">
        <div className="flex flex-col h-full bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl">

          {/* Logo / Brand */}
          <div className="flex items-center justify-between px-5 pt-5 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-base tracking-tight">DesignEngine</span>
            </div>
            <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center cursor-pointer hover:bg-neutral-700 transition-colors">
              <ChevronLeft className="w-4 h-4 text-neutral-400" />
            </div>
          </div>

          {/* Search */}
          <div className="px-4 pb-5">
            <div className="flex items-center gap-2 bg-neutral-800 rounded-xl px-4 py-2.5 border border-neutral-700/50">
              <Search className="w-4 h-4 text-neutral-500 shrink-0" />
              <span className="text-sm text-neutral-500 flex-1">Search...</span>
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-neutral-600 bg-neutral-700 px-1.5 py-0.5 rounded font-mono">⌘</span>
                <span className="text-[10px] text-neutral-600 bg-neutral-700 px-1.5 py-0.5 rounded font-mono">F</span>
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex-1 overflow-y-auto">
            {NAV_GROUPS.map((group, gIdx) => (
              <div key={group.label}>
                {/* Separator + group label */}
                {gIdx > 0 && <div className="mx-4 my-3 h-px bg-neutral-800" />}
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 px-5 mb-1 mt-2">
                  {group.label}
                </p>

                {group.items.map(({ id, label, icon: Icon }) => {
                  const isActive = activeSection === id;
                  return (
                    <a
                      key={id}
                      href={`#${id}`}
                      className={cn(
                        "relative flex items-center gap-3 mx-2 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 group",
                        isActive ? "text-white" : "text-neutral-400 hover:text-white"
                      )}
                    >
                      {/* Active gradient bg */}
                      {isActive && (
                        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-600/80 to-primary-800/20" />
                      )}
                      {/* Hover bg */}
                      {!isActive && (
                        <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-neutral-800 transition-opacity duration-200" />
                      )}
                      {/* Right accent */}
                      {isActive && (
                        <span className="absolute right-0 top-2 bottom-2 w-[3px] rounded-l-full bg-primary-400" />
                      )}

                      <Icon className={cn(
                        "w-4 h-4 shrink-0 relative z-10",
                        isActive ? "text-white" : "text-neutral-500 group-hover:text-neutral-300"
                      )} />
                      <span className={cn(
                        "relative z-10 font-medium",
                        isActive ? "font-semibold" : ""
                      )}>{label}</span>
                    </a>
                  );
                })}
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="px-4 py-4 mt-2 border-t border-neutral-800">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all group"
            >
              {theme === "dark"
                ? <Sun className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300" />
                : <Moon className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300" />}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 p-8 md:p-12 lg:p-16 space-y-32 pt-8 scroll-smooth">
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

