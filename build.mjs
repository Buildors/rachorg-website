import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { pages } from "./src/content.mjs";
import { renderPage } from "./src/template.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(join(root, "public"), dist, { recursive: true });

for (const page of pages) {
  const destination = page.path === "/"
    ? join(dist, "index.html")
    : join(dist, page.path.slice(1), "index.html");
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, renderPage(page), "utf8");
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url><loc>https://rachorg.org${page.path}</loc></url>`).join("\n")}
</urlset>\n`;
await writeFile(join(dist, "sitemap.xml"), sitemap, "utf8");

const notFoundPage = {
  path: "/404",
  title: "Page Not Found",
  description: "The requested RACH page could not be found.",
  eyebrow: "404",
  heading: "This page has moved",
  background: "/assets/about.webp",
  body: `<section class="content-section compact center"><p>We could not find the page you requested.</p><p><a class="button" href="/">Return home</a></p></section>`
};
await writeFile(join(dist, "404.html"), renderPage(notFoundPage), "utf8");

console.log(`Built ${pages.length} pages in ${dist}`);
