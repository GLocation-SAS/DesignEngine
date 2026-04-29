"use client";

import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { publicUrl } from "@/lib/utils";

export function ResourcesSection() {
  return (
    <section id="resources" className="space-y-12">
      <div>
        <h2 className="text-5xl font-black tracking-tighter text-primary-500 uppercase">
          Media Resources
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 mt-4 max-w-2xl text-lg">
          Official assets and media for the automation platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Automation GIF */}
        <div className="group relative dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
          <div className="aspect-video bg-neutral-50 relative flex items-center justify-center p-4">
            <img
              src={publicUrl("/automation.gif")}
              alt="Automation Process"
              className="max-h-full rounded-lg shadow-lg"
            />
          </div>
          <div className="p-6 space-y-4">
            <div className="space-y-1">
              <h4 className="text-xl font-bold text-neutral-900">QA Automation Workflow</h4>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Official GIF demonstrating the automation process.</p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">GIF FORMAT</span>
              <a href={publicUrl("/automation.gif")} download="automation.gif">
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Logos Section - New */}
        {[
          { id: "symbol", title: "Símbolo Isotipo", format: "PNG", src: "/logos/symbol.png" },
          { id: "h-white", title: "Logo Horizontal (Light)", format: "PNG", src: "/logos/h-white.png" },
          { id: "h-blue", title: "Logo Horizontal (Dark)", format: "PNG", src: "/logos/h-blue.png" },
          { id: "v-white", title: "Logo Vertical (Light)", format: "PNG", src: "/logos/v-white.png" },
          { id: "lt-h", title: "Logotipo Horizontal", format: "PNG", src: "/logos/lt-h.png" },
          { id: "lt-h-white", title: "Logotipo Horizontal (Light)", format: "PNG", src: "/logos/lt-h-white.png" },
        ].map((logo) => (
          <div key={logo.id} className="group relative dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="aspect-video bg-neutral-50 relative flex items-center justify-center p-8">
              <img
                src={publicUrl(logo.src)}
                alt={logo.title}
                className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-neutral-900">{logo.title}</h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Recurso oficial para uso en aplicaciones.</p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">{logo.format}</span>
                <a href={publicUrl(logo.src)} download={logo.src.split('/').pop()}>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
