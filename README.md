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
