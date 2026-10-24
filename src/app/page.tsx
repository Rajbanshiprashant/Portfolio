import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SelectedWork from "@/components/SelectedWork";
import AboutSection from "@/components/AboutSection";
import Playground from "@/components/Playground";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070714] text-white overflow-x-hidden selection:bg-[#FF2A85] selection:text-[#00F0FF]">
      {/* Dynamic Interactive Cursor */}
      <CustomCursor />

      {/* Global Scroll Progress Bar */}
      <ScrollProgress />

      {/* Top Telemetry & Navigation Bar */}
      <Navbar />

      {/* Hero Section: Designing Beyond The Frame */}
      <HeroSection />

      {/* // 01 Archive: Featured Projects */}
      <SelectedWork />

      {/* // 03 Profile Manifesto + 5-Stage Anime Production Pipeline */}
      <AboutSection />

      {/* // 02 Interactive Sandbox: Motion Playground */}
      <Playground />

      {/* // 05 Initiate Transmission: Contact & Inquiries */}
      <ContactSection />

      {/* Minimal Tech Footer */}
      <Footer />
    </main>
  );
}
