import type { Metadata } from "next";
import { Montserrat, Nunito } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { ToastProvider } from "@/context/ToastContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "DesignEngine — Plataforma de Diseño Colaborativo",
  description:
    "Plataforma de diseño colaborativo impulsada por IA. Crea, itera y despliega diseños de forma más rápida y eficiente.",
  keywords: ["design", "engine", "AI", "colaborativo", "diseño", "plataforma"],
  authors: [{ name: "DesignEngine Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <ThemeProvider defaultTheme="light" storageKey="ui-theme">
            <ToastProvider>
              <div className="flex flex-1 flex-col">{children}</div>
            </ToastProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
