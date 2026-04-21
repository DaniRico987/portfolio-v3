import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  lang: "es" | "en";
}

const DOMAIN = "https://danielrico.vercel.app";

export function StructuredData({ lang }: StructuredDataProps) {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${DOMAIN}/#person`,
        name: "Daniel Rico Palacio",
        url: DOMAIN,
        jobTitle: lang === "es" ? "Desarrollador Frontend" : "Frontend Developer",
        knowsAbout: [
          "React",
          "TypeScript",
          "Vite",
          "TailwindCSS",
          "Framer Motion",
          "Node.js",
          "REST APIs",
          "Git",
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "CO",
          addressRegion: "Risaralda",
          addressLocality: "Dosquebradas",
        },
        sameAs: [
          "https://github.com/DaniRico987",
          "https://www.linkedin.com/in/daniel-rico-palacio-7ab6a027b/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${DOMAIN}/#website`,
        name: "Daniel Rico Palacio · Portfolio",
        url: DOMAIN,
        inLanguage: lang === "es" ? "es-CO" : "en-US",
        author: { "@id": `${DOMAIN}/#person` },
      },
    ],
  };

  return (
    <Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
    </Helmet>
  );
}
