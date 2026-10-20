# Portfolio showcase media

Optimized copies of authentic application screenshots for the October 2026 portfolio redesign. Original screenshots and videos remain in their existing locations. The machine-readable `sources.json` records source hashes, crop rectangles, output dimensions, and byte counts.

## Processing

- Pillow WebP export, quality 88 by default (SiteSelection demo: quality 82), method 6; Lanczos downsampling without upscaling.
- Covers have a maximum width of 1400 pixels. Phone screenshots are 720 by 1600 pixels.
- A-share: crop `(440, 60, 2502, 1380)` removes the sidebar containing a local system path and the Streamlit toolbar.
- DSH: crop `(0, 128, 1585, 1129)` focuses on the actual orchestration board, removing the source-path inspector and development toolbar. The task graph and state legend are retained.
- Other files preserve the complete screenshot. Exported files omit source metadata.

## Provenance and display notes

- Aperture images come from the frozen public ClinicalTrials.gov example used for the previously approved product introduction. Their source is the approved Aperture public-data demo capture set. Preserve the current video, bilingual captions, and Scott Buckley music credit when using the film.
- Tap to Learn flashcard and quiz images come from the approved application store screenshot set. The lookup and example images are existing portfolio assets. Phone screenshots contain the original device status bar; use the site phone frame to present them.
- Remaining exports use the existing public portfolio screenshots under `assets/media`.
- NeuroAxis export shows the 3D schematic view. Display of other anatomy imagery may carry additional source attribution requirements documented in the NeuroAxis repository.
- SiteSelection demo is a capture of the original Site Atlas UI in an isolated client-only harness, with five hand-authored illustrative sites and example performance metrics. The visible banner identifies the data as illustrative. No DQS files or persisted workspaces were loaded; import, export, storage, and data APIs were disabled. The official OpenStreetMap map attribution remains visible in the exported image.
- `social-card.jpg` is an original 1200 x 630 sharing image combining the approved Aperture and NeuroAxis screenshots with portfolio typography. It contains no additional product claims.

## Files

| File | Pixels | Bytes | Source |
| --- | --- | ---: | --- |
| aperture-timeline.webp | 1265 x 712 | 43,008 | Aperture approved public-data demo captures / `09-timeline.png` |
| aperture-home.webp | 1265 x 712 | 54,970 | Aperture approved public-data demo captures / `01-home.png` |
| aperture-discovery.webp | 1265 x 712 | 55,402 | Aperture approved public-data demo captures / `07-discovery-assets.png` |
| aperture-relevance.webp | 1265 x 712 | 67,592 | Aperture approved public-data demo captures / `12-relevance-table.png` |
| peervine-en.webp | 1400 x 763 | 51,096 | `assets/media/peervine-en.png` |
| peervine-zh.webp | 1400 x 900 | 55,858 | `assets/media/peervine-zh.png` |
| gradchoice-en.webp | 1400 x 767 | 43,242 | `assets/media/gradchoice-en.png` |
| gradchoice-zh.webp | 1400 x 768 | 34,034 | `assets/media/gradchoice-zh.png` |
| neuroaxis.webp | 1400 x 763 | 146,448 | `assets/media/neuroaxis.png` |
| diffusionatlas.webp | 1400 x 757 | 79,810 | `assets/media/diffusionatlas.png` |
| us-stockselector.webp | 1400 x 755 | 52,270 | `assets/media/us-stockselector.png` |
| ashare-stockselector.webp | 1400 x 896 | 93,870 | `assets/media/ashare-stockselector.png` |
| dsh-ai-swarm.webp | 1400 x 884 | 45,868 | `assets/media/dsh-ai-swarm.png` |
| tap-lookup.webp | 720 x 1600 | 67,400 | `assets/media/tap-lookup.jpg` |
| tap-example.webp | 720 x 1600 | 51,354 | `assets/media/tap-example.jpg` |
| tap-flashcard.webp | 720 x 1600 | 23,990 | Tap to Learn approved store screenshots / `1000038724.jpg` |
| tap-quiz.webp | 720 x 1600 | 41,478 | Tap to Learn approved store screenshots / `1000038728.jpg` |
| siteselection-demo.webp | 1400 x 875 | 68,722 | Site Atlas isolated client-only illustrative preview / `siteselection-preview.jpg` |

Total: 1,076,412 bytes of WebP images from 7,903,704 bytes of source images, a 86.4% reduction.
