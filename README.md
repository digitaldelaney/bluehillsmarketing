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

## Before launch

- Links to `services.html`, `case-studies-insights.html`, `contact.html` and `case-study-backlog-to-practice.html` point to pages that aren't built yet.
- The same design also lives in Webflow as the `Home Redesign` page on Katherine's Fabulous Site.
