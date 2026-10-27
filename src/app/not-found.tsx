import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <div className="mb-6">
        <Logo size="lg" />
      </div>

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-subtle text-primary border border-primary-border mb-4">
        <AlertCircle className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
      </div>

      <span className="font-mono text-sm font-bold text-primary">404 ERROR</span>
      <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-text-main">
        Halaman Tidak Ditemukan
      </h1>
      <p className="mt-3 max-w-md text-sm text-text-muted">
        Halaman yang Anda tuju tidak tersedia atau telah dipindahkan. Silakan kembali ke beranda resmi Training Guru Nasional 2026.
      </p>

      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-subtle hover:bg-primary-hover focus-visible:outline-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>
    </div>
  );
}
