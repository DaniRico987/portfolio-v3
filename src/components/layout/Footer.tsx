import { SOCIAL_LINKS } from "../../data";
import { useLanguage } from "../../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const NAME = "Daniel Rico Palacio";

  return (
    <footer className="py-8 bg-neutral-950 text-center border-t border-neutral-900">
      <div className="flex justify-center gap-6 mb-8">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-blue-500 transition-colors transform hover:-translate-y-1"
          >
            <link.icon size={20} />
          </a>
        ))}
      </div>
      <p className="font-mono text-sm text-neutral-500 mb-2">
        Designed & Built by <span className="text-blue-500">{NAME}</span>
      </p>
      <p className="text-xs text-neutral-600">{t.footer.built}</p>
    </footer>
  );
}
