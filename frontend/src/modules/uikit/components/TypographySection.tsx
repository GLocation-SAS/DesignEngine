"use client";

import React from "react";

export function TypographySection() {
  return (
    <section id="typography" className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Typography</h2>
        <p className="text-neutral-500 mt-2">
          The typographic system uses <b>Inter</b> for UI elements and <b>JetBrains Mono</b> for code.
        </p>
      </div>

      <div className="space-y-12 border-t border-neutral-100 pt-8">
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-neutral-400">Display Hero -- 72px / 900 / 1.1x / -2.16px / CursorGothic</p>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-neutral-900 leading-tight">
            Display Hero
          </h1>
        </div>

        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-neutral-400">Section Heading -- 36px / 800 / 1.2x / -0.72px / CursorGothic</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900">
            Section Heading
          </h2>
        </div>

        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-neutral-400">Sub-heading -- 24px / 600 / 1.2x / -0.32px / CursorGothic</p>
          <h3 className="text-2xl font-semibold text-neutral-800">
            Sub-heading
          </h3>
        </div>

        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-neutral-400">Body Serif -- 19.2px / 400 / 1.5x / Tinos</p>
          <p className="text-xl font-serif text-neutral-700 max-w-2xl leading-relaxed">
            The AI first code editor that helps you build software faster with intelligent assistance.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-neutral-400">Body Sans -- 16px / 400 / 1.6x / Inter</p>
          <p className="text-base text-neutral-600 max-w-2xl">
            Standard UI text for navigation and interface elements. This is the default body text used across the application for readability and clarity.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-neutral-400">Button Label -- 14px / 600 / 1.0x / Inter</p>
          <span className="text-sm font-bold uppercase tracking-wider text-neutral-900">
            Button Label
          </span>
        </div>
      </div>
    </section>
  );
}
