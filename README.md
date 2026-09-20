# RACH website

Portable static rebuild of [rachorg.org](https://rachorg.org), migrated from Wix for deployment on Cloudflare Pages.

## Local development

```bash
npm run build
python3 -m http.server 8000 --directory dist
```

Open `http://localhost:8000`.

## Validation

```bash
npm run build
npm run check
```

The check verifies every legacy route and internal asset link, confirms the site has no Wix runtime dependencies, and checks the homepage video against Cloudflare Pages' per-file limit.

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 22

The contact, participant, and mailing-list forms create a prepared email to `info@rachorg.org`, keeping submissions independent of Wix and third-party form storage.

## RACH Profiles

Long-form daily biographies live as structured modules in `src/profiles/`, with a series hub at `/profiles` and stable subject routes under `/profiles/<name>`. Draft profiles are marked `noindex` and omitted from the sitemap until their `draft` flag is removed and a publication date is set. Publish at most one new profile per America/New_York calendar day; factual, fairness, and portrait checks take priority over the daily target.

The existing Cloudflare Pages project is `rachorg-website`, production branch `main` (verified September 20, 2026). The legacy `wrangler.jsonc` name is not the live Pages project name; use the explicit project name for inspection or direct upload. Do not create a replacement project or change DNS. Verify the canonical site after publishing; a build or deployment submission alone is not proof of publication.

Each profile includes a rights-cleared profile picture, a concise card-level recognition reason, a full “Why RACH recognizes” section, article-specific metadata, structured data, a reporting cutoff, interview and disclosure notes, numbered sources, an image credit and license, and a correction route. RACH is expanded visibly as “Recognizing the Achievements and Contributions to Humanity.” Editorial research records and claim ledgers live under `editorial/profiles/` and are not copied into the public build.
