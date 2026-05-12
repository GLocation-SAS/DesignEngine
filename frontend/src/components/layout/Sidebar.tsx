"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  LayoutGrid,
  Palette,
  User,
  PanelLeftClose,
  PanelLeftOpen,
  Type,
  Box,
  Zap,
  ShoppingBag,
  Users,
  LayoutDashboard,
  Sun,
  Moon,
  Menu,
  X,
  LogOut,
  MousePointer2,
  Search,
  ChevronRight,
  Shield,
  Bell,
  CheckSquare,
  CircleDot,
  ToggleLeft,
  MoreHorizontal,
  Table as TableIcon,
  MessageSquare,
  CreditCard,
  Layers,
  Component,
  UserCircle,
  Settings,
  ShieldCheck,
  FileText,
  Hash,
  Sparkles,
  Maximize2,
  Monitor
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Avatar, ThemeToggle, Tooltip } from "@/components/ui";

interface SidebarItem {
  id?: string;
  label: string;
  href: string;
  icon?: React.ElementType;
}

interface SidebarGroup {
  label: string;
  icon?: React.ElementType;
  items: SidebarItem[];
  initiallyOpen?: boolean;
}

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
  activeId?: string;
  footer?: React.ReactNode;
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
}

const menusBySection: Record<string, SidebarGroup[]> = {
  uikit: [
    {
      label: "Core Tokens",
      icon: Palette,
      items: [
        { id: "colors", label: "Colors", href: "/uikit#colors", icon: Palette },
        { id: "typography", label: "Typography", href: "/uikit#typography", icon: Type },
        { id: "spacing", label: "Spacing", href: "/uikit#spacing", icon: Hash },
        { id: "effects", label: "Effects", href: "/uikit#effects", icon: Sparkles },
      ]
    },
    {
      label: "Components",
      icon: Component,
      items: [
        { id: "buttons", label: "Buttons System", href: "/uikit#buttons", icon: MousePointer2 },
        { id: "inputs", label: "Text Inputs", href: "/uikit#inputs", icon: Type },
        { id: "textareas", label: "Textareas", href: "/uikit#textareas", icon: FileText },
        { id: "search", label: "Search Input", href: "/uikit#search", icon: Search },
        { id: "dropdowns", label: "Dropdowns", href: "/uikit#dropdowns", icon: ChevronDown },
        { id: "badges", label: "Badges", href: "/uikit#badges", icon: ShieldCheck },
        { id: "modals", label: "Modals", href: "/uikit#modals", icon: Maximize2 },
        { id: "notifications", label: "Notifications", href: "/uikit#notifications", icon: Bell },
        { id: "checkboxes", label: "Checkboxes", href: "/uikit#checkboxes", icon: CheckSquare },
        { id: "radio", label: "Radio Buttons", href: "/uikit#radio", icon: CircleDot },
        { id: "toggles", label: "Toggles", href: "/uikit#toggles", icon: ToggleLeft },
        { id: "tables", label: "Tables", href: "/uikit#tables", icon: TableIcon },
        { id: "tooltips", label: "Tooltips", href: "/uikit#tooltips", icon: MessageSquare },
        { id: "cards", label: "Cards", href: "/uikit#cards", icon: CreditCard },
      ]
    },
    {
      label: "Assets",
      icon: Layers,
      items: [
        { id: "resources", label: "Resources", href: "/uikit#resources", icon: ShoppingBag },
      ]
    }
  ],
  users: [
    {
      label: "Usuarios",
      icon: Users,
      items: [
        { label: "Gestión", href: "/users", icon: Users },
        { label: "Mi cuenta", href: "/account", icon: UserCircle },
      ]
    }
  ],
  account: [
    {
      label: "Usuarios",
      icon: Users,
      items: [
        { label: "Gestión", href: "/users", icon: Users },
        { label: "Mi cuenta", href: "/account", icon: UserCircle },
      ]
    },
    {
      label: "Ajustes",
      icon: Settings,
      items: [
        { label: "Preferencias", href: "/account", icon: Settings },
      ]
    }
  ],
  dashboard: [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      items: [
        { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
        { label: "Estadísticas", href: "/dashboard", icon: Zap },
      ]
    }
  ]
};

