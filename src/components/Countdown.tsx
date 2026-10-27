"use client";

import { useEffect, useState, useMemo } from "react";
import { eventConfig } from "@/config/event";
import { Clock, AlertCircle, ArrowRight, MessageSquare } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
  totalSeconds: number;
}

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const targetTime = useMemo(
    () => new Date(eventConfig.registrationDeadline).getTime(),
    []
  );

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
    totalSeconds: 1,
  });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const now = Date.now();
      const difference = targetTime - now;

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
          totalSeconds: 0,
        };
      }

      const totalSeconds = Math.floor(difference / 1000);
      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = Math.floor(totalSeconds % 60);

      return {
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
        totalSeconds,
      };
    };

    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  // Formatter for two digits
  const pad = (num: number) => String(num).padStart(2, "0");

  // Screen reader polite text updated on minute granularity
  const screenReaderTimeText = useMemo(() => {
    if (!mounted) return "Menghitung sisa waktu pendaftaran...";
    if (timeLeft.isExpired) return "Pendaftaran telah resmi ditutup.";
    return `Sisa waktu pendaftaran: ${timeLeft.days} hari, ${timeLeft.hours} jam, ${timeLeft.minutes} menit.`;
  }, [mounted, timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.isExpired]);

  const cards = [
    { label: "Hari", value: mounted ? pad(timeLeft.days) : "--" },
    { label: "Jam", value: mounted ? pad(timeLeft.hours) : "--" },
    { label: "Menit", value: mounted ? pad(timeLeft.minutes) : "--" },
    { label: "Detik", value: mounted ? pad(timeLeft.seconds) : "--" },
  ];

  const hasRegistrationUrl = Boolean(
    eventConfig.registrationUrl && eventConfig.registrationUrl.trim() !== ""
  );

  return (
    <section
      id="countdown"
      aria-labelledby="countdown-heading"
      className="bg-surface-muted py-16 sm:py-20 border-b border-border-subtle"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Header Label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-border bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-subtle">
            <Clock className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
            <span>BATAS AKHIR PENDAFTARAN</span>
          </div>

          <h2
            id="countdown-heading"
            className="mt-4 text-2xl font-bold tracking-tight text-text-main sm:text-3xl lg:text-4xl"
          >
            {mounted && timeLeft.isExpired
              ? "Registrasi Telah Ditutup"
              : "Registrasi Ditutup Dalam"}
          </h2>

          <p className="mt-2 text-sm sm:text-base font-medium text-primary">
            {eventConfig.registrationDeadlineFormatted}
          </p>

          {/* Screen reader live region */}
          <div className="sr-only" aria-live="polite">
            {screenReaderTimeText}
          </div>

          {/* Countdown Cards */}
          <div className="mt-8 grid grid-cols-2 gap-3.5 sm:grid-cols-4 sm:gap-5">
            {cards.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center rounded-2xl border border-primary-border bg-white p-5 sm:p-6 shadow-card"
              >
                <span className="font-mono text-3xl font-extrabold tracking-tight text-primary sm:text-5xl tabular-nums">
                  {item.value}
                </span>
                <span className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-text-subtle">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Explanatory Message or Closed State */}
          <div className="mt-8">
            {mounted && timeLeft.isExpired ? (
              <div className="rounded-xl border border-primary-border bg-white p-5 text-center shadow-subtle max-w-xl mx-auto">
                <div className="flex items-center justify-center gap-2 text-primary font-semibold text-sm">
                  <AlertCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  <span>Periode registrasi telah berakhir.</span>
                </div>
                <p className="mt-1.5 text-xs sm:text-sm text-text-muted">
                  Bagi peserta yang telah mendaftar atau memiliki pertanyaan terkait pelaksanaan, silakan menghubungi narahubung panitia.
                </p>
                <a
                  href="#kontak"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-subtle hover:bg-primary-hover focus-visible:outline-primary"
                >
                  <MessageSquare className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  <span>Hubungi Panitia</span>
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-text-muted max-w-xl mx-auto">
                  Pastikan registrasi dilakukan sebelum batas waktu yang telah ditentukan.
                </p>

                {hasRegistrationUrl ? (
                  <a
                    href={eventConfig.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-subtle hover:bg-primary-hover focus-visible:outline-primary"
                  >
                    <span>Daftar Sekarang</span>
                    <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 rounded-xl bg-surface-subtle px-4 py-2 text-xs font-medium text-text-muted border border-primary-border">
                    <span>Tautan registrasi resmi akan segera diumumkan oleh panitia.</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
