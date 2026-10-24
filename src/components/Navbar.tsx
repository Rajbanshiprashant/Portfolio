'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const telemetry = [
  { value: '07+', label: 'YEARS ACTIVE' },
  { value: '48+', label: 'PROJECTS' },
  { value: '04', label: 'AWARDS' },
  { value: '100%', label: 'SUCCESS' },
];

const navLinks = [
  { label: 'WORK', href: '#work' },
  { label: 'ABOUT', href: '#about' },
  { label: 'PIPELINE', href: '#pipeline' },
  { label: 'PLAYGROUND', href: '#playground' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [sfxOn, setSfxOn] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#070714]/85 border-b border-[#1F1D3D]"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Brand / Name */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#" className="flex items-center gap-2 group">
            {/* Cyberpunk Geometric Logo Icon */}
            <div className="w-8 h-8 rounded border border-[#FF2A85] bg-[#FF2A85]/10 flex items-center justify-center font-bold text-sm text-[#00F0FF] group-hover:shadow-[0_0_15px_#FF2A85] transition-all duration-300">
              P
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-sm sm:text-base font-extrabold tracking-[0.25em] text-white uppercase group-hover:text-[#00F0FF] transition-colors">
                  PRASHANT
                </span>
                <span className="text-xs text-[#FF2A85] font-bold">魂</span>
              </div>
              <div className="font-mono text-[9px] tracking-widest text-[#8E8EA8]">
                22.45° / PARIS • MOTION LAB
              </div>
            </div>
          </a>
        </div>

        {/* Center: Live Telemetry Bar (Desktop) */}
        <div className="hidden xl:flex items-center gap-6 border-x border-[#1F1D3D] px-6 py-1">
          {/* Status pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[10px] tracking-wider text-[#00F0FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping" />
            <span className="font-bold">STATUS: ACCEPTING COMMISSIONS</span>
          </div>

          {/* Mini Stats */}
          <div className="flex items-center gap-5 text-xs font-mono">
            {telemetry.map((t, i) => (
              <div key={i} className="flex items-baseline gap-1.5">
                <span className="font-bold text-[#FFE600]">{t.value}</span>
                <span className="text-[9px] tracking-wider text-[#8E8EA8] uppercase">{t.label}</span>
                {i < telemetry.length - 1 && <span className="text-[#1F1D3D] ml-2">•</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Right Actions: Navigation, SFX & Hire Me */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 text-[11px] font-mono tracking-widest text-[#8E8EA8]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#00F0FF] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* SFX Toggle */}
          <button
            onClick={() => setSfxOn(!sfxOn)}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#1F1D3D] bg-[#0D0C1D] text-[10px] font-mono tracking-wider text-[#8E8EA8] hover:border-[#FF2A85] hover:text-[#FF2A85] transition-all cursor-pointer"
            aria-label="Toggle SFX"
          >
            <span className={`w-1.5 h-1.5 rounded-full ${sfxOn ? 'bg-[#00FF66]' : 'bg-[#555470]'}`} />
            <span>SFX: {sfxOn ? 'ON' : 'OFF'}</span>
          </button>

          {/* Hire Me CTA Button */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFE600] text-[#070714] font-mono text-[11px] font-bold tracking-wider hover:bg-[#00F0FF] hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all duration-300 cursor-pointer"
          >
            <span>HIRE ME</span>
            <span className="text-xs">↗</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#8E8EA8] hover:text-white"
            aria-label="Open menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-[#1F1D3D] bg-[#070714] px-6 py-4 flex flex-col gap-3 font-mono text-sm"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-[#8E8EA8] hover:text-[#00F0FF] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#1F1D3D] flex items-center justify-between text-xs text-[#8E8EA8]">
              <span className="text-[#00F0FF]">● STATUS: AVAILABLE</span>
              <span>22.45° PARIS</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
