const mainNav = [
  ["About Us", "/about-us"],
  ["Experiences", "/experiences"],
  ["Profiles", "/profiles"],
  ["Honorees", "/honorees"],
  ["Contact", "/contact-details"],
  ["Donate + Sponsor", "/donate"]
];

const experienceNav = [
  ["Upcoming Events", "/events"],
  ["Past Events", "/past-events"],
  ["Performers", "/performers"],
  ["Artists", "/artists"],
  ["Volunteers", "/volunteers"],
  ["Submit for Consideration", "/schedule-consult"]
];

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

function navLink([label, href], currentPath) {
  const active = currentPath === href
    || (href === "/experiences" && experienceNav.some(([, child]) => child === currentPath))
    || (href === "/profiles" && currentPath.startsWith("/profiles/"));
  return `<a href="${href}"${active ? ' aria-current="page"' : ""}>${label}</a>`;
}

function header(currentPath) {
  return `<header class="site-header" data-header>
    <div class="header-inner">
      <a class="brand" href="/" aria-label="RACH home">
        <img src="/assets/rach-logo.png" alt="RACH — Recognizing the Achievements and Contributions to Humanity" width="300" height="200">
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation" data-menu-toggle>
        <span></span><span></span><span></span><span class="sr-only">Menu</span>
      </button>
      <nav class="site-nav" id="site-navigation" aria-label="Main navigation" data-menu>
        ${navLink(mainNav[0], currentPath)}
        <div class="nav-group">
          ${navLink(mainNav[1], currentPath)}
          <button class="submenu-toggle" type="button" aria-expanded="false" aria-label="Show Experiences pages" data-submenu-toggle>+</button>
          <div class="submenu">
            ${experienceNav.map((item) => navLink(item, currentPath)).join("\n")}
          </div>
        </div>
        ${mainNav.slice(2).map((item) => navLink(item, currentPath)).join("\n")}
      </nav>
    </div>
  </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="footer-inner">
      <form class="signup-form" data-mailto-form data-subject="Join the RACH mailing list">
        <label class="sr-only" for="signup-email">Sign Up for Updates</label>
        <input id="signup-email" name="Email" type="email" autocomplete="email" placeholder="Sign Up for Updates!" required>
        <button type="submit">Submit</button>
      </form>
      <div class="social-links" aria-label="RACH social media">
        <a href="https://www.facebook.com/rachorgdc" target="_blank" rel="noreferrer" aria-label="RACH on Facebook">f</a>
        <a href="https://www.instagram.com/rachorgdc" target="_blank" rel="noreferrer" aria-label="RACH on Instagram">◎</a>
      </div>
      <p class="footer-mission"><strong>RACH</strong> — Recognizing the Achievements and Contributions to Humanity</p>
      <p>RACH | Nonprofit Foundation in DC Area | <a href="mailto:info@rachorg.org">info@rachorg.org</a> | <a href="tel:+12026952527">202-695-2527</a></p>
    </div>
  </footer>`;
}

