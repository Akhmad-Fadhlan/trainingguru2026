"use client";

import { useState } from "react";
import { eventConfig } from "@/config/event";
import { HelpCircle, ChevronDown, ImageIcon } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  /** Tampilkan tautan ke poster resmi untuk informasi yang belum tersedia */
  posterHint?: boolean;
}

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const { contacts, payment } = eventConfig;
  const contactText = contacts
    .map((c) => `${c.name} (${c.phoneFormatted})`)
    .join(" atau ");

  // Informasi diambil dari poster resmi. Bila ada informasi yang belum tercantum,
  // jawaban mengarahkan pengunjung ke poster resmi (posterHint).
  const faqs: FaqItem[] = [
    {
      id: "faq-1",
      question: "Kapan Training Guru Nasional 2026 diselenggarakan?",
      answer: `Pelaksanaan pelatihan berlangsung pada ${eventConfig.dateRange}. Pendaftaran dibuka mulai 28 Oktober 2026.`,
    },
    {
      id: "faq-2",
      question: "Di mana lokasi pelaksanaan pelatihan berlangsung?",
      answer: `Pelatihan bertempat di ${eventConfig.locationName}, dengan alamat ${eventConfig.locationAddress}. Peta lokasi tersedia di bagian Lokasi pada halaman ini.`,
    },
    {
      id: "faq-3",
      question: "Kapan batas akhir registrasi peserta?",
      answer: `Batas akhir pendaftaran adalah ${eventConfig.registrationDeadlineFormatted}. Mohon pastikan pendaftaran telah diselesaikan sebelum waktu tersebut.`,
    },
    {
      id: "faq-4",
      question: "Berapa biaya pendaftaran kegiatan pelatihan ini?",
      answer: `Biaya pendaftaran sebesar ${eventConfig.registrationFee} per peserta.`,
    },
    {
      id: "faq-5",
      question: "Bagaimana cara mendaftar dan melakukan pembayaran?",
      answer: `Daftar melalui ${eventConfig.registrationUrl}. Pembayaran ditransfer ke ${payment.bankName}, nomor rekening ${payment.accountNumber} a.n. ${payment.accountName}. Setelah mendaftar, lakukan konfirmasi pendaftaran ke narahubung panitia.`,
    },
    {
      id: "faq-6",
      question: "Bidang pelatihan apa saja yang tersedia?",
      answer:
        "Tersedia 5 bidang pelatihan: Full Stack & AI, Game dan Multimedia, IoT dan Robotik, Design UI/UX, serta Networking TKJ. Rincian materi tiap bidang dapat dilihat di bagian Program, atau dengan memindai QR Code \"Detail Materi\" pada poster resmi.",
    },
    {
      id: "faq-7",
      question: "Apakah peserta akan mendapatkan sertifikat resmi?",
      answer: "Ya. Sertifikat termasuk dalam fasilitas pelatihan (Pelatihan Include).",
    },
    {
      id: "faq-8",
      question: "Apa saja fasilitas yang disediakan selama kegiatan?",
      answer:
        "Fasilitas yang termasuk dalam biaya pendaftaran: modul pelatihan, sertifikat, dan tempat mukim selama pelatihan. Konsumsi selama pelatihan tidak termasuk dalam biaya (Exclude).",
    },
    {
      id: "faq-9",
      question: "Apa saja yang perlu dibawa peserta?",
      answer:
        "Peserta membawa laptop pribadi (rekomendasi RAM minimal 8GB), disarankan membawa stopkontak, dan membawa obat-obatan pribadi jika dibutuhkan.",
    },
    {
      id: "faq-10",
      question: "Berapa kuota peserta yang disediakan?",
      answer:
        "Jumlah kuota tidak tercantum pada poster. Panitia mengimbau calon peserta segera mendaftar sebelum tempat habis. Untuk kepastian kuota, silakan lihat poster resmi atau hubungi narahubung panitia.",
      posterHint: true,
    },
    {
      id: "faq-11",
      question: "Bagaimana cara menghubungi panitia pelaksana?",
      answer: `Konfirmasi pendaftaran dan pertanyaan dapat disampaikan melalui WhatsApp atau telepon ke narahubung resmi: ${contactText}.`,
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
            Jawaban berdasarkan poster resmi Training Guru Nasional 2026.
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
                    {faq.posterHint && (
                      <a
                        href="#poster"
                        className="mt-3 inline-flex items-center gap-1.5 font-semibold text-primary hover:underline focus-visible:outline-primary"
                      >
                        <ImageIcon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                        <span>Lihat poster resmi</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Fallback: informasi yang belum ada → poster resmi */}
        <div className="mt-8 mx-auto max-w-3xl rounded-2xl border border-dashed border-primary-border bg-white p-5 sm:p-6 text-center">
          <p className="text-sm font-semibold text-text-main">
            Informasi yang Anda cari belum ada?
          </p>
          <p className="mt-1 text-xs sm:text-sm text-text-muted">
            Detail lengkap tersedia pada poster resmi, atau tanyakan langsung kepada panitia.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <a
              href="#poster"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white shadow-subtle hover:bg-primary-hover focus-visible:outline-primary transition-colors"
            >
              <ImageIcon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              <span>Lihat Poster Resmi</span>
            </a>
            <a
              href="#kontak"
              className="inline-flex h-10 items-center justify-center rounded-xl border border-primary-border bg-white px-5 text-sm font-semibold text-primary hover:bg-surface-subtle focus-visible:outline-primary transition-colors"
            >
              Hubungi Panitia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
