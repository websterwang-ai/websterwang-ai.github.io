import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { site } from "./content.mjs";
import { presentation, visuals } from "./presentation.mjs";

const sourceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = path.resolve(sourceRoot, "docs");
if (path.basename(outputRoot) !== "docs" || !outputRoot.startsWith(sourceRoot + path.sep)) throw new Error("Unexpected output path");
const h = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"})[char]);
const localizedPath = (lang, slug) => `${lang === "zh" ? "/zh" : ""}${slug ? `/projects/${slug}` : ""}/`;
const categoryName = (id, lang) => site.categories.find((item) => item.id === id)?.[lang] ?? id;
const external = (url) => /^https?:/.test(url);
const orderedProjects = site.categories.flatMap((category) => site.projects.filter((project) => project.category === category.id));
const number = (project) => String(orderedProjects.indexOf(project) + 1).padStart(2, "0");
const total = String(orderedProjects.length).padStart(2, "0");
const cover = (project, lang) => visuals[project.slug]?.cover?.[lang] ?? project.image?.[lang];
const arrow = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>';

function header(lang, slug) {
  const ui = site.ui[lang], root = localizedPath(lang);
  return `<a class="skip-link" href="#main">${h(ui.skip)}</a><header class="site-header" id="top"><div class="header-inner shell"><a class="brand" href="${root}" aria-label="${h(site.name)}"><span class="brand-mark" aria-hidden="true">W.</span><span>Webster Wang</span></a><nav class="desktop-nav" aria-label="${lang === "en" ? "Primary navigation" : "主导航"}"><a href="${root}#work">${h(ui.work)}</a><a href="${root}#about">${h(ui.about)}</a><a href="${root}#contact">${h(ui.contact)}</a></nav><div class="header-actions"><div class="lang-switch" aria-label="Language / 语言"><a href="${localizedPath("en", slug)}" lang="en" ${lang === "en" ? 'aria-current="page"' : ""}>EN</a><a href="${localizedPath("zh", slug)}" lang="zh-Hans" ${lang === "zh" ? 'aria-current="page"' : ""}>中文</a></div><a class="header-mail" href="mailto:${h(site.email)}" aria-label="${h(ui.emailMe)}">${arrow}</a><button class="menu-toggle" type="button" aria-label="${h(ui.menu)}" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button></div></div><nav class="mobile-nav shell" id="mobile-nav" hidden aria-label="${lang === "en" ? "Primary navigation" : "主导航"}"><a href="${root}#work">${h(ui.work)}</a><a href="${root}#about">${h(ui.about)}</a><a href="${root}#contact">${h(ui.contact)}</a></nav></header>`;
}

function actionLink(action, lang, className = "button button-primary") {
  return `<a class="${className}" href="${h(action.url)}" ${external(action.url) ? 'target="_blank" rel="noopener noreferrer"' : ""}>${h(action[lang])}${arrow}</a>`;
}

