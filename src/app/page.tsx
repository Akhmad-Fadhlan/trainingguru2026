import Topbar from "@/components/Topbar";
import Hero from "@/components/Hero";
import PosterSection from "@/components/PosterSection";
import Countdown from "@/components/Countdown";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Schedule from "@/components/Schedule";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import ClosingCta from "@/components/ClosingCta";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* 1. Topbar */}
      <Topbar />

      <main id="main-content" className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Poster Resmi */}
        <PosterSection />

        {/* 4. Countdown Registrasi */}
        <Countdown />

        {/* 5. Tentang */}
        <About />

        {/* 6. Program Pelatihan */}
        <Programs />

        {/* 7. Jadwal Acara */}
        <Schedule />

        {/* 8. Lokasi */}
        <Location />

        {/* 9. Kontak */}
        <Contact />

        {/* 10. FAQ */}
        <Faq />

        {/* 11. CTA Penutup */}
        <ClosingCta />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
