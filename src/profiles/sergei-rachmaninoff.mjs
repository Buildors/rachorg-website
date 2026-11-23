import { chapters } from "./sergei-rachmaninoff-text.mjs";

const slug = "sergei-rachmaninoff";
const title = "Sergei Rachmaninoff";
const headline = "Sergei Rachmaninoff: The Music That Inspired RACH";
const category = "Arts and Culture";
const deck = "A Russian pianist, composer and conductor whose music crossed borders after he left his country in 1917.";
const recognitionSummary = "For the concertos, orchestral works and choral music he wrote, and the recordings that allow later musicians to hear those works in his own hands.";
const founderNote = "Sergei Rachmaninoff inspired his great-great-grandson Jordan Wanamaker Javier to found RACH, Recognizing the Achievements and Contributions to Humanity. Jordan selected this profile to tell the story behind that family connection.";

const archive = "George Grantham Bain Collection, Library of Congress";
const rights = "No known restrictions on publication.";
const rightsUrl = "https://www.loc.gov/rr/print/res/274_bain.html";
const photos = {
  portrait: {
    id: "2014710322", digitalId: "ggbain.30164", width: 738, height: 1024,
    alt: "Rachmaninoff in a long coat and hat, holding a cane on snowy steps.",
    caption: "Sergei Rachmaninoff, circa 1915–1920."
  },
  piano: {
    id: "2014710316", digitalId: "ggbain.30158", width: 728, height: 1024,
    alt: "Rachmaninoff seated at a piano with music on the stand.",
    caption: "Rachmaninoff at the piano, circa 1915–1920."
  },
  family: {
    id: "2014717812", digitalId: "ggbain.37664", width: 701, height: 1024,
    alt: "Rachmaninoff with his arm around his daughter Tatyana, both wearing coats.",
    caption: "Rachmaninoff with his daughter Tatyana in 1924. His daughter Irina was the ancestor of RACH founder Jordan Wanamaker Javier."
  }
};
const photoPath = key => `/assets/profiles/${slug}-${key}.jpg`;
const catalog = photo => `https://www.loc.gov/pictures/item/${photo.id}/`;
const displayNote = "Library catalog JPEG. RACH resizes the display and crops the lead image on the series card.";
function figure(key) {
  const photo = photos[key];
  return `<figure class="profile-portrait${key === "portrait" ? "" : " profile-archive-photo"}">
    <img src="${photoPath(key)}" width="${photo.width}" height="${photo.height}" style="height:auto;aspect-ratio:auto" alt="${photo.alt}"${key === "portrait" ? "" : ' loading="lazy"'}>
    <figcaption>${photo.caption} Bain News Service, <a href="${catalog(photo)}">${archive} (${photo.digitalId})</a>.
    <a href="${rightsUrl}">${rights}</a> ${displayNote}</figcaption>
  </figure>`;
}

const escape = text => text.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
const inline = text => escape(text).replace(/\*([^*]+)\*/g, "<em>$1</em>");
const sources = [...new Map(chapters.flatMap(chapter => chapter.sources.map(s => [s.url, s]))).values()]
  .map((source, i) => ({...source, id: i + 1}));
const sourceIds = new Map(sources.map(s => [s.url, s.id]));
const links = chapter => chapter.sources.map(({url}) => {
  const id = sourceIds.get(url);
  return `<a href="#source-${id}" aria-label="Source ${id}">${id}</a>`;
}).join(", ");
const chapterId = chapter => chapter.heading.toLowerCase().replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/-$/, "");
const narrative = chapters.map(chapter => {
  const paragraphs = chapter.paragraphs.map((text,i) => {
    const refs = i + 1 === chapter.paragraphs.length ? `<sup class="source-ref">${links(chapter)}</sup>` : "";
    return `<p>${inline(text)}${refs}</p>`;
  }).join("\n");
  let illustration = "";
  if (chapter.heading === "A picture in Paris and a concerto for New York") illustration = figure("piano");
  if (chapter.heading.startsWith("Why RACH recognizes")) illustration = figure("family");
  return `<section id="${chapterId(chapter)}" class="profile-section"><h2>${escape(chapter.heading)}</h2>${paragraphs}${illustration}</section>`;
}).join("\n");
const wordCount = chapters.flatMap(chapter => chapter.paragraphs)
  .map(text => text.trim().split(/\s+/).length).reduce((a,b) => a+b, 0);

const body = `<article class="profile-article">
  <header class="profile-intro">
    ${figure("portrait")}
    <div class="profile-intro-copy">
      <p class="profile-series-label">RACH Profiles · ${category}</p>
      <p class="profile-deck">${founderNote}</p>
      <p class="profile-byline"><span>RACH editorial · AI-assisted historical biography</span><span>November 23, 2026</span><span>${wordCount.toLocaleString("en-US")} words</span></p>
    </div>
  </header>
  <div class="profile-content-grid">
    <nav class="profile-toc" aria-label="In this profile"><p class="eyebrow">In this profile</p>
      ${chapters.map(c => `<a href="#${chapterId(c)}">${escape(c.heading)}</a>`).join("\n")}
      <a href="#reporting">Reporting and corrections</a><a href="#sources-heading">Sources</a>
    </nav>
    <div class="profile-copy">
      ${narrative}
      <section id="reporting" class="profile-methodology"><h2>Reporting and corrections</h2>
        <p>RACH prepared this family-commissioned historical profile with AI assistance. Jordan Wanamaker Javier provided the account of his inspiration for founding RACH. The biography draws on archival documents, performance records, published scholarship and the music itself. The listening observations are RACH’s editorial interpretation. No new interviews were conducted. Reporting through November 23, 2026.</p>
        <p>Documented corrections are welcome at <a href="mailto:info@rachorg.org?subject=Rachmaninoff%20profile%20correction">info@rachorg.org</a>.</p>
      </section>
      <section class="profile-sources" aria-labelledby="sources-heading"><h2 id="sources-heading">Sources</h2>
        <ol>${sources.map(s => `<li id="source-${s.id}"><a href="${escape(s.url)}">${escape(s.title)}</a></li>`).join("\n")}</ol>
      </section>
    </div>
  </div>
</article>`;

export const sergeiRachmaninoff = {
  slug, path: `/profiles/${slug}`, type: "profile", draft: false, title, seoTitle: headline,
  heading: headline, eyebrow: "RACH Profiles · Arts and Culture", description: deck, deck, category,
  image: photoPath("portrait"), imageAlt: photos.portrait.alt,
  imageWidth: photos.portrait.width, imageHeight: photos.portrait.height, imagePosition: "center top",
  imageCreator: "Bain News Service", imageCreatorType: "Organization", imageRepository: "Library of Congress",
  imageCredit: archive, imageCreatorAccount: archive, imageSource: catalog(photos.portrait),
  imageSourceRevision: photos.portrait.digitalId, imageLicense: rights.replace(/\.$/, ""), imageLicenseUrl: rightsUrl,
  imageCreditText: `Bain News Service, ${archive}. ${rights}`, imageDisplayNote: displayNote,
  imageCaption: photos.portrait.caption, recognitionSummary, author: "RACH editorial",
  datePublished: "2026-11-23", dateModified: "2026-11-23", reportingCutoff: "2026-11-23",
  wordCount, body, sources, about: {name: title, jobTitle: "Composer, pianist and conductor",
    deathDate: "1943-03-28", sameAs: ["https://lccn.loc.gov/2014571125"]}
};