function media(project, lang, context = "card") {
  const copy = project[lang], cls = `${context}-media media-${project.media} accent-${project.color}`;
  if (context === "detail" && project.video) {
    const ratio = project.video.width && project.video.height ? `${Number(project.video.width)} / ${Number(project.video.height)}` : "1216 / 720";
    const tracks = (project.video.captions ?? []).map((track) => `<track kind="captions" src="${h(track.src)}" srclang="${h(track.lang)}" label="${h(track.label)}"${track.lang === (lang === "zh" ? "zh-CN" : "en") ? " default" : ""}>`).join("");
    return `<div class="${cls} media-video" style="aspect-ratio:${ratio}"><video id="project-video" controls playsinline preload="${h(project.video.preload ?? "metadata")}" poster="${h(project.image[lang])}" aria-label="${h(copy.title)} ${lang === "en" ? "video demonstration" : "视频演示"}"><source src="${h(project.video.src)}" type="video/mp4">${tracks}<a href="${h(project.video.src)}">${lang === "en" ? "Watch video" : "观看视频"}</a></video></div>`;
  }
  if (project.media === "abstract") return `<div class="${cls}" aria-hidden="true"><div class="game-sketch"><span></span><span></span><span></span><span></span></div><span class="sketch-label">${lang === "en" ? "IN THE SKETCHBOOK" : "还在构思"}</span></div>`;
  if (project.media === "phone") return `<div class="${cls}"><div class="phone-stage"><img class="phone-back" src="${h(visuals[project.slug]?.secondary ?? project.imageSecondary)}" alt="" loading="lazy" decoding="async" width="720" height="1600"><img class="phone-front" src="${h(cover(project, lang))}" alt="${h(copy.alt)}" loading="lazy" decoding="async" width="720" height="1600"></div></div>`;
  const img = `<img src="${h(cover(project, lang))}" alt="${h(copy.alt)}" loading="${context === "detail" ? "eager" : "lazy"}" decoding="async" width="1400" height="790">`;
  const label = lang === "en" ? "Enlarge screenshot" : "放大截图";
  const content = context === "detail" ? `<a class="screen-enlarge" href="${h(cover(project, lang))}" data-lightbox data-caption="${h(copy.title)}" aria-label="${h(label)}: ${h(copy.title)}">${img}<span class="enlarge-label">${h(label)} ${arrow}</span></a>` : img;
  return `<div class="${cls}">${content}${context === "card" && project.video ? `<span class="video-badge"><span aria-hidden="true">▶</span> ${lang === "en" ? "Film" : "短片"} / ${h(project.video.duration)}</span>` : ""}</div>`;
}

function videoNotes(project, lang) {
  if (!project.video?.credit) return "";
  const credit = project.video.credit;
  return `<div class="video-notes"><p>${lang === "en" ? "English narration · English and Chinese captions in the player." : "英文旁白 · 播放器内可切换中英文字幕。"} <a href="${h(project.video.src)}" download>${lang === "en" ? "Download video" : "下载视频"} ↓</a></p><p>${lang === "en" ? "Music:" : "配乐："} <a href="${h(credit.url)}" target="_blank" rel="noopener noreferrer">${h(credit.title)}</a> — ${h(credit.artist)} · <a href="${h(credit.licenseUrl)}" target="_blank" rel="noopener noreferrer">${h(credit.license)}</a> · ${lang === "en" ? "Excerpted and mixed for this video." : "已为本片节选并混音。"} <a href="${h(credit.details)}">${lang === "en" ? "Full credits" : "完整署名"}</a></p></div>`;
}

function card(project, lang) {
  const ui = site.ui[lang], copy = project[lang];
  return `<article class="project-card accent-${project.color}${project.media === "abstract" ? " is-upcoming" : ""}" data-project-number="${number(project)}"><a class="project-card-link" href="${localizedPath(lang, project.slug)}" aria-label="${h(ui.viewProject)}: ${h(copy.title)}">${media(project, lang)}<div class="card-body"><div class="card-meta"><span>${h(project.status[lang])}</span><span>${number(project)} / ${total}</span></div><div class="card-title-row"><h4>${h(copy.title)}</h4><span class="card-arrow">${arrow}</span></div><p class="card-line">${h(copy.line)}</p><div class="card-foot"><span>${h(project.metric[lang])}</span><span>${h(ui.viewProject)} <span aria-hidden="true">→</span></span></div></div></a></article>`;
}

