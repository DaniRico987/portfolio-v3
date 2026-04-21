/// <reference types="node" />
import fs from "fs";
import path from "path";

const DOMAIN = "https://danielrico.vercel.app";

const routes = [{ path: "", priority: "1.0", changefreq: "monthly" }];

const langs = ["es", "en"] as const;
const today = new Date().toISOString().split("T")[0];

const urls = langs
  .flatMap((lang) =>
    routes.map(({ path: routePath, priority, changefreq }) => {
      return `  <url>
    <loc>${DOMAIN}/${lang}${routePath}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="es"
      href="${DOMAIN}/es${routePath}"/>
    <xhtml:link rel="alternate" hreflang="en"
      href="${DOMAIN}/en${routePath}"/>
    <xhtml:link rel="alternate" hreflang="x-default"
      href="${DOMAIN}/es${routePath}"/>
  </url>`;
    }),
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

const outputPath = path.join(process.cwd(), "public", "sitemap.xml");
fs.writeFileSync(outputPath, xml, { encoding: "utf-8" });

console.log(`✓ sitemap.xml generado — ${langs.length * routes.length} URLs`);
