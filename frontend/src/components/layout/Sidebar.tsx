"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronsUpDown,
  LayoutGrid,
  Component,
  Palette,
  User,
  PanelLeftClose,
  PanelLeftOpen
} from "lucide-react";

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
  groups: SidebarGroup[];
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

export function Sidebar({
  groups,
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
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    groups.forEach(g => {
      if (g.initiallyOpen !== false) initial[g.label] = true;
    });
    return initial;
  });

  // Auto-open group if a child is active
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
    setOpenGroups(prev => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside
      className={cn(
        "flex h-full flex-col border-r border-neutral-200 bg-white transition-all duration-300 dark:border-neutral-200 dark:bg-neutral-100",
        collapsed ? "w-[68px]" : "w-64"
      )}
    >
      {/* Brand Header */}
      <div className="flex h-14 items-center gap-3 px-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-600 text-white shadow-lg shadow-primary-500/20">
          <Palette className="h-5 w-5" />
        </div>
        {!collapsed && (
          <div className="flex flex-1 items-center justify-between overflow-hidden">
            <div className="flex flex-col overflow-hidden">
              <span className="truncate text-sm font-bold tracking-tight text-neutral-900">
                DesignEngine
              </span>
              <span className="truncate text-[10px] text-neutral-500">
                Core System
              </span>
            </div>
            <ChevronsUpDown className="h-4 w-4 text-neutral-400" />
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 py-4 scrollbar-thin scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-800">
        <div className="space-y-4">
          {groups.map((group) => {
            const isOpen = openGroups[group.label];
            const GroupIcon = group.icon || LayoutGrid;
            const isGroupActive = group.items.some(item =>
              activeId ? activeId === item.id : pathname === item.href
            );

            return (
              <div key={group.label} className="space-y-1">
                {/* Group Header */}
                <button
                  onClick={() => !collapsed && toggleGroup(group.label)}
                  className={cn(
                    "group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                    isGroupActive && !isOpen && !collapsed
                      ? "bg-primary-50 text-primary-700 dark:bg-primary-500/10 dark:text-primary-800"
                      : "text-neutral-900 hover:text-neutral-700 hover:bg-primary-500/20",
                    collapsed && "justify-center px-2"
                  )}
                >
                  <GroupIcon className={cn(
                    "h-4 w-4 shrink-0 transition-colors",
                    isGroupActive ? "text-primary-600 dark:text-primary-400" : "text-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-neutral-700"
                  )} />
                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left truncate uppercase text-[11px] font-bold tracking-wider">
                        {group.label}
                      </span>
                      <ChevronDown className={cn(
                        "h-3.5 w-3.5 text-neutral-400 transition-transform duration-200",
                        isOpen && "rotate-180"
                      )} />
                    </>
                  )}
                </button>

                {/* Group Items */}
                {!collapsed && isOpen && (
                  <div className="relative ml-5 space-y-0.5 border-l border-neutral-200 pl-4 py-1 dark:border-neutral-800 transition-all duration-300">
                    {group.items.map((item) => {
                      const isActive = activeId ? activeId === item.id : pathname === item.href;
                      const ItemIcon = item.icon;

                      return (
                        <Link
                          key={item.id || item.href}
                          href={item.href}
                          className={cn(
                            "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-all duration-200",
                            isActive
                              ? "bg-neutral-200 text-neutral-900 font-medium"
                              : "text-neutral-800 hover:text-neutral-800 hover:bg-neutral-200"
                          )}
                        >
                          {ItemIcon && <ItemIcon className="h-3.5 w-3.5" />}
                          <span className="truncate">{item.label}</span>
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

      {/* Footer / Toggle */}
      <div className="mt-auto border-t border-neutral-200 p-2 dark:border-neutral-200">
        <div className="flex flex-col gap-1">
          {/* User Profile */}
          <button className={cn(
            "flex items-center gap-3 rounded-lg p-2 text-left transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-200/50",
            collapsed && "justify-center"
          )}>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-300">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="h-full w-full rounded-full object-cover" />
              ) : (
                <User className="h-4 w-4 text-neutral-500" />
              )}
            </div>
            {!collapsed && (
              <div className="flex flex-1 items-center justify-between overflow-hidden">
                <div className="flex flex-col overflow-hidden">
                  <span className="truncate text-sm font-medium text-neutral-900 leading-tight">
                    {user.name}
                  </span>
                  <span className="truncate text-[10px] text-neutral-500 leading-tight">
                    {user.email}
                  </span>
                </div>
                <ChevronsUpDown className="h-4 w-4 text-neutral-400" />
              </div>
            )}
          </button>

          {/* Toggle Button */}
          <button
            onClick={onToggle}
            className="flex h-10 w-full items-center justify-center rounded-lg text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 transition-all dark:hover:bg-neutral-200/50 dark:hover:text-neutral-100"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? (
              <PanelLeftOpen className="h-4 w-4" />
            ) : (
              <div className="flex items-center gap-2 px-2 text-xs font-medium">
                <PanelLeftClose className="h-4 w-4" />
                <span>Collapse Sidebar</span>
              </div>
            )}
          </button>
        </div>
      </div>

      {footer && <div className="p-2 pt-0">{footer}</div>}
    </aside>
  );
}
