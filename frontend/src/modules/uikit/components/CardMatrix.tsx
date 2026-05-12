"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Trash2, Bot, UserX, Users } from "lucide-react";

export function CardMatrix() {
  return (
    <div id="cards" className="scroll-mt-24 space-y-12 px-8 max-w-7xl">
      <div className="space-y-4">
        <h3 className="text-4xl font-black tracking-tighter text-neutral-900 uppercase">
          Cards
        </h3>
        <p className="text-neutral-800 max-w-3xl">
          Tarjetas con efecto para jerarquizar el contenido y darle contexto.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Vertical Variants */}
        <div className="space-y-6">
          <h4 className="text-sm font-semibold text-neutral-600 uppercase tracking-wider">Vertical (Default)</h4>
          <Card
            title="Diseño Premium"
            description="Explora nuestra colección de componentes optimizados para alta fidelidad y rendimiento."
          >
            <Button variant="primary" size="sm" className="w-full mt-2">
              Ver Detalles
            </Button>
          </Card>
        </div>

        {/* Info Card with AI Icon Style */}
        <div className="space-y-6">
          <h4 className="text-sm font-semibold text-neutral-600 uppercase tracking-wider">Información</h4>
          <Card
            title="Configuración de Cuenta"
            description="Gestiona tus preferencias y datos personales de manera segura en el panel de control."
            icon={
              <div className="w-14 h-14 bg-primary-400/40 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-sm mx-auto">
                <Bot className="w-7 h-7 text-neutral-700" />
              </div>
            }
            className="text-center"
          >
            <div className="pt-2 border-t border-neutral-200 flex justify-between items-center">
              <span className="text-xs text-neutral-600 italic">Actualizado hoy</span>
              <Button variant="ghost" size="sm">Editar</Button>
            </div>
          </Card>
        </div>


        {/* Horizontal Variants */}
        <div className="space-y-6 lg:col-span-2">
          <h4 className="text-sm font-semibold text-neutral-600 uppercase tracking-wider">Horizontal</h4>
          <Card
            variant="horizontal"
            title="Ecosistema Modular"
            description="Construye interfaces complejas de manera sencilla con nuestro sistema de diseño basado en tokens semánticos."
          >
            <div className="flex gap-2">
              <Button variant="primary" size="sm">Aceptar</Button>
              <Button variant="neutral" size="sm">Cancelar</Button>
            </div>
          </Card>
        </div>

        {/* Specific Example from Image */}
        <div className="space-y-6 lg:col-span-3">
          <h4 className="text-sm font-semibold text-neutral-600 uppercase tracking-wider">Horizontal Custom</h4>
          <Card
            title="Ecosistema Modular"
            description="Construye interfaces complejas de manera sencilla con nuestro sistema de diseño basado en tokens semánticos."
            action={
              <Button variant="ghost" size="sm" className="rounded-md  hover:text-red-500 transition-colors">
                <Trash2 className="w-5 h-5 " />
              </Button>
            }
          >
            <div className="flex gap-2 flex-wrap mt-4">
              <Badge variant="outline" className="border border-primary-700 text-primary-700" >
                Eficiente
              </Badge>
              <Badge variant="secondary" >
                Modular
              </Badge>
            </div>
          </Card>
        </div>
        <div className="lg:col-span-3 space-y-6 pt-12 border-t border-neutral-200">
          <h3 className="text-xl font-bold text-neutral-900">Documentación de Propiedades</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
              <code className="text-primary-600 font-bold">title</code>
              <p className="text-sm text-neutral-600 mt-1">El título principal de la tarjeta. Soporta texto plano.</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
              <code className="text-primary-600 font-bold">description</code>
              <p className="text-sm text-neutral-600 mt-1">Descripción secundaria. Ideal para párrafos cortos o métricas numéricas.</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
              <code className="text-primary-600 font-bold">variant</code>
              <p className="text-sm text-neutral-600 mt-1">Define la orientación: <span className="font-mono text-xs">vertical</span> (default) o <span className="font-mono text-xs">horizontal</span>.</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
              <code className="text-primary-600 font-bold">icon</code>
              <p className="text-sm text-neutral-600 mt-1">Elemento visual (SVG o Componente) que aparece sobre el título.</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
              <code className="text-primary-600 font-bold">action</code>
              <p className="text-sm text-neutral-600 mt-1">Botón o icono interactivo ubicado en la esquina superior derecha.</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
              <code className="text-primary-600 font-bold">showEffect</code>
              <p className="text-sm text-neutral-600 mt-1">Boolean que activa el fondo mesh traslúcido y desenfoque. Default: <span className="font-mono text-xs">true</span>.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
