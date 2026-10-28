import { eventConfig } from "@/config/event";
import { MapPin, Navigation, Compass, Building } from "lucide-react";

export default function Location() {
  return (
    <section
      id="lokasi"
      aria-labelledby="location-heading"
      className="bg-surface-muted py-16 sm:py-24 border-b border-border-subtle"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-border bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-subtle">
            <Navigation className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
            <span>VENUE KEGIATAN</span>
          </div>

          <h2
            id="location-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-text-main sm:text-3xl lg:text-4xl"
          >
            Lokasi Pelaksanaan
          </h2>

          <p className="mt-3 text-base text-text-muted">
            Kegiatan diselenggarakan secara tatap muka dengan fasilitas ruang kelas dan laboratorium teknologi.
          </p>
        </div>

        {/* 2-Column Desktop Layout */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          {/* Column 1: Main Venue & Maps Action */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-border-subtle bg-white p-6 sm:p-8 shadow-card">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-subtle border border-primary-border text-primary">
                  <Building className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Penyelenggara & Lokasi
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-main">
                    {eventConfig.locationName}
                  </h3>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-border-subtle bg-surface-muted p-4">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <span className="text-xs font-semibold text-text-subtle uppercase tracking-wider">
                    Alamat Lengkap
                  </span>
                  <p className="mt-1 text-sm sm:text-base font-medium text-text-main leading-relaxed">
                    {eventConfig.locationAddress}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm text-text-muted leading-relaxed">
                IDN Boarding School berlokasi di kawasan Jonggol, Jawa Barat, menyediakan lingkungan belajar yang tenang, nyaman, dan kondusif untuk kegiatan workshop teknologi intensif.
              </p>
            </div>

          </div>

          {/* Column 2: Directions and Arrival Guide Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-border-subtle bg-white p-6 sm:p-8 shadow-card">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-subtle text-primary border border-primary-border">
                  <Compass className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-text-main">
                  Panduan Menuju Lokasi
                </h3>
              </div>

              <div className="mt-5 space-y-4 text-sm text-text-muted">
                <div className="rounded-xl border border-border-subtle bg-surface-muted p-4">
                  <span className="font-semibold text-text-main block">
                    Kendaraan Pribadi / Roda Empat & Roda Dua
                  </span>
                  <p className="mt-1 text-xs sm:text-sm text-text-muted leading-relaxed">
                    Dapat diakses melalui jalan raya Jonggol. Area parkir peserta tersedia di dalam kawasan sekolah.
                  </p>
                </div>

                <div className="rounded-xl border border-border-subtle bg-surface-muted p-4">
                  <span className="font-semibold text-text-main block">
                    Transportasi Umum
                  </span>
                  <p className="mt-1 text-xs sm:text-sm text-text-muted leading-relaxed">
                    Dapat menggunakan transportasi jurusan Jonggol / Cileungsi, dilanjutkan ojek atau kendaraan lokal menuju Dayeuh.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border-subtle">
              <p className="text-xs text-text-subtle">
                Bila memerlukan panduan rute spesifik dari kota asal Anda, silakan hubungi narahubung panitia.
              </p>
            </div>
          </div>
        </div>

        {/* Peta Google Maps langsung tampil di halaman */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-border-subtle bg-white shadow-card">
          <iframe
            title={`Peta lokasi ${eventConfig.locationName}`}
            src={eventConfig.googleMapsEmbedUrl}
            className="block h-[320px] w-full sm:h-[420px] lg:h-[480px] border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
