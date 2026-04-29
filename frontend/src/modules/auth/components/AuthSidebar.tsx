"use client";

import Image from "next/image";
import { CheckCircle2, FileText } from "lucide-react";
import { publicUrl } from "@/lib/utils";

const FEATURES = [
  "Ejecución de pruebas automatizadas",
  "Métricas de cobertura en tiempo real",
  "Gestión de entornos aislados",
];

export function AuthSidebar() {
  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden">
      <div className="w-full h-full object-cover">
        <Image
          src={publicUrl("/login.png")}
          alt="Login Visual"
          fill
          className="w-full h-full rounded-[40px]"
          priority
        />

        <div className="absolute inset-0 flex flex-col justify-end p-10">
          <div className="relative z-10 max-w-lg rounded-xl bg-black/30 p-8 backdrop-blur-xl shadow-md">
            <div className="mb-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-secondary-500" />
                <h2 className="text-2xl font-bold text-secondary-500">
                  Gestión Inteligente de Calidad
                </h2>
              </div>
              <p className="text-xl leading-relaxed text-white font-light">
                Acelera tus ciclos de prueba, gestiona entornos de ejecución y asegura la calidad del software con precisión quirúrgica.
              </p>
            </div>

            <ul className="space-y-4">
              {FEATURES.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm font-medium text-neutral-200">
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary-200 dark:bg-primary-800">
                    <CheckCircle2 className="h-3 w-3 text-primary-500" />
                  </div>
                  <span className="text-white font-light text-[18px]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
