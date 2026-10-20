# Webster Wang — personal website

A bilingual static portfolio for GitHub Pages at `https://websterwang-ai.github.io`.

## Update content

Edit `src/content.mjs` for English and Chinese project descriptions, status, metrics, and actions. Edit `src/presentation.mjs` for the homepage presentation, optimized covers, and screenshot galleries. Each gallery image includes intrinsic dimensions and a caption in both languages.

The design uses a warm paper and charcoal palette, self-hosted Inter and Instrument Serif fonts, and real product screenshots. The homepage previews can be switched manually, and project screenshots open in a keyboard-accessible image viewer. There is no autoplay or third-party analytics.

Add optimized screenshots under `assets/showcase/`. Record their source, crop, and any limitations in its `README.md` and `sources.json`. The SiteSelection image uses clearly labeled illustrative data. Original screenshots, video files, captions, and credits remain under `assets/media/`. Font licenses are included under `assets/fonts/`.

Run:

```powershell
node src/build.mjs
```

The build writes the publishable site to `docs/`. Commit the updated source and `docs/` together. There are no npm dependencies.

## Preview

Serve the `docs` folder at the origin root. For example:

```powershell
python -m http.server 8765 -d docs
```

Open `http://localhost:8765/` and `http://localhost:8765/zh/`.

## GitHub Pages

In repository **Settings → Pages**, set **Build and deployment → Deploy from a branch**, branch **main**, folder **/docs**. The `.nojekyll` file is generated automatically.

The project uses root-relative paths because it is designed for the account site `websterwang-ai.github.io`. If moved to a project subpath, the route and asset prefixes need to be adjusted.

Audience and download figures are owner-reported as of September 2026. Update them in `src/content.mjs` when they change.

When reviewing a design change, inspect both languages at desktop and phone widths. Check project filters, preview tabs, navigation, the image viewer, and existing video/caption controls before publishing.
