# Angelic Articles assets

Public static assets for https://angelic-articles.com.

Intended structure:

- `brand/` — logos and global artwork
- `newsletter/` — newsletter artwork
- `articles/` — article imagery
- `games/` — self-contained HTML article games and their local dependencies
- `experiments/` — experimental/editorial visuals

Article content stays in `SauronShepherd/articles`. Put article images under
`images/articles/<article-slug>/` and optional games under
`games/<article-slug>/`. In article Markdown and game metadata, use CDN URLs
pinned to the asset commit:

```text
https://cdn.jsdelivr.net/gh/SauronShepherd/angelic-assets@<commit>/images/articles/<article-slug>/image-001.webp
https://cdn.jsdelivr.net/gh/SauronShepherd/angelic-assets@<commit>/games/<article-slug>/index.html
```

Production delivery should use `assets.angelic-articles.com` (Cloudflare Pages/R2) rather than `raw.githubusercontent.com` directly.
