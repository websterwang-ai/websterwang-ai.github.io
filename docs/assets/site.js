(() => {
  const lang = document.documentElement.lang.startsWith("zh") ? "zh" : "en";
  const preference = {
    get() { try { return localStorage.getItem("webster-site-language"); } catch { return null; } },
    set(value) { try { localStorage.setItem("webster-site-language", value); } catch { /* Keep other interactions usable without storage. */ } },
  };
  const saved = preference.get();
  if (location.pathname === "/" && saved === "zh") {
    location.replace("/zh/");
    return;
  }
  preference.set(lang);
  document.querySelectorAll(".lang-switch a").forEach((link) => {
    link.addEventListener("click", () => {
      preference.set(link.lang.startsWith("zh") ? "zh" : "en");
    });
  });

  const menuButton = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const closeMenu = () => {
    if (!menuButton || !mobileNav) return;
    mobileNav.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute(
      "aria-label",
      lang === "zh" ? "打开菜单" : "Open menu",
    );
  };
  menuButton?.addEventListener("click", () => {
    const opening = mobileNav.hidden;
    mobileNav.hidden = !opening;
    menuButton.setAttribute("aria-expanded", String(opening));
    menuButton.setAttribute(
      "aria-label",
      opening
        ? lang === "zh"
          ? "关闭菜单"
          : "Close menu"
        : lang === "zh"
          ? "打开菜单"
          : "Open menu",
    );
  });
  mobileNav
    ?.querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
  matchMedia("(min-width:761px)").addEventListener("change", (event) => { if (event.matches) closeMenu(); });

  const filterButtons = [...document.querySelectorAll(".filter-chip")];
  const sections = [...document.querySelectorAll(".category-section")];
  for (const button of filterButtons) {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;
      for (const item of filterButtons) {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      }
      for (const section of sections) {
        section.hidden =
          selected !== "all" && section.dataset.category !== selected;
      }
      const count = sections.filter((section) => !section.hidden).reduce((sum, section) => sum + section.querySelectorAll(".project-card").length, 0);
      const result = document.querySelector(".result-status");
      if (result) result.textContent = lang === "zh" ? `${count} 个项目` : `${count} ${count === 1 ? "project" : "projects"}`;
    });
  }

  const previewTabs = [...document.querySelectorAll(".showcase-switch [role=tab]")];
  const selectPreview = (selected) => previewTabs.forEach((tab) => {
    const active = selected === tab;
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    document.getElementById(tab.getAttribute("aria-controls")).hidden = !active;
  });
  previewTabs.forEach((tab, i) => {
    tab.addEventListener("click", () => selectPreview(tab));
    tab.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowRight") next = previewTabs[(i + 1) % previewTabs.length];
      if (event.key === "ArrowLeft") next = previewTabs[(i - 1 + previewTabs.length) % previewTabs.length];
      if (event.key === "Home") next = previewTabs[0];
      if (event.key === "End") next = previewTabs.at(-1);
      if (!next) return;
      event.preventDefault();
      selectPreview(next);
      next.focus();
    });
  });

  const viewer = document.querySelector(".image-viewer");
  if (viewer && typeof viewer.showModal === "function") {
    const image = viewer.querySelector("img");
    const caption = viewer.querySelector(".viewer-caption");
    let previousFocus;
    document.querySelectorAll("[data-lightbox]").forEach((link) => link.addEventListener("click", (event) => {
      event.preventDefault();
      previousFocus = link;
      image.src = link.href;
      image.alt = link.querySelector("img")?.alt ?? link.dataset.caption ?? "";
      caption.textContent = link.dataset.caption ?? image.alt;
      viewer.showModal();
      document.body.classList.add("viewer-open");
    }));
    viewer.querySelector(".viewer-close").addEventListener("click", () => viewer.close());
    viewer.addEventListener("click", (event) => { if (event.target === viewer) viewer.close(); });
    viewer.addEventListener("close", () => {
      document.body.classList.remove("viewer-open");
      image.removeAttribute("src");
      previousFocus?.focus();
    });
  }
})();
