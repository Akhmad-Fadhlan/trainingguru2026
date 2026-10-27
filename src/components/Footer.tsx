import Logo from "./Logo";
import { eventConfig } from "@/config/event";
import { Calendar, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface-subtle/60 py-12 text-text-muted">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pb-10 border-b border-border-subtle">
          {/* Brand & Event Identity */}
          <div className="max-w-md">
            <Logo size="lg" />
            <h3 className="mt-4 text-base font-bold text-text-main">
              {eventConfig.name}
            </h3>
            <p className="mt-1 text-sm text-text-muted">
              {eventConfig.theme}
            </p>
            <p className="mt-2 text-xs italic text-text-subtle">
              &ldquo;{eventConfig.tagline}&rdquo;
            </p>
          </div>

          {/* Key Facts Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div>
              <div className="flex items-center gap-1.5 font-semibold text-text-main">
                <Calendar className="h-4 w-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <span>Waktu & Lokasi</span>
              </div>
              <p className="mt-2 font-medium text-text-main">{eventConfig.dateRange}</p>
              <p className="mt-1 text-xs text-text-muted">{eventConfig.locationName}</p>
              <div className="mt-1 flex items-start gap-1 text-[11px] text-text-subtle">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" strokeWidth={1.75} aria-hidden="true" />
                <span>{eventConfig.locationAddress}</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 font-semibold text-text-main">
                <MessageCircle className="h-4 w-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <span>Layanan Narahubung</span>
              </div>
              <div className="mt-2 space-y-1.5 text-xs">
                {eventConfig.contacts.map((c) => (
                  <div key={c.name} className="flex items-center justify-between gap-3">
                    <span className="font-medium text-text-main">{c.name}:</span>
                    <a
                      href={c.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-primary hover:underline"
                    >
                      {c.phoneFormatted}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-subtle text-center sm:text-left">
          <p>
            &copy; 2026 {eventConfig.name}. Seluruh hak cipta dilindungi undang-undang.
          </p>
          <p>
            Diselenggarakan di {eventConfig.locationName}.
          </p>
        </div>
      </div>
    </footer>
  );
}
