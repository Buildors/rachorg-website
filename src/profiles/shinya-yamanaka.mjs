import { chapters } from "./shinya-yamanaka-text.mjs";

const slug = "shinya-yamanaka";
const title = "Shinya Yamanaka";
const headline = "Shinya Yamanaka and the Second Life of a Cell";
const category = "Longevity and Biotechnology";
const deck = "A question that began in an Osaka hospital took Shinya Yamanaka from surgery to stem cell research. Two decades after his team’s discovery, physicians are testing what reprogrammed cells can do for patients.";
const recognitionSummary = "For showing, with Kazutoshi Takahashi and colleagues, that specialized cells can regain the capacity to produce many kinds of tissue, and for helping make those cells available to other researchers.";

const photographs = {
  "portrait": {
    "caption": "Yamanaka speaks to aspiring scientists at Ryukyu Shimpo Hall in Naha, Okinawa, in March 2019.",
    "alt": "Shinya Yamanaka gestures with both hands as he speaks at a lectern in front of a dark curtain.",
    "width": 1440,
    "height": 959,
    "creator": "Okinawa Institute of Science and Technology (OIST)",
    "source": "https://commons.wikimedia.org/wiki/File:Lecture_by_Nobel_Laureate_Dr._Shinya_Yamanaka_%E2%80%9CNew_Era_of_Medicine_with_iPS_Cells-_Message_to_Future_Scientists%E2%80%9C_(46596989035).jpg",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
    "changes": "Resized and JPEG-encoded. Full frame retained. The archive card displays a crop.",
    "credit": "Okinawa Institute of Science and Technology (OIST)",
    "account": "OIST",
    "revision": "https://commons.wikimedia.org/w/index.php?title=File:Lecture_by_Nobel_Laureate_Dr._Shinya_Yamanaka_%E2%80%9CNew_Era_of_Medicine_with_iPS_Cells-_Message_to_Future_Scientists%E2%80%9C_(46596989035).jpg&oldid=895807989",
    "repository": "Wikimedia Commons"
  },
  "nih": {
    "caption": "At the National Institutes of Health in 2010, Yamanaka received a plaque from NIH director Francis Collins, left, and deputy director for intramural research Michael Gottesman, right.",
    "alt": "Shinya Yamanaka stands between Francis Collins and Michael Gottesman as the three hold a framed plaque.",
    "width": 1363,
    "height": 1079,
    "creator": "Bill Branson / National Institutes of Health",
    "source": "https://commons.wikimedia.org/wiki/File:Francis_Collins_Shinya_Yamanaka_and_Michael_Gottesman.jpg",
    "license": "Public domain in the United States",
    "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
    "changes": "JPEG-encoded. Full frame retained.",
    "credit": "Bill Branson / National Institutes of Health",
    "account": "National Institutes of Health",
    "revision": "https://commons.wikimedia.org/w/index.php?title=File:Francis_Collins_Shinya_Yamanaka_and_Michael_Gottesman.jpg&oldid=1119553741",
    "repository": "Wikimedia Commons"
  },
  "center": {
    "caption": "The Center for iPS Cell Research and Application at Kyoto University, photographed in March 2012.",
    "alt": "A sign in Japanese and English identifies the Center for iPS Cell Research and Application beside the Kyoto University building.",
    "width": 1440,
    "height": 962,
    "creator": "Jun Seita",
    "source": "https://commons.wikimedia.org/wiki/File:CiRA_(Center_for_iPS_Cell_Research_and_Application)_at_Kyoto_University.jpg",
    "license": "CC BY 2.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
    "changes": "Resized and JPEG-encoded. Full frame retained.",
    "credit": "Jun Seita",
    "account": "Jun Seita",
    "revision": "https://commons.wikimedia.org/w/index.php?title=File:CiRA_(Center_for_iPS_Cell_Research_and_Application)_at_Kyoto_University.jpg&oldid=1150938586",
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
    "The two names on the Nobel Prize",
    "nih"
  ],
  [
    "Building a bank other hospitals could use",
    "center"
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
      <p class="profile-byline"><span>RACH editorial · AI-assisted biography</span><span>November 26, 2026</span><span>${wordCount.toLocaleString("en-US")} words</span></p>
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
        <p>RACH independently selected Shinya Yamanaka for this profile and prepared the biography with AI assistance. RACH drew on original research, published clinical outcomes, regulatory records, participants’ accounts and independent reporting. RACH conducted no interview for this profile. Reporting through November 26, 2026.</p>
        <p>Send documented corrections to <a href="mailto:info@rachorg.org?subject=Shinya%20Yamanaka%20profile%20correction">info@rachorg.org</a>.</p>
      </section>
      <section class="profile-sources" aria-labelledby="sources-heading"><h2 id="sources-heading">Sources</h2>
        <ol>${sources.map(source => `<li id="source-${source.id}"><a href="${escape(source.url)}">${escape(source.title)}</a></li>`).join("\n")}</ol>
      </section>
    </div>
  </div>
</article>`;

const portrait = photographs.portrait;
export const shinyaYamanaka = {
  slug, path: `/profiles/${slug}`, type: "profile", draft: false, title,
  seoTitle: headline, heading: headline, eyebrow: `RACH Profiles · ${category}`,
  description: deck, deck, category, recognitionSummary,
  image: imagePath("portrait"), imageAlt: portrait.alt, imageWidth: portrait.width, imageHeight: portrait.height,
  imagePosition: "50% 32%", imageCreator: portrait.credit, imageCreatorAccount: portrait.account,
  imageRepository: portrait.repository, imageSource: portrait.source, imageSourceRevision: portrait.revision, imageLicense: portrait.license,
  imageLicenseUrl: portrait.licenseUrl, imageCredit: `${portrait.credit}, ${portrait.repository}`,
  imageCreditText: `${portrait.credit}, ${portrait.repository}, ${portrait.license}. ${portrait.changes}`,
  imageCaption: portrait.caption, imageDisplayNote: portrait.changes,
  author: "RACH editorial", datePublished: "2026-11-26", dateModified: "2026-11-26", reportingCutoff: "2026-11-26",
  about: {name: title, jobTitle: "Physician and stem cell researcher", sameAs: ["https://www.nobelprize.org/prizes/medicine/2012/yamanaka/facts/"]},
  wordCount, body, sources
};
