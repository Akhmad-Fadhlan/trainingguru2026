"use client";

import { useState } from "react";
import { programsData, ProgramItem } from "@/config/programs";
import ProgramModal from "./ProgramModal";
import {
  Bot,
  Network,
  PenTool,
  Gamepad2,
  Code2,
  ArrowRight,
  Clock,
  CheckCircle2,
} from "lucide-react";

const ICON_MAP: Record<string, typeof Bot> = {
  Bot,
  Network,
  PenTool,
  Gamepad2,
  Code2,
};

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  return (
    <section
      id="program"
      aria-labelledby="programs-heading"
      className="bg-surface-muted py-16 sm:py-24 border-b border-border-subtle"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full border border-primary-border bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-subtle">
            <span>PILIHAN KONSENTRASI</span>
          </div>

          <h2
            id="programs-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-text-main sm:text-3xl lg:text-4xl"
          >
            Program Pelatihan
          </h2>

          <p className="mt-3 text-base text-text-muted">
            Pilih program, lalu buka detail untuk melihat kisi-kisi modul materi dan proyek akhir aplikatif.
          </p>
        </div>

        {/* 5 Programs Grid Layout */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programsData.map((item) => {
            const Icon = ICON_MAP[item.iconName] || Bot;
            const isPending = Boolean(item.pending);
            const hasSyllabus = Boolean(
              (item.sections && item.sections.length > 0) ||
                (item.topics && item.topics.length > 0)
            );

            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-border-subtle bg-white p-6 sm:p-7 shadow-card transition-all duration-200 hover:border-primary-border hover:shadow-dropdown"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-subtle border border-primary-border text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                    </div>

                    <span
                      className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                        isPending
                          ? "bg-amber-50 text-amber-700 border border-amber-200"
                          : hasSyllabus
                          ? "bg-surface-subtle text-primary border border-primary-border"
                          : "bg-surface-muted text-text-subtle border border-border-subtle"
                      }`}
                    >
                      {isPending ? (
                        <>
                          <Clock className="h-3 w-3" strokeWidth={1.75} />
                          <span>Materi Menyusul</span>
                        </>
                      ) : hasSyllabus ? (
                        <>
                          <CheckCircle2 className="h-3 w-3" strokeWidth={1.75} />
                          <span>Silabus Tersedia</span>
                        </>
                      ) : (
                        <>
                          <Clock className="h-3 w-3" strokeWidth={1.75} />
                          <span>Segera Hadir</span>
                        </>
                      )}
                    </span>
                  </div>

                  <div className="mt-5">
                    <span className="text-xs font-mono font-bold tracking-widest text-primary">
                      PROGRAM {item.number}
                    </span>
                    <h3 className="mt-1 text-lg sm:text-xl font-bold text-text-main group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    {/* Sub-modules count preview */}
                    {item.sections && item.sections.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.sections.map((sec) => (
                          <span
                            key={sec.code}
                            className="inline-flex items-center text-[11px] bg-surface-muted px-2 py-0.5 rounded-md text-text-subtle font-medium border border-border-subtle/60"
                          >
                            Modul {sec.code}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle/80 flex items-center justify-between">
                  <span className="text-xs text-text-subtle">
                    {isPending ? "Menunggu konfirmasi" : "Dilengkapi Proyek Akhir"}
                  </span>

                  <button
                    type="button"
                    onClick={() => setSelectedProgram(item)}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-primary-border bg-surface-subtle px-3.5 py-1.5 text-xs font-semibold text-primary transition-all duration-150 hover:bg-primary hover:text-white focus-visible:outline-primary"
                  >
                    <span>Lihat Materi</span>
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Program Detail Modal */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />
    </section>
  );
}
