"use client";

import { useEffect, useRef } from "react";
import { ProgramItem, FinalProjectDetail } from "@/config/programs";
import {
  X,
  Bot,
  Network,
  PenTool,
  Gamepad2,
  Code2,
  Clock,
  CheckCircle2,
  MessageCircle,
  Layers,
  Target,
  FileCheck2,
  Check,
} from "lucide-react";

interface ProgramModalProps {
  program: ProgramItem | null;
  onClose: () => void;
}

const ICON_MAP: Record<string, typeof Bot> = {
  Bot,
  Network,
  PenTool,
  Gamepad2,
  Code2,
};

export default function ProgramModal({ program, onClose }: ProgramModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap and escape key handler
  useEffect(() => {
    if (!program) return;

    const previousActiveElement = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [program, onClose]);

  if (!program) return null;

  const Icon = ICON_MAP[program.iconName] || Layers;
  const isPending = Boolean(program.pending);
  const hasSections = Boolean(program.sections && program.sections.length > 0);
  const project = typeof program.finalProject === "object" ? (program.finalProject as FinalProjectDetail) : null;
  const projectString = typeof program.finalProject === "string" ? program.finalProject : "";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-2xl border border-border-subtle bg-white p-6 sm:p-8 shadow-dropdown max-h-[90vh] overflow-y-auto text-left"
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-border-subtle">
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-subtle border border-primary-border text-primary">
              <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-primary tracking-wider">
                  PROGRAM {program.number}
                </span>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                    isPending
                      ? "bg-amber-50 text-amber-700 border border-amber-200"
                      : "bg-surface-subtle text-primary border border-primary-border"
                  }`}
                >
                  {isPending ? (
                    <>
                      <Clock className="h-3 w-3" strokeWidth={1.75} />
                      <span>Materi Menyusul</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="h-3 w-3" strokeWidth={1.75} />
                      <span>Silabus Resmi Tersedia</span>
                    </>
                  )}
                </span>
              </div>
              <h3
                id="modal-title"
                className="mt-1 text-xl sm:text-2xl font-bold tracking-tight text-text-main"
              >
                {program.title}
              </h3>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Tutup jendela rincian materi"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-text-muted hover:bg-surface-muted hover:text-text-main focus-visible:outline-primary transition-colors"
          >
            <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-5 space-y-6">
          {hasSections ? (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-surface-subtle text-primary text-xs font-bold">
                  §
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-main">
                  Kisi-Kisi & Modul Pembelajaran
                </h4>
              </div>

              <div className="space-y-4">
                {program.sections?.map((sec) => (
                  <div
                    key={sec.code}
                    className="rounded-xl border border-border-subtle bg-surface-muted p-4 sm:p-5"
                  >
                    <div className="flex items-center gap-2.5 pb-2.5 border-b border-border-subtle/80">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary text-white text-xs font-bold">
                        {sec.code}
                      </span>
                      <h5 className="text-sm font-bold text-text-main">
                        {sec.title}
                      </h5>
                    </div>

                    <ul className="mt-3 space-y-2">
                      {sec.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-text-muted leading-relaxed"
                        >
                          <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border-subtle bg-surface-muted/60 p-6 text-center">
              <p className="text-sm text-text-muted leading-relaxed">
                {isPending
                  ? "Materi program ini masih menunggu konfirmasi panitia."
                  : "Kisi-kisi materi dan proyek akhir akan ditambahkan setelah dikonfirmasi panitia."}
              </p>
            </div>
          )}

          {/* Final Project Section */}
          {(project || projectString) && (
            <div className="pt-2 border-t border-border-subtle">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-4 w-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-main">
                  Proyek Akhir Pelatihan
                </h4>
              </div>

              {project ? (
                <div className="rounded-2xl border border-primary-border bg-surface-subtle/70 p-5 sm:p-6 space-y-4 text-xs sm:text-sm">
                  {project.title && (
                    <div className="font-bold text-sm sm:text-base text-text-main">
                      {project.title}
                    </div>
                  )}

                  {project.description && (
                    <p className="text-text-muted leading-relaxed">
                      {project.description}
                    </p>
                  )}

                  {project.scenario && (
                    <div className="rounded-xl border border-primary-border/60 bg-white p-3.5">
                      <span className="font-semibold text-text-main block mb-1">
                        Skenario Lapangan:
                      </span>
                      <p className="text-text-muted leading-relaxed">
                        {project.scenario}
                      </p>
                    </div>
                  )}

                  {project.projects && project.projects.length > 0 && (
                    <div className="space-y-3 pt-1">
                      {project.projects.map((p, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl border border-border-subtle bg-white p-4"
                        >
                          <span className="font-bold text-text-main block">
                            {p.title}
                          </span>
                          {p.description && (
                            <p className="text-xs text-text-muted mt-1">
                              {p.description}
                            </p>
                          )}
                          {p.tasks && p.tasks.length > 0 && (
                            <ul className="mt-2.5 space-y-1.5">
                              {p.tasks.map((task, tIdx) => (
                                <li
                                  key={tIdx}
                                  className="flex items-start gap-2 text-xs text-text-muted"
                                >
                                  <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" strokeWidth={2} />
                                  <span>{task}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {project.tasks && project.tasks.length > 0 && (
                    <div className="rounded-xl border border-border-subtle bg-white p-4">
                      <span className="font-semibold text-text-main block mb-2">
                        Tugas Utama Peserta:
                      </span>
                      <ul className="space-y-1.5">
                        {project.tasks.map((task, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-text-muted"
                          >
                            <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" strokeWidth={2} />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.output && (
                    <div className="rounded-xl border border-primary-border/80 bg-white p-3.5 flex items-start gap-2.5">
                      <FileCheck2 className="h-5 w-5 text-primary shrink-0 mt-0.5" strokeWidth={1.75} />
                      <div>
                        <span className="font-semibold text-text-main block">
                          Output Hasil Akhir:
                        </span>
                        <p className="mt-0.5 text-text-muted text-xs leading-relaxed">
                          {project.output}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="rounded-xl border border-primary-border bg-surface-subtle p-4">
                  <p className="text-xs sm:text-sm text-text-main font-medium">
                    {projectString}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href="#kontak"
            onClick={onClose}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-subtle hover:bg-primary-hover focus-visible:outline-primary transition-colors"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            <span>Tanya Panitia</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto rounded-xl border border-border-subtle bg-white px-5 py-2.5 text-sm font-medium text-text-main hover:bg-surface-muted focus-visible:outline-primary transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
