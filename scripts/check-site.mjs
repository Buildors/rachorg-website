import { access, readFile, readdir, stat } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = join(root, "dist");
const problems = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
}

const files = await walk(dist);
const htmlFiles = files.filter((file) => extname(file) === ".html");

if (htmlFiles.length !== 13) problems.push(`Expected 13 HTML files including 404, found ${htmlFiles.length}`);

for (const file of htmlFiles) {
  const source = await readFile(file, "utf8");
  if (!/<title>[^<]+<\/title>/.test(source)) problems.push(`${file} is missing a title`);
  if (!/<h1>[^<]+<\/h1>/.test(source)) problems.push(`${file} is missing an h1`);
  if (/wixstatic|filesusr|wix\.com/i.test(source)) problems.push(`${file} still depends on Wix`);

  const references = [...source.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const reference of references) {
    if (!reference.startsWith("/") || reference.startsWith("//")) continue;
    const clean = reference.split(/[?#]/)[0];
    const candidate = extname(clean)
      ? join(dist, clean.slice(1))
      : clean === "/"
        ? join(dist, "index.html")
        : join(dist, clean.slice(1), "index.html");
    try { await access(candidate); }
    catch { problems.push(`${file} references missing ${reference}`); }
  }
}

for (const path of ["about-us", "experiences", "events", "past-events", "performers", "artists", "volunteers", "schedule-consult", "honorees", "contact-details", "donate"]) {
  try { await access(join(dist, path, "index.html")); }
  catch { problems.push(`Missing legacy route /${path}`); }
}

const video = await stat(join(dist, "assets", "rach-hero.mp4"));
if (video.size >= 25 * 1024 * 1024) problems.push("Homepage video exceeds the Cloudflare Pages 25 MiB per-file limit");

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} pages and ${files.length} output files; all internal references resolve.`);
