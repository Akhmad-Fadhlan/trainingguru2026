import { eventConfig } from "@/config/event";
import Logo from "./Logo";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Award,
  Building2,
  Clock,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FBFF] to-surface-muted pt-8 pb-16 lg:pt-14 lg:pb-24"
    >
      {/* Soft subtle grid decorative pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(#2563EB 0.75px, transparent 0.75px), radial-gradient(#38BDF8 0.75px, transparent 0.75px)",
          backgroundSize: "28px 28px",
          backgroundPosition: "0 0, 14px 14px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Badge without star icon */}
            <div className="inline-flex items-center rounded-full border border-primary-border bg-surface-subtle px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <span>PROGRAM PELATIHAN NASIONAL • 2026</span>
            </div>

            {/* H1 Title */}
            <h1
              id="hero-heading"
              className="mt-6 text-3xl font-extrabold tracking-tight text-text-main sm:text-5xl lg:text-5xl lg:leading-[1.15]"
            >
              {eventConfig.name}
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-lg text-text-muted sm:text-xl sm:leading-relaxed max-w-2xl">
              Tingkatkan kompetensi digital, kuasai teknologi masa depan, dan ciptakan pengalaman belajar yang lebih inovatif.
            </p>

            {/* Event Key Details */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-6 text-sm text-text-main font-medium">
              <div className="inline-flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface-subtle text-primary border border-primary-border">
                  <Calendar className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-text-subtle font-normal">Tanggal Acara</div>
                  <div className="font-semibold text-text-main">{eventConfig.dateRange}</div>
                </div>
              </div>

              <div className="hidden h-8 w-[1px] bg-border-subtle sm:block" aria-hidden="true" />

              <div className="inline-flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface-subtle text-primary border border-primary-border">
                  <MapPin className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-text-subtle font-normal">Lokasi Pelaksanaan</div>
                  <div className="font-semibold text-text-main">{eventConfig.locationName}</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center">
              <a
                href="#program"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-base font-semibold text-white shadow-subtle transition-colors duration-150 hover:bg-primary-hover focus-visible:outline-primary"
              >
                <span>Jelajahi Program Pelatihan</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </a>

              <a
                href={eventConfig.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-primary-border bg-white px-6 text-base font-semibold text-primary transition-colors duration-150 hover:bg-surface-subtle focus-visible:outline-primary"
              >
                <span>Daftar Segera</span>
              </a>
            </div>
          </div>

          {/* Right Column: Structured Event Card (Clean & Focused) */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl border border-border-subtle bg-white p-6 sm:p-8 shadow-card">
              <div className="border-b border-border-subtle pb-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    <Award className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                    <span>Informasi Resmi Pelatihan</span>
                  </div>
                  <Logo size="sm" />
                </div>
                <h2 className="mt-3 text-xl font-bold text-text-main leading-snug">
                  {eventConfig.theme}
                </h2>
                <p className="mt-2 text-sm italic text-text-muted">
                  &ldquo;{eventConfig.tagline}&rdquo;
                </p>
              </div>

              <div className="mt-5 space-y-4 text-sm">
                <div className="flex items-start gap-3 rounded-xl border border-border-subtle bg-surface-muted p-3.5">
                  <Building2 className="h-5 w-5 text-primary shrink-0 mt-0.5" strokeWidth={1.75} aria-hidden="true" />
                  <div>
                    <span className="text-xs font-semibold text-text-subtle uppercase tracking-wider block">
                      Tempat Pelaksanaan
                    </span>
                    <span className="font-semibold text-text-main block mt-0.5">
                      {eventConfig.locationName}
                    </span>
                    <span className="text-xs text-text-muted block mt-0.5">
                      {eventConfig.locationAddress}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-border-subtle bg-surface-muted p-3.5">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" strokeWidth={1.75} aria-hidden="true" />
                  <div>
                    <span className="text-xs font-semibold text-text-subtle uppercase tracking-wider block">
                      Batas Akhir Pendaftaran
                    </span>
                    <span className="font-semibold text-text-main block mt-0.5">
                      {eventConfig.registrationDeadlineFormatted}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-border-subtle flex items-center justify-between text-xs">
                <span className="text-text-subtle font-medium">
                  IDN Boarding School
                </span>
                <a
                  href="#poster"
                  className="font-semibold text-primary hover:underline"
                >
                  Lihat Poster Resmi &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
