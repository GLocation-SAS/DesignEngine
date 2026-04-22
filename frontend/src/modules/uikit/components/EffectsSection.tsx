"use client";

import React from "react";

export function EffectsSection() {
  return (
    <section id="effects" className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Effects</h2>
        <p className="text-neutral-500 mt-2">
          Visual styles including shadows, blurs, and standard animations.
        </p>
      </div>

      {/* Shadows */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold border-b pb-2">Shadows (Elevation)</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {[1, 2, 3, 4, 5].map((level) => (
            <div key={level} className="space-y-4">
              <div
                className="aspect-square w-full rounded-xl bg-white border border-neutral-100"
                style={{ boxShadow: `var(--shadow-${level})` }}
              />
              <div className="text-center">
                <span className="text-sm font-mono text-neutral-400">shadow-{level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Glassmorphism */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold border-b pb-2">Glassmorphism</h3>
        <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 flex items-center justify-center p-12">
          {/* Animated blobs */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-warning-400 rounded-full blur-3xl opacity-50 animate-pulse" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-info-400 rounded-full blur-3xl opacity-50 animate-bounce" />
          
          <div className="relative z-10 glass p-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl max-w-md text-center">
            <h4 className="text-white font-bold text-xl">Glass Surface</h4>
            <p className="text-white/80 mt-2">
              Combining backdrop-blur, translucency, and subtle borders to create depth.
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold border-b pb-2">Micro-animations</h3>
        <div className="flex flex-wrap gap-8">
          <div className="group space-y-2">
            <div className="h-20 w-20 bg-primary-500 rounded-lg transition-transform group-hover:scale-110 group-hover:rotate-6" />
            <p className="text-xs text-center font-medium">Scale & Rotate</p>
          </div>
          <div className="group space-y-2">
            <div className="h-20 w-20 bg-secondary-500 rounded-lg transition-all group-hover:rounded-full group-hover:bg-accent-500" />
            <p className="text-xs text-center font-medium">Morph & Color</p>
          </div>
          <div className="group space-y-2">
            <div className="h-20 w-20 bg-success-500 rounded-lg transition-shadow group-hover:shadow-4 group-hover:-translate-y-2" />
            <p className="text-xs text-center font-medium">Lift & Shadow</p>
          </div>
        </div>
      </div>
    </section>
  );
}
