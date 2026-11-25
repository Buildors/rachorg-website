import { chapters } from "./francis-kere-text.mjs";

const slug = "francis-kere";
const title = "Francis Kéré";
const headline = "Francis Kéré and the School Gando Built";
const category = "Construction and the Built Environment";
const deck = "In Gando, Burkina Faso, Francis Kéré and his neighbors built a school that could stay cooler under a metal roof. Its lessons traveled from village classrooms to public buildings in Dakar and Munich.";
const recognitionSummary = "For working with local builders to make schools and clinics more comfortable in the heat, and for putting their materials and skills to work in public buildings across continents.";

const photographs = {
  "portrait": {
    "caption": "Francis Kéré at the Technical University of Munich, February 2019.",
    "alt": "Francis Kéré standing with his arms folded, wearing a blue shirt and dark scarf.",
    "width": 1050,
    "height": 1440,
    "creator": "Astrid Eckert",
    "source": "https://commons.wikimedia.org/wiki/File:Francis_Kere,_2019.jpg",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
    "changes": "Resized and JPEG-encoded. Full frame retained. The archive card displays a crop.",
    "credit": "© Astrid Eckert / TU München",
    "account": "Josizari",
    "revision": "https://commons.wikimedia.org/w/index.php?title=File:Francis_Kere,_2019.jpg&oldid=1259918448",
    "repository": "Wikimedia Commons"
  },
  "interview": {
    "caption": "Kéré speaking in a 2016 Voice of America interview about his work.",
    "alt": "Kéré gesturing with both hands during an interview, against a backdrop of pink and blue threads.",
    "width": 854,
    "height": 480,
    "creator": "Voice of America",
    "source": "https://commons.wikimedia.org/wiki/File:Building_a_Bridge_Between_the_West_and_Africa.webm",
    "license": "Public domain in the United States",
    "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
    "changes": "Full-frame still at 2:18 of the original report, JPEG-encoded.",
    "credit": "Voice of America",
    "account": "VOA Africa",
    "revision": "https://commons.wikimedia.org/w/index.php?title=File:Building_a_Bridge_Between_the_West_and_Africa.webm&oldid=911833247",
    "repository": "Wikimedia Commons"
  },
  "pavilion": {
    "caption": "Kéré’s 2017 Serpentine Pavilion in Kensington Gardens, London, with its blue timber walls and broad canopy.",
    "alt": "The pavilion’s blue triangular wall panels and wide timber canopy seen across a lawn in Kensington Gardens.",
    "width": 1440,
    "height": 963,
    "creator": "Images George Rex",
    "source": "https://commons.wikimedia.org/wiki/File:Serpentine_Pavilion_2017_I_(35866153461).jpg",
    "license": "CC BY-SA 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
    "changes": "Resized and JPEG-encoded. Full frame retained.",
    "credit": "Images George Rex",
    "account": "Images George Rex",
    "revision": "https://commons.wikimedia.org/w/index.php?title=File:Serpentine_Pavilion_2017_I_(35866153461).jpg&oldid=1066959256",
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
    "Making an exhibition in Philadelphia",
    "interview"
  ],
  [
    "A tree canopy in Kensington Gardens",
    "pavilion"
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
      <p class="profile-byline"><span>RACH editorial · AI-assisted biography</span><span>November 25, 2026</span><span>${wordCount.toLocaleString("en-US")} words</span></p>
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
        <p>RACH independently selected Francis Kéré for this profile and prepared the biography with AI assistance. RACH drew on project records, published interviews with Kéré and other participants, institutional archives and independent reporting. RACH conducted no interview for this profile. Reporting through November 25, 2026.</p>
        <p>Send documented corrections to <a href="mailto:info@rachorg.org?subject=Francis%20K%C3%A9r%C3%A9%20profile%20correction">info@rachorg.org</a>.</p>
      </section>
      <section class="profile-sources" aria-labelledby="sources-heading"><h2 id="sources-heading">Sources</h2>
        <ol>${sources.map(source => `<li id="source-${source.id}"><a href="${escape(source.url)}">${escape(source.title)}</a></li>`).join("\n")}</ol>
      </section>
    </div>
  </div>
</article>`;

const portrait = photographs.portrait;
export const francisKere = {
  slug, path: `/profiles/${slug}`, type: "profile", draft: false, title,
  seoTitle: headline, heading: headline, eyebrow: `RACH Profiles · ${category}`,
  description: deck, deck, category, recognitionSummary,
  image: imagePath("portrait"), imageAlt: portrait.alt, imageWidth: portrait.width, imageHeight: portrait.height,
  imagePosition: "50% 32%", imageCreator: portrait.credit, imageCreatorAccount: portrait.account,
  imageRepository: portrait.repository, imageSource: portrait.source, imageSourceRevision: portrait.revision, imageLicense: portrait.license,
  imageLicenseUrl: portrait.licenseUrl, imageCredit: `${portrait.credit}, ${portrait.repository}`,
  imageCreditText: `${portrait.credit}, ${portrait.repository}, ${portrait.license}. ${portrait.changes}`,
  imageCaption: portrait.caption, imageDisplayNote: portrait.changes,
  author: "RACH editorial", datePublished: "2026-11-25", dateModified: "2026-11-25", reportingCutoff: "2026-11-25",
  about: {name: title, jobTitle: "Architect", sameAs: ["https://www.pritzkerprize.com/laureates/diebedo-francis-kere"]},
  wordCount, body, sources
};
