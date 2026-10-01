import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { site } from "./content.mjs";

const sourceRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const outputRoot = path.resolve(sourceRoot, "docs");
if (
  path.basename(outputRoot) !== "docs" ||
  !outputRoot.startsWith(sourceRoot + path.sep)
) {
  throw new Error("Unexpected output path");
}

const h = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );

const localizedPath = (lang, slug) =>
  `${lang === "zh" ? "/zh" : ""}${slug ? `/projects/${slug}` : ""}/`;
const categoryName = (id, lang) =>
  site.categories.find((item) => item.id === id)?.[lang] ?? id;
const external = (url) => /^https?:/.test(url);

function header(lang) {
  const ui = site.ui[lang];
  const root = localizedPath(lang);
  return `<a class="skip-link" href="#main">${h(ui.skip)}</a>
  <header class="site-header" id="top">
    <div class="header-inner shell">
      <a class="brand" href="${root}" aria-label="${h(site.name)} — ${h(ui.work)}"><span class="brand-symbol">W<span>✳</span></span><span class="brand-caption">WEBSTER<br>WANG</span></a>
      <nav class="desktop-nav" aria-label="${h(ui.menu)}">
        <a href="${root}#work">${h(ui.work)}</a><a href="${root}#about">${h(ui.about)}</a><a href="${root}#contact">${h(ui.contact)}</a>
      </nav>
      <div class="header-actions">
        <div class="lang-switch" aria-label="Language / 语言"><a href="${localizedPath("en", globalThis.currentSlug)}" lang="en" ${lang === "en" ? 'aria-current="page"' : ""}>EN</a><span aria-hidden="true">/</span><a href="${localizedPath("zh", globalThis.currentSlug)}" lang="zh-Hans" ${lang === "zh" ? 'aria-current="page"' : ""}>中文</a></div>
        <a class="header-mail" href="mailto:${site.email}" aria-label="${h(ui.emailMe)}"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 5.5h18v13H3z"/><path d="m3 6 9 7 9-7"/></svg></a>
        <button class="menu-toggle" type="button" aria-label="${h(ui.menu)}" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button>
      </div>
    </div>
    <nav class="mobile-nav shell" id="mobile-nav" hidden aria-label="${h(ui.menu)}"><a href="${root}#work">${h(ui.work)}</a><a href="${root}#about">${h(ui.about)}</a><a href="${root}#contact">${h(ui.contact)}</a></nav>
  </header>`;
}

function actionLink(action, lang, className = "button button-primary") {
  return `<a class="${className}" href="${h(action.url)}" ${external(action.url) ? 'target="_blank" rel="noopener noreferrer"' : ""}>${h(action[lang])}<span aria-hidden="true">↗</span></a>`;
}

function media(project, lang, context = "card") {
  const copy = project[lang];
  const cls = `${context}-media media-${project.media} accent-${project.color}`;
  if (project.media === "abstract") {
    return `<div class="${cls}" role="img" aria-label="${h(copy.alt)}"><div class="game-art"><span class="game-orbit game-orbit-one"></span><span class="game-orbit game-orbit-two"></span><span class="game-block game-block-one"></span><span class="game-block game-block-two"></span><span class="game-block game-block-three"></span><span class="game-art-label">PLAY / 001</span></div></div>`;
  }
  if (project.media === "phone") {
    return `<div class="${cls}"><div class="phone-stage"><img class="phone-back" src="${project.imageSecondary}" alt="" loading="${context === "detail" ? "eager" : "lazy"}" decoding="async"><img class="phone-front" src="${project.image[lang]}" alt="${h(copy.alt)}" loading="${context === "detail" ? "eager" : "lazy"}" decoding="async"></div></div>`;
  }
  return `<div class="${cls}"><img src="${h(project.image[lang])}" alt="${h(copy.alt)}" loading="${context === "detail" ? "eager" : "lazy"}" decoding="async"></div>`;
}

function card(project, lang) {
  const ui = site.ui[lang];
  const copy = project[lang];
  return `<article class="project-card accent-${project.color}">
    <a class="project-card-link" href="${localizedPath(lang, project.slug)}" aria-label="${h(ui.viewProject)}: ${h(copy.title)}">
      ${media(project, lang)}
      <div class="card-body"><div class="card-meta"><span class="status-dot"></span><span>${h(project.status[lang])}</span><span class="card-index">${h(project.index)} / 10</span></div>
      <div class="card-title-row"><h3>${h(copy.title)}</h3><span class="card-arrow" aria-hidden="true">↗</span></div>
      <p class="card-line">${h(copy.line)}</p><div class="card-foot"><span class="card-metric">${h(project.metric[lang])}</span><span class="card-view">${h(ui.viewProject)} <span aria-hidden="true">→</span></span></div></div>
    </a>
  </article>`;
}

