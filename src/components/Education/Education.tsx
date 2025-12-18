import { Section } from "../ui/Section";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

export function Education() {
  const { t } = useLanguage();

  return (
    <Section id="education" className="relative">
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-16 flex items-center gap-4 text-white">
          <span className="text-blue-500 font-mono text-2xl md:text-3xl">
            03.
          </span>
          {t.education.title}
        </h2>

        <div className="relative border-l-2 border-neutral-800 ml-4">
          {t.education.data.map((edu, index) => (
            <div key={index} className="relative ml-8 mb-12 last:mb-0">
              <div className="absolute -left-7 top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-neutral-950 shadow-lg shadow-blue-500/30"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                  {edu.school}
                </h3>
                <span className="text-sm font-mono text-blue-500/80 bg-blue-900/10 px-3 py-1 rounded-full border border-blue-500/20">
                  {edu.period}
                </span>
              </div>

              <div className="text-lg text-blue-100 mb-2 font-medium">
                {edu.degree}
              </div>
              <p className="text-neutral-400 leading-relaxed max-w-xl">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
