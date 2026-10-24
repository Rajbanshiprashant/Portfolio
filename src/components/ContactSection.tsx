'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const scopeOptions = ['3D DESIGN', 'MOTION SYS', 'VIDEO EDIT', 'FULL BRAND'];
const budgetOptions = ['€5K – €10K', '€10K – €25K', '€25K+'];

const dispatchChannels = [
  { name: 'Behance // Portfolio Vault', href: 'https://behance.net' },
  { name: 'Instagram // Daily R&D Motion', href: 'https://instagram.com' },
  { name: 'YouTube // Sakuga Visual Reels', href: 'https://youtube.com' },
  { name: 'LinkedIn // Direct Connect Hub', href: 'https://linkedin.com' },
];

export default function ContactSection() {
  const [selectedScope, setSelectedScope] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'IDLE' | 'TRANSMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: '',
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('prashant@kairos-studio.design');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) {
      setStatus('ERROR');
      setStatusMessage('ERROR // ALL REQUIRED FIELDS (NAME, EMAIL, BRIEF) MUST BE FILLED');
      return;
    }

    try {
      setStatus('TRANSMITTING');
      setStatusMessage('ENCRYPTING & UPLOADING TO MONGODB ARCHIVE...');

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          details: formData.details,
          scope: selectedScope,
          budget: selectedBudget,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('SUCCESS');
        setStatusMessage(
          data.savedToDatabase
            ? 'TRANSMISSION RECEIVED // STORED IN MONGODB ARCHIVE [SUCCESS]'
            : 'TRANSMISSION LOGGED // RECEIVED BY PRASHANT STUDIO [SUCCESS]'
        );
        setFormData({ name: '', email: '', details: '' });
        setSelectedScope(null);
        setSelectedBudget(null);
      } else {
        setStatus('ERROR');
        setStatusMessage(data.error || 'TRANSMISSION FAILED // PLEASE RETRY');
      }
    } catch {
      setStatus('ERROR');
      setStatusMessage('NETWORK DISRUPT // UNABLE TO REACH TRANSMISSION GATEWAY');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#070714] border-t border-[#1F1D3D] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF2A85]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1500px] mx-auto">
        
        {/* Header Tag */}
        <div className="flex items-center gap-2 mb-4 font-mono text-xs tracking-[0.25em] text-[#00F0FF] uppercase font-bold">
          <span>// INITIATE TRANSMISSION // GET IN TOUCH WITH PRASHANT</span>
        </div>

        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Big Statement & Email Card */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-1">
              <h2 className="font-mono text-5xl sm:text-7xl font-black uppercase tracking-tight text-white leading-[0.9]">
                HAVE AN
              </h2>
              <h2 className="font-mono text-5xl sm:text-7xl font-black uppercase tracking-tight text-white leading-[0.9]">
                IDEA?
              </h2>
              <h2 className="font-mono text-5xl sm:text-7xl font-black uppercase tracking-tight text-[#FFE600] text-glow-yellow leading-[0.9]">
                LET&apos;S MAKE
              </h2>
              <h2 className="font-mono text-5xl sm:text-7xl font-black uppercase tracking-tight text-[#FF2A85] text-glow-pink leading-[0.9] flex items-center gap-3">
                <span>IT MOVE!</span>
                <span className="text-[#00F0FF] text-4xl sm:text-6xl animate-pulse">✦</span>
              </h2>
            </div>

            <p className="font-mono text-sm sm:text-base text-[#8E8EA8] leading-relaxed max-w-xl">
              Available for select commissions, anime-inspired visuals, brand identity, motion direction, commercial edits, and speculative 3D installations. Let&apos;s make something legendary.
            </p>

            {/* Direct Email Card with One-Click Copy */}
            <div className="rounded-2xl border-2 border-[#FF2A85] bg-[#0D0C1D] p-5 shadow-[0_0_30px_rgba(255,42,133,0.2)]">
              <div className="text-[10px] font-mono tracking-widest text-[#00F0FF] font-bold uppercase mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
                <span>DIRECT TRANSMISSION CHANNEL:</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="font-mono text-sm sm:text-base font-bold text-white break-all">
                  prashant@kairos-studio.design
                </span>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-4 py-2 rounded-full bg-[#FF2A85] text-white font-mono text-[10px] font-bold tracking-wider uppercase hover:bg-white hover:text-[#070714] transition-all cursor-pointer shrink-0"
                >
                  {copied ? 'COPIED TO CLIPBOARD! ✓' : 'CLICK TO COPY 📋'}
                </button>
              </div>
            </div>

            {/* Dispatch Channels List */}
            <div className="space-y-3 pt-2">
              <div className="font-mono text-[10px] tracking-widest text-[#8E8EA8] uppercase font-bold">
                DISPATCH CHANNELS // CONNECT:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dispatchChannels.map((ch) => (
                  <a
                    key={ch.name}
                    href={ch.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-[#1F1D3D] hover:border-[#00F0FF] bg-[#0D0C1D] flex items-center justify-between font-mono text-xs text-[#8E8EA8] hover:text-[#00F0FF] transition-all group"
                  >
                    <span>{ch.name}</span>
                    <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Transmission Form (MongoDB Connected) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-[#1F1D3D] bg-[#0D0C1D] p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between pb-4 border-b border-[#1F1D3D] text-[10px] font-mono tracking-wider mb-6">
                <span className="text-[#00F0FF] font-bold">● INITIATE SECURE BRIEF</span>
                <span className="text-[#FFE600] font-bold">GATEWAY: MONGODB</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 font-mono">
                {/* Name */}
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-[#8E8EA8] mb-2 font-bold">
                    YOUR NAME:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Elena Rostova"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#1F1D3D] focus:border-[#FF2A85] bg-[#070714] text-white text-xs outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-[#8E8EA8] mb-2 font-bold">
                    EMAIL ADDRESS:
                  </label>
                  <input
                    type="email"
                    placeholder="elena@studio.xyz"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#1F1D3D] focus:border-[#FF2A85] bg-[#070714] text-white text-xs outline-none transition-colors"
                  />
                </div>

                {/* Primary Scope */}
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-[#8E8EA8] mb-2 font-bold">
                    PRIMARY SCOPE:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {scopeOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedScope(selectedScope === opt ? null : opt)}
                        className={`px-3.5 py-1.5 rounded-full text-[10px] tracking-wider uppercase font-bold border transition-all cursor-pointer ${
                          selectedScope === opt
                            ? 'bg-[#FF2A85] text-white border-[#FF2A85] shadow-[0_0_15px_rgba(255,42,133,0.5)]'
                            : 'bg-[#070714] text-[#8E8EA8] border-[#1F1D3D] hover:border-[#00F0FF] hover:text-[#00F0FF]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-[#8E8EA8] mb-2 font-bold">
                    ESTIMATED BUDGET:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedBudget(selectedBudget === opt ? null : opt)}
                        className={`px-3.5 py-1.5 rounded-full text-[10px] tracking-wider uppercase font-bold border transition-all cursor-pointer ${
                          selectedBudget === opt
                            ? 'bg-[#FFE600] text-[#070714] border-[#FFE600] shadow-[0_0_15px_rgba(255,230,0,0.5)]'
                            : 'bg-[#070714] text-[#8E8EA8] border-[#1F1D3D] hover:border-[#FFE600] hover:text-[#FFE600]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-[10px] tracking-widest uppercase text-[#8E8EA8] mb-2 font-bold">
                    PROJECT DETAILS / BRIEF:
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about the story, timeline, and aesthetic objectives..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#1F1D3D] focus:border-[#FF2A85] bg-[#070714] text-white text-xs outline-none transition-colors resize-none"
                  />
                </div>

                {/* Status Message */}
                <AnimatePresence>
                  {status !== 'IDLE' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`p-3 rounded-xl text-xs font-mono tracking-wider border ${
                        status === 'SUCCESS'
                          ? 'bg-[#00FF66]/10 border-[#00FF66] text-[#00FF66]'
                          : status === 'ERROR'
                          ? 'bg-[#FF4444]/10 border-[#FF4444] text-[#FF4444]'
                          : 'bg-white/5 border-white/20 text-white'
                      }`}
                    >
                      {statusMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit CTA Button */}
                <button
                  type="submit"
                  disabled={status === 'TRANSMITTING'}
                  className="w-full py-4 rounded-full bg-[#00F0FF] text-[#070714] font-mono text-xs font-black tracking-widest uppercase hover:bg-[#FF2A85] hover:text-white hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all duration-300 cursor-pointer disabled:opacity-50"
                >
                  {status === 'TRANSMITTING' ? 'TRANSMITTING...' : 'TRANSMIT INQUIRY 🚀'}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
