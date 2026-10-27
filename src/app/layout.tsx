import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { eventConfig } from "@/config/event";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: `${eventConfig.name} | SMP–SMK IDN Boarding School`,
  description: `${eventConfig.theme}. Diselenggarakan pada ${eventConfig.dateRange} di ${eventConfig.locationName}.`,
  keywords: [
    "Training Guru Nasional",
    "Pelatihan Guru 2026",
    "IDN Boarding School",
    "Robotika",
    "IoT",
    "Jaringan Komputer",
    "Artificial Intelligence",
    "Coding Guru",
    "Multimedia Pembelajaran",
    "Pendidikan Vokasi",
  ],
  authors: [{ name: "Panitia Training Guru Nasional 2026" }],
  openGraph: {
    title: `${eventConfig.name} - 2026`,
    description: `${eventConfig.theme}. Upgrade Your Skills. Inspire the Next Generation.`,
    url: "https://trainingguru2026.id",
    siteName: eventConfig.name,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: eventConfig.name,
    description: eventConfig.theme,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body className="min-h-screen bg-white font-sans text-text-main antialiased selection:bg-surface-subtle selection:text-primary">
        {children}
      </body>
    </html>
  );
}
