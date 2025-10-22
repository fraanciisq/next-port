"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // initialize theme from localStorage or system preference
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") {
        setTheme(saved);
        applyTheme(saved);
      } else {
        const prefersDark = window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initial = prefersDark ? "dark" : "light";
        setTheme(initial);
        applyTheme(initial);
      }
    } catch (e) {
      // ignore SSR/localStorage errors
    }
  }, []);

  function applyTheme(t: "light" | "dark") {
    document.documentElement.dataset.theme = t;
    if (t === "dark") {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    applyTheme(next);
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="brand">
            <Link href="/" className="logo" onClick={() => setMenuOpen(false)}>
              {/* simple logo */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>My Portfolio</span>
            </Link>
          </div>

          <nav className={`nav ${menuOpen ? "open" : ""}`} role="navigation" aria-label="Main navigation">
            <Link href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="#certificates" className="nav-link" onClick={() => setMenuOpen(false)}>Certificates</Link>
            <Link href="#case-studies" className="nav-link" onClick={() => setMenuOpen(false)}>Case studies</Link>
          </nav>

          <div className="actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? (
                // moon icon
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                // sun icon
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4"/>
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>

            <button
              className="menu-btn"
              onClick={() => setMenuOpen((s) => !s)}
              aria-label={`${menuOpen ? "Close" : "Open"} menu`}
            >
              <span className={`hamburger ${menuOpen ? "open" : ""}`} aria-hidden />
            </button>
          </div>
        </div>
      </header>

      <style jsx>{`
        :root {
          --bg: #ffffff;
          --text: #0f172a;
          --muted: #64748b;
          --accent: #6366f1;
          --glass: rgba(255,255,255,0.6);
        }
        :root[data-theme="dark"],
        :global(.dark-mode) {
          --bg: #071129;
          --text: #e6eef8;
          --muted: #9fb4d2;
          --accent: #8b5cf6;
          --glass: rgba(5,10,18,0.6);
        }

        .header {
          backdrop-filter: blur(6px);
          background: linear-gradient(180deg, var(--glass), rgba(0,0,0,0));
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }

        :global(.dark-mode) .header {
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .brand {
          display: flex;
          align-items: center;
          flex: 1;
        }

        .logo {
          display: inline-flex;
          gap: 10px;
          align-items: center;
          color: var(--text);
          text-decoration: none;
          font-weight: 600;
        }

        .logo svg { color: var(--accent); }
        .logo span { font-size: 1rem; }

        .nav {
          display: flex;
          gap: 18px;
          align-items: center;
        }

        .nav-link {
          color: var(--muted);
          text-decoration: none;
          padding: 8px 10px;
          border-radius: 8px;
          transition: all 160ms ease;
          font-weight: 500;
        }

        .nav-link:hover {
          color: var(--text);
          background: rgba(99,102,241,0.08);
        }

        .actions {
          margin-left: auto;
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .theme-toggle {
          background: transparent;
          border: 1px solid rgba(0,0,0,0.06);
          padding: 8px;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text);
          transition: transform 120ms ease, background 120ms ease;
        }

        :global(.dark-mode) .theme-toggle {
          border-color: rgba(255,255,255,0.06);
        }

        .theme-toggle:hover { transform: translateY(-2px); }

        .menu-btn {
          display: none;
          background: transparent;
          border: none;
          padding: 8px;
          border-radius: 8px;
          cursor: pointer;
        }

        .hamburger {
          width: 22px;
          height: 2px;
          background: var(--text);
          display: inline-block;
          position: relative;
          transition: transform 200ms ease;
        }
        .hamburger::before,
        .hamburger::after {
          content: "";
          position: absolute;
          left: 0;
          width: 22px;
          height: 2px;
          background: var(--text);
          transition: transform 200ms ease, top 200ms ease, bottom 200ms ease, opacity 200ms ease;
        }
        .hamburger::before { top: -7px; }
        .hamburger::after { bottom: -7px; }

        .hamburger.open {
          background: transparent;
        }
        .hamburger.open::before {
          transform: rotate(45deg);
          top: 0;
        }
        .hamburger.open::after {
          transform: rotate(-45deg);
          bottom: 0;
        }

        /* Responsive */
        @media (max-width: 880px) {
          .nav {
            position: fixed;
            top: 64px;
            right: 16px;
            background: var(--glass);
            border-radius: 12px;
            padding: 12px;
            flex-direction: column;
            gap: 8px;
            box-shadow: 0 8px 30px rgba(2,6,23,0.12);
            transform-origin: top right;
            transform: scale(0.95);
            opacity: 0;
            pointer-events: none;
            transition: all 160ms ease;
            min-width: 200px;
            z-index: 60;
            border: 1px solid rgba(0,0,0,0.06);
          }

          :global(.dark-mode) .nav {
            border: 1px solid rgba(255,255,255,0.04);
          }

          .nav.open {
            transform: scale(1);
            opacity: 1;
            pointer-events: auto;
          }

          .menu-btn { display: inline-block; }

          /* hide default nav inline on mobile; show via menu */
          .container { gap: 12px; }
        }
      `}</style>
    </>
  );
}