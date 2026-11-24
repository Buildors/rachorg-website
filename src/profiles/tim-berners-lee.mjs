import { chapters } from "./tim-berners-lee-text.mjs";

const slug = "tim-berners-lee";
const title = "Tim Berners-Lee";
const headline = "Tim Berners-Lee and the Freedom to Link";
const category = "Technology";
const deck = "At CERN, Tim Berners-Lee built a way to link documents across computers. Librarians, programmers and scientists helped turn it into the World Wide Web.";
const recognitionSummary = "For inventing the World Wide Web and bringing people together to keep its underlying standards open to anyone building a browser or publishing a page.";

const photographs = {
  portrait: {
    caption: "Berners-Lee arriving at the Guildhall in London on September 24, 2014, to receive the Honorary Freedom of the City.",
    alt: "Tim Berners-Lee in a suit and blue tie at the Guildhall in London.",
    width: 1440, height: 959, creator: "Paul Clarke", account: "Paulrclarke",
    source: "https://commons.wikimedia.org/wiki/File:Sir_Tim_Berners-Lee.jpg",
    revision: "https://commons.wikimedia.org/w/index.php?title=File:Sir_Tim_Berners-Lee.jpg&oldid=1302212546",
    license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    changes: "RACH resized and re-encoded this photograph. The series card crops the image and adjusts its display."
  },
  server: {
    caption: "The NeXT computer that served the first Web pages, photographed on display at the Science Museum in London.",
    alt: "The black NeXT computer beside its monitor, with a keyboard and mouse in front.",
    width: 1440, height: 951, creator: "Geni",
    source: "https://commons.wikimedia.org/wiki/File:NeXTcube_first_webserver.JPG",
    revision: "https://commons.wikimedia.org/w/index.php?title=File:NeXTcube_first_webserver.JPG&oldid=864258704",
    license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    changes: "RACH resized and re-encoded the photographer’s original image."
  },
  london: {
    caption: "Berners-Lee at the Home Office in London on March 11, 2010.",
    alt: "Berners-Lee gesturing in front of a Rewired State poster in London.",
    width: 1024, height: 862, creator: "Paul Clarke",
    source: "https://commons.wikimedia.org/wiki/File:Timbernerslee.jpg",
    license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    changes: "RACH re-encoded the full photograph."
  }
};

function imagePath(key) {
  return `/assets/profiles/${slug}-${key}.jpg`;
}

function figure(key) {
  const photo = photographs[key];
  const lead = key === "portrait";
  return `<figure class="profile-portrait${lead ? "" : " profile-archive-photo"}">
    <img src="${imagePath(key)}" width="${photo.width}" height="${photo.height}" alt="${photo.alt}" style="height:auto;aspect-ratio:auto;filter:none"${lead ? "" : ' loading="lazy"'}>
    <figcaption>${photo.caption} Photograph by ${photo.creator}, <a href="${photo.source}">Wikimedia Commons</a>.${key === "server" ? ` <a href="${escape(photo.revision)}">Original file record</a>.` : ""}
    <a rel="license" href="${photo.licenseUrl}">${photo.license}</a>. ${photo.changes}</figcaption>
  </figure>`;
}

function escape(text) {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function chapterId(chapter) {
  return chapter.heading.toLowerCase().replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/-$/, "");
}

const uniqueSources = new Map();
for (const chapter of chapters) {
  for (const source of chapter.sources) {
    if (!uniqueSources.has(source.url)) {
      uniqueSources.set(source.url, {...source, id: uniqueSources.size + 1});
    }
  }
}
const sources = [...uniqueSources.values()];
const illustrations = new Map([
  ["A browser you could write in", "server"],
  ["A promise in an Olympic stadium", "london"]
]);

