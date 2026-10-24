'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

/* ─── LAB 01 — KINETIC MATRIX ─── */
function KineticMatrix() {
  const target = 'PRASHANT_魂';
  const [displayText, setDisplayText] = useState(target);
  const [isScrambling, setIsScrambling] = useState(false);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!?<>/{}~魂創動光';

  const scramble = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);
    let iteration = 0;
    const maxIterations = target.length;
    const interval = setInterval(() => {
      setDisplayText(
        target
          .split('')
          .map((char, i) => {
            if (char === '_') return '_';
            if (i < iteration) return target[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      iteration += 1 / 3;
      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(target);
        setIsScrambling(false);
      }
    }, 40);
  }, [isScrambling, target]);

  return (
    <div className="rounded-2xl border border-[#1F1D3D] hover:border-[#FF2A85] bg-[#0D0C1D] p-6 flex flex-col justify-between transition-all duration-300">
      <div className="flex items-center justify-between pb-4 border-b border-[#1F1D3D] text-[10px] font-mono tracking-wider">
        <span className="text-[#FF2A85] font-bold">LAB EXP_01 // KINETIC MATRIX DYNAMICS</span>
        <button
          onClick={scramble}
          disabled={isScrambling}
          className="px-3 py-1 rounded-full bg-[#FF2A85]/20 text-[#FF2A85] border border-[#FF2A85]/50 hover:bg-[#FF2A85] hover:text-white transition-all cursor-pointer disabled:opacity-50"
        >
          {isScrambling ? 'SCRAMBLING...' : 'SCRAMBLE 🎲'}
        </button>
      </div>

      <div className="py-12 flex flex-col items-center justify-center">
        <div className="relative">
          <h3 className="font-mono text-3xl sm:text-5xl font-black tracking-widest text-white text-glow-pink">
            {displayText}
          </h3>
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#FF2A85] to-transparent mt-2 opacity-60" />
        </div>
        <p className="font-mono text-[10px] text-[#8E8EA8] tracking-widest uppercase mt-4">
          HOVER OR CLICK BUTTON TO TRIGGER PROCEDURAL GLYPH ROTATION
        </p>
      </div>

      <div className="pt-4 border-t border-[#1F1D3D] flex items-center justify-between text-[9px] font-mono tracking-wider text-[#8E8EA8]">
        <span className="text-[#00F0FF]">DEFORMATION FREQ: 92 Hz</span>
        <span className="text-[#FFE600]">DSP STREAM ACTIVE</span>
      </div>
    </div>
  );
}

/* ─── LAB 02 — PARTICLE & FLUID PHYSICS ─── */
function ParticlePhysics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 120, mass: 0.8 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x * 0.7);
    mouseY.set(y * 0.7);
    setCoords({ x: Math.round(x), y: Math.round(y) });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="rounded-2xl border border-[#1F1D3D] hover:border-[#00F0FF] bg-[#0D0C1D] p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group"
    >
      <div className="flex items-center justify-between pb-4 border-b border-[#1F1D3D] text-[10px] font-mono tracking-wider">
        <span className="text-[#00F0FF] font-bold">LAB EXP_02 // PARTICLE &amp; FLUID PHYSICS</span>
        <span className="px-3 py-1 rounded-full bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30">
          PHYSICS: HOOKIAN
        </span>
      </div>

      <div className="py-12 flex flex-col items-center justify-center relative min-h-[160px]">
        {/* Interactive Spring Draggable Element */}
        <motion.div
          style={{ x: springX, y: springY }}
          className="px-6 py-3 rounded-full bg-[#FFE600] text-[#070714] font-mono text-xs font-black tracking-wider uppercase shadow-[0_0_25px_#FFE600] cursor-grab active:cursor-grabbing flex items-center gap-2"
        >
          <span>PULL ELEMENT // 🧲</span>
        </motion.div>

        <p className="font-mono text-[10px] text-[#8E8EA8] tracking-widest uppercase mt-6">
          MOVE CURSOR INSIDE CANVAS TO TEST DAMPED TENSION
        </p>
      </div>

      <div className="pt-4 border-t border-[#1F1D3D] flex items-center justify-between text-[9px] font-mono tracking-wider text-[#8E8EA8]">
        <span className="text-[#FFE600]">COORDINATES: X: {coords.x} Y: {coords.y}</span>
        <span className="text-[#00F0FF]">DAMPING: 0.125s • ELASTIC: 0.42</span>
      </div>
    </div>
  );
}

export default function Playground() {
  return (
    <section id="playground" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#070714] border-t border-[#1F1D3D]">
      <div className="max-w-[1500px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-[0.25em] text-[#FFE600] uppercase font-bold">
              <span>EXPERIMENTAL LAB // 02 INTERACTIVE SANDBOX</span>
            </div>
            <h2 className="font-mono text-4xl sm:text-6xl font-black uppercase tracking-tight text-white flex items-center gap-3">
              <span>MOTION PLAYGROUND</span>
              <span>🕹️</span>
            </h2>
          </div>

          <p className="font-mono text-xs text-[#8E8EA8] max-w-md leading-relaxed">
            Real-time algorithmic testbed. Try live dynamic typography, canvas waveforms, fluid shaders, and cursor-driven spring physics.
          </p>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <KineticMatrix />
          <ParticlePhysics />
        </div>
      </div>
    </section>
  );
}
