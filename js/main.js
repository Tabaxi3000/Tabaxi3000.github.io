/**
 * Mobile nav toggle, active section highlighting, and social link URLs from config.
 */
(function () {
  "use strict";

  const contact = window.SITE_CONTACT;
  if (contact) {
    const pairs = [
      ["link-linkedin", contact.linkedin],
      ["link-github", contact.github],
      ["contact-linkedin", contact.linkedin],
      ["contact-github", contact.github],
    ];
    for (const [id, url] of pairs) {
      const el = document.getElementById(id);
      if (el && url) {
        el.setAttribute("href", url);
      }
    }
  }

  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const navLinks = document.querySelectorAll(".site-nav a[href^='#']");
  const sections = document.querySelectorAll("main section[id]");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /** @param {string} id */
  function setActiveNav(id) {
    navLinks.forEach((a) => {
      const href = a.getAttribute("href");
      a.classList.toggle("is-active", href === `#${id}`);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
        }
      });
    },
    { rootMargin: "-40% 0px -45% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));

  const hash = window.location.hash.slice(1);
  if (hash) {
    setActiveNav(hash);
  }

  if (header) {
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          header.classList.toggle("is-scrolled", window.scrollY > 12);
          ticking = false;
        });
        ticking = true;
      }
    });
  }
})();
