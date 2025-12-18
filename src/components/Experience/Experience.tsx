import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { useLanguage } from "../../context/LanguageContext";

export function Experience() {
  const { t } = useLanguage();

  return (
    <Section id="experience" className="bg-neutral-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-16 flex items-center gap-4 text-white">
          <span className="text-blue-500 font-mono text-2xl md:text-3xl">
            02.
          </span>
          {t.experience.title}
        </h2>

        <div className="space-y-12 border-l border-neutral-800 ml-3 md:ml-0 pl-8 md:pl-0">
          {t.experience.data.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative md:pl-8"
            >
              <div className="absolute -left-[33px] top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-neutral-950 block md:hidden" />
              <div className="hidden md:block absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-blue-500" />

              <h3 className="text-xl font-bold text-neutral-100">
                {job.role}{" "}
                <span className="text-blue-500">@ {job.company}</span>
              </h3>
              <p className="font-mono text-sm text-neutral-500 mb-4 mt-1">
                {job.period}
              </p>
              <p className="text-neutral-400 leading-relaxed max-w-xl">
                {job.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