function footer(lang, includeContact = true) {
  const ui = site.ui[lang];
  return `${includeContact ? `<section class="contact-section" id="contact"><div class="shell contact-grid"><div><p class="eyebrow"><span class="eyebrow-mark"></span>${h(ui.contactEyebrow)}</p><h2>${h(ui.contactTitle)}</h2><p>${h(ui.contactLead)}</p></div><a class="contact-email" href="mailto:${site.email}">${h(site.email)}<span aria-hidden="true">↗</span></a></div></section>` : ""}
  <footer class="site-footer"><div class="shell footer-inner"><span>© ${new Date().getFullYear()} ${h(site.name)}</span><span>${h(ui.footerLine)}</span><div><a href="${site.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="mailto:${site.email}">${h(ui.emailMe)} ↗</a><a href="#top">↑ ${h(ui.top)}</a></div></div></footer>`;
}

function shell(
  lang,
  title,
  description,
  canonicalPath,
  body,
  image = "/assets/media/peervine-en.png",
) {
  const canonical = `${site.url}${canonicalPath}`;
  const alternate = `${site.url}${lang === "en" ? `/zh${canonicalPath}` : canonicalPath.replace(/^\/zh/, "")}`;
  const altLang = lang === "en" ? "zh-Hans" : "en";
  return `<!doctype html><html lang="${lang === "zh" ? "zh-Hans" : "en"}"><head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#0c1014"><meta name="description" content="${h(description)}">
  <link rel="canonical" href="${canonical}"><link rel="alternate" hreflang="${altLang}" href="${alternate}">
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg"><link rel="stylesheet" href="/assets/site.css">
  <meta property="og:type" content="website"><meta property="og:title" content="${h(title)}"><meta property="og:description" content="${h(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${site.url}${h(image)}">
  <title>${h(title)}</title><script src="/assets/site.js" defer></script></head><body>${body}</body></html>`;
}

function home(lang) {
  globalThis.currentSlug = undefined;
  const ui = site.ui[lang];
  const sections = site.categories
    .map((category, i) => {
      const projects = site.projects.filter(
        (project) => project.category === category.id,
      );
      return `<section class="category-section ${category.id === "published" ? "featured-section" : ""}" data-category="${category.id}" id="${category.id}"><div class="category-heading"><div><p class="eyebrow"><span class="eyebrow-number">${String(i + 1).padStart(2, "0")}</span>${h(category[lang])}</p><h3>${h(category[lang])}</h3></div><span class="category-note">${h(lang === "en" ? category.noteEn : category.noteZh)}</span></div><div class="${category.id === "published" ? "featured-grid" : "project-grid"}">${projects.map((project) => card(project, lang)).join("")}</div></section>`;
    })
    .join("");
  const filters = [
    `<button class="filter-chip is-active" type="button" data-filter="all" aria-pressed="true">${h(ui.all)}</button>`,
    ...site.categories.map(
      (category) =>
        `<button class="filter-chip" type="button" data-filter="${category.id}" aria-pressed="false">${h(category[lang])}</button>`,
    ),
  ].join("");
  const body = `${header(lang)}<main id="main">
    <section class="hero"><div class="shell hero-grid"><div class="hero-copy"><p class="eyebrow"><span class="eyebrow-mark"></span>${h(ui.heroEyebrow)}</p><h1>${ui.heroTitle}</h1><p class="hero-lead">${h(ui.heroLead)}</p><div class="hero-actions"><a class="button button-primary" href="#work">${h(ui.explore)} <span aria-hidden="true">↘</span></a><a class="text-link" href="mailto:${site.email}">${h(ui.emailMe)} <span aria-hidden="true">↗</span></a></div><div class="hero-bottom"><span class="live-pulse"></span><span>${h(ui.heroAside)}</span></div></div>
    <div class="hero-art" aria-hidden="true"><div class="hero-art-grid"></div><div class="hero-orbit orbit-one"></div><div class="hero-orbit orbit-two"></div><div class="hero-orbit orbit-three"></div><div class="hero-art-core"><span>W</span><small>✳</small></div><div class="art-tag art-tag-one">${h(ui.artLearn)} <b>↗</b></div><div class="art-tag art-tag-two">${h(ui.artBuild)} <b>↗</b></div><div class="art-tag art-tag-three">${h(ui.artExplore)} <b>↗</b></div><div class="art-coordinate">41° 42′ N / 72° 40′ W<br>${h(ui.artProgress)}</div><div class="art-star art-star-one">✦</div><div class="art-star art-star-two">✦</div></div></div></section>
    <section class="work-section shell" id="work"><div class="work-heading"><p class="eyebrow"><span class="eyebrow-mark"></span>${h(ui.workEyebrow)}</p><h2>${h(ui.workTitle)}</h2><p>${h(ui.workLead)}</p></div><div class="filter-bar" role="group" aria-label="${h(ui.work)}">${filters}</div>${sections}<p class="figures-note">${h(ui.figures)}</p></section>
    <section class="about-section" id="about"><div class="shell about-grid"><div class="about-art" aria-hidden="true"><span class="about-monogram">W<span>✳</span></span><span class="about-art-line">${h(ui.artFields)}</span></div><div class="about-copy"><p class="eyebrow"><span class="eyebrow-mark"></span>${h(ui.aboutEyebrow)}</p><h2>${h(ui.aboutTitle)}</h2><p>${h(ui.aboutText)}</p><a class="text-link" href="${site.github}" target="_blank" rel="noopener noreferrer">${h(ui.githubProfile)} <span aria-hidden="true">↗</span></a></div></div></section>
  </main>${footer(lang)}`;
  return shell(
    lang,
    `${site.name} — ${lang === "en" ? "I dream. I build. I ship." : "敢想。敢做。做出来。"}`,
    ui.heroLead,
    localizedPath(lang),
    body,
  );
}

