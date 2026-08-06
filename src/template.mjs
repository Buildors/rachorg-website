const mainNav = [
  ["About Us", "/about-us"],
  ["Experiences", "/experiences"],
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
  const active = currentPath === href || (href === "/experiences" && experienceNav.some(([, child]) => child === currentPath));
  return `<a href="${href}"${active ? ' aria-current="page"' : ""}>${label}</a>`;
}

function header(currentPath) {
  return `<header class="site-header" data-header>
    <div class="header-inner">
      <a class="brand" href="/" aria-label="RACH home">
        <img src="/assets/rach-logo.png" alt="RACH — Recognizing the Achievements and Contributions of Humanity" width="300" height="200">
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
      <p>RACH | Nonprofit Foundation in DC Area | <a href="mailto:info@rachorg.org">info@rachorg.org</a> | <a href="tel:+12026952527">202-695-2527</a></p>
    </div>
  </footer>`;
}

function structuredData() {
  return `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "NonprofitOrganization",
    name: "RACH",
    url: "https://rachorg.org",
    logo: "https://rachorg.org/assets/rach-logo.png",
    email: "info@rachorg.org",
    telephone: "+1-202-695-2527",
    address: { "@type": "PostalAddress", addressLocality: "Washington", addressRegion: "DC", addressCountry: "US" },
    sameAs: ["https://www.facebook.com/rachorgdc", "https://www.instagram.com/rachorgdc"]
  })}</script>`;
}

export function renderPage(page) {
  const canonical = `https://rachorg.org${page.path}`;
  const isHome = page.path === "/";
  const title = page.path === "/" ? "Nonprofit Foundation | RACH" : `${page.title} | RACH`;
  const heroStyle = page.background ? ` style="--hero-image: url('${page.background}')"` : "";
  const content = isHome
    ? `<main class="home-main">
        <section class="home-hero" aria-label="RACH welcome film">
          <video autoplay muted loop playsinline poster="/assets/hero-poster.webp">
            <source src="/assets/rach-hero.mp4" type="video/mp4">
          </video>
          <div class="home-shade"></div>
          <div class="home-message">
            <p class="eyebrow">Recognizing the Achievements and Contributions of Humanity</p>
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
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(page.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="https://rachorg.org/assets/hero-poster.jpg">
  <meta name="theme-color" content="#070706">
  <link rel="icon" href="/assets/rach-logo.png">
  <link rel="stylesheet" href="/styles.css">
  ${structuredData()}
</head>
<body class="${isHome ? "home" : "interior"}">
  <a class="skip-link" href="#main-content">Skip to content</a>
  ${header(page.path)}
  <div id="main-content">${content}</div>
  ${footer()}
  <script src="/script.js" defer></script>
</body>
</html>\n`;
}
