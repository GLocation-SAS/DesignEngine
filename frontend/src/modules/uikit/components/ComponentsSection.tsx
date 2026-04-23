"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ChevronLeft, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { PrimaryButtonMatrix } from "./PrimaryButtonMatrix";
import { SecondaryButtonMatrix } from "./SecondaryButtonMatrix";
import { ErrorButtonMatrix } from "./ErrorButtonMatrix";
import { SuccessButtonMatrix } from "./SuccessButtonMatrix";
import { WarningButtonMatrix } from "./WarningButtonMatrix";
import { InfoButtonMatrix } from "./InfoButtonMatrix";
import { NeutralButtonMatrix } from "./NeutralButtonMatrix";
import { TextInputMatrix } from "./TextInputMatrix";
import { SearchInputMatrix } from "./SearchInputMatrix";
import { DropdownMatrix } from "./DropdownMatrix";
import { ModalMatrix } from "./ModalMatrix";
import { NotificationMatrix } from "./NotificationMatrix";
import { TagMatrix } from "./TagMatrix";
import { CheckboxMatrix } from "./CheckboxMatrix";
import { RadioButtonMatrix } from "./RadioButtonMatrix";
import { ToggleMatrix } from "./ToggleMatrix";
import { BreadcrumbMatrix } from "./BreadcrumbMatrix";
import { PaginationMatrix } from "./PaginationMatrix";

export function ComponentsSection() {
  return (
    <section id="components" className="space-y-32">
      {/* Intro */}
      <div className="px-8 max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-primary-500">Components Architecture</h2>
        <p className="text-neutral-500 mt-2">
          Core UI components built with high-fidelity design tokens and modular logic.
        </p>
      </div>

      {/* Buttons System */}
      <div id="buttons" className="scroll-mt-24">
        <PrimaryButtonMatrix />
        <SecondaryButtonMatrix />
        <ErrorButtonMatrix />
        <SuccessButtonMatrix />
        <WarningButtonMatrix />
        <InfoButtonMatrix />
        <NeutralButtonMatrix />

        {/* Utility Variants */}
        <div className="px-8 mt-16 max-w-6xl">
          <div className="flex items-center gap-3 border-l-4 border-neutral-300 dark:border-neutral-700 pl-4 mb-8">
             <h4 className="text-sm font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">Utility &amp; Experimental</h4>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-800">
            <div className="flex flex-wrap gap-8 items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase">Outline</span>
                <Button variant="outline">Outline Action</Button>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase">Ghost</span>
                <Button variant="ghost">Ghost Action</Button>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase">Glass</span>
                <Button variant="glass">Glass Action</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inputs System */}
      <div id="inputs" className="scroll-mt-24">
        <TextInputMatrix />
      </div>

      {/* Search Input */}
      <div id="search" className="scroll-mt-24">
        <SearchInputMatrix />
      </div>

      {/* Dropdowns */}
      <div id="dropdowns" className="scroll-mt-24">
        <DropdownMatrix />
      </div>

      {/* Badges — placeholder hasta implementar BadgeMatrix */}
      <div id="badges" className="scroll-mt-24 px-8 max-w-6xl">
        <h3 className="text-2xl font-bold text-primary-500">Badges</h3>
        <p className="text-neutral-500 mt-2">Coming soon — Badge system documentation.</p>
      </div>

      {/* Modals */}
      <div id="modals" className="scroll-mt-24">
        <ModalMatrix />
      </div>

      {/* Notifications */}
      <div id="notifications" className="scroll-mt-24">
        <NotificationMatrix />
      </div>

      {/* Tags */}
      <div id="tags" className="scroll-mt-24">
        <TagMatrix />
      </div>

      {/* Checkboxes */}
      <div id="checkboxes" className="scroll-mt-24">
        <CheckboxMatrix />
      </div>

      {/* Radio Buttons */}
      <div id="radio" className="scroll-mt-24">
        <RadioButtonMatrix />
      </div>

      {/* Toggles */}
      <div id="toggles" className="scroll-mt-24">
        <ToggleMatrix />
      </div>

      {/* Breadcrumbs */}
      <div id="breadcrumbs" className="scroll-mt-24">
        <BreadcrumbMatrix />
      </div>

      {/* Pagination */}
      <div id="pagination" className="scroll-mt-24">
        <PaginationMatrix />
      </div>
    </section>
  );
}






