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
      badge: "Hi, my name is",
      role: "Software Developer",
      tagline: "Building intuitive, high-performance web experiences.",
      about:
        "Hello! 👋 I'm Daniel Rico Palacio, a passionate Web Developer from Colombia. My goal is to create unique and efficient digital experiences using technology.",
      cta_work: "View Work",
      cta_cv: "Download CV",
    },
    about: {
      title: "About Me",
      description: [
        "My journey began with a high school passion project: attempting to build a video game. Getting lost in tutorials and lines of code, I realized I loved the process of creation and how fast time flew when I was programming. That spark led me to pursue Systems Engineering, where I found my true calling.",
        "I pride myself on being a perfectionist with a plan. I don't just write code; I architect solutions. My experience has taught me that meticulous planning prevents poor performance. I believe software is a team sport—clean code and clear documentation are my standards because 'it works on my machine' isn't good enough for enterprise-grade applications.",
        "Looking ahead, I'm steering my career toward the intersection of AI, App Development, and Neuromarketing. When I'm away from the keyboard, you'll find me trying to master the art of cooking or clearing my mind on a long walk.",
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
            "Leading technical initiatives and full-stack development. Responsible for architectural decisions and ensuring data integrity with JSON and scalable backend solutions.",
        },
        {
          role: "Frontend Developer",
          company: "Universidad Tecnológica de Pereira",
          period: "Feb 2024 - Dec 2025",
          description:
            "Focused on Front-End Development and User Experience (UX). Collaborating with cross-functional teams to deliver responsive and accessible web interfaces.",
        },
      ],
    },
    education: {
      title: "Education",
      data: [
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
      title: "Technical Arsenal",
    },
    projects: {
      title: "Featured Projects",
      data: [
        {
          title: "PaintTrack",
          description:
            "Web application for tracking painting projects. Demo Credentials: User: adminMaster | Pass: admin123",
          tech: ["TypeScript", "React", "Vite"],
          github: "https://github.com/DaniRico987/painttrack",
          live: "https://painttrack-eight.vercel.app/",
        },
        {
          title: "Sagittarius",
          description:
            "Real-time chat application with conversation management and instant messaging features.",
          tech: ["TypeScript", "React", "Node.js", "SCSS"],
          github: "https://github.com/DaniRico987/sagittarius",
          live: "https://sagittarius-omega.vercel.app/",
        },
        {
          title: "Product Management App",
          description:
            "Full-stack application for product management developed with Spring Boot (Backend) and Angular (Frontend).",
          tech: ["Angular", "Spring Boot", "TypeScript", "Java"],
          github: "https://github.com/DaniRico987/SpringBoot---Angular",
          live: "#",
        },
      ],
    },
    contact: {
      subtitle: "04. What's Next?",
      title: "Get In Touch",
      description:
        "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      cta: "Say Hello",
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
      badge: "Hola, mi nombre es",
      role: "Desarrollador de Software",
      tagline:
        "Construyendo experiencias web intuitivas y de alto rendimiento.",
      about:
        "¡Hola! 👋 Soy Daniel Rico Palacio, un apasionado Desarrollador Web de Colombia. Mi objetivo es crear experiencias digitales únicas y eficientes utilizando tecnología.",
      cta_work: "Ver Trabajo",
      cta_cv: "Descargar CV",
    },
    about: {
      title: "Sobre Mí",
      description: [
        "Todo comenzó en el colegio con un proyecto ambicioso: crear un videojuego. Entre tutoriales y código, descubrí que disfrutaba tanto el proceso de creación que perdía la noción del tiempo. Esa chispa me llevó a estudiar Ingeniería de Sistemas, donde formalicé mi pasión.",
        "Me defino por mi autoaprendizaje y perfeccionismo; no avanzo hasta que el resultado es impecable. Mi experiencia me ha enseñado que una gran ejecución nace de una minuciosa planificación. Valoro profundamente la documentación y el código limpio, porque a nivel empresarial el software debe ser comprensible para todo el equipo, no solo para su autor.",
        "Miro hacia el futuro con gran interés en la IA, el desarrollo de aplicaciones y el neuromarketing. Cuando no estoy programando, me encontrarás intentando dominar nuevas recetas en la cocina o despejando la mente con una buena caminata.",
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
            "Liderando iniciativas técnicas y desarrollo full-stack. Responsable de decisiones arquitectónicas y asegurar la integridad de datos con JSON y soluciones backend escalables.",
        },
        {
          role: "Desarrollador Frontend",
          company: "Universidad Tecnológica de Pereira",
          period: "Feb 2024 - Dic 2025",
          description:
            "Enfocado en Desarrollo Front-End y Experiencia de Usuario (UX). Colaborando con equipos multidisciplinarios para entregar interfaces web responsivas y accesibles.",
        },
      ],
    },
    education: {
      title: "Educación",
      data: [
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
      title: "Arsenal Técnico",
    },
    projects: {
      title: "Proyectos Destacados",
      data: [
        {
          title: "PaintTrack",
          description:
            "Aplicación web para seguimiento de proyectos de pintura. Credenciales Demo: Usuario: adminMaster | Clave: admin123",
          tech: ["TypeScript", "React", "Vite"],
          github: "https://github.com/DaniRico987/painttrack",
          live: "https://painttrack-eight.vercel.app/",
        },
        {
          title: "Sagittarius",
          description:
            "Aplicación de chat en tiempo real con gestión de conversaciones y mensajería instantánea.",
          tech: ["TypeScript", "React", "Node.js", "SCSS"],
          github: "https://github.com/DaniRico987/sagittarius",
          live: "#",
        },
        {
          title: "App de Gestión de Productos",
          description:
            "Aplicación full-stack para gestión de productos desarrollada con Spring Boot (Backend) y Angular (Frontend).",
          tech: ["Angular", "Spring Boot", "TypeScript", "Java"],
          github: "https://github.com/DaniRico987/SpringBoot---Angular",
          live: "#",
        },
      ],
    },
    contact: {
      subtitle: "04. ¿Qué sigue?",
      title: "Contáctame",
      description:
        "Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta o solo quieras saludar, ¡haré todo lo posible por responderte!",
      cta: "Saludar",
    },
    footer: {
      built: "Construido con React y Tailwind V4",
    },
  },
};

export type Language = "en" | "es";
export type Translation = typeof translations.en;
