import { demisHassabis } from "./demis-hassabis.mjs";
import { davidSinclair } from "./david-sinclair.mjs";

export const profiles = [davidSinclair, demisHassabis];

const formatDate = (isoDate) => new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC"
}).format(new Date(`${isoDate}T12:00:00Z`));

const profileCards = profiles.map((profile) => `<article class="profile-card">
  <div class="profile-card-media">
    <a class="profile-card-image" href="${profile.path}" aria-label="Read the ${profile.title} profile">
      <img src="${profile.image}" alt="${profile.imageAlt}" width="${profile.imageWidth || 1920}" height="${profile.imageHeight || 2879}" loading="lazy">
    </a>
    <p class="profile-card-image-credit">Photo: <a href="${profile.imageSource}" target="_blank" rel="noreferrer">${profile.imageCreator} (<span class="creator-handle">${profile.imageCreatorAccount}</span>) / Wikimedia Commons</a> — <a href="${profile.imageLicenseUrl}" target="_blank" rel="license noreferrer">${profile.imageLicense}</a>. ${profile.imageDisplayNote}</p>
  </div>
  <div class="profile-card-copy">
    <p class="profile-card-meta">${profile.category}${profile.draft ? " · Editorial draft" : ` · Published ${formatDate(profile.datePublished)}`}</p>
    <h2><a href="${profile.path}">${profile.title}</a></h2>
    <p>${profile.deck}</p>
    <div class="profile-card-recognition">
      <p class="eyebrow">Why RACH recognizes ${profile.title}</p>
      <p>${profile.recognitionSummary}</p>
    </div>
    <a class="text-link" href="${profile.path}">Read the full profile <span aria-hidden="true">→</span></a>
  </div>
</article>`).join("\n");

export const profilesHub = {
  path: "/profiles",
  type: "profiles-hub",
  draft: false,
  title: "RACH Profiles",
  seoTitle: "RACH Profiles | People Building What Comes Next",
  heading: "People building what comes next.",
  eyebrow: "RACH Profiles",
  description: "Long-form, independently sourced life stories of people shaping artificial intelligence, technology, construction, and longevity.",
  image: demisHassabis.image,
  imageAlt: demisHassabis.imageAlt,
  body: `<section class="content-section profiles-introduction">
    <p class="lead">One person. One life story. A daily pursuit.</p>
    <p class="profile-mission-statement"><span>RACH</span> stands for <strong>Recognizing the Achievements and Contributions to Humanity.</strong> Through RACH Profiles, we explain what each person contributed, who helped make it possible, why the work matters, and what remains unfinished.</p>
    <p>RACH Profiles explores the people shaping artificial intelligence, technology, construction, and the science of longer, healthier lives. We begin with admiration, then follow the evidence—through formative experiences, pivotal choices, setbacks, collaborators, measurable impact, criticism, and the work still unfinished.</p>
    <div class="profile-pill-row" aria-label="Profile categories">
      <span>Artificial Intelligence</span>
      <span>Technology</span>
      <span>Construction</span>
      <span>Longevity</span>
    </div>
  </section>
  <section class="profiles-collection" aria-labelledby="profiles-heading">
    <div class="profiles-collection-inner">
      <div class="section-heading">
        <p class="eyebrow">The profiles</p>
        <h2 id="profiles-heading">A life is more than a résumé.</h2>
        <p>Every feature includes a rights-cleared profile picture, a visible reason for recognition, a reporting cutoff, a source record, and a clear distinction between demonstrated results and future ambition.</p>
      </div>
      <div class="profiles-grid">${profileCards}</div>
    </div>
  </section>
  <section class="content-section profile-editorial-promise">
    <p class="eyebrow">Our editorial promise</p>
    <h2>Critical admiration.</h2>
    <div class="promise-grid">
      <p><strong>Truth before promotion.</strong><br>Selection begins with interest, but the evidence determines the story.</p>
      <p><strong>People in full.</strong><br>We cover origins, work, failure, collaboration, criticism, and the present chapter.</p>
      <p><strong>Transparent sourcing.</strong><br>Profiles show their reporting cutoff, interview status, sources, disclosures, and correction route.</p>
    </div>
  </section>`
};

export const profilePages = [profilesHub, ...profiles];
