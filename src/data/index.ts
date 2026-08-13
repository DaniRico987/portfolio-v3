import { Github, Linkedin, Mail } from "lucide-react";
import {
  SiReact,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiSpringboot,
  SiJson,
  SiGit,
  SiGithub,
  SiVite,
  SiWebpack,
  SiFigma,
  SiPostgresql,
  SiMongodb,
  SiFramer,
  SiNextdotjs,
  SiBootstrap,
  SiMaterialdesign,
  SiSass,
  SiExpress,
  SiPython,
  SiPostman,
} from "react-icons/si";
import { FaServer, FaPencilRuler } from "react-icons/fa";
import { IoLogoGitlab } from "react-icons/io5";

export type ProjectStatus =
  | "featured"
  | "recent"
  | "production"
  | "project";

interface ProjectItem {
  title: string;
  status: ProjectStatus;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

const defineProjects = <T extends ProjectItem[]>(projects: T) => projects;

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/DaniRico987",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/daniel-rico-palacio-7ab6a027b/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:danielrico2007@gmail.com",
    icon: Mail,
  },
];

export const SKILLS_DATA = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "Angular", icon: SiAngular },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Material UI", icon: SiMaterialdesign },
      { name: "Sass", icon: SiSass },
      { name: "Framer Motion", icon: SiFramer },
      { name: "UX/UI", icon: FaPencilRuler },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "NestJS", icon: SiNestjs },
      { name: "Express", icon: SiExpress },
      { name: "Python", icon: SiPython },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "REST APIs", icon: FaServer },
      { name: "JSON", icon: SiJson },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Gitlab", icon: IoLogoGitlab },
      { name: "Vite", icon: SiVite },
      { name: "Webpack", icon: SiWebpack },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      badge: "Hi, I'm",
      role: "Software Developer",
      tagline:
        "Designing software solutions with architecture, backend depth, and team coordination in mind.",
      about:
        "Hello! 👋 I'm Daniel Rico Palacio, a software developer from Colombia focused on building scalable systems, integrating frontend and backend, and growing into a software architect and project leader.",
      cta_work: "View Work",
      cta_cv: "Download CV",
    },
    about: {
      title: "About Me",
      description: [
        "My path started with a school project: trying to build a video game. That experience led me to Systems and Computing Engineering and, over time, to a broader view of software as a product, a system, and a team effort.",
        "Today I work across frontend, backend, APIs, and data, but my focus is bigger than the stack itself. I care about architecture, maintainability, documentation, and decisions that help a team move faster without sacrificing quality.",
        "My next step is to keep growing toward software architecture and project leadership, combining technical depth with the ability to align people, priorities, and delivery. Outside code, I enjoy cooking and long walks to reset my mind.",
      ],
      stats: {
        experience: "Years of Experience",
        projects: "Projects Completed",
        clients: "Happy Clients",
      },
    },
    experience: {
      title: "Work Experience",
      data: [
        {
          role: "Deputy Chief Technology Officer",
          company: "NEXIFY S.A.S",
          period: "Oct 2024 - Mar 2025",
          description:
            "Led technical initiatives and full-stack development with a focus on architecture, data integrity, and scalable backend decisions. Helped guide implementation choices and team execution across the product.",
        },
        {
          role: "Software Developer",
          company: "Universidad Tecnológica de Pereira",
          period: "Feb 2024 - Dec 2025",
          description:
            "Built and maintained software solutions with cross-functional collaboration, spanning user interfaces, application logic, and delivery practices for responsive and accessible systems.",
        },
      ],
    },
    education: {
      title: "Education",
      data: [
        {
          school: "Universidad Tecnológica de Pereira",
          degree: "Systems and Computing Engineering",
          period: "2022 - Present",
          description:
            "Currently pursuing a degree in Systems and Computing Engineering.",
        },
        {
          school: "Universidad Tecnológica de Pereira",
          degree: "Full Stack Developer",
          period: "Dec 2022 - Jan 2023",
          description: "Graduated from the FIRST BOOTCAMP-UTP",
        },
        {
          school: "Servicio Nacional de Aprendizaje (SENA)",
          degree: "Systems Technician",
          period: "Jan 2021 - Dec 2022",
          description:
            "System maintenance, software development foundations, and machine learning basics.",
        },
      ],
    },
    skills: {
      title: "Core Capabilities",
    },
    projects: {
      title: "Featured Projects",
      viewDetails: "Click to view details",
      flipBack: "Click to flip back",
      code: "Code",
      live: "Live",
      badgeFeatured: "Featured",
      badgeRecent: "Recent",
      badgeProduction: "Production",
      badgeProject: "Project",
      data: defineProjects([
        {
          title: "PaintTrack",
          status: "production",
          description:
            "Web application for tracking painting projects, built with a clear data flow and a product mindset. Demo Credentials: User: adminMaster | Pass: admin123",
          tech: ["TypeScript", "React", "Vite"],
          github: "https://github.com/DaniRico987/painttrack",
          live: "https://painttrack-eight.vercel.app/",
        },
        {
          title: "Sagittarius",
          status: "production",
          description:
            "Real-time chat application with conversation management, instant messaging, and backend-driven interaction patterns.",
          tech: ["TypeScript", "React", "Node.js", "SCSS"],
          github: "https://github.com/DaniRico987/sagittarius",
          live: "https://sagittarius-omega.vercel.app/",
        },
        {
          title: "Product Management App",
          status: "project",
          description:
            "Full-stack product management application designed with Spring Boot on the backend and Angular on the frontend, showing end-to-end architecture.",
          tech: ["Angular", "Spring Boot", "TypeScript", "Java"],
          github: "https://github.com/DaniRico987/SpringBoot---Angular",
          live: "#",
        },
        {
          title: "CoffeeAura",
          status: "project",
          description:
            "Project built to explore AI-assisted development, balancing design generation, implementation, and evaluation of the engineering process.",
          tech: ["TypeScript", "React", "Tailwind CSS"],
          github: "https://github.com/DaniRico987/coffeeAura",
          live: "https://coffee-aura.vercel.app/",
        },
        {
          title: "Eolia",
          status: "recent",
          description:
            "Concurrency and scheduling simulator for an Operating Systems course, with algorithms, metrics, and a React + TypeScript UI paired with a Python backend.",
          tech: ["Python", "TypeScript", "React", "Vite"],
          github: "https://github.com/DaniRico987/eolia",
          live: "#",
        },
        {
          title: "Pitchme",
          status: "project",
          description:
            "Upload your CV, paste the job offer, and get improvement suggestions to boost your chances. Work in progress.",
          tech: ["TypeScript", "React", "Tailwind CSS"],
          github: "https://github.com/DaniRico987/pitchme",
          live: "https://pitchme-dr.vercel.app/",
        },
      ]),
    },
    contact: {
      subtitle: "04. Let's Talk",
      title: "Let's Build Something Useful",
      description:
        "If you're looking for a software developer who can think in systems, own features end-to-end, or help shape technical direction, I'm open to talking. Send me a message and I'll reply as soon as I can.",
      cta: "Email Me",
    },
    footer: {
      built: "Built with React & Tailwind V4",
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      education: "Educación",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      resume: "Currículum",
    },
    hero: {
      badge: "Hola, soy",
      role: "Desarrollador de Software",
      tagline:
        "Diseñando soluciones de software con arquitectura, backend y coordinación de equipo en mente.",
      about:
        "¡Hola! 👋 Soy Daniel Rico Palacio, desarrollador de software en Colombia, enfocado en construir sistemas escalables, integrar frontend y backend, y crecer hacia arquitectura de software y liderazgo de proyectos.",
      cta_work: "Ver Trabajo",
      cta_cv: "Descargar CV",
    },
    about: {
      title: "Sobre Mí",
      description: [
        "Todo comenzó con un proyecto escolar: intentar crear un videojuego. Esa experiencia me llevó a Ingeniería en Sistemas y Computación y, con el tiempo, a entender el software como producto, sistema y trabajo en equipo.",
        "Hoy trabajo entre frontend, backend, APIs y datos, pero mi enfoque va más allá del stack. Me importan la arquitectura, la mantenibilidad, la documentación y las decisiones que ayudan a un equipo a avanzar rápido sin perder calidad.",
        "Mi siguiente objetivo es seguir creciendo hacia la arquitectura de software y el liderazgo de proyectos, combinando profundidad técnica con la capacidad de alinear personas, prioridades y entregas. Fuera del código, disfruto cocinar y caminar para despejar la mente.",
      ],
      stats: {
        experience: "Años de Experiencia",
        projects: "Proyectos Completados",
        clients: "Clientes Felices",
      },
    },
    experience: {
      title: "Experiencia Laboral",
      data: [
        {
          role: "Subdirector de Tecnología (Deputy CTO)",
          company: "NEXIFY S.A.S",
          period: "Oct 2024 - Mar 2025",
          description:
            "Lideré iniciativas técnicas y desarrollo full-stack con foco en arquitectura, integridad de datos y decisiones backend escalables. Acompañé la toma de decisiones de implementación y la ejecución del equipo en el producto.",
        },
        {
          role: "Desarrollador de Software",
          company: "Universidad Tecnológica de Pereira",
          period: "Feb 2024 - Dic 2025",
          description:
            "Construí y mantuve soluciones de software con colaboración transversal, abarcando interfaces, lógica de aplicación y prácticas de entrega para sistemas responsivos y accesibles.",
        },
      ],
    },
    education: {
      title: "Educación",
      data: [
        {
          school: "Universidad Tecnológica de Pereira",
          degree: "Ingeniería en Sistemas y Computación",
          period: "2022 - Actualidad",
          description:
            "Actualmente cursando la carrera de Ingeniería en Sistemas y Computación.",
        },
        {
          school: "Universidad Tecnológica de Pereira",
          degree: "Desarrollador Full Stack",
          period: "Dic 2022 - Ene 2023",
          description: "Egresado del PRIMER BOOTCAMP-UTP",
        },
        {
          school: "Servicio Nacional de Aprendizaje (SENA)",
          degree: "Técnico en Sistemas",
          period: "Ene 2021 - Dic 2022",
          description:
            "Mantenimiento de sistemas, fundamentos de desarrollo de software y conceptos básicos de aprendizaje automático.",
        },
      ],
    },

    skills: {
      title: "Habilidades Clave",
    },
    projects: {
      title: "Proyectos Destacados",
      viewDetails: "Haz clic para ver detalles",
      flipBack: "Haz clic para volver",
      code: "Código",
      live: "En vivo",
      badgeFeatured: "Destacado",
      badgeRecent: "Reciente",
      badgeProduction: "Producción",
      badgeProject: "Proyecto",
      data: defineProjects([
        {
          title: "PaintTrack",
          status: "production",
          description:
            "Aplicación web para seguimiento de proyectos de pintura, construida con un flujo de datos claro y mentalidad de producto. Credenciales Demo: Usuario: adminMaster | Clave: admin123",
          tech: ["TypeScript", "React", "Vite"],
          github: "https://github.com/DaniRico987/painttrack",
          live: "https://painttrack-eight.vercel.app/",
        },
        {
          title: "Sagittarius",
          status: "production",
          description:
            "Aplicación de chat en tiempo real con gestión de conversaciones, mensajería instantánea y patrones de interacción apoyados en backend.",
          tech: ["TypeScript", "React", "Node.js", "SCSS"],
          github: "https://github.com/DaniRico987/sagittarius",
          live: "https://sagittarius-omega.vercel.app/",
        },
        {
          title: "App de Gestión de Productos",
          status: "project",
          description:
            "Aplicación full-stack para gestión de productos diseñada con Spring Boot en backend y Angular en frontend, mostrando arquitectura de punta a punta.",
          tech: ["Angular", "Spring Boot", "TypeScript", "Java"],
          github: "https://github.com/DaniRico987/SpringBoot---Angular",
          live: "#"
        },
        {
          title: "CoffeeAura",
          status: "project",
          description:
            "Proyecto creado para explorar desarrollo asistido por IA, equilibrando generación de diseño, implementación y evaluación del proceso de ingeniería.",
          tech: ["TypeScript", "React", "Tailwind CSS"],
          github: "https://github.com/DaniRico987/coffeeAura",
          live: "https://coffee-aura.vercel.app/",
        },
        {
          title: "Eolia",
          status: "recent",
          description:
            "Simulador de planificación y concurrencia para Sistemas Operativos, con algoritmos, métricas y una UI en React + TypeScript conectada a un backend en Python.",
          tech: ["Python", "TypeScript", "React", "Vite"],
          github: "https://github.com/DaniRico987/eolia",
          live: "#",
        },
        {
          title: "Pitchme",
          status: "project",
          description:
            "Sube tu CV, pega la oferta y recibe sugerencias para mejorar tus opciones. Proyecto en desarrollo continuo.",
          tech: ["TypeScript", "React", "Tailwind CSS"],
          github: "https://github.com/DaniRico987/pitchme",
          live: "https://pitchme-dr.vercel.app/",
        },
      ]),
    },
    contact: {
      subtitle: "04. Hablemos",
      title: "Construyamos Algo Útil",
      description:
        "Si buscas un desarrollador de software que piense en sistemas, lleve funciones de principio a fin o ayude a definir la dirección técnica, estoy abierto a conversar. Escríbeme y te responderé lo antes posible.",
      cta: "Escríbeme",
    },
    footer: {
      built: "Construido con React y Tailwind V4",
    },
  },
};

export type Language = "en" | "es";
export type Translation = typeof translations.en;
