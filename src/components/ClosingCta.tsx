"use client";

import { useEffect, useState } from "react";
import { eventConfig } from "@/config/event";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function ClosingCta() {
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const target = new Date(eventConfig.registrationDeadline).getTime();
    if (Date.now() >= target) {
      setIsExpired(true);
    }
  }, []);

  const hasRegistrationUrl = Boolean(
    eventConfig.registrationUrl && eventConfig.registrationUrl.trim() !== ""
  );

  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="bg-gradient-to-b from-white to-surface-subtle py-16 sm:py-24 border-b border-border-subtle"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-primary-border bg-white p-8 sm:p-12 text-center shadow-card">
          <div className="inline-flex items-center rounded-full border border-primary-border bg-surface-subtle px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span>KOLABORASI & INOVASI PENDIDIK</span>
          </div>

          <h2
            id="cta-heading"
            className="mt-4 text-2xl font-bold tracking-tight text-text-main sm:text-3xl lg:text-4xl"
          >
            Siap Tingkatkan Kompetensi Digital Anda?
          </h2>

          <p className="mt-4 text-base text-text-muted leading-relaxed max-w-xl mx-auto">
            Bergabunglah bersama ratusan pendidik visioner dalam Training Guru Nasional 2026 di SMP–SMK IDN Boarding School.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            {!isExpired && hasRegistrationUrl ? (
              <a
                href={eventConfig.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-7 text-base font-semibold text-white shadow-subtle hover:bg-primary-hover focus-visible:outline-primary transition-colors"
              >
                <span>Daftar Segera</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </a>
            ) : (
              <a
                href="#kontak"
                className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-7 text-base font-semibold text-white shadow-subtle hover:bg-primary-hover focus-visible:outline-primary transition-colors"
              >
                <MessageSquare className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                <span>Hubungi Panitia</span>
              </a>
            )}
          </div>

          <p className="mt-5 text-xs text-text-subtle">
            Batas Registrasi: {eventConfig.registrationDeadlineFormatted}
          </p>
        </div>
      </div>
    </section>
  );
}
