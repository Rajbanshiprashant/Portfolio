'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const heroEase = [0.16, 1, 0.3, 1] as const;

const socialLinks = [
  { name: 'Behance >', href: 'https://behance.net' },
  { name: 'Instagram >', href: 'https://instagram.com' },
  { name: 'YouTube >', href: 'https://youtube.com' },
  { name: 'LinkedIn >', href: 'https://linkedin.com' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 px-4 sm:px-6 lg:px-12 flex flex-col justify-between overflow-hidden bg-grid-cyber">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FF2A85]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1500px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col gap-6 z-10">
          
          {/* Top Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: heroEase }}
            className="flex items-center gap-3"
          >
            <span className="px-3 py-1 rounded bg-[#FF2A85]/15 border border-[#FF2A85]/40 text-[#FF2A85] font-mono text-[10px] tracking-widest uppercase font-bold">
              // PRASHANT STUDIO • 2025 EDITION
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] tracking-wider text-[#8E8EA8]">
              SYS.RENDER_PASS // REALTIME_GL
            </span>
          </motion.div>

          {/* Massive Display Title */}
          <div className="space-y-1 sm:space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: heroEase }}
              className="font-mono text-5xl sm:text-7xl md:text-8xl font-black tracking-tight uppercase leading-[0.9] text-white text-3d-glitch"
            >
              DESIGNING
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: heroEase }}
              className="font-mono text-5xl sm:text-7xl md:text-8xl font-black tracking-tight uppercase leading-[0.9] text-[#FF2A85] text-glow-pink"
            >
              BEYOND
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: heroEase }}
              className="font-mono text-5xl sm:text-7xl md:text-8xl font-black tracking-tight uppercase leading-[0.9] text-[#FFE600] text-glow-yellow"
            >
              THE FRAME!
            </motion.h1>
          </div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2 text-xs font-mono tracking-wider text-[#00F0FF]"
          >
            <span>MOTION GRAPHICS</span>
            <span className="text-[#FF2A85]">•</span>
            <span>3D DESIGN</span>
            <span className="text-[#FF2A85]">•</span>
            <span>VIDEO EDITING</span>
            <span className="text-[#FF2A85]">•</span>
            <span>UI/UX</span>
          </motion.div>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: heroEase }}
            className="font-mono text-sm sm:text-base text-[#8E8EA8] leading-relaxed max-w-xl"
          >
            Transforming complex concepts into motion, spatial identity, typography, and procedural visual systems. Exploring the boundary between design, technology, and futuristic digital experiences.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: heroEase }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#work"
              className="px-7 py-3 rounded-full bg-[#FF2A85] text-white font-mono text-xs font-bold tracking-widest uppercase hover:bg-[#FF2A85]/90 hover:shadow-[0_0_25px_rgba(255,42,133,0.7)] transition-all duration-300"
            >
              EXPLORE WORK &gt;
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-full bg-transparent border border-[#00F0FF] text-[#00F0FF] font-mono text-xs font-bold tracking-widest uppercase hover:bg-[#00F0FF]/15 hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all duration-300"
            >
              LET&apos;S COLLABORATE &gt;
            </a>
          </motion.div>
        </div>

        {/* Right Column: Cyber Radar & Holographic Contour Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: heroEase }}
          className="lg:col-span-5 relative"
        >
          {/* Main Showcase Card */}
          <div className="relative rounded-2xl border-2 border-[#00F0FF]/60 bg-[#0D0C1D] p-4 sm:p-6 shadow-[0_0_40px_rgba(0,240,255,0.15)] overflow-hidden">
            {/* Header telemetry badge */}
            <div className="flex items-center justify-between pb-4 border-b border-[#1F1D3D] text-[10px] font-mono tracking-wider">
              <span className="text-[#00F0FF] font-bold">● RADAR SPECTRUM // 01 KINETIC</span>
              <span className="text-[#FFE600] font-bold">SPATIAL R&amp;D</span>
            </div>

            {/* Radar Visual Display */}
            <div className="relative my-4 aspect-square w-full rounded-xl bg-[#080718] border border-[#1F1D3D] flex items-center justify-center overflow-hidden">
              {/* Radar Image Asset from Design */}
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <Image
                  src="/hero-radar.png"
                  alt="Topographical Contour Radar"
                  width={340}
                  height={340}
                  className="object-contain filter drop-shadow-[0_0_25px_rgba(0,240,255,0.4)]"
                  priority
                />
              </div>

              {/* Animated scanning radar cross-line */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(0, 240, 255, 0.25) 360deg)',
                  animation: 'spin 4s linear infinite',
                }}
              />

              {/* Glowing center beacon */}
              <div className="absolute w-3 h-3 rounded-full bg-[#FFE600] shadow-[0_0_15px_#FFE600] animate-pulse" />
            </div>

            {/* Inset Floating 3D Simulation Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-6 right-6 p-3 rounded-xl border border-[#FF2A85]/50 bg-[#13122B]/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.8)] max-w-[190px]"
            >
              <div className="text-[9px] font-mono tracking-wider text-[#FF2A85] font-bold mb-1">
                PROCEDURAL 3D SIM
              </div>
              <div className="text-[11px] font-mono text-white font-bold mb-1">
                KINETIC DYNAMICS
              </div>
              <div className="text-[9px] font-mono text-[#8E8EA8]">
                OCTANE • 60FPS • REALTIME
              </div>
            </motion.div>

            {/* Card Footer Telemetry */}
            <div className="pt-3 border-t border-[#1F1D3D] flex items-center justify-between text-[9px] font-mono tracking-wider text-[#8E8EA8]">
              <span className="text-[#00F0FF]">LAT 48.8566° N • LONG 2.3522° E</span>
              <span className="text-[#FFE600]">PARIS HUB</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Dispatch Socials Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="max-w-[1500px] w-full mx-auto pt-10 border-t border-[#1F1D3D] flex flex-wrap items-center justify-between gap-4 font-mono text-xs tracking-wider"
      >
        <span className="text-[10px] text-[#8E8EA8] uppercase tracking-widest">
          DISPATCH CHANNELS:
        </span>
        <div className="flex flex-wrap items-center gap-6">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-[#8E8EA8] hover:text-[#00F0FF] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Global CSS for spin */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
