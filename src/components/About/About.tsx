import { Section } from "../ui/Section";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <Section id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4 text-white">
          <span className="text-blue-500 font-mono text-2xl md:text-3xl">
            01.
          </span>
          {t.about.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-neutral-400 leading-relaxed text-lg">
          {/* Column 1 */}
          <div className="space-y-6">
            {Array.isArray(t.about.description) && (
              <>
                <p>{t.about.description[0]}</p>
                <p>{t.about.description[1]}</p>
              </>
            )}
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {Array.isArray(t.about.description) && (
              <p>{t.about.description[2]}</p>
            )}

            {/* Optional: Add a visual element or quote to balance the height if needed */}
            <div className="p-6 bg-blue-900/10 border border-blue-500/20 rounded-xl mt-8">
              <p className="text-blue-400 text-base font-mono italic">
                "{t.hero.tagline}"
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