function heroShowcase(lang) {
  const p = presentation[lang];
  const spotlight = ["aperture", "neuroaxis", "dsh-ai-swarm"].map((slug) => site.projects.find((item) => item.slug === slug));
  return `<div class="hero-showcase"><div class="showcase-topline"><span>${h(p.insideWork)}</span><span>${lang === "en" ? "INDEPENDENT PROJECTS" : "个人项目"}</span></div><div class="showcase-frames">${spotlight.map((project, i) => `<div class="showcase-panel" id="hero-view-${project.slug}" role="tabpanel" aria-labelledby="hero-tab-${project.slug}"${i ? " hidden" : ""}><div class="showcase-screen"><div class="screen-toolbar"><span class="window-dots" aria-hidden="true"><i></i><i></i><i></i></span><span>${h(project[lang].title)}</span><span>${h(project.status[lang])}</span></div><img src="${h(cover(project, lang))}" alt="${h(project[lang].alt)}" width="1265" height="712" loading="${i ? "lazy" : "eager"}"${i ? "" : ' fetchpriority="high"'} decoding="async"></div><a class="showcase-caption" href="${localizedPath(lang, project.slug)}"><span><small>${h(categoryName(project.category, lang))}</small><strong>${h(project[lang].title)}</strong></span><span class="showcase-open">${h(p.takeLook)} ${arrow}</span></a></div>`).join("")}</div><div class="showcase-switch" role="tablist" aria-label="${h(p.previewSelect)}">${spotlight.map((project, i) => `<button type="button" role="tab" id="hero-tab-${project.slug}" aria-controls="hero-view-${project.slug}" aria-selected="${i === 0}" tabindex="${i === 0 ? "0" : "-1"}"><span>0${i + 1}</span> ${project.slug === "dsh-ai-swarm" ? "AI Swarm" : h(project[lang].title)}</button>`).join("")}</div></div>`;
}

function footer(lang) {
  const ui = site.ui[lang];
  return `<section class="contact-section" id="contact"><div class="shell contact-grid"><div><p class="eyebrow">${h(ui.contactEyebrow)}</p><h2>${h(ui.contactTitle)}</h2><p>${h(ui.contactLead)}</p></div><a class="contact-email" href="mailto:${h(site.email)}">${h(site.email)} ${arrow}</a></div></section><footer class="site-footer"><div class="shell footer-inner"><span>© ${new Date().getFullYear()} ${h(site.name)}</span><span>${h(ui.footerLine)}</span><div><a href="${h(site.github)}" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="mailto:${h(site.email)}">${h(ui.emailMe)} ↗</a><a href="#top">${h(ui.top)} ↑</a></div></div></footer>`;
}

function shell(lang, title, description, canonicalPath, body, image = "/assets/showcase/social-card.jpg") {
  const canonical = `${site.url}${canonicalPath}`;
  const alternate = `${site.url}${lang === "en" ? `/zh${canonicalPath}` : canonicalPath.replace(/^\/zh/, "")}`;
  return `<!doctype html><html lang="${lang === "zh" ? "zh-Hans" : "en"}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#f6f5f0"><meta name="description" content="${h(description)}"><link rel="canonical" href="${canonical}"><link rel="alternate" hreflang="${lang === "en" ? "zh-Hans" : "en"}" href="${alternate}"><link rel="icon" type="image/svg+xml" href="/assets/favicon.svg"><link rel="preload" href="/assets/fonts/instrument-serif.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/assets/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="/assets/site.css"><meta property="og:type" content="website"><meta property="og:title" content="${h(title)}"><meta property="og:description" content="${h(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${site.url}${h(image)}"><meta name="twitter:card" content="summary_large_image"><title>${h(title)}</title><script src="/assets/site.js" defer></script></head><body>${body}<dialog class="image-viewer" id="image-viewer" aria-label="${lang === "en" ? "Project screenshot" : "项目截图"}"><button type="button" class="viewer-close" aria-label="${lang === "en" ? "Close image" : "关闭图片"}">×</button><img alt=""><p class="viewer-caption"></p></dialog></body></html>`;
}

