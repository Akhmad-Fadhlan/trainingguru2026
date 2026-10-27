# Training Guru Nasional 2026 - Official Website

Website resmi acara **Training Guru Nasional 2026** di SMP–SMK IDN Boarding School.
Dibuat dengan Next.js (App Router), TypeScript, Tailwind CSS, dan Lucide Icons, dirancang khusus dengan tema terang, ramah, profesional, dan siap di-deploy langsung ke Vercel tanpa perlu setup backend maupun database.

---

## 🚀 Fitur Utama

- **Light & Accessible Design**: Antarmuka terang dengan warna dominan putih dan aksen biru profesional, memenuhi standar kontras WCAG AA.
- **Single Source of Truth**: Semua informasi acara (nama, tema, tanggal, lokasi, narahubung, poster, logo) dikelola terpusat di `src/config/event.ts`.
- **Daftar Program & Rincian Materi**: 7 bidang pelatihan terstruktur di `src/config/programs.ts` dengan modal detail materi & proyek akhir interaktif yang ramah keyboard.
- **Presisi Countdown Registrasi**: Penghitungan mundur waktu nyata dengan timestamp ISO eksplisit berbasis WIB (`Asia/Jakarta`) yang tahan terhadap perbedaan zona waktu perangkat pengguna dan bebas hydration mismatch.
- **Slot Poster Resmi & Lightbox**: Tempat khusus untuk menampilkan poster rasio 4:5 dengan modal pratinjau resolusi tinggi (lightbox) dan tombol unduh langsung jika poster telah diunggah.
- **Aksesibilitas Penuh (A11y)**: Dilengkapi *Skip to content*, fokus indikator jelas, navigasi keyboard lengkap (Esc to close, Tab trapping), dan penanda semantik HTML5.

---

## 🛠️ Panduan Pengelolaan & Kustomisasi Panitia

Seluruh pengaturan data acara tersimpan di dalam folder `src/config/`. Panitia tidak perlu mengubah komponen visual untuk memperbarui data.

### 1. Cara Mengganti Logo Penyelenggara

1. Letakkan file logo sekolah/penyelenggara ke dalam folder:
   ```
   public/images/logo.png
   ```
   *(Contoh file logo resmi IDN Boarding School telah disiapkan di `public/images/idn-logo.png`)*.
2. Buka file `src/config/event.ts`.
3. Ubah properti `logoSrc`:
   ```typescript
   export const eventConfig = {
     // ...
     logoSrc: "/images/idn-logo.png", // Ganti dengan path logo Anda
     // ...
   };
   ```
4. Jika `logoSrc` dikosongkan (`""`), website secara otomatis menampilkan placeholder badge resmi tanpa merusak layout.

### 2. Cara Mengganti Poster Acara

1. Letakkan gambar poster vertikal (rasio ideal 4:5) ke dalam folder:
   ```
   public/images/poster-resmi.png
   ```
2. Buka file `src/config/event.ts`.
3. Isi properti `posterImage` dan `posterAlt`:
   ```typescript
   export const eventConfig = {
     // ...
     posterImage: "/images/poster-resmi.png",
     posterAlt: "Poster Resmi Training Guru Nasional 2026",
     // ...
   };
   ```
4. Jika `posterImage` kosong, website otomatis menampilkan kotak pengumuman placeholder rapi bertuliskan *"Poster akan segera ditambahkan oleh panitia"*.

### 3. Cara Mengganti Tanggal Acara & Batas Registrasi

Buka file `src/config/event.ts` dan perbarui properti berikut:

```typescript
export const eventConfig = {
  // Tanggal pelaksanaan acara
  dateRange: "23–25 Desember 2026",
  startDate: "2026-12-23",
  endDate: "2026-12-25",

  // Batas akhir pendaftaran (Countdown otomatis menghitung dari timestamp ini)
  registrationDeadline: "2026-12-02T23:59:59+07:00",
  registrationDeadlineFormatted: "2 Desember 2026 pukul 23.59.59 WIB",
  // ...
};
```

### 4. Cara Mengganti Narahubung (Kontak Panitia)

Buka `src/config/event.ts` pada bagian `contacts`:

```typescript
contacts: [
  {
    name: "Mr. Debs",
    phone: "08990860870",
    phoneFormatted: "0899-0860-870",
    waLink: "https://wa.me/628990860870",
    telLink: "tel:08990860870",
  },
  {
    name: "Mr. Rayhan",
    phone: "082110970434",
    phoneFormatted: "0821-1097-0434",
    waLink: "https://wa.me/6282110970434",
    telLink: "tel:082110970434",
  },
],
```

### 5. Cara Mengisi Link Pendaftaran (Saat Sudah Dibuka)

Buka `src/config/event.ts` dan masukkan link form pendaftaran Anda (misalnya Google Forms / Edu Portal):

```typescript
registrationUrl: "https://forms.gle/contohPendaftaranGuru2026",
```
Saat diisi, tombol **"Daftar Sekarang"** akan otomatis muncul di bagian Countdown dan CTA penutup.

### 6. Cara Memperbarui Program Pelatihan & Materi

Buka file `src/config/programs.ts`. Anda dapat menambahkan, mengubah, atau memperbarui kisi-kisi dan status materi:

```typescript
{
  id: "desain-ui-ux",
  number: "03",
  title: "Desain UI UX",
  iconName: "PenTool",
  topics: [
    "Dasar prinsip desain antarmuka modern",
    "Wireframing dan prototyping dengan Figma",
    "Perancangan UI media evaluasi pembelajaran",
  ],
  finalProject: "Prototipe interaktif antarmuka media pembelajaran sekolah.",
  pending: false, // Ubah dari true ke false setelah materi siap
}
```

---

## 🚢 Panduan Deploy ke Vercel

Website ini sepenuhnya statis dan tidak memerlukan basis data maupun variabel lingkungan rahasia.

1. **Unggah (Push) ke GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: Website Resmi Training Guru Nasional 2026"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```

2. **Buka Dashboard Vercel**:
   - Masuk ke [vercel.com](https://vercel.com) menggunakan akun GitHub Anda.
   - Klik tombol **"Add New..."** lalu pilih **"Project"**.
   - Pilih repositori GitHub yang baru saja Anda buat, lalu klik **"Import"**.

3. **Konfigurasi Project**:
   - **Framework Preset**: Biarkan terdeteksi otomatis sebagai **Next.js**.
   - **Root Directory**: `./` (default).
   - **Build & Output Settings**: Biarkan default (`npm run build`).
   - **Environment Variables**: Tidak diperlukan.

4. **Deploy**:
   - Klik tombol **"Deploy"**.
   - Vercel akan otomatis meng-compile aplikasi dalam 1–2 menit dan memberikan link live domain gratis (misal: `https://trainingguru2026.vercel.app`).

---

## 💻 Pengujian Lokal

```bash
# Menjalankan server pengembangan lokal
npm run dev

# Memeriksa linting kode
npm run lint

# Menjalankan build produksi untuk validasi
npm run build

# Menjalankan server lokal hasil build
npm run start
```
Buka [http://localhost:3000](http://localhost:3000) pada browser Anda.
