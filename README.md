# Angelic Articles assets

Public static assets for https://angelic-articles.com.

Intended structure:

- `brand/` — logos and global artwork
- `newsletter/` — newsletter artwork
- `articles/` — article imagery
- `games/` — self-contained HTML article games and their local dependencies
- `experiments/` — experimental/editorial visuals

Article content stays in `SauronShepherd/articles` at
`src/content/articles/<section>/<article>.md`. Mirror that hierarchy for media:
put an article's images and related files under
`images/articles/<section>/<article>/`, and optional games under
`games/<section>/<article>/`. In article Markdown and game metadata, use CDN URLs
pinned to the asset commit:

```text
https://cdn.jsdelivr.net/gh/SauronShepherd/angelic-assets@<commit>/images/articles/<section>/<article>/image-001.webp
https://cdn.jsdelivr.net/gh/SauronShepherd/angelic-assets@<commit>/games/<section>/<article>/index.html
```

Production delivery should use `assets.angelic-articles.com` (Cloudflare Pages/R2) rather than `raw.githubusercontent.com` directly.
