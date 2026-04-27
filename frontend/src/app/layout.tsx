import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <ThemeProvider defaultTheme="light" storageKey="ui-theme">
            <div className="flex flex-1 flex-col">{children}</div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
