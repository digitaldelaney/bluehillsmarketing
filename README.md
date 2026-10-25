# Katherine Delaney — homepage

Static build of the watercolor homepage redesign. No build step: open `index.html` or serve the folder.

## Files

- `index.html` — page markup and final copy
- `styles.css` — all styles; colors are tokens on `:root`
- `watercolor.js` — scroll bloom: each `[data-wash]` patch spreads in once when its section scrolls into view; skipped for reduced-motion visitors
- `assets/` — skyline, hiker, library and ridge paintings (WebP)

## Preview locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

- `favicon.svg`, `assets/og-image.jpg` — tab icon and 1200×630 social share image
- `robots.txt`, `sitemap.xml` — search engine crawling
- `llms.txt` — plain summary of who Katherine is and what she offers, for AI answer engines

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
- The same design also lives in Webflow as the `Home Redesign` page on Katherine's Fabulous Site.
