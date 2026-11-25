import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";
import { useLanguage } from "../../context/LanguageContext";

export function Navbar() {
  const { t, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const NAV_LINKS = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Intersection Observer for Active Section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      aria-label={language === "es" ? "Navegación principal" : "Main navigation"}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800"
          : "bg-transparent"
      }`}
    >
      <div className="container-width flex items-center justify-between h-20">
        <a
          href="#"
          className="text-xl font-bold tracking-tight focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          Portfolio<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors relative focus-visible:ring-2 focus-visible:ring-blue-400",
                activeSection === link.href.substring(1)
                  ? "text-blue-500"
                  : "text-neutral-400 hover:text-white"
              )}
              aria-current={
                activeSection === link.href.substring(1) ? "location" : undefined
              }
            >
              {link.label}
              {activeSection === link.href.substring(1) && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}

          {/* Language Toggle */}
          <div
            role="group"
            aria-label={language === "es" ? "Idioma" : "Language"}
            className="flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-800/50 hover:bg-neutral-800 text-neutral-300 transition-colors text-xs font-medium border border-white/5"
          >
            <Globe size={14} aria-hidden="true" />
            <Link
              to="/es"
              className={cn(
                "px-1.5 py-0.5 rounded transition-colors focus-visible:ring-2 focus-visible:ring-blue-400",
                language === "es" ? "text-white bg-white/10" : "hover:text-white"
              )}
              aria-current={language === "es" ? "page" : undefined}
            >
              ES
            </Link>
            <Link
              to="/en"
              className={cn(
                "px-1.5 py-0.5 rounded transition-colors focus-visible:ring-2 focus-visible:ring-blue-400",
                language === "en" ? "text-white bg-white/10" : "hover:text-white"
              )}
              aria-current={language === "en" ? "page" : undefined}
            >
              EN
            </Link>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-neutral-200 transition-colors focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            {t.nav.resume}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <div
            role="group"
            aria-label={language === "es" ? "Idioma" : "Language"}
            className="flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-800/50 text-neutral-300 text-xs font-medium border border-white/5"
          >
            <Globe size={14} aria-hidden="true" />
            <Link
              to="/es"
              className={cn(
                "px-1.5 py-0.5 rounded transition-colors focus-visible:ring-2 focus-visible:ring-blue-400",
                language === "es" ? "text-white bg-white/10" : "hover:text-white"
              )}
              aria-current={language === "es" ? "page" : undefined}
            >
              ES
            </Link>
            <Link
              to="/en"
              className={cn(
                "px-1.5 py-0.5 rounded transition-colors focus-visible:ring-2 focus-visible:ring-blue-400",
                language === "en" ? "text-white bg-white/10" : "hover:text-white"
              )}
              aria-current={language === "en" ? "page" : undefined}
            >
              EN
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileMenuOpen ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="text-neutral-400 hover:text-white focus-visible:ring-2 focus-visible:ring-blue-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-navigation">
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-neutral-950 border-b border-neutral-800"
            >
              <div className="container-width flex flex-col gap-6 py-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => {
                      const target = document.getElementById(
                        link.href.slice(1)
                      );

                      if (target) {
                        event.preventDefault();
                        window.history.pushState(null, "", link.href);
                        target.scrollIntoView({
                          behavior: "instant",
                          block: "start",
                        });
                      }

                      closeMobileMenu();
                    }}
                    className={cn(
                      "text-lg font-medium transition-colors focus-visible:ring-2 focus-visible:ring-blue-400",
                      activeSection === link.href.substring(1)
                        ? "text-blue-500"
                        : "text-neutral-400 hover:text-white"
                    )}
                    aria-current={
                      activeSection === link.href.substring(1)
                        ? "location"
                        : undefined
                    }
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  onClick={closeMobileMenu}
                  className="w-full text-center py-3 font-medium bg-neutral-800 rounded-lg text-white focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  {t.nav.resume}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