function structuredData(page, canonical) {
  const organization = {
    "@type": "NonprofitOrganization",
    "@id": "https://rachorg.org/#organization",
    name: "RACH",
    alternateName: "Recognizing the Achievements and Contributions to Humanity",
    description: "A nonprofit foundation recognizing people whose achievements and contributions make a meaningful difference to humanity.",
    url: "https://rachorg.org",
    logo: "https://rachorg.org/assets/rach-logo.png",
    email: "info@rachorg.org",
    telephone: "+1-202-695-2527",
    address: { "@type": "PostalAddress", addressLocality: "Washington", addressRegion: "DC", addressCountry: "US" },
    sameAs: ["https://www.facebook.com/rachorgdc", "https://www.instagram.com/rachorgdc"]
  };
  const graph = [organization];

  if (page.type === "profile") {
    const image = page.imageCreator ? {
      "@type": "ImageObject",
      url: `https://rachorg.org${page.image}`,
      contentUrl: `https://rachorg.org${page.image}`,
      caption: page.imageCaption,
      creator: {
        "@type": "Person",
        name: page.imageCreator,
        url: page.imageSource
      },
      creditText: page.imageCreditText,
      license: page.imageLicenseUrl,
      acquireLicensePage: page.imageSource
    } : [`https://rachorg.org${page.image}`];
    const article = {
      "@type": "Article",
      "@id": `${canonical}#article`,
      mainEntityOfPage: canonical,
      headline: page.seoTitle || page.title,
      description: page.description,
      image,
      dateModified: page.dateModified,
      inLanguage: "en-US",
      wordCount: page.wordCount,
      articleSection: [page.category, ...(page.secondaryCategories || [])],
      author: { "@type": "Organization", name: page.author, url: "https://rachorg.org/about-us" },
      publisher: { "@id": "https://rachorg.org/#organization" },
      about: {
        "@type": "Person",
        "@id": `${canonical}#subject`,
        ...page.about
      },
      isPartOf: { "@type": "CreativeWorkSeries", name: "RACH Profiles", url: "https://rachorg.org/profiles" }
    };
    if (page.datePublished) article.datePublished = page.datePublished;
    graph.push(article, {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "RACH", item: "https://rachorg.org/" },
        { "@type": "ListItem", position: 2, name: "Profiles", item: "https://rachorg.org/profiles" },
        { "@type": "ListItem", position: 3, name: page.title, item: canonical }
      ]
    });
  }

  return `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph
  })}</script>`;
}

export function renderPage(page) {
  const canonical = `https://rachorg.org${page.path}`;
  const isHome = page.path === "/";
  const title = page.seoTitle || (page.path === "/" ? "Nonprofit Foundation | RACH" : `${page.title} | RACH`);
  const heroStyle = page.background ? ` style="--hero-image: url('${page.background}');${page.backgroundPosition ? ` --hero-position: ${page.backgroundPosition};` : ""}"` : "";
  const socialImage = page.image ? `https://rachorg.org${page.image}` : "https://rachorg.org/assets/hero-poster.jpg";
  const content = isHome
    ? `<main class="home-main">
        <section class="home-hero" aria-label="RACH welcome film">
          <video autoplay muted loop playsinline poster="/assets/hero-poster.webp">
            <source src="/assets/rach-hero.mp4" type="video/mp4">
          </video>
          <div class="home-shade"></div>
          <div class="home-message">
            <p class="eyebrow">Recognizing the Achievements and Contributions to Humanity</p>
            <h1>See the value in everyone.</h1>
            <a class="button button-outline" href="/about-us">Discover our mission</a>
          </div>
        </section>
      </main>`
    : `<main>
        <section class="page-hero${page.background ? " has-image" : ""}"${heroStyle}>
          <div class="page-hero-shade"></div>
          <div class="page-hero-content">
            ${page.eyebrow ? `<p class="eyebrow">${page.eyebrow}</p>` : ""}
            <h1>${page.heading || page.title}</h1>
          </div>
        </section>
        ${page.body}
      </main>`;

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(page.description)}">
  ${page.draft ? '<meta name="robots" content="noindex, nofollow">' : ""}
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="${page.type === "profile" ? "article" : "website"}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(page.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${socialImage}">
  ${page.imageAlt ? `<meta property="og:image:alt" content="${escapeHtml(page.imageAlt)}">` : ""}
  ${page.type === "profile" && page.datePublished ? `<meta property="article:published_time" content="${page.datePublished}">` : ""}
  ${page.type === "profile" && page.dateModified ? `<meta property="article:modified_time" content="${page.dateModified}">` : ""}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(page.description)}">
  <meta name="twitter:image" content="${socialImage}">
  <meta name="theme-color" content="#070706">
  <link rel="icon" href="/assets/rach-logo.png">
  <link rel="stylesheet" href="/styles.css">
  ${structuredData(page, canonical)}
</head>
<body class="${isHome ? "home" : `interior${page.type === "profile" ? " profile-page" : ""}`}">
  <a class="skip-link" href="#main-content">Skip to content</a>
  ${header(page.path)}
  <div id="main-content">${content}</div>
  ${footer()}
  <script src="/script.js" defer></script>
</body>
</html>\n`;
}
