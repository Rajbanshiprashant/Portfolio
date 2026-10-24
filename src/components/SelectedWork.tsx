'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Project {
  id: string;
  number: string;
  title: string;
  categoryTag: string;
  tagColor: 'pink' | 'cyan' | 'yellow' | 'purple';
  filterCategory: string;
  year: string;
  specs: string;
  description: string;
  image: string;
  hasPlayButton?: boolean;
}

const projects: Project[] = [
  {
    id: 'silent-noise',
    number: '01',
    title: 'SILENT NOISE',
    categoryTag: 'SPATIAL BRAND / 2024',
    tagColor: 'pink',
    filterCategory: 'spatial',
    year: '2024',
    specs: 'C4D • OCTANE • KINETIC TYPE',
    description: 'Multi-disciplinary spatial brand system integrating procedural typography, brutalist print architecture, and audio reactive 3D.',
    image: '/project-1.png',
  },
  {
    id: 'journey-within',
    number: '02',
    title: 'THE JOURNEY WITHIN',
    categoryTag: 'AUDIO VISUAL / 2024',
    tagColor: 'cyan',
    filterCategory: 'audio-visual',
    year: '2024',
    specs: 'DAVINCI • AFTER EFFECTS • 4K DCI',
    description: 'High-octane title sequence with bespoke typography, cinematic grain, and anime-inspired chromatic color grading.',
    image: '/project-2.png',
    hasPlayButton: true,
  },
  {
    id: 'fluid-motion',
    number: '03',
    title: 'FLUID MOTION 2.0',
    categoryTag: '3D DESIGN / 2024',
    tagColor: 'purple',
    filterCategory: '3d',
    year: '2024',
    specs: 'HOUDINI • REDSHIFT • NEURAL PHYSX',
    description: 'Procedural bioluminescent network simulation and ambient particle systems for speculative neuro-sensory experiences.',
    image: '/project-3.png',
  },
  {
    id: 'time-campaign',
    number: '04',
    title: 'TIME CAMPAIGN',
    categoryTag: 'MOTION CAMPAIGN / 2023',
    tagColor: 'yellow',
    filterCategory: 'motion',
    year: '2023',
    specs: 'TOUCHDESIGNER • PREMIERE • NOTCH',
    description: '3D motion and lighting choreography for Berlin underground bass record label with reactive laser projections.',
    image: '/project-4.png',
  },
  {
    id: 'fresh-vibes',
    number: '05',
    title: 'FRESH VIBES',
    categoryTag: 'VISUAL IDENTITY / 2023',
    tagColor: 'yellow',
    filterCategory: 'print',
    year: '2023',
    specs: 'PACKAGING • IDENT • VINYL ART',
    description: 'Hybrid packaging, experimental typographic identity, and custom foil-stamped art book slipcase architecture.',
    image: '/project-5.png',
  },
  {
    id: 'structures',
    number: '06',
    title: 'STRUCTURES 3.0',
    categoryTag: 'SPECIAL FX / 2024',
    tagColor: 'cyan',
    filterCategory: '3d',
    year: '2024',
    specs: 'BLENDER • OCTANE RAYTRACE • CAD',
    description: 'Hard-surface procedural dynamics, metal materials, and real-time raytraced octane passes exploring algorithmic forms.',
    image: '/project-6.png',
  },
];

const filters = [
  { label: 'ALL (06)', value: 'all' },
  { label: 'SPATIAL BRAND', value: 'spatial' },
  { label: 'AUDIO VISUAL', value: 'audio-visual' },
  { label: 'MOTION GRAPHICS', value: 'motion' },
  { label: '3D EXPERIMENTS', value: '3d' },
  { label: 'PRINT CAMPAIGNS', value: 'print' },
];

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.filterCategory === activeFilter);

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#070714] border-t border-[#1F1D3D] relative">
      <div className="max-w-[1500px] mx-auto">
        
        {/* Section Header & Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FFE600] animate-pulse" />
              <span className="font-mono text-xs tracking-[0.25em] text-[#FFE600] uppercase font-bold">
                // 01 ARCHIVE • SELECTED COMMISSIONS (06)
              </span>
            </div>
            <h2 className="font-mono text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white">
              FEATURED <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2A85] via-[#A855F7] to-[#00F0FF]">
                PROJECTS
              </span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-4 py-2 rounded-full font-mono text-[10px] sm:text-[11px] tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeFilter === f.value
                    ? 'bg-[#FF2A85] text-white shadow-[0_0_15px_rgba(255,42,133,0.5)]'
                    : 'bg-[#0D0C1D] text-[#8E8EA8] border border-[#1F1D3D] hover:border-[#00F0FF] hover:text-[#00F0FF]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, idx) => {
              // Row 1: First card takes 7 cols, second takes 5 cols.
              // Row 2: 6 cols each.
              // Row 3: 6 cols each.
              const colSpan = idx === 0 ? 'lg:col-span-7' : idx === 1 ? 'lg:col-span-5' : 'lg:col-span-6';

              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`${colSpan} group relative rounded-2xl border border-[#1F1D3D] hover:border-[#FF2A85] bg-[#0D0C1D] p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(255,42,133,0.15)] flex flex-col justify-between overflow-hidden`}
                >
                  {/* Top Header Row of Card */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-widest uppercase ${
                        p.tagColor === 'pink'
                          ? 'bg-[#FF2A85]/20 text-[#FF2A85] border border-[#FF2A85]/40'
                          : p.tagColor === 'cyan'
                          ? 'bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/40'
                          : p.tagColor === 'yellow'
                          ? 'bg-[#FFE600]/20 text-[#FFE600] border border-[#FFE600]/40'
                          : 'bg-[#A855F7]/20 text-[#A855F7] border border-[#A855F7]/40'
                      }`}
                    >
                      {p.categoryTag}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#8E8EA8]">
                      {p.year}
                    </span>
                  </div>

                  {/* Image / Thumbnail Preview */}
                  <div className="relative w-full aspect-video sm:aspect-[16/9] rounded-xl overflow-hidden bg-[#070714] border border-[#1F1D3D] mb-5">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Optional Play Button for Video/Audio Visual */}
                    {p.hasPlayButton && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-[#FFE600] text-[#070714] flex items-center justify-center shadow-[0_0_20px_#FFE600] group-hover:scale-110 transition-transform">
                          <svg className="w-5 h-5 ml-0.5 fill-current" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070714]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Card Content Footer */}
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <h3 className="font-mono text-xl sm:text-2xl font-black text-white group-hover:text-[#00F0FF] transition-colors">
                        {p.title}
                      </h3>
                      <span className="font-mono text-[10px] text-[#FFE600] tracking-wider uppercase">
                        {p.specs}
                      </span>
                    </div>

                    <p className="font-mono text-xs text-[#8E8EA8] leading-relaxed mb-4">
                      {p.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-[#1F1D3D] text-[10px] font-mono tracking-wider">
                      <span className="text-[#8E8EA8]">CASE STUDY // AVAILABLE</span>
                      <span className="text-[#00F0FF] group-hover:translate-x-1 transition-transform">
                        VIEW ASSET ↗
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