function home(lang) {
  const ui = site.ui[lang], p = presentation[lang];
  const sections = site.categories.map((category, i) => {
    const projects = orderedProjects.filter((project) => project.category === category.id);
    return `<section class="category-section" data-category="${category.id}" id="${category.id}"><div class="category-heading"><div><span class="category-number" aria-hidden="true">0${i + 1}</span><h3>${h(category[lang])}</h3></div><p>${h(lang === "en" ? category.noteEn : category.noteZh)}</p></div><div class="project-grid${projects.length === 1 ? " project-grid-single" : ""}">${projects.map((project) => card(project, lang)).join("")}</div></section>`;
  }).join("");
  const filters = [{id:"all", label:ui.all}, ...site.categories.map((category) => ({id:category.id, label:category[lang]}))].map((category) => `<button class="filter-chip${category.id === "all" ? " is-active" : ""}" type="button" data-filter="${category.id}" aria-pressed="${category.id === "all"}">${h(category.label)}</button>`).join("");
  const headline = ui.heroTitle.replace(/, /g, ",<br>").replace(/，/g, "，<br>");
  const body = `${header(lang)}<main id="main"><section class="hero"><div class="shell hero-grid"><div class="hero-copy"><p class="eyebrow">${h(ui.heroEyebrow)}</p><h1>${headline}</h1><p class="hero-lead">${h(ui.heroLead)}</p><div class="hero-actions"><a class="button button-light" href="#work">${h(ui.explore)}<span aria-hidden="true">↓</span></a><a class="hero-contact" href="mailto:${h(site.email)}">${h(ui.emailMe)} ${arrow}</a></div></div>${heroShowcase(lang)}<div class="hero-foot"><p>${h(ui.heroAside)}</p><span>01 — 0${site.categories.length}</span></div></div></section><div class="identity-strip"><div class="shell identity-inner">${p.identities.map((identity, i) => `<span><small>0${i + 1}</small>${h(identity)}</span>`).join("")}</div></div><section class="work-section shell" id="work"><div class="work-heading"><div><p class="eyebrow">${h(ui.workEyebrow)} <span>/ ${total}</span></p><h2>${h(ui.workTitle)}</h2></div><p>${h(ui.workLead)}</p></div><div class="work-navigation"><div class="filter-bar" role="group" aria-label="${h(ui.work)}">${filters}</div><p class="result-status" aria-live="polite" data-total="${site.projects.length}">${site.projects.length} ${h(p.projects)}</p></div>${sections}<p class="figures-note">${h(ui.figures)}</p></section><section class="about-section" id="about"><div class="shell about-grid"><div><p class="eyebrow">${h(ui.aboutEyebrow)}</p><h2>${h(ui.aboutTitle)}</h2></div><div class="about-copy"><p>${h(ui.aboutText)}</p><div class="about-fields">${p.disciplines.map((field) => `<span>${h(field)}</span>`).join("")}</div><a class="text-link" href="${h(site.github)}" target="_blank" rel="noopener noreferrer">${h(ui.githubProfile)} ${arrow}</a></div></div></section></main>${footer(lang)}`;
  return shell(lang, `${site.name} — ${lang === "en" ? "Dream Big, Build Fast, Ship Quality" : "敢想，敢做，敢担当"}`, ui.heroLead, localizedPath(lang), body);
}

function gallery(project, lang) {
  const entries = visuals[project.slug]?.gallery ?? [];
  if (!entries.length) return "";
  const p = presentation[lang];
  return `<section class="gallery-section"><div class="gallery-heading"><p class="eyebrow">${h(p.closerLook)}</p><h2>${h(p.insideProduct)}</h2></div><div class="project-gallery${project.media === "phone" ? " gallery-phones" : ""}">${entries.map((entry, i) => `<figure><a href="${h(entry.src)}" data-lightbox data-caption="${h(entry.caption[lang])}" aria-label="${h(p.enlarge)}: ${h(entry.caption[lang])}"><img src="${h(entry.src)}" alt="${h(entry.alt?.[lang] ?? entry.caption[lang])}" loading="lazy" decoding="async" width="${entry.width}" height="${entry.height}"><span class="gallery-expand">${arrow}</span></a><figcaption><span>0${i + 1}</span>${h(entry.caption[lang])}</figcaption></figure>`).join("")}</div></section>`;
}