function renderChapter(chapter) {
  const references = chapter.sources.map(source => {
    const {id} = uniqueSources.get(source.url);
    return `<a href="#source-${id}" aria-label="Source ${id}">${id}</a>`;
  }).join(", ");
  const paragraphs = chapter.paragraphs.map((paragraph, index) => {
    const text = escape(paragraph).replace(/\*([^*]+)\*/g, "<em>$1</em>");
    const citation = index === chapter.paragraphs.length - 1 ? `<sup class="source-ref">${references}</sup>` : "";
    return `<p>${text}${citation}</p>`;
  }).join("\n");
  const key = illustrations.get(chapter.heading);
  return `<section class="profile-section" id="${chapterId(chapter)}">
    <h2>${escape(chapter.heading)}</h2>${paragraphs}${key ? figure(key) : ""}
  </section>`;
}

const wordCount = chapters.flatMap(chapter => chapter.paragraphs)
  .reduce((count, paragraph) => count + paragraph.trim().split(/\s+/).length, 0);

const body = `<article class="profile-article">
  <header class="profile-intro">
    ${figure("portrait")}
    <div class="profile-intro-copy">
      <p class="profile-series-label">RACH Profiles · ${category}</p>
      <p class="profile-deck">${deck}</p>
      <p class="profile-byline"><span>RACH editorial · AI-assisted biography</span><span>November 24, 2026</span><span>${wordCount.toLocaleString("en-US")} words</span></p>
    </div>
  </header>
  <div class="profile-content-grid">
    <nav class="profile-toc" aria-label="In this profile">
      <p class="eyebrow">In this profile</p>
      ${chapters.map(chapter => `<a href="#${chapterId(chapter)}">${escape(chapter.heading)}</a>`).join("\n")}
      <a href="#reporting">Reporting and corrections</a><a href="#sources-heading">Sources</a>
    </nav>
    <div class="profile-copy">
      ${chapters.map(renderChapter).join("\n")}
      <section id="reporting" class="profile-methodology"><h2>Reporting and corrections</h2>
        <p>RACH independently selected Tim Berners-Lee for this profile and prepared the biography with AI assistance. RACH drew on the original Web proposal, public technical records, participants’ published accounts and independent reporting. RACH conducted no interview for this profile. Reporting through November 24, 2026.</p>
        <p>Send documented corrections to <a href="mailto:info@rachorg.org?subject=Tim%20Berners-Lee%20profile%20correction">info@rachorg.org</a>.</p>
      </section>
      <section class="profile-sources" aria-labelledby="sources-heading"><h2 id="sources-heading">Sources</h2>
        <ol>${sources.map(source => `<li id="source-${source.id}"><a href="${escape(source.url)}">${escape(source.title)}</a></li>`).join("\n")}</ol>
      </section>
    </div>
  </div>
</article>`;

const portrait = photographs.portrait;
export const timBernersLee = {
  slug, path: `/profiles/${slug}`, type: "profile", draft: false, title,
  seoTitle: headline, heading: headline, eyebrow: `RACH Profiles · ${category}`,
  description: deck, deck, category, recognitionSummary,
  image: imagePath("portrait"), imageAlt: portrait.alt, imageWidth: portrait.width, imageHeight: portrait.height,
  imagePosition: "66% center", imageCreator: portrait.creator, imageCreatorAccount: portrait.account,
  imageSource: portrait.source, imageSourceRevision: portrait.revision, imageLicense: portrait.license,
  imageLicenseUrl: portrait.licenseUrl, imageCredit: `${portrait.creator}, Wikimedia Commons`,
  imageCreditText: `${portrait.creator}, Wikimedia Commons, ${portrait.license}. ${portrait.changes}`,
  imageCaption: portrait.caption, imageDisplayNote: portrait.changes,
  author: "RACH editorial", datePublished: "2026-11-24", dateModified: "2026-11-24", reportingCutoff: "2026-11-24",
  about: {name: title, jobTitle: "Computer scientist", sameAs: ["https://www.w3.org/People/Berners-Lee/"]},
  wordCount, body, sources
};
