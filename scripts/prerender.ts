import fs from "fs";
import path from "path";

const DOMAIN = "https://danielrico.vercel.app";
const ROUTES = [
  {
    path: "es",
    language: "es",
    title: "Desarrollador de Software",
    jobTitle: "Desarrollador de Software",
    descriptionStartsWith: "Desarrollador de software",
    projectsHeading: "Proyectos Destacados",
  },
  {
    path: "en",
    language: "en",
    title: "Software Developer",
    jobTitle: "Software Developer",
    descriptionStartsWith: "Colombian software developer",
    projectsHeading: "Featured Projects",
  },
] as const;

for (const route of ROUTES) {
  const htmlPath = path.join(process.cwd(), "dist", route.path, "index.html");
  if (!fs.existsSync(htmlPath)) {
    throw new Error(`No se generó el HTML prerenderizado para /${route.path}.`);
  }

  const html = fs.readFileSync(htmlPath, "utf-8");
  const canonical = `${DOMAIN}/${route.path}`;
  const titleMatches = html.match(/<title>[^<]*<\/title>/g) ?? [];
  const canonicalMatches = html.match(/rel="canonical"/g) ?? [];
  const alternateLinks = html.match(/<link[^>]*rel="alternate"[^>]*>/g) ?? [];
  const structuredDataMatches =
    html.match(/type="application\/ld\+json"/g) ?? [];
  const description = html.match(
    /<meta name="description" content="([^"]+)"/
  )?.[1];
  const structuredData = html.match(
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/
  )?.[1];
  const graph = structuredData
    ? (JSON.parse(structuredData) as {
        "@graph"?: Array<{
          "@type"?: string;
          jobTitle?: string;
        }>;
      })
    : undefined;
  const person = graph?.["@graph"]?.find((item) => item["@type"] === "Person");
  const title = titleMatches[0]?.replace("<title>", "").replace("</title>", "");

  if (
    !html.includes(`<html lang="${route.language}"`) ||
    !titleMatches.some((title) => title.includes(route.title)) ||
    !description?.startsWith(route.descriptionStartsWith) ||
    !html.includes(`href="${canonical}"`) ||
    canonicalMatches.length !== 1 ||
    !alternateLinks.some(
      (link) => link.includes('hreflang="es"') && link.includes(`${DOMAIN}/es`)
    ) ||
    !alternateLinks.some(
      (link) => link.includes('hreflang="en"') && link.includes(`${DOMAIN}/en`)
    ) ||
    !html.includes(`property="og:title" content="${title}"`) ||
    !html.includes(route.projectsHeading) ||
    structuredDataMatches.length !== 1 ||
    person?.jobTitle !== route.jobTitle
  ) {
    throw new Error(
      `El HTML de /${route.path} no contiene contenido localizado y metadatos completos.`
    );
  }
}

console.log("✓ HTML localizado y metadatos verificados — /es /en");
