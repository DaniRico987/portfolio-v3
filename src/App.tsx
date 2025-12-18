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

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-blue-500/30 relative">
      <ParticleBackground />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />

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
  );
}

export default App;
