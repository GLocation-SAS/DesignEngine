"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ChevronRight, ChevronLeft, Box, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { PrimaryButtonMatrix } from "./PrimaryButtonMatrix";
import { SecondaryButtonMatrix } from "./SecondaryButtonMatrix";
import { ErrorButtonMatrix } from "./ErrorButtonMatrix";
import { SuccessButtonMatrix } from "./SuccessButtonMatrix";
import { WarningButtonMatrix } from "./WarningButtonMatrix";
import { InfoButtonMatrix } from "./InfoButtonMatrix";
import { NeutralButtonMatrix } from "./NeutralButtonMatrix";

interface ButtonShowcaseProps {
  variant: any;
  title: string;
  badgeContent: string;
  bgClass?: string;
  hoverClass?: string;
  activeClass?: string;
}

function ButtonShowcase({ variant, title, badgeContent, bgClass = "bg-white", hoverClass, activeClass }: ButtonShowcaseProps) {
  return (
    <div className={`space-y-8 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-700 shadow-sm ${bgClass}`}>
      <div className="flex items-center gap-2 mb-4">
        <Badge variant="surface" className={variant === 'secondary' ? "bg-secondary-50 text-secondary-600" : ""}>{badgeContent}</Badge>
        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest">{title}</h4>
      </div>

      <div className="grid gap-12">
        {[
          { size: "lg", label: "Large (56px)" },
          { size: "default", label: "Medium (44px)" },
          { size: "sm", label: "Small (40px)" },
          { size: "xs", label: "Extra Small (36px)" },
        ].map((s) => (
          <div key={s.size} className="space-y-4">
            <p className="text-sm font-medium text-neutral-500">{s.label}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-tighter text-neutral-400 font-bold">Default</p>
                <Button variant={variant} size={s.size as any}>
                  <ChevronLeft className={cn(s.size === 'sm' || s.size === 'xs' ? "w-4 h-4" : "w-6 h-6")} />
                  Label
                  <ShoppingBag className={cn(s.size === 'sm' || s.size === 'xs' ? "w-4 h-4" : "w-6 h-6")} />
                </Button>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-tighter text-neutral-400 font-bold">Hover</p>
                <Button variant={variant} size={s.size as any} className={hoverClass}>
                  <ChevronLeft className={cn(s.size === 'sm' || s.size === 'xs' ? "w-4 h-4" : "w-6 h-6")} />
                  Label
                  <ShoppingBag className={cn(s.size === 'sm' || s.size === 'xs' ? "w-4 h-4" : "w-6 h-6")} />
                </Button>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-tighter text-neutral-400 font-bold">Pressed</p>
                <Button variant={variant} size={s.size as any} className={activeClass}>
                  <ChevronLeft className={cn(s.size === 'sm' || s.size === 'xs' ? "w-4 h-4" : "w-6 h-6")} />
                  Label
                  <ShoppingBag className={cn(s.size === 'sm' || s.size === 'xs' ? "w-4 h-4" : "w-6 h-6")} />
                </Button>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-tighter text-neutral-400 font-bold">Disabled</p>
                <Button variant={variant} size={s.size as any} disabled>
                  <ChevronLeft className={cn(s.size === 'sm' || s.size === 'xs' ? "w-4 h-4" : "w-6 h-6")} />
                  Label
                  <ShoppingBag className={cn(s.size === 'sm' || s.size === 'xs' ? "w-4 h-4" : "w-6 h-6")} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ComponentsSection() {
  return (
    <section id="components" className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Components</h2>
        <p className="text-neutral-500 mt-2">
          Core UI components built with accessibility and flexibility in mind.
        </p>
      </div>

      {/* Buttons System */}
      <div className="space-y-12">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-tight">Buttons System</h3>
          <p className="text-neutral-500">
            Comprehensive collection of button types, sizes, and states.
          </p>
        </div>        <PrimaryButtonMatrix />
        <SecondaryButtonMatrix />
        <ErrorButtonMatrix />
        <SuccessButtonMatrix />
        <WarningButtonMatrix />
        <InfoButtonMatrix />
        <NeutralButtonMatrix />

        {/* Utility Variants */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold border-b pb-2">Utility & Experimental</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="glass">Glassmorphism</Button>
          </div>
        </div>
      </div>

      {/* Inputs */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold border-b pb-2">Inputs</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
          <div className="space-y-2">
            <label className="text-sm font-medium">Default Input</label>
            <Input placeholder="Enter your email..." />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Error State</label>
            <Input error placeholder="Invalid input" defaultValue="wrong value" />
            <p className="text-xs text-error-500">This field is required.</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Disabled</label>
            <Input disabled placeholder="Disabled input" />
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold border-b pb-2">Badges</h3>
        <div className="flex flex-wrap gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="surface">Surface</Badge>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold border-b pb-2">Cards</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h4 className="font-bold">Default Card</h4>
            <p className="text-sm text-neutral-500 mt-2">Basic container with subtle shadow and border.</p>
          </Card>
          <Card variant="glass">
            <h4 className="font-bold">Glass Card</h4>
            <p className="text-sm text-neutral-500 mt-2">Translucent background with backdrop blur effect.</p>
          </Card>
          <Card variant="interactive">
            <h4 className="font-bold text-primary-600">Interactive Card</h4>
            <p className="text-sm text-neutral-500 mt-2">Hover to see transition and shadow changes.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
