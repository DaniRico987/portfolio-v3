import { motion } from "framer-motion";
import { SKILLS_DATA } from "../../data";

// Flatten all skills into a single array
const ALL_SKILLS = SKILLS_DATA.flatMap((category) => category.items);

export function TechMarquee() {
  return (
    <div className="py-10 bg-neutral-950 border-y border-neutral-900 overflow-hidden relative z-10 w-full">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-20 pointer-events-none" />

      <motion.div
        className="flex gap-16 w-max"
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Slow constant speed
        }}
      >
        {/* Render items twice to create seamless loop */}
        {[...ALL_SKILLS, ...ALL_SKILLS].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex items-center gap-3 text-neutral-500 hover:text-blue-500 transition-colors group cursor-default"
          >
            <skill.icon className="text-3xl group-hover:text-blue-400 transition-colors" />
            <span className="text-xl font-bold font-mono uppercase tracking-wider opacity-70 group-hover:opacity-100 group-hover:text-blue-100 transition-opacity">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
