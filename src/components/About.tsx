import { eventConfig } from "@/config/event";
import { Calendar, MapPin, Cpu, CheckCircle2 } from "lucide-react";

export default function About() {
  const confirmedHighlights = [
    {
      title: "Waktu Pelaksanaan",
      value: eventConfig.dateRange,
      desc: "Tiga hari pembelajaran intensif dan terstruktur untuk penguatan kompetensi digital guru.",
      icon: Calendar,
    },
    {
      title: "Lokasi Pelatihan",
      value: eventConfig.locationName,
      desc: eventConfig.locationAddress,
      icon: MapPin,
    },
    {
      title: "Fokus Kurikulum",
      value: "Teknologi, Inovasi & AI",
      desc: "Membekali pendidik dengan keterampilan praktikal mutakhir yang dapat diterapkan langsung di kelas.",
      icon: Cpu,
    },
  ];

  return (
    <section
      id="tentang"
      aria-labelledby="about-heading"
      className="bg-white py-16 sm:py-24 border-b border-border-subtle"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Mengenal Acara
            </span>
            <h2
              id="about-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-text-main sm:text-3xl lg:text-4xl"
            >
              Tentang {eventConfig.name}
            </h2>

            <div className="mt-5 space-y-4 text-base text-text-muted leading-relaxed">
              <p>
                <strong className="text-text-main font-semibold">{eventConfig.name}</strong> diselenggarakan sebagai wadah peningkatan kompetensi bagi para pendidik di seluruh Indonesia dalam menguasai perkembangan teknologi mutakhir.
              </p>
              <p>
                Mengusung tema <span className="font-semibold text-text-main">&ldquo;{eventConfig.theme}&rdquo;</span>, pelatihan ini difokuskan pada penguasaan keterampilan teknis aplikatif yang relevan dengan kebutuhan pembelajaran abad ke-21.
              </p>
              <p>
                Dengan semangat <span className="font-semibold text-text-main">&ldquo;{eventConfig.tagline}&rdquo;</span>, para guru akan diajak menjelajahi penerapan praktis mulai dari komputasi, kecerdasan buatan, hingga otomatisasi perangkat pintar.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-primary-border bg-surface-subtle p-4 w-full">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" strokeWidth={1.75} aria-hidden="true" />
                <p className="text-xs sm:text-sm text-text-main font-medium">
                  Informasi teknis pelaksanaan, materi kurikulum, dan jadwal diperbarui secara transparan melalui portal resmi ini.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Verified Facts Cards */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-text-subtle mb-1">
              Informasi Terkonfirmasi
            </div>

            {confirmedHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border-subtle bg-surface-muted p-5 sm:p-6 transition-all hover:border-primary-border hover:bg-white shadow-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-subtle border border-primary-border text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {item.title}
                      </span>
                      <h3 className="mt-1 text-base sm:text-lg font-bold text-text-main">
                        {item.value}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
