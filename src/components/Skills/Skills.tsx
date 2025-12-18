import { motion, type Variants } from "framer-motion";
import { Section } from "../ui/Section";
import { SKILLS_DATA } from "../../data";
import { useLanguage } from "../../context/LanguageContext";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="skills" centered>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto w-full"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-16 flex items-center justify-center gap-4 text-white">
          <span className="text-blue-500 font-mono text-2xl md:text-3xl">
            04.
          </span>
          {t.skills.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="bg-neutral-900/40 backdrop-blur-sm p-8 rounded-2xl border border-neutral-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)]"
            >
              <h3 className="text-xl font-bold text-white mb-8 border-b border-neutral-800 pb-4 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                {category.category}
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 group p-2 rounded-lg hover:bg-white/5 transition-colors cursor-default"
                  >
                    <div className="p-2.5 bg-neutral-950 rounded-xl border border-neutral-800 text-blue-500 group-hover:border-blue-500/50 group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <skill.icon size={22} />
                    </div>
                    <span className="text-neutral-400 font-medium group-hover:text-white transition-colors text-lg">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
