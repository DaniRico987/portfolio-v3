import { HelmetProvider } from "react-helmet-async";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

import { Education } from "./components/Education/Education";

import { ScrollProgress } from "./components/ui/ScrollProgress";
import { ScrollToTop } from "./components/ui/ScrollToTop";

import { TechMarquee } from "./components/ui/TechMarquee";
import { ParticleBackground } from "./components/ui/ParticleBackground";
import { LanguageProvider } from "./context/LanguageContext";
import type { Language } from "./data";
import { SEOHead } from "./components/seo/SEOHead";
import { NotFound } from "./pages/NotFound";
import { StructuredData } from "./components/seo/StructuredData";

function LangRedirect() {
  const browserLanguage =
    typeof navigator !== "undefined" ? navigator.language.toLowerCase() : "en";

  return (
    <Navigate to={browserLanguage.startsWith("es") ? "/es" : "/en"} replace />
  );
}

interface AppShellProps {
  lang: Language;
}

function AppShell({ lang }: AppShellProps) {
  return (
    <LanguageProvider initialLang={lang}>
      <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-blue-500/30 relative">
        <ParticleBackground />
        <ScrollProgress />
        <ScrollToTop />
        <SEOHead lang={lang} pagePath="" />
        <StructuredData lang={lang} />

        <header className="relative z-30">
          <Navbar />
        </header>

        <main className="flex flex-col relative z-10">
          <Hero />
          <TechMarquee />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/es/*" element={<AppShell lang="es" />} />
        <Route path="/en/*" element={<AppShell lang="en" />} />
        <Route path="/" element={<LangRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
