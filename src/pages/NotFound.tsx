import { Link, useLocation } from "react-router-dom";
import { SEOHead } from "../components/seo/SEOHead";

export function NotFound() {
  const { pathname } = useLocation();
  const lang = pathname.startsWith("/en") ? "en" : "es";

  return (
    <>
      <SEOHead
        lang={lang}
        noIndex={true}
        titleOverride={
          lang === "es"
            ? "404 - Página no encontrada | Daniel Rico Palacio"
            : "404 - Page not found | Daniel Rico Palacio"
        }
      />
      <main className="min-h-screen bg-neutral-950 text-neutral-50 flex items-center justify-center px-6">
        <section className="w-full max-w-2xl border border-neutral-800 rounded-2xl p-8 md:p-12 text-center bg-neutral-900/40 backdrop-blur-sm">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {lang === "es" ? "404 — Página no encontrada" : "404 — Page not found"}
          </h1>
          <p className="text-neutral-400 text-lg mb-10">
            {lang === "es"
              ? "Esta página no existe o fue movida."
              : "This page doesn't exist or was moved."}
          </p>
          <Link
            to={`/${lang}`}
            className="inline-block px-6 py-3 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-colors font-medium"
          >
            {lang === "es" ? "← Volver al inicio" : "← Back to home"}
          </Link>
        </section>
      </main>
    </>
  );
}
