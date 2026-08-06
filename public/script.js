const menuButton = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");
const submenuButton = document.querySelector("[data-submenu-toggle]");

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  menu?.classList.toggle("is-open", !open);
});

submenuButton?.addEventListener("click", () => {
  const open = submenuButton.getAttribute("aria-expanded") === "true";
  submenuButton.setAttribute("aria-expanded", String(!open));
  submenuButton.closest(".nav-group")?.classList.toggle("is-open", !open);
});

document.querySelectorAll("[data-mailto-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const body = [...data.entries()]
      .map(([key, value]) => `${key}: ${String(value).trim()}`)
      .join("\n\n");
    const subject = form.dataset.subject || "RACH website inquiry";
    window.location.href = `mailto:info@rachorg.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});

const header = document.querySelector("[data-header]");
const syncHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 24);
syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
