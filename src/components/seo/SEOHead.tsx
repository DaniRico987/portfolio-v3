import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  lang: "es" | "en";
  pagePath?: string;
  titleOverride?: string;
  descriptionOverride?: string;
  noIndex?: boolean;
}

const DOMAIN = "https://danielrico.vercel.app";
const FULL_NAME = "Daniel Rico Palacio";

const meta = {
  es: {
    title: `${FULL_NAME} | Desarrollador de Software · Arquitectura · Liderazgo`,
    description:
      "Desarrollador de software colombiano enfocado en arquitectura de soluciones, desarrollo full-stack, APIs y liderazgo técnico. Disponible para proyectos y colaboración desde Risaralda, Colombia.",
    ogLocale: "es_CO",
    ogImage: `${DOMAIN}/og-image-es.png`,
  },
  en: {
    title: `${FULL_NAME} | Software Developer · Architecture · Leadership`,
    description:
      "Colombian software developer focused on solution architecture, full-stack development, APIs, and technical leadership. Available for projects and collaboration from Risaralda, Colombia.",
    ogLocale: "en_US",
    ogImage: `${DOMAIN}/og-image-en.png`,
  },
};

export function SEOHead({
  lang,
  pagePath = "",
  titleOverride,
  descriptionOverride,
  noIndex = false,
}: SEOHeadProps) {
  const selectedMeta = meta[lang];
  const title = titleOverride ?? selectedMeta.title;
  const description = descriptionOverride ?? selectedMeta.description;
  const ogImage = selectedMeta.ogImage;
  const ogLocale = selectedMeta.ogLocale;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? "noindex, follow" : "index, follow"} />
      <link rel="canonical" href={`${DOMAIN}/${lang}${pagePath}`} />
      <link rel="alternate" hrefLang="es" href={`${DOMAIN}/es${pagePath}`} />
      <link rel="alternate" hrefLang="en" href={`${DOMAIN}/en${pagePath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}/es${pagePath}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/${lang}${pagePath}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:site_name" content="Daniel Rico Palacio · Portfolio" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
}

// TODO: Crear public/og-image-es.png y public/og-image-en.png
// Dimensiones requeridas: 1200×630 px
// Texto sugerido ES: "Daniel Rico Palacio · Desarrollador de Software"
// Texto sugerido EN: "Daniel Rico Palacio · Software Developer"
