import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-200 bg-white dark:border-surface-800 dark:bg-surface-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Brand */}
            <img src="/logos/Logotipo Horizontal.png" alt="DesignEngine" className="h-5 w-auto dark:hidden" />
            <img src="/logos/Logotipo horizontal alternativo.png" alt="DesignEngine" className="h-5 w-auto hidden dark:block" />

          {/* Links */}
          <div className="flex gap-6 text-sm text-surface-500">
            <Link
              href="#"
              className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
            >
              Documentación
            </Link>
            <Link
              href="#"
              className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
            >
              Soporte
            </Link>
            <Link
              href="#"
              className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
            >
              Privacidad
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-surface-400">
            © {year} DesignEngine. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