function detail(project, lang) {
  globalThis.currentSlug = project.slug;
  const ui = site.ui[lang];
  const copy = project[lang];
  const next =
    site.projects[(site.projects.indexOf(project) + 1) % site.projects.length];
  const body = `${header(lang)}<main id="main" class="detail-page"><div class="shell"><div class="detail-top"><a class="back-link" href="${localizedPath(lang)}#work"><span aria-hidden="true">←</span>${h(ui.detailBack)}</a><span class="detail-counter">${h(project.index)} / ${String(site.projects.length).padStart(2, "0")}</span></div>
    <header class="detail-header"><p class="eyebrow"><span class="eyebrow-mark"></span>${h(categoryName(project.category, lang))} <span class="detail-separator">/</span> ${h(project.status[lang])}</p><h1>${h(copy.title)}</h1><p class="detail-tagline">${h(copy.line)}</p><div class="detail-tags">${project.tags[lang].map((tag) => `<span>${h(tag)}</span>`).join("")}</div></header>
    <div class="detail-visual-wrap">${media(project, lang, "detail")}<div class="visual-caption"><span>${h(ui.screenshot)} / ${h(copy.title)}</span><span>${h(project.metric[lang])}</span></div></div>
    <div class="detail-intro"><p class="detail-intro-label">01 / ${h(ui.detailPurpose)}</p><p>${h(copy.summary)}</p></div>
    <div class="detail-columns"><section class="detail-panel"><p class="eyebrow">02 / ${h(ui.detailPurpose)}</p><h2>${h(ui.detailPurpose)}</h2><p>${h(copy.purpose)}</p></section><section class="detail-panel"><p class="eyebrow">03 / ${h(ui.detailHighlights)}</p><h2>${h(ui.detailHighlights)}</h2><ul>${copy.highlights.map((item) => `<li><span class="list-mark" aria-hidden="true">↗</span>${h(item)}</li>`).join("")}</ul></section></div>
    <section class="detail-involve"><div><p class="eyebrow">04 / ${h(ui.detailInvolve)}</p><h2>${h(ui.detailInvolve)}</h2><p>${h(copy.involvement)}</p>${project.installCommand ? `<div class="detail-install"><span>${lang === "en" ? "INSTALL FROM NPM" : "从 NPM 安装"}</span><code>${h(project.installCommand)}</code></div>` : ""}</div><div class="detail-actions">${project.actions.map((action) => actionLink(action, lang, action.primary ? "button button-primary" : "button button-secondary")).join("")}</div></section>
    <a class="next-project" href="${localizedPath(lang, next.slug)}"><span class="eyebrow">${h(ui.detailNext)} / ${h(next.index)}</span><span class="next-project-title">${h(next[lang].title)} <span aria-hidden="true">↗</span></span><span>${h(next[lang].line)}</span></a>
  </div></main>${footer(lang)}`;
  return shell(
    lang,
    `${copy.title} — ${site.name}`,
    copy.summary,
    localizedPath(lang, project.slug),
    body,
    project.image?.[lang] ?? "/assets/favicon.svg",
  );
}

await fs.rm(outputRoot, { recursive: true, force: true });
await fs.mkdir(outputRoot, { recursive: true });
await fs.cp(path.join(sourceRoot, "assets"), path.join(outputRoot, "assets"), {
  recursive: true,
});
await fs.writeFile(path.join(outputRoot, ".nojekyll"), "");
for (const lang of ["en", "zh"]) {
  const languageRoot = path.join(outputRoot, lang === "zh" ? "zh" : "");
  await fs.mkdir(languageRoot, { recursive: true });
  await fs.writeFile(path.join(languageRoot, "index.html"), home(lang), "utf8");
  for (const project of site.projects) {
    const target = path.join(languageRoot, "projects", project.slug);
    await fs.mkdir(target, { recursive: true });
    await fs.writeFile(
      path.join(target, "index.html"),
      detail(project, lang),
      "utf8",
    );
  }
}
await fs.writeFile(path.join(outputRoot, "404.html"), home("en"), "utf8");
await fs.writeFile(
  path.join(outputRoot, "robots.txt"),
  `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`,
);
const paths = [
  "/",
  "/zh/",
  ...site.projects.flatMap((project) => [
    `/projects/${project.slug}/`,
    `/zh/projects/${project.slug}/`,
  ]),
];
await fs.writeFile(
  path.join(outputRoot, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((pathname) => `<url><loc>${site.url}${pathname}</loc></url>`).join("")}</urlset>`,
);
console.log(`Built ${paths.length} pages in ${outputRoot}`);
