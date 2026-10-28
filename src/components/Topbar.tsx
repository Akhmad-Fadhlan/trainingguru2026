"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { eventConfig } from "@/config/event";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { href: "#hero", label: "Beranda", id: "hero" },
  { href: "#poster", label: "Poster", id: "poster" },
  { href: "#tentang", label: "Tentang", id: "tentang" },
  { href: "#program", label: "Program Pelatihan", id: "program" },
  { href: "#jadwal", label: "Jadwal", id: "jadwal" },
  { href: "#lokasi", label: "Lokasi", id: "lokasi" },
  { href: "#faq", label: "FAQ", id: "faq" },
];

export default function Topbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll for header background styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["hero", "poster", "tentang", "program", "jadwal", "lokasi", "kontak", "faq"];
    const observers: IntersectionObserver[] = [];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // Tutup menu otomatis saat layar melebar ke ukuran desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsMobileMenuOpen(false);
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to main content accessibility link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-primary focus:text-white focus:font-medium focus:rounded-xl focus:shadow-dropdown focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        Lewati ke konten utama
      </a>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white border-b border-border-subtle shadow-subtle"
            : "bg-white/85 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-container items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo link */}
          <a
            href="#hero"
            aria-label="Kembali ke atas / Beranda Training Guru Nasional 2026"
            className="flex items-center gap-3 rounded-xl focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            <Logo size="md" />
            <div className="hidden sm:flex flex-col border-l border-border-subtle pl-3">
              <span className="font-bold text-sm tracking-tight text-text-main leading-tight">
                {eventConfig.name}
              </span>
              <span className="text-[11px] text-text-muted font-medium leading-none mt-0.5">
                {eventConfig.dateRange}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden items-center gap-1 lg:flex"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? "bg-surface-subtle text-primary font-semibold"
                      : "text-text-muted hover:bg-surface-muted hover:text-text-main"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            {/* Direct CTA button to Kontak */}
            <a
              href={eventConfig.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-subtle transition-colors duration-150 hover:bg-primary-hover focus-visible:outline-primary"
            >
              <span>Daftar Segera</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </nav>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-controls="mobile-navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle bg-surface-muted text-text-main hover:bg-surface-subtle focus-visible:outline-primary lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>
        </div>

      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-20 bottom-0 z-[60] flex flex-col bg-white border-t border-border-subtle p-6 lg:hidden overflow-y-auto overscroll-contain"
        >
          <nav className="flex flex-col gap-2" aria-label="Navigasi Seluler">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-surface-subtle text-primary font-semibold"
                      : "text-text-muted hover:bg-surface-muted hover:text-text-main"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  )}
                </a>
              );
            })}

            <div className="pt-4 mt-2 border-t border-border-subtle">
              <a
                href={eventConfig.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-center text-base font-semibold text-white shadow-subtle hover:bg-primary-hover active:bg-primary-hover"
              >
                <span>Daftar Segera</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
