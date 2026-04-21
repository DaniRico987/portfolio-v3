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
    title: `${FULL_NAME} | Desarrollador Frontend · React & TypeScript · Colombia`,
    description:
      "Desarrollador frontend colombiano especializado en React, TypeScript y experiencias de usuario rapidas y accesibles. Disponible para proyectos freelance desde Risaralda, Colombia.",
    ogLocale: "es_CO",
    ogImage: `${DOMAIN}/og-image-es.png`,
  },
  en: {
    title: `${FULL_NAME} | Frontend Developer · React & TypeScript · Colombia`,
    description:
      "Colombian frontend developer specialized in React, TypeScript and fast, accessible user experiences. Available for freelance projects from Risaralda, Colombia.",
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
// Texto sugerido ES: "Daniel Rico Palacio · Desarrollador Frontend"
// Texto sugerido EN: "Daniel Rico Palacio · Frontend Developer"
