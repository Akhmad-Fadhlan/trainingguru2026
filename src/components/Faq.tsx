"use client";

import { useState } from "react";
import { eventConfig } from "@/config/event";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqs: FaqItem[] = [
    {
      id: "faq-1",
      question: "Kapan Training Guru Nasional 2026 diselenggarakan?",
      answer: `Kegiatan pelatihan akan diselenggarakan selama 3 hari berturut-turut pada tanggal ${eventConfig.dateRange}.`,
    },
    {
      id: "faq-2",
      question: "Di mana lokasi pelaksanaan pelatihan berlangsung?",
      answer: `Pelatihan bertempat di kampus ${eventConfig.locationName}, dengan alamat lengkap ${eventConfig.locationAddress}.`,
    },
    {
      id: "faq-3",
      question: "Kapan batas akhir registrasi peserta?",
      answer: `Batas akhir pendaftaran adalah tanggal ${eventConfig.registrationDeadlineFormatted}. Mohon pastikan pendaftaran telah diselesaikan sebelum waktu tersebut.`,
    },
    {
      id: "faq-4",
      question: "Bagaimana cara menghubungi panitia pelaksana?",
      answer: `Anda dapat menghubungi narahubung resmi panitia via WhatsApp atau telepon: ${eventConfig.contacts[0].name} (${eventConfig.contacts[0].phoneFormatted}) atau ${eventConfig.contacts[1].name} (${eventConfig.contacts[1].phoneFormatted}).`,
    },
    {
      id: "faq-5",
      question: "Berapa biaya pendaftaran kegiatan pelatihan ini?",
      answer: "Informasi akan diumumkan oleh panitia. Silakan hubungi contact person.",
    },
    {
      id: "faq-6",
      question: "Apakah peserta akan mendapatkan sertifikasi resmi?",
      answer: "Informasi akan diumumkan oleh panitia. Silakan hubungi contact person.",
    },
    {
      id: "faq-7",
      question: "Berapa kuota peserta yang disediakan?",
      answer: "Informasi akan diumumkan oleh panitia. Silakan hubungi contact person.",
    },
    {
      id: "faq-8",
      question: "Apa saja fasilitas yang disediakan selama kegiatan?",
      answer: "Informasi akan diumumkan oleh panitia. Silakan hubungi contact person.",
    },
  ];

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-surface-muted py-16 sm:py-24 border-b border-border-subtle"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-border bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-subtle">
            <HelpCircle className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
            <span>TANYA JAWAB</span>
          </div>

          <h2
            id="faq-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-text-main sm:text-3xl lg:text-4xl"
          >
            Pertanyaan yang Sering Diajukan
          </h2>

          <p className="mt-3 text-base text-text-muted">
            Jawaban terverifikasi seputar pelaksanaan Training Guru Nasional 2026.
          </p>
        </div>

        {/* Keyboard Accessible Accordion */}
        <div className="mt-12 mx-auto max-w-3xl space-y-3.5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            const contentId = `${faq.id}-content`;
            const buttonId = `${faq.id}-button`;

            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-border-subtle bg-white shadow-card overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleItem(faq.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors hover:bg-surface-muted focus-visible:outline-primary"
                >
                  <span className="text-sm sm:text-base font-bold text-text-main">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-surface-subtle text-primary border border-primary-border transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-primary text-white" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="border-t border-border-subtle bg-surface-muted/50 p-5 sm:p-6 pt-4 text-xs sm:text-sm text-text-muted leading-relaxed"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
