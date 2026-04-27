"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TabItemProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * TabItem component for individual tabs.
 * Inherits styles from the design system.
 */
export function TabItem({ label, isActive, onClick, className }: TabItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-6 py-2 text-sm font-medium transition-all duration-200 rounded-full whitespace-nowrap",
        isActive
          ? "bg-primary text-semantic-text-on-color shadow-1"
          : "text-semantic-text-neutral-secondary hover:bg-semantic-background-neutral-hover hover:text-semantic-text-neutral-primary",
        className
      )}
    >
      {label}
    </button>
  );
}

interface TabsProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTabChange: (id: string) => void;
  className?: string;
}

/**
 * Tabs component based on the DesignEngine system.
 * Uses a pill-shaped layout for both the container and active state.
 */
export function Tabs({ tabs, activeTab, onTabChange, className }: TabsProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center p-1 bg-semantic-background-neutral-surface rounded-full border border-semantic-border-neutral-subtle",
        className
      )}
    >
      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          label={tab.label}
          isActive={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
        />
      ))}
    </div>
  );
}