export function Sidebar({
  collapsed = false,
  onToggle,
  activeId,
  footer,
  user = {
    name: "Design Team",
    email: "team@designengine.ai",
  },
}: SidebarProps) {
  const pathname = usePathname();
  const section = pathname.split("/")[1] || "dashboard";
  const groups = menusBySection[section] || [];
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    // By default, open the group that contains the active item or just the first one
    const activeGroup = groups.find(g => 
      g.items.some(item => activeId ? activeId === item.id : pathname === item.href)
    );
    
    if (activeGroup) {
      initial[activeGroup.label] = true;
    } else if (groups.length > 0) {
      initial[groups[0].label] = true;
    }
    return initial;
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    groups.forEach(group => {
      const hasActiveChild = group.items.some(item =>
        activeId ? activeId === item.id : pathname === item.href
      );
      if (hasActiveChild && !openGroups[group.label]) {
        setOpenGroups(prev => ({ ...prev, [group.label]: true }));
      }
    });
  }, [activeId, pathname, groups]);

  const toggleGroup = (label: string) => {
    setOpenGroups(prev => {
      const isCurrentlyOpen = prev[label];
      // Accordion behavior: close others
      return { [label]: !isCurrentlyOpen };
    });
  };

  // Safe collapsed state that matches server on first render
  const isCollapsed = mounted ? collapsed : false;

  return (
    <>
      {/* Mobile Hamburger Header */}
      <div className="fixed left-0 right-0 top-0 z-40 flex h-14 items-center justify-between border-b border-neutral-200 bg-white/80 backdrop-blur-md px-4 lg:hidden dark:border-white/5 dark:bg-neutral-900/80">
        <div className="flex items-center">
          <img src="/logos/Logotipo Horizontal.png" alt="DesignEngine" className="h-5 w-auto dark:hidden" />
          <img src="/logos/Logotipo horizontal alternativo.png" alt="DesignEngine" className="h-5 w-auto hidden dark:block" />
        </div>
        <button
          onClick={() => setOpen(true)}
          className="-mr-2 rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed z-50 flex flex-col bg-white transition-all duration-300 dark:bg-neutral-50 lg:translate-x-0",
          "lg:m-6 lg:rounded-[32px] lg:shadow-[0px_20px_50px_rgba(0,0,0,0.1)] lg:border-none",
          "inset-y-0 left-0 h-full lg:h-[calc(100vh-48px)] shadow-2xl lg:shadow-none",
          open ? "w-[280px] translate-x-0" : "w-[280px] -translate-x-full",
          isCollapsed ? "lg:w-[72px]" : "lg:w-60"
        )}
      >
        {/* Brand Header (Mobile & Desktop) */}
        <div className={cn(
          "flex items-center border-b border-neutral-100 dark:border-white/5 transition-all duration-500",
          isCollapsed ? "h-28 flex-col justify-center gap-3 px-2 hidden lg:flex" : "h-20 justify-between px-6"
        )}>
          <div className={cn("flex items-center shrink-0 min-w-0", !isCollapsed && "gap-3")}>
            {isCollapsed ? (
              <img src="/logos/Simbolo.png" alt="DE" className="h-6 w-6 object-contain animate-in fade-in zoom-in duration-500" />
            ) : (
              <>
                <img src="/logos/Logotipo Horizontal.png" alt="DesignEngine" className="max-h-6 w-auto object-contain animate-in fade-in slide-in-from-left-4 duration-500 dark:hidden" />
                <img src="/logos/Logotipo horizontal alternativo.png" alt="DesignEngine" className="max-h-6 w-auto object-contain animate-in fade-in slide-in-from-left-4 duration-500 hidden dark:block" />
              </>
            )}
          </div>
          
          {/* Mobile Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="flex lg:hidden h-9 w-9 items-center justify-center rounded-xl bg-neutral-50 text-neutral-500 hover:bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-400"
          >
            <X className="h-5 w-5" />
          </button>

          <Tooltip content={isCollapsed ? "Expandir" : "Contraer"} position="right">
            <button
              onClick={onToggle}
              className={cn(
                "hidden lg:flex h-8 w-8 shrink-0 items-center justify-center rounded-[14px] transition-all duration-300",
                "text-neutral-500 hover:bg-primary-50 hover:text-primary-500",
                "dark:text-neutral-400 dark:hover:bg-primary-500/10 dark:hover:text-primary-500"
              )}
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isCollapsed ? (
                <PanelLeftOpen className="h-4 w-4 stroke-[1.5]" />
              ) : (
                <PanelLeftClose className="h-5 w-5 stroke-[1.5]" />
              )}
            </button>
          </Tooltip>
        </div>

        {/* Navigation */}
        <nav className={cn(
          "flex-1 px-2 py-4 overflow-y-auto overflow-x-hidden custom-scrollbar transition-all duration-300",
          isCollapsed ? "scrollbar-hide" : ""
        )}>
          <div className="space-y-4 pb-12">
            {groups.map((group) => {
              const isOpen = openGroups[group.label];
              const GroupIcon = group.icon || LayoutGrid;
              const isGroupActive = group.items.some(item =>
                activeId ? activeId === item.id : pathname === item.href
              );

              return (
                <div key={group.label} className="space-y-1">
                  {isCollapsed ? (
                    <Tooltip content={group.label} position="right" className="w-full">
                      <button
                        onClick={() => toggleGroup(group.label)}
                        className={cn(
                          "group flex w-full items-center justify-center p-1.5 rounded-lg transition-all duration-200",
                          isGroupActive && !isOpen ? "bg-neutral-100 dark:bg-neutral-800" : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        )}
                      >
                        <GroupIcon
                          className={cn(
                            "h-4 w-4",
                            isGroupActive ? "text-primary-600 dark:text-primary-400" : "text-neutral-700 dark:text-neutral-400"
                          )}
                        />
                      </button>
                    </Tooltip>
                  ) : (
                  <button
                    onClick={() => !isCollapsed && toggleGroup(group.label)}
                    className={cn(
                      "group flex w-full items-center gap-3 rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200",
                      isGroupActive && !isOpen && !isCollapsed
                        ? "bg-primary-50 text-primary-700 dark:bg-primary-500/10 dark:text-primary-500"
                        : "text-neutral-900 dark:text-neutral-900 hover:text-neutral-700 dark:hover:text-primary-400 hover:bg-primary-500/10",
                      isCollapsed && "justify-center px-2"
                    )}
                  >
                    <GroupIcon
                      className={cn(
                        "h-4 w-4 shrink-0 transition-colors",
                        isGroupActive ? "text-primary-600 dark:text-primary-400" : "text-neutral-700 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white"
                      )}
                    />
                    {!isCollapsed && (
                      <>
                        <span className="flex-1 text-left truncate uppercase text-[11px] font-bold tracking-wider">
                          {group.label}
                        </span>
                        <ChevronDown
                          className={cn(
                            "h-3.5 w-3.5 text-neutral-400 transition-transform duration-200",
                            isOpen && "rotate-180"
                          )}
                        />
                      </>
                    )}
                  </button>
                )}
                
                {!isCollapsed && isOpen && (
                  <div className="relative ml-5 space-y-0.5 border-l border-neutral-200 pl-4 py-1 dark:border-neutral-800 transition-all duration-300">
                    {group.items.map((item) => {
                      const isActive = activeId ? activeId === item.id : pathname === item.href;
                      const ItemIcon = item.icon;

                      return (
                        <Link
                          key={item.id || item.href}
                          href={item.href}
                          className={cn(
                            "flex items-center gap-2 rounded-md px-2 py-1 text-sm transition-all duration-200",
                            isActive
                              ? "bg-neutral-100 text-neutral-900 font-bold dark:bg-neutral-800 dark:text-white"
                              : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800"
                          )}
                        >
                          {ItemIcon && <ItemIcon className="h-3.5 w-3.5" />}
                          <span className="truncate">{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}

                {isCollapsed && isOpen && (
                  <div className="mt-2 flex flex-col space-y-2 items-center animate-in fade-in slide-in-from-top-2 duration-300">
                    {group.items.map((item) => {
                      const ItemIcon = item.icon;
                      const isActive = activeId ? activeId === item.id : pathname === item.href;
                      return (
                        <Link
                          key={item.id || item.href}
                          href={item.href}
                        >
                          <Tooltip content={item.label} position="right">
                            <div
                              className={cn(
                                "flex items-center justify-center rounded-full w-7 h-7 transition-all duration-200",
                                isActive
                                  ? "bg-primary-50 text-primary-600 dark:bg-primary-500/20 dark:text-primary-400"
                                  : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
                              )}
                            >
                              {ItemIcon && <ItemIcon className="h-3.5 w-3.5" />}
                            </div>
                          </Tooltip>
                        </Link>
                      );
                    })}
                  </div>
                )}
                </div>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="mt-auto border-t border-neutral-200 dark:border-white/5 p-4 pb-8">
          <div className="flex flex-col gap-4">
            <div className="mt-2">
              {isCollapsed ? (
                <div className="flex justify-center w-full">
                  <Tooltip content={theme === "dark" ? "Modo Claro" : "Modo Oscuro"} position="right">
                    <button
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:text-neutral-900 transition-all"
                    >
                      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </button>
                  </Tooltip>
                </div>
              ) : (
                <ThemeToggle />
              )}
            </div>

            <div className="mt-2 border-t border-neutral-100 dark:border-white/5 pt-4">
              <div className={cn(
                "flex items-center gap-3 px-2 transition-colors",
                isCollapsed ? "flex-col" : "justify-between"
              )}>
                <div className="flex flex-1 items-center gap-3 overflow-hidden">
                  <Tooltip content={isCollapsed ? `${user.name}\n${user.email}` : ""} position="right">
                    <Avatar name={user.name} src={user.avatar} size="md" />
                  </Tooltip>
                  
                  {!isCollapsed && (
                    <div className="flex flex-1 flex-col overflow-hidden">
                      <span className="truncate text-sm font-bold text-neutral-900 dark:text-white leading-tight">
                        {user.name}
                      </span>
                      <span className="truncate text-[11px] text-neutral-500 dark:text-neutral-400 leading-tight">
                        {user.email}
                      </span>
                    </div>
                  )}
                </div>

                <Tooltip content="Cerrar Sesión" position={isCollapsed ? "right" : "top"}>
                  <button className="shrink-0 p-2 text-neutral-400 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-all">
                    <LogOut className="h-4 w-4" />
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
