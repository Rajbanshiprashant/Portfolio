'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 7, suffix: '+', label: 'YEARS ACTIVE PRACTICE' },
  { value: 48, suffix: '', label: 'PROJECTS DELIVERED' },
  { value: 4, suffix: '', label: 'AWARDS • FWA / AWWWARDS NOM' },
  { value: 100, suffix: '%', label: 'MOTION & 3D NATIVE' },
];

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target]);

  const display = target < 10 ? String(count).padStart(2, '0') : String(count);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="w-full border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`
                flex flex-col items-center text-center
                ${i < stats.length - 1 ? 'md:border-r md:border-border' : ''}
              `}
            >
              <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-mono text-accent tracking-tight leading-none glow-text">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </span>
              <span className="mt-3 text-[9px] md:text-[10px] tracking-[0.2em] text-muted font-mono uppercase leading-relaxed max-w-[180px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
