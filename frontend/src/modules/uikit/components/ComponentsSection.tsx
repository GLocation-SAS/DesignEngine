"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function ComponentsSection() {
  return (
    <section id="components" className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Components</h2>
        <p className="text-neutral-500 mt-2">
          Core UI components built with accessibility and flexibility in mind.
        </p>
      </div>

      {/* Buttons */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold border-b pb-2">Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="glass">Glassmorphism</Button>
          <Button variant="error">Danger</Button>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
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
