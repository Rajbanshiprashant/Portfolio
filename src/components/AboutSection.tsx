'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  'Graphic Design',
  'Video Editing',
  'Motion Graphics',
  '3D Simulation',
  'Visual Storytelling',
];

const tools = [
  { name: 'PS', label: 'Photoshop', color: '#00F0FF' },
  { name: 'AI', label: 'Illustrator', color: '#FF2A85' },
  { name: 'AE', label: 'After Effects', color: '#A855F7' },
  { name: 'PR', label: 'Premiere Pro', color: '#00FF66' },
  { name: 'BL', label: 'Blender', color: '#FFE600' },
  { name: 'C4D', label: 'Cinema 4D', color: '#00F0FF' },
  { name: 'FIG', label: 'Figma', color: '#FF2A85' },
];

const pipelineStages = [
  {
    num: '01',
    stageTag: 'STAGE 01',
    tagColor: 'pink',
    title: 'PROLOGUE / DISCOVER (発見)',
    desc: 'Deconstructing core narrative, moodboards, chromatic tension, worldbuilding, and establishing stylistic anchors.',
  },
  {
    num: '02',
    stageTag: 'STAGE 02',
    tagColor: 'cyan',
    title: 'STORYBOARD / CONCEPT (絵コンテ)',
    desc: 'Styleframes, anime character concepts, kinetic sketches, typography blocking, and 3D camera testing.',
  },
  {
    num: '03',
    stageTag: 'STAGE 03',
    tagColor: 'yellow',
    title: 'KEYFRAME / DESIGN (原画)',
    desc: 'High-fidelity vector composition, 3D asset modeling, spatial lighting, and procedural shader passes.',
  },
  {
    num: '04',
    stageTag: 'STAGE 04',
    tagColor: 'purple',
    title: 'SAKUGA / ANIMATE (作画)',
    desc: 'Spline velocity curves, dynamic sakuga motion passes, laser VFX, particle dynamics, and audio-reactive pacing.',
  },
  {
    num: '05',
    stageTag: 'STAGE 05',
    tagColor: 'green',
    title: 'FINAL CUT / MASTER (完成)',
    desc: 'Studio grade color grading, chromatic aberration polish, multi-format 4K DCI master packaging, and sound design polish.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#070714] border-t border-[#1F1D3D] relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF2A85]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#00F0FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* =========================================
            LEFT COLUMN: I'M A VISUAL CREATIVE (PRASHANT)
           ========================================= */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Header Tag */}
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-[0.25em] text-[#FF2A85] uppercase font-bold">
              <span>PROFILE // 03 ARTIST MANIFESTO</span>
            </div>
            <h2 className="font-mono text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              I&apos;M A{' '}
              <span className="text-[#FF2A85] text-glow-pink">
                VISUAL CREATIVE
              </span>
            </h2>
          </div>

          {/* Profile Card with Photo */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative rounded-2xl border-2 border-[#1F1D3D] bg-[#0D0C1D] p-5 shadow-[0_10px_35px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            {/* Corner Decorative Accents */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#00F0FF]" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#FF2A85]" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#FFE600]" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#00F0FF]" />

            {/* Photo Container */}
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-black border border-[#2D2955] mb-4">
              <Image
                src="/profile.png"
                alt="Prashant Portrait"
                fill
                className="object-cover object-center grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />

              {/* Yellow Crosshair Accent */}
              <div className="absolute bottom-4 left-4 w-6 h-6 flex items-center justify-center font-bold text-lg text-[#FFE600]">
                +
              </div>

              {/* Hire Me CTA inside Photo */}
              <div className="absolute bottom-4 right-4">
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-full bg-[#FFE600] text-[#070714] font-mono text-[11px] font-extrabold tracking-wider uppercase hover:bg-white hover:shadow-[0_0_20px_#FFE600] transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>HIRE ME</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Profile Meta Info */}
            <div className="flex items-center justify-between text-xs font-mono">
              <div>
                <span className="font-bold text-white uppercase tracking-wider block">
                  PRASHANT
                </span>
                <span className="text-[10px] text-[#8E8EA8]">
                  PARIS, FR // GLOBAL REMOTE
                </span>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#00FF66]/15 text-[#00FF66] text-[10px] font-bold">
                AVAIL Q2
              </span>
            </div>
          </motion.div>

          {/* Bio text */}
          <p className="font-mono text-sm text-[#8E8EA8] leading-relaxed">
            Crafting immersive visual experiences across motion, identity, and spatial interfaces. Combining the adrenaline of Japanese anime aesthetics with high-precision engineering, procedural simulation, and visceral brand design for bold creators.
          </p>

          {/* Discipline Pills */}
          <div>
            <div className="font-mono text-[10px] tracking-widest text-[#FF2A85] uppercase font-bold mb-3">
              CORE DISCIPLINES:
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-full border border-[#1F1D3D] bg-[#0D0C1D] font-mono text-xs text-[#FFFFFF] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Creative Toolkit Matrix */}
          <div>
            <div className="font-mono text-[10px] tracking-widest text-[#FFE600] uppercase font-bold mb-3">
              CREATIVE TOOLKIT MATRIX:
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {tools.map((t) => (
                <div
                  key={t.name}
                  className="p-2.5 rounded-xl border border-[#1F1D3D] bg-[#0D0C1D] text-center hover:border-[#FF2A85] transition-all group"
                >
                  <div className="font-mono font-bold text-xs text-white group-hover:text-[#00F0FF]">
                    {t.name}
                  </div>
                  <div className="font-mono text-[8px] text-[#8E8EA8] truncate mt-0.5">
                    {t.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================
            RIGHT COLUMN: 5-STAGE ANIME PRODUCTION PIPELINE
           ========================================= */}
        <div id="pipeline" className="lg:col-span-7 space-y-8">
          
          {/* Header Tag & Title */}
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-[0.25em] text-[#00F0FF] uppercase font-bold">
              <span>AGILE METHODOLOGY // 5-STAGE PRODUCTION PIPELINE</span>
            </div>
            <h2 className="font-mono text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              5-STAGE ANIME PRODUCTION PIPELINE
            </h2>
            <p className="font-mono text-xs text-[#8E8EA8] mt-2">
              From narrative synopsis to 4K ultra-polished master deliveries.
            </p>
          </div>

          {/* Pipeline Stage Cards */}
          <div className="space-y-4">
            {pipelineStages.map((stage) => (
              <motion.div
                key={stage.num}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="relative rounded-2xl border border-[#1F1D3D] hover:border-[#00F0FF] bg-[#0D0C1D] p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_4px_25px_rgba(0,240,255,0.1)] group"
              >
                {/* Header row */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full border border-[#00F0FF] bg-[#00F0FF]/10 text-[#00F0FF] font-mono font-bold text-xs flex items-center justify-center">
                      {stage.num}
                    </span>
                    <h3 className="font-mono text-base sm:text-lg font-black text-white group-hover:text-[#00F0FF] transition-colors">
                      {stage.title}
                    </h3>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-widest uppercase ${
                      stage.tagColor === 'pink'
                        ? 'bg-[#FF2A85]/20 text-[#FF2A85] border border-[#FF2A85]/40'
                        : stage.tagColor === 'cyan'
                        ? 'bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/40'
                        : stage.tagColor === 'yellow'
                        ? 'bg-[#FFE600]/20 text-[#FFE600] border border-[#FFE600]/40'
                        : stage.tagColor === 'purple'
                        ? 'bg-[#A855F7]/20 text-[#A855F7] border border-[#A855F7]/40'
                        : 'bg-[#00FF66]/20 text-[#00FF66] border border-[#00FF66]/40'
                    }`}
                  >
                    {stage.stageTag}
                  </span>
                </div>

                {/* Description */}
                <p className="font-mono text-xs sm:text-sm text-[#8E8EA8] leading-relaxed pl-11">
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