function detail(project, lang) {
  const ui = site.ui[lang], p = presentation[lang], copy = project[lang];
  const next = orderedProjects[(orderedProjects.indexOf(project) + 1) % orderedProjects.length];
  const actions = (primary, secondary) => project.actions.map((action) => actionLink(action, lang, action.primary ? primary : secondary)).join("");
  const body = `${header(lang, project.slug)}<main id="main" class="detail-page"><div class="shell"><div class="detail-top"><a class="back-link" href="${localizedPath(lang)}#work"><span aria-hidden="true">←</span> ${h(ui.detailBack)}</a><span class="detail-counter">${number(project)} / ${total}</span></div><header class="detail-header"><p class="eyebrow">${h(categoryName(project.category, lang))} <span>/ ${h(project.status[lang])}</span></p><h1>${h(copy.title)}</h1><p class="detail-tagline">${h(copy.line)}</p></header><div class="detail-overview"><p>${h(copy.summary)}</p><div class="detail-quick"><div class="detail-tags">${project.tags[lang].map((tag) => `<span>${h(tag)}</span>`).join("")}</div><div class="detail-actions">${actions("button button-primary", "button button-secondary")}</div></div></div><div class="detail-visual-wrap">${media(project, lang, "detail")}<div class="visual-caption"><span>${project.video ? h(p.demo) : h(ui.screenshot)} / ${h(copy.title)}${project.slug === "siteselection" ? (lang === "en" ? " · Illustrative sample data" : " · 示例数据") : ""}</span><span>${project.video ? h(project.video.duration) : h(project.metric[lang])}</span></div>${videoNotes(project, lang)}</div><div class="detail-story"><section><p class="eyebrow">01 / ${h(p.theIdea)}</p><h2>${h(ui.detailPurpose)}</h2><p>${h(copy.purpose)}</p></section><section><p class="eyebrow">02 / ${h(p.capabilities)}</p><h2>${h(ui.detailHighlights)}</h2><ul>${copy.highlights.map((item) => `<li><span aria-hidden="true">↗</span>${h(item)}</li>`).join("")}</ul></section></div>${gallery(project, lang)}<section class="detail-involve"><div><p class="eyebrow">03 / ${h(p.nextStep)}</p><h2>${h(ui.detailInvolve)}</h2><p>${h(copy.involvement)}</p>${project.installCommand ? `<div class="detail-install"><span>${lang === "en" ? "INSTALL FROM NPM" : "从 NPM 安装"}</span><code>${h(project.installCommand)}</code></div>` : ""}</div><div class="detail-actions">${actions("button button-light", "button button-outline-light")}</div></section><a class="next-project" href="${localizedPath(lang, next.slug)}"><span><small class="eyebrow">${h(ui.detailNext)} / ${number(next)}</small><strong>${h(next[lang].title)}</strong><span>${h(next[lang].line)}</span></span>${arrow}</a></div></main>${footer(lang)}`;
  return shell(lang, `${copy.title} — ${site.name}`, copy.summary, localizedPath(lang, project.slug), body, cover(project, lang) ?? "/assets/showcase/social-card.jpg");
}

await fs.rm(outputRoot, { recursive: true, force: true });
await fs.mkdir(outputRoot, { recursive: true });
await fs.cp(path.join(sourceRoot, "assets"), path.join(outputRoot, "assets"), { recursive: true });
await fs.writeFile(path.join(outputRoot, ".nojekyll"), "");
for (const lang of ["en", "zh"]) {
  const languageRoot = path.join(outputRoot, lang === "zh" ? "zh" : "");
  await fs.mkdir(languageRoot, { recursive: true });
  await fs.writeFile(path.join(languageRoot, "index.html"), home(lang), "utf8");
  for (const project of orderedProjects) {
    const target = path.join(languageRoot, "projects", project.slug);
    await fs.mkdir(target, { recursive: true });
    await fs.writeFile(path.join(target, "index.html"), detail(project, lang), "utf8");
  }
}
await fs.writeFile(path.join(outputRoot, "404.html"), home("en"), "utf8");
await fs.writeFile(path.join(outputRoot, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`);
const paths = ["/", "/zh/", ...orderedProjects.flatMap((project) => [localizedPath("en", project.slug), localizedPath("zh", project.slug)])];
await fs.writeFile(path.join(outputRoot, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((pathname) => `<url><loc>${site.url}${pathname}</loc></url>`).join("")}</urlset>`);
console.log(`Built ${paths.length} pages in ${outputRoot}`);
