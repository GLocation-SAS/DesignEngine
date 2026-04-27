"use client";

import React from "react";
import { Table } from "@/components/ui/Table";

const COLUMNS = [
  { key: "id", label: "ID" },
  { key: "user", label: "Usuario" },
  { key: "email", label: "Email" },
  { key: "role", label: "Rol" },
  { key: "status", label: "Estado" },
];

const DATA = [
  {
    id: "#1234",
    user: "Alex Rivera",
    email: "alex@designengine.io",
    role: "Admin",
    status: "Activo",
  },
  {
    id: "#1235",
    user: "Maria Chen",
    email: "maria@designengine.io",
    role: "Editor",
    status: "Inactivo",
  },
  {
    id: "#1236",
    user: "John Smith",
    email: "john@designengine.io",
    role: "Viewer",
    status: "Activo",
  },
  {
    id: "#1237",
    user: "Sarah Connor",
    email: "sarah@designengine.io",
    role: "Admin",
    status: "Pendiente",
  },
];

export function TableMatrix() {
  return (
    <div id="tables" className="scroll-mt-24 px-8 max-w-7xl mx-auto space-y-12">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-primary-500">Tables</h3>
        <p className="text-neutral-500">
          Componente de tabla reactivo y accesible con soporte para estados de hover y modo oscuro.
        </p>
      </div>

      <div className="space-y-6">
        <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
          Default State
        </h4>
        <Table columns={COLUMNS} data={DATA} />
      </div>

      <div className="space-y-6">
        <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">
          Empty State
        </h4>
        <Table columns={COLUMNS} data={[]} />
      </div>
    </div>
  );
}
