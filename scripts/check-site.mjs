import { access, readFile, readdir, stat } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pages } from "../src/content.mjs";
import { profilePages } from "../src/profiles/index.mjs";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = join(root, "dist");
const problems = [];
const allPages = [...pages, ...profilePages];

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
const sitemapSource = await readFile(join(dist, "sitemap.xml"), "utf8");

if (htmlFiles.length !== allPages.length + 1) problems.push(`Expected ${allPages.length + 1} HTML files including 404, found ${htmlFiles.length}`);

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

for (const page of allPages) {
  const destination = page.path === "/"
    ? join(dist, "index.html")
    : join(dist, page.path.slice(1), "index.html");
  try {
    await access(destination);
    const source = await readFile(destination, "utf8");
    const sitemapEntry = `<loc>https://rachorg.org${page.path}</loc>`;
    if (page.draft && sitemapSource.includes(sitemapEntry)) problems.push(`${page.path} is a draft but appears in the sitemap`);
    if (!page.draft && !sitemapSource.includes(sitemapEntry)) problems.push(`${page.path} is published but missing from the sitemap`);
    if (!page.draft && source.includes('content="noindex, nofollow"')) problems.push(`${page.path} is published but still marked noindex`);
  }
  catch { problems.push(`Missing generated route ${page.path}`); }
}

const profilesHubSource = await readFile(join(dist, "profiles", "index.html"), "utf8");

for (const profile of profilePages.filter((page) => page.type === "profile")) {
  const file = join(dist, profile.path.slice(1), "index.html");
  const source = await readFile(file, "utf8");
  const sourceIds = profile.sources.map(({ id }) => id);
  const uniqueSourceIds = new Set(sourceIds);
  const citedSourceIds = new Set([...profile.body.matchAll(/href="#source-(\d+)"/g)].map((match) => Number(match[1])));
  const requiredImageFields = [
    "image", "imageAlt", "imageCredit", "imageCreator", "imageCreatorAccount",
    "imageSource", "imageSourceRevision", "imageLicense", "imageLicenseUrl",
    "imageCreditText", "imageDisplayNote", "imageCaption"
  ];
  const missingImageFields = requiredImageFields.filter((field) => !profile[field]);
  if (missingImageFields.length) problems.push(`${profile.path} is missing portrait metadata: ${missingImageFields.join(", ")}`);
  if (uniqueSourceIds.size !== sourceIds.length) problems.push(`${profile.path} contains duplicate source IDs`);
  for (const sourceId of citedSourceIds) {
    if (!uniqueSourceIds.has(sourceId)) problems.push(`${profile.path} cites missing source ${sourceId}`);
  }
  for (const sourceId of sourceIds) {
    if (!citedSourceIds.has(sourceId)) problems.push(`${profile.path} lists uncited source ${sourceId}`);
  }
  if (!profile.recognitionSummary) problems.push(`${profile.path} is missing its RACH recognition summary`);
  if (!profile.draft && !profile.datePublished) problems.push(`${profile.path} is published without a publication date`);
  if (!source.includes('<meta property="og:type" content="article">')) problems.push(`${file} is missing article Open Graph metadata`);
  if (!source.includes('"@type":"Article"')) problems.push(`${file} is missing Article structured data`);
  if (!source.includes(`https://rachorg.org${profile.image}`)) problems.push(`${file} is missing its profile image metadata`);
  if (!source.includes('"@type":"ImageObject"') || !source.includes('"creditText"') || !source.includes('"license"')) problems.push(`${file} is missing licensed ImageObject structured data`);
  if (!source.includes(profile.imageCreator) || !source.includes(profile.imageLicenseUrl) || !source.includes(profile.imageDisplayNote)) problems.push(`${file} is missing visible portrait attribution or modification disclosure`);
  if (!profilesHubSource.includes(profile.imageCreator) || !profilesHubSource.includes(profile.imageLicenseUrl)) problems.push(`/profiles is missing the visible portrait credit for ${profile.title}`);
  if (!source.includes("Why RACH recognizes")) problems.push(`${file} is missing its recognition rationale`);
  if (!source.includes("Recognizing the Achievements and Contributions to Humanity")) problems.push(`${file} is missing the expanded RACH mission`);
  if (!profile.draft && (!source.includes(`<meta property="article:published_time" content="${profile.datePublished}">`) || !source.includes(`"datePublished":"${profile.datePublished}"`))) problems.push(`${file} is missing its published-date metadata`);
  try { await access(join(dist, profile.image.slice(1))); }
  catch { problems.push(`${file} references a missing profile portrait ${profile.image}`); }
  if (profile.draft && !source.includes('content="noindex, nofollow"')) problems.push(`${file} draft is not marked noindex`);
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
