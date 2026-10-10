"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Education", id: "education" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener("scroll", updateScrollState);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.navbar} aria-label="Main navigation">
        <a className={styles.brand} href="#home" onClick={closeMenu}>
          <span className={styles.brandMark} aria-hidden="true">&lt;/&gt;</span>
          <span>Sharmaine<span className={styles.brandDot}>.</span></span>
        </a>

        <button
          className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="primary-navigation"
          className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}
        >
          {links.map(({ label, id }) => (
            <a
              key={id}
              className={activeSection === id ? styles.activeLink : ""}
              href={`#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a
            className={styles.mobileContact}
            href="#contact"
            onClick={closeMenu}
          >
            Contact Me <span aria-hidden="true">↗</span>
          </a>
        </div>
        <a className={styles.contactButton} href="#contact">
          Contact Me <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
