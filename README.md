# Webster Wang — personal website

A bilingual static portfolio for GitHub Pages at `https://websterwang-ai.github.io`.

## Update content

Edit `src/content.mjs`. Each project contains English and Chinese copy, thumbnail paths, status, and actions. Add or replace screenshots under `assets/media/`.

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
