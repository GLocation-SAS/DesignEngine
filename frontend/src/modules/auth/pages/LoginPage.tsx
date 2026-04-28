"use client";

import { AuthSidebar } from "../components/AuthSidebar";
import { LoginForm } from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div >
      <main className="flex min-h-screen w-full bg-neutral-white text-neutral-900">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 max-w-[1700px] mx-auto">
          {/* Left Section: Visual Sidebar */}
          <section className="hidden p-6 lg:block h-screen sticky top-0">
            <AuthSidebar />
          </section>

          {/* Right Section: Authentication Form */}
          <section className="flex items-center justify-center p-8 lg:p-12 h-full min-h-screen">
            <div className="w-full animate-in fade-in slide-in-from-right-4 duration-700">
              <LoginForm />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
