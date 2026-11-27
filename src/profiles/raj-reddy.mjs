import { chapters } from "./raj-reddy-text.mjs";

const slug = "raj-reddy";
const title = "Raj Reddy";
const headline = "Raj Reddy Wanted Computers to Listen";
const category = "Artificial Intelligence";
const deck = "At Stanford, Raj Reddy taught a computer to tell vowel sounds apart. The question that followed him from Pittsburgh to India was how people could use computers in the languages they already spoke.";
const recognitionSummary = "For helping computers recognize connected speech and bringing researchers, librarians and educators together to put knowledge within reach of more people.";

const photographs = {
  "portrait": {
    "caption": "Raj Reddy in his office at Carnegie Mellon University in Pittsburgh.",
    "alt": "Raj Reddy smiles at the camera in a dark jacket and pale striped shirt.",
    "width": 1440,
    "height": 1064,
    "creator": "Vishnugsr",
    "source": "https://commons.wikimedia.org/wiki/File:Profrr4.jpg",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "changes": "Resized and JPEG-encoded. Full frame retained. The archive card displays a crop.",
    "credit": "Vishnugsr",
    "account": "Vishnugsr",
    "revision": "https://commons.wikimedia.org/w/index.php?title=File:Profrr4.jpg&oldid=1266015201",
    "repository": "Wikimedia Commons"
  },
  "robot": {
    "caption": "Carnegie Mellon’s Terregator, an early outdoor navigation robot, on display at the Petersen Automotive Museum in 2024.",
    "alt": "The six-wheeled Terregator has a boxy metal body and a clear dome above its instruments.",
    "width": 1251,
    "height": 1440,
    "creator": "TaurusEmerald",
    "source": "https://commons.wikimedia.org/wiki/File:1984_Terregator_Petersen_Automotive_Museum.jpg",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
    "changes": "Resized and JPEG-encoded. Full frame retained.",
    "credit": "TaurusEmerald",
    "account": "TaurusEmerald",
    "revision": "https://commons.wikimedia.org/w/index.php?title=File:1984_Terregator_Petersen_Automotive_Museum.jpg&oldid=1013628100",
    "repository": "Wikimedia Commons"
  },
  "tribute": {
    "caption": "Edward Feigenbaum, left, and Raj Reddy at a tribute to Feigenbaum during the AAAI conference in Singapore in January 2026. The two shared the 1994 ACM A.M. Turing Award.",
    "alt": "Edward Feigenbaum and Raj Reddy sit at a table in front of a blue backdrop in Singapore.",
    "width": 1440,
    "height": 810,
    "creator": "Xuthoria",
    "source": "https://commons.wikimedia.org/wiki/File:AAAI_2025_-_Edward_Feigenbaum,_Raj_Reddy_01.jpg",
    "license": "CC BY-SA 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
    "changes": "Resized and JPEG-encoded. Full frame retained.",
    "credit": "Xuthoria",
    "account": "Xuthoria",
    "revision": "https://commons.wikimedia.org/w/index.php?title=File:AAAI_2025_-_Edward_Feigenbaum,_Raj_Reddy_01.jpg&oldid=1157552169",
    "repository": "Wikimedia Commons"
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
    <figcaption>${photo.caption} ${escape(photo.credit)}, <a href="${escape(photo.source)}">${escape(photo.repository)}</a>.
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
  [
    "A laboratory for moving machines",
    "robot"
  ],
  [
    "Two routes to a Turing Award",
    "tribute"
  ]
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
      <p class="profile-byline"><span>RACH editorial · AI-assisted biography</span><span>November 27, 2026</span><span>${wordCount.toLocaleString("en-US")} words</span></p>
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
        <p>RACH independently selected Raj Reddy for this profile and prepared the biography with AI assistance. RACH drew on original research, oral histories, university archives, librarians’ accounts and independent reporting. RACH conducted no interview for this profile. Reporting through November 27, 2026.</p>
        <p>Send documented corrections to <a href="mailto:info@rachorg.org?subject=Raj%20Reddy%20profile%20correction">info@rachorg.org</a>.</p>
      </section>
      <section class="profile-sources" aria-labelledby="sources-heading"><h2 id="sources-heading">Sources</h2>
        <ol>${sources.map(source => `<li id="source-${source.id}"><a href="${escape(source.url)}">${escape(source.title)}</a></li>`).join("\n")}</ol>
      </section>
    </div>
  </div>
</article>`;

const portrait = photographs.portrait;
export const rajReddy = {
  slug, path: `/profiles/${slug}`, type: "profile", draft: false, title,
  seoTitle: headline, heading: headline, eyebrow: `RACH Profiles · ${category}`,
  description: deck, deck, category, recognitionSummary,
  image: imagePath("portrait"), imageAlt: portrait.alt, imageWidth: portrait.width, imageHeight: portrait.height,
  imagePosition: "50% 32%", imageCreator: portrait.credit, imageCreatorAccount: portrait.account,
  imageRepository: portrait.repository, imageSource: portrait.source, imageSourceRevision: portrait.revision, imageLicense: portrait.license,
  imageLicenseUrl: portrait.licenseUrl, imageCredit: `${portrait.credit}, ${portrait.repository}`,
  imageCreditText: `${portrait.credit}, ${portrait.repository}, ${portrait.license}. ${portrait.changes}`,
  imageCaption: portrait.caption, imageDisplayNote: portrait.changes,
  author: "RACH editorial", datePublished: "2026-11-27", dateModified: "2026-11-27", reportingCutoff: "2026-11-27",
  about: {name: title, jobTitle: "Computer scientist and roboticist", sameAs: ["https://www.ri.cmu.edu/ri-faculty/raj-reddy/"]},
  wordCount, body, sources
};
