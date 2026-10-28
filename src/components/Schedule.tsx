import { Calendar, Clock, ArrowRight } from "lucide-react";
import { eventConfig } from "@/config/event";

export default function Schedule() {
  const timelineMilestones = [
    {
      step: "01",
      label: "Batas Akhir Pendaftaran",
      title: "Penutupan Registrasi Peserta",
      date: eventConfig.registrationDeadlineFormatted,
      description:
        "Batas akhir registrasi dan konfirmasi pendaftaran peserta Training Guru Nasional 2026. Sistem pendaftaran akan otomatis ditutup setelah batas waktu ini.",
      icon: Clock,
      highlightColor: "border-primary",
    },
    {
      step: "02",
      label: "Pelaksanaan Pelatihan",
      title: "Pelatihan Tatap Muka (3 Hari)",
      date: eventConfig.dateRange,
      description:
        `Pelatihan intensif diselenggarakan langsung secara tatap muka (offline) selama 3 hari di ${eventConfig.locationName}. Peserta mendalami materi konsentrasi dan mengerjakan proyek akhir terarah.`,
      icon: Calendar,
      highlightColor: "border-primary",
    },
  ];

  return (
    <section
      id="jadwal"
      aria-labelledby="schedule-heading"
      className="bg-white py-16 sm:py-24 border-b border-border-subtle"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full border border-primary-border bg-surface-subtle px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span>TIMELINE KEGIATAN</span>
          </div>

          <h2
            id="schedule-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-text-main sm:text-3xl lg:text-4xl"
          >
            Jadwal &amp; Alur Pelaksanaan
          </h2>

          <p className="mt-3 text-base text-text-muted">
            Rangkaian jadwal penting Training Guru Nasional 2026 mulai dari penutupan pendaftaran hingga hari pelatihan.
          </p>
        </div>

        {/* 2-Step Milestone Timeline (Unified, 23-25 Des not split) */}
        <div className="mt-12 mx-auto max-w-3xl">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-primary-border space-y-8 sm:space-y-10">
            {timelineMilestones.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.step} className="relative group">
                  {/* Step indicator node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-2 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white border-2 border-primary text-primary shadow-subtle group-hover:scale-105 transition-transform">
                    <span className="text-xs font-bold">{item.step}</span>
                  </div>

                  {/* Milestone Card */}
                  <div className="rounded-2xl border border-border-subtle bg-surface-muted p-6 sm:p-7 transition-all hover:border-primary-border hover:bg-white shadow-card">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-border-subtle pb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider bg-surface-subtle px-3 py-1 rounded-md border border-primary-border">
                          <IconComponent className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                          <span>{item.label}</span>
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-text-subtle">
                        Tahap {item.step} dari 02
                      </span>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-lg sm:text-xl font-bold text-text-main">
                        {item.title}
                      </h3>
                      <div className="mt-1.5 flex items-center gap-2 text-sm sm:text-base font-semibold text-primary">
                        <IconComponent className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                        <span>{item.date}</span>
                      </div>
                      <p className="mt-3 text-sm text-text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Official Clarification Box */}
          <div className="mt-10 rounded-2xl border border-dashed border-border-subtle bg-surface-muted/70 p-5 sm:p-6 text-center">
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-xl mx-auto">
              Rundown lengkap sesi per jam, pembagian laboratorium/kelas, serta panduan teknis kedatangan akan diumumkan langsung oleh panitia kepada seluruh peserta terdaftar sebelum hari H.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
