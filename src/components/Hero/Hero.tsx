import { ArrowRight, Download } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { Section } from "../ui/Section";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 10,
    },
  },
};

export function Hero() {
  const { t } = useLanguage();
  const NAME = "Daniel Rico Palacio";

  return (
    <Section
      id="hero"
      centered
      className="pt-32 pb-16 md:pt-48 md:pb-32 relative overflow-visible"
    >
      {/* Background Blobs (Slower, smoother animation) */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="max-w-4xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-block px-3 py-1 mb-6 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm">
              <span className="text-blue-400 font-medium tracking-wide text-sm font-mono">
                {t.hero.badge}
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            {NAME.split(" ")[0]}{" "}
            <span className="text-gradient">
              {NAME.split(" ")[1] + " " + NAME.split(" ")[2]}
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-neutral-400 mb-8 leading-tight"
          >
            {t.hero.tagline}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 border-l-2 border-blue-500/30 pl-6"
          >
            {t.hero.about}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-neutral-950 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              {t.hero.cta_work}{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border border-neutral-700 font-medium rounded-lg hover:border-blue-500/50 hover:bg-blue-500/5 transition-colors"
            >
              {t.hero.cta_cv}{" "}
              <Download
                size={18}
                className="group-hover:translate-y-1 transition-transform"
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
