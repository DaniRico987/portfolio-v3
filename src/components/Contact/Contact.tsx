import { Section } from "../ui/Section";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <Section id="contact" centered className="py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto"
      >
        <span className="text-blue-500 font-mono mb-6 block text-xl">
          {t.contact.subtitle}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          {t.contact.title}
        </h2>
        <p className="text-neutral-400 text-lg leading-relaxed mb-12">
          {t.contact.description}
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=danielrico2007@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-5 bg-transparent border border-blue-500 text-blue-500 font-medium rounded-lg hover:bg-blue-500/10 transition-all hover:-translate-y-1 text-lg"
        >
          {t.contact.cta}
        </a>
      </motion.div>
    </Section>
  );
}
