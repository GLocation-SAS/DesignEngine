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
        <div className="group relative bg-semantic-background-neutral-default border border-semantic-border-neutral-subtle rounded-2xl overflow-hidden shadow-2 hover:shadow-4 transition-all duration-500">
          <div className="aspect-video bg-white dark:bg-neutral-50 relative flex items-center justify-center p-4">
            <img
              src={publicUrl("/automation.gif")}
              alt="Automation Process"
              className="max-h-full rounded-lg shadow-1"
            />
          </div>
          <div className="p-6 space-y-4">
            <div className="space-y-1">
              <h4 className="text-xl font-bold text-semantic-text-neutral-primary">QA Automation Workflow</h4>
              <p className="text-sm text-semantic-text-neutral-secondary">Official GIF demonstrating the automation process.</p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-semantic-text-disabled-default">GIF FORMAT</span>
              <a href={publicUrl("/automation.gif")} download="automation.gif">
                <Button variant="primary" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Logos Section - New */}
        {[
          { id: "symbol", title: "Símbolo", format: "PNG", src: "/logos/Simbolo.png" },
          { id: "symbol-alt", title: "Símbolo Alternativo", format: "PNG", src: "/logos/Simbolo Alternativo.png" },
          { id: "h-main", title: "Logotipo Horizontal", format: "PNG", src: "/logos/Logotipo Horizontal.png" },
          { id: "h-alt", title: "Logotipo Horizontal Alternativo", format: "PNG", src: "/logos/Logotipo horizontal alternativo.png" },
          { id: "v-main", title: "Logotipo Vertical", format: "PNG", src: "/logos/Logotipo Vertical.png" },
          { id: "v-alt", title: "Logotipo Vertical Alternativo", format: "PNG", src: "/logos/Logotipo Vertical Alternativo.png" },
          { id: "favicon", title: "Favicon", format: "PNG", src: "/logos/Favicon.png" },
        ].map((logo) => (
          <div key={logo.id} className="group relative bg-semantic-background-neutral-default border border-semantic-border-neutral-subtle rounded-2xl overflow-hidden shadow-2 hover:shadow-4 transition-all duration-500">
            <div className="aspect-video bg-white dark:bg-neutral-50 relative flex items-center justify-center p-8">
              <img
                src={publicUrl(logo.src)}
                alt={logo.title}
                className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-semantic-text-neutral-primary">{logo.title}</h4>
                <p className="text-xs text-semantic-text-neutral-secondary">Recurso oficial para uso en aplicaciones.</p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-semantic-text-disabled-default">{logo.format}</span>
                <a href={publicUrl(logo.src)} download={logo.src.split('/').pop()}>
                  <Button variant="primary" size="sm" className="gap-2">
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
