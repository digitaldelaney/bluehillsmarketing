# Katherine Delaney — homepage

Static build of the watercolor homepage redesign, hosted on Netlify. No build step: open `index.html` or serve the folder.

## Files

- `index.html` — page markup and final copy
- `styles.css` — all styles; colors are tokens on `:root`
- `watercolor.js` — scroll bloom: each `[data-wash]` patch spreads in once when its section scrolls into view; skipped for reduced-motion visitors
- `assets/` — skyline, hiker, library and ridge paintings (WebP), plus `og-image.jpg`, the 1200×630 social share image
- `favicon.svg` — tab icon
- `robots.txt`, `sitemap.xml` — search engine crawling
- `llms.txt` — plain summary of who Katherine is and what she offers, for AI answer engines
- `netlify.toml` — Netlify settings: publish the repo root, security headers, long cache for images

## Preview locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy to Netlify

1. In Netlify, choose **Add new site → Import an existing project** and pick this GitHub repository.
2. Leave the build command empty. `netlify.toml` already sets the publish directory to the repo root.
3. Every push to `main` redeploys the site.
4. Under **Domain management**, add the custom domain.

## Accessibility

Checked with axe-core against WCAG 2.2 AA at 1440px, 320px and 200% zoom: no violations, no horizontal scrolling.

- Small red text uses `--red-text` (#a51915), which keeps 4.5:1 contrast even over the darkest watercolor wash and paper grain. Brand red `#b81d18` stays on buttons and large italic words.
- Skip link, visible focus outline, labelled sections, decorative washes and arrows hidden from screen readers.
- Scroll bloom is off for visitors who prefer reduced motion; washes and grain hide in Windows high-contrast mode.

## SEO and AI search

- Title, description, canonical URL, Open Graph and Twitter card tags.
- JSON-LD structured data (`Person`, `ProfessionalService` with the three services, `WebSite`, `WebPage`, case study `Article`), written only from copy on the page.

## Before launch

- The canonical URL, share tags, structured data, sitemap and `llms.txt` assume the domain **katherinedelaney.com** (from the footer). Find and replace it if the site lives elsewhere.
- Links to `services.html`, `case-studies-insights.html`, `contact.html` and `case-study-backlog-to-practice.html` point to pages that aren't built yet.
- Add your LinkedIn URL as `"sameAs"` on the `Person` in the JSON-LD so search engines connect the two profiles.
- Test with a real screen reader (VoiceOver or NVDA) and keyboard on the published site.
