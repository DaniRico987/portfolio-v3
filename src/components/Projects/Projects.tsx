import { motion, type Variants } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "../ui/Section";
import { useLanguage } from "../../context/LanguageContext";
import { useState } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const gradients = [
  "from-blue-500 to-purple-600",
  "from-cyan-500 to-blue-600",
  "from-indigo-500 to-blue-600",
];

export function Projects() {
  const { t } = useLanguage();
  const [flipped, setFlipped] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    if (flipped.includes(index)) {
      setFlipped(flipped.filter((i) => i !== index));
    } else {
      setFlipped([...flipped, index]);
    }
  };

  return (
    <Section id="projects">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-16 flex items-center gap-4 text-white">
          <span className="text-blue-500 font-mono text-2xl md:text-3xl">
            05.
          </span>
          {t.projects.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.data.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-[400px] perspective-1000"
            >
              <div
                onClick={() => toggleFlip(index)}
                className={`relative w-full h-full cursor-pointer transition-transform duration-700 transform-style-3d ${
                  flipped.includes(index) ? "rotate-y-180" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: flipped.includes(index)
                    ? "rotateY(180deg)"
                    : "rotateY(0deg)",
                }}
              >
                {/* Front Face */}
                <div
                  className="absolute inset-0 backface-hidden rounded-xl overflow-hidden border border-neutral-800 hover:border-blue-500/50 transition-colors"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div
                    className={`h-full bg-gradient-to-br ${
                      gradients[index % gradients.length]
                    } p-8 flex flex-col justify-between relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

                    <div className="relative z-10">
                      <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white mb-4">
                        {t.projects.data.length === 3
                          ? index === 0
                            ? "Featured"
                            : index === 1
                            ? "Recent"
                            : "Production"
                          : "Project"}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                    </div>

                    <div className="relative z-10 space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="text-white/80 text-sm">
                        Click to view details →
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Face */}
                <div
                  className="absolute inset-0 backface-hidden rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="h-full p-6 flex flex-col">
                    {/* Header */}
                    <div className="mb-2">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-neutral-400 leading-relaxed text-sm">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-xs font-medium text-blue-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3 mt-6">
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-lg transition-colors text-sm font-medium"
                        >
                          <Github size={16} />
                          Code
                        </a>
                        {project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium"
                          >
                            <ExternalLink size={16} />
                            Live
                          </a>
                        )}
                      </div>

                      <button
                        onClick={() => toggleFlip(index)}
                        className="w-full text-center text-neutral-500 hover:text-neutral-400 text-xs transition-colors py-2"
                      >
                        Click to flip back →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
