"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { eventConfig } from "@/config/event";
import { ImageIcon, ZoomIn, Download, X } from "lucide-react";

export default function PosterSection() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const hasPoster = Boolean(eventConfig.posterImage && eventConfig.posterImage.trim() !== "");

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <section
      id="poster"
      aria-labelledby="poster-heading"
      className="bg-white py-16 sm:py-20 border-b border-border-subtle"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="poster-heading"
            className="text-2xl font-bold tracking-tight text-text-main sm:text-3xl"
          >
            Kenali Training Guru Nasional 2026
          </h2>
          <p className="mt-3 text-base text-text-muted">
            Temukan informasi utama acara melalui poster resmi Training Guru Nasional 2026.
          </p>
        </div>

        {/* Poster Container */}
        <div className="mt-10 mx-auto max-w-md">
          {hasPoster ? (
            <div className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-surface-muted shadow-card transition-all">
              {/* Poster Image with 4:5 ratio */}
              <div className="relative aspect-[4/5] w-full bg-surface-subtle">
                <Image
                  src={eventConfig.posterImage}
                  alt={eventConfig.posterAlt || "Poster Resmi Training Guru Nasional 2026"}
                  fill
                  sizes="(max-width: 640px) 100vw, 448px"
                  className="object-contain"
                />
              </div>

              {/* Action bar below poster */}
              <div className="flex items-center justify-between border-t border-border-subtle bg-white p-4">
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-primary-border bg-surface-subtle px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-primary"
                >
                  <ZoomIn className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  <span>Lihat Poster</span>
                </button>

                <a
                  href={eventConfig.posterImage}
                  download="Poster-Training-Guru-Nasional-2026"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-subtle transition-colors hover:bg-primary-hover focus-visible:outline-primary"
                >
                  <Download className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  <span>Unduh Poster</span>
                </a>
              </div>
            </div>
          ) : (
            /* Clean Empty State Placeholder */
            <div className="rounded-2xl border-2 border-dashed border-border-subtle bg-surface-muted/60 p-8 sm:p-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-subtle border border-primary-border text-primary">
                <ImageIcon className="h-8 w-8" strokeWidth={1.75} aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-base font-bold text-text-main">
                Poster Resmi Training Guru Nasional 2026
              </h3>

              <p className="mt-2 text-sm text-text-muted leading-relaxed max-w-sm mx-auto">
                Poster akan segera ditambahkan oleh panitia.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-xs font-medium text-text-subtle border border-border-subtle">
                <span>Format siap unggah: PNG/JPG (Rasio 4:5)</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {hasPoster && isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Tampilan penuh poster resmi"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-h-[90vh] max-w-2xl w-full rounded-2xl bg-white p-4 shadow-dropdown"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
              <h4 className="text-sm font-bold text-text-main">
                {eventConfig.posterAlt || "Poster Resmi Training Guru Nasional 2026"}
              </h4>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-text-muted hover:bg-surface-muted hover:text-text-main focus-visible:outline-primary"
                aria-label="Tutup poster"
              >
                <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </button>
            </div>

            <div className="relative mt-3 aspect-[4/5] w-full bg-surface-muted rounded-xl overflow-hidden">
              <Image
                src={eventConfig.posterImage}
                alt={eventConfig.posterAlt || "Poster Resmi Training Guru Nasional 2026"}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-contain"
              />
            </div>

            <div className="mt-4 flex justify-end gap-3">
              <a
                href={eventConfig.posterImage}
                download="Poster-Training-Guru-Nasional-2026"
                className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-primary"
              >
                <Download className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                <span>Unduh File</span>
              </a>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="rounded-xl border border-border-subtle bg-surface-muted px-4 py-2 text-sm font-medium text-text-main hover:bg-surface-subtle focus-visible:outline-primary"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
