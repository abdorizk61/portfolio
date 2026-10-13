"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname() ?? "";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "about", href: "/about" },
    { label: "terminal", href: "/#terminal" },
    { label: "skills", href: "/about#skills" },
    { label: "projects", href: "/#projects" },
    { label: "contact", href: "/#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        if (targetId === "terminal") {
          setTimeout(() => {
            const input = elem.querySelector("input");
            if (input) input.focus();
          }, 400);
        }
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        backgroundColor: scrolled ? "rgba(9, 9, 11, 0.92)" : "rgba(9, 9, 11, 0.75)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(6, 182, 212, 0.2)",
        boxShadow: scrolled
          ? "0 4px 30px rgba(0, 0, 0, 0.8), 0 1px 0 rgba(6, 182, 212, 0.15)"
          : "0 2px 16px rgba(0, 0, 0, 0.4)",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        {/* ── Left Side Logo: Monospace, Electric Cyan ── */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-code, monospace)",
            fontSize: "1.1rem",
            fontWeight: 800,
            color: "#06b6d4",
            textDecoration: "none",
            letterSpacing: "0.08em",
            textShadow: "0 0 12px rgba(6, 182, 212, 0.5), 0 0 24px rgba(6, 182, 212, 0.2)",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            transition: "all 0.2s ease",
          }}
          className="cyber-logo"
        >
          <span>&gt;_</span>
          <span>ABDELRAHMAN</span>
        </Link>

        {/* ── Desktop Navigation Links ── */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive =
              (link.href === "/about" && pathname === "/about") ||
              (link.href === "/work" && pathname.startsWith("/work"));

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                style={{
                  fontFamily: "var(--font-code, monospace)",
                  fontSize: "0.875rem",
                  color: isActive ? "#06b6d4" : "#94a3b8",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  textShadow: isActive ? "0 0 8px rgba(6, 182, 212, 0.6)" : "none",
                  transition: "all 0.2s ease",
                  padding: "4px 2px",
                  position: "relative",
                }}
                className="matrix-nav-link"
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="/resume.pdf"
            download="Abdelrahman_Rizk_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-code, monospace)",
              fontSize: "0.8rem",
              color: "#06b6d4",
              textDecoration: "none",
              letterSpacing: "0.06em",
              padding: "4px 12px",
              borderRadius: "4px",
              border: "1px solid rgba(6, 182, 212, 0.4)",
              background: "rgba(6, 182, 212, 0.08)",
              transition: "all 0.2s ease",
              fontWeight: 600,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#06b6d4";
              (e.currentTarget as HTMLAnchorElement).style.color = "#000000";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(6, 182, 212, 0.08)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#06b6d4";
            }}
          >
            resume ↓
          </a>
        </nav>

        {/* ── Mobile Hamburger Toggle ── */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="mobile-burger-btn"
          style={{
            display: "none",
            background: "transparent",
            border: "1px solid rgba(6, 182, 212, 0.4)",
            color: "#06b6d4",
            fontFamily: "var(--font-code, monospace)",
            padding: "6px 10px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          {mobileMenuOpen ? "[ X ]" : "[ = ]"}
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-drawer"
          style={{
            borderTop: "1px solid rgba(6, 182, 212, 0.2)",
            background: "rgba(9, 9, 11, 0.98)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => {
                handleScrollTo(e, link.href);
                setMobileMenuOpen(false);
              }}
              style={{
                fontFamily: "var(--font-code, monospace)",
                fontSize: "1rem",
                color: "#94a3b8",
                textDecoration: "none",
                letterSpacing: "0.08em",
                padding: "8px 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
              }}
              className="matrix-nav-link"
            >
              &gt; {link.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download="Abdelrahman_Rizk_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontFamily: "var(--font-code, monospace)",
              fontSize: "0.95rem",
              color: "#06b6d4",
              textDecoration: "none",
              letterSpacing: "0.08em",
              padding: "10px 14px",
              borderRadius: "4px",
              border: "1px solid rgba(6, 182, 212, 0.4)",
              background: "rgba(6, 182, 212, 0.08)",
              display: "inline-block",
              textAlign: "center",
              fontWeight: 600,
              marginTop: "4px",
            }}
          >
            &gt; download resume ↓
          </a>
        </div>
      )}

      {/* ── Responsive CSS ── */}
      <style jsx global>{`
        .matrix-nav-link:hover {
          color: #06b6d4 !important;
          text-shadow: 0 0 10px rgba(6, 182, 212, 0.8), 0 0 20px rgba(6, 182, 212, 0.3) !important;
        }
        .cyber-logo:hover {
          color: #22d3ee !important;
          text-shadow: 0 0 16px rgba(6, 182, 212, 0.9) !important;
        }
        @media (max-width: 640px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-burger-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
