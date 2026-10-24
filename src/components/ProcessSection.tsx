'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'DISCOVER',
    desc: 'Deconstructing the core narrative, artistic research, moodboarding, and establishing chromatic tension.',
    tag: 'BRIEF • MOODS',
  },
  {
    num: '02',
    title: 'CONCEPTUALIZE',
    desc: 'Styleframes, variable typographic sketches, graybox 3D blocking, and camera angle testing.',
    tag: 'STYLEFRAMES',
  },
  {
    num: '03',
    title: 'DESIGN',
    desc: 'High-fidelity vector layouts, spatial composition, material texturing, and lighting passes.',
    tag: 'HI-FI ASSETS',
  },
  {
    num: '04',
    title: 'ANIMATE',
    desc: 'Spline velocity curves, physics simulation passes, audio reactive sync, and kinetic pacing.',
    tag: 'KEYFRAMING',
  },
  {
    num: '05',
    title: 'REFINE & DELIVER',
    desc: 'Master color grading, sound design polish, multi-format master encoding, and packaging.',
    tag: 'FINAL MASTER',
  },
];

const customEase = [0.25, 0.46, 0.45, 0.94] as const;

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });
  const timelineInView = useInView(timelineRef, { once: true, margin: '-60px' });

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Header Tag */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs tracking-[0.3em] uppercase mb-16"
        style={{ color: '#555555' }}
      >
        // 04 METHODOLOGY • STAGE BY STAGE
      </motion.p>

      {/* Title */}
      <div ref={titleRef} className="mb-8">
        {['CREATIVE', 'PROCESS'].map((word, i) => (
          <motion.div
            key={word}
            initial={{ opacity: 0, y: 50 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: customEase,
            }}
            className="overflow-hidden"
          >
            <h2
              className="font-mono text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.9] tracking-[-0.04em] uppercase"
              style={{ color: '#E8E8E8' }}
            >
              {word}
            </h2>
          </motion.div>
        ))}
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="font-mono text-sm md:text-base leading-relaxed max-w-3xl mb-24"
        style={{ color: '#888888' }}
      >
        A disciplined timeline orchestrating abstract concepts into high-precision, polished visual
        deliveries.
      </motion.p>

      {/* ========== DESKTOP HORIZONTAL TIMELINE ========== */}
      <div ref={timelineRef} className="hidden md:block">
        {/* Connecting Line */}
        <div className="relative mb-12">
          <div className="absolute top-4 left-0 right-0 h-px" style={{ backgroundColor: '#1A1A1A' }}>
            <motion.div
              initial={{ width: '0%' }}
              animate={timelineInView ? { width: '100%' } : {}}
              transition={{ duration: 1.8, ease: customEase, delay: 0.3 }}
              className="h-full"
              style={{ backgroundColor: '#00FF66' }}
            />
          </div>

          {/* Step Circles on the line */}
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={timelineInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.2,
                  ease: customEase,
                }}
                className="flex justify-center"
              >
                <div
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center font-mono text-[10px] font-bold"
                  style={{
                    borderColor: '#00FF66',
                    backgroundColor: '#0A0A0A',
                    color: '#00FF66',
                  }}
                >
                  {step.num}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Step Content Cards */}
        <div className="grid grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num + '-content'}
              initial={{ opacity: 0, y: 30 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.5 + i * 0.2,
                ease: customEase,
              }}
              className="text-center"
            >
              <h3
                className="font-mono text-sm font-bold tracking-[0.15em] uppercase mb-3"
                style={{ color: '#E8E8E8' }}
              >
                {step.title}
              </h3>
              <p
                className="font-mono text-[11px] leading-relaxed mb-4"
                style={{ color: '#888888' }}
              >
                {step.desc}
              </p>
              <span
                className="inline-block font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border"
                style={{
                  color: '#00FF66',
                  borderColor: 'rgba(0,255,102,0.25)',
                  backgroundColor: 'rgba(0,255,102,0.05)',
                }}
              >
                {step.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ========== MOBILE VERTICAL TIMELINE ========== */}
      <div className="md:hidden">
        <div className="relative">
          {/* Vertical connecting line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px"
            style={{ backgroundColor: '#1A1A1A' }}
          >
            <motion.div
              initial={{ height: '0%' }}
              animate={timelineInView ? { height: '100%' } : {}}
              transition={{ duration: 2, ease: customEase, delay: 0.2 }}
              className="w-full"
              style={{ backgroundColor: '#00FF66' }}
            />
          </div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.num + '-mobile'}
                initial={{ opacity: 0, x: -20 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.15,
                  ease: customEase,
                }}
                className="flex gap-6"
              >
                {/* Circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center font-mono text-[10px] font-bold"
                    style={{
                      borderColor: '#00FF66',
                      backgroundColor: '#0A0A0A',
                      color: '#00FF66',
                    }}
                  >
                    {step.num}
                  </div>
                </div>

                {/* Content */}
                <div className="pb-2">
                  <h3
                    className="font-mono text-sm font-bold tracking-[0.15em] uppercase mb-2"
                    style={{ color: '#E8E8E8' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-mono text-[11px] leading-relaxed mb-3"
                    style={{ color: '#888888' }}
                  >
                    {step.desc}
                  </p>
                  <span
                    className="inline-block font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border"
                    style={{
                      color: '#00FF66',
                      borderColor: 'rgba(0,255,102,0.25)',
                      backgroundColor: 'rgba(0,255,102,0.05)',
                    }}
                  >
                    {step.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-[0.02]"
          style={{
            background: 'radial-gradient(circle, #00FF66 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-0 left-1/3 w-px h-full opacity-[0.04]"
          style={{ backgroundColor: '#E8E8E8' }}
        />
        <div
          className="absolute top-0 left-2/3 w-px h-full opacity-[0.04]"
          style={{ backgroundColor: '#E8E8E8' }}
        />
      </div>
    </section>
  );
}
